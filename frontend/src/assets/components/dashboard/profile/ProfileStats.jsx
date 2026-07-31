import { FileText, Bookmark, Activity, Sparkles } from "lucide-react";

export default function ProfileStats({ contents,user }) {
  const generated = contents.length;

  const saved = contents.length;

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const thisMonth = contents.filter((item) => {
    const date = new Date(item.createdAt);

    return (
      date.getMonth() === currentMonth && date.getFullYear() === currentYear
    );
  }).length;

  const progress = generated === 0 ? 0 : Math.round((saved / generated) * 100);
  return (
    <div className="space-y-6">
      {/* Statistics */}

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Activity</h2>

        <div className="grid grid-cols-2 gap-4">
          <StatCard
  icon={<FileText />}
  title="Generated"
  value={generated}
/>

          <StatCard icon={<Bookmark />} title="Saved" value={saved} />

          <StatCard icon={<Sparkles />} title="This Month" value={thisMonth} />

          <StatCard icon={<Activity />} title="Status" value={user ? "Active" : "Offline"} green />
        </div>
      </div>

      {/* Progress */}

    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">

  <h2 className="text-lg font-bold text-gray-900">
    Progress
  </h2>

  <p className="text-sm text-gray-500">
    Content Saved
  </p>

  {/* Progress Bar */}

  <div className="w-full h-3 bg-gray-200 rounded-full mt-2 overflow-hidden">

    <div
      className="h-full bg-green-600 rounded-full transition-all duration-500"
      style={{ width: `${progress}%` }}
    />

  </div>

  {/* Labels */}

  <div className="flex justify-between items-center mt-3">

    <div>
      <p className="text-sm font-semibold text-gray-900">
        {saved} Descriptions
      </p>

      <p className="text-xs text-gray-500">
        Saved Successfully
      </p>
    </div>

    <span className="text-lg font-bold text-green-600">
      {progress}%
    </span>

  </div>

</div>
    </div>
  );
}

function StatCard({ icon, title, value, green }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-4">
      <div className="h-10 w-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
        {icon}
      </div>

      <p className="mt-4 text-sm text-gray-500">{title}</p>

      <p
        className={`mt-1 text-xl font-bold ${
          green ? "text-green-600" : "text-gray-900"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
