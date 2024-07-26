import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent,
  ],
  exports: [  // Para exportar el módulo y pueda ser usado fuera de su ámbito (./counter)
    CounterComponent,
  ]
})
export class CounterModule { }
