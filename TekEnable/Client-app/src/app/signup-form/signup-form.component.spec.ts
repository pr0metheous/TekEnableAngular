import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupFormComponent } from './signup-form.component';

describe('SignupFormComponent', () => {
  let component: SignupFormComponent;
  let fixture: ComponentFixture<SignupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupFormComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the SignupFormComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render the form with email, heardAboutUs, and reason fields', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
    expect(compiled.querySelector('label[for="email"]')).toBeTruthy();
    expect(compiled.querySelector('input[type="email"]')).toBeTruthy();
    expect(compiled.querySelector('label[for="heardAboutUs"]')).toBeTruthy();
    expect(compiled.querySelector('select[id="heardAboutUs"]')).toBeTruthy();
    expect(compiled.querySelector('label[for="reason"]')).toBeTruthy();
    expect(compiled.querySelector('textarea[id="reason"]')).toBeTruthy();
    expect(compiled.querySelector('button[type="submit"]')).toBeTruthy();
  });

  it('should show error message when form is submitted with invalid data', () => {
    const compiled = fixture.nativeElement;
    const emailInput: HTMLInputElement = compiled.querySelector('input[type="email"]');
    const signUpBtn: HTMLButtonElement = compiled.querySelector('button[type="submit"]');


    signUpBtn.click();
    fixture.detectChanges();

    expect(compiled.querySelector('.feedback').textContent).toContain('Please fill in all the required fields with valid data.');
  });

  it('should show success message when form is submitted with valid data', () => {
    const compiled = fixture.nativeElement;
    const emailInput: HTMLInputElement = compiled.querySelector('input[type="email"]');
    const heardAboutUsSelect: HTMLSelectElement = compiled.querySelector('select[id="heardAboutUs"]');
    const signUpBtn: HTMLButtonElement = compiled.querySelector('button[type="submit"]');

    // Fill in form data
    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input'));

    heardAboutUsSelect.value = 'Advert';
    heardAboutUsSelect.dispatchEvent(new Event('change'));

    fixture.detectChanges();

    // Attempt to submit the form
    signUpBtn.click();
    fixture.detectChanges();

    expect(compiled.querySelector('.feedback').textContent).toContain('You have been signed up to the newsletter.');
  });
});
