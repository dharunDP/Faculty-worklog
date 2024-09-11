import React, { useState } from 'react'; // Import useState
import './verticalNavbar.css';
import { Link } from 'react-router-dom';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

function VerticalNavbar({ onClose }) {
    const [activeLink, setActiveLink] = useState(null);
    const handleLinkClick = (pathname) => {
        onClose();
        setActiveLink(pathname);
    };
    return (
        <div className='total-v-navbar'>
            <div className={`menu-item ${activeLink === '/' ? 'active' : ''}`} onClick={() => handleLinkClick('/')}>
                <Link to="/" className="link-style"><DashboardRoundedIcon className='nav-icons' />Faculty Worklog</Link>
            </div>
            <div className={`menu-item ${activeLink === '/SlotBookingForm' ? 'active' : ''}`} onClick={() => handleLinkClick('/SlotBookingForm')}>
                <Link to="/SlotBookingForm" className="link-style"><CollectionsBookmarkIcon className='nav-icons' />Faculty Slot Booking</Link>
            </div>
            <div className={`menu-item ${activeLink === '/onecredit' ? 'active' : ''}`} onClick={() => handleLinkClick('/onecredit')}>
                <Link to="/onecredit" className="link-style"><DashboardRoundedIcon className='nav-icons' />Worklog</Link>
            </div>
            
            
        </div>
    );
}

export default VerticalNavbar;

