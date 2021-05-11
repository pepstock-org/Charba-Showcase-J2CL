goog.module('org.pepstock.charba.client.defaults.IsDefaultScales.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScales = goog.require('org.pepstock.charba.client.defaults.IsDefaultScales$impl');

let IsDefaultScale = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScale$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');

/**
 * @implements {IsDefaultScales}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(IsScaleId, AxisKind):IsDefaultScale */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(IsScaleId, AxisKind):IsDefaultScale}*/
  this.f_fn__org_pepstock_charba_client_defaults_IsDefaultScales_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_defaults_IsDefaultScales_$LambdaAdaptor__org_pepstock_charba_client_defaults_IsDefaultScales_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_defaults_IsDefaultScales_$LambdaAdaptor__org_pepstock_charba_client_defaults_IsDefaultScales_$JsFunction(/** ?function(IsScaleId, AxisKind):IsDefaultScale */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_defaults_IsDefaultScales_$LambdaAdaptor = fn;
 }
 /** @override @return {IsDefaultScale} */
 m_getAxis__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(/** IsScaleId */ arg0, /** AxisKind */ arg1) {
  let /** ?function(IsScaleId, AxisKind):IsDefaultScale */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_defaults_IsDefaultScales_$LambdaAdaptor, $function(arg0, arg1));
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
IsDefaultScales.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.defaults.IsDefaultScales$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsDefaultScales$$LambdaAdaptor.js.map
