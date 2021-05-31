goog.module('org.pepstock.charba.client.labels.StandardLabelId$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LabelId = goog.require('org.pepstock.charba.client.labels.LabelId$impl');

/**
 * @implements {LabelId}
 */
class StandardLabelId extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_labels_StandardLabelId_;
 }
 /** @return {!StandardLabelId} */
 static $create__java_lang_String(/** ?string */ value) {
  StandardLabelId.$clinit();
  let $instance = new StandardLabelId();
  $instance.$ctor__org_pepstock_charba_client_labels_StandardLabelId__java_lang_String(value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_labels_StandardLabelId__java_lang_String(/** ?string */ value) {
  this.$ctor__java_lang_Object__();
  this.f_value__org_pepstock_charba_client_labels_StandardLabelId_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_labels_StandardLabelId_;
 }
 
 static $clinit() {
  StandardLabelId.$clinit = () =>{};
  StandardLabelId.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StandardLabelId;
 }
 
 static $loadModules() {}
}
LabelId.$markImplementor(StandardLabelId);
$Util.$setClassMetadata(StandardLabelId, "org.pepstock.charba.client.labels.StandardLabelId");

exports = StandardLabelId;

//# sourceMappingURL=StandardLabelId.js.map
