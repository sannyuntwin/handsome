"use client";

import React, { useState } from "react";
import { BookOpen, Users, Trophy, Lightbulb, ArrowLeft, FileText, Award, Target, Dumbbell, Heart, Sparkles, Brain, ChevronDown, ChevronUp } from "lucide-react";

export default function JourneyPage() {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);
  const [imageErrorStates, setImageErrorStates] = useState<{[key: string]: boolean}>({});

  const categories = [
    {
      id: 1,
      title: "Academic",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      subtopics: [
        { name: "Coursework & Projects", icon: FileText },
        { name: "Research Work", icon: BookOpen },
        { name: "Academic Achievements", icon: Award },
        { name: "Skills Developed", icon: Target },
        { name: "Study Techniques", icon: Brain },
      ],
    },
    {
      id: 2,
      title: "Volunteering",
      icon: Users,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      subtopics: [
        { name: "SMO (Computer Engineering Major)", icon: Users },
        { name: "ARSA (MFU Volunteer Club)", icon: Heart },
        { name: "MSO (Myanmar Students' Organization)", icon: Users },
      ],
    },
    {
      id: 3,
      title: "Sports & Health",
      icon: Trophy,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      subtopics: [
        { name: "Sports Teams", icon: Trophy },
        { name: "Competitions", icon: Award },
        { name: "Fitness Journey", icon: Dumbbell },
        { name: "Wellness Activities", icon: Heart },
      ],
    },
    {
      id: 4,
      title: "Personal Development",
      icon: Lightbulb,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      subtopics: [
        { name: "Hobbies & Creativity", icon: Sparkles },
        { name: "Soft Skills", icon: Brain },
        { name: "Life Lessons", icon: Lightbulb },
        { name: "Future Goals", icon: Target },
      ],
    },
  ];

  const toggleCategory = (id: number) => {
    if (selectedSubtopic) return;
    setOpenCategory(openCategory === id ? null : id);
  };

  const openSubtopic = (sub: string) => {
    setSelectedSubtopic(sub);
  };

  const goBack = () => {
    setSelectedSubtopic(null);
  };

  const currentCategory = categories.find(cat => 
    cat.subtopics.some(sub => sub.name === selectedSubtopic)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 px-4 py-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
          My University Journey
        </h1>
        <p className="text-center text-gray-600 text-lg">
          Exploring growth, experiences, and achievements
        </p>
      </div>

      {/* DETAIL PAGE */}
      {selectedSubtopic && currentCategory && (
        <div className="max-w-2xl mx-auto animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header with gradient */}
            <div className={`bg-gradient-to-r ${currentCategory.color} p-6 text-white`}>
              <div className="flex items-center gap-3 mb-2">
                {React.createElement(currentCategory.icon, { className: "w-8 h-8" })}
                <h2 className="text-2xl font-bold">{selectedSubtopic}</h2>
              </div>
              <p className="text-white/90 text-sm">
                Part of {currentCategory.title}
              </p>
            </div>

            <div className="p-6">
              {/* Book Cover */}
              <div className="w-full h-72 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6 shadow-inner overflow-hidden">
                {imageErrorStates.bookCover ? (
                  <span className="text-gray-400 text-lg">📖 Book Cover</span>
                ) : (
                  <img 
                    src="/book/MSO.jpg" 
                    alt="Book cover"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log('📖 Book cover image failed to load:', e.currentTarget.src);
                      setImageErrorStates(prev => ({ ...prev, bookCover: true }));
                    }}
                  />
                )}
              </div>

              {/* QR Code Section */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-center text-sm font-semibold text-gray-700 mb-4">
                  Scan to Learn More
                </h3>
                <div className="w-48 h-48 mx-auto bg-white rounded-xl shadow-md flex items-center justify-center overflow-hidden">
                  {imageErrorStates.qrCode ? (
                    <span className="text-gray-400">QR Code</span>
                  ) : (
                    <img 
                      src="/book/qr.png" 
                      alt="QR Code"
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        console.log('🔗 QR code image failed to load:', e.currentTarget.src);
                        setImageErrorStates(prev => ({ ...prev, qrCode: true }));
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Back Button */}
              <button
                onClick={goBack}
                className={`w-full py-3 bg-gradient-to-r ${currentCategory.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2`}
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Categories
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CATEGORY GRID */}
      {!selectedSubtopic && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isOpen = openCategory === cat.id;
            
            return (
              <div
                key={cat.id}
                className={`rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  isOpen ? 'ring-2 ring-offset-2 ring-gray-300' : ''
                }`}
              >
                {/* Category Header */}
                <div
                  onClick={() => toggleCategory(cat.id)}
                  className={`cursor-pointer bg-gradient-to-r ${cat.color} p-6 text-white`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">{cat.title}</h2>
                        <p className="text-white/80 text-sm mt-1">
                          {cat.subtopics.length} topics
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/20 p-2 rounded-lg">
                      {isOpen ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </div>
                  </div>
                </div>

                {/* SUBTOPICS */}
                {isOpen && (
                  <div className="p-6 space-y-3 animate-in slide-in-from-top duration-300">
                    {cat.subtopics.map((sub, index) => {
                      const SubIcon = sub.icon;
                      return (
                        <div
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            openSubtopic(sub.name);
                          }}
                          className={`${cat.bgColor} p-4 rounded-xl hover:shadow-md transition-all duration-200 cursor-pointer group`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`${cat.textColor} opacity-70 group-hover:opacity-100 transition-opacity`}>
                              <SubIcon className="w-5 h-5" />
                            </div>
                            <span className={`${cat.textColor} font-medium group-hover:translate-x-1 transition-transform duration-200`}>
                              {sub.name}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}