import { Serializer as СкладSerializer } from
  '../mixins/regenerated/serializers/i-i-s-osipova-e2-склад';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СкладSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
