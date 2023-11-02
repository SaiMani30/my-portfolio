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
      const interval = setInterval(() => {
        const currentTime = Date.now();
        const progress = Math.min(1, (currentTime - startTime) / animationDuration);

        const newValues = animatedValues.map((currentValue, index) => {
          const targetValue = achievementsList[index].value;
          return Math.min(targetValue, Math.floor(progress * targetValue));
        });

        setAnimatedValues(newValues);

        if (progress >= 1) {
          clearInterval(interval);
        }
      }, 16); // Update the numbers roughly every 16ms (60 FPS)
    };

    animateNumbers();
  }, [animatedValues]); // Add animatedValues as a dependency

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {animatedValues[index]} {achievement.postfix}
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
