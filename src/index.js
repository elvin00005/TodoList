import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import Main from "./pages/Main";
import TodoList from "./pages/TodoList";
import store from "./store";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  {
    path: "/todolist",
    element: <TodoList />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
