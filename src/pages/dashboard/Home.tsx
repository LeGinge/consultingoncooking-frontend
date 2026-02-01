import DashboardLayout from '../../components/DashboardLayout';

export default function Home() {
    return (
        <DashboardLayout>
            <div className="p-8">
                <h1 className="text-3xl font-bold text-steel-900 mb-6">Dashboard</h1>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-steel-200 shadow-sm">
                        <div className="text-steel-500 text-sm font-medium mb-1">Total Recipes Saved</div>
                        <div className="text-3xl font-bold text-coc-blue">24</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-steel-200 shadow-sm">
                        <div className="text-steel-500 text-sm font-medium mb-1">Active Shopping Lists</div>
                        <div className="text-3xl font-bold text-coc-green">3</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-steel-200 shadow-sm">
                        <div className="text-steel-500 text-sm font-medium mb-1">Ingredients Expiring Soon</div>
                        <div className="text-3xl font-bold text-orange-500">5</div>
                    </div>
                </div>

                <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
                    <h2 className="text-lg font-bold text-blue-900 mb-2">Welcome to your Kitchen!</h2>
                    <p className="text-blue-700">Start by adding your pantry ingredients or browse recipes to plan your next meal.</p>
                </div>
            </div>
        </DashboardLayout>
    );
}
