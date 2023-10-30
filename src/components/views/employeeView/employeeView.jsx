import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import HeaderComponent from '../../commonComponents/navbar/navBar.jsx';
import { IoPersonCircleSharp } from 'react-icons/io5';
import EmployeeCalendar from '../../commonComponents/calendar/employeeCalendar.jsx';


export default function EmployeeView() {
    return (
        <div className='bg-light-pink pb-8'>
            <header>
                <HeaderComponent />
            </header>

            <div className="flex items-center space-x-1 ml-3 p-1 my-1.5 rounded-md">
                <Link to="/leader-view">
                    <div className="flex items-center space-x-1 ml-3 p-1 my-1.5 rounded-md ">
                        <AiOutlineArrowLeft className='text-dark-blue' style={{ width: '20px', height: '20px' }} />
                        <h1 className='text-dark-blue px-1 mb-1'>Back Team Absences</h1>
                    </div>
                </Link>
            </div>
            <div className="ml-10 bg-background-gray shadow-custom-shadow  p-4 mr-10 rounded-2xl relative">
                <div className="flex">
                    <div className="flex-none w-3/10 pr-4 space-y-4 max-w-sm">
                        {/* Nuevo Div */}
                        <div className="flex justify-between items-center mb-4 items-start p-4" >
                            <div className="flex-1 flex flex-col justify-center items-start">
                                <p className="text-xl font-bold">7</p>
                                <p>Days reported</p>
                            </div>
                            <div className="h-12 w-px bg-custom-gray mx-4"></div>
                            <div className="flex-1 flex flex-col justify-center items-end">
                                <div className="flex items-center">
                                    <p className="text-xl mr-2 font-bold">90%</p>
                                    <div className="w-20 h-2 border-[1px] border-red-bar-color rounded-md relative">
                                        <div className="absolute top-0 left-0 h-2 bg-red-bar-color rounded-md" style={{ width: '90%' }}></div>
                                    </div>

                                </div>
                                <p className='pr-4'>My monthly FOW</p>
                            </div>
                        </div>

                        {/* Leader info */}
                        <div className="p-4 bg-white rounded-md shadow-custom-shadow max-w-sm">
                            <div className="flex items-center">
                                <IoPersonCircleSharp className="text-gray-icon" size={80} />
                                <div className="ml-4">
                                    <p className="font-bold text-xl">Employee name</p>
                                    <p className="font-bold">ID: 72836375</p>
                                    <p className="font-bold">FOW: <span>Hybrid</span></p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p><span className="font-bold">Job:</span> Senior business consultant </p>
                                <p><span className="font-bold">VP:</span> Consultoria Autral</p>
                                <p><span className="font-bold">Country:</span> Perú</p>
                                <p><span className="font-bold">Office location:</span> Lima Perú</p>
                            </div>
                        </div>

                        {/* Calendar Summary */}
                        <div className="p-4 bg-white rounded-md shadow-custom-shadow max-w-sm">
                            <p className="font-bold mb-2">Calendar Summary</p>
                            <div className='p-2'>
                                <div className="flex items-center mb-1">
                                    <span className="mr-2 w-4 h-4 rounded-full bg-purple-icon inline-block"></span>
                                    <p className='font-bold'>Holiday</p>
                                </div>
                                <p className="ml-6 mb-1">Aug 6, 2023 Batalla de Junín</p>
                                <p className="ml-6 mb-2">Aug 30, 2023 Santa Rosa de Lima</p>

                                <div className="flex items-center mb-1">
                                    <span className="mr-2 w-4 h-4 rounded-full bg-yellow-icon inline-block"></span>
                                    <p className='font-bold'>Authorized exceptions</p>
                                </div>
                                <p className="ml-6 mb-2">Aug 18, 2023 Corporate events</p>
                                <div className="flex items-center mb-1">
                                    <span className="mr-2 w-4 h-4 rounded-full bg-green-icon inline-block"></span>
                                    <p className='font-bold'>Scheduled absences</p>
                                </div>
                                <p className="ml-6 mb-2">Aug 3 - Aug4, 2023 Vacations</p>
                            </div>
                        </div>

                        {/* Notification */}
                        <div className="border-l-light-blue border-4 pl-4 p-4 bg-white shadow-custom-shadow rounded-md max-w-sm">
                            <p>If you have any concerns or need clarification, please feel free to contact us at the email address: <a href="mailto:onehrsla@experian.com" className="hover:underline text-black font-bold">onehrsla@experian.com</a>.</p>
                        </div>

                    </div>

                    {/* Columna de la derecha ocupando el 70% de la pantalla */}
                    <div className="flex-grow w-7/10 p-4 bg-background-gray rounded-md">
                        <div className="flex justify-end space-x-6">
                            {/* Circle with border */}
                            <div className="flex items-center space-x-2">
                                <span className="w-4 h-4 bg-white border-[3px] border-dark-purple rounded-full"></span>
                                <span className="font-bold whitespace-nowrap text-sm">Office entrance</span>
                            </div>

                            {/* Yellow icon circle */}
                            <div className="flex items-center space-x-2">
                                <span className="w-4 h-4 bg-yellow-icon rounded-full"></span>
                                <span className="font-bold whitespace-nowrap text-sm">Authorized exceptions</span>
                            </div>

                            {/* Purple icon circle */}
                            <div className="flex items-center space-x-2">
                                <span className="w-4 h-4 bg-purple-icon rounded-full"></span>
                                <span className="font-bold whitespace-nowrap text-sm">Holiday</span>
                            </div>

                            {/* Green icon circle */}
                            <div className="flex items-center space-x-2">
                                <span className="w-4 h-4 bg-green-icon rounded-full"></span>
                                <span className="font-bold whitespace-nowrap text-sm">Scheduled absences</span>
                            </div>
                        </div>
                    </div>

                    <EmployeeCalendar />
                </div>

            </div>
        </div>
    );
}
