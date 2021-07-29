goog.module('org.pepstock.charba.client.geo.ColorAxis.ColorAxisRemappedOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ControllerMapperFactory = goog.require('org.pepstock.charba.client.controllers.ControllerMapperFactory$impl');

let ChoroplethChart = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethChart$impl');
let ColorAxisMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.ColorAxisMapper$impl');

/**
 * @extends {ControllerMapperFactory<ColorAxisMapper>}
 */
class ColorAxisRemappedOptionsFactory extends ControllerMapperFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ColorAxisRemappedOptionsFactory} */
 static $create__() {
  ColorAxisRemappedOptionsFactory.$clinit();
  let $instance = new ColorAxisRemappedOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_geo_ColorAxis_ColorAxisRemappedOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_ColorAxis_ColorAxisRemappedOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_controllers_ControllerMapperFactory__org_pepstock_charba_client_controllers_ControllerType(ChoroplethChart.f_CONTROLLER_TYPE__org_pepstock_charba_client_geo_ChoroplethChart);
 }
 /** @override @return {ColorAxisMapper} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return ColorAxisMapper.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 static $clinit() {
  ColorAxisRemappedOptionsFactory.$clinit = () =>{};
  ColorAxisRemappedOptionsFactory.$loadModules();
  ControllerMapperFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColorAxisRemappedOptionsFactory;
 }
 
 static $loadModules() {
  ChoroplethChart = goog.module.get('org.pepstock.charba.client.geo.ChoroplethChart$impl');
  ColorAxisMapper = goog.module.get('org.pepstock.charba.client.geo.ColorAxisMapper$impl');
 }
}
$Util.$setClassMetadata(ColorAxisRemappedOptionsFactory, "org.pepstock.charba.client.geo.ColorAxis$ColorAxisRemappedOptionsFactory");

exports = ColorAxisRemappedOptionsFactory;

//# sourceMappingURL=ColorAxis$ColorAxisRemappedOptionsFactory.js.map
