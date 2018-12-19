import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  animal = {
    "name": '',
    "type": '',
    'description': '',
    "skills": {
      "skillOne":'',
      "skillTwo":'',
      "skillThree":'',
    }
  }
  errors = {};
  constructor(private _ftService: PetService, private _router: Router) { }

  ngOnInit() {
  }
  create(){
    let observable = this._ftService.createAnimal(this.animal);
    observable.subscribe(data => {
      console.log(data);
      if (data['status']== 'not ok'){
        console.log(data);
        this.errors = data['errors']['errors'];
      }else{
        localStorage.setItem("id", data['id']);
        this._router.navigate(['/']);
      }
    });
  }

  cancel(){
    this._router.navigate(['/']);
  }

}
