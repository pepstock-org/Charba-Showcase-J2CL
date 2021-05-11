goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartAnimationTransition$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimationTransition = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationTransition$impl');

let IsDefaultAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimation$impl');
let IsDefaultAnimations = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimations$impl');

/**
 * @implements {IsDefaultAnimationTransition}
 */
class DefaultChartAnimationTransition extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultAnimationTransition}*/
  this.f_transition__org_pepstock_charba_client_defaults_chart_DefaultChartAnimationTransition_;
 }
 /** @return {!DefaultChartAnimationTransition} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition(/** IsDefaultAnimationTransition */ transition) {
  DefaultChartAnimationTransition.$clinit();
  let $instance = new DefaultChartAnimationTransition();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartAnimationTransition__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition(transition);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartAnimationTransition__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition(/** IsDefaultAnimationTransition */ transition) {
  this.$ctor__java_lang_Object__();
  this.f_transition__org_pepstock_charba_client_defaults_chart_DefaultChartAnimationTransition_ = transition;
 }
 /** @override @return {IsDefaultAnimation} */
 m_getAnimation__() {
  return this.f_transition__org_pepstock_charba_client_defaults_chart_DefaultChartAnimationTransition_.m_getAnimation__();
 }
 /** @override @return {IsDefaultAnimations} */
 m_getAnimations__() {
  return this.f_transition__org_pepstock_charba_client_defaults_chart_DefaultChartAnimationTransition_.m_getAnimations__();
 }
 
 static $clinit() {
  DefaultChartAnimationTransition.$clinit = () =>{};
  DefaultChartAnimationTransition.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartAnimationTransition;
 }
 
 static $loadModules() {}
}
IsDefaultAnimationTransition.$markImplementor(DefaultChartAnimationTransition);
$Util.$setClassMetadata(DefaultChartAnimationTransition, "org.pepstock.charba.client.defaults.chart.DefaultChartAnimationTransition");

exports = DefaultChartAnimationTransition;

//# sourceMappingURL=DefaultChartAnimationTransition.js.map
