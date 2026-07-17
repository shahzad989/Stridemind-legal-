import { MetadataRoute } from 'next';

// Minimal web app manifest: the site is not a PWA, but the manifest gives
// Android/Chrome a proper name, icon, and brand color for bookmarks and
// home-screen saves, which otherwise fall back to a screenshot-gray default.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Stridemind: Fall Prevention',
    short_name: 'Stridemind',
    description:
      'Audio-guided dual-task walking for adults 55 and over, built on clinical research linking dual-task training to better balance and lower fall risk.',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#166534',
    icons: [
      {
        src: '/app-icon.png',
        sizes: '1024x1024',
        type: 'image/png',
      },
    ],
  };
}
