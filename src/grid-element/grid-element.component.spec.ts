import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridElementComponent } from './grid-element.component';


describe('GridElementComponent', () => {
  let component: GridElementComponent;
  let fixture: ComponentFixture<GridElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridElementComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'Item title'`, async(() => {
    const title = 'Item title';
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(title);
  }));

  it('should have an image', function () {
    const imagePath = './assets/sample.jpg';
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').attributes['src'].value).toBe(imagePath);
  });

  it('should have a number of paragraphs by length of content array', function () {
    const contentLength = 5;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('p').length).toBe(contentLength);
  });

  it('should have a button', function () {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button')).not.toBeNull();
  });

  it('should call clicked() on button click', function () {
    spyOn(component, 'clicked');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.clicked).toHaveBeenCalled();
  });
});
