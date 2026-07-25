import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MatGridListModule } from '@angular/material/grid-list';
import { map } from 'rxjs';

import { FavoritoService } from '../../services/favorito/favorito.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  public breakpointObserver = inject(BreakpointObserver);

  public umaColuna$ = this.breakpointObserver.observe([
    Breakpoints.XSmall,
    Breakpoints.Small,
  ]).pipe(map(state => state.matches));

  public duasColunas$ = this.breakpointObserver.observe([
    Breakpoints.Medium,
  ]).pipe(map(state => state.matches));

  private favoritoService = inject(FavoritoService);
  public favoritos$ = this.favoritoService.getAll();

}
