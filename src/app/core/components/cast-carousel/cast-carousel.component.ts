import { Component, Input, OnInit } from '@angular/core';
import { SizeImg } from '../../interfaces/SizeImage.interface';
import { Cast } from '../../interfaces/CreditsResponse.interface';

@Component({
  selector: 'app-cast-carousel',
  templateUrl: './cast-carousel.component.html',
  styleUrls: ['./cast-carousel.component.css']
})
export class CastCarouselComponent implements OnInit {

  @Input() results:Cast[] = [];

  carouselImgSize: SizeImg = SizeImg.default;

  responsiveOptions: any = [];

	constructor() { 
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 4,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 3,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 2,
                numScroll: 1
            }
        ];
	}

	ngOnInit() {}

}
