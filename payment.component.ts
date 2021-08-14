import { Component, OnInit } from '@angular/core';
import { Payment } from '../Model/payment';
import { PaymentService } from '../Service/paymentService';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
value:boolean=true;
cardnum:String="";
amount:number=3000;

ins:number;

 payment:Payment = new Payment();

  constructor(private paymentService:PaymentService) { }

  savePayment(){
      

    this.paymentService.InsertPaymentService(this.payment).subscribe(data =>{


    console.log(data);

    },

    error=>console.log(error));
}

  ngOnInit(): void {
    
  }
  check() {
    if(!Number(this.cardnum)) {
      this.value=true;
    }
  }
  onSubmit(){

    console.log("hELLO");
    this.payment.paymentAmount=3000;
     this.payment.insurance={insuranceId:this.ins}
 
     console.log(this.payment);
 
      this.savePayment();
 
   }



  
}
