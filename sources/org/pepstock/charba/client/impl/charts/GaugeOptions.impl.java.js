goog.module('org.pepstock.charba.client.impl.charts.GaugeOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MeterOptions = goog.require('org.pepstock.charba.client.impl.charts.MeterOptions$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');

class GaugeOptions extends MeterOptions {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!GaugeOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  GaugeOptions.$clinit();
  let $instance = new GaugeOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_GaugeOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_charts_GaugeOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_impl_charts_MeterOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
 }
 
 static $clinit() {
  GaugeOptions.$clinit = () =>{};
  GaugeOptions.$loadModules();
  MeterOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GaugeOptions;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(GaugeOptions, "org.pepstock.charba.client.impl.charts.GaugeOptions");

exports = GaugeOptions;

//# sourceMappingURL=GaugeOptions.js.map
