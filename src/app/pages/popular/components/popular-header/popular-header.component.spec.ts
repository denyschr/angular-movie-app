import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopularHeaderComponent } from './popular-header.component';

describe('PopularHeaderComponent', () => {
  let component: PopularHeaderComponent;
  let fixture: ComponentFixture<PopularHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PopularHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
