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
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';

const AdminHeader = () => {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully!');
      navigate('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Failed to logout');
    }
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
      {/* Top Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-white/20">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold tracking-wide">🎯 Admin Panel</div>
          <div className="hidden md:block text-sm text-white/80">
            Event Management System
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
            <span className="text-xl">🔔</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>
          
          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">A</span>
              </div>
              <span className="hidden md:block text-sm font-medium">Admin</span>
              <span className="text-sm">▼</span>
            </button>
            
            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-500">admin@yourapp.com</p>
                </div>
                <button
                  onClick={() => setShowProfile(false)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  👤 Profile Settings
                </button>
                <button
                  onClick={() => setShowProfile(false)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  ⚙️ Preferences
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Enhanced Header Content */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold mb-2">Welcome to Admin Dashboard</h1>
            <p className="text-lg text-white/90 mb-6">
              Manage your events, users, and analytics with powerful tools
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl mb-3">👥</div>
                <h3 className="text-lg font-semibold mb-2">User Management</h3>
                <p className="text-sm text-white/80">View, edit, and manage registered users with advanced filtering</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl mb-3">📅</div>
                <h3 className="text-lg font-semibold mb-2">Event Management</h3>
                <p className="text-sm text-white/80">Create, update, and manage events with real-time data</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-lg font-semibold mb-2">Analytics</h3>
                <p className="text-sm text-white/80">Track performance with detailed analytics and reports</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-lg font-semibold mb-2">Secure Access</h3>
                <p className="text-sm text-white/80">Protected admin access with Firebase authentication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;