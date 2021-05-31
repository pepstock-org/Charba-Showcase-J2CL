goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationProgressiveLineCase.Delay$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DelayCallback = goog.require('org.pepstock.charba.client.callbacks.DelayCallback$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ContextType = goog.forwardDeclare('org.pepstock.charba.client.enums.ContextType$impl');
let AnimationProgressiveLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationProgressiveLineCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {DelayCallback}
 */
class Delay extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Key}*/
  this.f_key__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_Delay_;
  /**@type {boolean}*/
  this.f_reset__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_Delay_ = false;
 }
 /** @return {!Delay} */
 static $create__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  Delay.$clinit();
  let $instance = new Delay();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_Delay__org_pepstock_charba_client_commons_Key(key);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_Delay__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_Delay();
  this.f_key__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_Delay_ = key;
 }
 
 m_setReset__boolean_$p_org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_Delay(/** boolean */ reset) {
  this.f_reset__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_Delay_ = reset;
 }
 /** @return {Integer} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ context) {
  if (!$Objects.m_equals__java_lang_Object__java_lang_Object(ContextType.f_DATA__org_pepstock_charba_client_enums_ContextType, context.m_getType__()) || context.m_getAttribute__org_pepstock_charba_client_commons_Key__boolean(this.f_key__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_Delay_, false) && this.f_reset__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_Delay_) {
   return Integer.m_valueOf__int(0);
  }
  context.m_setAttribute__org_pepstock_charba_client_commons_Key__boolean(this.f_key__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_Delay_, true);
  this.m_setReset__boolean_$p_org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_Delay(false);
  return Integer.m_valueOf__int(Math.imul(context.m_getDataIndex__(), AnimationProgressiveLineCase.f_DELAY_BETWEEN_POINTS__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_));
 }
 //Bridge method.
 /** @override @return {Integer} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DatasetContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/**@type {DatasetContext}*/ ($Casts.$to(arg0, DatasetContext)));
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_Delay() {
  this.f_reset__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationProgressiveLineCase_Delay_ = true;
 }
 
 static $clinit() {
  Delay.$clinit = () =>{};
  Delay.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Delay;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  ContextType = goog.module.get('org.pepstock.charba.client.enums.ContextType$impl');
  AnimationProgressiveLineCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationProgressiveLineCase$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
DelayCallback.$markImplementor(Delay);
$Util.$setClassMetadata(Delay, "org.pepstock.charba.showcase.j2cl.cases.elements.AnimationProgressiveLineCase$Delay");

exports = Delay;

//# sourceMappingURL=AnimationProgressiveLineCase$Delay.js.map
