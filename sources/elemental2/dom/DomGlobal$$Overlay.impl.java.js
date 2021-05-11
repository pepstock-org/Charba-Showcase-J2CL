goog.module('elemental2.dom.DomGlobal.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions(/** Blob */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double(/** Blob */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double(/** Blob */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double(/** Blob */ image, /** ? */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType(/** Blob */ image, /** ? */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions(/** Blob */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_ImageBitmapOptions__double__double__double(/** Blob */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_ImageBitmapOptions__double__double(/** Blob */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_ImageBitmapOptions__double(/** Blob */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_ImageBitmapOptions(/** Blob */ image, /** ImageBitmapOptions */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__double__double__double__double__elemental2_dom_ImageBitmapOptions(/** Blob */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__double__double__double__double(/** Blob */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__double__double__double(/** Blob */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__double__double(/** Blob */ image, /** number */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__double(/** Blob */ image, /** number */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob(/** Blob */ image) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions(/** CanvasRenderingContext2D */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double(/** CanvasRenderingContext2D */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double(/** CanvasRenderingContext2D */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double(/** CanvasRenderingContext2D */ image, /** ? */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType(/** CanvasRenderingContext2D */ image, /** ? */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions(/** CanvasRenderingContext2D */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_ImageBitmapOptions__double__double__double(/** CanvasRenderingContext2D */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_ImageBitmapOptions__double__double(/** CanvasRenderingContext2D */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_ImageBitmapOptions__double(/** CanvasRenderingContext2D */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_ImageBitmapOptions(/** CanvasRenderingContext2D */ image, /** ImageBitmapOptions */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__double__double__double__double__elemental2_dom_ImageBitmapOptions(/** CanvasRenderingContext2D */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__double__double__double__double(/** CanvasRenderingContext2D */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__double__double__double(/** CanvasRenderingContext2D */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__double__double(/** CanvasRenderingContext2D */ image, /** number */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__double(/** CanvasRenderingContext2D */ image, /** number */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D(/** CanvasRenderingContext2D */ image) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions(/** ? */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__elemental2_dom_ImageBitmapOptions__double__double__double(/** ? */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__elemental2_dom_ImageBitmapOptions__double__double(/** ? */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__elemental2_dom_ImageBitmapOptions__double(/** ? */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__elemental2_dom_ImageBitmapOptions(/** ? */ image, /** ImageBitmapOptions */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__double__double__double__double__elemental2_dom_ImageBitmapOptions(/** ? */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__double__double__double__double(/** ? */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__double__double__double(/** ? */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__double__double(/** ? */ image, /** number */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__double(/** ? */ image, /** number */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLCanvasElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double(/** HTMLCanvasElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double(/** HTMLCanvasElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double(/** HTMLCanvasElement */ image, /** ? */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType(/** HTMLCanvasElement */ image, /** ? */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLCanvasElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_ImageBitmapOptions__double__double__double(/** HTMLCanvasElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_ImageBitmapOptions__double__double(/** HTMLCanvasElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_ImageBitmapOptions__double(/** HTMLCanvasElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_ImageBitmapOptions(/** HTMLCanvasElement */ image, /** ImageBitmapOptions */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLCanvasElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double__double__double__double(/** HTMLCanvasElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double__double__double(/** HTMLCanvasElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double__double(/** HTMLCanvasElement */ image, /** number */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double(/** HTMLCanvasElement */ image, /** number */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement(/** HTMLCanvasElement */ image) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLImageElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double(/** HTMLImageElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double(/** HTMLImageElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double(/** HTMLImageElement */ image, /** ? */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType(/** HTMLImageElement */ image, /** ? */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLImageElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_ImageBitmapOptions__double__double__double(/** HTMLImageElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_ImageBitmapOptions__double__double(/** HTMLImageElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_ImageBitmapOptions__double(/** HTMLImageElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_ImageBitmapOptions(/** HTMLImageElement */ image, /** ImageBitmapOptions */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLImageElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double__double__double__double(/** HTMLImageElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double__double__double(/** HTMLImageElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double__double(/** HTMLImageElement */ image, /** number */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double(/** HTMLImageElement */ image, /** number */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement(/** HTMLImageElement */ image) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLVideoElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double(/** HTMLVideoElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double(/** HTMLVideoElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double(/** HTMLVideoElement */ image, /** ? */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType(/** HTMLVideoElement */ image, /** ? */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLVideoElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_ImageBitmapOptions__double__double__double(/** HTMLVideoElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_ImageBitmapOptions__double__double(/** HTMLVideoElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_ImageBitmapOptions__double(/** HTMLVideoElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_ImageBitmapOptions(/** HTMLVideoElement */ image, /** ImageBitmapOptions */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLVideoElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double__double__double__double(/** HTMLVideoElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double__double__double(/** HTMLVideoElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double__double(/** HTMLVideoElement */ image, /** number */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double(/** HTMLVideoElement */ image, /** number */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement(/** HTMLVideoElement */ image) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions(/** ImageBitmap */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double(/** ImageBitmap */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double(/** ImageBitmap */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double(/** ImageBitmap */ image, /** ? */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType(/** ImageBitmap */ image, /** ? */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions(/** ImageBitmap */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_ImageBitmapOptions__double__double__double(/** ImageBitmap */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_ImageBitmapOptions__double__double(/** ImageBitmap */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_ImageBitmapOptions__double(/** ImageBitmap */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_ImageBitmapOptions(/** ImageBitmap */ image, /** ImageBitmapOptions */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double__double__double__double__elemental2_dom_ImageBitmapOptions(/** ImageBitmap */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double__double__double__double(/** ImageBitmap */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double__double__double(/** ImageBitmap */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double__double(/** ImageBitmap */ image, /** number */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double(/** ImageBitmap */ image, /** number */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap(/** ImageBitmap */ image) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions(/** ImageData */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double(/** ImageData */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double(/** ImageData */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double(/** ImageData */ image, /** ? */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType(/** ImageData */ image, /** ? */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions(/** ImageData */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_ImageBitmapOptions__double__double__double(/** ImageData */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_ImageBitmapOptions__double__double(/** ImageData */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_ImageBitmapOptions__double(/** ImageData */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_ImageBitmapOptions(/** ImageData */ image, /** ImageBitmapOptions */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__double__double__double__double__elemental2_dom_ImageBitmapOptions(/** ImageData */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__double__double__double__double(/** ImageData */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__double__double__double(/** ImageData */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__double__double(/** ImageData */ image, /** number */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__double(/** ImageData */ image, /** number */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData(/** ImageData */ image) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /** @return {Promise<Response>} */
 static m_fetch__elemental2_dom_Request__elemental2_dom_RequestInit(/** Request */ input, /** RequestInit */ init) {
  $Overlay.$clinit();
  return goog.global.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)), init);
 }
 /** @return {Promise<Response>} */
 static m_fetch__elemental2_dom_Request(/** Request */ input) {
  $Overlay.$clinit();
  return goog.global.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)));
 }
 /** @return {Promise<Response>} */
 static m_fetch__java_lang_String__elemental2_dom_RequestInit(/** ?string */ input, /** RequestInit */ init) {
  $Overlay.$clinit();
  return goog.global.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)), init);
 }
 /** @return {Promise<Response>} */
 static m_fetch__java_lang_String(/** ?string */ input) {
  $Overlay.$clinit();
  return goog.global.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)));
 }
 
 static m_importScripts__arrayOf_java_lang_String(/** Array<?string> */ var_args) {
  $Overlay.$clinit();
  goog.global.importScripts(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(var_args))));
 }
 
 static m_importScripts__arrayOf_elemental2_dom_TrustedScriptURL(/** Array<TrustedScriptURL> */ var_args) {
  $Overlay.$clinit();
  goog.global.importScripts(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(var_args))));
 }
 /** @return {Database} */
 static m_openDatabase__java_lang_String__java_lang_String__java_lang_String__int__elemental2_dom_DatabaseCallback(/** ?string */ name, /** ?string */ version, /** ?string */ description, /** number */ size, /** DatabaseCallback */ callback) {
  $Overlay.$clinit();
  return goog.global.openDatabase(name, version, description, size, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /** @return {Database} */
 static m_openDatabase__java_lang_String__java_lang_String__java_lang_String__int__elemental2_dom_DomGlobal_OpenDatabaseCallbackFn(/** ?string */ name, /** ?string */ version, /** ?string */ description, /** number */ size, /** ?function(Database):* */ callback) {
  $Overlay.$clinit();
  return goog.global.openDatabase(name, version, description, size, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 
 static m_postMessage__java_lang_Object__elemental2_core_JsArray__elemental2_core_JsArray(/** * */ message, /** Array<Transferable> */ targetOriginOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__elemental2_core_JsArray__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType(/** * */ message, /** Array<Transferable> */ targetOriginOrTransfer, /** ? */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), targetOriginOrPortsOrTransfer);
 }
 
 static m_postMessage__java_lang_Object__elemental2_core_JsArray__java_lang_String(/** * */ message, /** Array<Transferable> */ targetOriginOrTransfer, /** ?string */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__elemental2_core_JsArray(/** * */ message, /** Array<Transferable> */ targetOriginOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__elemental2_dom_DomGlobal_PostMessageTargetOriginOrTransferUnionType__elemental2_core_JsArray(/** * */ message, /** ? */ targetOriginOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, targetOriginOrTransfer, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__elemental2_dom_DomGlobal_PostMessageTargetOriginOrTransferUnionType__arrayOf_java_lang_Object(/** * */ message, /** ? */ targetOriginOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  $Overlay.m_postMessage__java_lang_Object__elemental2_dom_DomGlobal_PostMessageTargetOriginOrTransferUnionType__elemental2_core_JsArray(message, targetOriginOrTransfer, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__elemental2_dom_DomGlobal_PostMessageTargetOriginOrTransferUnionType__java_lang_String(/** * */ message, /** ? */ targetOriginOrTransfer, /** ?string */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, targetOriginOrTransfer, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__java_lang_String__elemental2_core_JsArray(/** * */ message, /** ?string */ targetOriginOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__java_lang_String__arrayOf_java_lang_Object(/** * */ message, /** ?string */ targetOriginOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  $Overlay.m_postMessage__java_lang_Object__java_lang_String__elemental2_core_JsArray(message, targetOriginOrTransfer, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__java_lang_String__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType(/** * */ message, /** ?string */ targetOriginOrTransfer, /** ? */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), targetOriginOrPortsOrTransfer);
 }
 
 static m_postMessage__java_lang_Object__java_lang_String__java_lang_String(/** * */ message, /** ?string */ targetOriginOrTransfer, /** ?string */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__java_lang_String(/** * */ message, /** ?string */ targetOriginOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__arrayOf_elemental2_core_Transferable__arrayOf_java_lang_Object(/** * */ message, /** Array<Transferable> */ targetOriginOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  $Overlay.m_postMessage__java_lang_Object__elemental2_core_JsArray__elemental2_core_JsArray(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__arrayOf_elemental2_core_Transferable__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType(/** * */ message, /** Array<Transferable> */ targetOriginOrTransfer, /** ? */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  $Overlay.m_postMessage__java_lang_Object__elemental2_core_JsArray__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), targetOriginOrPortsOrTransfer);
 }
 
 static m_postMessage__java_lang_Object__arrayOf_elemental2_core_Transferable__java_lang_String(/** * */ message, /** Array<Transferable> */ targetOriginOrTransfer, /** ?string */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  $Overlay.m_postMessage__java_lang_Object__elemental2_core_JsArray__java_lang_String(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), targetOriginOrPortsOrTransfer);
 }
 
 static m_postMessage__java_lang_Object__arrayOf_elemental2_core_Transferable(/** * */ message, /** Array<Transferable> */ targetOriginOrTransfer) {
  $Overlay.$clinit();
  $Overlay.m_postMessage__java_lang_Object__elemental2_core_JsArray(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)));
 }
 /** @return {number} */
 static m_requestIdleCallback__elemental2_dom_DomGlobal_RequestIdleCallbackCallbackFn__elemental2_dom_IdleCallbackOptions(/** ?function(IdleDeadline):void */ callback, /** IdleCallbackOptions */ options) {
  $Overlay.$clinit();
  return goog.global.requestIdleCallback(callback, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /** @return {number} */
 static m_requestIdleCallback__elemental2_dom_DomGlobal_RequestIdleCallbackCallbackFn__int(/** ?function(IdleDeadline):void */ callback, /** number */ options) {
  $Overlay.$clinit();
  return goog.global.requestIdleCallback(callback, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /** @return {number} */
 static m_setInterval__elemental2_dom_DomGlobal_SetIntervalCallbackFn__double__arrayOf_java_lang_Object(/** ?function(...*):void */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  $Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /** @return {number} */
 static m_setInterval__elemental2_dom_DomGlobal_SetIntervalCallbackFn(/** ?function(...*):void */ callback) {
  $Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /** @return {number} */
 static m_setInterval__java_lang_String__double__arrayOf_java_lang_Object(/** ?string */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  $Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /** @return {number} */
 static m_setInterval__java_lang_String(/** ?string */ callback) {
  $Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /** @return {number} */
 static m_setInterval__elemental2_dom_TrustedScript__double__arrayOf_java_lang_Object(/** TrustedScript */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  $Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /** @return {number} */
 static m_setInterval__elemental2_dom_TrustedScript(/** TrustedScript */ callback) {
  $Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /** @return {number} */
 static m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object(/** ?function(...*):void */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  $Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /** @return {number} */
 static m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn(/** ?function(...*):void */ callback) {
  $Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /** @return {number} */
 static m_setTimeout__java_lang_String__double__arrayOf_java_lang_Object(/** ?string */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  $Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /** @return {number} */
 static m_setTimeout__java_lang_String(/** ?string */ callback) {
  $Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /** @return {number} */
 static m_setTimeout__elemental2_dom_TrustedScript__double__arrayOf_java_lang_Object(/** TrustedScript */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  $Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /** @return {number} */
 static m_setTimeout__elemental2_dom_TrustedScript(/** TrustedScript */ callback) {
  $Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /** @return {HTMLDocument} */
 static get f_document__elemental2_dom_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_document__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @return {boolean} */
 static get f_isSecureContext__elemental2_dom_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_isSecureContext__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @return {Location} */
 static get f_location__elemental2_dom_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_location__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @return {Navigator} */
 static get f_navigator__elemental2_dom_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_navigator__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @return {Screen} */
 static get f_screen__elemental2_dom_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_screen__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @return {Window} */
 static get f_self__elemental2_dom_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_self__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @return {Window} */
 static get f_top__elemental2_dom_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_top__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @return {VisualViewport} */
 static get f_visualViewport__elemental2_dom_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_visualViewport__elemental2_dom_DomGlobal_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_document__elemental2_dom_DomGlobal_$Overlay = goog.global.document;
  $Overlay.$static_isSecureContext__elemental2_dom_DomGlobal_$Overlay = goog.global.isSecureContext;
  $Overlay.$static_location__elemental2_dom_DomGlobal_$Overlay = goog.global.location;
  $Overlay.$static_navigator__elemental2_dom_DomGlobal_$Overlay = goog.global.navigator;
  $Overlay.$static_screen__elemental2_dom_DomGlobal_$Overlay = goog.global.screen;
  $Overlay.$static_self__elemental2_dom_DomGlobal_$Overlay = goog.global.self;
  $Overlay.$static_top__elemental2_dom_DomGlobal_$Overlay = goog.global.top;
  $Overlay.$static_visualViewport__elemental2_dom_DomGlobal_$Overlay = goog.global.visualViewport;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof goog.global;
 }
 
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
/**@private {HTMLDocument}*/
$Overlay.$static_document__elemental2_dom_DomGlobal_$Overlay;
/**@private {boolean}*/
$Overlay.$static_isSecureContext__elemental2_dom_DomGlobal_$Overlay = false;
/**@private {Location}*/
$Overlay.$static_location__elemental2_dom_DomGlobal_$Overlay;
/**@private {Navigator}*/
$Overlay.$static_navigator__elemental2_dom_DomGlobal_$Overlay;
/**@private {Screen}*/
$Overlay.$static_screen__elemental2_dom_DomGlobal_$Overlay;
/**@private {Window}*/
$Overlay.$static_self__elemental2_dom_DomGlobal_$Overlay;
/**@private {Window}*/
$Overlay.$static_top__elemental2_dom_DomGlobal_$Overlay;
/**@private {VisualViewport}*/
$Overlay.$static_visualViewport__elemental2_dom_DomGlobal_$Overlay;
$Util.$setClassMetadata($Overlay, "goog.global");

exports = $Overlay;

//# sourceMappingURL=DomGlobal$$Overlay.js.map
