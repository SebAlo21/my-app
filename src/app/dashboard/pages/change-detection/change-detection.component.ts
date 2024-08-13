import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [
    CommonModule,TitleComponent
  ],
  template:`

  <app-title [title]="currentFramework()"></app-title>

  <pre> {{frameworkAsSignal() | json}}</pre>
  <pre> {{frameworkAsProperty | json}}</pre>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent {
  public currentFramework =computed(
    () => `ChangeDetection-${this.frameworkAsSignal().name}`
  );






  public frameworkAsSignal =signal({
    name:'Angular',
    releaseDate:2016
  })

  public frameworkAsProperty ={
    name:'Angular',
    releaseDate:2016
  }


    constructor(){

      setTimeout(() => {
        
       this.frameworkAsSignal.update(value => ({
        ...value,
        name:'React'

       }))
        
        console.log("Hecho")
      }, 3000);



    }


 }
