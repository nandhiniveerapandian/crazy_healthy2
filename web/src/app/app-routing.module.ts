import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcustomersComponent } from './acustomers/acustomers.component';
import { AdashboardComponent } from './adashboard/adashboard.component';

import { AordersComponent } from './aorders/aorders.component';
import { AproductsComponent } from './aproducts/aproducts.component';
import { AreviewsComponent } from './areviews/areviews.component';
import { AsigninComponent } from './asignin/asignin.component';
import { CaboutComponent } from './cabout/cabout.component';

import { ChomeComponent } from './chome/chome.component';
import { CproductComponent } from './cproduct/cproduct.component';
import { CsigninComponent } from './csignin/csignin.component';
import { CsocialComponent } from './csocial/csocial.component';
import { CviewproductComponent } from './cviewproduct/cviewproduct.component';


const routes: Routes = [
 {path:'',redirectTo:'/chome',pathMatch:'full'},
 {path:'cabout',component:CaboutComponent},
 
 {path:'chome',component:ChomeComponent},
 {path:'cviewproduct',component:CviewproductComponent},
 {path:'cproduct',component:CproductComponent},
 {path:'csignin',component:CsigninComponent},
 {path:'csocial',component:CsocialComponent},
 {path:'acustomers',component:AcustomersComponent},
 {path:'adashboard',component:AdashboardComponent},
 {path:'aorders',component:AordersComponent},
 {path:'aproducts',component:AproductsComponent},
 {path:'areviews',component:AreviewsComponent},
 {path:'asignin',component:AsigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
