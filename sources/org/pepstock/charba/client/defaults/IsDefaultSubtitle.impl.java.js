goog.module('org.pepstock.charba.client.defaults.IsDefaultSubtitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAbstractTitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultAbstractTitle$impl');

/**
 * @interface
 * @extends {IsDefaultAbstractTitle}
 */
class IsDefaultSubtitle {
 
 static $clinit() {
  IsDefaultSubtitle.$clinit = () =>{};
  IsDefaultSubtitle.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultAbstractTitle.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultSubtitle = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultSubtitle;
 }
 
 static $loadModules() {}
}
IsDefaultSubtitle.$markImplementor(/**@type {Function}*/ (IsDefaultSubtitle));
$Util.$setClassMetadataForInterface(IsDefaultSubtitle, "org.pepstock.charba.client.defaults.IsDefaultSubtitle");

exports = IsDefaultSubtitle;

//# sourceMappingURL=IsDefaultSubtitle.js.map
