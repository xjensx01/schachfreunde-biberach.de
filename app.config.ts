export default defineAppConfig({
  alpine: {
    title: 'Schachfreunde Heilbronn-Biberach 1978 e.V.',
    description: 'Schachfreunde Heilbronn-Biberach 1978 e.V. - Der Schachverein im Heilbronner Stadtteil Biberach',
    // image: {
    //   src: '/social-card-preview.png',
    //   alt: 'An image showcasing my project.',
    //   width: 400,
    //   height: 300,
    // },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'logo', // alt of the logo
      },
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://github.com/sfbiberach/schachfreunde-biberach.de', // our github repository

      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on', // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      instagram: 'schachfreundeheilbronnbiberach',
      github: 'sfbiberach',
    },
    form: {
      successMessage: 'Message sent. Thank you!',
    },
  },
})
