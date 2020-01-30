import { Component, OnInit } from "@angular/core";
import { Product } from "../classes/product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  product: Product = {
    id: 1,
    name: "phone",
    description: "Motorolla G5s",
    cost: 350,
    image: ""
  };

  constructor() {}

  ngOnInit() {}
}
