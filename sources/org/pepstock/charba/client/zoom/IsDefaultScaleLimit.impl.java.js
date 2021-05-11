goog.module('org.pepstock.charba.client.zoom.IsDefaultScaleLimit$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScaleRange = goog.require('org.pepstock.charba.client.zoom.IsDefaultScaleRange$impl');

let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

/**
 * @interface
 * @extends {IsDefaultScaleRange}
 */
class IsDefaultScaleLimit {
 /** @abstract @return {number} */
 m_getMinRange__() {}
 /** @return {number} */
 static m_getMinRange__$default__org_pepstock_charba_client_zoom_IsDefaultScaleLimit(/** !IsDefaultScaleLimit */ $thisArg) {
  IsDefaultScaleLimit.$clinit();
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 
 static $clinit() {
  IsDefaultScaleLimit.$clinit = () =>{};
  IsDefaultScaleLimit.$loadModules();
  IsDefaultScaleRange.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultScaleRange.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_zoom_IsDefaultScaleLimit = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_zoom_IsDefaultScaleLimit;
 }
 
 static $loadModules() {
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
IsDefaultScaleLimit.$markImplementor(/**@type {Function}*/ (IsDefaultScaleLimit));
$Util.$setClassMetadataForInterface(IsDefaultScaleLimit, "org.pepstock.charba.client.zoom.IsDefaultScaleLimit");

exports = IsDefaultScaleLimit;

//# sourceMappingURL=IsDefaultScaleLimit.js.map
