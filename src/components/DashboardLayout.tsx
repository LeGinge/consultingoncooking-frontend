import { Link, useLocation } from 'react-router-dom';
import KitchenSwitcher from './KitchenSwitcher';
import logo from '../assets/COC-Logo.png';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const location = useLocation();

    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: '🏠' },
        { name: 'My Kitchens', href: '/dashboard/kitchens', icon: '🏡' },
        { name: 'Inventory', href: '/dashboard/inventory', icon: '📦' },
        { name: 'Shopping', href: '/dashboard/shopping', icon: '🛒' },
        { name: 'Recipes', href: '/dashboard/recipes', icon: '📖' },
        { name: 'Settings', href: '/dashboard/settings', icon: '⚙️' }
    ];

    return (
        <div className="min-h-screen bg-steel-50">
            {/* Top Navbar */}
            <nav className="bg-white border-b border-steel-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <Link to="/">
                            <img src={logo} alt="COC" className="h-10" />
                        </Link>

                        <div className="flex items-center gap-4">
                            <KitchenSwitcher />

                            <button className="bg-coc-green text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 flex items-center gap-2">
                                💬 Chat to Coen
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex">
                {/* Sidebar */}
                <aside className="w-64 bg-white border-r border-steel-200 min-h-screen hidden md:block">
                    <div className="p-6">
                        {navigation.map((item) => {
                            const isActive = location.pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition mb-1 ${isActive
                                            ? 'bg-coc-blue text-white'
                                            : 'text-steel-700 hover:bg-steel-50'
                                        }`}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
}
