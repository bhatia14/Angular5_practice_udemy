import {Component} from '@angular/core';
import { coursesService } from './courses.services';

@Component({
    selector: 'courses', //<courses>
    template: `<h2>Courses</h2>
        {{ "Title: "+title}}
        <ul>
            <li *ngFor= "let course of courses">
                {{ course }}
            </li>
        </ul>
    
    `
})

export class CoursesComponent {

    title = "Welcome to Angular App";
    courses;

    constructor (service: coursesService){
        this.courses = service.getCourses();
    }
}