import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодСклада: DS.attr('number'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  кодСклада: {
    descriptionKey: 'models.i-i-s-osipova-e2-склад.validations.кодСклада.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-osipova-e2-склад.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СкладE', 'i-i-s-osipova-e2-склад', {
    кодСклада: attr('Код склада', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });

  modelClass.defineProjection('СкладL', 'i-i-s-osipova-e2-склад', {
    кодСклада: attr('Код склада', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });
};
