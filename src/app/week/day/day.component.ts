import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.sass']
})
export class DayComponent implements OnInit {
  @Input() day

  constructor() { }

  ngOnInit() {
  }

}
