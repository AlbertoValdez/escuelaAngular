import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit {

  selectedFile: File = null;


  constructor(private http:HttpClient) { }


  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
   }
   onUpload(){
     const fd = new FormData();
     fd.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post('https://imagestore-f5062.firebaseio.com',fd)
    .subscribe(res =>{
      console.log(res)
    })
   }
  ngOnInit() {
  }

}
