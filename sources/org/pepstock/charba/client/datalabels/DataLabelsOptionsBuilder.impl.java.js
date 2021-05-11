goog.module('org.pepstock.charba.client.datalabels.DataLabelsOptionsBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractBuilder = goog.require('org.pepstock.charba.client.datalabels.AbstractBuilder$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let DataLabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
let IsDataLabelId = goog.forwardDeclare('org.pepstock.charba.client.datalabels.IsDataLabelId$impl');
let LabelItemBuilder = goog.forwardDeclare('org.pepstock.charba.client.datalabels.LabelItemBuilder$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractBuilder<DataLabelsOptions>}
 */
class DataLabelsOptionsBuilder extends AbstractBuilder {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<?string, LabelItemBuilder>}*/
  this.f_labelItemBuilders__org_pepstock_charba_client_datalabels_DataLabelsOptionsBuilder_;
 }
 /** @return {!DataLabelsOptionsBuilder} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  let $instance = new DataLabelsOptionsBuilder();
  $instance.$ctor__org_pepstock_charba_client_datalabels_DataLabelsOptionsBuilder__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_DataLabelsOptionsBuilder__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_datalabels_AbstractBuilder__org_pepstock_charba_client_datalabels_LabelItem(DataLabelsOptions.$create__org_pepstock_charba_client_IsChart(chart));
  this.$init___$p_org_pepstock_charba_client_datalabels_DataLabelsOptionsBuilder();
  this.m_setOptionsBuilder__org_pepstock_charba_client_datalabels_DataLabelsOptionsBuilder_$pp_org_pepstock_charba_client_datalabels(this);
 }
 /** @return {DataLabelsOptionsBuilder} */
 static m_create__() {
  DataLabelsOptionsBuilder.$clinit();
  return DataLabelsOptionsBuilder.m_create__org_pepstock_charba_client_IsChart(null);
 }
 /** @return {DataLabelsOptionsBuilder} */
 static m_create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  DataLabelsOptionsBuilder.$clinit();
  return DataLabelsOptionsBuilder.$create__org_pepstock_charba_client_IsChart(chart);
 }
 /** @return {DataLabelsOptions} */
 m_build__() {
  return /**@type {DataLabelsOptions}*/ ($Casts.$to(this.m_getLabel___$pp_org_pepstock_charba_client_datalabels(), DataLabelsOptions));
 }
 /** @return {LabelItemBuilder} */
 m_createLabel__java_lang_String(/** ?string */ id) {
  return this.m_createLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(IsDataLabelId.m_create__java_lang_String(id));
 }
 /** @return {LabelItemBuilder} */
 m_createLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(/** IsDataLabelId */ id) {
  IsDataLabelId.m_checkIfValid__org_pepstock_charba_client_datalabels_IsDataLabelId(id);
  let builder = LabelItemBuilder.$create__org_pepstock_charba_client_datalabels_LabelItem(/**@type {DataLabelsOptions}*/ ($Casts.$to(this.m_getLabel___$pp_org_pepstock_charba_client_datalabels(), DataLabelsOptions)).m_getLabels__().m_createLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(id));
  builder.m_setOptionsBuilder__org_pepstock_charba_client_datalabels_DataLabelsOptionsBuilder_$pp_org_pepstock_charba_client_datalabels(this);
  this.f_labelItemBuilders__org_pepstock_charba_client_datalabels_DataLabelsOptionsBuilder_.put(id.m_value__(), builder);
  return builder;
 }
 /** @return {LabelItemBuilder} */
 m_getLabel__java_lang_String(/** ?string */ id) {
  return this.m_getLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(IsDataLabelId.m_create__java_lang_String(id));
 }
 /** @return {LabelItemBuilder} */
 m_getLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(/** IsDataLabelId */ id) {
  IsDataLabelId.m_checkIfValid__org_pepstock_charba_client_datalabels_IsDataLabelId(id);
  if (this.f_labelItemBuilders__org_pepstock_charba_client_datalabels_DataLabelsOptionsBuilder_.containsKey(id.m_value__())) {
   return this.m_createLabel__org_pepstock_charba_client_datalabels_IsDataLabelId(id);
  }
  return /**@type {LabelItemBuilder}*/ ($Casts.$to(this.f_labelItemBuilders__org_pepstock_charba_client_datalabels_DataLabelsOptionsBuilder_.get(id.m_value__()), LabelItemBuilder));
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_datalabels_DataLabelsOptionsBuilder() {
  this.f_labelItemBuilders__org_pepstock_charba_client_datalabels_DataLabelsOptionsBuilder_ = /**@type {!HashMap<?string, LabelItemBuilder>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  DataLabelsOptionsBuilder.$clinit = () =>{};
  DataLabelsOptionsBuilder.$loadModules();
  AbstractBuilder.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataLabelsOptionsBuilder;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  DataLabelsOptions = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
  IsDataLabelId = goog.module.get('org.pepstock.charba.client.datalabels.IsDataLabelId$impl');
  LabelItemBuilder = goog.module.get('org.pepstock.charba.client.datalabels.LabelItemBuilder$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(DataLabelsOptionsBuilder, "org.pepstock.charba.client.datalabels.DataLabelsOptionsBuilder");

exports = DataLabelsOptionsBuilder;

//# sourceMappingURL=DataLabelsOptionsBuilder.js.map
