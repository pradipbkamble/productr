import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Productservice } from '../products/product service/product.service';
import { Iproduct } from '../products/interface/product';

@Component({
  selector: 'app-edtproduct',
  templateUrl: './edtproduct.component.html',
  styleUrls: ['./edtproduct.component.scss']
})
export class EdtproductComponent implements OnInit {
  selectform!:FormGroup
  edtprd!:string;
  edtobj!:Iproduct;
  updateval!:string
  constructor(private _router:ActivatedRoute,private _route:Router, private _proservice:Productservice) { }

  ngOnInit(): void {
    this.formsub()
     this.edtprd=this._router.snapshot.params['prodid']
    console.log(this._router.snapshot);
    this.edtobj=this._proservice.fetchfindproduct(this.edtprd)
    this.selectform.patchValue(this.edtobj)
  }
formsub(){
  this.selectform=new FormGroup({
    pname:new FormControl(null,[Validators.required]),
    pdetails:new FormControl(null,[Validators.required]),
    pstatus:new FormControl(null,[Validators.required])
  })
}
onupdate(){
  this.updateval=this.selectform.value
}
}
