goog.module('org.pepstock.charba.client.geo.SizeAxis.SizeAxisRemappedOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ControllerMapperFactory = goog.require('org.pepstock.charba.client.controllers.ControllerMapperFactory$impl');

let BubbleMapChart = goog.forwardDeclare('org.pepstock.charba.client.geo.BubbleMapChart$impl');
let SizeAxisMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.SizeAxisMapper$impl');

/**
 * @extends {ControllerMapperFactory<SizeAxisMapper>}
 */
class SizeAxisRemappedOptionsFactory extends ControllerMapperFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SizeAxisRemappedOptionsFactory} */
 static $create__() {
  SizeAxisRemappedOptionsFactory.$clinit();
  let $instance = new SizeAxisRemappedOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_geo_SizeAxis_SizeAxisRemappedOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_SizeAxis_SizeAxisRemappedOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_controllers_ControllerMapperFactory__org_pepstock_charba_client_controllers_ControllerType(BubbleMapChart.f_CONTROLLER_TYPE__org_pepstock_charba_client_geo_BubbleMapChart);
 }
 /** @override @return {SizeAxisMapper} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return SizeAxisMapper.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 static $clinit() {
  SizeAxisRemappedOptionsFactory.$clinit = () =>{};
  SizeAxisRemappedOptionsFactory.$loadModules();
  ControllerMapperFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SizeAxisRemappedOptionsFactory;
 }
 
 static $loadModules() {
  BubbleMapChart = goog.module.get('org.pepstock.charba.client.geo.BubbleMapChart$impl');
  SizeAxisMapper = goog.module.get('org.pepstock.charba.client.geo.SizeAxisMapper$impl');
 }
}
$Util.$setClassMetadata(SizeAxisRemappedOptionsFactory, "org.pepstock.charba.client.geo.SizeAxis$SizeAxisRemappedOptionsFactory");

exports = SizeAxisRemappedOptionsFactory;

//# sourceMappingURL=SizeAxis$SizeAxisRemappedOptionsFactory.js.map
