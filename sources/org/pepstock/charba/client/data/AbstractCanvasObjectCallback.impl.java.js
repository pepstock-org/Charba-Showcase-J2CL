goog.module('org.pepstock.charba.client.data.AbstractCanvasObjectCallback$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let CanvasObject = goog.forwardDeclare('org.pepstock.charba.client.colors.CanvasObject$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AbstractContainer = goog.forwardDeclare('org.pepstock.charba.client.data.AbstractContainer$impl');
let CanvasObjectKey = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CanvasObjectKey$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @abstract
 * @template T
 * @implements {ColorCallback<DatasetContext>}
 */
class AbstractCanvasObjectCallback extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Key}*/
  this.f_property__org_pepstock_charba_client_data_AbstractCanvasObjectCallback_;
  /**@type {AbstractContainer<T>}*/
  this.f_container__org_pepstock_charba_client_data_AbstractCanvasObjectCallback_;
  /**@type {List<T>}*/
  this.f_objects__org_pepstock_charba_client_data_AbstractCanvasObjectCallback_;
 }
 
 $ctor__org_pepstock_charba_client_data_AbstractCanvasObjectCallback__org_pepstock_charba_client_data_AbstractContainer__org_pepstock_charba_client_data_Dataset_CanvasObjectKey(/** AbstractContainer<T> */ container, /** CanvasObjectKey */ property) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_data_AbstractCanvasObjectCallback();
  this.f_property__org_pepstock_charba_client_data_AbstractCanvasObjectCallback_ = /**@type {CanvasObjectKey}*/ ($Casts.$to(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(property), CanvasObjectKey));
  this.f_container__org_pepstock_charba_client_data_AbstractCanvasObjectCallback_ = container;
 }
 /** @return {T} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ context) {
  let chart = context.m_getChart__();
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && context.m_getDatasetIndex__() >= 0 && chart.m_getNode__().m_getChartArea__().m_isConsistent__()) {
   let dataset = chart.m_getData__().m_retrieveDataset__org_pepstock_charba_client_callbacks_DatasetContext(context);
   if (!$Equality.$same(dataset, null) && !this.f_container__org_pepstock_charba_client_data_AbstractCanvasObjectCallback_.m_isEmpty___$pp_org_pepstock_charba_client_data() && this.f_container__org_pepstock_charba_client_data_AbstractCanvasObjectCallback_.m_hasObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(this.f_property__org_pepstock_charba_client_data_AbstractCanvasObjectCallback_)) {
    if ($Equality.$same(this.f_objects__org_pepstock_charba_client_data_AbstractCanvasObjectCallback_, null) || this.f_container__org_pepstock_charba_client_data_AbstractCanvasObjectCallback_.m_isChanged___$pp_org_pepstock_charba_client_data()) {
     this.f_objects__org_pepstock_charba_client_data_AbstractCanvasObjectCallback_ = this.f_container__org_pepstock_charba_client_data_AbstractCanvasObjectCallback_.m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(this.f_property__org_pepstock_charba_client_data_AbstractCanvasObjectCallback_);
    }
    if (context.m_getDataIndex__() >= 0) {
     let gradientIndex = $Primitives.$coerceDivision(context.m_getDataIndex__() % this.f_objects__org_pepstock_charba_client_data_AbstractCanvasObjectCallback_.size());
     return /**@type {T}*/ ($Casts.$to(this.f_objects__org_pepstock_charba_client_data_AbstractCanvasObjectCallback_.getAtIndex(gradientIndex), CanvasObject));
    }
    return /**@type {T}*/ ($Casts.$to(this.f_objects__org_pepstock_charba_client_data_AbstractCanvasObjectCallback_.getAtIndex(0), CanvasObject));
   }
  }
  return null;
 }
 //Bridge method.
 /** @override @return {T} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DatasetContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/**@type {DatasetContext}*/ ($Casts.$to(arg0, DatasetContext)));
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_data_AbstractCanvasObjectCallback() {
  this.f_objects__org_pepstock_charba_client_data_AbstractCanvasObjectCallback_ = null;
 }
 
 static $clinit() {
  AbstractCanvasObjectCallback.$clinit = () =>{};
  AbstractCanvasObjectCallback.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractCanvasObjectCallback;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  CanvasObject = goog.module.get('org.pepstock.charba.client.colors.CanvasObject$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  CanvasObjectKey = goog.module.get('org.pepstock.charba.client.data.Dataset.CanvasObjectKey$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
ColorCallback.$markImplementor(AbstractCanvasObjectCallback);
$Util.$setClassMetadata(AbstractCanvasObjectCallback, "org.pepstock.charba.client.data.AbstractCanvasObjectCallback");

exports = AbstractCanvasObjectCallback;

//# sourceMappingURL=AbstractCanvasObjectCallback.js.map
