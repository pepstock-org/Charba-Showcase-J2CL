goog.module('org.pepstock.charba.client.options.HasFont$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultFontContainer = goog.require('org.pepstock.charba.client.defaults.IsDefaultFontContainer$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.options.Font$impl');
let FontContainer = goog.forwardDeclare('org.pepstock.charba.client.options.FontContainer$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.options.HasFont.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {IsDefaultFontContainer}
 */
class HasFont {
 /** @abstract @return {FontContainer} */
 m_getFontContainer__() {}
 /** @abstract @override @return {Font} */
 m_getFont__() {}
 /** @abstract */
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {}
 /** @abstract */
 m_setColor__java_lang_String(/** ?string */ color) {}
 /** @abstract @override @return {?string} */
 m_getColorAsString__() {}
 /** @abstract @return {IsColor} */
 m_getColor__() {}
 /** @return {HasFont} */
 static $adapt(/** ?function():FontContainer */ fn) {
  HasFont.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {Font} */
 static m_getFont__$default__org_pepstock_charba_client_options_HasFont(/** !HasFont */ $thisArg) {
  HasFont.$clinit();
  if (!$Equality.$same($thisArg.m_getFontContainer__(), null)) {
   return $thisArg.m_getFontContainer__().m_getFont___$pp_org_pepstock_charba_client_options();
  }
  return null;
 }
 
 static m_setColor__$default__org_pepstock_charba_client_options_HasFont__org_pepstock_charba_client_colors_IsColor(/** !HasFont */ $thisArg, /** IsColor */ color) {
  HasFont.$clinit();
  $thisArg.m_setColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 static m_setColor__$default__org_pepstock_charba_client_options_HasFont__java_lang_String(/** !HasFont */ $thisArg, /** ?string */ color) {
  HasFont.$clinit();
  if (!$Equality.$same($thisArg.m_getFontContainer__(), null)) {
   $thisArg.m_getFontContainer__().m_setColor__java_lang_String_$pp_org_pepstock_charba_client_options(color);
  }
 }
 /** @return {?string} */
 static m_getColorAsString__$default__org_pepstock_charba_client_options_HasFont(/** !HasFont */ $thisArg) {
  HasFont.$clinit();
  if (!$Equality.$same($thisArg.m_getFontContainer__(), null)) {
   return $thisArg.m_getFontContainer__().m_getColorAsString___$pp_org_pepstock_charba_client_options();
  }
  return Defaults.m_get__().m_getGlobal__().m_getColorAsString__();
 }
 /** @return {IsColor} */
 static m_getColor__$default__org_pepstock_charba_client_options_HasFont(/** !HasFont */ $thisArg) {
  HasFont.$clinit();
  return ColorBuilder.m_parse__java_lang_String($thisArg.m_getColorAsString__());
 }
 
 static $clinit() {
  HasFont.$clinit = () =>{};
  HasFont.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultFontContainer.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_HasFont = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_HasFont;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.options.HasFont.$LambdaAdaptor$impl');
 }
}
HasFont.$markImplementor(/**@type {Function}*/ (HasFont));
$Util.$setClassMetadataForInterface(HasFont, "org.pepstock.charba.client.options.HasFont");

exports = HasFont;

//# sourceMappingURL=HasFont.js.map
