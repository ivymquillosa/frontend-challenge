import type { Config } from 'tailwindcss'
import sharedConfig from '@stack/config-tailwind'

const config: Pick<Config, 'content' | 'presets'> = {
  presets: [sharedConfig],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    '../../packages/handcrafted-components/src/**/*.{js,ts,jsx,tsx}',
    '../../packages/radix-components/src/**/*.{js,ts,jsx,tsx}'
  ]
}

export default config
