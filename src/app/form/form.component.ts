import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  input: Array<string> = []
  constructor() { }

  ngOnInit(): void {
  }
  addPlan(NewInput: string) {
    if (NewInput) {
      this.input.push(NewInput)
    } 
  }
}
