goog.module('org.pepstock.charba.client.options.Options$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasCallbackScope = goog.require('org.pepstock.charba.client.commons.HasCallbackScope$impl');
const IsDefaultOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');
const HasAnimationOptions = goog.require('org.pepstock.charba.client.options.HasAnimationOptions$impl');
const HasSpanGaps = goog.require('org.pepstock.charba.client.options.HasSpanGaps$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ArrayEnumList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayEnumList$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Id = goog.forwardDeclare('org.pepstock.charba.client.commons.Id$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let DefaultPluginId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultPluginId$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.enums.Event$impl');
let IndexAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.IndexAxis$impl');
let CLocale = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocale$impl');
let CLocaleBuilder = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocaleBuilder$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Animation = goog.forwardDeclare('org.pepstock.charba.client.options.Animation$impl');
let AnimationContainer = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationContainer$impl');
let Animations = goog.forwardDeclare('org.pepstock.charba.client.options.Animations$impl');
let Datasets = goog.forwardDeclare('org.pepstock.charba.client.options.Datasets$impl');
let Decimation = goog.forwardDeclare('org.pepstock.charba.client.options.Decimation$impl');
let Elements = goog.forwardDeclare('org.pepstock.charba.client.options.Elements$impl');
let Filler = goog.forwardDeclare('org.pepstock.charba.client.options.Filler$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.options.Font$impl');
let Hover = goog.forwardDeclare('org.pepstock.charba.client.options.Hover$impl');
let Interaction = goog.forwardDeclare('org.pepstock.charba.client.options.Interaction$impl');
let Layout = goog.forwardDeclare('org.pepstock.charba.client.options.Layout$impl');
let Legend = goog.forwardDeclare('org.pepstock.charba.client.options.Legend$impl');
let CommonProperty = goog.forwardDeclare('org.pepstock.charba.client.options.Options.CommonProperty$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Options.Property$impl');
let Plugins = goog.forwardDeclare('org.pepstock.charba.client.options.Plugins$impl');
let SpanGapHandler = goog.forwardDeclare('org.pepstock.charba.client.options.SpanGapHandler$impl');
let Subtitle = goog.forwardDeclare('org.pepstock.charba.client.options.Subtitle$impl');
let Title = goog.forwardDeclare('org.pepstock.charba.client.options.Title$impl');
let Tooltips = goog.forwardDeclare('org.pepstock.charba.client.options.Tooltips$impl');
let Transitions = goog.forwardDeclare('org.pepstock.charba.client.options.Transitions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractModel<Options, IsDefaultOptions>}
 * @implements {IsDefaultOptions}
 * @implements {HasSpanGaps}
 * @implements {HasAnimationOptions}
 * @implements {HasCallbackScope}
 */
class Options extends AbstractModel {
 /** @protected */
 constructor() {
  super();
  /**@type {Legend}*/
  this.f_legend__org_pepstock_charba_client_options_Options_;
  /**@type {Hover}*/
  this.f_hover__org_pepstock_charba_client_options_Options_;
  /**@type {Interaction}*/
  this.f_interaction__org_pepstock_charba_client_options_Options_;
  /**@type {Layout}*/
  this.f_layout__org_pepstock_charba_client_options_Options_;
  /**@type {Elements}*/
  this.f_elements__org_pepstock_charba_client_options_Options_;
  /**@type {Title}*/
  this.f_title__org_pepstock_charba_client_options_Options_;
  /**@type {Subtitle}*/
  this.f_subtitle__org_pepstock_charba_client_options_Options_;
  /**@type {Tooltips}*/
  this.f_tooltips__org_pepstock_charba_client_options_Options_;
  /**@type {Decimation}*/
  this.f_decimation__org_pepstock_charba_client_options_Options_;
  /**@type {Filler}*/
  this.f_filler__org_pepstock_charba_client_options_Options_;
  /**@type {Plugins}*/
  this.f_plugins__org_pepstock_charba_client_options_Options_;
  /**@type {Font}*/
  this.f_font__org_pepstock_charba_client_options_Options_;
  /**@type {Datasets}*/
  this.f_datasets__org_pepstock_charba_client_options_Options_;
  /**@type {?string}*/
  this.f_scope__org_pepstock_charba_client_options_Options_;
  /**@type {SpanGapHandler}*/
  this.f_spanGapHandler__org_pepstock_charba_client_options_Options_;
  /**@type {AnimationContainer}*/
  this.f_animationContainer__org_pepstock_charba_client_options_Options_;
 }
 //Factory method corresponding to constructor 'Options(String, IsDefaultOptions)'.
 /** @return {!Options} */
 static $create__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultOptions(/** ?string */ scope, /** IsDefaultOptions */ defaultValues) {
  Options.$clinit();
  let $instance = new Options();
  $instance.$ctor__org_pepstock_charba_client_options_Options__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultOptions(scope, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'Options(String, IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_options_Options__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultOptions(/** ?string */ scope, /** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_options_Options__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(scope, defaultValues, null);
 }
 //Factory method corresponding to constructor 'Options(String, IsDefaultOptions, NativeObject)'.
 /** @return {!Options} */
 static $create__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** ?string */ scope, /** IsDefaultOptions */ defaultValues, /** ? */ nativeObject) {
  Options.$clinit();
  let $instance = new Options();
  $instance.$ctor__org_pepstock_charba_client_options_Options__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(scope, defaultValues, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'Options(String, IsDefaultOptions, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_options_Options__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** ?string */ scope, /** IsDefaultOptions */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(defaultValues, nativeObject);
  this.f_scope__org_pepstock_charba_client_options_Options_ = /**@type {?string}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(scope, "Scope argument"), j_l_String));
  this.f_elements__org_pepstock_charba_client_options_Options_ = Elements.$create__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultElements__org_pepstock_charba_client_commons_NativeObject(this, Property.f_ELEMENTS__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getElements__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_ELEMENTS__org_pepstock_charba_client_options_Options_Property));
  this.f_hover__org_pepstock_charba_client_options_Options_ = Hover.$create__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultInteraction__org_pepstock_charba_client_commons_NativeObject(this, Property.f_HOVER__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getHover__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_HOVER__org_pepstock_charba_client_options_Options_Property));
  this.f_interaction__org_pepstock_charba_client_options_Options_ = Interaction.$create__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultInteraction__org_pepstock_charba_client_commons_NativeObject(this, Property.f_INTERACTION__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getInteraction__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_INTERACTION__org_pepstock_charba_client_options_Options_Property));
  this.f_layout__org_pepstock_charba_client_options_Options_ = Layout.$create__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLayout__org_pepstock_charba_client_commons_NativeObject(this, Property.f_LAYOUT__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getLayout__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_LAYOUT__org_pepstock_charba_client_options_Options_Property));
  this.f_plugins__org_pepstock_charba_client_options_Options_ = Plugins.$create__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPlugins__org_pepstock_charba_client_commons_NativeObject(this, Property.f_PLUGINS__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getPlugins__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_PLUGINS__org_pepstock_charba_client_options_Options_Property));
  this.f_font__org_pepstock_charba_client_options_Options_ = Font.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(this, Property.f_FONT__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getFont__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_FONT__org_pepstock_charba_client_options_Options_Property));
  this.f_datasets__org_pepstock_charba_client_options_Options_ = Datasets.$create__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultDatasets__org_pepstock_charba_client_commons_NativeObject(this, Property.f_DATASETS__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getDatasets__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_DATASETS__org_pepstock_charba_client_options_Options_Property));
  this.f_spanGapHandler__org_pepstock_charba_client_options_Options_ = SpanGapHandler.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(this, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)), this.m_getNativeObject__());
  this.f_animationContainer__org_pepstock_charba_client_options_Options_ = AnimationContainer.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject__java_lang_String(this, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)), this.m_getNativeObject__(), this.f_scope__org_pepstock_charba_client_options_Options_);
  this.f_legend__org_pepstock_charba_client_options_Options_ = Legend.$create__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLegend__org_pepstock_charba_client_commons_NativeObject(this.f_plugins__org_pepstock_charba_client_options_Options_, DefaultPluginId.f_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getLegend__(), this.f_plugins__org_pepstock_charba_client_options_Options_.m_getDefaultPluginOptions__org_pepstock_charba_client_enums_DefaultPluginId_$pp_org_pepstock_charba_client_options(DefaultPluginId.f_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId));
  this.f_title__org_pepstock_charba_client_options_Options_ = Title.$create__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTitle__org_pepstock_charba_client_commons_NativeObject(this.f_plugins__org_pepstock_charba_client_options_Options_, DefaultPluginId.f_TITLE__org_pepstock_charba_client_enums_DefaultPluginId, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getTitle__(), this.f_plugins__org_pepstock_charba_client_options_Options_.m_getDefaultPluginOptions__org_pepstock_charba_client_enums_DefaultPluginId_$pp_org_pepstock_charba_client_options(DefaultPluginId.f_TITLE__org_pepstock_charba_client_enums_DefaultPluginId));
  this.f_subtitle__org_pepstock_charba_client_options_Options_ = Subtitle.$create__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultSubtitle__org_pepstock_charba_client_commons_NativeObject(this.f_plugins__org_pepstock_charba_client_options_Options_, DefaultPluginId.f_SUBTITLE__org_pepstock_charba_client_enums_DefaultPluginId, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getSubtitle__(), this.f_plugins__org_pepstock_charba_client_options_Options_.m_getDefaultPluginOptions__org_pepstock_charba_client_enums_DefaultPluginId_$pp_org_pepstock_charba_client_options(DefaultPluginId.f_SUBTITLE__org_pepstock_charba_client_enums_DefaultPluginId));
  this.f_tooltips__org_pepstock_charba_client_options_Options_ = Tooltips.$create__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTooltips__org_pepstock_charba_client_commons_NativeObject(this.f_plugins__org_pepstock_charba_client_options_Options_, DefaultPluginId.f_TOOLTIP__org_pepstock_charba_client_enums_DefaultPluginId, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getTooltips__(), this.f_plugins__org_pepstock_charba_client_options_Options_.m_getDefaultPluginOptions__org_pepstock_charba_client_enums_DefaultPluginId_$pp_org_pepstock_charba_client_options(DefaultPluginId.f_TOOLTIP__org_pepstock_charba_client_enums_DefaultPluginId));
  this.f_decimation__org_pepstock_charba_client_options_Options_ = Decimation.$create__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultDecimation__org_pepstock_charba_client_commons_NativeObject(this.f_plugins__org_pepstock_charba_client_options_Options_, DefaultPluginId.f_DECIMATION__org_pepstock_charba_client_enums_DefaultPluginId, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getDecimation__(), this.f_plugins__org_pepstock_charba_client_options_Options_.m_getDefaultPluginOptions__org_pepstock_charba_client_enums_DefaultPluginId_$pp_org_pepstock_charba_client_options(DefaultPluginId.f_DECIMATION__org_pepstock_charba_client_enums_DefaultPluginId));
  this.f_filler__org_pepstock_charba_client_options_Options_ = Filler.$create__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultFiller__org_pepstock_charba_client_commons_NativeObject(this.f_plugins__org_pepstock_charba_client_options_Options_, DefaultPluginId.f_FILLER__org_pepstock_charba_client_enums_DefaultPluginId, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getFiller__(), this.f_plugins__org_pepstock_charba_client_options_Options_.m_getDefaultPluginOptions__org_pepstock_charba_client_enums_DefaultPluginId_$pp_org_pepstock_charba_client_options(DefaultPluginId.f_FILLER__org_pepstock_charba_client_enums_DefaultPluginId));
 }
 /** @override @return {Font} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_options_Options_;
 }
 /** @override @return {SpanGapHandler} */
 m_getSpanGapHandler__() {
  return this.f_spanGapHandler__org_pepstock_charba_client_options_Options_;
 }
 /** @override @return {?string} */
 m_getScope__() {
  return this.f_scope__org_pepstock_charba_client_options_Options_;
 }
 /** @override @return {Animation} */
 m_getAnimation__() {
  return this.f_animationContainer__org_pepstock_charba_client_options_Options_.m_getAnimation__();
 }
 /** @override @return {AnimationContainer} */
 m_getAnimationContainer__() {
  return this.f_animationContainer__org_pepstock_charba_client_options_Options_;
 }
 /** @override @return {Legend} */
 m_getLegend__() {
  return this.f_legend__org_pepstock_charba_client_options_Options_;
 }
 /** @override @return {Hover} */
 m_getHover__() {
  return this.f_hover__org_pepstock_charba_client_options_Options_;
 }
 /** @override @return {Interaction} */
 m_getInteraction__() {
  return this.f_interaction__org_pepstock_charba_client_options_Options_;
 }
 /** @override @return {Layout} */
 m_getLayout__() {
  return this.f_layout__org_pepstock_charba_client_options_Options_;
 }
 /** @override @return {Decimation} */
 m_getDecimation__() {
  return this.f_decimation__org_pepstock_charba_client_options_Options_;
 }
 /** @override @return {Filler} */
 m_getFiller__() {
  return this.f_filler__org_pepstock_charba_client_options_Options_;
 }
 /** @override @return {Elements} */
 m_getElements__() {
  return this.f_elements__org_pepstock_charba_client_options_Options_;
 }
 /** @override @return {Title} */
 m_getTitle__() {
  return this.f_title__org_pepstock_charba_client_options_Options_;
 }
 /** @override @return {Subtitle} */
 m_getSubtitle__() {
  return this.f_subtitle__org_pepstock_charba_client_options_Options_;
 }
 /** @override @return {Tooltips} */
 m_getTooltips__() {
  return this.f_tooltips__org_pepstock_charba_client_options_Options_;
 }
 /** @override @return {Plugins} */
 m_getPlugins__() {
  return this.f_plugins__org_pepstock_charba_client_options_Options_;
 }
 /** @override @return {Datasets} */
 m_getDatasets__() {
  return this.f_datasets__org_pepstock_charba_client_options_Options_;
 }
 /** @return {?string} */
 m_getCharbaId__() {
  return Id.m_get__org_pepstock_charba_client_commons_NativeObjectContainer(this);
 }
 
 m_setEvents__arrayOf_org_pepstock_charba_client_enums_Event(/** Array<Event> */ events) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_EVENTS__org_pepstock_charba_client_options_Options_Property, ArrayString_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_Key(events));
 }
 /** @override @return {List<Event>} */
 m_getEvents__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_EVENTS__org_pepstock_charba_client_options_Options_Property), ArrayString_$Overlay));
  return !$Equality.$same(array, null) ? /**@type {ArrayEnumList<Event>}*/ (ArrayListHelper.m_list__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayString(Event.m_values__(), array)) : /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getEvents__();
 }
 
 m_setLocale__org_pepstock_charba_client_intl_CLocale(/** CLocale */ locale) {
  if (!$Equality.$same(locale, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(CommonProperty.f_LOCALE__org_pepstock_charba_client_options_Options_CommonProperty, locale.m_getIdentifier__());
  } else {
   this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(CommonProperty.f_LOCALE__org_pepstock_charba_client_options_Options_CommonProperty, CLocale.m_getDefault__().m_getIdentifier__());
  }
 }
 /** @override @return {CLocale} */
 m_getLocale__() {
  let localeIdentifier = this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(CommonProperty.f_LOCALE__org_pepstock_charba_client_options_Options_CommonProperty, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
  if (!$Equality.$same(localeIdentifier, null)) {
   return CLocaleBuilder.m_build__java_lang_String(localeIdentifier);
  }
  return /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getLocale__();
 }
 
 m_setResponsive__boolean(/** boolean */ responsive) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_RESPONSIVE__org_pepstock_charba_client_options_Options_Property, responsive);
 }
 /** @override @return {boolean} */
 m_isResponsive__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_RESPONSIVE__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_isResponsive__());
 }
 
 m_setMaintainAspectRatio__boolean(/** boolean */ maintainAspectRatio) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_MAINTAIN_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property, maintainAspectRatio);
 }
 /** @override @return {boolean} */
 m_isMaintainAspectRatio__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_MAINTAIN_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_isMaintainAspectRatio__());
 }
 
 m_setAspectRatio__double(/** number */ ratio) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property, Checker.m_positiveOrDefault__double__double(ratio, 1));
 }
 /** @override @return {number} */
 m_getAspectRatio__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_ASPECT_RATIO__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getAspectRatio__());
 }
 
 m_setResizeDelay__int(/** number */ delay) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_RESIZE_DELAY__org_pepstock_charba_client_options_Options_Property, Checker.m_positiveOrZero__int(0));
 }
 /** @override @return {number} */
 m_getResizeDelay__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_RESIZE_DELAY__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getResizeDelay__());
 }
 
 m_setDevicePixelRatio__double(/** number */ ratio) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_DEVICE_PIXEL_RATIO__org_pepstock_charba_client_options_Options_Property, Checker.m_positiveOrDefault__double__double(ratio, 1));
 }
 /** @override @return {number} */
 m_getDevicePixelRatio__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_DEVICE_PIXEL_RATIO__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getDevicePixelRatio__());
 }
 /** @override @return {boolean} */
 m_isDrawOnAttach__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_CHARBA_DRAW_ON_ATTACH__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_isDrawOnAttach__());
 }
 
 m_setDrawOnAttach__boolean(/** boolean */ drawOnAttach) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_CHARBA_DRAW_ON_ATTACH__org_pepstock_charba_client_options_Options_Property, drawOnAttach);
 }
 /** @override @return {boolean} */
 m_isDestroyOnDetach__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_CHARBA_DESTROY_ON_DETACH__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_isDestroyOnDetach__());
 }
 
 m_setDestroyOnDetach__boolean(/** boolean */ destroyOnDetach) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_CHARBA_DESTROY_ON_DETACH__org_pepstock_charba_client_options_Options_Property, destroyOnDetach);
 }
 
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setColor__java_lang_String(/** ?string */ color) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_options_Options_Property, color);
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getColorAsString__());
 }
 /** @return {IsColor} */
 m_getColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  this.m_setBackgroundColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(backgroundColor));
 }
 
 m_setBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_options_Options_Property, backgroundColor);
 }
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getBackgroundColorAsString__());
 }
 /** @return {IsColor} */
 m_getBackgroundColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBackgroundColorAsString__());
 }
 
 m_setBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ borderColor) {
  this.m_setBorderColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(borderColor));
 }
 
 m_setBorderColor__java_lang_String(/** ?string */ borderColor) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_options_Options_Property, borderColor);
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getBorderColorAsString__());
 }
 /** @return {IsColor} */
 m_getBorderColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBorderColorAsString__());
 }
 
 m_setShowLine__boolean(/** boolean */ showLine) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SHOW_LINE__org_pepstock_charba_client_options_Options_Property, showLine);
 }
 /** @override @return {boolean} */
 m_isShowLine__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SHOW_LINE__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_isShowLine__());
 }
 
 m_setSkipNull__boolean(/** boolean */ skipNull) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SKIP_NULL__org_pepstock_charba_client_options_Options_Property, skipNull);
 }
 /** @override @return {boolean} */
 m_isSkipNull__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SKIP_NULL__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_isSkipNull__());
 }
 
 m_setCutout__double(/** number */ cutout) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_CUTOUT__org_pepstock_charba_client_options_Options_Property, cutout);
 }
 /** @override @return {number} */
 m_getCutout__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_CUTOUT__org_pepstock_charba_client_options_Options_Property, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_CUTOUT__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getCutout__());
  }
  return /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getCutout__();
 }
 
 m_setCutoutPercentage__java_lang_String(/** ?string */ cutout) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_CUTOUT__org_pepstock_charba_client_options_Options_Property, cutout);
 }
 /** @override @return {?string} */
 m_getCutoutPercentage__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_CUTOUT__org_pepstock_charba_client_options_Options_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_CUTOUT__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getCutoutPercentage__());
  }
  return /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getCutoutPercentage__();
 }
 
 m_setRadius__double(/** number */ radius) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_RADIUS__org_pepstock_charba_client_options_Options_Property, Checker.m_positiveOrZero__double(radius));
 }
 /** @override @return {number} */
 m_getRadius__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_RADIUS__org_pepstock_charba_client_options_Options_Property, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_RADIUS__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getRadius__());
  }
  return /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getRadius__();
 }
 
 m_setRadiusPercentage__java_lang_String(/** ?string */ radius) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_RADIUS__org_pepstock_charba_client_options_Options_Property, radius);
 }
 /** @override @return {?string} */
 m_getRadiusPercentage__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_RADIUS__org_pepstock_charba_client_options_Options_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_RADIUS__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getRadiusPercentage__());
  }
  return /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getRadiusPercentage__();
 }
 
 m_setRotation__double(/** number */ rotation) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_ROTATION__org_pepstock_charba_client_options_Options_Property, rotation);
 }
 /** @override @return {number} */
 m_getRotation__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_ROTATION__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getRotation__());
 }
 
 m_setCircumference__double(/** number */ circumference) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_CIRCUMFERENCE__org_pepstock_charba_client_options_Options_Property, circumference);
 }
 /** @override @return {number} */
 m_getCircumference__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_CIRCUMFERENCE__org_pepstock_charba_client_options_Options_Property, /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getCircumference__());
 }
 
 m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(/** IndexAxis */ indexAxis) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_INDEX_AXIS__org_pepstock_charba_client_options_Options_Property, indexAxis);
 }
 /** @override @return {IndexAxis} */
 m_getIndexAxis__() {
  return /**@type {IndexAxis}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_INDEX_AXIS__org_pepstock_charba_client_options_Options_Property, IndexAxis.m_values__(), /**@type {IsDefaultOptions}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptions)).m_getIndexAxis__()), IndexAxis));
 }
 /** @override @return {boolean} */
 m_isSpanGaps__() {
  return this.f_spanGapHandler__org_pepstock_charba_client_options_Options_.m_isSpanGaps___$pp_org_pepstock_charba_client_options();
 }
 //Default method forwarding stub.
 /** @override @return {Animations} */
 m_getAnimations__() {
  return HasAnimationOptions.m_getAnimations__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {Transitions} */
 m_getTransitions__() {
  return HasAnimationOptions.m_getTransitions__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getSpanGaps__() {
  return HasSpanGaps.m_getSpanGaps__$default__org_pepstock_charba_client_options_HasSpanGaps(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setSpanGaps__boolean(/** boolean */ arg0) {
  HasSpanGaps.m_setSpanGaps__$default__org_pepstock_charba_client_options_HasSpanGaps__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setSpanGaps__double(/** number */ arg0) {
  HasSpanGaps.m_setSpanGaps__$default__org_pepstock_charba_client_options_HasSpanGaps__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isAnimationEnabled__() {
  return HasAnimationOptions.m_isAnimationEnabled__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setAnimationEnabled__boolean(/** boolean */ arg0) {
  HasAnimationOptions.m_setAnimationEnabled__$default__org_pepstock_charba_client_options_HasAnimationOptions__boolean(this, arg0);
 }
 
 static $clinit() {
  Options.$clinit = () =>{};
  Options.$loadModules();
  AbstractModel.$clinit();
  HasSpanGaps.$clinit();
  HasAnimationOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Options;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Id = goog.module.get('org.pepstock.charba.client.commons.Id$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  DefaultPluginId = goog.module.get('org.pepstock.charba.client.enums.DefaultPluginId$impl');
  Event = goog.module.get('org.pepstock.charba.client.enums.Event$impl');
  IndexAxis = goog.module.get('org.pepstock.charba.client.enums.IndexAxis$impl');
  CLocale = goog.module.get('org.pepstock.charba.client.intl.CLocale$impl');
  CLocaleBuilder = goog.module.get('org.pepstock.charba.client.intl.CLocaleBuilder$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  AnimationContainer = goog.module.get('org.pepstock.charba.client.options.AnimationContainer$impl');
  Datasets = goog.module.get('org.pepstock.charba.client.options.Datasets$impl');
  Decimation = goog.module.get('org.pepstock.charba.client.options.Decimation$impl');
  Elements = goog.module.get('org.pepstock.charba.client.options.Elements$impl');
  Filler = goog.module.get('org.pepstock.charba.client.options.Filler$impl');
  Font = goog.module.get('org.pepstock.charba.client.options.Font$impl');
  Hover = goog.module.get('org.pepstock.charba.client.options.Hover$impl');
  Interaction = goog.module.get('org.pepstock.charba.client.options.Interaction$impl');
  Layout = goog.module.get('org.pepstock.charba.client.options.Layout$impl');
  Legend = goog.module.get('org.pepstock.charba.client.options.Legend$impl');
  CommonProperty = goog.module.get('org.pepstock.charba.client.options.Options.CommonProperty$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Options.Property$impl');
  Plugins = goog.module.get('org.pepstock.charba.client.options.Plugins$impl');
  SpanGapHandler = goog.module.get('org.pepstock.charba.client.options.SpanGapHandler$impl');
  Subtitle = goog.module.get('org.pepstock.charba.client.options.Subtitle$impl');
  Title = goog.module.get('org.pepstock.charba.client.options.Title$impl');
  Tooltips = goog.module.get('org.pepstock.charba.client.options.Tooltips$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultOptions.$markImplementor(Options);
HasSpanGaps.$markImplementor(Options);
HasAnimationOptions.$markImplementor(Options);
HasCallbackScope.$markImplementor(Options);
$Util.$setClassMetadata(Options, "org.pepstock.charba.client.options.Options");

exports = Options;

//# sourceMappingURL=Options.js.map
