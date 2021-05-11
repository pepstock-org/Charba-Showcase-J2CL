goog.module('org.pepstock.charba.client.options.ScaleDateAdapter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDateAdapterOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultDateAdapterOptions$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let DateAdapter = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapter$impl');
let DateAdapterOptions = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapterOptions$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');
let Calendar = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Calendar$impl');
let NumberingSystem = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.NumberingSystem$impl');
let TimeZone = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.TimeZone$impl');
let Adapters = goog.forwardDeclare('org.pepstock.charba.client.options.Adapters$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractModel<Adapters, IsDefaultDateAdapterOptions>}
 * @implements {IsDefaultDateAdapterOptions}
 */
class ScaleDateAdapter extends AbstractModel {
 /** @protected */
 constructor() {
  super();
  /**@type {DateAdapterOptions}*/
  this.f_dateAdapterOptions__org_pepstock_charba_client_options_ScaleDateAdapter_;
 }
 /** @return {!ScaleDateAdapter} */
 static $create__org_pepstock_charba_client_options_Adapters__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions__org_pepstock_charba_client_commons_NativeObject(/** Adapters */ model, /** Key */ childKey, /** IsDefaultDateAdapterOptions */ defaultValues, /** ? */ nativeObject) {
  ScaleDateAdapter.$clinit();
  let $instance = new ScaleDateAdapter();
  $instance.$ctor__org_pepstock_charba_client_options_ScaleDateAdapter__org_pepstock_charba_client_options_Adapters__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions__org_pepstock_charba_client_commons_NativeObject(model, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_ScaleDateAdapter__org_pepstock_charba_client_options_Adapters__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions__org_pepstock_charba_client_commons_NativeObject(/** Adapters */ model, /** Key */ childKey, /** IsDefaultDateAdapterOptions */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(model, childKey, defaultValues, nativeObject);
  this.f_dateAdapterOptions__org_pepstock_charba_client_options_ScaleDateAdapter_ = DateAdapterOptions.f_FACTORY__org_pepstock_charba_client_adapters_DateAdapterOptions.m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions(this.m_getNativeObject__(), /**@type {IsDefaultDateAdapterOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultDateAdapterOptions)));
 }
 /** @return {DateAdapter} */
 m_create__() {
  return this.f_dateAdapterOptions__org_pepstock_charba_client_options_ScaleDateAdapter_.m_create__();
 }
 
 m_setLocale__org_pepstock_charba_client_intl_CLocale(/** CLocale */ locale) {
  this.f_dateAdapterOptions__org_pepstock_charba_client_options_ScaleDateAdapter_.m_setLocale__org_pepstock_charba_client_intl_CLocale(locale);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {CLocale} */
 m_getLocale__() {
  return this.f_dateAdapterOptions__org_pepstock_charba_client_options_ScaleDateAdapter_.m_getLocale__();
 }
 
 m_setZone__org_pepstock_charba_client_intl_enums_TimeZone(/** TimeZone */ zone) {
  this.f_dateAdapterOptions__org_pepstock_charba_client_options_ScaleDateAdapter_.m_setZone__org_pepstock_charba_client_intl_enums_TimeZone(zone);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {TimeZone} */
 m_getZone__() {
  return this.f_dateAdapterOptions__org_pepstock_charba_client_options_ScaleDateAdapter_.m_getZone__();
 }
 
 m_setOutputCalendar__org_pepstock_charba_client_intl_enums_Calendar(/** Calendar */ outputCalendar) {
  this.f_dateAdapterOptions__org_pepstock_charba_client_options_ScaleDateAdapter_.m_setOutputCalendar__org_pepstock_charba_client_intl_enums_Calendar(outputCalendar);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {Calendar} */
 m_getOutputCalendar__() {
  return this.f_dateAdapterOptions__org_pepstock_charba_client_options_ScaleDateAdapter_.m_getOutputCalendar__();
 }
 
 m_setNumberingSystem__org_pepstock_charba_client_intl_enums_NumberingSystem(/** NumberingSystem */ numberingSystem) {
  this.f_dateAdapterOptions__org_pepstock_charba_client_options_ScaleDateAdapter_.m_setNumberingSystem__org_pepstock_charba_client_intl_enums_NumberingSystem(numberingSystem);
  this.m_checkAndAddToParent__();
 }
 /** @override @return {NumberingSystem} */
 m_getNumberingSystem__() {
  return this.f_dateAdapterOptions__org_pepstock_charba_client_options_ScaleDateAdapter_.m_getNumberingSystem__();
 }
 
 static $clinit() {
  ScaleDateAdapter.$clinit = () =>{};
  ScaleDateAdapter.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScaleDateAdapter;
 }
 
 static $loadModules() {
  DateAdapterOptions = goog.module.get('org.pepstock.charba.client.adapters.DateAdapterOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultDateAdapterOptions.$markImplementor(ScaleDateAdapter);
$Util.$setClassMetadata(ScaleDateAdapter, "org.pepstock.charba.client.options.ScaleDateAdapter");

exports = ScaleDateAdapter;

//# sourceMappingURL=ScaleDateAdapter.js.map
