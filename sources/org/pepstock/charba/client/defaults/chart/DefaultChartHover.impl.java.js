goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartHover$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultChartInteraction = goog.require('org.pepstock.charba.client.defaults.chart.DefaultChartInteraction$impl');

let IsDefaultInteraction = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultInteraction$impl');

class DefaultChartHover extends DefaultChartInteraction {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultChartHover} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultInteraction(/** IsDefaultInteraction */ hover) {
  DefaultChartHover.$clinit();
  let $instance = new DefaultChartHover();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartHover__org_pepstock_charba_client_defaults_IsDefaultInteraction(hover);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartHover__org_pepstock_charba_client_defaults_IsDefaultInteraction(/** IsDefaultInteraction */ hover) {
  this.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartInteraction__org_pepstock_charba_client_defaults_IsDefaultInteraction(hover);
 }
 
 static $clinit() {
  DefaultChartHover.$clinit = () =>{};
  DefaultChartHover.$loadModules();
  DefaultChartInteraction.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartHover;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(DefaultChartHover, "org.pepstock.charba.client.defaults.chart.DefaultChartHover");

exports = DefaultChartHover;

//# sourceMappingURL=DefaultChartHover.js.map
