goog.module('org.pepstock.charba.client.annotation.Font$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractScriptableFont = goog.require('org.pepstock.charba.client.options.AbstractScriptableFont$impl');

let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let LineLabel = goog.forwardDeclare('org.pepstock.charba.client.annotation.LineLabel$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');

/**
 * @extends {AbstractScriptableFont<AnnotationContext>}
 */
class Font extends AbstractScriptableFont {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Font} */
 static $create__org_pepstock_charba_client_annotation_LineLabel__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(/** LineLabel */ parent, /** IsDefaultFont */ defaultValues, /** ? */ nativeObject) {
  Font.$clinit();
  let $instance = new Font();
  $instance.$ctor__org_pepstock_charba_client_annotation_Font__org_pepstock_charba_client_annotation_LineLabel__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_annotation_Font__org_pepstock_charba_client_annotation_LineLabel__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(/** LineLabel */ parent, /** IsDefaultFont */ defaultValues, /** ? */ nativeObject) {
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
$Util.$setClassMetadata(Font, "org.pepstock.charba.client.annotation.Font");

exports = Font;

//# sourceMappingURL=Font.js.map
