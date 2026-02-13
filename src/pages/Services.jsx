// src/pages/Services.jsx
import React from "react";
import WhatsAppButton from "../components/WhatsAppButton";

const Services = () => {
  const subjects = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Mathematics",
      grades: "Grades 6–11",
      topics: [
        "Algebra & Equations",
        "Geometry & Trigonometry",
        "Statistics & Probability",
        "Advanced Problem Solving",
      ],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      title: "Science",
      grades: "Grades 6–11",
      topics: [
        "Physics & Chemistry",
        "Biology & Life Sciences",
        "Practical Experiments",
        "Theory & Applications",
      ],
      color: "from-emerald-500 to-teal-600",
    },
  ];

  const classTypes = [
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "Individual Classes",
      description:
        "One-on-one attention tailored to your learning style and pace",
      features: [
        "Personalized lesson plans",
        "Flexible scheduling",
        "Focused attention on weak areas",
        "Custom practice materials",
      ],
      badge: "Most Popular",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Small Group Classes",
      description:
        "Collaborative learning with 3-5 students for interactive sessions",
      features: [
        "Peer learning opportunities",
        "Cost-effective option",
        "Interactive discussions",
        "Competitive environment",
      ],
      badge: null,
    },
  ];

  const teachingApproach = [
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Clear Explanations",
      description:
        "Breaking down complex concepts into simple, understandable parts",
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      title: "Exam-Focused Lessons",
      description:
        "Strategic preparation aligned with O/L and A/L exam patterns",
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
      title: "Personal Attention",
      description:
        "Dedicated support for each student's unique learning journey",
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
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              <span className="text-sm font-medium text-indigo-900">
                Comprehensive Tutoring Programs
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">
            Our <span className="text-indigo-600">Services</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Maths & Science Tutoring for Grades 6–11
          </p>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 sm:mb-12 text-center">
            Subjects We Offer
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 overflow-hidden"
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${subject.color} p-6 sm:p-8`}>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                      {subject.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {subject.title}
                      </h3>
                      <p className="text-white/90 font-medium">
                        {subject.grades}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
                    Key Topics Covered
                  </h4>
                  <ul className="space-y-3">
                    {subject.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-slate-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Types Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 sm:mb-12 text-center">
            Class Types
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {classTypes.map((classType, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 p-6 sm:p-8"
              >
                {/* Badge */}
                {classType.badge && (
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full">
                      {classType.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-5">
                  {classType.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  {classType.title}
                </h3>
                <p className="text-slate-600 mb-6">{classType.description}</p>

                {/* Features */}
                <ul className="space-y-3">
                  {classType.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-700 text-sm sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Our Teaching Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Clear explanations, exam-focused lessons, and personal attention
              for each student
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {teachingApproach.map((approach, index) => (
              <div
                key={index}
                className="text-center p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4">
                  {approach.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {approach.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 sm:p-12 border border-indigo-100 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your learning goals and find the
              perfect tutoring plan for your needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton number="94123456789" />

              <a
                href="tel:+94123456789"
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-slate-50 text-indigo-600 font-semibold rounded-full shadow-lg border-2 border-indigo-200 hover:border-indigo-300 transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base w-full sm:w-auto max-w-sm"
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

            <p className="mt-6 text-sm text-slate-500">
              Available Monday - Saturday, 9:00 AM - 8:00 PM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
