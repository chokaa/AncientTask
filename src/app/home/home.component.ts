import { CurrentUser, Wallet } from './../model/user';
import { GET_CURRENT_USER } from './../graphql/queries/userQueries';
import { Subscription, map } from 'rxjs'
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { WALLET_UPDATE } from '../graphql/subscriptions/walletSubscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {

  currentUser: CurrentUser | undefined;
  walletAmount: number = 0;

  private queryRef: QueryRef<any>;
  private querySubscription: Subscription;

  constructor(private apollo: Apollo, private ref: ChangeDetectorRef) {
    this.queryRef = this.apollo.watchQuery<any>({
      query: GET_CURRENT_USER,
    })
    
    this.querySubscription = this.queryRef.valueChanges.pipe(
      map((response: any) => {
        return response.data.currentUser
      })
    )
    .subscribe((currentUser: CurrentUser) => {
      this.currentUser = currentUser;
      for(let walet of currentUser.wallets) {
        this.walletAmount += walet.amount
      }
      this.ref.markForCheck();
    })
  }

  ngOnInit(): void {
    this.queryRef.subscribeToMore({
      document: WALLET_UPDATE,
      updateQuery:(prev: any, data: any)  =>{
        console.log(data)
        console.log(prev);
      }
    })
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
