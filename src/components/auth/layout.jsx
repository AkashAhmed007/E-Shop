import { Outlet } from "react-router-dom";

function AuthLayout(){
    return (
        <div className="flex w-full min-h-screen bg-slate-600">
            <div className="hidden lg:flex justify-center items-center px-12 w-1/2 bg-black">
             <div className="max-w-md text-center text-primary-foreground space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight">Welcome to E-commerce Shop</h1>
             </div>
            </div>
            <div className="flex flex-1 bg-background justify-center items-center px-4 py-12 sm:px-6 lg:px-8">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default AuthLayout;