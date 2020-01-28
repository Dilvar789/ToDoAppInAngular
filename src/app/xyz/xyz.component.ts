import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {
 
   productName1:string="";
   productName2:string="";
   price1:string="";
   price2:string="";
   @Output() public productName=new EventEmitter();
   @Output() public totalPrice=new EventEmitter();
   getProductPrice()
   {
     const product={pn1:this.productName1,pn2:this.productName2}
     const price=parseInt(this.price1)+parseInt(this.price2);
     this.productName.emit(product);
     this.totalPrice.emit(price);
   }
  constructor() { }

  ngOnInit() {
  }

}
