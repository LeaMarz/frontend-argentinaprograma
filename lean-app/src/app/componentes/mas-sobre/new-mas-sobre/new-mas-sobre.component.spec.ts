import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMasSobreComponent } from './new-mas-sobre.component';

describe('NewMasSobreComponent', () => {
  let component: NewMasSobreComponent;
  let fixture: ComponentFixture<NewMasSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMasSobreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMasSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
