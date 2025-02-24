import { usePage } from "@inertiajs/react";
import userSix from "../../../../public/user/user-01.jpeg";
import DashboardLayoutAdmin from "@/Layouts/DashboardLayoutAdmin";
import CoverTasnim from "../../../../public/cover/bg-tasnim.jpg";

const Admin = () => {
    const { user } = usePage().props;

    const isUserImage = user.profile.image !== null;

    return (
        <DashboardLayoutAdmin>
            <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-background">
                <div className="relative z-20 h-35 md:h-65">
                    <img
                        src={CoverTasnim}
                        alt="profile cover"
                        className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                </div>
                <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
                    <div className="relative z-30 mx-auto -mt-24 h-32 w-full max-w-32 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
                        <div className="relative drop-shadow-2 flex flex-col justify-center items-center w-full h-full">
                            <img
                                src={
                                    isUserImage
                                        ? `/storage/public/profile/photo/${user.profile.image}`
                                        : userSix
                                }
                                alt="profile"
                                className=" w-full h-full object-cover object-center rounded-full"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                            {user.name}
                        </h3>
                        <p className="font-semibold uppercase text-primary">
                            -- {user.type == "Admin" ? "Admin" : ""} --
                        </p>

                        <div className="mx-auto max-w-[650px] mt-10">
                            <h4 className="font-semibold text-black dark:text-white">
                                About Me
                            </h4>
                            <p className="mt-5 text-center">
                                {user.profile.bio}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayoutAdmin>
    );
};
export default Admin;
