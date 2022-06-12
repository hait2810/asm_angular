import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryWorkComponent } from './admin/add-category-work/add-category-work.component';
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
      {path: "works", component: WorkDetailComponent},
      {path: "works/add", component: AddCategoryWorkComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
