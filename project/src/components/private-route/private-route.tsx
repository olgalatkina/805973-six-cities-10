import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants';
import Loading from '../loading/loading';
import {useAppSelector} from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

const isCheckedAuth = (authorizationStatus: string): boolean => authorizationStatus === AuthorizationStatus.Unknown;

const PrivateRoute = ({children}: PrivateRouteProps): JSX.Element => {
  const {authorizationStatus} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus)) {
    return (
      <Loading />
    );
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
};

export default PrivateRoute;
