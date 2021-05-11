goog.module('org.pepstock.charba.client.dom.BaseLocationUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let RegExpResult_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.utils.RegExpResult.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class BaseLocationUtils extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BaseLocationUtils} */
 static $create__() {
  BaseLocationUtils.$clinit();
  let $instance = new BaseLocationUtils();
  $instance.$ctor__org_pepstock_charba_client_dom_BaseLocationUtils__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_BaseLocationUtils__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {?string} */
 static m_getParameter__org_pepstock_charba_client_dom_BaseLocation__java_lang_String(/** Location */ location, /** ?string */ name) {
  BaseLocationUtils.$clinit();
  if (!$Equality.$same(name, null)) {
   BaseLocationUtils.m_checkAndLoadParametersMap__org_pepstock_charba_client_dom_BaseLocation(location);
   let parametersList = /**@type {List<?string>}*/ ($Casts.$to(BaseLocationUtils.f_QUERY_STRING_PARAMETERS_MAP__org_pepstock_charba_client_dom_BaseLocationUtils_.get(name), List));
   if (!$Equality.$same(parametersList, null) && !parametersList.isEmpty()) {
    return /**@type {?string}*/ ($Casts.$to(parametersList.getAtIndex(parametersList.size() - 1 | 0), j_l_String));
   }
  }
  return null;
 }
 /** @return {Map<?string, List<?string>>} */
 static m_getParameterMap__org_pepstock_charba_client_dom_BaseLocation(/** Location */ location) {
  BaseLocationUtils.$clinit();
  BaseLocationUtils.m_checkAndLoadParametersMap__org_pepstock_charba_client_dom_BaseLocation(location);
  return /**@type {Map<?string, List<?string>>}*/ (Collections.m_unmodifiableMap__java_util_Map(BaseLocationUtils.f_QUERY_STRING_PARAMETERS_MAP__org_pepstock_charba_client_dom_BaseLocationUtils_));
 }
 
 static m_checkAndLoadParametersMap__org_pepstock_charba_client_dom_BaseLocation(/** Location */ location) {
  let currentQueryString = location.search;
  if (!j_l_String.m_equals__java_lang_String__java_lang_Object(BaseLocationUtils.f_queryString__org_pepstock_charba_client_dom_BaseLocationUtils_, currentQueryString)) {
   BaseLocationUtils.m_loadParametersMap__java_lang_String(currentQueryString);
   BaseLocationUtils.f_queryString__org_pepstock_charba_client_dom_BaseLocationUtils_ = currentQueryString;
  }
 }
 
 static m_loadParametersMap__java_lang_String(/** ?string */ queryString) {
  BaseLocationUtils.f_QUERY_STRING_PARAMETERS_MAP__org_pepstock_charba_client_dom_BaseLocationUtils_.clear();
  let /** Array */ regExpResult;
  while (!$Equality.$same(regExpResult = BaseLocationUtils.f_REGEXP_QUERY_STRING__org_pepstock_charba_client_dom_BaseLocationUtils_.exec(queryString), null)) {
   if (regExpResult.length == 4 && !$Equality.$same(RegExpResult_$Overlay.m_get__$devirt__org_pepstock_charba_client_utils_RegExpResult__int(regExpResult, 1), null)) {
    let key = RegExpResult_$Overlay.m_get__$devirt__org_pepstock_charba_client_utils_RegExpResult__int(regExpResult, 1);
    let value = RegExpResult_$Overlay.m_get__$devirt__org_pepstock_charba_client_utils_RegExpResult__int(regExpResult, 3);
    let /** List<?string> */ values;
    if (!BaseLocationUtils.f_QUERY_STRING_PARAMETERS_MAP__org_pepstock_charba_client_dom_BaseLocationUtils_.containsKey(key)) {
     values = /**@type {!LinkedList<?string>}*/ (LinkedList.$create__());
     BaseLocationUtils.f_QUERY_STRING_PARAMETERS_MAP__org_pepstock_charba_client_dom_BaseLocationUtils_.put(key, values);
    } else {
     values = /**@type {List<?string>}*/ ($Casts.$to(BaseLocationUtils.f_QUERY_STRING_PARAMETERS_MAP__org_pepstock_charba_client_dom_BaseLocationUtils_.get(key), List));
    }
    values.add($Equality.$same(value, null) ? Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants : value);
   }
  }
  for (let $iterator = BaseLocationUtils.f_QUERY_STRING_PARAMETERS_MAP__org_pepstock_charba_client_dom_BaseLocationUtils_.m_entrySet__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let entry = /**@type {Entry<?string, List<?string>>}*/ ($Casts.$to($iterator.m_next__(), Entry));
   {
    entry.m_setValue__java_lang_Object(/**@type {List<?string>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {List<?string>}*/ ($Casts.$to(entry.m_getValue__(), List)))));
   }
  }
 }
 
 static $clinit() {
  BaseLocationUtils.$clinit = () =>{};
  BaseLocationUtils.$loadModules();
  j_l_Object.$clinit();
  BaseLocationUtils.f_REGEXP_QUERY_STRING__org_pepstock_charba_client_dom_BaseLocationUtils_ = new RegExp(BaseLocationUtils.f_REGEXP_QUERY_STRING_PATTERN__org_pepstock_charba_client_dom_BaseLocationUtils_, "gi");
  BaseLocationUtils.f_QUERY_STRING_PARAMETERS_MAP__org_pepstock_charba_client_dom_BaseLocationUtils_ = /**@type {!HashMap<?string, List<?string>>}*/ (HashMap.$create__());
  BaseLocationUtils.f_queryString__org_pepstock_charba_client_dom_BaseLocationUtils_ = Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseLocationUtils;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  List = goog.module.get('java.util.List$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  RegExpResult_$Overlay = goog.module.get('org.pepstock.charba.client.utils.RegExpResult.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {?string}*/
BaseLocationUtils.f_REGEXP_QUERY_STRING_PATTERN__org_pepstock_charba_client_dom_BaseLocationUtils_ = "([^?=&]+)(=([^&]*))?";
/**@type {RegExp}*/
BaseLocationUtils.f_REGEXP_QUERY_STRING__org_pepstock_charba_client_dom_BaseLocationUtils_;
/**@type {Map<?string, List<?string>>}*/
BaseLocationUtils.f_QUERY_STRING_PARAMETERS_MAP__org_pepstock_charba_client_dom_BaseLocationUtils_;
/**@type {?string}*/
BaseLocationUtils.f_queryString__org_pepstock_charba_client_dom_BaseLocationUtils_;
$Util.$setClassMetadata(BaseLocationUtils, "org.pepstock.charba.client.dom.BaseLocationUtils");

exports = BaseLocationUtils;

//# sourceMappingURL=BaseLocationUtils.js.map
