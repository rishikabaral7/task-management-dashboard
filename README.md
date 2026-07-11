# Task Management Dashboard

A modern **Task Management Dashboard** built using **Next.js, TypeScript, Tailwind CSS, shadcn/ui, Redux Toolkit, RTK Query, Redux Persist, next-themes, and Framer Motion**.

The application allows users to authenticate, manage tasks, search and filter tasks, view dashboard statistics, and interact with a responsive modern user interface.

---

# Features

## Authentication (Mock)

- Login using email and password
- Mock authentication flow
- Authentication state managed using Redux Toolkit
- Authentication persistence using Redux Persist
- Logout functionality
- Protected dashboard access

---

# Dashboard

The dashboard displays reusable summary cards for:

- Total Tasks
- Completed Tasks
- Pending Tasks
- High Priority Tasks

Reusable components are created to maintain consistency and avoid duplicate code.

---

# Task Management

Complete CRUD functionality is implemented.

Users can:

- View task list
- View task details
- Create tasks
- Edit tasks
- Delete tasks

Each task contains:

- Title
- Description
- Status
- Priority
- Due Date

---

# Search and Filters

Task management supports:

- Search by task title
- Filter by status
- Filter by priority
- Sort by due date

Filtering and sorting are handled on the client side using Redux state.

---

# Theme Support

Implemented using **next-themes**.

Features:

- Light mode
- Dark mode
- Theme toggle
- Persist selected theme preference

---

# State Management

## Redux Toolkit

Redux Toolkit is used for managing global application state.

Managed states:

- Authentication state
- UI state
- Task filters
- Selected task

---

## RTK Query

RTK Query is used for API integration and server state management.

Implemented operations:

- Fetch tasks
- Create tasks
- Update tasks
- Delete tasks

RTK Query handles:

- API requests
- Caching
- Loading states
- Error handling

---

## Redux Persist

Redux Persist is used for storing persistent application state.

Persisted data:

- Authentication state
- User preferences
- Filter settings

Not persisted:

- RTK Query API cache

---

# Animations

Framer Motion is used to improve user experience.

Implemented animations include:

- Page transitions
- Modal animations
- Task card animations
- Hover interactions
- Smooth loading transitions
- List item animations

Animations are designed to improve usability without excessive effects.

---

# Responsive Design

The application is responsive across:

- Mobile devices
- Tablets
- Desktop screens

Responsive layouts are implemented using Tailwind CSS utilities.

---

# Loading and Error Handling

The application handles:

- Loading states
- Empty states
- API errors
- Network failures

Users receive proper feedback during different application states.

---

# Technology Stack

## Frontend

- Next.js (App Router)
- TypeScript
- React
- Tailwind CSS
- shadcn/ui

## State Management

- Redux Toolkit
- RTK Query
- Redux Persist

## UI and UX

- Framer Motion
- next-themes
- Lucide React

## Development Tools

- ESLint
- Prettier
- Git
- GitHub

---

# Installation Instructions

## Clone Repository

```bash
git clone <repository-url>
```

## Navigate to Project

```bash
cd task-management-dashboard
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Application will run at:

```
http://localhost:3000
```

---

# Environment Variables

Create a `.env.local` file in the root directory if environment variables are required.

Example:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

Currently, the project uses mock API data/configuration.

---

# Project Structure

```
src/
│
├── app/
│   ├── login/
│   ├── dashboard/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── DashboardLayout.tsx
│   │
│   ├── common/
│   │   ├── Loading.tsx
│   │   ├── EmptyState.tsx
│   │   └── ErrorState.tsx
│   │
│   └── tasks/
│       ├── TaskCard.tsx
│       ├── TaskList.tsx
│       ├── TaskForm.tsx
│       └── TaskDialog.tsx
│
├── components/ui/
│   └── shadcn components
│
├── features/
│   ├── auth/
│   │   └── authSlice.ts
│   │
│   ├── tasks/
│   │   └── taskSlice.ts
│   │
│   └── filters/
│       └── filterSlice.ts
│
├── services/
│   └── taskApi.ts
│
├── store/
│   ├── store.ts
│   ├── provider.tsx
│   └── persist.ts
│
├── hooks/
│   └── reduxHooks.ts
│
├── types/
│   └── task.ts
│
├── constants/
│
├── utils/
│
└── lib/
```

---

# Libraries Used

| Library | Purpose |
|---|---|
| Next.js | React framework using App Router |
| TypeScript | Type safety and better development experience |
| Tailwind CSS | Styling and responsive layouts |
| shadcn/ui | Reusable UI components |
| Redux Toolkit | Global state management |
| RTK Query | API integration and caching |
| Redux Persist | Persistent Redux state |
| next-themes | Light/Dark theme management |
| Framer Motion | UI animations |
| React Hook Form | Form handling |
| Zod | Form validation |
| Lucide React | Icons |

---

# Component Architecture

The project follows a modular and scalable component architecture.

Reusable components include:

- Button
- Card
- Dialog
- Input
- Select
- Badge
- Loading Component
- Empty State Component
- Error State Component

This improves:

- Code reusability
- Maintainability
- Scalability

---

# Assumptions

- Authentication is implemented as mock authentication because no real authentication backend was required.
- Task data is handled through a mock API.
- Users can access the dashboard after successful login.
- Client-side filtering is used because API query filtering is optional.
- Redux Persist stores authentication and user preferences locally.

---

# Known Limitations

- No production authentication system is implemented.
- Backend API is mocked.
- Real-time task synchronization is not implemented.
- Role-based permissions are not included.

---

# Future Improvements

Possible improvements:

- Real backend authentication
- Role-based access control
- Pagination
- Infinite scrolling
- Drag and drop task ordering
- Optimistic updates
- Automated testing with Playwright/Cypress
- Accessibility improvements

---

# Git Commit History

The project follows meaningful commits:

```
setup nextjs typescript project

configure tailwind and shadcn ui

add redux toolkit store

implement authentication flow

add task management CRUD

integrate RTK Query

add redux persist

add theme support

improve responsive dashboard UI
```

---

# Author

Rishika Baral

Frontend Engineer Take-Home Assignment