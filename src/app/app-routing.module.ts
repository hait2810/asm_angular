import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryBlogComponent } from './admin/add-category-blog/add-category-blog.component';
import { AddCategoryWorkComponent } from './admin/add-category-work/add-category-work.component';
import { AddWorkComponent } from './admin/add-work/add-work.component';
import { AddpostComponent } from './admin/addpost/addpost.component';
import { ListWorkComponent } from './admin/list-work/list-work.component';

import { BlogComponent } from './components/blog/blog.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WorkDetailComponent } from './components/work-detail/work-detail.component';
import { WorksComponent } from './components/works/works.component';


const routes: Routes = [
    {path: "", component: HomepageComponent},
    {path: "blog" , component: BlogComponent},
    {path: "work", component: WorksComponent},
    {path: "work/:id", component: WorkDetailComponent},
    {path: "admin", children: [
      {path: "", redirectTo: "works", pathMatch: "full"},
      {path: "works", component: ListWorkComponent},
      {path: "works/addcategory", component: AddCategoryWorkComponent},
      {path: "works/addwork", component: AddWorkComponent},
      {path: "blogs/addcategory", component: AddCategoryBlogComponent},
      {path: "blogs/addpost", component: AddpostComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
