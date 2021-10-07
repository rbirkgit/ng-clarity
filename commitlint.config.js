const scopes = [
  'angular',
  'angular:form',
  'angular:schematics',
  'angular:datagrid',
  'angular:vertical-nav',
  'a11y',
  'accordion',
  'alert',
  'badge',
  'build',
  'button',
  'card',
  'checkbox',
  'color',
  'combobox',
  'datagrid',
  'datalist',
  'date-picker',
  'dropdown',
  'form',
  'form-group',
  'grid',
  'header',
  'i18n',
  'input',
  'label',
  'list',
  'login',
  'modal',
  'navigation',
  'pagination',
  'password',
  'progress-bar',
  'radio',
  'schematics',
  'select',
  'sidenav',
  'signpost',
  'spinner',
  'stack-view',
  'stepper',
  'table',
  'tabs',
  'textarea',
  'timeline',
  'toggle',
  'tooltip',
  'tree-view',
  'vertical-nav',
  'wizard',
  'icons',
  'range',
  'website',
  'panel',
];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', scopes],
    'header-max-length': [2, 'always', 100],
  },
};
