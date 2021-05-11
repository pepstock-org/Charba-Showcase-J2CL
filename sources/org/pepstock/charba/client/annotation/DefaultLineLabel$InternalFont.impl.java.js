goog.module('org.pepstock.charba.client.annotation.DefaultLineLabel.InternalFont$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultRoutedFont = goog.require('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');

let LineLabel = goog.forwardDeclare('org.pepstock.charba.client.annotation.LineLabel$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');

class InternalFont extends DefaultRoutedFont {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!InternalFont} */
 static $create__() {
  InternalFont.$clinit();
  let $instance = new InternalFont();
  $instance.$ctor__org_pepstock_charba_client_annotation_DefaultLineLabel_InternalFont__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_annotation_DefaultLineLabel_InternalFont__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultRoutedFont__();
 }
 /** @override @return {FontStyle} */
 m_getStyle__() {
  return LineLabel.f_DEFAULT_FONT_STYLE__org_pepstock_charba_client_annotation_LineLabel;
 }
 
 static $clinit() {
  InternalFont.$clinit = () =>{};
  InternalFont.$loadModules();
  DefaultRoutedFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalFont;
 }
 
 static $loadModules() {
  LineLabel = goog.module.get('org.pepstock.charba.client.annotation.LineLabel$impl');
 }
}
$Util.$setClassMetadata(InternalFont, "org.pepstock.charba.client.annotation.DefaultLineLabel$InternalFont");

exports = InternalFont;

//# sourceMappingURL=DefaultLineLabel$InternalFont.js.map
