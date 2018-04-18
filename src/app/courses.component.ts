import {Component} from '@angular/core';
import { coursesService } from './courses.services';

@Component({
    selector: 'courses', //<courses>
    template: `<h2>Courses Component</h2>
        {{ "Title: "+title}}
        <ul>
            <li *ngFor= "let course of courses">
                {{ course }}
            </li>
        </ul>

        <!--two-way Binding-->
        <h2>Two-way Binding</h2>
        <input [(ngModel)]= "email" >


        <!-- pipe Examples-->
            <h2>Pipes examples:</h2>
           {{pipesExample.title | uppercase | lowercase}}<br/>
           {{pipesExample.rating | number:'1.2-6'}}<br/>
           {{pipesExample.students | number:'1.2-6'}}<br/>
           {{pipesExample.price | currency:'INR':symbol:'3.2-2'}}<br/>
           {{pipesExample.releasedDate | date:'shortDate'}}<br/>

        <!--customer pipes-->
        <h2>Custom Pipes</h2>
        {{custom_pipe_text | summary}}
    `
})

export class CoursesComponent {

    title = "Welcome to Angular App";
    courses;

    constructor (service: coursesService){
        this.courses = service.getCourses();
    }

    /* Two-way bindings*/

    email = "aa@aa.com";

    onKeyPress(){
        console.log( this.email);
    }

    changeValue(){
        console.log(this.email);
    }



    /*pipes Examples*/ 
    pipesExample = {
        title: "Hello This is an Angular 5 Tutorial",
        rating: 4.7827483,
        students: 3232,
        price: 109.909,
        releasedDate: new Date(2017, 6 ,6)
    }

    /* Custom Pipes */
    custom_pipe_text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the `;
    
}