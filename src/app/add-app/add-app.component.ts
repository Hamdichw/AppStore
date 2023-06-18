import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MyappsercviceService } from '../services/myappsercvice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppItemModule } from '../app-item/app-item.module';

@Component({
  selector: 'app-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.css']
})
export class AddAppComponent {
//@ts-ignore
appform: FormGroup;
id:any
app!: AppItemModule;
constructor (
   private service : MyappsercviceService,
   private  formBuilder : FormBuilder,
   private router : Router ,
   
   ){
}
ngOnInit(): void {
    this.createappForm();

}
createappForm(){

  this.appform = this.formBuilder.group({
    'name':['',Validators.compose([Validators.required, Validators.minLength(3) , Validators.maxLength(50)])],
    'Url':['',Validators.compose([Validators.required, Validators.minLength(3) , Validators.maxLength(50)])],
    'description':['',Validators.compose([Validators.required,Validators.minLength(3) , Validators.maxLength(500)])],
    'image':['',Validators.compose([Validators.required,Validators.minLength(1) , Validators.maxLength(1000)])]
  });
}
createapp(values : any ){
    let formdata = new FormData();
    formdata.append('name',values.name)
    formdata.append('desc',values.description)
    formdata.append('image',values.image)
    formdata.append('download',values.Url)
  // create or update product
    // for create product
    if(values.name!=0)
    this.service.createapp(formdata).subscribe( res =>{
    console.log(formdata)
  })
  this.router.navigate([''])
}
backtohome(){
  this.router.navigate([''])
}

}

