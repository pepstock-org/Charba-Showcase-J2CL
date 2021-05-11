goog.module('org.pepstock.charba.client.configuration.AnimationContainer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDynamicConfiguration = goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let Animation = goog.forwardDeclare('org.pepstock.charba.client.configuration.Animation$impl');
let Animations = goog.forwardDeclare('org.pepstock.charba.client.configuration.Animations$impl');
let Transitions = goog.forwardDeclare('org.pepstock.charba.client.configuration.Transitions$impl');
let HasAnimationOptions = goog.forwardDeclare('org.pepstock.charba.client.options.HasAnimationOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractDynamicConfiguration<HasAnimationOptions>}
 */
class AnimationContainer extends AbstractDynamicConfiguration {
 /** @protected */
 constructor() {
  super();
  /**@type {Animation}*/
  this.f_animation__org_pepstock_charba_client_configuration_AnimationContainer_;
  /**@type {Animations}*/
  this.f_animations__org_pepstock_charba_client_configuration_AnimationContainer_;
  /**@type {Transitions}*/
  this.f_transitions__org_pepstock_charba_client_configuration_AnimationContainer_;
 }
 /** @return {!AnimationContainer} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsChart */ chart, /** IsProvider<HasAnimationOptions> */ provider) {
  AnimationContainer.$clinit();
  let $instance = new AnimationContainer();
  $instance.$ctor__org_pepstock_charba_client_configuration_AnimationContainer__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(chart, provider);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_AnimationContainer__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsChart */ chart, /** IsProvider<HasAnimationOptions> */ provider) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(provider);
  this.f_animation__org_pepstock_charba_client_configuration_AnimationContainer_ = Animation.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_HasAnimationOptions__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(IsChart.m_checkAndGetIfValid__org_pepstock_charba_client_IsChart(chart), /**@type {HasAnimationOptions}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), HasAnimationOptions)), IsProvider.$adapt(() =>{
   return /**@type {HasAnimationOptions}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), HasAnimationOptions)).m_getAnimation__();
  }));
  this.f_animations__org_pepstock_charba_client_configuration_AnimationContainer_ = Animations.$create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(IsProvider.$adapt(() =>{
   return /**@type {HasAnimationOptions}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), HasAnimationOptions)).m_getAnimations__();
  }));
  this.f_transitions__org_pepstock_charba_client_configuration_AnimationContainer_ = Transitions.$create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(IsProvider.$adapt(() =>{
   return /**@type {HasAnimationOptions}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), HasAnimationOptions)).m_getTransitions__();
  }));
 }
 /** @return {Animation} */
 m_getAnimation___$pp_org_pepstock_charba_client_configuration() {
  return this.f_animation__org_pepstock_charba_client_configuration_AnimationContainer_;
 }
 /** @return {Animations} */
 m_getAnimations___$pp_org_pepstock_charba_client_configuration() {
  return this.f_animations__org_pepstock_charba_client_configuration_AnimationContainer_;
 }
 /** @return {Transitions} */
 m_getTransitions___$pp_org_pepstock_charba_client_configuration() {
  return this.f_transitions__org_pepstock_charba_client_configuration_AnimationContainer_;
 }
 
 m_setAnimationEnabled__boolean_$pp_org_pepstock_charba_client_configuration(/** boolean */ enabled) {
  /**@type {HasAnimationOptions}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), HasAnimationOptions)).m_setAnimationEnabled__boolean(enabled);
 }
 /** @return {boolean} */
 m_isAnimationEnabled___$pp_org_pepstock_charba_client_configuration() {
  return /**@type {HasAnimationOptions}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), HasAnimationOptions)).m_isAnimationEnabled__();
 }
 
 static $clinit() {
  AnimationContainer.$clinit = () =>{};
  AnimationContainer.$loadModules();
  AbstractDynamicConfiguration.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnimationContainer;
 }
 
 static $loadModules() {
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  IsProvider = goog.module.get('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
  Animation = goog.module.get('org.pepstock.charba.client.configuration.Animation$impl');
  Animations = goog.module.get('org.pepstock.charba.client.configuration.Animations$impl');
  Transitions = goog.module.get('org.pepstock.charba.client.configuration.Transitions$impl');
  HasAnimationOptions = goog.module.get('org.pepstock.charba.client.options.HasAnimationOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AnimationContainer, "org.pepstock.charba.client.configuration.AnimationContainer");

exports = AnimationContainer;

//# sourceMappingURL=AnimationContainer.js.map
