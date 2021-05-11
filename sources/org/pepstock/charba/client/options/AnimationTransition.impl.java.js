goog.module('org.pepstock.charba.client.options.AnimationTransition$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');
const IsDefaultAnimationTransition = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationTransition$impl');

let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Animation = goog.forwardDeclare('org.pepstock.charba.client.options.Animation$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationTransition.Property$impl');
let Animations = goog.forwardDeclare('org.pepstock.charba.client.options.Animations$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultAnimationTransition}
 */
class AnimationTransition extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {Animation}*/
  this.f_animation__org_pepstock_charba_client_options_AnimationTransition_;
  /**@type {Animations}*/
  this.f_animations__org_pepstock_charba_client_options_AnimationTransition_;
 }
 //Factory method corresponding to constructor 'AnimationTransition(Key, IsDefaultAnimationTransition, ChartEnvelop)'.
 /** @return {!AnimationTransition} */
 static $create__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_ChartEnvelop(/** Key */ childKey, /** IsDefaultAnimationTransition */ defaultValues, /** ChartEnvelop<?> */ envelop) {
  AnimationTransition.$clinit();
  let $instance = new AnimationTransition();
  $instance.$ctor__org_pepstock_charba_client_options_AnimationTransition__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_ChartEnvelop(childKey, defaultValues, envelop);
  return $instance;
 }
 //Initialization from constructor 'AnimationTransition(Key, IsDefaultAnimationTransition, ChartEnvelop)'.
 
 $ctor__org_pepstock_charba_client_options_AnimationTransition__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_ChartEnvelop(/** Key */ childKey, /** IsDefaultAnimationTransition */ defaultValues, /** ChartEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_options_AnimationTransition__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_commons_NativeObject(null, null, defaultValues, /**@type {?}*/ (/**@type {ChartEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), ChartEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'AnimationTransition(AbstractNode, Key, IsDefaultAnimationTransition, NativeObject)'.
 /** @return {!AnimationTransition} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultAnimationTransition */ defaultValues, /** ? */ nativeObject) {
  AnimationTransition.$clinit();
  let $instance = new AnimationTransition();
  $instance.$ctor__org_pepstock_charba_client_options_AnimationTransition__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_commons_NativeObject(parent, childKey, defaultValues, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'AnimationTransition(AbstractNode, Key, IsDefaultAnimationTransition, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_options_AnimationTransition__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultAnimationTransition */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(parent, childKey, nativeObject);
  this.m_checkDefaultValuesArgument__java_lang_Object(defaultValues);
  this.f_animation__org_pepstock_charba_client_options_AnimationTransition_ = Animation.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimation__org_pepstock_charba_client_commons_NativeObject(this, Property.f_ANIMATION__org_pepstock_charba_client_options_AnimationTransition_Property, defaultValues.m_getAnimation__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_ANIMATION__org_pepstock_charba_client_options_AnimationTransition_Property));
  this.f_animations__org_pepstock_charba_client_options_AnimationTransition_ = Animations.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimations__org_pepstock_charba_client_commons_NativeObject(this, Property.f_ANIMATIONS__org_pepstock_charba_client_options_AnimationTransition_Property, defaultValues.m_getAnimations__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_ANIMATIONS__org_pepstock_charba_client_options_AnimationTransition_Property));
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
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  Animation = goog.module.get('org.pepstock.charba.client.options.Animation$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.AnimationTransition.Property$impl');
  Animations = goog.module.get('org.pepstock.charba.client.options.Animations$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultAnimationTransition.$markImplementor(AnimationTransition);
$Util.$setClassMetadata(AnimationTransition, "org.pepstock.charba.client.options.AnimationTransition");

exports = AnimationTransition;

//# sourceMappingURL=AnimationTransition.js.map
