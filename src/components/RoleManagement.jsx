import { useState } from "react";

const initialRoles = [
  { id: 1, name: "Admin", description: "Full access to all features" },
  { id: 2, name: "Editor", description: "Can edit and publish content" },
  { id: 3, name: "Viewer", description: "Can view content only" },
];

export default function RoleManagement() {
  const [roles, setRoles] = useState(initialRoles);
  const [newRole, setNewRole] = useState({ name: "", description: "" });

  const addRole = () => {
    if (newRole.name && newRole.description) {
      setRoles([...roles, { ...newRole, id: roles.length + 1 }]);
      setNewRole({ name: "", description: "" });
      alert("New role added successfully!");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Role Management</h2>
      <p className="text-gray-700 mb-6">Define and manage user roles.</p>

      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <label htmlFor="role-name" className="text-sm font-medium text-gray-700">Role Name</label>
            <input
              id="role-name"
              type="text"
              placeholder="Enter role name"
              value={newRole.name}
              onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
              className="p-2 border rounded-md w-full"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="role-description" className="text-sm font-medium text-gray-700">Description</label>
            <input
              id="role-description"
              type="text"
              placeholder="Enter role description"
              value={newRole.description}
              onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
              className="p-2 border rounded-md w-full"
            />
          </div>
        </div>

        <button
          onClick={addRole}
          className="bg-blue-500 text-white py-2 px-4 rounded-md w-full sm:w-auto hover:bg-blue-600"
        >
          Add Role
        </button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border-b py-2 text-left">Role Name</th>
              <th className="border-b py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td className="border-b py-2">{role.name}</td>
                <td className="border-b py-2">{role.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
