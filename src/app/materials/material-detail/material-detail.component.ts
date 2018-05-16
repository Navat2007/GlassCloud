import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {environment} from '../../../environments/environment';
import {ActivatedRoute} from '@angular/router';
import {GlassServiceService} from '../../services/glass-service.service';
import {Material, MaterialColor} from '../../material';
import {LoggingService} from '../../services/logging.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.css']
})
export class MaterialDetailComponent implements OnInit {
  @Input() material: Material;
  disabled = true;
  materialColors: MaterialColor[] = [];

  private colorService: GlassServiceService<MaterialColor>;

  private colorId: number;

  private serviceUrl = environment.serverHost + '/api/material';
  private colorServiceUrl = environment.serverHost + '/api/material/color';

  constructor(
    private route: ActivatedRoute,
    private service: GlassServiceService<Material>,
    // private colorService: GlassServiceService<MaterialColor>,
    private location: Location,
    private http: HttpClient,
    private logging: LoggingService,
  ) {
    this.service.setUrl(this.serviceUrl).setName('material-detail');
    this.colorService = new GlassServiceService<MaterialColor>(this.http, this.logging);
    this.colorService.setUrl(this.colorServiceUrl).setName('material-detail-color');
  }

  ngOnInit() {
    this.getMaterial();
    this.getMaterialColors();
  }

  getMaterialColors(): void {
    this.colorService.getItems()
      .subscribe(items => this.materialColors = items);
  }

  getMaterial(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getItem(id)
      .subscribe(material => {
        this.material = material;
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
    this.service.updateItem(this.material, this.material.id).subscribe();
      // .subscribe(() => this.goBack());
    this.disabled = true;
    // this.getMaterial();
  }

  cancel() {
    this.disabled = true;
    this.getMaterial();
  }

  onChangeColor(colorId: number) {
    this.colorId = colorId;
    // this.materialColors.filter(color => color.id === colorId)
  }
}
