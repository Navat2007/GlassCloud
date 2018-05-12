import {Component, OnInit} from '@angular/core';
import {Company} from '../company';
import {companies} from '../mock-dtos';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company[];

  constructor() {
    this.companies = companies;
  }

  ngOnInit() {
  }

  delete(company: Company): void {
    console.log('print company');
  }

  edit(company: Company): void {
    console.log('edit company');
  }
}
