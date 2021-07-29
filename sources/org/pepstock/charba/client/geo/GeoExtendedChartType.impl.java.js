goog.module('org.pepstock.charba.client.geo.GeoExtendedChartType$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Type = goog.require('org.pepstock.charba.client.Type$impl');

let ScaleType = goog.forwardDeclare('org.pepstock.charba.client.ScaleType$impl');

/**
 * @implements {Type}
 */
class GeoExtendedChartType extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!GeoExtendedChartType} */
 static $create__() {
  GeoExtendedChartType.$clinit();
  let $instance = new GeoExtendedChartType();
  $instance.$ctor__org_pepstock_charba_client_geo_GeoExtendedChartType__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_GeoExtendedChartType__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_value__() {
  return GeoExtendedChartType.f_TYPE__org_pepstock_charba_client_geo_GeoExtendedChartType_;
 }
 /** @override @return {ScaleType} */
 m_scaleType__() {
  return ScaleType.f_MULTI__org_pepstock_charba_client_ScaleType;
 }
 
 static $clinit() {
  GeoExtendedChartType.$clinit = () =>{};
  GeoExtendedChartType.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GeoExtendedChartType;
 }
 
 static $loadModules() {
  ScaleType = goog.module.get('org.pepstock.charba.client.ScaleType$impl');
 }
}
/**@const {?string}*/
GeoExtendedChartType.f_TYPE__org_pepstock_charba_client_geo_GeoExtendedChartType_ = "geo";
Type.$markImplementor(GeoExtendedChartType);
$Util.$setClassMetadata(GeoExtendedChartType, "org.pepstock.charba.client.geo.GeoExtendedChartType");

exports = GeoExtendedChartType;

//# sourceMappingURL=GeoExtendedChartType.js.map
