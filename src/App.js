// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import AppRoutes from './routes/AppRoutes';
// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <AppRoutes />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
// 
// import React from 'react';
// import AppRoutes from './routes/AppRoutes'; // ✅ use your full route config
// import { BrowserRouter } from 'react-router-dom';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <AppRoutes />
//     </BrowserRouter>
//   );
// };

// // export default App;
// import React from 'react';
// import AppRoutes from './routes/AppRoutes'; // ✅ tumhari routing yahan se control hogi
// import PrivateRoute  from './admin/routes/PrivateRoute';  

// const App = () => {
//   return (
//     <div className="App">
//       <AppRoutes />
//       <PrivateRoute />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import AppRoutes from './routes/AppRoutes';

function App() {
  return <AppRoutes />;
}

export default App;