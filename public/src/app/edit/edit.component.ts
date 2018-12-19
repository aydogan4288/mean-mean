import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  animal = {};
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
      this.animal = data['pet']
    })
  }

  update(id){
    let observable = this._ftservice.updateOne(id, this.animal);
    observable.subscribe( data => {
      if (data['status']== 'not ok'){
        this.errors = data['errors']['errors'];
      }else{
        this._router.navigate(['/']);
      }
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
