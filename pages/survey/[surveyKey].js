import React from "react";
import Container from "../../components/Container";
import { useState , useRef} from "react";
import key from "../../assets/key.png";
import { LiaStarSolid } from "react-icons/lia";
import women from "../../assets/women.png";
import money from "../../assets/dollar-banknote.png";
import herb from "../../assets/herb.png";
import attract from "../../assets/attract.png";
import effective from "../../assets/effective.png";
import self from "../../assets/self.png";
import empathy from "../../assets/empathy.png";
import { useEffect } from "react";
import StepOne from "../../components/stepOne";
import { BsArrowLeftShort } from "react-icons/bs";
import comma from "../../assets/comma.svg";
import birthchart from "../../assets/bannerbirth.png";
import DatePicker from "../../components/dateInput";
import Footer from "@/components/Footer.js";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { Fade } from "react-awesome-reveal";
import Spinner from "@/components/Spinner";
import HourInput from "@/components/HourInput";
import RelationshipStatus from "@/components/RelationshipStatus";
import GenderStatus from "@/components/Gender";
import BirthCartMode from "@/components/BirthCartMode";
import PersonalLife from "@/components/personLife";
import Personality from "@/components/Personality";
import PersonalityNature from "@/components/PersonalityNature";
import StarSign from "@/components/StarSign";
import Misunderstood from "@/components/Misunderstood";
import Partner from "@/components/Partner";
import Challenges from "@/components/Challenges";
import FavouriteActivity from "@/components/FavouriteActivity";
import PlaceType from "@/components/PlaceType";
import MiddleScreen from "@/components/MiddleScreen";
import Yougetmain from "@/components/Offer/Yougetmain";

function Survey() {
  const router = useRouter();
  const { surveyKey } = router.query;

  // const [formData, setFormData] = useState([]);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [email, setEmail] = useState("");
  const [date, SetDate] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [daysInMonth, setDaysInMonth] = useState(31);
  const [isRequired, setIsRequired] = useState(false);
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);
  const [RelationShip, setRelationShip] = useState("");
  const [Gender, setGender] = useState("");
  const [birthdayCardMode, setbirthdayCardMode] = useState(null);
  const [personLife, setPersonLife] = useState(null);
  const [personality, setPersonality] = useState(null);
  const [personalityTraits, setPersonalityTraits] = useState([]);
  const [zodiacSigns, setZodiacSigns] = useState([]);
  const [misunderstood, setMisunderstood] = useState();
  const [partner, setPartner] = useState();
  const [challenges, setChallenges] = useState();
  const [favouriteActivity, setFavouriteActivity] = useState(null);
  const [placeType, setPlaceType] = useState(null);
  const [Surname, setSurname] = useState(null);
  const [birthplace, setBirthplace] = useState('');

  const value = {
    RelationShip,
    birthdayCardMode,
    personLife,
    personality,
    personalityTraits,
    zodiacSigns,
    misunderstood,
    partner,
    challenges,
    favouriteActivity,
    placeType,
    Gender,
    Surname,
    month,
    day,
    year,
    birthplace,
  };
  
  const [months, setInput1] = useState('');
  const [days, setInput2] = useState('');
  const [years, setInput3] = useState('');

  const [hours, setInputhours] = useState('');
  const [minutes, setInputminutes] = useState('');
  
  const input2minutes = useRef(null);

  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  console.log(value, "value");

  const handleInput2Minutes = (e) => {
    setInputminutes(e.target.value);
};

const handleInput1Hours = (e) => {
  const value = e.target.value;
  setInputhours(value);
    if (value.length === 2) {
      input2minutes.current.focus();
    }
  
  // Add similar logic if there's a next input to focus
};
const handleInput1Change = (e) => {
    const value = e.target.value;
    setInput1(value);
    if (value.length === 2) {
        input2Ref.current.focus();
    }
};

