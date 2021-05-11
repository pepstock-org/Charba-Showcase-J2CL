goog.module('org.pepstock.charba.client.impl.plugins.HtmlLegendGenerator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let HtmlLegendItemCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.HtmlLegendItemCallback$impl');
let HtmlLegendTitleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.HtmlLegendTitleCallback$impl');
let TilesFactory = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let Legend = goog.forwardDeclare('org.pepstock.charba.client.configuration.Legend$impl');
let LegendTitle = goog.forwardDeclare('org.pepstock.charba.client.configuration.LegendTitle$impl');
let BaseStyleProperties_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
let DOMBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.DOMBuilder$impl');
let BorderStyle = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.BorderStyle$impl');
let Display = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.Display$impl');
let Repetition = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.Repetition$impl');
let TextBaseline = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.TextBaseline$impl');
let TextDecoration = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.TextDecoration$impl');
let Unit = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.Unit$impl');
let SafeHtml = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtmlBuilder$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let TextDirection = goog.forwardDeclare('org.pepstock.charba.client.enums.TextDirection$impl');
let HtmlLegend = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegend$impl');
let HtmlLegendId = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendId$impl');
let HtmlLegendItem = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendItem$impl');
let HtmlLegendOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');
let HtmlLegendTextGenerator = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendTextGenerator$impl');
let DatasetElement = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElement$impl');
let DatasetElementOptions = goog.forwardDeclare('org.pepstock.charba.client.items.DatasetElementOptions$impl');
let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');
let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class HtmlLegendGenerator extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HtmlLegendTextGenerator<LegendLabelItem, HtmlLegendItemCallback>}*/
  this.f_legendItemTextGenerator__org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator_;
  /**@type {HtmlLegendTextGenerator<LegendTitle, HtmlLegendTitleCallback>}*/
  this.f_legendTitleTextGenerator__org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator_;
 }
 /** @return {!HtmlLegendGenerator} */
 static $create__() {
  HtmlLegendGenerator.$clinit();
  let $instance = new HtmlLegendGenerator();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator();
 }
 /** @return {SafeHtml} */
 m_generateLegend__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_impl_plugins(/** IsChart */ chart) {
  IsChart.m_checkIfValid__org_pepstock_charba_client_IsChart(chart);
  let container = DOMBuilder.m_get__().m_createSpanElement__();
  container.appendChild(this.m_buildLegend__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(chart));
  return SafeHtmlBuilder.m_create__().m_appendHtmlConstant__java_lang_String(container.innerHTML).m_toSafeHtml__();
 }
 /** @return {HTMLTableElement} */
 m_buildLegend__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(/** IsChart */ chart) {
  let options = /**@type {HtmlLegendOptions}*/ ($Casts.$to(HtmlLegend.m_get__().m_getPluginOptions___$pp_org_pepstock_charba_client_impl_plugins().get(chart.m_getId__()), HtmlLegendOptions));
  let maxColumns = Math.max(1, options.m_getMaximumLegendColumns__());
  let legend = chart.m_getOptions__().m_getLegend__();
  let legendLabels = legend.m_getLabels__();
  let mainTable = DOMBuilder.m_get__().m_createTableElement__();
  mainTable.cellPadding = j_l_String.m_valueOf__int(0);
  mainTable.cellSpacing = j_l_String.m_valueOf__int(0);
  mainTable.style.borderSpacing = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(0);
  mainTable.align = legend.m_getAlign__().m_getHorizontalAlignmentValue__();
  let titleTable = this.m_buildTitleCell__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_Legend__org_pepstock_charba_client_callbacks_HtmlLegendTitleCallback_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(chart, legend, options.m_getLegendTitleCallback__());
  if (!$Equality.$same(titleTable, null)) {
   let titleRow = DOMBuilder.m_get__().m_createTableRowElement__();
   mainTable.appendChild(titleRow);
   let titleCell = DOMBuilder.m_get__().m_createTableCellElement__();
   titleRow.appendChild(titleCell);
   titleCell.appendChild(titleTable);
  }
  let table = DOMBuilder.m_get__().m_createTableElement__();
  table.cellPadding = j_l_String.m_valueOf__int(0);
  table.cellSpacing = j_l_String.m_valueOf__int(0);
  table.style.borderSpacing = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(0);
  table.align = legend.m_getAlign__().m_getHorizontalAlignmentValue__();
  let legendItems = this.m_extractLegendItems__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(chart);
  if (!legendItems.isEmpty()) {
   if (legend.m_isReverse__()) {
    Collections.m_sort__java_util_List__java_util_Comparator(legendItems, HtmlLegendGenerator.f_REVERSE_COMPARATOR__org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator_);
   } else if ($Equality.$same(legendLabels.m_getItemSortCallback__(), null)) {
    Collections.m_sort__java_util_List__java_util_Comparator(legendItems, HtmlLegendGenerator.f_COMPARATOR__org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator_);
   }
   let index = 0;
   let current = null;
   let htmlLegendItem = HtmlLegendItem.$create__org_pepstock_charba_client_IsChart(chart);
   for (let $iterator = legendItems.m_iterator__(); $iterator.m_hasNext__(); ) {
    let item = /**@type {LegendLabelItem}*/ ($Casts.$to($iterator.m_next__(), LegendLabelItem));
    {
     if ($Primitives.$coerceDivision(index % maxColumns) == 0) {
      let newRow = DOMBuilder.m_get__().m_createTableRowElement__();
      table.appendChild(newRow);
      current = newRow;
     }
     let legendId = HtmlLegendId.m_get__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem(chart, item);
     htmlLegendItem.m_setLegendItem__org_pepstock_charba_client_items_LegendLabelItem_$pp_org_pepstock_charba_client_impl_plugins(item);
     current.appendChild(this.m_buildColorCell__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_HtmlLegendId__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(chart, legendId, htmlLegendItem));
     current.appendChild(this.m_buildLabelCell__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_HtmlLegendId__org_pepstock_charba_client_items_LegendLabelItem__org_pepstock_charba_client_callbacks_HtmlLegendItemCallback_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(chart, legendId, item, options.m_getLegendItemCallback__()));
     index = index + 1 | 0;
    }
   }
  }
  if (!$Equality.$same(titleTable, null)) {
   let legendItemsRow = DOMBuilder.m_get__().m_createTableRowElement__();
   mainTable.appendChild(legendItemsRow);
   let legendItemsCell = DOMBuilder.m_get__().m_createTableCellElement__();
   legendItemsRow.appendChild(legendItemsCell);
   legendItemsCell.appendChild(table);
   return mainTable;
  }
  return table;
 }
 /** @return {HTMLTableElement} */
 m_buildTitleCell__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_Legend__org_pepstock_charba_client_callbacks_HtmlLegendTitleCallback_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(/** IsChart */ chart, /** Legend */ legend, /** HtmlLegendTitleCallback */ callback) {
  if (legend.m_getTitle__().m_isDisplay__()) {
   let tableTitle = DOMBuilder.m_get__().m_createTableElement__();
   let title = legend.m_getTitle__();
   let titleRow = DOMBuilder.m_get__().m_createTableRowElement__();
   tableTitle.appendChild(titleRow);
   let titleCell = DOMBuilder.m_get__().m_createTableCellElement__();
   titleRow.appendChild(titleCell);
   titleCell.align = TextAlign.f_CENTER__org_pepstock_charba_client_enums_TextAlign.m_value__();
   titleCell.VAlign = TextBaseline.f_MIDDLE__org_pepstock_charba_client_dom_enums_TextBaseline.m_value__();
   titleCell.style.paddingTop = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(title.m_getPadding__().m_getTop__());
   titleCell.style.paddingBottom = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(title.m_getPadding__().m_getBottom__());
   let titleText = this.f_legendTitleTextGenerator__org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator_.m_createTextElement__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_HasLegendText__org_pepstock_charba_client_callbacks_HtmlLegendCallback_$pp_org_pepstock_charba_client_impl_plugins(chart, title, callback);
   titleCell.appendChild(titleText);
   titleText.style.font = Utilities.m_toCSSFontProperty__org_pepstock_charba_client_defaults_IsDefaultFont(title.m_getFont__());
   titleText.style.color = title.m_getColor__().m_toRGBA__();
   if (legend.m_isRtl__() || $Objects.m_equals__java_lang_Object__java_lang_Object(TextDirection.f_RIGHT_TO_LEFT__org_pepstock_charba_client_enums_TextDirection, legend.m_getTextDirection__())) {
    titleText.style.direction = TextDirection.f_RIGHT_TO_LEFT__org_pepstock_charba_client_enums_TextDirection.m_value__();
   } else {
    titleText.style.direction = TextDirection.f_LEFT_TO_RIGHT__org_pepstock_charba_client_enums_TextDirection.m_value__();
   }
   return tableTitle;
  }
  return null;
 }
 /** @return {List<LegendLabelItem>} */
 m_extractLegendItems__org_pepstock_charba_client_IsChart_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(/** IsChart */ chart) {
  let internalChart = IsChart.m_checkAndGetIfConsistent__org_pepstock_charba_client_IsChart(chart);
  let result = /**@type {!LinkedList<LegendLabelItem>}*/ (LinkedList.$create__());
  let legend = chart.m_getOptions__().m_getLegend__();
  let legendLabels = legend.m_getLabels__();
  let /** List<LegendLabelItem> */ legendItems;
  let defaultLegendItems = Defaults.m_get__().m_generateLabels__org_pepstock_charba_client_IsChart(chart);
  if (!$Equality.$same(legendLabels.m_getLabelsCallback__(), null)) {
   legendItems = legendLabels.m_getLabelsCallback__().m_generateLegendLabels__org_pepstock_charba_client_IsChart__java_util_List(chart, defaultLegendItems);
  } else {
   legendItems = defaultLegendItems;
  }
  HtmlLegend.m_get__().m_getPluginLegendLabelsItems___$pp_org_pepstock_charba_client_impl_plugins().put(chart.m_getId__(), legendItems);
  if (!$Equality.$same(legendLabels.m_getFilterCallback__(), null)) {
   for (let $iterator = legendItems.m_iterator__(); $iterator.m_hasNext__(); ) {
    let item = /**@type {LegendLabelItem}*/ ($Casts.$to($iterator.m_next__(), LegendLabelItem));
    {
     if (legendLabels.m_getFilterCallback__().m_onFilter__org_pepstock_charba_client_IsChart__java_lang_Object(chart, item)) {
      result.add(item);
     }
    }
   }
  } else {
   result.addAll(legendItems);
  }
  if (!$Equality.$same(legendLabels.m_getItemSortCallback__(), null)) {
   let sortComparator = Comparator.$adapt((o1, o2) =>{
    let o1_1 = /**@type {LegendItem}*/ ($Casts.$to(o1, LegendItem));
    let o2_1 = /**@type {LegendItem}*/ ($Casts.$to(o2, LegendItem));
    return legendLabels.m_getItemSortCallback__().m_onItemSort__org_pepstock_charba_client_IsChart__java_lang_Object__java_lang_Object(internalChart, o1_1, o2_1);
   });
   Collections.m_sort__java_util_List__java_util_Comparator(result, sortComparator);
  }
  return result;
 }
 /** @return {HTMLTableCellElement} */
 m_buildColorCell__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_HtmlLegendId__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(/** IsChart */ chart, /** HtmlLegendId */ legendId, /** HtmlLegendItem */ htmlLegendItem) {
  let item = htmlLegendItem.m_getLegendItem__();
  let colorCell = DOMBuilder.m_get__().m_createTableCellElement__();
  let legend = chart.m_getOptions__().m_getLegend__();
  let legendLabels = legend.m_getLabels__();
  colorCell.id = legendId.m_getIdForColor___$pp_org_pepstock_charba_client_impl_plugins();
  colorCell.VAlign = TextBaseline.f_TOP__org_pepstock_charba_client_dom_enums_TextBaseline.m_value__();
  colorCell.style.marginRight = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int($Primitives.$narrowDoubleToInt(legendLabels.m_getPadding__() / 2));
  colorCell.style.marginBottom = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(legendLabels.m_getPadding__());
  BaseStyleProperties_$Overlay.m_setDisplay__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_Display(colorCell.style, Display.f_BLOCK__org_pepstock_charba_client_dom_enums_Display);
  colorCell.style.borderSpacing = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(0);
  let color = DOMBuilder.m_get__().m_createDivElement__();
  colorCell.appendChild(color);
  let borderWidthToRemove = Math.max(0, item.m_getLineWidth__());
  let width = legendLabels.m_getBoxWidth__() - borderWidthToRemove | 0;
  let height = legendLabels.m_getBoxHeight__() - borderWidthToRemove | 0;
  BaseStyleProperties_$Overlay.m_setDisplay__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_Display(color.style, Display.f_BLOCK__org_pepstock_charba_client_dom_enums_Display);
  color.style.width = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(width);
  color.style.height = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(height);
  if (!legendLabels.m_isUsePointStyle__()) {
   colorCell.style.borderRadius = Utilities.m_toCSSBorderRadiusProperty__org_pepstock_charba_client_items_BorderRadiusItem(item.m_getBorderRadius__());
   this.m_applyBackgroundColor__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendLabelItem__org_pepstock_charba_client_dom_elements_Div__int__int_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(chart, item, color, width, height);
   let applyBorderColor = this.m_applyBorderWidth__org_pepstock_charba_client_items_LegendLabelItem__org_pepstock_charba_client_dom_elements_TableCell_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(item, colorCell);
   if (applyBorderColor) {
    this.m_applyBorderColor__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendLabelItem__org_pepstock_charba_client_dom_elements_TableCell__int__int_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(chart, item, colorCell, width, height);
   }
  } else {
   this.m_applyPointStyle__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_HtmlLegendItem__org_pepstock_charba_client_dom_elements_Div__int__int_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(chart, htmlLegendItem, color, width, height);
  }
  return colorCell;
 }
 /** @return {HTMLTableCellElement} */
 m_buildLabelCell__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_HtmlLegendId__org_pepstock_charba_client_items_LegendLabelItem__org_pepstock_charba_client_callbacks_HtmlLegendItemCallback_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(/** IsChart */ chart, /** HtmlLegendId */ legendId, /** LegendLabelItem */ item, /** HtmlLegendItemCallback */ callback) {
  let labelCell = DOMBuilder.m_get__().m_createTableCellElement__();
  let legend = chart.m_getOptions__().m_getLegend__();
  let legendLabels = legend.m_getLabels__();
  labelCell.id = legendId.m_getIdForLabel___$pp_org_pepstock_charba_client_impl_plugins();
  labelCell.VAlign = TextBaseline.f_MIDDLE__org_pepstock_charba_client_dom_enums_TextBaseline.m_value__();
  labelCell.style.paddingRight = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(legendLabels.m_getPadding__());
  labelCell.style.paddingBottom = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(legendLabels.m_getPadding__());
  let label = this.f_legendItemTextGenerator__org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator_.m_createTextElement__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_HasLegendText__org_pepstock_charba_client_callbacks_HtmlLegendCallback_$pp_org_pepstock_charba_client_impl_plugins(chart, item, callback);
  labelCell.appendChild(label);
  label.style.font = Utilities.m_toCSSFontProperty__org_pepstock_charba_client_defaults_IsDefaultFont(legendLabels.m_getFont__());
  label.style.textAlign = legendLabels.m_getTextAlign__().m_value__();
  let fontColor = item.m_getFontColor__();
  label.style.color = !$Equality.$same(fontColor, null) ? fontColor.m_toRGBA__() : legendLabels.m_getColor__().m_toRGBA__();
  if (legend.m_isRtl__() || $Objects.m_equals__java_lang_Object__java_lang_Object(TextDirection.f_RIGHT_TO_LEFT__org_pepstock_charba_client_enums_TextDirection, legend.m_getTextDirection__())) {
   label.style.direction = TextDirection.f_RIGHT_TO_LEFT__org_pepstock_charba_client_enums_TextDirection.m_value__();
  } else {
   label.style.direction = TextDirection.f_LEFT_TO_RIGHT__org_pepstock_charba_client_enums_TextDirection.m_value__();
  }
  if (item.m_isHidden__org_pepstock_charba_client_IsChart(chart)) {
   BaseStyleProperties_$Overlay.m_setTextDecoration__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_TextDecoration(label.style, TextDecoration.f_LINE_THROUGH__org_pepstock_charba_client_dom_enums_TextDecoration);
  }
  return labelCell;
 }
 
 m_applyPointStyle__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_impl_plugins_HtmlLegendItem__org_pepstock_charba_client_dom_elements_Div__int__int_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(/** IsChart */ chart, /** HtmlLegendItem */ htmlLegendItem, /** HTMLDivElement */ color, /** number */ width, /** number */ height) {
  let item = htmlLegendItem.m_getLegendItem__();
  if (item.m_isPointStyleAsImage__()) {
   let image = item.m_getPointStyleAsImage__();
   let imageAsCss = Utilities.m_toCSSBackgroundProperty__org_pepstock_charba_client_dom_elements_Img(image);
   color.style.background = imageAsCss;
   color.style.width = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(image.width);
   color.style.height = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(image.height);
  } else {
   let size = Math.min(width, height);
   let radius = (size - 2 | 0) / 2;
   let datasetViewItem = this.m_lookForDatasetMetaItem__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(chart, item);
   if (!$Equality.$same(datasetViewItem, null)) {
    radius = Math.max(datasetViewItem.m_getRadius__(), radius);
   }
   if (Checker.m_isNegative__double(radius) || Undefined.m_is__double(radius)) {
    radius = HtmlLegendGenerator.f_DEFAULT_RADIUS__org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator_;
   }
   size = $Primitives.$narrowDoubleToInt(radius * 2) + 2 | 0;
   htmlLegendItem.m_setSize__int_$pp_org_pepstock_charba_client_impl_plugins(size);
   htmlLegendItem.m_setRadius__double_$pp_org_pepstock_charba_client_impl_plugins(radius);
   let pattern = TilesFactory.m_createHtmlLegendItem__org_pepstock_charba_client_impl_plugins_HtmlLegendItem(htmlLegendItem);
   if (!$Equality.$same(pattern, null) && j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(pattern)) > 0) {
    let patternAsCss = Utilities.m_toCSSBackgroundProperty__java_lang_String__org_pepstock_charba_client_dom_enums_Repetition(pattern, Repetition.f_NO_REPEAT__org_pepstock_charba_client_dom_enums_Repetition);
    color.style.background = patternAsCss;
    color.style.width = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(size);
    color.style.height = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(size);
   } else {
    this.m_applyBackgroundColor__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendLabelItem__org_pepstock_charba_client_dom_elements_Div__int__int_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(chart, item, color, width, height);
   }
  }
 }
 /** @return {DatasetElementOptions} */
 m_lookForDatasetMetaItem__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendItem_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(/** IsChart */ chart, /** LegendItem */ item) {
  let datasetItem = null;
  let itemIndex = 0;
  if (Undefined.m_isNot__int(item.m_getDatasetIndex__())) {
   datasetItem = chart.m_getDatasetItem__int(item.m_getDatasetIndex__());
  } else if (Undefined.m_isNot__int(item.m_getIndex__())) {
   datasetItem = chart.m_getDatasetItem__int(0);
   itemIndex = item.m_getIndex__();
  }
  if (!$Equality.$same(datasetItem, null) && datasetItem.m_getElements__().size() > itemIndex) {
   let datasetElement = /**@type {DatasetElement}*/ ($Casts.$to(datasetItem.m_getElements__().getAtIndex(itemIndex), DatasetElement));
   if (!$Equality.$same(datasetElement, null)) {
    return datasetElement.m_getOptions__();
   }
  }
  return null;
 }
 
 m_applyBackgroundColor__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendLabelItem__org_pepstock_charba_client_dom_elements_Div__int__int_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(/** IsChart */ chart, /** LegendLabelItem */ item, /** HTMLDivElement */ color, /** number */ width, /** number */ height) {
  if (item.m_isFillStyleAsColor__()) {
   color.style.backgroundColor = item.m_getFillStyle__().m_toRGBA__();
  } else if (item.m_isFillStyleAsPattern__()) {
   let pattern = item.m_getFillStyleAsPattern__();
   if ($Equality.$same(pattern, null)) {
    pattern = chart.m_getData__().m_retrieveFillStyleAsPattern__org_pepstock_charba_client_items_LegendItem(item);
   }
   if (!$Equality.$same(pattern, null)) {
    let patternAsCss = Utilities.m_toCSSBackgroundProperty__org_pepstock_charba_client_colors_Pattern__int__int(pattern, width, height);
    color.style.background = patternAsCss;
   } else {
    color.style.backgroundColor = Defaults.m_get__().m_getGlobal__().m_getBackgroundColorAsString__();
   }
  } else if (item.m_isFillStyleAsGradient__()) {
   let gradient = item.m_getFillStyleAsGradient__();
   if ($Equality.$same(gradient, null)) {
    gradient = chart.m_getData__().m_retrieveFillStyleAsGradient__org_pepstock_charba_client_items_LegendItem(item);
   }
   if (!$Equality.$same(gradient, null)) {
    let gradientAsCss = Utilities.m_toCSSBackgroundProperty__org_pepstock_charba_client_colors_Gradient(gradient);
    color.style.backgroundImage = gradientAsCss;
    let size = j_l_String.m_valueOf__java_lang_Object(Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(width)) + j_l_String.m_valueOf__java_lang_Object(Constants.f_BLANK__org_pepstock_charba_client_commons_Constants) + j_l_String.m_valueOf__java_lang_Object(Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(height));
    color.style.backgroundSize = size;
   } else {
    color.style.backgroundColor = Defaults.m_get__().m_getGlobal__().m_getBackgroundColorAsString__();
   }
  }
 }
 /** @return {boolean} */
 m_applyBorderWidth__org_pepstock_charba_client_items_LegendLabelItem__org_pepstock_charba_client_dom_elements_TableCell_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(/** LegendLabelItem */ item, /** HTMLTableCellElement */ color) {
  let borderWidth = Math.max(0, item.m_getLineWidth__());
  color.style.borderWidth = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(borderWidth);
  if (borderWidth > 0) {
   if (item.m_getLineDash__().isEmpty()) {
    BaseStyleProperties_$Overlay.m_setBorderStyle__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_BorderStyle(color.style, BorderStyle.f_SOLID__org_pepstock_charba_client_dom_enums_BorderStyle);
   } else {
    BaseStyleProperties_$Overlay.m_setBorderStyle__$devirt__org_pepstock_charba_client_dom_BaseStyleProperties__org_pepstock_charba_client_dom_enums_BorderStyle(color.style, BorderStyle.f_DASHED__org_pepstock_charba_client_dom_enums_BorderStyle);
   }
   return true;
  }
  return false;
 }
 
 m_applyBorderColor__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_LegendLabelItem__org_pepstock_charba_client_dom_elements_TableCell__int__int_$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator(/** IsChart */ chart, /** LegendLabelItem */ item, /** HTMLTableCellElement */ color, /** number */ width, /** number */ height) {
  if (item.m_isStrokeStyleAsColor__()) {
   color.style.borderColor = item.m_getStrokeStyle__().m_toRGBA__();
  } else if (item.m_isStrokeStyleAsPattern__()) {
   let pattern = item.m_getStrokeStyleAsPattern__();
   if ($Equality.$same(pattern, null)) {
    pattern = chart.m_getData__().m_retrieveStrokeStyleAsPattern__org_pepstock_charba_client_items_LegendItem(item);
   }
   if (!$Equality.$same(pattern, null)) {
    let patternAsCss = j_l_String.m_valueOf__java_lang_Object(Utilities.m_toCSSBackgroundProperty__org_pepstock_charba_client_colors_Pattern__int__int(pattern, width, height)) + " 1";
    color.style.borderImage = patternAsCss;
   } else {
    color.style.borderWidth = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(0);
   }
  } else if (item.m_isStrokeStyleAsGradient__()) {
   let gradient = item.m_getStrokeStyleAsGradient__();
   if ($Equality.$same(gradient, null)) {
    gradient = chart.m_getData__().m_retrieveStrokeStyleAsGradient__org_pepstock_charba_client_items_LegendItem(item);
   }
   if (!$Equality.$same(gradient, null)) {
    let gradientAsCss = j_l_String.m_valueOf__java_lang_Object(Utilities.m_toCSSBackgroundProperty__org_pepstock_charba_client_colors_Gradient(gradient)) + " 1";
    color.style.borderImage = gradientAsCss;
   } else {
    color.style.borderWidth = Unit.f_PX__org_pepstock_charba_client_dom_enums_Unit.m_format__int(0);
   }
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator() {
  this.f_legendItemTextGenerator__org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator_ = /**@type {!HtmlLegendTextGenerator<LegendLabelItem, HtmlLegendItemCallback>}*/ (HtmlLegendTextGenerator.$create__());
  this.f_legendTitleTextGenerator__org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator_ = /**@type {!HtmlLegendTextGenerator<LegendTitle, HtmlLegendTitleCallback>}*/ (HtmlLegendTextGenerator.$create__());
 }
 
 static $clinit() {
  HtmlLegendGenerator.$clinit = () =>{};
  HtmlLegendGenerator.$loadModules();
  j_l_Object.$clinit();
  HtmlLegendGenerator.f_COMPARATOR__org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator_ = Comparator.$adapt((o1, o2) =>{
   let o1_1 = /**@type {LegendLabelItem}*/ ($Casts.$to(o1, LegendLabelItem));
   let o2_1 = /**@type {LegendLabelItem}*/ ($Casts.$to(o2, LegendLabelItem));
   return Double.m_compare__double__double(o1_1.m_getDatasetIndex__(), o2_1.m_getDatasetIndex__()) + Double.m_compare__double__double(o1_1.m_getIndex__(), o2_1.m_getIndex__()) | 0;
  });
  HtmlLegendGenerator.f_REVERSE_COMPARATOR__org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator_ = Comparator.$adapt((o1_2, o2_2) =>{
   let o1_3 = /**@type {LegendLabelItem}*/ ($Casts.$to(o1_2, LegendLabelItem));
   let o2_3 = /**@type {LegendLabelItem}*/ ($Casts.$to(o2_2, LegendLabelItem));
   return Double.m_compare__double__double(o2_3.m_getDatasetIndex__(), o1_3.m_getDatasetIndex__()) + Double.m_compare__double__double(o2_3.m_getIndex__(), o1_3.m_getIndex__()) | 0;
  });
  HtmlLegendGenerator.f_DEFAULT_RADIUS__org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator_ = Defaults.m_get__().m_getGlobal__().m_getElements__().m_getPoint__().m_getRadius__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlLegendGenerator;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Comparator = goog.module.get('java.util.Comparator$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  TilesFactory = goog.module.get('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  BaseStyleProperties_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseStyleProperties.$Overlay$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
  BorderStyle = goog.module.get('org.pepstock.charba.client.dom.enums.BorderStyle$impl');
  Display = goog.module.get('org.pepstock.charba.client.dom.enums.Display$impl');
  Repetition = goog.module.get('org.pepstock.charba.client.dom.enums.Repetition$impl');
  TextBaseline = goog.module.get('org.pepstock.charba.client.dom.enums.TextBaseline$impl');
  TextDecoration = goog.module.get('org.pepstock.charba.client.dom.enums.TextDecoration$impl');
  Unit = goog.module.get('org.pepstock.charba.client.dom.enums.Unit$impl');
  SafeHtmlBuilder = goog.module.get('org.pepstock.charba.client.dom.safehtml.SafeHtmlBuilder$impl');
  TextAlign = goog.module.get('org.pepstock.charba.client.enums.TextAlign$impl');
  TextDirection = goog.module.get('org.pepstock.charba.client.enums.TextDirection$impl');
  HtmlLegend = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegend$impl');
  HtmlLegendId = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendId$impl');
  HtmlLegendItem = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendItem$impl');
  HtmlLegendOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendOptions$impl');
  HtmlLegendTextGenerator = goog.module.get('org.pepstock.charba.client.impl.plugins.HtmlLegendTextGenerator$impl');
  DatasetElement = goog.module.get('org.pepstock.charba.client.items.DatasetElement$impl');
  LegendItem = goog.module.get('org.pepstock.charba.client.items.LegendItem$impl');
  LegendLabelItem = goog.module.get('org.pepstock.charba.client.items.LegendLabelItem$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@type {Comparator<LegendLabelItem>}*/
HtmlLegendGenerator.f_COMPARATOR__org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator_;
/**@type {Comparator<LegendLabelItem>}*/
HtmlLegendGenerator.f_REVERSE_COMPARATOR__org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator_;
/**@type {number}*/
HtmlLegendGenerator.f_DEFAULT_RADIUS__org_pepstock_charba_client_impl_plugins_HtmlLegendGenerator_ = 0;
$Util.$setClassMetadata(HtmlLegendGenerator, "org.pepstock.charba.client.impl.plugins.HtmlLegendGenerator");

exports = HtmlLegendGenerator;

//# sourceMappingURL=HtmlLegendGenerator.js.map
