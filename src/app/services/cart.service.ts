import { Injectable } from '@angular/core';
import { cart } from '../shared/models/cart';
import { Cartitem } from '../shared/models/cartitem';
import { foods } from '../shared/models/foods';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    private cart:cart=new cart();
      constructor() { }
      addtocart(food:foods) :void{
        let cartitem=this.cart.items.find(item=>item.food.id===food.id)
        if(cartitem){
          this.changeQuantity(food.id ,cartitem.quantity +1)
          return;
        }
        this.cart.items.push(new Cartitem(food));
      }
    removefromcart(foodId:number):void{
      this.cart.items=this.cart.items.filter(item=>item.food.id !=foodId)
    }    
    changeQuantity(quantity:number, foodId:number){
      let cartitem=this.cart.items.find(item=>item.food.id===foodId)
      if(!cartitem) return;
      cartitem.quantity=quantity;
    
    }
    getcart():cart{
      return this.cart;
    }
}
