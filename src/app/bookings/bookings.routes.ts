import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { bookingsFeature } from './+state/bookings.reducer';
import { OverviewContainerComponent } from '@app/bookings/overview-container.component';
import { BookingsEffects } from './+state/bookings.effects';

export const bookingsRoutes: Routes = [
  {
    path: '',
    providers: [
      provideState(bookingsFeature),
      provideEffects([BookingsEffects]),
    ],
    component: OverviewContainerComponent,
  },
];
