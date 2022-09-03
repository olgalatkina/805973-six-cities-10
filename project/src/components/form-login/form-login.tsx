import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';
import { AuthDataType } from '../../types/user';
import { loginAction } from '../../store/api-actions';
import Loading from '../../components/loading/loading';
import styles from './form-login.module.css';
import { getStatusLogin } from '../../store/user-process/selectors';
import { Status } from '../../constants';

const formFields = {
  email: 'E-mail',
  password: 'Password'
};

type FieldProps = {
  value: string,
  hasValue: boolean,
  isValid: boolean,
  errorText: string,
  regex: RegExp,
}

type FormStateProps = {
  [key: string]: FieldProps,
}

const FormLogin = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const loginStatus = useAppSelector(getStatusLogin);

  const [formState, setFormState] = useState<FormStateProps>({
    email: {
      value: '',
      hasValue: false,
      isValid: false,
      errorText: 'please enter a real email address',
      regex: /[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/,
    },
    password: {
      value: '',
      hasValue: false,
      isValid: false,
      errorText: 'at least 1 letter and 1 number',
      regex: /\d+[a-zA-Z]+|[a-zA-Z]+\d+/,
    }
  });

  const onSubmit = (authData: AuthDataType) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      login: formState.email.value,
      password: formState.password.value,
    });
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    const rule = formState[name].regex;
    const isValid = rule.test(value);
    const hasValue = !!value.trim();

    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
        isValid,
        hasValue,
      }
    }));
  };

  return (
    <form
      className="login__form form"
      action=""
      method=""
      onSubmit={handleSubmit}
    >
      {Object.entries(formFields).map(([name, label]) => {
        const wrapperClass = cn('login__input-wrapper form__input-wrapper', styles.wrapper);
        const inputClass = cn('login__input form__input', {
          [styles.error]: !formState[name].isValid && formState[name].hasValue
        });

        return (
          <div className={wrapperClass} key={name}>
            <label className="visually-hidden">{label}</label>
            <input
              className={inputClass}
              type={name}
              name={name}
              placeholder={label}
              required
              value={formState[name].value}
              onChange={handleChange}
            />
            {!formState[name].isValid && formState[name].hasValue && (
              <p className={styles.text}>{formState[name].errorText}</p>
            )}
          </div>
        );
      })}
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={!(formState.email.isValid && formState.password.isValid) || loginStatus === Status.Loading || loginStatus === Status.Error}
      >
        {loginStatus === Status.Loading
          ? <Loading isButton />
          : 'Sign in'}
      </button>
    </form>
  );
};

export default FormLogin;
