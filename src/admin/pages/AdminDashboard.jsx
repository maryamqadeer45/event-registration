
// // import React, { useState } from 'react';
// // import AdminHeader from '../components/AdminHeader';
// // import UserCard from '../components/UserCard';

// // const AdminDashboard = () => {
// //   const [users, setUsers] = useState([
// //     { name: 'Zara Ahmed', phone: '0300-1234567', date: 'Sep 10, 2025', isDeleted: false },
// //     { name: 'Ali Raza', phone: '0312-9876543', date: 'Sep 12, 2025', isDeleted: false },
// //     { name: 'Fatima Khan', phone: '0345-1122334', date: 'Sep 15, 2025', isDeleted: false },
// //     { name: 'Areeba Noor', phone: '0301-5566778', date: 'Sep 19, 2025', isDeleted: false },
// //     { name: 'Hassan Bilal', phone: '0322-9988776', date: 'Sep 19, 2025', isDeleted: false },
// //     { name: 'Sana Tariq', phone: '0302-4455667', date: 'Sep 20, 2025', isDeleted: false },
// //     { name: 'Usman Javed', phone: '0315-7788990', date: 'Sep 21, 2025', isDeleted: false },
// //     { name: 'Hina Aslam', phone: '0340-1122445', date: 'Sep 22, 2025', isDeleted: false },
// //     { name: 'Bilal Qureshi', phone: '0333-6677889', date: 'Sep 23, 2025', isDeleted: false },
// //   ]);

// //   const [selectedUser, setSelectedUser] = useState(null);
// //   const [editingUser, setEditingUser] = useState(null);

// //   const handleDelete = (index) => {
// //     const updatedUsers = [...users];
// //     updatedUsers.splice(index, 1);
// //     setUsers(updatedUsers);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       <AdminHeader />

// //       <div className="p-8">
// //         <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
// //         <p className="text-gray-600 mb-4">Manage registered users below:</p>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
// //           {users
// //             .filter(user => !user.isDeleted)
// //             .map((user, index) => (
// //               <UserCard
// //                 key={index}
// //                 name={user.name}
// //                 phone={user.phone}
// //                 date={user.date}
// //                 onView={() => setSelectedUser(user)}
// //                 onEdit={() => setEditingUser(user)}
// //                 onDelete={() => handleDelete(index)}
// //               />
// //             ))}
// //         </div>

// //         {/* ✅ View Modal */}
// //         {selectedUser && (
// //           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// //             <div className="bg-white p-6 rounded-lg shadow-lg w-96">
// //               <h2 className="text-xl font-bold mb-2">User Details</h2>
// //               <p><strong>Name:</strong> {selectedUser.name}</p>
// //               <p><strong>Phone:</strong> {selectedUser.phone}</p>
// //               <p><strong>Registered:</strong> {selectedUser.date}</p>
// //               <button
// //                 onClick={() => setSelectedUser(null)}
// //                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// //               >
// //                 Close
// //               </button>
// //             </div>
// //           </div>
// //         )}

// //         {/* ✅ Edit Modal */}
// //         {editingUser && (
// //           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// //             <div className="bg-white p-6 rounded-lg shadow-lg w-96">
// //               <h2 className="text-xl font-bold mb-4">Edit User</h2>
// //               <form>
// //                 <div className="mb-3">
// //                   <label className="block text-sm font-medium text-gray-700">Name</label>
// //                   <input
// //                     type="text"
// //                     defaultValue={editingUser.name}
// //                     className="mt-1 block w-full border border-gray-300 rounded-md p-2"
// //                   />
// //                 </div>
// //                 <div className="mb-3">
// //                   <label className="block text-sm font-medium text-gray-700">Phone</label>
// //                   <input
// //                     type="text"
// //                     defaultValue={editingUser.phone}
// //                     className="mt-1 block w-full border border-gray-300 rounded-md p-2"
// //                   />
// //                 </div>
// //                 <div className="flex justify-end gap-2 mt-4">
// //                   <button
// //                     type="button"
// //                     onClick={() => setEditingUser(null)}
// //                     className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
// //                   >
// //                     Cancel
// //                   </button>
// //                   <button
// //                     type="submit"
// //                     className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
// //                   >
// //                     Save
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;
// import React, { useState } from 'react';
// import AdminHeader from '../components/AdminHeader';
// import UserCard from '../components/UserCard';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([
//     { name: 'Zara Ahmed', phone: '0300-1234567', date: 'Sep 10, 2025', isDeleted: false },
//     { name: 'Ali Raza', phone: '0312-9876543', date: 'Sep 12, 2025', isDeleted: false },
//     { name: 'Fatima Khan', phone: '0345-1122334', date: 'Sep 15, 2025', isDeleted: false },
//     { name: 'Areeba Noor', phone: '0301-5566778', date: 'Sep 19, 2025', isDeleted: false },
//     { name: 'Hassan Bilal', phone: '0322-9988776', date: 'Sep 19, 2025', isDeleted: false },
//     { name: 'Sana Tariq', phone: '0302-4455667', date: 'Sep 20, 2025', isDeleted: false },
//     { name: 'Usman Javed', phone: '0315-7788990', date: 'Sep 21, 2025', isDeleted: false },
//     { name: 'Hina Aslam', phone: '0340-1122445', date: 'Sep 22, 2025', isDeleted: false },
//     { name: 'Bilal Qureshi', phone: '0333-6677889', date: 'Sep 23, 2025', isDeleted: false },
//   ]);

