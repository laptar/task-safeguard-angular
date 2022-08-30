import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() inp: any;
  focused: boolean = false;
  handleFocused() {
    this.focused = true;
  }

  constructor() {}

  ngOnInit(): void {}
}
