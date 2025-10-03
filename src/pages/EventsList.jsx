
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';
// import EventCard from '../components/EventCard';
// // import SkeletonCard from '../components/SkeletonCard';
// import { getEvents } from '../firebase/firestore';
// import eidFestivalImg from '../assets/eid festival.webp';
// import flowersExpoImg from '../assets/flowers expo.jpg';
// import funFeastImg from '../assets/fun and feast.jpg';
// import gamingExpoImg from '../assets/gaming expo.jpg';
// import restaurantOpeningImg from '../assets/resturant opening.jpg';
// import trainingSkillsImg from '../assets/training of skills.jpg';

// const EventsList = () => {
//   const [events, setEvents] = useState([]);
//   // const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         // setLoading(true);
//         const eventsData = await getEvents();

//         if (!eventsData || eventsData.length === 0) {
//           setEvents([
//             {
//               id: 1,
//               image: eidFestivalImg,
//               title: "Eid Festival",
//               description: "Celebrate the joy of Eid with cultural performances and food stalls.",
//               date: "2025-10-01",
//               venue: "Faisalabad City Park",
//               registrations: 200
//             },
//             {
//               id: 2,
//               image: flowersExpoImg,
//               title: "Flowers Expo",
//               description: "A vibrant display of floral arrangements and gardening workshops.",
//               date: "2025-10-08",
//               venue: "Lahore Botanical Garden",
//               registrations: 150
//             },
//             {
//               id: 3,
//               image: funFeastImg,
//               title: "Fun and Feast",
//               description: "Enjoy games, food, and music in a lively outdoor setting.",
//               date: "2025-10-15",
//               venue: "Multan Fairgrounds",
//               registrations: 180
//             },
//             {
//               id: 4,
//               image: gamingExpoImg,
//               title: "Gaming Expo",
//               description: "Experience the latest in gaming tech and tournaments.",
//               date: "2025-10-22",
//               venue: "Karachi Convention Center",
//               registrations: 220
//             },
//             {
//               id: 5,
//               image: restaurantOpeningImg,
//               title: "Restaurant Opening",
//               description: "Grand opening of a new culinary hotspot with tasting sessions.",
//               date: "2025-10-29",
//               venue: "Islamabad Food Street",
//               registrations: 90
//             },
//             {
//               id: 6,
//               image: trainingSkillsImg,
//               title: "Training of Skills",
//               description: "Workshops on coding, design, and entrepreneurship for youth.",
//               date: "2025-11-05",
//               venue: "Peshawar Innovation Hub",
//               registrations: 130
//             }
//           ]);
//         } else {
//           setEvents(eventsData);
//         }
//       } catch (err) {
//         setError('Failed to load events. Please try again later.');
//         console.error('Error fetching events:', err);
//       } finally {
//         // setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleCardClick = (event) => {
//     setSelectedEvent(event);
//   };

//   const closeModal = () => {
//     setSelectedEvent(null);
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Header />
//         <div className="flex justify-center items-center h-96">
//           <div className="text-center">
//             <div className="text-red-500 text-6xl mb-4">⚠️</div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
//             <p className="text-gray-600 mb-4">{error}</p>
//             <button
//               onClick={() => window.location.reload()}
//               className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               Try Again
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover amazing events and workshops. Register now to secure your spot!
//           </p>
//          </div> 
//  {/* /* {loading
//             ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
//             : events.map((event) => (
//                 <EventCard key={event.id} event={event} onClick={() => handleCardClick(event)} />
//               ))} */}  
// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//   {events.map((event) => (
//     <EventCard key={event.id} event={event} onClick={() => handleCardClick(event)} />
//   ))}
// </div>

//         {/* {events.length > 0 && !loading && ( */   
//                                 }
//          {events.length > 0 && (  
//           <div className="mt-16 text-center">
//             <div className="bg-white rounded-lg shadow-lg p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                We're constantly updating our lineup with fresh experiences and opportunities. Please check back soon or explore other categories to find something that inspires you
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 We're constantly adding new events. Stay tuned for more exciting opportunities!
//               </p>
//               <Link
//                 to="/"
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
//               >
//                 Back to Home
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>

