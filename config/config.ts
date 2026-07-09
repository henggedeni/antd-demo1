import { defineConfig } from '@umijs/max';
import layout from './layout';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV = 'dev' } = process.env;

export default defineConfig({
  base: '/admin/',
  publicPath: '/admin/',
  title: '面试测试',
  hash: true,
  layout,
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  proxy: proxy[REACT_APP_ENV as keyof typeof proxy],
  routes,
  npmClient: 'pnpm',
  utoopack: {},
});
