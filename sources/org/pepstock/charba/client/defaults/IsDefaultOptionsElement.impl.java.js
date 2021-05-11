goog.module('org.pepstock.charba.client.defaults.IsDefaultOptionsElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class IsDefaultOptionsElement {
 /** @abstract @return {?string} */
 m_getBackgroundColorAsString__() {}
 /** @abstract @return {number} */
 m_getBorderWidth__() {}
 /** @abstract @return {?string} */
 m_getBorderColorAsString__() {}
 /** @abstract @return {?string} */
 m_getHoverBackgroundColorAsString__() {}
 /** @abstract @return {number} */
 m_getHoverBorderWidth__() {}
 /** @abstract @return {?string} */
 m_getHoverBorderColorAsString__() {}
 
 static $clinit() {
  IsDefaultOptionsElement.$clinit = () =>{};
  IsDefaultOptionsElement.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultOptionsElement = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultOptionsElement;
 }
 
 static $loadModules() {}
}
IsDefaultOptionsElement.$markImplementor(/**@type {Function}*/ (IsDefaultOptionsElement));
$Util.$setClassMetadataForInterface(IsDefaultOptionsElement, "org.pepstock.charba.client.defaults.IsDefaultOptionsElement");

exports = IsDefaultOptionsElement;

//# sourceMappingURL=IsDefaultOptionsElement.js.map
