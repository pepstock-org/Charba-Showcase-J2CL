goog.module('org.pepstock.charba.client.options.TicksNumberFormat$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNumberFormat = goog.require('org.pepstock.charba.client.options.AbstractNumberFormat$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultNumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');
let Ticks = goog.forwardDeclare('org.pepstock.charba.client.options.Ticks$impl');

class TicksNumberFormat extends AbstractNumberFormat {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TicksNumberFormat} */
 static $create__org_pepstock_charba_client_options_Ticks__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions__org_pepstock_charba_client_commons_NativeObject(/** Ticks */ layout, /** Key */ childKey, /** IsDefaultNumberFormatOptions */ defaultValues, /** ? */ nativeObject) {
  TicksNumberFormat.$clinit();
  let $instance = new TicksNumberFormat();
  $instance.$ctor__org_pepstock_charba_client_options_TicksNumberFormat__org_pepstock_charba_client_options_Ticks__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions__org_pepstock_charba_client_commons_NativeObject(layout, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_TicksNumberFormat__org_pepstock_charba_client_options_Ticks__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions__org_pepstock_charba_client_commons_NativeObject(/** Ticks */ layout, /** Key */ childKey, /** IsDefaultNumberFormatOptions */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractNumberFormat__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions__org_pepstock_charba_client_commons_NativeObject(layout, childKey, defaultValues, nativeObject);
 }
 
 static $clinit() {
  TicksNumberFormat.$clinit = () =>{};
  TicksNumberFormat.$loadModules();
  AbstractNumberFormat.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TicksNumberFormat;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(TicksNumberFormat, "org.pepstock.charba.client.options.TicksNumberFormat");

exports = TicksNumberFormat;

//# sourceMappingURL=TicksNumberFormat.js.map
