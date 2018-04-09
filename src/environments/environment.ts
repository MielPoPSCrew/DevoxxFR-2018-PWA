// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  icons: {
    'Conference': 'record_voice_over',
    'University': 'school',
    'Tools-in-Action': 'build',
    'Hands-on Labs': 'developer_mode',
    'Quickie': 'timer',
    'BOF (Bird of a Feather)': 'group_work',
    'Keynote': 'label_outline',
    'Ignite Sessions': 'whatshot',
    'Autres formats de conférence': 'chevron_right'
  },
  flags: {
    fr: '/assets/flag_fr.png',
    en: '/assets/flag_en.png',
    tiny_fr: '/assets/tiny_flag_fr.png',
    tiny_en: '/assets/tiny_flag_en.png'
  },
  menu: [
    { title: 'Accueil', icon: 'home', link: '', withDivider: true },
    { title: 'Planning', icon: 'today', link: 'schedule', withDivider: false },
    { title: 'Bookmarks', icon: 'star', link: 'bookmarks', withDivider: true },
    { title: 'Speakers', icon: 'person', link: 'speakers', withDivider: false },
    { title: 'Talks', icon: 'school', link: 'talks', withDivider: true },
    { title: 'À propos', icon: 'help', link: 'about', withDivider: false }
  ]
};
