import React, { useEffect } from "react";
import { useRouter } from "next/router";

function FavouriteActivity({ favouriteActivity, setFavouriteActivity }) {
    const router = useRouter();


  var FavouriteActivityStatuses = [
    { status: "Reading a book", icon: "📚" },
    { status: "Watching a film/series", icon: "🎬" },
    { status: "Watching live performances", icon: "🔴" },
    { status: "Doing sports", icon: "🏃🏻" },
    
  ];





  return (
    <div>
      <div className="grid grid-cols-2 gap-10  justify-center items-center">
        {FavouriteActivityStatuses.map((val, index) => (
          <div
            key={index}
            className={`bg-[#FBFBFB] h-[120px] py-[10px] flex flex-col justify-between border border-lightgray rounded-[10px]  ${favouriteActivity === val.status ? "border border-[#B14AD0] border-width" : "none"}`}
            onClick={() => {setFavouriteActivity(val.status) ;
                router.push("/survey/18")} }
          >
            <div className="my-5 text-[34px]  text-center">
              <i className="font-normal" > {val.icon} </i>
            </div>

            <p
              className="text-center font-normal text-Black font-popins  text-[14px]"
              
            >
              {val.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavouriteActivity;
