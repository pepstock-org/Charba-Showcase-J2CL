goog.module('org.pepstock.charba.client.enums.AbstractDatasetIndexFill$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsFill = goog.require('org.pepstock.charba.client.enums.IsFill$impl');

let FillingMode = goog.forwardDeclare('org.pepstock.charba.client.enums.FillingMode$impl');

/**
 * @abstract
 * @implements {IsFill}
 */
class AbstractDatasetIndexFill extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {FillingMode}*/
  this.f_mode__org_pepstock_charba_client_enums_AbstractDatasetIndexFill_;
  /**@type {number}*/
  this.f_index__org_pepstock_charba_client_enums_AbstractDatasetIndexFill_ = 0;
  /**@type {?string}*/
  this.f_indexAsString__org_pepstock_charba_client_enums_AbstractDatasetIndexFill_;
 }
 
 $ctor__org_pepstock_charba_client_enums_AbstractDatasetIndexFill__org_pepstock_charba_client_enums_FillingMode__int__java_lang_String(/** FillingMode */ mode, /** number */ index, /** ?string */ indexAsString) {
  this.$ctor__java_lang_Object__();
  this.f_mode__org_pepstock_charba_client_enums_AbstractDatasetIndexFill_ = mode;
  this.f_index__org_pepstock_charba_client_enums_AbstractDatasetIndexFill_ = index;
  this.f_indexAsString__org_pepstock_charba_client_enums_AbstractDatasetIndexFill_ = indexAsString;
 }
 /** @override @return {FillingMode} */
 m_getMode__() {
  return this.f_mode__org_pepstock_charba_client_enums_AbstractDatasetIndexFill_;
 }
 /** @override @return {number} */
 m_getValueAsInt__() {
  return this.f_index__org_pepstock_charba_client_enums_AbstractDatasetIndexFill_;
 }
 /** @override @return {?string} */
 m_getValue__() {
  return this.f_indexAsString__org_pepstock_charba_client_enums_AbstractDatasetIndexFill_;
 }
 
 static $clinit() {
  AbstractDatasetIndexFill.$clinit = () =>{};
  AbstractDatasetIndexFill.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractDatasetIndexFill;
 }
 
 static $loadModules() {}
}
IsFill.$markImplementor(AbstractDatasetIndexFill);
$Util.$setClassMetadata(AbstractDatasetIndexFill, "org.pepstock.charba.client.enums.AbstractDatasetIndexFill");

exports = AbstractDatasetIndexFill;

//# sourceMappingURL=AbstractDatasetIndexFill.js.map
