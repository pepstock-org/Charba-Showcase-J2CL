goog.module('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalTitleFont$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultRoutedFont = goog.require('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');

let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');

class InternalTitleFont extends DefaultRoutedFont {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!InternalTitleFont} */
 static $create__() {
  InternalTitleFont.$clinit();
  let $instance = new InternalTitleFont();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalTitleFont__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalTitleFont__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultRoutedFont__();
 }
 /** @override @return {Weight} */
 m_getWeight__() {
  return Weight.f_BOLD__org_pepstock_charba_client_enums_Weight;
 }
 
 static $clinit() {
  InternalTitleFont.$clinit = () =>{};
  InternalTitleFont.$loadModules();
  DefaultRoutedFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalTitleFont;
 }
 
 static $loadModules() {
  Weight = goog.module.get('org.pepstock.charba.client.enums.Weight$impl');
 }
}
$Util.$setClassMetadata(InternalTitleFont, "org.pepstock.charba.client.defaults.globals.DefaultTooltips$InternalTitleFont");

exports = InternalTitleFont;

//# sourceMappingURL=DefaultTooltips$InternalTitleFont.js.map
