goog.module('org.pepstock.charba.client.options.Animations$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');
const IsAnimations = goog.require('org.pepstock.charba.client.options.IsAnimations$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let IsDefaultAnimations = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimations$impl');
let DefaultAnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultAnimationCollection$impl');
let AnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationCollection$impl');
let AnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationCollectionKey$impl');

/**
 * @implements {IsAnimations}
 */
class Animations extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultAnimations}*/
  this.f_defaultValues__org_pepstock_charba_client_options_Animations_;
 }
 /** @return {!Animations} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimations__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultAnimations */ defaultValues, /** ? */ nativeObject) {
  Animations.$clinit();
  let $instance = new Animations();
  $instance.$ctor__org_pepstock_charba_client_options_Animations__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimations__org_pepstock_charba_client_commons_NativeObject(parent, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Animations__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimations__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultAnimations */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(parent, childKey, nativeObject);
  this.f_defaultValues__org_pepstock_charba_client_options_Animations_ = defaultValues;
 }
 /** @override */
 m_setEnabled__org_pepstock_charba_client_options_AnimationCollectionKey__boolean(/** AnimationCollectionKey */ collection, /** boolean */ enabled) {
  if (AnimationCollectionKey.m_isValid__org_pepstock_charba_client_options_AnimationCollectionKey(collection)) {
   if (enabled) {
    if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(collection, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType)) {
     this.m_remove__org_pepstock_charba_client_options_AnimationCollectionKey(collection);
    }
   } else {
    this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(collection, false);
   }
  }
 }
 /** @override @return {boolean} */
 m_isEnabled__org_pepstock_charba_client_options_AnimationCollectionKey(/** AnimationCollectionKey */ collection) {
  return AnimationCollectionKey.m_isValid__org_pepstock_charba_client_options_AnimationCollectionKey(collection) && !this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(collection, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @override @return {boolean} */
 m_has__org_pepstock_charba_client_options_AnimationCollectionKey(/** AnimationCollectionKey */ collection) {
  if (AnimationCollectionKey.m_isValid__org_pepstock_charba_client_options_AnimationCollectionKey(collection)) {
   return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(collection, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType);
  }
  return false;
 }
 /** @override @return {AnimationCollection} */
 m_get__org_pepstock_charba_client_options_AnimationCollectionKey(/** AnimationCollectionKey */ collection) {
  if (this.m_has__org_pepstock_charba_client_options_AnimationCollectionKey(collection)) {
   let defaultCollection = this.f_defaultValues__org_pepstock_charba_client_options_Animations_.m_get__org_pepstock_charba_client_options_AnimationCollectionKey(collection);
   return AnimationCollection.$create__org_pepstock_charba_client_options_Animations__org_pepstock_charba_client_options_AnimationCollectionKey__org_pepstock_charba_client_defaults_IsDefaultAnimationCollection__org_pepstock_charba_client_commons_NativeObject(this, collection, $Equality.$same(defaultCollection, null) ? DefaultAnimationCollection.$create__org_pepstock_charba_client_options_AnimationCollectionKey(collection) : defaultCollection, this.m_getValue__org_pepstock_charba_client_commons_Key(collection));
  }
  return null;
 }
 /** @override */
 m_set__org_pepstock_charba_client_options_AnimationCollectionKey__org_pepstock_charba_client_options_AnimationCollection(/** AnimationCollectionKey */ collection, /** AnimationCollection */ animationCollection) {
  if (AnimationCollectionKey.m_isValid__org_pepstock_charba_client_options_AnimationCollectionKey(collection)) {
   this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(collection, animationCollection);
  }
 }
 /** @override @return {AnimationCollection} */
 m_create__org_pepstock_charba_client_options_AnimationCollectionKey(/** AnimationCollectionKey */ collection) {
  let defaultCollection = this.f_defaultValues__org_pepstock_charba_client_options_Animations_.m_get__org_pepstock_charba_client_options_AnimationCollectionKey(collection);
  let options = AnimationCollection.$create__org_pepstock_charba_client_options_Animations__org_pepstock_charba_client_options_AnimationCollectionKey__org_pepstock_charba_client_defaults_IsDefaultAnimationCollection__org_pepstock_charba_client_commons_NativeObject(this, collection, $Equality.$same(defaultCollection, null) ? DefaultAnimationCollection.$create__org_pepstock_charba_client_options_AnimationCollectionKey(collection) : defaultCollection, null);
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(collection, options);
  return options;
 }
 /** @override */
 m_remove__org_pepstock_charba_client_options_AnimationCollectionKey(/** AnimationCollectionKey */ collection) {
  if (AnimationCollectionKey.m_isValid__org_pepstock_charba_client_options_AnimationCollectionKey(collection)) {
   this.m_remove__org_pepstock_charba_client_options_AnimationCollectionKey(collection);
  }
 }
 
 static $clinit() {
  Animations.$clinit = () =>{};
  Animations.$loadModules();
  AbstractNode.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Animations;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  DefaultAnimationCollection = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultAnimationCollection$impl');
  AnimationCollection = goog.module.get('org.pepstock.charba.client.options.AnimationCollection$impl');
  AnimationCollectionKey = goog.module.get('org.pepstock.charba.client.options.AnimationCollectionKey$impl');
 }
}
IsAnimations.$markImplementor(Animations);
$Util.$setClassMetadata(Animations, "org.pepstock.charba.client.options.Animations");

exports = Animations;

//# sourceMappingURL=Animations.js.map
