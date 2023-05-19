import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegissterComponent } from './regisster.component';

describe('RegissterComponent', () => {
  let component: RegissterComponent;
  let fixture: ComponentFixture<RegissterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegissterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegissterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
