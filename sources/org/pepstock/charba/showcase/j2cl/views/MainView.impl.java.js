goog.module('org.pepstock.charba.showcase.j2cl.views.MainView$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractComposite = goog.require('org.pepstock.charba.showcase.j2cl.cases.commons.AbstractComposite$impl');

let BorderWidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.BorderWidthUnionType.$Overlay$impl');
let LineHeightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.LineHeightUnionType.$Overlay$impl');
let MinWidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MinWidthUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let HTMLTableElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartsView = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView$impl');
let ColoringView = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ColoringView$impl');
let ElementsView = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ElementsView$impl');
let ExtensionsView = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView$impl');
let HomeView = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.HomeView$impl');
let MenuItem = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MainView.MenuItem$impl');
let MiscellaneousView = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView$impl');
let PluginsView = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.PluginsView$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class MainView extends AbstractComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLDivElement}*/
  this.f_content__org_pepstock_charba_showcase_j2cl_views_MainView_;
  /**@type {HTMLTableElement}*/
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_views_MainView_;
  /**@type {HTMLElement}*/
  this.f_currentPanel__org_pepstock_charba_showcase_j2cl_views_MainView_;
 }
 /** @return {!MainView} */
 static $create__() {
  MainView.$clinit();
  let $instance = new MainView();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_MainView__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_MainView__() {
  this.$ctor__org_pepstock_charba_showcase_j2cl_cases_commons_AbstractComposite__();
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_views_MainView_ = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), HTMLTableElement_$Overlay));
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_views_MainView_.width = "100%";
  let singleRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  singleRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  this.f_mainPanel__org_pepstock_charba_showcase_j2cl_views_MainView_.appendChild(singleRow);
  let menuCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  menuCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("250px");
  menuCol.style.minWidth = MinWidthUnionType_$Overlay.m_of__java_lang_Object("250px");
  menuCol.style.verticalAlign = "top";
  singleRow.appendChild(menuCol);
  this.m_loadMenu__elemental2_dom_HTMLTableCellElement_$p_org_pepstock_charba_showcase_j2cl_views_MainView(menuCol);
  let contentCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
  contentCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  contentCol.style.textAlign = "center";
  contentCol.vAlign = "top";
  singleRow.appendChild(contentCol);
  this.f_content__org_pepstock_charba_showcase_j2cl_views_MainView_ = /**@type {HTMLDivElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), $Overlay));
  this.f_content__org_pepstock_charba_showcase_j2cl_views_MainView_.id = "myContent";
  this.f_content__org_pepstock_charba_showcase_j2cl_views_MainView_.style.textAlign = "center";
  this.f_content__org_pepstock_charba_showcase_j2cl_views_MainView_.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  contentCol.appendChild(this.f_content__org_pepstock_charba_showcase_j2cl_views_MainView_);
  let home = HomeView.$create__();
  this.f_content__org_pepstock_charba_showcase_j2cl_views_MainView_.appendChild(home.m_getElement__());
 }
 /** @override @return {HTMLElement} */
 m_getElement__() {
  return this.f_mainPanel__org_pepstock_charba_showcase_j2cl_views_MainView_;
 }
 
 m_loadMenu__elemental2_dom_HTMLTableCellElement_$p_org_pepstock_charba_showcase_j2cl_views_MainView(/** HTMLTableCellElement */ menu) {
  let title = /**@type {HTMLElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), HTMLElement_$Overlay));
  title.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("250px");
  title.style.textAlign = "center";
  title.innerHTML = " showcase";
  title.className = "myTitle";
  title.onclick = (/** Event */ p0) =>{
   this.m_handleHome__elemental2_dom_Event(p0);
   return null;
  };
  menu.appendChild(title);
  let parent = /**@type {HTMLDivElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), $Overlay));
  parent.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("250px");
  parent.style.lineHeight = LineHeightUnionType_$Overlay.m_of__java_lang_Object("64px");
  menu.appendChild(parent);
  for (let $array = MenuItem.m_values__(), $index = 0; $index < $array.length; $index++) {
   let item = $array[$index];
   {
    let row = /**@type {HTMLDivElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), $Overlay));
    row.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("250px");
    row.style.borderWidth = BorderWidthUnionType_$Overlay.m_of__java_lang_Object("3px");
    row.style.borderColor = "rgba(0,0,0,0)";
    row.style.borderStyle = "dashed";
    row.style.verticalAlign = "middle";
    row.className = "myItem";
    parent.appendChild(row);
    let img = /**@type {HTMLImageElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("img"), HTMLImageElement_$Overlay));
    img.src = item.m_getImgSrc__();
    img.className = "myImgItem";
    img.style.display = "inline-block";
    img.style.verticalAlign = "middle";
    img.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("36px");
    row.appendChild(img);
    img.onclick = (/** Event */ p0_1) =>{
     this.m_handleEvent__elemental2_dom_Event__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem_$p_org_pepstock_charba_showcase_j2cl_views_MainView(p0_1, item);
     return null;
    };
    let label = /**@type {HTMLDivElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), $Overlay));
    label.innerHTML = item.m_getLabel__();
    label.className = "myLabelItem";
    label.style.verticalAlign = "middle";
    label.style.display = "inline-block";
    label.onclick = (/** Event */ p0_2) =>{
     this.m_handleEvent__elemental2_dom_Event__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem_$p_org_pepstock_charba_showcase_j2cl_views_MainView(p0_2, item);
     return null;
    };
    row.appendChild(label);
   }
  }
 }
 
 m_handleEvent__elemental2_dom_Event__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem_$p_org_pepstock_charba_showcase_j2cl_views_MainView(/** Event */ event, /** MenuItem */ item) {
  switch (item.ordinal()) {
   case MenuItem.$ordinal_CHARTS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem: 
    this.m_handleCharts__elemental2_dom_Event(event);
    break;
   case MenuItem.$ordinal_ELEMENTS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem: 
    this.m_handleElements__elemental2_dom_Event(event);
    break;
   case MenuItem.$ordinal_PLUGINS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem: 
    this.m_handlePlugins__elemental2_dom_Event(event);
    break;
   case MenuItem.$ordinal_COLORING__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem: 
    this.m_handleColoring__elemental2_dom_Event(event);
    break;
   case MenuItem.$ordinal_EXTENSIONS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem: 
    this.m_handleExtensions__elemental2_dom_Event(event);
    break;
   case MenuItem.$ordinal_MISC__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem: 
    this.m_handleMiscellaneous__elemental2_dom_Event(event);
    break;
   default: 
    break;
  }
 }
 /** @return {boolean} */
 m_changeSelection__elemental2_dom_Event_$p_org_pepstock_charba_showcase_j2cl_views_MainView(/** Event */ event) {
  if (HTMLElement_$Overlay.$isInstance(event.target)) {
   let w = /**@type {HTMLElement}*/ ($Casts.$to(event.target, HTMLElement_$Overlay));
   if (j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("myImgItem", w.className) || j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("myLabelItem", w.className)) {
    if (!$Equality.$same(this.f_currentPanel__org_pepstock_charba_showcase_j2cl_views_MainView_, null)) {
     this.f_currentPanel__org_pepstock_charba_showcase_j2cl_views_MainView_.style.borderColor = "rgba(0,0,0,0)";
    }
    this.f_currentPanel__org_pepstock_charba_showcase_j2cl_views_MainView_ = /**@type {HTMLElement}*/ ($Casts.$to(w.parentElement, HTMLElement_$Overlay));
    this.f_currentPanel__org_pepstock_charba_showcase_j2cl_views_MainView_.style.borderColor = "#d0d0d0";
    return true;
   }
  }
  return false;
 }
 
 m_clearPreviousChart___$p_org_pepstock_charba_showcase_j2cl_views_MainView() {
  while (!$Equality.$same(this.f_content__org_pepstock_charba_showcase_j2cl_views_MainView_.firstChild, null)) {
   this.f_content__org_pepstock_charba_showcase_j2cl_views_MainView_.removeChild(this.f_content__org_pepstock_charba_showcase_j2cl_views_MainView_.firstChild);
  }
 }
 
 m_handleHome__elemental2_dom_Event(/** Event */ event) {
  if (!$Equality.$same(this.f_currentPanel__org_pepstock_charba_showcase_j2cl_views_MainView_, null)) {
   this.f_currentPanel__org_pepstock_charba_showcase_j2cl_views_MainView_.style.borderColor = "rgba(0,0,0,0)";
   this.f_currentPanel__org_pepstock_charba_showcase_j2cl_views_MainView_ = null;
  }
  this.m_clearPreviousChart___$p_org_pepstock_charba_showcase_j2cl_views_MainView();
  this.f_content__org_pepstock_charba_showcase_j2cl_views_MainView_.appendChild(HomeView.$create__().m_getElement__());
 }
 
 m_handleCharts__elemental2_dom_Event(/** Event */ event) {
  if (this.m_changeSelection__elemental2_dom_Event_$p_org_pepstock_charba_showcase_j2cl_views_MainView(event)) {
   this.m_clearPreviousChart___$p_org_pepstock_charba_showcase_j2cl_views_MainView();
   ChartsView.$create__elemental2_dom_HTMLElement(this.f_content__org_pepstock_charba_showcase_j2cl_views_MainView_);
  }
 }
 
 m_handleExtensions__elemental2_dom_Event(/** Event */ event) {
  if (this.m_changeSelection__elemental2_dom_Event_$p_org_pepstock_charba_showcase_j2cl_views_MainView(event)) {
   this.m_clearPreviousChart___$p_org_pepstock_charba_showcase_j2cl_views_MainView();
   ExtensionsView.$create__elemental2_dom_HTMLElement(this.f_content__org_pepstock_charba_showcase_j2cl_views_MainView_);
  }
 }
 
 m_handleElements__elemental2_dom_Event(/** Event */ event) {
  if (this.m_changeSelection__elemental2_dom_Event_$p_org_pepstock_charba_showcase_j2cl_views_MainView(event)) {
   this.m_clearPreviousChart___$p_org_pepstock_charba_showcase_j2cl_views_MainView();
   ElementsView.$create__elemental2_dom_HTMLElement(this.f_content__org_pepstock_charba_showcase_j2cl_views_MainView_);
  }
 }
 
 m_handleColoring__elemental2_dom_Event(/** Event */ event) {
  if (this.m_changeSelection__elemental2_dom_Event_$p_org_pepstock_charba_showcase_j2cl_views_MainView(event)) {
   this.m_clearPreviousChart___$p_org_pepstock_charba_showcase_j2cl_views_MainView();
   ColoringView.$create__elemental2_dom_HTMLElement(this.f_content__org_pepstock_charba_showcase_j2cl_views_MainView_);
  }
 }
 
 m_handlePlugins__elemental2_dom_Event(/** Event */ event) {
  if (this.m_changeSelection__elemental2_dom_Event_$p_org_pepstock_charba_showcase_j2cl_views_MainView(event)) {
   this.m_clearPreviousChart___$p_org_pepstock_charba_showcase_j2cl_views_MainView();
   PluginsView.$create__elemental2_dom_HTMLElement(this.f_content__org_pepstock_charba_showcase_j2cl_views_MainView_);
  }
 }
 
 m_handleMiscellaneous__elemental2_dom_Event(/** Event */ event) {
  if (this.m_changeSelection__elemental2_dom_Event_$p_org_pepstock_charba_showcase_j2cl_views_MainView(event)) {
   this.m_clearPreviousChart___$p_org_pepstock_charba_showcase_j2cl_views_MainView();
   MiscellaneousView.$create__elemental2_dom_HTMLElement(this.f_content__org_pepstock_charba_showcase_j2cl_views_MainView_);
  }
 }
 
 static $clinit() {
  MainView.$clinit = () =>{};
  MainView.$loadModules();
  AbstractComposite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MainView;
 }
 
 static $loadModules() {
  BorderWidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.BorderWidthUnionType.$Overlay$impl');
  LineHeightUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.LineHeightUnionType.$Overlay$impl');
  MinWidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MinWidthUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  HTMLTableElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartsView = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView$impl');
  ColoringView = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ColoringView$impl');
  ElementsView = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ElementsView$impl');
  ExtensionsView = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView$impl');
  HomeView = goog.module.get('org.pepstock.charba.showcase.j2cl.views.HomeView$impl');
  MenuItem = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MainView.MenuItem$impl');
  MiscellaneousView = goog.module.get('org.pepstock.charba.showcase.j2cl.views.MiscellaneousView$impl');
  PluginsView = goog.module.get('org.pepstock.charba.showcase.j2cl.views.PluginsView$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(MainView, "org.pepstock.charba.showcase.j2cl.views.MainView");

exports = MainView;

//# sourceMappingURL=MainView.js.map
