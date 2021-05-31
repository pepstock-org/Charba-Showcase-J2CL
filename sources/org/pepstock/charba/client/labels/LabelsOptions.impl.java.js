goog.module('org.pepstock.charba.client.labels.LabelsOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultOptions = goog.require('org.pepstock.charba.client.labels.IsDefaultOptions$impl');
const AbstractPluginOptions = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let Label = goog.forwardDeclare('org.pepstock.charba.client.labels.Label$impl');
let LabelId = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelId$impl');
let LabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsPlugin$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultOptions}
 */
class LabelsOptions extends AbstractPluginOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultOptions}*/
  this.f_defaultOptions__org_pepstock_charba_client_labels_LabelsOptions_;
 }
 //Factory method corresponding to constructor 'LabelsOptions()'.
 /** @return {!LabelsOptions} */
 static $create__() {
  LabelsOptions.$clinit();
  let $instance = new LabelsOptions();
  $instance.$ctor__org_pepstock_charba_client_labels_LabelsOptions__();
  return $instance;
 }
 //Initialization from constructor 'LabelsOptions()'.
 
 $ctor__org_pepstock_charba_client_labels_LabelsOptions__() {
  this.$ctor__org_pepstock_charba_client_labels_LabelsOptions__org_pepstock_charba_client_labels_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(null, null);
 }
 //Factory method corresponding to constructor 'LabelsOptions(IsChart)'.
 /** @return {!LabelsOptions} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  LabelsOptions.$clinit();
  let $instance = new LabelsOptions();
  $instance.$ctor__org_pepstock_charba_client_labels_LabelsOptions__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 //Initialization from constructor 'LabelsOptions(IsChart)'.
 
 $ctor__org_pepstock_charba_client_labels_LabelsOptions__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_labels_LabelsOptions__org_pepstock_charba_client_labels_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) ? /**@type {LabelsOptions}*/ ($Casts.$to(chart.m_getDefaultChartOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(LabelsPlugin.f_ID__org_pepstock_charba_client_labels_LabelsPlugin, LabelsPlugin.f_DEFAULTS_FACTORY__org_pepstock_charba_client_labels_LabelsPlugin), LabelsOptions)) : null, null);
 }
 //Factory method corresponding to constructor 'LabelsOptions(IsDefaultOptions, NativeObject)'.
 /** @return {!LabelsOptions} */
 static $create__org_pepstock_charba_client_labels_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultOptions */ defaultOptions, /** ? */ nativeObject) {
  LabelsOptions.$clinit();
  let $instance = new LabelsOptions();
  $instance.$ctor__org_pepstock_charba_client_labels_LabelsOptions__org_pepstock_charba_client_labels_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'LabelsOptions(IsDefaultOptions, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_labels_LabelsOptions__org_pepstock_charba_client_labels_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultOptions */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptions__java_lang_String__org_pepstock_charba_client_commons_NativeObject(LabelsPlugin.f_ID__org_pepstock_charba_client_labels_LabelsPlugin, nativeObject);
  if ($Equality.$same(defaultOptions, null)) {
   this.f_defaultOptions__org_pepstock_charba_client_labels_LabelsOptions_ = /**@type {LabelsOptions}*/ ($Casts.$to(this.m_loadGlobalsPluginOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(LabelsPlugin.f_DEFAULTS_FACTORY__org_pepstock_charba_client_labels_LabelsPlugin), LabelsOptions));
  } else {
   this.f_defaultOptions__org_pepstock_charba_client_labels_LabelsOptions_ = defaultOptions;
  }
 }
 /** @return {Label} */
 m_createLabel__java_lang_String(/** ?string */ id) {
  return this.m_createLabel__org_pepstock_charba_client_labels_LabelId(LabelId.m_create__java_lang_String(id));
 }
 /** @return {Label} */
 m_createLabel__org_pepstock_charba_client_labels_LabelId(/** LabelId */ id) {
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(id);
  if (!this.m_has__org_pepstock_charba_client_commons_Key(id)) {
   let label = Label.$create__org_pepstock_charba_client_labels_LabelId__org_pepstock_charba_client_labels_IsDefaultLabel__org_pepstock_charba_client_commons_NativeObject(id, this.f_defaultOptions__org_pepstock_charba_client_labels_LabelsOptions_.m_getLabel__org_pepstock_charba_client_labels_LabelId(id), null);
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(id, label);
   return label;
  }
  return this.m_getLabel__org_pepstock_charba_client_labels_LabelId(id);
 }
 /** @return {boolean} */
 m_hasLabel__java_lang_String(/** ?string */ id) {
  return this.m_hasLabel__org_pepstock_charba_client_labels_LabelId(LabelId.m_create__java_lang_String(id));
 }
 /** @override @return {boolean} */
 m_hasLabel__org_pepstock_charba_client_labels_LabelId(/** LabelId */ id) {
  LabelId.m_checkIfValid__org_pepstock_charba_client_labels_LabelId(id);
  return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(id, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType) || this.f_defaultOptions__org_pepstock_charba_client_labels_LabelsOptions_.m_hasLabel__org_pepstock_charba_client_labels_LabelId(id);
 }
 
 m_removeLabel__java_lang_String(/** ?string */ id) {
  this.m_removeLabel__org_pepstock_charba_client_labels_LabelId(LabelId.m_create__java_lang_String(id));
 }
 
 m_removeLabel__org_pepstock_charba_client_labels_LabelId(/** LabelId */ id) {
  LabelId.m_checkIfValid__org_pepstock_charba_client_labels_LabelId(id);
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(id, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(id);
  }
 }
 /** @override @return {List<Label>} */
 m_getLabels__() {
  let result = /**@type {!ArrayList<Label>}*/ (ArrayList.$create__());
  for (let $iterator = this.m_keys__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let key = /**@type {Key}*/ ($Casts.$to($iterator.m_next__(), Key));
   {
    if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(key, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
     let id = LabelId.m_create__java_lang_String(key.m_value__());
     let label = Label.$create__org_pepstock_charba_client_labels_LabelId__org_pepstock_charba_client_labels_IsDefaultLabel__org_pepstock_charba_client_commons_NativeObject(id, this.f_defaultOptions__org_pepstock_charba_client_labels_LabelsOptions_.m_getLabel__org_pepstock_charba_client_labels_LabelId(id), this.m_getValue__org_pepstock_charba_client_commons_Key(key));
     result.add(label);
    }
   }
  }
  return /**@type {List<Label>}*/ (Collections.m_unmodifiableList__java_util_List(result));
 }
 /** @return {Label} */
 m_getLabel__java_lang_String(/** ?string */ id) {
  return this.m_getLabel__org_pepstock_charba_client_labels_LabelId(LabelId.m_create__java_lang_String(id));
 }
 /** @override @return {Label} */
 m_getLabel__org_pepstock_charba_client_labels_LabelId(/** LabelId */ id) {
  LabelId.m_checkIfValid__org_pepstock_charba_client_labels_LabelId(id);
  if (this.m_hasLabel__org_pepstock_charba_client_labels_LabelId(id) && this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(id, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return Label.$create__org_pepstock_charba_client_labels_LabelId__org_pepstock_charba_client_labels_IsDefaultLabel__org_pepstock_charba_client_commons_NativeObject(id, this.f_defaultOptions__org_pepstock_charba_client_labels_LabelsOptions_.m_getLabel__org_pepstock_charba_client_labels_LabelId(id), this.m_getValue__org_pepstock_charba_client_commons_Key(id));
  }
  return this.f_defaultOptions__org_pepstock_charba_client_labels_LabelsOptions_.m_getLabel__org_pepstock_charba_client_labels_LabelId(id);
 }
 
 static $clinit() {
  LabelsOptions.$clinit = () =>{};
  LabelsOptions.$loadModules();
  AbstractPluginOptions.$clinit();
  IsDefaultOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LabelsOptions;
 }
 
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  Label = goog.module.get('org.pepstock.charba.client.labels.Label$impl');
  LabelId = goog.module.get('org.pepstock.charba.client.labels.LabelId$impl');
  LabelsPlugin = goog.module.get('org.pepstock.charba.client.labels.LabelsPlugin$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultOptions.$markImplementor(LabelsOptions);
$Util.$setClassMetadata(LabelsOptions, "org.pepstock.charba.client.labels.LabelsOptions");

exports = LabelsOptions;

//# sourceMappingURL=LabelsOptions.js.map
