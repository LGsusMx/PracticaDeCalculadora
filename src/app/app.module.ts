import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CalculatorComponent } from "../components/calculator/calculator.component";
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { ResponseState } from "../models/operator/operator.redux";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([ResponseState], {
      developmentMode: true
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  declarations: [AppComponent, HelloComponent, CalculatorComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
