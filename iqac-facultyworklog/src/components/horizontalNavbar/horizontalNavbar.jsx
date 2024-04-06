import React from "react";
import "./horizontalNavbar.css";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import CustomizedSwitches from "./toggleTheme";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function HorizontalNavbar({ toggleVerticalNavbar }) {
  return (
    <div className="total-h-navbar">
      <div className="website-name">
        <h3 className="iqac-title">IQAC</h3>
        <div className="menu-open-icon" onClick={toggleVerticalNavbar}>
          <MenuRoundedIcon
            className="h-nav-menu-icon"
            sx={{ fontSize: 30 }}
          ></MenuRoundedIcon>
        </div>
      </div>

      <div>
        <nav>
          <ul className="nav-list-items">
            <li>
              <CustomizedSwitches />
            </li>
            <li>
              <AccountCircleRoundedIcon
                className="h-nav-icons"
                sx={{ fontSize: 32 }}
              ></AccountCircleRoundedIcon>
            </li>
            <li>
              <SettingsRoundedIcon
                className="h-nav-icons"
                sx={{ fontSize: 32 }}
              ></SettingsRoundedIcon>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HorizontalNavbar;