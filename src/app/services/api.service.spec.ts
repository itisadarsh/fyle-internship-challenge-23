import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { environment } from '../environments/env';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch user data', () => {
    console.log("hello")
    const mockUserData = { name: 'Adarsh Patnaha', login: 'itisadarsh' };
    const githubUsername = 'itisadarsh';

    service.getUser(githubUsername).subscribe((user) => {
      expect(user).toEqual(mockUserData);
    });

    const req = httpTestingController.expectOne(`${environment.baseUrl}/users/${githubUsername}`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockUserData);
  });

  it('should fetch repositories data', () => {
    const mockReposData = [{ name: 'Course-management' }, { name: 'FlappyBird' }];
    const githubUsername = 'itisadarsh';
    const per_page = 10;
    const curr_page = 1;

    service.getRepos(githubUsername, per_page, curr_page).subscribe((repos) => {
      expect(repos).toEqual(mockReposData);
    });

    const req = httpTestingController.expectOne(`${environment.baseUrl}/users/${githubUsername}/repos?per_page=${per_page}&page=${curr_page}`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockReposData);
  });

  it('should fetch languages data', () => {
    const mockLanguagesData = ['CSS','JavaScript','EJS','Rust','HTML','PLpgSQL'];
    const githubUsername = 'itisadarsh';
    const project = 'Course-management';

    service.getLanguages(githubUsername, project).subscribe((languages) => {
      expect(languages).toEqual(mockLanguagesData);
    });

    const req = httpTestingController.expectOne(`${environment.baseUrl}/repos/${githubUsername}/${project}/languages`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockLanguagesData);
  });
});
