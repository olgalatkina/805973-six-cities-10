import {useState, ChangeEvent, FormEvent} from 'react';
import {STARS_VALUES, Status} from '../../constants';
import FormReviewInput from '../form-review-input/form-review-input';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {postReviewAction} from '../../store/api-actions';
import {ReviewDataType} from '../../types/reviews';
import {getStatusPost} from '../../store/reviews-data/selectors';
import Loading from '../loading/loading';

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

type FormReviewProps = {
  offerID: number,
}

const FormReview = ({offerID}: FormReviewProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
    isValid: false,
  });
  const statusPost = useAppSelector(getStatusPost);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    const isValid = value.length >= MIN_REVIEW_LENGTH && value.length <= MAX_REVIEW_LENGTH;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      isValid,
    }));
  };

  const onSubmit = (reviewData: ReviewDataType) => {
    dispatch(postReviewAction(reviewData));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>):void => {
    evt.preventDefault();
    onSubmit({
      id: offerID,
      rating: Number(formData.rating),
      comment: formData.review,
    });

    setFormData({
      rating: '',
      review: '',
      isValid: false,
    });
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {STARS_VALUES.map((star) => (
          <FormReviewInput
            currentRating={formData.rating}
            value={star}
            key={star}
            onChange={handleInputChange}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleInputChange}
        value={formData.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!formData.rating || !formData.isValid || statusPost === Status.Loading || statusPost === Status.Error}
        >
          {statusPost === Status.Loading
            ? <Loading isButton />
            : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default FormReview;
