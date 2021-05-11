goog.module('org.pepstock.charba.client.defaults.IsDefaultScaleLines$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');

/**
 * @interface
 */
class IsDefaultScaleLines {
 /** @abstract @return {?string} */
 m_getColorAsString__() {}
 /** @abstract @return {number} */
 m_getLineWidth__() {}
 /** @abstract @return {number} */
 m_getBorderDashOffset__() {}
 /** @abstract @return {List<Integer>} */
 m_getBorderDash__() {}
 
 static $clinit() {
  IsDefaultScaleLines.$clinit = () =>{};
  IsDefaultScaleLines.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultScaleLines = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultScaleLines;
 }
 
 static $loadModules() {}
}
IsDefaultScaleLines.$markImplementor(/**@type {Function}*/ (IsDefaultScaleLines));
$Util.$setClassMetadataForInterface(IsDefaultScaleLines, "org.pepstock.charba.client.defaults.IsDefaultScaleLines");

exports = IsDefaultScaleLines;

//# sourceMappingURL=IsDefaultScaleLines.js.map
