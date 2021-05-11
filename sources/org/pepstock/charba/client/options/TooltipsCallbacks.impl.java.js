goog.module('org.pepstock.charba.client.options.TooltipsCallbacks$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultTooltips = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTooltips$impl');
let Tooltips = goog.forwardDeclare('org.pepstock.charba.client.options.Tooltips$impl');

/**
 * @extends {AbstractModel<Tooltips, IsDefaultTooltips>}
 */
class TooltipsCallbacks extends AbstractModel {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TooltipsCallbacks} */
 static $create__org_pepstock_charba_client_options_Tooltips__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTooltips__org_pepstock_charba_client_commons_NativeObject(/** Tooltips */ tooltips, /** Key */ childKey, /** IsDefaultTooltips */ defaultValues, /** ? */ nativeObject) {
  TooltipsCallbacks.$clinit();
  let $instance = new TooltipsCallbacks();
  $instance.$ctor__org_pepstock_charba_client_options_TooltipsCallbacks__org_pepstock_charba_client_options_Tooltips__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTooltips__org_pepstock_charba_client_commons_NativeObject(tooltips, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_TooltipsCallbacks__org_pepstock_charba_client_options_Tooltips__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTooltips__org_pepstock_charba_client_commons_NativeObject(/** Tooltips */ tooltips, /** Key */ childKey, /** IsDefaultTooltips */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(tooltips, childKey, defaultValues, nativeObject);
 }
 
 static $clinit() {
  TooltipsCallbacks.$clinit = () =>{};
  TooltipsCallbacks.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipsCallbacks;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(TooltipsCallbacks, "org.pepstock.charba.client.options.TooltipsCallbacks");

exports = TooltipsCallbacks;

//# sourceMappingURL=TooltipsCallbacks.js.map