//   const [selectedUser, setSelectedUser] = useState(null);
//   const [editingUser, setEditingUser] = useState(null);
//   const [editName, setEditName] = useState('');
//   const [editPhone, setEditPhone] = useState('');

//   const handleDelete = (index) => {
//     const updatedUsers = [...users];
//     updatedUsers.splice(index, 1);
//     setUsers(updatedUsers);
//   };

//   const handleEdit = (user) => {
//     setEditingUser(user);
//     setEditName(user.name);
//     setEditPhone(user.phone);
//   };

//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     const updatedUsers = users.map((user) =>
//       user === editingUser ? { ...user, name: editName, phone: editPhone } : user
//     );
//     setUsers(updatedUsers);
//     setEditingUser(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <AdminHeader />

//       <div className="p-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
//         <p className="text-gray-600 mb-4">Manage registered users below:</p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//           {users
//             .filter(user => !user.isDeleted)
//             .map((user, index) => (
//               <UserCard
//                 key={index}
//                 name={user.name}
//                 phone={user.phone}
//                 date={user.date}
//                 onView={() => setSelectedUser(user)}
//                 onEdit={() => handleEdit(user)}
//                 onDelete={() => handleDelete(index)}
//               />
//             ))}
//         </div>

//         {/* View Modal */}
//         {selectedUser && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//               <h2 className="text-xl font-bold mb-2">User Details</h2>
//               <p><strong>Name:</strong> {selectedUser.name}</p>
//               <p><strong>Phone:</strong> {selectedUser.phone}</p>
//               <p><strong>Registered:</strong> {selectedUser.date}</p>
//               <button
//                 onClick={() => setSelectedUser(null)}
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Edit Modal */}
//         {editingUser && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//               <h2 className="text-xl font-bold mb-4">Edit User</h2>
//               <form onSubmit={handleEditSubmit}>
//                 <div className="mb-3">
//                   <label className="block text-sm font-medium text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     value={editName}
//                     onChange={(e) => setEditName(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="block text-sm font-medium text-gray-700">Phone</label>
//                   <input
//                     type="text"
//                     value={editPhone}
//                     onChange={(e) => setEditPhone(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                   />
//                 </div>
//                 <div className="flex justify-end gap-2 mt-4">
//                   <button
//                     type="button"
//                     onClick={() => setEditingUser(null)}
//                     className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default AdminDashboard;
// import React, { useState } from 'react';
// import AdminHeader from '../components/AdminHeader';
// import UserCard from '../components/UserCard';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([
//     { name: 'Zara Ahmed', phone: '0300-1234567', date: 'Sep 10, 2025', isDeleted: false },
//     { name: 'Ali Raza', phone: '0312-9876543', date: 'Sep 12, 2025', isDeleted: false },
//     { name: 'Fatima Khan', phone: '0345-1122334', date: 'Sep 15, 2025', isDeleted: false },
//     { name: 'Areeba Noor', phone: '0301-5566778', date: 'Sep 19, 2025', isDeleted: false },
//     { name: 'Hassan Bilal', phone: '0322-9988776', date: 'Sep 19, 2025', isDeleted: false },
//     { name: 'Sana Tariq', phone: '0302-4455667', date: 'Sep 20, 2025', isDeleted: false },
//     { name: 'Usman Javed', phone: '0315-7788990', date: 'Sep 21, 2025', isDeleted: false },
//     { name: 'Hina Aslam', phone: '0340-1122445', date: 'Sep 22, 2025', isDeleted: false },
//     { name: 'Bilal Qureshi', phone: '0333-6677889', date: 'Sep 23, 2025', isDeleted: false },
//   ]);

