import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTodoList } from './my-todo-list';

describe('MyTodoList', () => {
  let component: MyTodoList;
  let fixture: ComponentFixture<MyTodoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTodoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTodoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
