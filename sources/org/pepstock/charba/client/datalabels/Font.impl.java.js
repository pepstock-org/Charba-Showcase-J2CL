goog.module('org.pepstock.charba.client.datalabels.Font$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractScriptableFont = goog.require('org.pepstock.charba.client.options.AbstractScriptableFont$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let LabelItem = goog.forwardDeclare('org.pepstock.charba.client.datalabels.LabelItem$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');

/**
 * @extends {AbstractScriptableFont<DataLabelsContext>}
 */
class Font extends AbstractScriptableFont {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Font} */
 static $create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(/** LabelItem */ parent, /** IsDefaultFont */ defaultValues, /** ? */ nativeObject) {
  Font.$clinit();
  let $instance = new Font();
  $instance.$ctor__org_pepstock_charba_client_datalabels_Font__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_Font__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(/** LabelItem */ parent, /** IsDefaultFont */ defaultValues, /** ? */ nativeObject) {
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
$Util.$setClassMetadata(Font, "org.pepstock.charba.client.datalabels.Font");

exports = Font;

//# sourceMappingURL=Font.js.map
