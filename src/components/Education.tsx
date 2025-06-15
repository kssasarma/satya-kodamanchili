
import React from "react";
import educationData from "../data/education.json";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const { education, courses } = educationData;

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-lg text-gray-600">
            Building a strong foundation for continuous learning
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-blue-600 mb-2">{education.college}</h4>
                <p className="text-gray-600 mb-1">{education.degree}</p>
                <p className="text-gray-600 mb-1">Specialization: {education.specialization}</p>
                <p className="text-sm text-gray-500">{education.duration}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-lg mr-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
            </div>
            <div className="space-y-4">
              {courses.map((course: string, index: number) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-medium text-gray-900">{course}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
