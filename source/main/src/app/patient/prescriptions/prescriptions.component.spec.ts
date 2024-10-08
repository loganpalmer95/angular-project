import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { PrescriptionsComponent } from "./prescriptions.component";

describe("PrescriptionsComponent", () => {
  let component: PrescriptionsComponent;
  let fixture: ComponentFixture<PrescriptionsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
    imports: [PrescriptionsComponent],
}).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
