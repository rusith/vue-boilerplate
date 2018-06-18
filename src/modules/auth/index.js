import module from './state/store';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ActivateEmail from './components/ActivateEmail';

export default {
  routes: [
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn,
      meta: { open: true },
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
      meta: { open: true },
    },
    {
      path: '/activate-email',
      name: 'ActivateEmail',
      component: ActivateEmail,
      meta: { open: true },
    },
  ],
  module,
};

