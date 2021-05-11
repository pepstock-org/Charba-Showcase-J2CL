goog.module('org.pepstock.charba.client.defaults.IsDefaultScale$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsDefaultAdapters = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAdapters$impl');
let IsDefaultAngleLines = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAngleLines$impl');
let IsDefaultGrid = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultGrid$impl');
let IsDefaultPointLabels = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPointLabels$impl');
let IsDefaultScaleTitle = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaleTitle$impl');
let IsDefaultTicks = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTicks$impl');
let IsDefaultTime = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTime$impl');
let AxisPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisPosition$impl');
let Bounds = goog.forwardDeclare('org.pepstock.charba.client.enums.Bounds$impl');
let Display = goog.forwardDeclare('org.pepstock.charba.client.enums.Display$impl');

/**
 * @interface
 */
class IsDefaultScale {
 /** @abstract @return {IsDefaultScaleTitle} */
 m_getTitle__() {}
 /** @abstract @return {IsDefaultTicks} */
 m_getTicks__() {}
 /** @abstract @return {IsDefaultGrid} */
 m_getGrid__() {}
 /** @abstract @return {IsDefaultAngleLines} */
 m_getAngleLines__() {}
 /** @abstract @return {IsDefaultPointLabels} */
 m_getPointLabels__() {}
 /** @abstract @return {IsDefaultTime} */
 m_getTime__() {}
 /** @abstract @return {IsDefaultAdapters} */
 m_getAdapters__() {}
 /** @abstract @return {boolean} */
 m_isBeginAtZero__() {}
 /** @abstract @return {number} */
 m_getGrace__() {}
 /** @abstract @return {?string} */
 m_getGraceAsPercentage__() {}
 /** @abstract @return {number} */
 m_getMin__() {}
 /** @abstract @return {number} */
 m_getMax__() {}
 /** @abstract @return {number} */
 m_getSuggestedMax__() {}
 /** @abstract @return {number} */
 m_getSuggestedMin__() {}
 /** @abstract @return {boolean} */
 m_isAlignToPixels__() {}
 /** @abstract @return {boolean} */
 m_isReverse__() {}
 /** @abstract @return {boolean} */
 m_isStacked__() {}
 /** @abstract @return {boolean} */
 m_isSingleStacked__() {}
 /** @abstract @return {number} */
 m_getWeight__() {}
 /** @abstract @return {Display} */
 m_getDisplay__() {}
 /** @abstract @return {boolean} */
 m_isOffset__() {}
 /** @abstract @return {AxisPosition} */
 m_getPosition__() {}
 /** @abstract @return {Bounds} */
 m_getBounds__() {}
 /** @abstract @return {boolean} */
 m_isAnimate__() {}
 /** @abstract @return {number} */
 m_getStartAngle__() {}
 /** @abstract @return {?string} */
 m_getBackgroundColorAsString__() {}
 
 static $clinit() {
  IsDefaultScale.$clinit = () =>{};
  IsDefaultScale.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultScale = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultScale;
 }
 
 static $loadModules() {}
}
IsDefaultScale.$markImplementor(/**@type {Function}*/ (IsDefaultScale));
$Util.$setClassMetadataForInterface(IsDefaultScale, "org.pepstock.charba.client.defaults.IsDefaultScale");

exports = IsDefaultScale;

//# sourceMappingURL=IsDefaultScale.js.map
