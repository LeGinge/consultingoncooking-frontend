import DashboardLayout from '../../components/DashboardLayout';

export default function Settings() {
    return (
        <DashboardLayout>
            <div className="p-8">
                <h1 className="text-3xl font-bold text-steel-900 mb-6">Settings</h1>
                <p className="text-steel-600">Manage your profile, preferences, and account settings.</p>
                {/* Placeholder for Settings functionality */}
                <div className="mt-8 border-2 border-dashed border-steel-200 rounded-xl h-64 flex items-center justify-center text-steel-400">
                    Settings Functionality Coming Soon
                </div>
            </div>
        </DashboardLayout>
    );
}
