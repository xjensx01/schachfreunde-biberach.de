import { defineTheme } from 'pinceau'

export default defineTheme({
  typography: {
    verticalMargin: {
      xs: '8px',
      sm: '16px',
      base: '32px',
    },
  },
  prose: {
    p: {
      br: {
        margin: '{typography.verticalMargin.xs} 0 0 0',
      },
    },
  },
})
