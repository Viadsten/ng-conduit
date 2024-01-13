import { Component, inject } from '@angular/core';
import { InputComponent } from '../../../ui/input/input.component';
import { ButtonComponent } from '../../../ui/button/button.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'auth',
	templateUrl: './auth.component.html',
  imports: [InputComponent, ButtonComponent, CommonModule],
  standalone: true
})

export class AuthComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  page: string | undefined = this.route.snapshot.routeConfig?.path
};
