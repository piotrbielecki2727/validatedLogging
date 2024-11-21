export const TRANSLATIONS = {
  LOGGING: 'logging',
  LOGGING_SUBTITLE: 'loggingSubtitle',
  YOUR_EMAIL: 'yourEmail',
  EMAIL_PLACEHOLDER: 'emailPlaceholder',
  YOUR_PASSWORD: 'yourPassword',
  PASSWORD_PLACEHOLDER: 'passwordPlaceholder',
  LOGIN_BUTTON_TEXT: 'loginButtonText',
  FORGOT_PASSWORD: 'forgotPassword',
  SUCCESS_LOGIN: 'successLogin',
  SUCCESS_LOGOUT: 'successLogout',
  WRONG_CREDENTIALS: 'wrongCredentials',
  INVALID_EMAIL: 'invalidEmail',
  INVALID_PASSWORD: 'invalidPassword',
  USERS_TITLE: 'usersTitle',
  USERS_SUBTITLE: 'usersSubtitle',
  EMPTY_RESULTS: 'emptyResults',
  SEARCH: 'search',
  RESET_ALL_FILTERS: 'resetAllFilters',
  COLUMNS: {
    NAME: 'columns.name',
    USERNAME: 'columns.username',
    EMAIL: 'columns.email',
    PHONE: 'columns.phone',
  },
  FILTERS: {
    NAME: 'filters.name',
    USERNAME: 'filters.username',
    EMAIL: 'filters.email',
    PHONE: 'filters.phone',
  },
  LOGOUT: 'logout',
  LOADING: 'loading',
  EXPAND_TABLE: 'expand_table',
  COLLAPSE_TABLE: 'collapse_table',
} as const;

export type TranslationKey = (typeof TRANSLATIONS)[keyof typeof TRANSLATIONS];
