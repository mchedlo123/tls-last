import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tls';

  constructor(private translate: TranslateService) {
    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'ka')
    }
    // translate.addLangs(['ka', 'en', 'ru'])
    translate.setDefaultLang(localStorage.getItem('lang')!);
  }

  // useLanguage(language: string) {
  //   this.translate.use(language);
  // }

  onActivate(_event: any) {
    // window.scroll(0,0);

    window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
     });

     //or document.body.scrollTop = 0;
     //or document.querySelector('body').scrollTo(0,0)
 }
}
