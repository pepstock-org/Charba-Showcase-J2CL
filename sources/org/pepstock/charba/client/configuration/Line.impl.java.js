goog.module('org.pepstock.charba.client.configuration.Line$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractConfigurationElement = goog.require('org.pepstock.charba.client.configuration.AbstractConfigurationElement$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let IsDefaultLine = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultLine$impl');
let CapStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.CapStyle$impl');
let CubicInterpolationMode = goog.forwardDeclare('org.pepstock.charba.client.enums.CubicInterpolationMode$impl');
let IsFill = goog.forwardDeclare('org.pepstock.charba.client.enums.IsFill$impl');
let JoinStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.JoinStyle$impl');
let AbstractElement = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractElement$impl');

/**
 * @extends {AbstractConfigurationElement<IsDefaultLine>}
 */
class Line extends AbstractConfigurationElement {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Line} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Line.$clinit();
  let $instance = new Line();
  $instance.$ctor__org_pepstock_charba_client_configuration_Line__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Line__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractConfigurationElement__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
 }
 /** @override @return {AbstractElement<IsDefaultLine>} */
 m_getElement__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__();
 }
 
 m_setTension__double(/** number */ tension) {
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setTension__double(tension);
 }
 /** @return {number} */
 m_getTension__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_getTension__();
 }
 
 m_setBorderCapStyle__org_pepstock_charba_client_enums_CapStyle(/** CapStyle */ borderCapStyle) {
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setBorderCapStyle__org_pepstock_charba_client_enums_CapStyle(borderCapStyle);
 }
 /** @return {CapStyle} */
 m_getBorderCapStyle__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_getBorderCapStyle__();
 }
 
 m_setBorderDash__arrayOf_int(/** Array<number> */ borderDash) {
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setBorderDash__arrayOf_int(borderDash);
 }
 /** @return {List<Integer>} */
 m_getBorderDash__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_getBorderDash__();
 }
 
 m_setBorderDashOffset__double(/** number */ borderDashOffset) {
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setBorderDashOffset__double(borderDashOffset);
 }
 /** @return {number} */
 m_getBorderDashOffset__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_getBorderDashOffset__();
 }
 
 m_setBorderJoinStyle__org_pepstock_charba_client_enums_JoinStyle(/** JoinStyle */ borderJoinStyle) {
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setBorderJoinStyle__org_pepstock_charba_client_enums_JoinStyle(borderJoinStyle);
 }
 /** @return {JoinStyle} */
 m_getBorderJoinStyle__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_getBorderJoinStyle__();
 }
 
 m_setCapBezierPoints__boolean(/** boolean */ capBezierPoints) {
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setCapBezierPoints__boolean(capBezierPoints);
 }
 /** @return {boolean} */
 m_isCapBezierPoints__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_isCapBezierPoints__();
 }
 
 m_setCubicInterpolationMode__org_pepstock_charba_client_enums_CubicInterpolationMode(/** CubicInterpolationMode */ mode) {
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setCubicInterpolationMode__org_pepstock_charba_client_enums_CubicInterpolationMode(mode);
 }
 /** @return {CubicInterpolationMode} */
 m_getCubicInterpolationMode__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_getCubicInterpolationMode__();
 }
 
 m_setFill__boolean(/** boolean */ fill) {
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setFill__boolean(fill);
 }
 
 m_setFill__int(/** number */ index) {
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setFill__int(index);
 }
 
 m_setFill__java_lang_String(/** ?string */ index) {
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setFill__java_lang_String(index);
 }
 
 m_setFill__org_pepstock_charba_client_enums_IsFill(/** IsFill */ fill) {
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setFill__org_pepstock_charba_client_enums_IsFill(fill);
 }
 /** @return {IsFill} */
 m_getFill__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_getFill__();
 }
 
 m_setStepped__boolean(/** boolean */ stepped) {
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setStepped__boolean(stepped);
 }
 /** @return {boolean} */
 m_isStepped__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_isStepped__();
 }
 
 static $clinit() {
  Line.$clinit = () =>{};
  Line.$loadModules();
  AbstractConfigurationElement.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Line;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Line, "org.pepstock.charba.client.configuration.Line");

exports = Line;

//# sourceMappingURL=Line.js.map
