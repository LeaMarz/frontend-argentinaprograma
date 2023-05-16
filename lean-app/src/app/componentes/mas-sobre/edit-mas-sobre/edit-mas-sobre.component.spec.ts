import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMasSobreComponent } from './edit-mas-sobre.component';

describe('EditMasSobreComponent', () => {
  let component: EditMasSobreComponent;
  let fixture: ComponentFixture<EditMasSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMasSobreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMasSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
