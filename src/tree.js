var TREE = {
  '.ui-nav': {
    '.ui-nav__item': {
      '.ui-nav__label': 'general.sections.$text',
    },

    '.ui-subheading': 'general.sections.$text',
  },

  '.ui-feed': {
    '[data-handle]': {
      '.home-card-content__message': 'home-index.cards.$data-handle',
    }
  },

  '.modal': {
    '#ModalTitle': 'modal.titles.$text',
  },

  '.btn': 'general.buttons.$text',
  '.btn.btn-destroy': 'general.buttons.destroy',
  '.btn.obj-filter-btn': 'general.buttons.filter',

  '.page': {
    'header .ui-title-bar': {
      '.ui-breadcrumbs .ui-breadcrumb__item': 'general.sections.$text',
      '.ui-title-bar__title': 'general.sections.$text',
    },

    '.ui-empty-state': {
      '.ui-empty-state__title': '$page.empty.title',
      '.ui-empty-state__subtitle': '$page.empty.subtitle',
    },

    '.ui-card#customer-card': {
      '.ui-heading': 'shared.customer-card.$text',
      '.ui-subheading': 'shared.customer-card.$text',
      'p': 'shared.customer-card.$text',
      'ul li': 'shared.customer-card.$text',
      'a': 'shared.customer-card.$text',
    },

    '.ui-heading': '$page.titles.$text',
    '.ui-subheading': '$page.titles.$text',
    '.next-heading': '$page.titles.$text',
    '.next-tab__list .next-tab': '$page.table.tabs.$text',
    'table th span': '$page.table.columns.$text',
    'span.badge': '$page.table.badges.$text',
    '.btn': '$page.buttons.$text',
    'p': '$page.texts.$text',
    '.next-label': '$page.texts.$text',
    '.ui-popover .next-list__item': '$page.buttons.$text',
    '.table-filter-container': {
      'input[name=query]': 'general.search.placeholder',
      '.ui-select option': '$page.filters.$text',
    },
  },

  '.page-home-index': {
    '.home-today-feature': {
      '.home-today-feature__label': 'home-index.today-features.$text',
    },
  },
}
