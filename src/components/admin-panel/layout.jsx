import { Outlet } from "react-router-dom";
import AdminHeader from "./header";
import AdminSidebar from "./sidebar";

function AdminPanel (){
    return(
        <div className="flex min-h-screen w-full">
            <AdminSidebar/>
            <div className="flex flex-col flex-1">
            <AdminHeader/>
                <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    )
}

export default AdminPanel;