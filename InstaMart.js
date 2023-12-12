import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border-4 border-Primary p-2 m-2">
      <h3 className="font-bold text-xl"> {title}</h3>
      {isVisible ? (
        <button
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const InstaMart = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showTeam: false,
    showCarees: false,
  });
  return (
    <>
      <h1 className="text-4xl font-bold">InstaMart</h1>
      <h1 className="text-2xl font-bold">100s of companies inside it</h1>

      <Section
        title={"About Instamart"}
        description={
          "Unveil my *PORTFOLIO*, a reflection of my dedication to delivering impactful web solutions, blending technical expertise with a keen eye for design and user experience that demonstrate proficiency …"
        }
        isVisible={sectionConfig.showAbout}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: true,
            showTeam: false,
            showCarees: false,
          });
        }}
      />

      <Section
        title={"Team Instamart"}
        description={
          "Unveil my *PORTFOLIO*, a reflection of my dedication to delivering impactful web solutions, blending technical expertise with a keen eye for design and user experience that demonstrate proficiency …"
        }
        isVisible={sectionConfig.showTeam}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: false,
            showTeam: true,
            showCarees: false,
          });
        }}
      />

      <Section
        title={"Carees Instamart"}
        description={
          "Unveil my *PORTFOLIO*, a reflection of my dedication to delivering impactful web solutions, blending technical expertise with a keen eye for design and user experience that demonstrate proficiency …"
        }
        isVisible={sectionConfig.showCarees}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showCarees: true,
          });
        }}
      />
    </>
  );
};

export default InstaMart;
