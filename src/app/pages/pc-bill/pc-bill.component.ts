import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-pc-bill',
  templateUrl: './pc-bill.component.html',
  styleUrls: ['./pc-bill.component.css']
})
export class PcBillComponent implements OnInit {
  display: boolean = false;
  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];

  }

  showDialog() {
    this.display = true;

  }
  onCloseModal(display: boolean) {
    this.display = display;
  }

}
