/**
 * Config
 * The following exposes app
 * wide configuration parameters
 */
let config = { baseUrl: 'not-set' }

if (process.env.RAILS_ENV === 'development') {
  config = { baseUrl: 'http://localhost:3000/api' }
} else if (process.env.RAILS_ENV === 'staging') {
  config = { baseUrl: 'https://staging.thenextcloset.com/api' }
} else if (process.env.RAILS_ENV === 'production') {
  config = { baseUrl: 'https://thenextcloset.com/api' }
}

export default config
