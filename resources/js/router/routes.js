
const Dashboard = () => import('~/pages/Dashboard').then(m => m.default || m)
const Login = () => import('~/pages/auth/login').then(m => m.default || m)
// const Register = () => import('~/pages/auth/register').then(m => m.default || m)
const PasswordEmail = () => import('~/pages/auth/password/email').then(m => m.default || m)
const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m)
const NotFound = () => import('~/pages/errors/404').then(m => m.default || m)

const Home = () => import('~/pages/home').then(m => m.default || m)
const SettingsProfile = () => import('~/pages/settings/profile').then(m => m.default || m)
const SettingsPassword = () => import('~/pages/settings/password').then(m => m.default || m)

const TypesRegister = () => import('~/pages/admin/type/type').then(m => m.default || m)
const TypesDetails = () => import('~/pages/admin/type/details').then(m => m.default || m)
const CompanyList = () => import('~/pages/admin/company/companies').then(m => m.default || m)
const CompanyRegister = () => import('~/pages/admin/company/details').then(m => m.default || m)
const CompanyEdit = () => import('~/pages/admin/company/details').then(m => m.default || m)

const BrokerList = () => import('~/pages/admin/broker/brokers').then(m => m.default || m)
const BrokerRegister = () => import('~/pages/admin/broker/broker').then(m => m.default || m)
const ClientsList = () => import('~/pages/admin/client/private/clients').then(m => m.default || m)
const BusinessesList = () => import('~/pages/admin/client/business/clients').then(m => m.default || m)
const ClientRegister = () => import('~/pages/admin/client/private/client').then(m => m.default || m)
const BusinessRegister = () => import('~/pages/admin/client/business/client').then(m => m.default || m)

const ContactPerson = () => import('~/pages/admin/company/contact_person/persons').then(m => m.default || m)

const Policy = () => import('~/pages/admin/policy/policy').then(m => m.default || m)
const Policies = () => import('~/pages/admin/policy/policies').then(m => m.default || m)
const ExpiryPolicies = () => import('~/pages/admin/policy/expiry_policies').then(m => m.default || m)

const Proposals = () => import('~/pages/admin/policy/proposal/proposals').then(m => m.default || m)
const Proposal = () => import('~/pages/admin/policy/proposal/proposal').then(m => m.default || m)

const Damages = () => import('~/pages/admin/policy/damages/damages').then(m => m.default || m)
const ExpiryDamages = () => import('~/pages/admin/policy/damages/expiry_damages').then(m => m.default || m)

const Invoices = () => import('~/pages/admin/invoice/invoices').then(m => m.default || m)
const Invoice = () => import('~/pages/admin/invoice/invoice').then(m => m.default || m)

export default [
  { path: '/', name: 'welcome', component: Login, meta: [ { title: 'welcome' } ] },
  { path: '/dashboard', name: 'dashboard', component: Dashboard, meta: [ { title: 'dashboard' } ] },

  { path: '/login', name: 'login', component: Login, meta: [ { title: 'login' } ] },
  // { path: '/register', name: 'register', component: Register },
  { path: '/password/reset', name: 'password.request', component: PasswordEmail, meta: [ { title: 'reset_password' } ] },
  { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset, meta: [ { title: 'reset_password' } ] },

  { path: '/home', name: 'home', component: Home, meta: [ { title: 'home' } ] },
  { path: '/settings.profile', name: 'settings.profile', component: SettingsProfile, meta: [ { title: 'profile' } ] },
  { path: '/settings.password', name: 'settings.password', component: SettingsPassword, meta: [ { title: 'password' } ] },

  { path: '/type', name: 'type', component: TypesRegister, meta: [ { title: 'insurance_types' } ] },
  { path: '/type/details/:id', name: 'type-details', component: TypesDetails, props: true, meta: [ { title: 'insurance_types' } ] },

  { path: '/company', name: 'company', component: CompanyRegister, meta: [ { title: 'companies' } ] },
  { path: '/edit-company/:id', name: 'edit-company', component: CompanyEdit, props: true, meta: [ { title: 'companies' } ] },
  { path: '/companies', name: 'companies', component: CompanyList, meta: [ { title: 'companies' } ] },

  { path: '/brokers', name: 'brokers', component: BrokerList, meta: [ { title: 'brokers' } ] },
  { path: '/edit-broker/:id', name: 'edit-broker', component: BrokerRegister, props: true, meta: [ { title: 'brokers' } ] },
  { path: '/broker', name: 'broker', component: BrokerRegister, meta: [ { title: 'brokers' } ] },

  { path: '/privates', name: 'privates', component: ClientsList, meta: [ { title: 'privates' } ] },
  { path: '/private', name: 'private', component: ClientRegister, meta: [ { title: 'privates' } ] },
  { path: '/edit-private/:id', name: 'edit-private', component: ClientRegister, props: true, meta: [ { title: 'privates' } ] },
  { path: '/businesses', name: 'businesses', component: BusinessesList, meta: [ { title: 'businesses' } ] },
  { path: '/business', name: 'business', component: BusinessRegister, meta: [ { title: 'businesses' } ] },
  { path: '/edit-business/:id', name: 'edit-business', component: BusinessRegister, props: true, meta: [ { title: 'businesses' } ] },

  { path: '/contact_persons', name: 'contact_persons', component: ContactPerson, meta: [ { title: 'contact_persons' } ] },

  { path: '/policy', name: 'policy', component: Policy, meta: [ { title: 'policy' } ] },
  { path: '/edit-policy/:id', name: 'edit-policy', component: Policy, props: true, meta: [ { title: 'policy' } ] },
  { path: '/policies', name: 'policies', component: Policies, meta: [ { title: 'policies' } ] },
  { path: '/expiry-policies', name: 'expiry-policies', component: ExpiryPolicies, meta: [ { title: 'expiry-policies' } ] },

  { path: '/damages', name: 'damages', component: Damages, meta: [ { title: 'damages' } ] },
  { path: '/expiry-damages', name: 'expiry-damages', component: ExpiryDamages, meta: [ { title: 'expiry-damages' } ] },

  { path: '/proposals', name: 'proposals', component: Proposals, meta: [ { title: 'proposals' } ] },
  { path: '/edit-proposal/:id', name: 'edit-proposal', component: Proposal, props: true, meta: [ { title: 'proposal' } ] },
  { path: '/proposal', name: 'proposal', component: Proposal, meta: [ { title: 'proposal' } ] },

  { path: '/invoices', name: 'invoices', component: Invoices, meta: [ { title: 'invoices' } ] },
  { path: '/invoice', name: 'invoice', component: Invoice, meta: [ { title: 'invoice' } ] },
  { path: '/edit-invoice/:id', name: 'edit-invoice', component: Invoice, props: true, meta: [ { title: 'invoice' } ] },

  { path: '*', component: NotFound }
]
