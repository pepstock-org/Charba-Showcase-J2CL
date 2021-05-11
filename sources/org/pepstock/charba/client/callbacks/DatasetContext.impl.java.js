goog.module('org.pepstock.charba.client.callbacks.DatasetContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDatasetContext = goog.require('org.pepstock.charba.client.callbacks.AbstractDatasetContext$impl');

let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let ConfigurationEnvelop = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
let DataEnvelop = goog.forwardDeclare('org.pepstock.charba.client.data.DataEnvelop$impl');
let DataLabelsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsEnvelop$impl');
let LabelsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsEnvelop$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DatasetContext extends AbstractDatasetContext {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'DatasetContext(ConfigurationEnvelop)'.
 /** @return {!DatasetContext} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** ConfigurationEnvelop<?> */ envelop) {
  DatasetContext.$clinit();
  let $instance = new DatasetContext();
  $instance.$ctor__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_configuration_ConfigurationEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'DatasetContext(ConfigurationEnvelop)'.
 
 $ctor__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** ConfigurationEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {ConfigurationEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), ConfigurationEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'DatasetContext(DataEnvelop)'.
 /** @return {!DatasetContext} */
 static $create__org_pepstock_charba_client_data_DataEnvelop(/** DataEnvelop<?> */ envelop) {
  DatasetContext.$clinit();
  let $instance = new DatasetContext();
  $instance.$ctor__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_data_DataEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'DatasetContext(DataEnvelop)'.
 
 $ctor__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_data_DataEnvelop(/** DataEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {DataEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), DataEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'DatasetContext(DataLabelsEnvelop)'.
 /** @return {!DatasetContext} */
 static $create__org_pepstock_charba_client_datalabels_DataLabelsEnvelop(/** DataLabelsEnvelop<?> */ envelop) {
  DatasetContext.$clinit();
  let $instance = new DatasetContext();
  $instance.$ctor__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_datalabels_DataLabelsEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'DatasetContext(DataLabelsEnvelop)'.
 
 $ctor__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_datalabels_DataLabelsEnvelop(/** DataLabelsEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {DataLabelsEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), DataLabelsEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'DatasetContext(LabelsEnvelop)'.
 /** @return {!DatasetContext} */
 static $create__org_pepstock_charba_client_labels_LabelsEnvelop(/** LabelsEnvelop<?> */ envelop) {
  DatasetContext.$clinit();
  let $instance = new DatasetContext();
  $instance.$ctor__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_labels_LabelsEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'DatasetContext(LabelsEnvelop)'.
 
 $ctor__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_labels_LabelsEnvelop(/** LabelsEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {LabelsEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), LabelsEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'DatasetContext(NativeObject)'.
 /** @return {!DatasetContext} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  let $instance = new DatasetContext();
  $instance.$ctor__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'DatasetContext(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_callbacks_AbstractDatasetContext__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 static $clinit() {
  DatasetContext.$clinit = () =>{};
  DatasetContext.$loadModules();
  AbstractDatasetContext.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetContext;
 }
 
 static $loadModules() {
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  ConfigurationEnvelop = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
  DataEnvelop = goog.module.get('org.pepstock.charba.client.data.DataEnvelop$impl');
  DataLabelsEnvelop = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsEnvelop$impl');
  LabelsEnvelop = goog.module.get('org.pepstock.charba.client.labels.LabelsEnvelop$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(DatasetContext, "org.pepstock.charba.client.callbacks.DatasetContext");

exports = DatasetContext;

//# sourceMappingURL=DatasetContext.js.map
