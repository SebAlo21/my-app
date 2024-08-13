
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, booleanAttribute } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [
    CommonModule,TitleComponent
  ],
  template:`
    <app-title title="View Transition 2"/>
  <section class="flex justify-end">
  <img srcset="http://picsum.photos/id/237/200/300" alt="picsum" width="200" height="300"
  style="view-transition-name: Hero1"
  />
  
  <div class="bg-blue-500 w-56 h-56" style="view-transition-name: Hero2"></div>
  </section>

  
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTransitionComponent { }
