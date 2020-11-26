import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CalculatorComponent } from "../components/calculator/calculator.component";
import { NgxsModule } from "@ngxs/store";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([], { developmentMode: true })
  ],
  declarations: [AppComponent, HelloComponent, CalculatorComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
