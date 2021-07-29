goog.module('org.pepstock.charba.client.geo.ColorAxisMapper$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LegendAxisMapper = goog.require('org.pepstock.charba.client.geo.LegendAxisMapper$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let ColorAxis = goog.forwardDeclare('org.pepstock.charba.client.geo.ColorAxis$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.geo.ColorAxisMapper.Property$impl');
let InterpolateCallback = goog.forwardDeclare('org.pepstock.charba.client.geo.callbacks.InterpolateCallback$impl');
let Interpolate = goog.forwardDeclare('org.pepstock.charba.client.geo.enums.Interpolate$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ColorAxisMapper extends LegendAxisMapper {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(number):?string>}*/
  this.f_interpolateCallbackProxy__org_pepstock_charba_client_geo_ColorAxisMapper_;
  /**@type {InterpolateCallback}*/
  this.f_interpolateCallback__org_pepstock_charba_client_geo_ColorAxisMapper_;
 }
 /** @return {!ColorAxisMapper} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  ColorAxisMapper.$clinit();
  let $instance = new ColorAxisMapper();
  $instance.$ctor__org_pepstock_charba_client_geo_ColorAxisMapper__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_ColorAxisMapper__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_geo_LegendAxisMapper__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.$init___$p_org_pepstock_charba_client_geo_ColorAxisMapper();
  this.f_interpolateCallbackProxy__org_pepstock_charba_client_geo_ColorAxisMapper_.callback = (/** number */ arg0) =>{
   return this.m_onColor__double_$p_org_pepstock_charba_client_geo_ColorAxisMapper(arg0);
  };
 }
 
 m_setMissingColor__java_lang_String_$pp_org_pepstock_charba_client_geo(/** ?string */ missingColor) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_MISSING__org_pepstock_charba_client_geo_ColorAxisMapper_Property, missingColor);
 }
 /** @return {?string} */
 m_getMissingColorAsString___$pp_org_pepstock_charba_client_geo() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_MISSING__org_pepstock_charba_client_geo_ColorAxisMapper_Property, ColorAxis.f_DEFAULT_MISSING_COLOR__org_pepstock_charba_client_geo_ColorAxis);
 }
 
 m_setQuantize__int_$pp_org_pepstock_charba_client_geo(/** number */ quantize) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_QUANTIZE__org_pepstock_charba_client_geo_ColorAxisMapper_Property, quantize);
 }
 /** @return {number} */
 m_getQuantize___$pp_org_pepstock_charba_client_geo() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_QUANTIZE__org_pepstock_charba_client_geo_ColorAxisMapper_Property, ColorAxis.f_DEFAULT_QUANTIZE__org_pepstock_charba_client_geo_ColorAxis);
 }
 
 m_setInterpolate__org_pepstock_charba_client_geo_enums_Interpolate_$pp_org_pepstock_charba_client_geo(/** Interpolate */ interpolate) {
  this.m_setInterpolate__org_pepstock_charba_client_geo_callbacks_InterpolateCallback_$pp_org_pepstock_charba_client_geo(/**@type {InterpolateCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_INTERPOLATE__org_pepstock_charba_client_geo_ColorAxisMapper_Property, interpolate);
 }
 /** @return {Interpolate} */
 m_getInterpolate___$pp_org_pepstock_charba_client_geo() {
  return /**@type {Interpolate}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_INTERPOLATE__org_pepstock_charba_client_geo_ColorAxisMapper_Property, Interpolate.m_values__(), Interpolate.f_BLUES__org_pepstock_charba_client_geo_enums_Interpolate), Interpolate));
 }
 
 m_setInterpolate__org_pepstock_charba_client_geo_callbacks_InterpolateCallback_$pp_org_pepstock_charba_client_geo(/** InterpolateCallback */ interpolateCallback) {
  this.f_interpolateCallback__org_pepstock_charba_client_geo_ColorAxisMapper_ = interpolateCallback;
  if (!$Equality.$same(interpolateCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_INTERPOLATE__org_pepstock_charba_client_geo_ColorAxisMapper_Property, this.f_interpolateCallbackProxy__org_pepstock_charba_client_geo_ColorAxisMapper_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_INTERPOLATE__org_pepstock_charba_client_geo_ColorAxisMapper_Property);
  }
 }
 /** @return {InterpolateCallback} */
 m_getInterpolateCallback___$pp_org_pepstock_charba_client_geo() {
  return this.f_interpolateCallback__org_pepstock_charba_client_geo_ColorAxisMapper_;
 }
 /** @return {?string} */
 m_onColor__double_$p_org_pepstock_charba_client_geo_ColorAxisMapper(/** number */ normalizedValue) {
  if (!$Equality.$same(this.m_getInterpolateCallback___$pp_org_pepstock_charba_client_geo(), null)) {
   let result = this.m_getInterpolateCallback___$pp_org_pepstock_charba_client_geo().m_interpolate__double(normalizedValue);
   if (IsColor.$isInstance(result)) {
    let color = /**@type {IsColor}*/ ($Casts.$to(result, IsColor));
    if (IsColor.m_isConsistent__org_pepstock_charba_client_colors_IsColor(color)) {
     return color.m_toRGBA__();
    }
   } else if (j_l_String.$isInstance(result)) {
    return /**@type {?string}*/ ($Casts.$to(result, j_l_String));
   }
  }
  return ColorAxis.f_DEFAULT_MISSING_COLOR__org_pepstock_charba_client_geo_ColorAxis;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_geo_ColorAxisMapper() {
  this.f_interpolateCallbackProxy__org_pepstock_charba_client_geo_ColorAxisMapper_ = /**@type {CharbaCallbackProxy<?function(number):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_interpolateCallback__org_pepstock_charba_client_geo_ColorAxisMapper_ = null;
 }
 
 static $clinit() {
  ColorAxisMapper.$clinit = () =>{};
  ColorAxisMapper.$loadModules();
  LegendAxisMapper.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColorAxisMapper;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  ColorAxis = goog.module.get('org.pepstock.charba.client.geo.ColorAxis$impl');
  Property = goog.module.get('org.pepstock.charba.client.geo.ColorAxisMapper.Property$impl');
  Interpolate = goog.module.get('org.pepstock.charba.client.geo.enums.Interpolate$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ColorAxisMapper, "org.pepstock.charba.client.geo.ColorAxisMapper");

exports = ColorAxisMapper;

//# sourceMappingURL=ColorAxisMapper.js.map
