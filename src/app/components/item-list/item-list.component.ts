import { Component, OnInit, HostBinding } from '@angular/core';

import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  items: any = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemsService.getItems().subscribe(
      res => {
        this.items = res;
      },
      err => console.error(err)
    );
  }

  deleteItem(id: string) {
    this.itemsService.deleteItem(id).subscribe(
      res => {
            console.log(res);
            this.getItems();
      },
      err => console.log(err)
    );
  }

}
