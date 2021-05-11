goog.module('org.pepstock.charba.client.zoom.IsDefaultOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsDefaultLimits = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultLimits$impl');
let IsDefaultPan = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultPan$impl');
let IsDefaultZoom = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultZoom$impl');

/**
 * @interface
 */
class IsDefaultOptions {
 /** @abstract @return {IsDefaultPan} */
 m_getPan__() {}
 /** @abstract @return {IsDefaultZoom} */
 m_getZoom__() {}
 /** @abstract @return {IsDefaultLimits} */
 m_getLimits__() {}
 
 static $clinit() {
  IsDefaultOptions.$clinit = () =>{};
  IsDefaultOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_zoom_IsDefaultOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_zoom_IsDefaultOptions;
 }
 
 static $loadModules() {}
}
IsDefaultOptions.$markImplementor(/**@type {Function}*/ (IsDefaultOptions));
$Util.$setClassMetadataForInterface(IsDefaultOptions, "org.pepstock.charba.client.zoom.IsDefaultOptions");

exports = IsDefaultOptions;

//# sourceMappingURL=IsDefaultOptions.js.map
