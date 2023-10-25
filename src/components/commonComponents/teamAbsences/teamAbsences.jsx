import React from 'react';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
import Chatbot from '../chatbot/chatbot.jsx';

function TeamAbsences() {
    return (
        <div className="bg-white">
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="border border-gray-icon border-2 font-bold py-2">Hora</th>
                        <th className="border border-gray-icon border-2  font-bold py-2"></th>
                        <th className="border border-gray-icon border-2  font-bold py-2">ID</th>
                        <th className="border border-gray-icon border-2  font-bold py-2">Type of request</th>
                        <th className="border border-gray-icon border-2  font-bold py-2">Date</th>
                        <th className="border border-gray-icon border-2  font-bold py-2">Days requested</th>
                        <th className="border border-gray-icon border-2  font-bold py-2">Remaining days</th>
                        <th className="border border-gray-icon border-2  font-bold py-2">Approve</th>
                        <th className="border border-gray-icon border-2  font-bold py-2">Decline</th>
                        <th className="border border-gray-icon border-2  font-bold py-2">Calendar</th>
                        <th className="border border-gray-icon border-2  font-bold py-2">Mensaje</th>

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
                </tbody>
            </table>
            <Chatbot />
        </div>
    );
}

export default TeamAbsences;
