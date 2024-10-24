/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        text: 'text 1s ease infinite'
      },
      'keyframes': {
        'text': {
          '0%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        }
      },
      screens: {
        iphonexr: '414px',
        // => @media (min-width: 414px) { ... }
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
    plugins: [],
  }
};
