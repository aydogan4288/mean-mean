import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  animal: any;
  errors = {};

  constructor(private _ftservice: PetService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.getAnimal(params['id']);
    })
  }

  getAnimal(id){
    let observable = this._ftservice.getOne(id);
    observable.subscribe( data => {
      this.animal = data['pet'];
    })
  }

  delete(id){
    let observable = this._ftservice.deleteOne(id);
    observable.subscribe( data => {
        this._router.navigate(['/']);
    })
  }

  cancel(){
    this._router.navigate(['/']);
  }
}
