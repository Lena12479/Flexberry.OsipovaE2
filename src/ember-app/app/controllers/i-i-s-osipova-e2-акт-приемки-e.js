import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-osipova-e2-акт-приемки-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-osipova-e2-материал+номенклатура':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'материал',
            required: true,
            relationName: 'номенклатура',
            projection: 'НоменклатураL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-osipova-e2-материал+склад':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'склад',
            projection: 'СкладL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
