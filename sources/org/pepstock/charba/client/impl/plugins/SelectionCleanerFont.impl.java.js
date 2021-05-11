goog.module('org.pepstock.charba.client.impl.plugins.SelectionCleanerFont$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractFont = goog.require('org.pepstock.charba.client.options.AbstractFont$impl');

let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');

class SelectionCleanerFont extends AbstractFont {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SelectionCleanerFont} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultFont */ defaultValues, /** ? */ nativeObject) {
  SelectionCleanerFont.$clinit();
  let $instance = new SelectionCleanerFont();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_SelectionCleanerFont__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_SelectionCleanerFont__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultFont */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractFont__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(defaultValues, nativeObject);
 }
 
 static $clinit() {
  SelectionCleanerFont.$clinit = () =>{};
  SelectionCleanerFont.$loadModules();
  AbstractFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SelectionCleanerFont;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(SelectionCleanerFont, "org.pepstock.charba.client.impl.plugins.SelectionCleanerFont");

exports = SelectionCleanerFont;

//# sourceMappingURL=SelectionCleanerFont.js.map
