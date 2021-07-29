goog.module('org.pepstock.charba.client.geo.IsColorAxis$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsLegendAxis = goog.require('org.pepstock.charba.client.geo.IsLegendAxis$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ColorAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.ColorAxis$impl');
let ColorAxisMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.ColorAxisMapper$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.geo.IsColorAxis.$LambdaAdaptor$impl');
let InterpolateCallback = goog.forwardDeclare('org.pepstock.charba.client.geo.callbacks.InterpolateCallback$impl');
let Interpolate = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Interpolate$impl');

/**
 * @interface
 * @extends {IsLegendAxis}
 */
class IsColorAxis {
 /** @abstract @override @return {ColorAxisMapper} */
 m_getMapper__() {}
 /** @abstract */
 m_setMissingColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ missingColor) {}
 /** @abstract */
 m_setMissingColor__java_lang_String(/** ?string */ missingColor) {}
 /** @abstract @return {?string} */
 m_getMissingColorAsString__() {}
 /** @abstract @return {IsColor} */
 m_getMissingColor__() {}
 /** @abstract */
 m_setQuantize__int(/** number */ quantize) {}
 /** @abstract @return {number} */
 m_getQuantize__() {}
 /** @abstract */
 m_setInterpolate__org_pepstock_charba_client_geo_enums_Interpolate(/** Interpolate */ interpolate) {}
 /** @abstract @return {Interpolate} */
 m_getInterpolate__() {}
 /** @abstract */
 m_setInterpolate__org_pepstock_charba_client_geo_callbacks_InterpolateCallback(/** InterpolateCallback */ interpolateCallback) {}
 /** @abstract @return {InterpolateCallback} */
 m_getInterpolateCallback__() {}
 /** @return {IsColorAxis} */
 static $adapt(/** ?function():ColorAxisMapper */ fn) {
  IsColorAxis.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setMissingColor__$default__org_pepstock_charba_client_geo_IsColorAxis__org_pepstock_charba_client_colors_IsColor(/** !IsColorAxis */ $thisArg, /** IsColor */ missingColor) {
  IsColorAxis.$clinit();
  $thisArg.m_setMissingColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(missingColor));
 }
 
 static m_setMissingColor__$default__org_pepstock_charba_client_geo_IsColorAxis__java_lang_String(/** !IsColorAxis */ $thisArg, /** ?string */ missingColor) {
  IsColorAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getMapper__(), null)) {
   $thisArg.m_getMapper__().m_setMissingColor__java_lang_String_$pp_org_pepstock_charba_client_geo(missingColor);
  }
 }
 /** @return {?string} */
 static m_getMissingColorAsString__$default__org_pepstock_charba_client_geo_IsColorAxis(/** !IsColorAxis */ $thisArg) {
  IsColorAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getMapper__(), null)) {
   return $thisArg.m_getMapper__().m_getMissingColorAsString___$pp_org_pepstock_charba_client_geo();
  }
  return ColorAxis.f_DEFAULT_MISSING_COLOR__org_pepstock_charba_client_geo_ColorAxis;
 }
 /** @return {IsColor} */
 static m_getMissingColor__$default__org_pepstock_charba_client_geo_IsColorAxis(/** !IsColorAxis */ $thisArg) {
  IsColorAxis.$clinit();
  return ColorBuilder.m_parse__java_lang_String($thisArg.m_getMissingColorAsString__());
 }
 
 static m_setQuantize__$default__org_pepstock_charba_client_geo_IsColorAxis__int(/** !IsColorAxis */ $thisArg, /** number */ quantize) {
  IsColorAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getMapper__(), null)) {
   $thisArg.m_getMapper__().m_setQuantize__int_$pp_org_pepstock_charba_client_geo(quantize);
  }
 }
 /** @return {number} */
 static m_getQuantize__$default__org_pepstock_charba_client_geo_IsColorAxis(/** !IsColorAxis */ $thisArg) {
  IsColorAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getMapper__(), null)) {
   return $thisArg.m_getMapper__().m_getQuantize___$pp_org_pepstock_charba_client_geo();
  }
  return ColorAxis.f_DEFAULT_QUANTIZE__org_pepstock_charba_client_geo_ColorAxis;
 }
 
 static m_setInterpolate__$default__org_pepstock_charba_client_geo_IsColorAxis__org_pepstock_charba_client_geo_enums_Interpolate(/** !IsColorAxis */ $thisArg, /** Interpolate */ interpolate) {
  IsColorAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getMapper__(), null)) {
   $thisArg.m_getMapper__().m_setInterpolate__org_pepstock_charba_client_geo_enums_Interpolate_$pp_org_pepstock_charba_client_geo(interpolate);
  }
 }
 /** @return {Interpolate} */
 static m_getInterpolate__$default__org_pepstock_charba_client_geo_IsColorAxis(/** !IsColorAxis */ $thisArg) {
  IsColorAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getMapper__(), null)) {
   return $thisArg.m_getMapper__().m_getInterpolate___$pp_org_pepstock_charba_client_geo();
  }
  return Interpolate.f_BLUES__org_pepstock_charba_client_geo_enums_Interpolate;
 }
 
 static m_setInterpolate__$default__org_pepstock_charba_client_geo_IsColorAxis__org_pepstock_charba_client_geo_callbacks_InterpolateCallback(/** !IsColorAxis */ $thisArg, /** InterpolateCallback */ interpolateCallback) {
  IsColorAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getMapper__(), null)) {
   $thisArg.m_getMapper__().m_setInterpolate__org_pepstock_charba_client_geo_callbacks_InterpolateCallback_$pp_org_pepstock_charba_client_geo(interpolateCallback);
  }
 }
 /** @return {InterpolateCallback} */
 static m_getInterpolateCallback__$default__org_pepstock_charba_client_geo_IsColorAxis(/** !IsColorAxis */ $thisArg) {
  IsColorAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getMapper__(), null)) {
   return $thisArg.m_getMapper__().m_getInterpolateCallback___$pp_org_pepstock_charba_client_geo();
  }
  return null;
 }
 
 static $clinit() {
  IsColorAxis.$clinit = () =>{};
  IsColorAxis.$loadModules();
  IsLegendAxis.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsLegendAxis.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_geo_IsColorAxis = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_geo_IsColorAxis;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  ColorAxis = goog.module.get('org.pepstock.charba.client.geo.ColorAxis$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.geo.IsColorAxis.$LambdaAdaptor$impl');
  Interpolate = goog.module.get('org.pepstock.charba.client.geo.enums.Interpolate$impl');
 }
}
IsColorAxis.$markImplementor(/**@type {Function}*/ (IsColorAxis));
$Util.$setClassMetadataForInterface(IsColorAxis, "org.pepstock.charba.client.geo.IsColorAxis");

exports = IsColorAxis;

//# sourceMappingURL=IsColorAxis.js.map
