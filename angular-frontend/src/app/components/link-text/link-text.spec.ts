import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkText } from './link-text';

describe('LinkText', () => {
  let component: LinkText;
  let fixture: ComponentFixture<LinkText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
