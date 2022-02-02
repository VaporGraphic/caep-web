import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

   _listSections = [
     {'titulo':'Inicio',},
     {'titulo':'Oferta academica',},
     {'titulo':'Atencion clinica',},
     {'titulo':'Eventos',},
     {'titulo':'Contactanos',},
   ];

   _listSocial = [
     {
       'icon': 'bi-facebook',
       'color': 'text-primary',
       'link': 'facebook.com'
     },
     {
      'icon': 'bi-instagram',
      'color': 'text-secondary',
      'link': 'instagram.com'
    },{
      'icon': 'bi-youtube',
      'color': 'text-danger',
      'link': 'youtube.com'
    }
    ]

   

    

  constructor() { }

  ngOnInit(): void {
  }

}
