import DashboardLayout from '../../components/DashboardLayout';

export default function Inventory() {
    return (
        <DashboardLayout>
            <div className="p-8">
                <h1 className="text-3xl font-bold text-steel-900 mb-6">Inventory</h1>
                <p className="text-steel-600">Track your pantry, fridge, and freezer items here.</p>
                {/* Placeholder for Inventory functionality */}
                <div className="mt-8 border-2 border-dashed border-steel-200 rounded-xl h-64 flex items-center justify-center text-steel-400">
                    Inventory Functionality Coming Soon
                </div>
            </div>
        </DashboardLayout>
    );
}
