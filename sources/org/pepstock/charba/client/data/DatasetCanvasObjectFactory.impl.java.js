goog.module('org.pepstock.charba.client.data.DatasetCanvasObjectFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CanvasObjectFactory = goog.require('org.pepstock.charba.client.colors.CanvasObjectFactory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Area = goog.forwardDeclare('org.pepstock.charba.client.colors.Area$impl');
let Center = goog.forwardDeclare('org.pepstock.charba.client.colors.Center$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let GradientScope = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientScope$impl');
let Radius = goog.forwardDeclare('org.pepstock.charba.client.colors.Radius$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let DatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElement$impl');
let DatasetItem = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetItem$impl');
let IsArea = goog.forwardDeclare('org.pepstock.charba.client.items.IsArea$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class DatasetCanvasObjectFactory extends CanvasObjectFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DatasetCanvasObjectFactory} */
 static $create__() {
  let $instance = new DatasetCanvasObjectFactory();
  $instance.$ctor__org_pepstock_charba_client_data_DatasetCanvasObjectFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_DatasetCanvasObjectFactory__() {
  this.$ctor__org_pepstock_charba_client_colors_CanvasObjectFactory__org_pepstock_charba_client_commons_Key(Key.m_create__java_lang_String("dataset"));
 }
 /** @return {DatasetCanvasObjectFactory} */
 static m_get__() {
  DatasetCanvasObjectFactory.$clinit();
  return DatasetCanvasObjectFactory.f_INSTANCE__org_pepstock_charba_client_data_DatasetCanvasObjectFactory_;
 }
 /** @override @return {Area} */
 m_getArea__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient(/** IsChart */ chart, /** Gradient */ gradient) {
  let area = Area.$create__();
  let chartArea = chart.m_getNode__().m_getChartArea__();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(GradientScope.f_CANVAS__org_pepstock_charba_client_colors_GradientScope, gradient.m_getScope__()) || !IsArea.m_isConsistent__org_pepstock_charba_client_items_IsArea(chartArea)) {
   let canvas = chart.m_getCanvas__();
   area.m_setTop__double(0);
   area.m_setLeft__double(0);
   area.m_setRight__double(canvas.offsetWidth);
   area.m_setBottom__double(canvas.offsetHeight);
  } else {
   area.m_setTop__double(chartArea.m_getTop__());
   area.m_setLeft__double(chartArea.m_getLeft__());
   area.m_setRight__double(chartArea.m_getRight__());
   area.m_setBottom__double(chartArea.m_getBottom__());
  }
  return area;
 }
 /** @override @return {Center} */
 m_getCenter__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient__int__int(/** IsChart */ chart, /** Gradient */ gradient, /** number */ datasetIndex, /** number */ index) {
  let center = Center.$create__();
  let node = chart.m_getNode__();
  let chartArea = node.m_getChartArea__();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(GradientScope.f_CANVAS__org_pepstock_charba_client_colors_GradientScope, gradient.m_getScope__()) || !IsArea.m_isConsistent__org_pepstock_charba_client_items_IsArea(chartArea)) {
   let canvas = chart.m_getCanvas__();
   center.m_setX__double(canvas.offsetWidth / 2);
   center.m_setY__double(canvas.offsetHeight / 2);
  } else {
   center.m_setX__double((chartArea.m_getRight__() - chartArea.m_getLeft__()) / 2 + chartArea.m_getLeft__());
   center.m_setY__double((chartArea.m_getBottom__() - chartArea.m_getTop__()) / 2 + chartArea.m_getTop__());
  }
  return center;
 }
 /** @override @return {Radius} */
 m_getRadius__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient__int__int(/** IsChart */ chart, /** Gradient */ gradient, /** number */ datasetIndex, /** number */ index) {
  let radius = Radius.$create__();
  let node = chart.m_getNode__();
  let chartArea = node.m_getChartArea__();
  let datasetItem = chart.m_getDatasetItem__int(datasetIndex);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(GradientScope.f_CANVAS__org_pepstock_charba_client_colors_GradientScope, gradient.m_getScope__()) || !IsArea.m_isConsistent__org_pepstock_charba_client_items_IsArea(chartArea)) {
   if (!$Equality.$same(datasetItem, null) && Undefined.m_isNot__double(datasetItem.m_getController__().m_getInnerRadius__()) && Undefined.m_isNot__double(datasetItem.m_getController__().m_getOuterRadius__())) {
    this.m_manageRadiusByChartNode__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_DatasetItem__int__int__org_pepstock_charba_client_colors_Radius_$p_org_pepstock_charba_client_data_DatasetCanvasObjectFactory(chart, datasetItem, datasetIndex, index, radius);
   } else {
    let canvas = chart.m_getCanvas__();
    radius.m_setInner__double(0);
    radius.m_setOuter__double(Math.max(canvas.offsetWidth, canvas.offsetHeight) / 2);
   }
  } else {
   if (!$Equality.$same(datasetItem, null) && Undefined.m_isNot__double(datasetItem.m_getController__().m_getInnerRadius__()) && Undefined.m_isNot__double(datasetItem.m_getController__().m_getOuterRadius__())) {
    this.m_manageRadiusByChartNode__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_DatasetItem__int__int__org_pepstock_charba_client_colors_Radius_$p_org_pepstock_charba_client_data_DatasetCanvasObjectFactory(chart, datasetItem, datasetIndex, index, radius);
   } else {
    radius.m_setInner__double(0);
    radius.m_setOuter__double(Math.min(chartArea.m_getRight__() - chartArea.m_getLeft__(), chartArea.m_getBottom__() - chartArea.m_getTop__()) / 2);
   }
  }
  return radius;
 }
 
 m_manageRadiusByChartNode__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_DatasetItem__int__int__org_pepstock_charba_client_colors_Radius_$p_org_pepstock_charba_client_data_DatasetCanvasObjectFactory(/** IsChart */ chart, /** DatasetItem */ node, /** number */ datasetIndex, /** number */ index, /** Radius */ radius) {
  let datasetItem = chart.m_getDatasetItem__int(datasetIndex);
  if (!$Equality.$same(datasetItem, null) && index < datasetItem.m_getElements__().size() && index >= 0) {
   let item = /**@type {DatasetElement}*/ ($Casts.$to(datasetItem.m_getElements__().getAtIndex(index), DatasetElement));
   if (Undefined.m_isNot__double(item.m_getInnerRadius__()) && Undefined.m_isNot__double(item.m_getOuterRadius__())) {
    radius.m_setInner__double(Math.max(item.m_getInnerRadius__(), node.m_getController__().m_getInnerRadius__()));
    radius.m_setOuter__double(Math.max(item.m_getOuterRadius__(), node.m_getController__().m_getOuterRadius__()));
   } else {
    radius.m_setInner__double(node.m_getController__().m_getInnerRadius__());
    radius.m_setOuter__double(node.m_getController__().m_getOuterRadius__());
   }
  } else {
   radius.m_setInner__double(node.m_getController__().m_getInnerRadius__());
   radius.m_setOuter__double(node.m_getController__().m_getOuterRadius__());
  }
 }
 
 static $clinit() {
  DatasetCanvasObjectFactory.$clinit = () =>{};
  DatasetCanvasObjectFactory.$loadModules();
  CanvasObjectFactory.$clinit();
  DatasetCanvasObjectFactory.f_INSTANCE__org_pepstock_charba_client_data_DatasetCanvasObjectFactory_ = DatasetCanvasObjectFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetCanvasObjectFactory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Area = goog.module.get('org.pepstock.charba.client.colors.Area$impl');
  Center = goog.module.get('org.pepstock.charba.client.colors.Center$impl');
  GradientScope = goog.module.get('org.pepstock.charba.client.colors.GradientScope$impl');
  Radius = goog.module.get('org.pepstock.charba.client.colors.Radius$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  DatasetElement = goog.module.get('org.pepstock.charba.client.items.DatasetElement$impl');
  IsArea = goog.module.get('org.pepstock.charba.client.items.IsArea$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@type {DatasetCanvasObjectFactory}*/
DatasetCanvasObjectFactory.f_INSTANCE__org_pepstock_charba_client_data_DatasetCanvasObjectFactory_;
$Util.$setClassMetadata(DatasetCanvasObjectFactory, "org.pepstock.charba.client.data.DatasetCanvasObjectFactory");

exports = DatasetCanvasObjectFactory;

//# sourceMappingURL=DatasetCanvasObjectFactory.js.map
