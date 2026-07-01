// src/component ui/profile/ProfileSidebar.tsx

import { ActiveSection } from "@/src/types/profile";
import { Button } from "../ui/Button";


type ProfileSidebarProps = {
  activeSection: ActiveSection;
  onSectionChange: (section: ActiveSection) => void;
};

export default function ProfileSidebar({ activeSection, onSectionChange }: ProfileSidebarProps) {
  return (
      <div
      className="
        sticky
        top-6
        h-fit
        rounded-3xl
        border
        border-zinc-100
        bg-white
        p-5
        shadow-sm
      ">
    <aside className="space-y-2">
      {/* زر Overview */}
      <button
        onClick={() => onSectionChange('overview')}
        className={`
          w-full px-4 py-3 rounded-lg text-left transition-colors
          ${activeSection === 'overview' 
            ? 'bg-olive-200 text-olive-900' 
            : 'text-olive-700 hover:bg-olive-100'}
        `}
      >
        Overview
      </button>
     
      {/* زر Orders */}
      <button
        onClick={() => onSectionChange('orders')}
        className={`
          w-full px-4 py-3 rounded-lg text-left transition-colors
          ${activeSection === 'orders' 
            ? 'bg-olive-200 text-olive-900' 
            : 'text-olive-700 hover:bg-olive-100'}
        `}
      >
        Recent Orders
      </button>
      
        {/* زر wishlist */}
      <button
        onClick={() => onSectionChange('wishlist')}
        className={`
          w-full px-4 py-3 rounded-lg text-left transition-colors
          ${activeSection === 'wishlist' 
            ? 'bg-olive-200 text-olive-900' 
            : 'text-olive-700 hover:bg-olive-100'}
        `}
      >
        Favorits
      </button>
         {/* زر cart */}
      <button
        onClick={() => onSectionChange('cart')}
        className={`
          w-full px-4 py-3 rounded-lg text-left transition-colors
          ${activeSection === 'cart' 
            ? 'bg-olive-200 text-olive-900' 
            : 'text-olive-700 hover:bg-olive-100'}
        `}
      >
        Cart
      </button>

      {/* زر Address */}
      <button
        onClick={() => onSectionChange('address')}
        className={`
          w-full px-4 py-3 rounded-lg text-left transition-colors
          ${activeSection === 'address' 
            ? 'bg-olive-200 text-olive-900' 
            : 'text-olive-700 hover:bg-olive-100'}
        `}
      >
        Address
      </button>
         {/* زر Profile */}
      <button
        onClick={() => onSectionChange('profile')}
        className={`
          w-full px-4 py-3 rounded-lg text-left transition-colors
          ${activeSection === 'profile' 
            ? 'bg-olive-200 text-olive-900' 
            : 'text-olive-700 hover:bg-olive-100'}
        `}
      >
        Profile information
      </button>

      <div className="border-t border-gray-200 pt-5">
        <Button className="w-full" variant={'outlinePrimary'}>
        Logout
      </Button>
      </div>
      
    </aside>
    </div>
  );
}