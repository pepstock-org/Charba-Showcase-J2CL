goog.module('org.pepstock.charba.client.enums.IsTooltipPosition$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.enums.IsTooltipPosition.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Key}
 */
class IsTooltipPosition {
 /** @return {IsTooltipPosition} */
 static $adapt(/** ?function():?string */ fn) {
  IsTooltipPosition.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  IsTooltipPosition.$clinit = () =>{};
  IsTooltipPosition.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Key.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_enums_IsTooltipPosition = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_enums_IsTooltipPosition;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.enums.IsTooltipPosition.$LambdaAdaptor$impl');
 }
}
IsTooltipPosition.$markImplementor(/**@type {Function}*/ (IsTooltipPosition));
$Util.$setClassMetadataForInterface(IsTooltipPosition, "org.pepstock.charba.client.enums.IsTooltipPosition");

exports = IsTooltipPosition;

//# sourceMappingURL=IsTooltipPosition.js.map
