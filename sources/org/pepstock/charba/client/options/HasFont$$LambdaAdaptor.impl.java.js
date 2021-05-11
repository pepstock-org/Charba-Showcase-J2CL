goog.module('org.pepstock.charba.client.options.HasFont.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasFont = goog.require('org.pepstock.charba.client.options.HasFont$impl');

let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.options.Font$impl');
let FontContainer = goog.forwardDeclare('org.pepstock.charba.client.options.FontContainer$impl');

/**
 * @implements {HasFont}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():FontContainer */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():FontContainer}*/
  this.f_fn__org_pepstock_charba_client_options_HasFont_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_options_HasFont_$LambdaAdaptor__org_pepstock_charba_client_options_HasFont_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_options_HasFont_$LambdaAdaptor__org_pepstock_charba_client_options_HasFont_$JsFunction(/** ?function():FontContainer */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_options_HasFont_$LambdaAdaptor = fn;
 }
 /** @override @return {FontContainer} */
 m_getFontContainer__() {
  let /** ?function():FontContainer */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_options_HasFont_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getColorAsString__() {
  return HasFont.m_getColorAsString__$default__org_pepstock_charba_client_options_HasFont(this);
 }
 //Default method forwarding stub.
 /** @override @return {Font} */
 m_getFont__() {
  return HasFont.m_getFont__$default__org_pepstock_charba_client_options_HasFont(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_getColor__() {
  return HasFont.m_getColor__$default__org_pepstock_charba_client_options_HasFont(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ arg0) {
  HasFont.m_setColor__$default__org_pepstock_charba_client_options_HasFont__org_pepstock_charba_client_colors_IsColor(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setColor__java_lang_String(/** ?string */ arg0) {
  HasFont.m_setColor__$default__org_pepstock_charba_client_options_HasFont__java_lang_String(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasFont.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.options.HasFont$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasFont$$LambdaAdaptor.js.map
