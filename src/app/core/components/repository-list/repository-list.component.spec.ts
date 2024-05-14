

import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RepositoryListComponent } from './repository-list.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-loader',
  template: '<div>Mock App Loader</div>'
})
class MockAppLoaderComponent {}

describe('YourComponent', () => {
  let component: RepositoryListComponent;
  let fixture: ComponentFixture<RepositoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryListComponent, MockAppLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display app loader while info is not fetched', () => {
    component.info_fetched = false;
    fixture.detectChanges();
    const loaders = fixture.debugElement.queryAll(By.css('app-loader'));
    expect(loaders.length).toBe(4); // Assuming there are 4 loaders displayed
  });

  it('should display languages when info is fetched', fakeAsync(() => {
    component.info_fetched = true;
    component.languages = [
      { name: 'Course-management', description: '', language: ['CSS','JavaScript','EJS','Rust','HTML','PLpgSQL'] },
      { name: 'Password-generator', description: '', language: ['JavaScript','HTML','CSS'] }
    ];
    fixture.detectChanges();
    tick();
        const languageElements = fixture.nativeElement.querySelectorAll('.flex.flex-col');

    // const languageElements = fixture.debugElement.queryAll(By.css('.flex.flex-col'));
    expect(languageElements.length).toBe(2); 
    expect(languageElements[0].textContent).toContain('Course-management');
    expect(languageElements[1].textContent).toContain('Password-generator');
  }));


});


