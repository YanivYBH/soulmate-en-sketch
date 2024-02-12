import { useRouter } from "next/router";
import React, { useEffect } from "react";

// async function sendData({name, birthdate, personalityTraits1,placeTypes }) {
//   const apiUrl = 'https://api.ybhltd.com/cosmicharm';
//   // Constructing the URL with query parameters
//   const queryParams = new URLSearchParams({ birthdate, name, personalityTraits1, placeTypes });
//   try {
//     const response = await fetch(`${apiUrl}?${queryParams.toString()}`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.text();
//     console.log('Response:', data);
//     // Handle the response data here
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

function Spinner() {
  const router = useRouter();
  useEffect(() => {

    if (typeof window !== "undefined") {
      const data = localStorage.getItem("surveyData");
      if (!data) {
        router.push("/");
      } else {
        // setSubmittedData(JSON.parse(data));
      }
      const parsedData= JSON.parse(data)
      // sendData(parsedData.name,parsedData.birthdate,parsedData.personalityTraits1,parsedData.placeTypes)
      setTimeout(() => {
        router.push(
          `/offer?image=womens&name=${parsedData.name}&birthdate=${
            parsedData.birthdate}&personalityTraits=${parsedData.personalityTraits1}&placeType=${parsedData.placeTypes}`
        );
      }, 2000);
    }
    
  }, []);

  return (
    <div className="w-full my-100 flex flex-col justify-center items-center">
      <div className="flex w-full items-center justify-center">
        <div className="flex h-100 w-100 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
          <div className="h-80 w-80 rounded-full bg-white"></div>
        </div>
      </div>
      <div className="my-20 font-semibold">
        <p>Connecting...</p>
      </div>
    </div>
  );
}

export default Spinner;
