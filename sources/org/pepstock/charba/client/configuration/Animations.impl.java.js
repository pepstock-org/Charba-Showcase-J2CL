goog.module('org.pepstock.charba.client.configuration.Animations$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDynamicConfiguration = goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration$impl');
const IsAnimations = goog.require('org.pepstock.charba.client.options.IsAnimations$impl');

let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let AnimationCollection = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationCollection$impl');
let IsAnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsAnimationCollectionKey$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractDynamicConfiguration<IsAnimations>}
 * @implements {IsAnimations}
 */
class Animations extends AbstractDynamicConfiguration {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Animations} */
 static $create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsProvider<IsAnimations> */ provider) {
  Animations.$clinit();
  let $instance = new Animations();
  $instance.$ctor__org_pepstock_charba_client_configuration_Animations__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(provider);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Animations__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsProvider<IsAnimations> */ provider) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(provider);
 }
 /** @override */
 m_setEnabled__org_pepstock_charba_client_options_IsAnimationCollectionKey__boolean(/** IsAnimationCollectionKey */ collection, /** boolean */ enabled) {
  /**@type {IsAnimations}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimations)).m_setEnabled__org_pepstock_charba_client_options_IsAnimationCollectionKey__boolean(collection, enabled);
 }
 /** @override @return {boolean} */
 m_isEnabled__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {
  return /**@type {IsAnimations}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimations)).m_isEnabled__org_pepstock_charba_client_options_IsAnimationCollectionKey(collection);
 }
 /** @override @return {boolean} */
 m_has__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {
  return /**@type {IsAnimations}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimations)).m_has__org_pepstock_charba_client_options_IsAnimationCollectionKey(collection);
 }
 /** @override @return {AnimationCollection} */
 m_get__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {
  return /**@type {IsAnimations}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimations)).m_get__org_pepstock_charba_client_options_IsAnimationCollectionKey(collection);
 }
 /** @override */
 m_set__org_pepstock_charba_client_options_IsAnimationCollectionKey__org_pepstock_charba_client_options_AnimationCollection(/** IsAnimationCollectionKey */ collection, /** AnimationCollection */ animationCollection) {
  /**@type {IsAnimations}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimations)).m_set__org_pepstock_charba_client_options_IsAnimationCollectionKey__org_pepstock_charba_client_options_AnimationCollection(collection, animationCollection);
 }
 /** @override @return {AnimationCollection} */
 m_create__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {
  return /**@type {IsAnimations}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimations)).m_create__org_pepstock_charba_client_options_IsAnimationCollectionKey(collection);
 }
 /** @override */
 m_remove__org_pepstock_charba_client_options_IsAnimationCollectionKey(/** IsAnimationCollectionKey */ collection) {
  /**@type {IsAnimations}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimations)).m_remove__org_pepstock_charba_client_options_IsAnimationCollectionKey(collection);
 }
 
 static $clinit() {
  Animations.$clinit = () =>{};
  Animations.$loadModules();
  AbstractDynamicConfiguration.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Animations;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsAnimations.$markImplementor(Animations);
$Util.$setClassMetadata(Animations, "org.pepstock.charba.client.configuration.Animations");

exports = Animations;

//# sourceMappingURL=Animations.js.map
