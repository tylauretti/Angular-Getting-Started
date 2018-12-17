import { Component } from "@angular/core";

@Component({
  selector: 'pm-root', //Prefix each selector with something to identify it
  template: `
    <div><h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
