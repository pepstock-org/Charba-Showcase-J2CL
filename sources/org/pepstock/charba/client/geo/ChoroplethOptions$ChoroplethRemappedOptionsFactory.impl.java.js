goog.module('org.pepstock.charba.client.geo.ChoroplethOptions.ChoroplethRemappedOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ControllerMapperFactory = goog.require('org.pepstock.charba.client.controllers.ControllerMapperFactory$impl');

let ChoroplethChart = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethChart$impl');
let ChoroplethOptions = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethOptions$impl');
let ChoroplethOptionsMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethOptionsMapper$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ControllerMapperFactory<ChoroplethOptionsMapper>}
 */
class ChoroplethRemappedOptionsFactory extends ControllerMapperFactory {
 /** @protected */
 constructor() {
  super();
  /**@type {ChoroplethOptions}*/
  this.f_options__org_pepstock_charba_client_geo_ChoroplethOptions_ChoroplethRemappedOptionsFactory_;
 }
 /** @return {!ChoroplethRemappedOptionsFactory} */
 static $create__org_pepstock_charba_client_geo_ChoroplethOptions(/** ChoroplethOptions */ options) {
  ChoroplethRemappedOptionsFactory.$clinit();
  let $instance = new ChoroplethRemappedOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_geo_ChoroplethOptions_ChoroplethRemappedOptionsFactory__org_pepstock_charba_client_geo_ChoroplethOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_ChoroplethOptions_ChoroplethRemappedOptionsFactory__org_pepstock_charba_client_geo_ChoroplethOptions(/** ChoroplethOptions */ options) {
  this.$ctor__org_pepstock_charba_client_controllers_ControllerMapperFactory__org_pepstock_charba_client_controllers_ControllerType(ChoroplethChart.f_CONTROLLER_TYPE__org_pepstock_charba_client_geo_ChoroplethChart);
  this.f_options__org_pepstock_charba_client_geo_ChoroplethOptions_ChoroplethRemappedOptionsFactory_ = options;
 }
 /** @override @return {ChoroplethOptionsMapper} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return ChoroplethOptionsMapper.$create__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_commons_NativeObject(/**@type {ExtendedOptions}*/ ($Casts.$to(this.f_options__org_pepstock_charba_client_geo_ChoroplethOptions_ChoroplethRemappedOptionsFactory_.m_getConfiguration__(), ExtendedOptions)), nativeObject);
 }
 
 static $clinit() {
  ChoroplethRemappedOptionsFactory.$clinit = () =>{};
  ChoroplethRemappedOptionsFactory.$loadModules();
  ControllerMapperFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChoroplethRemappedOptionsFactory;
 }
 
 static $loadModules() {
  ChoroplethChart = goog.module.get('org.pepstock.charba.client.geo.ChoroplethChart$impl');
  ChoroplethOptionsMapper = goog.module.get('org.pepstock.charba.client.geo.ChoroplethOptionsMapper$impl');
  ExtendedOptions = goog.module.get('org.pepstock.charba.client.options.ExtendedOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ChoroplethRemappedOptionsFactory, "org.pepstock.charba.client.geo.ChoroplethOptions$ChoroplethRemappedOptionsFactory");

exports = ChoroplethRemappedOptionsFactory;

//# sourceMappingURL=ChoroplethOptions$ChoroplethRemappedOptionsFactory.js.map
