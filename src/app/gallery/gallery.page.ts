import { Component, OnInit } from '@angular/core';
import {PhotosService} from '../services/photos.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  
  photos: string [] = []

  constructor(
    private photoServices:PhotosService
  ) { 
    this.photos = this.photoServices.photos;
  }

  ngOnInit() {
  }

  async takePhoto(){
    await this.photoServices.agregarNuevaFoto();
  }

}
