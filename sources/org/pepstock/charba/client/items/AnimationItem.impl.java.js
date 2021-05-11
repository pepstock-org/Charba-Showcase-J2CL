goog.module('org.pepstock.charba.client.items.AnimationItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Chart_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.Chart.$Overlay$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let ConfigurationEnvelop = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.AnimationItem.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AnimationItem extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AnimationItem} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** ConfigurationEnvelop<?> */ envelop) {
  AnimationItem.$clinit();
  let $instance = new AnimationItem();
  $instance.$ctor__org_pepstock_charba_client_items_AnimationItem__org_pepstock_charba_client_configuration_ConfigurationEnvelop(envelop);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_AnimationItem__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** ConfigurationEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {ConfigurationEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), ConfigurationEnvelop)).m_getContent__()));
 }
 /** @return {IsChart} */
 m_getChart__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_CHART__org_pepstock_charba_client_items_AnimationItem_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return Chart_$Overlay.m_getChart__$devirt__org_pepstock_charba_client_Chart(this.m_getNativeChart__org_pepstock_charba_client_commons_Key(Property.f_CHART__org_pepstock_charba_client_items_AnimationItem_Property));
  }
  return null;
 }
 /** @return {boolean} */
 m_isInitial__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_INITIAL__org_pepstock_charba_client_items_AnimationItem_Property, Undefined.f_BOOLEAN__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getCurrentStep__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_CURRENT_STEP__org_pepstock_charba_client_items_AnimationItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getNumSteps__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_NUM_STEPS__org_pepstock_charba_client_items_AnimationItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 
 static $clinit() {
  AnimationItem.$clinit = () =>{};
  AnimationItem.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnimationItem;
 }
 
 static $loadModules() {
  Chart_$Overlay = goog.module.get('org.pepstock.charba.client.Chart.$Overlay$impl');
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  ConfigurationEnvelop = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.AnimationItem.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AnimationItem, "org.pepstock.charba.client.items.AnimationItem");

exports = AnimationItem;

//# sourceMappingURL=AnimationItem.js.map
