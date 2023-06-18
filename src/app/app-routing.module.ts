import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddAppComponent } from './add-app/add-app.component';
import { EditAppComponent } from './edit-app/edit-app.component';


const routes: Routes = [
  {
    path:'',redirectTo:'MyAPP/home',pathMatch:'full'
  },
  {
    path:'MyAPP/home', component:HomeComponent
  },
  {
    path:'MyAPP/Add_app' ,component:AddAppComponent
  },
  {
    path:'MyAPP/edit_app' ,component:EditAppComponent
  },
  {
    path:'**' , component:HomeComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
