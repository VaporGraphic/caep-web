import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  closeResult = '';

  listAboutUs = [
    {
      'icon': 'bi-person-heart',
      'title': 'Nosotros',
      'text': 'CAEP es una institución con una ideología seria y con el compromiso de servicio clínico y enseñanza. Se cuenta con la actualización y difusión psicoanalítica para que sus alumnos obtengan un mejor aprendizaje respeto y preparación. Conscientes del compromiso que juega nuestro papel en la línea de la salud mental, acompañados de un espíritu de conducta profesional ante los pacientes. Su ideología institucional ofrece fortalecer la vocación por la línea humana basada en la honestidad e integridad; comprometida con el desarrollo de su comunidad y con un conjunto de valores culturales, históricos y sociales de nuestro país.'
    },
    {
      'icon': 'bi-compass',

      'title': 'Mision',
      'text': ' Estamos seriamente comprometidos con la atención clínica, enseñanza y constante actualización psicoanalítica para la salud mental del individuo y su adecuada integración con la sociedad.'
    },
    {
      'icon': 'bi-eye',

      'title': 'Visión',
      'text': 'Ser una de las principales instituciones que genere salud mental a través del conocimiento permanente en en área psicoanalítica con los individuos y la sociedad para un mejor coexistir.'
    }
  ];

  imageObject: Array<object> = [
    {
      image: 'https://www.caepmexico.com.mx/img/evento1.jpg',
      thumbImage: 'https://www.caepmexico.com.mx/img/evento1.jpg',
      alt: 'alt of image',
      },{
    image: 'https://www.caepmexico.com.mx/img/evento2.jpg',
    thumbImage: 'https://www.caepmexico.com.mx/img/evento2.jpg',
    alt: 'alt of image',
    },{
      image: 'https://www.caepmexico.com.mx/img/evento3.jpg',
      thumbImage: 'https://www.caepmexico.com.mx/img/evento3.jpg',
      alt: 'alt of image',
      },{
        image: 'https://www.caepmexico.com.mx/img/evento4.jpg',
        thumbImage: 'https://www.caepmexico.com.mx/img/evento4.jpg',
        alt: 'alt of image',
        }, 
];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open( ) {
    this.modalService.open( {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
