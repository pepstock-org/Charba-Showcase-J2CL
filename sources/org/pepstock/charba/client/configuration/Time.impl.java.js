goog.module('org.pepstock.charba.client.configuration.Time$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AxisContainer = goog.require('org.pepstock.charba.client.configuration.AxisContainer$impl');

let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let DisplayFormats = goog.forwardDeclare('org.pepstock.charba.client.configuration.DisplayFormats$impl');
let IsoWeekDay = goog.forwardDeclare('org.pepstock.charba.client.enums.IsoWeekDay$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');

class Time extends AxisContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {DisplayFormats}*/
  this.f_displayFormats__org_pepstock_charba_client_configuration_Time_;
 }
 /** @return {!Time} */
 static $create__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  Time.$clinit();
  let $instance = new Time();
  $instance.$ctor__org_pepstock_charba_client_configuration_Time__org_pepstock_charba_client_configuration_Axis(axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Time__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_configuration_AxisContainer__org_pepstock_charba_client_configuration_Axis(axis);
  this.f_displayFormats__org_pepstock_charba_client_configuration_Time_ = DisplayFormats.$create__org_pepstock_charba_client_configuration_Axis(axis);
 }
 /** @return {DisplayFormats} */
 m_getDisplayFormats__() {
  return this.f_displayFormats__org_pepstock_charba_client_configuration_Time_;
 }
 
 m_setIsoWeekday__org_pepstock_charba_client_enums_IsoWeekDay(/** IsoWeekDay */ isoWeekday) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_setIsoWeekday__org_pepstock_charba_client_enums_IsoWeekDay(isoWeekday);
 }
 /** @return {IsoWeekDay} */
 m_getIsoWeekday__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_getIsoWeekday__();
 }
 
 m_setRound__boolean(/** boolean */ round) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_setRound__boolean(round);
 }
 
 m_setRound__org_pepstock_charba_client_enums_TimeUnit(/** TimeUnit */ round) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_setRound__org_pepstock_charba_client_enums_TimeUnit(round);
 }
 /** @return {TimeUnit} */
 m_getRound__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_getRound__();
 }
 
 m_setTooltipFormat__java_lang_String(/** ?string */ tooltipFormat) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_setTooltipFormat__java_lang_String(tooltipFormat);
 }
 /** @return {?string} */
 m_getTooltipFormat__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_getTooltipFormat__();
 }
 
 m_setUnit__boolean(/** boolean */ unit) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_setUnit__boolean(unit);
 }
 
 m_setUnit__org_pepstock_charba_client_enums_TimeUnit(/** TimeUnit */ unit) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_setUnit__org_pepstock_charba_client_enums_TimeUnit(unit);
 }
 /** @return {TimeUnit} */
 m_getUnit__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_getUnit__();
 }
 
 m_setStepSize__double(/** number */ stepSize) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_setStepSize__double(stepSize);
 }
 /** @return {number} */
 m_getStepSize__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_getStepSize__();
 }
 
 m_setMinUnit__org_pepstock_charba_client_enums_TimeUnit(/** TimeUnit */ unit) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_setMinUnit__org_pepstock_charba_client_enums_TimeUnit(unit);
 }
 /** @return {TimeUnit} */
 m_getMinUnit__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_getMinUnit__();
 }
 
 m_setParser__java_lang_String(/** ?string */ parser) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_setParser__java_lang_String(parser);
 }
 /** @return {?string} */
 m_getParser__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTime__().m_getParser__();
 }
 
 static $clinit() {
  Time.$clinit = () =>{};
  Time.$loadModules();
  AxisContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Time;
 }
 
 static $loadModules() {
  DisplayFormats = goog.module.get('org.pepstock.charba.client.configuration.DisplayFormats$impl');
 }
}
$Util.$setClassMetadata(Time, "org.pepstock.charba.client.configuration.Time");

exports = Time;

//# sourceMappingURL=Time.js.map
