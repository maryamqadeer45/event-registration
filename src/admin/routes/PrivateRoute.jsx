
// // import { Routes, Route } from 'react-router-dom';
// // import AdminDashboard from './admin/pages/AdminDashboard';

// // const PrivateRoutes = () => {
// //   return (
// //     <Routes>
// //       <Route path="/admin" element={<AdminDashboard />} />
      
// //     </Routes>
// //   );
// // };

// // export default PrivateRoutes;
// // import React from 'react';
// // import { Routes, Route } from 'react-router-dom';
// // import AdminDashboard from '../pages/AdminDashboard';

// // const PrivateRoute = () => {
// //   return (
// //     <Routes>
// //       <Route path="/admin" element={<AdminDashboard />} />
// //     </Routes>
// //   );
// // };

// // export default PrivateRoute;
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { getAuth } from 'firebase/auth';
// import AdminDashboard from '../pages/AdminDashboard';

// const PrivateRoute = () => {
//   const auth = getAuth();
//   const user = auth.currentUser;

//   // ✅ Check if user is logged in AND email matches
//   const isAuthorized = user && user.email === 'admin@yourapp.com';

//   return isAuthorized ? <AdminDashboard /> : <Navigate to="/admin/login" />;
// };

// export default PrivateRoute;
// import { Navigate } from 'react-router-dom';
// import { getAuth } from 'firebase/auth';
// import AdminDashboard from '../pages/AdminDashboard';

// const PrivateRoute = () => {
//   const auth = getAuth();
//   const user = auth.currentUser;

//   const isAuthorized = user && user.email === 'admin@yourapp.com';

//   return isAuthorized ? <AdminDashboard /> : <Navigate to="/admin/login" />;
// };

// export default PrivateRoute;
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AdminDashboard from '../pages/AdminDashboard';

const PrivateRoute = () => {
  const [isAuthorized, setIsAuthorized] = useState(null); // null = loading
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email === 'admin@yourapp.com') {
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  if (isAuthorized === null) {
    return <div className="text-center p-8 text-purple-600 text-xl">Checking admin access...</div>;
  }

  return isAuthorized ? <AdminDashboard /> : <Navigate to="/admin/login" />;
};

export default PrivateRoute;