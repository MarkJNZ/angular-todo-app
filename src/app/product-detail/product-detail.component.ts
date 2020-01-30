import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  product: Product = {
    id: 1,
    name: "Fender Telecaster",
    description: "50s Telecaster",
    cost: 3500,
    image: "/assets/images/img-tele.jpg"
  };

  constructor() {}

  ngOnInit() {}
}
