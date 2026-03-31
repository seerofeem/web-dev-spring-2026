import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input() product!: Product; //

  shareToWhatsApp() {
    const link = `https://wa.me/?text=${encodeURIComponent('Посмотри товар: ' + this.product.link)}`; // [cite: 64, 69]
    window.open(link, '_blank');
  }

  shareToTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    const link = `https://t.me/share/url?url=${url}&text=${text}`; // [cite: 66, 69]
    window.open(link, '_blank');
  }
}
