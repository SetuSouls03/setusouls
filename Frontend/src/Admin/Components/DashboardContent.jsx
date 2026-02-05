// src/Admin/Components/DashboardContent.jsx
import React from 'react';
import { 
  FaChartLine, FaUsers, FaPray, FaQuestionCircle, 
  FaCalendarAlt, FaUserEdit, FaEye, FaStickyNote, 
  FaCog, FaPlus, FaEdit, FaUpload, FaDownload,
  FaBell, FaQuestionCircle as FaHelp
} from 'react-icons/fa';

const DashboardContent = () => {
  // Dashboard stats
  const stats = [
    { label: 'Total Devotees', value: '1,245', icon: <FaUsers />, color: 'from-amber-500 to-orange-500', change: '+12%' },
    { label: 'Active Prayers', value: '89', icon: <FaPray />, color: 'from-blue-500 to-cyan-500', change: '+5%' },
    { label: 'Pending Queries', value: '23', icon: <FaQuestionCircle />, color: 'from-green-500 to-emerald-500', change: '-3%' },
    { label: 'This Month', value: '156', icon: <FaCalendarAlt />, color: 'from-purple-500 to-pink-500', change: '+18%' }
  ];

  // Recent activities
  const activities = [
    { user: 'Rahul Sharma', action: 'submitted a prayer request', time: '10 mins ago', type: 'prayer' },
    { user: 'Priya Patel', action: 'posted a new experience', time: '1 hour ago', type: 'experience' },
    { user: 'Amit Kumar', action: 'asked a question', time: '2 hours ago', type: 'query' },
    { user: 'Neha Singh', action: 'completed spiritual practice', time: '5 hours ago', type: 'sadhna' },
    { user: 'Admin', action: 'updated important notes', time: '1 day ago', type: 'update' }
  ];

  // Quick stats for current section
  const sectionStats = {
    entries: 156,
    lastUpdated: '2 days ago',
    activeUsers: 89,
    pending: 12
  };

  return (
    <>
      {/* Welcome Banner */}
      <div className="rounded-2xl p-6 text-white mb-8 shadow-lg relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="flex items-center justify-between relative z-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, Admin! 👋</h2>
            <p className="text-amber-100">
              You're currently on the Dashboard. Select a section from the sidebar to begin managing content.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <FaChartLine className="text-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-amber-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color} shadow-md`}>
                {stat.icon}
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
            <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${index === 0 ? 'bg-amber-500' : index === 1 ? 'bg-blue-500' : index === 2 ? 'bg-green-500' : 'bg-purple-500'}`}
                style={{ width: `${70 + index * 10}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-amber-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-800">Recent Activities</h3>
            <button className="text-sm font-medium text-amber-600 hover:text-amber-700 flex items-center">
              View All <FaEye className="ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 hover:bg-amber-50 rounded-lg transition-colors group">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${activity.type === 'prayer' ? 'bg-blue-100 text-blue-600' : activity.type === 'experience' ? 'bg-purple-100 text-purple-600' : activity.type === 'query' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                  <FaUserEdit />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">
                    <span className="font-medium text-gray-800">{activity.user}</span>{' '}
                    <span className="text-gray-600">{activity.action}</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-amber-600 transition-opacity">
                  <FaEye />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Current Section Management */}
        <div className="bg-white rounded-xl shadow-sm border border-amber-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800">Current Section</h3>
              <p className="text-sm text-gray-500">Manage your content</p>
            </div>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
              Active
            </span>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
              <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                <FaStickyNote className="mr-2 text-amber-600" /> Content Management
              </h4>
              <p className="text-sm text-gray-600">
                You are on the Dashboard. Total of <span className="font-bold">{sectionStats.entries}</span> entries available across all sections.
              </p>
            </div>

            <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
              <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                <FaCog className="mr-2 text-blue-600" /> Quick Actions
              </h4>
              <div className="grid grid-cols-2 gap-2 mt-3">
                <button className="px-3 py-2 bg-amber-500 text-white rounded-lg text-sm hover:bg-amber-600 transition-colors flex items-center justify-center">
                  <FaPlus className="mr-1" /> Add
                </button>
                <button className="px-3 py-2 bg-white text-amber-600 border border-amber-300 rounded-lg text-sm hover:bg-amber-50 transition-colors flex items-center justify-center">
                  <FaEdit className="mr-1" /> Edit
                </button>
                <button className="px-3 py-2 bg-white text-blue-600 border border-blue-300 rounded-lg text-sm hover:bg-blue-50 transition-colors flex items-center justify-center">
                  <FaUpload className="mr-1" /> Import
                </button>
                <button className="px-3 py-2 bg-white text-gray-600 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <FaDownload className="mr-1" /> Export
                </button>
              </div>
            </div>

            {/* Section Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">Total Entries</p>
                <p className="text-xl font-bold text-gray-800">{sectionStats.entries}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">Active Users</p>
                <p className="text-xl font-bold text-gray-800">{sectionStats.activeUsers}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">Last Updated</p>
                <p className="text-sm font-medium text-gray-800">{sectionStats.lastUpdated}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">Pending</p>
                <p className="text-xl font-bold text-gray-800">{sectionStats.pending}</p>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <p className="text-xs text-gray-500 mb-2">Quick Navigation Tip</p>
              <p className="text-sm text-gray-700">
                Use the sidebar to navigate between sections. Click on section names to expand/collapse sub-sections.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="mt-8 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-6 border border-amber-200 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center">
              <FaBell className="mr-2 text-amber-600" /> System Status
            </h4>
            <p className="text-sm text-gray-600 max-w-2xl">
              All systems operational. Database connection stable. Last backup: 2 hours ago.
              <span className="ml-2 inline-flex items-center text-green-600 font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Online
              </span>
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg font-medium hover:shadow-md transition-all flex items-center">
              <FaHelp className="mr-2" /> Get Help
            </button>
            <button className="px-6 py-2 bg-white text-amber-600 border border-amber-300 rounded-lg font-medium hover:bg-amber-50 transition-all">
              View Logs
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardContent;