import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { RootStoreModule } from '../../../root-store';
import { RoleDetailsComponent } from './details.component';

describe('RoleDetailsComponent', () => {
  let component: RoleDetailsComponent;
  let fixture: ComponentFixture<RoleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RootStoreModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatDialogModule
      ],
      declarations: [
        RoleDetailsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
