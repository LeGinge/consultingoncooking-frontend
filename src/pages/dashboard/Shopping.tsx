import DashboardLayout from '../../components/DashboardLayout';

export default function Shopping() {
    return (
        <DashboardLayout>
            <div className="p-8">
                <h1 className="text-3xl font-bold text-steel-900 mb-6">Shopping Lists</h1>
                <p className="text-steel-600">Manage your grocery lists and sync with your kitchen.</p>
                {/* Placeholder for Shopping functionality */}
                <div className="mt-8 border-2 border-dashed border-steel-200 rounded-xl h-64 flex items-center justify-center text-steel-400">
                    Shopping Functionality Coming Soon
                </div>
            </div>
        </DashboardLayout>
    );
}
