goog.module('org.pepstock.charba.client.configuration.TimeSeriesLineOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasLineOptions = goog.require('org.pepstock.charba.client.configuration.HasLineOptions$impl');
const TimeSeriesOptions = goog.require('org.pepstock.charba.client.configuration.TimeSeriesOptions$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Decimation = goog.forwardDeclare('org.pepstock.charba.client.configuration.Decimation$impl');
let Segment = goog.forwardDeclare('org.pepstock.charba.client.configuration.Segment$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');

/**
 * @implements {HasLineOptions}
 */
class TimeSeriesLineOptions extends TimeSeriesOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {Decimation}*/
  this.f_decimation__org_pepstock_charba_client_configuration_TimeSeriesLineOptions_;
  /**@type {Segment}*/
  this.f_segment__org_pepstock_charba_client_configuration_TimeSeriesLineOptions_;
 }
 /** @return {!TimeSeriesLineOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  TimeSeriesLineOptions.$clinit();
  let $instance = new TimeSeriesLineOptions();
  $instance.$ctor__org_pepstock_charba_client_configuration_TimeSeriesLineOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_TimeSeriesLineOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_TimeSeriesOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  this.f_decimation__org_pepstock_charba_client_configuration_TimeSeriesLineOptions_ = Decimation.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this);
  this.f_segment__org_pepstock_charba_client_configuration_TimeSeriesLineOptions_ = Segment.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this);
 }
 /** @override @return {TimeSeriesOptions} */
 m_getOptions__() {
  return this;
 }
 /** @return {Decimation} */
 m_getDecimation__() {
  return this.f_decimation__org_pepstock_charba_client_configuration_TimeSeriesLineOptions_;
 }
 /** @return {Segment} */
 m_getSegment__() {
  return this.f_segment__org_pepstock_charba_client_configuration_TimeSeriesLineOptions_;
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isShowLine__() {
  return HasLineOptions.m_isShowLine__$default__org_pepstock_charba_client_configuration_HasLineOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isSpanGaps__() {
  return HasLineOptions.m_isSpanGaps__$default__org_pepstock_charba_client_configuration_HasLineOptions(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setShowLine__boolean(/** boolean */ arg0) {
  HasLineOptions.m_setShowLine__$default__org_pepstock_charba_client_configuration_HasLineOptions__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setSpanGaps__boolean(/** boolean */ arg0) {
  HasLineOptions.m_setSpanGaps__$default__org_pepstock_charba_client_configuration_HasLineOptions__boolean(this, arg0);
 }
 
 static $clinit() {
  TimeSeriesLineOptions.$clinit = () =>{};
  TimeSeriesLineOptions.$loadModules();
  TimeSeriesOptions.$clinit();
  HasLineOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimeSeriesLineOptions;
 }
 
 static $loadModules() {
  Decimation = goog.module.get('org.pepstock.charba.client.configuration.Decimation$impl');
  Segment = goog.module.get('org.pepstock.charba.client.configuration.Segment$impl');
 }
}
HasLineOptions.$markImplementor(TimeSeriesLineOptions);
$Util.$setClassMetadata(TimeSeriesLineOptions, "org.pepstock.charba.client.configuration.TimeSeriesLineOptions");

exports = TimeSeriesLineOptions;

//# sourceMappingURL=TimeSeriesLineOptions.js.map
