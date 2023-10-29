import { IoPersonCircleSharp } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
import DatePicker from 'react-datepicker';
import exportbutton from "./../../../assets/teamFow/exportbutton.png";
import calendarImg from "./../../../assets/teamFow/calendarIcon.png";
import absencesData from "./absencesData"
import { BiSearchAlt } from 'react-icons/bi';
import React, { useState, useMemo } from "react";
import Swal from 'sweetalert2';

function TeamAbsences() {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [selectedRequest, setSelectedRequest] = useState("default");
    const handleRequest = (e) => {
        setSelectedRequest(e.target.value);
    };

    const [searchValue, setSearchValue] = useState("");

    const filteredData = useMemo(() => {
        const selectedYear = selectedDate.getFullYear();
        const selectedMonth = selectedDate.getMonth();

        return absencesData.filter(request =>
            (selectedRequest !== "default" ? request.requestType === selectedRequest : true) &&
            (searchValue ? request.id.includes(searchValue) : true) &&
            (new Date(request.date).getMonth() === selectedMonth && new Date(request.date).getFullYear() === selectedYear)
        );
    }, [selectedRequest, searchValue, selectedDate]);

    const handleApprove = () => {
        Swal.fire({
            title: '¿Estás seguro/a de que quieres aprobar esta solicitud?',
            icon: 'warning',
            iconColor: '#426DA9',
            showCancelButton: true,
            confirmButtonColor: '#426DA9',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, ¡aprobar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Código para manejar la aprobación
            }
        })
    };

    const handleDecline = () => {
        Swal.fire({
            title: '¿Estás seguro/a de que quieres declinar esta solicitud?',
            icon: 'warning',
            iconColor: '#426DA9',
            showCancelButton: true,
            confirmButtonColor: '#426DA9',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, ¡declinar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
            }
        })
    };

    return (
        <>
            <div className="w-full">
                <div className="flex flex-row-reverse w-11/12 mx-auto my-4">
                    <img
                        src={exportbutton}
                        alt="boton para exportar información"
                        className="w-24 transition-transform transform hover:scale-110"></img>
                </div>
                <section className="flex flex-col md:flex-row w-11/12 mx-auto">
                    <div className="flex flex-col w-[11vw]">
                        <span htmlFor="dateSelectBox">Date range</span>
                        <div className="flex flex-row bg-white border-custom-gray border-2 rounded-md w-[10vw] h-[4vh] items-center">
                            <img
                                src={calendarImg}
                                alt="imagen de un calendario"
                                className="w-[2vw] h-[3vh]"
                            />
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                showMonthYearPicker
                                dateFormat="MMM/yyyy"
                                className="w-[7vw] border-transparent focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col w-[11vw]">
                        <label htmlFor="requestSelectBox">Type of request</label>
                        <select
                            id="selectRequest"
                            value={selectedRequest}
                            onChange={handleRequest}
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
                                placeholder="..."
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
                    <div className="flex justify-end space-x-6">

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


                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="border border-gray-icon border-2 font-bold py-2">Hora</th>
                                <td className="border border-gray-icon border-2  font-bold py-2"></td>

                                <th className="border border-gray-icon border-2 font-bold py-2">ID</th>
                                <th className="border border-gray-icon border-2 font-bold py-2">Type of request</th>
                                <th className="border border-gray-icon border-2 font-bold py-2">Date</th>
                                <th className="border border-gray-icon border-2 font-bold py-2">Days requested</th>
                                <th className="border border-gray-icon border-2 font-bold py-2">Remaining days</th>
                                <th className="border border-gray-icon border-2 font-bold py-2">Approve</th>
                                <th className="border border-gray-icon border-2 font-bold py-2">Decline</th>
                                <th className="border border-gray-icon border-2 font-bold py-2">Calendar</th>
                                <th className="border border-gray-icon border-2 font-bold py-2">Mensaje</th>

                            </tr>
                        </thead>
                        <tbody>
                            {filteredData
                                .map((item, index) => (
                                    <tr key={index} className="text-center">
                                        <td className="py-2">{item.time}</td>
                                        <td className="flex justify-center items-center py-2">
                                            <IoPersonCircleSharp className="text-gray-icon" size={24} />
                                        </td>

                                        <td><a href="/employee-view" className="link">
                                            {item.id}
                                        </a></td>

                                        <td>
                                            <span className={`py-0.5 text-sm px-2 rounded-full ${item.bgColor} text-black`}>
                                                {item.requestType}
                                            </span>
                                        </td>
                                        <td>{item.date}</td>
                                        <td>{item.daysRequested}</td>
                                        <td>{item.remainingDays}</td>
                                        <td>
                                            <button onClick={handleApprove} className="text-approve border-2 border-approve py-0.5 text-sm px-2 rounded-2xl">Approve</button>
                                        </td>
                                        <td>
                                            <button onClick={handleDecline} className="text-decline border-2 border-decline py-0.5 text-sm px-2 rounded-2xl">Decline</button>
                                        </td>
                                        <td className="text-dark-blue-icons pl-12"><FaRegCalendarAlt /></td>
                                        <td className="text-dark-blue-icons pl-12"><BiMessageDetail /></td>
                                    </tr>
                                ))}
                        </tbody>

                    </table>
                </div>

            </div>
            {/* Notification */}
            <div className="border-l-light-blue border-4 pl-4 p-2 bg-white shadow-custom-shadow rounded-md mt-4" style={{ maxWidth: '900px' }}>
                <p>If you have any concerns or need clarification, please feel free to contact us at the email address: <a href="mailto:onehrsla@experian.com" className="hover:underline text-black font-bold">onehrsla@experian.com</a>.</p>
            </div>

        </>
    );
}

export default TeamAbsences;
