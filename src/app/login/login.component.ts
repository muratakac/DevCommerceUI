import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/references';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit,OnDestroy  {
  private subscription: ISubscription;
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.subscription = this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  logout() {
    debugger
    this.loading = true;
    this.authenticationService.logout();
    this.router.navigate(['/products']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
