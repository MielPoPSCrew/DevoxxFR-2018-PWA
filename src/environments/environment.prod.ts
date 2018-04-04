import { environment as env } from './environment'

export const environment = {
  production: true,
  ...env,
  icons: {
    conf: 'record_voice_over',
    uni: 'school',
    tia: 'build',
    lab: 'developer_mode',
    quick: 'timer',
    bof: 'group_work',
    key: 'label_outline',
    ignite: 'whatshot',
    other: 'chevron_right'
  }
};
