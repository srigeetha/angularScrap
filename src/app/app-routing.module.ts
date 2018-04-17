import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { } from '@uirouter/core/lib/state'
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [UIRouterModule.forRoot({
    states: [
      { name: "aboutus", url: "/aboutus", component: AboutusComponent },
      { name: "contactus", url: "/contactus", component: ContactusComponent },
      { name: "dashboard", url: "/dashboard", component: DashboardComponent }
    ], useHash: true
  })],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }
