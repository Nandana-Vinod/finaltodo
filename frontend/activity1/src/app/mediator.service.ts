import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {
  public api_url:string='https://nandanavinod.pythonanywhere.com'

  save(params:any){
    console.log(params,"its here")
    
    return this.h.post(`${this.api_url}/reg`,params)
  }
  savelogin(params:any){
    console.log(params,"its here")
    
    return this.h.post(`${this.api_url}/log`,params)
  }


taskid:any=""
setid(data:any){
  this.taskid=data;

}
getbyid(params:any){
  console.log("getby id is ",params)
  // return this.h.get("http://127.0.0.1:8000/tasks?taskid="+params)
  return this.h.get(`http://127.0.0.1:8000/tasks/${params}/`);

}

update(task: any): Observable<any> {
  console.log("dat can here ",task)
  console.log("..",task.id,"........")
  console.log("..",task.task_name,"........")
  console.log("..",task.task_description,"........")
  console.log("..",task.user1_id,"........")
  console.log("..",task.status,"........")
  // return this.h.put(`http://127.0.0.1:8000/tasks/${task.id}/`, task);
    return this.h.put(`http://127.0.0.1:8000/tasks/${task.id}/`, {
    task_name: task.task_name,
    task_description: task.task_description,
    status: task.status,
    user1_id: task.user1_id // Include user1_id if necessary for the update
  });
}

  constructor(public h:HttpClient) { }
}
