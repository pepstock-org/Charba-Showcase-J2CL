goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartTransitions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTransitions = goog.require('org.pepstock.charba.client.defaults.IsDefaultTransitions$impl');

let IsDefaultAnimationTransition = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimationTransition$impl');
let TransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.TransitionKey$impl');

/**
 * @implements {IsDefaultTransitions}
 */
class DefaultChartTransitions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultTransitions}*/
  this.f_transitions__org_pepstock_charba_client_defaults_chart_DefaultChartTransitions_;
 }
 /** @return {!DefaultChartTransitions} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultTransitions(/** IsDefaultTransitions */ transitions) {
  DefaultChartTransitions.$clinit();
  let $instance = new DefaultChartTransitions();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartTransitions__org_pepstock_charba_client_defaults_IsDefaultTransitions(transitions);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartTransitions__org_pepstock_charba_client_defaults_IsDefaultTransitions(/** IsDefaultTransitions */ transitions) {
  this.$ctor__java_lang_Object__();
  this.f_transitions__org_pepstock_charba_client_defaults_chart_DefaultChartTransitions_ = transitions;
 }
 /** @override @return {boolean} */
 m_has__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ transition) {
  return this.f_transitions__org_pepstock_charba_client_defaults_chart_DefaultChartTransitions_.m_has__org_pepstock_charba_client_options_TransitionKey(transition);
 }
 /** @override @return {IsDefaultAnimationTransition} */
 m_get__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ transition) {
  return this.f_transitions__org_pepstock_charba_client_defaults_chart_DefaultChartTransitions_.m_get__org_pepstock_charba_client_options_TransitionKey(transition);
 }
 
 static $clinit() {
  DefaultChartTransitions.$clinit = () =>{};
  DefaultChartTransitions.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartTransitions;
 }
 
 static $loadModules() {}
}
IsDefaultTransitions.$markImplementor(DefaultChartTransitions);
$Util.$setClassMetadata(DefaultChartTransitions, "org.pepstock.charba.client.defaults.chart.DefaultChartTransitions");

exports = DefaultChartTransitions;

//# sourceMappingURL=DefaultChartTransitions.js.map
