import React from 'react';
import { Helmet, HelmetData } from 'react-helmet-async';

const DaiTitle = ({title}) => {
    return (
      
           <Helmet>
               <title>{title}- Genius car service </title>
           </Helmet>
  
    );
};

export default DaiTitle;