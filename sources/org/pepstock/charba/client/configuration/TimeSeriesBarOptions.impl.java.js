goog.module('org.pepstock.charba.client.configuration.TimeSeriesBarOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TimeSeriesOptions = goog.require('org.pepstock.charba.client.configuration.TimeSeriesOptions$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');

class TimeSeriesBarOptions extends TimeSeriesOptions {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TimeSeriesBarOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  TimeSeriesBarOptions.$clinit();
  let $instance = new TimeSeriesBarOptions();
  $instance.$ctor__org_pepstock_charba_client_configuration_TimeSeriesBarOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_TimeSeriesBarOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_TimeSeriesOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
 }
 
 static $clinit() {
  TimeSeriesBarOptions.$clinit = () =>{};
  TimeSeriesBarOptions.$loadModules();
  TimeSeriesOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimeSeriesBarOptions;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(TimeSeriesBarOptions, "org.pepstock.charba.client.configuration.TimeSeriesBarOptions");

exports = TimeSeriesBarOptions;

//# sourceMappingURL=TimeSeriesBarOptions.js.map
