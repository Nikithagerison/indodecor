import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OurworksComponent } from './ourworks/ourworks.component';
import { PackagesComponent } from './packages/packages.component';
import { PlanComponent } from './plan/plan.component';
import { RegisterComponent } from './register/register.component';
import { ViewAboutComponent } from './view-about/view-about.component';
import { YoursuggestionsComponent } from './yoursuggestions/yoursuggestions.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'app-login',component:LoginComponent
  },
  {
    path:'app-about',component:AboutComponent
  },
  {
    path:'app-ourworks',component:OurworksComponent
  },
  {
    path:'app-yoursuggestions',component:YoursuggestionsComponent
  },
  {
    path:'view details/:id',component:ViewAboutComponent
  },
  {
    path:'packages',component:PackagesComponent
  },
  {
    path:'Register',component:RegisterComponent
  },
  {
    path:'view-plans',component:PlanComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
