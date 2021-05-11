goog.module('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let BorderStyle = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.BorderStyle$impl');
let CursorType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.CursorType$impl');
let Display = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.Display$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.Position$impl');
let TextDecoration = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.TextDecoration$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {BorderStyle} */
 static m_getBorderStyle__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties(/** !CSSStyleDeclaration */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {BorderStyle}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String__org_pepstock_charba_client_commons_Key(BorderStyle.m_values__(), $thisArg.borderStyle, BorderStyle.f_NONE__org_pepstock_charba_client_dom_enums_BorderStyle), BorderStyle));
 }
 
 static m_setBorderStyle__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_BorderStyle(/** !CSSStyleDeclaration */ $thisArg, /** BorderStyle */ borderStyle) {
  $Overlay.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(borderStyle)) {
   $thisArg.borderStyle = borderStyle.m_value__();
  }
 }
 /** @return {CursorType} */
 static m_getCursorType__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties(/** !CSSStyleDeclaration */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {CursorType}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String__org_pepstock_charba_client_commons_Key(CursorType.m_values__(), $thisArg.cursor, CursorType.f_DEFAULT__org_pepstock_charba_client_dom_enums_CursorType), CursorType));
 }
 
 static m_setCursorType__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_CursorType(/** !CSSStyleDeclaration */ $thisArg, /** CursorType */ cursor) {
  $Overlay.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(cursor)) {
   $thisArg.cursor = cursor.m_value__();
  } else {
   $thisArg.cursor = CursorType.f_DEFAULT__org_pepstock_charba_client_dom_enums_CursorType.m_value__();
  }
 }
 /** @return {Display} */
 static m_getDisplay__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties(/** !CSSStyleDeclaration */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Display}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String__org_pepstock_charba_client_commons_Key(Display.m_values__(), $thisArg.display, Display.f_BLOCK__org_pepstock_charba_client_dom_enums_Display), Display));
 }
 
 static m_setDisplay__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_Display(/** !CSSStyleDeclaration */ $thisArg, /** Display */ display) {
  $Overlay.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(display)) {
   $thisArg.display = display.m_value__();
  }
 }
 /** @return {Position} */
 static m_getPosition__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties(/** !CSSStyleDeclaration */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Position}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String__org_pepstock_charba_client_commons_Key(Position.m_values__(), $thisArg.position, Position.f_RELATIVE__org_pepstock_charba_client_dom_enums_Position), Position));
 }
 
 static m_setPosition__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_Position(/** !CSSStyleDeclaration */ $thisArg, /** Position */ position) {
  $Overlay.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(position)) {
   $thisArg.position = position.m_value__();
  }
 }
 /** @return {TextDecoration} */
 static m_getTextDecoration__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties(/** !CSSStyleDeclaration */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {TextDecoration}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String__org_pepstock_charba_client_commons_Key(TextDecoration.m_values__(), $thisArg.textDecoration, TextDecoration.f_NONE__org_pepstock_charba_client_dom_enums_TextDecoration), TextDecoration));
 }
 
 static m_setTextDecoration__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_TextDecoration(/** !CSSStyleDeclaration */ $thisArg, /** TextDecoration */ textDecoration) {
  $Overlay.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(textDecoration)) {
   $thisArg.textDecoration = textDecoration.m_value__();
  }
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CSSStyleDeclaration;
 }
 
 static $loadModules() {
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  BorderStyle = goog.module.get('org.pepstock.charba.client.dom.enums.BorderStyle$impl');
  CursorType = goog.module.get('org.pepstock.charba.client.dom.enums.CursorType$impl');
  Display = goog.module.get('org.pepstock.charba.client.dom.enums.Display$impl');
  Position = goog.module.get('org.pepstock.charba.client.dom.enums.Position$impl');
  TextDecoration = goog.module.get('org.pepstock.charba.client.dom.enums.TextDecoration$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($Overlay, "CSSStyleDeclaration");

exports = $Overlay;

//# sourceMappingURL=BaseStyleProperties$$Overlay.js.map
