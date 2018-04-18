import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { coursesService } from './courses.services';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsNameService } from './authors-name.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { TweetCountComponent } from './tweet-count/tweet-count.component';
import { InputFormaterDirective } from './input-formater.directive';
import { ContactFormComponentComponent } from './contact-form-component/contact-form-component.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    TweetCountComponent,
    InputFormaterDirective,
    ContactFormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    coursesService,
    AuthorsNameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
