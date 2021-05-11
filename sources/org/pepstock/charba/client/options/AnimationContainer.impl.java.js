goog.module('org.pepstock.charba.client.options.AnimationContainer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AnimationTransition = goog.require('org.pepstock.charba.client.options.AnimationTransition$impl');

let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let DataEnvelop = goog.forwardDeclare('org.pepstock.charba.client.data.DataEnvelop$impl');
let IsDefaultAnimationContainer = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimationContainer$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationContainer.Property$impl');
let AnimationTransition_Property = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationTransition.Property$impl');
let Transitions = goog.forwardDeclare('org.pepstock.charba.client.options.Transitions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AnimationContainer extends AnimationTransition {
 /** @protected */
 constructor() {
  super();
  /**@type {Transitions}*/
  this.f_transitions__org_pepstock_charba_client_options_AnimationContainer_;
 }
 //Factory method corresponding to constructor 'AnimationContainer(IsDefaultAnimationContainer, DataEnvelop)'.
 /** @return {!AnimationContainer} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_data_DataEnvelop(/** IsDefaultAnimationContainer */ defaultValues, /** DataEnvelop<?> */ envelop) {
  AnimationContainer.$clinit();
  let $instance = new AnimationContainer();
  $instance.$ctor__org_pepstock_charba_client_options_AnimationContainer__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_data_DataEnvelop(defaultValues, envelop);
  return $instance;
 }
 //Initialization from constructor 'AnimationContainer(IsDefaultAnimationContainer, DataEnvelop)'.
 
 $ctor__org_pepstock_charba_client_options_AnimationContainer__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_data_DataEnvelop(/** IsDefaultAnimationContainer */ defaultValues, /** DataEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_options_AnimationContainer__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject(null, null, defaultValues, /**@type {?}*/ (/**@type {DataEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), DataEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'AnimationContainer(AbstractNode, IsDefaultAnimationContainer, NativeObject)'.
 /** @return {!AnimationContainer} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsDefaultAnimationContainer */ defaultValues, /** ? */ nativeObject) {
  AnimationContainer.$clinit();
  let $instance = new AnimationContainer();
  $instance.$ctor__org_pepstock_charba_client_options_AnimationContainer__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'AnimationContainer(AbstractNode, IsDefaultAnimationContainer, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_options_AnimationContainer__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsDefaultAnimationContainer */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AnimationContainer__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject(parent, null, defaultValues, nativeObject);
 }
 //Factory method corresponding to constructor 'AnimationContainer(AbstractNode, Key, IsDefaultAnimationContainer, NativeObject)'.
 /** @return {!AnimationContainer} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultAnimationContainer */ defaultValues, /** ? */ nativeObject) {
  AnimationContainer.$clinit();
  let $instance = new AnimationContainer();
  $instance.$ctor__org_pepstock_charba_client_options_AnimationContainer__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject(parent, childKey, defaultValues, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'AnimationContainer(AbstractNode, Key, IsDefaultAnimationContainer, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_options_AnimationContainer__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultAnimationContainer */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AnimationTransition__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_commons_NativeObject(parent, childKey, defaultValues, nativeObject);
  this.f_transitions__org_pepstock_charba_client_options_AnimationContainer_ = Transitions.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTransitions__org_pepstock_charba_client_commons_NativeObject(this, Property.f_TRANSITIONS__org_pepstock_charba_client_options_AnimationContainer_Property, defaultValues.m_getTransitions__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_TRANSITIONS__org_pepstock_charba_client_options_AnimationContainer_Property));
 }
 /** @return {Transitions} */
 m_getTransitions___$pp_org_pepstock_charba_client_options() {
  return this.f_transitions__org_pepstock_charba_client_options_AnimationContainer_;
 }
 
 m_setAnimationEnabled__boolean_$pp_org_pepstock_charba_client_options(/** boolean */ enabled) {
  if (!enabled) {
   this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(AnimationTransition_Property.f_ANIMATION__org_pepstock_charba_client_options_AnimationTransition_Property, false);
  } else {
   this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(AnimationTransition_Property.f_ANIMATION__org_pepstock_charba_client_options_AnimationTransition_Property, this.m_getAnimation__().m_nativeObject___$pp_org_pepstock_charba_client_options());
  }
 }
 /** @return {boolean} */
 m_isAnimationEnabled___$pp_org_pepstock_charba_client_options() {
  return !this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(AnimationTransition_Property.f_ANIMATION__org_pepstock_charba_client_options_AnimationTransition_Property, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType);
 }
 
 static $clinit() {
  AnimationContainer.$clinit = () =>{};
  AnimationContainer.$loadModules();
  AnimationTransition.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnimationContainer;
 }
 
 static $loadModules() {
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  DataEnvelop = goog.module.get('org.pepstock.charba.client.data.DataEnvelop$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.AnimationContainer.Property$impl');
  AnimationTransition_Property = goog.module.get('org.pepstock.charba.client.options.AnimationTransition.Property$impl');
  Transitions = goog.module.get('org.pepstock.charba.client.options.Transitions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AnimationContainer, "org.pepstock.charba.client.options.AnimationContainer");

exports = AnimationContainer;

//# sourceMappingURL=AnimationContainer.js.map