//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
//             <h2 className="text-xl font-bold text-purple-800 mb-4">
//               Register for {selectedEvent.title}
//             </h2>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full border rounded px-3 py-2"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="w-full border rounded px-3 py-2"
//               />
//               <button
//                 type="submit"
//                 className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
//               >
//                 Submit
//               </button>
//             </form>
//             <button
//               onClick={closeModal}
//               className="mt-4 text-sm text-gray-500 hover:underline"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventsList;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';
// import EventCard from '../components/EventCard';
// import { getEvents } from '../firebase/firestore';
// import eidFestivalImg from '../assets/eid festival.webp';
// import flowersExpoImg from '../assets/flowers expo.jpg';
// import funFeastImg from '../assets/fun and feast.jpg';
// import gamingExpoImg from '../assets/gaming expo.jpg';
// import restaurantOpeningImg from '../assets/resturant opening.jpg';
// import trainingSkillsImg from '../assets/training of skills.jpg';

// const EventsList = () => {
//   const [events, setEvents] = useState([]);
//   const [error, setError] = useState(null);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const eventsData = await getEvents();

//         if (!eventsData || eventsData.length === 0) {
//           setEvents([
//             {
//               id: 1,
//               image: eidFestivalImg,
//               title: "Eid Festival",
//               description: "Celebrate the joy of Eid with cultural performances and food stalls.",
//               date: "2025-10-01",
//               venue: "Faisalabad City Park",
//               registrations: 200
//             },
//             {
//               id: 2,
//               image: flowersExpoImg,
//               title: "Flowers Expo",
//               description: "A vibrant display of floral arrangements and gardening workshops.",
//               date: "2025-10-08",
//               venue: "Lahore Botanical Garden",
//               registrations: 150
//             },
//             {
//               id: 3,
//               image: funFeastImg,
//               title: "Fun and Feast",
//               description: "Enjoy games, food, and music in a lively outdoor setting.",
//               date: "2025-10-15",
//               venue: "Multan Fairgrounds",
//               registrations: 180
//             },
//             {
//               id: 4,
//               image: gamingExpoImg,
//               title: "Gaming Expo",
//               description: "Experience the latest in gaming tech and tournaments.",
//               date: "2025-10-22",
//               venue: "Karachi Convention Center",
//               registrations: 220
//             },
//             {
//               id: 5,
//               image: restaurantOpeningImg,
//               title: "Restaurant Opening",
//               description: "Grand opening of a new culinary hotspot with tasting sessions.",
//               date: "2025-10-29",
//               venue: "Islamabad Food Street",
//               registrations: 90
//             },
//             {
//               id: 6,
//               image: trainingSkillsImg,
//               title: "Training of Skills",
//               description: "Workshops on coding, design, and entrepreneurship for youth.",
//               date: "2025-11-05",
//               venue: "Peshawar Innovation Hub",
//               registrations: 130
//             }
//           ]);
//         } else {
//           setEvents(eventsData);
//         }
//       } catch (err) {
//         setError('Failed to load events. Please try again later.');
//         console.error('Error fetching events:', err);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleCardClick = (event) => {
//     setSelectedEvent(event);
//   };

//   const closeModal = () => {
//     setSelectedEvent(null);
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Header />
//         <div className="flex justify-center items-center h-96">
//           <div className="text-center">
//             <div className="text-red-500 text-6xl mb-4">⚠️</div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
//             <p className="text-gray-600 mb-4">{error}</p>
//             <button
//               onClick={() => window.location.reload()}
//               className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               Try Again
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover amazing events and workshops. Register now to secure your spot!
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {console.log("Events array:", events)}
//           {events.map((event) => (
//             <EventCard key={event.id} event={event} onClick={() => handleCardClick(event)} />
//           ))}
//         </div>

