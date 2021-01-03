import React from "react";
import { Link } from 'react-router-dom';

const LeftMenu = () => {
    return(
<nav className="lnb">
            <div className="info">X-LOG<br/>Version 6</div>
            <div className="inner">
                <ul className="depth1">
                    <li className="on">
                        <Link>시스템 정보관리</Link>
                        <ul className="depth2" style={{display: "block" }}>
                            <li><Link className="on">svr_20</Link></li>
                            <li><Link>TAR_server_31</Link></li>
                            <li><Link>SRC_server</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link>DBMS 정보관리</Link>
                        <ul className="depth2">
                            <li><Link className="on">2-1</Link></li>
                            <li><Link>2-2</Link></li>
                            <li><Link>2-3</Link></li>
                            <li><Link>2-4</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link>정책관리</Link>
                        <ul className="depth2">
                            <li><Link className="on">3-1</Link></li>
                            <li><Link>3-2</Link></li>
                            <li><Link>3-3</Link></li>
                            <li><Link>3-4</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link>모니터링</Link>
                        <ul className="depth2">
                            <li><Link className="on">4-1</Link></li>
                            <li><Link>4-2</Link></li>
                            <li><Link>4-3</Link></li>
                            <li><Link>4-4</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link>보고서</Link>
                        <ul className="depth2">
                            <li><Link className="on">5-1</Link></li>
                            <li><Link>5-2</Link></li>
                            <li><Link>5-3</Link></li>
                            <li><Link>5-4</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
            );
        };
        
        export default LeftMenu;