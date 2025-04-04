import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from '../../components/dragonball/character-add/dragonball-character-add.component';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-page-super.component.html',
  styleUrls: ['./dragonball-page-super.component.css'],
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballPageSuperComponent {

  public dragonballService = inject(DragonballService);

 
}

