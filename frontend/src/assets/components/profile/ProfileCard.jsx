import { User, Mail, Calendar, Shield ,Camera} from "lucide-react";
import { useState } from "react";
import Modal from "../ui/Modal";
export default function ProfileCard({ user }) {
    const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

      {/* Header */}

      {/* Profile Header */}

<div className="flex flex-col sm:flex-row sm:items-center gap-6 p-12 border-b border-gray-100">

  {/* Avatar */}

  <div className="relative">

    <div className="h-24 w-24 rounded-2xl bg-green-600 flex items-center justify-center text-4xl font-bold text-white shadow-md">
      {user?.name?.charAt(0).toUpperCase()}
    </div>

    {/* Camera Button (Future Upload) */}

    <button className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition">
      <Camera/>
    </button>

  </div>

  {/* User Information */}

  <div className="flex-1">

    <h2 className="text-3xl font-bold text-gray-900">
      {user?.name}
    </h2>

    <p className="text-gray-500 mt-1">
      {user?.email}
    </p>

    <div className="flex flex-wrap items-center gap-3 mt-4">

      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
        Registered User
      </span>

      <span className="flex items-center gap-1 text-sm text-green-600 font-medium">
        <span className="h-2 w-2 rounded-full bg-green-500"></span>
        Active
      </span>

    </div>

  </div>

</div>

      {/* Information */}

      <div className="p-8">

        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Personal Information
        </h3>

        <div className="grid sm:grid-cols-2 gap-6">

          <InfoCard
            icon={<User className="h-5 w-5 text-green-600" />}
            label="Full Name"
            value={user?.name}
          />

          <InfoCard
            icon={<Mail className="h-5 w-5 text-green-600" />}
            label="Email"
            value={user?.email}
          />

          <InfoCard
            icon={<Shield className="h-5 w-5 text-green-600" />}
            label="Account Type"
            value="Registered User"
          />

          <InfoCard
            icon={<Calendar className="h-5 w-5 text-green-600" />}
            label="Joined"
            value={
              user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "Recently"
            }
          />

        </div>

        <button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition" onClick={() => setOpen(true)}>
          Edit Profile
        </button>
  <Modal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Edit Profile"
>
  <div className="space-y-6">

    {/* User Info */}
    <div className="flex items-center gap-4 border-b border-gray-100 pb-5">

      <div className="h-16 w-16 rounded-2xl bg-green-600 flex items-center justify-center text-2xl font-bold text-white">
        {user?.name?.charAt(0).toUpperCase()}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          {user?.name}
        </h3>

        <p className="text-sm text-gray-500">
          {user?.email}
        </p>

        <span className="inline-block mt-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
          Registered User
        </span>
      </div>

    </div>

    {/* Name */}

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Full Name
      </label>

      <input
        type="text"
        defaultValue={user?.name}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
      />
    </div>

    {/* Email */}

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Email Address
      </label>

      <input
        type="email"
        defaultValue={user?.email}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
      />
    </div>

    {/* Buttons */}

    <div className="flex justify-end gap-3 pt-2">

      <button
        onClick={() => setOpen(false)}
        className="rounded-xl border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-100 transition"
      >
        Cancel
      </button>

      <button
        className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition"
      >
        Save Changes
      </button>

    </div>

  </div>
</Modal>

      </div>

    </div>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 p-4">

      <div className="h-11 w-11 rounded-xl bg-green-100 flex items-center justify-center">
        {icon}
      </div>

      <div>
        <p className="text-xs text-gray-500">
          {label}
        </p>

        <p className="font-semibold text-gray-900">
          {value}
        </p>
      </div>

    </div>
  );
}