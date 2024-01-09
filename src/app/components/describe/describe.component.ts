import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-describe',
  standalone: true,
  imports: [],
  templateUrl: './describe.component.html',
  styleUrl: './describe.component.scss',
})
export class DescribeComponent {
  src = signal(this.nextUrl());
  /*
  const objectImage = document.getElementById('object-image');
    const nextObjectBtn = document.getElementById('next-object-btn');

    function loadRandomObject() {
      // Genera un número aleatorio para obtener una imagen diferente cada vez
      const randomImageId = Math.floor(Math.random() * 1000);

      // Establece la fuente de la imagen con el ID aleatorio
      objectImage.src = `https://picsum.photos/id/${randomImageId}/800/600`;
    }

    // Carga una imagen aleatoria al cargar la página
    window.onload = loadRandomObject;
    */

  loadRandomObject(): void {
    this.src.set(this.nextUrl());
  }

  nextUrl(): string {
    const randomImageId = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/id/${randomImageId}/800/600`;
  }
}
