import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

//O @Component é o que define os dados básicos de cada componente, todos devem ter esse atributo
// indicando qual o nome da tag em selector, qual o htlm em templateUrl e qual o css em styleUrl
@Component ({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html' //O template pode ser estático se o html tiver até 5 linhas, mas não gosto
})
//O nome da classe de componente a primeira letra
// de cada palavra deve 
export class CourseListComponent implements OnInit{
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                realeaseDate:'November, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '',
                price: 45.99,
                code: 'LKL-1094',
                duration: 80,
                rating: 4,
                realeaseDate: 'November, 4, 2019'
            }
        ]
    }
}