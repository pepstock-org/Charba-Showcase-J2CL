goog.module('org.pepstock.charba.client.geo.JsGeoHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let ChoroplethChart = goog.forwardDeclare('org.pepstock.charba.client.geo.ChoroplethChart$impl');
let TopoJson = goog.forwardDeclare('org.pepstock.charba.client.geo.TopoJson$impl');
let ResourcesType = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourcesType$impl');

class JsGeoHelper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JsGeoHelper} */
 static $create__() {
  let $instance = new JsGeoHelper();
  $instance.$ctor__org_pepstock_charba_client_geo_JsGeoHelper__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_JsGeoHelper__() {
  this.$ctor__java_lang_Object__();
  JsHelper.m_get__();
  ResourcesType.m_getResources__().m_inject__();
  ChoroplethChart.f_CONTROLLER_TYPE__org_pepstock_charba_client_geo_ChoroplethChart.m_register__();
 }
 /** @return {JsGeoHelper} */
 static m_get__() {
  JsGeoHelper.$clinit();
  return JsGeoHelper.f_INSTANCE__org_pepstock_charba_client_geo_JsGeoHelper_;
 }
 /** @return {Array} */
 m_features__org_pepstock_charba_client_geo_TopoJson__java_lang_String_$pp_org_pepstock_charba_client_geo(/** TopoJson */ topojson, /** ?string */ featureProperty) {
  if (!$Equality.$same(topojson, null) && !$Equality.$same(featureProperty, null)) {
   return CharbaJsGeoHelper.features(topojson.m_nativeObject___$pp_org_pepstock_charba_client_geo(), featureProperty);
  }
  return null;
 }
 
 static $clinit() {
  JsGeoHelper.$clinit = () =>{};
  JsGeoHelper.$loadModules();
  j_l_Object.$clinit();
  JsGeoHelper.f_INSTANCE__org_pepstock_charba_client_geo_JsGeoHelper_ = JsGeoHelper.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsGeoHelper;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  ChoroplethChart = goog.module.get('org.pepstock.charba.client.geo.ChoroplethChart$impl');
  ResourcesType = goog.module.get('org.pepstock.charba.client.resources.ResourcesType$impl');
 }
}
/**@type {JsGeoHelper}*/
JsGeoHelper.f_INSTANCE__org_pepstock_charba_client_geo_JsGeoHelper_;
$Util.$setClassMetadata(JsGeoHelper, "org.pepstock.charba.client.geo.JsGeoHelper");

exports = JsGeoHelper;

//# sourceMappingURL=JsGeoHelper.js.map
