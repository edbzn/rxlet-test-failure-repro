import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LetModule, PushModule } from '@rx-angular/template';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetModule, PushModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('render "hello" text', () => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('div')).nativeElement.innerHTML
    ).toContain('hello');
  });
});
