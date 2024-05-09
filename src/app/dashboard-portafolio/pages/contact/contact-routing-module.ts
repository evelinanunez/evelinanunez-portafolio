import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact.component";
import { HomeComponent } from "../home/home.component";


const routes : Routes =[
  {
    path: '',
    component: ContactComponent
  },
  {
    path:'home',
    component: HomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule{

}
