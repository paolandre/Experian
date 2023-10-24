import { GiHamburgerMenu } from 'react-icons/gi';
import { IoPersonCircleSharp, IoLogOutOutline } from 'react-icons/io5';
import { IoIosNotifications } from 'react-icons/io';
import { BiSearchAlt2 } from 'react-icons/bi';

function HeaderComponent() {
    return (
        <header className="w-full h-14 bg-white shadow-md flex items-center">
            <div className="container mx-auto flex items-center justify-between">
                <GiHamburgerMenu className="text-custom-gray" size={24} />
                <div className="flex items-center space-x-2">
                    <BiSearchAlt2 className="text-custom-gray" size={24} />
                    <IoLogOutOutline className="text-custom-gray" size={24} />
                    <IoIosNotifications className="text-custom-gray" size={24} />
                    <IoPersonCircleSharp className="text-custom-gray" size={24} />
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;
