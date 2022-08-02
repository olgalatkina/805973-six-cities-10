import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants';

type PrivateRouteProps = {
  authorizationStatus: string;
  children: JSX.Element;
}

const PrivateRoute = ({authorizationStatus, children}: PrivateRouteProps): JSX.Element => (
  authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login}/>
);

export default PrivateRoute;
