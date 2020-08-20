export class GetAlumnos {
    Limit: number;
    Offset: number;


    constructor(l:number, o:number){
        this.Limit = l;
        this.Offset = o;

    }
}
