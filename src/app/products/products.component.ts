import { Component, OnInit } from '@angular/core';
import { Productservice } from './product service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from './interface/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product!:Array<Iproduct>
  productid!:string;
  

  constructor(private _route:ActivatedRoute,private _router:Router, private _proservice:Productservice) { 

  }

  ngOnInit(): void {
    this.product=this._proservice.fetchproducts()
    
  }
  forproductid(proid:string){
    this.productid=proid
  }
  onadd(){
    
  }

}
