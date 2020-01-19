import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.sass']
})
export class WeekComponent implements OnInit {
  days:Array<object> = [];

  constructor() { }

  ngOnInit() {
    this.days.push({name:"Понедельник", deals: "19:00 - Занятие"});
    this.days.push({name:"Вторник", deals: "13:00 - Встреча в офисе"});
    this.days.push({name:"Среда", deals: "19:30 - Театр"});
    this.days.push({name:"Четверг", deals: "Домашнее задание!"});
    this.days.push({name:"Пятница", deals: "19:00 - Занятие"});
    this.days.push({name:"Суббота", deals: "Отдых"});
    this.days.push({name:"Воскресенье", deals: "Отдых"});
  }

}
