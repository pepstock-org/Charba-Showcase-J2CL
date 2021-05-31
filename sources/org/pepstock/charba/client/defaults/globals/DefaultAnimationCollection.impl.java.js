goog.module('org.pepstock.charba.client.defaults.globals.DefaultAnimationCollection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimationCollection = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationCollection$impl');
const AbstractDefaultAnimation = goog.require('org.pepstock.charba.client.defaults.globals.AbstractDefaultAnimation$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let FromCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FromCallback$impl');
let ToCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ToCallback$impl');
let AnimationType = goog.forwardDeclare('org.pepstock.charba.client.enums.AnimationType$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let AnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationCollectionKey$impl');
let AnimationPropertyKey = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationPropertyKey$impl');

/**
 * @implements {IsDefaultAnimationCollection}
 */
class DefaultAnimationCollection extends AbstractDefaultAnimation {
 /** @protected */
 constructor() {
  super();
  /**@type {AnimationCollectionKey}*/
  this.f_collection__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_;
 }
 //Factory method corresponding to constructor 'DefaultAnimationCollection()'.
 /** @return {!DefaultAnimationCollection} */
 static $create__() {
  DefaultAnimationCollection.$clinit();
  let $instance = new DefaultAnimationCollection();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection__();
  return $instance;
 }
 //Initialization from constructor 'DefaultAnimationCollection()'.
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultAnimation__();
  this.f_collection__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_ = null;
 }
 //Factory method corresponding to constructor 'DefaultAnimationCollection(AnimationCollectionKey)'.
 /** @return {!DefaultAnimationCollection} */
 static $create__org_pepstock_charba_client_options_AnimationCollectionKey(/** AnimationCollectionKey */ collection) {
  DefaultAnimationCollection.$clinit();
  let $instance = new DefaultAnimationCollection();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection__org_pepstock_charba_client_options_AnimationCollectionKey(collection);
  return $instance;
 }
 //Initialization from constructor 'DefaultAnimationCollection(AnimationCollectionKey)'.
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection__org_pepstock_charba_client_options_AnimationCollectionKey(/** AnimationCollectionKey */ collection) {
  this.$ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultAnimation__();
  this.f_collection__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_ = AnimationCollectionKey.m_checkAndGetIfValid__org_pepstock_charba_client_options_AnimationCollectionKey(collection);
 }
 /** @override @return {List<AnimationPropertyKey>} */
 m_getProperties__() {
  return !$Equality.$same(this.f_collection__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_, null) ? this.f_collection__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_.m_properties__() : /**@type {List<AnimationPropertyKey>}*/ (Collections.m_emptyList__());
 }
 /** @override @return {AnimationType} */
 m_getType__() {
  return !$Equality.$same(this.f_collection__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_, null) ? this.f_collection__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_.m_type__() : AnimationType.f_NUMBER__org_pepstock_charba_client_enums_AnimationType;
 }
 /** @override @return {number} */
 m_getFrom__() {
  return DefaultAnimationCollection.f_DEFAULT_FROM__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_;
 }
 /** @override @return {boolean} */
 m_getFromAsBoolean__() {
  return DefaultAnimationCollection.f_DEFAULT_FROM_AS_BOOLEAN__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_;
 }
 /** @override @return {?string} */
 m_getFromAsString__() {
  return DefaultAnimationCollection.f_DEFAULT_FROM_AS_STRING__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_;
 }
 /** @override @return {number} */
 m_getTo__() {
  return DefaultAnimationCollection.f_DEFAULT_TO__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_;
 }
 /** @override @return {boolean} */
 m_getToAsBoolean__() {
  return DefaultAnimationCollection.f_DEFAULT_TO_AS_BOOLEAN__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_;
 }
 /** @override @return {?string} */
 m_getToAsString__() {
  return DefaultAnimationCollection.f_DEFAULT_TO_AS_STRING__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_;
 }
 /** @override @return {FromCallback} */
 m_getFromCallback__() {
  return null;
 }
 /** @override @return {ToCallback} */
 m_getToCallback__() {
  return null;
 }
 
 static $clinit() {
  DefaultAnimationCollection.$clinit = () =>{};
  DefaultAnimationCollection.$loadModules();
  AbstractDefaultAnimation.$clinit();
  DefaultAnimationCollection.f_DEFAULT_FROM_AS_BOOLEAN__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_ = Undefined.f_BOOLEAN__org_pepstock_charba_client_items_Undefined;
  DefaultAnimationCollection.f_DEFAULT_FROM_AS_STRING__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_ = Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
  DefaultAnimationCollection.f_DEFAULT_TO_AS_BOOLEAN__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_ = Undefined.f_BOOLEAN__org_pepstock_charba_client_items_Undefined;
  DefaultAnimationCollection.f_DEFAULT_TO_AS_STRING__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_ = Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultAnimationCollection;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AnimationType = goog.module.get('org.pepstock.charba.client.enums.AnimationType$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  AnimationCollectionKey = goog.module.get('org.pepstock.charba.client.options.AnimationCollectionKey$impl');
 }
}
/**@const {number}*/
DefaultAnimationCollection.f_DEFAULT_FROM__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_ = NaN;
/**@type {boolean}*/
DefaultAnimationCollection.f_DEFAULT_FROM_AS_BOOLEAN__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_ = false;
/**@type {?string}*/
DefaultAnimationCollection.f_DEFAULT_FROM_AS_STRING__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_;
/**@const {number}*/
DefaultAnimationCollection.f_DEFAULT_TO__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_ = NaN;
/**@type {boolean}*/
DefaultAnimationCollection.f_DEFAULT_TO_AS_BOOLEAN__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_ = false;
/**@type {?string}*/
DefaultAnimationCollection.f_DEFAULT_TO_AS_STRING__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection_;
IsDefaultAnimationCollection.$markImplementor(DefaultAnimationCollection);
$Util.$setClassMetadata(DefaultAnimationCollection, "org.pepstock.charba.client.defaults.globals.DefaultAnimationCollection");

exports = DefaultAnimationCollection;

//# sourceMappingURL=DefaultAnimationCollection.js.map
