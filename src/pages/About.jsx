// src/pages/About.jsx
import React from "react";
import WhatsAppButton from "../components/WhatsAppButton";

const About = () => {
  const qualifications = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
      title: "Professional Qualification",
      description: "Bachelor's degree in Education/Science",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      title: "5+ Years Experience",
      description: "Teaching Maths & Science to O/L and A/L students",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
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
      title: "100+ Students",
      description: "Successfully guided students to excellent results",
    },
  ];

  const teachingValues = [
    {
      title: "Personal Attention",
      description:
        "Each student receives individualized focus tailored to their unique learning style and pace.",
      icon: "👤",
    },
    {
      title: "Simple Explanations",
      description:
        "Complex concepts broken down into easy-to-understand lessons that build strong foundations.",
      icon: "💡",
    },
    {
      title: "Friendly Environment",
      description:
        "A comfortable, supportive atmosphere where students feel confident to ask questions and learn.",
      icon: "🤝",
    },
    {
      title: "Exam-Focused",
      description:
        "Strategic preparation aligned with exam patterns to ensure students perform their best.",
      icon: "🎯",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(30_58_138)_1px,transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full border border-indigo-100">
              <svg
                className="w-4 h-4 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium text-indigo-900">
                Your Dedicated Tutor
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">
            About <span className="text-indigo-600">Me</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Helping Students Excel in Maths & Science
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Photo Placeholder */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Decorative element */}
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl transform rotate-3"></div>

                {/* Photo placeholder */}
                <div className="relative bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl aspect-square flex items-center justify-center overflow-hidden shadow-xl">
                  {/* Replace this div with an <img> tag when you have a photo */}
                  <div className="text-center text-white p-8">
                    <svg
                      className="w-32 h-32 mx-auto mb-4 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm opacity-75">Your Photo Here</p>
                  </div>

                  {/* To use an actual photo, replace the above div with:
                  <img 
                    src="/path-to-your-photo.jpg" 
                    alt="Tutor Name" 
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6 leading-relaxed">
                  I am a private tutor specializing in Maths and Science for
                  Grades 6–11.
                </p>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                  With over 5 years of teaching experience, I've had the
                  privilege of helping hundreds of students achieve their
                  academic goals. My passion lies in making complex concepts
                  simple and accessible, ensuring that every student not only
                  understands the material but gains the confidence to excel.
                </p>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  I believe that education is not just about memorizing formulas
                  or facts—it's about understanding the 'why' behind every
                  concept. This approach helps students develop critical
                  thinking skills that serve them well beyond examinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 sm:mb-12 text-center">
            Qualifications & Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {qualifications.map((qual, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                  {qual.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {qual.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base">
                  {qual.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              My Teaching Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              I focus on personal attention, simple explanations, and a friendly
              learning environment to help students gain confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {teachingValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{value.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories / Why Choose Me */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-indigo-100 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 text-center">
              Why Students Choose Me
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-slate-700 text-base sm:text-lg">
                  <strong className="text-slate-900">
                    Proven track record:
                  </strong>{" "}
                  Students consistently achieve excellent grades and develop
                  genuine understanding
                </p>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-slate-700 text-base sm:text-lg">
                  <strong className="text-slate-900">
                    Flexible scheduling:
                  </strong>{" "}
                  Classes are arranged to fit your availability and learning
                  needs
                </p>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-slate-700 text-base sm:text-lg">
                  <strong className="text-slate-900">
                    Continuous support:
                  </strong>{" "}
                  Available for questions and clarifications even outside of
                  class hours
                </p>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-slate-700 text-base sm:text-lg">
                  <strong className="text-slate-900">
                    Comprehensive materials:
                  </strong>{" "}
                  Custom notes, practice papers, and resources provided
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's work together to achieve your academic goals. Contact me
              today to discuss how I can help you excel in Maths and Science.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton number="94123456789" />

              <a
                href="tel:+94123456789"
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-slate-50 text-indigo-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base w-full sm:w-auto max-w-sm"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
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
                <span>Call Now</span>
              </a>
            </div>

            <p className="mt-6 text-sm opacity-75">
              Monday - Saturday, 9:00 AM - 8:00 PM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
