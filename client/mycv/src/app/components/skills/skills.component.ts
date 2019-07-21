import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, AfterViewChecked {
  bar1: number;
  bar2: number;
  bar3: number;
  constructor() {
    this.bar1 = null;
    this.bar2 = null;
    this.bar3 = null;
  }
  ngOnInit() {
    this.bar1 = 0;
    this.bar2 = 0;
    this.bar3 = 0;
  }
  ngAfterViewChecked() {
    setTimeout(()=>{
      this.bar1 = 100;
      this.bar2 = 95;
      this.bar3 = 85;
    },100) 
  }
}
