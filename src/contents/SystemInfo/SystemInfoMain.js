import React from 'react';
import SimpleGrid from '../../component/SimpleDataGrid'
import Header from '../../component/Header'
import LeftMenu from '../../component/LeftMenu';
import EventBox from '../../component/EventBox';

const SystemInfoMain = () => {
    return(
    <div>
    <Header/>
    <div className="container">
        <LeftMenu/>

        <div className="contents">
            <SimpleGrid/>
            <EventBox/>
        </div>
    </div>
    </div>

    );
};

export default SystemInfoMain;