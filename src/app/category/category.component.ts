import { Component, OnInit } from '@angular/core';
import { Category } from "./category";
import { CategoryService } from "./category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
      this.categories = res.filter(x => x.parentId == null);
    });
  }

}
