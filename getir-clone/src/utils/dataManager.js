// Data management utility for user operations
const dataManager = {
  // Storage key for localStorage
  storageKey: "users",

  // Get all users from storage
  getUsers: () => {
    try {
      const savedUsers = localStorage.getItem("users");
      return savedUsers ? JSON.parse(savedUsers) : [];
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return [];
    }
  },

  // Save users to storage
  saveUsers: (users) => {
    try {
      localStorage.setItem("users", JSON.stringify(users));
      return true;
    } catch (error) {
      console.error("Error saving to localStorage:", error);
      return false;
    }
  },

  // Add new user
  addUser: (userData) => {
    const users = dataManager.getUsers();
    const newUser = { ...userData, id: dataManager.generateUniqueId(users) };
    users.push(newUser);
    dataManager.saveUsers(users);
    return newUser;
  },

  // Update existing user
  updateUser: (userId, userData) => {
    const users = dataManager.getUsers();
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...userData, id: userId } : user
    );
    dataManager.saveUsers(updatedUsers);
    return updatedUsers.find((user) => user.id === userId);
  },

  // Delete user
  deleteUser: (userId) => {
    const users = dataManager.getUsers();
    const filteredUsers = users.filter((user) => user.id !== userId);
    dataManager.saveUsers(filteredUsers);
    return true;
  },

  // Generate unique ID
  generateUniqueId: (users) => {
    let newId;
    do {
      newId = Math.floor(100000 + Math.random() * 900000).toString();
    } while (users.some((user) => user.id === newId));
    return newId;
  },

  // Clear all data
  clearAll: () => {
    localStorage.removeItem("users");
    return true;
  },

  // Export data to JSON
  exportToJSON: (users) => {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const dataStr = JSON.stringify(users, null, 2);
      const dataBlob = new Blob([dataStr], { type: "application/json" });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(dataBlob);
      link.download = `users_data_${timestamp}.json`;
      link.click();

      URL.revokeObjectURL(link.href);
      return true;
    } catch (error) {
      console.error("Error exporting to JSON:", error);
      return false;
    }
  },

  // Get user by ID
  getUserById: (userId) => {
    const users = dataManager.getUsers();
    return users.find((user) => user.id === userId);
  },

  // Search users by name or description
  searchUsers: (searchTerm) => {
    const users = dataManager.getUsers();
    if (!searchTerm) return users;

    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  // Get data statistics
  getStats: () => {
    const users = dataManager.getUsers();
    return {
      totalUsers: users.length,
      hasData: users.length > 0,
      lastUpdated: users.length > 0 ? new Date().toISOString() : null,
    };
  },
};

export default dataManager;
