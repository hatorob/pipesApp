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

  // i18 plural
  public clients: string[] = ["Matias","Maria","Melissa","Eduardo","Alejandro","Héctor","Diego","tatis","juan","andres"]

  public clientsMap = {
    '=0': 'No tenemos ningún cliente esperando',
    '=1': "Tenemos un cliente esperando",
    '=2': "Tenemos 2 clientes esperando",
    'other': "Tenemos # clientes esperando",
  }

  public deleteClient = (): void => {
    this.clients.pop();
  }




}
