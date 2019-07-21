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
  bar4: number;
  bar5: number;
  bar6: number;
  constructor() {
    this.bar1 = null;
    this.bar2 = null;
    this.bar3 = null;
    this.bar4 = null;
    this.bar5 = null;
  }
  ngOnInit() {
    this.bar1 = 0;
    this.bar2 = 0;
    this.bar3 = 0;
    this.bar4 = 0;
    this.bar5 = 0;
    this.bar6 = 0;
  }
  ngAfterViewChecked() {
    setTimeout(() => {
      this.bar1 = 100;
      this.bar2 = 95;
      this.bar3 = 85;
      this.bar4 = 85;
      this.bar5 = 50;
      this.bar6 = 40;
    }, 100)
  }
}
