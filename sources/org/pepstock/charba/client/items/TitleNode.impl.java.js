goog.module('org.pepstock.charba.client.items.TitleNode$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseBoxNodeItem = goog.require('org.pepstock.charba.client.items.BaseBoxNodeItem$impl');

let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TitleNode extends BaseBoxNodeItem {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TitleNode} */
 static $create__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<?> */ envelop) {
  TitleNode.$clinit();
  let $instance = new TitleNode();
  $instance.$ctor__org_pepstock_charba_client_items_TitleNode__org_pepstock_charba_client_ChartEnvelop(envelop);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_TitleNode__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_items_BaseBoxNodeItem__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {ChartEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ChartEnvelop)).m_getContent__()));
 }
 
 static $clinit() {
  TitleNode.$clinit = () =>{};
  TitleNode.$loadModules();
  BaseBoxNodeItem.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TitleNode;
 }
 
 static $loadModules() {
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TitleNode, "org.pepstock.charba.client.items.TitleNode");

exports = TitleNode;

//# sourceMappingURL=TitleNode.js.map