const handleInput2Change = (e) => {
  const value = e.target.value;
  setInput2(value);
  if (value.length === 2) {
      input3Ref.current.focus();
  }
};
const handleInput3Change = (e) => {
  setInput3(e.target.value);
  // Add similar logic if there's a next input to focus
};

  const data = [
    {
      img: key,
      label: "Finding My Soulmate",
      describe: "Improve my love life, find my special someone.",
      value: "Soulmate",
    },
    {
      img: money,
      label: "Career and Finance Success",
      describe: "To get ahead in my career, increase my money & wealth.",
      value: "Career",
    },
    {
      img: herb,
      label: "Health Harmony & Healing",
      describe: "Boost my health and energy, and feel better every day.",
      value: "Healthy",
    },
  ];

  var placeOfBirth = [
    { name: "Karachi", population: 14916456, landmarks: ["Clifton Beach"] },
    {
      name: "Lahore",
      population: 12188000,
      landmarks: ["Badshahi Mosque", "Lahore Fort"],
    },
    {
      name: "Islamabad",
      population: 1014825,
      landmarks: ["Faisal Mosque", "Daman-e-Koh"],
    },
    {
      name: "Rawalpindi",
      population: 2203188,
      landmarks: ["Pakistan Army Museum", "Rawal Lake"],
    },
    // Add more cities as needed
  ];

  // const handleCheckboxChange = (value, i) => {
  //   // if(Index.includes(i)){
  //   //   const newIndex=Index.filter((item,index)=>item!==i);
  //   // setIndex(newIndex)
  //   // console.log(Index,"okokok")
  //   // }
  //   //   else{
  //   //     setIndex([...Index,Index]);
  //   //   }

  //   if (formData.includes(value)) {
  //     const newData = formData.filter((item, index) => item != value);
  //     setFormData(newData);
  //     const newIndex = selectedIndexes.filter((item, index) => item != i);
  //     setSelectedIndexes(newIndex);
  //   } else {
  //     setFormData([...formData, value]);
  //     setSelectedIndexes([...selectedIndexes, i]);
  //   }
  // };

  const handleTroubleSelect = (value, i) => {
    // if(Index.includes(i)){
    //   const newIndex=Index.filter((item,index)=>item!==i);
    // setIndex(newIndex)
    // console.log(Index,"okokok")
    // }
    //   else{
    //     setIndex([...Index,Index]);
    //   }

    if (goal === value) {
      setGoal("");
    } else {
      setGoal(value);
    }
  };

  const handleSubmit = (e, value) => {
    if (e && e.preventDefault) {
      e.preventDefault(); // Ensure that e has preventDefault method
    }
    if (step === 1) {
      router.push("/survey/2");
    } else if (step === 2) {
      router.push("/survey/3");
    } else if (step === 3) {
      router.push("/survey/4");
    } else if (step === 4) {
      router.push("/survey/5");
    } else if (step === 5) {
      const traits = personalityTraits.map(object => object.trait);
      const submittedData = {
        birthdate: months + "-" + days + "-" + years,
        name:Surname,
        placeTypes:placeType,
        personalityTraits1:traits.toString()

      };

      localStorage.setItem("surveyData", JSON.stringify(submittedData));
      // router.push(
      //   `/chat?goal=${goal}&name=${name}&birthdate=${
      //     selectedDay + "-" + selectedMonth + "-" + selectedYear
      //   }&email=${email}`s
      // );
      router.push("/survey/6");
    }  else {
      router.push("/");
    }
  };

  const handleGoBack = () => {
    if (step > 0) {
      // setStep(step - 1);
      router.back();
    }
  };

  useEffect(() => {
    if (surveyKey) setStep(parseInt(surveyKey));
  }, [surveyKey]);

  console.log("survey key", surveyKey, step);
  return (
    <Container medium>
      {" "}
      <div className="block py-30 z-[3000]">
        <div className="flex justify-between items-center">
          <div className="">
            <button onClick={handleGoBack}>
              <BsArrowLeftShort className="text-md font-bold" />
            </button>
          </div>

          <div className="logo-margin">
            <Link href="/">
              <Image src={Logo} width={150} alt="" />
            </Link>
          </div>

          <div className="progress">
            <p className="">{step} / 6</p>
          </div>
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="padding-5">
        {step === 1 ? (
           <Fade cascade={true} triggerOnce={false}>
           <p className="text-center text-Black font-popins ml-10 mb-5  font-size16">
           Before we begin
               </p>
         <h1 className="text-center text-Black font-popins font-semibold text-xs title-costume">
         What is your gender ?
         </h1>

         <GenderStatus
           setGender={setGender}
           Gender={Gender}
         />
       </Fade>
        )  : step === 2 ? (
          <Fade cascade={true} triggerOnce={false}>
             
             <Image alt="" src={birthchart} className="center-img"/>
                
                
                <h1 className="text-center text-Black font-popins font-semibold text-xs title-costume ">
                  What is your Birthdate
                </h1>
            <div className="flex items-center mt-15 px-15 py-25 justify-start border-Border  hover:border-brown rounded-2xl border-2 w-full">
              <div className="flex items-center">
                <BsFillPersonVcardFill className="text-brown" size={24} />

                <p className="mx-10 text-sm0 "></p>
              </div>

              <input
                type="number"
                pattern="[0-9]*"
                className="border focus:outline-none border-none font-medium w-full"
                placeholder="Month"
                maxLength={3}
                required                
                onChange={handleInput1Change}
                value={months}
              />
               <input
                type="number"
                pattern="[0-9]*"
                className="border focus:outline-none border-none font-medium w-full"
                placeholder="Day"
                maxLength={3}
                required
                ref={input2Ref}
                onChange={handleInput2Change}
                value={days}
              />
               <input
                type="number"
                pattern="[0-9]*"
                className="border focus:outline-none border-none font-medium w-full"
                placeholder="Year"
                required
                ref={input3Ref}
                maxLength={5}
                onChange={handleInput3Change}
                value={years}
              />
            </div>
            

            <button
              disabled={
                years == "" || months == "" || days == "" || years.length >= 5 || years.length <= 3 || months.length >= 3 || days.length >= 3 
              }
              type="submit"
              className=" w-[100%] md:w-[100%] top-[87%] text-white font-semibold bg-brown disabled:bg-white disabled:text-brown mt-20 py-25 px-20 justify-between border-Border hover:border-brown rounded-2xl border-2"
            >
              Next
            </button>
           
          </Fade>
        ) : step === 3 ? (
 
          <Fade cascade={true} triggerOnce={false}>
             <h1 className="text-center text-Black font-popins font-semibold text-xs title-costume">
              Which of the following traits reflect your personality?
            </h1>

            <p className="text-center text-Black text-[15px]">
              Please mark the best options for you. This data will match the
              information that comes from the birth chart.
            </p>
            <PersonalityNature
              setPersonalityTraits={setPersonalityTraits}
              personalityTraits={personalityTraits}
            />
            <button
              type="submit"
              className=" w-[80%] md:w-[80%] top-[87%] text-white font-semibold flex mx-auto bg-brown disabled:bg-white disabled:text-brown mt-20 py-[10px] px-[10px] justify-center border-Border hover:border-brown rounded-2xl border-2 font-size-20"
            >
              Next
            </button>
          </Fade>
        
        ) : step === 4 ? (          
          <Fade cascade={true} triggerOnce={false}>
            <h1 className="text-center text-Black font-popins font-semibold text-xs title-costume">
                Where would you like to spend rest of your life?
              </h1>
          <PlaceType setPlaceType={setPlaceType} placeType={placeType} />
          </Fade>
          ) : step === 5 ? (
          <>
          <Fade cascade={true} triggerOnce={false}>
          <p className="text-center text-Black font-popins ml-10 mb-5  font-size16">
                  Let us know you better
                </p>
            <h1 className="text-center text-Black font-popins font-semibold text-xs title-costume ">
              Please Enter your Full Name{" "}
            </h1>
            <div className="flex items-center mt-15 px-15 py-25 justify-start border-Border  hover:border-brown rounded-2xl border-2 w-full">
              <div className="flex items-center">
                <BsFillPersonVcardFill className="text-brown" size={24} />

                <p className="mx-10 text-sm0 "></p>
              </div>

              <input
                type="text"
                className="border focus:outline-none border-none font-medium w-full"
                placeholder="Enter Your Name"
                required
                onChange={(e) => setSurname(e.target.value)}
                value={Surname}
              />
            </div>
            <button
              disabled={Surname === ""}
              type="submit"
              className=" w-[100%] md:w-[100%] top-[87%] text-white font-semibold bg-brown disabled:bg-white disabled:text-brown mt-20 py-25 px-20 justify-between border-Border hover:border-brown rounded-2xl border-2"
            >
             Next
            </button>
            <div className="border-2 md:mx-[0px] border-grayborder bg-white rounded-2xl px-10 md:mt-0 mt-30 py-5 paddings-c">
              <div className="flex items-center justify-between p-20 ">
                <div className="flex items-center">
                  <div className="ml-[-20px]">
                    <span className="border-2 rounded-full p-5 h-5 bg-lGray">
                      AB
                    </span>
                  </div>

                  <div className="mx-20">
                    <p className="text-xs text-brown">Ava.B</p>

                    <p className="text-[12px]">11/03/2022</p>
                  </div>
                </div>

                <div className="flex margin-15px">
                  <LiaStarSolid className="text-Gold" />
                  <LiaStarSolid className="text-Gold" />
                  <LiaStarSolid className="text-Gold" />
                  <LiaStarSolid className="text-Gold" />
                  <LiaStarSolid className="text-Gold" />
                </div>
              </div>

              <div className="flex justify-start items-start">
                <Image alt="" src={comma} />
                <p className="ml-10 mb-5 italic font-size16">
                Finding my soulmate seemed impossible until I tried this. The
                  personalized insights guided me towards the love of my life,
                  and I could not be happier. Thank you! </p>
              </div>
            </div>
          </Fade>
          </>
        ): step === 6 ? (
          
          <>
            <Fade cascade={true} triggerOnce={false}>
              <h1 className="text-center text-Black font-popins font-semibold text-xs title-costume">
              Please wait while we connect you with your personal guidance
              </h1>
              <Fade>
                <Spinner />
              </Fade>
            </Fade>
          </>
        ) : (
          <></>
        )}
       
      </form>
    </Container>
  );
}

export default Survey;
