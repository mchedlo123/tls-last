import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;
  translate: any;

  constructor(public translateService: TranslateService) { }

  ngOnInit(): void {
  }

  asd(e: any){
    this.translateService.use(e.target.value)
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
