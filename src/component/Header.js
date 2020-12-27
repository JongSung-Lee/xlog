import React from "react";
import main_logo from '../assets/images/img_main_logo.png';
import ico_check_on from '../assets/images/ico_check_on.png';
import ico_profile from '../assets/images/ico_profile.png';
import ico_question from '../assets/images/ico_question.png';

const Header = () => {
    return(

    <div>

    <header>
        <h1><a href="javascript:void(0);"><img src={main_logo} alt="X-LOG"/></a></h1>

        <nav className="gnb">
            <ul>
                <li><a href="javascript:void(0);"><img src={ico_check_on} alt=""/>정책관리</a></li>
                <li><a href="javascript:void(0);"><img src={ico_profile} alt=""/>사용자관리</a></li>
                <li><a href="javascript:void(0);"><img src={ico_question} alt=""/>도움말</a></li>
            </ul>
        </nav>
        <div className="my_info">
            <p><strong>Admin</strong>2020.11.10⎜13:46:07</p>
            <button className="btn">LOGOUT</button>
        </div>
    </header>


    </div>

    );
};

export default Header;