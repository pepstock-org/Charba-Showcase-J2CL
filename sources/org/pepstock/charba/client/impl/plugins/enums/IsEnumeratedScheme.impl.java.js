goog.module('org.pepstock.charba.client.impl.plugins.enums.IsEnumeratedScheme$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ColorScheme = goog.require('org.pepstock.charba.client.impl.plugins.ColorScheme$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let GradientBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientBuilder$impl');
let GradientOrientation = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientOrientation$impl');
let GradientScope = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientScope$impl');
let GradientType = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientType$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.IsEnumeratedScheme.$LambdaAdaptor$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @extends {ColorScheme}
 */
class IsEnumeratedScheme {
 /** @abstract @return {ColorScheme} */
 m_getScheme__() {}
 /** @abstract @override @return {?string} */
 m_value__() {}
 /** @abstract @override @return {?string} */
 m_category__() {}
 /** @abstract @override @return {List<IsColor>} */
 m_getColors__() {}
 /** @abstract @return {Gradient} */
 m_createGradient__() {}
 /** @abstract @return {Gradient} */
 m_createGradient__org_pepstock_charba_client_colors_GradientType(/** GradientType */ type) {}
 /** @abstract @return {Gradient} */
 m_createGradient__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation(/** GradientType */ type, /** GradientOrientation */ orientation) {}
 /** @abstract @return {Gradient} */
 m_createGradient__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientScope(/** GradientType */ type, /** GradientScope */ scope) {}
 /** @abstract @return {Gradient} */
 m_createGradient__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(/** GradientType */ type, /** GradientOrientation */ orientation, /** GradientScope */ scope) {}
 /** @return {IsEnumeratedScheme} */
 static $adapt(/** ?function():ColorScheme */ fn) {
  IsEnumeratedScheme.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {?string} */
 static m_value__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme(/** !IsEnumeratedScheme */ $thisArg) {
  IsEnumeratedScheme.$clinit();
  return /**@type {ColorScheme}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String($thisArg.m_getScheme__(), "Color scheme"), ColorScheme)).m_value__();
 }
 /** @return {?string} */
 static m_category__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme(/** !IsEnumeratedScheme */ $thisArg) {
  IsEnumeratedScheme.$clinit();
  if (!$Equality.$same($thisArg.m_getScheme__(), null)) {
   return $thisArg.m_getScheme__().m_category__();
  }
  return ColorScheme.m_category__$default__org_pepstock_charba_client_impl_plugins_ColorScheme($thisArg);
 }
 /** @return {List<IsColor>} */
 static m_getColors__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme(/** !IsEnumeratedScheme */ $thisArg) {
  IsEnumeratedScheme.$clinit();
  if (!$Equality.$same($thisArg.m_getScheme__(), null)) {
   return $thisArg.m_getScheme__().m_getColors__();
  }
  return /**@type {List<IsColor>}*/ (Collections.m_emptyList__());
 }
 /** @return {Gradient} */
 static m_createGradient__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme(/** !IsEnumeratedScheme */ $thisArg) {
  IsEnumeratedScheme.$clinit();
  return $thisArg.m_createGradient__org_pepstock_charba_client_colors_GradientType(GradientType.f_LINEAR__org_pepstock_charba_client_colors_GradientType);
 }
 /** @return {Gradient} */
 static m_createGradient__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme__org_pepstock_charba_client_colors_GradientType(/** !IsEnumeratedScheme */ $thisArg, /** GradientType */ type) {
  IsEnumeratedScheme.$clinit();
  return $thisArg.m_createGradient__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation(type, GradientOrientation.m_getDefaultByType__org_pepstock_charba_client_colors_GradientType(type));
 }
 /** @return {Gradient} */
 static m_createGradient__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation(/** !IsEnumeratedScheme */ $thisArg, /** GradientType */ type, /** GradientOrientation */ orientation) {
  IsEnumeratedScheme.$clinit();
  return $thisArg.m_createGradient__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(type, orientation, GradientScope.f_CHART__org_pepstock_charba_client_colors_GradientScope);
 }
 /** @return {Gradient} */
 static m_createGradient__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientScope(/** !IsEnumeratedScheme */ $thisArg, /** GradientType */ type, /** GradientScope */ scope) {
  IsEnumeratedScheme.$clinit();
  return $thisArg.m_createGradient__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(type, GradientOrientation.m_getDefaultByType__org_pepstock_charba_client_colors_GradientType(type), scope);
 }
 /** @return {Gradient} */
 static m_createGradient__$default__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(/** !IsEnumeratedScheme */ $thisArg, /** GradientType */ type, /** GradientOrientation */ orientation, /** GradientScope */ scope) {
  IsEnumeratedScheme.$clinit();
  let builder = GradientBuilder.m_create__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(type, orientation, scope);
  builder.m_setColors__java_util_List($thisArg.m_getColors__());
  return builder.m_build__();
 }
 
 static $clinit() {
  IsEnumeratedScheme.$clinit = () =>{};
  IsEnumeratedScheme.$loadModules();
  ColorScheme.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ColorScheme.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_impl_plugins_enums_IsEnumeratedScheme;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  GradientBuilder = goog.module.get('org.pepstock.charba.client.colors.GradientBuilder$impl');
  GradientOrientation = goog.module.get('org.pepstock.charba.client.colors.GradientOrientation$impl');
  GradientScope = goog.module.get('org.pepstock.charba.client.colors.GradientScope$impl');
  GradientType = goog.module.get('org.pepstock.charba.client.colors.GradientType$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.IsEnumeratedScheme.$LambdaAdaptor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsEnumeratedScheme.$markImplementor(/**@type {Function}*/ (IsEnumeratedScheme));
$Util.$setClassMetadataForInterface(IsEnumeratedScheme, "org.pepstock.charba.client.impl.plugins.enums.IsEnumeratedScheme");

exports = IsEnumeratedScheme;

//# sourceMappingURL=IsEnumeratedScheme.js.map
