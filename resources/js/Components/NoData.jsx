import noDataImage from "../../../public/images/noData.png";

const NoData = () => {
    return (
        <div className="w-full mt-10 flex flex-col justify-center items-center gap-5">
            <img src={noDataImage} alt="alo" className="w-1/3" />
            <p className="capitalize text-primary font-semibold text-3xl">
                Data tidak ditemukan
            </p>
        </div>
    );
};
export default NoData;
