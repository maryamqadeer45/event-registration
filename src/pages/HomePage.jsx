// import React from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       <Header />
      
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
//             <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//               <div className="sm:text-center lg:text-left">
//                 <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
//                   <span className="block xl:inline">Welcome to</span>{' '}
//                   <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 xl:inline">
//                     Event Registration
//                   </span>
//                 </h1>
//                 <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
//                   Discover amazing events and register with ease. Join workshops, seminars, and networking events 
//                   that will help you grow and connect with like-minded individuals in the tech community.
//                 </p>
//                 <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
//                   {
//                   <div className="flex justify-center mt-8 space-x-4">
//   <Link
//     to="/events"
//     className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
//   >
//     View Events
//   </Link>

//   <Link
//     to="/admin"
//     className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
//   >
//     Admin Panel
//   </Link>
// </div>}

//                 </div>
//               </div>
//             </main>
//           </div>
//         </div>
//         <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
//           <div className="h-56 w-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center relative">
//             <div className="absolute inset-0 bg-black opacity-20"></div>
//             <div className="text-white text-center relative z-10">
//               <div className="text-8xl mb-6 animate-bounce">🎉</div>
//               <h3 className="text-3xl font-bold mb-2">Join Amazing Events</h3>
//               <p className="text-xl opacity-90">Connect, Learn, and Grow</p>
//               <div className="mt-6 flex justify-center space-x-4">
//                 <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
//                 <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
//                 <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
//               <div className="text-gray-600">Events Hosted</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
//               <div className="text-gray-600">Happy Participants</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
//               <div className="text-gray-600">Expert Speakers</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:text-center">
//             <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
//             <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//               Why Choose Our Platform
//             </p>
//             <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
//               We make event registration simple, secure, and user-friendly with cutting-edge technology.
//             </p>
//           </div>

//           <div className="mt-16">
//             <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
//               <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="absolute -top-4 left-6 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
//                   <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg leading-6 font-semibold text-gray-900 mb-2">Easy Registration</h3>
//                 <p className="text-base text-gray-600">
//                   Simple and intuitive registration process that takes just a few minutes. No complicated forms or lengthy procedures.
//                 </p>
//               </div>

//               <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="absolute -top-4 left-6 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
//                   <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg leading-6 font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
//                 <p className="text-base text-gray-600">
//                   Your data is safe with our secure Firebase backend and encryption. We follow industry best practices for data protection.
//                 </p>
//               </div>

//               <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="absolute -top-4 left-6 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg">
//                   <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg leading-6 font-semibold text-gray-900 mb-2">Mobile Friendly</h3>
//                 <p className="text-base text-gray-600">
//                   Access and register for events from any device, anywhere, anytime. Fully responsive design for all screen sizes.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
//             Ready to Join Amazing Events?
//           </h2>
//           <p className="mt-4 text-xl text-blue-100">
//             Don't miss out on learning opportunities and networking events.
//           </p>
//           <div className="mt-8">
//             <Link
//               to="/events"
//               className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105"
//             >
//               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//               Get Started Now
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       <Header />

//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
//             <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//               <div className="sm:text-center lg:text-left">
//                 <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
//                   <span className="block xl:inline">Welcome to</span>{' '}
//                   <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 xl:inline">
//                     Event Registration
//                   </span>
//                 </h1>
//                 <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
//                   Discover amazing events and register with ease. Join workshops, seminars, and networking events that will help you grow and connect with like-minded individuals in the tech community.
//                 </p>
//                 <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
//                   <div className="flex justify-center mt-8 space-x-4">
//                     <Link
//                       to="/events"
//                       className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
//                     >
//                       View Events
//                     </Link>

//                     <Link
//                       to="/admin"
//                       className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
//                     >
//                       Admin Panel
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </main>
//           </div>
//         </div>

//         {/* Right Side Visual */}
//         <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
//           <div className="h-56 w-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center relative">
//             <div className="absolute inset-0 bg-black opacity-20"></div>
//             <div className="text-white text-center relative z-10">
//               <div className="text-8xl mb-6 animate-bounce">🎉</div>
//               <h3 className="text-3xl font-bold mb-2">Join Amazing Events</h3>
//               <p className="text-xl opacity-90">Connect, Learn, and Grow</p>
//               <div className="mt-6 flex justify-center space-x-4">
//                 <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
//                 <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
//                 <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <div>
//               <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
//               <div className="text-gray-600">Events Hosted</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
//               <div className="text-gray-600">Happy Participants</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
//               <div className="text-gray-600">Expert Speakers</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:text-center">
//             <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
//             <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//               Why Choose Our Platform
//             </p>
//             <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
//               We make event registration simple, secure, and user-friendly with cutting-edge technology.
//             </p>
//           </div>

//           <div className="mt-16 grid md:grid-cols-3 gap-8">
//             {/* Feature Cards */}
//             {/* You can keep your feature cards as-is here */}
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
//             Ready to Join Amazing Events?
//           </h2>
//           <p className="mt-4 text-xl text-blue-100">
//             Don't miss out on learning opportunities and networking events.
//           </p>
//           <div className="mt-8">
//             <Link
//               to="/events"
//               className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105"
//             >
//               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//               Get Started Now
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Welcome to</span>{' '}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 xl:inline">
                    Event Registration
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover amazing events and register with ease. Join workshops, seminars, and networking events that will help you grow and connect with like-minded individuals in the tech community.
                </p>
                <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="flex justify-center mt-8 space-x-4">
                    <Link
                      to="/events"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                    >
                      View Events
                    </Link>

                    <Link
                      to="/admin"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                    >
                      Admin Panel
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Right Side Visual */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="text-white text-center relative z-10">
              <div className="text-8xl mb-6 animate-bounce">🎉</div>
              <h3 className="text-3xl font-bold mb-2">Join Amazing Events</h3>
              <p className="text-xl opacity-90">Connect, Learn, and Grow</p>
              <div className="mt-6 flex justify-center space-x-4">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Events Hosted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Participants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Speakers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Platform
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              We make event registration simple, secure, and user-friendly with cutting-edge technology.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {/* You can keep your feature cards as-is here */}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Join Amazing Events?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Don't miss out on learning opportunities and networking events.
          </p>
          <div className="mt-8">
            <Link
              to="/events"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;