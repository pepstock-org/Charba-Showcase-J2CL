goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartFiller$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultFiller = goog.require('org.pepstock.charba.client.defaults.IsDefaultFiller$impl');

let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.enums.DrawTime$impl');

/**
 * @implements {IsDefaultFiller}
 */
class DefaultChartFiller extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultFiller}*/
  this.f_filler__org_pepstock_charba_client_defaults_chart_DefaultChartFiller_;
 }
 /** @return {!DefaultChartFiller} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultFiller(/** IsDefaultFiller */ filler) {
  DefaultChartFiller.$clinit();
  let $instance = new DefaultChartFiller();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartFiller__org_pepstock_charba_client_defaults_IsDefaultFiller(filler);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartFiller__org_pepstock_charba_client_defaults_IsDefaultFiller(/** IsDefaultFiller */ filler) {
  this.$ctor__java_lang_Object__();
  this.f_filler__org_pepstock_charba_client_defaults_chart_DefaultChartFiller_ = filler;
 }
 /** @override @return {boolean} */
 m_isPropagate__() {
  return this.f_filler__org_pepstock_charba_client_defaults_chart_DefaultChartFiller_.m_isPropagate__();
 }
 /** @override @return {DrawTime} */
 m_getDrawTime__() {
  return this.f_filler__org_pepstock_charba_client_defaults_chart_DefaultChartFiller_.m_getDrawTime__();
 }
 
 static $clinit() {
  DefaultChartFiller.$clinit = () =>{};
  DefaultChartFiller.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartFiller;
 }
 
 static $loadModules() {}
}
IsDefaultFiller.$markImplementor(DefaultChartFiller);
$Util.$setClassMetadata(DefaultChartFiller, "org.pepstock.charba.client.defaults.chart.DefaultChartFiller");

exports = DefaultChartFiller;

//# sourceMappingURL=DefaultChartFiller.js.map
