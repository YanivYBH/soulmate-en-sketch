import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const data = [
  {
    label: "Psychological Tricks",
    value: "psychologicalTricks",
  },
  {
    label: "Body Language",
    value: "bodyLanguage",
  },
  {
    label: "Attraction",
    value: "attraction",
  },
  {
    label: "Effective Communication",
    value: "effectiveCommunication",
  },
  {
    label: "Self Confidence",
    value: "selfConfidence",
  },
  {
    label: "Empathy",
    value: "emapthy",
  },
];
function Chat() {
  const router = useRouter();
  const [submittedData, setSubmittedData] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("surveyData");
      if (!data) {
        router.push("/");
      } else {
        setSubmittedData(JSON.parse(data));
      }
    }
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      const landbotContainer = document.createElement("div");
      landbotContainer.id = "myLandbot";
      landbotContainer.style.width = "100%";

      landbotContainer.style.height = "100%";
      document
        .getElementById("chatbot-container")
        .appendChild(landbotContainer);

      new Landbot.Container({
        container: "#myLandbot",
        configUrl:
          "https://storage.googleapis.com/landbot.online/v3/H-1766637-OPXIU0K2IQODXKF1/index.json",
      });
    };

    return () => {
      // Cleanup script and container on unmount if needed
      document.head.removeChild(script);
      const landbotContainer = document.getElementById("myLandbot");
      if (landbotContainer) {
        document
          .getElementById("chatbot-container")
          .removeChild(landbotContainer);
      }
    };
  }, []);

  return (
    <div
      id="chatbot-container"

    className="block bg-purp h-screen w-screen"
    ></div>
  );
}

export default Chat;
