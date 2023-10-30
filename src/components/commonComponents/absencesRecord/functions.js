import * as XLSX from 'xlsx';
import React from 'react';
import DatePicker from 'react-datepicker';
import { BiSearchAlt } from 'react-icons/bi';
import exportbutton from "./../../../assets/teamFow/exportbutton.png";
import "./absencesRecord";

export const handleDateChange = (date, setSelectedDate) => {
    setSelectedDate(date);
};

export const handleRequest = (e, setSelectedRequest) => {
    setSelectedRequest(e.target.value);
};


export const exportToExcel = (filteredData) => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "AbsencesRecord");
    XLSX.writeFile(wb, "AbsencesRecord.xlsx");
};

export const filterData = (selectedRequest, searchValue, selectedDate, requests) => {
    const selectedYear = selectedDate.getFullYear();
    const selectedMonth = selectedDate.getMonth();

    return requests.filter(request =>
        (selectedRequest !== "default" ? request.requestType === selectedRequest : true) &&
        (searchValue ? request.id.includes(searchValue) : true) &&
        (new Date(request.date).getMonth() === selectedMonth && new Date(request.date).getFullYear() === selectedYear)
    );
};


export function getApprovedClasses(status) {
    if (status === 'Approved') {
        return 'text-white bg-approve border-approve';
    } else {
        return 'text-custom-gray bg-white border-custom-gray';
    }
}

export function getDeclinedClasses(status) {
    if (status === 'Declined') {
        return 'text-white bg-decline border-decline';
    } else {
        return 'text-custom-gray bg-white border-custom-gray';
    }
}

export function ResponsiveSection({
    data,
    isMobile,
    selectedDate,
    setSelectedDate,
    selectedRequest,
    setSelectedRequest,
    searchValue,
    setSearchValue
}) {
    return (
        <div className="w-full responsive-section">
            <div className="flex flex-row-reverse mx-auto my-4">
                <img
                    src={exportbutton}
                    alt="boton para exportar información"
                    className="w-24 transition-transform transform hover:scale-110 cursor-pointer"
                    onClick={() => exportToExcel(data)}
                />
            </div>
            <section className="grid grid-cols-3 gap-2 w-full p-2 telephone:text-xs custom-grid">
                <div className="grid grid-rows-2 items-end">
                    <label htmlFor="dateSelectBox" className="label">Date</label>
                    <div className="flex bg-white border-custom-gray border-2 rounded-md items-center h-[30px]">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => handleDateChange(date, setSelectedDate)}
                            showMonthYearPicker
                            dateFormat="MMM"
                            className="w-full border-transparent focus:outline-none telephone:text-xs"
                        />
                    </div>
                </div>

                <div className="grid grid-rows-2 items-end  gap-1 ml-2">
                    <label htmlFor="requestSelectBox" className="label">Request</label>
                    <select
                        id="selectRequest"
                        value={selectedRequest}
                        onChange={(e) => handleRequest(e, setSelectedRequest)}
                        className="w-full bg-white border-custom-gray border-2 rounded-md h-[30px] telephone:text-xs"
                    >
                        <option value="default">
                            All
                        </option>
                        <option value="Scheduled absences">Scheduled absences</option>
                        <option value="Authorized exceptions">Authorized exceptions</option>
                    </select>
                </div>

                <div className="grid grid-rows-2 gap-1 ml-2 items-end">
                    <label htmlFor="searchInputBox" className="label">Search</label>
                    <div className="flex bg-white border-custom-gray border-2 rounded-md items-center h-[30px]">
                        <input
                            id="searchInputBox"
                            type="text"
                            placeholder="User ID..."
                            className="w-full border-transparent focus:outline-none pl-2"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <BiSearchAlt className="text-dark-blue-icons w-5 h-5" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export function ResponsiveTable({ data }) {
    return (
        <div className="overflow-x-auto responsive-table">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="border border-gray-icon border-2 font-bold py-2">ID</th>
                        <th className="border border-gray-icon border-2 font-bold py-2">Status</th>
                        <th className="border border-gray-icon border-2 font-bold py-2">Date Reviwed</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="text-center">
                            <td className="py-2">
                                <span className={`${item.requestType === "Authorized exceptions" ?
                                    "bg-yellow-icon rounded-full font-bold whitespace-nowrap text-sm px-1" :
                                    item.requestType === "Scheduled absences" ?
                                        "bg-green-icon rounded-full font-bold whitespace-nowrap text-sm px-1" :
                                        ""
                                    }`}>
                                    {item.id}
                                </span>
                            </td>
                            <td className="py-2">{item.status}</td>
                            <td className="py-2">{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

