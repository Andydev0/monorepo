<div align="center">

# 🚀 Projeto Fullstack com Monorepo

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-11-ea2845?style=for-the-badge&logo=nestjs)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker)](https://www.docker.com/)
[![Turborepo](https://img.shields.io/badge/Turborepo-Monorepo-000000?style=for-the-badge&logo=vercel)](https://turbo.build/)

</div>

## 📋 Sobre o Projeto

Este projeto é uma aplicação fullstack organizada em **monorepo** com **Turborepo**, utilizando **Next.js 15** no frontend e **NestJS + Prisma** no backend. A arquitetura segue o modelo **feature-based**, com foco em **manutenibilidade**, **escalabilidade** e **produtividade**, preparada para ambientes com **Docker** e com ótima experiência de desenvolvimento local.

## 💡 Visão Geral da Arquitetura

<div align="center">

![Desenho da arquitetura](./arq.png)

</div>

> Este diagrama mostra um resumo dos componentes do projeto


## 🚀 Tecnologias Utilizadas

<table>
  <tr>
    <th>Frontend <code>apps/web</code></th>
    <th>Backend <code>apps/backend</code></th>
  </tr>
  <tr>
    <td>
      <ul>
        <li>✅ <a href="https://nextjs.org/docs/app/building-your-application/routing">Next.js 15 (App Router)</a></li>
        <li>✅ <a href="https://react.dev/">React 19</a></li>
        <li>✅ <a href="https://tanstack.com/query/latest">TanStack React Query v5</a></li>
        <li>✅ <a href="https://www.typescriptlang.org/">TypeScript</a></li>
        <li>✅ Testes com <a href="https://jestjs.io/">Jest</a> e <a href="https://testing-library.com/">React Testing Library</a></li>
      </ul>
    </td>
    <td>
      <ul>
        <li>✅ <a href="https://docs.nestjs.com/">NestJS 11</a></li>
        <li>✅ <a href="https://www.prisma.io/">Prisma ORM</a></li>
        <li>✅ <a href="https://redis.io/">Redis</a> para caching</li>
        <li>✅ Banco de dados PostgreSQL via Docker</li>
        <li>✅ Testes: unitários, integração e e2e com Jest</li>
      </ul>
    </td>
  </tr>
</table>

---

## 📁 Estrutura do Projeto

```
📦 monorepo
 ┣ 📂 apps
 ┃ ┣ 📂 backend         ← API REST com NestJS, Prisma, Redis
 ┃ ┣ 📂 docs            ← Documentação
 ┃ ┗ 📂 web             ← Aplicação Next.js com React Query e SSR
 ┣ 📂 packages
 ┃ ┣ 📂 ui              ← Componentes reutilizáveis (design system)
 ┃ ┣ 📂 eslint-config   ← Configurações compartilhadas de ESLint
 ┃ ┗ 📂 typescript-config ← Configuração base de TypeScript
 ┗ 📜 docker-compose.yml
```

> 💡 A estrutura adota o padrão **feature-based**, onde cada domínio possui sua própria pasta com componentes, serviços e testes.
> 
> Exemplo: `users/components/UserForm.tsx`, `users/components/UserForm.test.tsx`, etc.

---

## 💡 Decisões de Arquitetura

<table>
  <tr>
    <td width="50px" align="center"><strong>🔄</strong></td>
    <td><strong>Monorepo com Turborepo</strong>: unifica o desenvolvimento de frontend, backend e pacotes compartilhados. Proporciona caching inteligente e execução paralela, acelerando builds e testes.</td>
  </tr>
  <tr>
    <td width="50px" align="center"><strong>🧩</strong></td>
    <td><strong>Feature-based architecture</strong>: melhora a coesão e separação de responsabilidades por domínio, facilitando escalar, testar e manter.</td>
  </tr>
  <tr>
    <td width="50px" align="center"><strong>🐳</strong></td>
    <td><strong>Docker + Docker Compose</strong>: garante ambientes consistentes para desenvolvimento, testes e produção.</td>
  </tr>
  <tr>
    <td width="50px" align="center"><strong>📝</strong></td>
    <td>
      <strong>Geração de tipos Prisma dentro e fora do Docker</strong>:
      <ul>
        <li>Dentro do Docker: necessário para execução do backend.</li>
        <li>Fora do Docker: melhora a experiência com tipagem no VSCode.</li>
      </ul>
    </td>
  </tr>
</table>

> Essa estrutura torna o projeto altamente manutenível e escalável, promovendo produtividade com ambientes padronizados e automatizados.

---

## 🛠️ Pré-requisitos

<div align="center">

| Requisito | Versão | Link |
|:--------:|:------:|:----:|
| **Docker + Docker Compose** | Última versão | [🔗 Instalação](https://docs.docker.com/compose/install/) |
| **PNPM** | Última versão | [🔗 Instalação](https://pnpm.io/) |
| **Node.js** | v18 ou superior | [🔗 Instalação](https://nodejs.org/) |

</div>

---

## 🌐 Variáveis de Ambiente

<details>
<summary><strong>📋 Clique para ver a configuração das variáveis de ambiente</strong></summary>

Antes de qualquer comando, configure as variáveis de ambiente:

```bash
cp .env.example .env
cp apps/backend/.env.local.example apps/backend/.env.local
cp apps/web/.env.local.example apps/web/.env.local
```

<table>
  <tr>
    <th>apps/backend/.env.local</th>
    <th>apps/web/.env.local</th>
    <th>.env (raiz do projeto)</th>
  </tr>
  <tr>
    <td>

```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=app
DATABASE_URL=postgres://postgres:postgres@localhost:5432/app

REDIS_HOST=localhost
REDIS_PORT=6379

JWT_SECRET=secret-example
```

</td>
<td>

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

</td>
<td>

```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=app
DATABASE_URL=postgres://postgres:postgres@postgres:5432/app

REDIS_HOST=redis
REDIS_PORT=6379

JWT_SECRET=secret-example
```

</td>
  </tr>
</table>
</details>

---

## ⚙️ Como rodar o projeto

<div align="center">

### Passos rápidos para iniciar

</div>

<table>
  <tr>
    <td width="50px" align="center"><h3>1</h3></td>
    <td>
      <strong>Clone o projeto</strong>
      <pre><code>git clone https://github.com/Andydev0/monorepo.git
cd monorepo</code></pre>
    </td>
  </tr>
  <tr>
    <td width="50px" align="center"><h3>2</h3></td>
    <td>
      <strong>Instale as dependências</strong>
      <pre><code>pnpm install</code></pre>
    </td>
  </tr>
  <tr>
    <td width="50px" align="center"><h3>3</h3></td>
    <td>
      <strong>Inicie a infraestrutura</strong>
      <pre><code>docker-compose up -d</code></pre>
      <blockquote>
        <p>Isso irá iniciar:</p>
        <ul>
          <li>Banco de dados PostgreSQL</li>
          <li>Redis</li>
          <li>Backend (porta <code>3001</code>)</li>
          <li>Frontend (porta <code>3000</code>)</li>
        </ul>
      </blockquote>
    </td>
  </tr>
  <tr>
    <td width="50px" align="center"><h3>4</h3></td>
    <td>
      <strong>Acesse a aplicação</strong>
      <ul>
        <li>Frontend: <a href="http://localhost:3000">http://localhost:3000</a></li>
        <li>Backend (API): <a href="http://localhost:3001/users">http://localhost:3001/users</a></li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50px" align="center"><h3>5</h3></td>
    <td>
      <strong>Gere tipos Prisma localmente (opcional)</strong>
      <pre><code>pnpm --filter backend prisma:generate:local</code></pre>
      <blockquote>
        <p>Apenas necessário fora do Docker para que o VSCode reconheça os tipos corretamente.</p>
      </blockquote>
    </td>
  </tr>
</table>

---

## ✅ Rodando os testes

<div align="center">

| Componente | Comando | Descrição |
|:----------:|:--------|:----------|
| **Backend** | `pnpm --filter backend test` | Testes unitários e integração |
| **Backend** | `pnpm --filter backend test:e2e` | Testes end-to-end (requer Docker rodando) |
| **Frontend** | `pnpm --filter web test` | Testes com saída detalhada |
| **Frontend** | `pnpm --filter web test:coverage` | Testes com relatório de cobertura |

</div>

---

## ✨ Destaques do Projeto

<div align="center">

| 🌟 | Destaque |
|:---:|:---------|
| 🏗️ | Organização baseada em **features/domínios** para clareza e manutenção |
| 📦 | Projeto estruturado em **monorepo** com **Turborepo** para ganho de performance e consistência |
| 🔄 | **SSR com React Query** (`dehydrate/hydrate`) para melhor experiência de usuário |
| 📝 | Tipagem forte com Prisma, funcional no runtime (Docker) e no desenvolvimento (local) |
| 🚀 | Integração com Redis para caching eficiente |
| ✅ | Testes cobrindo backend, frontend e integrações |
| 🐳 | Ambiente totalmente orquestrado com Docker Compose para simular produção |

</div>

---

## 📌 Considerações Finais

<div align="center">

### Este projeto foi pensado para proporcionar:

</div>

<table>
  <tr>
    <td width="50px" align="center">🔧</td>
    <td width="200px"><strong>Manutenibilidade</strong></td>
    <td>Arquitetura modular e escalável por domínio (feature-based)</td>
  </tr>
  <tr>
    <td width="50px" align="center">⚡</td>
    <td width="200px"><strong>Produtividade</strong></td>
    <td>Tipagem forte com Prisma + tooling local + testes bem definidos</td>
  </tr>
  <tr>
    <td width="50px" align="center">📈</td>
    <td width="200px"><strong>Escalabilidade</strong></td>
    <td>Estrutura preparada para múltiplas aplicações no monorepo com compartilhamento de pacotes reutilizáveis (como <code>ui</code>, <code>eslint-config</code>, etc)</td>
  </tr>
  <tr>
    <td width="50px" align="center">🔄</td>
    <td width="200px"><strong>Ambientes previsíveis</strong></td>
    <td>Docker + Docker Compose garantem que todos tenham o mesmo setup</td>
  </tr>
</table>

<br>

> A escolha do **Turborepo** se deu pela capacidade de cache inteligente entre tarefas (como testes, builds e lints), além da simplicidade de orquestrar projetos separados como `web`, `backend` e `packages`. Toda a estrutura está voltada a facilitar a evolução contínua com testes, consistência e performance.

<div align="center">

---

<h3>🚀 Projeto desenvolvido com ❤️ e boas práticas de engenharia</h3>

</div>

