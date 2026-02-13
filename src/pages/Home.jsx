// src/pages/Home.jsx
import React from "react";
import WhatsAppButton from "../components/WhatsAppButton";

const Home = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Individual & Small Groups",
      description: "Personalized attention in focused learning environments",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Experienced Teaching",
      description: "Student-focused approach that builds true understanding",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      ),
      title: "Easy Contact",
      description: "Quick response via WhatsApp or phone",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Subtle Background Texture */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(30_58_138)_1px,transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      {/* Main Container */}
      <div className="relative">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Status Badge */}
            <div className="flex justify-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full border border-indigo-100">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-indigo-900">
                  Accepting New Students
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 text-center mb-6 sm:mb-8 leading-tight tracking-tight">
              Private Maths &<br className="hidden sm:block" />
              <span className="text-indigo-600"> Science Tutoring</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 text-center max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed px-4">
              Helping students understand concepts clearly and gain confidence
              in exams. Individual & small group classes with experienced
              teaching.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col items-center gap-4 sm:gap-5">
              <WhatsAppButton number="94123456789" />

              {/* Alternative Contact */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-sm text-slate-500">
                <span>or call directly</span>
                <a
                  href="tel:+94123456789"
                  className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <svg
                    className="w-4 h-4 transition-transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +94 12 345 6789
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>

        {/* Features Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {features.map((feature, index) => (
                <div key={index} className="group relative">
                  {/* Card */}
                  <div className="h-full p-6 sm:p-8 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50 transition-all duration-300">
                    {/* Icon */}
                    <div className="w-14 h-14 mb-5 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600 group-hover:border-indigo-300 group-hover:bg-indigo-50 transition-all duration-300">
                      {feature.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 sm:p-10 lg:p-12 border border-indigo-100">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-center">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">
                    5+
                  </div>
                  <div className="text-sm sm:text-base text-slate-600">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">
                    100+
                  </div>
                  <div className="text-sm sm:text-base text-slate-600">
                    Students Taught
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">
                    O/L & A/L
                  </div>
                  <div className="text-sm sm:text-base text-slate-600">
                    All Levels
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default Home;
