goog.module('org.pepstock.charba.client.items.AxisItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ScaleItem = goog.require('org.pepstock.charba.client.items.ScaleItem$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let ConfigurationEnvelop = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let BaseBoxItem_Property = goog.forwardDeclare('org.pepstock.charba.client.items.BaseBoxItem.Property$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.BaseBoxNodeItem.Property$impl');
let ScaleItem_Property = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class AxisItem extends ScaleItem {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AxisItem} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** ConfigurationEnvelop<?> */ envelop) {
  AxisItem.$clinit();
  let $instance = new AxisItem();
  $instance.$ctor__org_pepstock_charba_client_items_AxisItem__org_pepstock_charba_client_configuration_ConfigurationEnvelop(envelop);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_items_AxisItem__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** ConfigurationEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {ConfigurationEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), ConfigurationEnvelop)).m_getContent__()));
 }
 
 m_setFullSize__boolean(/** boolean */ fullSize) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_FULL_SIZE__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, fullSize);
 }
 
 m_setWeight__int(/** number */ weight) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_WEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, weight);
 }
 
 m_setMaxWidth__int(/** number */ maxWidth) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_MAX_WIDTH__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Checker.m_positiveOrZero__int(maxWidth));
 }
 
 m_setMaxHeight__int(/** number */ maxHeight) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_MAX_HEIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Checker.m_positiveOrZero__int(maxHeight));
 }
 
 m_setHeight__int(/** number */ height) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(BaseBoxItem_Property.f_HEIGHT__org_pepstock_charba_client_items_BaseBoxItem_Property, Checker.m_positiveOrZero__int(height));
 }
 
 m_setTop__int(/** number */ top) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(BaseBoxItem_Property.f_TOP__org_pepstock_charba_client_items_BaseBoxItem_Property, Checker.m_positiveOrZero__int(top));
 }
 
 m_setBottom__int(/** number */ bottom) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(BaseBoxItem_Property.f_BOTTOM__org_pepstock_charba_client_items_BaseBoxItem_Property, Checker.m_positiveOrZero__int(bottom));
 }
 
 m_setPaddingLeft__int(/** number */ paddingLeft) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_PADDING_LEFT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Checker.m_positiveOrZero__int(paddingLeft));
 }
 
 m_setPaddingTop__int(/** number */ paddingTop) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_PADDING_TOP__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Checker.m_positiveOrZero__int(paddingTop));
 }
 
 m_setPaddingRight__int(/** number */ paddingRight) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_PADDING_RIGHT__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Checker.m_positiveOrZero__int(paddingRight));
 }
 
 m_setPaddingBottom__int(/** number */ paddingBottom) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_PADDING_BOTTOM__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, Checker.m_positiveOrZero__int(paddingBottom));
 }
 
 m_setMin__java_lang_String(/** ?string */ min) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(ScaleItem_Property.f_MIN__org_pepstock_charba_client_items_ScaleItem_Property, min);
 }
 
 m_setMax__java_lang_String(/** ?string */ max) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(ScaleItem_Property.f_MAX__org_pepstock_charba_client_items_ScaleItem_Property, max);
 }
 
 m_setMin__double(/** number */ min) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(ScaleItem_Property.f_MIN__org_pepstock_charba_client_items_ScaleItem_Property, min);
 }
 
 m_setMax__double(/** number */ max) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(ScaleItem_Property.f_MAX__org_pepstock_charba_client_items_ScaleItem_Property, max);
 }
 
 m_setMin__java_util_Date(/** Date */ min) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(ScaleItem_Property.f_MIN__org_pepstock_charba_client_items_ScaleItem_Property, $Primitives.$widenLongToDouble(min.m_getTime__()));
 }
 
 m_setMax__java_util_Date(/** Date */ max) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(ScaleItem_Property.f_MAX__org_pepstock_charba_client_items_ScaleItem_Property, $Primitives.$widenLongToDouble(max.m_getTime__()));
 }
 
 m_setTicks__arrayOf_java_lang_String(/** Array<?string> */ ticks) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(ScaleItem_Property.f_TICKS__org_pepstock_charba_client_items_ScaleItem_Property, ArrayString_$Overlay.m_fromOrEmpty__arrayOf_java_lang_String(ticks));
 }
 
 m_setStart__int(/** number */ start) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(ScaleItem_Property.f_START__org_pepstock_charba_client_items_ScaleItem_Property, start);
 }
 
 m_setEnd__int(/** number */ end) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(ScaleItem_Property.f_END__org_pepstock_charba_client_items_ScaleItem_Property, end);
 }
 
 m_setLabelRotation__double(/** number */ labelRotation) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(ScaleItem_Property.f_LABEL_ROTATION__org_pepstock_charba_client_items_ScaleItem_Property, labelRotation);
 }
 
 m_setWidth__int(/** number */ width) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(BaseBoxItem_Property.f_WIDTH__org_pepstock_charba_client_items_BaseBoxItem_Property, Checker.m_positiveOrZero__int(width));
 }
 
 m_setLeft__int(/** number */ left) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(BaseBoxItem_Property.f_LEFT__org_pepstock_charba_client_items_BaseBoxItem_Property, Checker.m_positiveOrZero__int(left));
 }
 
 m_setRight__int(/** number */ right) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(BaseBoxItem_Property.f_RIGHT__org_pepstock_charba_client_items_BaseBoxItem_Property, Checker.m_positiveOrZero__int(right));
 }
 
 m_setPosition__org_pepstock_charba_client_enums_Position(/** Position */ position) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POSITION__org_pepstock_charba_client_items_BaseBoxNodeItem_Property, position);
 }
 
 static $clinit() {
  AxisItem.$clinit = () =>{};
  AxisItem.$loadModules();
  ScaleItem.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AxisItem;
 }
 
 static $loadModules() {
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  ConfigurationEnvelop = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
  BaseBoxItem_Property = goog.module.get('org.pepstock.charba.client.items.BaseBoxItem.Property$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.BaseBoxNodeItem.Property$impl');
  ScaleItem_Property = goog.module.get('org.pepstock.charba.client.items.ScaleItem.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(AxisItem, "org.pepstock.charba.client.items.AxisItem");

exports = AxisItem;

//# sourceMappingURL=AxisItem.js.map
