export const SELECT_LANG = 'SELECT_LANG';

export const selectLanguage = langCode => ({
  type: SELECT_LANG,
  lang: langCode,
});
