goog.module('org.pepstock.charba.client.utils.JSONReplacerConstants$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class JSONReplacerConstants extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JSONReplacerConstants} */
 static $create__() {
  let $instance = new JSONReplacerConstants();
  $instance.$ctor__org_pepstock_charba_client_utils_JSONReplacerConstants__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_utils_JSONReplacerConstants__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  JSONReplacerConstants.$clinit = () =>{};
  JSONReplacerConstants.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JSONReplacerConstants;
 }
 
 static $loadModules() {}
}
/**@const {?string}*/
JSONReplacerConstants.f_CYCLE_PROPERTY_VALUE__org_pepstock_charba_client_utils_JSONReplacerConstants = "";
/**@const {?string}*/
JSONReplacerConstants.f_CHARBA_PROPERTY_KEY_PREFIX__org_pepstock_charba_client_utils_JSONReplacerConstants = "_charba";
/**@const {?string}*/
JSONReplacerConstants.f_EMPTY_JSON_OBJECT__org_pepstock_charba_client_utils_JSONReplacerConstants = "{}";
$Util.$setClassMetadata(JSONReplacerConstants, "org.pepstock.charba.client.utils.JSONReplacerConstants");

exports = JSONReplacerConstants;

//# sourceMappingURL=JSONReplacerConstants.js.map
