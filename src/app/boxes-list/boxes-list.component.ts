import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { Box } from './../model/box';
import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { GET_BOXES } from '../graphql/queries/boxQueries';

@Component({
  selector: 'app-boxes-list',
  templateUrl: './boxes-list.component.html',
  styleUrls: ['./boxes-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxesListComponent {
  boxes$: Observable<Box[]>;

  constructor(private apollo: Apollo, private ref: ChangeDetectorRef) {
    this.boxes$ = this.apollo.watchQuery<any>({
      query: GET_BOXES,
    }).valueChanges.pipe(
      map((response: any) => {
        return response.data.boxes.edges.map((box: any) => box.node)
      })
    )
  }
}
