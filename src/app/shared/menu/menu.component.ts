import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[]=[];


  constructor() { }

  ngOnInit() {
      this.items = [
          {
            label: 'Pc Bill',
            icon: 'pi pi-desktop',
            routerLink: 'pcbill',
            styleClass: 'pcBill'
          },
          {
            label: 'Pokédex',
            icon: 'pi pi-reddit',
            routerLink: 'pokedex'
          },
          {
            label: 'Bolsa',
            icon: 'pi pi-briefcase',
            routerLink: 'bolsa'
          },
          {
            label: 'Nombre Usuario',
            automationId: 'usuario',
            fragment: 'Correo',
            icon: 'pi pi-user',
            styleClass: 'ml-auto',
            items: [
              {
                label: 'Gestión perfil',
                icon: 'pi pi-cog'
              },
              {
                label: 'Cerrar sesión',
                icon: 'pi pi-sign-out'
              }
            ]
          }

      ];




  }
}


