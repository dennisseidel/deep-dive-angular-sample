import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDoctorsDrugsHomeComponent } from './search-doctors-drugs-home.component';

describe('SearchDoctorsDrugsHomeComponent', () => {
  let component: SearchDoctorsDrugsHomeComponent;
  let fixture: ComponentFixture<SearchDoctorsDrugsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDoctorsDrugsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDoctorsDrugsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
