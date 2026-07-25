import {
  NextFunction,
  Request,
  Response,
  Router,
} from 'express';

import {
  IFavorito,
} from '@nx-monorepo/comum';

import { getCollection } from '../util/get-collection';

export const favoritoRouter = Router();

favoritoRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const favoritos: IFavorito[] = await getCollection<IFavorito>(
    req.app,
    'favoritos',
  ).find().toArray();
  res.json(favoritos);
});

favoritoRouter.get('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;
  const favorito: (IFavorito | null) = await getCollection<IFavorito>(
    req.app,
    'favoritos',
  ).findOne({
    _id: _id,
  });
  res.json(favorito);
});
