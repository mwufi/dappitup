'use client'
import Link from 'next/link'
import { 
  Compass, 
  UserCircle, 
  Bell, 
  Shield, 
  CreditCard, 
  Palette, 
  Link as LinkIcon, 
  BarChart2, 
  HelpCircle, 
  LogOut 
} from 'lucide-react'

const settingsSections = [
  { name: 'Discovery Preferences', icon: Compass, href: '/settings/discovery' },
  { name: 'Profile & Privacy', icon: UserCircle, href: '/settings/profile' },
  { name: 'Notification', icon: Bell, href: '/settings/notifications' },
  { name: 'Account & Security', icon: Shield, href: '/settings/security' },
  { name: 'Subscription', icon: CreditCard, href: '/settings/subscription' },
  { name: 'App Appearance', icon: Palette, href: '/settings/appearance' },
  { name: 'Third Party Integrations', icon: LinkIcon, href: '/settings/integrations' },
  { name: 'Data & Analytics', icon: BarChart2, href: '/settings/analytics' },
  { name: 'Help & Support', icon: HelpCircle, href: '/settings/support' },
  { name: 'Logout', icon: LogOut, href: '/logout' },
]

export default function Settings() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-2">Upgrade Membership Now!</h3>
        <p>Unlock premium features and enhance your experience.</p>
        <button className="mt-2 bg-white text-purple-500 px-4 py-2 rounded-full font-semibold">
          Upgrade
        </button>
      </div>

      <nav>
        <ul className="space-y-2">
          {settingsSections.map((section) => (
            <li key={section.name}>
              <Link href={section.href} className="flex items-center p-3 bg-white rounded-lg shadow hover:bg-gray-50">
                <section.icon className="w-6 h-6 mr-3 text-gray-600" />
                <span>{section.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}