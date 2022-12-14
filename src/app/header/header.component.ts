import {Component, HostListener, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  doSomething(event: any) {
    // console.debug("Scroll Event", document.body.scrollTop);
    // see András Szepesházi's comment below
    this.coordinate = +window.pageYOffset;
    console.debug(this.coordinate, typeof this.coordinate);
  }
  coordinate: any;
  public isMenuCollapsed = true;
  translate: any;

  constructor(public translateService: TranslateService, private language: LanguageService) { }

  ngOnInit(): void {
  }

  

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  setLang(lang: string) {
    // if (number === 1) {
    //   localStorage.setItem('lang', 'ka')
    // } else if (number === 2) {
    //   localStorage.setItem('lang', 'en')
    // } else if (number === 3) {
    //   localStorage.setItem('lang', 'ru')
    // }
    // location.reload();
    this.language.passLang(lang);
  }
}
