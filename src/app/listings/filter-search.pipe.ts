import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(value: any, filterString: any): any {
    if (filterString === '' || value.length === 0) {
    return value;
    }

    console.log(value.length);

    filterString = filterString.toLowerCase();
    return value.filter( it => {
      const item_name: string =  it.name.toLowerCase().includes(filterString);
      const item_author: string = it.author.toLowerCase().includes(filterString);

      if (item_name) {
      return item_name;
      } else if (item_author) {
       return item_author;
             }

    });
   }

    /* const resultArray = [];
    for (const item of value) {

      if (item.name === filterString || item.author === filterString) {
        resultArray.push(item);
      }

    }
    return resultArray;
  } */
}
