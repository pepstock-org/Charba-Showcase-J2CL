goog.module('org.pepstock.charba.client.options.Hover$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Interaction = goog.require('org.pepstock.charba.client.options.Interaction$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultInteraction = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultInteraction$impl');
let Options = goog.forwardDeclare('org.pepstock.charba.client.options.Options$impl');

class Hover extends Interaction {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Hover} */
 static $create__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultInteraction__org_pepstock_charba_client_commons_NativeObject(/** Options */ options, /** Key */ childKey, /** IsDefaultInteraction */ defaultValues, /** ? */ nativeObject) {
  Hover.$clinit();
  let $instance = new Hover();
  $instance.$ctor__org_pepstock_charba_client_options_Hover__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultInteraction__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Hover__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultInteraction__org_pepstock_charba_client_commons_NativeObject(/** Options */ options, /** Key */ childKey, /** IsDefaultInteraction */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_Interaction__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultInteraction__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
 }
 
 static $clinit() {
  Hover.$clinit = () =>{};
  Hover.$loadModules();
  Interaction.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Hover;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Hover, "org.pepstock.charba.client.options.Hover");

exports = Hover;

//# sourceMappingURL=Hover.js.map
