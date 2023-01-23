import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ChomeComponent } from './chome/chome.component';
import { CaboutComponent } from './cabout/cabout.component';
import { CproductComponent } from './cproduct/cproduct.component';

import { CnavComponent } from './cnav/cnav.component';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { AcustomersComponent } from './acustomers/acustomers.component';
import { AproductsComponent } from './aproducts/aproducts.component';
import { AordersComponent } from './aorders/aorders.component';
import { AreviewsComponent } from './areviews/areviews.component';
import { AnavComponent } from './anav/anav.component';
import { CviewproductComponent } from './cviewproduct/cviewproduct.component';
import { CsigninComponent } from './csignin/csignin.component';
import { AsigninComponent } from './asignin/asignin.component';
import { CsocialComponent } from './csocial/csocial.component';


@NgModule({
  declarations: [
    AppComponent,
   
    ChomeComponent,
    CaboutComponent,
    CproductComponent,
    
    CnavComponent,
    AdashboardComponent,
    AcustomersComponent,
    AproductsComponent,
    AordersComponent,
    AreviewsComponent,
    AnavComponent,
    CviewproductComponent,
    CsigninComponent,
    AsigninComponent,
    CsocialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
