import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  responseJson: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  pingApi() {
    this.api.ping$().subscribe(
      res => this.responseJson = res
    );
  }
}
