import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  номенклатура: DS.belongsTo('i-i-s-osipova-e2-номенклатура', { inverse: null, async: false }),
  склад: DS.belongsTo('i-i-s-osipova-e2-склад', { inverse: null, async: false }),
  актПриемки: DS.belongsTo('i-i-s-osipova-e2-акт-приемки', { inverse: 'материал', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-osipova-e2-материал.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-osipova-e2-материал.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склад: {
    descriptionKey: 'models.i-i-s-osipova-e2-материал.validations.склад.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  актПриемки: {
    descriptionKey: 'models.i-i-s-osipova-e2-материал.validations.актПриемки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МатериалE', 'i-i-s-osipova-e2-материал', {
    номенклатура: belongsTo('i-i-s-osipova-e2-номенклатура', 'Номенклатура', {
      материал: attr('Материал', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'материал' }),
    количество: attr('Количество', { index: 2 }),
    склад: belongsTo('i-i-s-osipova-e2-склад', 'Склад', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' })
  });
};
