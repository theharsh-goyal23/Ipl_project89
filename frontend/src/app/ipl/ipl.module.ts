import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IplRoutingModule } from "./ipl-routing.module";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TeamCreateComponent } from "./components/teamcreate/teamcreate.component";
import { CricketerCreateComponent } from "./components/cricketercreate/cricketercreate.component";
import { MatchCreateComponent } from "./components/matchcreate/matchcreate.component";
import { Match } from "./types/Match";
import { TicketBookingComponent } from "./components/ticketbooking/ticketbooking.component";

@NgModule({
  declarations: [
    TeamCreateComponent,
    CricketerCreateComponent,
    MatchCreateComponent,
    TicketBookingComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    
  ]
})export class IplModule {}