//         {events.length > 0 && (
//           <div className="mt-16 text-center">
//             <div className="bg-white rounded-lg shadow-lg p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 We're constantly updating our lineup with fresh experiences and opportunities. Please check back soon or explore other categories to find something that inspires you
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 We're constantly adding new events. Stay tuned for more exciting opportunities!
//               </p>
//               <Link
//                 to="/"
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
//               >
//                 Back to Home
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>

//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
//             <h2 className="text-xl font-bold text-purple-800 mb-4">
//               Register for {selectedEvent.title}
//             </h2>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full border rounded px-3 py-2"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="w-full border rounded px-3 py-2"
//               />
//               <button
//                 type="submit"
//                 className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
//               >
//                 Submit
//               </button>
//             </form>
//             <button
//               onClick={closeModal}
//               className="mt-4 text-sm text-gray-500 hover:underline"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventsList;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';
// import EventCard from '../components/EventCard';
// import { getEvents } from '../firebase/firestore';
// import eidFestivalImg from '../assets/eid festival.webp';
// import flowersExpoImg from '../assets/flowers expo.jpg';
// import funFeastImg from '../assets/fun and feast.jpg';
// import gamingExpoImg from '../assets/gaming expo.jpg';
// import restaurantOpeningImg from '../assets/resturant opening.jpg';
// import trainingSkillsImg from '../assets/training of skills.jpg';

// const EventsList = () => {
//   const [events, setEvents] = useState([
//     {
//       id: 1,
//       image: eidFestivalImg,
//       title: "Eid Festival",
//       description: "Celebrate the joy of Eid with cultural performances and food stalls.",
//       date: "2025-10-01",
//       venue: "Faisalabad City Park",
//       registrations: 200
//     },
//     {
//       id: 2,
//       image: flowersExpoImg,
//       title: "Flowers Expo",
//       description: "A vibrant display of floral arrangements and gardening workshops.",
//       date: "2025-10-08",
//       venue: "Lahore Botanical Garden",
//       registrations: 150
//     },
//     {
//       id: 3,
//       image: funFeastImg,
//       title: "Fun and Feast",
//       description: "Enjoy games, food, and music in a lively outdoor setting.",
//       date: "2025-10-15",
//       venue: "Multan Fairgrounds",
//       registrations: 180
//     },
//     {
//       id: 4,
//       image: gamingExpoImg,
//       title: "Gaming Expo",
//       description: "Experience the latest in gaming tech and tournaments.",
//       date: "2025-10-22",
//       venue: "Karachi Convention Center",
//       registrations: 220
//     },
//     {
//       id: 5,
//       image: restaurantOpeningImg,
//       title: "Restaurant Opening",
//       description: "Grand opening of a new culinary hotspot with tasting sessions.",
//       date: "2025-10-29",
//       venue: "Islamabad Food Street",
//       registrations: 90
//     },
//     {
//       id: 6,
//       image: trainingSkillsImg,
//       title: "Training of Skills",
//       description: "Workshops on coding, design, and entrepreneurship for youth.",
//       date: "2025-11-05",
//       venue: "Peshawar Innovation Hub",
//       registrations: 130
//     }
//   ]);

//   const [error, setError] = useState(null);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const eventsData = await getEvents();
//         if (eventsData && eventsData.length > 0) {
//           setEvents(eventsData);
//         }
//       } catch (err) {
//         setError('Failed to load events. Please try again later.');
//         console.error('Error fetching events:', err);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleCardClick = (event) => {
//     setSelectedEvent(event);
//   };

