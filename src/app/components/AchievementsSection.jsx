"use client";
import React, { useEffect, useState } from "react";

const achievementsList = [
  {
    metric: "Projects",
    value: 20,
    postfix: "+",
  },
  {
    metric: "Internships",
    value: 5,
    postfix: "+",
  },
  {
    metric: "Certifications",
    value: 20,
    postfix: "+",
  },
  {
    metric: "Years",
    value: 2,
    postfix: "+",
  },
];

const AchievementsSection = () => {
  const [animatedValues, setAnimatedValues] = useState(
    achievementsList.map(() => 0)
  );

  useEffect(() => {
    const animationDuration = 1000; // 1 second

    const animateNumbers = () => {
      const startTime = Date.now();

      const updateValues = () => {
        const currentTime = Date.now();
        const progress = Math.min(1, (currentTime - startTime) / animationDuration);

        const newValues = animatedValues.map((currentValue, index) => {
          const targetValue = achievementsList[index].value;
          return Math.min(targetValue, Math.floor(progress * targetValue));
        });

        setAnimatedValues(newValues);

        if (progress < 1) {
          requestAnimationFrame(updateValues);
        }
      };

      requestAnimationFrame(updateValues);
    };

    animateNumbers();
  }, []); // No dependencies needed

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-4xl font-bold flex flex-row" style={{ background: 'linear-gradient(90deg, #0ea5ea, #0bd1d1 51%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {animatedValues[index]}&nbsp;{achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
