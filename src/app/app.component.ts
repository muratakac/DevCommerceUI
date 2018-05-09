import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService, CommunicationService } from './_services/references';
import { User } from './_models/references';
import { ActivatedRoute, Router } from '@angular/router';
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
    private communicationService: CommunicationService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
    //Yazdığımız servisleri kullanabilmek için token'a ihtiyacımız var.
    this.subscription = this.authenticationService.createToken().subscribe();
    this.subscription = communicationService.called$.subscribe(method => {
      if (method == "login") {
        //Header alanının güncellenmesi gerekiyor. 
        this.changeLoginStatus();
      }
    });
  }

  ngOnInit() {
    this.changeLoginStatus();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeLoginStatus() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.isShow = (!this.location.path().startsWith("/login") && !this.location.path().startsWith("/register"));
  }

  logout() {
    this.authenticationService.logout();
    this.changeLoginStatus();
  }
}
