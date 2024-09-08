import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  img: string;
  cost: number;
  seller: string;
  catagory: string;
}
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl:  './filter.component.html',
  styleUrl: './filter.component.scss'
})

@Component({
  selector: 'app-products',
  template: `
    <div class="products">
      <div *ngFor="let product of products" class="product">
        <div class="img">
          <img [src]="product.img" [alt]="product.name" />
        </div>
        <div class="product-details">
          <span class="name">{{ product.name }}</span>
          <span class="amt">Rs.{{ product.amt }}</span>
          <span class="seller">{{ product.seller }}</span>
        </div>
      </div>
      <h3 *ngIf="products.length === 0">No Products Available</h3>
    </div>

    <div class="category-list">
      <ul>
        <li *ngFor="let category of categories" (click)="filterByCategory(category)">{{ category }}</li>
      </ul>
    </div>

    <input type="range" id="priceRange" [min]="minPrice" [max]="maxPrice" (input)="filterByPrice($event.target.value)">
    <span class="priceValue">Rs.{{ maxPrice }}</span>

    <input type="text" id="txtSearch" (keyup)="filterByName($event.target.value)">
  `,
})
export class FilterComponent {
  products: Product[] = data;
  categories: string[] = [];
  minPrice: number | undefined;
  maxPrice: number | undefined;

  ngOnInit(): void {
    this.setCategories();
    this.setPrices();
  }

  setCategories(): void {
    this.categories = [...new Set(this.products.map(product => product.catagory))];
    this.categories.unshift('All');
  }

  setPrices(): void {
    const priceList = this.products.map(product => product.cost);
    this.minPrice = Math.min(...priceList);
    this.maxPrice = Math.max(...priceList);
  }

  filterByCategory(category: string): void {
    if (category === 'All') {
      this.products = data;
    } else {
      this.products = data.filter(product => product.catagory === category);
    }
  }

  filterByPrice(price: number): void {
    this.products = data.filter(product => product.cost <= price);
  }

  filterByName(name: string): void {
    if (name) {
      this.products = data.filter(product => product.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
    } else {
      this.products = data;
    }
  }
}
export const data: Product[] = [
  {
    id: 1,
    name: "Fire Boltt Ninja 2",
    img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
    cost: 1599,
    seller: "Boltt Store",
    catagory: "Watch",
  },
  {
    id: 2,
    name: "Noise Pulse Go",
    img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
    cost: 1300,
    seller: "Noise Store",
    catagory: "Watch",
  },

  {
    id: 3,
    name: "boAt Xtend Pro",
    img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
    cost: 2799,
    seller: "Rajesh Watchs",
    catagory: "Watch",
  },
  {
    id: 4,
    name: "Lenovo Tab M8",
    img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
    cost: 9270,
    seller: "Stonehenge Retail",
    catagory: "Tablets",
  },
  {
    id: 5,
    name: "Honor PAD X8",
    img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
    cost: 12999,
    seller: "Honor india",
    catagory: "Tablets",
  },

  {
    id: 6,
    name: "IKALL N9 ",
    img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
    cost: 3999,
    seller: "IKALL Store",
    catagory: "Tablets",
  },

  {
    id: 7,
    name: "Oppo Pad Air",
    img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
    cost: 15999,
    seller: "Oppo Store",
    catagory: "Tablets",
  },
  {
    id: 8,
    name: "Acer EK220Q",
    img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
    cost: 6249,
    seller: "Accer Store",
    catagory: "Monitors",
  },
  {
    id: 9,
    name: "Samsung 24",
    img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
    cost: 9799,
    seller: "Samsung Store",
    catagory: "Monitors",
  },

  {
    id: 10,
    name: "ZEBRONICS AC32FHD ",
    img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
    cost: 12799,
    seller: "ZEBRONICS Store",
    catagory: "Monitors",
  },
];

  
