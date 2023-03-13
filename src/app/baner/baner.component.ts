import { Component, HostBinding, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout'
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css']
})
export class BanerComponent implements OnInit {

  constructor( private brakepointObserver : BreakpointObserver) { }

  ngOnInit(): void {
    
  }

}
