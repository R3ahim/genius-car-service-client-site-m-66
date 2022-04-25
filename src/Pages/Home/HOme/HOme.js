import React from 'react';
import { Helmet } from 'react-helmet-async';
import DaiTitle from '../../Shared/DaiTitle/DaiTitle';
import Banner from '../Banner/Banner';
import Exparts from '../Exparts/Exparts';
import Services from '../Services/Services';

const HOme = () => {
    return (
        <div>
            <DaiTitle title='Home'></DaiTitle>
         <Banner></Banner>   
       <Services></Services>
       <Exparts></Exparts>
        </div>
    );
};

export default HOme;