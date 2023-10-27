import React, { useState } from "react";
import { IoPersonCircleSharp } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
import DatePicker from 'react-datepicker';
import exportbutton from "./../../../assets/teamFow/exportbutton.png";
import calendarImg from "./../../../assets/teamFow/calendarIcon.png";

function TeamAbsences() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
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
                                dateFormat="dd/MMM/yyyy"
                                className="w-[7vw] border-transparent focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-[11vw]">
                        <label htmlFor="countrySelectBox">Country</label>
                        <select
                            id="countrySelectBox"
                            className="bg-white border-custom-gray border-2 rounded-md w-[10vw] h-[4vh]"
                        >
                            <option value="default" disabled selected>
                                Select
                            </option>
                            <option value="option1">Argentina</option>
                            <option value="option2">Chile</option>
                            <option value="option3">Colombia</option>
                            <option value="option4">Perú</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-[10vw]">
                        <label htmlFor="fowSelectBox">FOW</label>
                        <select
                            id="fowSelectBox"
                            className="bg-white border-custom-gray border-2 rounded-md w-[10vw] h-[4vh]"
                        >
                            <option value="default" disabled selected>
                                Select
                            </option>
                            <option value="option1">Hybrid</option>
                            <option value="option2">Home office</option>
                            <option value="option3">Roam</option>
                        </select>
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
                                <th className="border border-gray-icon border-2  font-bold py-2"></th>
                                <th className="border border-gray-icon border-2  font-bold py-2">ID</th>
                                <th className="border border-gray-icon border-2  font-bold py-2">Type of request</th>
                                <th className="border border-gray-icon border-2  font-bold py-2">Date</th>
                                <th className="border border-gray-icon border-2 font-bold py-2">Days requested</th>
                                <th className="border border-gray-icon border-2 font-bold py-2">Remaining days</th>
                                <th className="border border-gray-icon border-2 font-bold py-2">Approve</th>
                                <th className="border border-gray-icon border-2 font-bold py-2">Decline</th>
                                <th className="border border-gray-icon border-2 font-bold py-2">Calendar</th>
                                <th className="border border-gray-icon border-2 font-bold py-2">Mensaje</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td className="py-2">8:30 am</td>
                                <td><IoPersonCircleSharp className="text-gray-icon" size={24} /></td>
                                <td>72836301</td>
                                <td><span className="py-0.5 text-sm px-2 rounded-full bg-yellow-icon text-black">Authorized exceptions</span></td>
                                <td>2023-08-09</td>
                                <td>3</td>
                                <td>5</td>
                                <td><span className="text-approve border-2 border-approve py-0.5 text-sm px-2 rounded-2xl">Approved</span></td>
                                <td><span className="text-decline text-sm border-2 border-decline py-0.5 px-2 rounded-2xl">Decline</span></td>
                                <td className="text-dark-blue-icons pl-8"><FaRegCalendarAlt /></td>
                                <td className="text-dark-blue-icons pl-8"><BiMessageDetail /></td>
                            </tr>

                            <tr className="text-center justify-center">
                                <td className="py-2">9:00 am</td>
                                <td><IoPersonCircleSharp className="text-gray-icon" size={24} /></td>
                                <td>72836302</td>
                                <td><span className="py-0.5 text-sm px-2  rounded-full bg-green-icon text-black">Scheduled absences</span></td>
                                <td>2023-08-10</td>
                                <td>2</td>
                                <td>4</td>
                                <td><span className="text-approve border-2 border-approve py-0.5 text-sm px-2 rounded-2xl">Approved</span></td>
                                <td><span className="text-decline text-sm border-2 border-decline py-0.5 px-2 rounded-2xl">Decline</span></td>
                                <td className="text-dark-blue-icons pl-8"><FaRegCalendarAlt /></td>
                                <td className="text-dark-blue-icons pl-8"><BiMessageDetail /></td>
                            </tr>

                            <tr className="text-center justify-center">
                                <td className="py-2">10:00 am</td>
                                <td><IoPersonCircleSharp className="text-gray-icon" size={24} /></td>
                                <td>72838302</td>
                                <td><span className="py-0.5 text-sm px-2  rounded-full bg-green-icon text-black">Scheduled absences</span></td>
                                <td>2023-08-17</td>
                                <td>1</td>
                                <td>4</td>
                                <td><span className="text-approve border-2 border-approve py-0.5 text-sm px-2 rounded-2xl">Approved</span></td>
                                <td><span className="text-decline text-sm border-2 border-decline py-0.5 px-2 rounded-2xl">Decline</span></td>
                                <td className="text-dark-blue-icons pl-8"><FaRegCalendarAlt /></td>
                                <td className="text-dark-blue-icons pl-8"><BiMessageDetail /></td>
                            </tr>

                            <tr className="text-center justify-center">
                                <td className="py-2">7:00 am</td>
                                <td><IoPersonCircleSharp className="text-gray-icon" size={24} /></td>
                                <td>72838312</td>
                                <td><span className="py-0.5 text-sm px-2 rounded-full bg-yellow-icon text-black">Authorized exceptions</span></td>
                                <td>2023-08-29</td>
                                <td>2</td>
                                <td>7</td>
                                <td><span className="text-approve border-2 border-approve py-0.5 text-sm px-2 rounded-2xl">Approved</span></td>
                                <td><span className="text-decline text-sm border-2 border-decline py-0.5 px-2 rounded-2xl">Decline</span></td>
                                <td className="text-dark-blue-icons pl-8"><FaRegCalendarAlt /></td>
                                <td className="text-dark-blue-icons pl-8"><BiMessageDetail /></td>
                            </tr>

                            <tr className="text-center justify-center">
                                <td className="py-2">3:00 pm</td>
                                <td><IoPersonCircleSharp className="text-gray-icon" size={24} /></td>
                                <td>72839300</td>
                                <td><span className="py-0.5 text-sm px-2  rounded-full bg-green-icon text-black">Scheduled absences</span></td>
                                <td>2023-08-30</td>
                                <td>2</td>
                                <td>5</td>
                                <td><span className="text-approve border-2 border-approve py-0.5 text-sm px-2 rounded-2xl">Approved</span></td>
                                <td><span className="text-decline text-sm border-2 border-decline py-0.5 px-2 rounded-2xl">Decline</span></td>
                                <td className="text-dark-blue-icons pl-8"><FaRegCalendarAlt /></td>
                                <td className="text-dark-blue-icons pl-8"><BiMessageDetail /></td>
                            </tr>
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
