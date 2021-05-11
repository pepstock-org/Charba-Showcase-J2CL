goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HTMLAnnnotationCase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite$impl');

let MarginRightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let BarChart = goog.forwardDeclare('org.pepstock.charba.client.BarChart$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let CartesianLinearAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let AxisPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisPosition$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let $1 = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HTMLAnnnotationCase.$1$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class HTMLAnnnotationCase extends BaseComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_;
  /**@type {BarChart}*/
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_;
 }
 /** @return {!HTMLAnnnotationCase} */
 static $create__() {
  HTMLAnnnotationCase.$clinit();
  let $instance = new HTMLAnnnotationCase();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_BaseComposite__();
  this.$init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), $Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.width = "100%";
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.cellPadding = "12";
  let chartRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  chartRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.appendChild(chartRow);
  let chartCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  chartCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  chartRow.appendChild(chartCol);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.m_getOptions__().m_setResponsive__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.m_getOptions__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(Position.f_TOP__org_pepstock_charba_client_enums_Position);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.m_getOptions__().m_getTitle__().m_setDisplay__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.m_getOptions__().m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["HTML annotation on bar chart"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.m_getOptions__().m_getTooltips__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(InteractionMode.f_INDEX__org_pepstock_charba_client_enums_InteractionMode);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.m_getOptions__().m_getTooltips__().m_setIntersect__boolean(true);
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.m_getOptions__().m_getLayout__().m_getPadding__().m_setBottom__int(200);
  let axis1 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart__java_lang_String(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_, "y-axis-1");
  axis1.m_setPosition__org_pepstock_charba_client_enums_AxisPosition(AxisPosition.f_LEFT__org_pepstock_charba_client_enums_AxisPosition);
  axis1.m_setDisplay__boolean(true);
  axis1.m_setBeginAtZero__boolean(true);
  axis1.m_getTitle__().m_setDisplay__boolean(true);
  axis1.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Percentage"], j_l_String)));
  let axis2 = CartesianLinearAxis.$create__org_pepstock_charba_client_IsChart__java_lang_String(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_, "y-axis-2");
  axis2.m_setPosition__org_pepstock_charba_client_enums_AxisPosition(AxisPosition.f_RIGHT__org_pepstock_charba_client_enums_AxisPosition);
  axis2.m_setDisplay__boolean(true);
  axis2.m_setBeginAtZero__boolean(true);
  axis2.m_getGrid__().m_setDrawOnChartArea__boolean(false);
  axis2.m_getTitle__().m_setDisplay__boolean(true);
  axis2.m_getTitle__().m_setText__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["Degrees"], j_l_String)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.m_getOptions__().m_getScales__().m_setAxes__arrayOf_org_pepstock_charba_client_configuration_Axis(/**@type {!Array<Axis>}*/ ($Arrays.$init([axis1, axis2], Axis)));
  let dataset1 = /**@type {BarDataset}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.m_newDataset__(), BarDataset));
  dataset1.m_setLabel__java_lang_String("Humidity");
  dataset1.m_setData__arrayOf_double(this.m_getRandomDigits__int__double__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 0, 100));
  dataset1.m_setYAxisID__java_lang_String("y-axis-1");
  let dataset2 = LineDataset.$create__();
  dataset2.m_setLabel__java_lang_String("Temperature");
  dataset2.m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_BLUE__org_pepstock_charba_client_colors_HtmlColor);
  dataset2.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_BLUE__org_pepstock_charba_client_colors_HtmlColor);
  dataset2.m_setData__arrayOf_double(this.m_getRandomDigits__int__double__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 0, 35));
  dataset2.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  dataset2.m_setYAxisID__java_lang_String("y-axis-2");
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.m_getData__().m_setLabels__arrayOf_java_lang_String(this.m_getLabels__());
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([dataset1, dataset2], Dataset)));
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.m_getPlugins__().m_add__org_pepstock_charba_client_Plugin($1.$create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_data_LineDataset__java_lang_String(this, dataset1, dataset2, "raster"));
  chartCol.appendChild(/**@type {Node}*/ ($Casts.$to(IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.m_getChartElement__()), Node_$Overlay)));
  let actionsRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  actionsRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.appendChild(actionsRow);
  let actionsCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  actionsCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  actionsCol.style.textAlign = "center";
  actionsCol.vAlign = "middle";
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(actionsCol, "colspan", "2");
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
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_;
 }
 
 m_handleRandomize__() {
  for (let $iterator = this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.m_getData__().m_getDatasets__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dataset = /**@type {Dataset}*/ ($Casts.$to($iterator.m_next__(), Dataset));
   {
    if (LineDataset.$isInstance(dataset)) {
     dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__double__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 0, 35));
    } else {
     dataset.m_setData__arrayOf_double(this.m_getRandomDigits__int__double__double(this.f_months__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite, 0, 100));
    }
   }
  }
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_.m_update__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase() {
  this.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_ = BarChart.$create__();
 }
 
 static $clinit() {
  HTMLAnnnotationCase.$clinit = () =>{};
  HTMLAnnnotationCase.$loadModules();
  BaseComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLAnnnotationCase;
 }
 
 static $loadModules() {
  MarginRightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginRightUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  BarChart = goog.module.get('org.pepstock.charba.client.BarChart$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  CartesianLinearAxis = goog.module.get('org.pepstock.charba.client.configuration.CartesianLinearAxis$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  AxisPosition = goog.module.get('org.pepstock.charba.client.enums.AxisPosition$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  InteractionMode = goog.module.get('org.pepstock.charba.client.enums.InteractionMode$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  $1 = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HTMLAnnnotationCase.$1$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {?string}*/
HTMLAnnnotationCase.f_SUN_BASE64__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_HTMLAnnnotationCase_ = " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAB1ZJREFUeJztml1sVMcVx39n7q4NmA9j++6HAdu7NoRQvlHUSk2b8JHQ5qEPVRTa5K1tQFUUWtoG0kSK+kCCEikoKGkLUSu1aaGofelDH1qHz1RqoyhACoSSZO0FQsPauzZgMNjee+f0Ye2UUGPj9V3cSvt725nZ/5xz5uzMnbMXypQpU6ZMmTJlypQpc6dpdN1YIhKJTqQNoQmd3OEoVvNA44TZMFETA1hra8TgTaQNphSizfG6FYmou6uhYcbM8WrNr6+vTUTdXU2uuyQI226mJBmgVr5phPXSF/aAJ8ajNeDntxnhcQydwD+CsfA/lCQDTMh/BWuviZENyWh04QiTq4Leqn9uvbtUhG9b6LEqr5XE1lKIpv7VfV6NvAg4Iv4rt55ddoiaHbfq9j12AEaUrenOzo4SmIqUQhRg9uzZkysH+k9jaEDtqraOroNj+X5z3F2L8meLTU2u6frcqVMMlMLOkmQAwPnz56/jsF5VW3FsaqzfN758BLrfKOtL5TyUMAOG4z4InYtEVhpj12BloYUYggiaBTmJ6L45mdybh7lzR2PRAWiO1y1HeSTvseNcLndhpLELFlDR3137JJgfAvFRpC+o1RfndOZ+OlogkvGZDdjQ96zljTPZbFEnRNEBSETdXUZYb7FXjZVtMr365VQq1f9f4yKRxYLuFcPdAPfMr+CB5ZNYnAwTmWkQgUy3z/E2j9YjfRz5sJDtqvY9dWRd+pPchzdrxuPxKVOstwW1T2HMZIt9NZ3p2liMH0UHoKFhxsxQX3irGNkAOIpNq3XWpzs79w2NaY7WrkT5E8ZMWdYS5pnHprOgMTyi7on2PFt/28PJM3lEueTjr013dL8z1J+M1T2kVnYawxwLHtif20rvubNnL18qxo9x7wHJaHRh4aiT1aD72zK5NUPtiPe2YKq+9dUqNj08DXObs/m+snX3FX5/6BqiXMRyTyqbbQNIxNyDBu5X1VYjdlMq031qPPYHtgk2R2tX+hJuP5PJnF2wgIrrOfeYMSz4zkMF54vhJ7/u4Q+Hr4Hl3bbO7BcAvykWawzhNaUyucNB2F2SU6AlVrdJke0r5lXwqy01t73yN+N5yje2dvPPc3kQ3dB2Ifd6sJaW5jnA8a38QASefWx60c4DhELCjx8tZI+qPk0JFizwACQjkfuNYfbn767grjnjv2utmFfBokQYwSTmxuq+FICJnyH4DDC6CmDV0kmBSa5ZUdCyKg8EJjpIKX4CCwEWNo183I2FJcmClgqLAxMdZEw52ui6sZDDUWttzVCbAcXIjrZM7ulCi0ZBqKsOLrbV0wpaAl8baktG3e2i9rv2xn1BTM4RZ1kqk8nervaYAmBEFKv5G8tYFlRUPv0sVkzQeTXczieinhU8uaFbsPmQCduxaI8pAIN38tEKmFmA3CXLrDpnLPK35OKVgk9W9Y9DbW2Z3GZg83i1S7EJvg9w8kw+MMnj6YKWQY4HJjpICTZBOQCw72hfYIr7jhTuWGpoDUx0kMADUJ3J7gebeef0AKc/Hv+1/uhHAxxvH8BiU+0Xsn8LwMTPEHgAjkAezMsAW39zGd/esuY5Kp6nbNtzpfBBZRsjFFCLJZhdCmiJuw9Oq5rmX+7tvRRvuPZu/vqUr3d020hvH9y7sLIozed3X+Hge/0o+na6I7cR0GRd3dzqqVNXXOrtbQ/C7nFnwNx6d2ky4h5W5S8h8V8HOHWKAQf7iMKVN1p7eWFPD75/+4vnW+X53T3sPXgNVe0KqfMoYAHEyC+N0dZEzD2QiETG/WBUdAbMr6+vnT5l0g5gpwhNik1jnS0Xe3vTAN1Xr2dnTqt6C+HhE+35yr+eGKBlVph4zchTnkjn+f7PLrH/aD+odothbSqT/fTOX1019WMVe69BlouwvqZqSrxqZujvPT3914vxI5iSmJoXZNqM7cOVxJrqa+8S3/zOCMsAFiXCrF4+icXJEG51IRi5y5aT6TwHjvVxLDV4fFqOiLJuqBByIy0tLZX2yuVNKvZZg5mq6GvtmdyTxfhRdACaXHeJcXSd5/HqaEVRwEnGIo+Dv1kwiRFHWs4hvDS7I7trtKJoQ11dPOTIE2D2tnd0nByrD3CHy+KAJOPuF1FdLaqLgCggFskK8r5g97V1dL3F4O/9/57mmPuVZMQ9PC8aHXnVh6HFdZuTEfdQS9x9sBS2DVGyf4YaGxsnYXWnGL7s4435BQhfJCmG+1TtrsbGxuCKCzdRsgA4/b1PYaRRVVvbOroODTcmGXW3N8fqXhquL93Z+aaFg2CanP7eH5XKzpLsAXNn18zyPflAMZUO/pJbla6bI7XXrcFLZ7qGLRsnIpHFxuhRxfaF88z7oKvrk6BtLUkGWM9sFEyVoDtHqttbEBlhEdKdncdRfiGYKi8sRR1zo1GSN0R8X/aIYyfbSu+58Wr1h/ufqfAq8qizOwjb/qdIRGr7krHaqxNpw4S+JYaYnGCDq5wUwYQGwBFn2VhreGXKlClTpkyZMmXKlAmEfwPTzL4UIg0aNQAAAABJRU5ErkJggg==";
$Util.$setClassMetadata(HTMLAnnnotationCase, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HTMLAnnnotationCase");

exports = HTMLAnnnotationCase;

//# sourceMappingURL=HTMLAnnnotationCase.js.map
