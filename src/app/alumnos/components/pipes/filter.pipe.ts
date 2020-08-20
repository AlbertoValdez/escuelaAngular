import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultAlumno = [];
   for(const post of value){
     if(post.nombreAlumno.toLowerCase().indexOf(arg.toLowerCase()) > -1){
     resultAlumno.push(post);
     } else if(post.curpAlumno.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
      resultAlumno.push(post);
     };
   };
   return resultAlumno;
  }

}
