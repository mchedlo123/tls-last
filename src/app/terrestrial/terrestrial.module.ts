import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TerrestrialRoutingModule } from './terrestrial-routing.module';
import { TerrestrialComponent } from './terrestrial.component';
import { TranslateModule } from '@ngx-translate/core';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    TerrestrialComponent,
    
  ],
  imports: [
    CommonModule,
    TerrestrialRoutingModule,
    NgbModule,
    TranslateModule

  ],
  providers: []
})
export class TerrestrialModule { }

