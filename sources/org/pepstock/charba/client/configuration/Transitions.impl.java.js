goog.module('org.pepstock.charba.client.configuration.Transitions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDynamicConfiguration = goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration$impl');
const IsTransitions = goog.require('org.pepstock.charba.client.options.IsTransitions$impl');

let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let AnimationTransition = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationTransition$impl');
let IsTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsTransitionKey$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractDynamicConfiguration<IsTransitions>}
 * @implements {IsTransitions}
 */
class Transitions extends AbstractDynamicConfiguration {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Transitions} */
 static $create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsProvider<IsTransitions> */ provider) {
  Transitions.$clinit();
  let $instance = new Transitions();
  $instance.$ctor__org_pepstock_charba_client_configuration_Transitions__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(provider);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Transitions__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsProvider<IsTransitions> */ provider) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(provider);
 }
 /** @override @return {boolean} */
 m_has__org_pepstock_charba_client_options_IsTransitionKey(/** IsTransitionKey */ transition) {
  return /**@type {IsTransitions}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsTransitions)).m_has__org_pepstock_charba_client_options_IsTransitionKey(transition);
 }
 /** @override @return {AnimationTransition} */
 m_get__org_pepstock_charba_client_options_IsTransitionKey(/** IsTransitionKey */ transition) {
  return /**@type {IsTransitions}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsTransitions)).m_get__org_pepstock_charba_client_options_IsTransitionKey(transition);
 }
 /** @override */
 m_set__org_pepstock_charba_client_options_IsTransitionKey__org_pepstock_charba_client_options_AnimationTransition(/** IsTransitionKey */ transition, /** AnimationTransition */ animationTransition) {
  /**@type {IsTransitions}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsTransitions)).m_set__org_pepstock_charba_client_options_IsTransitionKey__org_pepstock_charba_client_options_AnimationTransition(transition, animationTransition);
 }
 /** @override @return {AnimationTransition} */
 m_create__org_pepstock_charba_client_options_IsTransitionKey(/** IsTransitionKey */ transition) {
  return /**@type {IsTransitions}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsTransitions)).m_create__org_pepstock_charba_client_options_IsTransitionKey(transition);
 }
 /** @override */
 m_remove__org_pepstock_charba_client_options_IsTransitionKey(/** IsTransitionKey */ transition) {
  /**@type {IsTransitions}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsTransitions)).m_remove__org_pepstock_charba_client_options_IsTransitionKey(transition);
 }
 
 static $clinit() {
  Transitions.$clinit = () =>{};
  Transitions.$loadModules();
  AbstractDynamicConfiguration.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Transitions;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsTransitions.$markImplementor(Transitions);
$Util.$setClassMetadata(Transitions, "org.pepstock.charba.client.configuration.Transitions");

exports = Transitions;

//# sourceMappingURL=Transitions.js.map
