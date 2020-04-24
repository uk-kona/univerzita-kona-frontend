import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContentType } from '../../shared/constants/constants';
import { Store } from '@ngrx/store';
import * as formActions from '../../state/product.actions';
import * as fromForm from '../../state/product.reducer';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  contentTypes: ContentType[] = ['HELP-REQUEST', 'HELP-BY-ACTIVITY', 'HELP-FINANCIALLY', 'ABOUT'];

  constructor(
    private store: Store<fromForm.State>
  ) { }

  ngOnInit(): void {
  }

  setContentType(contentType: ContentType): void {
    // this.store.dispatch({
    //   type: 'CHANGE_CONTENT_TYPE',
    //   payload: contentType
    // });
    this.store.dispatch(new formActions.ChangeContentType(contentType));
  }

  resetState(): void {
    // this.store.dispatch({
    //   type: 'CHANGE_CONTENT_TYPE',
    //   payload: 'INTRO'
    // });
    this.store.dispatch(new formActions.ChangeContentType('INTRO'));
  }

}
