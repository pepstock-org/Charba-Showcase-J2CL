goog.module('org.pepstock.charba.client.defaults.globals.DefaultFont$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultFont = goog.require('org.pepstock.charba.client.defaults.IsDefaultFont$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let FontItem = goog.forwardDeclare('org.pepstock.charba.client.items.FontItem$impl');

/**
 * @implements {IsDefaultFont}
 */
class DefaultFont extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultFont} */
 static $create__() {
  DefaultFont.$clinit();
  let $instance = new DefaultFont();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultFont__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultFont__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {number} */
 m_getSize__() {
  return DefaultFont.f_DEFAULT_FONT_SIZE__org_pepstock_charba_client_defaults_globals_DefaultFont_;
 }
 /** @override @return {FontStyle} */
 m_getStyle__() {
  return FontStyle.f_NORMAL__org_pepstock_charba_client_enums_FontStyle;
 }
 /** @override @return {?string} */
 m_getFamily__() {
  return DefaultFont.f_DEFAULT_FONT_FAMILY__org_pepstock_charba_client_defaults_globals_DefaultFont_;
 }
 /** @override @return {Weight} */
 m_getWeight__() {
  return Weight.f_NORMAL__org_pepstock_charba_client_enums_Weight;
 }
 /** @override @return {number} */
 m_getLineHeight__() {
  return DefaultFont.f_DEFAULT_LINE_HEIGHT__org_pepstock_charba_client_defaults_globals_DefaultFont_;
 }
 /** @override @return {?string} */
 m_getLineHeightAsString__() {
  return DefaultFont.f_DEFAULT_LINE_HEIGHT_STRING__org_pepstock_charba_client_defaults_globals_DefaultFont_;
 }
 //Default method forwarding stub.
 /** @override @return {FontItem} */
 m_create__() {
  return IsDefaultFont.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultFont(this);
 }
 //Default method forwarding stub.
 /** @override @return {FontItem} */
 m_create__org_pepstock_charba_client_defaults_IsDefaultFont(/** IsDefaultFont */ arg0) {
  return IsDefaultFont.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_defaults_IsDefaultFont(this, arg0);
 }
 
 static $clinit() {
  DefaultFont.$clinit = () =>{};
  DefaultFont.$loadModules();
  j_l_Object.$clinit();
  IsDefaultFont.$clinit();
  DefaultFont.f_DEFAULT_LINE_HEIGHT_STRING__org_pepstock_charba_client_defaults_globals_DefaultFont_ = j_l_String.m_valueOf__double(DefaultFont.f_DEFAULT_LINE_HEIGHT__org_pepstock_charba_client_defaults_globals_DefaultFont_);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultFont;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  FontStyle = goog.module.get('org.pepstock.charba.client.enums.FontStyle$impl');
  Weight = goog.module.get('org.pepstock.charba.client.enums.Weight$impl');
 }
}
/**@const {number}*/
DefaultFont.f_DEFAULT_FONT_SIZE__org_pepstock_charba_client_defaults_globals_DefaultFont_ = 12;
/**@const {?string}*/
DefaultFont.f_DEFAULT_FONT_FAMILY__org_pepstock_charba_client_defaults_globals_DefaultFont_ = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
/**@const {number}*/
DefaultFont.f_DEFAULT_LINE_HEIGHT__org_pepstock_charba_client_defaults_globals_DefaultFont_ = 1.2;
/**@type {?string}*/
DefaultFont.f_DEFAULT_LINE_HEIGHT_STRING__org_pepstock_charba_client_defaults_globals_DefaultFont_;
IsDefaultFont.$markImplementor(DefaultFont);
$Util.$setClassMetadata(DefaultFont, "org.pepstock.charba.client.defaults.globals.DefaultFont");

exports = DefaultFont;

//# sourceMappingURL=DefaultFont.js.map
