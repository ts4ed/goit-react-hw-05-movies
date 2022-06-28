import s from './Pagination.module.css';

export const Pagination = ({ page, totalPage, changePage }) => {
  const onClick = e => {
    const { name } = e.currentTarget;
    name === 'forward' && page !== totalPage && changePage(page + 1);
    name === 'back' && page !== 1 && changePage(page - 1);
  };
  return (
    <div className={s.container}>
      <button className={s.btn1} onClick={onClick} name="back">
        past page
      </button>
      {/* <Integer>{page}</Integer> */}
      <button className={s.btn} onClick={onClick} name="forward">
        next page
      </button>
    </div>
  );
};
