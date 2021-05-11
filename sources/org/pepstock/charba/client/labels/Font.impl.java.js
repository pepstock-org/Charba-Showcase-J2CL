goog.module('org.pepstock.charba.client.labels.Font$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractScriptableFont = goog.require('org.pepstock.charba.client.options.AbstractScriptableFont$impl');

let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let Label = goog.forwardDeclare('org.pepstock.charba.client.labels.Label$impl');
let LabelsContext = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsContext$impl');

/**
 * @extends {AbstractScriptableFont<LabelsContext>}
 */
class Font extends AbstractScriptableFont {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Font} */
 static $create__org_pepstock_charba_client_labels_Label__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(/** Label */ parent, /** IsDefaultFont */ defaultValues, /** ? */ nativeObject) {
  Font.$clinit();
  let $instance = new Font();
  $instance.$ctor__org_pepstock_charba_client_labels_Font__org_pepstock_charba_client_labels_Label__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_labels_Font__org_pepstock_charba_client_labels_Label__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(/** Label */ parent, /** IsDefaultFont */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractScriptableFont__org_pepstock_charba_client_options_IsScriptableFontProvider__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
 }
 
 static $clinit() {
  Font.$clinit = () =>{};
  Font.$loadModules();
  AbstractScriptableFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Font;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(Font, "org.pepstock.charba.client.labels.Font");

exports = Font;

//# sourceMappingURL=Font.js.map
