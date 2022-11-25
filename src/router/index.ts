// @ts-nocheck
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const Sports = () => import( '../views/Sports.vue')
const Connect = () => import('../views/Connect.vue')
const ConfirmEmail = () => import('../views/ConfirmEmail.vue')
const AML = () => import('../views/AML.vue')
const Fair = () => import('../views/Fair.vue')
const Privacy = () => import('../views/Privacy.vue')
const ResponsibleGambling = () => import('../views/ResponsibleGambling.vue')
const Terms = () => import('../views/Terms.vue')
const Payouts = () => import('../views/Payouts.vue')
const BonusTerms = () => import('../views/BonusTerms.vue')
const Disputes = () => import('../views/Disputes.vue')
const SelfExclusion = () => import('../views/SelfExclusion.vue')
const ResetPassword = () => import('../views/ResetPassword.vue')

let routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Sports,
    meta: {
      title: config.DomainName,
      metaTags: [
        {
          name: 'description',
          content: config.DomainName
        }
      ]
    }
  },
  {
    path: '/confirm-email',
    name: 'ConfirmEmail',
    component: ConfirmEmail,
    meta: {
      title: config.DomainName,
      metaTags: [
        {
          name: 'description',
          content: config.DomainName
        }
      ]
    },
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms,
    meta: {
      title: config.DomainName,
      metaTags: [
        {
          name: 'description',
          content: config.DomainName
        }
      ]
    },
  },
  {
    path: '/bonus-terms',
    name: 'BonusTerms',
    component: BonusTerms,
    meta: {
      title: config.DomainName,
      metaTags: [
        {
          name: 'description',
          content: config.DomainName
        }
      ]
    },
  },
  {
    path: '/sports',
    name: 'Sports',
    component: Sports,
    meta: {
      title: config.DomainName,
      metaTags: [
        {
          name: 'description',
          content: config.DomainName
        }
      ]
    },
  },
  {
    path: '/aml',
    name: 'AML',
    component: AML,
    meta: {
      title: config.DomainName,
      metaTags: [
        {
          name: 'description',
          content: config.DomainName
        }
      ]
    },
  },
  {
    path: '/fair',
    name: 'Fair',
    component: Fair,
    meta: {
      title: config.DomainName,
      metaTags: [
        {
          name: 'description',
          content: config.DomainName
        }
      ]
    },
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
    meta: {
      title: config.DomainName,
      metaTags: [
        {
          name: 'description',
          content: config.DomainName
        }
      ]
    },
  },
  {
    path: '/payouts',
    name: 'Payouts',
    component: Payouts,
    meta: {
      title: config.DomainName,
      metaTags: [
        {
          name: 'description',
          content: config.DomainName
        }
      ]
    },
  },
  {
    path: '/disputes',
    name: 'Disputes',
    component: Disputes,
    meta: {
      title: config.DomainName,
      metaTags: [
        {
          name: 'description',
          content: config.DomainName
        }
      ]
    },
  },
  {
    path: '/responsible-gambling',
    name: 'ResponsibleGambling',
    component: ResponsibleGambling,
    meta: {
      title: config.DomainName,
      metaTags: [
        {
          name: 'description',
          content: config.DomainName
        }
      ]
    },
  },
  {
    path: '/self-exclusion',
    name: 'SelfExclusion',
    component: SelfExclusion,
    meta: {
      title: config.DomainName,
      metaTags: [
        {
          name: 'description',
          content: config.DomainName
        }
      ]
    },
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword,
    meta: {
      title: config.DomainName,
      metaTags: [
        {
          name: 'description',
          content: config.DomainName
        }
      ]
    },
  },
];

if(config.ExternalLoginsEnabled) {
  var elRoutes: Array<RouteRecordRaw> = [{
      path: '/connect',
      name: 'Connect',
      component: Connect,
      meta: {
        title: config.DomainName,
        metaTags: [
          {
            name: 'description',
            content: config.DomainName
          }
        ]
      },
    },
  ];
  routes = routes.concat(elRoutes)
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  document.title = to.meta.title;
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 300)
 });

export default router;