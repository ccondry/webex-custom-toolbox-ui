const routes = [{
  // the home page
  name: 'Home',
  path: '/webex-custom/',
  component: () => import(`../views/home.vue`)
}, {
  // catch-all to redirect to home view if no route matched
  path: '*',
  redirect: '/webex-custom/'
}]
export default routes