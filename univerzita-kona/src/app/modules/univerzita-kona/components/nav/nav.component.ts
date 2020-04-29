import { Component } from '@angular/core';
import { ContentType } from '../../shared/constants/constants';
import { Store } from '@ngrx/store';
import * as formActions from '../../state/form.actions';
import * as fromForm from '../../state/form.reducer';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  contentTypes: ContentType[] = ['HELP-REQUEST', 'HELP-BY-ACTIVITY', 'HELP-FINANCIALLY', 'ABOUT'];

  constructor(
    private store: Store<fromForm.State>
  ) { }

  setContentType(contentType: ContentType): void {
    this.store.dispatch(new formActions.ChangeContentType(contentType));
  }

  resetState(): void {
    this.store.dispatch(new formActions.ResetState());
  }

}
