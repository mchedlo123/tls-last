import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tls';

  constructor(private translate: TranslateService, private language: LanguageService) {
   
  }

  // useLanguage(language: string) {
  //   this.translate.use(language);
  // }

  ngOnInit(): void {
    this.language.langObs
      .subscribe(lang => {
        this.translate.use(lang);
      })
  }

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
