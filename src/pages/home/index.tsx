import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer, ProForm } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { useEffect, useRef } from 'react';
import TestDom from './components/TestDom';
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
        <ProForm
          submitter={{
            // 配置按钮文本
            searchConfig: {
              resetText: '重置',
              submitText: '提交',
            },
            // 配置按钮的属性
            resetButtonProps: {
              style: {
                // 隐藏重置按钮
                display: 'none',
              },
            },
            submitButtonProps: {},

            // 完全自定义整个区域
            render: (props) => {
              console.log(props);
              return [
                <button
                  type="button"
                  key="rest"
                  onClick={() => props.form?.resetFields()}
                >
                  重置
                </button>,
                <button
                  type="button"
                  key="submit"
                  onClick={() => props.form?.submit?.()}
                >
                  提交
                </button>,
              ];
            },
          }}
          onFinish={(values: any) => {
            console.log(values);
          }}
        >
          <ProForm.Item name="test">
            <TestDom />
          </ProForm.Item>
        </ProForm>
      </div>
    </PageContainer>
  );
};

export default HomePage;
