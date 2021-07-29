goog.module('org.pepstock.charba.client.defaults.globals.DefaultLine$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLine = goog.require('org.pepstock.charba.client.defaults.IsDefaultLine$impl');
const AbstractDefaultOptionsElement = goog.require('org.pepstock.charba.client.defaults.globals.AbstractDefaultOptionsElement$impl');

let CapStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.CapStyle$impl');
let CubicInterpolationMode = goog.forwardDeclare('org.pepstock.charba.client.enums.CubicInterpolationMode$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let IsFill = goog.forwardDeclare('org.pepstock.charba.client.enums.IsFill$impl');
let JoinStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.JoinStyle$impl');
let Stepped = goog.forwardDeclare('org.pepstock.charba.client.enums.Stepped$impl');

/**
 * @implements {IsDefaultLine}
 */
class DefaultLine extends AbstractDefaultOptionsElement {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultLine} */
 static $create__() {
  DefaultLine.$clinit();
  let $instance = new DefaultLine();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultLine__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultLine__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultOptionsElement__int(DefaultLine.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultLine_);
 }
 /** @override @return {number} */
 m_getTension__() {
  return DefaultLine.f_DEFAULT_TENSION__org_pepstock_charba_client_defaults_globals_DefaultLine_;
 }
 /** @override @return {CapStyle} */
 m_getBorderCapStyle__() {
  return CapStyle.f_BUTT__org_pepstock_charba_client_enums_CapStyle;
 }
 /** @override @return {number} */
 m_getBorderDashOffset__() {
  return DefaultLine.f_DEFAULT_BORDER_DASH_OFFSET__org_pepstock_charba_client_defaults_globals_DefaultLine_;
 }
 /** @override @return {JoinStyle} */
 m_getBorderJoinStyle__() {
  return JoinStyle.f_MITER__org_pepstock_charba_client_enums_JoinStyle;
 }
 /** @override @return {boolean} */
 m_isCapBezierPoints__() {
  return DefaultLine.f_DEFAULT_CAP_BEZIER_POINTS__org_pepstock_charba_client_defaults_globals_DefaultLine_;
 }
 /** @override @return {CubicInterpolationMode} */
 m_getCubicInterpolationMode__() {
  return CubicInterpolationMode.f_DEFAULT__org_pepstock_charba_client_enums_CubicInterpolationMode;
 }
 /** @override @return {IsFill} */
 m_getFill__() {
  return Fill.f_FALSE__org_pepstock_charba_client_enums_Fill;
 }
 /** @override @return {Stepped} */
 m_getStepped__() {
  return Stepped.f_FALSE__org_pepstock_charba_client_enums_Stepped;
 }
 
 static $clinit() {
  DefaultLine.$clinit = () =>{};
  DefaultLine.$loadModules();
  AbstractDefaultOptionsElement.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultLine;
 }
 
 static $loadModules() {
  CapStyle = goog.module.get('org.pepstock.charba.client.enums.CapStyle$impl');
  CubicInterpolationMode = goog.module.get('org.pepstock.charba.client.enums.CubicInterpolationMode$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  JoinStyle = goog.module.get('org.pepstock.charba.client.enums.JoinStyle$impl');
  Stepped = goog.module.get('org.pepstock.charba.client.enums.Stepped$impl');
 }
}
/**@const {number}*/
DefaultLine.f_DEFAULT_TENSION__org_pepstock_charba_client_defaults_globals_DefaultLine_ = 0;
/**@const {number}*/
DefaultLine.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultLine_ = 3;
/**@const {number}*/
DefaultLine.f_DEFAULT_BORDER_DASH_OFFSET__org_pepstock_charba_client_defaults_globals_DefaultLine_ = 0;
/**@const {boolean}*/
DefaultLine.f_DEFAULT_CAP_BEZIER_POINTS__org_pepstock_charba_client_defaults_globals_DefaultLine_ = true;
IsDefaultLine.$markImplementor(DefaultLine);
$Util.$setClassMetadata(DefaultLine, "org.pepstock.charba.client.defaults.globals.DefaultLine");

exports = DefaultLine;

//# sourceMappingURL=DefaultLine.js.map
