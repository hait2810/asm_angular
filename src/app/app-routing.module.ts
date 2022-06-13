import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryBlogComponent } from './admin/add-category-blog/add-category-blog.component';
import { AddCategoryWorkComponent } from './admin/add-category-work/add-category-work.component';
import { AddWorkComponent } from './admin/add-work/add-work.component';
import { AddpostComponent } from './admin/addpost/addpost.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { EditWorkComponent } from './admin/edit-work/edit-work.component';
import { ListPostComponent } from './admin/list-post/list-post.component';
import { ListWorkComponent } from './admin/list-work/list-work.component';

import { BlogComponent } from './components/blog/blog.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { WorkDetailComponent } from './components/work-detail/work-detail.component';
import { WorksComponent } from './components/works/works.component';


const routes: Routes = [
    {path: "", component: HomepageComponent},
    {path: "blog" , component: BlogComponent},
    {path: "work", component: WorksComponent},
    {path: "work/:id", component: WorkDetailComponent},
    {path: "blog/:id", component: PostDetailComponent},
    {path: "admin", children: [
      {path: "", redirectTo: "works", pathMatch: "full"},
      {path: "works", component: ListWorkComponent},
      {path: "works/addcategory", component: AddCategoryWorkComponent},
      {path: "works/addwork", component: AddWorkComponent},
      {path: "works/:id/edit", component: EditWorkComponent},
      {path: "blogs/addcategory", component: AddCategoryBlogComponent},
      {path: "blogs", component: ListPostComponent},
      {path: "blogs/addpost", component: AddpostComponent},
      {path: "blogs/:id/edit", component: EditPostComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
