import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Intermidiate',
      rating: 85,
    },
    {
      name: 'ASP.NET Core, EF Core',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'SQL',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'C#',
      level: 'Expert',
      rating: 90,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
