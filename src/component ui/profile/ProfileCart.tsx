import { CartItemRow } from "../cart/CartItemRow"
import ProfileCheckoutCart from "./ProfileCheckoutCart"

export default function ProfileCart(){
  
    return(
        <div className="space-y-4">
<CartItemRow />
<ProfileCheckoutCart />
</div>
    )
}