import { Component, OnInit } from '@angular/core';
import { MyappsercviceService } from '../services/myappsercvice.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {
  apps:any
  appsdel:any
  id: any;
  obj: any;
  x:any;
  ngOnInit(): void {
    this.getallApp();

  }
  constructor(private service: MyappsercviceService , private router :Router ){

  }
  getallApp(){
  this.apps = this.service.loadapps().subscribe(res =>{
    this.apps=res 
  })
  }
  delete(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.appsdel = this.service.delete(id).subscribe(res =>{
          this.appsdel=res 
          this.getallApp();
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
}
update(obj:any){
  this.service.obj=obj
  this.router.navigate(['MyAPP/edit_app'])
  
}
}

