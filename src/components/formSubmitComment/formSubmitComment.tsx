import {useState, ChangeEvent} from 'react';

export default function FormSubmitComment(): JSX.Element {
  const [comment, setComment] = useState({stars: '', text: ''});

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {[5,4,3,2,1].map((i) => (
          <>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={i}
              id={`${i}-star`}
              type="radio"
              onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                const value = target.defaultValue;
                setComment({
                  ...comment,
                  stars: value,
                });
              }}
            />
            <label
              htmlFor={`${i}-star`}
              className="reviews__rating-label form__rating-label"
              title="terribly"
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
          const value = target.value;
          setComment({
            ...comment,
            text: value,
          });
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe
          your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
