import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { coursesService } from './courses.services';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsNameService } from './authors-name.service';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    coursesService,
    AuthorsNameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
