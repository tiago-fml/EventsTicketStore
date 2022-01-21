import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarTicketComponent } from './cancelar-ticket.component';

describe('CancelarTicketComponent', () => {
  let component: CancelarTicketComponent;
  let fixture: ComponentFixture<CancelarTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelarTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
