## Features

- Laravel 5.7 
- Vue + VueRouter + Vuex + VueI18n + ESlint
- Pages with dynamic import and custom layouts
- Authentication with JWT
- Socialite integration
- Bootstrap 4 + Font Awesome 5

## Installation

- Edit `.env` and set your database connection details
- (When installed via git clone or download, run `php artisan key:generate` and `php artisan jwt:secret`)
- `php artisan migrate`
- `npm install` or `yarn`


#### Development

```bash
# build and watch
npm run watch

# serve with hot reloading
npm run hot

#run
php artisan serve
```

#### Production

```bash
npm run production
```