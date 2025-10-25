import ViteYaml from '@modyfi/vite-plugin-yaml';

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Jesse Wells | Creative Developer | NYC',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Creative Developer specializing in JavaScript, Web Development and Digital Design. Based in Brooklyn NY with 10+ years of professional experience.' },
        { name: 'keywords', content: 'jessewells, jesse wells, jessenwells, jesse n wells, brooklyn, new york, nyc, ny, front-end developer, frontend developer, front end developer, front end development, web developer, web development, wed designer, web design, ui design, ux development, animation, web animation, svg animation, web apps, mobile apps, designer and developer' },
        { name: 'theme-color', content: '#202430' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
      ],
      link: [
        { rel: 'icon', href: '/favicon/favicon-512B.svg', type: 'image/svg+xml' },
        { rel: 'icon', href: '/favicon/favicon-32.ico', type: 'image/x-icon', sizes: '32x32' },
        { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  modules: [
    '@primevue/nuxt-module',
    '@pinia/nuxt'
  ],
  vite: {
    plugins: [
      ViteYaml(),
    ]
  },
  nitro: {
    output: { publicDir: 'dist' }
  },
  primevue: {
    importTheme: { from: '@/assets/theme.js' },
    options: {
      ripple: true,
      inputVariant: 'outlined',
      theme: {
        cssLayer: true
    }
  }
  }
})


