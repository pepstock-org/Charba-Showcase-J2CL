goog.module('org.pepstock.charba.client.ChartObserver$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Charts = goog.forwardDeclare('org.pepstock.charba.client.Charts$impl');
let MutationHandler = goog.forwardDeclare('org.pepstock.charba.client.MutationHandler$impl');
let MutationItem = goog.forwardDeclare('org.pepstock.charba.client.MutationItem$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let BaseElement_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseElement.$Overlay$impl');
let BaseHtmlElement_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.MutationRecord.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ChartObserver extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<?string, MutationHandler>}*/
  this.f_handlers__org_pepstock_charba_client_ChartObserver_;
 }
 /** @return {!ChartObserver} */
 static $create__() {
  let $instance = new ChartObserver();
  $instance.$ctor__org_pepstock_charba_client_ChartObserver__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_ChartObserver__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_ChartObserver();
  let mutationObserver = new MutationObserver((/** Array<MutationRecord> */ mutationRecords, /** MutationObserver */ observer) =>{
   for (let i = 0; i < mutationRecords.length; i = i + 1 | 0) {
    this.m_scanAndCheckElements__java_util_List__boolean_$p_org_pepstock_charba_client_ChartObserver($Overlay.m_getRemovedElements__$devirt__org_pepstock_charba_client_dom_MutationRecord(mutationRecords[i]), false);
    this.m_scanAndCheckElements__java_util_List__boolean_$p_org_pepstock_charba_client_ChartObserver($Overlay.m_getAddedElements__$devirt__org_pepstock_charba_client_dom_MutationRecord(mutationRecords[i]), true);
   }
   return null;
  });
  let mutationObserverInit = JsHelper.m_get__().m_createMutationObserverInit__();
  mutationObserverInit.childList = true;
  mutationObserverInit.subtree = true;
  mutationObserverInit.attributes = false;
  mutationObserverInit.characterData = false;
  mutationObserver.observe(window.document.body, mutationObserverInit);
 }
 /** @return {ChartObserver} */
 static m_get__() {
  ChartObserver.$clinit();
  return ChartObserver.f_INSTANCE__org_pepstock_charba_client_ChartObserver_;
 }
 
 m_addHandler__org_pepstock_charba_client_MutationHandler_$pp_org_pepstock_charba_client(/** MutationHandler */ handler) {
  if (!$Equality.$same(handler, null)) {
   this.f_handlers__org_pepstock_charba_client_ChartObserver_.put(handler.m_getId__(), handler);
  }
 }
 
 m_removeHandler__org_pepstock_charba_client_MutationHandler_$pp_org_pepstock_charba_client(/** MutationHandler */ handler) {
  if (!$Equality.$same(handler, null)) {
   this.f_handlers__org_pepstock_charba_client_ChartObserver_.remove(handler.m_getId__());
  }
 }
 
 m_scanAndCheckElements__java_util_List__boolean_$p_org_pepstock_charba_client_ChartObserver(/** List<HTMLElement> */ elements, /** boolean */ attach) {
  for (let $iterator = elements.m_iterator__(); $iterator.m_hasNext__(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__(), BaseHtmlElement_$Overlay));
   {
    this.m_checkAndPerformAttachement__org_pepstock_charba_client_dom_BaseElement__boolean_$p_org_pepstock_charba_client_ChartObserver(element, attach);
    this.m_scanAndCheckElements__org_pepstock_charba_client_dom_BaseElement__boolean_$p_org_pepstock_charba_client_ChartObserver(element, attach);
   }
  }
 }
 
 m_scanAndCheckElements__org_pepstock_charba_client_dom_BaseElement__boolean_$p_org_pepstock_charba_client_ChartObserver(/** Element */ parent, /** boolean */ attach) {
  if (parent.childElementCount > 0) {
   let children = parent.childNodes;
   for (let i = 0; i < children.length; i = i + 1 | 0) {
    let childNode = children.item(i);
    if (BaseElement_$Overlay.$isInstance(childNode)) {
     let child = /**@type {Element}*/ ($Casts.$to(childNode, BaseElement_$Overlay));
     this.m_checkAndPerformAttachement__org_pepstock_charba_client_dom_BaseElement__boolean_$p_org_pepstock_charba_client_ChartObserver(child, attach);
     this.m_scanAndCheckElements__org_pepstock_charba_client_dom_BaseElement__boolean_$p_org_pepstock_charba_client_ChartObserver(child, attach);
    }
   }
  }
 }
 
 m_checkAndPerformAttachement__org_pepstock_charba_client_dom_BaseElement__boolean_$p_org_pepstock_charba_client_ChartObserver(/** Element */ element, /** boolean */ attach) {
  if (this.f_handlers__org_pepstock_charba_client_ChartObserver_.containsKey(element.id)) {
   let handler = /**@type {MutationHandler}*/ ($Casts.$to(this.f_handlers__org_pepstock_charba_client_ChartObserver_.get(element.id), MutationHandler));
   if (attach && this.m_isChartElementAttached__java_lang_String_$p_org_pepstock_charba_client_ChartObserver(element.id)) {
    handler.m_onAttach__org_pepstock_charba_client_MutationItem(MutationItem.m_get__());
   } else if (!attach && this.m_isChartElementDetached__java_lang_String_$p_org_pepstock_charba_client_ChartObserver(element.id)) {
    handler.m_onDetach__org_pepstock_charba_client_MutationItem(MutationItem.m_get__());
   }
  }
 }
 /** @return {boolean} */
 m_isChartElementAttached__java_lang_String_$p_org_pepstock_charba_client_ChartObserver(/** ?string */ elementId) {
  return !Charts.m_hasNative__java_lang_String(elementId);
 }
 /** @return {boolean} */
 m_isChartElementDetached__java_lang_String_$p_org_pepstock_charba_client_ChartObserver(/** ?string */ elementId) {
  return Charts.m_hasNative__java_lang_String(elementId) && $Equality.$same(window.document.getElementById(elementId), null);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_ChartObserver() {
  this.f_handlers__org_pepstock_charba_client_ChartObserver_ = /**@type {!HashMap<?string, MutationHandler>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  ChartObserver.$clinit = () =>{};
  ChartObserver.$loadModules();
  j_l_Object.$clinit();
  ChartObserver.f_INSTANCE__org_pepstock_charba_client_ChartObserver_ = ChartObserver.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartObserver;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Charts = goog.module.get('org.pepstock.charba.client.Charts$impl');
  MutationHandler = goog.module.get('org.pepstock.charba.client.MutationHandler$impl');
  MutationItem = goog.module.get('org.pepstock.charba.client.MutationItem$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  BaseElement_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseElement.$Overlay$impl');
  BaseHtmlElement_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.MutationRecord.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {ChartObserver}*/
ChartObserver.f_INSTANCE__org_pepstock_charba_client_ChartObserver_;
$Util.$setClassMetadata(ChartObserver, "org.pepstock.charba.client.ChartObserver");

exports = ChartObserver;

//# sourceMappingURL=ChartObserver.js.map
