goog.module('org.pepstock.charba.client.utils.JSON.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let BaseAttribute_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseAttribute.$Overlay$impl');
let BaseElement_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseElement.$Overlay$impl');
let BaseNode_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseNode.$Overlay$impl');
let NodeType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.NodeType$impl');
let JSONReplacerConstants = goog.forwardDeclare('org.pepstock.charba.client.utils.JSONReplacerConstants$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class $Overlay {
 /** @return {?string} */
 static m_stringify__java_lang_Object(/** * */ obj) {
  $Overlay.$clinit();
  if (!$Equality.$same(obj, null)) {
   return JSON.stringify(obj, null, -1 | 0);
  }
  return JSONReplacerConstants.f_EMPTY_JSON_OBJECT__org_pepstock_charba_client_utils_JSONReplacerConstants;
 }
 /** @return {?string} */
 static m_stringify__java_lang_Object__int(/** * */ obj, /** number */ spaces) {
  $Overlay.$clinit();
  if (!$Equality.$same(obj, null)) {
   return JSON.stringify(obj, null, spaces);
  }
  return JSONReplacerConstants.f_EMPTY_JSON_OBJECT__org_pepstock_charba_client_utils_JSONReplacerConstants;
 }
 /** @return {?string} */
 static m_stringifyWithReplacer__java_lang_Object(/** * */ obj) {
  $Overlay.$clinit();
  return $Overlay.m_stringifyWithReplacer__java_lang_Object__int(obj, -1 | 0);
 }
 /** @return {?string} */
 static m_stringifyWithReplacer__java_lang_Object__int(/** * */ obj, /** number */ spaces) {
  $Overlay.$clinit();
  if (!$Equality.$same(obj, null)) {
   let objects = /**@type {!HashSet<*>}*/ (HashSet.$create__());
   return $Overlay.m_stringifyWithReplacer__java_lang_Object__org_pepstock_charba_client_utils_JSON_Replacer__int(obj, (/** ?string */ key, /** * */ value) =>{
    if (!$Equality.$same(key, null) && j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(key)) > 0) {
     let result = $Overlay.m_manageObject__java_util_Set__java_lang_Object(objects, value);
     return !$Equality.$same(result, null) ? result : value;
    } else {
     objects.add(value);
    }
    return value;
   }, spaces);
  }
  return JSONReplacerConstants.f_EMPTY_JSON_OBJECT__org_pepstock_charba_client_utils_JSONReplacerConstants;
 }
 /** @return {?string} */
 static m_manageObject__java_util_Set__java_lang_Object(/** Set<*> */ objects, /** * */ value) {
  let type = JsHelper.m_get__().m_typeOf__java_lang_Object(value);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_FUNCTION__org_pepstock_charba_client_commons_ObjectType, type)) {
   return j_l_String.m_valueOf__java_lang_Object(value) + j_l_String.m_valueOf__java_lang_Object(Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants);
  }
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType, type)) {
   let result = $Overlay.m_manageElement__java_lang_Object(value);
   if (!$Equality.$same(result, null)) {
    return result;
   }
   if (objects.contains(value)) {
    return JSONReplacerConstants.f_CYCLE_PROPERTY_VALUE__org_pepstock_charba_client_utils_JSONReplacerConstants;
   }
   objects.add(value);
  }
  return null;
 }
 /** @return {?string} */
 static m_manageElement__java_lang_Object(/** * */ value) {
  if (BaseElement_$Overlay.$isInstance(value)) {
   let element = /**@type {Element}*/ ($Casts.$to(value, BaseElement_$Overlay));
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(NodeType.f_ELEMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType, BaseNode_$Overlay.m_getNodeType__$devirt__org_pepstock_charba_client_dom_BaseNode(element))) {
    let sb = StringBuilder.$create__();
    sb.m_append__java_lang_String(Constants.f_LT__org_pepstock_charba_client_commons_Constants).m_append__java_lang_String(j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(element.nodeName, Locale.m_getDefault__()));
    if (element.hasAttributes()) {
     let attributes = element.attributes;
     for (let i = 0; i < attributes.length; i = i + 1 | 0) {
      let attr = /**@type {Attr}*/ ($Casts.$to(attributes.item(i), BaseAttribute_$Overlay));
      sb.m_append__java_lang_String(Constants.f_BLANK__org_pepstock_charba_client_commons_Constants).m_append__java_lang_String(attr.name).m_append__java_lang_String("='").m_append__java_lang_String(j_l_String.m_valueOf__java_lang_Object(attr.value) + "'");
     }
    }
    return sb.m_append__java_lang_String(Constants.f_GT__org_pepstock_charba_client_commons_Constants).toString();
   }
  }
  return null;
 }
 /** @return {?string} */
 static m_stringifyWithReplacer__java_lang_Object__org_pepstock_charba_client_utils_JSON_Replacer__int(/** * */ obj, /** ?function(?string, *):* */ replacer, /** number */ spaces) {
  $Overlay.$clinit();
  if (!$Equality.$same(obj, null)) {
   if (!$Equality.$same(replacer, null)) {
    return JSON.stringify(obj, replacer, spaces);
   } else {
    $Overlay.m_stringify__java_lang_Object__int(obj, spaces);
   }
  }
  return JSONReplacerConstants.f_EMPTY_JSON_OBJECT__org_pepstock_charba_client_utils_JSONReplacerConstants;
 }
 /** @return {?string} */
 static m_stringifyNativeObject__org_pepstock_charba_client_commons_NativeObject__int(/** ? */ obj, /** number */ spaces) {
  $Overlay.$clinit();
  return $Overlay.m_stringifyWithReplacer__java_lang_Object__org_pepstock_charba_client_utils_JSON_Replacer__int(obj, (/** ?string */ key, /** * */ value) =>{
   if (!$Equality.$same(key, null) && j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(key)) > 0) {
    if (!j_l_String.m_startsWith__java_lang_String__java_lang_String(key, Constants.f_UNDERSCORE__org_pepstock_charba_client_commons_Constants)) {
     let type = JsHelper.m_get__().m_typeOf__java_lang_Object(value);
     if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_FUNCTION__org_pepstock_charba_client_commons_ObjectType, type)) {
      return j_l_String.m_valueOf__java_lang_Object(value) + j_l_String.m_valueOf__java_lang_Object(Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants);
     }
     let result = $Overlay.m_manageElement__java_lang_Object(value);
     return !$Equality.$same(result, null) ? result : value;
    }
    return $Overlay.m_ignoreCharbaInstances__java_lang_String__java_lang_Object(key, value);
   }
   return value;
  }, spaces);
 }
 /** @return {*} */
 static m_ignoreCharbaInstances__java_lang_String__java_lang_Object(/** ?string */ key, /** * */ value) {
  if (j_l_String.m_startsWith__java_lang_String__java_lang_String(key, JSONReplacerConstants.f_CHARBA_PROPERTY_KEY_PREFIX__org_pepstock_charba_client_utils_JSONReplacerConstants)) {
   return value;
  } else {
   return window.undefined;
  }
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JSON;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  BaseAttribute_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseAttribute.$Overlay$impl');
  BaseElement_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseElement.$Overlay$impl');
  BaseNode_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseNode.$Overlay$impl');
  NodeType = goog.module.get('org.pepstock.charba.client.dom.enums.NodeType$impl');
  JSONReplacerConstants = goog.module.get('org.pepstock.charba.client.utils.JSONReplacerConstants$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata($Overlay, "JSON");

exports = $Overlay;

//# sourceMappingURL=JSON$$Overlay.js.map
