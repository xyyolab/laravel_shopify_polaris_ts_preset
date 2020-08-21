let mix = require('laravel-mix')

require('laravel-mix-react-typescript-extension')

mix.reactTypeScript('resources/ts/app.tsx', 'public/js')

mix.disableSuccessNotifications().version()
