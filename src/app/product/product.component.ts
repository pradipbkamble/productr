import { Component, OnInit } from '@angular/core';
import { Productservice } from '../products/product service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../products/interface/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  pid!:string;
  proobj!:Iproduct
  constructor(private _router:ActivatedRoute,private _route:Router, private _proservice:Productservice) { }

  ngOnInit(): void {
//     this.pid=this._router.snapshot.params['prodid'],
// console.log(this._router.snapshot.params);
this._router.params.subscribe(rout=>{
  this.pid=rout['prodid']
  this.proobj=this._proservice.fetchfindproduct(this.pid)
})
  }
  Onedt(){
    this._route.navigate(['productedt'],{
      relativeTo:this._router
    })
  }
  onchange(){
    this._router.snapshot.params['prodid']
  }
}
