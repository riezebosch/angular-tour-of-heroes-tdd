import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list all heroes', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll("li").length).toBe(10);
  });

  it('should display details', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector("li")!.textContent).toBe('11 Dr Nice');
  });
});
