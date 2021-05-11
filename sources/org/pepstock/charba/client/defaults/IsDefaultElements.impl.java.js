goog.module('org.pepstock.charba.client.defaults.IsDefaultElements$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsDefaultArc = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultArc$impl');
let IsDefaultBar = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultBar$impl');
let IsDefaultLine = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultLine$impl');
let IsDefaultPoint = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPoint$impl');

/**
 * @interface
 */
class IsDefaultElements {
 /** @abstract @return {IsDefaultArc} */
 m_getArc__() {}
 /** @abstract @return {IsDefaultLine} */
 m_getLine__() {}
 /** @abstract @return {IsDefaultPoint} */
 m_getPoint__() {}
 /** @abstract @return {IsDefaultBar} */
 m_getBar__() {}
 
 static $clinit() {
  IsDefaultElements.$clinit = () =>{};
  IsDefaultElements.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultElements = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultElements;
 }
 
 static $loadModules() {}
}
IsDefaultElements.$markImplementor(/**@type {Function}*/ (IsDefaultElements));
$Util.$setClassMetadataForInterface(IsDefaultElements, "org.pepstock.charba.client.defaults.IsDefaultElements");

exports = IsDefaultElements;

//# sourceMappingURL=IsDefaultElements.js.map
