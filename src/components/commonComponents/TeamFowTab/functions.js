// functions.js
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import confetti from "canvas-confetti";
import felicidades from "./../../../assets/felicidades.png";
import motivacion from "./../../../assets/motivacion.png";
import * as XLSX from 'xlsx';
import profile from "./data";


export const handleImageClick = (percentage) => {
    const numericPercentage = parseInt(percentage, 10);

    if (numericPercentage < 100) {
        Swal.fire({
            imageUrl: motivacion,
            imagePadding: 0,
            imageMargin: 0,
            imageAlt: "Image of motivation",
            showConfirmButton: true,
            confirmButtonText: "Send",
            margin: 0,
            padding: 10,
            confirmButtonColor: "#426DA9",
            customClass: {
                confirmButton: "my-confirm-button",
                image: "image-modal",
            },
        });
    }

    if (numericPercentage === 100) {
        confetti({
            particleCount: 150,
            spread: 60,
        });

        Swal.fire({
            imageUrl: felicidades,
            imagePadding: 0,
            imageMargin: 0,
            imageAlt: "Image of congratulations",
            showConfirmButton: true,
            confirmButtonText: "Send",
            margin: 0,
            padding: 10,
            confirmButtonColor: "#426DA9",
            customClass: {
                confirmButton: "my-confirm-button",
                image: "image-modal",
            },
        });
    }
};

export const exportToExcel = (data) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "TeamFow");
    XLSX.writeFile(wb, "TeamFow.xlsx");
};

export const filteredProfile = (selectedCountry, selectedFow, selectedDate) => {
    return profile.filter(
        (user) => {
            const userDate = new Date(user.date);
            return (
                (selectedCountry !== "default" ? user.country === selectedCountry : true) &&
                (selectedFow !== "default" ? user.fow === selectedFow : true) &&
                (selectedDate ? userDate.getMonth() === selectedDate.getMonth() && userDate.getFullYear() === selectedDate.getFullYear() : true)
            );
        }
    );
};

export function CircularProgressBar({ percentage }) {
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    const color = Number(percentage) === 100 ? '#009F4D' : '#E4002B';  // Convierte percentage a número

    return (
        <svg width="50" height="50">
            <circle
                cx="25"
                cy="25"
                r={radius}
                stroke="#e0e0e0"
                strokeWidth="4"
                fill="transparent"
                strokeLinecap="round"
            />
            <circle
                cx="25"
                cy="25"
                r={radius}
                stroke={color}
                strokeWidth="4"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                fill="transparent"
                strokeLinecap="round"
            />
        </svg>
    );
}

