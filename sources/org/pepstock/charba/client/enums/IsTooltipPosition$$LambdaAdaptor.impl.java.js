goog.module('org.pepstock.charba.client.enums.IsTooltipPosition.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsTooltipPosition = goog.require('org.pepstock.charba.client.enums.IsTooltipPosition$impl');

/**
 * @implements {IsTooltipPosition}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():?string}*/
  this.f_fn__org_pepstock_charba_client_enums_IsTooltipPosition_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_enums_IsTooltipPosition_$LambdaAdaptor__org_pepstock_charba_client_enums_IsTooltipPosition_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_enums_IsTooltipPosition_$LambdaAdaptor__org_pepstock_charba_client_enums_IsTooltipPosition_$JsFunction(/** ?function():?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_enums_IsTooltipPosition_$LambdaAdaptor = fn;
 }
 /** @override @return {?string} */
 m_value__() {
  let /** ?function():?string */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_enums_IsTooltipPosition_$LambdaAdaptor, $function());
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
IsTooltipPosition.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.enums.IsTooltipPosition$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsTooltipPosition$$LambdaAdaptor.js.map
