import { Button, Input } from 'antd';

interface PropsType {
  value?: any;
  onChange?: (value: any) => void;
}

const TestDom = ({ value, onChange, ...props }: PropsType) => {
  const onCLick = () => {
    onChange?.(value ? 0 : 1);
  };
  return (
    <>
      <Input value={value} type="text" {...props} />
      <Button onClick={onCLick}>测试</Button>
    </>
  );
};

export default TestDom;
