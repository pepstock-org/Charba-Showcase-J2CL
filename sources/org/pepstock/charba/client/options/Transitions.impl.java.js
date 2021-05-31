goog.module('org.pepstock.charba.client.options.Transitions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');
const HasCallbackScope = goog.require('org.pepstock.charba.client.commons.HasCallbackScope$impl');
const IsTransitions = goog.require('org.pepstock.charba.client.options.IsTransitions$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let IsDefaultTransitions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTransitions$impl');
let AnimationTransition = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationTransition$impl');
let TransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.TransitionKey$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsTransitions}
 * @implements {HasCallbackScope}
 */
class Transitions extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultTransitions}*/
  this.f_defaultValues__org_pepstock_charba_client_options_Transitions_;
  /**@type {?string}*/
  this.f_scope__org_pepstock_charba_client_options_Transitions_;
 }
 /** @return {!Transitions} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTransitions__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultTransitions */ defaultValues, /** ? */ nativeObject, /** ?string */ scope) {
  Transitions.$clinit();
  let $instance = new Transitions();
  $instance.$ctor__org_pepstock_charba_client_options_Transitions__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTransitions__org_pepstock_charba_client_commons_NativeObject__java_lang_String(parent, childKey, defaultValues, nativeObject, scope);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Transitions__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTransitions__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultTransitions */ defaultValues, /** ? */ nativeObject, /** ?string */ scope) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(parent, childKey, nativeObject);
  this.f_defaultValues__org_pepstock_charba_client_options_Transitions_ = defaultValues;
  this.f_scope__org_pepstock_charba_client_options_Transitions_ = /**@type {?string}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(scope, "Scope argument"), j_l_String));
 }
 /** @override @return {?string} */
 m_getScope__() {
  return this.f_scope__org_pepstock_charba_client_options_Transitions_;
 }
 /** @override @return {boolean} */
 m_has__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ transition) {
  if (TransitionKey.m_isValid__org_pepstock_charba_client_options_TransitionKey(transition)) {
   return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(transition, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType);
  }
  return false;
 }
 /** @override @return {AnimationTransition} */
 m_get__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ transition) {
  if (this.m_has__org_pepstock_charba_client_options_TransitionKey(transition)) {
   return AnimationTransition.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_commons_NativeObject__java_lang_String(this, transition, this.f_defaultValues__org_pepstock_charba_client_options_Transitions_.m_get__org_pepstock_charba_client_options_TransitionKey(transition), this.m_getValue__org_pepstock_charba_client_commons_Key(transition), this.m_getScope__());
  }
  return null;
 }
 /** @override */
 m_set__org_pepstock_charba_client_options_TransitionKey__org_pepstock_charba_client_options_AnimationTransition(/** TransitionKey */ transition, /** AnimationTransition */ animationTransition) {
  if (TransitionKey.m_isValid__org_pepstock_charba_client_options_TransitionKey(transition)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(transition, animationTransition);
  }
 }
 /** @override @return {AnimationTransition} */
 m_create__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ transition) {
  let options = AnimationTransition.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_commons_NativeObject__java_lang_String(this, transition, this.f_defaultValues__org_pepstock_charba_client_options_Transitions_.m_get__org_pepstock_charba_client_options_TransitionKey(transition), null, this.m_getScope__());
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(transition, options);
  return options;
 }
 /** @override */
 m_remove__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ transition) {
  if (TransitionKey.m_isValid__org_pepstock_charba_client_options_TransitionKey(transition)) {
   this.m_remove__org_pepstock_charba_client_options_TransitionKey(transition);
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
  j_l_String = goog.module.get('java.lang.String$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  AnimationTransition = goog.module.get('org.pepstock.charba.client.options.AnimationTransition$impl');
  TransitionKey = goog.module.get('org.pepstock.charba.client.options.TransitionKey$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsTransitions.$markImplementor(Transitions);
HasCallbackScope.$markImplementor(Transitions);
$Util.$setClassMetadata(Transitions, "org.pepstock.charba.client.options.Transitions");

exports = Transitions;

//# sourceMappingURL=Transitions.js.map
