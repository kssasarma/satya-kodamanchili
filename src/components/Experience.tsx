
import React from "react";
import experienceData from "../data/experience.json";
import { Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600">
            A journey of continuous growth and technical excellence
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>
          <div className="space-y-12">
            {experienceData.experiences.map((exp: any, index: number) => (
              <div key={index} className="relative md:ml-12">
                <div className="absolute -left-8 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hidden md:block"></div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <h4 className="text-xl font-semibold text-blue-600 mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex items-center text-gray-600 bg-white px-4 py-2 rounded-lg">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm font-medium">{exp.duration}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement: string, achievementIndex: number) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
