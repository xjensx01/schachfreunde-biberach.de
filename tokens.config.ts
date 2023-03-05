import { defineTheme } from 'pinceau'

export default defineTheme({
  typography: {
    verticalMargin: {
      xs: '4px',
      sm: '8px',
      base: '16px',
    },
    fontSize: {
      base: '16px',
    },
  },
  prose: {
    p: {
      fontSize: '{typography.fontSize.base}',
      br: {
        margin: '{typography.verticalMargin.xs} 0 0 0',
      },
    },
  },
})
