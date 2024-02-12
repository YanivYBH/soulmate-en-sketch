import React from 'react'

function HourInput({setHours, hours, setMinutes, minutes}) {
    

      
   
      


    //   const handleSubmit = () => {
    //     // Convert the input to numbers
    //     const hoursValue = parseInt(hours, 10);
    //     const minutesValue = parseInt(minutes, 10);
    
    //     // Validate input
    //     if (isNaN(hoursValue) || hoursValue < 0 || hoursValue > 23 || isNaN(minutesValue) || minutesValue < 0 || minutesValue > 59) {
    //       alert('Invalid input. Please enter valid hours (0-23) and minutes (0-59).');
    //     } else {
    //       // Perform actions with the input values, e.g., update state or make API calls
    //       console.log('Hours:', hoursValue);
    //       console.log('Minutes:', minutesValue);
    //     }
    //   };
  return (
    <div className="flex justify-between items-center gap-[8px] w-full">
       
        
       
        <select value={hours} onChange={(e) => setHours(e.target.value)} className="w-full ml-10 px-15 py-10 font-bold border-2 border-brown rounded-md" >
          
          {Array.from({ length: 24 }, (_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
     
    
    
      <select value={minutes} onChange={(e) => setMinutes(e.target.value)} className="w-full ml-10 px-15 py-10 font-bold border-2 border-brown rounded-md" >
          
          {Array.from({ length: 60 }, (_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
    
      
      {/* <button onClick={handleSubmit}>Submit</button> */}
   
    </div>
  )
}

export default HourInput