//   const closeModal = () => {
//     setSelectedEvent(null);
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Header />
//         <div className="flex justify-center items-center h-96">
//           <div className="text-center">
//             <div className="text-red-500 text-6xl mb-4">⚠️</div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
//             <p className="text-gray-600 mb-4">{error}</p>
//             <button
//               onClick={() => window.location.reload()}
//               className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               Try Again
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover amazing events and workshops. Register now to secure your spot!
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {events.map((event) => (
//             <EventCard key={event.id} event={event} onClick={() => handleCardClick(event)} />
//           ))}
//         </div>

//         {events.length > 0 && (
//           <div className="mt-16 text-center">
//             <div className="bg-white rounded-lg shadow-lg p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 We're constantly updating our lineup with fresh experiences and opportunities. Please check back soon or explore other categories to find something that inspires you
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 We're constantly adding new events. Stay tuned for more exciting opportunities!
//               </p>
//               <Link
//                 to="/"
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
//               >
//                 Back to Home
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>

//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
//             <h2 className="text-xl font-bold text-purple-800 mb-4">
//               Register for {selectedEvent.title}
//             </h2>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full border rounded px-3 py-2"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="w-full border rounded px-3 py-2"
//               />
//               <button
//                 type="submit"
//                 className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
//               >
//                 Submit
//               </button>
//             </form>
//             <button
//               onClick={closeModal}
//               className="mt-4 text-sm text-gray-500 hover:underline"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventsList;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import { getEvents } from '../firebase/firestore';
import eidFestivalImg from '../assets/eid festival.webp';
import flowersExpoImg from '../assets/flowers expo.jpg';
import funFeastImg from '../assets/fun and feast.jpg';
import gamingExpoImg from '../assets/gaming expo.jpg';
import restaurantOpeningImg from '../assets/resturant opening.jpg';
import trainingSkillsImg from '../assets/training of skills.jpg';

const EventsList = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      image: eidFestivalImg,
      title: "Eid Festival",
      description: "Celebrate the joy of Eid with cultural performances and food stalls.",
      date: "2025-10-01",
      venue: "Faisalabad City Park",
      registrations: 200
    },
    {
      id: 2,
      image: flowersExpoImg,
      title: "Flowers Expo",
      description: "A vibrant display of floral arrangements and gardening workshops.",
      date: "2025-10-08",
      venue: "Lahore Botanical Garden",
      registrations: 150
    },
    {
      id: 3,
      image: funFeastImg,
      title: "Fun and Feast",
      description: "Enjoy games, food, and music in a lively outdoor setting.",
      date: "2025-10-15",
      venue: "Multan Fairgrounds",
      registrations: 180
    },
    {
      id: 4,
      image: gamingExpoImg,
      title: "Gaming Expo",
      description: "Experience the latest in gaming tech and tournaments.",
      date: "2025-10-22",
      venue: "Karachi Convention Center",
      registrations: 220
    },
    {
      id: 5,
      image: restaurantOpeningImg,
      title: "Restaurant Opening",
      description: "Grand opening of a new culinary hotspot with tasting sessions.",
      date: "2025-10-29",
      venue: "Islamabad Food Street",
      registrations: 90
    },
    {
      id: 6,
      image: trainingSkillsImg,
      title: "Training of Skills",
      description: "Workshops on coding, design, and entrepreneurship for youth.",
      date: "2025-11-05",
      venue: "Peshawar Innovation Hub",
      registrations: 130
    }
  ]);

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getEvents();
        if (eventsData && eventsData.length > 0) {
          setEvents(eventsData);
        }
      } catch (err) {
        setError('Failed to load events. Please try again later.');
        console.error('Error fetching events:', err);
      }
    };

    fetchEvents();
  }, []);

  const handleCardClick = (event) => {
    if (event && event.id) {
      navigate(`/register/${event.id}`, { state: { event } });
    }
  };

  // modal handlers removed; navigation is used instead

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex justify-center items-center h-96">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing events and workshops. Register now to secure your spot!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} onClick={() => handleCardClick(event)} />
          ))}
        </div>

        {events.length > 0 && (
          <div className="mt-16 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                We're constantly updating our lineup with fresh experiences and opportunities.
              </h3>
              <p className="text-gray-600 mb-6">
                Stay tuned for more exciting opportunities!
              </p>
              <Link
                to="/"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Modal removed in favor of dedicated register route */}
    </div>
  );
};

export default EventsList;