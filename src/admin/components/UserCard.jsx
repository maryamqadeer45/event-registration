// import React from 'react';

// const UserCard = ({ name, phone, date, onView, onEdit, onDelete }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
//       <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
//       <p className="text-sm text-gray-600">Phone: {phone}</p>
//       <p className="text-sm text-gray-500">Registered: {date}</p>
//       <div className="mt-3 flex gap-4 text-sm text-blue-600">
//         <button onClick={onView} className="hover:underline">View</button>
//         <button onClick={onEdit} className="hover:underline">Edit</button>
//         <button onClick={onDelete} className="hover:underline text-red-600">Delete</button>
//       </div>
//     </div>
//   );
// };

// export default UserCard;
import React from 'react';

const UserCard = ({ name, phone, date, onView, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">Phone: {phone}</p>
      <p className="text-sm text-gray-500">Registered: {date}</p>
      <div className="mt-3 flex gap-4 text-sm">
        <button
          onClick={onView}
          className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
        >
          View
        </button>
        <button
          onClick={onEdit}
          className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="text-red-600 hover:underline focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;