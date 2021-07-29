goog.module('org.pepstock.charba.client.defaults.globals.DefaultSubtitle.InternalSubtitleFont$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultRoutedFont = goog.require('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');

let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');

class InternalSubtitleFont extends DefaultRoutedFont {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!InternalSubtitleFont} */
 static $create__() {
  InternalSubtitleFont.$clinit();
  let $instance = new InternalSubtitleFont();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultSubtitle_InternalSubtitleFont__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultSubtitle_InternalSubtitleFont__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultRoutedFont__();
 }
 /** @override @return {Weight} */
 m_getWeight__() {
  return Weight.f_NORMAL__org_pepstock_charba_client_enums_Weight;
 }
 
 static $clinit() {
  InternalSubtitleFont.$clinit = () =>{};
  InternalSubtitleFont.$loadModules();
  DefaultRoutedFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalSubtitleFont;
 }
 
 static $loadModules() {
  Weight = goog.module.get('org.pepstock.charba.client.enums.Weight$impl');
 }
}
$Util.$setClassMetadata(InternalSubtitleFont, "org.pepstock.charba.client.defaults.globals.DefaultSubtitle$InternalSubtitleFont");

exports = InternalSubtitleFont;

//# sourceMappingURL=DefaultSubtitle$InternalSubtitleFont.js.map
