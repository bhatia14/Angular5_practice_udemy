import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCountComponent } from './tweet-count.component';

describe('TweetCountComponent', () => {
  let component: TweetCountComponent;
  let fixture: ComponentFixture<TweetCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
