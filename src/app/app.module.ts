import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { ModalsComponent } from './modals/modals.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgresbarComponent } from './progresbar/progresbar.component';
import { RatingComponent } from './rating/rating.component';
import { SortableComponent } from './sortable/sortable.component';
import { TabsComponent } from './tabs/tabs.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import {UIRouterModule} from "@uirouter/angular";
import { DataService } from './dataservices/dataservice.service';
import { HttpClientModule, } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {
  AccordionModule,
  BsDropdownModule, 
  CollapseModule,
  AlertModule, 
  ProgressbarModule, 
  RatingModule, 
  SortableModule,
  TooltipModule,
  TypeaheadModule,
  PopoverModule, 
  BsDatepickerModule, 
  CarouselModule, 
  ModalModule, 
  PaginationModule, 
  TabsModule, 
  TimepickerModule
} from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccordionComponent,
    AlertComponent,
    ButtonsComponent,
    CarouselComponent,
    CollapseComponent,
    DatepickerComponent,
    DropdownsComponent,
    ModalsComponent,
    PaginationComponent,
    PopoverComponent,
    ProgresbarComponent,
    RatingComponent,
    SortableComponent,
    TabsComponent,
    TimepickerComponent,
    TooltipComponent,
    TypeaheadComponent,
    LoginComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    HttpClientModule,
    HttpModule 
  ],
  providers: [DataService],
  bootstrap: [AppComponent],

})
export class AppModule { }
