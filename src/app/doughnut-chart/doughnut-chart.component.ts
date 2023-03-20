import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { User } from '../user';



@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})

export class DoughnutChartComponent {

  @Input()
  users: User[];

  constructor() {

  }

  doughnutChartLabels: Label[] = [];


  doughnutChartData: MultiDataSet = [];


  doughnutChartType: ChartType = 'doughnut';
  ngOnInit() {
    console.log("IN DOUGHNIT=", this.users)
    // this.fetchEvent().then(() => {
    const labels = this.users.map(el => {
      return el.mood;
    });

    const happy_mood_count = this.users.filter(e => e.mood == "Happy").length;
    const Grumpy_mood_count = this.users.filter(e => e.mood == "Grumpy").length;
    const Normal_mood_count = this.users.filter(e => e.mood == "Normal").length;
    const Meh_mood_count = this.users.filter(e => e.mood == "Meh").length;
    const Stressed_mood_count = this.users.filter(e => e.mood == "Stressed").length;


    this.doughnutChartLabels = [...new Set(labels)];
    const data: number[] = [happy_mood_count, Grumpy_mood_count, Normal_mood_count, Meh_mood_count, Stressed_mood_count];

    this.doughnutChartData = [data];
  }

  //}

}
