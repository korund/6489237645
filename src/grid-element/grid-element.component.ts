import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './grid-element.component.html',
  styleUrls: ['./grid-element.component.scss']
})
export class GridElementComponent {
  title = 'Item';
  imagePath = './assets/sample.jpg';
  content = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tristique turpis. Pellentesque fringilla in velit ut fringilla. Nam interdum erat vitae sapien fermentum, sit amet iaculis orci vestibulum. Sed lobortis molestie malesuada. Nam nec bibendum turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur lectus risus, placerat sed fermentum nec, congue porta lorem. In euismod sem ut nibh accumsan finibus. Donec scelerisque, ligula ut elementum auctor, ligula nisi iaculis libero, sit amet elementum tortor mauris quis dui. Ut a rutrum leo. Nam erat tortor, fringilla id lacus eget, commodo feugiat eros. Donec ac nibh ultricies, semper elit sed, auctor lorem. Sed vehicula nunc mi, nec luctus metus pellentesque sed. Fusce non aliquam justo, vel euismod enim.\n',
    'Nunc malesuada diam nunc, sed feugiat orci rhoncus vitae. Curabitur porttitor ipsum tincidunt velit gravida, eu tempor ante maximus. Donec a interdum turpis. Vivamus aliquet tristique convallis. Aliquam dictum metus et nisi semper tempus. Proin accumsan et sem eget vulputate. Fusce ornare mi eget lacus molestie interdum. Sed scelerisque, sapien vel euismod egestas, arcu diam pharetra turpis, viverra rutrum mauris neque at eros. Fusce venenatis dolor non mi bibendum, vel elementum turpis pretium. Suspendisse nec suscipit diam, vel eleifend nulla.\n',
    'Quisque tempus risus a neque accumsan, ut scelerisque diam viverra. Curabitur viverra a est eu eleifend. Fusce dapibus maximus ex in scelerisque. Sed bibendum nulla nisi, imperdiet mollis magna maximus at. Suspendisse potenti. Cras sed erat eget est accumsan pretium. Suspendisse tincidunt auctor rutrum. Proin quis elit at leo dictum auctor vitae sed sem. Vestibulum mollis urna et tellus aliquet cursus. Suspendisse rutrum venenatis ipsum, quis commodo arcu tincidunt ut. Donec consectetur, mi eget scelerisque facilisis, tellus turpis vestibulum tortor, in elementum elit lorem eu metus. Pellentesque turpis ipsum, ultrices at fermentum at, commodo ut dolor. Pellentesque mauris ipsum, feugiat quis malesuada ac, bibendum quis turpis. Fusce pellentesque odio eget ante mattis, vitae facilisis metus pulvinar.'
  ];
}
