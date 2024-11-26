import React from "react";
import DashboardShell from "../components/DashboardShell";
import DashboardHeader from "../components/DashboardHeader";
import UserManagement from "../components/UserManagement";
import RoleManagement from "../components/RoleManagement";
import PermissionManagement from "../components/PermissionManagement";

const DashboardPage = () => {
  return (
    <DashboardShell>
      {/* Logo */}
      <div className="flex items-center justify-between mb-6">
        <img
          src="https://companyasset.blob.core.windows.net/assets/vrvlogo.png"
          alt="Company Logo"
          className="h-12" // Adjust height as needed
        />
      </div>
      
      {/* Header */}
      <DashboardHeader
        heading="RBAC Dashboard"
        text="Manage users, roles, and permissions"
      />
      
      {/* Main Content */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
        <div className="bg-blue-50 p-4 rounded-lg shadow-lg border border-blue-200">
          <UserManagement />
        </div>
        <div className="bg-green-50 p-4 rounded-lg shadow-lg border border-green-200">
          <RoleManagement />
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg shadow-lg border border-yellow-200">
          <PermissionManagement />
        </div>
      </div>
    </DashboardShell>
  );
};

export default DashboardPage;
