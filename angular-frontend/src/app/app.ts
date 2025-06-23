import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Close} from './components/close/close'
import {Container} from './components/container/container'
import {FormTitle} from './components/form-title/form-title'
import {Icon} from './components/icon/icon'
import {CustomInput} from './components/custom-input/custom-input'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Close, Container, FormTitle,Icon,CustomInput],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-frontend';
  inputType = 'password';

  handleClose() {
  console.log('Close clicked');
}

toggleInputType() {
  this.inputType = this.inputType === 'password' ? 'text' : 'password';
}

}
