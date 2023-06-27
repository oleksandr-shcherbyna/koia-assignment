import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export abstract class Unsubscribe implements OnDestroy {
  protected unsubscribed$: Subject<void> = new Subject<void>();

  public ngOnDestroy(): void {
    this.unsubscribed$.next();
    this.unsubscribed$.complete();
  }
}