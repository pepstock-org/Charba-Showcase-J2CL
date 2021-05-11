goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointStylesOnLineCase$impl');

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
let LineChart = goog.forwardDeclare('org.pepstock.charba.client.LineChart$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointStylesOnLineCase.$1$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

class ApplyingPointStylesOnLineCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_;
  /**@type {HTMLSelectElement}*/
  this.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_;
  /**@type {LineDataset}*/
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_;
  /**@type {IsColor}*/
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_;
 }
 /** @return {!ApplyingPointStylesOnLineCase} */
 static $create__() {
  ApplyingPointStylesOnLineCase.$clinit();
  let $instance = new ApplyingPointStylesOnLineCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  for (let $array = PointStyle.m_values__(), $index = 0; $index < $array.length; $index++) {
   let myPointStyle = $array[$index];
   {
    let styleN = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
    styleN.text = myPointStyle.name();
    styleN.value = myPointStyle.name();
    this.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.add(styleN);
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_getOptions__().m_getLegend__().m_getLabels__().m_setUsePointStyle__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_getOptions__().m_getLegend__().m_getLabels__().m_getFont__().m_setSize__int(15);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_getOptions__().m_getLegend__().m_getLabels__().m_setLabelsCallback__org_pepstock_charba_client_callbacks_LegendLabelsCallback($1.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase(this));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Applying point styles on line chart"], j_l_String)));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_ = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_newDataset__(), LineDataset));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_setLabel__java_lang_String("My dataset");
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_ = GoogleChartColor.m_values__()[0];
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_setBackgroundColor__java_lang_String(this.f_color__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_toHex__());
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_setBorderColor__java_lang_String(this.f_color__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_toHex__());
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_setPointRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([10], $double)));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_setPointHoverRadius__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([20], $double)));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_setShowLine__boolean(false);
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_setPointStyle__arrayOf_org_pepstock_charba_client_enums_PointStyle(/**@type {!Array<PointStyle>}*/ ($Arrays.$init([PointStyle.f_CIRCLE__org_pepstock_charba_client_enums_PointStyle], PointStyle)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.appendChild(actionsRow);
  let actionsCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  actionsCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  actionsCol.style.textAlign = "center";
  actionsCol.vAlign = "middle";
  actionsRow.appendChild(actionsCol);
  let randomize = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  randomize.onclick = (/** Event */ p0) =>{
   this.m_handleRandomize__();
   return null;
  };
  randomize.className = "gwt-Button";
  randomize.textContent = "Randomize data";
  randomize.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(randomize);
  let pointStyleId = "pointStyle" + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForPointStyle = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForPointStyle.htmlFor = pointStyleId;
  labelForPointStyle.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, "Point style "));
  actionsCol.appendChild(labelForPointStyle);
  this.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.id = pointStyleId;
  this.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.onchange = (/** Event */ p0_1) =>{
   this.m_handlePointStyle__();
   return null;
  };
  this.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.className = "gwt-ListBox";
  this.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(this.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_);
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_;
 }
 
 m_handleRandomize__() {
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_setData__arrayOf_double(this.m_getRandomDigits__int(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_update__();
 }
 
 m_handlePointStyle__() {
  let selectedPointStyle = /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.options, this.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  let index = 0;
  for (let $array = PointStyle.m_values__(), $index = 0; $index < $array.length; $index++) {
   let style = $array[$index];
   {
    if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(style.name(), selectedPointStyle)) {
     this.f_color__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_ = GoogleChartColor.m_values__()[index];
     this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_setPointStyle__arrayOf_org_pepstock_charba_client_enums_PointStyle(/**@type {!Array<PointStyle>}*/ ($Arrays.$init([style], PointStyle)));
     this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_setBackgroundColor__java_lang_String(this.f_color__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_toHex__());
     this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_setBorderColor__java_lang_String(this.f_color__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_toHex__());
     this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_.m_update__();
     return;
    }
    index = index + 1 | 0;
   }
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_ = LineChart.$create__();
  this.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
  this.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_ = null;
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ApplyingPointStylesOnLineCase_ = null;
 }
 
 static $clinit() {
  ApplyingPointStylesOnLineCase.$clinit = () =>{};
  ApplyingPointStylesOnLineCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ApplyingPointStylesOnLineCase;
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
  LineChart = goog.module.get('org.pepstock.charba.client.LineChart$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  PointStyle = goog.module.get('org.pepstock.charba.client.enums.PointStyle$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointStylesOnLineCase.$1$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
$Util.$setClassMetadata(ApplyingPointStylesOnLineCase, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointStylesOnLineCase");

exports = ApplyingPointStylesOnLineCase;

//# sourceMappingURL=ApplyingPointStylesOnLineCase.js.map
