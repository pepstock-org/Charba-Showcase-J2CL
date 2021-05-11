goog.module('org.pepstock.charba.client.impl.plugins.ColorSchemeLegendLabelsCallback$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendLabelsCallback = goog.require('org.pepstock.charba.client.callbacks.LegendLabelsCallback$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let HovingFlexDataset = goog.forwardDeclare('org.pepstock.charba.client.data.HovingFlexDataset$impl');
let LiningDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LiningDataset$impl');
let ColorSchemesUtil = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemesUtil$impl');
let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {LegendLabelsCallback}
 */
class ColorSchemeLegendLabelsCallback extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ColorSchemeLegendLabelsCallback} */
 static $create__() {
  ColorSchemeLegendLabelsCallback.$clinit();
  let $instance = new ColorSchemeLegendLabelsCallback();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ColorSchemeLegendLabelsCallback__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ColorSchemeLegendLabelsCallback__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {LegendLabelsCallback} */
 m_getDelegatedCallback__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_impl_plugins(/** IsChart */ chart) {
  return /**@type {LegendLabelsCallback}*/ ($Casts.$to(ColorSchemeLegendLabelsCallback.f_CALLBACKS__org_pepstock_charba_client_impl_plugins_ColorSchemeLegendLabelsCallback_.get(chart.m_getId__()), LegendLabelsCallback));
 }
 
 m_setDelegatedCallback__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_callbacks_LegendLabelsCallback_$pp_org_pepstock_charba_client_impl_plugins(/** IsChart */ chart, /** LegendLabelsCallback */ delegatedCallback) {
  ColorSchemeLegendLabelsCallback.f_CALLBACKS__org_pepstock_charba_client_impl_plugins_ColorSchemeLegendLabelsCallback_.put(chart.m_getId__(), delegatedCallback);
 }
 
 m_removeDelegatedCallback__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_impl_plugins(/** IsChart */ chart) {
  ColorSchemeLegendLabelsCallback.f_CALLBACKS__org_pepstock_charba_client_impl_plugins_ColorSchemeLegendLabelsCallback_.remove(chart.m_getId__());
 }
 /** @override @return {List<LegendLabelItem>} */
 m_generateLegendLabels__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<LegendLabelItem> */ defaultLabels) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && !$Equality.$same(defaultLabels, null) && !defaultLabels.isEmpty()) {
   for (let $iterator = defaultLabels.m_iterator__(); $iterator.m_hasNext__(); ) {
    let item = /**@type {LegendLabelItem}*/ ($Casts.$to($iterator.m_next__(), LegendLabelItem));
    {
     let dataset = chart.m_getData__().m_retrieveDataset__org_pepstock_charba_client_items_LegendItem(item);
     if (HovingFlexDataset.$isInstance(dataset)) {
      let hovingDataset = /**@type {HovingFlexDataset}*/ ($Casts.$to(dataset, HovingFlexDataset));
      this.m_manageHovingFlexDataset__org_pepstock_charba_client_data_HovingFlexDataset__org_pepstock_charba_client_items_LegendLabelItem_$p_org_pepstock_charba_client_impl_plugins_ColorSchemeLegendLabelsCallback(hovingDataset, item);
     } else if (LiningDataset.$isInstance(dataset)) {
      let liningDataset = /**@type {LiningDataset}*/ ($Casts.$to(dataset, LiningDataset));
      this.m_manageLiningDataset__org_pepstock_charba_client_data_LiningDataset__org_pepstock_charba_client_items_LegendLabelItem_$p_org_pepstock_charba_client_impl_plugins_ColorSchemeLegendLabelsCallback(liningDataset, item);
     }
    }
   }
   let delegatedCallback = /**@type {LegendLabelsCallback}*/ ($Casts.$to(ColorSchemeLegendLabelsCallback.f_CALLBACKS__org_pepstock_charba_client_impl_plugins_ColorSchemeLegendLabelsCallback_.get(chart.m_getId__()), LegendLabelsCallback));
   if (!$Equality.$same(delegatedCallback, null)) {
    return delegatedCallback.m_generateLegendLabels__org_pepstock_charba_client_IsChart__java_util_List(chart, defaultLabels);
   }
  }
  return defaultLabels;
 }
 
 m_manageHovingFlexDataset__org_pepstock_charba_client_data_HovingFlexDataset__org_pepstock_charba_client_items_LegendLabelItem_$p_org_pepstock_charba_client_impl_plugins_ColorSchemeLegendLabelsCallback(/** HovingFlexDataset */ hovingFlexDataset, /** LegendLabelItem */ item) {
  let backgroundColors = hovingFlexDataset.m_getBackgroundColor__();
  let borderColors = hovingFlexDataset.m_getBackgroundColor__();
  let borderWidth = ColorSchemesUtil.m_get__().m_getMaxBorderWidth__org_pepstock_charba_client_data_HovingFlexDataset_$pp_org_pepstock_charba_client_impl_plugins(hovingFlexDataset);
  if (Undefined.m_isNot__int(item.m_getDatasetIndex__())) {
   item.m_setFillStyle__org_pepstock_charba_client_colors_IsColor(/**@type {IsColor}*/ ($Casts.$to(backgroundColors.getAtIndex(0), IsColor)));
   item.m_setStrokeStyle__org_pepstock_charba_client_colors_IsColor(/**@type {IsColor}*/ ($Casts.$to(borderColors.getAtIndex(0), IsColor)));
  } else if (Undefined.m_isNot__int(item.m_getIndex__())) {
   item.m_setFillStyle__org_pepstock_charba_client_colors_IsColor(/**@type {IsColor}*/ ($Casts.$to(backgroundColors.getAtIndex(item.m_getIndex__()), IsColor)));
   item.m_setStrokeStyle__org_pepstock_charba_client_colors_IsColor(/**@type {IsColor}*/ ($Casts.$to(borderColors.getAtIndex(item.m_getIndex__()), IsColor)));
  }
  item.m_setLineWidth__int(borderWidth);
 }
 
 m_manageLiningDataset__org_pepstock_charba_client_data_LiningDataset__org_pepstock_charba_client_items_LegendLabelItem_$p_org_pepstock_charba_client_impl_plugins_ColorSchemeLegendLabelsCallback(/** LiningDataset */ liningDataset, /** LegendLabelItem */ item) {
  item.m_setFillStyle__java_lang_String(liningDataset.m_getBackgroundColorAsString__());
  item.m_setStrokeStyle__java_lang_String(liningDataset.m_getBorderColorAsString__());
  item.m_setLineWidth__int(liningDataset.m_getBorderWidth__());
 }
 
 static $clinit() {
  ColorSchemeLegendLabelsCallback.$clinit = () =>{};
  ColorSchemeLegendLabelsCallback.$loadModules();
  j_l_Object.$clinit();
  ColorSchemeLegendLabelsCallback.f_CALLBACKS__org_pepstock_charba_client_impl_plugins_ColorSchemeLegendLabelsCallback_ = /**@type {!HashMap<?string, LegendLabelsCallback>}*/ (HashMap.$create__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColorSchemeLegendLabelsCallback;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  HovingFlexDataset = goog.module.get('org.pepstock.charba.client.data.HovingFlexDataset$impl');
  LiningDataset = goog.module.get('org.pepstock.charba.client.data.LiningDataset$impl');
  ColorSchemesUtil = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemesUtil$impl');
  LegendLabelItem = goog.module.get('org.pepstock.charba.client.items.LegendLabelItem$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Map<?string, LegendLabelsCallback>}*/
ColorSchemeLegendLabelsCallback.f_CALLBACKS__org_pepstock_charba_client_impl_plugins_ColorSchemeLegendLabelsCallback_;
LegendLabelsCallback.$markImplementor(ColorSchemeLegendLabelsCallback);
$Util.$setClassMetadata(ColorSchemeLegendLabelsCallback, "org.pepstock.charba.client.impl.plugins.ColorSchemeLegendLabelsCallback");

exports = ColorSchemeLegendLabelsCallback;

//# sourceMappingURL=ColorSchemeLegendLabelsCallback.js.map
