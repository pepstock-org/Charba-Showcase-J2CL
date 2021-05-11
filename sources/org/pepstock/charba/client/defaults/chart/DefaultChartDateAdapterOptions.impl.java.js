goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartDateAdapterOptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDateAdapterOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultDateAdapterOptions$impl');

let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');
let Calendar = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.Calendar$impl');
let NumberingSystem = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.NumberingSystem$impl');
let TimeZone = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.TimeZone$impl');

/**
 * @implements {IsDefaultDateAdapterOptions}
 */
class DefaultChartDateAdapterOptions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultDateAdapterOptions}*/
  this.f_dateAdpaterOptions__org_pepstock_charba_client_defaults_chart_DefaultChartDateAdapterOptions_;
 }
 /** @return {!DefaultChartDateAdapterOptions} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions(/** IsDefaultDateAdapterOptions */ dateAdpaterOptions) {
  DefaultChartDateAdapterOptions.$clinit();
  let $instance = new DefaultChartDateAdapterOptions();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartDateAdapterOptions__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions(dateAdpaterOptions);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartDateAdapterOptions__org_pepstock_charba_client_defaults_IsDefaultDateAdapterOptions(/** IsDefaultDateAdapterOptions */ dateAdpaterOptions) {
  this.$ctor__java_lang_Object__();
  this.f_dateAdpaterOptions__org_pepstock_charba_client_defaults_chart_DefaultChartDateAdapterOptions_ = dateAdpaterOptions;
 }
 /** @override @return {CLocale} */
 m_getLocale__() {
  return this.f_dateAdpaterOptions__org_pepstock_charba_client_defaults_chart_DefaultChartDateAdapterOptions_.m_getLocale__();
 }
 /** @override @return {TimeZone} */
 m_getZone__() {
  return this.f_dateAdpaterOptions__org_pepstock_charba_client_defaults_chart_DefaultChartDateAdapterOptions_.m_getZone__();
 }
 /** @override @return {Calendar} */
 m_getOutputCalendar__() {
  return this.f_dateAdpaterOptions__org_pepstock_charba_client_defaults_chart_DefaultChartDateAdapterOptions_.m_getOutputCalendar__();
 }
 /** @override @return {NumberingSystem} */
 m_getNumberingSystem__() {
  return this.f_dateAdpaterOptions__org_pepstock_charba_client_defaults_chart_DefaultChartDateAdapterOptions_.m_getNumberingSystem__();
 }
 
 static $clinit() {
  DefaultChartDateAdapterOptions.$clinit = () =>{};
  DefaultChartDateAdapterOptions.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartDateAdapterOptions;
 }
 
 static $loadModules() {}
}
IsDefaultDateAdapterOptions.$markImplementor(DefaultChartDateAdapterOptions);
$Util.$setClassMetadata(DefaultChartDateAdapterOptions, "org.pepstock.charba.client.defaults.chart.DefaultChartDateAdapterOptions");

exports = DefaultChartDateAdapterOptions;

//# sourceMappingURL=DefaultChartDateAdapterOptions.js.map
