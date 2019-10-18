import { Component, OnInit, HostBinding } from '@angular/core';
import { Item } from '../../models/Item';
import { ActivatedRoute, Router} from '@angular/router';

import { ItemsService } from '../../services/items.service';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  item: Item = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  } ;

  // tslint:disable-next-line:no-inferrable-types
  edit: boolean = false;

  constructor(private itemService: ItemsService, private router: Router, private activedRout: ActivatedRoute ) { }

  ngOnInit() {
    const params = this.activedRout.snapshot.params;
    if (params.id) {
      this.itemService.getItem(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.item = res;
            this.edit = true;
          },
          err => console.error(err)
        );
    }
  }

  saveNewItem() {
    this.itemService.saveItem(this.item)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/items']);
      },
      err =>  console.error(err)
    );
  }

  updateItem() {
    this.itemService.updateItem(this.item.id, this.item)
    .subscribe(
      res => {
             console.log(res);
             this.router.navigate(['/items']);
      },
      err => console.error(err)
    );
  }

}
