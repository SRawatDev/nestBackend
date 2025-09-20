import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("-metadata===",value);
   for (const key in value) {
    if(typeof value[key] === 'string'){
      value[key]=value[key].toUpperCase()
    }
   }
    return value;
  }
}
