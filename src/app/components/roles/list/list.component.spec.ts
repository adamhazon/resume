import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';

import { RootStoreModule } from '../../../root-store';
import { RolesListComponent } from './list.component';

describe('RolesListComponent', () => {
  let component: RolesListComponent;
  let fixture: ComponentFixture<RolesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RootStoreModule,
        MatIconModule,
        MatListModule,
        MatDialogModule
      ],
      declarations: [
        RolesListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get list of roles', () => {
    component.rolesList$.subscribe(res => {
      expect(res.length).toBe(12);
    });
  });
});
