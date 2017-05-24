import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent} from './quiz/result.component';


@NgModule({
  imports: [
  	BrowserModule,
  	FormsModule,
  ],
  declarations: [ 
  	AppComponent,
  	QuizComponent,
  	ResultComponent
  ],	
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
