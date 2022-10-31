import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMapsComponent } from './category-maps.component';

describe('CategoryMapsComponent', () => {
  let component: CategoryMapsComponent;
  let fixture: ComponentFixture<CategoryMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryMapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
