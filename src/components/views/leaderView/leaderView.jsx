import "./leaderView.css";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import HeaderComponent from '../../commonComponents/navbar/navBar.jsx';
import React, { useState } from 'react';
import PersonalFowTab from '../../commonComponents/personalFowTab/personalFow';
import TeamFowTab from '../../commonComponents/TeamFowTab/teamFow';

export default function LeaderView() {
    const [activeTab, setActiveTab] = useState('Personal FOW');
    return (
        <div>
            <header>
                <HeaderComponent />
            </header>

            {/* Comienza el tab bar */}
            <div className="flex items-center space-x-1 ml-3 p-1 my-1.5">
                <AiOutlineArrowLeft className='text-dark-blue' style={{ width: '20px', height: '20px' }} />
                <h1 className='text-dark-blue px-1 mb-1'>Home</h1>
            </div>

            <div className="ml-10 bg-background-gray shadow p-4">
                <span
                    className={`cursor-pointer ${activeTab === 'Personal FOW' ? 'border-b-2 border-pink-color  text-dark-blue' : 'text-black'}`}
                    onClick={() => setActiveTab('Personal FOW')}>
                    Personal FOW
                </span>

                <span
                    className={`ml-4 cursor-pointer ${activeTab === 'Team FOW' ? 'border-b-2 border-pink-color text-dark-blue' : 'text-black'}`}
                    onClick={() => setActiveTab('Team FOW')}>
                    Team FOW
                </span>

                {/* Condicionales para las dos tabs */}
                {activeTab === 'Personal FOW' && <PersonalFowTab />}
                {activeTab === 'Team FOW' && <TeamFowTab />}
            </div>

        </div>
    );
}


