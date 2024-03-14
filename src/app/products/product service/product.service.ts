import { Injectable } from "@angular/core";
import { Iproduct } from "../interface/product";



@Injectable({
    providedIn:'root'
})


export class Productservice{

    productArray:Array<Iproduct>= [
        {
          pname: 'Samsung 31',
          pdetails: 'Mobile 128 6',
          pstatus:"Dispatched",
          id:'a'
        },
        {
          pname: 'Samsung S32',
          pdetails: 'Mobile 128 6',
          pstatus:"Inprocess",
          id:'b'
    },
    {
        pname: 'Apple13',
        pdetails: 'Mobile 555',
        pstatus:"Deliver",
        id:'c'
  },
  {
    pname: 'Nokiya',
    pdetails: 'Mobile 268',
    pstatus:'Inprocess',
    id:'d'
}];
constructor(){}

fetchproducts(){
  return this.productArray
}
fetchfindproduct(pid:string):Iproduct{
return this.productArray.find(post=>post.id===pid) as Iproduct
}


}