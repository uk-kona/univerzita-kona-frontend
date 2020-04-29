import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ContentType } from '../../shared/constants/constants';
import * as fromForm from '../../state/form.reducer';
import * as fromFormSelector from '../../state/form.selector';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  contentType: ContentType;

  constructor(
    private store: Store<fromForm.State>
  ) { }

  ngOnInit(): void {
    this.store.pipe(select(fromFormSelector.getContentType)).subscribe(
      ct => this.contentType = ct
    );
  }

}
