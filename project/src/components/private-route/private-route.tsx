import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, Status} from '../../constants';
import Loading from '../loading/loading';
import {useAppSelector} from '../../hooks';
import {getAuthStatus, getStatusCheckAuth} from '../../store/user-process/selectors';
import SomethingWrong from '../something-wrong/something-wrong';

type PrivateRouteProps = {
  children: JSX.Element;
}

const isCheckedAuth = (authorizationStatus: string): boolean => authorizationStatus === AuthorizationStatus.Unknown;

const PrivateRoute = ({children}: PrivateRouteProps): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const status = useAppSelector(getStatusCheckAuth);

  if (status === Status.Loading || status === Status.Idle || isCheckedAuth(authorizationStatus)) {
    return (
      <Loading />
    );
  }

  if (status === Status.Error) {
    return (
      <SomethingWrong />
    );
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
};

export default PrivateRoute;
