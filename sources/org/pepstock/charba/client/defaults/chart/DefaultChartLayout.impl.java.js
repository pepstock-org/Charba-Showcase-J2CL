goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartLayout$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLayout = goog.require('org.pepstock.charba.client.defaults.IsDefaultLayout$impl');

let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let DefaultChartPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartPadding$impl');

/**
 * @implements {IsDefaultLayout}
 */
class DefaultChartLayout extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultChartPadding}*/
  this.f_padding__org_pepstock_charba_client_defaults_chart_DefaultChartLayout_;
 }
 /** @return {!DefaultChartLayout} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultLayout(/** IsDefaultLayout */ layout) {
  DefaultChartLayout.$clinit();
  let $instance = new DefaultChartLayout();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartLayout__org_pepstock_charba_client_defaults_IsDefaultLayout(layout);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartLayout__org_pepstock_charba_client_defaults_IsDefaultLayout(/** IsDefaultLayout */ layout) {
  this.$ctor__java_lang_Object__();
  this.f_padding__org_pepstock_charba_client_defaults_chart_DefaultChartLayout_ = DefaultChartPadding.$create__org_pepstock_charba_client_defaults_IsDefaultPadding(layout.m_getPadding__());
 }
 /** @override @return {IsDefaultPadding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_defaults_chart_DefaultChartLayout_;
 }
 
 static $clinit() {
  DefaultChartLayout.$clinit = () =>{};
  DefaultChartLayout.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartLayout;
 }
 
 static $loadModules() {
  DefaultChartPadding = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartPadding$impl');
 }
}
IsDefaultLayout.$markImplementor(DefaultChartLayout);
$Util.$setClassMetadata(DefaultChartLayout, "org.pepstock.charba.client.defaults.chart.DefaultChartLayout");

exports = DefaultChartLayout;

//# sourceMappingURL=DefaultChartLayout.js.map
