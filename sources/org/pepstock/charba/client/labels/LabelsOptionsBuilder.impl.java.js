goog.module('org.pepstock.charba.client.labels.LabelsOptionsBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsLabelId = goog.forwardDeclare('org.pepstock.charba.client.labels.IsLabelId$impl');
let LabelBuilder = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelBuilder$impl');
let LabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class LabelsOptionsBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<?string, LabelBuilder>}*/
  this.f_labelBuilders__org_pepstock_charba_client_labels_LabelsOptionsBuilder_;
  /**@type {LabelsOptions}*/
  this.f_options__org_pepstock_charba_client_labels_LabelsOptionsBuilder_;
 }
 /** @return {!LabelsOptionsBuilder} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  let $instance = new LabelsOptionsBuilder();
  $instance.$ctor__org_pepstock_charba_client_labels_LabelsOptionsBuilder__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_labels_LabelsOptionsBuilder__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_labels_LabelsOptionsBuilder();
  this.f_options__org_pepstock_charba_client_labels_LabelsOptionsBuilder_ = LabelsOptions.$create__org_pepstock_charba_client_IsChart(chart);
 }
 /** @return {LabelsOptionsBuilder} */
 static m_create__() {
  LabelsOptionsBuilder.$clinit();
  return LabelsOptionsBuilder.m_create__org_pepstock_charba_client_IsChart(null);
 }
 /** @return {LabelsOptionsBuilder} */
 static m_create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  LabelsOptionsBuilder.$clinit();
  return LabelsOptionsBuilder.$create__org_pepstock_charba_client_IsChart(chart);
 }
 /** @return {LabelsOptions} */
 m_build__() {
  return this.f_options__org_pepstock_charba_client_labels_LabelsOptionsBuilder_;
 }
 /** @return {LabelBuilder} */
 m_createLabel__java_lang_String(/** ?string */ id) {
  return this.m_createLabel__org_pepstock_charba_client_labels_IsLabelId(IsLabelId.m_create__java_lang_String(id));
 }
 /** @return {LabelBuilder} */
 m_createLabel__org_pepstock_charba_client_labels_IsLabelId(/** IsLabelId */ id) {
  IsLabelId.m_checkIfValid__org_pepstock_charba_client_labels_IsLabelId(id);
  let builder = LabelBuilder.$create__org_pepstock_charba_client_labels_LabelsOptionsBuilder__org_pepstock_charba_client_labels_Label(this, this.f_options__org_pepstock_charba_client_labels_LabelsOptionsBuilder_.m_createLabel__org_pepstock_charba_client_labels_IsLabelId(id));
  builder.m_setOptionsBuilder__org_pepstock_charba_client_labels_LabelsOptionsBuilder_$pp_org_pepstock_charba_client_labels(this);
  this.f_labelBuilders__org_pepstock_charba_client_labels_LabelsOptionsBuilder_.put(id.m_value__(), builder);
  return builder;
 }
 /** @return {LabelBuilder} */
 m_getLabel__java_lang_String(/** ?string */ id) {
  return this.m_getLabel__org_pepstock_charba_client_labels_IsLabelId(IsLabelId.m_create__java_lang_String(id));
 }
 /** @return {LabelBuilder} */
 m_getLabel__org_pepstock_charba_client_labels_IsLabelId(/** IsLabelId */ id) {
  IsLabelId.m_checkIfValid__org_pepstock_charba_client_labels_IsLabelId(id);
  if (this.f_labelBuilders__org_pepstock_charba_client_labels_LabelsOptionsBuilder_.containsKey(id.m_value__())) {
   return this.m_createLabel__org_pepstock_charba_client_labels_IsLabelId(id);
  }
  return /**@type {LabelBuilder}*/ ($Casts.$to(this.f_labelBuilders__org_pepstock_charba_client_labels_LabelsOptionsBuilder_.get(id.m_value__()), LabelBuilder));
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_labels_LabelsOptionsBuilder() {
  this.f_labelBuilders__org_pepstock_charba_client_labels_LabelsOptionsBuilder_ = /**@type {!HashMap<?string, LabelBuilder>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  LabelsOptionsBuilder.$clinit = () =>{};
  LabelsOptionsBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LabelsOptionsBuilder;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  IsLabelId = goog.module.get('org.pepstock.charba.client.labels.IsLabelId$impl');
  LabelBuilder = goog.module.get('org.pepstock.charba.client.labels.LabelBuilder$impl');
  LabelsOptions = goog.module.get('org.pepstock.charba.client.labels.LabelsOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(LabelsOptionsBuilder, "org.pepstock.charba.client.labels.LabelsOptionsBuilder");

exports = LabelsOptionsBuilder;

//# sourceMappingURL=LabelsOptionsBuilder.js.map
