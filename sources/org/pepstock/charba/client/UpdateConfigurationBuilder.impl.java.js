goog.module('org.pepstock.charba.client.UpdateConfigurationBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UpdateConfiguration = goog.forwardDeclare('org.pepstock.charba.client.UpdateConfiguration$impl');
let Easing = goog.forwardDeclare('org.pepstock.charba.client.enums.Easing$impl');

class UpdateConfigurationBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {UpdateConfiguration}*/
  this.f_configuration__org_pepstock_charba_client_UpdateConfigurationBuilder_;
 }
 /** @return {!UpdateConfigurationBuilder} */
 static $create__() {
  let $instance = new UpdateConfigurationBuilder();
  $instance.$ctor__org_pepstock_charba_client_UpdateConfigurationBuilder__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_UpdateConfigurationBuilder__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_UpdateConfigurationBuilder();
 }
 /** @return {UpdateConfigurationBuilder} */
 static m_create__() {
  UpdateConfigurationBuilder.$clinit();
  return UpdateConfigurationBuilder.$create__();
 }
 /** @return {UpdateConfigurationBuilder} */
 m_setEasing__org_pepstock_charba_client_enums_Easing(/** Easing */ easing) {
  this.f_configuration__org_pepstock_charba_client_UpdateConfigurationBuilder_.m_setEasing__org_pepstock_charba_client_enums_Easing(easing);
  return this;
 }
 /** @return {UpdateConfigurationBuilder} */
 m_setDuration__int(/** number */ milliseconds) {
  this.f_configuration__org_pepstock_charba_client_UpdateConfigurationBuilder_.m_setDuration__int(milliseconds);
  return this;
 }
 /** @return {UpdateConfigurationBuilder} */
 m_setDelay__int(/** number */ delay) {
  this.f_configuration__org_pepstock_charba_client_UpdateConfigurationBuilder_.m_setDelay__int(delay);
  return this;
 }
 /** @return {UpdateConfigurationBuilder} */
 m_setLoop__boolean(/** boolean */ loop) {
  this.f_configuration__org_pepstock_charba_client_UpdateConfigurationBuilder_.m_setLoop__boolean(loop);
  return this;
 }
 /** @return {UpdateConfigurationBuilder} */
 m_setAnimateRotate__boolean(/** boolean */ animateRotate) {
  this.f_configuration__org_pepstock_charba_client_UpdateConfigurationBuilder_.m_setAnimateRotate__boolean(animateRotate);
  return this;
 }
 /** @return {UpdateConfigurationBuilder} */
 m_setAnimateScale__boolean(/** boolean */ animateScale) {
  this.f_configuration__org_pepstock_charba_client_UpdateConfigurationBuilder_.m_setAnimateScale__boolean(animateScale);
  return this;
 }
 /** @return {UpdateConfiguration} */
 m_build__() {
  return this.f_configuration__org_pepstock_charba_client_UpdateConfigurationBuilder_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_UpdateConfigurationBuilder() {
  this.f_configuration__org_pepstock_charba_client_UpdateConfigurationBuilder_ = UpdateConfiguration.$create__();
 }
 
 static $clinit() {
  UpdateConfigurationBuilder.$clinit = () =>{};
  UpdateConfigurationBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UpdateConfigurationBuilder;
 }
 
 static $loadModules() {
  UpdateConfiguration = goog.module.get('org.pepstock.charba.client.UpdateConfiguration$impl');
 }
}
$Util.$setClassMetadata(UpdateConfigurationBuilder, "org.pepstock.charba.client.UpdateConfigurationBuilder");

exports = UpdateConfigurationBuilder;

//# sourceMappingURL=UpdateConfigurationBuilder.js.map
