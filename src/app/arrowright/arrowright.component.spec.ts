import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowrightComponent } from './arrowright.component';

describe('ArrowrightComponent', () => {
  let component: ArrowrightComponent;
  let fixture: ComponentFixture<ArrowrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowrightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
