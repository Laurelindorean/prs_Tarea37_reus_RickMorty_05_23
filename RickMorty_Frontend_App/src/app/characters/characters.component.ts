import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{

  title:string="Characters";
  characters: any [] = [];

  constructor(private httpClient:HttpClient){

  }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    return this.httpClient.get<any>('assets/database.json').subscribe( data => {
      this.characters = data.characters;
      this.shuffleArray(this.characters)
    });
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
