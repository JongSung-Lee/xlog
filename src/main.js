import React from 'react';
import SimpleGrid from './component/SimpleDataGrid'
import Header from './component/Header'


const Main = () => {
    return(
    <div>
    <Header/>
    <div className="container">
        <nav className="lnb">
            <div className="info">X-LOG<br/>Version 6</div>
            <div className="inner">
                <ul className="depth1">
                    <li className="on">
                        <a href="javascript:void(0);">시스템 정보관리</a>
                        <ul className="depth2" style={{display: "block" }}>
                            <li><a href="javascript:void(0);" className="on">svr_20</a></li>
                            <li><a href="javascript:void(0);">TAR_server_31</a></li>
                            <li><a href="javascript:void(0);">SRC_server</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0);">DBMS 정보관리</a>
                        <ul className="depth2">
                            <li><a href="javascript:void(0);" className="on">2-1</a></li>
                            <li><a href="javascript:void(0);">2-2</a></li>
                            <li><a href="javascript:void(0);">2-3</a></li>
                            <li><a href="javascript:void(0);">2-4</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0);">정책관리</a>
                        <ul className="depth2">
                            <li><a href="javascript:void(0);" className="on">3-1</a></li>
                            <li><a href="javascript:void(0);">3-2</a></li>
                            <li><a href="javascript:void(0);">3-3</a></li>
                            <li><a href="javascript:void(0);">3-4</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0);">모니터링</a>
                        <ul className="depth2">
                            <li><a href="javascript:void(0);" className="on">4-1</a></li>
                            <li><a href="javascript:void(0);">4-2</a></li>
                            <li><a href="javascript:void(0);">4-3</a></li>
                            <li><a href="javascript:void(0);">4-4</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0);">보고서</a>
                        <ul className="depth2">
                            <li><a href="javascript:void(0);" className="on">5-1</a></li>
                            <li><a href="javascript:void(0);">5-2</a></li>
                            <li><a href="javascript:void(0);">5-3</a></li>
                            <li><a href="javascript:void(0);">5-4</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>

        
        <SimpleGrid/>
               
    </div>
    </div>

    );
};

export default Main;