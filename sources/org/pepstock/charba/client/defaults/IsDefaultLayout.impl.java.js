goog.module('org.pepstock.charba.client.defaults.IsDefaultLayout$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultLayout.$LambdaAdaptor$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');

/**
 * @interface
 */
class IsDefaultLayout {
 /** @abstract @return {IsDefaultPadding} */
 m_getPadding__() {}
 /** @return {IsDefaultLayout} */
 static $adapt(/** ?function():IsDefaultPadding */ fn) {
  IsDefaultLayout.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  IsDefaultLayout.$clinit = () =>{};
  IsDefaultLayout.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultLayout = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultLayout;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultLayout.$LambdaAdaptor$impl');
 }
}
IsDefaultLayout.$markImplementor(/**@type {Function}*/ (IsDefaultLayout));
$Util.$setClassMetadataForInterface(IsDefaultLayout, "org.pepstock.charba.client.defaults.IsDefaultLayout");

exports = IsDefaultLayout;

//# sourceMappingURL=IsDefaultLayout.js.map
