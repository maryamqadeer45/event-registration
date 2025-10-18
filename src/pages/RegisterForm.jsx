// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import Spinner from '../components/Spinner';
// import { getEvent, registerForEvent } from '../firebase/firestore';

// const RegisterForm = () => {
//   const { eventId } = useParams();
//   const navigate = useNavigate();
  
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState(null);
  
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     eventId: eventId
//   });
  
//   const [formErrors, setFormErrors] = useState({});

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         setLoading(true);
//         const eventData = await getEvent(eventId);
//         setEvent(eventData);
//       } catch (err) {
//         setError('Event not found or failed to load.');
//         console.error('Error fetching event:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (eventId) {
//       fetchEvent();
//     }
//   }, [eventId]);

//   const validateForm = () => {
//     const errors = {};
    
//     if (!formData.name.trim()) {
//       errors.name = 'Name is required';
//     } else if (formData.name.trim().length < 2) {
//       errors.name = 'Name must be at least 2 characters';
//     }
    
//     if (!formData.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       errors.email = 'Please enter a valid email address';
//     }
    
//     if (!formData.phone.trim()) {
//       errors.phone = 'Phone number is required';
//     } else if (!/^[+]?[0-9\s\-()]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
//       errors.phone = 'Please enter a valid phone number';
//     }
    
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Clear error when user starts typing
//     if (formErrors[name]) {
//       setFormErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }
    
//     try {
//       setSubmitting(true);
//       setError(null);
      
//       await registerForEvent(formData);
//       navigate('/success', { 
//         state: { 
//           eventTitle: event?.title,
//           registrantName: formData.name 
//         } 
//       });
//     } catch (err) {
//       setError('Registration failed. Please try again.');
//       console.error('Error registering for event:', err);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Header />
//         <div className="flex justify-center items-center h-96">
//           <div className="text-center">
//             <Spinner size="large" />
//             <p className="mt-4 text-gray-600">Loading event details...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error && !event) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Header />
//         <div className="flex justify-center items-center h-96">
//           <div className="text-center">
//             <div className="text-red-500 text-6xl mb-4">⚠️</div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h2>
//             <p className="text-gray-600 mb-4">{error}</p>
//             <button
//               onClick={() => navigate('/events')}
//               className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               Back to Events
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
      
//       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Event Info */}
//         {event && (
//           <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">{event.title}</h1>
//             <div className="flex items-center text-gray-600 mb-4">
//               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//               {formatDate(event.date)}
//             </div>
//             {event.location && (
//               <div className="flex items-center text-gray-600 mb-4">
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 {event.location}
//               </div>
//             )}
//             <p className="text-gray-700">{event.description}</p>
//           </div>
//         )}

//         {/* Registration Form */}
//         <div className="bg-white rounded-lg shadow-lg p-8">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Form</h2>
          
//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
//               {error}
//             </div>
//           )}
          
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                 Full Name *
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                   formErrors.name ? 'border-red-300' : 'border-gray-300'
//                 }`}
//                 placeholder="Enter your full name"
//               />
//               {formErrors.name && (
//                 <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address *
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                   formErrors.email ? 'border-red-300' : 'border-gray-300'
//                 }`}
//                 placeholder="Enter your email address"
//               />
//               {formErrors.email && (
//                 <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                 Phone Number *
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                   formErrors.phone ? 'border-red-300' : 'border-gray-300'
//                 }`}
//                 placeholder="Enter your phone number"
//               />
//               {formErrors.phone && (
//                 <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
//               )}
//             </div>

//             <div className="flex items-center justify-between pt-6">
//               <button
//                 type="button"
//                 onClick={() => navigate('/events')}
//                 className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
//               >
//                 Cancel
//               </button>
              
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className="px-8 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center"
//               >
//                 {submitting ? (
//                   <>
//                     <Spinner size="small" color="white" />
//                     <span className="ml-2">Registering...</span>
//                   </>
//                 ) : (
//                   'Register Now'
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import { getEvent, registerForEvent } from '../firebase/firestore';

const RegisterForm = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [event, setEvent] = useState(location.state?.event || null);
  const [loading, setLoading] = useState(!location.state?.event);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventId: eventId,
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    let isMounted = true;

    const fetchEvent = async () => {
      try {
        setLoading(true);
        const eventData = await getEvent(eventId);
        if (isMounted) setEvent(eventData);
      } catch (err) {
        if (isMounted) setError('Event not found or failed to load.');
        console.error('Error fetching event:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (!event && eventId) fetchEvent();

    return () => {
      isMounted = false;
    };
  }, [eventId, event]);

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[+]?[0-9\s\-()]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    setError(null);

    // Optimistic navigation for instant feedback
    navigate('/success', {
      state: {
        eventTitle: event?.title,
        registrantName: formData.name,
      },
    });

    // Fire-and-forget write to Firestore with best-effort retry
    const payload = { ...formData, eventId };
    const enqueuePending = (data) => {
      try {
        const key = 'pendingRegistrations';
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        existing.push({ data, ts: Date.now() });
        localStorage.setItem(key, JSON.stringify(existing));
      } catch (_) {}
    };

    const attemptSave = async (data) => {
      try {
        await registerForEvent(data);
      } catch (err) {
        console.error('Background registration failed, queued for retry:', err);
        enqueuePending(data);
      }
    };

    attemptSave(payload).finally(() => {
      setSubmitting(false);
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex justify-center items-center h-96">
          <div className="text-center">
            <Spinner size="large" />
            <p className="mt-4 text-gray-600">Loading event details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error && !event) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex justify-center items-center h-96">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => navigate('/events')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Events
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Event Info */}
        {event && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{event.title}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(event.date)}
            </div>
            {event.location && (
              <div className="flex items-center text-gray-600 mb-4">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </div>
            )}
            <p className="text-gray-700">{event.description}</p>
          </div>
        )}

        {/* Registration Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Form</h2>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {['name', 'email', 'phone'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-2">
                  {field === 'name' && 'Full Name *'}
                  {field === 'email' && 'Email Address *'}
                  {field === 'phone' && 'Phone Number *'}
                </label>
                <input
                  type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    formErrors[field] ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder={`Enter your ${field}`}
                />
                {formErrors[field] && (
                  <p className="mt-1 text-sm text-red-600">{formErrors[field]}</p>
                )}
              </div>
            ))}

            <div className="flex items-center justify-between pt-6">
              <button
                type="button"
                onClick={() => navigate('/events')}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
              >
                {submitting ? (
                  <>
                    <Spinner size="small" color="white" />
                    <span className="ml-2">Registering...</span>
                  </>
                ) : (
                  'Register Now'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
