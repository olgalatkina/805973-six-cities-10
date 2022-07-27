import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import cn from 'classnames';
import {AppRoute} from '../../constants';

const Page = (): JSX.Element => {
  const {pathname} = useLocation();
  const [pageClassName, setPageClassName] = useState('');

  useEffect(() => {
    setPageClassName(cn('', {
      'page page--gray page--main': pathname === AppRoute.Root,
      'page': pathname === AppRoute.Offer,
      'page page--gray page--login': pathname === AppRoute.Login,
      'page__main page__main--favorites': pathname === AppRoute.Favorites,
      // 'page page--favorites-empty': pathname === AppRoute.Favorites && пустой список
    }));
  }, [pathname]);

  return (
    <div className={pageClassName}>
      {}
    </div>
  );
};

export default Page;
