goog.module('org.pepstock.charba.client.items.TooltipNode$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let TooltipModel = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipModel$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TooltipNode extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TooltipModel}*/
  this.f_model__org_pepstock_charba_client_items_TooltipNode_;
 }
 /** @return {!TooltipNode} */
 static $create__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<?> */ envelop) {
  TooltipNode.$clinit();
  let $instance = new TooltipNode();
  $instance.$ctor__org_pepstock_charba_client_items_TooltipNode__org_pepstock_charba_client_ChartEnvelop(envelop);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_TooltipNode__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<?> */ envelop) {
  this.$ctor__java_lang_Object__();
  this.f_model__org_pepstock_charba_client_items_TooltipNode_ = TooltipModel.$create__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {ChartEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ChartEnvelop)).m_getContent__()));
 }
 /** @return {TooltipModel} */
 m_getModel__() {
  return this.f_model__org_pepstock_charba_client_items_TooltipNode_;
 }
 
 static $clinit() {
  TooltipNode.$clinit = () =>{};
  TooltipNode.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipNode;
 }
 
 static $loadModules() {
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  TooltipModel = goog.module.get('org.pepstock.charba.client.items.TooltipModel$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TooltipNode, "org.pepstock.charba.client.items.TooltipNode");

exports = TooltipNode;

//# sourceMappingURL=TooltipNode.js.map
