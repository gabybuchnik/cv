import { Component, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, AfterViewChecked, OnDestroy {
  bar1: number;
  bar2: number;
  bar3: number;
  bar4: number;
  bar5: number;
  bar6: number;
  bar7: number;
  intervalId: any;
  constructor() {
    this.bar1 = null;
    this.bar2 = null;
    this.bar3 = null;
    this.bar4 = null;
    this.bar5 = null;
    this.bar6 = null;
    this.bar7 = null;
  }
  ngOnInit() {
    this.bar1 = 0;
    this.bar2 = 0;
    this.bar3 = 0;
    this.bar4 = 0;
    this.bar5 = 0;
    this.bar6 = 0;
    this.bar7 = 0;
  }
  ngAfterViewChecked() {
    this.intervalId = setTimeout(() => {
      this.bar1 = 100;
      this.bar2 = 95;
      this.bar3 = 87;
      this.bar4 = 87;
      this.bar5 = 80;
      this.bar6 = 80;
      this.bar7 = 85;
    }, 100)
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
