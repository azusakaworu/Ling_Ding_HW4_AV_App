
import parentsComponent from './components/parentsComponent.js';
import kidsComponent from './components/kidsComponent.js';

//routes are the path you're taking through the application
	//www.google.ca is a royte
	//www.dfgghg/contact is a route
	///each vue gets mapped to a component that you define
	//and that component gets rendered in the <router-view> element

	const routes = [
		{ path: '/parents', name: 'parents', component: parentsComponent},
		{ path: '/kids', name: 'kids', component: kidsComponent},

	]

	const router = new VueRouter({
		routes
	});
	

	//then your vue instance
	const vm = new Vue({

		el: "#app",

		data: {
			testmessage: "sup"
		},

		methods: {
			calledOnParent() {
				console.log("This method lives in the main VM and was called from a component");
			}

		},
		
		created: function() {
			console.log("This is the main vue instance")
		},
		components: {
            parents: parentsComponent,
            kids: kidsComponent
        }
    },

	// 	router

	// })


    router: router
}).$mount("#app");

router.beforeEach((to, from, next) => {
  console.log('router guard fired!', to, from, vm.authenticated);

components: {
		user: UserComponent
	}
}

();