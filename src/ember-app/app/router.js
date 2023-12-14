import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-osipova-e2-акт-приемки-l');
  this.route('i-i-s-osipova-e2-акт-приемки-e',
  { path: 'i-i-s-osipova-e2-акт-приемки-e/:id' });
  this.route('i-i-s-osipova-e2-акт-приемки-e.new',
  { path: 'i-i-s-osipova-e2-акт-приемки-e/new' });
  this.route('i-i-s-osipova-e2-заказ-l');
  this.route('i-i-s-osipova-e2-заказ-e',
  { path: 'i-i-s-osipova-e2-заказ-e/:id' });
  this.route('i-i-s-osipova-e2-заказ-e.new',
  { path: 'i-i-s-osipova-e2-заказ-e/new' });
  this.route('i-i-s-osipova-e2-номенклатура-l');
  this.route('i-i-s-osipova-e2-номенклатура-e',
  { path: 'i-i-s-osipova-e2-номенклатура-e/:id' });
  this.route('i-i-s-osipova-e2-номенклатура-e.new',
  { path: 'i-i-s-osipova-e2-номенклатура-e/new' });
  this.route('i-i-s-osipova-e2-отпуск-материала-l');
  this.route('i-i-s-osipova-e2-отпуск-материала-e',
  { path: 'i-i-s-osipova-e2-отпуск-материала-e/:id' });
  this.route('i-i-s-osipova-e2-отпуск-материала-e.new',
  { path: 'i-i-s-osipova-e2-отпуск-материала-e/new' });
  this.route('i-i-s-osipova-e2-поставщики-l');
  this.route('i-i-s-osipova-e2-поставщики-e',
  { path: 'i-i-s-osipova-e2-поставщики-e/:id' });
  this.route('i-i-s-osipova-e2-поставщики-e.new',
  { path: 'i-i-s-osipova-e2-поставщики-e/new' });
  this.route('i-i-s-osipova-e2-склад-l');
  this.route('i-i-s-osipova-e2-склад-e',
  { path: 'i-i-s-osipova-e2-склад-e/:id' });
  this.route('i-i-s-osipova-e2-склад-e.new',
  { path: 'i-i-s-osipova-e2-склад-e/new' });
  this.route('i-i-s-osipova-e2-сотрудники-l');
  this.route('i-i-s-osipova-e2-сотрудники-e',
  { path: 'i-i-s-osipova-e2-сотрудники-e/:id' });
  this.route('i-i-s-osipova-e2-сотрудники-e.new',
  { path: 'i-i-s-osipova-e2-сотрудники-e/new' });
});

export default Router;
