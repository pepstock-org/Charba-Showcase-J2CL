goog.module('org.pepstock.charba.client.items.ChartAreaNode$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseBoxItem = goog.require('org.pepstock.charba.client.items.BaseBoxItem$impl');

let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let JSON_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.utils.JSON.$Overlay$impl');
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
  this.$ctor__org_pepstock_charba_client_items_BaseBoxItem__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {ChartEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ChartEnvelop)).m_getContent__()));
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
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  JSON_$Overlay = goog.module.get('org.pepstock.charba.client.utils.JSON.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ChartAreaNode, "org.pepstock.charba.client.items.ChartAreaNode");

exports = ChartAreaNode;

//# sourceMappingURL=ChartAreaNode.js.map
