goog.module('org.pepstock.charba.client.geo.HasCommonOptionsElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let CommonOptionsElementHandler = goog.forwardDeclare('org.pepstock.charba.client.geo.CommonOptionsElementHandler$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.geo.HasCommonOptionsElement.$LambdaAdaptor$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

/**
 * @interface
 */
class HasCommonOptionsElement {
 /** @abstract @return {CommonOptionsElementHandler} */
 m_getCommonElementHandler__() {}
 /** @abstract */
 m_setOutlineBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {}
 /** @abstract */
 m_setOutlineBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {}
 /** @abstract @return {?string} */
 m_getOutlineBackgroundColorAsString__() {}
 /** @abstract @return {IsColor} */
 m_getOutlineBackgroundColor__() {}
 /** @abstract */
 m_setOutlineBorderWidth__int(/** number */ borderWidth) {}
 /** @abstract @return {number} */
 m_getOutlineBorderWidth__() {}
 /** @abstract */
 m_setOutlineBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ borderColor) {}
 /** @abstract */
 m_setOutlineBorderColor__java_lang_String(/** ?string */ borderColor) {}
 /** @abstract @return {?string} */
 m_getOutlineBorderColorAsString__() {}
 /** @abstract @return {IsColor} */
 m_getOutlineBorderColor__() {}
 /** @abstract */
 m_setGraticuleBorderWidth__int(/** number */ borderWidth) {}
 /** @abstract @return {number} */
 m_getGraticuleBorderWidth__() {}
 /** @abstract */
 m_setGraticuleBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ borderColor) {}
 /** @abstract */
 m_setGraticuleBorderColor__java_lang_String(/** ?string */ borderColor) {}
 /** @abstract @return {?string} */
 m_getGraticuleBorderColorAsString__() {}
 /** @abstract @return {IsColor} */
 m_getGraticuleBorderColor__() {}
 /** @return {HasCommonOptionsElement} */
 static $adapt(/** ?function():CommonOptionsElementHandler */ fn) {
  HasCommonOptionsElement.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setOutlineBackgroundColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__org_pepstock_charba_client_colors_IsColor(/** !HasCommonOptionsElement */ $thisArg, /** IsColor */ backgroundColor) {
  HasCommonOptionsElement.$clinit();
  $thisArg.m_setOutlineBackgroundColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(backgroundColor));
 }
 
 static m_setOutlineBackgroundColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__java_lang_String(/** !HasCommonOptionsElement */ $thisArg, /** ?string */ backgroundColor) {
  HasCommonOptionsElement.$clinit();
  if (!$Equality.$same($thisArg.m_getCommonElementHandler__(), null)) {
   $thisArg.m_getCommonElementHandler__().m_setOutlineBackgroundColor__java_lang_String_$pp_org_pepstock_charba_client_geo(backgroundColor);
  }
 }
 /** @return {?string} */
 static m_getOutlineBackgroundColorAsString__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(/** !HasCommonOptionsElement */ $thisArg) {
  HasCommonOptionsElement.$clinit();
  if (!$Equality.$same($thisArg.m_getCommonElementHandler__(), null)) {
   return $thisArg.m_getCommonElementHandler__().m_getOutlineBackgroundColorAsString___$pp_org_pepstock_charba_client_geo();
  }
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {IsColor} */
 static m_getOutlineBackgroundColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(/** !HasCommonOptionsElement */ $thisArg) {
  HasCommonOptionsElement.$clinit();
  let color = $thisArg.m_getOutlineBackgroundColorAsString__();
  return !$Equality.$same(color, null) ? ColorBuilder.m_parse__java_lang_String(color) : null;
 }
 
 static m_setOutlineBorderWidth__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__int(/** !HasCommonOptionsElement */ $thisArg, /** number */ borderWidth) {
  HasCommonOptionsElement.$clinit();
  if (!$Equality.$same($thisArg.m_getCommonElementHandler__(), null)) {
   $thisArg.m_getCommonElementHandler__().m_setOutlineBorderWidth__int_$pp_org_pepstock_charba_client_geo(borderWidth);
  }
 }
 /** @return {number} */
 static m_getOutlineBorderWidth__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(/** !HasCommonOptionsElement */ $thisArg) {
  HasCommonOptionsElement.$clinit();
  if (!$Equality.$same($thisArg.m_getCommonElementHandler__(), null)) {
   return $thisArg.m_getCommonElementHandler__().m_getOutlineBorderWidth___$pp_org_pepstock_charba_client_geo();
  }
  return CommonOptionsElementHandler.f_DEFAULT_OUTLINE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler;
 }
 
 static m_setOutlineBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__org_pepstock_charba_client_colors_IsColor(/** !HasCommonOptionsElement */ $thisArg, /** IsColor */ borderColor) {
  HasCommonOptionsElement.$clinit();
  $thisArg.m_setOutlineBorderColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(borderColor));
 }
 
 static m_setOutlineBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__java_lang_String(/** !HasCommonOptionsElement */ $thisArg, /** ?string */ borderColor) {
  HasCommonOptionsElement.$clinit();
  if (!$Equality.$same($thisArg.m_getCommonElementHandler__(), null)) {
   $thisArg.m_getCommonElementHandler__().m_setOutlineBorderColor__java_lang_String_$pp_org_pepstock_charba_client_geo(borderColor);
  }
 }
 /** @return {?string} */
 static m_getOutlineBorderColorAsString__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(/** !HasCommonOptionsElement */ $thisArg) {
  HasCommonOptionsElement.$clinit();
  if (!$Equality.$same($thisArg.m_getCommonElementHandler__(), null)) {
   return $thisArg.m_getCommonElementHandler__().m_getOutlineBorderColorAsString___$pp_org_pepstock_charba_client_geo();
  }
  return Defaults.m_get__().m_getGlobal__().m_getBorderColorAsString__();
 }
 /** @return {IsColor} */
 static m_getOutlineBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(/** !HasCommonOptionsElement */ $thisArg) {
  HasCommonOptionsElement.$clinit();
  return ColorBuilder.m_parse__java_lang_String($thisArg.m_getOutlineBorderColorAsString__());
 }
 
 static m_setGraticuleBorderWidth__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__int(/** !HasCommonOptionsElement */ $thisArg, /** number */ borderWidth) {
  HasCommonOptionsElement.$clinit();
  if (!$Equality.$same($thisArg.m_getCommonElementHandler__(), null)) {
   $thisArg.m_getCommonElementHandler__().m_setGraticuleBorderWidth__int_$pp_org_pepstock_charba_client_geo(borderWidth);
  }
 }
 /** @return {number} */
 static m_getGraticuleBorderWidth__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(/** !HasCommonOptionsElement */ $thisArg) {
  HasCommonOptionsElement.$clinit();
  if (!$Equality.$same($thisArg.m_getCommonElementHandler__(), null)) {
   return $thisArg.m_getCommonElementHandler__().m_getGraticuleBorderWidth___$pp_org_pepstock_charba_client_geo();
  }
  return CommonOptionsElementHandler.f_DEFAULT_GRATICULE_BORDER_WIDTH__org_pepstock_charba_client_geo_CommonOptionsElementHandler;
 }
 
 static m_setGraticuleBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__org_pepstock_charba_client_colors_IsColor(/** !HasCommonOptionsElement */ $thisArg, /** IsColor */ borderColor) {
  HasCommonOptionsElement.$clinit();
  $thisArg.m_setGraticuleBorderColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(borderColor));
 }
 
 static m_setGraticuleBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement__java_lang_String(/** !HasCommonOptionsElement */ $thisArg, /** ?string */ borderColor) {
  HasCommonOptionsElement.$clinit();
  if (!$Equality.$same($thisArg.m_getCommonElementHandler__(), null)) {
   $thisArg.m_getCommonElementHandler__().m_setGraticuleBorderColor__java_lang_String_$pp_org_pepstock_charba_client_geo(borderColor);
  }
 }
 /** @return {?string} */
 static m_getGraticuleBorderColorAsString__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(/** !HasCommonOptionsElement */ $thisArg) {
  HasCommonOptionsElement.$clinit();
  if (!$Equality.$same($thisArg.m_getCommonElementHandler__(), null)) {
   return $thisArg.m_getCommonElementHandler__().m_getGraticuleBorderColorAsString___$pp_org_pepstock_charba_client_geo();
  }
  return CommonOptionsElementHandler.f_DEFAULT_GRATICULE_BORDER_COLOR__org_pepstock_charba_client_geo_CommonOptionsElementHandler;
 }
 /** @return {IsColor} */
 static m_getGraticuleBorderColor__$default__org_pepstock_charba_client_geo_HasCommonOptionsElement(/** !HasCommonOptionsElement */ $thisArg) {
  HasCommonOptionsElement.$clinit();
  return ColorBuilder.m_parse__java_lang_String($thisArg.m_getGraticuleBorderColorAsString__());
 }
 
 static $clinit() {
  HasCommonOptionsElement.$clinit = () =>{};
  HasCommonOptionsElement.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_geo_HasCommonOptionsElement = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_geo_HasCommonOptionsElement;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  CommonOptionsElementHandler = goog.module.get('org.pepstock.charba.client.geo.CommonOptionsElementHandler$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.geo.HasCommonOptionsElement.$LambdaAdaptor$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
HasCommonOptionsElement.$markImplementor(/**@type {Function}*/ (HasCommonOptionsElement));
$Util.$setClassMetadataForInterface(HasCommonOptionsElement, "org.pepstock.charba.client.geo.HasCommonOptionsElement");

exports = HasCommonOptionsElement;

//# sourceMappingURL=HasCommonOptionsElement.js.map
