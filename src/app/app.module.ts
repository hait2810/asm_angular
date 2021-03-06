import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { RecentPostsComponent } from './components/recent-posts/recent-posts.component';
import { WorksComponent } from './components/works/works.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { WorkDetailComponent } from './components/work-detail/work-detail.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { CategoryWorkComponent } from './admin/category-work/category-work.component';
import { AddCategoryWorkComponent } from './admin/add-category-work/add-category-work.component';
import { AddWorkComponent } from './admin/add-work/add-work.component';
import { AddCategoryBlogComponent } from './admin/add-category-blog/add-category-blog.component';
import { AddpostComponent } from './admin/addpost/addpost.component';
import { HeaderadminComponent } from './admin/headeradmin/headeradmin.component';
import { ListWorkComponent } from './admin/list-work/list-work.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditWorkComponent } from './admin/edit-work/edit-work.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { ListPostComponent } from './admin/list-post/list-post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { GetCategoryComponent } from './components/get-category/get-category.component';
import { GetCategoryPostComponent } from './components/get-category-post/get-category-post.component';
import { ContactComponent } from './components/contact/contact.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { ListContactComponent } from './admin/list-contact/list-contact.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    RecentPostsComponent,
    WorksComponent,
    FooterComponent,
    BlogComponent,
    WorkDetailComponent,
    HomepageComponent,
    CategoryWorkComponent,
    AddCategoryWorkComponent,
    AddWorkComponent,
    AddCategoryBlogComponent,
    AddpostComponent,
    HeaderadminComponent,
    ListWorkComponent,
    EditWorkComponent,
    EditPostComponent,
    ListPostComponent,
    PostDetailComponent,
    SignupComponent,
    SigninComponent,
    GetCategoryComponent,
    GetCategoryPostComponent,
    ContactComponent,
    ListContactComponent,
    
 
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
