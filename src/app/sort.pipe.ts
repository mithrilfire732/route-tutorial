import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], col: string = "id"): any[] {
    const sortFn = (a: any, b: any): number => {
      let aa = typeof a[col] === "number" ? a[col] : a[col].toString().toLowerCase();
      let bb = typeof b[col] === "number" ? b[col] : b[col].toString().toLowerCase();
      if (aa === bb) return 0;
      return (aa > bb) ? 1 : -1;
    }
    return arr.sort(sortFn);  
  }

}
