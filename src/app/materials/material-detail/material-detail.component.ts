import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Material} from '../../material';
import {MaterialService} from '../../services/material.service';
import {MaterialColorService} from '../../services/material-color.service';

@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.css']
})
export class MaterialDetailComponent implements OnInit {
  @Input() material: Material;
  disabled = true;

  private colorId: number;

  constructor(
    public service: MaterialService,
    public colorService: MaterialColorService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.getMaterial();
    this.colorService.update();
  }

  getMaterial(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getItem(id)
      .subscribe(json => {
        this.material = json.data;
        this.colorId = this.material.color.id;
      });
  }

  goBack(): void {
    this.location.back();
  }

  edit(): void {
    this.disabled = false;
  }

  save(): void {
    console.log(this.material.price);
    this.material.color.id = this.colorId;
    this.service.updateItem(this.material, this.material.id)
      .subscribe(res => this.material = res);
      // .subscribe(() => this.goBack());
    this.disabled = true;
  }

  cancel() {
    this.disabled = true;
    this.getMaterial();
  }

  onChangeColor(colorId: number) {
    this.colorId = +colorId;
    // this.materialColors.filter(color => color.id === colorId)
  }
}
