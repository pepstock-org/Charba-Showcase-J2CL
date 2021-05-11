goog.module('org.pepstock.charba.client.items.LegendTextHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyHandler = goog.require('org.pepstock.charba.client.commons.PropertyHandler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let SafeHtml = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtmlBuilder$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.LegendTextHandler.Property$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let OptionsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.options.OptionsEnvelop$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PropertyHandler<?boolean>}
 */
class LegendTextHandler extends PropertyHandler {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'LegendTextHandler(AbstractNode, OptionsEnvelop)'.
 /** @return {!LegendTextHandler} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_options_OptionsEnvelop(/** AbstractNode */ parent, /** OptionsEnvelop<?> */ envelop) {
  LegendTextHandler.$clinit();
  let $instance = new LegendTextHandler();
  $instance.$ctor__org_pepstock_charba_client_items_LegendTextHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_options_OptionsEnvelop(parent, envelop);
  return $instance;
 }
 //Initialization from constructor 'LegendTextHandler(AbstractNode, OptionsEnvelop)'.
 
 $ctor__org_pepstock_charba_client_items_LegendTextHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_options_OptionsEnvelop(/** AbstractNode */ parent, /** OptionsEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_items_LegendTextHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_NativeObject(parent, /**@type {?}*/ (/**@type {OptionsEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), OptionsEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'LegendTextHandler(NativeObject)'.
 /** @return {!LegendTextHandler} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  LegendTextHandler.$clinit();
  let $instance = new LegendTextHandler();
  $instance.$ctor__org_pepstock_charba_client_items_LegendTextHandler__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'LegendTextHandler(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_items_LegendTextHandler__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_items_LegendTextHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_NativeObject(null, nativeObject);
 }
 //Factory method corresponding to constructor 'LegendTextHandler(AbstractNode, NativeObject)'.
 /** @return {!LegendTextHandler} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** ? */ nativeObject) {
  let $instance = new LegendTextHandler();
  $instance.$ctor__org_pepstock_charba_client_items_LegendTextHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_NativeObject(parent, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'LegendTextHandler(AbstractNode, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_items_LegendTextHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_PropertyHandler__org_pepstock_charba_client_commons_AbstractNode__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(parent, LegendTextHandler.f_DEFAULT_HTML_TEXT__org_pepstock_charba_client_items_LegendTextHandler, nativeObject);
 }
 
 m_setText__java_lang_String_$pp_org_pepstock_charba_client_items(/** ?string */ text) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TEXT__org_pepstock_charba_client_items_LegendTextHandler_Property, text);
 }
 
 m_setText__org_pepstock_charba_client_dom_safehtml_SafeHtml_$pp_org_pepstock_charba_client_items(/** SafeHtml */ text) {
  if (!$Equality.$same(text, null)) {
   this.m_setText__java_lang_String_$pp_org_pepstock_charba_client_items(text.m_asString__());
   this.m_setHtmlText__boolean_$pp_org_pepstock_charba_client_items(true);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_TEXT__org_pepstock_charba_client_items_LegendTextHandler_Property);
   this.m_setHtmlText__boolean_$pp_org_pepstock_charba_client_items(false);
  }
 }
 /** @return {?string} */
 m_getText___$pp_org_pepstock_charba_client_items() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TEXT__org_pepstock_charba_client_items_LegendTextHandler_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {boolean} */
 m_isHtmlText___$pp_org_pepstock_charba_client_items() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_CHARBA_HTML_TEXT__org_pepstock_charba_client_items_LegendTextHandler_Property, LegendTextHandler.f_DEFAULT_HTML_TEXT__org_pepstock_charba_client_items_LegendTextHandler);
 }
 /** @return {SafeHtml} */
 m_getTextAsHtml___$pp_org_pepstock_charba_client_items() {
  if (this.m_isHtmlText___$pp_org_pepstock_charba_client_items()) {
   let html = this.m_getText___$pp_org_pepstock_charba_client_items();
   if (!$Equality.$same(html, null)) {
    return SafeHtmlBuilder.m_create__().m_appendHtmlConstant__java_lang_String(html).m_toSafeHtml__();
   }
  }
  return null;
 }
 
 m_setHtmlText__boolean_$pp_org_pepstock_charba_client_items(/** boolean */ htmlText) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_CHARBA_HTML_TEXT__org_pepstock_charba_client_items_LegendTextHandler_Property, htmlText);
 }
 
 static $clinit() {
  LegendTextHandler.$clinit = () =>{};
  LegendTextHandler.$loadModules();
  PropertyHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendTextHandler;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  SafeHtmlBuilder = goog.module.get('org.pepstock.charba.client.dom.safehtml.SafeHtmlBuilder$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.LegendTextHandler.Property$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  OptionsEnvelop = goog.module.get('org.pepstock.charba.client.options.OptionsEnvelop$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {boolean}*/
LegendTextHandler.f_DEFAULT_HTML_TEXT__org_pepstock_charba_client_items_LegendTextHandler = false;
$Util.$setClassMetadata(LegendTextHandler, "org.pepstock.charba.client.items.LegendTextHandler");

exports = LegendTextHandler;

//# sourceMappingURL=LegendTextHandler.js.map
