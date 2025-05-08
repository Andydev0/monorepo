import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserList } from './UserList';
import * as userService from '@/lib/services/userService';

jest.mock('./UserDeleteButton', () => ({
  __esModule: true,
  default: ({ id }: { id: string }) => <button>Deletar {id}</button>,
}));

jest.mock('@/lib/services/userService', () => ({
  getUsers: jest.fn(),
}));

describe('UserList', () => {
  const getUsersMock = userService.getUsers as jest.Mock;

  const createTestQueryClient = () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          staleTime: 0,
        },
      },
    });

  const renderList = () =>
    render(
      <QueryClientProvider client={createTestQueryClient()}>
        <UserList />
      </QueryClientProvider>
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should show loading initially', () => {
    getUsersMock.mockReturnValue(new Promise(() => {})); // nunca resolve
    renderList();
    expect(screen.getByText(/carregando/i)).toBeInTheDocument();
  });

  it('renders the user list after loading', async () => {
    getUsersMock.mockResolvedValue([
      { id: '1', name: 'Andy', email: 'andy@email.com' },
      { id: '2', name: 'Sung', email: 'sung@email.com' },
    ]);

    renderList();

    await waitFor(() => {
      expect(screen.getByText('Andy')).toBeInTheDocument();
      expect(screen.getByText('Sung')).toBeInTheDocument();
    });

    expect(screen.getAllByText('Editar')).toHaveLength(2);
    expect(screen.getByText('Deletar 1')).toBeInTheDocument();
    expect(screen.getByText('Deletar 2')).toBeInTheDocument();
  });
});
