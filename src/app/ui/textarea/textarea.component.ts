import { Component, Input } from '@angular/core';

@Component({
	selector: 'my-textarea',
	templateUrl: './textarea.component.html',
  standalone: true
})

export class TextareaComponent {
  @Input() placeholder:string = ''
  @Input() rows:string = '4'
};
