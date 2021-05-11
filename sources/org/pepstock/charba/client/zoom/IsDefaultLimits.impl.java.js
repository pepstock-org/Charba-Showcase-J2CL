goog.module('org.pepstock.charba.client.zoom.IsDefaultLimits$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DefaultScaleLimit = goog.forwardDeclare('org.pepstock.charba.client.zoom.DefaultScaleLimit$impl');
let IsDefaultScaleLimit = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultScaleLimit$impl');

/**
 * @interface
 */
class IsDefaultLimits {
 /** @abstract @return {IsDefaultScaleLimit} */
 m_getX__() {}
 /** @abstract @return {IsDefaultScaleLimit} */
 m_getY__() {}
 /** @return {IsDefaultScaleLimit} */
 static m_getX__$default__org_pepstock_charba_client_zoom_IsDefaultLimits(/** !IsDefaultLimits */ $thisArg) {
  IsDefaultLimits.$clinit();
  return DefaultScaleLimit.f_INSTANCE__org_pepstock_charba_client_zoom_DefaultScaleLimit;
 }
 /** @return {IsDefaultScaleLimit} */
 static m_getY__$default__org_pepstock_charba_client_zoom_IsDefaultLimits(/** !IsDefaultLimits */ $thisArg) {
  IsDefaultLimits.$clinit();
  return DefaultScaleLimit.f_INSTANCE__org_pepstock_charba_client_zoom_DefaultScaleLimit;
 }
 
 static $clinit() {
  IsDefaultLimits.$clinit = () =>{};
  IsDefaultLimits.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_zoom_IsDefaultLimits = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_zoom_IsDefaultLimits;
 }
 
 static $loadModules() {
  DefaultScaleLimit = goog.module.get('org.pepstock.charba.client.zoom.DefaultScaleLimit$impl');
 }
}
IsDefaultLimits.$markImplementor(/**@type {Function}*/ (IsDefaultLimits));
$Util.$setClassMetadataForInterface(IsDefaultLimits, "org.pepstock.charba.client.zoom.IsDefaultLimits");

exports = IsDefaultLimits;

//# sourceMappingURL=IsDefaultLimits.js.map
