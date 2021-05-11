goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase.HoveredFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let Hovered = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase.Hovered$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<Hovered>}
 */
class HoveredFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HoveredFactory} */
 static $create__() {
  HoveredFactory.$clinit();
  let $instance = new HoveredFactory();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_HoveredFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_HoveredFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {Hovered} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return Hovered.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {Hovered} */
 m_create__() {
  return /**@type {Hovered}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), Hovered));
 }
 
 static $clinit() {
  HoveredFactory.$clinit = () =>{};
  HoveredFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HoveredFactory;
 }
 
 static $loadModules() {
  Hovered = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase.Hovered$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(HoveredFactory);
$Util.$setClassMetadata(HoveredFactory, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase$HoveredFactory");

exports = HoveredFactory;

//# sourceMappingURL=DataLabelsHighlightCase$HoveredFactory.js.map
