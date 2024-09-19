import { Outlet } from "react-router-dom";
import UserHeader from "./header";

function UserPanel(){
    return(
        <div className="flex flex-col bg-white overflow-hidden">
            <UserHeader></UserHeader>
            <main className="flex flex-col w-full">
                <Outlet></Outlet>
            </main>
        </div>
    )
}
export default UserPanel;