const routes = [{
  // catch-all to redirect to home view if no route matched
  path: '*',
  redirect: '/webex-custom/'
}, {
  // the home page
  name: 'Home',
  path: '/webex-custom/',
  component: () => import(`../views/home.vue`)
}]
export default routes