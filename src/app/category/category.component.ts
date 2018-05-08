import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from "../_models/references";
import { CategoryService } from "../_services/references";
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit, OnDestroy {
  private subscription: ISubscription;
  categories: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.subscription = this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
      this.categories = res.filter(x => x.parentId == null);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
