import { CartItemRow } from "../cart/CartItemRow"
import ProfileCheckoutCart from "./ProfileCheckoutCart"

export default function ProfileCart(){
  
    return(
        <div className="min-w-0 space-y-4">
<CartItemRow />
<ProfileCheckoutCart />
</div>
    )
}