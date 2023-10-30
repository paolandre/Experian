import React, { useState, useMemo, useEffect } from "react";
import { IoPersonCircleSharp } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import exportbutton from "./../../../assets/teamFow/exportbutton.png";
import calendarImg from "./../../../assets/teamFow/calendarIcon.png";
import requests from "./recordData";
import { BiSearchAlt } from 'react-icons/bi';
import {
    exportToExcel,
    filterData,
    getApprovedClasses,
    getDeclinedClasses,
    handleRequest,
    ResponsiveSection,
    ResponsiveTable
} from './functions.js';
import "./absencesRecord.css";

function AbsencesRecord() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [selectedRequest, setSelectedRequest] = useState("default");
    const [searchValue, setSearchValue] = useState("");
    const filteredData = useMemo(() => filterData(selectedRequest, searchValue, selectedDate, requests), [selectedRequest, searchValue, selectedDate]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 390);
        };

        window.addEventListener('resize', handleResize);

        // Limpiar el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <ResponsiveSection
                data={filteredData}
                isMobile={isMobile}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                selectedRequest={selectedRequest}
                setSelectedRequest={setSelectedRequest}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <div className="w-full non-responsive-section">
                <div className="flex flex-row-reverse w-11/12 mx-auto my-4">
                    <img
                        src={exportbutton}
                        alt="boton para exportar información"
                        className="w-24 transition-transform transform hover:scale-110 cursor-pointer"
                        onClick={() => exportToExcel(filteredData)}
                    />
                </div>
                <section className="flex flex-wrap md:flex-nowrap w-11/12 mx-auto space-x-4 md:space-x-0">
                    <div className="flex flex-col w-[11vw]">
                        <span htmlFor="dateSelectBox">Date</span>
                        <div className="flex flex-row bg-white border-custom-gray border-2 rounded-md w-[10vw] h-[4vh] items-center">
                            <img
                                src={calendarImg}
                                alt="imagen de un calendario"
                                className="w-[2vw] h-[3vh]"
                            />
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => handleDateChange(date, setSelectedDate)}
                                showMonthYearPicker
                                dateFormat="MMM/yyyy"
                                className="w-[7vw] border-transparent focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col w-[11vw] ml-4">
                        <div className="flex flex-col w-[11vw]">
                            <label htmlFor="requestSelectBox" className="block md:hidden">Request</label>
                            <label htmlFor="requestSelectBox" className="hidden md:block">Type of request</label>
                        </div>
                        <select
                            id="selectRequest"
                            value={selectedRequest}
                            onChange={(e) => handleRequest(e, setSelectedRequest)}
                            className="desktop:bg-white desktop:border-custom-gray desktop:border-2 desktop:rounded-md desktop:w-[10vw] desktop:h-[4vh] telephone:bg-white telephone:border-custom-gray telephone:border-2 telephone:rounded-md telephone:w-[20vw] telephone:text-xs"
                        >
                            <option value="default">
                                All
                            </option>
                            <option value="Scheduled absences">Scheduled absences</option>
                            <option value="Authorized exceptions">Authorized exceptions</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-[11vw] ml-4">
                        <label htmlFor="searchInputBox">Search</label>
                        <div className="flex flex-row bg-white border-custom-gray border-2 rounded-md w-[10vw] h-[4vh] items-center">
                            <input
                                id="searchInputBox"
                                type="text"
                                placeholder="User ID..."
                                className="w-[7vw] border-transparent focus:outline-none pl-2"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />

                            <BiSearchAlt className="text-dark-blue-icons w-5 h-5" />
                        </div>
                    </div>
                </section>
            </div>


            <div className="bg-white">

                <div className="p-4 bg-background-gray rounded-md">
                    <div className="flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-6">
                        {/* Yellow icon circle */}
                        <div className="flex items-center space-x-2">
                            <span className="w-4 h-4 bg-yellow-icon rounded-full"></span>
                            <span className="font-bold whitespace-nowrap text-sm">Authorized exceptions</span>
                        </div>

                        {/* Green icon circle */}
                        <div className="flex items-center space-x-2">
                            <span className="w-4 h-4 bg-green-icon rounded-full"></span>
                            <span className="font-bold whitespace-nowrap text-sm">Scheduled absences</span>
                        </div>
                    </div>
                </div>

                <ResponsiveTable data={filteredData} />
                <div className="overflow-x-auto non-responsive-table">
                    <table className="min-w-full bg-white w-full table-auto">
                        <thead>
                            <tr>
                                <th className="border border-gray-icon border-2 font-bold p-3"></th>
                                <th className="border border-gray-icon border-2 font-bold p-3">ID</th>
                                <th className="border border-gray-icon border-2 font-bold p-3">FOW</th>
                                <th className="border border-gray-icon border-2 font-bold p-3">Type of request</th>
                                <th className="border border-gray-icon border-2 font-bold p-3">Date</th>
                                <th className="border border-gray-icon border-2 font-bold p-3">Days requested</th>
                                <th className="border border-gray-icon border-2 font-bold p-3">Approve</th>
                                <th className="border border-gray-icon border-2 font-bold p-3">Decline</th>
                                <th className="border border-gray-icon border-2 font-bold p-3">Day reviewed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData
                                .map((request, index) => (
                                    <tr key={index} className="text-center">
                                        <td className="flex justify-center items-center py-2">
                                            <IoPersonCircleSharp className="text-gray-icon" size={24} />
                                        </td>
                                        <td> {request.id} </td>
                                        <td>{request.fow}</td>
                                        <td>
                                            <span className={`py-0.5 text-sm px-2 rounded-full ${request.requestType === 'Authorized exceptions' ? 'bg-yellow-icon' : 'bg-green-icon'} text-black`}>
                                                {request.requestType}
                                            </span>
                                        </td>
                                        <td>{request.date}</td>
                                        <td>{request.daysRequested}</td>
                                        <td>
                                            <span className={`${getApprovedClasses(request.status)} border-2 py-0.5 text-sm px-2 rounded-2xl`}>
                                                Approved
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`${getDeclinedClasses(request.status)} border-2 py-0.5 text-sm px-2 rounded-2xl`}>
                                                Declined
                                            </span>
                                        </td>
                                        <td>{request.dayReviewed}</td>
                                    </tr>
                                ))}
                        </tbody>

                    </table>
                </div>

            </div >
            {/* Notification */}
            <div div className="border-l-light-blue border-4 pl-4 p-2 bg-white shadow-custom-shadow rounded-md mt-4" style={{ maxWidth: '900px' }
            }>
                <p>If you have any concerns or need clarification, please feel free to contact us at the email address: <a href="mailto:onehrsla@experian.com" className="hover:underline text-black font-bold">onehrsla@experian.com</a>.</p>
            </div >

        </>
    );
}

export default AbsencesRecord;
