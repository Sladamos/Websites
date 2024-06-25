import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
