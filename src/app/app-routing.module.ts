import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './error/not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { MatInputModule } from '@angular/material/input';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatDividerModule,
  MatListModule,
  MatCardModule,
  MatListItem,
  MatFormFieldModule,
} from '@angular/material';

const routes: Routes = [
  { path: '', loadChildren: 'app/timeline/timeline.module#TimelineModule' },
  { path: 'users', loadChildren: 'app/users/users.module#UsersModule' },
  { path: 'signup', component: SignUpComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent, canActivate: [ AuthGuard ] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    MatInputModule,
    MatInputModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatCardModule, MatListModule,
    MatFormFieldModule
  ],
  declarations: [],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
