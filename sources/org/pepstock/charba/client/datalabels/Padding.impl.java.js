goog.module('org.pepstock.charba.client.datalabels.Padding$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractScriptablePadding = goog.require('org.pepstock.charba.client.options.AbstractScriptablePadding$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let LabelItem = goog.forwardDeclare('org.pepstock.charba.client.datalabels.LabelItem$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');

/**
 * @extends {AbstractScriptablePadding<DataLabelsContext>}
 */
class Padding extends AbstractScriptablePadding {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Padding} */
 static $create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_commons_NativeObject(/** LabelItem */ parent, /** IsDefaultPadding */ defaultOptions, /** ? */ nativeObject) {
  Padding.$clinit();
  let $instance = new Padding();
  $instance.$ctor__org_pepstock_charba_client_datalabels_Padding__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_commons_NativeObject(parent, defaultOptions, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_Padding__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_commons_NativeObject(/** LabelItem */ parent, /** IsDefaultPadding */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractScriptablePadding__org_pepstock_charba_client_options_IsScriptablePaddingProvider__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_commons_NativeObject(parent, defaultOptions, nativeObject);
 }
 
 static $clinit() {
  Padding.$clinit = () =>{};
  Padding.$loadModules();
  AbstractScriptablePadding.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Padding;
 }
 
 static $loadModules() {}
}
/**@const {number}*/
Padding.f_DEFAULT_PADDING__org_pepstock_charba_client_datalabels_Padding = 4;
$Util.$setClassMetadata(Padding, "org.pepstock.charba.client.datalabels.Padding");

exports = Padding;

//# sourceMappingURL=Padding.js.map
