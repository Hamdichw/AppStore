import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppItemModule } from '../app-item/app-item.module';
import { MyappsercviceService } from '../services/myappsercvice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-app',
  templateUrl: './edit-app.component.html',
  styleUrls: ['./edit-app.component.css']
})
export class EditAppComponent {
//@ts-ignore
appform: FormGroup;
id:any
app!: AppItemModule;
  appsdel: any;
constructor (
   private service : MyappsercviceService,
   private  formBuilder : FormBuilder,
   private router : Router ,
   
   ){
}
ngOnInit(): void {
   
    this.createappForm();
    this.loaddetails();

}
createappForm(){

  this.appform = this.formBuilder.group({
    'name':['',Validators.compose([Validators.required, Validators.minLength(3) , Validators.maxLength(50)])],
    'Url':['',Validators.compose([Validators.required, Validators.minLength(3) , Validators.maxLength(50)])],
    'description':['',Validators.compose([Validators.required,Validators.minLength(3) , Validators.maxLength(500)])],
    'image':['',Validators.compose([Validators.required,Validators.minLength(1) , Validators.maxLength(1000)])]
  });
}
backtohome(){
  this.router.navigate([''])
}
loaddetails(){
  this.app=this.service.obj
  this.appform.controls['name'].setValue(this.app.app_name);
  this.appform.controls['Url'].setValue(this.app.app_download);
  this.appform.controls['description'].setValue(this.app.app_desc);
  this.appform.controls['image'].setValue(this.app.app_image);
  console.log(this.app)
 
}

update(values : any){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, update it!'
  }).then((result) => {
    if (result.isConfirmed) {
      let updatedata = new FormData();
    updatedata.append('id',this.service.obj.idapplication)
    updatedata.append('name',values.name)
    updatedata.append('download',values.Url)
    updatedata.append('desc',values.description)
    updatedata.append('image',values.image)
    this.service.update(updatedata).subscribe( res =>{
  
  })
      }})
      Swal.fire(
        
        'updated!',
        'Your file has been updated.',
        'success'
      )
      let updatedata = new FormData();
    updatedata.append('id',this.service.obj.idapplication)
    updatedata.append('name',values.name)
    updatedata.append('download',values.Url)
    updatedata.append('desc',values.description)
    updatedata.append('image',values.image)
    this.service.update(updatedata).subscribe( res =>{
  
  })
    this.router.navigate([''])
    }
  
  }