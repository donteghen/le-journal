import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'ago'
})
export class AgoPipe implements PipeTransform {

  transform(time:number): string {
    return moment.duration(moment().diff(moment(time * 1000))).humanize();
  }

}
