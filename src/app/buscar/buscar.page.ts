import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { searchOutline } from 'ionicons/icons';

@Component({
  selector: 'app-buscar',
  templateUrl: 'buscar.page.html',
  styleUrls: ['buscar.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon],
})
export class BuscarPage {
  // Sin coincidencias: la lista queda vacía y se muestra el bloque @empty.
  resultados: { id: number; nombre: string }[] = [];

  constructor() {
    addIcons({ searchOutline });
  }
}
