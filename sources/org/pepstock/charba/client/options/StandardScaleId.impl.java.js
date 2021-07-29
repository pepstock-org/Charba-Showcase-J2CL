goog.module('org.pepstock.charba.client.options.StandardScaleId$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractStandardKey = goog.require('org.pepstock.charba.client.options.AbstractStandardKey$impl');
const ScaleId = goog.require('org.pepstock.charba.client.options.ScaleId$impl');

let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');

/**
 * @implements {ScaleId}
 */
class StandardScaleId extends AbstractStandardKey {
 /** @protected */
 constructor() {
  super();
  /**@type {AxisKind}*/
  this.f_axisKind__org_pepstock_charba_client_options_StandardScaleId_;
 }
 /** @return {!StandardScaleId} */
 static $create__java_lang_String(/** ?string */ value) {
  StandardScaleId.$clinit();
  let $instance = new StandardScaleId();
  $instance.$ctor__org_pepstock_charba_client_options_StandardScaleId__java_lang_String(value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_StandardScaleId__java_lang_String(/** ?string */ value) {
  this.$ctor__org_pepstock_charba_client_options_AbstractStandardKey__java_lang_String(value);
  ScaleId.m_checkIfValid__org_pepstock_charba_client_options_ScaleId(this);
  this.f_axisKind__org_pepstock_charba_client_options_StandardScaleId_ = DefaultScaleId.m_getAxisKindByScaleId__java_lang_String__org_pepstock_charba_client_enums_AxisKind(value, AxisKind.f_X__org_pepstock_charba_client_enums_AxisKind);
 }
 /** @override @return {AxisKind} */
 m_getAxisKind__() {
  return this.f_axisKind__org_pepstock_charba_client_options_StandardScaleId_;
 }
 /** @override @return {number} */
 hashCode() {
  return super.hashCode();
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  return super.equals(obj);
 }
 
 static $clinit() {
  StandardScaleId.$clinit = () =>{};
  StandardScaleId.$loadModules();
  AbstractStandardKey.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StandardScaleId;
 }
 
 static $loadModules() {
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
 }
}
ScaleId.$markImplementor(StandardScaleId);
$Util.$setClassMetadata(StandardScaleId, "org.pepstock.charba.client.options.StandardScaleId");

exports = StandardScaleId;

//# sourceMappingURL=StandardScaleId.js.map
