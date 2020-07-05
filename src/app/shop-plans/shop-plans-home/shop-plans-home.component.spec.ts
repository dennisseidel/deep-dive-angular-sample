import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPlansHomeComponent } from './shop-plans-home.component';

describe('ShopPlansHomeComponent', () => {
  let component: ShopPlansHomeComponent;
  let fixture: ComponentFixture<ShopPlansHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopPlansHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPlansHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
