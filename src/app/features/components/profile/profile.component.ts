import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputComponent } from '../../../ui/input/input.component';
import { ButtonComponent } from '../../../ui/button/button.component';
import { TextareaComponent } from '../../../ui/textarea/textarea.component';

@Component({
	selector: 'profile',
	templateUrl: './profile.component.html',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonComponent, TextareaComponent]
})

export class ProfileComponent {};
