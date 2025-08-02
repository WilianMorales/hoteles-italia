import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslateService {

  private lang = new BehaviorSubject<'es' | 'en'>('es');
  currentLang = this.lang.asObservable();
  translations: any = {};

  constructor(private http: HttpClient) {
    const savedLang = (localStorage.getItem('lang') as 'es' | 'en') || 'es';
    this.lang.next(savedLang);
    this.loadTranslations(savedLang);
  }

  setLang(language: 'es' | 'en') {
    this.lang.next(language);
    localStorage.setItem('lang', language);
    this.loadTranslations(language);
  }

  private loadTranslations(lang: 'es' | 'en') {
    this.http.get(`assets/i18n/${lang}.json`).subscribe(
      (data) => {
        this.translations = data;
      },
      (error) => {
        console.error('Error loading translations:', error);
      }
    );
  }

  t(path: string): string {
    return path.split('.').reduce((obj, key) => obj && obj[key], this.translations) || path;
  }

}
