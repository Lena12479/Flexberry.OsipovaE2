import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-osipova-e2-номенклатура', 'Unit | Serializer | i-i-s-osipova-e2-номенклатура', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-osipova-e2-номенклатура',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
