goog.module('org.pepstock.charba.client.items.LegendNode$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseBoxNodeItem = goog.require('org.pepstock.charba.client.items.BaseBoxNodeItem$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let ArrayDouble_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let LegendHitBoxItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendHitBoxItem$impl');
let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.LegendNode.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class LegendNode extends BaseBoxNodeItem {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LegendNode} */
 static $create__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<?> */ envelop) {
  LegendNode.$clinit();
  let $instance = new LegendNode();
  $instance.$ctor__org_pepstock_charba_client_items_LegendNode__org_pepstock_charba_client_ChartEnvelop(envelop);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_LegendNode__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_items_BaseBoxNodeItem__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {ChartEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ChartEnvelop)).m_getContent__()));
 }
 /** @return {boolean} */
 m_isDoughnutMode__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DOUGHNUT_MODE__org_pepstock_charba_client_items_LegendNode_Property, Undefined.f_BOOLEAN__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {List<?number>} */
 m_getLineWidths__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_LINE_WIDTHS__org_pepstock_charba_client_items_LegendNode_Property), ArrayDouble_$Overlay));
  return ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayDouble(array);
 }
 /** @return {List<?number>} */
 m_getColumnWidths__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_COLUMN_WIDTHS__org_pepstock_charba_client_items_LegendNode_Property), ArrayDouble_$Overlay));
  return ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayDouble(array);
 }
 /** @return {List<?number>} */
 m_getColumnHeights__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_COLUMN_HEIGHTS__org_pepstock_charba_client_items_LegendNode_Property), ArrayDouble_$Overlay));
  return ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayDouble(array);
 }
 /** @return {List<LegendHitBoxItem>} */
 m_getHitBoxes__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_LEGEND_HIT_BOXES__org_pepstock_charba_client_items_LegendNode_Property), ArrayObject_$Overlay));
  return /**@type {List<LegendHitBoxItem>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, LegendHitBoxItem.f_FACTORY__org_pepstock_charba_client_items_LegendHitBoxItem));
 }
 /** @return {List<LegendItem>} */
 m_getItems__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_LEGEND_ITEMS__org_pepstock_charba_client_items_LegendNode_Property), ArrayObject_$Overlay));
  return /**@type {List<LegendItem>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, LegendItem.f_FACTORY__org_pepstock_charba_client_items_LegendItem));
 }
 
 static $clinit() {
  LegendNode.$clinit = () =>{};
  LegendNode.$loadModules();
  BaseBoxNodeItem.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendNode;
 }
 
 static $loadModules() {
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  ArrayDouble_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  LegendHitBoxItem = goog.module.get('org.pepstock.charba.client.items.LegendHitBoxItem$impl');
  LegendItem = goog.module.get('org.pepstock.charba.client.items.LegendItem$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.LegendNode.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(LegendNode, "org.pepstock.charba.client.items.LegendNode");

exports = LegendNode;

//# sourceMappingURL=LegendNode.js.map
