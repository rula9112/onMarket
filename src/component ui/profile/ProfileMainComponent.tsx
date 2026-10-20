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
/*******for delete************/   console.log("usr" ,user)
 const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <UserHeader user={user} />
            <StatsCards />
            <div className="border-t border-olive-200 py-5">
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
             <div className="grid min-w-0 grid-cols-1 items-start gap-5 lg:grid-cols-4 lg:gap-8">
              <ProfileSidebar 
                activeSection={activeSection} 
                onSectionChange={setActiveSection} />
                    <div className="min-w-0 lg:col-span-3">
                {renderContent()}
           
              </div>
            </div>
      
        )
}