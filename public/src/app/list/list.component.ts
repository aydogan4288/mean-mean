import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  animals = [];
  animal = {};
  update = false;
  constructor(private _ftservice: PetService, private _router: Router) { }

  ngOnInit() {
    this.getAllAnimals();
  }

  getAllAnimals(){
    let observable = this._ftservice.getAnimals();
    observable.subscribe( data => {
      this.animals = data['pets'];
      console.log(data);
    });
  }

  delete(id){
    let observable = this._ftservice.deleteOne(id);
    observable.subscribe( data => {
        // this._router.navigate(['/']);
        this.getAllAnimals();
    })
  }
  edit(id){
    this.update = true;
  }

  // ngOnDestroy(): void {
  //   localStorage.removeItem("id");
  // }

}
