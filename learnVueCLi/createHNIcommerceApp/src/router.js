import {createRouter, createWebHistory} from "vue-router";
// import all components from ./pages
import ProductRegistration from "@/components/pages/admin/ProductRegistration";
import RegisterAdvisor from "@/components/pages/admin/RegisterAdvisor";
import CartList from "@/components/pages/product/CartList";
import ProductList from "@/components/pages/product/ProductList";
import ProductDetail from "@/components/pages/product/ProductDetail";
import ContactAdvisor from "@/components/pages/product/ContactAdvisor";
import RegisterUser from "@/components/pages/user/RegisterUser";
import NotFound from "@/components/pages/NotFound";
import AdvisorPage from "@/components/pages/admin/AdvisorPage";
import AboutPage from "@/components/pages/admin/AboutPage";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/products'},
        {path: '/products', component: ProductList},
        {
            path: '/products/:id', component: ProductDetail, children: [
                {path: 'contactAdvisor', component: ContactAdvisor},
            ]
        },
        {path: '/cart', component: CartList},  // Product page
        {path: '/about', component: AboutPage},
        {path: '/registerUser', component: RegisterUser}, // user folder
        {path: '/registerAdvisor', component: RegisterAdvisor},  // admin
        {path: '/advisorPage', component: AdvisorPage},
        {path: '/registerProduct', component: ProductRegistration},
        // Not found page
        {path: '/:notFound(.*)', component: NotFound},

    /// much more later'
    // path login page
    // main lage page
    // path login user
    // path login admin
    //  a ddashboard page  -- firebase backend

    ]
});



export default router;