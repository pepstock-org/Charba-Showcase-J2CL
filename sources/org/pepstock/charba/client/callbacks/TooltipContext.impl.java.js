goog.module('org.pepstock.charba.client.callbacks.TooltipContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartContext = goog.require('org.pepstock.charba.client.callbacks.ChartContext$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CallbacksEnvelop = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CallbacksEnvelop$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TooltipContext.Property$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');
let TooltipModel = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipModel$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TooltipContext extends ChartContext {
 /** @protected */
 constructor() {
  super();
  /**@type {TooltipModel}*/
  this.f_model__org_pepstock_charba_client_callbacks_TooltipContext_;
  /**@type {List<TooltipItem>}*/
  this.f_items__org_pepstock_charba_client_callbacks_TooltipContext_;
 }
 /** @return {!TooltipContext} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  TooltipContext.$clinit();
  let $instance = new TooltipContext();
  $instance.$ctor__org_pepstock_charba_client_callbacks_TooltipContext__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_callbacks_TooltipContext__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.$init___$p_org_pepstock_charba_client_callbacks_TooltipContext();
 }
 /** @return {TooltipModel} */
 m_getModel__() {
  if ($Equality.$same(this.f_model__org_pepstock_charba_client_callbacks_TooltipContext_, null)) {
   this.f_model__org_pepstock_charba_client_callbacks_TooltipContext_ = TooltipModel.$create__org_pepstock_charba_client_callbacks_CallbacksEnvelop(/**@type {!CallbacksEnvelop<?>}*/ (CallbacksEnvelop.$create__java_lang_Object__boolean(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_TOOLTIP__org_pepstock_charba_client_callbacks_TooltipContext_Property), true)));
  }
  return this.f_model__org_pepstock_charba_client_callbacks_TooltipContext_;
 }
 /** @return {List<TooltipItem>} */
 m_getItems__() {
  if ($Equality.$same(this.f_items__org_pepstock_charba_client_callbacks_TooltipContext_, null)) {
   let objects = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_TOOLTIP_ITEMS__org_pepstock_charba_client_callbacks_TooltipContext_Property), ArrayObject_$Overlay));
   this.f_items__org_pepstock_charba_client_callbacks_TooltipContext_ = /**@type {List<TooltipItem>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(objects, TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem));
  }
  return this.f_items__org_pepstock_charba_client_callbacks_TooltipContext_;
 }
 /** @override @return {boolean} */
 m_checkIfPropertyIsValid__org_pepstock_charba_client_commons_Key(/** Key */ property) {
  if (super.m_checkIfPropertyIsValid__org_pepstock_charba_client_commons_Key(property)) {
   return !Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(Property.m_values__(), property.m_value__());
  }
  return false;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_callbacks_TooltipContext() {
  this.f_model__org_pepstock_charba_client_callbacks_TooltipContext_ = null;
  this.f_items__org_pepstock_charba_client_callbacks_TooltipContext_ = null;
 }
 
 static $clinit() {
  TooltipContext.$clinit = () =>{};
  TooltipContext.$loadModules();
  ChartContext.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipContext;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CallbacksEnvelop = goog.module.get('org.pepstock.charba.client.callbacks.CallbacksEnvelop$impl');
  Property = goog.module.get('org.pepstock.charba.client.callbacks.TooltipContext.Property$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  TooltipItem = goog.module.get('org.pepstock.charba.client.items.TooltipItem$impl');
  TooltipModel = goog.module.get('org.pepstock.charba.client.items.TooltipModel$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TooltipContext, "org.pepstock.charba.client.callbacks.TooltipContext");

exports = TooltipContext;

//# sourceMappingURL=TooltipContext.js.map
