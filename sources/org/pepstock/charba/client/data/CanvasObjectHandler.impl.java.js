goog.module('org.pepstock.charba.client.data.CanvasObjectHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPlugin = goog.require('org.pepstock.charba.client.plugins.AbstractPlugin$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let DatasetCanvasObjectFactory = goog.forwardDeclare('org.pepstock.charba.client.data.DatasetCanvasObjectFactory$impl');
let PluginResizeArgument = goog.forwardDeclare('org.pepstock.charba.client.items.PluginResizeArgument$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CanvasObjectHandler extends AbstractPlugin {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!CanvasObjectHandler} */
 static $create__() {
  let $instance = new CanvasObjectHandler();
  $instance.$ctor__org_pepstock_charba_client_data_CanvasObjectHandler__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_CanvasObjectHandler__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPlugin__java_lang_String(CanvasObjectHandler.f_ID__org_pepstock_charba_client_data_CanvasObjectHandler);
 }
 /** @return {CanvasObjectHandler} */
 static m_get__() {
  CanvasObjectHandler.$clinit();
  return CanvasObjectHandler.f_INSTANCE__org_pepstock_charba_client_data_CanvasObjectHandler_;
 }
 /** @override */
 m_onConfigure__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart)) {
   let data = chart.m_getData__();
   let datasets = data.m_getDatasets__();
   for (let $iterator = datasets.m_iterator__(); $iterator.m_hasNext__(); ) {
    let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
    {
     dataset.m_clearCallbackPatternsAndGradients___$pp_org_pepstock_charba_client_data();
     dataset.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_setChanged__boolean_$pp_org_pepstock_charba_client_data(false);
     dataset.m_getPatternsContainer___$pp_org_pepstock_charba_client_data().m_setChanged__boolean_$pp_org_pepstock_charba_client_data(false);
    }
   }
  }
 }
 /** @override */
 m_onResize__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_PluginResizeArgument(/** IsChart */ chart, /** PluginResizeArgument */ argument) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart)) {
   for (let $iterator = chart.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
    let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
    {
     dataset.m_resetCallbackGradients___$pp_org_pepstock_charba_client_data();
    }
   }
   DatasetCanvasObjectFactory.m_get__().m_resetGradients__org_pepstock_charba_client_IsChart(chart);
  }
 }
 /** @override */
 m_onDestroy__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart)) {
   DatasetCanvasObjectFactory.m_get__().m_clear__org_pepstock_charba_client_IsChart(chart);
   let data = chart.m_getData__();
   let datasets = data.m_getDatasets__();
   for (let $iterator = datasets.m_iterator__(); $iterator.m_hasNext__(); ) {
    let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
    {
     dataset.m_clearCallbackPatternsAndGradients___$pp_org_pepstock_charba_client_data();
    }
   }
  }
 }
 
 static $clinit() {
  CanvasObjectHandler.$clinit = () =>{};
  CanvasObjectHandler.$loadModules();
  AbstractPlugin.$clinit();
  CanvasObjectHandler.f_INSTANCE__org_pepstock_charba_client_data_CanvasObjectHandler_ = CanvasObjectHandler.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CanvasObjectHandler;
 }
 
 static $loadModules() {
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  DatasetCanvasObjectFactory = goog.module.get('org.pepstock.charba.client.data.DatasetCanvasObjectFactory$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {CanvasObjectHandler}*/
CanvasObjectHandler.f_INSTANCE__org_pepstock_charba_client_data_CanvasObjectHandler_;
/**@const {?string}*/
CanvasObjectHandler.f_ID__org_pepstock_charba_client_data_CanvasObjectHandler = "charbacanvasobjecthandler";
$Util.$setClassMetadata(CanvasObjectHandler, "org.pepstock.charba.client.data.CanvasObjectHandler");

exports = CanvasObjectHandler;

//# sourceMappingURL=CanvasObjectHandler.js.map
