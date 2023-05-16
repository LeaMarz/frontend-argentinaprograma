import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasSobreComponent } from './mas-sobre.component';

describe('MasSobreComponent', () => {
  let component: MasSobreComponent;
  let fixture: ComponentFixture<MasSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasSobreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
