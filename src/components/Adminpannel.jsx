import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminPanel = () => {
  const handleLogout = () => {
  setTimeout(() => {
    window.location.href = "/";
  }, 800);
};

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-50 dark:bg-gray-800 border-r border-gray-300 hidden sm:block">
        <div className="h-full px-4 py-6 space-y-4">
          <h1 className='ml-10 font-bold text-red-700 size-xl'>Admin Panel</h1>
          <Link to="/admin/approved/appointments" className="flex items-center text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md">
            Approved Appointments
          </Link>
          <Link to="/admin/messages" className="flex items-center text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md">
            Messages
          </Link>
          <Link to="/admin/doctorlist" className="flex items-center text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md">
            Doctors
          </Link>
          <Link to="/admin/PatientList" className="flex items-center text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md">
            Patients
          </Link>
          <Link to="/admin/appointments" className="flex items-center text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md">
            Appointments
          </Link>
<button className="py-2 px-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-700 transition" onClick={handleLogout}>
                
                  <div className='text-white scale-100 hover:text-red-600 text-sm'>
                  </div>
                  Logout
              </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
