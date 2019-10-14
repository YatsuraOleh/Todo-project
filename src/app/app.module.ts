import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { NewTodoComponent } from './content/new-todo/new-todo.component';
import { TodosComponent } from './content/todos/todos.component';
import { HighlightDirective } from './shared/directives';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    NewTodoComponent,
    TodosComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
