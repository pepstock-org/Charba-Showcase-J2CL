goog.module('org.pepstock.charba.client.enums.AbsoluteDatasetIndexFill$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDatasetIndexFill = goog.require('org.pepstock.charba.client.enums.AbstractDatasetIndexFill$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let FillingMode = goog.forwardDeclare('org.pepstock.charba.client.enums.FillingMode$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

class AbsoluteDatasetIndexFill extends AbstractDatasetIndexFill {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_name__org_pepstock_charba_client_enums_AbsoluteDatasetIndexFill_;
 }
 /** @return {!AbsoluteDatasetIndexFill} */
 static $create__int(/** number */ index) {
  AbsoluteDatasetIndexFill.$clinit();
  let $instance = new AbsoluteDatasetIndexFill();
  $instance.$ctor__org_pepstock_charba_client_enums_AbsoluteDatasetIndexFill__int(index);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_AbsoluteDatasetIndexFill__int(/** number */ index) {
  this.$ctor__org_pepstock_charba_client_enums_AbstractDatasetIndexFill__org_pepstock_charba_client_enums_FillingMode__int__java_lang_String(FillingMode.f_ABSOLUTE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode, index, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
  Checker.m_checkIfGreaterThan__int__int__java_lang_String(index, 1, "Index argument");
  this.f_name__org_pepstock_charba_client_enums_AbsoluteDatasetIndexFill_ = j_l_String.m_valueOf__java_lang_Object(FillingMode.f_ABSOLUTE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode.m_value__()) + ":" + index;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_name__org_pepstock_charba_client_enums_AbsoluteDatasetIndexFill_;
 }
 
 static $clinit() {
  AbsoluteDatasetIndexFill.$clinit = () =>{};
  AbsoluteDatasetIndexFill.$loadModules();
  AbstractDatasetIndexFill.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbsoluteDatasetIndexFill;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  FillingMode = goog.module.get('org.pepstock.charba.client.enums.FillingMode$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@const {number}*/
AbsoluteDatasetIndexFill.f_DEFAULT_VALUE_AS_INT__org_pepstock_charba_client_enums_AbsoluteDatasetIndexFill = 0;
$Util.$setClassMetadata(AbsoluteDatasetIndexFill, "org.pepstock.charba.client.enums.AbsoluteDatasetIndexFill");

exports = AbsoluteDatasetIndexFill;

//# sourceMappingURL=AbsoluteDatasetIndexFill.js.map
