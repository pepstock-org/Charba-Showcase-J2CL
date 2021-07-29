goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultTitle$impl');
const AbstractDefaultChartTitle = goog.require('org.pepstock.charba.client.defaults.chart.AbstractDefaultChartTitle$impl');

/**
 * @implements {IsDefaultTitle}
 */
class DefaultChartTitle extends AbstractDefaultChartTitle {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultChartTitle} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultTitle(/** IsDefaultTitle */ title) {
  DefaultChartTitle.$clinit();
  let $instance = new DefaultChartTitle();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartTitle__org_pepstock_charba_client_defaults_IsDefaultTitle(title);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartTitle__org_pepstock_charba_client_defaults_IsDefaultTitle(/** IsDefaultTitle */ title) {
  this.$ctor__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartTitle__org_pepstock_charba_client_defaults_IsDefaultAbstractTitle(title);
 }
 
 static $clinit() {
  DefaultChartTitle.$clinit = () =>{};
  DefaultChartTitle.$loadModules();
  AbstractDefaultChartTitle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartTitle;
 }
 
 static $loadModules() {}
}
IsDefaultTitle.$markImplementor(DefaultChartTitle);
$Util.$setClassMetadata(DefaultChartTitle, "org.pepstock.charba.client.defaults.chart.DefaultChartTitle");

exports = DefaultChartTitle;

//# sourceMappingURL=DefaultChartTitle.js.map
