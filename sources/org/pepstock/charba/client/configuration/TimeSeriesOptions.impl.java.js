goog.module('org.pepstock.charba.client.configuration.TimeSeriesOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ScalesOptions = goog.require('org.pepstock.charba.client.configuration.ScalesOptions$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let TimeSeriesScales = goog.forwardDeclare('org.pepstock.charba.client.configuration.TimeSeriesScales$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');

/**
 * @abstract
 */
class TimeSeriesOptions extends ScalesOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {TimeSeriesScales}*/
  this.f_scales__org_pepstock_charba_client_configuration_TimeSeriesOptions_;
 }
 
 $ctor__org_pepstock_charba_client_configuration_TimeSeriesOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_ScalesOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__boolean(chart, defaultValues, false);
  this.f_scales__org_pepstock_charba_client_configuration_TimeSeriesOptions_ = TimeSeriesScales.$create__org_pepstock_charba_client_configuration_ScalesOptions(this);
 }
 /** @override @return {TimeSeriesScales} */
 m_getScales__() {
  return this.f_scales__org_pepstock_charba_client_configuration_TimeSeriesOptions_;
 }
 
 static $clinit() {
  TimeSeriesOptions.$clinit = () =>{};
  TimeSeriesOptions.$loadModules();
  ScalesOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimeSeriesOptions;
 }
 
 static $loadModules() {
  TimeSeriesScales = goog.module.get('org.pepstock.charba.client.configuration.TimeSeriesScales$impl');
 }
}
$Util.$setClassMetadata(TimeSeriesOptions, "org.pepstock.charba.client.configuration.TimeSeriesOptions");

exports = TimeSeriesOptions;

//# sourceMappingURL=TimeSeriesOptions.js.map
