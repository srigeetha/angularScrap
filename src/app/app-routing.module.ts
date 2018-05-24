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
import { DisplayComponent } from './display/display.component';

@NgModule({
  imports: [UIRouterModule.forRoot({
    states: [
      { name: "#", url: "/", component: LoginComponent },
      { name: "dashboard", url: "/dashboard", component: DashboardComponent },
      { name: "dashboard.display", url: "/display", component: DisplayComponent },
      { name: "dashboard.accordion", url: "/accordion", component: AccordionComponent },
      { name: "dashboard.alert", url: "/alert", component: AlertComponent },
      { name: "dashboard.buttons", url: "/buttons", component: ButtonsComponent },
      { name: "dashboard.carousel", url: "/carousel", component: CarouselComponent },
      { name: "dashboard.collapse", url: "/collapse", component: CollapseComponent },
      { name: "dashboard.datepicker", url: "/datepicker", component: DatepickerComponent },
      { name: "dashboard.dropdowns", url: "/dropdowns", component: DropdownsComponent },
      { name: "dashboard.modals", url: "/modals", component: ModalsComponent },
      { name: "dashboard.pagination", url: "/pagination", component: PaginationComponent },
      { name: "dashboard.popover", url: "/popover", component: PopoverComponent },
      { name: "dashboard.progresbar", url: "/progresbar", component: ProgresbarComponent },
      { name: "dashboard.rating", url: "/rating", component: RatingComponent },
      { name: "dashboard.sortable", url: "/sortable", component: SortableComponent },
      { name: "dashboard.tabs", url: "/tabs", component: TabsComponent },
      { name: "dashboard.timepicker", url: "/timepicker", component: TimepickerComponent },
      { name: "dashboard.tooltip", url: "/tooltip", component: TooltipComponent },
      { name: "dashboard.typeahead", url: "/typeahead", component: TypeaheadComponent },

    ], useHash: false
  })],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }
