goog.module('org.pepstock.charba.client.resources.IsResourceType$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class IsResourceType {
 
 static $clinit() {
  IsResourceType.$clinit = () =>{};
  IsResourceType.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_resources_IsResourceType = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_resources_IsResourceType;
 }
 
 static $loadModules() {}
}
IsResourceType.$markImplementor(/**@type {Function}*/ (IsResourceType));
$Util.$setClassMetadataForInterface(IsResourceType, "org.pepstock.charba.client.resources.IsResourceType");

exports = IsResourceType;

//# sourceMappingURL=IsResourceType.js.map
