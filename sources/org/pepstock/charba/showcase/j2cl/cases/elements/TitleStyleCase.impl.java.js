goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.TitleStyleCase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let MarginRightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let HTMLOptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionElement.$Overlay$impl');
let HTMLSelectElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLSelectElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let UpdateConfigurationBuilder = goog.forwardDeclare('org.pepstock.charba.client.UpdateConfigurationBuilder$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianCategoryAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.TitleStyleCase.$1$impl');
let $2 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.TitleStyleCase.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class TitleStyleCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_;
  /**@type {HTMLSelectElement}*/
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_;
  /**@type {HTMLSelectElement}*/
  this.f_fontSize__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_;
 }
 /** @return {!TitleStyleCase} */
 static $create__() {
  TitleStyleCase.$clinit();
  let $instance = new TitleStyleCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  let colorDefault = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  colorDefault.text = "Default";
  colorDefault.value = Defaults.m_get__().m_getGlobal__().m_getTitle__().m_getColorAsString__();
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.add(colorDefault);
  for (let $array = TitleStyleCase.f_COLORS__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_, $index = 0; $index < $array.length; $index++) {
   let myColor = $array[$index];
   {
    let colorN = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
    colorN.text = myColor.name();
    colorN.value = myColor.m_toRGB__();
    this.f_color__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.add(colorN);
   }
  }
  let fontSizeDefault = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  fontSizeDefault.text = "Default";
  fontSizeDefault.value = j_l_String.m_valueOf__int(Defaults.m_get__().m_getGlobal__().m_getTitle__().m_getFont__().m_getSize__());
  this.f_fontSize__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.add(fontSizeDefault);
  for (let $array_1 = TitleStyleCase.f_FONT_SIZES__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_, $index_1 = 0; $index_1 < $array_1.length; $index_1++) {
   let myFontSize = $array_1[$index_1];
   {
    let fontSizeN = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
    fontSizeN.text = j_l_String.m_valueOf__int(myFontSize);
    fontSizeN.value = j_l_String.m_valueOf__int(myFontSize);
    this.f_fontSize__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.add(fontSizeN);
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Changing title style on line chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_getOptions__().m_getTitle__().m_setFont__org_pepstock_charba_client_callbacks_FontCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase(this));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_getOptions__().m_getSubtitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_getOptions__().m_getSubtitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["This is the subtitle"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_getOptions__().m_getSubtitle__().m_getFont__().m_setStyle__org_pepstock_charba_client_enums_FontStyle(FontStyle.f_NORMAL__org_pepstock_charba_client_enums_FontStyle);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_getOptions__().m_getSubtitle__().m_setFont__org_pepstock_charba_client_callbacks_FontCallback($2.$create__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase(this));
  let datasets = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_getData__().m_getDatasets__boolean(true);
  let dataset1 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_newDataset__(), LineDataset));
  dataset1.m_setLabel__java_lang_String("dataset 1");
  let color1 = GoogleChartColor.m_values__()[0];
  dataset1.m_setBackgroundColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setBorderColor__java_lang_String(color1.m_toHex__());
  dataset1.m_setFill__boolean(false);
  let values = this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite);
  let data = dataset1.m_getData__boolean(true);
  for (let i = 0; i < values.length; i = i + 1 | 0) {
   data.add(values[i]);
  }
  datasets.add(dataset1);
  let dataset2 = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_newDataset__(), LineDataset));
  dataset2.m_setLabel__java_lang_String("dataset 2");
  let color2 = GoogleChartColor.m_values__()[1];
  dataset2.m_setBackgroundColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setBorderColor__java_lang_String(color2.m_toHex__());
  dataset2.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  dataset2.m_setFill__boolean(false);
  datasets.add(dataset2);
  let axis1 = CartesianCategoryAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_);
  axis1.m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Month"], j_l_String)));
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_);
  axis2.m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Value"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.appendChild(actionsRow);
  let actionsCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  actionsCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  actionsCol.style.textAlign = "center";
  actionsCol.vAlign = "middle";
  actionsRow.appendChild(actionsCol);
  let colorId = "color" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForColor = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForColor.htmlFor = colorId;
  labelForColor.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Color "));
  actionsCol.appendChild(labelForColor);
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.id = colorId;
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.onchange = (/** Event */ p0) =>{
   this.m_handleColor__();
   return null;
  };
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.className = "gwt-ListBox";
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_color__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_);
  let fontSizeId = "fontSize" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForFontSize = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForFontSize.htmlFor = fontSizeId;
  labelForFontSize.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Font size "));
  actionsCol.appendChild(labelForFontSize);
  this.f_fontSize__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.id = fontSizeId;
  this.f_fontSize__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.onchange = (/** Event */ p0_1) =>{
   this.m_handleFontSize__();
   return null;
  };
  this.f_fontSize__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.className = "gwt-ListBox";
  this.f_fontSize__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_fontSize__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_);
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_2) =>{
   goog.global.window.open(this.m_getUrl__(), "_blank", "");
   return null;
  };
  github.className = "gwt-Button";
  let img = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), HTMLImageElement_$Overlay));
  img.src = "images/GitHub-Mark-32px.png";
  github.appendChild(img);
  actionsCol.appendChild(github);
 }
 /** @override @return {HTMLElement} */
 m_getElement__() {
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_;
 }
 
 m_handleColor__() {
  let selected = /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_color__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.options, this.f_color__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_getOptions__().m_getTitle__().m_setColor__java_lang_String(selected);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_reconfigure__org_pepstock_charba_client_UpdateConfiguration(UpdateConfigurationBuilder.m_create__().m_setDuration__int(0).m_build__());
 }
 
 m_handleFontSize__() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_ = LineChart.$create__();
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
  this.f_fontSize__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
 }
 
 static $clinit() {
  TitleStyleCase.$clinit = () =>{};
  TitleStyleCase.$loadModules();
  BaseComposite.$clinit();
  TitleStyleCase.f_COLORS__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_ = /**@type {!Array<HtmlColor>}*/ ($Arrays.$init([HtmlColor.f_BLACK__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.f_RED__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.f_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.f_GREEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.f_ORANGE__org_pepstock_charba_client_colors_HtmlColor], HtmlColor));
  TitleStyleCase.f_FONT_SIZES__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_ = /**@type {!Array<number>}*/ ($Arrays.$init([8, 12, 16, 20, 24], $int));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TitleStyleCase;
 }
 
 static $loadModules() {
  MarginRightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  Document_$Overlay = goog.module.get('elemental2.dom.Document.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  HTMLOptionElement_$Overlay = goog.module.get('elemental2.dom.HTMLOptionElement.$Overlay$impl');
  HTMLSelectElement_$Overlay = goog.module.get('elemental2.dom.HTMLSelectElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  UpdateConfigurationBuilder = goog.module.get('org.pepstock.charba.client.UpdateConfigurationBuilder$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianCategoryAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianCategoryAxis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  FontStyle = goog.module.get('org.pepstock.charba.client.enums.FontStyle$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.TitleStyleCase.$1$impl');
  $2 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.TitleStyleCase.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@type {Array<HtmlColor>}*/
TitleStyleCase.f_COLORS__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_;
/**@type {Array<number>}*/
TitleStyleCase.f_FONT_SIZES__org_pepstock_charba_showcase_j2cl_cases_elements_TitleStyleCase_;
$Util.$setClassMetadata(TitleStyleCase, "org.pepstock.charba.showcase.j2cl.cases.elements.TitleStyleCase");

exports = TitleStyleCase;

//# sourceMappingURL=TitleStyleCase.js.map
