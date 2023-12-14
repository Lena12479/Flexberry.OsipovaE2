import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-osipova-e2-заказ', 'Unit | Model | i-i-s-osipova-e2-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-osipova-e2-акт-приемки',
    'model:i-i-s-osipova-e2-заказ',
    'model:i-i-s-osipova-e2-материал',
    'model:i-i-s-osipova-e2-номенклатура',
    'model:i-i-s-osipova-e2-отпуск-материала',
    'model:i-i-s-osipova-e2-поставщики',
    'model:i-i-s-osipova-e2-склад',
    'model:i-i-s-osipova-e2-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
