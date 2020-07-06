import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateHeadingComponent } from './template-heading.component';

describe('TemplateImageComponent', () => {
  let component: TemplateHeadingComponent;
  let fixture: ComponentFixture<TemplateHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
