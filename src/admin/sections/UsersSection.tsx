import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { AdminUser } from '../../types';
import { Users, Plus, Trash2, Sparkles, X } from 'lucide-react';

export const UsersSection: React.FC = () => {
  const { users, addAdminUser, deleteAdminUser } = useCms();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newUser, setNewUser] = useState<Omit<AdminUser, 'id'>>({
    name: '',
    email: '',
    password: '',
    role: 'Editor',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    addAdminUser(newUser);

    setIsModalOpen(false);

    setNewUser({
      name: '',
      email: '',
      password: '',
      role: 'Editor',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    });
  };

  return (
    <div className="space-y-6">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">

        <div>
          <h2 className="text-xl font-bold text-white font-serif flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-400" />
            User & Role Management ({users.length})
          </h2>

          <p className="text-xs text-slate-400">
            Grant Super Admin, Editor, or Content Manager access permissions.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Admin User</span>
        </button>

      </div>

      <div className="p-4 rounded-3xl bg-[#0B1F2A] border border-slate-800 overflow-x-auto">

        <table className="w-full text-left text-xs">

          <thead>

            <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px]">

              <th className="py-3 px-3">
                User Profile
              </th>

              <th className="py-3 px-3">
                Email Address
              </th>

              <th className="py-3 px-3">
                Role
              </th>

              <th className="py-3 px-3">
                Last Active
              </th>

              <th className="py-3 px-3 text-right">
                Action
              </th>

            </tr>

          </thead>

          <tbody className="divide-y divide-slate-800/60">
                        {users.map((usr) => (
              <tr
                key={usr.id}
                className="hover:bg-slate-800/40 transition-colors"
              >
                <td className="py-3 px-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={usr.avatar}
                      alt={usr.name}
                      className="w-9 h-9 rounded-full object-cover border border-amber-500/40"
                    />

                    <span className="font-bold text-white text-sm">
                      {usr.name}
                    </span>
                  </div>
                </td>

                <td className="py-3 px-3 text-slate-300 font-mono">
                  {usr.email}
                </td>

                <td className="py-3 px-3">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                      usr.role === "Super Admin"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                        : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    }`}
                  >
                    {usr.role}
                  </span>
                </td>

                <td className="py-3 px-3 text-slate-400">
                  {usr.lastLogin || "Never"}
                </td>

                <td className="py-3 px-3 text-right">
                  {usr.role !== "Super Admin" && (
                    <button
                      onClick={() => {
                        if (confirm(`Remove user "${usr.name}"?`)) {
                          deleteAdminUser(usr.id);
                        }
                      }}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-red-900 text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-md rounded-3xl bg-[#0B1F2A] border border-amber-500/20 p-6">

            <div className="flex items-center justify-between mb-6">

              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Add Admin User
              </h3>

              <button
                onClick={() => setIsModalOpen(false)}
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>

            </div>

            <form
              onSubmit={handleAdd}
              className="space-y-4"
            >
              
