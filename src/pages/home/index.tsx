import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { useEffect, useRef } from 'react';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  const guideRef = useRef<any>();

  useEffect(() => {
    return () => {
      console.log('2134');
    };
  }, []);

  // useAsyncEffect(async () => {
  //   await np();
  //   // 卸载时执行
  //   return new Promise<void>((resolve, reject) => {
  //     console.log('卸载了');
  //     // resolve();
  //   })
  // }, [])

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide ref={guideRef} name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
