let mix = require('laravel-mix')

require('laravel-mix-react-typescript-extension')

mix
  .reactTypeScript('resources/ts/app.tsx', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')

mix.disableSuccessNotifications().version()
