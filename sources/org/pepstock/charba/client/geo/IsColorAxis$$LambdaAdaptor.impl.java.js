goog.module('org.pepstock.charba.client.geo.IsColorAxis.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsColorAxis = goog.require('org.pepstock.charba.client.geo.IsColorAxis$impl');

let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ColorAxisMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.ColorAxisMapper$impl');
let IsLegendAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.IsLegendAxis$impl');
let Legend = goog.forwardDeclare('org.pepstock.charba.client.geo.Legend$impl');
let InterpolateCallback = goog.forwardDeclare('org.pepstock.charba.client.geo.callbacks.InterpolateCallback$impl');
let Interpolate = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Interpolate$impl');

/**
 * @implements {IsColorAxis}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():ColorAxisMapper */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():ColorAxisMapper}*/
  this.f_fn__org_pepstock_charba_client_geo_IsColorAxis_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_geo_IsColorAxis_$LambdaAdaptor__org_pepstock_charba_client_geo_IsColorAxis_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_geo_IsColorAxis_$LambdaAdaptor__org_pepstock_charba_client_geo_IsColorAxis_$JsFunction(/** ?function():ColorAxisMapper */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_geo_IsColorAxis_$LambdaAdaptor = fn;
 }
 /** @override @return {ColorAxisMapper} */
 m_getMapper__() {
  let /** ?function():ColorAxisMapper */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_geo_IsColorAxis_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {Legend} */
 m_getLegend__() {
  return IsLegendAxis.m_getLegend__$default__org_pepstock_charba_client_geo_IsLegendAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {Interpolate} */
 m_getInterpolate__() {
  return IsColorAxis.m_getInterpolate__$default__org_pepstock_charba_client_geo_IsColorAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {InterpolateCallback} */
 m_getInterpolateCallback__() {
  return IsColorAxis.m_getInterpolateCallback__$default__org_pepstock_charba_client_geo_IsColorAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_getMissingColor__() {
  return IsColorAxis.m_getMissingColor__$default__org_pepstock_charba_client_geo_IsColorAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getMissingColorAsString__() {
  return IsColorAxis.m_getMissingColorAsString__$default__org_pepstock_charba_client_geo_IsColorAxis(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getQuantize__() {
  return IsColorAxis.m_getQuantize__$default__org_pepstock_charba_client_geo_IsColorAxis(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setInterpolate__org_pepstock_charba_client_geo_enums_Interpolate(/** Interpolate */ arg0) {
  IsColorAxis.m_setInterpolate__$default__org_pepstock_charba_client_geo_IsColorAxis__org_pepstock_charba_client_geo_enums_Interpolate(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setInterpolate__org_pepstock_charba_client_geo_callbacks_InterpolateCallback(/** InterpolateCallback */ arg0) {
  IsColorAxis.m_setInterpolate__$default__org_pepstock_charba_client_geo_IsColorAxis__org_pepstock_charba_client_geo_callbacks_InterpolateCallback(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMissingColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ arg0) {
  IsColorAxis.m_setMissingColor__$default__org_pepstock_charba_client_geo_IsColorAxis__org_pepstock_charba_client_colors_IsColor(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMissingColor__java_lang_String(/** ?string */ arg0) {
  IsColorAxis.m_setMissingColor__$default__org_pepstock_charba_client_geo_IsColorAxis__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setQuantize__int(/** number */ arg0) {
  IsColorAxis.m_setQuantize__$default__org_pepstock_charba_client_geo_IsColorAxis__int(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  IsColorAxis.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {
  IsLegendAxis = goog.module.get('org.pepstock.charba.client.geo.IsLegendAxis$impl');
 }
}
IsColorAxis.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.geo.IsColorAxis$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsColorAxis$$LambdaAdaptor.js.map
