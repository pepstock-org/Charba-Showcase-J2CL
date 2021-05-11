goog.module('org.pepstock.charba.client.enums.RelativeDatasetIndexFill$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDatasetIndexFill = goog.require('org.pepstock.charba.client.enums.AbstractDatasetIndexFill$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let AbsoluteDatasetIndexFill = goog.forwardDeclare('org.pepstock.charba.client.enums.AbsoluteDatasetIndexFill$impl');
let FillingMode = goog.forwardDeclare('org.pepstock.charba.client.enums.FillingMode$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class RelativeDatasetIndexFill extends AbstractDatasetIndexFill {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_name__org_pepstock_charba_client_enums_RelativeDatasetIndexFill_;
 }
 /** @return {!RelativeDatasetIndexFill} */
 static $create__java_lang_String(/** ?string */ index) {
  RelativeDatasetIndexFill.$clinit();
  let $instance = new RelativeDatasetIndexFill();
  $instance.$ctor__org_pepstock_charba_client_enums_RelativeDatasetIndexFill__java_lang_String(index);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_RelativeDatasetIndexFill__java_lang_String(/** ?string */ index) {
  this.$ctor__org_pepstock_charba_client_enums_AbstractDatasetIndexFill__org_pepstock_charba_client_enums_FillingMode__int__java_lang_String(FillingMode.f_RELATIVE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined, index);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(RelativeDatasetIndexFill.f_RELATIVE_INDEX__org_pepstock_charba_client_enums_RelativeDatasetIndexFill_.exec(index), "Index argument is not a valid relative index. Index");
  this.f_name__org_pepstock_charba_client_enums_RelativeDatasetIndexFill_ = j_l_String.m_valueOf__java_lang_Object(FillingMode.f_RELATIVE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode.m_value__()) + ":" + j_l_String.m_valueOf__java_lang_Object(this.m_getValue__());
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_name__org_pepstock_charba_client_enums_RelativeDatasetIndexFill_;
 }
 /** @return {?string} */
 static get f_DEFAULT_VALUE__org_pepstock_charba_client_enums_RelativeDatasetIndexFill() {
  return (RelativeDatasetIndexFill.$clinit(), RelativeDatasetIndexFill.$static_DEFAULT_VALUE__org_pepstock_charba_client_enums_RelativeDatasetIndexFill);
 }
 
 static $clinit() {
  RelativeDatasetIndexFill.$clinit = () =>{};
  RelativeDatasetIndexFill.$loadModules();
  AbstractDatasetIndexFill.$clinit();
  RelativeDatasetIndexFill.$static_DEFAULT_VALUE__org_pepstock_charba_client_enums_RelativeDatasetIndexFill = j_l_String.m_valueOf__int(AbsoluteDatasetIndexFill.f_DEFAULT_VALUE_AS_INT__org_pepstock_charba_client_enums_AbsoluteDatasetIndexFill);
  RelativeDatasetIndexFill.f_RELATIVE_INDEX__org_pepstock_charba_client_enums_RelativeDatasetIndexFill_ = new RegExp(RelativeDatasetIndexFill.f_RELATIVE_INDEX_PATTERN__org_pepstock_charba_client_enums_RelativeDatasetIndexFill_);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RelativeDatasetIndexFill;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  AbsoluteDatasetIndexFill = goog.module.get('org.pepstock.charba.client.enums.AbsoluteDatasetIndexFill$impl');
  FillingMode = goog.module.get('org.pepstock.charba.client.enums.FillingMode$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@private {?string}*/
RelativeDatasetIndexFill.$static_DEFAULT_VALUE__org_pepstock_charba_client_enums_RelativeDatasetIndexFill;
/**@const {?string}*/
RelativeDatasetIndexFill.f_RELATIVE_INDEX_PATTERN__org_pepstock_charba_client_enums_RelativeDatasetIndexFill_ = "\\+{1}?\\d+|\\-{1}\\d+";
/**@type {RegExp}*/
RelativeDatasetIndexFill.f_RELATIVE_INDEX__org_pepstock_charba_client_enums_RelativeDatasetIndexFill_;
$Util.$setClassMetadata(RelativeDatasetIndexFill, "org.pepstock.charba.client.enums.RelativeDatasetIndexFill");

exports = RelativeDatasetIndexFill;

//# sourceMappingURL=RelativeDatasetIndexFill.js.map
