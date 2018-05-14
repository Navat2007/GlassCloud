import {Component, OnInit} from '@angular/core';
import {ReceptionService} from '../reception.service';
import {Reception} from '../reception';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-reception',
  templateUrl: './select-reception.component.html',
  styleUrls: ['./select-reception.component.css']
})
export class SelectReceptionComponent implements OnInit {

  receptions: Reception[];
  id: number;

  constructor(private service: ReceptionService, private router: Router) {
  }

  ngOnInit() {
    this.getReceptions();
  }

  getReceptions() {
    this.service.getReceptions()
      .subscribe(receptions => this.receptions = receptions);
  }

  selectReception(): void {
    this.service.selectReception(1).subscribe(() => {
      if (true) {
        console.log('/order');
        this.router.navigate(['/order']);
      }
    });
  }
}
