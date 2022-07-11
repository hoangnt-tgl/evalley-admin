import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import ProductList from './views/products/ProductList'
import AddProduct from './views/products/AddProduct'
import UserList from './views/users/UserList'
import CreateUser from './views/users/CreateUser'
import CoupanList from './views/coupans/CoupanList'
import CreateCoupan from './views/coupans/CreateCoupan'

Vue.use(Router)

const routes = [
	{ path: '', redirect: { name: 'dasboard' } },
	{
		path: '/dashboard',
		name: 'dasboard',
		component: Dashboard,
		meta: {
			layout: 'admin'
		}
	},
	{
		path: '/product-list',
		name: 'product-list',
		component: ProductList,
		meta: {
			layout: 'admin'
		}
	},
	{
		path: '/add-product',
		name: 'add-product',
		component: AddProduct,
		meta: {
			layout: 'admin'
		}
	},
	{
		path: '/user-list',
		name: 'user-list',
		component: UserList,
		meta: {
			layout: 'admin'
		}
	},
	{
		path: '/create-user',
		name: 'create-user',
		component: CreateUser,
		meta: {
			layout: 'admin'
		}
	},
	{
		path: '/create-Coupan',
		name: 'create-Coupan',
		component: CreateCoupan,
		meta: {
			layout: 'admin'
		}
	},
	{
		path: '/coupan-list',
		name: 'coupan-list',
		component: CoupanList,
		meta: {
			layout: 'admin'
		}
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('./views/Login.vue'),
		meta: {
			layout: 'admin'
		}
	},
	{
		path: '*',
		name: 'Error',
		meta: {
			layout: 'error'
		}
	}
]
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    // firebase.auth().onAuthStateChanged(() => {
    //     if (to.meta.title)
    //         document.title = to.meta.title;
    //     const CurrentUser = firebase.auth().currentUser;
    //     const path = ['/auth/login', '/register'];
    //     if (path.includes(to.path) || to.path === "/callback" || CurrentUser || Userauth.isAuthenticatedUser()) {
    //         return next();
    //     }
    //     next('/auth/login')
    // });
	return next();
});
export default router