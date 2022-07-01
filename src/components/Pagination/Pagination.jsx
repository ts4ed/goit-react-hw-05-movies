import s from './Pagination.module.css';

export const Pagination = ({
  page,
  totalPage,
  changeDownPage,
  changeUpPage,
}) => {
  const onClick = e => {
    const { name } = e.currentTarget;
    name === 'forward' && page !== totalPage && changeUpPage();
    name === 'back' && page !== 1 && changeDownPage();
  };

  return (
    <div className={s.container}>
      <button className={s.btn1} onClick={onClick} name="back">
        past page
      </button>
      <button className={s.btn} onClick={onClick} name="forward">
        next page
      </button>
    </div>
  );
};
