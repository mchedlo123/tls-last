import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { TranslateLoader, TranslateModule,  } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxPageScrollCoreModule,
    TranslateModule
  ],
  providers: []
})
export class LayoutModule { }


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}