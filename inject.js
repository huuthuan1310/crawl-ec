(window.webpackJsonp = window.webpackJsonp || []).push([
  [55, 58, 134],
  {
    515: function (t, e, r) {
      t.exports = {};
    },
    519: function (t, e, r) {
      "use strict";
      r(515);
    },
    522: function (t, e, r) {
      "use strict";
      r.r(e);
      r(47);
      var o = {
          name: "RightContent",
          props: {
            data: {
              type: Object,
              default: function () {
                return {};
              },
            },
          },
          data: function () {
            return {
              placeHolder:
                "https://cdn2.cellphones.com.vn/90x65/media/wysiwyg/placehoder.png",
            };
          },
        },
        n = (r(519), r(42)),
        component = Object(n.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "block-sforum",
              },
              [
                e(
                  "div",
                  {
                    staticClass: "sforum__title",
                  },
                  [
                    e("RenderHtml", {
                      staticClass: "icon",
                      attrs: {
                        html: t.$icons().NewsPaper,
                      },
                    }),
                    t._v("\n    " + t._s(t.data.title) + "\n  "),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass: "sforum__content",
                  },
                  t._l(t.data.dataItem.slice(0, 5), function (r, o) {
                    return e(
                      "a",
                      t._b(
                        {
                          key: o,
                          staticClass:
                            "sforum__content-item button__link is-flex",
                          attrs: {
                            target: "_blank",
                          },
                        },
                        "a",
                        {
                          href: r.post_name,
                        },
                        !1
                      ),
                      [
                        e("nuxt-img", {
                          staticClass: "content-item__img",
                          attrs: {
                            src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:100/plain/".concat(
                              r.image
                            ),
                            alt: r.post_title,
                            loading: "lazy",
                          },
                        }),
                        t._v(" "),
                        e("RenderHtml", {
                          staticClass: "content-item__text",
                          attrs: {
                            html: r.post_title,
                          },
                        }),
                      ],
                      1
                    );
                  }),
                  0
                ),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass: "block-sforum_btn-showmore",
                  },
                  [
                    e(
                      "a",
                      t._b(
                        {
                          staticClass: "btn-show-more button__link",
                          attrs: {
                            target: "_blank",
                          },
                        },
                        "a",
                        {
                          href: "https://cellphones.com.vn/sforum/tag/".concat(
                            t.data.tag
                          ),
                        },
                        !1
                      ),
                      [
                        t._v("\n      Xem tất cả bài viết "),
                        e("RenderHtml", {
                          attrs: {
                            html: t.$icons().ChevronDown,
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    705: function (t, e, r) {
      t.exports = {};
    },
    850: function (t, e, r) {
      "use strict";
      r.r(e);
      r(17), r(32), r(48), r(961), r(24), r(30), r(31);
      var o = r(6),
        n = r(0),
        c =
          (r(8),
          r(5),
          r(33),
          r(36),
          r(132),
          r(38),
          r(10),
          r(16),
          r(44),
          r(11),
          r(18),
          r(77),
          r(52),
          r(34),
          r(15)),
        l = r(503),
        d = r(203);
      function m(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? m(Object(r), !0).forEach(function (e) {
                Object(o.a)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var v = {
          name: "DetailV2",
          components: {
            TimerBanner: function () {
              return r.e(18).then(r.bind(null, 1295));
            },
            Content: function () {
              return Promise.resolve().then(r.bind(null, 511));
            },
            Comment: function () {
              return r.e(0).then(r.bind(null, 1338));
            },
            WishList: function () {
              return r.e(21).then(r.bind(null, 1346));
            },
            BoxPrice: function () {
              return r.e(14).then(r.bind(null, 1156));
            },
            ModalB2b: function () {
              return r.e(329).then(r.bind(null, 1167));
            },
            FaqModule: function () {
              return r.e(4).then(r.bind(null, 1341));
            },
            BlockSforum: function () {
              return Promise.resolve().then(r.bind(null, 522));
            },
            BoxReview: function () {
              return r.e(57).then(r.bind(null, 1356));
            },
            BoxLinked: function () {
              return r.e(328).then(r.bind(null, 1155));
            },
            BoxSimSo: function () {
              return r.e(110).then(r.bind(null, 1348));
            },
            TechnicalInfo: function () {
              return Promise.resolve().then(r.bind(null, 524));
            },
            BoxVariants: function () {
              return Promise.all([r.e(1), r.e(346)]).then(r.bind(null, 1162));
            },
            Breadcrumbs: function () {
              return r.e(8).then(r.bind(null, 1334));
            },
            BoxWarranty: function () {
              return r.e(111).then(r.bind(null, 1359));
            },
            ExtendedWarranty: function () {
              return r.e(344).then(r.bind(null, 1164));
            },
            BoxNewProduct: function () {
              return r.e(102).then(r.bind(null, 1351));
            },
            BoxOnStockStores: function () {
              return r.e(103).then(r.bind(null, 1352));
            },
            BoxPromotion: function () {
              return r.e(338).then(r.bind(null, 1157));
            },
            BoxProductTVC: function () {
              return r.e(106).then(r.bind(null, 1355));
            },
            BoxSameProduct: function () {
              return r.e(108).then(r.bind(null, 1357));
            },
            BoxOrderButton: function () {
              return r.e(337).then(r.bind(null, 1140));
            },
            BoxMorePromotion: function () {
              return r.e(101).then(r.bind(null, 1350));
            },
            BoxCheckingSmember: function () {
              return r.e(343).then(r.bind(null, 1163));
            },
            BoxRegisterProduct: function () {
              return r.e(339).then(r.bind(null, 1158));
            },
            BoxOutOfStockButton: function () {
              return r.e(105).then(r.bind(null, 1354));
            },
            BoxCountdownProduct: function () {
              return r.e(100).then(r.bind(null, 1349));
            },
            BoxSpecialPromotion: function () {
              return r.e(340).then(r.bind(null, 1159));
            },
            BoxSameProductMobile: function () {
              return r.e(109).then(r.bind(null, 1358));
            },
            BoxOrderButtonMobile: function () {
              return r.e(123).then(r.bind(null, 1353));
            },
            GalleryProductDetail: function () {
              return Promise.all([r.e(1), r.e(53)]).then(r.bind(null, 1397));
            },
            TradePriceTabs: function () {
              return r.e(342).then(r.bind(null, 1161));
            },
            PdpTradeCtaBox: function () {
              return r.e(341).then(r.bind(null, 1160));
            },
            PdpCompareButton: function () {
              return r.e(73).then(r.bind(null, 1311));
            },
            PdpCompareModal: function () {
              return r.e(72).then(r.bind(null, 1310));
            },
            PdpSelectProductCompareModal: function () {
              return r.e(128).then(r.bind(null, 1150));
            },
          },
          props: {
            pageInfo: {
              type: Object,
              default: function () {
                return {};
              },
            },
            metaHead: {
              type: Object,
              default: function () {
                return {};
              },
            },
          },
          data: function () {
            return {
              head: {},
              breadcrumbsArr: [],
              productData: {},
              productContent: {},
              listChildProduct: [],
              relationProduct: [],
              listLinked: [],
              variants: [],
              strCategoryIds: "",
              selectColorVariantsIndex: -1,
              gallery: {},
              promotionPack: {},
              sforumPost: {
                title: "Tin tức về sản phẩm",
                dataItem: [],
              },
              active: !1,
              specialBanner: {},
              accessoriesList: {
                title: "",
                items: [],
              },
              similarList: {
                title: "",
                items: [],
              },
              oldProductList: {
                title: "",
                items: [],
              },
              contentBlockOldProduct: "",
              isOldProduct: !1,
              componentProductList: {
                title: "",
                items: [],
              },
              reviewSimilar: {},
              showModalTVC: !1,
              regionName: {
                1: "Miền Bắc_1",
                7: "Miền Nam_7",
                8: "Miền Trung_8",
              },
              isSimProduct: !1,
              placeHolderContent:
                "https://cdn2.cellphones.com.vn/100x/media/wysiwyg/placehoder.png",
              latestPrice: {},
              isCountdownPromotion: !1,
              infoSale: {
                uu_dai_tet: {
                  is_sale: !0,
                  type: "normal_sale",
                  bg_image:
                    "https://cdn2.cellphones.com.vn/x300,webp,q100/media/flash-sale/bg-fs.png",
                  show_time: "2022-06-20T22:00:00",
                  start_time: "2023-08-20T00:00:00",
                  end_time: "2023-10-30T22:00:00",
                },
              },
              typeSale: "uu_dai_tet",
              isLoading: !0,
              pathCateIds: [],
            };
          },
          fetchKey: "product-detail",
          fetch: function () {
            var t = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function e() {
                var r,
                  o,
                  data,
                  n,
                  c,
                  l,
                  d,
                  m,
                  h,
                  v,
                  _,
                  f,
                  i,
                  k,
                  x,
                  D,
                  y,
                  P,
                  C,
                  S,
                  B,
                  w,
                  O,
                  I;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (data = JSON.stringify({
                              query: t.queryGraphqlStringProduct(t.productId),
                              variables: {},
                            })),
                            (n = t.graphqlConfig(data)),
                            (e.prev = 2),
                            (e.next = 5),
                            t.$axios(n)
                          );
                        case 5:
                          if (200 !== (c = e.sent).status) {
                            e.next = 43;
                            break;
                          }
                          return (v = c.data.data.product), (e.next = 10), v;
                        case 10:
                          if (
                            ((t.productData = e.sent),
                            (t.relationProduct =
                              t.productData.general.relation || []),
                            !(t.relationProduct.length > 0))
                          ) {
                            e.next = 15;
                            break;
                          }
                          return (e.next = 15), t.getListLink();
                        case 15:
                          return (
                            (t.listChildProduct =
                              t.productData.general.child_product),
                            t.handleChangeProductColor(
                              (null === (l = t.productData.filterable) ||
                              void 0 === l
                                ? void 0
                                : l.default.product_id) || t.productId
                            ),
                            (_ = t.getListComboDetail(
                              (null === (d = v.general) || void 0 === d
                                ? void 0
                                : d.categories) || []
                            )),
                            (e.next = 20),
                            _
                          );
                        case 20:
                          if (!t.listChildProduct) {
                            e.next = 23;
                            break;
                          }
                          return (
                            (e.next = 23),
                            t.getDataProductChild(t.listChildProduct)
                          );
                        case 23:
                          if (
                            ((t.selectColorVariantsIndex =
                              null === (m = t.variants) || void 0 === m
                                ? void 0
                                : m.findIndex(function (e) {
                                    return (
                                      e.general.product_id === t.selectColorId
                                    );
                                  })),
                            !(
                              t.selectColorVariantsIndex >= 0 ||
                              t.variants.length > 0 ||
                              (null === (h = t.listChildProduct) || void 0 === h
                                ? void 0
                                : h.length) > 0
                            ))
                          ) {
                            e.next = 29;
                            break;
                          }
                          return (e.next = 27), t.getListPromotion();
                        case 27:
                          e.next = 30;
                          break;
                        case 29:
                          t.promotionPack =
                            t.productData.filterable.promotion_pack;
                        case 30:
                          if (!t.productData.general.galleries) {
                            e.next = 43;
                            break;
                          }
                          return (
                            (e.next = 33),
                            t.productData.general.galleries.map(function (
                              e,
                              r
                            ) {
                              var o;
                              return {
                                image: e,
                                color: ""
                                  .concat(
                                    null === (o = t.productData) ||
                                      void 0 === o ||
                                      null === (o = o.general) ||
                                      void 0 === o
                                      ? void 0
                                      : o.name,
                                    " - "
                                  )
                                  .concat(r + 1),
                              };
                            })
                          );
                        case 33:
                          (f = e.sent), (i = 0);
                        case 35:
                          if (!(i < f.length)) {
                            e.next = 43;
                            break;
                          }
                          return (
                            (e.next = 38),
                            f[i].image.replace(
                              "https://cdn2.cellphones.com.vn/200x",
                              ""
                            )
                          );
                        case 38:
                          (k = e.sent),
                            (t.gallery["".concat(i)] = {
                              img: k,
                              name: f[i].color,
                            });
                        case 40:
                          i++, (e.next = 35);
                          break;
                        case 43:
                          e.next = 48;
                          break;
                        case 45:
                          (e.prev = 45),
                            (e.t0 = e.catch(2)),
                            console.error(e.t0);
                        case 48:
                          return (
                            (e.next = 50),
                            t.getShopStockGraphql(
                              t.selectColorId || t.productId
                            )
                          );
                        case 50:
                          if (
                            ((x = t.productData.general.categories || []),
                            (t.breadcrumbsArr = x),
                            x.forEach(function (e, r) {
                              r < x.length - 1
                                ? (t.strCategoryIds += "".concat(
                                    e.categoryId,
                                    ","
                                  ))
                                : (t.strCategoryIds += "".concat(e.categoryId));
                            }),
                            !(t.breadcrumbsArr.length > 0))
                          ) {
                            e.next = 62;
                            break;
                          }
                          if (
                            ((t.pathCateIds =
                              t.breadcrumbsArr[
                                t.breadcrumbsArr.length - 1
                              ].path.split("/")),
                            (D = t.breadcrumbsArr.length),
                            (y = t.breadcrumbsArr[D - 1].path),
                            (t.breadcrumbsArr = t.breadcrumbsArr.filter(
                              function (e) {
                                return (
                                  123 === e.categoryId && (t.isSimProduct = !0),
                                  y.includes(e.categoryId) ? e : ""
                                );
                              }
                            )),
                            !t.isSimProduct)
                          ) {
                            e.next = 61;
                            break;
                          }
                          return (
                            (e.next = 61),
                            t.getListOfPhoneNumbers({
                              productCode:
                                t.productData.general.attributes
                                  .additional_information,
                              currentPage: 1,
                              keySearch: "",
                              groupName: "",
                            })
                          );
                        case 61:
                          0 === t.productDetailNumberList.size &&
                            (t.isSimProduct = !1);
                        case 62:
                          return (
                            (e.next = 64),
                            t.checkTradePromo({
                              productId: t.productId,
                              categories:
                                (null === (r = t.productData.general) ||
                                void 0 === r
                                  ? void 0
                                  : r.categories) || [],
                            })
                          );
                        case 64:
                          return (
                            (P = t.getReviewsGraphqlV2({
                              productId: t.productId,
                            })),
                            (C = t.getReviewAttributeItemGraphql({
                              productId: t.productId,
                            })),
                            (S = t.getCommentsGraphql({
                              type: "product",
                              productId: t.productId,
                            })),
                            (e.next = 69),
                            P
                          );
                        case 69:
                          return (e.next = 71), C;
                        case 71:
                          return (e.next = 73), S;
                        case 73:
                          return (
                            t.setAllTotalReviews(t.totalReviews),
                            (t.head = JSON.parse(JSON.stringify(t.metaHead))),
                            t.head.meta.push({
                              property: "og:image",
                              content:
                                "https://cdn2.cellphones.com.vn/200x/media/catalog/product".concat(
                                  t.pageInfo.meta_image
                                ),
                            }),
                            (B = t.createJsonSchemaBreadcrumb(
                              t.breadcrumbsArr,
                              t.productData.general.name
                            )),
                            (w = t.createJsonSchemaProduct(
                              t.productData,
                              t.pageInfo,
                              t.rating,
                              t.reviewData,
                              t.tradePromoValue || 0
                            )),
                            (O = {
                              "@context": "https://schema.org",
                              "@type": "BreadcrumbList",
                              itemListElement: B,
                            }),
                            (t.head.script = [
                              {
                                type: "application/ld+json",
                                json: O,
                              },
                            ]),
                            t.head.script.push({
                              type: "application/ld+json",
                              json: w,
                            }),
                            (null === (o = t.commentList) || void 0 === o
                              ? void 0
                              : o.length) > 0 &&
                              ((I = t.createJsonSchemaFaq(
                                t.commentList,
                                t.$route.path
                              )),
                              t.head.script.push({
                                type: "application/ld+json",
                                json: I,
                              })),
                            (e.next = 84),
                            t.getDataSpecialBanner()
                          );
                        case 84:
                          return (
                            (e.next = 86),
                            t.getDataFlashSale({
                              productInfo: {
                                parentId: t.productId,
                                children: t.selectColorId,
                              },
                            })
                          );
                        case 86:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 45]]
                );
              })
            )();
          },
          head: function () {
            return this.head;
          },
          computed: h(
            h(
              h(
                h(
                  h(
                    h(
                      h(
                        h(
                          h(
                            h(
                              h(
                                h(
                                  h(
                                    h(
                                      {},
                                      Object(c.d)("sforum", ["sforumNews"])
                                    ),
                                    Object(c.d)("block-by-id", ["blockData"])
                                  ),
                                  Object(c.d)("product", [
                                    "productId",
                                    "selectColorId",
                                  ])
                                ),
                                Object(c.d)("review", [
                                  "rating",
                                  "reviewData",
                                  "prevHits",
                                  "totalComments",
                                  "totalReviews",
                                ])
                              ),
                              Object(c.d)("region", ["regionId"])
                            ),
                            Object(c.d)("province", [
                              "province",
                              "listShopStock",
                              "loadedShopList",
                            ])
                          ),
                          Object(c.d)("smember", [
                            "isShowCheckSmemberComponent",
                          ])
                        ),
                        Object(c.d)("comment", ["commentList"])
                      ),
                      Object(c.d)("flash-sale", ["flashSaleProgram"])
                    ),
                    Object(c.d)("banner", ["banner"])
                  ),
                  Object(c.d)("sim-so", ["productDetailNumberList"])
                ),
                Object(c.d)("json-server", ["jsonData"])
              ),
              Object(c.d)("pdp-trade", [
                "tabActive",
                "pdpTradeData",
                "hasTradePromo",
                "tradePromoValue",
              ])
            ),
            {},
            {
              updatePrice: function () {
                var t, e;
                return this.selectColorVariantsIndex >= 0
                  ? {
                      special_price:
                        null ===
                          (t = this.variants[this.selectColorVariantsIndex]) ||
                        void 0 === t
                          ? void 0
                          : t.filterable.special_price,
                      price:
                        null ===
                          (e = this.variants[this.selectColorVariantsIndex]) ||
                        void 0 === e
                          ? void 0
                          : e.filterable.price,
                    }
                  : null;
              },
              sameProductLowPrice: function () {
                var t, e, r, o;
                return JSON.stringify(
                  (null === (t = this.productData.filterable) || void 0 === t
                    ? void 0
                    : t.special_price) -
                    0.1 *
                      (null === (e = this.productData.filterable) ||
                      void 0 === e
                        ? void 0
                        : e.special_price) ||
                    (null === (r = this.productData.filterable) || void 0 === r
                      ? void 0
                      : r.price) -
                      0.1 *
                        (null === (o = this.productData.filterable) ||
                        void 0 === o
                          ? void 0
                          : o.price)
                );
              },
              sameProductHighPrice: function () {
                var t, e, r, o;
                return JSON.stringify(
                  (null === (t = this.productData.filterable) || void 0 === t
                    ? void 0
                    : t.special_price) +
                    0.1 *
                      (null === (e = this.productData.filterable) ||
                      void 0 === e
                        ? void 0
                        : e.special_price) ||
                    (null === (r = this.productData.filterable) || void 0 === r
                      ? void 0
                      : r.price) +
                      0.1 *
                        (null === (o = this.productData.filterable) ||
                        void 0 === o
                          ? void 0
                          : o.price)
                );
              },
              tradeFinalPrice: function () {
                return this.specialPrice > 0
                  ? this.specialPrice - this.tradePromoValue
                  : this.price - this.tradePromoValue;
              },
            }
          ),
          watch: {
            selectColorId: function () {
              var t = this;
              return Object(n.a)(
                regeneratorRuntime.mark(function e() {
                  var r, o;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t.selectColorVariantsIndex =
                              null === (r = t.variants) || void 0 === r
                                ? void 0
                                : r.findIndex(function (e) {
                                    return (
                                      e.general.product_id === t.selectColorId
                                    );
                                  })),
                            !(t.selectColorVariantsIndex >= 0))
                          ) {
                            e.next = 4;
                            break;
                          }
                          return (e.next = 4), t.getListPromotion();
                        case 4:
                          return (
                            (e.next = 6),
                            t.getListComboDetail(
                              (null === (o = t.productData.general) ||
                              void 0 === o
                                ? void 0
                                : o.categories) || []
                            )
                          );
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            productData: function () {
              var t,
                e = this;
              if (
                (null !== (t = this.productData.general) &&
                  void 0 !== t &&
                  t.product_components,
                (this.breadcrumbsArr =
                  this.productData.general.categories || []),
                this.breadcrumbsArr.length > 0)
              ) {
                var r = this.breadcrumbsArr.length,
                  o = this.breadcrumbsArr[r - 1].path;
                (this.breadcrumbsArr = this.breadcrumbsArr.filter(function (t) {
                  return (
                    123 === t.categoryId && (e.isSimProduct = !0),
                    o.includes(t.categoryId) ? t : ""
                  );
                })),
                  this.isSimProduct &&
                    this.getListOfPhoneNumbers({
                      productCode:
                        this.productData.general.attributes
                          .additional_information,
                      currentPage: 1,
                      keySearch: "",
                      groupName: "",
                    }),
                  (this.productDetailNumberList.size &&
                    0 !== this.productDetailNumberList.size) ||
                    (this.isSimProduct = !1);
              }
            },
            tradePromoValue: function () {
              this.pdpTradeData.product_id !==
                this.productData.general.product_id &&
                (this.hasTradePromo = !1);
            },
          },
          mounted: function () {
            var t,
              e = this;
            46 !==
              (null === (t = this.productData.filterable) || void 0 === t
                ? void 0
                : t.stock_available_id) && this.setStateLoaded(!0);
            try {
              setTimeout(
                Object(n.a)(
                  regeneratorRuntime.mark(function t() {
                    var r, o, n, c, l, d, m, h, v, _, f;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              !(
                                Object.keys(e.productData).length > 0 &&
                                null !== (r = e.productData.general) &&
                                void 0 !== r &&
                                r.categories
                              )
                            ) {
                              t.next = 36;
                              break;
                            }
                            if (
                              e.breadcrumbsArr[
                                e.breadcrumbsArr.length - 1
                              ].path.includes(1166) ||
                              e.breadcrumbsArr[
                                e.breadcrumbsArr.length - 1
                              ].path.includes(1170)
                            ) {
                              t.next = 11;
                              break;
                            }
                            if (
                              ((v =
                                null === (h = e.productData.general) ||
                                void 0 === h
                                  ? void 0
                                  : h.categories),
                              !v[v.length - 1].path.includes("29"))
                            ) {
                              t.next = 11;
                              break;
                            }
                            return (
                              (e.isOldProduct = !0),
                              (_ = {
                                12869: "hang-cu-mien-nam",
                                3759: "hang-cu-mien-bac",
                              }[e.province.company_id]),
                              (t.next = 10),
                              e.getDataBlockId({
                                block: _,
                                ud: _,
                              })
                            );
                          case 10:
                            e.contentBlockOldProduct = e.blockData[_];
                          case 11:
                            return (
                              console.log("ProductID:", e.productId),
                              console.log(
                                "Default selectedId: ",
                                e.selectColorId
                              ),
                              console.log(
                                "SKU: ",
                                null === (o = e.productData.general) ||
                                  void 0 === o
                                  ? void 0
                                  : o.sku
                              ),
                              console.log(
                                "Stock available 2: ",
                                null === (n = e.productData.filterable) ||
                                  void 0 === n
                                  ? void 0
                                  : n.stock_available_id
                              ),
                              console.log(
                                "Stock quantity: ",
                                null === (c = e.productData.filterable) ||
                                  void 0 === c
                                  ? void 0
                                  : c.stock
                              ),
                              console.log(
                                "Category ID: ",
                                (null === (l = e.productData.general) ||
                                void 0 === l
                                  ? void 0
                                  : l.categories) || ""
                              ),
                              (t.next = 19),
                              e.getLastedPrice(e.selectColorId)
                            );
                          case 19:
                            if (!e.productData.general.child_product) {
                              t.next = 22;
                              break;
                            }
                            return (
                              (t.next = 22),
                              e.getDataProductChild(
                                e.productData.general.child_product
                              )
                            );
                          case 22:
                            if (
                              null === (d = e.productData.filterable.sticker) ||
                              void 0 === d ||
                              !d.show_flashsale
                            ) {
                              t.next = 27;
                              break;
                            }
                            return (
                              (t.next = 25),
                              e.checkShowCountDownPromotion("black_friday")
                            );
                          case 25:
                            t.next = 30;
                            break;
                          case 27:
                            if (
                              null === (m = e.productData.filterable.sticker) ||
                              void 0 === m ||
                              !m.uu_dai_tet
                            ) {
                              t.next = 30;
                              break;
                            }
                            return (
                              (t.next = 30),
                              e.checkShowCountDownPromotion("uu_dai_tet")
                            );
                          case 30:
                            return (
                              (t.next = 32),
                              e.getSforumNewsGraphql({
                                newsType: "tag",
                                value:
                                  e.productData.general.attributes.tag_sforum,
                              })
                            );
                          case 32:
                            return (
                              (e.sforumPost = {
                                title: "Tin tức về sản phẩm",
                                dataItem: e.sforumNews || [],
                                tag: e.productData.general.attributes
                                  .tag_sforum,
                              }),
                              (f =
                                localStorage.getItem("compare_products") ||
                                "{}"),
                              (t.next = 36),
                              e.setCompareStorageData(JSON.parse(f))
                            );
                          case 36:
                            e.isLoading = !1;
                          case 37:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                ),
                2e3
              );
            } catch (t) {
              console.error(t.message);
            }
            this.handelAccessTradeCookie(),
              setTimeout(function () {
                e.pushToGA(),
                  e.pushEventPageView({
                    pageType: "product",
                    listCate: e.breadcrumbsArr || [],
                  });
              }, 2e3),
              this.getListPromotion();
          },
          methods: h(
            h(
              h(
                h(
                  h(
                    h(
                      h(
                        h(
                          h(
                            h(
                              h(
                                h(
                                  h(
                                    h(
                                      h(
                                        h(
                                          h(
                                            {
                                              pushEventPageView: d.b,
                                              createJsonSchemaBreadcrumb: l.i,
                                              createJsonSchemaFaq: l.j,
                                              createJsonSchemaProduct: l.m,
                                            },
                                            Object(c.c)("product", [
                                              "setProductId",
                                              "handleChangeChildProduct",
                                              "handleChangeProductColor",
                                            ])
                                          ),
                                          Object(c.c)("province", [
                                            "setStateLoaded",
                                          ])
                                        ),
                                        Object(c.c)("pdp-compare", [
                                          "setCompareStorageData",
                                        ])
                                      ),
                                      Object(c.c)("review", [
                                        "setAllTotalReviews",
                                      ])
                                    ),
                                    Object(c.b)("flash-sale", [
                                      "getDataFlashSale",
                                    ])
                                  ),
                                  Object(c.b)("sforum", [
                                    "getSforumNewsGraphql",
                                  ])
                                ),
                                Object(c.b)("comment", [
                                  "getComments",
                                  "getCommentsGraphql",
                                ])
                              ),
                              Object(c.b)("review", [
                                "getListRatingGraphql",
                                "getReviewsGraphqlV2",
                                "getReviewAttributeItemGraphql",
                              ])
                            ),
                            Object(c.b)("cross-sell", ["getListCombo"])
                          ),
                          Object(c.b)("banner", ["getBannerByUDGraphql"])
                        ),
                        Object(c.b)("block-by-id", ["getDataBlockId"])
                      ),
                      Object(c.b)("sim-so", ["getListOfPhoneNumbers"])
                    ),
                    Object(c.b)("json-server", ["getDataJsonServerGraphql"])
                  ),
                  Object(c.b)("product", ["getInforGroupByProductId"])
                ),
                Object(c.b)("province", ["getShopStockGraphql"])
              ),
              Object(c.b)("pdp-trade", ["checkTradePromo"])
            ),
            {},
            {
              getDataSpecialBanner: function () {
                var t = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, o, n, c, l, d, m, h, v, _, f, k, x, D, y, P, C;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((r = [
                                66512, 54335, 39233, 34219, 36804, 30501, 29061,
                                31823, 50877,
                              ]),
                              ![
                                54945, 65140, 57233, 65139, 69513, 69514, 70181,
                                66253, 64057, 65141, 57232, 65142, 57231, 64204,
                                64205,
                              ].includes(t.productId))
                            ) {
                              e.next = 8;
                              break;
                            }
                            return (
                              (e.next = 5),
                              t.getBannerByUDGraphql("product_banner_tabs9")
                            );
                          case 5:
                            [54945, 65140, 57233, 65139, 69513, 66253].includes(
                              t.productId
                            )
                              ? (t.specialBanner =
                                  (null === (o = t.banner) || void 0 === o
                                    ? void 0
                                    : o.product_banner_tabs9[0]) || {})
                              : [
                                  64057, 65141, 57232, 65142, 69514, 70181,
                                ].includes(t.productId)
                              ? (t.specialBanner =
                                  (null === (n = t.banner) || void 0 === n
                                    ? void 0
                                    : n.product_banner_tabs9[1]) || {})
                              : [57231, 64204, 64205].includes(t.productId) &&
                                (t.specialBanner =
                                  (null === (c = t.banner) || void 0 === c
                                    ? void 0
                                    : c.product_banner_tabs9[2]) || {}),
                              (e.next = 112);
                            break;
                          case 8:
                            if (!r.includes(t.productId)) {
                              e.next = 12;
                              break;
                            }
                            (t.specialBanner = {
                              name: "b2s111",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "2023-02-01T12:00:00Z",
                              schedule_to: "2023-10-31T21:00:00Z",
                              path_desktop:
                                "product-banner-tablet-samsung-edit.jpeg",
                              path_mobile:
                                "product-banner-tablet-samsung-edit.jpeg",
                            }),
                              (e.next = 112);
                            break;
                          case 12:
                            if (
                              ((d = [
                                "5",
                                "1126",
                                "1122",
                                "22",
                                "874",
                                "23",
                                "387",
                              ]),
                              (m = [
                                "1125",
                                "160",
                                "120",
                                "1155",
                                "138",
                                "526",
                                "466",
                                "888",
                              ]),
                              (h = [
                                "132",
                                "384",
                                "690",
                                "132",
                                "43",
                                "966",
                                "563",
                                "465",
                              ]),
                              (v =
                                null === (l = t.productData.general) ||
                                void 0 === l
                                  ? void 0
                                  : l.categories),
                              (_ = v[v.length - 1].path),
                              !t.findCommonElements(["786"], _.split("/")))
                            ) {
                              e.next = 21;
                              break;
                            }
                            (t.specialBanner = {
                              name: "monitorAsusB2S",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "b2s-product-manhinh-asus.jpg",
                              path_mobile: "b2s-product-manhinh-asus.jpg",
                            }),
                              (e.next = 112);
                            break;
                          case 21:
                            if (!t.findCommonElements(["849"], _.split("/"))) {
                              e.next = 25;
                              break;
                            }
                            (t.specialBanner = {
                              name: "monitorLpB2S",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "b2s-product-man-hinh-lg.jpg",
                              path_mobile: "b2s-product-man-hinh-lg.jpg",
                            }),
                              (e.next = 112);
                            break;
                          case 25:
                            if (!t.findCommonElements(["1595"], _.split("/"))) {
                              e.next = 29;
                              break;
                            }
                            (t.specialBanner = {
                              name: "monitorMsiB2S",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "b2s-product-man-hinh-mssi.jpg",
                              path_mobile: "b2s-product-man-hinh-mssi.jpg",
                            }),
                              (e.next = 112);
                            break;
                          case 29:
                            if (!t.findCommonElements(["980"], _.split("/"))) {
                              e.next = 33;
                              break;
                            }
                            (t.specialBanner = {
                              name: "tabletXiaomiB2S",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "b2s-product-tablet-xiaomi.jpg",
                              path_mobile: "b2s-product-tablet-xiaomi.jpg",
                            }),
                              (e.next = 112);
                            break;
                          case 33:
                            if (!t.findCommonElements(["340"], _.split("/"))) {
                              e.next = 37;
                              break;
                            }
                            (t.specialBanner = {
                              name: "mobileXiaomiB2S",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "b2s-product-dienthoai-xiaomi.jpg",
                              path_mobile: "b2s-product-dienthoai-xiaomi.jpg",
                            }),
                              (e.next = 112);
                            break;
                          case 37:
                            if (!t.findCommonElements(["35"], _.split("/"))) {
                              e.next = 41;
                              break;
                            }
                            (t.specialBanner = {
                              name: "mobileSamsungB2S",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "b2s-product-dt-samsung.jpg",
                              path_mobile: "b2s-product-dt-samsung.jpg",
                            }),
                              (e.next = 112);
                            break;
                          case 41:
                            if (!t.findCommonElements(["77"], _.split("/"))) {
                              e.next = 45;
                              break;
                            }
                            (t.specialBanner = {
                              name: "Product_Galaxy_Watch",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "b2s-product-galaxy-watch.jpg",
                              path_mobile: "b2s-product-galaxy-watch.jpg",
                            }),
                              (e.next = 112);
                            break;
                          case 45:
                            if (
                              !t.findCommonElements(
                                ["74", "648", "752", "1629"],
                                _.split("/")
                              )
                            ) {
                              e.next = 49;
                              break;
                            }
                            (t.specialBanner = {
                              name: "Product_dong_ho",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "b2s-product-dongho.jpg",
                              path_mobile: "b2s-product-dongho.jpg",
                            }),
                              (e.next = 112);
                            break;
                          case 49:
                            if (!t.findCommonElements(["1378"], _.split("/"))) {
                              e.next = 53;
                              break;
                            }
                            (t.specialBanner = {
                              name: "banner-khai-truong-02-2",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "b2s-product-capsac-golf.jpg",
                              path_mobile: "b2s-product-capsac-golf.jpg",
                            }),
                              (e.next = 112);
                            break;
                          case 53:
                            if (!t.findCommonElements(["1301"], _.split("/"))) {
                              e.next = 57;
                              break;
                            }
                            (t.specialBanner = {
                              name: "banner-khai-truong-02-3",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "b2s-product-capsac-basues.jpg",
                              path_mobile: "b2s-product-capsac-basues.jpg",
                            }),
                              (e.next = 112);
                            break;
                          case 57:
                            if (!t.findCommonElements(["1491"], _.split("/"))) {
                              e.next = 61;
                              break;
                            }
                            (t.specialBanner = {
                              name: "banner-khai-truong-02",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "b2s-product-capsac-urgreen.jpg",
                              path_mobile: "b2s-product-capsac-urgreen.jpg",
                            }),
                              (e.next = 112);
                            break;
                          case 61:
                            if (!t.findCommonElements(["122"], _.split("/"))) {
                              e.next = 65;
                              break;
                            }
                            (t.specialBanner = {
                              name: "banner-khai-truong-07",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "b2s-product-pinduphong.jpg",
                              path_mobile: "b2s-product-pinduphong.jpg",
                            }),
                              (e.next = 112);
                            break;
                          case 65:
                            if (!t.findCommonElements(["1309"], _.split("/"))) {
                              e.next = 69;
                              break;
                            }
                            (t.specialBanner = {
                              name: "banner-khai-truong-02-1",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "b2s-product-capsac-devia.jpg",
                              path_mobile: "b2s-product-capsac-devia.jpg",
                            }),
                              (e.next = 112);
                            break;
                          case 69:
                            if (
                              !t.findCommonElements(
                                ["314", "906", "606", "215"],
                                _.split("/")
                              )
                            ) {
                              e.next = 73;
                              break;
                            }
                            (t.specialBanner = {
                              name: "phoneB2S",
                              url: "https://cellphones.com.vn/chao-nam-hoc-moi",
                              schedule_from: "",
                              schedule_to: "",
                              path_desktop: "b2s-product-dienthoai-chungg.jpg",
                              path_mobile: "b2s-product-dienthoai-chungg.jpg",
                            }),
                              (e.next = 112);
                            break;
                          case 73:
                            if (!t.findCommonElements(h, _.split("/"))) {
                              e.next = 79;
                              break;
                            }
                            return (
                              (e.next = 76),
                              t.getBannerByUDGraphql(
                                "special_banner_bottom_product"
                              )
                            );
                          case 76:
                            (t.specialBanner =
                              (null === (f = t.banner) || void 0 === f
                                ? void 0
                                : f.special_banner_bottom_product[0]) || {}),
                              (e.next = 112);
                            break;
                          case 79:
                            if (!t.findCommonElements(m, _.split("/"))) {
                              e.next = 85;
                              break;
                            }
                            return (
                              (e.next = 82),
                              t.getBannerByUDGraphql("product_banner_samsung")
                            );
                          case 82:
                            (t.specialBanner =
                              (null === (k = t.banner) || void 0 === k
                                ? void 0
                                : k.product_banner_samsung[0]) || {}),
                              (e.next = 112);
                            break;
                          case 85:
                            if (!t.findCommonElements(["667"], _.split("/"))) {
                              e.next = 91;
                              break;
                            }
                            return (
                              (e.next = 88),
                              t.getBannerByUDGraphql("Product_banner_camera")
                            );
                          case 88:
                            (t.specialBanner =
                              (null === (x = t.banner) || void 0 === x
                                ? void 0
                                : x.Product_banner_camera[0]) || {}),
                              (e.next = 112);
                            break;
                          case 91:
                            if (
                              !t.findCommonElements(["380"], _.split("/")) ||
                              t.findCommonElements(d, _.split("/"))
                            ) {
                              e.next = 97;
                              break;
                            }
                            return (
                              (e.next = 94),
                              t.getBannerByUDGraphql("product_laptop_banner")
                            );
                          case 94:
                            (t.specialBanner =
                              (null === (D = t.banner) || void 0 === D
                                ? void 0
                                : D.product_laptop_banner[0]) || {}),
                              (e.next = 112);
                            break;
                          case 97:
                            if (
                              !t.findCommonElements(["88"], _.split("/")) ||
                              t.findCommonElements(d, _.split("/"))
                            ) {
                              e.next = 103;
                              break;
                            }
                            return (
                              (e.next = 100),
                              t.getBannerByUDGraphql("product_apple_watch")
                            );
                          case 100:
                            (t.specialBanner =
                              (null === (y = t.banner) || void 0 === y
                                ? void 0
                                : y.product_apple_watch[0]) || {}),
                              (e.next = 112);
                            break;
                          case 103:
                            if (!t.findCommonElements(["5"], _.split("/"))) {
                              e.next = 109;
                              break;
                            }
                            return (
                              (e.next = 106),
                              t.getBannerByUDGraphql("product_banner_macbook")
                            );
                          case 106:
                            (t.specialBanner =
                              (null === (P = t.banner) || void 0 === P
                                ? void 0
                                : P.product_banner_macbook[0]) || {}),
                              (e.next = 112);
                            break;
                          case 109:
                            return (
                              (e.next = 111),
                              t.getBannerByUDGraphql(
                                "special_banner_bottom_product_exclude_samsung"
                              )
                            );
                          case 111:
                            t.specialBanner =
                              (null === (C = t.banner) || void 0 === C
                                ? void 0
                                : C
                                    .special_banner_bottom_product_exclude_samsung[0]) ||
                              {};
                          case 112:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              queryGraphqlStringProduct: function (t) {
                var e = this.$cookies.get("cps_province") || this.province;
                return "query {\n                product(\n                    id : "
                  .concat(t, ",\n                    provinceId: ")
                  .concat(
                    e.id,
                    ",\n                ){\n                    general{\n                       attributes\n                       attribute_set_id\n                       galleries\n                       name\n                       relation\n                       url_path\n                       child_product\n                       up_sell\n                       product_id\n                       youtube\n                       sku\n                       product_components\n                       categories{\n                       categoryId\n                        similar\n                        name\n                        uri\n                        level\n                        path\n                        google_index\n                      }\n                    }\n                    filterable {\n                      promotion_information\n                      promotion_pack\n                      price\n                      special_price\n                      thumbnail\n                      product_state\n                      included_accessories\n                      warranty_information\n                      sticker\n                      short_description\n                      stock\n                      stock_available_id\n                      default {\n                        product_id\n                      }\n                    }\n                    specification {\n                        basic\n                        full_by_group\n                    }\n                }\n              }"
                  );
              },
              queryGraphqlStringProductS: function (t, e, r, o, n, c, l) {
                var d = this.$cookies.get("cps_province") || this.province;
                return "query  {\n                  products(\n                    filter: {\n                      static: {\n                      "
                  .concat(
                    r ? "is_parent: ".concat(JSON.stringify(r)) : "",
                    "\n                      "
                  )
                  .concat(
                    t ? "product_id : ".concat(t, ",") : "",
                    "\n                      "
                  )
                  .concat(
                    e ? "categories : ".concat(e) : "",
                    "\n                      province_id: "
                  )
                  .concat(d.id, ",\n                      ")
                  .concat(
                    c
                      ? "stock: {\n                        from: 1\n                      }"
                      : "",
                    "\n                      "
                  )
                  .concat(
                    o || n
                      ? ",filter_price: {\n                        from: "
                          .concat(o, ", to: ")
                          .concat(n, "\n                      },")
                      : "",
                    "\n                      }\n                      "
                  )
                  .concat(
                    l
                      ? "dynamic: {\n                        sku: {\n                          prefix: ".concat(
                          l,
                          '\n                        }\n                        product_condition: {\n                          eq: "Cũ"\n                        }\n                      }'
                        )
                      : "",
                    "\n                    }\n                    sort: [{view: desc}]\n                    size: 15\n                  ) {\n                   filterable{\n                      price\n                      special_price\n                      stock\n                      thumbnail\n                      promotion_pack\n                      sticker\n                      product_id\n                      filter_price\n                      price\n                      sticker\n                      special_price\n                      stock_available_id\n                      stock\n                      filter{\n                        id\n                        value\n                      }\n                   }\n                   general {\n                      attributes\n                      url_path\n                      doc_quyen\n                      url_key\n                      manufacturer\n                      name\n                      product_id\n                      sku\n                    }\n                  }\n                }"
                  );
              },
              graphqlConfig: function (data) {
                return {
                  method: "post",
                  url: "".concat(
                    "https://api.cellphones.com.vn/",
                    "v2/graphql/query"
                  ),
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  data: data,
                };
              },
              getDataProductChild: function (t) {
                var e = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function r() {
                    var o, n, data, c, l;
                    return regeneratorRuntime.wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (
                                (o = []),
                                t || o.push(e.productId),
                                t && (o = t),
                                e.handleChangeChildProduct(o),
                                (n = JSON.stringify(
                                  o.map(function (t) {
                                    return t.toString();
                                  })
                                )),
                                (r.prev = 5),
                                (data = JSON.stringify({
                                  query: e.queryGraphqlStringProductS(
                                    n,
                                    "",
                                    "false",
                                    "",
                                    "",
                                    ""
                                  ),
                                  variables: {},
                                })),
                                (c = e.graphqlConfig(data)),
                                (r.next = 10),
                                e.$axios(c)
                              );
                            case 10:
                              200 === (l = r.sent).status &&
                                (e.variants = l.data.data.products),
                                (r.next = 17);
                              break;
                            case 14:
                              (r.prev = 14),
                                (r.t0 = r.catch(5)),
                                console.log(r.t0);
                            case 17:
                            case "end":
                              return r.stop();
                          }
                      },
                      r,
                      null,
                      [[5, 14]]
                    );
                  })
                )();
              },
              formatPrice: function (t) {
                return Math.floor(t);
              },
              getListLink: function () {
                var t,
                  e,
                  r = this,
                  o = [];
                this.getListPromotion(),
                  0 !== this.relationProduct.length &&
                    (this.relationProduct.map(function (t) {
                      var data = JSON.stringify({
                          query: r.queryGraphqlStringProduct(t),
                          variables: {},
                        }),
                        e = r.graphqlConfig(data),
                        c = (function () {
                          var t = Object(n.a)(
                            regeneratorRuntime.mark(function t() {
                              var n, c, l, d, m, h;
                              return regeneratorRuntime.wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (t.prev = 0),
                                          (t.next = 3),
                                          r.$axios(e)
                                        );
                                      case 3:
                                        200 === (n = t.sent).status &&
                                          (c = n.data.data.product).general &&
                                          o.push({
                                            name:
                                              null === (l = c.general) ||
                                              void 0 === l ||
                                              null === (l = l.attributes) ||
                                              void 0 === l
                                                ? void 0
                                                : l.related_name,
                                            price:
                                              (null === (d = c.filterable) ||
                                              void 0 === d
                                                ? void 0
                                                : d.special_price) ||
                                              (null === (m = c.filterable) ||
                                              void 0 === m
                                                ? void 0
                                                : m.price),
                                            link:
                                              null === (h = c.general) ||
                                              void 0 === h
                                                ? void 0
                                                : h.url_path,
                                          }),
                                          (t.next = 10);
                                        break;
                                      case 7:
                                        (t.prev = 7),
                                          (t.t0 = t.catch(0)),
                                          console.log(t.t0);
                                      case 10:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                null,
                                [[0, 7]]
                              );
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })();
                      return c(), null;
                    }),
                    o.push({
                      name: this.productData.general.attributes.related_name,
                      price:
                        (null === (t = this.productData.filterable) ||
                        void 0 === t
                          ? void 0
                          : t.special_price) ||
                        (null === (e = this.productData.filterable) ||
                        void 0 === e
                          ? void 0
                          : e.price),
                      link: this.productData.general.url_path,
                    }),
                    (this.listLinked = o));
              },
              getListPromotion: function () {
                var t = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, o, n, c, l, d, m, data, h, v;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = t.productId),
                                (c =
                                  t.$cookies.get("cps_province") || t.province),
                                ((null !== (r = t.variants) &&
                                  void 0 !== r &&
                                  r.length) ||
                                  (null !== (o = t.listChildProduct) &&
                                    void 0 !== o &&
                                    o.length)) &&
                                  (n =
                                    (null === (l = t.variants) ||
                                    void 0 === l ||
                                    null ===
                                      (l = l[t.selectColorVariantsIndex]) ||
                                    void 0 === l ||
                                    null === (l = l.general) ||
                                    void 0 === l
                                      ? void 0
                                      : l.product_id) ||
                                    (null === (d = t.listChildProduct) ||
                                    void 0 === d
                                      ? void 0
                                      : d[0])),
                                (m =
                                  "query {\n                      product(\n                          id : "
                                    .concat(
                                      n,
                                      ",\n                          provinceId: "
                                    )
                                    .concat(
                                      c.id,
                                      ",\n                      ){\n                          filterable {\n                            promotion_pack\n                          }\n                      }\n                    }"
                                    )),
                                (data = JSON.stringify({
                                  query: m,
                                  variables: {},
                                })),
                                (h = t.graphqlConfig(data)),
                                console.log("ID GET PROMO: ".concat(n)),
                                console.log(
                                  "INDEX: ".concat(t.selectColorVariantsIndex)
                                ),
                                (e.prev = 8),
                                (e.next = 11),
                                t.$axios(h)
                              );
                            case 11:
                              200 === (v = e.sent).status &&
                                (t.promotionPack =
                                  v.data.data.product.filterable.promotion_pack),
                                (e.next = 18);
                              break;
                            case 15:
                              (e.prev = 15),
                                (e.t0 = e.catch(8)),
                                console.log(e.t0);
                            case 18:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[8, 15]]
                    );
                  })
                )();
              },
              handleClickShowBoxTVCModal: function () {
                this.showModalTVC = !this.showModalTVC;
              },
              IsShowBoxOrderButton: function (t, e, r) {
                return (46 === t && e > 0 && r > 0) || 152 === t;
              },
              checkingProductStatus: function (t, e, r) {
                return 46 === t && e > 0 && r > 0
                  ? "in stock"
                  : 152 === t
                  ? "order now"
                  : 43 === t
                  ? "out of stock"
                  : "subscribe";
              },
              pushToGA: function () {
                var t,
                  e,
                  r,
                  o,
                  n,
                  c,
                  l,
                  d,
                  m,
                  h,
                  v,
                  _,
                  f,
                  k,
                  x,
                  D = 12869 === this.province.company_id ? 7 : 1,
                  y = [];
                y.push({
                  currency: "VND",
                  index: 0,
                  item_brand: "".concat(
                    (null === (t = this.productData.general) || void 0 === t
                      ? void 0
                      : t.attributes.manufacturer) || ""
                  ),
                  item_category: "".concat(
                    (null === (e = this.breadcrumbsArr[0]) || void 0 === e
                      ? void 0
                      : e.name) || ""
                  ),
                  item_category2: "".concat(
                    (null === (r = this.breadcrumbsArr[1]) || void 0 === r
                      ? void 0
                      : r.name) || ""
                  ),
                  item_category3: "".concat(
                    (null === (o = this.breadcrumbsArr[2]) || void 0 === o
                      ? void 0
                      : o.name) || ""
                  ),
                  item_category4: "".concat(
                    (null === (n = this.breadcrumbsArr[3]) || void 0 === n
                      ? void 0
                      : n.name) || ""
                  ),
                  item_id: "".concat(this.productId),
                  item_image:
                    "https://cdn2.cellphones.com.vn/500x/media/catalog/product".concat(
                      null === (c = this.productData.general) || void 0 === c
                        ? void 0
                        : c.attributes.image
                    ),
                  item_list_id: "".concat(
                    (null ===
                      (l =
                        this.breadcrumbsArr[
                          (null === (d = this.breadcrumbsArr) || void 0 === d
                            ? void 0
                            : d.length) - 1
                        ]) || void 0 === l
                      ? void 0
                      : l.uri) || ""
                  ),
                  item_list_name: "".concat(
                    (null ===
                      (m =
                        this.breadcrumbsArr[
                          (null === (h = this.breadcrumbsArr) || void 0 === h
                            ? void 0
                            : h.length) - 1
                        ]) || void 0 === m
                      ? void 0
                      : m.name) || ""
                  ),
                  item_name: "".concat(
                    null === (v = this.productData.general) || void 0 === v
                      ? void 0
                      : v.name
                  ),
                  item_sku: "".concat(
                    null === (_ = this.productData.general) || void 0 === _
                      ? void 0
                      : _.attributes.url_key
                  ),
                  item_url: "https://cellphones.com.vn/".concat(
                    null === (f = this.productData.general) || void 0 === f
                      ? void 0
                      : f.attributes.url_path
                  ),
                  price:
                    null === (k = this.productData.filterable) || void 0 === k
                      ? void 0
                      : k.price,
                  saleprice:
                    null === (x = this.productData.filterable) || void 0 === x
                      ? void 0
                      : x.special_price,
                  quantity: 1,
                });
                var P = window.dataLayer || [];
                P.push({
                  event: "view_item",
                  ecommerce: {
                    region_cps: "".concat(this.regionName[D]),
                    province: "".concat(this.province.name),
                    currency: "VND",
                    items: y,
                  },
                  eventModel: {
                    value: 0,
                  },
                }),
                  console.log("DataLayer:"),
                  console.log(P);
              },
              getLastedPrice: function (t) {
                var e = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function r() {
                    var o, n, c, data, l, d;
                    return regeneratorRuntime.wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (
                                (o =
                                  e.$cookies.get("cps_province") || e.province),
                                (n =
                                  '\n        query PRODUCT{\n          product(\n              id : "'
                                    .concat(t, '",\n              provinceId: ')
                                    .concat(
                                      o.id,
                                      ",\n          ){\n              filterable {\n                price\n                special_price\n              }\n          }\n        }"
                                    )),
                                (c = "".concat(
                                  "https://api.cellphones.com.vn/",
                                  "v2/graphql/query"
                                )),
                                (data = JSON.stringify({
                                  query: n,
                                  variables: {},
                                })),
                                (l = {
                                  headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json",
                                  },
                                }),
                                (r.prev = 5),
                                (r.next = 8),
                                e.$axios.post(c, data, l)
                              );
                            case 8:
                              200 === (d = r.sent).status &&
                                (console.log("=======New Price======="),
                                (e.latestPrice =
                                  d.data.data.product.filterable),
                                console.log(e.latestPrice),
                                console.log("=====End New Price=====")),
                                (r.next = 16);
                              break;
                            case 12:
                              (r.prev = 12),
                                (r.t0 = r.catch(5)),
                                console.error(r.t0),
                                console.error("Lỗi Graphql!!! Check");
                            case 16:
                            case "end":
                              return r.stop();
                          }
                      },
                      r,
                      null,
                      [[5, 12]]
                    );
                  })
                )();
              },
              checkShowCountDownPromotion: function (t) {
                var e = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function r() {
                    var o, n;
                    return regeneratorRuntime.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if ("black_friday" !== t) {
                              r.next = 10;
                              break;
                            }
                            return (
                              (e.typeSale = t),
                              (r.next = 4),
                              e.getInforGroupByProductId(e.productId)
                            );
                          case 4:
                            (o = r.sent),
                              console.log(o),
                              (e.infoSale.black_friday = {
                                is_sale: !0,
                                type: "flash_sale",
                                bg_image:
                                  "https://cdn2.cellphones.com.vn/800x,webp,q90/media/landing-page/xa-kho/xa-kho-2023/background_countdown_flash.png",
                                show_time: "".concat(
                                  o.group.start_countdown_time
                                ),
                                start_time: "".concat(o.group.from_date),
                                end_time: "".concat(o.group.to_date),
                              }),
                              (e.isCountdownPromotion = e.infoSale[t].is_sale),
                              (r.next = 17);
                            break;
                          case 10:
                            return (
                              (e.typeSale = t),
                              (r.next = 13),
                              e.getInforGroupByProductId(e.productId)
                            );
                          case 13:
                            (n = r.sent),
                              console.log(n),
                              (e.infoSale.uu_dai_tet = {
                                is_sale: !0,
                                type: "normal_sale",
                                bg_image:
                                  "https://cdn2.cellphones.com.vn/800x,webp,q90/media/landing-page/xa-kho/xa-kho-2023/background_countdown_hot.png",
                                show_time: "".concat(
                                  n.group.start_countdown_time
                                ),
                                start_time: "".concat(n.group.from_date),
                                end_time: "".concat(n.group.to_date),
                              }),
                              (e.isCountdownPromotion = e.infoSale[t].is_sale);
                          case 17:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
              findCommonElements: function (t, e) {
                return t.some(function (t) {
                  return e.includes(t);
                });
              },
              getListComboDetail: function (t) {
                var e = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function r() {
                    var o;
                    return regeneratorRuntime.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (o = []),
                              null == t ||
                                t.forEach(function (t) {
                                  o.push(t.categoryId);
                                }),
                              (r.next = 4),
                              e.getListCombo({
                                productId: e.selectColorId,
                                arrCategoryId: o.toString(),
                              })
                            );
                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
              handelAccessTradeCookie: function () {
                var t, e;
                if (
                  "accesstrade" ===
                    (null === (t = this.$route.query) || void 0 === t
                      ? void 0
                      : t.utm_source) &&
                  this.$route.query.aff_sid
                )
                  this.$cookies.set(
                    "_aff_access_trade_pid",
                    this.pageInfo.product_id,
                    {
                      path: "/",
                      domain: "cellphones.com.vn",
                      maxAge: 1209600,
                    }
                  );
                else if (
                  "accesstrade" !==
                  (null === (e = this.$route.query) || void 0 === e
                    ? void 0
                    : e.utm_source)
                ) {
                  this.$cookies.remove("_aff_access_trade_pid", {
                    path: "/",
                    domain: "cellphones.com.vn",
                  });
                }
              },
            }
          ),
        },
        _ = v,
        f = (r(962), r(42)),
        component = Object(f.a)(
          _,
          function () {
            var t,
              e,
              r,
              o,
              n,
              c,
              l,
              d,
              m,
              h,
              v,
              _,
              f,
              k,
              x,
              D,
              y,
              P,
              C,
              S,
              B,
              w,
              O,
              I,
              j,
              L,
              T,
              A,
              M,
              R,
              V,
              E,
              G,
              N,
              $,
              J,
              H,
              U,
              z,
              F,
              W,
              X,
              K,
              Z,
              Q,
              Y,
              tt,
              et,
              at,
              ot,
              nt,
              it,
              ct,
              lt,
              st,
              ut,
              pt,
              mt,
              bt,
              ht,
              vt,
              _t,
              gt,
              ft,
              kt,
              xt,
              Dt,
              yt,
              Pt,
              Ct,
              St,
              Bt,
              wt = this,
              Ot = wt._self._c;
            return Object.keys(wt.productData).length > 0
              ? Ot(
                  "div",
                  {
                    attrs: {
                      id: "productDetailV2",
                    },
                  },
                  [
                    Ot("Breadcrumbs", {
                      attrs: {
                        "list-breadcrumb": wt.breadcrumbsArr,
                        "last-one":
                          null === (t = wt.productData.general) || void 0 === t
                            ? void 0
                            : t.name,
                      },
                    }),
                    wt._v(" "),
                    Ot(
                      "section",
                      {
                        staticClass: "block-detail-product",
                      },
                      [
                        wt.$device.isMobile
                          ? wt._e()
                          : Ot(
                              "div",
                              {
                                staticClass:
                                  "box-header is-flex is-align-items-center box-header-desktop",
                              },
                              [
                                Ot(
                                  "div",
                                  {
                                    staticClass: "box-product-name",
                                  },
                                  [
                                    Ot("h1", [
                                      wt._v(
                                        " " +
                                          wt._s(
                                            null ===
                                              (e = wt.productData.general) ||
                                              void 0 === e
                                              ? void 0
                                              : e.name
                                          ) +
                                          " "
                                      ),
                                    ]),
                                  ]
                                ),
                                wt._v(" "),
                                23 ===
                                  (null === (r = wt.productData.general) ||
                                  void 0 === r
                                    ? void 0
                                    : r.attribute_set_id) ||
                                12 ===
                                  (null === (o = wt.productData.general) ||
                                  void 0 === o
                                    ? void 0
                                    : o.attribute_set_id)
                                  ? Ot(
                                      "div",
                                      {
                                        staticClass:
                                          "additional-information mr-2",
                                      },
                                      [
                                        wt._v(
                                          "\n        " +
                                            wt._s(
                                              null ===
                                                (n = wt.productData.general) ||
                                                void 0 === n
                                                ? void 0
                                                : n.attributes
                                                    .additional_information
                                            ) +
                                            "\n      "
                                        ),
                                      ]
                                    )
                                  : wt._e(),
                                wt._v(" "),
                                wt.rating.average_rating
                                  ? Ot(
                                      "div",
                                      {
                                        staticClass: "box-rating",
                                      },
                                      [
                                        wt._l(5, function (t) {
                                          return Ot("RenderHtml", {
                                            key: t,
                                            staticClass: "icon",
                                            class:
                                              wt.rating.average_rating >=
                                                t - 0.5 && "is-active",
                                            attrs: {
                                              html: wt.$icons().Star,
                                              icon: "star",
                                            },
                                          });
                                        }),
                                        wt._v(
                                          "\n         " +
                                            wt._s(wt.rating.total_count || 0) +
                                            " đánh giá\n      "
                                        ),
                                      ],
                                      2
                                    )
                                  : wt._e(),
                                wt._v(" "),
                                Ot("PdpCompareButton", {
                                  attrs: {
                                    "product-data": wt.productData,
                                  },
                                }),
                              ],
                              1
                            ),
                        wt._v(" "),
                        Ot("hr"),
                        wt._v(" "),
                        Ot(
                          "div",
                          {
                            staticClass: "box-detail-product columns m-0",
                          },
                          [
                            Ot(
                              "div",
                              {
                                staticClass:
                                  "box-detail-product__box-left column is-three-fifths",
                              },
                              [
                                Ot(
                                  "div",
                                  {
                                    staticClass: "box-gallery",
                                  },
                                  [
                                    Ot("GalleryProductDetail", {
                                      attrs: {
                                        gallery: wt.gallery,
                                        "key-selling-points":
                                          (null ===
                                            (c = wt.productData.general) ||
                                          void 0 === c
                                            ? void 0
                                            : c.attributes
                                                .key_selling_points) || "",
                                        "feature-image":
                                          null ===
                                            (l = wt.productData.general) ||
                                          void 0 === l
                                            ? void 0
                                            : l.attributes.image,
                                        "key-selling-points-title":
                                          null ===
                                            (d = wt.productData.general) ||
                                          void 0 === d
                                            ? void 0
                                            : d.name,
                                        "tvc-list":
                                          null ===
                                            (m = wt.productData.general) ||
                                          void 0 === m
                                            ? void 0
                                            : m.youtube,
                                      },
                                      on: {
                                        showBoxTVCModal:
                                          wt.handleClickShowBoxTVCModal,
                                      },
                                    }),
                                    wt._v(" "),
                                    Ot("WishList", {
                                      attrs: {
                                        "product-id": wt.productId,
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                wt._v(" "),
                                wt.$device.isMobile
                                  ? Ot(
                                      "div",
                                      {
                                        staticClass:
                                          "box-header is-flex is-align-content-flex-end box-header-mobile",
                                      },
                                      [
                                        Ot(
                                          "div",
                                          {
                                            staticClass: "box-product-name",
                                          },
                                          [
                                            Ot("h1", [
                                              wt._v(
                                                wt._s(
                                                  null ===
                                                    (h =
                                                      wt.productData.general) ||
                                                    void 0 === h
                                                    ? void 0
                                                    : h.name
                                                )
                                              ),
                                            ]),
                                          ]
                                        ),
                                        wt._v(" "),
                                        23 ===
                                          wt.productData.general
                                            .attribute_set_id ||
                                        12 ===
                                          wt.productData.general
                                            .attribute_set_id
                                          ? Ot(
                                              "div",
                                              {
                                                staticClass:
                                                  "additional-information mr-2",
                                              },
                                              [
                                                wt._v(
                                                  "\n            " +
                                                    wt._s(
                                                      wt.productData.general
                                                        .attributes
                                                        .additional_information
                                                    ) +
                                                    "\n          "
                                                ),
                                              ]
                                            )
                                          : wt._e(),
                                        wt._v(" "),
                                        wt.rating.average_rating
                                          ? Ot(
                                              "div",
                                              {
                                                staticClass: "box-rating",
                                              },
                                              [
                                                wt._l(5, function (t) {
                                                  return Ot("RenderHtml", {
                                                    key: t,
                                                    staticClass: "icon",
                                                    class:
                                                      wt.rating
                                                        .average_rating >=
                                                        t - 0.5 && "is-active",
                                                    attrs: {
                                                      html: wt.$icons().Star,
                                                      icon: "star",
                                                    },
                                                  });
                                                }),
                                                wt._v(
                                                  "\n             " +
                                                    wt._s(
                                                      wt.rating.total_count || 0
                                                    ) +
                                                    " đánh giá\n          "
                                                ),
                                              ],
                                              2
                                            )
                                          : wt._e(),
                                        wt._v(" "),
                                        Ot("PdpCompareButton", {
                                          attrs: {
                                            "product-data": wt.productData,
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : wt._e(),
                                wt._v(" "),
                                wt.$device.isMobile
                                  ? wt._e()
                                  : Ot(
                                      "div",
                                      {
                                        staticClass: "columns mt-1",
                                      },
                                      [
                                        Ot(
                                          "div",
                                          {
                                            staticClass: "column is-half",
                                          },
                                          [
                                            (null !==
                                              (v = wt.productData.filterable) &&
                                              void 0 !== v &&
                                              v.product_state) ||
                                            (null !==
                                              (_ = wt.productData.filterable) &&
                                              void 0 !== _ &&
                                              _.included_accessories) ||
                                            (null !==
                                              (f = wt.productData.filterable) &&
                                              void 0 !== f &&
                                              f.warranty_information)
                                              ? Ot("BoxWarranty", {
                                                  attrs: {
                                                    "product-state":
                                                      null ===
                                                        (k =
                                                          wt.productData
                                                            .filterable) ||
                                                      void 0 === k
                                                        ? void 0
                                                        : k.product_state,
                                                    "product-accessories":
                                                      null ===
                                                        (x =
                                                          wt.productData
                                                            .filterable) ||
                                                      void 0 === x
                                                        ? void 0
                                                        : x.included_accessories,
                                                    "warranty-content":
                                                      null ===
                                                        (D =
                                                          wt.productData
                                                            .filterable) ||
                                                      void 0 === D
                                                        ? void 0
                                                        : D.warranty_information,
                                                  },
                                                })
                                              : wt._e(),
                                          ],
                                          1
                                        ),
                                        wt._v(" "),
                                        Ot(
                                          "div",
                                          {
                                            staticClass: "column is-half",
                                          },
                                          [
                                            Ot(
                                              "client-only",
                                              [
                                                0 !== wt.selectColorId &&
                                                46 ===
                                                  (null ===
                                                    (y =
                                                      wt.productData
                                                        .filterable) ||
                                                  void 0 === y
                                                    ? void 0
                                                    : y.stock_available_id)
                                                  ? Ot("BoxOnStockStores")
                                                  : wt._e(),
                                                wt._v(" "),
                                                wt.isOldProduct
                                                  ? Ot(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "box-warranty-info",
                                                      },
                                                      [
                                                        Ot(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "box-content warranty-info",
                                                            staticStyle: {
                                                              "padding-bottom":
                                                                "10px",
                                                            },
                                                          },
                                                          [
                                                            Ot(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "description",
                                                                staticStyle: {
                                                                  "max-width":
                                                                    "100%",
                                                                },
                                                              },
                                                              [
                                                                Ot(
                                                                  "RenderHtml",
                                                                  {
                                                                    attrs: {
                                                                      html: wt.contentBlockOldProduct,
                                                                    },
                                                                  }
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    )
                                                  : wt._e(),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ]
                                    ),
                                wt._v(" "),
                                Ot(
                                  "render-on-scroll",
                                  {
                                    attrs: {
                                      "offset-y": 10,
                                    },
                                  },
                                  [
                                    wt.$device.isDesktop &&
                                    ![43, 56].includes(
                                      null ===
                                        (P = wt.productData.filterable) ||
                                        void 0 === P
                                        ? void 0
                                        : P.stock_available_id
                                    )
                                      ? Ot("BoxSameProductMobile", {
                                          staticClass: "upsell",
                                          attrs: {
                                            "product-data": wt.productData,
                                            type: "upsell",
                                            title: "Phụ kiện mua cùng",
                                            "has-option": !0,
                                          },
                                        })
                                      : wt._e(),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            wt._v(" "),
                            Ot(
                              "div",
                              {
                                staticClass:
                                  "box-detail-product__box-center column",
                              },
                              [
                                Object.keys(wt.flashSaleProgram || {}).length
                                  ? Ot("BoxCountdownProduct", {
                                      attrs: {
                                        start:
                                          wt.flashSaleProgram[
                                            Object.keys(wt.flashSaleProgram)[0]
                                          ].started_at,
                                        end: wt.flashSaleProgram[
                                          Object.keys(wt.flashSaleProgram)[0]
                                        ].ended_at,
                                        appear:
                                          wt.infoSale[wt.typeSale].show_time,
                                        "style-inline":
                                          "\n              border: 1px solid #d81f18;\n              border-radius: 5px;\n              background: url(https://cdn2.cellphones.com.vn/x/media/wysiwyg/FLASH-SALE.png);\n              background-repeat: no-repeat;\n              background-position: left top;\n              background-size: cover;\n              background-color: #cb3117",
                                        "sale-type": "",
                                      },
                                    })
                                  : wt.isCountdownPromotion && wt.infoSale
                                  ? Ot("BoxCountdownProduct", {
                                      attrs: {
                                        start:
                                          wt.infoSale[wt.typeSale].start_time,
                                        end: wt.infoSale[wt.typeSale].end_time,
                                        appear:
                                          wt.infoSale[wt.typeSale].show_time,
                                        "style-inline":
                                          "\n              border: 1px solid #d81f18;\n              border-radius: 5px;\n              background: url(".concat(
                                            wt.infoSale[wt.typeSale].bg_image,
                                            ");\n              background-repeat: no-repeat;\n              background-position: left;\n              background-size: contain;\n              background-color: #cb3117"
                                          ),
                                        "sale-type": "",
                                      },
                                    })
                                  : wt._e(),
                                wt._v(" "),
                                !wt.hasTradePromo ||
                                (![152, 46].includes(
                                  wt.productData.filterable.stock_available_id
                                ) &&
                                  wt.hasTradePromo)
                                  ? Ot("BoxPrice", {
                                      attrs: {
                                        price: wt.updatePrice
                                          ? wt.formatPrice(wt.updatePrice.price)
                                          : Object.keys(wt.latestPrice).length
                                          ? wt.formatPrice(wt.latestPrice.price)
                                          : wt.formatPrice(
                                              null ===
                                                (C =
                                                  wt.productData.filterable) ||
                                                void 0 === C
                                                ? void 0
                                                : C.price
                                            ),
                                        "special-price": wt.updatePrice
                                          ? wt.formatPrice(
                                              wt.updatePrice.special_price
                                            )
                                          : Object.keys(wt.latestPrice).length
                                          ? wt.formatPrice(
                                              wt.latestPrice.special_price
                                            )
                                          : wt.formatPrice(
                                              null ===
                                                (S =
                                                  wt.productData.filterable) ||
                                                void 0 === S
                                                ? void 0
                                                : S.special_price
                                            ),
                                        "hc-install":
                                          wt.productData.general.attributes
                                            .hc_zero_install,
                                        "warranty-old-product":
                                          wt.productData.general.attributes
                                            .tinh_trang_may_cu,
                                        "is-show-discount-percent": !1,
                                        "title-price":
                                          wt.productData.general.attributes
                                            .title_price,
                                        "stock-available":
                                          null ===
                                            (B = wt.productData.filterable) ||
                                          void 0 === B
                                            ? void 0
                                            : B.stock_available_id,
                                      },
                                    })
                                  : wt._e(),
                                wt._v(" "),
                                wt.listLinked.length > 1
                                  ? Ot("BoxLinked", {
                                      attrs: {
                                        "list-linked": wt.listLinked,
                                        url: wt.productData.general.url_path,
                                      },
                                    })
                                  : wt._e(),
                                wt._v(" "),
                                wt.variants &&
                                wt.variants.length > 0 &&
                                ((46 ===
                                  (null === (w = wt.productData.filterable) ||
                                  void 0 === w
                                    ? void 0
                                    : w.stock_available_id) &&
                                  (null === (O = wt.productData.filterable) ||
                                  void 0 === O
                                    ? void 0
                                    : O.stock) > 0) ||
                                  152 ===
                                    (null === (I = wt.productData.filterable) ||
                                    void 0 === I
                                      ? void 0
                                      : I.stock_available_id))
                                  ? Ot("BoxVariants", {
                                      attrs: {
                                        variants: wt.variants,
                                        "key-selling-points":
                                          wt.productData.general.attributes
                                            .key_selling_points,
                                        "tvc-list":
                                          wt.productData.general.youtube,
                                        "default-id": wt.selectColorId,
                                        "stock-available-id":
                                          null ===
                                            (j = wt.productData.filterable) ||
                                          void 0 === j
                                            ? void 0
                                            : j.stock_available_id,
                                      },
                                    })
                                  : wt._e(),
                                wt._v(" "),
                                wt.hasTradePromo &&
                                wt.loadedShopList &&
                                (46 ===
                                  (null === (L = wt.productData.filterable) ||
                                  void 0 === L
                                    ? void 0
                                    : L.stock_available_id) ||
                                  152 ===
                                    (null === (T = wt.productData.filterable) ||
                                    void 0 === T
                                      ? void 0
                                      : T.stock_available_id))
                                  ? Ot("TradePriceTabs", {
                                      attrs: {
                                        price: wt.updatePrice
                                          ? wt.updatePrice.price
                                          : Object.keys(wt.latestPrice).length
                                          ? wt.latestPrice.price
                                          : null ===
                                              (A = wt.productData.filterable) ||
                                            void 0 === A
                                          ? void 0
                                          : A.price,
                                        "special-price": wt.updatePrice
                                          ? wt.updatePrice.special_price
                                          : Object.keys(wt.latestPrice).length
                                          ? wt.latestPrice.special_price
                                          : null ===
                                              (M = wt.productData.filterable) ||
                                            void 0 === M
                                          ? void 0
                                          : M.special_price,
                                      },
                                    })
                                  : wt._e(),
                                wt._v(" "),
                                Ot("BoxSpecialPromotion", {
                                  staticClass: "my-3",
                                  attrs: {
                                    "special-promotion": wt.specialBanner,
                                  },
                                }),
                                wt._v(" "),
                                (null === (R = wt.productData.filterable) ||
                                void 0 === R
                                  ? void 0
                                  : R.stock) > 0 ||
                                [152, 56].includes(
                                  null === (V = wt.productData.filterable) ||
                                    void 0 === V
                                    ? void 0
                                    : V.stock_available_id
                                )
                                  ? Ot("BoxPromotion", {
                                      attrs: {
                                        "promotion-pack":
                                          wt.promotionPack.km_chung || {},
                                        "product-promotion-pack":
                                          wt.promotionPack.km_rieng || {},
                                        "hot-sale":
                                          null ===
                                            (E = wt.productData.filterable) ||
                                          void 0 === E ||
                                          null === (E = E.short_description) ||
                                          void 0 === E
                                            ? void 0
                                            : E.value,
                                        "time-start-hotsale":
                                          null ===
                                            (G = wt.productData.filterable) ||
                                          void 0 === G ||
                                          null === (G = G.short_description) ||
                                          void 0 === G
                                            ? void 0
                                            : G.show_time,
                                        "time-end-hotsale":
                                          null ===
                                            (N = wt.productData.filterable) ||
                                          void 0 === N ||
                                          null === (N = N.short_description) ||
                                          void 0 === N
                                            ? void 0
                                            : N.hidden_time,
                                      },
                                    })
                                  : wt._e(),
                                wt._v(" "),
                                wt.isShowCheckSmemberComponent
                                  ? Ot("BoxCheckingSmember")
                                  : wt._e(),
                                wt._v(" "),
                                46 !==
                                  (null === ($ = wt.productData.filterable) ||
                                  void 0 === $
                                    ? void 0
                                    : $.stock_available_id) &&
                                152 !==
                                  (null === (J = wt.productData.filterable) ||
                                  void 0 === J
                                    ? void 0
                                    : J.stock_available_id) &&
                                43 !==
                                  (null === (H = wt.productData.filterable) ||
                                  void 0 === H
                                    ? void 0
                                    : H.stock_available_id)
                                  ? Ot("BoxRegisterProduct", {
                                      attrs: {
                                        "product-name":
                                          wt.productData.general.name,
                                        sku: wt.productData.general.sku,
                                        "attribute-set-id":
                                          wt.productData.general
                                            .attribute_set_id,
                                      },
                                    })
                                  : wt._e(),
                                wt._v(" "),
                                wt.loadedShopList
                                  ? Ot(
                                      "div",
                                      [
                                        2 !== wt.tabActive ||
                                        (!wt.IsShowBoxOrderButton(
                                          null ===
                                            (U = wt.productData.filterable) ||
                                            void 0 === U
                                            ? void 0
                                            : U.stock_available_id,
                                          wt.listShopStock.length,
                                          null ===
                                            (z = wt.productData.filterable) ||
                                            void 0 === z
                                            ? void 0
                                            : z.price
                                        ) &&
                                          152 !==
                                            (null ===
                                              (F = wt.productData.filterable) ||
                                            void 0 === F
                                              ? void 0
                                              : F.stock_available_id))
                                          ? wt._e()
                                          : Ot("PdpTradeCtaBox", {
                                              attrs: {
                                                "product-data": wt.productData,
                                                "is-order":
                                                  46 ===
                                                    (null ===
                                                      (W =
                                                        wt.productData
                                                          .filterable) ||
                                                    void 0 === W
                                                      ? void 0
                                                      : W.stock_available_id) &&
                                                  (null ===
                                                    (X =
                                                      wt.productData
                                                        .filterable) ||
                                                  void 0 === X
                                                    ? void 0
                                                    : X.stock) > 0 &&
                                                  0 !==
                                                    (null ===
                                                      (K =
                                                        wt.productData
                                                          .filterable) ||
                                                    void 0 === K
                                                      ? void 0
                                                      : K.price),
                                              },
                                            }),
                                        wt._v(" "),
                                        !wt.IsShowBoxOrderButton(
                                          null ===
                                            (Z = wt.productData.filterable) ||
                                            void 0 === Z
                                            ? void 0
                                            : Z.stock_available_id,
                                          wt.listShopStock.length,
                                          null ===
                                            (Q = wt.productData.filterable) ||
                                            void 0 === Q
                                            ? void 0
                                            : Q.price
                                        ) ||
                                        wt.isSimProduct ||
                                        (1 !== wt.tabActive &&
                                          152 !==
                                            (null ===
                                              (Y = wt.productData.filterable) ||
                                            void 0 === Y
                                              ? void 0
                                              : Y.stock_available_id))
                                          ? 0 === wt.listShopStock.length ||
                                            43 ===
                                              (null ===
                                                (it =
                                                  wt.productData.filterable) ||
                                              void 0 === it
                                                ? void 0
                                                : it.stock_available_id) ||
                                            0 ===
                                              (null ===
                                                (ct =
                                                  wt.productData.filterable) ||
                                              void 0 === ct
                                                ? void 0
                                                : ct.stock)
                                            ? Ot("BoxOutOfStockButton", {
                                                attrs: {
                                                  "product-id":
                                                    wt.selectColorId,
                                                  "uri-list": wt.breadcrumbsArr,
                                                },
                                              })
                                            : wt._e()
                                          : Ot("BoxOrderButton", {
                                              attrs: {
                                                price: wt.updatePrice
                                                  ? wt.updatePrice
                                                      .special_price ||
                                                    wt.updatePrice.price
                                                  : Object.keys(wt.latestPrice)
                                                      .length
                                                  ? wt.latestPrice
                                                      .special_price ||
                                                    wt.latestPrice.price
                                                  : (null ===
                                                      (tt =
                                                        wt.productData
                                                          .filterable) ||
                                                    void 0 === tt
                                                      ? void 0
                                                      : tt.special_price) ||
                                                    (null ===
                                                      (et =
                                                        wt.productData
                                                          .filterable) ||
                                                    void 0 === et
                                                      ? void 0
                                                      : et.price),
                                                "pre-order-price": Math.trunc(
                                                  parseInt(
                                                    wt.productData.general
                                                      .attributes.tien_coc
                                                  )
                                                ),
                                                "hc-install":
                                                  wt.productData.general
                                                    .attributes.hc_zero_install,
                                                name: wt.productData.general
                                                  .attributes.name,
                                                "is-order":
                                                  46 ===
                                                    (null ===
                                                      (at =
                                                        wt.productData
                                                          .filterable) ||
                                                    void 0 === at
                                                      ? void 0
                                                      : at.stock_available_id) &&
                                                  (null ===
                                                    (ot =
                                                      wt.productData
                                                        .filterable) ||
                                                  void 0 === ot
                                                    ? void 0
                                                    : ot.stock) > 0 &&
                                                  0 !==
                                                    (null ===
                                                      (nt =
                                                        wt.productData
                                                          .filterable) ||
                                                    void 0 === nt
                                                      ? void 0
                                                      : nt.price),
                                                "product-data": wt.productData,
                                                "path-cate-ids": wt.pathCateIds,
                                              },
                                            }),
                                      ],
                                      1
                                    )
                                  : wt._e(),
                                wt._v(" "),
                                Ot(
                                  "render-on-scroll",
                                  {
                                    attrs: {
                                      "offset-y": 10,
                                    },
                                  },
                                  [
                                    wt.$device.isMobile &&
                                    [56, 43].includes(
                                      null ===
                                        (lt = wt.productData.filterable) ||
                                        void 0 === lt
                                        ? void 0
                                        : lt.stock_available_id
                                    )
                                      ? Ot("BoxSameProductMobile", {
                                          staticClass: "mobile",
                                          attrs: {
                                            "is-compare": !0,
                                            "product-data": wt.productData,
                                            type: "similar",
                                            title: "Sản phẩm tương tự",
                                          },
                                        })
                                      : wt._e(),
                                  ],
                                  1
                                ),
                                wt._v(" "),
                                wt.productData.general.attribute_set_id
                                  ? Ot("BoxMorePromotion", {
                                      staticClass: "my-3",
                                      attrs: {
                                        "attribute-set-id":
                                          wt.productData.general
                                            .attribute_set_id,
                                      },
                                    })
                                  : wt._e(),
                                wt._v(" "),
                                wt.$device.isMobile
                                  ? Ot(
                                      "div",
                                      [
                                        Ot(
                                          "render-on-scroll",
                                          {
                                            attrs: {
                                              "offset-y": 10,
                                            },
                                          },
                                          [
                                            0 !== wt.selectColorId &&
                                            46 ===
                                              (null ===
                                                (st =
                                                  wt.productData.filterable) ||
                                              void 0 === st
                                                ? void 0
                                                : st.stock_available_id)
                                              ? Ot("BoxOnStockStores", {
                                                  staticClass: "mt-3",
                                                })
                                              : wt._e(),
                                            wt._v(" "),
                                            wt.isOldProduct
                                              ? Ot(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "box-warranty-info mt-3",
                                                  },
                                                  [
                                                    Ot(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "box-content warranty-info",
                                                        staticStyle: {
                                                          "padding-bottom":
                                                            "10px",
                                                        },
                                                      },
                                                      [
                                                        Ot(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "description",
                                                            staticStyle: {
                                                              "max-width":
                                                                "100%",
                                                            },
                                                          },
                                                          [
                                                            Ot("RenderHtml", {
                                                              attrs: {
                                                                html: wt.contentBlockOldProduct,
                                                              },
                                                            }),
                                                          ],
                                                          1
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                )
                                              : wt._e(),
                                          ],
                                          1
                                        ),
                                        wt._v(" "),
                                        (null !==
                                          (ut = wt.productData.filterable) &&
                                          void 0 !== ut &&
                                          ut.product_state) ||
                                        (null !==
                                          (pt = wt.productData.filterable) &&
                                          void 0 !== pt &&
                                          pt.included_accessories) ||
                                        (null !==
                                          (mt = wt.productData.filterable) &&
                                          void 0 !== mt &&
                                          mt.warranty_information)
                                          ? Ot("BoxWarranty", {
                                              attrs: {
                                                "product-state":
                                                  null ===
                                                    (bt =
                                                      wt.productData
                                                        .filterable) ||
                                                  void 0 === bt
                                                    ? void 0
                                                    : bt.product_state,
                                                "product-accessories":
                                                  null ===
                                                    (ht =
                                                      wt.productData
                                                        .filterable) ||
                                                  void 0 === ht
                                                    ? void 0
                                                    : ht.included_accessories,
                                                "warranty-content":
                                                  null ===
                                                    (vt =
                                                      wt.productData
                                                        .filterable) ||
                                                  void 0 === vt
                                                    ? void 0
                                                    : vt.warranty_information,
                                              },
                                            })
                                          : wt._e(),
                                      ],
                                      1
                                    )
                                  : wt._e(),
                                wt._v(" "),
                                Ot(
                                  "render-on-scroll",
                                  {
                                    attrs: {
                                      "offset-y": 10,
                                    },
                                  },
                                  [
                                    wt.listShopStock.length > 0
                                      ? Ot("ExtendedWarranty", {
                                          key: wt.selectColorId,
                                          staticClass: "my-3",
                                          attrs: {
                                            price:
                                              null ===
                                                (_t =
                                                  wt.productData.filterable) ||
                                              void 0 === _t
                                                ? void 0
                                                : _t.price,
                                            "category-ids": wt.strCategoryIds
                                              ? wt.strCategoryIds
                                              : "",
                                            "product-name":
                                              wt.productData.general.name,
                                          },
                                        })
                                      : wt._e(),
                                  ],
                                  1
                                ),
                                wt._v(" "),
                                wt.productData.general.attributes
                                  .related_new_product_id &&
                                wt.isOldProduct &&
                                !wt.isLoading
                                  ? Ot("BoxNewProduct", {
                                      staticClass: "mb-3",
                                      attrs: {
                                        "related-new-product-id":
                                          wt.productData.general.attributes
                                            .related_new_product_id,
                                      },
                                    })
                                  : wt._e(),
                              ],
                              1
                            ),
                          ]
                        ),
                        wt._v(" "),
                        Ot("hr"),
                        wt._v(" "),
                        wt.isSimProduct
                          ? Ot("BoxSimSo", {
                              attrs: {
                                "product-code":
                                  wt.productData.general.attributes
                                    .additional_information,
                                "product-data": wt.productData,
                              },
                            })
                          : wt._e(),
                        wt._v(" "),
                        Ot(
                          "render-on-scroll",
                          {
                            attrs: {
                              "offset-y": 10,
                            },
                          },
                          [
                            Object.keys(wt.productData).length > 0 &&
                            !wt.$device.isMobile &&
                            !wt.isLoading
                              ? Ot("BoxSameProduct", {
                                  attrs: {
                                    "product-data": wt.productData,
                                    "is-new-product": !wt.isOldProduct,
                                  },
                                })
                              : wt._e(),
                          ],
                          1
                        ),
                        wt._v(" "),
                        wt.$device.isMobile
                          ? [
                              Ot("BoxSameProductMobile", {
                                staticClass: "mobile",
                                attrs: {
                                  "product-data": wt.productData,
                                  type: "component_product",
                                  title: "Linh kiện cấu thành",
                                },
                              }),
                              wt._v(" "),
                              Ot("BoxSameProductMobile", {
                                staticClass: "mobile",
                                attrs: {
                                  "product-data": wt.productData,
                                  type: "upsell",
                                  "has-option": !0,
                                  title: "Phụ kiện mua cùng",
                                },
                              }),
                              wt._v(" "),
                              Ot("BoxSameProductMobile", {
                                staticClass: "mobile",
                                attrs: {
                                  type: "exchange",
                                  "product-data": wt.productData,
                                  "is-exchange": !0,
                                  title: "Bán máy cũ lên đời tiết kiệm hơn",
                                },
                              }),
                            ]
                          : wt._e(),
                        wt._v(" "),
                        Ot("hr"),
                        wt._v(" "),
                        Ot(
                          "div",
                          {
                            staticClass: "block-content-product",
                          },
                          [
                            Ot(
                              "div",
                              {
                                staticClass: "block-content-product-left",
                              },
                              [
                                wt.productData.specification &&
                                wt.$device.isMobile
                                  ? Ot("TechnicalInfo", {
                                      staticClass: "mobile",
                                      attrs: {
                                        "technical-info-basic":
                                          wt.productData.specification.basic,
                                        "technical-info-full":
                                          wt.productData.specification
                                            .full_by_group,
                                      },
                                    })
                                  : wt._e(),
                                wt._v(" "),
                                wt.pageInfo.content ||
                                wt.productData.general.attributes
                                  .key_selling_points
                                  ? Ot("Content", {
                                      attrs: {
                                        "key-selling-points":
                                          wt.productData.general.attributes
                                            .key_selling_points,
                                        content: wt.pageInfo.content,
                                      },
                                    })
                                  : wt._e(),
                                wt._v(" "),
                                wt.$device.isMobile
                                  ? Ot(
                                      "render-on-scroll",
                                      {
                                        attrs: {
                                          "offset-y": 10,
                                        },
                                      },
                                      [
                                        wt.sforumPost.dataItem.length > 0
                                          ? Ot("BlockSforum", {
                                              staticClass: "mobile",
                                              attrs: {
                                                data: wt.sforumPost,
                                              },
                                            })
                                          : wt._e(),
                                        wt._v(" "),
                                        (null ===
                                          (gt = wt.productData.general) ||
                                        void 0 === gt
                                          ? void 0
                                          : gt.youtube.length) > 0
                                          ? Ot("BoxProductTVC", {
                                              staticClass: "mobile",
                                              attrs: {
                                                "tvc-list":
                                                  null ===
                                                    (ft =
                                                      wt.productData.general) ||
                                                  void 0 === ft
                                                    ? void 0
                                                    : ft.youtube,
                                                "show-modal": wt.showModalTVC,
                                              },
                                            })
                                          : wt._e(),
                                        wt._v(" "),
                                        [43, 56].includes(
                                          null ===
                                            (kt = wt.productData.filterable) ||
                                            void 0 === kt
                                            ? void 0
                                            : kt.stock_available_id
                                        )
                                          ? wt._e()
                                          : Ot("BoxSameProductMobile", {
                                              staticClass: "mobile",
                                              attrs: {
                                                "is-compare": !0,
                                                "product-data": wt.productData,
                                                type: "similar",
                                                title: "Sản phẩm tương tự",
                                              },
                                            }),
                                        wt._v(" "),
                                        wt.isOldProduct
                                          ? wt._e()
                                          : Ot("BoxSameProductMobile", {
                                              staticClass: "mobile",
                                              attrs: {
                                                "product-data": wt.productData,
                                                type: "old_product",
                                                title: "Tham khảo thêm hàng cũ",
                                                "is-old": !0,
                                              },
                                            }),
                                      ],
                                      1
                                    )
                                  : wt._e(),
                                wt._v(" "),
                                Ot(
                                  "render-on-scroll",
                                  {
                                    attrs: {
                                      height: "250px",
                                      "offset-y": 50,
                                    },
                                  },
                                  [Ot("FaqModule")],
                                  1
                                ),
                                wt._v(" "),
                                Ot(
                                  "client-only",
                                  [
                                    wt.productData.general.name
                                      ? Ot("BoxReview", {
                                          attrs: {
                                            "title-product":
                                              wt.productData.general.name,
                                            "product-info": wt.productData,
                                            "is-product-detail": !0,
                                          },
                                        })
                                      : wt._e(),
                                  ],
                                  1
                                ),
                                wt._v(" "),
                                Ot("Comment", {
                                  attrs: {
                                    "comment-type": "product",
                                    "product-id": wt.productId,
                                    "page-name":
                                      null === (xt = wt.productData.general) ||
                                      void 0 === xt
                                        ? void 0
                                        : xt.name,
                                  },
                                }),
                              ],
                              1
                            ),
                            wt._v(" "),
                            Ot(
                              "div",
                              {
                                staticClass: "block-content-product-right",
                              },
                              [
                                Ot(
                                  "render-on-scroll",
                                  {
                                    attrs: {
                                      "offset-y": 10,
                                    },
                                  },
                                  [
                                    wt.productData.specification &&
                                    !wt.$device.isMobile
                                      ? Ot("TechnicalInfo", {
                                          attrs: {
                                            "technical-info-basic":
                                              wt.productData.specification
                                                .basic,
                                            "technical-info-full":
                                              wt.productData.specification
                                                .full_by_group,
                                            "product-info": wt.productData,
                                            "promotion-pack":
                                              wt.promotionPack || {},
                                            "show-button-print": !0,
                                          },
                                        })
                                      : wt._e(),
                                    wt._v(" "),
                                    wt.sforumPost.dataItem.length > 0
                                      ? Ot("BlockSforum", {
                                          attrs: {
                                            data: wt.sforumPost,
                                          },
                                        })
                                      : wt._e(),
                                  ],
                                  1
                                ),
                                wt._v(" "),
                                (null === (Dt = wt.productData.general) ||
                                void 0 === Dt
                                  ? void 0
                                  : Dt.youtube.length) > 0
                                  ? Ot("BoxProductTVC", {
                                      attrs: {
                                        "tvc-list":
                                          null ===
                                            (yt = wt.productData.general) ||
                                          void 0 === yt
                                            ? void 0
                                            : yt.youtube,
                                        "show-modal": wt.showModalTVC,
                                      },
                                    })
                                  : wt._e(),
                              ],
                              1
                            ),
                          ]
                        ),
                      ],
                      2
                    ),
                    wt._v(" "),
                    "" !==
                    (null === (Pt = wt.blockData) || void 0 === Pt
                      ? void 0
                      : Pt.b2b)
                      ? Ot("ModalB2b", {
                          attrs: {
                            "product-data":
                              wt.variants[wt.selectColorVariantsIndex],
                          },
                        })
                      : wt._e(),
                    wt._v(" "),
                    Ot("BoxOrderButtonMobile", {
                      attrs: {
                        "product-data": wt.productData,
                        status: wt.checkingProductStatus(
                          null === (Ct = wt.productData.filterable) ||
                            void 0 === Ct
                            ? void 0
                            : Ct.stock_available_id,
                          null === (St = wt.productData.filterable) ||
                            void 0 === St
                            ? void 0
                            : St.stock,
                          null === (Bt = wt.productData.filterable) ||
                            void 0 === Bt
                            ? void 0
                            : Bt.price
                        ),
                        "pre-order-price": Math.trunc(
                          wt.productData.general.attributes.tien_coc
                        ),
                        "uri-list": wt.productData.general.categories,
                      },
                    }),
                    wt._v(" "),
                    Ot("TimerBanner", {
                      attrs: {
                        "type-page": "product",
                      },
                    }),
                    wt._v(" "),
                    Ot("PdpCompareModal", {
                      attrs: {
                        "product-data": wt.productData,
                      },
                    }),
                    wt._v(" "),
                    Ot("PdpSelectProductCompareModal", {
                      attrs: {
                        "product-data": wt.productData,
                      },
                    }),
                  ],
                  1
                )
              : wt._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, {
        TechnicalInfo: r(524).default,
        Content: r(511).default,
        BlockSforum: r(522).default,
      });
    },
    961: function (t, e, r) {
      "use strict";
      r(3)(
        {
          target: "Math",
          stat: !0,
        },
        {
          trunc: r(297),
        }
      );
    },
    962: function (t, e, r) {
      "use strict";
      r(705);
    },
  },
]);
