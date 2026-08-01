export default function AdminPage() {
  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-base-content font-serif">Dashboard</h1>
        <p className="text-base-content/70">
          Welcome back! Here's an overview of your admin panel.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="card bg-base-200 shadow-lg shadow-base-300/20">
          <div className="card-body">
            <h2 className="card-title text-base-content/70 text-lg font-medium font-serif">
              Users
            </h2>
            <p className="text-3xl font-bold text-base-content">1,245</p>
            <div className="mt-2 flex items-center gap-1 text-sm text-success">
              <span>↑</span>
              <span>12% increase</span>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 shadow-lg shadow-base-300/20">
          <div className="card-body">
            <h2 className="card-title text-base-content/70 text-lg font-medium font-serif">
              Orders
            </h2>
            <p className="text-3xl font-bold text-base-content">328</p>
            <div className="mt-2 flex items-center gap-1 text-sm text-warning">
              <span>↓</span>
              <span>3% decrease</span>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 shadow-lg shadow-base-300/20">
          <div className="card-body">
            <h2 className="card-title text-base-content/70 text-lg font-medium font-serif">
              Revenue
            </h2>
            <p className="text-3xl font-bold text-base-content">$12,430</p>
            <div className="mt-2 flex items-center gap-1 text-sm text-success">
              <span>↑</span>
              <span>8% increase</span>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 shadow-lg shadow-base-300/20">
          <div className="card-body">
            <h2 className="card-title text-base-content/70 text-lg font-medium font-serif">
              Products
            </h2>
            <p className="text-3xl font-bold text-base-content">86</p>
            <div className="mt-2 flex items-center gap-1 text-sm text-info">
              <span>→</span>
              <span>Stable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card bg-base-200 shadow-lg shadow-base-300/20">
        <div className="card-body">
          <h2 className="card-title text-base-content font-serif">Recent Activity</h2>

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="border-base-300 text-base-content/60">
                  <th>User</th>
                  <th>Action</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-base-300 hover:bg-base-300/30 transition-colors">
                  <td className="font-medium text-base-content">Ali Haider</td>
                  <td className="text-base-content/80">Created a new product</td>
                  <td className="text-base-content/60">Today</td>
                </tr>

                <tr className="border-base-300 hover:bg-base-300/30 transition-colors">
                  <td className="font-medium text-base-content">John Doe</td>
                  <td className="text-base-content/80">Updated user profile</td>
                  <td className="text-base-content/60">Yesterday</td>
                </tr>

                <tr className="border-base-300 hover:bg-base-300/30 transition-colors">
                  <td className="font-medium text-base-content">Sarah</td>
                  <td className="text-base-content/80">Deleted an order</td>
                  <td className="text-base-content/60">2 days ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
