goog.module('org.pepstock.charba.client.options.AnimationCollection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimationCollection = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationCollection$impl');
const AbstractAnimation = goog.require('org.pepstock.charba.client.options.AbstractAnimation$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let FromCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FromCallback$impl');
let Scriptable = goog.forwardDeclare('org.pepstock.charba.client.callbacks.Scriptable$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let ToCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ToCallback$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let CallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
let HasCallbackScope = goog.forwardDeclare('org.pepstock.charba.client.commons.HasCallbackScope$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let AnimationType = goog.forwardDeclare('org.pepstock.charba.client.enums.AnimationType$impl');
let DefaultAnimationPropertyKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultAnimationPropertyKey$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationCollection.Property$impl');
let AnimationCollectionKey = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationCollectionKey$impl');
let AnimationPropertyKey = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationPropertyKey$impl');
let Animations = goog.forwardDeclare('org.pepstock.charba.client.options.Animations$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @extends {AbstractAnimation<AnimationCollectionKey, IsDefaultAnimationCollection>}
 * @implements {IsDefaultAnimationCollection}
 */
class AnimationCollection extends AbstractAnimation {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_fromCallbackProxy__org_pepstock_charba_client_options_AnimationCollection_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_toCallbackProxy__org_pepstock_charba_client_options_AnimationCollection_;
  /**@type {?string}*/
  this.f_scope__org_pepstock_charba_client_options_AnimationCollection_;
 }
 /** @return {!AnimationCollection} */
 static $create__org_pepstock_charba_client_options_Animations__org_pepstock_charba_client_options_AnimationCollectionKey__org_pepstock_charba_client_defaults_IsDefaultAnimationCollection__org_pepstock_charba_client_commons_NativeObject(/** Animations */ parent, /** AnimationCollectionKey */ childKey, /** IsDefaultAnimationCollection */ defaultValues, /** ? */ nativeObject) {
  AnimationCollection.$clinit();
  let $instance = new AnimationCollection();
  $instance.$ctor__org_pepstock_charba_client_options_AnimationCollection__org_pepstock_charba_client_options_Animations__org_pepstock_charba_client_options_AnimationCollectionKey__org_pepstock_charba_client_defaults_IsDefaultAnimationCollection__org_pepstock_charba_client_commons_NativeObject(parent, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_AnimationCollection__org_pepstock_charba_client_options_Animations__org_pepstock_charba_client_options_AnimationCollectionKey__org_pepstock_charba_client_defaults_IsDefaultAnimationCollection__org_pepstock_charba_client_commons_NativeObject(/** Animations */ parent, /** AnimationCollectionKey */ childKey, /** IsDefaultAnimationCollection */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractAnimation__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultBaseAnimation__org_pepstock_charba_client_commons_NativeObject(parent, childKey, defaultValues, nativeObject);
  this.$init___$p_org_pepstock_charba_client_options_AnimationCollection();
  this.f_scope__org_pepstock_charba_client_options_AnimationCollection_ = HasCallbackScope.m_extractScope__org_pepstock_charba_client_commons_AbstractNode(parent);
  this.m_setProperties__java_util_List(AnimationCollectionKey.m_checkAndGetIfValid__org_pepstock_charba_client_options_AnimationCollectionKey(childKey).m_properties__());
  this.f_fromCallbackProxy__org_pepstock_charba_client_options_AnimationCollection_.callback = (/** ? */ context) =>{
   return this.m_onCallback__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_options_AnimationCollection(DatasetContext.$create__org_pepstock_charba_client_commons_NativeObject(context), this.m_getFromCallback__(), Property.f_FROM__org_pepstock_charba_client_options_AnimationCollection_Property);
  };
  this.f_toCallbackProxy__org_pepstock_charba_client_options_AnimationCollection_.callback = (/** ? */ context_1) =>{
   return this.m_onCallback__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_options_AnimationCollection(DatasetContext.$create__org_pepstock_charba_client_commons_NativeObject(context_1), this.m_getToCallback__(), Property.f_TO__org_pepstock_charba_client_options_AnimationCollection_Property);
  };
 }
 
 m_setType__org_pepstock_charba_client_enums_AnimationType(/** AnimationType */ type) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_options_AnimationCollection_Property, type);
 }
 /** @override @return {AnimationType} */
 m_getType__() {
  return /**@type {AnimationType}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_options_AnimationCollection_Property, AnimationType.m_values__(), /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getType__()), AnimationType));
 }
 
 m_setFrom__boolean(/** boolean */ from) {
  this.m_setFrom__org_pepstock_charba_client_callbacks_FromCallback(/**@type {FromCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_FROM__org_pepstock_charba_client_options_AnimationCollection_Property, from);
 }
 
 m_setFrom__double(/** number */ from) {
  this.m_setFrom__org_pepstock_charba_client_callbacks_FromCallback(/**@type {FromCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_FROM__org_pepstock_charba_client_options_AnimationCollection_Property, from);
 }
 
 m_setFrom__java_lang_String(/** ?string */ from) {
  this.m_setFrom__org_pepstock_charba_client_callbacks_FromCallback(/**@type {FromCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_FROM__org_pepstock_charba_client_options_AnimationCollection_Property, from);
 }
 
 m_setFrom__org_pepstock_charba_client_colors_IsColor(/** IsColor */ from) {
  this.m_setFrom__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(from));
 }
 /** @override @return {number} */
 m_getFrom__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_FROM__org_pepstock_charba_client_options_AnimationCollection_Property, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_FROM__org_pepstock_charba_client_options_AnimationCollection_Property, /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getFrom__());
  }
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getFrom__();
 }
 /** @override @return {boolean} */
 m_getFromAsBoolean__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_FROM__org_pepstock_charba_client_options_AnimationCollection_Property, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_FROM__org_pepstock_charba_client_options_AnimationCollection_Property, /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getFromAsBoolean__());
  }
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getFromAsBoolean__();
 }
 /** @override @return {?string} */
 m_getFromAsString__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_FROM__org_pepstock_charba_client_options_AnimationCollection_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_FROM__org_pepstock_charba_client_options_AnimationCollection_Property, /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getFromAsString__());
  }
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getFromAsString__();
 }
 /** @return {IsColor} */
 m_getFromAsColor__() {
  let fromAsString = this.m_getFromAsString__();
  if (!$Equality.$same(fromAsString, null)) {
   return ColorBuilder.m_parse__java_lang_String(fromAsString);
  }
  return null;
 }
 
 m_setTo__boolean(/** boolean */ to) {
  this.m_setTo__org_pepstock_charba_client_callbacks_ToCallback(/**@type {ToCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_TO__org_pepstock_charba_client_options_AnimationCollection_Property, to);
 }
 
 m_setTo__double(/** number */ to) {
  this.m_setTo__org_pepstock_charba_client_callbacks_ToCallback(/**@type {ToCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_TO__org_pepstock_charba_client_options_AnimationCollection_Property, to);
 }
 
 m_setTo__java_lang_String(/** ?string */ to) {
  this.m_setTo__org_pepstock_charba_client_callbacks_ToCallback(/**@type {ToCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TO__org_pepstock_charba_client_options_AnimationCollection_Property, to);
 }
 
 m_setTo__org_pepstock_charba_client_colors_IsColor(/** IsColor */ to) {
  this.m_setTo__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(to));
 }
 /** @override @return {number} */
 m_getTo__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_TO__org_pepstock_charba_client_options_AnimationCollection_Property, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_TO__org_pepstock_charba_client_options_AnimationCollection_Property, /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getTo__());
  }
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getTo__();
 }
 /** @override @return {boolean} */
 m_getToAsBoolean__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_TO__org_pepstock_charba_client_options_AnimationCollection_Property, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_TO__org_pepstock_charba_client_options_AnimationCollection_Property, /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getToAsBoolean__());
  }
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getToAsBoolean__();
 }
 /** @override @return {?string} */
 m_getToAsString__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_TO__org_pepstock_charba_client_options_AnimationCollection_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TO__org_pepstock_charba_client_options_AnimationCollection_Property, /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getToAsString__());
  }
  return /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getToAsString__();
 }
 /** @return {IsColor} */
 m_getToAsColor__() {
  let fromAsString = this.m_getToAsString__();
  if (!$Equality.$same(fromAsString, null)) {
   return ColorBuilder.m_parse__java_lang_String(fromAsString);
  }
  return null;
 }
 
 m_setProperties__arrayOf_org_pepstock_charba_client_options_AnimationPropertyKey(/** Array<AnimationPropertyKey> */ properties) {
  if (!$Equality.$same(properties, null) && properties.length > 0) {
   let array = ArrayString_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_commons_Key(properties);
   this.m_setArrayValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_PROPERTIES__org_pepstock_charba_client_options_AnimationCollection_Property, array);
  }
 }
 
 m_setProperties__java_util_List(/** List<AnimationPropertyKey> */ properties) {
  if (!$Equality.$same(properties, null) && !properties.isEmpty()) {
   let array = ArrayString_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_commons_Key(/**@type {Array<Key>}*/ ($Arrays.$castTo(properties.m_toArray__arrayOf_java_lang_Object(/**@type {!Array<AnimationPropertyKey>}*/ ($Arrays.$create([0], AnimationPropertyKey))), Key, 1)));
   this.m_setArrayValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_PROPERTIES__org_pepstock_charba_client_options_AnimationCollection_Property, array);
  }
 }
 /** @override @return {List<AnimationPropertyKey>} */
 m_getProperties__() {
  let result = /**@type {!LinkedList<AnimationPropertyKey>}*/ (LinkedList.$create__());
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_PROPERTIES__org_pepstock_charba_client_options_AnimationCollection_Property), ArrayString_$Overlay));
  if (array.length > 0) {
   for (let i = 0; i < array.length; i = i + 1 | 0) {
    let property = ArrayString_$Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayString__int(array, i);
    if (DefaultAnimationPropertyKey.m_is__java_lang_String(property)) {
     result.add(/**@type {DefaultAnimationPropertyKey}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(DefaultAnimationPropertyKey.m_values__(), property), DefaultAnimationPropertyKey)));
    } else {
     result.add(AnimationPropertyKey.m_create__java_lang_String__org_pepstock_charba_client_enums_AnimationType(property, this.m_getType__()));
    }
   }
  }
  return result;
 }
 /** @override @return {FromCallback} */
 m_getFromCallback__() {
  return /**@type {FromCallback}*/ ($Casts.$to(AnimationCollection.f_FROM_PROPERTY_HANDLER__org_pepstock_charba_client_options_AnimationCollection_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getFromCallback__()), FromCallback));
 }
 
 m_setFrom__org_pepstock_charba_client_callbacks_FromCallback(/** FromCallback */ fromCallback) {
  AnimationCollection.f_FROM_PROPERTY_HANDLER__org_pepstock_charba_client_options_AnimationCollection_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, this.f_scope__org_pepstock_charba_client_options_AnimationCollection_, fromCallback, this.f_fromCallbackProxy__org_pepstock_charba_client_options_AnimationCollection_.proxy);
 }
 
 m_setFrom__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ fromCallback) {
  this.m_setFrom__org_pepstock_charba_client_callbacks_FromCallback(/**@type {FromCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_FROM__org_pepstock_charba_client_options_AnimationCollection_Property, fromCallback);
 }
 /** @override @return {ToCallback} */
 m_getToCallback__() {
  return /**@type {ToCallback}*/ ($Casts.$to(AnimationCollection.f_TO_PROPERTY_HANDLER__org_pepstock_charba_client_options_AnimationCollection_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getToCallback__()), ToCallback));
 }
 
 m_setTo__org_pepstock_charba_client_callbacks_ToCallback(/** ToCallback */ toCallback) {
  AnimationCollection.f_TO_PROPERTY_HANDLER__org_pepstock_charba_client_options_AnimationCollection_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, this.f_scope__org_pepstock_charba_client_options_AnimationCollection_, toCallback, this.f_toCallbackProxy__org_pepstock_charba_client_options_AnimationCollection_.proxy);
 }
 
 m_setTo__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ toCallback) {
  this.m_setTo__org_pepstock_charba_client_callbacks_ToCallback(/**@type {ToCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_TO__org_pepstock_charba_client_options_AnimationCollection_Property, toCallback);
 }
 /** @return {*} */
 m_onCallback__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_options_AnimationCollection(/** DatasetContext */ context, /** Scriptable<*, DatasetContext> */ callback, /** Key */ property) {
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(property);
  if (!$Equality.$same(callback, null)) {
   let result = ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, callback);
   if (Double.$isInstance(result) || Boolean.$isInstance(result) || j_l_String.$isInstance(result)) {
    return result;
   } else if (IsColor.$isInstance(result)) {
    let color = /**@type {IsColor}*/ ($Casts.$to(result, IsColor));
    return color.m_toRGBA__();
   }
  }
  let type = this.m_getType__();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(AnimationType.f_NUMBER__org_pepstock_charba_client_enums_AnimationType, type)) {
   return $Objects.m_equals__java_lang_Object__java_lang_Object(Property.f_FROM__org_pepstock_charba_client_options_AnimationCollection_Property, property) ? /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getFrom__() : /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getTo__();
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(AnimationType.f_BOOLEAN__org_pepstock_charba_client_enums_AnimationType, type)) {
   return $Objects.m_equals__java_lang_Object__java_lang_Object(Property.f_FROM__org_pepstock_charba_client_options_AnimationCollection_Property, property) ? /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getFromAsBoolean__() : /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getToAsBoolean__();
  }
  return $Objects.m_equals__java_lang_Object__java_lang_Object(Property.f_FROM__org_pepstock_charba_client_options_AnimationCollection_Property, property) ? /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getFromAsString__() : /**@type {IsDefaultAnimationCollection}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAnimationCollection)).m_getToAsString__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_options_AnimationCollection() {
  this.f_fromCallbackProxy__org_pepstock_charba_client_options_AnimationCollection_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_toCallbackProxy__org_pepstock_charba_client_options_AnimationCollection_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 
 static $clinit() {
  AnimationCollection.$clinit = () =>{};
  AnimationCollection.$loadModules();
  AbstractAnimation.$clinit();
  AnimationCollection.f_FROM_PROPERTY_HANDLER__org_pepstock_charba_client_options_AnimationCollection_ = /**@type {!CallbackPropertyHandler<FromCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_FROM__org_pepstock_charba_client_options_AnimationCollection_Property));
  AnimationCollection.f_TO_PROPERTY_HANDLER__org_pepstock_charba_client_options_AnimationCollection_ = /**@type {!CallbackPropertyHandler<ToCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_TO__org_pepstock_charba_client_options_AnimationCollection_Property));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnimationCollection;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  FromCallback = goog.module.get('org.pepstock.charba.client.callbacks.FromCallback$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  ToCallback = goog.module.get('org.pepstock.charba.client.callbacks.ToCallback$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  CallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
  HasCallbackScope = goog.module.get('org.pepstock.charba.client.commons.HasCallbackScope$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  AnimationType = goog.module.get('org.pepstock.charba.client.enums.AnimationType$impl');
  DefaultAnimationPropertyKey = goog.module.get('org.pepstock.charba.client.enums.DefaultAnimationPropertyKey$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.AnimationCollection.Property$impl');
  AnimationCollectionKey = goog.module.get('org.pepstock.charba.client.options.AnimationCollectionKey$impl');
  AnimationPropertyKey = goog.module.get('org.pepstock.charba.client.options.AnimationPropertyKey$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@type {CallbackPropertyHandler<FromCallback>}*/
AnimationCollection.f_FROM_PROPERTY_HANDLER__org_pepstock_charba_client_options_AnimationCollection_;
/**@type {CallbackPropertyHandler<ToCallback>}*/
AnimationCollection.f_TO_PROPERTY_HANDLER__org_pepstock_charba_client_options_AnimationCollection_;
IsDefaultAnimationCollection.$markImplementor(AnimationCollection);
$Util.$setClassMetadata(AnimationCollection, "org.pepstock.charba.client.options.AnimationCollection");

exports = AnimationCollection;

//# sourceMappingURL=AnimationCollection.js.map
