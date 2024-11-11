type Routes = {
  home: string;
  createRytu: string;
  requestRytu: string;
  myRytu: string;
  createPreRytu: string;
  rytuDetails: (explorer: string | number, rytu: string | number) => string;
  search: string;
  explorer: (explorer: string | number) => string;
  certificate: (id: string | number) => string;
  notification: string;
  profile: string;
  favorite: string;
  settings: string;
  wallet: string;
  portfolio: string;
  history: string;
  signIn: string;
  signUp: string;
  resetPin: string;
  forgetPassword: string;
};

const routes: Routes = {
  home: '/',
  createRytu:  '/rytu/create',
  requestRytu:  '/rytu/request',
  myRytu:  '/rytu/mine',
  createPreRytu:  '/rytu/crowdfund',
  rytuDetails: (explorer, rytu) => `/${explorer}/rytu/${rytu}`, 
  search: '/search',
  explorer: (explorer) => `/${explorer}`,
  certificate: (id) => `/${id}`,
  notification: '/notifications',
  profile: '/',
  favorite: '/favorite',
  settings: '/settings',
  wallet: '/wallet',
  portfolio: '/profile?view=portfolio',
  history: '/profile?view=history',
  signIn: '/auth',
  signUp: '/auth/sign-up',
  resetPin: '/auth/reset-pin',
  forgetPassword: '/auth/forget-password',
};

export default routes;