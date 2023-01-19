import { Box } from './../model/box';
import { OPEN_BOX } from './../graphql/mutations/boxes';
import { Apollo } from 'apollo-angular';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-box-open',
  templateUrl: './box-open.component.html',
  styleUrls: ['./box-open.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxOpenComponent {

  private boxId: string = '';

  constructor(private apollo: Apollo, private route: ActivatedRoute) {
    this.route.params.subscribe((params: any) => {
      this.boxId = params.id
    })
  }

  openBox(): void {
    this.apollo.mutate({
      mutation: OPEN_BOX,
      variables: {
        input: {
          boxId: this.boxId,
          amount: 1
        }
      }
    }).subscribe((box: any) => {
      console.error(box)
    })
  }

}
