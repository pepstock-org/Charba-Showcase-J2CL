goog.module('org.pepstock.charba.client.defaults.IsDefaultTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAbstractTitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultAbstractTitle$impl');

/**
 * @interface
 * @extends {IsDefaultAbstractTitle}
 */
class IsDefaultTitle {
 
 static $clinit() {
  IsDefaultTitle.$clinit = () =>{};
  IsDefaultTitle.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultAbstractTitle.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultTitle = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultTitle;
 }
 
 static $loadModules() {}
}
IsDefaultTitle.$markImplementor(/**@type {Function}*/ (IsDefaultTitle));
$Util.$setClassMetadataForInterface(IsDefaultTitle, "org.pepstock.charba.client.defaults.IsDefaultTitle");

exports = IsDefaultTitle;

//# sourceMappingURL=IsDefaultTitle.js.map
