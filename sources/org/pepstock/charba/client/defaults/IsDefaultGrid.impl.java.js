goog.module('org.pepstock.charba.client.defaults.IsDefaultGrid$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScaleLines = goog.require('org.pepstock.charba.client.defaults.IsDefaultScaleLines$impl');

/**
 * @interface
 * @extends {IsDefaultScaleLines}
 */
class IsDefaultGrid {
 /** @abstract @return {boolean} */
 m_isDisplay__() {}
 /** @abstract @return {number} */
 m_getBorderWidth__() {}
 /** @abstract @return {?string} */
 m_getBorderColorAsString__() {}
 /** @abstract @return {boolean} */
 m_isDrawBorder__() {}
 /** @abstract @return {boolean} */
 m_isDrawOnChartArea__() {}
 /** @abstract @return {boolean} */
 m_isDrawTicks__() {}
 /** @abstract @return {number} */
 m_getTickLength__() {}
 /** @abstract @return {boolean} */
 m_isOffset__() {}
 /** @abstract @return {boolean} */
 m_isCircular__() {}
 /** @abstract @return {number} */
 m_getZ__() {}
 /** @abstract @return {number} */
 m_getTickBorderDashOffset__() {}
 /** @abstract @return {?string} */
 m_getTickColorAsString__() {}
 /** @abstract @return {number} */
 m_getTickWidth__() {}
 
 static $clinit() {
  IsDefaultGrid.$clinit = () =>{};
  IsDefaultGrid.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultScaleLines.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultGrid = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultGrid;
 }
 
 static $loadModules() {}
}
IsDefaultGrid.$markImplementor(/**@type {Function}*/ (IsDefaultGrid));
$Util.$setClassMetadataForInterface(IsDefaultGrid, "org.pepstock.charba.client.defaults.IsDefaultGrid");

exports = IsDefaultGrid;

//# sourceMappingURL=IsDefaultGrid.js.map
