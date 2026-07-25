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
