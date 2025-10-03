// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Header from '../components/Header';

// const SuccessPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   const { eventTitle, registrantName } = location.state || {};

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
      
//       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="bg-white rounded-lg shadow-lg p-8 text-center">
//           {/* Success Icon */}
//           <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
//             <svg className="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//             </svg>
//           </div>
          
//           {/* Success Message */}
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">
//             Registration Successful!
//           </h1>
          
//           <p className="text-lg text-gray-600 mb-6">
//             Thank you for registering for the event.
//           </p>
          
//           {registrantName && (
//             <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
//               <p className="text-blue-800">
//                 <span className="font-semibold">Hi {registrantName}!</span> Your registration has been confirmed.
//               </p>
//             </div>
//           )}
          
//           {eventTitle && (
//             <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
//               <h3 className="font-semibold text-gray-900 mb-2">Event Details:</h3>
//               <p className="text-gray-700">{eventTitle}</p>
//             </div>
//           )}
          
//           {/* Next Steps */}
//           <div className="text-left bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
//             <h3 className="font-semibold text-yellow-800 mb-2">What's Next?</h3>
//             <ul className="text-yellow-700 space-y-1">
//               <li>• You will receive a confirmation email shortly</li>
//               <li>• Check your email for event updates and reminders</li>
//               <li>• Contact us if you have any questions</li>
//             </ul>
//           </div>
          
//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={() => navigate('/events')}
//               className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
//             >
//               View More Events
//             </button>
            
//             <button
//               onClick={() => navigate('/')}
//               className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
//             >
//               Back to Home
//             </button>
//           </div>
          
//           {/* Contact Info */}
//           <div className="mt-8 pt-6 border-t border-gray-200">
//             <p className="text-sm text-gray-500">
//               Need help? Contact us at{' '}
//               <a href="mailto:support@events.com" className="text-blue-600 hover:text-blue-700">
//                 support@events.com
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SuccessPage;
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { eventTitle, registrantName } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
            <svg className="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Registration Successful!
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Thank you for registering for the event.
          </p>

          {registrantName && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800">
                <span className="font-semibold">Hi {registrantName}!</span> Your registration has been confirmed.
              </p>
            </div>
          )}

          {eventTitle && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
              <h3 className="font-semibold text-gray-900 mb-2">Event Details:</h3>
              <p className="text-gray-700">{eventTitle}</p>
            </div>
          )}

          {/* Next Steps */}
          <div className="text-left bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <h3 className="font-semibold text-yellow-800 mb-2">What's Next?</h3>
            <ul className="text-yellow-700 space-y-1 list-disc list-inside">
              <li>You will receive a confirmation email shortly</li>
              <li>Check your email for event updates and reminders</li>
              <li>Contact us if you have any questions</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/events')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              View More Events
            </button>

            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help? Contact us at{' '}
              <a href="mailto:support@events.com" className="text-blue-600 hover:text-blue-700">
                support@events.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;