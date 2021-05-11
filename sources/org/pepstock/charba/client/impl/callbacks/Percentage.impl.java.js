goog.module('org.pepstock.charba.client.impl.callbacks.Percentage$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AbstractDatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.AbstractDatasetContext$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let FloatingData = goog.forwardDeclare('org.pepstock.charba.client.data.FloatingData$impl');
let HasDataPoints = goog.forwardDeclare('org.pepstock.charba.client.data.HasDataPoints$impl');
let DataType = goog.forwardDeclare('org.pepstock.charba.client.enums.DataType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class Percentage extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Percentage} */
 static $create__() {
  let $instance = new Percentage();
  $instance.$ctor__org_pepstock_charba_client_impl_callbacks_Percentage__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_callbacks_Percentage__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {number} */
 static m_compute__org_pepstock_charba_client_IsChart__double__org_pepstock_charba_client_callbacks_AbstractDatasetContext(/** IsChart */ chart, /** number */ value, /** AbstractDatasetContext */ context) {
  Percentage.$clinit();
  return Percentage.m_compute__org_pepstock_charba_client_IsChart__double__org_pepstock_charba_client_callbacks_AbstractDatasetContext__boolean(chart, value, context, false);
 }
 /** @return {number} */
 static m_compute__org_pepstock_charba_client_IsChart__double__org_pepstock_charba_client_callbacks_AbstractDatasetContext__boolean(/** IsChart */ chart, /** number */ value, /** AbstractDatasetContext */ context, /** boolean */ stacked) {
  Percentage.$clinit();
  if (!IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) || $Equality.$same(context, null)) {
   return Double.f_NaN__java_lang_Double;
  }
  let /** number */ total;
  if (stacked) {
   total = Percentage.m_getTotalForStacked__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_callbacks_AbstractDatasetContext(chart, context);
  } else {
   total = Percentage.m_getTotal__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_callbacks_AbstractDatasetContext(chart, context);
  }
  if (total == 0) {
   return Double.f_NaN__java_lang_Double;
  }
  return Math.abs(value) / total;
 }
 /** @return {number} */
 static m_getTotalForStacked__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_callbacks_AbstractDatasetContext(/** IsChart */ chart, /** AbstractDatasetContext */ context) {
  let total = 0;
  for (let $iterator = chart.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let ds = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    if ($Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_POINTS__org_pepstock_charba_client_enums_DataType, ds.m_getDataType__()) && HasDataPoints.$isInstance(ds)) {
     let hasDataPoints = /**@type {HasDataPoints}*/ ($Casts.$to(ds, HasDataPoints));
     let point = /**@type {DataPoint}*/ ($Casts.$to(hasDataPoints.m_getDataPoints__().getAtIndex(context.m_getDataIndex__()), DataPoint));
     total = total + Math.abs(point.m_getY__());
    } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_ARRAYS__org_pepstock_charba_client_enums_DataType, ds.m_getDataType__()) && BarDataset.$isInstance(ds)) {
     let barDataset = /**@type {BarDataset}*/ ($Casts.$to(ds, BarDataset));
     let data = /**@type {FloatingData}*/ ($Casts.$to(barDataset.m_getFloatingData__().getAtIndex(context.m_getDataIndex__()), FloatingData));
     total = total + data.m_getAbsValue__();
    } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_NUMBERS__org_pepstock_charba_client_enums_DataType, ds.m_getDataType__())) {
     let data_1 = Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ds.m_getData__().getAtIndex(context.m_getDataIndex__()), Double)));
     total = total + Math.abs(data_1);
    }
   }
  }
  return total;
 }
 /** @return {number} */
 static m_getTotal__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_callbacks_AbstractDatasetContext(/** IsChart */ chart, /** AbstractDatasetContext */ context) {
  let total = 0;
  let ds = /**@type {Dataset}*/ ($Casts.$to(chart.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), Dataset));
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_POINTS__org_pepstock_charba_client_enums_DataType, ds.m_getDataType__()) && HasDataPoints.$isInstance(ds)) {
   let hasDataPoints = /**@type {HasDataPoints}*/ ($Casts.$to(ds, HasDataPoints));
   let points = hasDataPoints.m_getDataPoints__();
   for (let $iterator = points.m_iterator__(); $iterator.m_hasNext__(); ) {
    let dataPoint = /**@type {DataPoint}*/ ($Casts.$to($iterator.m_next__(), DataPoint));
    {
     total = total + Math.abs(dataPoint.m_getY__());
    }
   }
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_ARRAYS__org_pepstock_charba_client_enums_DataType, ds.m_getDataType__()) && BarDataset.$isInstance(ds)) {
   let barDataset = /**@type {BarDataset}*/ ($Casts.$to(ds, BarDataset));
   let data = barDataset.m_getFloatingData__();
   for (let $iterator_1 = data.m_iterator__(); $iterator_1.m_hasNext__(); ) {
    let dataFloat = /**@type {FloatingData}*/ ($Casts.$to($iterator_1.m_next__(), FloatingData));
    {
     total = total + dataFloat.m_getAbsValue__();
    }
   }
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_NUMBERS__org_pepstock_charba_client_enums_DataType, ds.m_getDataType__())) {
   let data_1 = ds.m_getData__();
   for (let $iterator_2 = data_1.m_iterator__(); $iterator_2.m_hasNext__(); ) {
    let dataValue = /**@type {?number}*/ ($Casts.$to($iterator_2.m_next__(), Double));
    {
     total = total + Math.abs(Double.m_doubleValue__java_lang_Double(dataValue));
    }
   }
  }
  return total;
 }
 
 static $clinit() {
  Percentage.$clinit = () =>{};
  Percentage.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Percentage;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  FloatingData = goog.module.get('org.pepstock.charba.client.data.FloatingData$impl');
  HasDataPoints = goog.module.get('org.pepstock.charba.client.data.HasDataPoints$impl');
  DataType = goog.module.get('org.pepstock.charba.client.enums.DataType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(Percentage, "org.pepstock.charba.client.impl.callbacks.Percentage");

exports = Percentage;

//# sourceMappingURL=Percentage.js.map
