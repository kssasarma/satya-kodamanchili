
import React from "react";
import skillsData from "../data/skills.json";

const Skills = () => {
  // Debug: Log the imported skillsData structure
  console.log("skillsData", skillsData);

  const categories = Array.isArray(skillsData.skillCategories)
    ? skillsData.skillCategories
    : [];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600">
            A comprehensive toolkit for modern software development
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.length === 0 && (
            <div className="col-span-full text-center text-red-500">
              No skills data found. Please check the skills.json file.
            </div>
          )}
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {Array.isArray(category.skills)
                  ? category.skills.map((skill: string, skillIndex: number) => (
                      <div
                        key={skillIndex}
                        className={
                          `w-full block min-h-[2.5rem] flex items-center justify-center
                          bg-gradient-to-r ${category.color}
                          text-white font-medium text-center rounded-lg
                          px-4 py-2 hover:scale-105 transition-transform duration-200
                          ` +
                          // fallback solid color if gradient fails
                          (category.color.includes("blue") ? " bg-blue-500"
                          : category.color.includes("green") ? " bg-green-500"
                          : category.color.includes("purple") ? " bg-purple-500"
                          : category.color.includes("orange") ? " bg-orange-500"
                          : " bg-gray-500")
                        }
                      >
                        {skill}
                      </div>
                    ))
                  : <div className="text-sm text-gray-400">No skills listed.</div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
