goog.module('org.pepstock.charba.client.geo.BubbleMapOptions.BubbleMapRemappedOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ControllerMapperFactory = goog.require('org.pepstock.charba.client.controllers.ControllerMapperFactory$impl');

let BubbleMapChart = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapChart$impl');
let BubbleMapOptions = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapOptions$impl');
let BubbleMapOptionsMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapOptionsMapper$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ControllerMapperFactory<BubbleMapOptionsMapper>}
 */
class BubbleMapRemappedOptionsFactory extends ControllerMapperFactory {
 /** @protected */
 constructor() {
  super();
  /**@type {BubbleMapOptions}*/
  this.f_options__org_pepstock_charba_client_geo_BubbleMapOptions_BubbleMapRemappedOptionsFactory_;
 }
 /** @return {!BubbleMapRemappedOptionsFactory} */
 static $create__org_pepstock_charba_client_geo_BubbleMapOptions(/** BubbleMapOptions */ options) {
  BubbleMapRemappedOptionsFactory.$clinit();
  let $instance = new BubbleMapRemappedOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_geo_BubbleMapOptions_BubbleMapRemappedOptionsFactory__org_pepstock_charba_client_geo_BubbleMapOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_BubbleMapOptions_BubbleMapRemappedOptionsFactory__org_pepstock_charba_client_geo_BubbleMapOptions(/** BubbleMapOptions */ options) {
  this.$ctor__org_pepstock_charba_client_controllers_ControllerMapperFactory__org_pepstock_charba_client_controllers_ControllerType(BubbleMapChart.f_CONTROLLER_TYPE__org_pepstock_charba_client_geo_BubbleMapChart);
  this.f_options__org_pepstock_charba_client_geo_BubbleMapOptions_BubbleMapRemappedOptionsFactory_ = options;
 }
 /** @override @return {BubbleMapOptionsMapper} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return BubbleMapOptionsMapper.$create__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_commons_NativeObject(/**@type {ExtendedOptions}*/ ($Casts.$to(this.f_options__org_pepstock_charba_client_geo_BubbleMapOptions_BubbleMapRemappedOptionsFactory_.m_getConfiguration__(), ExtendedOptions)), nativeObject);
 }
 
 static $clinit() {
  BubbleMapRemappedOptionsFactory.$clinit = () =>{};
  BubbleMapRemappedOptionsFactory.$loadModules();
  ControllerMapperFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BubbleMapRemappedOptionsFactory;
 }
 
 static $loadModules() {
  BubbleMapChart = goog.module.get('org.pepstock.charba.client.geo.BubbleMapChart$impl');
  BubbleMapOptionsMapper = goog.module.get('org.pepstock.charba.client.geo.BubbleMapOptionsMapper$impl');
  ExtendedOptions = goog.module.get('org.pepstock.charba.client.options.ExtendedOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(BubbleMapRemappedOptionsFactory, "org.pepstock.charba.client.geo.BubbleMapOptions$BubbleMapRemappedOptionsFactory");

exports = BubbleMapRemappedOptionsFactory;

//# sourceMappingURL=BubbleMapOptions$BubbleMapRemappedOptionsFactory.js.map
