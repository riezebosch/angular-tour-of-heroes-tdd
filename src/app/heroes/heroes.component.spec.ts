import { ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';

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

  it('should not show selected hero when nothing is selected', () => {
    const element: HTMLElement = fixture.nativeElement;
    element.querySelector("li")!.click

    expect(element.querySelector("#selected")).toBeNull();
  });

  it('should show selected hero after click', fakeAsync(() => {
    const element: HTMLElement = fixture.nativeElement;
    element.querySelector("li")!.click()

    flush();
    fixture.detectChanges();

    expect(element.querySelector("#selected")?.textContent).toBe('DR NICE');
  }));
});
