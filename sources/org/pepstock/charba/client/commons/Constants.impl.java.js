goog.module('org.pepstock.charba.client.commons.Constants$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class Constants extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Constants} */
 static $create__() {
  let $instance = new Constants();
  $instance.$ctor__org_pepstock_charba_client_commons_Constants__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_Constants__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {RegExp} */
 static get f_REGEXP_ID__org_pepstock_charba_client_commons_Constants() {
  return (Constants.$clinit(), Constants.$static_REGEXP_ID__org_pepstock_charba_client_commons_Constants);
 }
 
 static $clinit() {
  Constants.$clinit = () =>{};
  Constants.$loadModules();
  j_l_Object.$clinit();
  Constants.$static_REGEXP_ID__org_pepstock_charba_client_commons_Constants = new RegExp(Constants.f_REGEXP_ID_PATTERN__org_pepstock_charba_client_commons_Constants_);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Constants;
 }
 
 static $loadModules() {}
}
/**@const {?string}*/
Constants.f_REGEXP_ID_PATTERN__org_pepstock_charba_client_commons_Constants_ = "^[a-zA-Z0-9_]+$";
/**@private {RegExp}*/
Constants.$static_REGEXP_ID__org_pepstock_charba_client_commons_Constants;
/**@const {?string}*/
Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants = "";
/**@const {?string}*/
Constants.f_APOSTROPHE__org_pepstock_charba_client_commons_Constants = "'";
/**@const {?string}*/
Constants.f_SLASH__org_pepstock_charba_client_commons_Constants = "/";
/**@const {?string}*/
Constants.f_NULL_STRING__org_pepstock_charba_client_commons_Constants = "<null>";
/**@const {?string}*/
Constants.f_LINE_SEPARATOR__org_pepstock_charba_client_commons_Constants = "\n";
/**@const {?string}*/
Constants.f_BLANK__org_pepstock_charba_client_commons_Constants = " ";
/**@const {?string}*/
Constants.f_COMMA__org_pepstock_charba_client_commons_Constants = ",";
/**@const {?string}*/
Constants.f_COLON__org_pepstock_charba_client_commons_Constants = ":";
/**@const {?string}*/
Constants.f_PERCENT__org_pepstock_charba_client_commons_Constants = "%";
/**@const {?string}*/
Constants.f_OPEN_ROUND_BRACKET__org_pepstock_charba_client_commons_Constants = "(";
/**@const {?string}*/
Constants.f_CLOSE_ROUND_BRACKET__org_pepstock_charba_client_commons_Constants = ")";
/**@const {?string}*/
Constants.f_OPEN_SQUARE_BRACKET__org_pepstock_charba_client_commons_Constants = "[";
/**@const {?string}*/
Constants.f_CLOSE_SQUARE_BRACKET__org_pepstock_charba_client_commons_Constants = "]";
/**@const {?string}*/
Constants.f_DOT__org_pepstock_charba_client_commons_Constants = ".";
/**@const {?string}*/
Constants.f_UNDERSCORE__org_pepstock_charba_client_commons_Constants = "_";
/**@const {?string}*/
Constants.f_MINUS__org_pepstock_charba_client_commons_Constants = "-";
/**@const {?string}*/
Constants.f_EQ__org_pepstock_charba_client_commons_Constants = "=";
/**@const {?string}*/
Constants.f_LT__org_pepstock_charba_client_commons_Constants = "<";
/**@const {?string}*/
Constants.f_GT__org_pepstock_charba_client_commons_Constants = ">";
/**@const {?string}*/
Constants.f_AMPERSAND__org_pepstock_charba_client_commons_Constants = "&";
$Util.$setClassMetadata(Constants, "org.pepstock.charba.client.commons.Constants");

exports = Constants;

//# sourceMappingURL=Constants.js.map
