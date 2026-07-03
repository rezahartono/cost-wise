import React from "react";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: React.lazy(() => import("./shared/layouts/clean.layout")),
        children: [
            {
                path: "/",
                Component: React.lazy(() => import("./pages/splash-screen.page")),
            },
            {
                path: "/dashboard",
                Component: React.lazy(() => import("./pages/dashboard.page")),
            },
            {
                path: "/welcome",
                Component: React.lazy(() => import("./pages/welcome.page")),
            }
        ],
    },
]);