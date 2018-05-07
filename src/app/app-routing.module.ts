import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { LoginComponent } from './login/login.component';
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

@NgModule({
  imports: [UIRouterModule.forRoot({
    states: [
      { name: "login", url: "/login", component: LoginComponent },
      { name: "dashboard", url: "/dashboard", component: DashboardComponent },
      { name: "accordion", url: "/accordion", component: AccordionComponent },
      { name: "alert", url: "/alert", component: AlertComponent },
      { name: "buttons", url: "/buttons", component: ButtonsComponent },
      { name: "carousel", url: "/carousel", component: CarouselComponent },
      { name: "collapse", url: "/collapse", component: CollapseComponent },
      { name: "datepicker", url: "/datepicker", component: DatepickerComponent },
      { name: "dropdowns", url: "/dropdowns", component: DropdownsComponent },
      { name: "modals", url: "/modals", component: ModalsComponent },
      { name: "pagination", url: "/pagination", component: PaginationComponent },
      { name: "popover", url: "/popover", component: PopoverComponent },
      { name: "progresbar", url: "/progresbar", component: ProgresbarComponent },
      { name: "rating", url: "/rating", component: RatingComponent },
      { name: "sortable", url: "/sortable", component: SortableComponent },
      { name: "tabs", url: "/tabs", component: TabsComponent },
      { name: "timepicker", url: "/timepicker", component: TimepickerComponent },
      { name: "tooltip", url: "/tooltip", component: TooltipComponent },
      { name: "typeahead", url: "/typeahead", component: TypeaheadComponent },

    ], useHash: true
  })],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }
