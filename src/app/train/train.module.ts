import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TrainRoutingModule } from './train-routing.module';
import { TrainComponent } from './train.component';
import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    TrainComponent,
    
  ],
  imports: [
    CommonModule,
    TrainRoutingModule,
    NgbModule,
    TranslateModule

  ],
  providers: []
})
export class TrainModule { }

