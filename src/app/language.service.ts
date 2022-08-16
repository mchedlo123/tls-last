import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language = new BehaviorSubject<string>('ka');
  langObs = this.language.asObservable();

  passLang(lang: string) {
    this.language.next(lang);
  }

  constructor() { }
}
