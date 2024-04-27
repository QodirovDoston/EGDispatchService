'use client'
import React from 'react';
import Section1 from '../../components/Section1'
import Trucking_serves from '../../components/trucking_serves'
import Types_for_Truck from '../../components/types_for_Truck'
import Dispatch_Services from '../../components/dispatch_services'
import CallUsToday from '../../components/call_us_today';
import LatestNews from '../../components/latest_news';
// import OurTeam from '../../components/our_team';
// import Insurance from '../../components/Insurance';

import CaruselAbsolute from '../../components/caruselabsolute';
import { caruselBlogFordata } from '../../utils';

export const HomePage = () => {
    return (
        <div>
           <Section1/>
           <Trucking_serves/>
           <Types_for_Truck/>
           <Dispatch_Services/>
           <CallUsToday/>
           {/* <OurTeam/> */}
            <CaruselAbsolute data={caruselBlogFordata}/>
           <LatestNews/>
           {/* <Insurance/> */}
        </div>
    );
};
