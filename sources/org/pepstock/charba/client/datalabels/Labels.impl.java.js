goog.module('org.pepstock.charba.client.datalabels.Labels$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractElement = goog.require('org.pepstock.charba.client.datalabels.AbstractElement$impl');
const IsDefaultLabels = goog.require('org.pepstock.charba.client.datalabels.IsDefaultLabels$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDataLabelId = goog.forwardDeclare('org.pepstock.charba.client.datalabels.IsDataLabelId$impl');
let IsDefaultDataLabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.datalabels.IsDefaultDataLabelsOptions$impl');
let LabelItem = goog.forwardDeclare('org.pepstock.charba.client.datalabels.LabelItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultLabels}
 */
class Labels extends AbstractElement {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultDataLabelsOptions}*/
  this.f_parent__org_pepstock_charba_client_datalabels_Labels_;
  /**@type {IsDefaultLabels}*/
  this.f_defaultOptions__org_pepstock_charba_client_datalabels_Labels_;
 }
 /** @return {!Labels} */
 static $create__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsOptions__org_pepstock_charba_client_datalabels_IsDefaultLabels__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultDataLabelsOptions */ parent, /** IsDefaultLabels */ defaultOptions, /** ? */ nativeObject) {
  Labels.$clinit();
  let $instance = new Labels();
  $instance.$ctor__org_pepstock_charba_client_datalabels_Labels__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsOptions__org_pepstock_charba_client_datalabels_IsDefaultLabels__org_pepstock_charba_client_commons_NativeObject(parent, defaultOptions, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_Labels__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsOptions__org_pepstock_charba_client_datalabels_IsDefaultLabels__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultDataLabelsOptions */ parent, /** IsDefaultLabels */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_datalabels_AbstractElement__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_parent__org_pepstock_charba_client_datalabels_Labels_ = /**@type {IsDefaultDataLabelsOptions}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(parent), IsDefaultDataLabelsOptions));
  this.f_defaultOptions__org_pepstock_charba_client_datalabels_Labels_ = /**@type {IsDefaultLabels}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultOptions), IsDefaultLabels));
 }
 /** @return {LabelItem} */
 m_createLabel__java_lang_String(/** ?string */ id) {
  return this.m_createLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(IsDataLabelId.m_create__java_lang_String(id));
 }
 /** @return {LabelItem} */
 m_createLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(/** IsDataLabelId */ id) {
  IsDataLabelId.m_checkIfValid__org_pepstock_charba_client_datalabels_IsDataLabelId(id);
  if (this.m_has__org_pepstock_charba_client_commons_Key(id)) {
   return LabelItem.$create__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_datalabels_Labels_, this.m_getValue__org_pepstock_charba_client_commons_Key(id));
  } else {
   let item = LabelItem.$create__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_datalabels_Labels_, null);
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(id, item);
   return item;
  }
 }
 /** @return {LabelItem} */
 m_getLabel__java_lang_String(/** ?string */ id) {
  return this.m_getLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(IsDataLabelId.m_create__java_lang_String(id));
 }
 /** @override @return {LabelItem} */
 m_getLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(/** IsDataLabelId */ id) {
  IsDataLabelId.m_checkIfValid__org_pepstock_charba_client_datalabels_IsDataLabelId(id);
  if (this.m_has__org_pepstock_charba_client_commons_Key(id)) {
   return LabelItem.$create__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_datalabels_Labels_, this.m_getValue__org_pepstock_charba_client_commons_Key(id));
  }
  return this.f_defaultOptions__org_pepstock_charba_client_datalabels_Labels_.m_getLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(id);
 }
 /** @return {boolean} */
 m_hasLabel__java_lang_String(/** ?string */ id) {
  return this.m_hasLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(IsDataLabelId.m_create__java_lang_String(id));
 }
 /** @override @return {boolean} */
 m_hasLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(/** IsDataLabelId */ id) {
  IsDataLabelId.m_checkIfValid__org_pepstock_charba_client_datalabels_IsDataLabelId(id);
  return this.m_has__org_pepstock_charba_client_commons_Key(id) || this.f_defaultOptions__org_pepstock_charba_client_datalabels_Labels_.m_hasLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(id);
 }
 
 m_removeLabel__java_lang_String(/** ?string */ id) {
  this.m_removeLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(IsDataLabelId.m_create__java_lang_String(id));
 }
 
 m_removeLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(/** IsDataLabelId */ id) {
  IsDataLabelId.m_checkIfValid__org_pepstock_charba_client_datalabels_IsDataLabelId(id);
  this.m_remove__org_pepstock_charba_client_commons_Key(id);
 }
 /** @return {List<Key>} */
 m_getLabelKeys__() {
  return /**@type {List<Key>}*/ (Collections.m_unmodifiableList__java_util_List(this.m_keys__()));
 }
 
 static $clinit() {
  Labels.$clinit = () =>{};
  Labels.$loadModules();
  AbstractElement.$clinit();
  IsDefaultLabels.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Labels;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  IsDataLabelId = goog.module.get('org.pepstock.charba.client.datalabels.IsDataLabelId$impl');
  IsDefaultDataLabelsOptions = goog.module.get('org.pepstock.charba.client.datalabels.IsDefaultDataLabelsOptions$impl');
  LabelItem = goog.module.get('org.pepstock.charba.client.datalabels.LabelItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultLabels.$markImplementor(Labels);
$Util.$setClassMetadata(Labels, "org.pepstock.charba.client.datalabels.Labels");

exports = Labels;

//# sourceMappingURL=Labels.js.map
