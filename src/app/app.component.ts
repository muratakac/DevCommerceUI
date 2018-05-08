import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from './_services/references';
import { User } from './_models/references';
import { ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ISubscription } from 'rxjs/Subscription';
import { LoginComponent } from './login/login.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, OnDestroy {
  private subscription: ISubscription;
  title = 'app';
  currentUser: User;
  isShow: boolean;
  constructor(private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private location: Location) {
    //Yazdığımız servisleri kullanabilmek için token'a ihtiyacımız var.
    this.subscription = this.authenticationService.createToken().subscribe();
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isShow = (!this.location.path().startsWith("/login") && !this.location.path().startsWith("/register"));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
