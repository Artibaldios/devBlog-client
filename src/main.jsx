import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter} from "react-router";
import './index.css';
import Homepage from './routes/Homepage.jsx';
import PostlistPage from './routes/PostListPage.jsx';
import SinglePostPage from './routes/SinglePostPage.jsx';
//import WritePage from './routes/WritePage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import RegisterPage from './routes/RegisterPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// import { ToastContainer } from "react-toastify";
// import "react-toastify/ReactToastify.css";
const queryClient = new QueryClient()
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Homepage/>
      },
      {
        path: "/posts",
        element: <PostlistPage/>
      },
      {
        path: "/:slug",
        element: <SinglePostPage/>
      },
      {
        path: "/register",
        element: <RegisterPage/>
      },
      // {
      //   path: "/write",
      //   element: <WritePage/>
      // },
      {
        path: "/login",
        element: <LoginPage/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>,
)
