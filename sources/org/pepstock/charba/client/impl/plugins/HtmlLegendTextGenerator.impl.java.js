goog.module('org.pepstock.charba.client.impl.plugins.HtmlLegendTextGenerator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let HtmlLegendCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.HtmlLegendCallback$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
let DOMBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.DOMBuilder$impl');
let Display = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.Display$impl');
let HasLegendText = goog.forwardDeclare('org.pepstock.charba.client.items.HasLegendText$impl');

/**
 * @template T, C
 */
class HtmlLegendTextGenerator extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @template T, C @return {!HtmlLegendTextGenerator<T, C>} */
 static $create__() {
  HtmlLegendTextGenerator.$clinit();
  let $instance = new HtmlLegendTextGenerator();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendTextGenerator__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendTextGenerator__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {HTMLDivElement} */
 m_createTextElement__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_HasLegendText__org_pepstock_charba_client_callbacks_HtmlLegendCallback_$pp_org_pepstock_charba_client_impl_plugins(/** IsChart */ chart, /** T */ item, /** C */ callback) {
  let element = DOMBuilder.m_get__().m_createDivElement__();
  let currentText = /**@type {HasLegendText}*/ (item).m_getText__();
  if (!$Equality.$same(currentText, null) && j_l_String.m_length__java_lang_String(currentText) > 0) {
   if (/**@type {HasLegendText}*/ (item).m_isHtmlText__()) {
    let html = /**@type {HasLegendText}*/ (item).m_getTextAsHtml__();
    element.innerHTML = html.m_asString__();
   } else {
    this.m_managePlainText__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_HasLegendText__org_pepstock_charba_client_dom_elements_Div__java_lang_String__org_pepstock_charba_client_callbacks_HtmlLegendCallback_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendTextGenerator(chart, item, element, currentText, callback);
   }
  } else {
   $Overlay.m_setDisplay__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_Display(element.style, Display.f_NONE__org_pepstock_charba_client_dom_enums_Display);
  }
  return element;
 }
 
 m_managePlainText__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_HasLegendText__org_pepstock_charba_client_dom_elements_Div__java_lang_String__org_pepstock_charba_client_callbacks_HtmlLegendCallback_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendTextGenerator(/** IsChart */ chart, /** T */ item, /** HTMLDivElement */ element, /** ?string */ currentText, /** C */ callback) {
  if (!$Equality.$same(callback, null)) {
   let textFromCallback = /**@type {HtmlLegendCallback}*/ (callback).m_generateText__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_HasLegendText__java_lang_String(chart, item, currentText);
   if (!$Equality.$same(textFromCallback, null)) {
    element.innerHTML = textFromCallback.m_asString__();
   } else {
    element.innerText = currentText;
   }
  } else {
   this.m_manageText__org_pepstock_charba_client_dom_elements_Div__java_lang_String_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendTextGenerator(element, currentText);
  }
 }
 
 m_manageText__org_pepstock_charba_client_dom_elements_Div__java_lang_String_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendTextGenerator(/** HTMLDivElement */ element, /** ?string */ text) {
  if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence(text, Constants.f_LINE_SEPARATOR__org_pepstock_charba_client_commons_Constants)) {
   let splitText = j_l_String.m_split__java_lang_String__java_lang_String(text, Constants.f_LINE_SEPARATOR__org_pepstock_charba_client_commons_Constants);
   for (let $array = splitText, $index = 0; $index < $array.length; $index++) {
    let singleText = $array[$index];
    {
     if (element.hasChildNodes()) {
      element.appendChild(DOMBuilder.m_get__().m_createLineBreakElement__());
     }
     element.appendChild(DOMBuilder.m_get__().m_createTextNode__java_lang_String(singleText));
    }
   }
  } else {
   element.innerText = text;
  }
 }
 
 static $clinit() {
  HtmlLegendTextGenerator.$clinit = () =>{};
  HtmlLegendTextGenerator.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlLegendTextGenerator;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
  Display = goog.module.get('org.pepstock.charba.client.dom.enums.Display$impl');
 }
}
$Util.$setClassMetadata(HtmlLegendTextGenerator, "org.pepstock.charba.client.impl.plugins.HtmlLegendTextGenerator");

exports = HtmlLegendTextGenerator;

//# sourceMappingURL=HtmlLegendTextGenerator.js.map
