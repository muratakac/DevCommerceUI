import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AlertService, UserService } from "../_services/references";
@Component({
  moduleId: module.id,
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private responseService: AlertService
  ) {}

  ngOnInit() {}

  register() {
    this.loading = true;
    this.userService.create(this.model).subscribe(
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
}
