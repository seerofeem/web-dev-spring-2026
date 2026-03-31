import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Флагманский смартфон с титановым корпусом. Мощный процессор.',
      price: 550000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h20/86300836954142.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-chernyi-113138184/'
    },
    {
      id: 2,
      name: 'Мышь Logitech G102 Lightsync',
      description: 'Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью.',
      price: 5999,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000'
    },
    {
      id: 3,
      name: 'Ноутбук Apple MacBook Air 13 2025',
      description: 'Ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность.',
      price: 529151,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa2/p94/37425233.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-13-6-16-gb-ssd-256-gb-macos-mc6t4-138321653/?c=750000000'
    },
    {
      id: 4,
      name: 'Ноутбук ASUS TUF Gaming FA507NUR-LP127E ',
      description: 'Мощный и надёжный ноутбук, созданный для работы, учебы и захватывающих игр',
      price: 729910,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p44/pe1/49606145.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-fa507nur-lp127e-15-6-32-gb-ssd-1000-gb-win-11-pro-90nr0jp5-m007s0-141557286/?c=750000000'
    },
    {
      id: 5,
      name: 'Смарт-часы Apple Watch Series 10 46 мм черный',
      description: 'Самые тонкие Apple Watch с самым большим дисплеем. Мощные функции для здоровья и фитнеса.',
      price: 216990,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p5b/p0a/1511235.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-10-s-m-46-mm-chernyi-128124978/'
    },
    {
      id: 6,
      name: 'Клавиатура Logitech G213 Prodigy',
      description: 'Игровая клавиатура с RGB-подсветкой, влагозащитой и клавишами, настроенными на производительность.',
      price: 32400,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h9f/63777729151006.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/logitech-g213-prodigy-chernyi-9200432/?c=750000000'
    },
    {
      id: 7,
      name: 'Наушники Sony WH-1000XM5 черный',
      description: 'Лучшее в отрасли шумоподавление и исключительное качество звука с технологией High-Resolution Audio.',
      price: 154700,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000'
    },
    {
      id: 8,
      name: 'Игровая приставка Sony PlayStation 5 Slim',
      description: 'Обновленная более тонкая версия PS5 с дисководом и накопителем на 1 ТБ для молниеносной загрузки игр.',
      price: 265000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      id: 9,
      name: 'Монитор LG UltraGear 27GN800-B черный',
      description: 'Игровой монитор с IPS-матрицей, разрешением QHD и частотой обновления 144 Гц для плавного геймплея.',
      price: 139000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7b/h25/65547262001182.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/27-lg-27gn60r-chernyi-107490028/?c=750000000'
    },
    {
      id: 10,
      name: 'Планшет Apple iPad Air 2024 11 M2 128 ГБ серый',
      description: 'Теперь с мощным чипом M2, поддержкой Apple Pencil Pro и сверхбыстрым Wi-Fi 6E.',
      price: 335000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h77/86745408634910.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000'
    }
  ]

;
}
