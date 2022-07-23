import { foods } from "./foods";

export class Cartitem{
    [x: string]: any;
    constructor(food:foods){
        this.food=food;
        // this.price;
    }
       food:foods
       quantity:number=1;
       get price():number{
       return this.food.price * this.quantity;
}

}