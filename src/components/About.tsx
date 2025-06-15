
import React from "react";
import aboutData from "../data/about.json";
import { Code, Server, Brain, Users } from "lucide-react";

const iconMap: Record<string, JSX.Element> = {
  Code: <Code size={24} />,
  Server: <Server size={24} />,
  Brain: <Brain size={24} />,
  Users: <Users size={24} />
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A passionate software engineer with a proven track record of delivering innovative solutions 
            and leading technical initiatives across multiple domains.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutData.highlights.map((highlight, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 mb-4 flex justify-center">
                {iconMap[highlight.icon] || null}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-600">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
