import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";
import { router } from "./routes/Routes";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="max-w-[1440px] mx-auto font-nunito">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
