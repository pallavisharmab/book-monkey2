import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'bm-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  repositoryUrl: string;
  repoName: string;
  mobileLayout: boolean = false;
  showSidebar: boolean = false;

  constructor(private r: Router) { }

  ngOnInit() {
    this.r.events
      .filter(e => e instanceof NavigationEnd)
      .subscribe(e => {

        let url: string = (<any>e).urlAfterRedirects;
        let amountOfSlashes = (url.match(/\//g) || []).length;

        if (amountOfSlashes < 2) {
          this.repoName = 'one-app';
        } else {
          let parts = url.split('/');
          this.repoName = parts[1] + '-' + parts[2];
        }

        this.repositoryUrl = 'https://github.com/book-monkey2-build/' + this.repoName;
      });
    this.onResize();
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.mobileLayout = (window.innerWidth < 767) ? true : false;
  }
}

