import {ChangeEvent} from 'react';

type FormReviewInputProps = {
  value: string,
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void,
  currentRating: string,
}

const FormReviewInput = ({value, onChange, currentRating}: FormReviewInputProps): JSX.Element => (
  <>
    <input
      className="form__rating-input visually-hidden"
      name="rating"
      value={value}
      id={`${value}-stars`}
      type="radio"
      onChange={onChange}
      checked={currentRating === value}
    />
    <label
      htmlFor={`${value}-stars`}
      className="reviews__rating-label form__rating-label"
      title="perfect"
    >
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"/>
      </svg>
    </label>
  </>
);

export default FormReviewInput;
