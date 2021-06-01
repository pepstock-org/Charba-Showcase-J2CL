goog.module('org.pepstock.charba.client.data.Data$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationElement = goog.require('org.pepstock.charba.client.ConfigurationElement$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
const HasLabels = goog.require('org.pepstock.charba.client.data.HasLabels$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let Configuration = goog.forwardDeclare('org.pepstock.charba.client.Configuration$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let CanvasObject = goog.forwardDeclare('org.pepstock.charba.client.colors.CanvasObject$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.Array.$Overlay$impl');
let ArrayMixedObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayMixedObject.$Overlay$impl');
let ArrayObjectContainerList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObjectContainerList$impl');
let ConfigurationLoader = goog.forwardDeclare('org.pepstock.charba.client.commons.ConfigurationLoader$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AbstractContainer = goog.forwardDeclare('org.pepstock.charba.client.data.AbstractContainer$impl');
let CanvasObjectHandler = goog.forwardDeclare('org.pepstock.charba.client.data.CanvasObjectHandler$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.data.Data.Property$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let CanvasObjectProperty = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CanvasObjectProperty$impl');
let HasPointFillStrokeStyles = goog.forwardDeclare('org.pepstock.charba.client.data.HasPointFillStrokeStyles$impl');
let Labels = goog.forwardDeclare('org.pepstock.charba.client.data.Labels$impl');
let LabelsHandler = goog.forwardDeclare('org.pepstock.charba.client.data.LabelsHandler$impl');
let ActiveDatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.ActiveDatasetElement$impl');
let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ConfigurationElement}
 * @implements {HasLabels}
 */
class Data extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {IsChart}*/
  this.f_chart__org_pepstock_charba_client_data_Data_;
  /**@type {ArrayObjectContainerList<Dataset>}*/
  this.f_currentDatasets__org_pepstock_charba_client_data_Data_;
  /**@type {LabelsHandler}*/
  this.f_labelsHandler__org_pepstock_charba_client_data_Data_;
  /**@type {boolean}*/
  this.f_canvasObjectHandling__org_pepstock_charba_client_data_Data_ = false;
 }
 /** @return {!Data} */
 static $create__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<IsChart> */ envelop) {
  Data.$clinit();
  let $instance = new Data();
  $instance.$ctor__org_pepstock_charba_client_data_Data__org_pepstock_charba_client_ChartEnvelop(envelop);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_Data__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<IsChart> */ envelop) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__();
  this.$init___$p_org_pepstock_charba_client_data_Data();
  this.f_chart__org_pepstock_charba_client_data_Data_ = /**@type {IsChart}*/ ($Casts.$to(/**@type {ChartEnvelop<IsChart>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ChartEnvelop)).m_getContent__(), IsChart));
  this.f_labelsHandler__org_pepstock_charba_client_data_Data_ = LabelsHandler.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getNativeObject__());
 }
 /** @override @return {LabelsHandler} */
 m_getLabelsHandler__() {
  return this.f_labelsHandler__org_pepstock_charba_client_data_Data_;
 }
 
 m_setXLabels__arrayOf_java_lang_String(/** Array<?string> */ labels) {
  let internalLabels = Labels.m_build__();
  internalLabels.m_load__arrayOf_java_lang_String(labels);
  this.m_setXLabels__org_pepstock_charba_client_data_Labels(internalLabels);
 }
 
 m_setXLabels__org_pepstock_charba_client_data_Labels(/** Labels */ labels) {
  if (!$Equality.$same(labels, null) && !$Overlay.m_isEmpty__$devirt__org_pepstock_charba_client_commons_Array(labels.m_getArray___$pp_org_pepstock_charba_client_data())) {
   this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_X_LABELS__org_pepstock_charba_client_data_Data_Property, labels.m_getArray___$pp_org_pepstock_charba_client_data());
  }
 }
 /** @return {Labels} */
 m_getXLabels__() {
  return this.m_getXLabels__boolean(false);
 }
 /** @return {Labels} */
 m_getXLabels__boolean(/** boolean */ binding) {
  if (this.m_has__org_pepstock_charba_client_commons_Key(Property.f_X_LABELS__org_pepstock_charba_client_data_Data_Property)) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_X_LABELS__org_pepstock_charba_client_data_Data_Property), ArrayMixedObject_$Overlay));
   return Labels.m_load__org_pepstock_charba_client_commons_ArrayMixedObject(array);
  }
  let result = Labels.m_build__();
  if (binding) {
   this.m_setXLabels__org_pepstock_charba_client_data_Labels(result);
  }
  return result;
 }
 
 m_setYLabels__arrayOf_java_lang_String(/** Array<?string> */ labels) {
  let internalLabels = Labels.m_build__();
  internalLabels.m_load__arrayOf_java_lang_String(labels);
  this.m_setYLabels__org_pepstock_charba_client_data_Labels(internalLabels);
 }
 
 m_setYLabels__org_pepstock_charba_client_data_Labels(/** Labels */ labels) {
  if (!$Equality.$same(labels, null) && !$Overlay.m_isEmpty__$devirt__org_pepstock_charba_client_commons_Array(labels.m_getArray___$pp_org_pepstock_charba_client_data())) {
   this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_Y_LABELS__org_pepstock_charba_client_data_Data_Property, labels.m_getArray___$pp_org_pepstock_charba_client_data());
  }
 }
 /** @return {Labels} */
 m_getYLabels__() {
  return this.m_getYLabels__boolean(false);
 }
 /** @return {Labels} */
 m_getYLabels__boolean(/** boolean */ binding) {
  if (this.m_has__org_pepstock_charba_client_commons_Key(Property.f_Y_LABELS__org_pepstock_charba_client_data_Data_Property)) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_Y_LABELS__org_pepstock_charba_client_data_Data_Property), ArrayMixedObject_$Overlay));
   return Labels.m_load__org_pepstock_charba_client_commons_ArrayMixedObject(array);
  }
  let result = Labels.m_build__();
  if (binding) {
   this.m_setYLabels__org_pepstock_charba_client_data_Labels(result);
  }
  return result;
 }
 
 m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/** Array<Dataset> */ datasets) {
  this.f_currentDatasets__org_pepstock_charba_client_data_Data_.clear();
  if (!$Equality.$same(datasets, null)) {
   this.f_currentDatasets__org_pepstock_charba_client_data_Data_.m_addAll__arrayOf_java_lang_Object(datasets);
   this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayObjectContainerList(Property.f_DATASETS__org_pepstock_charba_client_data_Data_Property, this.f_currentDatasets__org_pepstock_charba_client_data_Data_);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_DATASETS__org_pepstock_charba_client_data_Data_Property);
  }
 }
 /** @return {List<Dataset>} */
 m_getDatasets__() {
  return this.m_getDatasets__boolean(false);
 }
 /** @return {List<Dataset>} */
 m_getDatasets__boolean(/** boolean */ binding) {
  if (!this.m_has__org_pepstock_charba_client_commons_Key(Property.f_DATASETS__org_pepstock_charba_client_data_Data_Property) && binding) {
   this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayObjectContainerList(Property.f_DATASETS__org_pepstock_charba_client_data_Data_Property, this.f_currentDatasets__org_pepstock_charba_client_data_Data_);
  }
  return this.f_currentDatasets__org_pepstock_charba_client_data_Data_;
 }
 /** @return {boolean} */
 m_isCanvasObjectHandling__() {
  return this.f_canvasObjectHandling__org_pepstock_charba_client_data_Data_;
 }
 
 m_setCanvasObjectHandling__boolean(/** boolean */ canvasObjectHandling) {
  this.f_canvasObjectHandling__org_pepstock_charba_client_data_Data_ = canvasObjectHandling;
 }
 /** @return {List<ActiveDatasetElement>} */
 m_createActiveElementsByDatasetIndex__arrayOf_int(/** Array<number> */ datasetIndexes) {
  let result = /**@type {!ArrayList<ActiveDatasetElement>}*/ (ArrayList.$create__());
  if (!$Equality.$same(datasetIndexes, null) && datasetIndexes.length > 0) {
   let indexes = Arrays.m_stream__arrayOf_int(datasetIndexes).m_distinct__().m_toArray__();
   for (let i = 0; i < indexes.length; i = i + 1 | 0) {
    let index = indexes[i];
    if (index >= 0 && index < this.f_currentDatasets__org_pepstock_charba_client_data_Data_.size() && this.f_chart__org_pepstock_charba_client_data_Data_.m_isDatasetVisible__int(index)) {
     let dataset = /**@type {Dataset}*/ ($Casts.$to(this.f_currentDatasets__org_pepstock_charba_client_data_Data_.getAtIndex(index), Dataset));
     for (let k = 0; k < dataset.m_getDataCount__(); k = k + 1 | 0) {
      result.add(ActiveDatasetElement.$create__int__int(index, k));
     }
    }
   }
   return result;
  }
  return result;
 }
 /** @return {List<ActiveDatasetElement>} */
 m_createActiveElementsByDataIndex__arrayOf_int(/** Array<number> */ dataIndexes) {
  let result = /**@type {!ArrayList<ActiveDatasetElement>}*/ (ArrayList.$create__());
  if (!$Equality.$same(dataIndexes, null) && dataIndexes.length > 0) {
   let indexes = Arrays.m_stream__arrayOf_int(dataIndexes).m_distinct__().m_toArray__();
   let datasetIndex = 0;
   for (let $iterator = this.f_currentDatasets__org_pepstock_charba_client_data_Data_.m_iterator__(); $iterator.m_hasNext__(); ) {
    let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
    {
     if (this.f_chart__org_pepstock_charba_client_data_Data_.m_isDatasetVisible__int(datasetIndex)) {
      for (let i = 0; i < indexes.length; i = i + 1 | 0) {
       let index = indexes[i];
       if (index >= 0 && index < dataset.m_getDataCount__()) {
        result.add(ActiveDatasetElement.$create__int__int(datasetIndex, index));
       }
      }
     }
     datasetIndex = datasetIndex + 1 | 0;
    }
   }
   return result;
  }
  return result;
 }
 /** @return {Gradient} */
 m_retrieveFillStyleAsGradient__org_pepstock_charba_client_items_LegendItem(/** LegendItem */ legendItem) {
  let dataset = this.m_retrieveDataset__org_pepstock_charba_client_items_LegendItem(legendItem);
  if (!$Equality.$same(dataset, null)) {
   if (HasPointFillStrokeStyles.$isInstance(dataset)) {
    let fillStrokeStyles = /**@type {HasPointFillStrokeStyles}*/ ($Casts.$to(dataset, HasPointFillStrokeStyles));
    let fillStyleProperty = fillStrokeStyles.m_getPointFillStyleProperty__();
    if (Key.m_isValid__org_pepstock_charba_client_commons_Key(fillStyleProperty)) {
     let gradient = this.m_retrieveGradient__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_data_Data(dataset, legendItem, fillStyleProperty);
     if (!$Equality.$same(gradient, null)) {
      return gradient;
     }
    }
   }
   return this.m_retrieveGradient__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_data_Data(dataset, legendItem, CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  }
  return null;
 }
 /** @return {Gradient} */
 m_retrieveStrokeStyleAsGradient__org_pepstock_charba_client_items_LegendItem(/** LegendItem */ legendItem) {
  let dataset = this.m_retrieveDataset__org_pepstock_charba_client_items_LegendItem(legendItem);
  if (!$Equality.$same(dataset, null)) {
   if (HasPointFillStrokeStyles.$isInstance(dataset)) {
    let fillStrokeStyles = /**@type {HasPointFillStrokeStyles}*/ ($Casts.$to(dataset, HasPointFillStrokeStyles));
    let strokeStyleProperty = fillStrokeStyles.m_getPointFillStyleProperty__();
    if (Key.m_isValid__org_pepstock_charba_client_commons_Key(strokeStyleProperty)) {
     let gradient = this.m_retrieveGradient__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_data_Data(dataset, legendItem, strokeStyleProperty);
     if (!$Equality.$same(gradient, null)) {
      return gradient;
     }
    }
   }
   return this.m_retrieveGradient__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_data_Data(dataset, legendItem, CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  }
  return null;
 }
 /** @return {Pattern} */
 m_retrieveFillStyleAsPattern__org_pepstock_charba_client_items_LegendItem(/** LegendItem */ legendItem) {
  let dataset = this.m_retrieveDataset__org_pepstock_charba_client_items_LegendItem(legendItem);
  if (!$Equality.$same(dataset, null)) {
   if (HasPointFillStrokeStyles.$isInstance(dataset)) {
    let fillStrokeStyles = /**@type {HasPointFillStrokeStyles}*/ ($Casts.$to(dataset, HasPointFillStrokeStyles));
    let fillStyleProperty = fillStrokeStyles.m_getPointFillStyleProperty__();
    if (Key.m_isValid__org_pepstock_charba_client_commons_Key(fillStyleProperty)) {
     let pattern = this.m_retrievePattern__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_data_Data(dataset, legendItem, fillStyleProperty);
     if (!$Equality.$same(pattern, null)) {
      return pattern;
     }
    }
   }
   return this.m_retrievePattern__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_data_Data(dataset, legendItem, CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  }
  return null;
 }
 /** @return {Pattern} */
 m_retrieveStrokeStyleAsPattern__org_pepstock_charba_client_items_LegendItem(/** LegendItem */ legendItem) {
  let dataset = this.m_retrieveDataset__org_pepstock_charba_client_items_LegendItem(legendItem);
  if (!$Equality.$same(dataset, null)) {
   if (HasPointFillStrokeStyles.$isInstance(dataset)) {
    let fillStrokeStyles = /**@type {HasPointFillStrokeStyles}*/ ($Casts.$to(dataset, HasPointFillStrokeStyles));
    let strokeStyleProperty = fillStrokeStyles.m_getPointFillStyleProperty__();
    if (Key.m_isValid__org_pepstock_charba_client_commons_Key(strokeStyleProperty)) {
     let pattern = this.m_retrievePattern__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_data_Data(dataset, legendItem, strokeStyleProperty);
     if (!$Equality.$same(pattern, null)) {
      return pattern;
     }
    }
   }
   return this.m_retrievePattern__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_data_Data(dataset, legendItem, CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  }
  return null;
 }
 /** @return {Dataset} */
 m_retrieveDataset__org_pepstock_charba_client_items_LegendItem(/** LegendItem */ legendItem) {
  if (!$Equality.$same(legendItem, null)) {
   if (Undefined.m_isNot__int(legendItem.m_getDatasetIndex__()) && this.f_currentDatasets__org_pepstock_charba_client_data_Data_.size() > legendItem.m_getDatasetIndex__()) {
    return /**@type {Dataset}*/ ($Casts.$to(this.m_getDatasets__().getAtIndex(legendItem.m_getDatasetIndex__()), Dataset));
   } else if (Undefined.m_isNot__int(legendItem.m_getIndex__()) && !this.f_currentDatasets__org_pepstock_charba_client_data_Data_.isEmpty()) {
    return /**@type {Dataset}*/ ($Casts.$to(this.m_getDatasets__().getAtIndex(0), Dataset));
   }
  }
  return null;
 }
 /** @return {Dataset} */
 m_retrieveDataset__org_pepstock_charba_client_items_TooltipItem(/** TooltipItem */ tooltipItem) {
  if (!$Equality.$same(tooltipItem, null) && Undefined.m_isNot__int(tooltipItem.m_getDatasetIndex__()) && this.f_currentDatasets__org_pepstock_charba_client_data_Data_.size() > tooltipItem.m_getDatasetIndex__()) {
   return /**@type {Dataset}*/ ($Casts.$to(this.m_getDatasets__().getAtIndex(tooltipItem.m_getDatasetIndex__()), Dataset));
  }
  return null;
 }
 /** @return {Dataset} */
 m_retrieveDataset__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ context) {
  if (!$Equality.$same(context, null) && Undefined.m_isNot__int(context.m_getDatasetIndex__()) && this.f_currentDatasets__org_pepstock_charba_client_data_Data_.size() > context.m_getDatasetIndex__()) {
   return /**@type {Dataset}*/ ($Casts.$to(this.m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), Dataset));
  }
  return null;
 }
 /** @return {Gradient} */
 m_retrieveGradient__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_data_Data(/** Dataset */ dataset, /** LegendItem */ legendItem, /** Key */ property) {
  let gradient = dataset.m_getCallbackGradient__org_pepstock_charba_client_commons_Key__int__int_$pp_org_pepstock_charba_client_data(property, legendItem.m_getDatasetIndex__(), legendItem.m_getIndex__());
  return /**@type {Gradient}*/ ($Casts.$to(this.m_retrieveObject__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_data_AbstractContainer__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_colors_CanvasObject_$p_org_pepstock_charba_client_data_Data(dataset, dataset.m_getGradientsContainer___$pp_org_pepstock_charba_client_data(), legendItem, property, gradient), Gradient));
 }
 /** @return {Pattern} */
 m_retrievePattern__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_data_Data(/** Dataset */ dataset, /** LegendItem */ legendItem, /** Key */ property) {
  let pattern = dataset.m_getCallbackPattern__org_pepstock_charba_client_commons_Key__int__int_$pp_org_pepstock_charba_client_data(property, legendItem.m_getDatasetIndex__(), legendItem.m_getIndex__());
  return /**@type {Pattern}*/ ($Casts.$to(this.m_retrieveObject__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_data_AbstractContainer__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_colors_CanvasObject_$p_org_pepstock_charba_client_data_Data(dataset, dataset.m_getPatternsContainer___$pp_org_pepstock_charba_client_data(), legendItem, property, pattern), Pattern));
 }
 /** @template T @return {T} */
 m_retrieveObject__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_data_AbstractContainer__org_pepstock_charba_client_items_LegendItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_colors_CanvasObject_$p_org_pepstock_charba_client_data_Data(/** Dataset */ dataset, /** AbstractContainer<T> */ container, /** LegendItem */ legendItem, /** Key */ property, /** T */ searchedOnCallback) {
  if (!$Equality.$same(searchedOnCallback, null)) {
   return searchedOnCallback;
  }
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(property) && !$Equality.$same(legendItem, null) && !$Equality.$same(dataset, null) && !$Equality.$same(container, null) && container.m_hasObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(property)) {
   let objects = container.m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(property);
   if (Undefined.m_isNot__int(legendItem.m_getDatasetIndex__()) && !objects.isEmpty()) {
    return /**@type {T}*/ ($Casts.$to(objects.getAtIndex(0), CanvasObject));
   } else if (Undefined.m_isNot__int(legendItem.m_getIndex__()) && objects.size() > legendItem.m_getIndex__()) {
    return /**@type {T}*/ ($Casts.$to(objects.getAtIndex(legendItem.m_getIndex__()), CanvasObject));
   }
  }
  return null;
 }
 /** @return {?string} */
 m_getDatasetsAsString___$pp_org_pepstock_charba_client_data() {
  let sb = StringBuilder.$create__();
  for (let $iterator = this.f_currentDatasets__org_pepstock_charba_client_data_Data_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let ds = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    sb.m_append__java_lang_String(ds.m_toFilteredJSON___$pp_org_pepstock_charba_client_data()).m_append__java_lang_String(Constants.f_LINE_SEPARATOR__org_pepstock_charba_client_commons_Constants);
   }
  }
  return sb.toString();
 }
 /** @override */
 m_load__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_Configuration(/** IsChart */ chart, /** Configuration */ configuration) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart)) {
   ConfigurationLoader.m_loadData__org_pepstock_charba_client_Configuration__org_pepstock_charba_client_commons_NativeObjectContainer(configuration, this);
   if (this.m_isCanvasObjectHandling__()) {
    for (let $iterator = this.f_currentDatasets__org_pepstock_charba_client_data_Data_.m_iterator__(); $iterator.m_hasNext__(); ) {
     let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
     {
      if (this.m_activateCanvasObjectHandlerPlugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_data_Dataset_$p_org_pepstock_charba_client_data_Data(chart, dataset)) {
       return;
      }
     }
    }
   }
  }
 }
 /** @return {boolean} */
 m_activateCanvasObjectHandlerPlugin__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_data_Dataset_$p_org_pepstock_charba_client_data_Data(/** IsChart */ chart, /** Dataset */ dataset) {
  if (!dataset.m_getPatternsContainer___$pp_org_pepstock_charba_client_data().m_isEmpty___$pp_org_pepstock_charba_client_data() || !dataset.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_isEmpty___$pp_org_pepstock_charba_client_data()) {
   if (!chart.m_getPlugins__().m_has__java_lang_String(CanvasObjectHandler.f_ID__org_pepstock_charba_client_data_CanvasObjectHandler)) {
    chart.m_getPlugins__().m_add__org_pepstock_charba_client_Plugin(CanvasObjectHandler.m_get__());
    CanvasObjectHandler.m_get__().m_onConfigure__org_pepstock_charba_client_IsChart(chart);
   }
   return true;
  }
  return false;
 }
 //Default method forwarding stub.
 /** @override @return {Labels} */
 m_getLabels__() {
  return HasLabels.m_getLabels__$default__org_pepstock_charba_client_data_HasLabels(this);
 }
 //Default method forwarding stub.
 /** @override @return {Labels} */
 m_getLabels__boolean(/** boolean */ arg0) {
  return HasLabels.m_getLabels__$default__org_pepstock_charba_client_data_HasLabels__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setLabels__arrayOf_java_lang_String(/** Array<?string> */ arg0) {
  HasLabels.m_setLabels__$default__org_pepstock_charba_client_data_HasLabels__arrayOf_java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setLabels__java_util_List(/** List<?string> */ arg0) {
  HasLabels.m_setLabels__$default__org_pepstock_charba_client_data_HasLabels__java_util_List(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setLabels__org_pepstock_charba_client_data_Labels(/** Labels */ arg0) {
  HasLabels.m_setLabels__$default__org_pepstock_charba_client_data_HasLabels__org_pepstock_charba_client_data_Labels(this, arg0);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_data_Data() {
  this.f_currentDatasets__org_pepstock_charba_client_data_Data_ = /**@type {!ArrayObjectContainerList<Dataset>}*/ (ArrayObjectContainerList.$create__());
  this.f_canvasObjectHandling__org_pepstock_charba_client_data_Data_ = true;
 }
 
 static $clinit() {
  Data.$clinit = () =>{};
  Data.$loadModules();
  NativeObjectContainer.$clinit();
  HasLabels.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Data;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  CanvasObject = goog.module.get('org.pepstock.charba.client.colors.CanvasObject$impl');
  Gradient = goog.module.get('org.pepstock.charba.client.colors.Gradient$impl');
  Pattern = goog.module.get('org.pepstock.charba.client.colors.Pattern$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.Array.$Overlay$impl');
  ArrayMixedObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayMixedObject.$Overlay$impl');
  ArrayObjectContainerList = goog.module.get('org.pepstock.charba.client.commons.ArrayObjectContainerList$impl');
  ConfigurationLoader = goog.module.get('org.pepstock.charba.client.commons.ConfigurationLoader$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  CanvasObjectHandler = goog.module.get('org.pepstock.charba.client.data.CanvasObjectHandler$impl');
  Property = goog.module.get('org.pepstock.charba.client.data.Data.Property$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  CanvasObjectProperty = goog.module.get('org.pepstock.charba.client.data.Dataset.CanvasObjectProperty$impl');
  HasPointFillStrokeStyles = goog.module.get('org.pepstock.charba.client.data.HasPointFillStrokeStyles$impl');
  Labels = goog.module.get('org.pepstock.charba.client.data.Labels$impl');
  LabelsHandler = goog.module.get('org.pepstock.charba.client.data.LabelsHandler$impl');
  ActiveDatasetElement = goog.module.get('org.pepstock.charba.client.items.ActiveDatasetElement$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ConfigurationElement.$markImplementor(Data);
HasLabels.$markImplementor(Data);
$Util.$setClassMetadata(Data, "org.pepstock.charba.client.data.Data");

exports = Data;

//# sourceMappingURL=Data.js.map
