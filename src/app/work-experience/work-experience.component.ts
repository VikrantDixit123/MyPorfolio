import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExpList: WorkExperience[] = [
    {
      role: 'Software Engineer',
      company: 'EkSource Technologies',
      duration: 'Feb 2023 - Now',
      description: [
        'Working on technologies like Angular 14, DotNet Core, AWS',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Xoriant Solutions',
      duration: 'Sept 2021 - Feb 2023',
      description: [
        'Worked as a developer to help fix bugs and enhancement of the product',
        'Worked on technologies like SQL Server, DotNot, Web API, MVC',
      ],
    },
    {
      role: 'Associate Software Engineer',
      company: 'Xoriant Solutions',
      duration: 'Aug 2020 - Aug 2021',
      description: [
        'Worked on SQL server to to resolve data issues',
        'Involved in resolving client issues as data fixes',
      ],
    },
    {
      role: 'Intern',
      company: 'Xoriant',
      duration: 'Feb 2020 - Jun 2020',
      description: [
        'Worked on ReactJs to build an aptitude test website for Xoriant',
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
