import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent {
  @Input() repositories: any[] = [];
  @Input() info_fetched: boolean = false;
  @Input() error: boolean = false;
  @Input() languages: any[] = [];
}
