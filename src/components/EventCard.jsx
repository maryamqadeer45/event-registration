

// const EventCard = ({ event, onClick }) => {
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   return (
//     <div
//       onClick={() => onClick(event)}
//       className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300"
//     >
//       {/* ✅ Single Image with Fallback */}
//       {<img
//   src={event.image || 'https://via.placeholder.com/400x200?text=Event+Image'}
//   alt={event.title}
//   className="w-full h-48 object-cover"
//   loading="lazy"
// />
//     }

//       <div className="p-6">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
//             {event.title}
//           </h3>
//           <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//             {formatDate(event.date)}
//           </span>
//         </div>

//         <p className="text-gray-600 mb-4 line-clamp-3">
//           {event.description}
//         </p>

//         {event.location && (
//           <div className="flex items-center text-sm text-gray-500 mb-4">
//             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//             {event.location}
//           </div>
//         )}

//         <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-2 px-4 rounded-lg text-center">
//           Register Now
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;
import React from 'react';

const EventCard = ({ event, onClick }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div
      onClick={() => onClick(event)}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300"
    >
      <img
        src={event.image || 'https://via.placeholder.com/400x200?text=Event+Image'}
        alt={event.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
            {event.title}
          </h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {formatDate(event.date)}
          </span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {event.description}
        </p>

        {event.location && (
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.location}
          </div>
        )}

        <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-2 px-4 rounded-lg text-center">
          Register Now
        </div>
      </div>
    </div>
  );
};

export default EventCard;