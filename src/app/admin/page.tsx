export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Admin Analytics Dashboard</h1>

      <p className="text-gray-500">
        Overview of platform activity, escrows, and usage metrics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border p-4">
          <h2 className="text-lg font-semibold">Total Escrows</h2>
          <p className="text-2xl font-bold mt-2">—</p>
        </div>

        <div className="rounded-xl border p-4">
          <h2 className="text-lg font-semibold">Active Users</h2>
          <p className="text-2xl font-bold mt-2">—</p>
        </div>

        <div className="rounded-xl border p-4">
          <h2 className="text-lg font-semibold">Total Volume</h2>
          <p className="text-2xl font-bold mt-2">—</p>
        </div>
      </div>

      <div className="rounded-xl border p-4">
        <h2 className="text-lg font-semibold mb-2">Analytics</h2>
        <p className="text-gray-500">
          Charts and detailed analytics will be added here.
        </p>
      </div>
    </div>
  );
}
