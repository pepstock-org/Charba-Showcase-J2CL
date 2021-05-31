goog.module('org.pepstock.charba.client.defaults.IsDefaultScales$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsDefaultScale = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScale$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScales.$LambdaAdaptor$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');

/**
 * @interface
 */
class IsDefaultScales {
 /** @abstract @return {IsDefaultScale} */
 m_getAxis__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(/** ScaleId */ scaleId, /** AxisKind */ kind) {}
 /** @return {IsDefaultScales} */
 static $adapt(/** ?function(ScaleId, AxisKind):IsDefaultScale */ fn) {
  IsDefaultScales.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  IsDefaultScales.$clinit = () =>{};
  IsDefaultScales.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultScales = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultScales;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultScales.$LambdaAdaptor$impl');
 }
}
IsDefaultScales.$markImplementor(/**@type {Function}*/ (IsDefaultScales));
$Util.$setClassMetadataForInterface(IsDefaultScales, "org.pepstock.charba.client.defaults.IsDefaultScales");

exports = IsDefaultScales;

//# sourceMappingURL=IsDefaultScales.js.map
