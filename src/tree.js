var TREE = {
  '.next-nav': {
    '.next-nav__panel--primary': {
      '[data-nav-section]': {
        '.next-nav__text': 'general.sections.$data-nav-section'
      },

      '.next-nav__heading-item .next-nav__text': 'general.sections.$text',
      '#primary-nav-search-input': 'general.search.placeholder',
    },

    '.next-nav__panel--secondary': {
      '[data-nav-section]': {
        '.next-nav__item--header h3': 'general.sections.$data-nav-section',
        '[data-nav-sub-item]': 'general.sections.$data-nav-sub-item'
      },
    }
  },

  '.ui-feed': {
    '[data-handle]': {
      '.home-card-content__title h3': 'home.cards.$data-handle.title',
      '[data-button-id]': 'home.cards.$data-handle.buttons.$data-button-id',
    }
  },

  '.btn': 'general.buttons.$text',

  '.page': {
    'header .ui-title-bar': {
      '.btn': '$page.buttons.$text',
      '.ui-breadcrumbs .ui-breadcrumb__item': 'general.sections.$text',
      '.ui-title-bar__title': 'general.sections.$text',
    },

    '.next-tab__list .next-tab': '$page.table.tabs.$text',
    'table th span': '$page.table.columns.$text',
    'span.badge': '$page.table.badges.$text',
    '.btn': '$page.buttons.$text',
    '.table-filter-container input[name=query]': 'general.search.placeholder'
  },

  '.page-home-index': {
    '.home-today-feature': {
      '.home-today-feature__label': 'home.today-features.$text',
    },

    '.next-card--home-notifications': {
      '[data-button-id]': 'general.buttons.$data-button-id'
    }
  },
}
