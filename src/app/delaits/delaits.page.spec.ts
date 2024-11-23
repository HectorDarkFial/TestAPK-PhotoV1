import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DelaitsPage } from './delaits.page';

describe('DelaitsPage', () => {
  let component: DelaitsPage;
  let fixture: ComponentFixture<DelaitsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DelaitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
