import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from '../../pokemon/pokemon.interface';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
  // pokemon: Pokemon = {
  //   count: number
  //   next: string;
  //   previous: null
  //   results: string[];
  // };
  @Input() display!: boolean;
  @Output() modalClose: EventEmitter<boolean> = new EventEmitter();


  newPokemonForm : FormGroup = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    genre: ['male', Validators.required],
    birthDate: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    image: ['', Validators.required]

  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  onModalClose() {
    this.display = false;
    this.modalClose.emit(this.display);
  }
}
