import React from "react";
import Typical from "react-typical";
import "../index.css";

const TextAnimation = () => {
  return (
    <div className="textAnimation">
      <p>
        Recycling is{" "}
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "Sustainable",
            3000,
            "Responsible",
            3000,
            "Beneficial",
            3000,
            "Eco-friendly",
            3000,
            "Efficient",
            3000,
            "Innovative",
            3000,
            "Necessity",
            3000,
            "Conscious",
            3000,
            "Progressive",
            3000,
          ]}
        />
      </p>
    </div>
  );
};

export default TextAnimation;
