import { Mail } from "lucide-react";

const ChangePassword = ({ isLoading, setIsLoading, dataUser }) => {
    return (
        <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Change Password
                    </h3>
                </div>
                <div className="p-7">
                    <form action="#">
                        {/* input */}
                        <div className="mb-5">
                            <label
                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                htmlFor="emailAddress"
                            >
                                Email Address
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-[12px]">
                                    <Mail className="text-primary" />
                                </span>
                                <input
                                    className="w-full rounded border border-stroke bg-gray py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                    type="email"
                                    name="emailAddress"
                                    id="emailAddress"
                                    placeholder="devidjond45@gmail.com"
                                    defaultValue="devidjond45@gmail.com"
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label
                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                htmlFor="emailAddress"
                            >
                                Email Address
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-[12px]">
                                    <Mail className="text-primary" />
                                </span>
                                <input
                                    className="w-full rounded border border-stroke bg-gray py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                    type="email"
                                    name="emailAddress"
                                    id="emailAddress"
                                    placeholder="devidjond45@gmail.com"
                                    defaultValue="devidjond45@gmail.com"
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label
                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                htmlFor="emailAddress"
                            >
                                Email Address
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-[12px]">
                                    <Mail className="text-primary" />
                                </span>
                                <input
                                    className="w-full rounded border border-stroke bg-gray py-3 pl-11 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                    type="email"
                                    name="emailAddress"
                                    id="emailAddress"
                                    placeholder="devidjond45@gmail.com"
                                    defaultValue="devidjond45@gmail.com"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end gap-4.5">
                            <button
                                className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                                type="submit"
                            >
                                Cancel
                            </button>
                            <button
                                className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                                type="submit"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default ChangePassword;
