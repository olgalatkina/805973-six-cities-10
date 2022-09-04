import {useLocation} from 'react-router-dom';
import cn from 'classnames';
import {AppRoute} from '../../constants';

type PageProps = {
  children: JSX.Element,
}

const Page = ({children}: PageProps): JSX.Element => {
  const {pathname} = useLocation();

  const pageClassName = cn('page', {
    'page--gray page--main': pathname === AppRoute.Root,
    'page--gray page--login': pathname === AppRoute.Login,
    'page__main page__main--favorites': pathname === AppRoute.Favorites,
  });

  return (
    <div className={pageClassName}>
      {children}
    </div>
  );
};

export default Page;
