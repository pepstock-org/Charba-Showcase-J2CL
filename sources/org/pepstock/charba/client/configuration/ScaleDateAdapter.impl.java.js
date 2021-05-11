goog.module('org.pepstock.charba.client.configuration.ScaleDateAdapter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AxisContainer = goog.require('org.pepstock.charba.client.configuration.AxisContainer$impl');

let DateAdapter = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapter$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');
let Calendar = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Calendar$impl');
let NumberingSystem = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.NumberingSystem$impl');
let TimeZone = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.TimeZone$impl');

class ScaleDateAdapter extends AxisContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ScaleDateAdapter} */
 static $create__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  ScaleDateAdapter.$clinit();
  let $instance = new ScaleDateAdapter();
  $instance.$ctor__org_pepstock_charba_client_configuration_ScaleDateAdapter__org_pepstock_charba_client_configuration_Axis(axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_ScaleDateAdapter__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_configuration_AxisContainer__org_pepstock_charba_client_configuration_Axis(axis);
 }
 /** @return {DateAdapter} */
 m_create__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAdapters__().m_getDate__().m_create__();
 }
 
 m_setLocale__org_pepstock_charba_client_intl_CLocale(/** CLocale */ locale) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAdapters__().m_getDate__().m_setLocale__org_pepstock_charba_client_intl_CLocale(locale);
 }
 /** @return {CLocale} */
 m_getLocale__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAdapters__().m_getDate__().m_getLocale__();
 }
 
 m_setZone__org_pepstock_charba_client_intl_enums_TimeZone(/** TimeZone */ zone) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAdapters__().m_getDate__().m_setZone__org_pepstock_charba_client_intl_enums_TimeZone(zone);
 }
 /** @return {TimeZone} */
 m_getZone__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAdapters__().m_getDate__().m_getZone__();
 }
 
 m_setOutputCalendar__org_pepstock_charba_client_intl_enums_Calendar(/** Calendar */ outputCalendar) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAdapters__().m_getDate__().m_setOutputCalendar__org_pepstock_charba_client_intl_enums_Calendar(outputCalendar);
 }
 /** @return {Calendar} */
 m_getOutputCalendar__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAdapters__().m_getDate__().m_getOutputCalendar__();
 }
 
 m_setNumberingSystem__org_pepstock_charba_client_intl_enums_NumberingSystem(/** NumberingSystem */ numberingSystem) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAdapters__().m_getDate__().m_setNumberingSystem__org_pepstock_charba_client_intl_enums_NumberingSystem(numberingSystem);
 }
 /** @return {NumberingSystem} */
 m_getNumberingSystem__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAdapters__().m_getDate__().m_getNumberingSystem__();
 }
 
 static $clinit() {
  ScaleDateAdapter.$clinit = () =>{};
  ScaleDateAdapter.$loadModules();
  AxisContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScaleDateAdapter;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(ScaleDateAdapter, "org.pepstock.charba.client.configuration.ScaleDateAdapter");

exports = ScaleDateAdapter;

//# sourceMappingURL=ScaleDateAdapter.js.map
