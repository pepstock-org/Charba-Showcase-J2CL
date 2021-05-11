goog.module('org.pepstock.charba.client.resources.IsInternalInjectableTextResource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class IsInternalInjectableTextResource {
 
 static $clinit() {
  IsInternalInjectableTextResource.$clinit = () =>{};
  IsInternalInjectableTextResource.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_resources_IsInternalInjectableTextResource = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_resources_IsInternalInjectableTextResource;
 }
 
 static $loadModules() {}
}
IsInternalInjectableTextResource.$markImplementor(/**@type {Function}*/ (IsInternalInjectableTextResource));
$Util.$setClassMetadataForInterface(IsInternalInjectableTextResource, "org.pepstock.charba.client.resources.IsInternalInjectableTextResource");

exports = IsInternalInjectableTextResource;

//# sourceMappingURL=IsInternalInjectableTextResource.js.map
