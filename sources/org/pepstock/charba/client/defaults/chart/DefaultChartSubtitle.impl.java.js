goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartSubtitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultSubtitle = goog.require('org.pepstock.charba.client.defaults.IsDefaultSubtitle$impl');
const AbstractDefaultChartTitle = goog.require('org.pepstock.charba.client.defaults.chart.AbstractDefaultChartTitle$impl');

/**
 * @implements {IsDefaultSubtitle}
 */
class DefaultChartSubtitle extends AbstractDefaultChartTitle {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultChartSubtitle} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultSubtitle(/** IsDefaultSubtitle */ subtitle) {
  DefaultChartSubtitle.$clinit();
  let $instance = new DefaultChartSubtitle();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartSubtitle__org_pepstock_charba_client_defaults_IsDefaultSubtitle(subtitle);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartSubtitle__org_pepstock_charba_client_defaults_IsDefaultSubtitle(/** IsDefaultSubtitle */ subtitle) {
  this.$ctor__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartTitle__org_pepstock_charba_client_defaults_IsDefaultAbstractTitle(subtitle);
 }
 
 static $clinit() {
  DefaultChartSubtitle.$clinit = () =>{};
  DefaultChartSubtitle.$loadModules();
  AbstractDefaultChartTitle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartSubtitle;
 }
 
 static $loadModules() {}
}
IsDefaultSubtitle.$markImplementor(DefaultChartSubtitle);
$Util.$setClassMetadata(DefaultChartSubtitle, "org.pepstock.charba.client.defaults.chart.DefaultChartSubtitle");

exports = DefaultChartSubtitle;

//# sourceMappingURL=DefaultChartSubtitle.js.map
