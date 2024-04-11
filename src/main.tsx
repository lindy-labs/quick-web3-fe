import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from "@tanstack/react-router";
import Homepage from './components/ui/Homepage.tsx';

const rootRoute = new RootRoute({
  component: () => <App />,
});

const defaultRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <>
      <Homepage />
    </>
  ),
});

const routeTree = rootRoute.addChildren([defaultRoute]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);