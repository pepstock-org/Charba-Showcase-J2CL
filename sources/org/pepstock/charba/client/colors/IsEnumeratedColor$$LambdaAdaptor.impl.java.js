goog.module('org.pepstock.charba.client.colors.IsEnumeratedColor.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsEnumeratedColor = goog.require('org.pepstock.charba.client.colors.IsEnumeratedColor$impl');

let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');

/**
 * @implements {IsEnumeratedColor}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():IsColor */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():IsColor}*/
  this.f_fn__org_pepstock_charba_client_colors_IsEnumeratedColor_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_colors_IsEnumeratedColor_$LambdaAdaptor__org_pepstock_charba_client_colors_IsEnumeratedColor_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_colors_IsEnumeratedColor_$LambdaAdaptor__org_pepstock_charba_client_colors_IsEnumeratedColor_$JsFunction(/** ?function():IsColor */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_colors_IsEnumeratedColor_$LambdaAdaptor = fn;
 }
 /** @override @return {IsColor} */
 m_getColor__() {
  let /** ?function():IsColor */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_colors_IsEnumeratedColor_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_alpha__double(/** number */ arg0) {
  return IsColor.m_alpha__$default__org_pepstock_charba_client_colors_IsColor__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_brighter__() {
  return IsColor.m_brighter__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_brighter__double(/** number */ arg0) {
  return IsColor.m_brighter__$default__org_pepstock_charba_client_colors_IsColor__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_darker__() {
  return IsColor.m_darker__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_darker__double(/** number */ arg0) {
  return IsColor.m_darker__$default__org_pepstock_charba_client_colors_IsColor__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getAlpha__() {
  return IsEnumeratedColor.m_getAlpha__$default__org_pepstock_charba_client_colors_IsEnumeratedColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBlue__() {
  return IsEnumeratedColor.m_getBlue__$default__org_pepstock_charba_client_colors_IsEnumeratedColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getGreen__() {
  return IsEnumeratedColor.m_getGreen__$default__org_pepstock_charba_client_colors_IsEnumeratedColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getRed__() {
  return IsEnumeratedColor.m_getRed__$default__org_pepstock_charba_client_colors_IsEnumeratedColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toHSL__() {
  return IsColor.m_toHSL__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toHSLA__() {
  return IsColor.m_toHSLA__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toHex__() {
  return IsColor.m_toHex__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toRGB__() {
  return IsColor.m_toRGB__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toRGBA__() {
  return IsColor.m_toRGBA__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_toRGBs__() {
  return IsColor.m_toRGBs__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  IsEnumeratedColor.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
 }
}
IsEnumeratedColor.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.colors.IsEnumeratedColor$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsEnumeratedColor$$LambdaAdaptor.js.map
