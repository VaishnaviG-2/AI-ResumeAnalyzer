import { useState } from "react";
import {
  FaUser,
  FaLock,
  FaBell,
  FaCamera,
  FaSave,
} from "react-icons/fa";
import { useUser } from "../context/UserContext";
import Toast from "../components/Toast";

const tabs = [
  { id: "profile", label: "Profile", icon: <FaUser /> },
  { id: "security", label: "Security", icon: <FaLock /> },
  { id: "notifications", label: "Notifications", icon: <FaBell /> },
];

function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [toast, setToast] = useState({ show: false, message: "" });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 2500);
  };

  return (
    <div className="space-y-6">
      <Toast message={toast.message} show={toast.show} />

      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 text-sm mt-1">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
        <div className="dashboard-card p-3 h-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 text-sm transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold shadow-md shadow-violet-200"
                  : "text-gray-600 hover:bg-violet-50 hover:text-violet-700"
              }`}
            >
              <span className="text-base">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="dashboard-card p-6 sm:p-8">
          {activeTab === "profile" && <ProfileTab showToast={showToast} />}
          {activeTab === "security" && <SecurityTab showToast={showToast} />}
          {activeTab === "notifications" && (
            <NotificationsTab showToast={showToast} />
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Profile Tab ---------------- */

function ProfileTab({ showToast }) {
  const { user, updateUser } = useUser();
  const [form, setForm] = useState(user);
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaving(true);

    // simulate an API call — swap this block for your real request
    setTimeout(() => {
      updateUser(form);
      setSaving(false);
      showToast("Profile updated successfully");
    }, 600);
  };

  return (
    <form onSubmit={handleSave} className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Profile Information
        </h2>
        <p className="text-sm text-gray-500">
          Update your photo and personal details
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-white text-2xl font-semibold flex items-center justify-center ring-4 ring-white shadow-md">
            {form.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
          <button
            type="button"
            className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-violet-600 hover:bg-violet-50 transition"
          >
            <FaCamera className="text-xs" />
          </button>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">Profile Photo</p>
          <p className="text-xs text-gray-400 mt-0.5">
            JPG, PNG. Max size 2MB.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <Field
          label="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
        />
        <Field
          label="Job Title"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="e.g. Software Engineer"
        />
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={saving}
          className="primary-btn flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <FaSave className="text-sm" />
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}

/* ---------------- Security Tab ---------------- */

function SecurityTab({ showToast }) {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.currentPassword || !form.newPassword) {
      setError("Please fill in all password fields.");
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }

    setError("");
    setSaving(true);

    setTimeout(() => {
      setSaving(false);
      setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      showToast("Password updated successfully");
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Password & Security
        </h2>
        <p className="text-sm text-gray-500">
          Update your password to keep your account secure
        </p>
      </div>

      <div className="space-y-5 max-w-md">
        <Field
          label="Current Password"
          name="currentPassword"
          type="password"
          value={form.currentPassword}
          onChange={handleChange}
        />
        <Field
          label="New Password"
          name="newPassword"
          type="password"
          value={form.newPassword}
          onChange={handleChange}
        />
        <Field
          label="Confirm New Password"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
      </div>

      {error && (
        <div className="rounded-xl bg-red-50 border border-red-200 text-red-600 p-3 text-sm max-w-md">
          {error}
        </div>
      )}

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={saving}
          className="primary-btn flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <FaSave className="text-sm" />
          {saving ? "Updating..." : "Update Password"}
        </button>
      </div>
    </form>
  );
}

/* ---------------- Notifications Tab ---------------- */

function NotificationsTab({ showToast }) {
  const [prefs, setPrefs] = useState(() => {
    const stored = localStorage.getItem("notification-prefs");
    return stored
      ? JSON.parse(stored)
      : {
          resumeAnalysis: true,
          aiSuggestions: true,
          weeklyReport: false,
          productUpdates: false,
        };
  });

  const toggle = (key) => {
    const updated = { ...prefs, [key]: !prefs[key] };
    setPrefs(updated);
    localStorage.setItem("notification-prefs", JSON.stringify(updated));
    showToast("Preferences updated");
  };

  const options = [
    {
      key: "resumeAnalysis",
      title: "Resume Analysis Complete",
      desc: "Get notified when your resume analysis is ready",
    },
    {
      key: "aiSuggestions",
      title: "New AI Suggestions",
      desc: "Get notified when new suggestions are available",
    },
    {
      key: "weeklyReport",
      title: "Weekly Report",
      desc: "Receive a summary of your progress every week",
    },
    {
      key: "productUpdates",
      title: "Product Updates",
      desc: "News about new features and improvements",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Notification Preferences
        </h2>
        <p className="text-sm text-gray-500">
          Choose what you want to be notified about
        </p>
      </div>

      <div className="space-y-3">
        {options.map((opt) => (
          <div
            key={opt.key}
            className="flex items-center justify-between bg-gray-50 rounded-xl p-4"
          >
            <div>
              <p className="text-sm font-medium text-gray-800">
                {opt.title}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{opt.desc}</p>
            </div>

            <button
              type="button"
              onClick={() => toggle(opt.key)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                prefs[opt.key] ? "bg-violet-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                  prefs[opt.key] ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
      />
    </div>
  );
}

export default Settings;