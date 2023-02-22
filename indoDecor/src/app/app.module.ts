import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { OurworksComponent } from './ourworks/ourworks.component';
import { YoursuggestionsComponent } from './yoursuggestions/yoursuggestions.component';
import { RouterModule } from '@angular/router';
import { ViewAboutComponent } from './view-about/view-about.component';
import { PackagesComponent } from './packages/packages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PlanComponent } from './plan/plan.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    OurworksComponent,
    YoursuggestionsComponent,
    ViewAboutComponent,
    PackagesComponent,
    RegisterComponent,
    PlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
