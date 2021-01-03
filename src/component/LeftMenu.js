import React from "react";


const LeftMenu = () => {
    return(
<nav className="lnb">
            <div className="info">X-LOG<br/>Version 6</div>
            <div className="inner">
                <ul className="depth1">
                    <li className="on">
                        <link>시스템 정보관리</link>
                        <ul className="depth2" style={{display: "block" }}>
                            <li><link className="on">svr_20</link></li>
                            <li><link>TAR_server_31</link></li>
                            <li><link>SRC_server</link></li>
                        </ul>
                    </li>
                    <li>
                        <link>DBMS 정보관리</link>
                        <ul className="depth2">
                            <li><link className="on">2-1</link></li>
                            <li><link>2-2</link></li>
                            <li><link>2-3</link></li>
                            <li><link>2-4</link></li>
                        </ul>
                    </li>
                    <li>
                        <link>정책관리</link>
                        <ul className="depth2">
                            <li><link className="on">3-1</link></li>
                            <li><link>3-2</link></li>
                            <li><link>3-3</link></li>
                            <li><link>3-4</link></li>
                        </ul>
                    </li>
                    <li>
                        <link>모니터링</link>
                        <ul className="depth2">
                            <li><link className="on">4-1</link></li>
                            <li><link>4-2</link></li>
                            <li><link>4-3</link></li>
                            <li><link>4-4</link></li>
                        </ul>
                    </li>
                    <li>
                        <link>보고서</link>
                        <ul className="depth2">
                            <li><link className="on">5-1</link></li>
                            <li><link>5-2</link></li>
                            <li><link>5-3</link></li>
                            <li><link>5-4</link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
            );
        };
        
        export default LeftMenu;