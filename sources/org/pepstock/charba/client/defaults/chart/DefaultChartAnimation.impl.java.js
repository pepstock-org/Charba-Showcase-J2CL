goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimation = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimation$impl');
const AbstractDefaultChartAnimation = goog.require('org.pepstock.charba.client.defaults.chart.AbstractDefaultChartAnimation$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractDefaultChartAnimation<IsDefaultAnimation>}
 * @implements {IsDefaultAnimation}
 */
class DefaultChartAnimation extends AbstractDefaultChartAnimation {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultChartAnimation} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultAnimation(/** IsDefaultAnimation */ animation) {
  DefaultChartAnimation.$clinit();
  let $instance = new DefaultChartAnimation();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartAnimation__org_pepstock_charba_client_defaults_IsDefaultAnimation(animation);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartAnimation__org_pepstock_charba_client_defaults_IsDefaultAnimation(/** IsDefaultAnimation */ animation) {
  this.$ctor__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartAnimation__org_pepstock_charba_client_defaults_IsDefaultBaseAnimation(animation);
 }
 /** @override @return {boolean} */
 m_isAnimateRotate__() {
  return /**@type {IsDefaultAnimation}*/ ($Casts.$to(this.m_getDefaults___$pp_org_pepstock_charba_client_defaults_chart(), IsDefaultAnimation)).m_isAnimateRotate__();
 }
 /** @override @return {boolean} */
 m_isAnimateScale__() {
  return /**@type {IsDefaultAnimation}*/ ($Casts.$to(this.m_getDefaults___$pp_org_pepstock_charba_client_defaults_chart(), IsDefaultAnimation)).m_isAnimateScale__();
 }
 
 static $clinit() {
  DefaultChartAnimation.$clinit = () =>{};
  DefaultChartAnimation.$loadModules();
  AbstractDefaultChartAnimation.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartAnimation;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultAnimation.$markImplementor(DefaultChartAnimation);
$Util.$setClassMetadata(DefaultChartAnimation, "org.pepstock.charba.client.defaults.chart.DefaultChartAnimation");

exports = DefaultChartAnimation;

//# sourceMappingURL=DefaultChartAnimation.js.map
