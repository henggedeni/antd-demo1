import { currentUser } from '@/services/ant-design-pro/api';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history } from '@umijs/max';

const loginPath = '/user/login';

export async function getInitialState(): Promise<{
  name: string;
  currentUser?: API.CurrentUser;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg = await currentUser({ skipErrorHandler: true });
      return msg.data;
    } catch (_error) {
      const { pathname, search, hash } = history.location;
      history.replace(
        `${loginPath}?redirect=${encodeURIComponent(pathname + search + hash)}`,
      );
    }
    return undefined;
  };

  const { location } = history;
  if (location.pathname !== loginPath) {
    const currentUserData = await fetchUserInfo();
    console.log('currentUserData', currentUserData);
    return {
      name: '@umijs/max',
      currentUser: currentUserData,
      fetchUserInfo,
    };
  }

  return {
    name: '@umijs/max',
    fetchUserInfo,
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    onPageChange: () => {
      const { location } = history;
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.replace(
          `${loginPath}?redirect=${encodeURIComponent(
            location.pathname + location.search + location.hash,
          )}`,
        );
      }
    },
  };
};
