goog.module('org.pepstock.charba.client.items.ChartAreaNode$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseBoxItem = goog.require('org.pepstock.charba.client.items.BaseBoxItem$impl');

let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.BaseBoxItem.Property$impl');
let JSON_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.utils.JSON.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ChartAreaNode extends BaseBoxItem {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ChartAreaNode} */
 static $create__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<?> */ envelop) {
  ChartAreaNode.$clinit();
  let $instance = new ChartAreaNode();
  $instance.$ctor__org_pepstock_charba_client_items_ChartAreaNode__org_pepstock_charba_client_ChartEnvelop(envelop);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_ChartAreaNode__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_items_BaseBoxItem__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {ChartEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), ChartEnvelop)).m_getContent__()));
 }
 /** @return {boolean} */
 m_isConsistent__() {
  return this.m_has__arrayOf_org_pepstock_charba_client_commons_Key(/**@type {!Array<Key>}*/ ($Arrays.$init([Property.f_TOP__org_pepstock_charba_client_items_BaseBoxItem_Property, Property.f_RIGHT__org_pepstock_charba_client_items_BaseBoxItem_Property, Property.f_BOTTOM__org_pepstock_charba_client_items_BaseBoxItem_Property, Property.f_LEFT__org_pepstock_charba_client_items_BaseBoxItem_Property], Key)));
 }
 /** @override @return {?string} */
 toString() {
  return JSON_$Overlay.m_stringify__java_lang_Object(this.m_getNativeObject__());
 }
 
 static $clinit() {
  ChartAreaNode.$clinit = () =>{};
  ChartAreaNode.$loadModules();
  BaseBoxItem.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartAreaNode;
 }
 
 static $loadModules() {
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.BaseBoxItem.Property$impl');
  JSON_$Overlay = goog.module.get('org.pepstock.charba.client.utils.JSON.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ChartAreaNode, "org.pepstock.charba.client.items.ChartAreaNode");

exports = ChartAreaNode;

//# sourceMappingURL=ChartAreaNode.js.map
