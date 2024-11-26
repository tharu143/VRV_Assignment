import React, { useState } from "react";

const permissions = [
  { id: "create", name: "Create" },
  { id: "read", name: "Read" },
  { id: "update", name: "Update" },
  { id: "delete", name: "Delete" },
];

const initialRolePermissions = {
  Admin: ["create", "read", "update", "delete"],
  Editor: ["create", "read", "update"],
  Viewer: ["read"],
};

const PermissionManagement = () => {
  const [selectedRole, setSelectedRole] = useState("Admin");
  const [rolePermissions, setRolePermissions] = useState(initialRolePermissions);

  const handlePermissionChange = (permissionId) => {
    const updatedPermissions = rolePermissions[selectedRole].includes(permissionId)
      ? rolePermissions[selectedRole].filter((id) => id !== permissionId)
      : [...rolePermissions[selectedRole], permissionId];

    setRolePermissions({
      ...rolePermissions,
      [selectedRole]: updatedPermissions,
    });

    alert(`Permissions for ${selectedRole} role have been updated.`);
  };

  return (
    <div className="p-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Permission Management</h2>
        <p className="text-gray-700 mb-6">Manage permissions for each role</p>

        <div className="space-y-4">
          {/* Role Selection */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-2">
              Select Role
            </label>
            <select
              id="role"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="border p-2 rounded w-full"
            >
              {Object.keys(rolePermissions).map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          {/* Permissions */}
          <div>
            {permissions.map((permission) => (
              <div key={permission.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={permission.id}
                  checked={rolePermissions[selectedRole].includes(permission.id)}
                  onChange={() => handlePermissionChange(permission.id)}
                  className="form-checkbox"
                />
                <label htmlFor={permission.id} className="text-sm font-medium">
                  {permission.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionManagement;
