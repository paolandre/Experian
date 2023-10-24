import "./personalFow.css";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import React from 'react';
import HeaderComponent from '../../commonComponents/navbar/navBar.jsx';

export default function PersonalFow() {
    return (
        <div>
            <header>
                <HeaderComponent />
            </header>

            <div className="flex items-center space-x-1 ml-3 p-1 my-1.5">
                <AiOutlineArrowLeft className='text-dark-blue' style={{ width: '20px', height: '20px' }} />
                <h1 className='text-dark-blue px-1 mb-1'>Home</h1>
            </div>


            <div>
                <span>Personal FOW</span>
                <span>Team FOW</span>
            </div>

            <div>
                <span>Office Entrance</span>
                <span>Authorized Exceptions</span>
                <span>Holiday</span>
                <span>Scheduled Absences</span>
            </div>

            <div>
                <h2>Leader Name</h2>
                <p>10:72794037</p>
                <p>Company: Comb e</p>
                <p>Other Information: Some placeholder text here</p>
            </div>

            <div>
                <h2>Calendar Summary</h2>
                <p>Scheduled Exceptions</p>
                <p>Scheduled Absences</p>
            </div>

            <footer>
                <p>If you have any concerns or need clarification please feel free to contact us at the email address:</p>
                <a href="mailto:somehrsia@experian.com">somehrsia@experian.com</a>
            </footer>
        </div>
    );
}

