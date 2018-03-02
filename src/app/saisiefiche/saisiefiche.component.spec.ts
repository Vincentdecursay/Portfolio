import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieficheComponent } from './saisiefiche.component';

describe('SaisieficheComponent', () => {
  let component: SaisieficheComponent;
  let fixture: ComponentFixture<SaisieficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
