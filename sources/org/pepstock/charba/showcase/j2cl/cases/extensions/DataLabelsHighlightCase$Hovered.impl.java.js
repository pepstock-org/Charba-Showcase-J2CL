goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase.Hovered$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Property = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase.Hovered.Property$impl');

class Hovered extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'Hovered()'.
 /** @return {!Hovered} */
 static $create__() {
  Hovered.$clinit();
  let $instance = new Hovered();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered__();
  return $instance;
 }
 //Initialization from constructor 'Hovered()'.
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered__() {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__();
 }
 //Factory method corresponding to constructor 'Hovered(NativeObject)'.
 /** @return {!Hovered} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  Hovered.$clinit();
  let $instance = new Hovered();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'Hovered(NativeObject)'.
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {boolean} */
 m_isHovered__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_hovered__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered_Property, false);
 }
 
 m_setHovered__boolean(/** boolean */ hovered) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_hovered__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_Hovered_Property, hovered);
 }
 
 static $clinit() {
  Hovered.$clinit = () =>{};
  Hovered.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Hovered;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase.Hovered.Property$impl');
 }
}
$Util.$setClassMetadata(Hovered, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase$Hovered");

exports = Hovered;

//# sourceMappingURL=DataLabelsHighlightCase$Hovered.js.map
