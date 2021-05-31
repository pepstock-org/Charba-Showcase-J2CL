goog.module('org.pepstock.charba.client.datalabels.StandardDataLabelId$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DataLabelId = goog.require('org.pepstock.charba.client.datalabels.DataLabelId$impl');

/**
 * @implements {DataLabelId}
 */
class StandardDataLabelId extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_datalabels_StandardDataLabelId_;
 }
 /** @return {!StandardDataLabelId} */
 static $create__java_lang_String(/** ?string */ value) {
  StandardDataLabelId.$clinit();
  let $instance = new StandardDataLabelId();
  $instance.$ctor__org_pepstock_charba_client_datalabels_StandardDataLabelId__java_lang_String(value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_StandardDataLabelId__java_lang_String(/** ?string */ value) {
  this.$ctor__java_lang_Object__();
  this.f_value__org_pepstock_charba_client_datalabels_StandardDataLabelId_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_datalabels_StandardDataLabelId_;
 }
 
 static $clinit() {
  StandardDataLabelId.$clinit = () =>{};
  StandardDataLabelId.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StandardDataLabelId;
 }
 
 static $loadModules() {}
}
DataLabelId.$markImplementor(StandardDataLabelId);
$Util.$setClassMetadata(StandardDataLabelId, "org.pepstock.charba.client.datalabels.StandardDataLabelId");

exports = StandardDataLabelId;

//# sourceMappingURL=StandardDataLabelId.js.map
