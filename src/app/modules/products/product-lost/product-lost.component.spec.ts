import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLostComponent } from './product-lost.component';

describe('ProductLostComponent', () => {
  let component: ProductLostComponent;
  let fixture: ComponentFixture<ProductLostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
