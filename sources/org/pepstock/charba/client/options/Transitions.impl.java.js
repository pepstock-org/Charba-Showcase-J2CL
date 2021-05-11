goog.module('org.pepstock.charba.client.options.Transitions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');
const IsTransitions = goog.require('org.pepstock.charba.client.options.IsTransitions$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let IsDefaultTransitions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTransitions$impl');
let AnimationTransition = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationTransition$impl');
let IsTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsTransitionKey$impl');

/**
 * @implements {IsTransitions}
 */
class Transitions extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultTransitions}*/
  this.f_defaultValues__org_pepstock_charba_client_options_Transitions_;
 }
 /** @return {!Transitions} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTransitions__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultTransitions */ defaultValues, /** ? */ nativeObject) {
  Transitions.$clinit();
  let $instance = new Transitions();
  $instance.$ctor__org_pepstock_charba_client_options_Transitions__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTransitions__org_pepstock_charba_client_commons_NativeObject(parent, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Transitions__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTransitions__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultTransitions */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(parent, childKey, nativeObject);
  this.f_defaultValues__org_pepstock_charba_client_options_Transitions_ = defaultValues;
 }
 /** @override @return {boolean} */
 m_has__org_pepstock_charba_client_options_IsTransitionKey(/** IsTransitionKey */ transition) {
  if (IsTransitionKey.m_isValid__org_pepstock_charba_client_options_IsTransitionKey(transition)) {
   return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(transition, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType);
  }
  return false;
 }
 /** @override @return {AnimationTransition} */
 m_get__org_pepstock_charba_client_options_IsTransitionKey(/** IsTransitionKey */ transition) {
  if (this.m_has__org_pepstock_charba_client_options_IsTransitionKey(transition)) {
   return AnimationTransition.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_commons_NativeObject(this, transition, this.f_defaultValues__org_pepstock_charba_client_options_Transitions_.m_get__org_pepstock_charba_client_options_IsTransitionKey(transition), this.m_getValue__org_pepstock_charba_client_commons_Key(transition));
  }
  return null;
 }
 /** @override */
 m_set__org_pepstock_charba_client_options_IsTransitionKey__org_pepstock_charba_client_options_AnimationTransition(/** IsTransitionKey */ transition, /** AnimationTransition */ animationTransition) {
  if (IsTransitionKey.m_isValid__org_pepstock_charba_client_options_IsTransitionKey(transition)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(transition, animationTransition);
  }
 }
 /** @override @return {AnimationTransition} */
 m_create__org_pepstock_charba_client_options_IsTransitionKey(/** IsTransitionKey */ transition) {
  let options = AnimationTransition.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_commons_NativeObject(this, transition, this.f_defaultValues__org_pepstock_charba_client_options_Transitions_.m_get__org_pepstock_charba_client_options_IsTransitionKey(transition), null);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(transition, options);
  return options;
 }
 /** @override */
 m_remove__org_pepstock_charba_client_options_IsTransitionKey(/** IsTransitionKey */ transition) {
  if (IsTransitionKey.m_isValid__org_pepstock_charba_client_options_IsTransitionKey(transition)) {
   this.m_remove__org_pepstock_charba_client_options_IsTransitionKey(transition);
  }
 }
 
 static $clinit() {
  Transitions.$clinit = () =>{};
  Transitions.$loadModules();
  AbstractNode.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Transitions;
 }
 
 static $loadModules() {
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  AnimationTransition = goog.module.get('org.pepstock.charba.client.options.AnimationTransition$impl');
  IsTransitionKey = goog.module.get('org.pepstock.charba.client.options.IsTransitionKey$impl');
 }
}
IsTransitions.$markImplementor(Transitions);
$Util.$setClassMetadata(Transitions, "org.pepstock.charba.client.options.Transitions");

exports = Transitions;

//# sourceMappingURL=Transitions.js.map
