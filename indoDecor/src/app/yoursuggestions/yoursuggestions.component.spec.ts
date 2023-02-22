import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoursuggestionsComponent } from './yoursuggestions.component';

describe('YoursuggestionsComponent', () => {
  let component: YoursuggestionsComponent;
  let fixture: ComponentFixture<YoursuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoursuggestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoursuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
