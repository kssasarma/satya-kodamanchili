
import React from "react";
import awardsData from "../data/awards.json";
import { Trophy, Star } from "lucide-react";

const Awards = () => {
  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
          <p className="text-lg text-gray-600">
            Acknowledgments for exceptional contributions and achievements
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-full">
                <Trophy size={32} className="text-white" />
              </div>
            </div>
            <div className="space-y-6">
              {awardsData.awards.map((award: string, index: number) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0 mr-4">
                    <Star size={20} className="text-yellow-500 mt-1" />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
