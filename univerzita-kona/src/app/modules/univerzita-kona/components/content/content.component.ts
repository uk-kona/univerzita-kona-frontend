import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ContentType } from '../../shared/constants/constants';
import * as fromForm from '../../state/form.reducer';

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
    this.store.pipe(select(fromForm.getContentType)).subscribe(
      ct => this.contentType = ct
    );
    // this.store.pipe(select('forms')).subscribe(
    //   forms => {
    //     if (forms) {
    //       console.log(forms.contentType);
    //       this.contentType = forms.contentType;
    //     }
    //   });

  }

}
