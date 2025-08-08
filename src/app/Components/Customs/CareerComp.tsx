"use client";

import { useEffect, useState } from "react";
import ApplicationProcess from "./ApplicationProcess";
import BuildCareers from "./BuildCareer";
import CareerChoose from "./CareerChoose";
import CurrentOpenings from "./CurrentOpenings";
import ReadyDiff from "./ReadyDiff";
import ReadyMake from "./ReadyMake";
import ViewJobDetails from "./ViewJobDetails";
import Apply from "./Apply";



function CareerComp(){

    const [viewJobDetails, setViewJobDetails] = useState(false);

     const [apply, setApply] = useState(false)

    const handleApply = () => {
        setApply(!apply)
     }

    
      const handleOpenViewJobDetails = () => {
        setViewJobDetails(!viewJobDetails);
     }
    

    useEffect(() => {
    window.scrollTo({ top: 3000, behavior: 'smooth' }); 
  }, []);

    return(
       <>
         <BuildCareers />
        <CareerChoose />
        <ReadyDiff />
       {viewJobDetails ? (
        <>
          {apply ? (<Apply handleApply={handleApply}  />) : (<ViewJobDetails handleOpenViewJobDetails={handleOpenViewJobDetails} handleApply={handleApply}/>)}
        </>
         
       ) : (
            <>
            <CurrentOpenings handleOpenViewJobDetails={handleOpenViewJobDetails} />
            <ApplicationProcess />
            <ReadyMake />
            </>
       )} 
        
       </>
    )
}


export default CareerComp