goog.module('org.pepstock.charba.client.dom.DOMBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let AtomicInteger = goog.forwardDeclare('java.util.concurrent.atomic.AtomicInteger$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let BaseEventTypes = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseEventTypes$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Div_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Div.$Overlay$impl');
let Heading_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Heading.$Overlay$impl');
let Img_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
let LineBreak_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.LineBreak.$Overlay$impl');
let Script_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Script.$Overlay$impl');
let Span_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Span.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Style.$Overlay$impl');
let Table_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Table.$Overlay$impl');
let TableCell_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.TableCell.$Overlay$impl');
let TableRow_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.TableRow.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DOMBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AtomicInteger}*/
  this.f_counter__org_pepstock_charba_client_dom_DOMBuilder_;
  /**@type {boolean}*/
  this.f_canvasSupported__org_pepstock_charba_client_dom_DOMBuilder_ = false;
 }
 /** @return {!DOMBuilder} */
 static $create__() {
  let $instance = new DOMBuilder();
  $instance.$ctor__org_pepstock_charba_client_dom_DOMBuilder__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_DOMBuilder__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_dom_DOMBuilder();
  let canvas = this.m_createCanvasElement__();
  this.f_canvasSupported__org_pepstock_charba_client_dom_DOMBuilder_ = $Overlay.m_isSupported__$devirt__org_pepstock_charba_client_dom_elements_Canvas(canvas);
 }
 /** @return {DOMBuilder} */
 static m_get__() {
  DOMBuilder.$clinit();
  return DOMBuilder.f_INSTANCE__org_pepstock_charba_client_dom_DOMBuilder_;
 }
 /** @return {?string} */
 m_createUniqueChartId__() {
  return j_l_String.m_valueOf__java_lang_Object(DOMBuilder.f_CHART_PREFIX_ID__org_pepstock_charba_client_dom_DOMBuilder_) + this.f_counter__org_pepstock_charba_client_dom_DOMBuilder_.m_getAndIncrement__();
 }
 /** @return {boolean} */
 m_isUniqueChartId__java_lang_String(/** ?string */ id) {
  if (!$Equality.$same(id, null)) {
   return j_l_String.m_startsWith__java_lang_String__java_lang_String(id, DOMBuilder.f_CHART_PREFIX_ID__org_pepstock_charba_client_dom_DOMBuilder_);
  }
  return false;
 }
 /** @return {boolean} */
 m_isCanvasSupported__() {
  return this.f_canvasSupported__org_pepstock_charba_client_dom_DOMBuilder_;
 }
 /** @return {HTMLCanvasElement} */
 m_createCanvasElement__() {
  return /**@type {HTMLCanvasElement}*/ ($Casts.$to(window.document.createElement($Overlay.f_TAG__org_pepstock_charba_client_dom_elements_Canvas_$Overlay), $Overlay));
 }
 /** @return {HTMLDivElement} */
 m_createDivElement__() {
  return /**@type {HTMLDivElement}*/ ($Casts.$to(window.document.createElement(Div_$Overlay.f_TAG__org_pepstock_charba_client_dom_elements_Div_$Overlay), Div_$Overlay));
 }
 /** @return {HTMLScriptElement} */
 m_createScriptElement__() {
  return /**@type {HTMLScriptElement}*/ ($Casts.$to(window.document.createElement(Script_$Overlay.f_TAG__org_pepstock_charba_client_dom_elements_Script_$Overlay), Script_$Overlay));
 }
 /** @return {HTMLStyleElement} */
 m_createStyleElement__() {
  return /**@type {HTMLStyleElement}*/ ($Casts.$to(window.document.createElement(Style_$Overlay.f_TAG__org_pepstock_charba_client_dom_elements_Style_$Overlay), Style_$Overlay));
 }
 /** @return {HTMLElement} */
 m_createLineBreakElement__() {
  return /**@type {HTMLElement}*/ ($Casts.$to(window.document.createElement(LineBreak_$Overlay.f_TAG__org_pepstock_charba_client_dom_elements_LineBreak_$Overlay), LineBreak_$Overlay));
 }
 /** @return {HTMLSpanElement} */
 m_createSpanElement__() {
  return /**@type {HTMLSpanElement}*/ ($Casts.$to(window.document.createElement(Span_$Overlay.f_TAG__org_pepstock_charba_client_dom_elements_Span_$Overlay), Span_$Overlay));
 }
 /** @return {HTMLImageElement} */
 m_createImageElement__() {
  return this.m_createImageElement__java_lang_String(null);
 }
 /** @return {HTMLImageElement} */
 m_createImageElement__java_lang_String(/** ?string */ src) {
  let image = /**@type {HTMLImageElement}*/ ($Casts.$to(window.document.createElement(Img_$Overlay.f_TAG__org_pepstock_charba_client_dom_elements_Img_$Overlay), Img_$Overlay));
  if (!$Equality.$same(src, null)) {
   image.src = src;
  }
  return image;
 }
 /** @return {HTMLTableElement} */
 m_createTableElement__() {
  return /**@type {HTMLTableElement}*/ ($Casts.$to(window.document.createElement(Table_$Overlay.f_TAG__org_pepstock_charba_client_dom_elements_Table_$Overlay), Table_$Overlay));
 }
 /** @return {HTMLTableRowElement} */
 m_createTableRowElement__() {
  return /**@type {HTMLTableRowElement}*/ ($Casts.$to(window.document.createElement(TableRow_$Overlay.f_TAG__org_pepstock_charba_client_dom_elements_TableRow_$Overlay), TableRow_$Overlay));
 }
 /** @return {HTMLTableCellElement} */
 m_createTableCellElement__() {
  return /**@type {HTMLTableCellElement}*/ ($Casts.$to(window.document.createElement(TableCell_$Overlay.f_TAG__org_pepstock_charba_client_dom_elements_TableCell_$Overlay), TableCell_$Overlay));
 }
 /** @return {HTMLElement} */
 m_createHeadingElement__() {
  return /**@type {HTMLElement}*/ ($Casts.$to(window.document.createElement(Heading_$Overlay.f_TAG__org_pepstock_charba_client_dom_elements_Heading_$Overlay), Heading_$Overlay));
 }
 /** @return {Text} */
 m_createTextNode__java_lang_String(/** ?string */ data) {
  return window.document.createTextNode(data);
 }
 /** @return {Object} */
 m_createChangeEvent__() {
  let event = window.document.createEvent(BaseEventTypes.f_EVENT_MOUSE__org_pepstock_charba_client_dom_BaseEventTypes);
  event.initEvent(BaseEventTypes.f_CONTEXT_MENU__org_pepstock_charba_client_dom_BaseEventTypes, true, false);
  return event;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_dom_DOMBuilder() {
  this.f_counter__org_pepstock_charba_client_dom_DOMBuilder_ = AtomicInteger.$create__();
 }
 
 static $clinit() {
  DOMBuilder.$clinit = () =>{};
  DOMBuilder.$loadModules();
  j_l_Object.$clinit();
  DOMBuilder.f_INSTANCE__org_pepstock_charba_client_dom_DOMBuilder_ = DOMBuilder.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DOMBuilder;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  AtomicInteger = goog.module.get('java.util.concurrent.atomic.AtomicInteger$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  BaseEventTypes = goog.module.get('org.pepstock.charba.client.dom.BaseEventTypes$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Div_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Div.$Overlay$impl');
  Heading_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Heading.$Overlay$impl');
  Img_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
  LineBreak_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.LineBreak.$Overlay$impl');
  Script_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Script.$Overlay$impl');
  Span_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Span.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Style.$Overlay$impl');
  Table_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Table.$Overlay$impl');
  TableCell_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.TableCell.$Overlay$impl');
  TableRow_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.TableRow.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {DOMBuilder}*/
DOMBuilder.f_INSTANCE__org_pepstock_charba_client_dom_DOMBuilder_;
/**@const {?string}*/
DOMBuilder.f_CHART_PREFIX_ID__org_pepstock_charba_client_dom_DOMBuilder_ = "charba-chart-";
$Util.$setClassMetadata(DOMBuilder, "org.pepstock.charba.client.dom.DOMBuilder");

exports = DOMBuilder;

//# sourceMappingURL=DOMBuilder.js.map
