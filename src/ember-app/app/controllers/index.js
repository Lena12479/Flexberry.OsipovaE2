import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.акт-приемки.caption'),
          title: i18n.t('forms.application.sitemap.акт-приемки.title'),
          children: [{
            link: 'i-i-s-osipova-e2-акт-приемки-l',
            caption: i18n.t('forms.application.sitemap.акт-приемки.i-i-s-osipova-e2-акт-приемки-l.caption'),
            title: i18n.t('forms.application.sitemap.акт-приемки.i-i-s-osipova-e2-акт-приемки-l.title'),
            icon: 'address card',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.заказы.caption'),
          title: i18n.t('forms.application.sitemap.заказы.title'),
          children: [{
            link: 'i-i-s-osipova-e2-отпуск-материала-l',
            caption: i18n.t('forms.application.sitemap.заказы.i-i-s-osipova-e2-отпуск-материала-l.caption'),
            title: i18n.t('forms.application.sitemap.заказы.i-i-s-osipova-e2-отпуск-материала-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-osipova-e2-заказ-l',
            caption: i18n.t('forms.application.sitemap.заказы.i-i-s-osipova-e2-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.заказы.i-i-s-osipova-e2-заказ-l.title'),
            icon: 'edit',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-osipova-e2-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-osipova-e2-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-osipova-e2-сотрудники-l.title'),
            icon: 'folder',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-osipova-e2-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-osipova-e2-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-osipova-e2-номенклатура-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-osipova-e2-склад-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-osipova-e2-склад-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-osipova-e2-склад-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-osipova-e2-поставщики-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-osipova-e2-поставщики-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-osipova-e2-поставщики-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})