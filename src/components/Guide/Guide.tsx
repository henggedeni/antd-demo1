import { Layout, Row, Typography } from 'antd';
import { forwardRef, useImperativeHandle } from 'react';
import styles from './Guide.less';

interface PropsType {
  name?: string;
}

// 脚手架示例组件
const Guide = forwardRef((props: PropsType, ref: any) => {
  const { name } = props;

  useImperativeHandle(ref, () => ({
    test() {
      console.log('123');
    },
  }));

  return (
    <Layout>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          欢迎使用 <strong>{name}</strong> ！
        </Typography.Title>
      </Row>
    </Layout>
  );
});

export default Guide;
