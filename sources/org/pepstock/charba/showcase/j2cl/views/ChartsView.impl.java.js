goog.module('org.pepstock.charba.showcase.j2cl.views.ChartsView$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractView = goog.require('org.pepstock.charba.showcase.j2cl.views.AbstractView$impl');

let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let HTMLTableElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Category = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.views.ChartsView.Category$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ChartsView extends AbstractView {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ChartsView} */
 static $create__elemental2_dom_HTMLElement(/** HTMLElement */ content) {
  ChartsView.$clinit();
  let $instance = new ChartsView();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView__elemental2_dom_HTMLElement(content);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_ChartsView__elemental2_dom_HTMLElement(/** HTMLElement */ content) {
  this.$ctor__org_pepstock_charba_showcase_j2cl_views_AbstractView__elemental2_dom_HTMLElement(content);
  let title = /**@type {HTMLElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("div"), $Overlay));
  title.style.textAlign = "center";
  title.style.width = WidthUnionType_$Overlay.m_of__java_lang_Object("100%");
  title.innerHTML = " available out of the box by CHART.JS or by CHARBA";
  title.className = "myChartsTitleItem";
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
   }
  }
 }
 
 static $clinit() {
  ChartsView.$clinit = () =>{};
  ChartsView.$loadModules();
  AbstractView.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartsView;
 }
 
 static $loadModules() {
  WidthUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  HTMLTableElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Category = goog.module.get('org.pepstock.charba.showcase.j2cl.views.ChartsView.Category$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ChartsView, "org.pepstock.charba.showcase.j2cl.views.ChartsView");

exports = ChartsView;

//# sourceMappingURL=ChartsView.js.map
