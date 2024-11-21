const LoadingSetting = () => {
    return (
        <div>
            <div className="grid grid-cols-5 gap-8 animate-pulse">
                <div className="col-span-5 xl:col-span-3">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-7 dark:border-strokedark animate-pulse">
                            <div className="h-4 bg-slate-300 dark:bg-body rounded"></div>
                        </div>
                        <div className="p-7">
                            <form>
                                {/* Nama */}
                                <div className="mb-5 animate-pulse">
                                    <div className="h-4 bg-slate-300 dark:bg-body rounded w-20 mb-3"></div>
                                    <div className="relative">
                                        <span className="absolute left-4 top-[12px]">
                                            <div className="w-6 h-6 bg-slate-300 dark:bg-body rounded-full"></div>
                                        </span>
                                        <div className="w-full rounded h-10 bg-slate-300 dark:bg-body"></div>
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="mb-5 animate-pulse">
                                    <div className="h-4 bg-slate-300 dark:bg-body rounded w-20 mb-3"></div>
                                    <div className="relative">
                                        <span className="absolute left-4 top-[12px]">
                                            <div className="w-6 h-6 bg-slate-300 dark:bg-body rounded-full"></div>
                                        </span>
                                        <div className="w-full rounded h-10 bg-slate-300 dark:bg-body"></div>
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div className="mb-5 animate-pulse">
                                    <div className="h-4 bg-slate-300 dark:bg-body rounded w-20 mb-3"></div>
                                    <div className="relative">
                                        <span className="absolute left-4 top-[12px]">
                                            <div className="w-6 h-6 bg-slate-300 dark:bg-body rounded-full"></div>
                                        </span>
                                        <div className="w-full rounded h-10 bg-slate-300 dark:bg-body"></div>
                                    </div>
                                </div>

                                {/* Bio */}
                                <div className="mb-5 animate-pulse rounded-lg">
                                    <div className="h-4 bg-slate-300 dark:bg-body rounded w-1/6 mb-3"></div>
                                    <div className="relative bg-slate-300 dark:bg-body rounded h-32">
                                        <div className="absolute left-4 top-4 h-6 w-6 rounded-full bg-gray-3 dark:bg-body"></div>
                                        <div className="w-full px-11 py-3 rounded bg-white dark:bg-body"></div>
                                    </div>
                                </div>

                                {/* Upload Image */}
                                <div className="mb-5 animate-pulse">
                                    <div className="h-4 bg-slate-300 dark:bg-body rounded w-1/4 mb-3"></div>
                                    <div
                                        id="imageUser"
                                        className="relative mb-5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-slate-300 dark:bg-body py-4 px-4 sm:py-7"
                                    >
                                        <div className="h-full bg-slate-300 dark:bg-body rounded">
                                            <div className="flex flex-col items-center justify-center space-y-3">
                                                <div className="h-10 w-10 bg-slate-300 dark:bg-body rounded mr-2 py-3 px-4"></div>
                                                <div className="h-4 bg-slate-300 dark:bg-body rounded w-1/2"></div>
                                                <div className="h-4 bg-slate-300 dark:bg-body rounded w-1/2"></div>
                                                <div className="h-4 bg-slate-300 dark:bg-body rounded w-1/3"></div>
                                                <div className="h-4 bg-slate-300 dark:bg-body rounded w-1/4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end gap-4 animate-pulse">
                                    <button className="h-10 bg-slate-300 dark:bg-body rounded w-16">
                                        &nbsp;
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 xl:col-span-2 animate-pulse">
                    <div className="rounded-sm border border-gray-3 dark:border-boxdark-2 bg-white shadow-md dark:bg-boxdark">
                        <div className="border-b border-gray-3 dark:border-boxdark-2 py-4 px-7">
                            <div className="h-4 bg-slate-300 dark:bg-body rounded w-1/2"></div>
                        </div>
                        <div className="p-7">
                            <div className="space-y-3">
                                <div className="h-4 bg-slate-300 dark:bg-body rounded w-1/4"></div>
                                <div className="h-10 bg-slate-300 dark:bg-body rounded"></div>
                                <div className="h-4 bg-slate-300 dark:bg-body rounded w-1/4"></div>
                                <div className="h-10 bg-slate-300 dark:bg-body rounded"></div>
                                <div className="h-4 bg-slate-300 dark:bg-body rounded w-1/4"></div>
                                <div className="h-10 bg-slate-300 dark:bg-body rounded"></div>
                            </div>
                            <div className="flex justify-end gap-4 mt-4">
                                <div className="w-20 h-10 bg-slate-300 dark:bg-body rounded inline-block"></div>
                                <div className="w-20 h-10 bg-slate-300 dark:bg-body rounded inline-block"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LoadingSetting;
