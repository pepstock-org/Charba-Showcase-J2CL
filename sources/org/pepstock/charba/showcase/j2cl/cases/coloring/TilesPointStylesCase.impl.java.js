goog.module('org.pepstock.charba.showcase.j2cl.cases.coloring.TilesPointStylesCase$impl');

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
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let TilesFactory = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
let TilesFactoryDefaults = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.TilesFactoryDefaults$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class TilesPointStylesCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_;
  /**@type {LineChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_;
  /**@type {HTMLSelectElement}*/
  this.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_;
  /**@type {HTMLSelectElement}*/
  this.f_background__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_;
  /**@type {HTMLSelectElement}*/
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_;
  /**@type {LineDataset}*/
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_;
 }
 /** @return {!TilesPointStylesCase} */
 static $create__() {
  TilesPointStylesCase.$clinit();
  let $instance = new TilesPointStylesCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  for (let $array = PointStyle.m_values__(), $index = 0; $index < $array.length; $index++) {
   let myPointStyle = $array[$index];
   {
    let pointStyleN = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
    pointStyleN.text = myPointStyle.name();
    pointStyleN.value = myPointStyle.name();
    this.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.add(pointStyleN);
   }
  }
  let backgroundDefault = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  backgroundDefault.text = "Default";
  backgroundDefault.value = TilesFactoryDefaults.f_DEFAULT_BACKGROUND_COLOR_AS_STRING__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults;
  this.f_background__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.add(backgroundDefault);
  for (let $array_1 = TilesPointStylesCase.f_BACKGROUND__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_, $index_1 = 0; $index_1 < $array_1.length; $index_1++) {
   let myColor = $array_1[$index_1];
   {
    let backgroundN = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
    backgroundN.text = myColor.name();
    backgroundN.value = myColor.m_toRGB__();
    this.f_background__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.add(backgroundN);
   }
  }
  let colorDefault = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
  colorDefault.text = "Default";
  colorDefault.value = TilesFactoryDefaults.f_DEFAULT_SHAPE_COLOR_AS_STRING__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults;
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.add(colorDefault);
  for (let $array_2 = TilesPointStylesCase.f_COLORS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_, $index_2 = 0; $index_2 < $array_2.length; $index_2++) {
   let myColor_1 = $array_2[$index_2];
   {
    let colorN = /**@type {HTMLOptionElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("option"), HTMLOptionElement_$Overlay));
    colorN.text = myColor_1.name();
    colorN.value = myColor_1.m_toRGB__();
    this.f_color__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.add(colorN);
   }
  }
  let p = TilesFactory.m_createPattern__org_pepstock_charba_client_enums_PointStyle(PointStyle.f_CIRCLE__org_pepstock_charba_client_enums_PointStyle);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.m_getOptions__().m_getLegend__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Using tiles on line chart datasets"], j_l_String)));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_ = /**@type {LineDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.m_newDataset__(), LineDataset));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.m_setLabel__java_lang_String("dataset 1");
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.m_setBackgroundColor__org_pepstock_charba_client_colors_Pattern(p);
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.m_setFill__boolean(true);
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.m_setData__arrayOf_double(this.m_getFixedDigits__int(TilesPointStylesCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__int(TilesPointStylesCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_], Dataset)));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.appendChild(actionsRow);
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
  this.m_configListBox__elemental2_dom_HTMLTableCellElement__elemental2_dom_HTMLSelectElement__java_lang_String__java_lang_String_$p_org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase(actionsCol, this.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_, "Point style ", "pointStyles");
  this.m_configListBox__elemental2_dom_HTMLTableCellElement__elemental2_dom_HTMLSelectElement__java_lang_String__java_lang_String_$p_org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase(actionsCol, this.f_color__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_, "Color ", "color");
  this.m_configListBox__elemental2_dom_HTMLTableCellElement__elemental2_dom_HTMLSelectElement__java_lang_String__java_lang_String_$p_org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase(actionsCol, this.f_background__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_, "Background color ", "background");
  let github = /**@type {HTMLButtonElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("button"), HTMLButtonElement_$Overlay));
  github.onclick = (/** Event */ p0_1) =>{
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_;
 }
 
 m_handleRandomize__() {
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.m_setData__arrayOf_double(this.m_getRandomDigits__int(TilesPointStylesCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_));
  this.m_applyTile__();
 }
 
 m_handleShapes__() {
  this.m_applyTile__();
 }
 
 m_applyTile__() {
  let selectedPointStyle = /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.options, this.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  let selectedColor = /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_color__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.options, this.f_color__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  let selectedBackground = /**@type {HTMLOptionElement}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_background__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.options, this.f_background__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.selectedIndex), HTMLOptionElement_$Overlay)).value;
  let pointStyle = PointStyle.m_valueOf__java_lang_String(selectedPointStyle);
  let p = TilesFactory.m_createPattern__org_pepstock_charba_client_enums_PointStyle__java_lang_String__java_lang_String(pointStyle, selectedBackground, selectedColor);
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.m_setBackgroundColor__org_pepstock_charba_client_colors_Pattern(p);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_.m_update__();
 }
 
 m_configListBox__elemental2_dom_HTMLTableCellElement__elemental2_dom_HTMLSelectElement__java_lang_String__java_lang_String_$p_org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase(/** HTMLTableCellElement */ actionsCol, /** HTMLSelectElement */ listBox, /** ?string */ label, /** ?string */ prefixId) {
  let listId = j_l_String.m_valueOf__java_lang_Object(prefixId) + $Primitives.$narrowDoubleToInt(Math.random() * 1000);
  let labelForListBox = /**@type {HTMLLabelElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("label"), HTMLLabelElement_$Overlay));
  labelForListBox.htmlFor = listId;
  labelForListBox.appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, label));
  actionsCol.appendChild(labelForListBox);
  listBox.id = listId;
  listBox.onchange = (/** Event */ p0) =>{
   this.m_handleShapes__();
   return null;
  };
  listBox.className = "gwt-ListBox";
  listBox.style.marginRight = MarginRightUnionType_$Overlay.m_of__java_lang_Object("5px");
  actionsCol.appendChild(listBox);
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_ = LineChart.$create__();
  this.f_pointStyles__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
  this.f_background__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
  this.f_color__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_ = /**@type {HTMLSelectElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("select"), HTMLSelectElement_$Overlay));
  this.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_ = null;
 }
 
 static $clinit() {
  TilesPointStylesCase.$clinit = () =>{};
  TilesPointStylesCase.$loadModules();
  BaseComposite.$clinit();
  TilesPointStylesCase.f_BACKGROUND__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_ = /**@type {!Array<HtmlColor>}*/ ($Arrays.$init([HtmlColor.f_ORANGE_RED__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.f_LIGHT_BLUE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.f_LIGHT_GREEN__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.f_ORANGE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.f_IVORY__org_pepstock_charba_client_colors_HtmlColor], HtmlColor));
  TilesPointStylesCase.f_COLORS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_ = /**@type {!Array<HtmlColor>}*/ ($Arrays.$init([HtmlColor.f_BLACK__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor, HtmlColor.f_LIGHT_GRAY__org_pepstock_charba_client_colors_HtmlColor], HtmlColor));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TilesPointStylesCase;
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
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  TilesFactory = goog.module.get('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
  TilesFactoryDefaults = goog.module.get('org.pepstock.charba.client.colors.tiles.TilesFactoryDefaults$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  PointStyle = goog.module.get('org.pepstock.charba.client.enums.PointStyle$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@type {Array<HtmlColor>}*/
TilesPointStylesCase.f_BACKGROUND__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_;
/**@type {Array<HtmlColor>}*/
TilesPointStylesCase.f_COLORS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_;
/**@const {number}*/
TilesPointStylesCase.f_ITEMS__org_pepstock_charba_showcase_j2cl_cases_coloring_TilesPointStylesCase_ = 12;
$Util.$setClassMetadata(TilesPointStylesCase, "org.pepstock.charba.showcase.j2cl.cases.coloring.TilesPointStylesCase");

exports = TilesPointStylesCase;

//# sourceMappingURL=TilesPointStylesCase.js.map
