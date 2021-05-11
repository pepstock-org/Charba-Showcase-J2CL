goog.module('org.pepstock.charba.client.enums.IsFill$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let FillingMode = goog.forwardDeclare('org.pepstock.charba.client.enums.FillingMode$impl');

/**
 * @interface
 * @extends {Key}
 */
class IsFill {
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_enums_IsFill(/** IsFill */ fill) {
  IsFill.$clinit();
  return Key.m_isValid__org_pepstock_charba_client_commons_Key(fill) && !$Equality.$same(fill.m_getMode__(), null);
 }
 /** @abstract @return {FillingMode} */
 m_getMode__() {}
 /** @abstract @return {number} */
 m_getValueAsInt__() {}
 /** @abstract @return {?string} */
 m_getValue__() {}
 
 static $clinit() {
  IsFill.$clinit = () =>{};
  IsFill.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Key.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_enums_IsFill = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_enums_IsFill;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
IsFill.$markImplementor(/**@type {Function}*/ (IsFill));
$Util.$setClassMetadataForInterface(IsFill, "org.pepstock.charba.client.enums.IsFill");

exports = IsFill;

//# sourceMappingURL=IsFill.js.map
