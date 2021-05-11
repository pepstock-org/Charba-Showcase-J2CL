goog.module('org.pepstock.charba.client.zoom.IsDefaultScaleRange$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

/**
 * @interface
 */
class IsDefaultScaleRange {
 /** @abstract @return {number} */
 m_getMin__() {}
 /** @abstract @return {number} */
 m_getMax__() {}
 /** @return {number} */
 static m_getMin__$default__org_pepstock_charba_client_zoom_IsDefaultScaleRange(/** !IsDefaultScaleRange */ $thisArg) {
  IsDefaultScaleRange.$clinit();
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 static m_getMax__$default__org_pepstock_charba_client_zoom_IsDefaultScaleRange(/** !IsDefaultScaleRange */ $thisArg) {
  IsDefaultScaleRange.$clinit();
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 
 static $clinit() {
  IsDefaultScaleRange.$clinit = () =>{};
  IsDefaultScaleRange.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_zoom_IsDefaultScaleRange = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_zoom_IsDefaultScaleRange;
 }
 
 static $loadModules() {
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
IsDefaultScaleRange.$markImplementor(/**@type {Function}*/ (IsDefaultScaleRange));
$Util.$setClassMetadataForInterface(IsDefaultScaleRange, "org.pepstock.charba.client.zoom.IsDefaultScaleRange");

exports = IsDefaultScaleRange;

//# sourceMappingURL=IsDefaultScaleRange.js.map
