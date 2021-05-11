goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartInteraction$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultInteraction = goog.require('org.pepstock.charba.client.defaults.IsDefaultInteraction$impl');

let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');

/**
 * @implements {IsDefaultInteraction}
 */
class DefaultChartInteraction extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultInteraction}*/
  this.f_interaction__org_pepstock_charba_client_defaults_chart_DefaultChartInteraction_;
 }
 /** @return {!DefaultChartInteraction} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultInteraction(/** IsDefaultInteraction */ interaction) {
  DefaultChartInteraction.$clinit();
  let $instance = new DefaultChartInteraction();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartInteraction__org_pepstock_charba_client_defaults_IsDefaultInteraction(interaction);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartInteraction__org_pepstock_charba_client_defaults_IsDefaultInteraction(/** IsDefaultInteraction */ interaction) {
  this.$ctor__java_lang_Object__();
  this.f_interaction__org_pepstock_charba_client_defaults_chart_DefaultChartInteraction_ = interaction;
 }
 /** @override @return {InteractionMode} */
 m_getMode__() {
  return this.f_interaction__org_pepstock_charba_client_defaults_chart_DefaultChartInteraction_.m_getMode__();
 }
 /** @override @return {boolean} */
 m_isIntersect__() {
  return this.f_interaction__org_pepstock_charba_client_defaults_chart_DefaultChartInteraction_.m_isIntersect__();
 }
 /** @override @return {InteractionAxis} */
 m_getAxis__() {
  return this.f_interaction__org_pepstock_charba_client_defaults_chart_DefaultChartInteraction_.m_getAxis__();
 }
 
 static $clinit() {
  DefaultChartInteraction.$clinit = () =>{};
  DefaultChartInteraction.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartInteraction;
 }
 
 static $loadModules() {}
}
IsDefaultInteraction.$markImplementor(DefaultChartInteraction);
$Util.$setClassMetadata(DefaultChartInteraction, "org.pepstock.charba.client.defaults.chart.DefaultChartInteraction");

exports = DefaultChartInteraction;

//# sourceMappingURL=DefaultChartInteraction.js.map
