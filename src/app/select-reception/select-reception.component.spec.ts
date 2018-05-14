import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectReceptionComponent } from './select-reception.component';

describe('SelectReceptionComponent', () => {
  let component: SelectReceptionComponent;
  let fixture: ComponentFixture<SelectReceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectReceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
