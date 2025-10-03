// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import HomePage from '../pages/HomePage';
// import EventsList from '../pages/EventsList';
// import RegisterForm from '../pages/RegisterForm';
// import SuccessPage from '../pages/SuccessPage';
// import PrivateRoute from '../admin/routes/PrivateRoute';


// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/events" element={<EventsList />} />
//       <Route path="/register/:eventId" element={<RegisterForm />} />
// <Route path="/success" element={<SuccessPage />} />
//       <Route path="/admin/*" element={<PrivateRoute />} />

//     </Routes>
//   );
// };

// export default AppRoutes;
// import PrivateRoute from '../admin/routes/PrivateRoute';
// <Route path="/dashboard" element={<PrivateRoute />}>
//   <Route path="" element={<AdminDashboard />} />
// </Route>
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import HomePage from '../pages/HomePage';
// import EventsList from '../pages/EventsList';
// import RegisterForm from '../pages/RegisterForm';
// import SuccessPage from '../pages/SuccessPage';
// import PrivateRoute from '../admin/routes/PrivateRoute'; // ✅ Corrected import

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/events" element={<EventsList />} />
//       <Route path="/register/:eventId" element={<RegisterForm />} />
//       <Route path="/success" element={<SuccessPage />} />
//       <Route path="/admin/*" element={<PrivateRoute />} /> {/* ✅ Nested admin route */}
//     </Routes>
//   );
// };

// export default AppRoutes;
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import HomePage from '../pages/HomePage';
// import EventsList from '../pages/EventsList';
// import RegisterForm from '../pages/RegisterForm';
// import SuccessPage from '../pages/SuccessPage';
// import PrivateRoute from '../admin/routes/PrivateRoute';
// import AdminDashboard from '../admin/pages/AdminDashboard';
// import AdminLogin from '../admin/pages/AdminLogin';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/events" element={<EventsList />} />
//       <Route path="/register/:eventId" element={<RegisterForm />} />
//       <Route path="/success" element={<SuccessPage />} />
//       <Route path="/admin/login" element={<AdminLogin />} />
//       <Route path="/admin/*" element={
//         <PrivateRoute>
//           <AdminDashboard />
//         </PrivateRoute>
//       } />
//     </Routes>
//   );
// };

// export default AppRoutes;


// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import HomePage from '../pages/HomePage';
// import EventsList from '../pages/EventsList';
// import RegisterForm from '../pages/RegisterForm';
// import SuccessPage from '../pages/SuccessPage';
// import AdminLogin from '../admin/pages/AdminLogin';
// import PrivateRoute from '../admin/routes/PrivateRoute';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/events" element={<EventsList />} />
//       <Route path="/register/:eventId" element={<RegisterForm />} />
//       <Route path="/success" element={<SuccessPage />} />
//       <Route path="/admin/login" element={<AdminLogin />} />
//       <Route path="/admin/*" element={<PrivateRoute />} />
//     </Routes>
//   );
// };

// export default AppRoutes;
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import EventsList from '../pages/EventsList';
import RegisterForm from '../pages/RegisterForm';
import SuccessPage from '../pages/SuccessPage';

import AdminLogin from '../admin/pages/AdminLogin';
import PrivateRoute from '../admin/routes/PrivateRoute';

const AppRoutes = () => {
  return (
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsList />} />
        <Route path="/register/:eventId" element={<RegisterForm />} />
        <Route path="/success" element={<SuccessPage />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/*" element={<PrivateRoute />} />

        {/* Optional: 404 fallback */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
  );
};

export default AppRoutes;