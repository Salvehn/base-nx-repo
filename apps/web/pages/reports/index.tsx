import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface ReportsProps {}

export function Reports(props: ReportsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Reports!</h1>
    </div>
  );
}

export default Reports;
