goog.module('org.pepstock.charba.client.utils.AnnotationBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseElement.$Overlay$impl');
let BaseNode_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseNode.$Overlay$impl');
let DOMBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.DOMBuilder$impl');
let Img_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class AnnotationBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AnnotationBuilder} */
 static $create__() {
  let $instance = new AnnotationBuilder();
  $instance.$ctor__org_pepstock_charba_client_utils_AnnotationBuilder__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_utils_AnnotationBuilder__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {HTMLImageElement} */
 static m_build__org_pepstock_charba_client_dom_BaseHtmlElement__double__double(/** HTMLElement */ htmlXmlContent, /** number */ width, /** number */ height) {
  AnnotationBuilder.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(htmlXmlContent, "Element argument");
  let /** ?string */ innerHtml;
  if (AnnotationBuilder.f_ELEMENTS__org_pepstock_charba_client_utils_AnnotationBuilder_.containsKey(htmlXmlContent)) {
   innerHtml = /**@type {?string}*/ ($Casts.$to(AnnotationBuilder.f_ELEMENTS__org_pepstock_charba_client_utils_AnnotationBuilder_.get(htmlXmlContent), j_l_String));
  } else {
   let wrapper = DOMBuilder.m_get__().m_createDivElement__();
   if (!$Equality.$same(htmlXmlContent.parentNode, null)) {
    let clonedNode = htmlXmlContent.cloneNode(true);
    if ($Overlay.$isInstance(clonedNode)) {
     let clonedElement = /**@type {Element}*/ ($Casts.$to(clonedNode, $Overlay));
     wrapper.appendChild(clonedElement);
    } else {
     throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Element passed as argument is not an element. Class: " + j_l_String.m_valueOf__java_lang_Object($Objects.m_getClass__java_lang_Object(clonedNode).m_getName__())));
    }
   } else {
    wrapper.appendChild(htmlXmlContent);
   }
   innerHtml = wrapper.innerHTML;
   BaseNode_$Overlay.m_removeAllChildren__$devirt__org_pepstock_charba_client_dom_BaseNode(wrapper);
   AnnotationBuilder.f_ELEMENTS__org_pepstock_charba_client_utils_AnnotationBuilder_.put(htmlXmlContent, innerHtml);
  }
  let key = AnnotationBuilder.m_getKey__java_lang_String__double__double(innerHtml, width, height);
  if (AnnotationBuilder.f_IMAGES__org_pepstock_charba_client_utils_AnnotationBuilder_.containsKey(key)) {
   return /**@type {HTMLImageElement}*/ ($Casts.$to(AnnotationBuilder.f_IMAGES__org_pepstock_charba_client_utils_AnnotationBuilder_.get(key), Img_$Overlay));
  }
  return AnnotationBuilder.m_buildWithValidatedContent__java_lang_String__java_lang_String__double__double(key, innerHtml, width, height);
 }
 /** @return {HTMLImageElement} */
 static m_build__java_lang_String__double__double(/** ?string */ htmlXmlContent, /** number */ width, /** number */ height) {
  AnnotationBuilder.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(htmlXmlContent, "Element argument");
  let key = AnnotationBuilder.m_getKey__java_lang_String__double__double(htmlXmlContent, width, height);
  if (AnnotationBuilder.f_IMAGES__org_pepstock_charba_client_utils_AnnotationBuilder_.containsKey(key)) {
   return /**@type {HTMLImageElement}*/ ($Casts.$to(AnnotationBuilder.f_IMAGES__org_pepstock_charba_client_utils_AnnotationBuilder_.get(key), Img_$Overlay));
  }
  return AnnotationBuilder.m_buildWithValidatedContent__java_lang_String__java_lang_String__double__double(key, htmlXmlContent, width, height);
 }
 /** @return {?string} */
 static m_getKey__java_lang_String__double__double(/** ?string */ htmlXmlContent, /** number */ width, /** number */ height) {
  let builder = StringBuilder.$create__java_lang_String(htmlXmlContent);
  return builder.m_append__double(width).m_append__double(height).toString();
 }
 /** @return {HTMLImageElement} */
 static m_buildWithValidatedContent__java_lang_String__java_lang_String__double__double(/** ?string */ key, /** ?string */ validatedhtmlXmlContent, /** number */ width, /** number */ height) {
  let result = Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(AnnotationBuilder.f_TEMPLATE_IMAGE_URL__org_pepstock_charba_client_utils_AnnotationBuilder_, [validatedhtmlXmlContent, width, height]);
  let element = Utilities.m_toImageElement__java_lang_String(result);
  AnnotationBuilder.f_IMAGES__org_pepstock_charba_client_utils_AnnotationBuilder_.put(key, element);
  return element;
 }
 
 static $clinit() {
  AnnotationBuilder.$clinit = () =>{};
  AnnotationBuilder.$loadModules();
  j_l_Object.$clinit();
  AnnotationBuilder.f_IMAGES__org_pepstock_charba_client_utils_AnnotationBuilder_ = /**@type {!HashMap<?string, HTMLImageElement>}*/ (HashMap.$create__());
  AnnotationBuilder.f_ELEMENTS__org_pepstock_charba_client_utils_AnnotationBuilder_ = /**@type {!HashMap<HTMLElement, ?string>}*/ (HashMap.$create__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnnotationBuilder;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseElement.$Overlay$impl');
  BaseNode_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseNode.$Overlay$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
  Img_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@type {Map<?string, HTMLImageElement>}*/
AnnotationBuilder.f_IMAGES__org_pepstock_charba_client_utils_AnnotationBuilder_;
/**@type {Map<HTMLElement, ?string>}*/
AnnotationBuilder.f_ELEMENTS__org_pepstock_charba_client_utils_AnnotationBuilder_;
/**@const {?string}*/
AnnotationBuilder.f_TEMPLATE_IMAGE_URL__org_pepstock_charba_client_utils_AnnotationBuilder_ = "data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"{1}\" height=\"{2}\"><foreignObject width=\"100%\" height=\"100%\"><div xmlns=\"http://www.w3.org/1999/xhtml\">{0}</div></foreignObject></svg>";
$Util.$setClassMetadata(AnnotationBuilder, "org.pepstock.charba.client.utils.AnnotationBuilder");

exports = AnnotationBuilder;

//# sourceMappingURL=AnnotationBuilder.js.map
