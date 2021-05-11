goog.module('org.pepstock.charba.client.items.OptionsNode$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ScaledOptions = goog.require('org.pepstock.charba.client.options.ScaledOptions$impl');

let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class OptionsNode extends ScaledOptions {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!OptionsNode} */
 static $create__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_ChartEnvelop(/** ?string */ chartId, /** IsDefaultScaledOptions */ defaultValues, /** ChartEnvelop<?> */ envelop) {
  OptionsNode.$clinit();
  let $instance = new OptionsNode();
  $instance.$ctor__org_pepstock_charba_client_items_OptionsNode__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_ChartEnvelop(chartId, defaultValues, envelop);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_OptionsNode__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_ChartEnvelop(/** ?string */ chartId, /** IsDefaultScaledOptions */ defaultValues, /** ChartEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_options_ScaledOptions__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_commons_NativeObject__boolean(chartId, defaultValues, /**@type {?}*/ (/**@type {ChartEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), ChartEnvelop)).m_getContent__()), true);
 }
 
 static $clinit() {
  OptionsNode.$clinit = () =>{};
  OptionsNode.$loadModules();
  ScaledOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OptionsNode;
 }
 
 static $loadModules() {
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(OptionsNode, "org.pepstock.charba.client.items.OptionsNode");

exports = OptionsNode;

//# sourceMappingURL=OptionsNode.js.map
