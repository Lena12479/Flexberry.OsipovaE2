import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПроводки: DS.attr('date'),
  заказ: DS.belongsTo('i-i-s-osipova-e2-заказ', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-osipova-e2-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПроводки: {
    descriptionKey: 'models.i-i-s-osipova-e2-отпуск-материала.validations.датаПроводки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-osipova-e2-отпуск-материала.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-osipova-e2-отпуск-материала.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтпускМатериалаE', 'i-i-s-osipova-e2-отпуск-материала', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    сотрудники: belongsTo('i-i-s-osipova-e2-сотрудники', 'Сотрудники', {
      фИОсотрудника: attr('Ф и осотрудника', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИОсотрудника' }),
    заказ: belongsTo('i-i-s-osipova-e2-заказ', 'Заказ', {
      фИОЗаказчика: attr('Ф и о заказчика', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИОЗаказчика' })
  });

  modelClass.defineProjection('ОтпускМатериалаL', 'i-i-s-osipova-e2-отпуск-материала', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    сотрудники: belongsTo('i-i-s-osipova-e2-сотрудники', 'Ф и осотрудника', {
      фИОсотрудника: attr('Ф и осотрудника', { index: 1 })
    }, { index: -1, hidden: true }),
    заказ: belongsTo('i-i-s-osipova-e2-заказ', 'Ф и о заказчика', {
      фИОЗаказчика: attr('Ф и о заказчика', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
