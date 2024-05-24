export enum routes {
  ABOUT = '/about',
  DISCLAIMER = '/direct',
  INDEX_HTML = '/index.html',
  PRIVATE_ROOM = '/private/:roomId',
  PUBLIC_ROOM = '/public/:roomId',
  ROOT = '/',
  SETTINGS = '/settings',
}

export const homepageUrl = new URL(
  import.meta.env.VITE_HOMEPAGE ?? 'https://pchat.xyz/'
)
