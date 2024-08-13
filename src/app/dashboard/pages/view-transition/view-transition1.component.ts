
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
    <app-title title="View Transition 1"/>
  <section class="flex justify-start">
  <img srcset="http://picsum.photos/id/237/200/300" alt="picsum" width="200" height="300" 
  style="view-transition-name: Hero1"
  />
  
  <div class="fixed bottom-16 right-16 bg-blue-800 w-32 h-32 rounded" style="view-transition-name: Hero2"></div>
  </section>

  
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTransitionComponent { }
