import { ManifestOptions } from 'vite-plugin-pwa'

function generateRandom(min = 0, max = 100000000000000000) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

export const manifest: Partial<ManifestOptions> = {
  short_name: 'PChat',
  name: 'PChat',
  description:
    'PChat is a free, open source communication tool. All communication is encrypted and lives in your browser, not on an server. Enjoy!',
  icons: [
    {
      src: 'favicon.ico',
      sizes: '64x64 32x32 24x24 16x16',
      type: 'image/x-icon',
    },
    {
      src: 'logo192.png',
      type: 'image/png',
      sizes: '192x192',
    },
    {
      src: 'logo512.png',
      type: 'image/png',
      sizes: '512x512',
    },
  ],
  start_url: './',
  display: 'fullscreen',
  theme_color: '#000000',
  background_color: '#222222',
  screenshots: [
    {
      src: 'screenshots/home-desktop.png',
      sizes: '2160x1620',
      type: 'image/png',
    },
    {
      src: 'screenshots/public-room-desktop.png',
      sizes: '2160x1620',
      type: 'image/png',
    },
    {
      src: 'screenshots/public-room-desktop-with-video.png',
      sizes: '2160x1620',
      type: 'image/png',
    },
    {
      src: 'screenshots/home-mobile-dark.png',
      sizes: '750x1334',
      type: 'image/png',
      form_factor: 'narrow',
    },
    {
      src: 'screenshots/home-mobile-light.png',
      sizes: '750x1334',
      type: 'image/png',
      form_factor: 'narrow',
    },
    {
      src: 'screenshots/public-room-mobile.png',
      sizes: '750x1334',
      type: 'image/png',
      form_factor: 'narrow',
    },
  ],

  shortcuts: [
    {
      name: 'About',
      url: './about',
      icons: [
        {
          src: 'logo512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
      ],
    },
    {
      name: 'Create room',
      url: 'https://pchat.xyz/public/' + generateRandom(),
      icons: [
        {
          src: 'logo512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
      ],
    },
  ],
}
