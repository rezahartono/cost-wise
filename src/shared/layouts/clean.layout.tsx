import { Outlet } from "react-router";

export default function CleanLayout() {
    return (
        <div className="h-screen">
            <Outlet />
        </div>
    )
}