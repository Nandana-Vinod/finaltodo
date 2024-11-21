import { Component } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register(data:any){
    console.log(data)
    this.m.save(data).subscribe(
      
      (res:any)=>{
        console.log(res,"here")
        if (res['status']==1){
          alert("success")
        }
        else if (res["status"]==2){
          alert('failed')
        }
        else{
        alert("already exists")
      }
      }
    )
  }
constructor(public m:MediatorService){}
}
