import { ActivatedRouteSnapshot } from '@angular/router';
import { posters } from '../../../../assets/posters';

export const movieResolver = (route: ActivatedRouteSnapshot) => {
  const movieId = Number(route.paramMap.get('id'));
  const poster = posters.find(poster => poster.id === movieId);
  return poster;
};
