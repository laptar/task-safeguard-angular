import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuMobComponent } from './nav-menu-mob.component';

describe('NavMenuMobComponent', () => {
  let component: NavMenuMobComponent;
  let fixture: ComponentFixture<NavMenuMobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMenuMobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenuMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
