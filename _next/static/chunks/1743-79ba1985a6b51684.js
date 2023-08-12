"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1743],
  {
    9707: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return c;
        },
      });
      var a = n(828),
        i = n(85893),
        l = n(67294),
        r = n(94184),
        t = n.n(r);
      function c(e) {
        var s = e.className,
          n = e.isChecked,
          r = e.image,
          c = e.label,
          o = (e.children, e.onChange),
          d = (0, a.Z)(l.useState(n), 2),
          m = d[0],
          u = d[1];
        return (0, i.jsxs)("label", {
          className: t()("checkbox ".concat(s)),
          children: [
            (0, i.jsx)("input", {
              type: "checkbox",
              onChange: function (e) {
                o(e.target.checked),
                  u(function (e) {
                    return !e;
                  });
              },
              checked: m,
            }),
            (0, i.jsx)("span", { className: "check" }),
            (0, i.jsxs)("span", {
              className: "label",
              children: [
                r &&
                  (0, i.jsx)("div", {
                    className: "image-wrapper",
                    children: r,
                  }),
                c,
              ],
            }),
          ],
        });
      }
      c.defaultProps = {
        className: "",
        isChecked: !1,
        image: "",
        label: "",
        onChange: function () {},
      };
    },
    35803: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return t;
        },
      });
      var a = n(85893),
        i = (n(67294), n(45697)),
        l = n.n(i),
        r = n(49142);
      function t(e) {
        var s = e.name,
          n = (e.className, e.isMulti),
          i = e.isSearchable,
          l = e.isClearable,
          t = e.options,
          c = e.value,
          o = e.placeholder,
          d = e.isError,
          m = e.isDisabled,
          u = e.onChange;
        return (0, a.jsx)(r.ZP, {
          id: s,
          instanceId: s,
          inputId: s,
          className: "select-field ".concat(d ? "error" : ""),
          classNamePrefix: "form-field",
          isMulti: Boolean(n),
          isSearchable: Boolean(i),
          isClearable: Boolean(l),
          options: t,
          isDisabled: Boolean(m),
          value: (function (e, s) {
            if (void 0 === s || null === s || "" === s) return [];
            if ("object" == typeof s && 0 == s.length) return [];
            if ("object" == typeof s && s.length > 0) {
              var n = s.map(function (e) {
                return e.value;
              });
              return e.filter(function (e) {
                return n.includes(e.value);
              });
            }
            return e
              ? e.find(function (e) {
                  return e.value === s.value;
                })
              : [];
          })(t, c),
          placeholder: o,
          onChange: function (e) {
            return u(e);
          },
        });
      }
      t.propTypes = { placeholder: l().string, onChange: l().func };
    },
    77683: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return t;
        },
      });
      var a = n(85893),
        i = (n(67294), n(85657)),
        l = n(94184),
        r = n.n(l);
      function t(e) {
        var s = e.type,
          n = e.isLoading,
          l = e.schema,
          t = e.className,
          c = e.onClick,
          o = e.overflowHidden,
          d = e.children;
        return (0, a.jsxs)("button", {
          type: s,
          className: r()(t, l, { loading: n }),
          onClick: c,
          children: [
            d,
            n &&
              (0, a.jsx)(i.Z, {
                loader_size: 20,
                schema: l,
                overflow_hidden: o,
              }),
          ],
        });
      }
      t.defaultProps = {
        type: "submit",
        isLoading: !1,
        schema: "button-loader-white",
        className: "button",
        overflowHidden: !1,
        onClick: function () {},
      };
    },
    85657: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return p;
        },
      });
      var a = n(51438),
        i = n(52951),
        l = n(88029),
        r = n(82337),
        t = n(85893),
        c = n(67294),
        o = n(45697),
        d = n.n(o),
        m = n(29238),
        u = n.n(m),
        h = n(94184),
        x = n.n(h),
        p = (function (e) {
          (0, l.Z)(n, e);
          var s = (0, r.Z)(n);
          function n(e) {
            var i;
            return (
              (0, a.Z)(this, n),
              ((i = s.call(this, e)).state = {
                loading_text: "",
                loading_duration: 0,
              }),
              i
            );
          }
          return (
            (0, i.Z)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    s = this.props,
                    n = s.overflow_hidden,
                    a = s.is_talking,
                    i = s.loading_text_0,
                    l = s.loading_text_10,
                    r = s.loading_text_30;
                  n && document.body.classList.add("overflow-hidden"),
                    !0 === a &&
                      (i && this.setState({ loading_text: i }),
                      (this.interval = window.setInterval(function () {
                        e.setState(function (s) {
                          s.loading_duration;
                          return {
                            loading_duration: Number(
                              e.state.loading_duration + 1
                            ),
                          };
                        }),
                          10 == e.state.loading_duration
                            ? e.setState({ loading_text: l })
                            : 30 == e.state.loading_duration &&
                              e.setState({ loading_text: r });
                      }, 1e3)));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.overflow_hidden &&
                    document.body.classList.remove("overflow-hidden"),
                    window.clearInterval(this.interval);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    s = e.overlay_type,
                    n = e.schema,
                    a = e.isRelative,
                    i = e.show_loader,
                    l = e.loader_size,
                    r = e.loader_width,
                    c = e.is_talking;
                  return (0, t.jsx)("div", {
                    className: x()("page-loader", s, n, { relative: a }),
                    children: (0, t.jsxs)("div", {
                      className: "loader-animation",
                      children: [
                        i
                          ? (0, t.jsx)("div", {
                              className: "loader",
                              style: {
                                width: l + "px",
                                height: l + "px",
                                borderWidth: r + "px",
                              },
                            })
                          : null,
                        c
                          ? (0, t.jsx)("div", {
                              className: "loader-text",
                              style: {
                                textAlign: "center",
                                transform:
                                  "translate(-50%, calc(-50% + ".concat(
                                    l,
                                    "px))"
                                  ),
                              },
                              dangerouslySetInnerHTML: {
                                __html: u().sanitize(this.state.loading_text),
                              },
                            })
                          : null,
                      ],
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(c.Component);
      (p.defaultProps = {
        overflow_hidden: !0,
        overlay_type: "",
        schema: "",
        isRelative: !1,
        show_loader: !0,
        loader_size: 30,
        loader_width: 4,
        is_talking: !1,
        loading_text_0: "",
        loading_text_10: "Just a little longer...",
        loading_text_30: "Nearly there...",
      }),
        (p.propTypes = {
          overflow_hidden: d().bool,
          overlay_type: d().string,
          schema: d().string,
          isRelative: d().bool,
          show_loader: d().bool.isRequired,
          loader_size: d().number.isRequired,
          loader_width: d().number.isRequired,
          is_talking: d().bool,
          loading_text_0: d().string,
          loading_text_10: d().string,
          loading_text_30: d().string,
        });
    },
    71792: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return h;
        },
      });
      var a = n(828),
        i = n(85893),
        l = n(67294),
        r = n(25617),
        t = n(24986),
        c = n.n(t),
        o = n(38608),
        d = n(26042),
        m = n(69396);
      function u(e) {
        var s = e.className,
          n = e.image,
          r = e.label,
          t = e.value,
          c = e.onChange,
          o = (e.children, (0, a.Z)(l.useState(!1), 2)),
          u = (o[0], o[1]);
        return (0, i.jsxs)("label", {
          className: s,
          children: [
            (0, i.jsx)(
              "input",
              (0, m.Z)((0, d.Z)({}, e), {
                type: "radio",
                onChange: function (e) {
                  c(t),
                    u(function (e) {
                      return !e;
                    });
                },
              })
            ),
            (0, i.jsx)("span", { className: "check" }),
            (0, i.jsxs)("span", {
              className: "label",
              children: [
                n &&
                  (0, i.jsx)("div", {
                    className: "image-wrapper",
                    children: n,
                  }),
                r,
              ],
            }),
          ],
        });
      }
      function h(e) {
        var s = e.listing,
          n = e.financingLinkRef,
          t = (0, r.I0)(),
          d = (0, a.Z)(l.useState(""), 2),
          m = d[0],
          h = d[1],
          x = (0, a.Z)(l.useState(""), 2),
          p = x[0],
          j = x[1],
          g = (0, a.Z)(l.useState(""), 2),
          f = g[0],
          v = g[1];
        return (
          l.useEffect(
            function () {
              if ("" != m && "" != p) {
                var e = m,
                  s = 0;
                switch (p.value) {
                  case "5years":
                    s = 0.0198;
                    break;
                  case "10years":
                    s = 0.0132;
                    break;
                  case "15years":
                    s = 0.0096;
                }
                (e = (e * s).toLocaleString(void 0, {
                  maximumFractionDigits: 2,
                })),
                  v(e);
              } else v("0");
            },
            [m, p]
          ),
          (0, i.jsxs)("div", {
            className: "financing-calculator",
            children: [
              (0, i.jsx)("div", {
                className: "easy-approval",
                children: "Easy Approvals",
              }),
              (0, i.jsx)("h2", { children: "Financing Calculator" }),
              (0, i.jsxs)("div", {
                className: "calculator",
                children: [
                  (0, i.jsxs)("div", {
                    className: "field-row",
                    children: [
                      (0, i.jsx)("label", {
                        children: "Estimated Loan Amount",
                      }),
                      (0, i.jsx)("input", {
                        type: "text",
                        className: "form-field",
                        placeholder: "Loan Amount ($)",
                        onChange: function (e) {
                          return (function (e) {
                            var s = e.target.value;
                            (c()(s) || "" == s) && h(s);
                          })(e);
                        },
                        value: m,
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "field-row",
                    children: [
                      (0, i.jsx)("label", { children: "Loan Options" }),
                      [
                        { label: "0% / same as cash", value: "month" },
                        { label: "6.99% / 5 years", value: "5years" },
                        { label: "9.99% / 10 years", value: "10years" },
                        { label: "7.99% / 15 years", value: "15years" },
                      ].map(function (e) {
                        return (0, i.jsx)(
                          u,
                          {
                            label: e.label,
                            value: e,
                            onChange: function (e) {
                              return j(e);
                            },
                            checked: e.value == p.value,
                          },
                          e.value
                        );
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "field-row monthly-payment",
                    children: (0, i.jsx)("div", {
                      className: "value",
                      children: (0, i.jsxs)("span", {
                        className: "total",
                        children: ["$", f, " / Month"],
                      }),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "button-row",
                    children: (0, i.jsx)("button", {
                      type: "button",
                      className: "button green medium",
                      onClick: function () {
                        "" != s.momnt_code &&
                        s.listing_url.financing_url &&
                        "" == s.listing_url.upgrade_embedded_url
                          ? window.open(s.listing_url.financing_url, "_blank")
                          : (s.listing_url.financing_url &&
                              null == s.momnt_code) ||
                            (s.upgrade_embedded_url && null == s.momnt_code)
                          ? n.current.click()
                          : t(
                              (0, o.f)({
                                show: !0,
                                listing_id: s.listing_id,
                                loanAmount: m || 0,
                                loanOption: p,
                              })
                            );
                      },
                      children: "Apply Now",
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      u.defaultProps = {
        className: "checkbox",
        image: "",
        label: "",
        value: "",
        onChange: function () {},
      };
    },
    36139: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return g;
        },
      });
      var a = n(85893),
        i = n(67294),
        l = n(88767),
        r = n(25617),
        t = n(82175),
        c = n(92345),
        o = n(74231),
        d = n(94184),
        m = n.n(d),
        u = n(51649),
        h = n(89818),
        x = n(38608),
        p = n(77683),
        j = n(35803);
      function g(e) {
        var s = e.listing,
          n = (0, r.I0)(),
          d = (0, r.v9)(function (e) {
            return e.listing.popup.financingCalculator;
          }),
          g = [
            { label: "0% / same as cash", value: "month" },
            { label: "6.99% / 5 years", value: "5years" },
            { label: "9.99% / 10 years", value: "10years" },
            { label: "7.99% / 15 years", value: "15years" },
          ],
          f = (0, l.useMutation)(function (e) {
            var a = new FormData();
            return (
              a.append("listing_id", s.listing_id),
              a.append("first_name", e.firstName),
              a.append("last_name", e.lastName),
              a.append("email", e.email),
              a.append("phone_number", e.phoneNumber),
              a.append("loan_amount", e.loanAmount),
              a.append("loan_option", e.loanOption.label),
              n((0, h.cx)(a))
            );
          });
        return (0, a.jsx)(c.Z, {
          modal: !0,
          defaultOpen: !0,
          className: "popup-form",
          onClose: function () {
            n((0, x.f)("hide"));
          },
          children: function (e) {
            return (0, a.jsxs)(i.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: "header",
                  children: [
                    (0, a.jsx)("h2", { children: "Get Financing" }),
                    (0, a.jsx)("div", {
                      className: "close-popup",
                      onClick: e,
                      children: (0, a.jsx)(u.j7p, { className: "icon" }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "content",
                  children: (0, a.jsx)(t.J9, {
                    initialValues: {
                      firstName: "",
                      lastName: "",
                      email: "",
                      phoneNumber: "",
                      loanAmount: d.loanAmount,
                      loanOption: d.loanOption.value
                        ? g.find(function (e) {
                            return e.value == d.loanOption.value;
                          })
                        : {},
                    },
                    validationSchema: o
                      .Ry({
                        firstName: o.Z_().required("First name is required"),
                        lastName: o.Z_().required("Last name is required"),
                        email: o
                          .Z_()
                          .email("Email must be valid")
                          .required("Email is required"),
                        phoneNumber: o
                          .Z_()
                          .required("Phone number is required"),
                        loanAmount: o
                          .Rx()
                          .required("Loan amount is required")
                          .min(1, "Amount be more than 0")
                          .typeError("Loan Amount must be numeric"),
                      })
                      .shape({
                        loanOption: o
                          .nK()
                          .test(
                            "loanOptionExist",
                            "Incorrect option",
                            function (e) {
                              return !!g.filter(function (s) {
                                return s.value == e.value;
                              }).length;
                            }
                          ),
                      }),
                    onSubmit: function (e, s) {
                      var a = s.setSubmitting;
                      s.resetForm;
                      f.mutate(e, {
                        onSuccess: function (e) {
                          n((0, x.f)("hide")), a(!1);
                        },
                        onError: function (e) {
                          a(!1);
                        },
                      });
                    },
                    children: function (e) {
                      return (0, a.jsxs)(t.l0, {
                        className: "manage-form",
                        autoComplete: "off",
                        children: [
                          (0, a.jsx)("pre", {
                            className: "hide",
                            children: JSON.stringify(e.values, null, 2),
                          }),
                          (0, a.jsxs)("div", {
                            className: "field-row two-column",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "field-column",
                                children: [
                                  (0, a.jsxs)("label", {
                                    children: [
                                      "First Name ",
                                      (0, a.jsx)("span", {
                                        className: "icon tc-red",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)(t.gN, {
                                    className: m()("form-field", {
                                      error:
                                        e.errors.firstName &&
                                        e.touched.firstName,
                                    }),
                                    name: "firstName",
                                  }),
                                  (0, a.jsx)(t.Bc, {
                                    component: "span",
                                    className: "description error",
                                    name: "firstName",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "field-column",
                                children: [
                                  (0, a.jsxs)("label", {
                                    children: [
                                      "Last Name ",
                                      (0, a.jsx)("span", {
                                        className: "icon tc-red",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)(t.gN, {
                                    className: m()("form-field", {
                                      error:
                                        e.errors.lastName && e.touched.lastName,
                                    }),
                                    name: "lastName",
                                  }),
                                  (0, a.jsx)(t.Bc, {
                                    component: "span",
                                    className: "description error",
                                    name: "lastName",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "field-row",
                            children: [
                              (0, a.jsxs)("label", {
                                children: [
                                  "Email address ",
                                  (0, a.jsx)("span", {
                                    className: "icon tc-red",
                                    children: "*",
                                  }),
                                ],
                              }),
                              (0, a.jsx)(t.gN, {
                                className: m()("form-field", {
                                  error: e.errors.email && e.touched.email,
                                }),
                                name: "email",
                              }),
                              (0, a.jsx)(t.Bc, {
                                component: "span",
                                className: "description error",
                                name: "email",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "field-row",
                            children: [
                              (0, a.jsxs)("label", {
                                children: [
                                  "Phone number ",
                                  (0, a.jsx)("span", {
                                    className: "icon tc-red",
                                    children: "*",
                                  }),
                                ],
                              }),
                              (0, a.jsx)(t.gN, {
                                className: m()("form-field", {
                                  error:
                                    e.errors.phoneNumber &&
                                    e.touched.phoneNumber,
                                }),
                                name: "phoneNumber",
                              }),
                              (0, a.jsx)(t.Bc, {
                                component: "span",
                                className: "description error",
                                name: "phoneNumber",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "field-row two-column",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "field-column",
                                children: [
                                  (0, a.jsxs)("label", {
                                    children: [
                                      "Estimated Loan Amount ",
                                      (0, a.jsx)("span", {
                                        className: "icon tc-red",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)(t.gN, {
                                    name: "loanAmount",
                                    className: m()("form-field t-center", {
                                      error:
                                        e.errors.loanAmount &&
                                        e.touched.loanAmount,
                                    }),
                                  }),
                                  (0, a.jsx)(t.Bc, {
                                    component: "span",
                                    className: "description error",
                                    name: "loanAmount",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "field-column",
                                children: [
                                  (0, a.jsxs)("label", {
                                    children: [
                                      "Loan Option ",
                                      (0, a.jsx)("span", {
                                        className: "icon tc-red",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)(j.Z, {
                                    name: "loanOption",
                                    options: g,
                                    value: e.values.loanOption,
                                    placeholder: "Select Option",
                                    isError:
                                      e.errors.loanOption &&
                                      e.touched.loanOption,
                                    onChange: function (s) {
                                      return e.setFieldValue("loanOption", s);
                                    },
                                  }),
                                  (0, a.jsx)(t.Bc, {
                                    component: "span",
                                    className: "description error",
                                    name: "loanOption",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "button-row",
                            children: (0, a.jsx)(p.Z, {
                              className: "button medium blue-gradient",
                              isLoading: e.isSubmitting,
                              children: "Submit",
                            }),
                          }),
                        ],
                      });
                    },
                  }),
                }),
              ],
            });
          },
        });
      }
    },
    38075: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return x;
        },
      });
      var a = n(26042),
        i = n(69396),
        l = n(828),
        r = n(85893),
        t = n(67294),
        c = n(99338),
        o = n(60155),
        d = (n(25617), n(79352));
      function m(e) {
        e.location, e.selectedLocation;
        var s = (0, l.Z)(t.useState(!1), 2),
          n = (s[0], s[1]);
        return (0, r.jsx)("button", {
          className: "marker",
          "aria-label": "Map marker",
          onMouseOver: function () {
            return n(!1);
          },
          onMouseOut: function () {
            return n(!1);
          },
          onClick: function (e) {
            e.preventDefault();
          },
          children: (0, r.jsx)(d.ury, { className: "marker-icon" }),
        });
      }
      n(25675);
      var u = n(51649);
      function h(e) {
        var s = e.listing,
          n = e.selectedLocation;
        return (0, r.jsx)(c.GI, {
          className: "listing-popup",
          latitude: Number(n.latitude),
          longitude: Number(n.longitude),
          offsetTop: -5,
          offsetLeft: 10,
          closeButton: !1,
          closeOnClick: !1,
          children: (0, r.jsxs)("div", {
            className: "popup-detail",
            children: [
              (0, r.jsx)("div", { className: "header", children: s.title }),
              (0, r.jsxs)("div", {
                className: "content",
                children: [
                  (0, r.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "detail-wrapper",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "detail",
                            children: [
                              (0, r.jsx)("div", {
                                className: "icon-wrapper",
                                children: (0, r.jsx)(o.UXH, {
                                  className: "icon",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "value",
                                children: ""
                                  .concat(n.address_line_1, ", ")
                                  .concat(n.city)
                                  .concat(n.state ? ", " + n.state : "", ", ")
                                  .concat(n.country, " ")
                                  .concat(n.postal_code),
                              }),
                            ],
                          }),
                          s.phone_number &&
                            (0, r.jsxs)("div", {
                              className: "detail",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "icon-wrapper",
                                  children: (0, r.jsx)(u.HQO, {
                                    className: "icon",
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "value",
                                  children: s.phone_number,
                                }),
                              ],
                            }),
                          n.website_url &&
                            (0, r.jsxs)("div", {
                              className: "detail",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "icon-wrapper",
                                  children: (0, r.jsx)(u.G$d, {
                                    className: "icon",
                                  }),
                                }),
                                (0, r.jsx)("a", {
                                  href: n.website_url,
                                  className: "value",
                                  target: "_blank",
                                  children: "view our site",
                                }),
                              ],
                            }),
                          n.facebook_url ||
                            n.linkedin_url ||
                            (n.instagram_url &&
                              (0, r.jsxs)("div", {
                                className: "socialmedia-links",
                                children: [
                                  n.facebook_url &&
                                    (0, r.jsx)("a", {
                                      href: n.facebook_url,
                                      target: "_blank",
                                      children: (0, r.jsx)(u.egd, {
                                        className: "icon",
                                      }),
                                    }),
                                  n.linkedin_url &&
                                    (0, r.jsx)("a", {
                                      href: n.linkedin_url,
                                      target: "_blank",
                                      children: (0, r.jsx)(u.gXb, {
                                        className: "icon",
                                      }),
                                    }),
                                  n.instagram_url &&
                                    (0, r.jsx)("a", {
                                      href: n.instagram_url,
                                      target: "_blank",
                                      children: (0, r.jsx)(u.oVe, {
                                        className: "icon",
                                      }),
                                    }),
                                ],
                              })),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "logo-wrapper",
                        children: (0, r.jsx)("img", {
                          className: "logo",
                          src: s.logo_url,
                          alt: "".concat(s.title, " logo"),
                          width: "120",
                          height: "60",
                          loading: "lazy",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", { className: "readmore" }),
                ],
              }),
            ],
          }),
        });
      }
      function x(e) {
        var s = e.listing,
          n = e.markers,
          d = (0, l.Z)(
            t.useState({
              latitude: Number(n[0].latitude),
              longitude: Number(n[0].longitude),
              width: "100%",
              height: "100%",
              zoom: 15,
            }),
            2
          ),
          u = d[0],
          x = d[1],
          p = (0, l.Z)(t.useState(n[0]), 2),
          j = p[0],
          g = p[1];
        return (0, r.jsxs)(
          c.ZP,
          (0, i.Z)((0, a.Z)({ className: "map-canvas" }, u), {
            mapboxApiAccessToken:
              "pk.eyJ1IjoiY29udHJhY3RvcmJsdWVwYWdlcyIsImEiOiJja2ZodnI5eXgwMWZxMzFxaG84cTV1c3pyIn0.anVeoGSjG2qYgsqzIUaPGw",
            attributionControl: !1,
            mapStyle:
              "mapbox://styles/contractorbluepages/ckthzjp125ptp19qtlqjlioro",
            onViewportChange: function (e) {
              return x(e);
            },
            minZoom: 10,
            maxZoom: 15,
            scrollZoom: !1,
            children: [
              (0, r.jsx)("div", {
                className: "navigate-locations-wrapper",
                children: (0, r.jsxs)("div", {
                  className: "navigate-locations",
                  children: [
                    (0, r.jsx)("div", {
                      className: "navigate-header",
                      children: "Navigate Location",
                    }),
                    (0, r.jsx)("div", {
                      className: "locations",
                      children: n.map(function (e) {
                        return (0, r.jsxs)(
                          "div",
                          {
                            className: "location ".concat(
                              e.location_id == j.location_id ? "active" : ""
                            ),
                            onClick: function () {
                              g(e),
                                x(
                                  (0, i.Z)((0, a.Z)({}, u), {
                                    latitude: e.latitude,
                                    longitude: e.longitude,
                                  })
                                );
                            },
                            children: [
                              (0, r.jsx)("div", {
                                className: "icon",
                                children: (0, r.jsx)(o.UXH, {
                                  className: "icon",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "value",
                                children: ""
                                  .concat(e.address_line_1)
                                  .concat(e.state ? ", " + e.state : "", ", ")
                                  .concat(e.country, " ")
                                  .concat(e.postal_code),
                              }),
                            ],
                          },
                          e.location_id
                        );
                      }),
                    }),
                  ],
                }),
              }),
              n.map(function (e) {
                return (0,
                r.jsx)(c.Jx, { className: "marker-wrapper", latitude: Number(e.latitude), longitude: Number(e.longitude), children: (0, r.jsx)(m, { location: e, selectedLocation: j }) }, e.location_id);
              }),
              j && (0, r.jsx)(h, { listing: s, selectedLocation: j }),
            ],
          })
        );
      }
    },
    45692: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return w;
        },
      });
      var a = n(47568),
        i = n(828),
        l = n(20414),
        r = n(85893),
        t = n(9008),
        c = n.n(t),
        o = (n(25675), n(4298)),
        d = n.n(o),
        m = n(11163),
        u = n(67294),
        h = n(88767),
        x = n(25617),
        p = n(82175),
        j = n(74231),
        g = n(8193),
        f = n(34853),
        v = n(94184),
        N = n.n(v),
        _ = n(89818),
        b = n(9707);
      function w(e) {
        var s = e.listing,
          n = ((0, m.useRouter)(), (0, x.I0)()),
          t = u.useRef(),
          o = (0, i.Z)(u.useState(!0), 2),
          v = o[0],
          w = o[1],
          y = (0, h.useMutation)(
            (function () {
              var e = (0, a.Z)(function (e) {
                var a, i;
                return (0, l.__generator)(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return [4, t.current.executeAsync()];
                    case 1:
                      return (
                        (a = l.sent()),
                        (i = new FormData()).append("first_name", e.first_name),
                        i.append("last_name", e.last_name),
                        i.append("phone_number", e.phone_number),
                        i.append("email", e.email),
                        i.append(
                          "interested_in_financing",
                          e.interested_in_financing ? 1 : 0
                        ),
                        i.append("listing_id", s.listing_id),
                        i.append("captcha_token", a),
                        [2, n((0, _.NM)(i))]
                      );
                  }
                });
              });
              return function (s) {
                return e.apply(this, arguments);
              };
            })()
          ),
          k = s.offer[0];
        return (0, r.jsxs)("div", {
          className: "banner-form",
          children: [
            s.listing_integration.facebook_pixel_id &&
              s.listing_integration.facebook_domain_verification &&
              (0, r.jsxs)(u.Fragment, {
                children: [
                  (0, r.jsx)(c(), {
                    children: (0, r.jsx)("meta", {
                      name: "facebook-domain-verification",
                      content:
                        s.listing_integration.facebook_domain_verification,
                    }),
                  }),
                  (0, r.jsx)(d(), {
                    id: "fb-pixel",
                    dangerouslySetInnerHTML: {
                      __html:
                        "\n\t\t\t\t\t\t\t!function(f,b,e,v,n,t,s)\n\t\t\t\t\t\t\t{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n\t\t\t\t\t\t\tn.callMethod.apply(n,arguments):n.queue.push(arguments)};\n\t\t\t\t\t\t\tif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n\t\t\t\t\t\t\tn.queue=[];t=b.createElement(e);t.async=!0;\n\t\t\t\t\t\t\tt.src=v;s=b.getElementsByTagName(e)[0];\n\t\t\t\t\t\t\ts.parentNode.insertBefore(t,s)}(window, document,'script',\n\t\t\t\t\t\t\t'https://connect.facebook.net/en_US/fbevents.js');\n\t\t\t\t\t\t\tfbq('init', ".concat(
                          s.listing_integration.facebook_pixel_id,
                          ");\n\t\t\t\t\t\t"
                        ),
                    },
                  }),
                ],
              }),
            (0, r.jsx)("div", {
              className: "sub-header",
              children: k
                ? (0, r.jsx)(u.Fragment, {
                    children: (0, r.jsx)("span", { children: k.title }),
                  })
                : (0, r.jsx)(u.Fragment, {
                    children: (0, r.jsx)("span", { children: "Get a Quote" }),
                  }),
            }),
            (0, r.jsx)(p.J9, {
              initialValues: {
                first_name: "",
                last_name: "",
                phone_number: "",
                email: "",
                interested_in_financing: !1,
              },
              validationSchema: j.Ry({
                first_name: j.Z_().required("First name is required"),
                last_name: j.Z_().required("Last name is required"),
                phone_number: j.Z_().required("Phone number is required"),
                email: j
                  .Z_()
                  .required("Email is required")
                  .email("Invalid email format"),
              }),
              onSubmit: function (e, s) {
                var n = s.setSubmitting;
                y.mutate(e, {
                  onSuccess: function (e) {
                    window.fbq("track", "Contact"), n(!1), t.current.reset();
                  },
                  onError: function (e) {
                    n(!1), t.current.reset();
                  },
                });
              },
              children: function (e) {
                return (0, r.jsxs)(p.l0, {
                  className: "consultation-form",
                  autoComplete: "off",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "field-row two-column",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "field-column",
                          children: [
                            (0, r.jsx)(p.gN, {
                              className: N()("form-field", {
                                error:
                                  e.errors.first_name && e.touched.first_name,
                              }),
                              name: "first_name",
                              placeholder: "First Name*",
                              onKeyPress: function (e) {
                                w(
                                  (0, r.jsx)(f.Z, {
                                    ref: t,
                                    size: "invisible",
                                    sitekey:
                                      "6LfcFywdAAAAAMiSGM8sVXBeezf4GE422JxROMCk",
                                    badge: "bottomleft",
                                  })
                                );
                              },
                            }),
                            (0, r.jsx)(p.Bc, {
                              component: "span",
                              className: "description error",
                              name: "first_name",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "field-column",
                          children: [
                            (0, r.jsx)(p.gN, {
                              className: N()("form-field", {
                                error:
                                  e.errors.last_name && e.touched.last_name,
                              }),
                              name: "last_name",
                              placeholder: "Last Name*",
                            }),
                            (0, r.jsx)(p.Bc, {
                              component: "span",
                              className: "description error",
                              name: "last_name",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "field-row",
                      children: [
                        (0, r.jsx)(p.gN, {
                          className: N()("form-field", {
                            error:
                              e.errors.phone_number && e.touched.phone_number,
                          }),
                          name: "phone_number",
                          placeholder: "Phone Number*",
                        }),
                        (0, r.jsx)(p.Bc, {
                          component: "span",
                          className: "description error",
                          name: "phone_number",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "field-row",
                      children: [
                        (0, r.jsx)(p.gN, {
                          className: N()("form-field", {
                            error: e.errors.email && e.touched.email,
                          }),
                          name: "email",
                          placeholder: "Email Address*",
                        }),
                        (0, r.jsx)(p.Bc, {
                          component: "span",
                          className: "description error",
                          name: "email",
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "field-row",
                      children: (0, r.jsx)(b.Z, {
                        label: "Are you interested in financing?",
                        name: "interested_in_financing",
                        value: !1,
                        onChange: function (s) {
                          e.setFieldValue("interested_in_financing", s);
                        },
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className: "button-row",
                      children: [
                        v,
                        (0, r.jsx)("button", {
                          type: "submit",
                          className: N()("button", {
                            "disable-button": !e.isValid || e.isSubmitting,
                          }),
                          disabled: !e.isValid || e.isSubmitting,
                          children: "Submit",
                        }),
                      ],
                    }),
                    1 == s.has_discount &&
                      (0, r.jsx)("div", {
                        className: "offer-wrapper",
                        children: (0, r.jsxs)("div", {
                          className: "value",
                          children: [
                            (0, r.jsxs)("span", {
                              className: "text",
                              children: [
                                (0, r.jsx)(g.Wwr, { className: "icon" }),
                                (0, r.jsx)("strong", { children: "5%" }),
                                " Contractor Discount ",
                              ],
                            }),
                            (0, r.jsx)("span", {
                              className: "coupon-code",
                              children: "Code: #BPP5",
                            }),
                          ],
                        }),
                      }),
                    (0, r.jsx)("div", {
                      className: "disclaimer",
                      children: (0, r.jsx)("p", {
                        children:
                          "In order to ensure effective communication with your chosen contractor and BPP, it may be necessary for us to connect you by text or call. By selecting the checkbox, you consent to receive these communications, some of which may be automated. However, you have the option to opt-out of receiving these communications at any time.",
                      }),
                    }),
                  ],
                });
              },
            }),
          ],
        });
      }
    },
    82246: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return Q;
        },
      });
      var a = n(14924),
        i = n(828),
        l = n(85893),
        r = (n(9008), n(4298), n(25675)),
        t = n.n(r),
        c = (n(5152), n(67294)),
        o = n(25617),
        d = n(66007),
        m = n(29238),
        u = n.n(m),
        h = n(84925),
        x = n.n(h),
        p = n(92345),
        j = n(88330),
        g = n(63750),
        f = n(53854),
        v = n(86893),
        N = n(51649),
        _ = n(39327),
        b = n(94184),
        w = n.n(b),
        y = n(38608),
        k = n(41664),
        Z = n.n(k),
        S = n(80471),
        C = n(45692);
      function P(e) {
        var s = e.listing,
          n = (0, i.Z)(c.useState(!1), 2),
          a = n[0],
          r = n[1],
          t = function (e) {
            var s = e.target,
              n = s.offsetHeight,
              a = s.offsetWidth;
            r({ width: a, height: n });
          };
        return (0, l.jsx)("div", {
          className: "banner-wrapper",
          style: { background: "url(".concat(s.banner_url, ")") },
          children: (0, l.jsxs)("div", {
            className: "container",
            children: [
              s.contractor_commerce_code &&
                s.logo_icon &&
                (0, l.jsxs)("div", {
                  className: "top-wrapper",
                  children: [
                    (0, l.jsx)("div", {
                      className: "logo-wrapper",
                      children: (0, l.jsx)("img", {
                        src: s.logo_icon,
                        alt: "".concat(s.title, " logo"),
                        loading: "lazy",
                        onLoad: t,
                        width: a.width,
                        height: a.height,
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: "shop-button",
                      children: (0, l.jsxs)("a", {
                        href: "#concom-shop",
                        children: [
                          (0, l.jsx)(S.Tr3, { className: "icon" }),
                          (0, l.jsx)("span", { children: "Shop Now" }),
                        ],
                      }),
                    }),
                  ],
                }),
              null == s.contractor_commerce_code &&
                s.logo_icon &&
                (0, l.jsx)("div", {
                  className: "logo-wrapper",
                  children: (0, l.jsx)("img", {
                    src: s.logo_icon,
                    alt: "".concat(s.title, " logo"),
                    loading: "lazy",
                    onLoad: t,
                    width: a.width,
                    height: a.height,
                  }),
                }),
              (0, l.jsxs)("div", {
                className: "column",
                children: [
                  (0, l.jsx)("h1", { children: s.title }),
                  !1,
                  (0, l.jsx)("p", {
                    className: "banner-description",
                    children: s.banner_description,
                  }),
                  (0, l.jsxs)("div", {
                    className: "button-row",
                    children: [
                      s.listing_url.get_quote &&
                        (0, l.jsx)(Z(), {
                          href: s.listing_url.get_quote,
                          children: (0, l.jsx)("a", {
                            className: "button get-quote blue",
                            target: "_blank",
                            children: "Get A Quote",
                          }),
                        }),
                      s.phone_number &&
                        (0, l.jsx)(Z(), {
                          href: "tel:+1".concat(s.phone_number),
                          children: (0, l.jsxs)("a", {
                            className: "button call-us",
                            children: [
                              (0, l.jsx)(f.PES, { className: "icon" }),
                              "Call Us Now",
                            ],
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "column",
                children: (0, l.jsx)(C.Z, { listing: s }),
              }),
            ],
          }),
        });
      }
      var A = n(71792),
        F = n(26042),
        L = n(69396),
        q = n(46066),
        z = n(92879);
      function B(e) {
        var s = e.listingMedia,
          n = (0, i.Z)(c.useState(s), 2),
          a = n[0],
          r = (n[1], (0, i.Z)(c.useState(!1), 2)),
          t = r[0],
          o = r[1],
          d =
            (a.length,
            function (e) {
              o(e);
            });
        return (0, l.jsxs)("div", {
          className: "projects-wrapper",
          children: [
            (0, l.jsxs)("div", {
              className: "container",
              children: [
                (0, l.jsx)("div", {
                  className: "sub-header",
                  children: "Latest Work",
                }),
                (0, l.jsx)("h2", { children: "Our Projects" }),
                a.length <= 2
                  ? (0, l.jsx)("div", {
                      className: "project-list",
                      children: a.map(function (e) {
                        return (0, l.jsx)(
                          "div",
                          {
                            children: (0, l.jsx)("img", {
                              src: e.image_url,
                              alt: e.title,
                              onClick: function () {
                                return d(e.image_url);
                              },
                              width: "380",
                              height: "280",
                              loading: "lazy",
                            }),
                          },
                          e.position
                        );
                      }),
                    })
                  : (0, l.jsx)("div", {
                      className: "carousel",
                      children: (0, l.jsx)(
                        q.Z,
                        (0, L.Z)(
                          (0, F.Z)(
                            {},
                            {
                              dots: !1,
                              autoplay: !1,
                              infinite: !0,
                              slidesToShow: 3,
                              slidesToScroll: 1,
                              responsive: [
                                {
                                  breakpoint: 768,
                                  settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                  },
                                },
                                {
                                  breakpoint: 480,
                                  settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                  },
                                },
                              ],
                            }
                          ),
                          {
                            children: a.map(function (e) {
                              return (0, l.jsx)(
                                "div",
                                {
                                  children: (0, l.jsx)("img", {
                                    src: e.image_url,
                                    alt: e.title,
                                    onClick: function () {
                                      return d(e.image_url);
                                    },
                                    width: "380",
                                    height: "280",
                                    loading: "lazy",
                                  }),
                                },
                                e.position
                              );
                            }),
                          }
                        )
                      ),
                    }),
              ],
            }),
            t &&
              (0, l.jsx)(z.Z, {
                mainSrc: t,
                onCloseRequest: function () {
                  o(!1);
                },
              }),
          ],
        });
      }
      var E = n(28596);
      var T = n(38075),
        O = n(47568),
        I = n(20414),
        M = n(11163),
        R = n(88767),
        G = n(82175),
        H = n(74231),
        V = n(34853),
        W = n(8193),
        J = n(89818),
        D = n(9707);
      function U(e) {
        var s = e.listing,
          n = ((0, M.useRouter)(), (0, o.I0)()),
          a = c.useRef(),
          r = (0, i.Z)(c.useState(!0), 2),
          t = r[0],
          d = r[1],
          m = (0, R.useMutation)(
            (function () {
              var e = (0, O.Z)(function (e) {
                var i, l;
                return (0, I.__generator)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, a.current.executeAsync()];
                    case 1:
                      return (
                        (i = r.sent()),
                        (l = new FormData()).append("first_name", e.first_name),
                        l.append("last_name", e.last_name),
                        l.append("phone_number", e.phone_number),
                        l.append("email", e.email),
                        l.append(
                          "interested_in_financing",
                          e.interested_in_financing ? 1 : 0
                        ),
                        l.append("listing_id", s.listing_id),
                        l.append("captcha_token", i),
                        [2, n((0, J.NM)(l))]
                      );
                  }
                });
              });
              return function (s) {
                return e.apply(this, arguments);
              };
            })()
          ),
          u = s.offer[0];
        return (0, l.jsx)("div", {
          className: "consultation-wrapper",
          children: (0, l.jsxs)("div", {
            className: "container",
            children: [
              (0, l.jsx)("div", {
                className: "sub-header",
                children: u
                  ? (0, l.jsx)(c.Fragment, {
                      children: (0, l.jsx)("span", { children: u.title }),
                    })
                  : (0, l.jsx)(c.Fragment, {
                      children: (0, l.jsx)("span", { children: "Get a Quote" }),
                    }),
              }),
              (0, l.jsx)(G.J9, {
                initialValues: {
                  first_name: "",
                  last_name: "",
                  phone_number: "",
                  email: "",
                  interested_in_financing: !1,
                },
                validationSchema: H.Ry({
                  first_name: H.Z_().required("First name is required"),
                  last_name: H.Z_().required("Last name is required"),
                  phone_number: H.Z_().required("Phone number is required"),
                  email: H.Z_()
                    .required("Email is required")
                    .email("Invalid email format"),
                }),
                onSubmit: function (e, s) {
                  var n = s.setSubmitting;
                  m.mutate(e, {
                    onSuccess: function (e) {
                      n(!1), a.current.reset();
                    },
                    onError: function (e) {
                      n(!1), a.current.reset();
                    },
                  });
                },
                children: function (e) {
                  return (0, l.jsxs)(G.l0, {
                    id: "consultation-form",
                    className: "consultation-form",
                    autoComplete: "off",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "field-row two-column",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "field-column",
                            children: [
                              (0, l.jsx)(G.gN, {
                                className: w()("form-field", {
                                  error:
                                    e.errors.first_name && e.touched.first_name,
                                }),
                                name: "first_name",
                                placeholder: "First Name*",
                                onKeyPress: function (e) {
                                  d(
                                    (0, l.jsx)(V.Z, {
                                      ref: a,
                                      size: "invisible",
                                      sitekey:
                                        "6LfcFywdAAAAAMiSGM8sVXBeezf4GE422JxROMCk",
                                      badge: "bottomleft",
                                    })
                                  );
                                },
                              }),
                              (0, l.jsx)(G.Bc, {
                                component: "span",
                                className: "description error",
                                name: "first_name",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "field-column",
                            children: [
                              (0, l.jsx)(G.gN, {
                                className: w()("form-field", {
                                  error:
                                    e.errors.last_name && e.touched.last_name,
                                }),
                                name: "last_name",
                                placeholder: "Last Name*",
                              }),
                              (0, l.jsx)(G.Bc, {
                                component: "span",
                                className: "description error",
                                name: "last_name",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "field-row two-column",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "field-column",
                            children: [
                              (0, l.jsx)(G.gN, {
                                className: w()("form-field", {
                                  error:
                                    e.errors.phone_number &&
                                    e.touched.phone_number,
                                }),
                                name: "phone_number",
                                placeholder: "Phone Number*",
                              }),
                              (0, l.jsx)(G.Bc, {
                                component: "span",
                                className: "description error",
                                name: "phone_number",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "field-column",
                            children: [
                              (0, l.jsx)(G.gN, {
                                className: w()("form-field", {
                                  error: e.errors.email && e.touched.email,
                                }),
                                name: "email",
                                placeholder: "Email Address*",
                              }),
                              (0, l.jsx)(G.Bc, {
                                component: "span",
                                className: "description error",
                                name: "email",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "field-row",
                        children: (0, l.jsx)(D.Z, {
                          label: "Are you interested in financing?",
                          name: "interested_in_financing",
                          value: !1,
                          onChange: function (s) {
                            e.setFieldValue("interested_in_financing", s);
                          },
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: "button-row",
                        children: [
                          t,
                          (0, l.jsx)("button", {
                            type: "submit",
                            className: w()("button", {
                              "disable-button": !e.isValid || e.isSubmitting,
                            }),
                            disabled: !e.isValid || e.isSubmitting,
                            children: "Submit",
                          }),
                        ],
                      }),
                      1 == s.has_discount &&
                        (0, l.jsx)("div", {
                          className: "offer-wrapper",
                          children: (0, l.jsxs)("div", {
                            className: "value",
                            children: [
                              (0, l.jsxs)("span", {
                                className: "text",
                                children: [
                                  (0, l.jsx)(W.Wwr, { className: "icon" }),
                                  (0, l.jsx)("strong", { children: "5%" }),
                                  " Contractor Discount ",
                                ],
                              }),
                              (0, l.jsx)("span", {
                                className: "coupon-code",
                                children: "Code: #BPP5",
                              }),
                            ],
                          }),
                        }),
                    ],
                  });
                },
              }),
            ],
          }),
        });
      }
      var Y = n(36139);
      function Q(e) {
        var s,
          n = e.listing,
          r = function () {
            I({ width: window.innerWidth, height: window.innerHeight });
          },
          m = (0, o.I0)(),
          h = (0, o.v9)(function (e) {
            return e.listing.popup;
          }),
          b = c.useRef(),
          w = c.useRef(),
          k = function (e) {
            return e.schedule.open24Hours
              ? (0, l.jsx)(c.Fragment, {
                  children: (0, l.jsx)("div", {
                    className: "time",
                    children: "Open 24 hours",
                  }),
                })
              : e.schedule.closed
              ? (0, l.jsx)(c.Fragment, {
                  children: (0, l.jsx)("div", {
                    className: "time",
                    children: "Closed",
                  }),
                })
              : (0, l.jsxs)(c.Fragment, {
                  children: [
                    (0, l.jsxs)("div", {
                      className: "time",
                      children: [
                        e.schedule.start.time.label,
                        " ",
                        e.schedule.start.period.label,
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "separator",
                      children: "-",
                    }),
                    (0, l.jsxs)("div", {
                      className: "time",
                      children: [
                        e.schedule.end.time.label,
                        " ",
                        e.schedule.end.period.label,
                      ],
                    }),
                  ],
                });
          },
          Z =
            (n.facebook_pixel_code,
            (function (e) {
              var s = ("" + e)
                .replace(/\D/g, "")
                .match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
              return s
                ? [s[1] ? "+1 " : "", s[2], "-", s[3], "-", s[4]].join("")
                : null;
            })(n.phone_number)),
          S = n.listing_url.website_url
            .replace(/^https?:\/\//, "")
            .replace(/\/$/, ""),
          C = (0, i.Z)(c.useState(!1), 2),
          F = (C[0], C[1]),
          L = (0, i.Z)(c.useState(!1), 2),
          q = (L[0], L[1], (0, i.Z)(c.useState(!1), 2)),
          z = (q[0], q[1], (0, i.Z)(c.useState({ width: 0, height: 0 }), 2)),
          O = z[0],
          I = z[1],
          M = (0, i.Z)(c.useState(!1), 2),
          R = M[0],
          G = M[1];
        return (
          c.useEffect(function () {
            return (
              !1 === w.current && (w.current = !0),
              window.addEventListener("resize", r),
              r(),
              function () {
                return window.removeEventListener("resize", r);
              }
            );
          }, []),
          c.useEffect(
            function () {
              O.width > 768 && F(!1);
            },
            [O]
          ),
          (0, l.jsxs)("div", {
            className: "listing-wrapper pro",
            children: [
              (0, l.jsxs)("div", {
                className: "listing",
                children: [
                  (0, l.jsx)(P, { listing: n }),
                  (0, l.jsx)("div", {
                    className: "featured-qualities-wrapper",
                    children: (0, l.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "column",
                          children: [
                            (0, l.jsx)("div", {
                              className: "image-icon",
                              children: (0, l.jsx)("img", {
                                src: "/assets/images/listing/professional-contractors.webp",
                                alt: "Professional Contractors",
                                loading: "lazy",
                                width: "59",
                                height: "59",
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "label",
                              children: "Professional Contractors",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "column",
                          children: [
                            (0, l.jsx)("div", {
                              className: "image-icon",
                              children: (0, l.jsx)("img", {
                                src: "/assets/images/listing/affordable-service.webp",
                                alt: "Affordable Services",
                                loading: "lazy",
                                width: "59",
                                height: "59",
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "label",
                              children: "Affordable Services",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "column",
                          children: [
                            (0, l.jsx)("div", {
                              className: "image-icon",
                              children: (0, l.jsx)("img", {
                                src: "/assets/images/listing/excellent-service.webp",
                                alt: "Quality Workmanship",
                                loading: "lazy",
                                width: "59",
                                height: "59",
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "label",
                              children: "Quality Workmanship",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "column",
                          children: [
                            (0, l.jsx)("div", {
                              className: "image-icon",
                              children: (0, l.jsx)("img", {
                                src: "/assets/images/listing/best-materials.webp",
                                alt: "Best Materials",
                                loading: "lazy",
                                width: "59",
                                height: "59",
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "label",
                              children: "Best Materials",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "services-wrapper",
                    children: (0, l.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "column",
                          children: [
                            n.video_url &&
                              (0, l.jsx)("div", {
                                className: "video-wrapper mp4 player",
                                children: (0, l.jsx)(j.J5, {
                                  playsInline: !0,
                                  src: n.video_url,
                                  children: (0, l.jsx)(j.sT, {
                                    position: "center",
                                  }),
                                }),
                              }),
                            n.external_video_url &&
                              (0, l.jsx)("div", {
                                className: "video-wrapper url",
                                children: (0, l.jsx)("iframe", {
                                  src: "".concat(
                                    n.external_video_url,
                                    "?rel=0"
                                  ),
                                  loading: "lazy",
                                  width: "100%",
                                  height: "320",
                                  frameBorder: "0",
                                  title: n.title,
                                }),
                              }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "column details",
                          children: [
                            (0, l.jsx)("h2", { children: "Our Services" }),
                            (0, l.jsx)("p", {
                              className: "short-description",
                              children:
                                "We are professional home improvement contractors in the following fields:",
                            }),
                            n.listing_category.length > 0 &&
                              (0, l.jsx)("div", {
                                className: "category-wrapper",
                                children: n.listing_category.map(function (
                                  e,
                                  s
                                ) {
                                  return (0, l.jsxs)(
                                    "div",
                                    {
                                      className: "category",
                                      children: [
                                        (0, l.jsx)(g.nZm, {
                                          className: "icon",
                                        }),
                                        (0, l.jsx)("div", {
                                          className: "value",
                                          children: e,
                                        }),
                                      ],
                                    },
                                    s
                                  );
                                }),
                              }),
                            (0, l.jsxs)("div", {
                              className: "button-row",
                              children: [
                                n.momnt_code &&
                                  (0, l.jsx)(d.Z, { html: n.momnt_code }),
                                n.upgrade_embedded_url &&
                                  null == n.momnt_code &&
                                  (0, l.jsx)("a", {
                                    href: n.upgrade_embedded_url,
                                    ref: b,
                                    className: "button financing",
                                    target: "_blank",
                                    children: "Get Financing",
                                  }),
                                1 == n.listing_url.financing_status &&
                                  null == n.momnt_code &&
                                  null == n.upgrade_embedded_url &&
                                  (0, l.jsx)(c.Fragment, {
                                    children: n.listing_url.financing_url
                                      ? (0, l.jsx)("a", {
                                          href: n.listing_url.financing_url,
                                          ref: b,
                                          className: "button financing",
                                          target: "_blank",
                                          children: "Get Financing",
                                        })
                                      : (0, l.jsx)("div", {
                                          className: "button financing",
                                          onClick: function () {
                                            m(
                                              (0, y.f)({
                                                show: !0,
                                                listing_id: n.listing_id,
                                                loanAmount: 0,
                                                loanOption: {},
                                              })
                                            );
                                          },
                                          children: "Get Financing",
                                        }),
                                  }),
                                (0, l.jsx)(x(), {
                                  href: "#consultation-form",
                                  className: "button special-offer",
                                  children: "Get Special Offer",
                                }),
                                n.instant_estimator_embedded_code &&
                                  (0, l.jsx)(p.Z, {
                                    modal: !0,
                                    trigger: (0, l.jsx)("div", {
                                      className: "button instant-estimator",
                                      children: "Instant Estimator",
                                    }),
                                    children: function (e) {
                                      return (0, l.jsxs)(c.Fragment, {
                                        children: [
                                          (0, l.jsx)("div", {
                                            className: "header",
                                            children: (0, l.jsx)("div", {
                                              className: "close-popup",
                                              onClick: e,
                                              children: (0, l.jsx)(N.j7p, {
                                                className: "icon",
                                              }),
                                            }),
                                          }),
                                          (0, l.jsx)("div", {
                                            className: "content",
                                            children: (0, l.jsx)(d.Z, {
                                              html: n.instant_estimator_embedded_code,
                                            }),
                                          }),
                                        ],
                                      });
                                    },
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "content-wrapper",
                    children: (0, l.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, l.jsx)("div", {
                          className: "title",
                          children: "About us",
                        }),
                        n.content &&
                          (0, l.jsx)("div", {
                            className: "description",
                            dangerouslySetInnerHTML: {
                              __html: u().sanitize(n.content),
                            },
                          }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "financing-wrapper",
                    children: (0, l.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "financing-details",
                          children: [
                            (0, l.jsx)("div", {
                              className: "sub-title",
                              children: "Get Financing",
                            }),
                            (0, l.jsxs)("h2", {
                              className: "title",
                              children: [
                                (0, l.jsx)("span", { children: "Affordable" }),
                                " Payment Options Available\u2026 ",
                              ],
                            }),
                            (0, l.jsx)("div", {
                              className: "description",
                              children:
                                "Try our financing calculator to easily compute your estimated loan ammount in your preferred terms.",
                            }),
                            (0, l.jsxs)("div", {
                              className: "button",
                              children: [
                                "Try Now!",
                                O.width > 750
                                  ? (0, l.jsx)("img", {
                                      src: "/assets/images/listing/green-arrow-right.webp",
                                      alt: "Try Financing calculator",
                                      className: "floating-side",
                                      loading: "lazy",
                                      width: "133",
                                      height: "39",
                                    })
                                  : (0, l.jsx)("img", {
                                      src: "/assets/images/listing/green-arrow-down.webp",
                                      alt: "Try Financing calculator",
                                      className: "floating",
                                      loading: "lazy",
                                      width: "18",
                                      height: "70",
                                    }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsx)("div", {
                          className: "financing-estimator",
                          children: (0, l.jsx)(A.Z, {
                            listing: n,
                            financingLinkRef: b,
                          }),
                        }),
                      ],
                    }),
                  }),
                  n.custom_project_embedded_code
                    ? (0, l.jsx)("div", {
                        className: "companycam-wrapper",
                        children: (0, l.jsx)(d.Z, {
                          html: n.custom_project_embedded_code,
                        }),
                      })
                    : (0, l.jsx)(B, { listingMedia: n.listing_media }),
                  n.virtual_presentation_url &&
                    (0, l.jsx)("div", {
                      className: "virtual-presentation-wrapper",
                      children: (0, l.jsxs)("div", {
                        className: "container",
                        children: [
                          (0, l.jsx)("div", {
                            className: "sub-header",
                            children: "Virtual Presentation",
                          }),
                          (0, l.jsx)("h2", { children: "Watch Demo" }),
                          (0, l.jsx)("div", {
                            className: "virtual-presentation",
                            children: (0, l.jsx)("iframe", {
                              src: n.virtual_presentation_url,
                              loading: "lazy",
                              width: "100%",
                              height: "900",
                              frameBorder: "0",
                            }),
                          }),
                        ],
                      }),
                    }),
                  n.review_embedded_code &&
                    (0, l.jsxs)("div", {
                      className: "review-wrapper",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "container",
                          children: [
                            (0, l.jsx)("div", {
                              className: "column thumbnail",
                              children: (0, l.jsx)("img", {
                                src: "/assets/images/listing/review-thumbnail.webp",
                                alt: "ProReview Customers",
                                loading: "lazy",
                                width: "540",
                                height: "561",
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className: "column slider",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "logo",
                                  children: (0, l.jsx)(
                                    t(),
                                    ((s = {
                                      alt: "HK Roofing Truereviews",
                                      src: "/assets/images/listing/pro-review-logo.webp",
                                    }),
                                    (0, a.Z)(s, "alt", "ProReview"),
                                    (0, a.Z)(s, "layout", "intrinsic"),
                                    (0, a.Z)(s, "width", "250"),
                                    (0, a.Z)(s, "height", "51"),
                                    s)
                                  ),
                                }),
                                (0, l.jsx)("div", {
                                  className: "sub-header",
                                  children: "What Our Customers Are Saying...",
                                }),
                                (0, l.jsx)("div", {
                                  className: "review",
                                  children: (0, l.jsx)(d.Z, {
                                    html: n.review_embedded_code,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsx)("div", { className: "divider" }),
                      ],
                    }),
                  n.contractor_commerce_code &&
                    (0, l.jsx)("div", {
                      className: "store-wrapper",
                      children: (0, l.jsx)(d.Z, {
                        html: n.contractor_commerce_code,
                      }),
                    }),
                  n.custom_map_embedded_code
                    ? (0, l.jsxs)("div", {
                        className: "map-wrapper project-map-it",
                        children: [
                          (0, l.jsx)("div", {
                            className: "map-details",
                            children: (0, l.jsxs)("div", {
                              className: "container",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "column title",
                                  children: (0, l.jsx)("h2", {
                                    children: "Installed Projects",
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "column powered-by",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "light",
                                      children: "Powered By",
                                    }),
                                    (0, l.jsx)("img", {
                                      src: "/assets/images/listing/project-map-it-icon-small.webp",
                                      alt: "Project Map It",
                                      loading: "lazy",
                                      width: "21",
                                      height: "29",
                                    }),
                                    "Project Map It",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "map-container",
                            children: (0, l.jsx)(d.Z, {
                              html: n.custom_map_embedded_code,
                            }),
                          }),
                        ],
                      })
                    : (0, l.jsx)("div", {
                        className: "map-wrapper",
                        children: (0, l.jsx)("div", {
                          className: "map-container",
                          children: (0, l.jsx)(T.Z, {
                            listing: n,
                            markers: n.listing_location,
                          }),
                        }),
                      }),
                  (0, l.jsx)(U, { listing: n }),
                  n.roofle_embedded_code &&
                    (0, l.jsx)("div", {
                      className: "roofle-wrapper",
                      children: (0, l.jsx)(d.Z, {
                        html: n.roofle_embedded_code,
                      }),
                    }),
                  n.livechat_embedded_code &&
                    (0, l.jsx)("div", {
                      className: "live-chat-wrapper",
                      children: (0, l.jsx)(d.Z, {
                        html: n.livechat_embedded_code,
                      }),
                    }),
                  n.livechat_embedded_code && !1,
                ],
              }),
              (0, l.jsxs)("div", {
                className: "footer",
                children: [
                  (0, l.jsx)("div", {
                    className: "footer-top",
                    children: (0, l.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "column",
                          children: [
                            (0, l.jsx)("div", {
                              className: "logo-wrapper",
                              children: (0, l.jsx)("div", {
                                className: "logo",
                                children: (0, l.jsx)("img", {
                                  src: n.logo_url,
                                  alt: "".concat(n.title, " logo"),
                                  loading: "lazy",
                                  onLoad: function (e) {
                                    var s = e.target,
                                      n = s.offsetHeight,
                                      a = s.offsetWidth;
                                    G({ width: a, height: n });
                                  },
                                  width: R.width,
                                  height: R.height,
                                }),
                              }),
                            }),
                            (0, l.jsx)("p", { children: n.banner_description }),
                            (0, l.jsx)(E.Z, { listing: n }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "column",
                          children: [
                            (0, l.jsx)("div", {
                              className: "title",
                              children: "Get in Touch",
                            }),
                            n.phone_number &&
                              (0, l.jsxs)("div", {
                                className: "data phone",
                                children: [
                                  (0, l.jsx)("div", {
                                    className: "label",
                                    children: (0, l.jsx)(f.PES, {
                                      className: "icon",
                                    }),
                                  }),
                                  (0, l.jsx)("a", {
                                    href: "tel:+1".concat(n.phone_number),
                                    className: "value",
                                    children: Z,
                                  }),
                                ],
                              }),
                            (0, l.jsxs)("div", {
                              className: "data addresses",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "label",
                                  children: (0, l.jsx)(v.i63, {
                                    className: "icon",
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "value",
                                  children: n.listing_location.map(function (
                                    e
                                  ) {
                                    return (0, l.jsx)(
                                      "div",
                                      {
                                        className: "address",
                                        children: (0, l.jsxs)("div", {
                                          className: "value",
                                          children: [
                                            ""
                                              .concat(e.address_line_1, ", ")
                                              .concat(
                                                e.city ? " " + e.city : "",
                                                " "
                                              )
                                              .concat(
                                                e.state ? ", " + e.state : "",
                                                ", "
                                              )
                                              .concat(e.country, " ")
                                              .concat(e.postal_code),
                                            e.phone_number &&
                                              (0, l.jsxs)("div", {
                                                className: "phone-number",
                                                children: [
                                                  "Contact Number: ",
                                                  e.phone_number,
                                                ],
                                              }),
                                          ],
                                        }),
                                      },
                                      e.location_id
                                    );
                                  }),
                                }),
                              ],
                            }),
                            n.listing_url.website_url &&
                              (0, l.jsxs)("div", {
                                className: "data website",
                                children: [
                                  (0, l.jsx)("div", {
                                    className: "label",
                                    children: (0, l.jsx)(g.JuS, {
                                      className: "icon",
                                    }),
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "value",
                                    children: (0, l.jsx)("a", {
                                      href: n.listing_url.website_url,
                                      target: "_blank",
                                      children: S,
                                    }),
                                  }),
                                ],
                              }),
                            n.license &&
                              (0, l.jsxs)("div", {
                                className: "data license",
                                children: [
                                  (0, l.jsx)("div", {
                                    className: "label",
                                    children: (0, l.jsx)(_.lKj, {
                                      className: "icon",
                                    }),
                                  }),
                                  (0, l.jsxs)("div", {
                                    className: "value",
                                    children: [
                                      "License number: ",
                                      "#" + n.license,
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, l.jsx)("div", {
                          className: "column",
                          children:
                            n.business_hours &&
                            (0, l.jsxs)("div", {
                              className: "business-details",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "title",
                                  children: "Business Hours",
                                }),
                                (0, l.jsx)("div", {
                                  className: "business-hours",
                                  children: n.business_hours.map(function (
                                    e,
                                    s
                                  ) {
                                    return (0, l.jsxs)(
                                      "div",
                                      {
                                        className: "data day-wrapper",
                                        children: [
                                          (0, l.jsx)("div", {
                                            className: "label",
                                            children: (0, l.jsx)("span", {
                                              className: "day",
                                              children: e.day.slice(0, 3),
                                            }),
                                          }),
                                          (0, l.jsx)("div", {
                                            className: "value",
                                            children: (0, l.jsx)("div", {
                                              className: "time-wrapper",
                                              children: k(e),
                                            }),
                                          }),
                                        ],
                                      },
                                      s
                                    );
                                  }),
                                }),
                              ],
                            }),
                        }),
                        (0, l.jsx)("div", {
                          className: "column toolbox",
                          children: (0, l.jsx)("div", {
                            className: "image-wrapper",
                            children: (0, l.jsxs)("a", {
                              href: "/toolbox/",
                              children: [
                                (0, l.jsx)("img", {
                                  src: "/assets/images/homeowners-toolbox.webp",
                                  alt: "Homeowners Toolbox",
                                  width: "85",
                                  height: "49",
                                  loading: "lazy",
                                }),
                                (0, l.jsx)("span", {
                                  className: "label",
                                  children: "BPP Toolbox",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "footer-bottom",
                    children: (0, l.jsxs)("div", {
                      className: "container",
                      children: [
                        "Copyright \xa9 ",
                        new Date().getFullYear(),
                        " \u2013 BluePagesPro \u2013 All Rights Reserved.",
                      ],
                    }),
                  }),
                ],
              }),
              h.financingCalculator.show && (0, l.jsx)(Y.Z, { listing: n }),
            ],
          })
        );
      }
    },
    28596: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return r;
        },
      });
      var a = n(85893),
        i = (n(67294), n(63750)),
        l = n(89583);
      function r(e) {
        var s = e.listing;
        return (0, a.jsxs)("div", {
          className: "data social",
          children: [
            s.listing_url.facebook_url &&
              (0, a.jsx)("a", {
                href: s.listing_url.facebook_url,
                "aria-label": "Facebook",
                className: "url",
                target: "_blank",
                children: (0, a.jsx)(i.k1O, { className: "icon" }),
              }),
            s.listing_url.linkedin_url &&
              (0, a.jsx)("a", {
                href: s.listing_url.linkedin_url,
                "aria-label": "Linkedin",
                className: "url",
                target: "_blank",
                children: (0, a.jsx)(i.NQh, { className: "icon" }),
              }),
            s.listing_url.instagram_url &&
              (0, a.jsx)("a", {
                href: s.listing_url.instagram_url,
                "aria-label": "Instagram",
                className: "url",
                target: "_blank",
                children: (0, a.jsx)(i.Vs6, { className: "icon" }),
              }),
            s.listing_url.tiktok_url &&
              (0, a.jsx)("a", {
                href: s.listing_url.tiktok_url,
                "aria-label": "TikTok",
                className: "url",
                target: "_blank",
                children: (0, a.jsx)(l.nTm, { className: "icon" }),
              }),
            s.listing_url.google_my_business_url &&
              (0, a.jsx)("a", {
                href: s.listing_url.google_my_business_url,
                "aria-label": "Google",
                className: "url",
                target: "_blank",
                children: (0, a.jsx)(l.ldW, { className: "icon" }),
              }),
            s.listing_url.pinterest_url &&
              (0, a.jsx)("a", {
                href: s.listing_url.pinterest_url,
                "aria-label": "Pinterest",
                className: "url",
                target: "_blank",
                children: (0, a.jsx)(l.oIN, { className: "icon" }),
              }),
            s.listing_url.youtube_url &&
              (0, a.jsx)("a", {
                href: s.listing_url.youtube_url,
                "aria-label": "Youtube",
                className: "url",
                target: "_blank",
                children: (0, a.jsx)(l.V2E, { className: "icon" }),
              }),
            s.listing_url.twitter_url &&
              (0, a.jsx)("a", {
                href: s.listing_url.twitter_url,
                "aria-label": "Twitter",
                className: "url",
                target: "_blank",
                children: (0, a.jsx)(l.fWC, { className: "icon" }),
              }),
            s.listing_url.yelp_url &&
              (0, a.jsx)("a", {
                href: s.listing_url.yelp_url,
                "aria-label": "Yelp",
                className: "url",
                target: "_blank",
                children: (0, a.jsx)(l.Uzy, { className: "icon" }),
              }),
          ],
        });
      }
    },
    15628: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return b;
        },
      });
      var a = n(828),
        i = n(85893),
        l = (n(25675), n(41664)),
        r = n.n(l),
        t = n(67294),
        c = n(25617),
        o = n(66007),
        d = n(29238),
        m = n.n(d),
        u = n(63750),
        h = n(86893),
        x = n(53854),
        p = n(60155),
        j = n(79352),
        g = n(55788),
        f = (n(94184), n(38608)),
        v = n(71792),
        N = n(38075),
        _ = n(36139);
      function b(e) {
        var s = e.listing,
          n = function () {
            F({ width: window.innerWidth, height: window.innerHeight });
          },
          l = (0, c.I0)(),
          d = (0, c.v9)(function (e) {
            return e.listing.popup;
          }),
          b = t.useRef(),
          w = function (e) {
            return e.schedule.open24Hours
              ? (0, i.jsx)(t.Fragment, {
                  children: (0, i.jsx)("div", {
                    className: "time",
                    children: "Open 24 hours",
                  }),
                })
              : e.schedule.closed
              ? (0, i.jsx)(t.Fragment, {
                  children: (0, i.jsx)("div", {
                    className: "time",
                    children: "Closed",
                  }),
                })
              : (0, i.jsxs)(t.Fragment, {
                  children: [
                    (0, i.jsxs)("div", {
                      className: "time",
                      children: [
                        e.schedule.start.time.label,
                        " ",
                        e.schedule.start.period.label,
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "separator",
                      children: "-",
                    }),
                    (0, i.jsxs)("div", {
                      className: "time",
                      children: [
                        e.schedule.end.time.label,
                        " ",
                        e.schedule.end.period.label,
                      ],
                    }),
                  ],
                });
          },
          y = s.listing_url.website_url
            .replace(/^https?:\/\//, "")
            .replace(/\/$/, ""),
          k = (0, a.Z)(t.useState(!1), 2),
          Z = (k[0], k[1]),
          S = (0, a.Z)(t.useState(!1), 2),
          C = (S[0], S[1], (0, a.Z)(t.useState(!1), 2)),
          P = (C[0], C[1], (0, a.Z)(t.useState({ width: 0, height: 0 }), 2)),
          A = P[0],
          F = P[1],
          L = (function (e) {
            var s = ("" + e)
              .replace(/\D/g, "")
              .match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
            return s
              ? [s[1] ? "+1 " : "", s[2], "-", s[3], "-", s[4]].join("")
              : null;
          })(s.phone_number);
        return (
          t.useEffect(function () {
            return (
              window.addEventListener("resize", n),
              n(),
              function () {
                return window.removeEventListener("resize", n);
              }
            );
          }, []),
          t.useEffect(
            function () {
              A.width > 768 && Z(!1);
            },
            [A]
          ),
          (0, i.jsxs)("div", {
            className: "listing-wrapper pro-lite",
            children: [
              s.logo_icon &&
                (0, i.jsx)("div", {
                  className: "header",
                  children: (0, i.jsx)("div", {
                    className: "container",
                    children: (0, i.jsx)("div", {
                      className: "logo",
                      children: (0, i.jsx)("img", {
                        src: s.logo_icon,
                        alt: "".concat(s.title, " logo"),
                        loading: "lazy",
                      }),
                    }),
                  }),
                }),
              (0, i.jsxs)("div", {
                className: "listing",
                children: [
                  (0, i.jsx)("div", {
                    className: "banner-wrapper",
                    children: (0, i.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "column",
                          children: [
                            (0, i.jsx)("h1", { children: s.title }),
                            (0, i.jsx)("div", {
                              className: "breadcrumbs-wrapper",
                              children: (0, i.jsx)("div", {
                                className: "container",
                                children: (0, i.jsxs)("ol", {
                                  className: "breadcrumb",
                                  children: [
                                    (0, i.jsx)("li", {
                                      children: (0, i.jsx)(r(), {
                                        href: "https://bluepagespro.com/",
                                        children: "BluePagesPro",
                                      }),
                                    }),
                                    (0, i.jsx)("div", {
                                      className: "trail",
                                      children: (0, i.jsx)(u.fmn, {
                                        className: "icon",
                                      }),
                                    }),
                                    (0, i.jsx)("li", {
                                      children: (0, i.jsx)(r(), {
                                        href: "/listings",
                                        children: "Listings",
                                      }),
                                    }),
                                    (0, i.jsx)("div", {
                                      className: "trail",
                                      children: (0, i.jsx)(u.fmn, {
                                        className: "icon",
                                      }),
                                    }),
                                    (0, i.jsx)("li", { children: s.title }),
                                  ],
                                }),
                              }),
                            }),
                            (0, i.jsx)("p", {
                              children: "Learn more about us and our services",
                            }),
                            (0, i.jsxs)("div", {
                              className: "button-actions button-row",
                              children: [
                                s.momnt_code &&
                                  (0, i.jsx)(o.Z, { html: s.momnt_code }),
                                1 == s.listing_url.financing_status &&
                                  null == s.momnt_code &&
                                  (0, i.jsx)(t.Fragment, {
                                    children: s.listing_url.financing_url
                                      ? (0, i.jsx)(r(), {
                                          href: s.listing_url.financing_url,
                                          children: (0, i.jsxs)("a", {
                                            ref: b,
                                            className: "button financing",
                                            target: "_blank",
                                            children: [
                                              (0, i.jsx)(j.GdJ, {
                                                className: "icon",
                                              }),
                                              "Get Financing",
                                            ],
                                          }),
                                        })
                                      : (0, i.jsxs)("div", {
                                          className: "button financing",
                                          onClick: function () {
                                            l(
                                              (0, f.f)({
                                                show: !0,
                                                listing_id: s.listing_id,
                                                loanAmount: 0,
                                                loanOption: {},
                                              })
                                            );
                                          },
                                          children: [
                                            (0, i.jsx)(j.GdJ, {
                                              className: "icon",
                                            }),
                                            "Get Financing",
                                          ],
                                        }),
                                  }),
                                s.phone_number &&
                                  (0, i.jsx)(r(), {
                                    href: "tel:+1".concat(s.phone_number),
                                    children: (0, i.jsxs)("a", {
                                      className: "button call-us",
                                      children: [
                                        (0, i.jsx)(x.PES, {
                                          className: "icon",
                                        }),
                                        "Call Us Now",
                                      ],
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "column",
                          children: [
                            s.video_url &&
                              (0, i.jsx)("div", {
                                className: "video-wrapper mp4",
                                children: (0, i.jsx)("video", {
                                  controls: !0,
                                  loop: !0,
                                  width: "100%",
                                  children: (0, i.jsx)("source", {
                                    src: s.video_url,
                                    type: "video/mp4",
                                  }),
                                }),
                              }),
                            s.external_video_url &&
                              (0, i.jsx)("div", {
                                className: "video-wrapper url",
                                children: (0, i.jsx)("iframe", {
                                  src: "".concat(
                                    s.external_video_url,
                                    "?rel=0"
                                  ),
                                  loading: "lazy",
                                  width: "100%",
                                  height: "320",
                                  frameBorder: "0",
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "financing-wrapper",
                    children: (0, i.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "financing-details",
                          children: [
                            (0, i.jsx)("div", {
                              className: "sub-title",
                              children: "Get Financing",
                            }),
                            (0, i.jsxs)("h2", {
                              className: "title",
                              children: [
                                (0, i.jsx)("span", { children: "Affordable" }),
                                " Payment Options Available\u2026 ",
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className: "description",
                              children:
                                "Try our financing calculator to easily compute your estimated loan ammount in your preferred terms.",
                            }),
                            (0, i.jsxs)("div", {
                              className: "button",
                              children: [
                                "Try Now!",
                                A.width > 750
                                  ? (0, i.jsx)("img", {
                                      src: "/assets/images/listing/green-arrow-right.webp",
                                      alt: "Try Financing calculator",
                                      className: "floating-side",
                                      loading: "lazy",
                                    })
                                  : (0, i.jsx)("img", {
                                      src: "/assets/images/listing/green-arrow-down.webp",
                                      alt: "Try Financing calculator",
                                      className: "floating",
                                      loading: "lazy",
                                    }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "financing-estimator",
                          children: (0, i.jsx)(v.Z, {
                            listing: s,
                            financingLinkRef: b,
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "content-wrapper",
                    children: (0, i.jsxs)("div", {
                      className: "listing-detail",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "business-detail",
                          children: [
                            (0, i.jsx)("h2", { children: "About Us" }),
                            s.listing_category.length > 0 &&
                              (0, i.jsx)("div", {
                                className: "category-wrapper",
                                children: s.listing_category.map(function (
                                  e,
                                  s
                                ) {
                                  return (0, i.jsxs)(
                                    "div",
                                    {
                                      className: "category",
                                      children: [
                                        (0, i.jsx)(p.r2k, {
                                          className: "icon",
                                        }),
                                        (0, i.jsx)("div", {
                                          className: "value",
                                          children: e,
                                        }),
                                      ],
                                    },
                                    s
                                  );
                                }),
                              }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "detail-wrapper",
                          children:
                            s.content &&
                            (0, i.jsx)("div", {
                              className: "description",
                              dangerouslySetInnerHTML: {
                                __html: m().sanitize(s.content),
                              },
                            }),
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "contact-information",
                    children: (0, i.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, i.jsx)("div", {
                          className: "column logo-wrapper",
                          children: (0, i.jsx)("div", {
                            className: "logo",
                            children: (0, i.jsx)("img", {
                              src: s.logo_url,
                              alt: "".concat(s.title, " logo"),
                              loading: "lazy",
                            }),
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: "column contact-details",
                          children: [
                            (0, i.jsx)("div", {
                              className: "title",
                              children: "Contact Details",
                            }),
                            (0, i.jsxs)("div", {
                              className: "data address-wrapper",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "label",
                                  children: (0, i.jsx)(h.i63, {
                                    className: "icon",
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "value",
                                  children: s.listing_location.map(function (
                                    e
                                  ) {
                                    return (0, i.jsxs)(
                                      "div",
                                      {
                                        className: "address",
                                        children: [
                                          ""
                                            .concat(e.address_line_1, ", ")
                                            .concat(
                                              e.city ? " " + e.city + ", " : ""
                                            )
                                            .concat(
                                              e.state ? e.state + ", " : "",
                                              " "
                                            )
                                            .concat(e.country, " ")
                                            .concat(e.postal_code),
                                          e.phone_number &&
                                            (0, i.jsxs)("div", {
                                              className: "phone-number",
                                              children: [
                                                (0, i.jsx)("strong", {
                                                  children: "Contact Number:",
                                                }),
                                                " ",
                                                e.phone_number,
                                              ],
                                            }),
                                        ],
                                      },
                                      e.location_id
                                    );
                                  }),
                                }),
                              ],
                            }),
                            s.phone_number &&
                              (0, i.jsxs)("div", {
                                className: "data phone",
                                children: [
                                  (0, i.jsx)("div", {
                                    className: "label",
                                    children: (0, i.jsx)(u.SPk, {
                                      className: "icon",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "value",
                                    children: (0, i.jsx)("a", {
                                      href: "tel:+1".concat(s.phone_number),
                                      children: L,
                                    }),
                                  }),
                                ],
                              }),
                            s.listing_url.website_url &&
                              (0, i.jsxs)("div", {
                                className: "data website",
                                children: [
                                  (0, i.jsx)("div", {
                                    className: "label",
                                    children: (0, i.jsx)(u.JuS, {
                                      className: "icon",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "value",
                                    children: (0, i.jsxs)("a", {
                                      href: s.listing_url.website_url,
                                      target: "_blank",
                                      children: [!1, y],
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        s.business_hours &&
                          (0, i.jsxs)("div", {
                            className: "column business-details",
                            children: [
                              (0, i.jsx)("div", {
                                className: "title",
                                children: "Business Hours",
                              }),
                              (0, i.jsx)("div", {
                                className: "business-hours",
                                children: s.business_hours.map(function (e, s) {
                                  return (0,
                                  i.jsxs)("div", { className: "data day-wrapper", children: [(0, i.jsx)("div", { className: "label", children: (0, i.jsx)("span", { className: "day", children: e.day.slice(0, 3) }) }), (0, i.jsx)("div", { className: "value", children: (0, i.jsx)("div", { className: "time-wrapper", children: w(e) }) })] }, s);
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "map-wrapper",
                    children: (0, i.jsx)("div", {
                      className: "map-container",
                      children: (0, i.jsx)(N.Z, {
                        listing: s,
                        markers: s.listing_location,
                      }),
                    }),
                  }),
                  d.financingCalculator.show && (0, i.jsx)(_.Z, { listing: s }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "footer",
                children: [
                  (0, i.jsx)("div", {
                    className: "footer-top",
                    children: (0, i.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "column",
                          children: [
                            (0, i.jsx)("div", {
                              className: "title",
                              children: s.title,
                            }),
                            (0, i.jsx)("p", {
                              children:
                                "Learn more about us and the available services we offer.",
                            }),
                            (0, i.jsxs)("a", {
                              href: s.listing_url.website_url,
                              target: "_blank",
                              className: "read-more",
                              children: [
                                "View website ",
                                (0, i.jsx)(g.xll, { className: "icon" }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "column",
                          children: [
                            (0, i.jsx)("div", {
                              className: "title",
                              children: "Get in Touch",
                            }),
                            s.phone_number &&
                              (0, i.jsxs)("div", {
                                className: "data phone",
                                children: [
                                  (0, i.jsx)("div", {
                                    className: "label",
                                    children: (0, i.jsx)(x.PES, {
                                      className: "icon",
                                    }),
                                  }),
                                  (0, i.jsx)("a", {
                                    href: "tel:+1".concat(s.phone_number),
                                    className: "value",
                                    children: L,
                                  }),
                                ],
                              }),
                            (0, i.jsxs)("div", {
                              className: "data addresses",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "label",
                                  children: (0, i.jsx)(h.i63, {
                                    className: "icon",
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "value",
                                  children: s.listing_location.map(function (
                                    e
                                  ) {
                                    return (0, i.jsx)(
                                      "div",
                                      {
                                        className: "address",
                                        children: (0, i.jsx)("div", {
                                          className: "value",
                                          children: ""
                                            .concat(e.address_line_1, ", ")
                                            .concat(
                                              e.city ? " " + e.city : "",
                                              " "
                                            )
                                            .concat(
                                              e.state ? ", " + e.state : "",
                                              ", "
                                            )
                                            .concat(e.country, " ")
                                            .concat(e.postal_code),
                                        }),
                                      },
                                      e.location_id
                                    );
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "column toolbox",
                          children: (0, i.jsx)("div", {
                            className: "image-wrapper",
                            children: (0, i.jsxs)("a", {
                              href: "/toolbox/",
                              children: [
                                (0, i.jsx)("img", {
                                  src: "/assets/images/homeowners-toolbox.webp",
                                  alt: "Homeowners Toolbox",
                                  width: "85",
                                  height: "49",
                                  loading: "lazy",
                                }),
                                (0, i.jsx)("span", {
                                  className: "label",
                                  children: "BPP Toolbox",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "footer-bottom",
                    children: (0, i.jsxs)("div", {
                      className: "container",
                      children: [
                        "Copyright \xa9 ",
                        new Date().getFullYear(),
                        " \u2013 BluePagesPro \u2013 All Rights Reserved.",
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    78656: function (e, s, n) {
      n.d(s, {
        Z: function () {
          return c;
        },
      });
      var a = n(85893),
        i = n(41664),
        l = n.n(i),
        r = n(25675),
        t = n.n(r);
      function c() {
        return (0, a.jsx)("div", {
          className: "footer-wrapper",
          children: (0, a.jsxs)("div", {
            className: "footer",
            children: [
              (0, a.jsx)("div", {
                className: "logo-links",
                children: (0, a.jsx)(l(), {
                  href: "/toolbox/",
                  children: (0, a.jsx)("a", {
                    className: "logo",
                    children: (0, a.jsx)(t(), {
                      src: "/assets/images/homeowners-toolbox.webp",
                      width: 85,
                      height: 49,
                      alt: "Homeowner toolbox information",
                    }),
                  }),
                }),
              }),
              (0, a.jsxs)("div", {
                className: "terms-privacy-policy",
                children: [
                  (0, a.jsx)(l(), {
                    href: "/terms-and-privacy-policy/",
                    children: "BPP Terms & Privacy policy",
                  }),
                  " ",
                  (0, a.jsx)("span", { children: "|" }),
                  " ",
                  (0, a.jsx)(l(), {
                    href: "https://help.bluepages.pro/",
                    children: "Help Center",
                  }),
                  " ",
                  (0, a.jsx)("span", { children: "|" }),
                  " ",
                  (0, a.jsx)(l(), {
                    href: "https://bluepages.pro/coffee-shop/",
                    children: "Contractor Coffee Shop",
                  }),
                  " ",
                  (0, a.jsx)("span", { children: "|" }),
                  " ",
                  (0, a.jsx)(l(), {
                    href: "https://bluepages.pro/integrations/",
                    children: "Integrations",
                  }),
                  " ",
                  (0, a.jsx)("span", { children: "|" }),
                  " ",
                  (0, a.jsx)(l(), {
                    href: "https://bluepages.pro/partners",
                    children: "Partners",
                  }),
                  " ",
                  (0, a.jsx)("span", { children: "|" }),
                  " ",
                  (0, a.jsx)(l(), {
                    href: "https://culture.phonesites.com/",
                    target: "_blank",
                    children: "Culture",
                  }),
                ],
              }),
              (0, a.jsxs)("p", {
                className: "copyright",
                children: [
                  "Copyright \xa9 2022 \u2013 BluePagesPro \u2013 All Rights Reserved. ",
                  (0, a.jsx)("span", { className: "separator", children: "|" }),
                  " ",
                  (0, a.jsx)(l(), {
                    href: "tel:+18442587767",
                    children: "1-844-258-7767",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    89818: function (e, s, n) {
      n.d(s, {
        NM: function () {
          return r;
        },
        cx: function () {
          return t;
        },
        xT: function () {
          return l;
        },
      });
      var a = n(21232),
        i = n(84910),
        l = function (e) {
          return function (s) {
            return new Promise(function (n, l) {
              return a.Z.post(
                "/directory-listing/listing/submit/isoftpull-form",
                e
              )
                .then(function (e) {
                  return e.data;
                })
                .then(function (e) {
                  return (
                    s((0, i.c)({ status: "success", message: e.message })), n(e)
                  );
                })
                .catch(function (e) {
                  return (
                    s(
                      (0, i.c)({
                        status: "error",
                        message: e.response.data.errors,
                      })
                    ),
                    l(e)
                  );
                });
            });
          };
        },
        r = function (e) {
          return function (s) {
            return new Promise(function (n, l) {
              return a.Z.post(
                "/directory-listing/listing/submit/consultation-form",
                e
              )
                .then(function (e) {
                  return e.data;
                })
                .then(function (e) {
                  return (
                    s((0, i.c)({ status: "success", message: e.message })), n(e)
                  );
                })
                .catch(function (e) {
                  return (
                    s(
                      (0, i.c)({
                        status: "error",
                        message: e.response.data.errors,
                      })
                    ),
                    l(e)
                  );
                });
            });
          };
        },
        t = function (e) {
          return function (s) {
            return new Promise(function (n, l) {
              return a.Z.post(
                "/directory-listing/listing/submit/financing-form",
                e
              )
                .then(function (e) {
                  return e.data;
                })
                .then(function (e) {
                  return (
                    s((0, i.c)({ status: "success", message: e.message })), n(e)
                  );
                })
                .catch(function (e) {
                  return (
                    s(
                      (0, i.c)({
                        status: "error",
                        message: e.response.data.errors,
                      })
                    ),
                    l(e)
                  );
                });
            });
          };
        };
    },
    55497: function (e, s, n) {
      n.d(s, {
        u2: function () {
          return r;
        },
      });
      var a = n(26042),
        i = n(69396),
        l = n(21232);
      function r(e) {
        return l.Z.get("/directory-listing/listings/draft/".concat(e))
          .then(function (e) {
            return e.data;
          })
          .then(function (e) {
            var s = {
                monday: 1,
                tuesday: 2,
                wednesday: 3,
                thursday: 4,
                friday: 5,
                saturday: 6,
                sunday: 7,
              },
              n = null;
            return (
              e.business_hours &&
                (n = Object.keys(e.business_hours)
                  .map(function (n) {
                    var a = e.business_hours[n];
                    return { index: s[n.toLowerCase()], key: n, value: a };
                  })
                  .sort(function (e, s) {
                    return e.index - s.index;
                  })
                  .map(function (e) {
                    return { day: e.key, schedule: e.value };
                  })),
              (0, i.Z)((0, a.Z)({}, e), { business_hours: n })
            );
          })
          .catch(function (e) {
            return !1;
          });
      }
    },
    38608: function (e, s, n) {
      n.d(s, {
        f: function () {
          return i;
        },
      });
      var a = n(26042),
        i = function (e) {
          var s = "show" == e.show;
          return {
            type: "listing/popup/financingCalculator",
            payload: (0, a.Z)({ show: s }, e),
          };
        };
    },
  },
]);
