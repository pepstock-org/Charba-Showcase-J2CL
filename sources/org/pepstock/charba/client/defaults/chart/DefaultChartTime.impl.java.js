goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartTime$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTime = goog.require('org.pepstock.charba.client.defaults.IsDefaultTime$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsoWeekDay = goog.forwardDeclare('org.pepstock.charba.client.enums.IsoWeekDay$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let Time = goog.forwardDeclare('org.pepstock.charba.client.options.Time$impl');

/**
 * @implements {IsDefaultTime}
 */
class DefaultChartTime extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Time}*/
  this.f_time__org_pepstock_charba_client_defaults_chart_DefaultChartTime_;
 }
 /** @return {!DefaultChartTime} */
 static $create__org_pepstock_charba_client_options_Time(/** Time */ time) {
  DefaultChartTime.$clinit();
  let $instance = new DefaultChartTime();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartTime__org_pepstock_charba_client_options_Time(time);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartTime__org_pepstock_charba_client_options_Time(/** Time */ time) {
  this.$ctor__java_lang_Object__();
  this.f_time__org_pepstock_charba_client_defaults_chart_DefaultChartTime_ = time;
 }
 /** @override @return {IsoWeekDay} */
 m_getIsoWeekday__() {
  return this.f_time__org_pepstock_charba_client_defaults_chart_DefaultChartTime_.m_getIsoWeekday__();
 }
 /** @override @return {TimeUnit} */
 m_getRound__() {
  return !$Equality.$same(this.f_time__org_pepstock_charba_client_defaults_chart_DefaultChartTime_.m_getRound__(), null) ? this.f_time__org_pepstock_charba_client_defaults_chart_DefaultChartTime_.m_getRound__() : null;
 }
 /** @override @return {?string} */
 m_getTooltipFormat__() {
  return this.f_time__org_pepstock_charba_client_defaults_chart_DefaultChartTime_.m_getTooltipFormat__();
 }
 /** @override @return {TimeUnit} */
 m_getUnit__() {
  return !$Equality.$same(this.f_time__org_pepstock_charba_client_defaults_chart_DefaultChartTime_.m_getUnit__(), null) ? this.f_time__org_pepstock_charba_client_defaults_chart_DefaultChartTime_.m_getUnit__() : null;
 }
 /** @override @return {number} */
 m_getStepSize__() {
  return this.f_time__org_pepstock_charba_client_defaults_chart_DefaultChartTime_.m_getStepSize__();
 }
 /** @override @return {TimeUnit} */
 m_getMinUnit__() {
  return this.f_time__org_pepstock_charba_client_defaults_chart_DefaultChartTime_.m_getMinUnit__();
 }
 /** @override @return {?string} */
 m_getParser__() {
  return this.f_time__org_pepstock_charba_client_defaults_chart_DefaultChartTime_.m_getParser__();
 }
 
 static $clinit() {
  DefaultChartTime.$clinit = () =>{};
  DefaultChartTime.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartTime;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
IsDefaultTime.$markImplementor(DefaultChartTime);
$Util.$setClassMetadata(DefaultChartTime, "org.pepstock.charba.client.defaults.chart.DefaultChartTime");

exports = DefaultChartTime;

//# sourceMappingURL=DefaultChartTime.js.map
