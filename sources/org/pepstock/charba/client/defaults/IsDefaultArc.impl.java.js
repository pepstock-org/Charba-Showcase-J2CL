goog.module('org.pepstock.charba.client.defaults.IsDefaultArc$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultOptionsElement = goog.require('org.pepstock.charba.client.defaults.IsDefaultOptionsElement$impl');

let BorderAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderAlign$impl');

/**
 * @interface
 * @extends {IsDefaultOptionsElement}
 */
class IsDefaultArc {
 /** @abstract @return {BorderAlign} */
 m_getBorderAlign__() {}
 /** @abstract @return {number} */
 m_getWeight__() {}
 /** @abstract @return {number} */
 m_getAngle__() {}
 /** @abstract @return {number} */
 m_getOffset__() {}
 /** @abstract @return {number} */
 m_getBorderRadius__() {}
 /** @abstract @return {number} */
 m_getHoverOffset__() {}
 
 static $clinit() {
  IsDefaultArc.$clinit = () =>{};
  IsDefaultArc.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultOptionsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultArc = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultArc;
 }
 
 static $loadModules() {}
}
IsDefaultArc.$markImplementor(/**@type {Function}*/ (IsDefaultArc));
$Util.$setClassMetadataForInterface(IsDefaultArc, "org.pepstock.charba.client.defaults.IsDefaultArc");

exports = IsDefaultArc;

//# sourceMappingURL=IsDefaultArc.js.map
