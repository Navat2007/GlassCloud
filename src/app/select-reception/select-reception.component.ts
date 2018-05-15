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
  private receptionId: number;

  constructor(private service: ReceptionService, private router: Router, ) {
  }

  ngOnInit() {
    this.getReceptions();
  }

  getReceptions() {
    this.service.getReceptions()
      .subscribe(receptions => {
        this.receptions = receptions;
        if (receptions.length > 0) {
          this.receptionId = receptions[0].id;
        }
      });
  }

  selectReception(): void {
    if (this.receptionId) {
      this.service.selectReception(this.receptionId).subscribe(() => {
        this.router.navigate(['/order']);
      });
    }
  }

  onChange(receptionId: number) {
    console.log(receptionId);
    this.receptionId = receptionId;
  }
}
