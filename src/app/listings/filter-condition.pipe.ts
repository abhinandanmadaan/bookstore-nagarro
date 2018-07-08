import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCondition'
})
export class FilterConditionPipe implements PipeTransform {
  transform(value: any, filter_condition: any): any {
    if (filter_condition === 'No Filter' || value.length === 0) {
      return value;
    } else {
      const resultArray = [];
      for (const item of value) {
        if (item.condition === filter_condition) {
          resultArray.push(item);
        }
      }
      return resultArray;
    }
  }
}
