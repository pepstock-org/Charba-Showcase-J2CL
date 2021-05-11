goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartAnimations$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimations = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimations$impl');

let IsDefaultAnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimationCollection$impl');
let IsAnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsAnimationCollectionKey$impl');

/**
 * @implements {IsDefaultAnimations}
 */
class DefaultChartAnimations extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultAnimations}*/
  this.f_animations__org_pepstock_charba_client_defaults_chart_DefaultChartAnimations_;
 }
 /** @return {!DefaultChartAnimations} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultAnimations(/** IsDefaultAnimations */ animations) {
  DefaultChartAnimations.$clinit();
  let $instance = new DefaultChartAnimations();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartAnimations__org_pepstock_charba_client_defaults_IsDefaultAnimations(animations);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartAnimations__org_pepstock_charba_client_defaults_IsDefaultAnimations(/** IsDefaultAnimations */ animations) {
  this.$ctor__java_lang_Object__();
  this.f_animations__org_pepstock_charba_client_defaults_chart_DefaultChartAnimations_ = animations;
 }
 /** @override @return {boolean} */
 m_has__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {
  return this.f_animations__org_pepstock_charba_client_defaults_chart_DefaultChartAnimations_.m_has__org_pepstock_charba_client_options_IsAnimationCollectionKey(collection);
 }
 /** @override @return {IsDefaultAnimationCollection} */
 m_get__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {
  return this.f_animations__org_pepstock_charba_client_defaults_chart_DefaultChartAnimations_.m_get__org_pepstock_charba_client_options_IsAnimationCollectionKey(collection);
 }
 
 static $clinit() {
  DefaultChartAnimations.$clinit = () =>{};
  DefaultChartAnimations.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartAnimations;
 }
 
 static $loadModules() {}
}
IsDefaultAnimations.$markImplementor(DefaultChartAnimations);
$Util.$setClassMetadata(DefaultChartAnimations, "org.pepstock.charba.client.defaults.chart.DefaultChartAnimations");

exports = DefaultChartAnimations;

//# sourceMappingURL=DefaultChartAnimations.js.map
