goog.module('org.pepstock.charba.client.options.Legend$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLegend = goog.require('org.pepstock.charba.client.defaults.IsDefaultLegend$impl');
const AbstractDefaultPluginElement = goog.require('org.pepstock.charba.client.options.AbstractDefaultPluginElement$impl');
const HasTextDirection = goog.require('org.pepstock.charba.client.options.HasTextDirection$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ArrayEnumList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayEnumList$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.enums.Event$impl');
let TextDirection = goog.forwardDeclare('org.pepstock.charba.client.enums.TextDirection$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Legend.Property$impl');
let LegendLabels = goog.forwardDeclare('org.pepstock.charba.client.options.LegendLabels$impl');
let LegendTitle = goog.forwardDeclare('org.pepstock.charba.client.options.LegendTitle$impl');
let Plugins = goog.forwardDeclare('org.pepstock.charba.client.options.Plugins$impl');
let TextDirectionHandler = goog.forwardDeclare('org.pepstock.charba.client.options.TextDirectionHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractDefaultPluginElement<IsDefaultLegend>}
 * @implements {IsDefaultLegend}
 * @implements {HasTextDirection}
 */
class Legend extends AbstractDefaultPluginElement {
 /** @protected */
 constructor() {
  super();
  /**@type {LegendLabels}*/
  this.f_labels__org_pepstock_charba_client_options_Legend_;
  /**@type {LegendTitle}*/
  this.f_title__org_pepstock_charba_client_options_Legend_;
  /**@type {TextDirectionHandler}*/
  this.f_textDirectionHandler__org_pepstock_charba_client_options_Legend_;
 }
 /** @return {!Legend} */
 static $create__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLegend__org_pepstock_charba_client_commons_NativeObject(/** Plugins */ options, /** Key */ childKey, /** IsDefaultLegend */ defaultValues, /** ? */ nativeObject) {
  Legend.$clinit();
  let $instance = new Legend();
  $instance.$ctor__org_pepstock_charba_client_options_Legend__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLegend__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Legend__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLegend__org_pepstock_charba_client_commons_NativeObject(/** Plugins */ options, /** Key */ childKey, /** IsDefaultLegend */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractDefaultPluginElement__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPluginElement__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  this.f_labels__org_pepstock_charba_client_options_Legend_ = LegendLabels.$create__org_pepstock_charba_client_options_Legend__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLegendLabels__org_pepstock_charba_client_commons_NativeObject(this, Property.f_LABELS__org_pepstock_charba_client_options_Legend_Property, /**@type {IsDefaultLegend}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLegend)).m_getLabels__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_LABELS__org_pepstock_charba_client_options_Legend_Property));
  this.f_title__org_pepstock_charba_client_options_Legend_ = LegendTitle.$create__org_pepstock_charba_client_options_Legend__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLegendTitle__org_pepstock_charba_client_commons_NativeObject(this, Property.f_TITLE__org_pepstock_charba_client_options_Legend_Property, /**@type {IsDefaultLegend}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLegend)).m_getTitle__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_TITLE__org_pepstock_charba_client_options_Legend_Property));
  this.f_textDirectionHandler__org_pepstock_charba_client_options_Legend_ = TextDirectionHandler.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultTextDirectionHandler__org_pepstock_charba_client_commons_NativeObject(this, /**@type {IsDefaultLegend}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLegend)), this.m_getNativeObject__());
 }
 /** @override @return {TextDirectionHandler} */
 m_getTextDirectionHandler__() {
  return this.f_textDirectionHandler__org_pepstock_charba_client_options_Legend_;
 }
 /** @override @return {LegendLabels} */
 m_getLabels__() {
  return this.f_labels__org_pepstock_charba_client_options_Legend_;
 }
 /** @override @return {LegendTitle} */
 m_getTitle__() {
  return this.f_title__org_pepstock_charba_client_options_Legend_;
 }
 
 m_setEvents__arrayOf_org_pepstock_charba_client_enums_Event(/** Array<Event> */ events) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_EVENTS__org_pepstock_charba_client_options_Legend_Property, ArrayString_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_Key(events));
 }
 /** @override @return {List<Event>} */
 m_getEvents__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_EVENTS__org_pepstock_charba_client_options_Legend_Property), ArrayString_$Overlay));
  return !$Equality.$same(array, null) ? /**@type {ArrayEnumList<Event>}*/ (ArrayListHelper.m_list__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayString(Event.m_values__(), array)) : /**@type {IsDefaultLegend}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLegend)).m_getEvents__();
 }
 
 m_setMaxWidth__int(/** number */ maxWidth) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_MAX_WIDTH__org_pepstock_charba_client_options_Legend_Property, Checker.m_positiveOrZero__int(maxWidth));
 }
 /** @override @return {number} */
 m_getMaxWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_MAX_WIDTH__org_pepstock_charba_client_options_Legend_Property, /**@type {IsDefaultLegend}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLegend)).m_getMaxWidth__());
 }
 
 m_setMaxHeight__int(/** number */ maxHeight) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_MAX_HEIGHT__org_pepstock_charba_client_options_Legend_Property, Checker.m_positiveOrZero__int(maxHeight));
 }
 /** @override @return {number} */
 m_getMaxHeight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_MAX_HEIGHT__org_pepstock_charba_client_options_Legend_Property, /**@type {IsDefaultLegend}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLegend)).m_getMaxWidth__());
 }
 
 m_setFullSize__boolean(/** boolean */ fullSize) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_FULL_SIZE__org_pepstock_charba_client_options_Legend_Property, fullSize);
 }
 /** @override @return {boolean} */
 m_isFullSize__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_FULL_SIZE__org_pepstock_charba_client_options_Legend_Property, /**@type {IsDefaultLegend}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLegend)).m_isFullSize__());
 }
 
 m_setReverse__boolean(/** boolean */ reverse) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_REVERSE__org_pepstock_charba_client_options_Legend_Property, reverse);
 }
 /** @override @return {boolean} */
 m_isReverse__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_REVERSE__org_pepstock_charba_client_options_Legend_Property, /**@type {IsDefaultLegend}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLegend)).m_isReverse__());
 }
 //Default method forwarding stub.
 /** @override @return {TextDirection} */
 m_getTextDirection__() {
  return HasTextDirection.m_getTextDirection__$default__org_pepstock_charba_client_options_HasTextDirection(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isRtl__() {
  return HasTextDirection.m_isRtl__$default__org_pepstock_charba_client_options_HasTextDirection(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setRtl__boolean(/** boolean */ arg0) {
  HasTextDirection.m_setRtl__$default__org_pepstock_charba_client_options_HasTextDirection__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setTextDirection__org_pepstock_charba_client_enums_TextDirection(/** TextDirection */ arg0) {
  HasTextDirection.m_setTextDirection__$default__org_pepstock_charba_client_options_HasTextDirection__org_pepstock_charba_client_enums_TextDirection(this, arg0);
 }
 
 static $clinit() {
  Legend.$clinit = () =>{};
  Legend.$loadModules();
  AbstractDefaultPluginElement.$clinit();
  HasTextDirection.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Legend;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Event = goog.module.get('org.pepstock.charba.client.enums.Event$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Legend.Property$impl');
  LegendLabels = goog.module.get('org.pepstock.charba.client.options.LegendLabels$impl');
  LegendTitle = goog.module.get('org.pepstock.charba.client.options.LegendTitle$impl');
  TextDirectionHandler = goog.module.get('org.pepstock.charba.client.options.TextDirectionHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultLegend.$markImplementor(Legend);
HasTextDirection.$markImplementor(Legend);
$Util.$setClassMetadata(Legend, "org.pepstock.charba.client.options.Legend");

exports = Legend;

//# sourceMappingURL=Legend.js.map
