import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

import { AlertService, UserService } from "../_services/references";
import { ISubscription } from "rxjs/Subscription";
@Component({
  moduleId: module.id,
  selector: "app-register",
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit, OnDestroy {

  private subscription: ISubscription;
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private responseService: AlertService
  ) { }

  ngOnInit() { }

  register() {
    this.loading = true;
    this.subscription = this.userService.create(this.model).subscribe(
      data => {
        this.responseService.success('Kullanıcı Oluşturuldu', true);
        this.router.navigate(["login"]);
      },
      error => {
        this.responseService.error(error);
        this.loading = false;
      }
    );
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
