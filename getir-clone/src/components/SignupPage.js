import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dataManager from "../utils/dataManager";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    score: "",
  });
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [exportStatus, setExportStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  // Load users from localStorage on component mount
  useEffect(() => {
    const savedUsers = dataManager.getUsers();
    setUsers(savedUsers);

    // Debug: Log dataManager object and current data
    console.log(" dataManager object:", dataManager);
    console.log(" Current users from storage:", savedUsers);
    console.log(" Data statistics:", dataManager.getStats());
  }, []);

  // Initialize form data
  useEffect(() => {
    setFormData({ name: "", description: "", score: "" });
  }, []);

  // Update users state when localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const savedUsers = dataManager.getUsers();
      setUsers(savedUsers);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Function to export data to JSON file (manual export)
  const exportToJSON = () => {
    if (users.length === 0) {
      alert("No users to export!");
      return;
    }

    const success = dataManager.exportToJSON(users);
    if (success) {
      setExportStatus("✅ Data exported successfully!");
      setTimeout(() => setExportStatus(""), 3000);
    } else {
      setExportStatus("❌ Error exporting data");
      setTimeout(() => setExportStatus(""), 3000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.score) {
      alert("Please fill in all fields");
      return;
    }

    // Validate score is a number
    const scoreValue = parseFloat(formData.score);
    if (isNaN(scoreValue) || scoreValue < 0) {
      alert("Please enter a valid score (positive number)");
      return;
    }

    if (isEditing) {
      // Update existing user using dataManager
      const updatedUser = dataManager.updateUser(editingId, formData);
      if (updatedUser) {
        setUsers(dataManager.getUsers());
        setIsEditing(false);
        setEditingId(null);
      }
    } else {
      // Add new user using dataManager
      const newUser = dataManager.addUser(formData);
      if (newUser) {
        setUsers(dataManager.getUsers());
      }
    }

    // Reset form
    setFormData({ name: "", description: "", score: "" });
  };

  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      description: user.description,
      score: user.score || "",
    });
    setIsEditing(true);
    setEditingId(user.id);
  };

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const success = dataManager.deleteUser(userId);
      if (success) {
        setUsers(dataManager.getUsers());
      }
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.id.toString().includes(searchQuery) ||
      (user.score && user.score.toString().includes(searchQuery))
  );

  // Calculate total score
  const totalScore = users.reduce(
    (sum, user) => sum + (parseFloat(user.score) || 0),
    0
  );

  // Clear all data
  const clearAllData = () => {
    if (
      window.confirm(
        "Are you sure you want to clear all data? This cannot be undone!"
      )
    ) {
      const success = dataManager.clearAll();
      if (success) {
        setUsers([]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-getir-purple">
            User Registration
          </h1>
          <button
            onClick={handleBack}
            className="bg-getir-purple text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors text-sm sm:text-base"
          >
            ← Back to Home
          </button>
        </div>

        {/* Data Management Section */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Data Management
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
            <button
              onClick={exportToJSON}
              disabled={users.length === 0}
              className="bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              📥 Export to JSON
            </button>

            <button
              onClick={clearAllData}
              disabled={users.length === 0}
              className="bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              🗑️ Clear All Data
            </button>

            {exportStatus && (
              <span
                className={`px-3 py-2 rounded-lg text-sm ${
                  exportStatus.includes("✅")
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {exportStatus}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
              {isEditing ? "Edit User" : "Add New User"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-getir-purple focus:border-transparent text-base"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-getir-purple focus:border-transparent resize-none text-base"
                  placeholder="Enter description"
                />
              </div>

              <div>
                <label
                  htmlFor="score"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Score *
                </label>
                <input
                  type="number"
                  id="score"
                  name="score"
                  value={formData.score}
                  onChange={handleInputChange}
                  min="0"
                  step="0.1"
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-getir-purple focus:border-transparent text-base"
                  placeholder="Enter score (e.g., 85.5)"
                />
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-getir-purple text-white py-3 px-4 sm:px-6 rounded-lg hover:bg-opacity-90 transition-colors font-medium text-sm sm:text-base"
                >
                  {isEditing ? "Update User" : "Add User"}
                </button>

                {isEditing && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setEditingId(null);
                      setFormData({ name: "", description: "" });
                    }}
                    className="px-4 sm:px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Users List Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Registered Users ({users.length})
              </h2>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Total Score:</span>{" "}
                  {totalScore.toFixed(1)}
                </div>
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className="text-getir-purple hover:text-opacity-80 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  title="Search Users"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Search Bar */}
            {showSearch && (
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, description, ID, or score..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-getir-purple focus:border-transparent"
                  />
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            )}

            {users.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <p>No users registered yet</p>
                <p className="text-sm">Add your first user using the form</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {searchQuery && filteredUsers.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <svg
                      className="w-16 h-16 mx-auto mb-4 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <p>No users found matching "{searchQuery}"</p>
                    <p className="text-sm">Try a different search term</p>
                  </div>
                ) : (
                  (searchQuery ? filteredUsers : users).map((user, index) => (
                    <div
                      key={user.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="bg-getir-purple text-white text-xs px-2 py-1 rounded-full">
                              ID: {user.id}
                            </span>
                            <span className="text-sm text-gray-500">
                              #{index + 1}
                            </span>
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                              Score: {user.score || 0}
                            </span>
                          </div>
                          <h3 className="font-semibold text-gray-800 mb-1">
                            {user.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {user.description}
                          </p>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <button
                            onClick={() => handleEdit(user)}
                            className="text-blue-600 hover:text-blue-800 p-1"
                            title="Edit"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="text-red-600 hover:text-red-800 p-1"
                            title="Delete"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
