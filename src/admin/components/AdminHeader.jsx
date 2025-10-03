// import React from 'react';

// const AdminHeader = () => {
//   return (
//     <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md">
//       {/* Top Navbar */}
//       <nav className="flex justify-between items-center px-6 py-4 border-b border-white/20">
//         <div className="text-xl font-bold tracking-wide">Admin Panel</div>
//         <ul className="flex space-x-6 text-sm font-medium">
//           <li className="hover:underline cursor-pointer">Dashboard</li>
//           <li className="hover:underline cursor-pointer">Users</li>
//           <li className="hover:underline cursor-pointer">Settings</li>
//         </ul>
//       </nav>

//       {/* Title & Subtitle */}
//       <div className="text-center py-8 px-4">
//         <h1 className="text-4xl font-extrabold mb-2">Admin</h1>
//         <p className="text-lg text-white/90 mb-6">
//           Manage registered users and event data
//         </p>

//         {/* 3 Key Points */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
//           <div className="bg-white/10 p-4 rounded-lg shadow-sm">
//             <h3 className="text-lg font-semibold mb-1">View User Info</h3>
//             <p className="text-sm text-white/80">Access names, phone numbers, and registration details.</p>
//           </div>
//           <div className="bg-white/10 p-4 rounded-lg shadow-sm">
//             <h3 className="text-lg font-semibold mb-1">Manage Events</h3>
//             <p className="text-sm text-white/80">Edit, delete, or update event listings securely.</p>
//           </div>
//           <div className="bg-white/10 p-4 rounded-lg shadow-sm">
//             <h3 className="text-lg font-semibold mb-1">Secure Access</h3>
//             <p className="text-sm text-white/80">Admin-only login with password protection.</p>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default AdminHeader;
import React from 'react';

const AdminHeader = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md">
      {/* Top Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-white/20">
        <div className="text-xl font-bold tracking-wide">Admin Panel</div>
        <ul className="flex space-x-6 text-sm font-medium">
          <li className="hover:underline cursor-pointer">Dashboard</li>
          <li className="hover:underline cursor-pointer">Users</li>
          <li className="hover:underline cursor-pointer">Settings</li>
        </ul>
      </nav>

      {/* Title & Subtitle */}
      <div className="text-center py-8 px-4">
        <h1 className="text-4xl font-extrabold mb-2">Admin</h1>
        <p className="text-lg text-white/90 mb-6">
          Manage registered users and event data
        </p>

        {/* 3 Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-1">View User Info</h3>
            <p className="text-sm text-white/80">Access names, phone numbers, and registration details.</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-1">Manage Events</h3>
            <p className="text-sm text-white/80">Edit, delete, or update event listings securely.</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-1">Secure Access</h3>
            <p className="text-sm text-white/80">Admin-only login with password protection.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;