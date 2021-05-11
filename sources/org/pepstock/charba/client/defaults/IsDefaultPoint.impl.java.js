goog.module('org.pepstock.charba.client.defaults.IsDefaultPoint$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultOptionsElement = goog.require('org.pepstock.charba.client.defaults.IsDefaultOptionsElement$impl');
const IsDefaultPointStyleHandler = goog.require('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');

/**
 * @interface
 * @extends {IsDefaultOptionsElement}
 * @extends {IsDefaultPointStyleHandler}
 */
class IsDefaultPoint {
 /** @abstract @return {number} */
 m_getRadius__() {}
 /** @abstract @return {number} */
 m_getHitRadius__() {}
 /** @abstract @return {number} */
 m_getHoverRadius__() {}
 /** @abstract @return {number} */
 m_getRotation__() {}
 
 static $clinit() {
  IsDefaultPoint.$clinit = () =>{};
  IsDefaultPoint.$loadModules();
  IsDefaultPointStyleHandler.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultOptionsElement.$markImplementor(ctor);
  IsDefaultPointStyleHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultPoint = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultPoint;
 }
 
 static $loadModules() {}
}
IsDefaultPoint.$markImplementor(/**@type {Function}*/ (IsDefaultPoint));
$Util.$setClassMetadataForInterface(IsDefaultPoint, "org.pepstock.charba.client.defaults.IsDefaultPoint");

exports = IsDefaultPoint;

//# sourceMappingURL=IsDefaultPoint.js.map
