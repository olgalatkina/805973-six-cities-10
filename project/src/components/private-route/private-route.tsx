import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, Status} from '../../constants';
import Loading from '../loading/loading';
import {useAppSelector} from '../../hooks';
import {getAuthStatus, getStatusLogin} from '../../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

const isCheckedAuth = (authorizationStatus: string): boolean => authorizationStatus === AuthorizationStatus.Unknown;

const PrivateRoute = ({children}: PrivateRouteProps): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const loginStatus = useAppSelector(getStatusLogin);

  if (loginStatus === Status.Loading || isCheckedAuth(authorizationStatus)) {
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
