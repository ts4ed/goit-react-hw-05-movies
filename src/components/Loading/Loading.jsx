import { ThreeDots } from 'react-loader-spinner';
import s from './Loading.module.css';
export const Loading = () => {
  return (
    <div className={s.div}>
      <ThreeDots color="#808080" height={80} width={80} />
    </div>
  );
};
