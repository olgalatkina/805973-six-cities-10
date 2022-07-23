import {useState, ChangeEvent, FormEvent} from 'react';
import {starsValues} from '../../constants';
import FormReviewInput from '../form-review-input/form-review-input';

const FormReview = (): JSX.Element => {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>):void => {
    evt.preventDefault();
    // что-то произойдёт
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmitForm}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {starsValues.map((value) => <FormReviewInput value={value} key={value} onChange={handleInputChange} />)}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleInputChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormReview;
