export default function SettingsAdmin() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Site Name</label><input type="text" defaultValue="DialHelper" className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-primary" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label><input type="email" defaultValue="hello@dialhelper.com" className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-primary" /></div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark">Save Settings</button>
      </div>
    </div>
  );
}
