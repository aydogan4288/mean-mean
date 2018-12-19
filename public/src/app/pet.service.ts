import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private _http: HttpClient) { }

  getAnimals(){
    return this._http.get('/pets');
  }
  createAnimal(animal){
    return this._http.post('/pet', animal);
  }
  getOne(id){
    return this._http.get(`/pet/${id}`);
  }

  addReview(id, review){
    return this._http.post(`/pet/${id}/review`, review);
  }

  updateOne(id, animal){
    return this._http.put(`/pet/${id}`, animal);
  }

  deleteOne(id){
    return this._http.delete(`/pet/${id}`);
  }


}
