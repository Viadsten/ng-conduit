import { Component, Input } from '@angular/core';

@Component({
	selector: 'my-button',
	templateUrl: './button.component.html',
  standalone: true
})

export class ButtonComponent {
  @Input() text:string = '';
  @Input() type:'button' | 'submit' = 'button';
};
