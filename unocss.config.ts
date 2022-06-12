import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-body': 'bg-light-body dark:bg-dark-body',
    'bg-surface': 'bg-light-surface dark:bg-dark-surface',
    'bg-highlight': 'bg-light-highlight dark:bg-dark-highlight',
    'btn': 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    'icon-btn': 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
    'pill': 'w-50px h-26px flex justify-center items-center rounded-2xl transition-colors duration-300',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      light: {
        body: '#ffffff',
        surface: '#d5e1eb',
        highlight: '#0e283c',
      },
      dark: {
        body: '#000000',
        surface: '#16171d',
        highlight: '#3d4051',
      },
    },
  },
})
