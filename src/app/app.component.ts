import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dilvar Khangurha';
 // Resources="Today Date is "+ new Date();
   productPrice=[];
   productprice;
   onclickProduct(ProductName: any)
   {
     this.productPrice.push(ProductName);
   }
   onclickPrice(totalPrice: any)
   {
     this.productprice=totalPrice;
   }
}
