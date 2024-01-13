import { Component, Input } from '@angular/core';

@Component({
	selector: 'my-input',
	templateUrl: './input.component.html',
  standalone: true
})

export class InputComponent {
  @Input() placeholder: string = ''
  @Input() type: string = ''

};
