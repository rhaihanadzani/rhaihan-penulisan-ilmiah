export default function PrimaryButton({
    type = "submit",
    className = "",
    processing,
    children,
    onClick,
}) {
    return (
        <button
            type={type}
            onClick={onClick ? onClick : null}
            className={
                `inline-flex items-center px-4 py-4 bg-primary border border-transparent rounded-md font-semibold text-base text-white uppercase -tracking-tight hover:bg-primary/90 focus:bg-primary active:bg-primary focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    processing && "opacity-25"
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
