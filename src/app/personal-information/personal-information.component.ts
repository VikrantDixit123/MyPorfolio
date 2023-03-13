import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  myData: string[][] = [
    ['Name', 'Vikrant Dixit'],
    ['DOB', '30/11/1998'],
    ['Work Exp', '3 Years'],
    ['Education', 'Computer Engineering'],
    ['Interests', 'Cricket']
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 3 years of experience in software industry.',
    'Worked as Software Engineer in Xoriant for various technologies (Dotnet, SQL server, Web API, MVC).',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, working as Software Engineer in EkSource Technologies',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
