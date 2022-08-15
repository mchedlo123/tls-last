import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShipRoutingModule } from './ship-routing.module';
import { ShipComponent } from './ship.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ShipComponent,
    
  ],
  imports: [
    CommonModule,
    ShipRoutingModule,
    NgbModule,
    TranslateModule
    
  ],
  providers: []
})
export class ShipModule { }

