import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleGreetingComponent } from './module-greeting.component';

describe('ModuleGreetingComponent', () => {
  let component: ModuleGreetingComponent;
  let fixture: ComponentFixture<ModuleGreetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleGreetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
