import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18 Select
  public name: string = "Fernando";
  public gender: 'male'|'female' = 'male';
  // Espera un map el pipe
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  public changeClient = (): void => {
    this.name = "Melissa";
    this.gender = "female";
  }

}
