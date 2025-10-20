import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterC } from "./shared/components/footer-c/footer-c";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterC],
  templateUrl: './app.html',
})
export class App {


}
