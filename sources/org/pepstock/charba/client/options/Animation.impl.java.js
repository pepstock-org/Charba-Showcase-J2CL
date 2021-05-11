goog.module('org.pepstock.charba.client.options.Animation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractAnimation = goog.require('org.pepstock.charba.client.options.AbstractAnimation$impl');
const IsAnimation = goog.require('org.pepstock.charba.client.options.IsAnimation$impl');

let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimation$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Animation.Property$impl');

/**
 * @extends {AbstractAnimation<Key, IsDefaultAnimation>}
 * @implements {IsAnimation}
 */
class Animation extends AbstractAnimation {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultAnimation}*/
  this.f_defaultValues__org_pepstock_charba_client_options_Animation_;
 }
 /** @return {!Animation} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimation__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultAnimation */ defaultValues, /** ? */ nativeObject) {
  Animation.$clinit();
  let $instance = new Animation();
  $instance.$ctor__org_pepstock_charba_client_options_Animation__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimation__org_pepstock_charba_client_commons_NativeObject(parent, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Animation__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimation__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultAnimation */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractAnimation__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultBaseAnimation__org_pepstock_charba_client_commons_NativeObject(parent, childKey, defaultValues, nativeObject);
  this.f_defaultValues__org_pepstock_charba_client_options_Animation_ = defaultValues;
 }
 /** @override */
 m_setAnimateRotate__boolean(/** boolean */ animateRotate) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_ANIMATE_ROTATE__org_pepstock_charba_client_options_Animation_Property, animateRotate);
 }
 /** @override @return {boolean} */
 m_isAnimateRotate__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ANIMATE_ROTATE__org_pepstock_charba_client_options_Animation_Property, this.f_defaultValues__org_pepstock_charba_client_options_Animation_.m_isAnimateRotate__());
 }
 /** @override */
 m_setAnimateScale__boolean(/** boolean */ animateScale) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_ANIMATE_SCALE__org_pepstock_charba_client_options_Animation_Property, animateScale);
 }
 /** @override @return {boolean} */
 m_isAnimateScale__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ANIMATE_SCALE__org_pepstock_charba_client_options_Animation_Property, this.f_defaultValues__org_pepstock_charba_client_options_Animation_.m_isAnimateScale__());
 }
 
 static $clinit() {
  Animation.$clinit = () =>{};
  Animation.$loadModules();
  AbstractAnimation.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Animation;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.options.Animation.Property$impl');
 }
}
IsAnimation.$markImplementor(Animation);
$Util.$setClassMetadata(Animation, "org.pepstock.charba.client.options.Animation");

exports = Animation;

//# sourceMappingURL=Animation.js.map
