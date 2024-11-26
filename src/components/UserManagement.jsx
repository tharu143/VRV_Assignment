import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Tharun", email: "tharun@gmail.com", role: "Admin", status: "Active" },
    { id: 2, name: "Kumar", email: "kumar@gmail.com", role: "Editor", status: "Active" },
    { id: 3, name: "Prasath", email: "prasath@gmail.com", role: "Viewer", status: "Inactive" },
  ]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  const addUser = () => {
    if (newUser.name && newUser.email && newUser.role) {
      setUsers([
        ...users,
        { ...newUser, id: users.length + 1, status: "Active" },
      ]);
      setNewUser({
        name: "",
        email: "",
        role: "",
      });
      alert("New user has been successfully added.");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const updateUserStatus = (id, newStatus) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status: newStatus } : user
      )
    );
    alert(`User status has been changed to ${newStatus}.`);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      <p className="text-gray-700 mb-6">Add, view, and manage user accounts</p>

      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              placeholder="Enter name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="p-2 border rounded-md w-full"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              placeholder="Enter email"
              type="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              className="p-2 border rounded-md w-full"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="role" className="text-sm font-medium text-gray-700">Role</label>
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            className="p-2 border rounded-md w-full"
          >
            <option value="">Select role</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
        </div>

        <button
          onClick={addUser}
          className="bg-blue-500 text-white py-2 px-4 rounded-md w-full sm:w-auto hover:bg-blue-600"
        >
          Add User
        </button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border-b py-2 text-left">Name</th>
              <th className="border-b py-2 text-left">Email</th>
              <th className="border-b py-2 text-left">Role</th>
              <th className="border-b py-2 text-left">Status</th>
              <th className="border-b py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border-b py-2">{user.name}</td>
                <td className="border-b py-2">{user.email}</td>
                <td className="border-b py-2">{user.role}</td>
                <td className="border-b py-2">{user.status}</td>
                <td className="border-b py-2">
                  <button
                    onClick={() =>
                      updateUserStatus(
                        user.id,
                        user.status === "Active" ? "Inactive" : "Active"
                      )
                    }
                    className="bg-gray-300 text-black py-1 px-3 rounded-md hover:bg-gray-400"
                  >
                    {user.status === "Active" ? "Deactivate" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
