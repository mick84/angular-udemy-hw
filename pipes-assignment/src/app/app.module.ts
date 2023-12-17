import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReversePipe } from './reverse.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [AppComponent, ReversePipe, SortPipe],
  imports: [CommonModule, FormsModule, BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
