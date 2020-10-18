import Constants from 'expo-constants'

type Env = {
  newsApi?: string
  environment: 'development' | 'production'
}

const ENV: { [key: string]: Env } = {
  development: {
    environment: 'development',
  },
  production: {
    environment: 'production',
  }

}

export const env: Env = (() => {
  switch (Constants.manifest.releaseChannel) {
    case 'production':
      return ENV.production
    default:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const devJson = require('../env.dev.json') as Env
      return {
        ...ENV.development,
        ...devJson
      }
  }
})()



