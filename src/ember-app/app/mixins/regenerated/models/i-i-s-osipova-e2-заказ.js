import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адресЗаказа: DS.attr('string'),
  количество: DS.attr('number'),
  номерЗаказа: DS.attr('number'),
  способДоставки: DS.attr('string'),
  фИОЗаказчика: DS.attr('string'),
  номенклатура: DS.belongsTo('i-i-s-osipova-e2-номенклатура', { inverse: null, async: false })
});

export let ValidationRules = {
  адресЗаказа: {
    descriptionKey: 'models.i-i-s-osipova-e2-заказ.validations.адресЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-osipova-e2-заказ.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-osipova-e2-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  способДоставки: {
    descriptionKey: 'models.i-i-s-osipova-e2-заказ.validations.способДоставки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИОЗаказчика: {
    descriptionKey: 'models.i-i-s-osipova-e2-заказ.validations.фИОЗаказчика.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-osipova-e2-заказ.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-osipova-e2-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    фИОЗаказчика: attr('Ф и о заказчика', { index: 1 }),
    адресЗаказа: attr('Адрес заказа', { index: 2 }),
    способДоставки: attr('Способ доставки', { index: 3 }),
    количество: attr('Количество', { index: 4 }),
    номенклатура: belongsTo('i-i-s-osipova-e2-номенклатура', 'Номенклатура', {
      материал: attr('Материал', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'материал' })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-osipova-e2-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    фИОЗаказчика: attr('Ф и о заказчика', { index: 1 }),
    адресЗаказа: attr('Адрес заказа', { index: 2 }),
    способДоставки: attr('Способ доставки', { index: 3 }),
    количество: attr('Количество', { index: 4 }),
    номенклатура: belongsTo('i-i-s-osipova-e2-номенклатура', 'Материал', {
      материал: attr('Материал', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
