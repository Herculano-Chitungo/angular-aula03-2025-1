import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import {
  Observable,
  shareReplay,
} from 'rxjs';

import { IFavorito } from '@nx-monorepo/comum';

import { API_BASE } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  private httpClient = inject(HttpClient);
  private apiBase = inject(API_BASE);

  /**
   * Recupera a lista de favoritos do back end.
   *
   * @returns Observable compartilhado e com replay do `Array` de `IFavorito`.
   */
  public getAll(): Observable<IFavorito[]> {
    return this.httpClient.get<IFavorito[]>(
      `${this.apiBase}/favorito`,
    ).pipe(
      shareReplay(),
    );
  }

}
