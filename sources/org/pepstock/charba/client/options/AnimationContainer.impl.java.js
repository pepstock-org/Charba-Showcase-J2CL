goog.module('org.pepstock.charba.client.options.AnimationContainer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AnimationTransition = goog.require('org.pepstock.charba.client.options.AnimationTransition$impl');

let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
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
 //Factory method corresponding to constructor 'AnimationContainer(IsDefaultAnimationContainer, DataEnvelop, String)'.
 /** @return {!AnimationContainer} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_data_DataEnvelop__java_lang_String(/** IsDefaultAnimationContainer */ defaultValues, /** DataEnvelop<?> */ envelop, /** ?string */ scope) {
  AnimationContainer.$clinit();
  let $instance = new AnimationContainer();
  $instance.$ctor__org_pepstock_charba_client_options_AnimationContainer__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_data_DataEnvelop__java_lang_String(defaultValues, envelop, scope);
  return $instance;
 }
 //Initialization from constructor 'AnimationContainer(IsDefaultAnimationContainer, DataEnvelop, String)'.
 
 $ctor__org_pepstock_charba_client_options_AnimationContainer__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_data_DataEnvelop__java_lang_String(/** IsDefaultAnimationContainer */ defaultValues, /** DataEnvelop<?> */ envelop, /** ?string */ scope) {
  this.$ctor__org_pepstock_charba_client_options_AnimationContainer__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject__java_lang_String(null, null, defaultValues, /**@type {?}*/ (/**@type {DataEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), DataEnvelop)).m_getContent__()), scope);
 }
 //Factory method corresponding to constructor 'AnimationContainer(AbstractNode, IsDefaultAnimationContainer, NativeObject, String)'.
 /** @return {!AnimationContainer} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** AbstractNode */ parent, /** IsDefaultAnimationContainer */ defaultValues, /** ? */ nativeObject, /** ?string */ scope) {
  AnimationContainer.$clinit();
  let $instance = new AnimationContainer();
  $instance.$ctor__org_pepstock_charba_client_options_AnimationContainer__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject__java_lang_String(parent, defaultValues, nativeObject, scope);
  return $instance;
 }
 //Initialization from constructor 'AnimationContainer(AbstractNode, IsDefaultAnimationContainer, NativeObject, String)'.
 
 $ctor__org_pepstock_charba_client_options_AnimationContainer__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** AbstractNode */ parent, /** IsDefaultAnimationContainer */ defaultValues, /** ? */ nativeObject, /** ?string */ scope) {
  this.$ctor__org_pepstock_charba_client_options_AnimationContainer__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject__java_lang_String(parent, null, defaultValues, nativeObject, scope);
 }
 //Factory method corresponding to constructor 'AnimationContainer(AbstractNode, Key, IsDefaultAnimationContainer, NativeObject, String)'.
 /** @return {!AnimationContainer} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultAnimationContainer */ defaultValues, /** ? */ nativeObject, /** ?string */ scope) {
  AnimationContainer.$clinit();
  let $instance = new AnimationContainer();
  $instance.$ctor__org_pepstock_charba_client_options_AnimationContainer__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject__java_lang_String(parent, childKey, defaultValues, nativeObject, scope);
  return $instance;
 }
 //Initialization from constructor 'AnimationContainer(AbstractNode, Key, IsDefaultAnimationContainer, NativeObject, String)'.
 
 $ctor__org_pepstock_charba_client_options_AnimationContainer__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject__java_lang_String(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultAnimationContainer */ defaultValues, /** ? */ nativeObject, /** ?string */ scope) {
  this.$ctor__org_pepstock_charba_client_options_AnimationTransition__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_commons_NativeObject__java_lang_String(parent, childKey, defaultValues, nativeObject, scope);
  this.f_transitions__org_pepstock_charba_client_options_AnimationContainer_ = Transitions.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTransitions__org_pepstock_charba_client_commons_NativeObject__java_lang_String(this, Property.f_TRANSITIONS__org_pepstock_charba_client_options_AnimationContainer_Property, defaultValues.m_getTransitions__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_TRANSITIONS__org_pepstock_charba_client_options_AnimationContainer_Property), scope);
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
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
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
