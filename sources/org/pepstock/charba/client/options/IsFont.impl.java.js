goog.module('org.pepstock.charba.client.options.IsFont$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultFont = goog.require('org.pepstock.charba.client.defaults.IsDefaultFont$impl');

let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');

/**
 * @interface
 * @extends {IsDefaultFont}
 */
class IsFont {
 /** @abstract */
 m_setSize__int(/** number */ size) {}
 /** @abstract */
 m_setStyle__org_pepstock_charba_client_enums_FontStyle(/** FontStyle */ style) {}
 /** @abstract */
 m_setFamily__java_lang_String(/** ?string */ family) {}
 /** @abstract */
 m_setWeight__org_pepstock_charba_client_enums_Weight(/** Weight */ weight) {}
 /** @abstract */
 m_setLineHeight__double(/** number */ lineHeight) {}
 /** @abstract */
 m_setLineHeight__java_lang_String(/** ?string */ lineHeight) {}
 
 static $clinit() {
  IsFont.$clinit = () =>{};
  IsFont.$loadModules();
  IsDefaultFont.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultFont.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_IsFont = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_IsFont;
 }
 
 static $loadModules() {}
}
IsFont.$markImplementor(/**@type {Function}*/ (IsFont));
$Util.$setClassMetadataForInterface(IsFont, "org.pepstock.charba.client.options.IsFont");

exports = IsFont;

//# sourceMappingURL=IsFont.js.map
