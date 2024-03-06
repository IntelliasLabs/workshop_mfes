import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'ng-module-federation-analytics-entry',
  template: `<ng-module-federation-nx-welcome></ng-module-federation-nx-welcome>`,
})
export class RemoteEntryComponent {}
