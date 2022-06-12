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
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';





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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
