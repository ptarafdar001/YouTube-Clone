import React,{ useState } from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from '@material-ui/core/Avatar'
import {Link} from "react-router-dom";


function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header"> 

            <div className='header_left'>
                <MenuIcon/>
                <Link to = "/">
                    <img 
                        className="header_logo"
                        src = "https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1024-80.jpg.webp"
                        alt = ""
                    />
                </Link>
            </div>

            <div className = 'header_input'>
                <input 
                    onChange={e => setInputSearch(e.target.value)} 
                    value = {inputSearch}
                    placeholder = "Search" 
                    type = "text"
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className= 'header_inputButton'/>   
                </Link>
                
            </div>

            <div className = 'header_icons'>
                <VideoCallIcon className = 'header_icon'/>
                <AppsIcon className = 'header_icon'/>
                <NotificationsIcon className = 'header_icon'/>
                <Avatar className='header__avatar'
                    alt = "Prabir"
                    src = "https://avatars.githubusercontent.com/u/49672366?s=60&v=4"
                />
            </div>

        </div>
    )
}

export default Header;
