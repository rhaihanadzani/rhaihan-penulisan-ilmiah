import DashboardLayout from "@/Layouts/Dashboard";
import DashboardLayoutAdmin from "@/Layouts/DashboardLayoutAdmin";
import DashboardLayoutUser from "@/Layouts/DashboardLayoutUser";
import LengkapiData from "./Partial/LengkapiData";
import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import LoadingSetting from "./Partial/LoadingSetting";

const Index = () => {
    const { auth, user } = usePage().props;
    console.log(user);

    let Layout;

    if (auth.user.type === "Admin") {
        Layout = DashboardLayoutAdmin;
    } else if (auth.user.type === "Ustadz") {
        Layout = DashboardLayout;
    } else if (auth.user.type === "Users") {
        Layout = DashboardLayoutUser;
    } else {
        Layout = DashboardLayoutUser;
    }

    return (
        <Layout>
            <div>
                <LengkapiData dataUser={user} />
            </div>
        </Layout>
    );
};
export default Index;
