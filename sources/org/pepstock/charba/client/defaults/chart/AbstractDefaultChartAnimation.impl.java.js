goog.module('org.pepstock.charba.client.defaults.chart.AbstractDefaultChartAnimation$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultBaseAnimation = goog.require('org.pepstock.charba.client.defaults.IsDefaultBaseAnimation$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Easing = goog.forwardDeclare('org.pepstock.charba.client.enums.Easing$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T
 * @implements {IsDefaultBaseAnimation}
 */
class AbstractDefaultChartAnimation extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {T}*/
  this.f_animation__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartAnimation_;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartAnimation__org_pepstock_charba_client_defaults_IsDefaultBaseAnimation(/** T */ animation) {
  this.$ctor__java_lang_Object__();
  this.f_animation__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartAnimation_ = /**@type {T}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(animation, "Animation wrapped object"), IsDefaultBaseAnimation));
 }
 /** @return {T} */
 m_getDefaults___$pp_org_pepstock_charba_client_defaults_chart() {
  return this.f_animation__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartAnimation_;
 }
 /** @override @return {Easing} */
 m_getEasing__() {
  return /**@type {IsDefaultBaseAnimation}*/ (this.f_animation__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartAnimation_).m_getEasing__();
 }
 /** @override @return {number} */
 m_getDuration__() {
  return /**@type {IsDefaultBaseAnimation}*/ (this.f_animation__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartAnimation_).m_getDuration__();
 }
 /** @override @return {number} */
 m_getDelay__() {
  return /**@type {IsDefaultBaseAnimation}*/ (this.f_animation__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartAnimation_).m_getDelay__();
 }
 /** @override @return {boolean} */
 m_isLoop__() {
  return /**@type {IsDefaultBaseAnimation}*/ (this.f_animation__org_pepstock_charba_client_defaults_chart_AbstractDefaultChartAnimation_).m_isLoop__();
 }
 
 static $clinit() {
  AbstractDefaultChartAnimation.$clinit = () =>{};
  AbstractDefaultChartAnimation.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractDefaultChartAnimation;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultBaseAnimation.$markImplementor(AbstractDefaultChartAnimation);
$Util.$setClassMetadata(AbstractDefaultChartAnimation, "org.pepstock.charba.client.defaults.chart.AbstractDefaultChartAnimation");

exports = AbstractDefaultChartAnimation;

//# sourceMappingURL=AbstractDefaultChartAnimation.js.map
