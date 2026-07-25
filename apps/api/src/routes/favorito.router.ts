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

favoritoRouter.put('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;
  const body: IFavorito = req.body;
  const results: (IFavorito | null) = await getCollection<IFavorito>(
    req.app,
    'favoritos',
  ).findOneAndReplace({
    _id: _id,
  }, body);

  if (results) {
    res.json(body);
  } else {
    return next(new Error(`Favorito com ID ${_id} não foi encontrado!`));
  }

});
