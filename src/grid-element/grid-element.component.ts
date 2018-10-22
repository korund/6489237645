import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './grid-element.component.html',
  styleUrls: ['./grid-element.component.scss']
})
export class GridElementComponent {
  title = 'Item title';
  imagePath = './assets/sample.jpg';
  content = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero arcu, volutpat at laoreet at, consequat at ligula. Sed suscipit commodo nibh, et dapibus orci laoreet varius. Suspendisse non risus et sem varius vestibulum a et tortor. Curabitur commodo luctus tellus id suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vitae sem ultrices, interdum mauris at, semper orci. In nec enim non nunc fringilla condimentum id in sem. Ut bibendum consequat commodo. Mauris tortor leo, condimentum sed ex vulputate, pellentesque volutpat neque. Donec vel lacus aliquet, lobortis nulla a, sodales augue.",
    "Duis varius mattis euismod. Phasellus ut fermentum magna. Aenean vel ex ornare, congue nisi vitae, facilisis eros. Morbi ut mauris quam. Suspendisse porttitor bibendum erat nec sagittis. Ut placerat urna augue, non commodo nulla eleifend non. Cras tempus elit et felis varius ultricies. Suspendisse tempus tellus nec suscipit luctus. Proin vehicula nisl vitae magna aliquet vehicula. Praesent at malesuada turpis. Donec pulvinar fermentum congue. Nullam vitae erat aliquam, cursus libero quis, tempor nulla.",
    "Phasellus quis ultrices metus. Maecenas et elementum nisi, in laoreet quam. Nulla facilisi. Sed auctor vitae nibh a posuere. Curabitur cursus elit eu ligula consectetur, vitae euismod purus gravida. Donec accumsan viverra finibus. Praesent et urna tellus. Vivamus in interdum velit. Aenean iaculis risus nunc, non congue sapien imperdiet sit amet. Suspendisse eleifend interdum tincidunt. Etiam sagittis, nibh a consectetur mattis, turpis enim auctor enim, eget aliquet nunc urna ut eros. Nunc finibus lacus quis ornare posuere. Maecenas sed nisi facilisis, rhoncus dui eget, tristique risus. Phasellus ultrices ipsum tortor. Morbi vitae interdum magna.",
    "Praesent sit amet accumsan libero, id tempor felis. Aenean eu porttitor quam, nec viverra leo. Morbi viverra neque tortor, at interdum eros auctor ac. Integer suscipit ligula felis, et tincidunt neque efficitur id. Sed semper, massa at tristique pretium, magna risus congue massa, id mattis orci erat in erat. Quisque iaculis, urna ut dictum bibendum, velit risus cursus leo, a elementum augue sem nec orci. Quisque eu magna ornare ligula euismod sodales. Cras non interdum urna. Quisque arcu ligula, tincidunt et finibus eget, pellentesque id dui. Pellentesque vehicula urna tortor, non pellentesque ligula ullamcorper sit amet.",
    "Maecenas eget rutrum odio. Quisque et nulla a lacus dictum sollicitudin in eget nunc. Maecenas eleifend feugiat justo non vestibulum. Fusce scelerisque venenatis purus, ac tempus est aliquam eu. Mauris vestibulum arcu quam, non consequat nisi fringilla sit amet. Nunc elementum auctor eros nec vehicula. Duis fringilla ut lacus a tristique. Morbi sodales, nulla in elementum luctus, dolor magna viverra lectus, ut varius tortor erat eget est. Nam id dui vitae leo condimentum elementum. Cras blandit, libero non interdum lobortis, diam sapien ultrices nulla, id interdum ex nunc a odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sagittis orci in convallis viverra. Nullam sit amet lorem a leo iaculis fermentum. In dictum odio eu neque sollicitudin finibus. Ut rhoncus libero ac risus vulputate congue."
  ];

  clicked() {
    alert("nothing here right now");
  }
}
