'use client'
import AddressSection from "@/src/component ui/profile/AddressSection";
import CartProfile from "@/src/component ui/profile/ProfileCart";
import ProfileInfo from "@/src/component ui/profile/ProfileInfo";
import ProfileSidebar from "@/src/component ui/profile/ProfileSidebar";
import RecentOrders from "@/src/component ui/profile/RecentOrder";
import StatsCards from "@/src/component ui/profile/StatesCards";
import UserHeader from "@/src/component ui/profile/UserHeader";
import WishlistProfile from "@/src/component ui/profile/WishlistProfile";
import { useAppSelector } from "@/src/lib/store/hooks";
import { ActiveSection } from "@/src/types/profile";
import { useState } from "react";
import UserNotExisting from "./UserNotExisting";

export default function ProfileMainComponent(){
    const {user , token} =useAppSelector(state => state.auth)
     const [activeSection, setActiveSection] = useState<ActiveSection>('overview');
if(!user || !token ){return<UserNotExisting />}
console.log("usr" ,user)
 const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <UserHeader user={user} />
            <StatsCards />
            <div className="py-5 border-t border-gray-200">
            <AddressSection user={user} />
            </div>    
          </div>
        );
      case 'orders':
        return <RecentOrders />;
      case 'address':
        return <AddressSection user={user} />;
            case 'cart':
        return <CartProfile />;
            case 'wishlist':
        return <WishlistProfile />;
            case 'profile':
        return <ProfileInfo user={user} />;
      default:
        return <UserHeader user={user} />;
    }
  };

    
      return(
         <div>     
         <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-4
            gap-8
          "
        >
          <ProfileSidebar 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} />
                <div className="lg:col-span-3">
            {renderContent()}
           
          </div>
        </div>
            </div>
      
    )
}