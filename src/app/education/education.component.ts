import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList: Education[] = [
    {
      institute: 'Indira College of Engineering and Mangement',
      course: 'Computer Engineering',
      duration: '2016-2020',
      score: '8.8',
    },
    {
      institute: 'Modern Junior College',
      course: 'HSC',
      duration: '2014-2016',
      score: '72%',
    },
    {
      institute: 'Vidya Nikaten Englich Medium School',
      course: 'SSC',
      duration: '2004-2014',
      score: '88%',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
