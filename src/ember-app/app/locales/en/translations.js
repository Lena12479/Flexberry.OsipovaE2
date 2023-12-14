import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISOsipovaE2АктПриемкиLForm from './forms/i-i-s-osipova-e2-акт-приемки-l';
import IISOsipovaE2ЗаказLForm from './forms/i-i-s-osipova-e2-заказ-l';
import IISOsipovaE2НоменклатураLForm from './forms/i-i-s-osipova-e2-номенклатура-l';
import IISOsipovaE2ОтпускМатериалаLForm from './forms/i-i-s-osipova-e2-отпуск-материала-l';
import IISOsipovaE2ПоставщикиLForm from './forms/i-i-s-osipova-e2-поставщики-l';
import IISOsipovaE2СкладLForm from './forms/i-i-s-osipova-e2-склад-l';
import IISOsipovaE2СотрудникиLForm from './forms/i-i-s-osipova-e2-сотрудники-l';
import IISOsipovaE2АктПриемкиEForm from './forms/i-i-s-osipova-e2-акт-приемки-e';
import IISOsipovaE2ЗаказEForm from './forms/i-i-s-osipova-e2-заказ-e';
import IISOsipovaE2НоменклатураEForm from './forms/i-i-s-osipova-e2-номенклатура-e';
import IISOsipovaE2ОтпускМатериалаEForm from './forms/i-i-s-osipova-e2-отпуск-материала-e';
import IISOsipovaE2ПоставщикиEForm from './forms/i-i-s-osipova-e2-поставщики-e';
import IISOsipovaE2СкладEForm from './forms/i-i-s-osipova-e2-склад-e';
import IISOsipovaE2СотрудникиEForm from './forms/i-i-s-osipova-e2-сотрудники-e';
import IISOsipovaE2АктПриемкиModel from './models/i-i-s-osipova-e2-акт-приемки';
import IISOsipovaE2ЗаказModel from './models/i-i-s-osipova-e2-заказ';
import IISOsipovaE2МатериалModel from './models/i-i-s-osipova-e2-материал';
import IISOsipovaE2НоменклатураModel from './models/i-i-s-osipova-e2-номенклатура';
import IISOsipovaE2ОтпускМатериалаModel from './models/i-i-s-osipova-e2-отпуск-материала';
import IISOsipovaE2ПоставщикиModel from './models/i-i-s-osipova-e2-поставщики';
import IISOsipovaE2СкладModel from './models/i-i-s-osipova-e2-склад';
import IISOsipovaE2СотрудникиModel from './models/i-i-s-osipova-e2-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-osipova-e2-акт-приемки': IISOsipovaE2АктПриемкиModel,
    'i-i-s-osipova-e2-заказ': IISOsipovaE2ЗаказModel,
    'i-i-s-osipova-e2-материал': IISOsipovaE2МатериалModel,
    'i-i-s-osipova-e2-номенклатура': IISOsipovaE2НоменклатураModel,
    'i-i-s-osipova-e2-отпуск-материала': IISOsipovaE2ОтпускМатериалаModel,
    'i-i-s-osipova-e2-поставщики': IISOsipovaE2ПоставщикиModel,
    'i-i-s-osipova-e2-склад': IISOsipovaE2СкладModel,
    'i-i-s-osipova-e2-сотрудники': IISOsipovaE2СотрудникиModel
  },

  'application-name': 'Osipova e2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Osipova e2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Osipova e2',
          title: 'Osipova e2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'акт-приемки': {
          caption: 'Акт приемки',
          title: 'Акт приемки',
          'i-i-s-osipova-e2-акт-приемки-l': {
            caption: 'Акт приемки',
            title: ''
          }
        },
        заказы: {
          caption: 'Заказы',
          title: 'Заказы',
          'i-i-s-osipova-e2-отпуск-материала-l': {
            caption: 'Отпуск материала',
            title: ''
          },
          'i-i-s-osipova-e2-заказ-l': {
            caption: 'Заказ',
            title: ''
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-osipova-e2-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-osipova-e2-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          },
          'i-i-s-osipova-e2-склад-l': {
            caption: 'Склад',
            title: ''
          },
          'i-i-s-osipova-e2-поставщики-l': {
            caption: 'Поставщики',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-osipova-e2-акт-приемки-l': IISOsipovaE2АктПриемкиLForm,
    'i-i-s-osipova-e2-заказ-l': IISOsipovaE2ЗаказLForm,
    'i-i-s-osipova-e2-номенклатура-l': IISOsipovaE2НоменклатураLForm,
    'i-i-s-osipova-e2-отпуск-материала-l': IISOsipovaE2ОтпускМатериалаLForm,
    'i-i-s-osipova-e2-поставщики-l': IISOsipovaE2ПоставщикиLForm,
    'i-i-s-osipova-e2-склад-l': IISOsipovaE2СкладLForm,
    'i-i-s-osipova-e2-сотрудники-l': IISOsipovaE2СотрудникиLForm,
    'i-i-s-osipova-e2-акт-приемки-e': IISOsipovaE2АктПриемкиEForm,
    'i-i-s-osipova-e2-заказ-e': IISOsipovaE2ЗаказEForm,
    'i-i-s-osipova-e2-номенклатура-e': IISOsipovaE2НоменклатураEForm,
    'i-i-s-osipova-e2-отпуск-материала-e': IISOsipovaE2ОтпускМатериалаEForm,
    'i-i-s-osipova-e2-поставщики-e': IISOsipovaE2ПоставщикиEForm,
    'i-i-s-osipova-e2-склад-e': IISOsipovaE2СкладEForm,
    'i-i-s-osipova-e2-сотрудники-e': IISOsipovaE2СотрудникиEForm
  },

});

export default translations;
