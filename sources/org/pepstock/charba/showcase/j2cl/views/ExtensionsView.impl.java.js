goog.module('org.pepstock.charba.showcase.j2cl.views.ExtensionsView$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractView = goog.require('org.pepstock.charba.showcase.j2cl.views.AbstractView$impl');

let PaddingTopUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.PaddingTopUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let HTMLTableElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ImportingPluginCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.ImportingPluginCase$impl');
let Category = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.Category$impl');
let GeoChartsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.GeoChartsCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class ExtensionsView extends AbstractView {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ExtensionsView} */
 static $create__elemental2_dom_HTMLElement(/** HTMLElement */ content) {
  ExtensionsView.$clinit();
  let $instance = new ExtensionsView();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView__elemental2_dom_HTMLElement(content);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ExtensionsView__elemental2_dom_HTMLElement(/** HTMLElement */ content) {
  this.$ctor__org_pepstock_charba_showcase_j2cl_views_AbstractView__elemental2_dom_HTMLElement(content);
  let title = /**@type {HTMLElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), $Overlay));
  title.style.textAlign = "center";
  title.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  title.innerHTML = " of javascript CHART.JS plugins and their integration with CHARBA";
  title.className = "myExtensionsTitleItem";
  content.appendChild(title);
  content.appendChild(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("br"));
  let panel = /**@type {HTMLElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), $Overlay));
  panel.style.textAlign = "center";
  panel.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  content.appendChild(panel);
  let menuPanel = /**@type {HTMLTableElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("table"), HTMLTableElement_$Overlay));
  menuPanel.width = "90%";
  menuPanel.align = "center";
  menuPanel.cellPadding = "10";
  panel.appendChild(menuPanel);
  let singleRow = /**@type {HTMLTableRowElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("tr"), HTMLTableRowElement_$Overlay));
  singleRow.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  menuPanel.appendChild(singleRow);
  for (let $array = Category.m_values__(), $index = 0; $index < $array.length; $index++) {
   let cat = $array[$index];
   {
    let catCol = /**@type {HTMLTableCellElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("td"), HTMLTableCellElement_$Overlay));
    catCol.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("25%");
    catCol.vAlign = "top";
    singleRow.appendChild(catCol);
    let label = /**@type {HTMLElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), $Overlay));
    label.innerHTML = cat.m_getLabel__();
    label.style.textAlign = "left";
    label.className = "myCategory";
    catCol.appendChild(label);
    if (cat.m_getItems__().length > 0) {
     for (let $array_1 = cat.m_getItems__(), $index_1 = 0; $index_1 < $array_1.length; $index_1++) {
      let caseItem = $array_1[$index_1];
      {
       let item = /**@type {HTMLDivElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), HTMLDivElement_$Overlay));
       item.style.textAlign = "left";
       item.className = "myCategoryItem";
       catCol.appendChild(item);
       item.innerHTML = caseItem.m_getLabel__();
       item.onclick = (/** Event */ p0) =>{
        let composite = caseItem.m_getFactory__().m_create__();
        if (!$Equality.$same(composite, null)) {
         this.m_clearPreviousChart__();
         content.appendChild(composite.m_getElement__());
        }
        return null;
       };
      }
     }
    }
    if ($Objects.m_equals__java_lang_Object__java_lang_Object(Category.f_LABELS__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category, cat)) {
     let labelPointer = /**@type {HTMLElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), $Overlay));
     labelPointer.innerHTML = "Geographical controller";
     labelPointer.style.textAlign = "left";
     labelPointer.className = "myCategory";
     labelPointer.style.paddingTop = PaddingTopUnionType_$Overlay.m_of__java_lang_Object("12px");
     catCol.appendChild(labelPointer);
     for (let $array_2 = GeoChartsCase.m_values__(), $index_2 = 0; $index_2 < $array_2.length; $index_2++) {
      let caseItem_1 = $array_2[$index_2];
      {
       let item_1 = /**@type {HTMLDivElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), HTMLDivElement_$Overlay));
       item_1.style.textAlign = "left";
       item_1.className = "myCategoryItem";
       catCol.appendChild(item_1);
       item_1.innerHTML = caseItem_1.m_getLabel__();
       item_1.onclick = (/** Event */ p0_1) =>{
        let composite_1 = caseItem_1.m_getFactory__().m_create__();
        if (!$Equality.$same(composite_1, null)) {
         this.m_clearPreviousChart__();
         content.appendChild(composite_1.m_getElement__());
        }
        return null;
       };
      }
     }
    }
    if ($Objects.m_equals__java_lang_Object__java_lang_Object(Category.f_ANNOTATION__org_pepstock_charba_showcase_j2cl_views_ExtensionsView_Category, cat)) {
     let labelPointer_1 = /**@type {HTMLElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), $Overlay));
     labelPointer_1.innerHTML = "Importing Chart.JS plugin";
     labelPointer_1.style.textAlign = "left";
     labelPointer_1.className = "myCategory";
     labelPointer_1.style.paddingTop = PaddingTopUnionType_$Overlay.m_of__java_lang_Object("12px");
     catCol.appendChild(labelPointer_1);
     let item_2 = /**@type {HTMLDivElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), HTMLDivElement_$Overlay));
     item_2.style.textAlign = "left";
     item_2.className = "myCategoryItem";
     catCol.appendChild(item_2);
     item_2.innerHTML = "Using Stacked100 plugin";
     item_2.onclick = (/** Event */ p0_2) =>{
      let composite_2 = ImportingPluginCase.$create__();
      if (!$Equality.$same(composite_2, null)) {
       this.m_clearPreviousChart__();
       content.appendChild(composite_2.m_getElement__());
      }
      return null;
     };
    }
   }
  }
 }
 
 static $clinit() {
  ExtensionsView.$clinit = () =>{};
  ExtensionsView.$loadModules();
  AbstractView.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExtensionsView;
 }
 
 static $loadModules() {
  PaddingTopUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.PaddingTopUnionType.$Overlay$impl');
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  HTMLTableElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ImportingPluginCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.ImportingPluginCase$impl');
  Category = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.Category$impl');
  GeoChartsCase = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ExtensionsView.GeoChartsCase$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(ExtensionsView, "org.pepstock.charba.showcase.j2cl.views.ExtensionsView");

exports = ExtensionsView;

//# sourceMappingURL=ExtensionsView.js.map