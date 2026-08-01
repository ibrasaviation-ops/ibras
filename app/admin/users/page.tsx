// app/admin/users/page.tsx
'use client';

import { useState } from 'react';
import {
  UserPlus,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
  Users as UsersIcon,
  UserCheck,
  UserX,
  Clock,
  X,
} from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive' | 'Pending';
  joined: string;
  lastActive?: string;
  avatar?: string;
}

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('All Roles');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const itemsPerPage = 5;

  // Dummy user data with more realistic info
  const users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@ibrasaviation.com',
      role: 'Admin',
      status: 'Active',
      joined: '2024-01-15',
      lastActive: '2024-08-10 14:30',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@ibrasaviation.com',
      role: 'Editor',
      status: 'Active',
      joined: '2024-02-20',
      lastActive: '2024-08-09 11:15',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@ibrasaviation.com',
      role: 'Viewer',
      status: 'Inactive',
      joined: '2024-03-10',
      lastActive: '2024-07-01 09:00',
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice.brown@ibrasaviation.com',
      role: 'Editor',
      status: 'Active',
      joined: '2024-04-05',
      lastActive: '2024-08-08 16:45',
    },
    {
      id: 5,
      name: 'Charlie Wilson',
      email: 'charlie.wilson@ibrasaviation.com',
      role: 'Viewer',
      status: 'Pending',
      joined: '2024-05-12',
      lastActive: '2024-08-07 10:20',
    },
    {
      id: 6,
      name: 'Diana Martinez',
      email: 'diana.martinez@ibrasaviation.com',
      role: 'Admin',
      status: 'Active',
      joined: '2024-06-01',
      lastActive: '2024-08-10 09:45',
    },
    {
      id: 7,
      name: 'Edward Chen',
      email: 'edward.chen@ibrasaviation.com',
      role: 'Editor',
      status: 'Active',
      joined: '2024-06-15',
      lastActive: '2024-08-09 13:20',
    },
    {
      id: 8,
      name: 'Fiona Garcia',
      email: 'fiona.garcia@ibrasaviation.com',
      role: 'Viewer',
      status: 'Inactive',
      joined: '2024-07-01',
      lastActive: '2024-06-28 15:30',
    },
    {
      id: 9,
      name: 'George Patel',
      email: 'george.patel@ibrasaviation.com',
      role: 'Admin',
      status: 'Active',
      joined: '2024-07-20',
      lastActive: '2024-08-10 12:00',
    },
    {
      id: 10,
      name: 'Hannah Kim',
      email: 'hannah.kim@ibrasaviation.com',
      role: 'Editor',
      status: 'Pending',
      joined: '2024-08-05',
      lastActive: '2024-08-06 08:30',
    },
    {
      id: 11,
      name: "Ian O'Brien",
      email: 'ian.obrien@ibrasaviation.com',
      role: 'Viewer',
      status: 'Active',
      joined: '2024-08-10',
      lastActive: '2024-08-10 10:00',
    },
    {
      id: 12,
      name: 'Julia Santos',
      email: 'julia.santos@ibrasaviation.com',
      role: 'Editor',
      status: 'Active',
      joined: '2024-08-12',
      lastActive: '2024-08-12 14:30',
    },
  ];

  const getStatusBadge = (status: User['status']) => {
    const styles: Record<User['status'], string> = {
      Active: 'bg-success/20 text-success border-success/30',
      Inactive: 'bg-error/20 text-error border-error/30',
      Pending: 'bg-warning/20 text-warning border-warning/30',
    };

    return `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status]}`;
  };

  const getStatusIcon = (status: User['status']) => {
    switch (status) {
      case 'Active':
        return <UserCheck className="w-3 h-3" />;
      case 'Inactive':
        return <UserX className="w-3 h-3" />;
      case 'Pending':
        return <Clock className="w-3 h-3" />;
    }
  };

  const getRoleBadge = (role: User['role']) => {
    const styles: Record<User['role'], string> = {
      Admin: 'bg-primary/20 text-primary border-primary/30',
      Editor: 'bg-secondary/20 text-secondary border-secondary/30',
      Viewer: 'bg-accent/10 text-accent border-accent/20',
    };

    return `inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${styles[role]}`;
  };

  // Filter users
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'All Roles' || user.role === selectedRole;
    const matchesStatus = selectedStatus === 'All Status' || user.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Stats
  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.status === 'Active').length;
  const pendingUsers = users.filter((u) => u.status === 'Pending').length;
  const inactiveUsers = users.filter((u) => u.status === 'Inactive').length;

  // Get unique roles and statuses for filters
  const roles = ['All Roles', ...new Set(users.map((u) => u.role))];
  const statuses = ['All Status', ...new Set(users.map((u) => u.status))];

  return (
    <div className="h-full flex flex-col gap-4 p-4 sm:p-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
            <UsersIcon className="w-7 h-7 text-primary" />
            Users
          </h1>
          <p className="text-sm text-muted mt-1">
            Manage users and their permissions across the platform
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedUser(null);
            setShowUserModal(true);
          }}
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-primary-glow hover:-translate-y-0.5"
        >
          <UserPlus className="w-4 h-4" />
          Add User
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 shrink-0">
        <div className="bg-surface/50 backdrop-blur-sm rounded-xl border border-border p-4 hover:border-primary/30 transition-all duration-300">
          <p className="text-xs text-muted uppercase tracking-wider">Total Users</p>
          <p className="text-2xl font-bold text-foreground mt-1">{totalUsers}</p>
        </div>
        <div className="bg-surface/50 backdrop-blur-sm rounded-xl border border-border p-4 hover:border-success/30 transition-all duration-300">
          <p className="text-xs text-muted uppercase tracking-wider">Active</p>
          <p className="text-2xl font-bold text-success mt-1">{activeUsers}</p>
        </div>
        <div className="bg-surface/50 backdrop-blur-sm rounded-xl border border-border p-4 hover:border-warning/30 transition-all duration-300">
          <p className="text-xs text-muted uppercase tracking-wider">Pending</p>
          <p className="text-2xl font-bold text-warning mt-1">{pendingUsers}</p>
        </div>
        <div className="bg-surface/50 backdrop-blur-sm rounded-xl border border-border p-4 hover:border-error/30 transition-all duration-300">
          <p className="text-xs text-muted uppercase tracking-wider">Inactive</p>
          <p className="text-2xl font-bold text-error mt-1">{inactiveUsers}</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3 shrink-0">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-subtle" />
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-surface/50 backdrop-blur-sm border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-foreground placeholder-subtle text-sm transition-all duration-300"
          />
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-subtle" />
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="pl-10 pr-8 py-2.5 bg-surface/50 backdrop-blur-sm border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-foreground text-sm appearance-none cursor-pointer transition-all duration-300"
            >
              {roles.map((role) => (
                <option key={role} value={role} className="bg-surface text-foreground">
                  {role}
                </option>
              ))}
            </select>
          </div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2.5 bg-surface/50 backdrop-blur-sm border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-foreground text-sm appearance-none cursor-pointer transition-all duration-300"
          >
            {statuses.map((status) => (
              <option key={status} value={status} className="bg-surface text-foreground">
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="flex-1 min-h-0">
        <div className="bg-surface/30 backdrop-blur-sm rounded-xl border border-border h-full flex flex-col overflow-hidden hover:border-primary/20 transition-all duration-300">
          <div className="overflow-x-auto overflow-y-auto flex-1">
            <table className="w-full min-w-[800px]">
              <thead className="bg-elevated/30 backdrop-blur-sm border-b border-border sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wider hidden sm:table-cell">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wider hidden lg:table-cell">
                    Joined
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wider hidden xl:table-cell">
                    Last Active
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-muted uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {paginatedUsers.length > 0 ? (
                  paginatedUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-elevated/30 transition-all duration-200 group"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-semibold shadow-lg shadow-primary/20">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <span className="font-medium text-foreground text-sm block">
                              {user.name}
                            </span>
                            <span className="text-muted text-xs sm:hidden">{user.email}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-muted text-sm hidden sm:table-cell">
                        {user.email}
                      </td>
                      <td className="px-4 py-3">
                        <span className={getRoleBadge(user.role)}>{user.role}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={getStatusBadge(user.status)}>
                          {getStatusIcon(user.status)}
                          {user.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted text-sm hidden lg:table-cell">
                        {new Date(user.joined).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </td>
                      <td className="px-4 py-3 text-muted text-sm hidden xl:table-cell">
                        {user.lastActive || 'Never'}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex justify-end gap-1">
                          <button
                            onClick={() => {
                              setSelectedUser(user);
                              setShowUserModal(true);
                            }}
                            className="p-1.5 rounded-lg text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            className="p-1.5 rounded-lg text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200"
                            title="Edit User"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            className="p-1.5 rounded-lg text-muted hover:text-error hover:bg-error/10 transition-all duration-200"
                            title="Delete User"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-4 py-12 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <UsersIcon className="w-12 h-12 text-subtle/30" />
                        <p className="text-muted text-sm">No users found matching your criteria</p>
                        <button
                          onClick={() => {
                            setSearchTerm('');
                            setSelectedRole('All Roles');
                            setSelectedStatus('All Status');
                          }}
                          className="text-primary hover:text-primary-hover text-sm font-medium transition-colors"
                        >
                          Clear filters
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      {filteredUsers.length > 0 && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 shrink-0 pt-2">
          <p className="text-sm text-muted">
            Showing{' '}
            <span className="text-foreground font-medium">{Math.min(1, filteredUsers.length)}</span>{' '}
            to{' '}
            <span className="text-foreground font-medium">
              {Math.min(currentPage * itemsPerPage, filteredUsers.length)}
            </span>{' '}
            of <span className="text-foreground font-medium">{filteredUsers.length}</span> users
          </p>
          <div className="flex gap-1">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 border border-border rounded-lg text-sm text-muted hover:bg-elevated hover:text-foreground transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-muted"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              return (
                <button
                  key={i}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    currentPage === pageNum
                      ? 'bg-primary text-white shadow-primary-glow'
                      : 'text-muted hover:bg-elevated hover:text-foreground'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 border border-border rounded-lg text-sm text-muted hover:bg-elevated hover:text-foreground transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-muted"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* User Detail Modal */}
      {showUserModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-surface rounded-2xl border border-border max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
            <div className="p-6 border-b border-border flex justify-between items-center sticky top-0 bg-surface/95 backdrop-blur-sm z-10">
              <h2 className="text-xl font-bold text-foreground">
                {selectedUser ? 'User Details' : 'Add New User'}
              </h2>
              <button
                onClick={() => setShowUserModal(false)}
                className="p-1.5 rounded-lg hover:bg-elevated text-muted hover:text-foreground transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              {selectedUser ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-semibold shadow-lg shadow-primary/20">
                      {selectedUser.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{selectedUser.name}</h3>
                      <p className="text-sm text-muted">{selectedUser.email}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider">Role</p>
                      <p className="text-sm font-medium text-foreground mt-1">
                        {selectedUser.role}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider">Status</p>
                      <p className="text-sm font-medium text-foreground mt-1">
                        <span className={getStatusBadge(selectedUser.status)}>
                          {getStatusIcon(selectedUser.status)}
                          {selectedUser.status}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider">Joined</p>
                      <p className="text-sm font-medium text-foreground mt-1">
                        {new Date(selectedUser.joined).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider">Last Active</p>
                      <p className="text-sm font-medium text-foreground mt-1">
                        {selectedUser.lastActive || 'Never'}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted uppercase tracking-wider block mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 bg-elevated/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-foreground text-sm"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted uppercase tracking-wider block mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 bg-elevated/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-foreground text-sm"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted uppercase tracking-wider block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-elevated/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-foreground text-sm"
                      placeholder="user@ibrasaviation.com"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted uppercase tracking-wider block mb-2">
                        Role
                      </label>
                      <select className="w-full px-4 py-2 bg-elevated/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-foreground text-sm">
                        <option value="Admin">Admin</option>
                        <option value="Editor">Editor</option>
                        <option value="Viewer">Viewer</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-muted uppercase tracking-wider block mb-2">
                        Status
                      </label>
                      <select className="w-full px-4 py-2 bg-elevated/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-foreground text-sm">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Pending">Pending</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                {selectedUser ? (
                  <>
                    <button className="flex-1 bg-primary hover:bg-primary-hover text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-primary-glow hover:-translate-y-0.5">
                      Edit User
                    </button>
                    <button className="flex-1 bg-error/10 hover:bg-error/20 text-error px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300">
                      Delete User
                    </button>
                  </>
                ) : (
                  <button className="w-full bg-primary hover:bg-primary-hover text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-primary-glow hover:-translate-y-0.5">
                    Create User
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
