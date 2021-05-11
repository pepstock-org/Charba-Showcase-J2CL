goog.module('org.pepstock.charba.client.colors.IsEnumeratedColor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsColor = goog.require('org.pepstock.charba.client.colors.IsColor$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsEnumeratedColor.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {IsColor}
 */
class IsEnumeratedColor {
 /** @abstract @return {IsColor} */
 m_getColor__() {}
 /** @abstract @override @return {number} */
 m_getRed__() {}
 /** @abstract @override @return {number} */
 m_getGreen__() {}
 /** @abstract @override @return {number} */
 m_getBlue__() {}
 /** @abstract @override @return {number} */
 m_getAlpha__() {}
 /** @return {IsEnumeratedColor} */
 static $adapt(/** ?function():IsColor */ fn) {
  IsEnumeratedColor.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {number} */
 static m_getRed__$default__org_pepstock_charba_client_colors_IsEnumeratedColor(/** !IsEnumeratedColor */ $thisArg) {
  IsEnumeratedColor.$clinit();
  IsColor.m_checkIfValid__org_pepstock_charba_client_colors_IsColor($thisArg.m_getColor__());
  return $thisArg.m_getColor__().m_getRed__();
 }
 /** @return {number} */
 static m_getGreen__$default__org_pepstock_charba_client_colors_IsEnumeratedColor(/** !IsEnumeratedColor */ $thisArg) {
  IsEnumeratedColor.$clinit();
  IsColor.m_checkIfValid__org_pepstock_charba_client_colors_IsColor($thisArg.m_getColor__());
  return $thisArg.m_getColor__().m_getGreen__();
 }
 /** @return {number} */
 static m_getBlue__$default__org_pepstock_charba_client_colors_IsEnumeratedColor(/** !IsEnumeratedColor */ $thisArg) {
  IsEnumeratedColor.$clinit();
  IsColor.m_checkIfValid__org_pepstock_charba_client_colors_IsColor($thisArg.m_getColor__());
  return $thisArg.m_getColor__().m_getBlue__();
 }
 /** @return {number} */
 static m_getAlpha__$default__org_pepstock_charba_client_colors_IsEnumeratedColor(/** !IsEnumeratedColor */ $thisArg) {
  IsEnumeratedColor.$clinit();
  IsColor.m_checkIfValid__org_pepstock_charba_client_colors_IsColor($thisArg.m_getColor__());
  return $thisArg.m_getColor__().m_getAlpha__();
 }
 
 static $clinit() {
  IsEnumeratedColor.$clinit = () =>{};
  IsEnumeratedColor.$loadModules();
  IsColor.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsColor.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_colors_IsEnumeratedColor = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_colors_IsEnumeratedColor;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.colors.IsEnumeratedColor.$LambdaAdaptor$impl');
 }
}
IsEnumeratedColor.$markImplementor(/**@type {Function}*/ (IsEnumeratedColor));
$Util.$setClassMetadataForInterface(IsEnumeratedColor, "org.pepstock.charba.client.colors.IsEnumeratedColor");

exports = IsEnumeratedColor;

//# sourceMappingURL=IsEnumeratedColor.js.map
