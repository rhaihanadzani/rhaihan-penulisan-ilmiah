import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const formatDate = (date) => {
    if (!date) return "";

    const createdDate = new Date(date);

    if (isNaN(createdDate.getTime())) {
        return "Invalid Date";
    }

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        // hour: "numeric",
        // minute: "numeric",
        // second: "numeric",
        timeZone: "Asia/Jakarta",
    };

    return new Intl.DateTimeFormat("id-ID", options).format(createdDate);
};

export function formatToRupiah(number) {
    // Convert number to string and ensure it has two decimal places
    let numberString = number.toFixed(2).toString();

    // Split the string into whole number and decimal parts
    let [whole] = numberString.split(".");

    // Add commas as thousand separators
    whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Combine the whole number part with the decimal part and add the Rupiah symbol
    return "Rp " + whole;
}

// components/SortAbsen.js

export const SortAbsen = ({ absen, children }) => {
    const sortedAbsen = [...absen].sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );

    return children(sortedAbsen);
};

export default SortAbsen;