//   const [selectedUser, setSelectedUser] = useState(null);
//   const [editingUser, setEditingUser] = useState(null);
//   const [editName, setEditName] = useState('');
//   const [editPhone, setEditPhone] = useState('');

//   const handleDelete = (index) => {
//     const updatedUsers = [...users];
//     updatedUsers.splice(index, 1);
//     setUsers(updatedUsers);
//     toast.error('User deleted!');
//   };

//   const handleEdit = (user) => {
//     setEditingUser(user);
//     setEditName(user.name);
//     setEditPhone(user.phone);
//   };

//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     const updatedUsers = users.map((user) =>
//       user === editingUser ? { ...user, name: editName, phone: editPhone } : user
//     );
//     setUsers(updatedUsers);
//     setEditingUser(null);
//     toast.success('User updated successfully!');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <AdminHeader />

//       <div className="p-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
//         <p className="text-gray-600 mb-4">Manage registered users below:</p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//           {users
//             .filter(user => !user.isDeleted)
//             .map((user, index) => (
//               <UserCard
//                 key={index}
//                 name={user.name}
//                 phone={user.phone}
//                 date={user.date}
//                 onView={() => setSelectedUser(user)}
//                 onEdit={() => handleEdit(user)}
//                 onDelete={() => handleDelete(index)}
//               />
//             ))}
//         </div>

//         {/* View Modal */}
//         {selectedUser && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//               <h2 className="text-xl font-bold mb-2">User Details</h2>
//               <p><strong>Name:</strong> {selectedUser.name}</p>
//               <p><strong>Phone:</strong> {selectedUser.phone}</p>
//               <p><strong>Registered:</strong> {selectedUser.date}</p>
//               <button
//                 onClick={() => setSelectedUser(null)}
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Edit Modal */}
//         {editingUser && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//               <h2 className="text-xl font-bold mb-4">Edit User</h2>
//               <form onSubmit={handleEditSubmit}>
//                 <div className="mb-3">
//                   <label className="block text-sm font-medium text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     value={editName}
//                     onChange={(e) => setEditName(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="block text-sm font-medium text-gray-700">Phone</label>
//                   <input
//                     type="text"
//                     value={editPhone}
//                     onChange={(e) => setEditPhone(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                   />
//                 </div>
//                 <div className="flex justify-end gap-2 mt-4">
//                   <button
//                     type="button"
//                     onClick={() => setEditingUser(null)}
//                     className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

//         {/* ✅ Toast Container */}
//         <ToastContainer position="top-right" autoClose={3000} />
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState } from 'react';
import AdminHeader from '../components/AdminHeader';
import UserCard from '../components/UserCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { name: 'Zara Ahmed', phone: '0300-1234567', date: 'Sep 10, 2025' },
    { name: 'Ali Raza', phone: '0312-9876543', date: 'Sep 12, 2025' },
    { name: 'Fatima Khan', phone: '0345-1122334', date: 'Sep 15, 2025' },
    { name: 'Areeba Noor', phone: '0301-5566778', date: 'Sep 19, 2025' },
    { name: 'Hassan Bilal', phone: '0322-9988776', date: 'Sep 19, 2025' },
    { name: 'Sana Tariq', phone: '0302-4455667', date: 'Sep 20, 2025' },
    { name: 'Usman Javed', phone: '0315-7788990', date: 'Sep 21, 2025' },
    { name: 'Hina Aslam', phone: '0340-1122445', date: 'Sep 22, 2025' },
    { name: 'Bilal Qureshi', phone: '0333-6677889', date: 'Sep 23, 2025' },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [editName, setEditName] = useState('');
  const [editPhone, setEditPhone] = useState('');

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    toast.error('User deleted!');
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setEditName(user.name);
    setEditPhone(user.phone);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedUsers = users.map((user) =>
      user === editingUser ? { ...user, name: editName, phone: editPhone } : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
    toast.success('User updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader />

      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
        <p className="text-gray-600 mb-4">Manage registered users below:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              phone={user.phone}
              date={user.date}
              onView={() => setSelectedUser(user)}
              onEdit={() => handleEdit(user)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>

        {/* View Modal */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-2">User Details</h2>
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Phone:</strong> {selectedUser.phone}</p>
              <p><strong>Registered:</strong> {selectedUser.date}</p>
              <button
                onClick={() => setSelectedUser(null)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {editingUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">Edit User</h2>
              <form onSubmit={handleEditSubmit}>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="text"
                    value={editPhone}
                    onChange={(e) => setEditPhone(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setEditingUser(null)}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default AdminDashboard;