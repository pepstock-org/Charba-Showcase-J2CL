goog.module('org.pepstock.charba.client.UpdateConfiguration$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
const IsAnimation = goog.require('org.pepstock.charba.client.options.IsAnimation$impl');
const IsAnimations = goog.require('org.pepstock.charba.client.options.IsAnimations$impl');

let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let DefaultTransitions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTransitions$impl');
let Easing = goog.forwardDeclare('org.pepstock.charba.client.enums.Easing$impl');
let AnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationCollection$impl');
let AnimationTransition = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationTransition$impl');
let IsAnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsAnimationCollectionKey$impl');
let IsTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsTransitionKey$impl');

/**
 * @implements {IsAnimation}
 * @implements {IsAnimations}
 */
class UpdateConfiguration extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {AnimationTransition}*/
  this.f_transition__org_pepstock_charba_client_UpdateConfiguration_;
 }
 /** @return {!UpdateConfiguration} */
 static $create__() {
  UpdateConfiguration.$clinit();
  let $instance = new UpdateConfiguration();
  $instance.$ctor__org_pepstock_charba_client_UpdateConfiguration__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_UpdateConfiguration__() {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__();
  this.f_transition__org_pepstock_charba_client_UpdateConfiguration_ = AnimationTransition.$create__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationTransition__org_pepstock_charba_client_ChartEnvelop(UpdateConfiguration.$static_UPDATE__org_pepstock_charba_client_UpdateConfiguration, DefaultTransitions.f_DEFAULT_ANIMATION_TRANSITION__org_pepstock_charba_client_defaults_globals_DefaultTransitions, /**@type {!ChartEnvelop<?>}*/ (ChartEnvelop.$create__java_lang_Object(this.m_getNativeObject__())));
 }
 /** @return {AnimationTransition} */
 m_getTransition___$pp_org_pepstock_charba_client() {
  return this.f_transition__org_pepstock_charba_client_UpdateConfiguration_;
 }
 /** @override */
 m_setEasing__org_pepstock_charba_client_enums_Easing(/** Easing */ easing) {
  this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimation__().m_setEasing__org_pepstock_charba_client_enums_Easing(easing);
 }
 /** @override @return {Easing} */
 m_getEasing__() {
  return this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimation__().m_getEasing__();
 }
 /** @override */
 m_setDuration__int(/** number */ milliseconds) {
  this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimation__().m_setDuration__int(milliseconds);
 }
 /** @override @return {number} */
 m_getDuration__() {
  return this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimation__().m_getDuration__();
 }
 /** @override */
 m_setDelay__int(/** number */ delay) {
  this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimation__().m_setDelay__int(delay);
 }
 /** @override @return {number} */
 m_getDelay__() {
  return this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimation__().m_getDelay__();
 }
 /** @override */
 m_setLoop__boolean(/** boolean */ loop) {
  this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimation__().m_setLoop__boolean(loop);
 }
 /** @override @return {boolean} */
 m_isLoop__() {
  return this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimation__().m_isLoop__();
 }
 /** @override */
 m_setAnimateRotate__boolean(/** boolean */ animateRotate) {
  this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimation__().m_setAnimateRotate__boolean(animateRotate);
 }
 /** @override @return {boolean} */
 m_isAnimateRotate__() {
  return this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimation__().m_isAnimateRotate__();
 }
 /** @override */
 m_setAnimateScale__boolean(/** boolean */ animateScale) {
  this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimation__().m_setAnimateScale__boolean(animateScale);
 }
 /** @override @return {boolean} */
 m_isAnimateScale__() {
  return this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimation__().m_isAnimateScale__();
 }
 /** @override */
 m_setEnabled__org_pepstock_charba_client_options_IsAnimationCollectionKey__boolean(/** IsAnimationCollectionKey */ collection, /** boolean */ enabled) {
  this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimations__().m_setEnabled__org_pepstock_charba_client_options_IsAnimationCollectionKey__boolean(collection, enabled);
 }
 /** @override @return {boolean} */
 m_isEnabled__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {
  return this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimations__().m_isEnabled__org_pepstock_charba_client_options_IsAnimationCollectionKey(collection);
 }
 /** @override @return {boolean} */
 m_has__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {
  return this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimations__().m_has__org_pepstock_charba_client_options_IsAnimationCollectionKey(collection);
 }
 /** @override @return {AnimationCollection} */
 m_get__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {
  return this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimations__().m_get__org_pepstock_charba_client_options_IsAnimationCollectionKey(collection);
 }
 /** @override */
 m_set__org_pepstock_charba_client_options_IsAnimationCollectionKey__org_pepstock_charba_client_options_AnimationCollection(/** IsAnimationCollectionKey */ collection, /** AnimationCollection */ animationCollection) {
  this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimations__().m_set__org_pepstock_charba_client_options_IsAnimationCollectionKey__org_pepstock_charba_client_options_AnimationCollection(collection, animationCollection);
 }
 /** @override @return {AnimationCollection} */
 m_create__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {
  return this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimations__().m_create__org_pepstock_charba_client_options_IsAnimationCollectionKey(collection);
 }
 /** @override */
 m_remove__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {
  this.f_transition__org_pepstock_charba_client_UpdateConfiguration_.m_getAnimations__().m_remove__org_pepstock_charba_client_options_IsAnimationCollectionKey(collection);
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client() {
  return this.m_getNativeObject__();
 }
 /** @return {IsTransitionKey} */
 static get f_UPDATE__org_pepstock_charba_client_UpdateConfiguration() {
  return (UpdateConfiguration.$clinit(), UpdateConfiguration.$static_UPDATE__org_pepstock_charba_client_UpdateConfiguration);
 }
 
 static $clinit() {
  UpdateConfiguration.$clinit = () =>{};
  UpdateConfiguration.$loadModules();
  NativeObjectContainer.$clinit();
  UpdateConfiguration.$static_UPDATE__org_pepstock_charba_client_UpdateConfiguration = IsTransitionKey.m_create__java_lang_String(UpdateConfiguration.f_UPDATE_MODE_KEY__org_pepstock_charba_client_UpdateConfiguration_);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UpdateConfiguration;
 }
 
 static $loadModules() {
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  DefaultTransitions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTransitions$impl');
  AnimationTransition = goog.module.get('org.pepstock.charba.client.options.AnimationTransition$impl');
  IsTransitionKey = goog.module.get('org.pepstock.charba.client.options.IsTransitionKey$impl');
 }
}
/**@const {?string}*/
UpdateConfiguration.f_UPDATE_MODE_KEY__org_pepstock_charba_client_UpdateConfiguration_ = "charbaupdate";
/**@private {IsTransitionKey}*/
UpdateConfiguration.$static_UPDATE__org_pepstock_charba_client_UpdateConfiguration;
IsAnimation.$markImplementor(UpdateConfiguration);
IsAnimations.$markImplementor(UpdateConfiguration);
$Util.$setClassMetadata(UpdateConfiguration, "org.pepstock.charba.client.UpdateConfiguration");

exports = UpdateConfiguration;

//# sourceMappingURL=UpdateConfiguration.js.map
