import RegisterComponent from '../container/Register';
import LoginComponent from '../container/Login';
import CustomersComponent from '../container/Customers';
import CreateCustomerComponent from '../container/CreateCustomer';

const routes= [
    {
        path: '/auth/register',
        component: RegisterComponent,
        title: 'Register'
    },
    {
        path: '/auth/login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: '/customers',
        component: CustomersComponent,
        title: 'Customers'
    },
    {
        path: '/customers/Create',
        component: CreateCustomerComponent,
        title: 'Create Customer'
    }
]

export default routes;