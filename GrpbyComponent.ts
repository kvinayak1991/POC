import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grpby',
  templateUrl: './grpby.component.html',
  styleUrls: ['./grpby.component.css']
})
export class GrpbyComponent implements OnInit {

  constructor() { }

  prettyLog = (input: any) => console.log(JSON.stringify(input, null, 2));

  tableLog = (input: any) => {
    console.table(input)
  }

  groupBy = (xs: any, f: any) => {
    return xs.reduce((r: any, v: any, i: any, a: any, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
  }

  sortBy = (property: string) => {
    return function (a: any, b: any) {
      if (a[property] > b[property])
        return 1;
      else if (a[property] < b[property])
        return -1;
      return 0;
    }
  }

  sortByDesc = (property: string) => {
    return function (a: any, b: any) {
      if (a[property] > b[property])
        return -1;
      else if (a[property] < b[property])
        return 1;
      return 0;
    }
  }

  paginate = (arr: any, size: number) => {
    return arr.reduce((acc: any, val: any, i: any) => {
      let idx = Math.floor(i / size)
      let page = acc[idx] || (acc[idx] = [])
      page.push(val)
      return acc
    }, [])
  }




  ngOnInit(): void {

    const cars = [{ make: 'audi', model: 'r8', year: '2012' }, { make: 'audi', model: 'rs5', year: '2013' }, { make: 'ford', model: 'mustang', year: '2012' }, { make: 'ford', model: 'fusion', year: '2015' }, { make: 'kia', model: 'optima', year: '2012' }];

    const result = this.groupBy(cars, (c1: any) => c1['make']);

    // this.prettyLog(result);

    this.tableLog(cars);

    // this.prettyLog(this.paginate(cars, 2));

    // this.prettyLog(cars.sort(this.sortByDesc('year')));


  }

}
