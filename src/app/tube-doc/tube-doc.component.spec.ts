import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TubeDocComponent } from './tube-doc.component';

describe('TubeDocComponent', () => {
  let component: TubeDocComponent;
  let fixture: ComponentFixture<TubeDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TubeDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TubeDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
