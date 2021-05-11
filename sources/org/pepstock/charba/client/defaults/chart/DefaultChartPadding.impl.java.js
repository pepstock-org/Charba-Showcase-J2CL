goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartPadding$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDefaultChartPadding = goog.require('org.pepstock.charba.client.defaults.chart.AbstractDefaultChartPadding$impl');

let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');

class DefaultChartPadding extends AbstractDefaultChartPadding {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultChartPadding} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultPadding(/** IsDefaultPadding */ padding) {
  DefaultChartPadding.$clinit();
  let $instance = new DefaultChartPadding();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartPadding__org_pepstock_charba_client_defaults_IsDefaultPadding(padding);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartPadding__org_pepstock_charba_client_defaults_IsDefaultPadding(/** IsDefaultPadding */ padding) {
  this.$ctor__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartPadding__org_pepstock_charba_client_defaults_IsDefaultPadding(padding);
 }
 
 static $clinit() {
  DefaultChartPadding.$clinit = () =>{};
  DefaultChartPadding.$loadModules();
  AbstractDefaultChartPadding.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartPadding;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(DefaultChartPadding, "org.pepstock.charba.client.defaults.chart.DefaultChartPadding");

exports = DefaultChartPadding;

//# sourceMappingURL=DefaultChartPadding.js.map
