import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодМатериала: DS.attr('number'),
  материал: DS.attr('string'),
  цена: DS.attr('decimal')
});

export let ValidationRules = {
  кодМатериала: {
    descriptionKey: 'models.i-i-s-osipova-e2-номенклатура.validations.кодМатериала.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  материал: {
    descriptionKey: 'models.i-i-s-osipova-e2-номенклатура.validations.материал.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-osipova-e2-номенклатура.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НоменклатураE', 'i-i-s-osipova-e2-номенклатура', {
    кодМатериала: attr('Код материала', { index: 0 }),
    материал: attr('Материал', { index: 1 }),
    цена: attr('Цена', { index: 2 })
  });

  modelClass.defineProjection('НоменклатураL', 'i-i-s-osipova-e2-номенклатура', {
    кодМатериала: attr('Код материала', { index: 0 }),
    материал: attr('Материал', { index: 1 }),
    цена: attr('Цена', { index: 2 })
  });
};
