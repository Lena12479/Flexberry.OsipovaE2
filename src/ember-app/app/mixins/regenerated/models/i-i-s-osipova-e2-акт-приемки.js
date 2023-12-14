import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПриемки: DS.attr('date'),
  номерАкта: DS.attr('number'),
  поставщики: DS.belongsTo('i-i-s-osipova-e2-поставщики', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-osipova-e2-сотрудники', { inverse: null, async: false }),
  материал: DS.hasMany('i-i-s-osipova-e2-материал', { inverse: 'актПриемки', async: false })
});

export let ValidationRules = {
  датаПриемки: {
    descriptionKey: 'models.i-i-s-osipova-e2-акт-приемки.validations.датаПриемки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерАкта: {
    descriptionKey: 'models.i-i-s-osipova-e2-акт-приемки.validations.номерАкта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  поставщики: {
    descriptionKey: 'models.i-i-s-osipova-e2-акт-приемки.validations.поставщики.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-osipova-e2-акт-приемки.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  материал: {
    descriptionKey: 'models.i-i-s-osipova-e2-акт-приемки.validations.материал.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АктПриемкиE', 'i-i-s-osipova-e2-акт-приемки', {
    номерАкта: attr('Номер акта', { index: 0 }),
    датаПриемки: attr('Дата приемки', { index: 1 }),
    поставщики: belongsTo('i-i-s-osipova-e2-поставщики', 'Поставщики', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    сотрудники: belongsTo('i-i-s-osipova-e2-сотрудники', 'Сотрудники', {
      фИОсотрудника: attr('Ф и осотрудника', { index: 5, hidden: true }),
      должность: attr('Должность', { index: 6 })
    }, { index: 4, displayMemberPath: 'фИОсотрудника' }),
    материал: hasMany('i-i-s-osipova-e2-материал', 'Материал', {
      номенклатура: belongsTo('i-i-s-osipova-e2-номенклатура', 'Номенклатура', {
        материал: attr('Материал', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'материал' }),
      количество: attr('Количество', { index: 2 }),
      склад: belongsTo('i-i-s-osipova-e2-склад', 'Склад', {
        наименование: attr('Наименование', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('АктПриемкиL', 'i-i-s-osipova-e2-акт-приемки', {
    номерАкта: attr('Номер акта', { index: 0 }),
    датаПриемки: attr('Дата приемки', { index: 1 }),
    поставщики: belongsTo('i-i-s-osipova-e2-поставщики', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-osipova-e2-сотрудники', 'Ф и осотрудника', {
      фИОсотрудника: attr('Ф и осотрудника', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
