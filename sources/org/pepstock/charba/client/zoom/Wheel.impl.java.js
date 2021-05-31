goog.module('org.pepstock.charba.client.zoom.Wheel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');
const IsDefaultWheel = goog.require('org.pepstock.charba.client.zoom.IsDefaultWheel$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ModifierKey = goog.forwardDeclare('org.pepstock.charba.client.enums.ModifierKey$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.zoom.Wheel.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultWheel}
 */
class Wheel extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultWheel}*/
  this.f_defaultOptions__org_pepstock_charba_client_zoom_Wheel_;
 }
 /** @return {!Wheel} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_zoom_IsDefaultWheel__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultWheel */ defaultOptions, /** ? */ nativeObject) {
  Wheel.$clinit();
  let $instance = new Wheel();
  $instance.$ctor__org_pepstock_charba_client_zoom_Wheel__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_zoom_IsDefaultWheel__org_pepstock_charba_client_commons_NativeObject(parent, childKey, defaultOptions, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_Wheel__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_zoom_IsDefaultWheel__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultWheel */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(parent, childKey, nativeObject);
  this.f_defaultOptions__org_pepstock_charba_client_zoom_Wheel_ = /**@type {IsDefaultWheel}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultOptions), IsDefaultWheel));
 }
 
 m_setEnabled__boolean(/** boolean */ enabled) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_zoom_Wheel_Property, enabled);
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_zoom_Wheel_Property, this.f_defaultOptions__org_pepstock_charba_client_zoom_Wheel_.m_isEnabled__());
 }
 
 m_setSpeed__double(/** number */ speed) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_SPEED__org_pepstock_charba_client_zoom_Wheel_Property, Checker.m_checkAndGetIfBetween__double__double__double__java_lang_String(speed, 0, 1, "Speed value"));
 }
 /** @override @return {number} */
 m_getSpeed__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_SPEED__org_pepstock_charba_client_zoom_Wheel_Property, this.f_defaultOptions__org_pepstock_charba_client_zoom_Wheel_.m_getSpeed__());
 }
 
 m_setModifierKey__org_pepstock_charba_client_enums_ModifierKey(/** ModifierKey */ modifierKey) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MODIFIER_KEY__org_pepstock_charba_client_zoom_Wheel_Property, modifierKey);
 }
 /** @override @return {ModifierKey} */
 m_getModifierKey__() {
  return /**@type {ModifierKey}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MODIFIER_KEY__org_pepstock_charba_client_zoom_Wheel_Property, ModifierKey.m_values__(), this.f_defaultOptions__org_pepstock_charba_client_zoom_Wheel_.m_getModifierKey__()), ModifierKey));
 }
 
 static $clinit() {
  Wheel.$clinit = () =>{};
  Wheel.$loadModules();
  AbstractNode.$clinit();
  IsDefaultWheel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Wheel;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ModifierKey = goog.module.get('org.pepstock.charba.client.enums.ModifierKey$impl');
  Property = goog.module.get('org.pepstock.charba.client.zoom.Wheel.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {boolean}*/
Wheel.f_DEFAULT_ENABLED__org_pepstock_charba_client_zoom_Wheel = false;
/**@const {number}*/
Wheel.f_DEFAULT_SPEED__org_pepstock_charba_client_zoom_Wheel = 0.1;
IsDefaultWheel.$markImplementor(Wheel);
$Util.$setClassMetadata(Wheel, "org.pepstock.charba.client.zoom.Wheel");

exports = Wheel;

//# sourceMappingURL=Wheel.js.map
