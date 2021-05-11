goog.module('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalBodyFont$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultRoutedFont = goog.require('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');

let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');

class InternalBodyFont extends DefaultRoutedFont {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!InternalBodyFont} */
 static $create__() {
  InternalBodyFont.$clinit();
  let $instance = new InternalBodyFont();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalBodyFont__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalBodyFont__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultRoutedFont__();
 }
 /** @override @return {FontStyle} */
 m_getStyle__() {
  return FontStyle.f_NORMAL__org_pepstock_charba_client_enums_FontStyle;
 }
 
 static $clinit() {
  InternalBodyFont.$clinit = () =>{};
  InternalBodyFont.$loadModules();
  DefaultRoutedFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalBodyFont;
 }
 
 static $loadModules() {
  FontStyle = goog.module.get('org.pepstock.charba.client.enums.FontStyle$impl');
 }
}
$Util.$setClassMetadata(InternalBodyFont, "org.pepstock.charba.client.defaults.globals.DefaultTooltips$InternalBodyFont");

exports = InternalBodyFont;

//# sourceMappingURL=DefaultTooltips$InternalBodyFont.js.map
