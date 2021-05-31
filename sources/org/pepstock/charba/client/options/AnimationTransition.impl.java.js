goog.module('org.pepstock.charba.client.options.AnimationTransition$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');
const HasCallbackScope = goog.require('org.pepstock.charba.client.commons.HasCallbackScope$impl');
const IsDefaultAnimationTransition = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationTransition$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Animation = goog.forwardDeclare('org.pepstock.charba.client.options.Animation$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationTransition.Property$impl');
let Animations = goog.forwardDeclare('org.pepstock.charba.client.options.Animations$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultAnimationTransition}
 * @implements {HasCallbackScope}
 */
class AnimationTransition extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_scope__org_pepstock_charba_client_options_AnimationTransition_;
  /**@type {Animation}*/
  this.f_animation__org_pepstock_charba_client_options_AnimationTransition_;
  /**@type {Animations}*/
  this.f_animations__org_pepstock_charba_client_options_AnimationTransition_;
 }
 //Factory method corresponding to constructor 'AnimationTransition(Key, IsDefaultAnimationTransition, ChartEnvelop, String)'.
 /** @return {!AnimationTransition} */
 static $create__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_ChartEnvelop__java_lang_String(/** Key */ childKey, /** IsDefaultAnimationTransition */ defaultValues, /** ChartEnvelop<?> */ envelop, /** ?string */ scope) {
  AnimationTransition.$clinit();
  let $instance = new AnimationTransition();
  $instance.$ctor__org_pepstock_charba_client_options_AnimationTransition__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_ChartEnvelop__java_lang_String(childKey, defaultValues, envelop, scope);
  return $instance;
 }
 //Initialization from constructor 'AnimationTransition(Key, IsDefaultAnimationTransition, ChartEnvelop, String)'.
 
 $ctor__org_pepstock_charba_client_options_AnimationTransition__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_ChartEnvelop__java_lang_String(/** Key */ childKey, /** IsDefaultAnimationTransition */ defaultValues, /** ChartEnvelop<?> */ envelop, /** ?string */ scope) {
  this.$ctor__org_pepstock_charba_client_options_AnimationTransition__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_commons_NativeObject__java_lang_String(null, null, defaultValues, /**@type {?}*/ (/**@type {ChartEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ChartEnvelop)).m_getContent__()), scope);
 }
 //Factory method corresponding to constructor 'AnimationTransition(AbstractNode, Key, IsDefaultAnimationTransition, NativeObject, String)'.
 /** @return {!AnimationTransition} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultAnimationTransition */ defaultValues, /** ? */ nativeObject, /** ?string */ scope) {
  AnimationTransition.$clinit();
  let $instance = new AnimationTransition();
  $instance.$ctor__org_pepstock_charba_client_options_AnimationTransition__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_commons_NativeObject__java_lang_String(parent, childKey, defaultValues, nativeObject, scope);
  return $instance;
 }
 //Initialization from constructor 'AnimationTransition(AbstractNode, Key, IsDefaultAnimationTransition, NativeObject, String)'.
 
 $ctor__org_pepstock_charba_client_options_AnimationTransition__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultAnimationTransition */ defaultValues, /** ? */ nativeObject, /** ?string */ scope) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(parent, childKey, nativeObject);
  this.m_checkDefaultValuesArgument__java_lang_Object(defaultValues);
  this.f_scope__org_pepstock_charba_client_options_AnimationTransition_ = /**@type {?string}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(scope, "Scope argument"), j_l_String));
  this.f_animation__org_pepstock_charba_client_options_AnimationTransition_ = Animation.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimation__org_pepstock_charba_client_commons_NativeObject(this, Property.f_ANIMATION__org_pepstock_charba_client_options_AnimationTransition_Property, defaultValues.m_getAnimation__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_ANIMATION__org_pepstock_charba_client_options_AnimationTransition_Property));
  this.f_animations__org_pepstock_charba_client_options_AnimationTransition_ = Animations.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimations__org_pepstock_charba_client_commons_NativeObject(this, Property.f_ANIMATIONS__org_pepstock_charba_client_options_AnimationTransition_Property, defaultValues.m_getAnimations__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_ANIMATIONS__org_pepstock_charba_client_options_AnimationTransition_Property));
 }
 /** @override @return {?string} */
 m_getScope__() {
  return this.f_scope__org_pepstock_charba_client_options_AnimationTransition_;
 }
 /** @override @return {Animation} */
 m_getAnimation__() {
  return this.f_animation__org_pepstock_charba_client_options_AnimationTransition_;
 }
 /** @override @return {Animations} */
 m_getAnimations__() {
  return this.f_animations__org_pepstock_charba_client_options_AnimationTransition_;
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_options() {
  return super.m_getNativeObject__();
 }
 
 static $clinit() {
  AnimationTransition.$clinit = () =>{};
  AnimationTransition.$loadModules();
  AbstractNode.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnimationTransition;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  Animation = goog.module.get('org.pepstock.charba.client.options.Animation$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.AnimationTransition.Property$impl');
  Animations = goog.module.get('org.pepstock.charba.client.options.Animations$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultAnimationTransition.$markImplementor(AnimationTransition);
HasCallbackScope.$markImplementor(AnimationTransition);
$Util.$setClassMetadata(AnimationTransition, "org.pepstock.charba.client.options.AnimationTransition");

exports = AnimationTransition;

//# sourceMappingURL=AnimationTransition.js.map
