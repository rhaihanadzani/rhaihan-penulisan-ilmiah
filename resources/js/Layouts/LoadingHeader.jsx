const LoadingHeader = () => {
    return (
        <div className="flex items-center gap-4 animate-pulse">
            <span className="hidden lg:block">
                <div className="h-4 bg-gray-2 rounded w-[90px] my-1"></div>
                <div className="h-2 bg-gray-2 rounded w-[40px]"></div>
            </span>

            <span className="h-12 w-12 rounded-full">
                <div className="h-12 w-12 bg-gray-2 rounded-full"></div>
            </span>

            <svg className="hidden fill-current sm:block h-4 w-4">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                    fill=""
                ></path>
            </svg>
        </div>
    );
};
export default LoadingHeader;
