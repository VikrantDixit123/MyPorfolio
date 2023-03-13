import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    {
      title: 'SafetyChain App',
      technologies: 'Angular, Dotnet, SQL Server',
      description: [
        'Worked as a Software developer to develop, enhance and maintain the Safetychain App',
        'Involved in direct communication with the client for requirement analysis and discussions',
      ]
    },
    {
      title: 'Apptitude Exam Website',
      technologies: 'ReactJs',
      description: [
        'Worked as an Intern to build Aptitude website for Xoriant Solutions',
        'Learnt ReactJs, Redux, Git, HTML, Javascript',
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
