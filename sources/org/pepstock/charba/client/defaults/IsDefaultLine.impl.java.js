goog.module('org.pepstock.charba.client.defaults.IsDefaultLine$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultFillHandler = goog.require('org.pepstock.charba.client.defaults.IsDefaultFillHandler$impl');
const IsDefaultOptionsElement = goog.require('org.pepstock.charba.client.defaults.IsDefaultOptionsElement$impl');

let CapStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.CapStyle$impl');
let CubicInterpolationMode = goog.forwardDeclare('org.pepstock.charba.client.enums.CubicInterpolationMode$impl');
let JoinStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.JoinStyle$impl');
let Stepped = goog.forwardDeclare('org.pepstock.charba.client.enums.Stepped$impl');

/**
 * @interface
 * @extends {IsDefaultOptionsElement}
 * @extends {IsDefaultFillHandler}
 */
class IsDefaultLine {
 /** @abstract @return {number} */
 m_getTension__() {}
 /** @abstract @return {CapStyle} */
 m_getBorderCapStyle__() {}
 /** @abstract @return {number} */
 m_getBorderDashOffset__() {}
 /** @abstract @return {JoinStyle} */
 m_getBorderJoinStyle__() {}
 /** @abstract @return {boolean} */
 m_isCapBezierPoints__() {}
 /** @abstract @return {CubicInterpolationMode} */
 m_getCubicInterpolationMode__() {}
 /** @abstract @return {Stepped} */
 m_getStepped__() {}
 
 static $clinit() {
  IsDefaultLine.$clinit = () =>{};
  IsDefaultLine.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultOptionsElement.$markImplementor(ctor);
  IsDefaultFillHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultLine = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultLine;
 }
 
 static $loadModules() {}
}
IsDefaultLine.$markImplementor(/**@type {Function}*/ (IsDefaultLine));
$Util.$setClassMetadataForInterface(IsDefaultLine, "org.pepstock.charba.client.defaults.IsDefaultLine");

exports = IsDefaultLine;

//# sourceMappingURL=IsDefaultLine.js.map
