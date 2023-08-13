(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [84],
  {
    12380: function (e, s, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/listings/[slug]',
        function () {
          return i(62461);
        },
      ]);
    },
    1926: function (e, s, i) {
      'use strict';
      i.d(s, {
        Z: function () {
          return u;
        },
      });
      var a = i(47568),
        n = i(828),
        t = i(20414),
        r = i(85893),
        l = (i(9008), i(41664), i(25675), i(67294)),
        c = i(40782),
        o = i(11163),
        d = i(25617),
        m = i(84910);
      i(78656), i(85657);
      function u(e) {
        var s = e.children,
          i = ((0, o.useRouter)(), (0, d.I0)()),
          u = (0, d.v9)(function (e) {
            return e.notification;
          }),
          h = (0, n.Z)(l.useState(!0), 2);
        h[0], h[1];
        return (
          l.useEffect(
            (0, a.Z)(function () {
              var e;
              return (0, t.__generator)(this, function (s) {
                if (!0 === u.show) {
                  switch (
                    ((e = { autoClose: 2e3, toastId: 'toast-id' }), u.status)
                  ) {
                    case 'success':
                      c.Am.success(u.message, e);
                      break;
                    case 'error':
                      c.Am.error(u.message, e);
                  }
                  i((0, m.y)());
                }
                return [2];
              });
            }),
            [u]
          ),
          (0, r.jsx)('div', { className: 'main', children: s })
        );
      }
    },
    62461: function (e, s, i) {
      'use strict';
      i.r(s),
        i.d(s, {
          __N_SSP: function () {
            return de;
          },
          default: function () {
            return me;
          },
        });
      var a = i(828),
        n = i(85893),
        t = i(9008),
        r = i.n(t),
        l = i(11163),
        c = i(4298),
        o = i.n(c),
        d = i(67294),
        m = i(66007),
        u = (i(55497), i(25675)),
        h = i.n(u),
        p = i(41664),
        x = i.n(p),
        j = i(29238),
        g = i.n(j),
        N = i(8193),
        v = i(63750),
        f = i(86893),
        _ = i(53854),
        b = i(60155),
        w = i(55788),
        y = i(94184),
        P = i.n(y),
        k = i(38075);
      function S(e) {
        var s = e.listing,
          i = e.isLocked,
          t = function () {
            S({ width: window.innerWidth, height: window.innerHeight });
          },
          r = function (e) {
            return e.schedule.open24Hours
              ? (0, n.jsx)(d.Fragment, {
                  children: (0, n.jsx)('div', {
                    className: 'time',
                    children: 'Open 24 hours',
                  }),
                })
              : e.schedule.closed
              ? (0, n.jsx)(d.Fragment, {
                  children: (0, n.jsx)('div', {
                    className: 'time',
                    children: 'Closed',
                  }),
                })
              : (0, n.jsxs)(d.Fragment, {
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'time',
                      children: [
                        e.schedule.start.time.label,
                        ' ',
                        e.schedule.start.period.label,
                      ],
                    }),
                    (0, n.jsx)('div', {
                      className: 'separator',
                      children: '-',
                    }),
                    (0, n.jsxs)('div', {
                      className: 'time',
                      children: [
                        e.schedule.end.time.label,
                        ' ',
                        e.schedule.end.period.label,
                      ],
                    }),
                  ],
                });
          },
          l = s.listing_url.website_url
            .replace(/^https?:\/\//, '')
            .replace(/\/$/, ''),
          c = (0, a.Z)(d.useState(!1), 2),
          o = c[0],
          m = c[1],
          u = (0, a.Z)(d.useState(!1), 2),
          p = (u[0], u[1], (0, a.Z)(d.useState(!1), 2)),
          j = (p[0], p[1], (0, a.Z)(d.useState({ width: 0, height: 0 }), 2)),
          y = j[0],
          S = j[1],
          Z = (function (e) {
            var s = ('' + e)
              .replace(/\D/g, '')
              .match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
            return s
              ? [s[1] ? '+1 ' : '', s[2], '-', s[3], '-', s[4]].join('')
              : null;
          })(s.phone_number);
        return (
          d.useEffect(function () {
            return (
              window.addEventListener('resize', t),
              t(),
              function () {
                return window.removeEventListener('resize', t);
              }
            );
          }, []),
          d.useEffect(
            function () {
              y.width > 768 && m(!1);
            },
            [y]
          ),
          (0, n.jsxs)('div', {
            className: P()('listing-wrapper free', { locked: i }),
            children: [
              (0, n.jsx)('div', {
                className: 'header',
                children: (0, n.jsxs)('div', {
                  className: 'container',
                  children: [
                    (0, n.jsx)('div', {
                      className: 'left-column',
                      children:
                        y.width > 768
                          ? (0, n.jsx)(x(), {
                              href: '/',
                              children: (0, n.jsx)('a', {
                                'aria-label': 'Home page',
                                className: 'logo',
                                children: (0, n.jsx)(h(), {
                                  alt: 'BluePagesPro Logo',
                                  src: 'assets/images/bluepages-pro-logo.svg',
                                  width: '200',
                                  height: '41',
                                  loading: 'lazy',
                                }),
                              }),
                            })
                          : (0, n.jsx)(x(), {
                              href: 'https://bluepagespro.com/',
                              children: (0, n.jsx)('a', {
                                'aria-label': 'Home page',
                                className: 'logo',
                                children: (0, n.jsx)(h(), {
                                  alt: 'BluePagesPro Logo',
                                  src: 'assets/images/bluepages-pro-icon-blueblack.svg',
                                  width: '32',
                                  height: '41',
                                  loading: 'lazy',
                                }),
                              }),
                            }),
                    }),
                    (0, n.jsx)('div', {
                      className: 'right-column',
                      children:
                        y.width > 980
                          ? (0, n.jsx)('div', {
                              className: P()('signup-wrapper'),
                              children: !1,
                            })
                          : (0, n.jsxs)('div', {
                              className: P()('mobile-menu', {
                                hide: y.width > 980,
                              }),
                              children: [
                                (0, n.jsx)('div', {
                                  className: 'toggle',
                                  onClick: function () {
                                    return m(function (e) {
                                      return !e;
                                    });
                                  },
                                  children: (0, n.jsx)(b.pLT, {
                                    className: 'icon',
                                  }),
                                }),
                                (0, n.jsx)('div', {
                                  className: P()('menu-popup', {
                                    hide: 0 == o,
                                  }),
                                  children: (0, n.jsxs)('ul', {
                                    className: 'menu',
                                    children: [
                                      (0, n.jsx)('li', {
                                        children: (0, n.jsx)(x(), {
                                          href: 'https://bluepagespro.com/',
                                          children: 'Home',
                                        }),
                                      }),
                                      (0, n.jsx)('li', {
                                        children: (0, n.jsx)(x(), {
                                          href: '/toolbox/',
                                          children: 'Toolbox',
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                    }),
                  ],
                }),
              }),
              (0, n.jsxs)('div', {
                className: 'listing',
                children: [
                  (0, n.jsxs)('div', {
                    className: 'banner-wrapper',
                    children: [
                      (0, n.jsx)('h1', { children: s.title }),
                      (0, n.jsxs)('ol', {
                        className: 'breadcrumb',
                        children: [
                          (0, n.jsx)('li', {
                            children: (0, n.jsx)(x(), {
                              href: 'https://bluepagespro.com/',
                              children: 'BluePagesPro',
                            }),
                          }),
                          (0, n.jsx)('div', {
                            className: 'trail',
                            children: (0, n.jsx)(v.fmn, { className: 'icon' }),
                          }),
                          (0, n.jsx)('li', {
                            children: (0, n.jsx)(x(), {
                              href: '/listings',
                              children: 'Listings',
                            }),
                          }),
                          (0, n.jsx)('div', {
                            className: 'trail',
                            children: (0, n.jsx)(v.fmn, { className: 'icon' }),
                          }),
                          (0, n.jsx)('li', { children: s.title }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)('div', {
                    className: 'content-wrapper',
                    children: (0, n.jsxs)('div', {
                      className: 'container',
                      children: [
                        (0, n.jsxs)('div', {
                          className: 'listing-detail',
                          children: [
                            i &&
                              (0, n.jsx)('div', {
                                className: 'unlock',
                                children: (0, n.jsxs)('div', {
                                  className: 'button-row',
                                  children: [
                                    (0, n.jsx)('div', {
                                      className: 'label',
                                      children:
                                        'Are you the business owner of this page? Unlock now!',
                                    }),
                                    (0, n.jsx)('a', {
                                      href: 'https://member.bluepagespro.com',
                                      target: '_blank',
                                      className: 'button blue medium oblong',
                                      children: 'Unlock',
                                    }),
                                  ],
                                }),
                              }),
                            (0, n.jsxs)('div', {
                              className: P()('business-detail', { locked: i }),
                              children: [
                                (0, n.jsx)('h2', { children: 'About Us' }),
                                s.listing_category.length > 0 &&
                                  (0, n.jsx)('div', {
                                    className: 'category-wrapper',
                                    children: s.listing_category.map(function (
                                      e,
                                      s
                                    ) {
                                      return (0, n.jsxs)(
                                        'div',
                                        {
                                          className: 'category',
                                          children: [
                                            (0, n.jsx)(b.r2k, {
                                              className: 'icon',
                                            }),
                                            (0, n.jsx)('div', {
                                              className: 'value',
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
                            (0, n.jsx)('div', {
                              className: P()('detail-wrapper', { locked: i }),
                              children:
                                s.content &&
                                (0, n.jsx)('div', {
                                  className: 'description-wrapper',
                                  children: (0, n.jsx)('div', {
                                    className: 'description',
                                    dangerouslySetInnerHTML: {
                                      __html: g().sanitize(s.content),
                                    },
                                  }),
                                }),
                            }),
                          ],
                        }),
                        (0, n.jsx)('div', {
                          className: 'listing-sidebar',
                          children: (0, n.jsxs)('div', {
                            className: 'contact-information',
                            children: [
                              (0, n.jsx)('div', {
                                className: 'data logo-wrapper',
                                children: (0, n.jsx)('img', {
                                  src: s.logo_url,
                                  alt: ''.concat(s.title, ' logo'),
                                  loading: 'lazy',
                                }),
                              }),
                              (0, n.jsxs)('div', {
                                className: P()('data address-wrapper', {
                                  locked: i,
                                }),
                                children: [
                                  (0, n.jsx)('div', {
                                    className: 'label',
                                    children: (0, n.jsx)(f.i63, {
                                      className: 'icon',
                                    }),
                                  }),
                                  (0, n.jsx)('div', {
                                    className: 'value',
                                    children: s.listing_location.map(function (
                                      e
                                    ) {
                                      return (0, n.jsxs)(
                                        'div',
                                        {
                                          className: 'address',
                                          children: [
                                            ''
                                              .concat(e.address_line_1, ', ')
                                              .concat(
                                                e.city
                                                  ? ' ' + e.city + ', '
                                                  : ''
                                              )
                                              .concat(
                                                e.state ? e.state + ', ' : '',
                                                ' '
                                              )
                                              .concat(e.country, ' ')
                                              .concat(e.postal_code),
                                            e.phone_number &&
                                              (0, n.jsxs)('div', {
                                                className: 'phone-number',
                                                children: [
                                                  (0, n.jsx)('strong', {
                                                    children: 'Contact Number:',
                                                  }),
                                                  ' ',
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
                                (0, n.jsxs)('div', {
                                  className: 'data phone',
                                  children: [
                                    (0, n.jsx)('div', {
                                      className: 'label',
                                      children: (0, n.jsx)(v.SPk, {
                                        className: 'icon',
                                      }),
                                    }),
                                    (0, n.jsx)('a', {
                                      href: 'tel:+1'.concat(s.phone_number),
                                      className: 'value',
                                      children: Z,
                                    }),
                                  ],
                                }),
                              s.listing_url.website_url &&
                                (0, n.jsxs)('div', {
                                  className: P()('data website', { locked: i }),
                                  children: [
                                    (0, n.jsx)('div', {
                                      className: 'label',
                                      children: (0, n.jsx)(v.JuS, {
                                        className: 'icon',
                                      }),
                                    }),
                                    (0, n.jsx)('div', {
                                      className: 'value',
                                      children: (0, n.jsxs)('a', {
                                        href: s.listing_url.website_url,
                                        target: '_blank',
                                        children: [!1, l],
                                      }),
                                    }),
                                  ],
                                }),
                              s.business_hours &&
                                (0, n.jsxs)('div', {
                                  className: P()('data business-hours', {
                                    locked: i,
                                  }),
                                  children: [
                                    (0, n.jsx)('div', {
                                      className: 'label',
                                      children: (0, n.jsx)(N.cjn, {
                                        className: 'icon',
                                      }),
                                    }),
                                    (0, n.jsx)('div', {
                                      className: 'value',
                                      children: s.business_hours.map(function (
                                        e,
                                        s
                                      ) {
                                        return (0, n.jsxs)(
                                          'div',
                                          {
                                            className: 'day-wrapper',
                                            children: [
                                              (0, n.jsx)('div', {
                                                className: 'day',
                                                children: e.day.slice(0, 3),
                                              }),
                                              (0, n.jsx)('div', {
                                                className: 'time-wrapper',
                                                children: r(e),
                                              }),
                                            ],
                                          },
                                          s
                                        );
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)('div', {
                    className: P()('map-wrapper row', { locked: i }),
                    children: (0, n.jsx)('div', {
                      className: 'container',
                      children: (0, n.jsx)(k.Z, {
                        listing: s,
                        markers: s.listing_location,
                      }),
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)('div', {
                className: 'footer',
                children: [
                  (0, n.jsx)('div', {
                    className: 'footer-top',
                    children: (0, n.jsxs)('div', {
                      className: 'container',
                      children: [
                        (0, n.jsxs)('div', {
                          className: 'column',
                          children: [
                            (0, n.jsx)('div', {
                              className: 'title',
                              children: s.title,
                            }),
                            (0, n.jsx)('p', {
                              children:
                                'Learn more about us and the available services we offer.',
                            }),
                            (0, n.jsxs)('a', {
                              href: s.listing_url.website_url,
                              target: '_blank',
                              className: 'read-more',
                              children: [
                                'View website ',
                                (0, n.jsx)(w.xll, { className: 'icon' }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)('div', {
                          className: 'column',
                          children: [
                            (0, n.jsx)('div', {
                              className: 'title',
                              children: 'Get in Touch',
                            }),
                            s.phone_number &&
                              (0, n.jsxs)('div', {
                                className: 'data phone',
                                children: [
                                  (0, n.jsx)('div', {
                                    className: 'label',
                                    children: (0, n.jsx)(_.PES, {
                                      className: 'icon',
                                    }),
                                  }),
                                  (0, n.jsx)('a', {
                                    href: 'tel:+1'.concat(s.phone_number),
                                    className: 'value',
                                    children: Z,
                                  }),
                                ],
                              }),
                            (0, n.jsxs)('div', {
                              className: 'data addresses',
                              children: [
                                (0, n.jsx)('div', {
                                  className: 'label',
                                  children: (0, n.jsx)(f.i63, {
                                    className: 'icon',
                                  }),
                                }),
                                (0, n.jsx)('div', {
                                  className: 'value',
                                  children: s.listing_location.map(function (
                                    e
                                  ) {
                                    return (0, n.jsx)(
                                      'div',
                                      {
                                        className: 'address',
                                        children: ''
                                          .concat(e.address_line_1, ', ')
                                          .concat(
                                            e.city ? ' ' + e.city + ', ' : ''
                                          )
                                          .concat(
                                            e.state ? e.state + ', ' : '',
                                            ' '
                                          )
                                          .concat(e.country, ' ')
                                          .concat(e.postal_code),
                                      },
                                      e.location_id
                                    );
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsx)('div', {
                          className: 'column toolbox',
                          children: (0, n.jsx)('div', {
                            className: 'image-wrapper',
                            children: (0, n.jsxs)('a', {
                              href: '/toolbox/',
                              children: [
                                (0, n.jsx)('img', {
                                  src: 'assets/images/homeowners-toolbox.webp',
                                  alt: 'Homeowners Toolbox',
                                  width: '85',
                                  height: '49',
                                  loading: 'lazy',
                                }),
                                (0, n.jsx)('span', {
                                  className: 'label',
                                  children: 'BPP Toolbox',
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)('div', {
                    className: 'footer-bottom',
                    children: (0, n.jsxs)('div', {
                      className: 'container',
                      children: [
                        'Copyright \xa9 ',
                        new Date().getFullYear(),
                        ' \u2013 BluePagesPro \u2013 All Rights Reserved.',
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      var Z = i(82246),
        A = i(15628),
        C = i(14924),
        B = (i(32816), i(5152), i(25617)),
        z = i(84925),
        F = i.n(z),
        q = i(92345),
        T = i(88330),
        L = i(51649),
        E = i(39327),
        O = i(38608),
        R = i(80471),
        I = i(45692);
      function M(e) {
        var s = e.listing,
          i = (0, a.Z)(d.useState(!1), 2),
          t = i[0],
          r = i[1],
          l = function (e) {
            var s = e.target,
              i = s.offsetHeight,
              a = s.offsetWidth;
            r({ width: a, height: i });
          };
        return (0, n.jsx)('div', {
          className: 'banner-wrapper',
          style: { background: 'url('.concat(s.banner_url, ')') },
          children: (0, n.jsxs)('div', {
            className: 'container',
            children: [
              s.contractor_commerce_code &&
                s.logo_icon &&
                (0, n.jsxs)('div', {
                  className: 'top-wrapper',
                  children: [
                    (0, n.jsx)('div', {
                      className: 'logo-wrapper',
                      children: (0, n.jsx)('img', {
                        src: s.logo_icon,
                        alt: ''.concat(s.title, ' logo'),
                        loading: 'lazy',
                        onLoad: l,
                        width: t.width,
                        height: t.height,
                      }),
                    }),
                    (0, n.jsx)('div', {
                      className: 'shop-button',
                      children: (0, n.jsxs)('a', {
                        href: '#concom-shop',
                        children: [
                          (0, n.jsx)(R.Tr3, { className: 'icon' }),
                          (0, n.jsx)('span', { children: 'Shop Now' }),
                        ],
                      }),
                    }),
                  ],
                }),
              null == s.contractor_commerce_code &&
                s.logo_icon &&
                (0, n.jsx)('div', {
                  className: 'logo-wrapper',
                  children: (0, n.jsx)('img', {
                    src: s.logo_icon,
                    alt: ''.concat(s.title, ' logo'),
                    loading: 'lazy',
                    onLoad: l,
                    width: t.width,
                    height: t.height,
                  }),
                }),
              (0, n.jsxs)('div', {
                className: 'column',
                children: [
                  (0, n.jsx)('h1', { children: s.title }),
                  !1,
                  (0, n.jsx)('p', {
                    className: 'banner-description',
                    children: s.banner_description,
                  }),
                  (0, n.jsxs)('div', {
                    className: 'button-row',
                    children: [
                      s.listing_url.get_quote &&
                        (0, n.jsx)(x(), {
                          href: s.listing_url.get_quote,
                          children: (0, n.jsx)('a', {
                            className: 'button get-quote blue',
                            target: '_blank',
                            children: 'Get A Quote',
                          }),
                        }),
                      s.phone_number &&
                        (0, n.jsx)(x(), {
                          href: 'tel:+1'.concat(s.phone_number),
                          children: (0, n.jsxs)('a', {
                            className: 'button call-us',
                            children: [
                              (0, n.jsx)(_.PES, { className: 'icon' }),
                              'Call Us Now',
                            ],
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)('div', {
                className: 'column',
                children: (0, n.jsx)(I.Z, { listing: s }),
              }),
            ],
          }),
        });
      }
      var W = i(71792),
        H = i(26042),
        G = i(69396),
        V = i(46066),
        U = i(92879);
      function D(e) {
        var s = e.listingMedia,
          i = (0, a.Z)(d.useState(s), 2),
          t = i[0],
          r = (i[1], (0, a.Z)(d.useState(!1), 2)),
          l = r[0],
          c = r[1],
          o =
            (t.length,
            function (e) {
              c(e);
            });
        return (0, n.jsxs)('div', {
          className: 'projects-wrapper',
          children: [
            (0, n.jsxs)('div', {
              className: 'container',
              children: [
                (0, n.jsx)('div', {
                  className: 'sub-header',
                  children: 'Latest Work',
                }),
                (0, n.jsx)('h2', { children: 'Our Projects' }),
                t.length <= 2
                  ? (0, n.jsx)('div', {
                      className: 'project-list',
                      children: t.map(function (e) {
                        return (0, n.jsx)(
                          'div',
                          {
                            children: (0, n.jsx)('img', {
                              src: e.image_url,
                              alt: e.title,
                              onClick: function () {
                                return o(e.image_url);
                              },
                              width: '380',
                              height: '280',
                              loading: 'lazy',
                            }),
                          },
                          e.position
                        );
                      }),
                    })
                  : (0, n.jsx)('div', {
                      className: 'carousel',
                      children: (0, n.jsx)(
                        V.Z,
                        (0, G.Z)(
                          (0, H.Z)(
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
                            children: t.map(function (e) {
                              return (0, n.jsx)(
                                'div',
                                {
                                  children: (0, n.jsx)('img', {
                                    src: e.image_url,
                                    alt: e.title,
                                    onClick: function () {
                                      return o(e.image_url);
                                    },
                                    width: '380',
                                    height: '280',
                                    loading: 'lazy',
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
            l &&
              (0, n.jsx)(U.Z, {
                mainSrc: l,
                onCloseRequest: function () {
                  c(!1);
                },
              }),
          ],
        });
      }
      i(28596);
      var Q = i(47568),
        Y = i(20414),
        J = i(88767),
        K = i(82175),
        X = i(74231),
        $ = i(34853),
        ee = i(89818),
        se = i(9707);
      function ie(e) {
        var s = e.listing,
          i = ((0, l.useRouter)(), (0, B.I0)()),
          t = d.useRef(),
          r = (0, a.Z)(d.useState(!0), 2),
          c = r[0],
          o = r[1],
          m = (0, J.useMutation)(
            (function () {
              var e = (0, Q.Z)(function (e) {
                var a, n;
                return (0, Y.__generator)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, t.current.executeAsync()];
                    case 1:
                      return (
                        (a = r.sent()),
                        (n = new FormData()).append('first_name', e.first_name),
                        n.append('last_name', e.last_name),
                        n.append('phone_number', e.phone_number),
                        n.append('email', e.email),
                        n.append(
                          'interested_in_financing',
                          e.interested_in_financing ? 1 : 0
                        ),
                        n.append('listing_id', s.listing_id),
                        n.append('captcha_token', a),
                        [2, i((0, ee.NM)(n))]
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
        return (0, n.jsx)('div', {
          className: 'consultation-wrapper',
          children: (0, n.jsxs)('div', {
            className: 'container',
            children: [
              (0, n.jsx)('div', {
                className: 'sub-header',
                children: u
                  ? (0, n.jsx)(d.Fragment, {
                      children: (0, n.jsx)('span', { children: u.title }),
                    })
                  : (0, n.jsx)(d.Fragment, {
                      children: (0, n.jsx)('span', { children: 'Get a Quote' }),
                    }),
              }),
              (0, n.jsx)(K.J9, {
                initialValues: {
                  first_name: '',
                  last_name: '',
                  phone_number: '',
                  email: '',
                  interested_in_financing: !1,
                },
                validationSchema: X.Ry({
                  first_name: X.Z_().required('First name is required'),
                  last_name: X.Z_().required('Last name is required'),
                  phone_number: X.Z_().required('Phone number is required'),
                  email: X.Z_()
                    .required('Email is required')
                    .email('Invalid email format'),
                }),
                onSubmit: function (e, s) {
                  var i = s.setSubmitting;
                  m.mutate(e, {
                    onSuccess: function (e) {
                      i(!1), t.current.reset();
                    },
                    onError: function (e) {
                      i(!1), t.current.reset();
                    },
                  });
                },
                children: function (e) {
                  return (0, n.jsxs)(K.l0, {
                    id: 'consultation-form',
                    className: 'consultation-form',
                    autoComplete: 'off',
                    children: [
                      (0, n.jsxs)('div', {
                        className: 'field-row two-column',
                        children: [
                          (0, n.jsxs)('div', {
                            className: 'field-column',
                            children: [
                              (0, n.jsx)(K.gN, {
                                className: P()('form-field', {
                                  error:
                                    e.errors.first_name && e.touched.first_name,
                                }),
                                name: 'first_name',
                                placeholder: 'First Name*',
                                onKeyPress: function (e) {
                                  o(
                                    (0, n.jsx)($.Z, {
                                      ref: t,
                                      size: 'invisible',
                                      sitekey:
                                        '6LfcFywdAAAAAMiSGM8sVXBeezf4GE422JxROMCk',
                                      badge: 'bottomleft',
                                    })
                                  );
                                },
                              }),
                              (0, n.jsx)(K.Bc, {
                                component: 'span',
                                className: 'description error',
                                name: 'first_name',
                              }),
                            ],
                          }),
                          (0, n.jsxs)('div', {
                            className: 'field-column',
                            children: [
                              (0, n.jsx)(K.gN, {
                                className: P()('form-field', {
                                  error:
                                    e.errors.last_name && e.touched.last_name,
                                }),
                                name: 'last_name',
                                placeholder: 'Last Name*',
                              }),
                              (0, n.jsx)(K.Bc, {
                                component: 'span',
                                className: 'description error',
                                name: 'last_name',
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsxs)('div', {
                        className: 'field-row two-column',
                        children: [
                          (0, n.jsxs)('div', {
                            className: 'field-column',
                            children: [
                              (0, n.jsx)(K.gN, {
                                className: P()('form-field', {
                                  error:
                                    e.errors.phone_number &&
                                    e.touched.phone_number,
                                }),
                                name: 'phone_number',
                                placeholder: 'Phone Number*',
                              }),
                              (0, n.jsx)(K.Bc, {
                                component: 'span',
                                className: 'description error',
                                name: 'phone_number',
                              }),
                            ],
                          }),
                          (0, n.jsxs)('div', {
                            className: 'field-column',
                            children: [
                              (0, n.jsx)(K.gN, {
                                className: P()('form-field', {
                                  error: e.errors.email && e.touched.email,
                                }),
                                name: 'email',
                                placeholder: 'Email Address*',
                              }),
                              (0, n.jsx)(K.Bc, {
                                component: 'span',
                                className: 'description error',
                                name: 'email',
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, n.jsx)('div', {
                        className: 'field-row',
                        children: (0, n.jsx)(se.Z, {
                          label: 'Are you interested in financing?',
                          name: 'interested_in_financing',
                          value: !1,
                          onChange: function (s) {
                            e.setFieldValue('interested_in_financing', s);
                          },
                        }),
                      }),
                      (0, n.jsxs)('div', {
                        className: 'button-row',
                        children: [
                          c,
                          (0, n.jsx)('button', {
                            type: 'submit',
                            className: P()('button', {
                              'disable-button': !e.isValid || e.isSubmitting,
                            }),
                            disabled: !e.isValid || e.isSubmitting,
                            children: 'Submit',
                          }),
                        ],
                      }),
                      1 == s.has_discount &&
                        (0, n.jsx)('div', {
                          className: 'offer-wrapper',
                          children: (0, n.jsxs)('div', {
                            className: 'value',
                            children: [
                              (0, n.jsxs)('span', {
                                className: 'text',
                                children: [
                                  (0, n.jsx)(N.Wwr, { className: 'icon' }),
                                  (0, n.jsx)('strong', { children: '5%' }),
                                  ' Contractor Discount ',
                                ],
                              }),
                              (0, n.jsx)('span', {
                                className: 'coupon-code',
                                children: 'Code: #BPP5',
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
      var ae = i(89583);
      function ne(e) {
        var s = e.listing;
        return (0, n.jsxs)('div', {
          className: 'data social',
          children: [
            s.listing_url.facebook_url &&
              (0, n.jsx)('a', {
                href: s.listing_url.facebook_url,
                'aria-label': 'Facebook',
                className: 'url',
                target: '_blank',
                children: (0, n.jsx)(v.k1O, { className: 'icon' }),
              }),
            s.listing_url.linkedin_url &&
              (0, n.jsx)('a', {
                href: s.listing_url.linkedin_url,
                'aria-label': 'Linkedin',
                className: 'url',
                target: '_blank',
                children: (0, n.jsx)(v.NQh, { className: 'icon' }),
              }),
            s.listing_url.instagram_url &&
              (0, n.jsx)('a', {
                href: s.listing_url.instagram_url,
                'aria-label': 'Instagram',
                className: 'url',
                target: '_blank',
                children: (0, n.jsx)(v.Vs6, { className: 'icon' }),
              }),
            s.listing_url.tiktok_url &&
              (0, n.jsx)('a', {
                href: s.listing_url.tiktok_url,
                'aria-label': 'TikTok',
                className: 'url',
                target: '_blank',
                children: (0, n.jsx)(ae.nTm, { className: 'icon' }),
              }),
            s.listing_url.google_my_business_url &&
              (0, n.jsx)('a', {
                href: s.listing_url.google_my_business_url,
                'aria-label': 'Google',
                className: 'url',
                target: '_blank',
                children: (0, n.jsx)(ae.ldW, { className: 'icon' }),
              }),
            s.listing_url.pinterest_url &&
              (0, n.jsx)('a', {
                href: s.listing_url.pinterest_url,
                'aria-label': 'Pinterest',
                className: 'url',
                target: '_blank',
                children: (0, n.jsx)(ae.oIN, { className: 'icon' }),
              }),
            s.listing_url.youtube_url &&
              (0, n.jsx)('a', {
                href: s.listing_url.youtube_url,
                'aria-label': 'Youtube',
                className: 'url',
                target: '_blank',
                children: (0, n.jsx)(ae.V2E, { className: 'icon' }),
              }),
            s.listing_url.twitter_url &&
              (0, n.jsx)('a', {
                href: s.listing_url.twitter_url,
                'aria-label': 'Twitter',
                className: 'url',
                target: '_blank',
                children: (0, n.jsx)(ae.fWC, { className: 'icon' }),
              }),
            s.listing_url.yelp_url &&
              (0, n.jsx)('a', {
                href: s.listing_url.yelp_url,
                'aria-label': 'Yelp',
                className: 'url',
                target: '_blank',
                children: (0, n.jsx)(ae.Uzy, { className: 'icon' }),
              }),
          ],
        });
      }
      function te(e) {
        var s = e.title,
          i = e.loaderSize,
          a = e.borderWidth;
        return (0, n.jsx)(q.Z, {
          modal: !0,
          defaultOpen: !0,
          className: 'loading-popup',
          disabled: !0,
          children: function (e) {
            return (0, n.jsxs)('div', {
              className: 'content',
              children: [
                (0, n.jsx)('div', {
                  className: 'column left',
                  children: (0, n.jsx)('div', {
                    className: 'loader-animation',
                    children: (0, n.jsx)('div', {
                      className: 'loader',
                      style: {
                        width: i + 'px',
                        height: i + 'px',
                        borderWidth: a + 'px',
                      },
                    }),
                  }),
                }),
                (0, n.jsxs)('div', {
                  className: 'column right',
                  children: [s, '...'],
                }),
              ],
            });
          },
        });
      }
      function re(e) {
        var s = e.listing,
          i = function () {
            m(
              (0, n.jsx)($.Z, {
                ref: r,
                size: 'invisible',
                sitekey: '6LfcFywdAAAAAMiSGM8sVXBeezf4GE422JxROMCk',
                badge: 'bottomleft',
              })
            );
          },
          t = ((0, l.useRouter)(), (0, B.I0)()),
          r = d.useRef(),
          c = (0, a.Z)(d.useState(!0), 2),
          o = c[0],
          m = c[1],
          u = (0, a.Z)(d.useState(!1), 2),
          h = u[0],
          p = u[1],
          j = (0, J.useMutation)(
            (function () {
              var e = (0, Q.Z)(function (e) {
                var i, a;
                return (0, Y.__generator)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, r.current.executeAsync()];
                    case 1:
                      return (
                        (i = n.sent()),
                        (a = new FormData()).append('listing_id', s.listing_id),
                        a.append('first_name', e.firstName),
                        a.append('last_name', e.lastName),
                        a.append('address', e.address),
                        a.append('apt_suite_other', e.aptSuiteOther),
                        a.append('city', e.city),
                        a.append('state', e.state),
                        a.append('zip', e.zip),
                        a.append('phone_number', e.phoneNumber),
                        a.append('email', e.email),
                        a.append('income', e.income),
                        a.append('loan_amount', e.loanAmount),
                        a.append('is_consented_1', +!!e.isConsented1),
                        a.append('is_consented_2', +!!e.isConsented2),
                        a.append('captcha_token', i),
                        [2, t((0, ee.xT)(a))]
                      );
                  }
                });
              });
              return function (s) {
                return e.apply(this, arguments);
              };
            })()
          );
        return (0, n.jsxs)('div', {
          className: 'isoftpull-wrapper wat',
          children: [
            (0, n.jsxs)('div', {
              className: 'container',
              children: [
                (0, n.jsxs)('div', {
                  className: 'column left',
                  children: [
                    (0, n.jsxs)('h2', {
                      children: [
                        'Get Pre-',
                        (0, n.jsx)('span', {
                          className: 'tc-blue',
                          children: 'Qualified',
                        }),
                        ' Now',
                      ],
                    }),
                    (0, n.jsx)('p', {
                      className: 'larger-text',
                      children: 'Without affecting your credit score.',
                    }),
                    (0, n.jsx)('p', {
                      children:
                        'Please submit your information here for instant pre-qual.',
                    }),
                    (0, n.jsx)(K.J9, {
                      enableReinitialize: !0,
                      initialValues: {
                        firstName: '',
                        lastName: '',
                        address: '',
                        aptSuiteOther: '',
                        city: '',
                        state: '',
                        zip: '',
                        phoneNumber: '',
                        email: '',
                        income: '',
                        loanAmount: '',
                        isConsented1: !1,
                        isConsented2: !1,
                      },
                      validationSchema: X.Ry({
                        firstName: X.Z_().required('First name is required'),
                        lastName: X.Z_().required('Last name is required'),
                        address: X.Z_().required('Address is required'),
                        city: X.Z_().required('City is required'),
                        state: X.Z_().required('State is required'),
                        zip: X.Z_().required('Zip is required'),
                        phoneNumber: X.Z_().required(
                          'Phone number is required'
                        ),
                        email: X.Z_()
                          .required('Email is required')
                          .email('Invalid email format'),
                        income: X.Rx()
                          .required('Income is required')
                          .min(1, 'Income should be more than 0')
                          .typeError('Income must be numeric'),
                        loanAmount: X.Rx()
                          .required('Loan amount is required')
                          .min(1, 'Loan Amount should be more than 0')
                          .typeError('Loan Amount must be numeric'),
                        isConsented1: X.O7().oneOf(
                          [!0],
                          'It is required to check this before proceeding'
                        ),
                        isConsented2: X.O7().oneOf(
                          [!0],
                          'It is required to check this before proceeding'
                        ),
                      }).shape({}),
                      onSubmit: function (e, s) {
                        var i = s.setSubmitting;
                        j.mutate(e, {
                          onSuccess: function (e) {
                            p(!0);
                          },
                          onSettled: function (e) {
                            i(!1), r.current.reset();
                          },
                        });
                      },
                      children: function (e) {
                        return (0, n.jsxs)(K.l0, {
                          autoComplete: 'off',
                          children: [
                            (0, n.jsxs)('div', {
                              className: 'field-row two-column',
                              children: [
                                (0, n.jsxs)('div', {
                                  className: 'field-column',
                                  children: [
                                    (0, n.jsx)(K.gN, {
                                      className: P()('form-field', {
                                        error:
                                          e.errors.firstName &&
                                          e.touched.firstName,
                                      }),
                                      name: 'firstName',
                                      placeholder: 'First Name*',
                                      onKeyPress: function (e) {
                                        return i();
                                      },
                                    }),
                                    (0, n.jsx)(K.Bc, {
                                      component: 'span',
                                      className: 'description error',
                                      name: 'firstName',
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)('div', {
                                  className: 'field-column',
                                  children: [
                                    (0, n.jsx)(K.gN, {
                                      className: P()('form-field', {
                                        error:
                                          e.errors.lastName &&
                                          e.touched.lastName,
                                      }),
                                      name: 'lastName',
                                      placeholder: 'Last Name*',
                                    }),
                                    (0, n.jsx)(K.Bc, {
                                      component: 'span',
                                      className: 'description error',
                                      name: 'lastName',
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsxs)('div', {
                              className: 'field-row',
                              children: [
                                (0, n.jsx)(K.gN, {
                                  className: P()('form-field', {
                                    error:
                                      e.errors.address && e.touched.address,
                                  }),
                                  name: 'address',
                                  placeholder: 'Address*',
                                }),
                                (0, n.jsx)(K.Bc, {
                                  component: 'span',
                                  className: 'description error',
                                  name: 'address',
                                }),
                              ],
                            }),
                            (0, n.jsx)('div', {
                              className: 'field-row',
                              children: (0, n.jsx)(K.gN, {
                                className: P()('form-field', {
                                  error:
                                    e.errors.aptSuiteOther &&
                                    e.touched.aptSuiteOther,
                                }),
                                name: 'aptSuiteOther',
                                placeholder: 'Apt/Suite/Other',
                              }),
                            }),
                            (0, n.jsxs)('div', {
                              className: 'field-row three-column',
                              children: [
                                (0, n.jsxs)('div', {
                                  className: 'field-column',
                                  children: [
                                    (0, n.jsx)(K.gN, {
                                      className: P()('form-field', {
                                        error: e.errors.city && e.touched.city,
                                      }),
                                      name: 'city',
                                      placeholder: 'City*',
                                    }),
                                    (0, n.jsx)(K.Bc, {
                                      component: 'span',
                                      className: 'description error',
                                      name: 'city',
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)('div', {
                                  className: 'field-column',
                                  children: [
                                    (0, n.jsx)(K.gN, {
                                      className: P()('form-field', {
                                        error:
                                          e.errors.state && e.touched.state,
                                      }),
                                      name: 'state',
                                      placeholder: 'State*',
                                    }),
                                    (0, n.jsx)(K.Bc, {
                                      component: 'span',
                                      className: 'description error',
                                      name: 'state',
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)('div', {
                                  className: 'field-column',
                                  children: [
                                    (0, n.jsx)(K.gN, {
                                      className: P()('form-field', {
                                        error: e.errors.zip && e.touched.zip,
                                      }),
                                      name: 'zip',
                                      placeholder: 'Zip*',
                                    }),
                                    (0, n.jsx)(K.Bc, {
                                      component: 'span',
                                      className: 'description error',
                                      name: 'zip',
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsxs)('div', {
                              className: 'field-row two-column',
                              children: [
                                (0, n.jsxs)('div', {
                                  className: 'field-column',
                                  children: [
                                    (0, n.jsx)(K.gN, {
                                      className: P()('form-field', {
                                        error:
                                          e.errors.phoneNumber &&
                                          e.touched.phoneNumber,
                                      }),
                                      name: 'phoneNumber',
                                      placeholder: 'Phone Number*',
                                      onKeyPress: function (e) {
                                        return i();
                                      },
                                    }),
                                    (0, n.jsx)(K.Bc, {
                                      component: 'span',
                                      className: 'description error',
                                      name: 'phoneNumber',
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)('div', {
                                  className: 'field-column',
                                  children: [
                                    (0, n.jsx)(K.gN, {
                                      className: P()('form-field', {
                                        error:
                                          e.errors.email && e.touched.email,
                                      }),
                                      name: 'email',
                                      placeholder: 'Email Address*',
                                    }),
                                    (0, n.jsx)(K.Bc, {
                                      component: 'span',
                                      className: 'description error',
                                      name: 'email',
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsxs)('div', {
                              className: 'field-row two-column',
                              children: [
                                (0, n.jsxs)('div', {
                                  className: 'field-column',
                                  children: [
                                    (0, n.jsx)(K.gN, {
                                      className: P()('form-field', {
                                        error:
                                          e.errors.income && e.touched.income,
                                      }),
                                      name: 'income',
                                      placeholder: 'Income*',
                                      onKeyPress: function (e) {
                                        return i();
                                      },
                                    }),
                                    (0, n.jsx)(K.Bc, {
                                      component: 'span',
                                      className: 'description error',
                                      name: 'income',
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)('div', {
                                  className: 'field-column',
                                  children: [
                                    (0, n.jsx)(K.gN, {
                                      className: P()('form-field', {
                                        error:
                                          e.errors.loanAmount &&
                                          e.touched.loanAmount,
                                      }),
                                      name: 'loanAmount',
                                      placeholder: 'Loan Amount*',
                                    }),
                                    (0, n.jsx)(K.Bc, {
                                      component: 'span',
                                      className: 'description error',
                                      name: 'loanAmount',
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsxs)('div', {
                              className: 'field-row',
                              children: [
                                (0, n.jsx)(se.Z, {
                                  name: 'isConsented1',
                                  label:
                                    "You understand that by clicking the I AGREE box, you are providing 'written instructions' to BluePagesPro under the Fair Credit Reporting Act, authorizing BluePagesPro to obtain information from your personal credit profile or other information from TransUnion. You authorize BluePagesPro to obtain such information solely to conduct a pre-qualification for credit.",
                                  value: !0,
                                  onChange: function (s) {
                                    e.setFieldTouched('isConsented1', !0),
                                      e.setFieldValue('isConsented1', s);
                                  },
                                }),
                                (0, n.jsx)(K.Bc, {
                                  component: 'span',
                                  className: 'description error',
                                  name: 'isConsented1',
                                }),
                              ],
                            }),
                            (0, n.jsxs)('div', {
                              className: 'field-row',
                              children: [
                                (0, n.jsx)(se.Z, {
                                  name: 'isConsented2',
                                  label: (0, n.jsx)(d.Fragment, {
                                    children: (0, n.jsxs)('span', {
                                      children: [
                                        'I certify I have read and agree to the Electronic Disclosures communications ',
                                        (0, n.jsx)(x(), {
                                          href: '/electronic-consent-disclosure',
                                          children: (0, n.jsx)('a', {
                                            className:
                                              'tc-blue t-strong clickable',
                                            target: '_blank',
                                            children: 'here',
                                          }),
                                        }),
                                        '.',
                                      ],
                                    }),
                                  }),
                                  value: !0,
                                  onChange: function (s) {
                                    e.setFieldTouched('isConsented2', !0),
                                      e.setFieldValue('isConsented2', s);
                                  },
                                }),
                                (0, n.jsx)(K.Bc, {
                                  component: 'span',
                                  className: 'description error',
                                  name: 'isConsented2',
                                }),
                              ],
                            }),
                            (0, n.jsxs)('div', {
                              className: 'button-row',
                              children: [
                                o,
                                (0, n.jsx)('button', {
                                  type: 'submit',
                                  className: P()(
                                    'button medium oblong blue-gradient'
                                  ),
                                  children: 'APPLY NOW',
                                }),
                              ],
                            }),
                            e.isSubmitting &&
                              (0, n.jsx)(te, {
                                title: 'Processing application',
                              }),
                          ],
                        });
                      },
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: 'column right',
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'aas-label',
                      children: [
                        (0, n.jsxs)('span', {
                          className: 'word',
                          children: [
                            (0, n.jsx)('span', {
                              className: 'tc-blue',
                              children: 'A',
                            }),
                            'utomated',
                          ],
                        }),
                        (0, n.jsxs)('span', {
                          className: 'word',
                          children: [
                            (0, n.jsx)('span', {
                              className: 'tc-blue',
                              children: 'P',
                            }),
                            're-Qualification',
                          ],
                        }),
                        (0, n.jsxs)('span', {
                          className: 'word',
                          children: [
                            (0, n.jsx)('span', {
                              className: 'tc-blue',
                              children: 'S',
                            }),
                            'ystem',
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)('div', {
                      className: 'image-wrapper',
                      children: (0, n.jsx)('img', {
                        src: 'assets/images/listing/iSoftPull-integration-mobile.webp',
                      }),
                    }),
                    (0, n.jsxs)('div', {
                      className: 'notice',
                      children: [
                        (0, n.jsx)('p', {
                          children: (0, n.jsxs)('b', {
                            children: [
                              'Your ',
                              (0, n.jsx)('span', {
                                className: 'tc-blue',
                                children: 'credit score',
                              }),
                              ' will not be affected.',
                            ],
                          }),
                        }),
                        (0, n.jsx)('p', {
                          children:
                            'Simply provide a few details to determine your estimated interest rate and the loan amount you may quality for.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            h &&
              (0, n.jsx)(q.Z, {
                modal: !0,
                defaultOpen: !0,
                className: 'default',
                onClose: function () {
                  p(!1);
                },
                children: function (e) {
                  return (0, n.jsxs)('div', {
                    className: 'default',
                    children: [
                      (0, n.jsxs)('div', {
                        className: 'header',
                        children: [
                          (0, n.jsx)(_.HJi, { className: 'icon check-circle' }),
                          (0, n.jsx)('h2', {
                            className: 'title',
                            children: 'Pre-Qualification Application Received',
                          }),
                          (0, n.jsx)('div', {
                            className: 'close',
                            onClick: e,
                            children: (0, n.jsx)(L.j7p, { className: 'icon' }),
                          }),
                        ],
                      }),
                      (0, n.jsx)('div', {
                        className: 'content',
                        children: (0, n.jsxs)('p', {
                          children: [
                            'The Home Improvement lending Pre-Qualification is ',
                            (0, n.jsx)('strong', { children: 'in process' }),
                            '. Your contractor will be contacting you soon. Thank you.',
                          ],
                        }),
                      }),
                    ],
                  });
                },
              }),
          ],
        });
      }
      te.defaultProps = { title: '', loader_size: 30, loader_width: 4 };
      var le = i(36139);
      function ce(e) {
        var s,
          i = e.listing,
          t = function () {
            S({ width: window.innerWidth, height: window.innerHeight });
          },
          r = (0, B.I0)(),
          l = (0, B.v9)(function (e) {
            return e.listing.popup;
          }),
          c = d.useRef(),
          o = d.useRef(),
          u = function (e) {
            return e.schedule.open24Hours
              ? (0, n.jsx)(d.Fragment, {
                  children: (0, n.jsx)('div', {
                    className: 'time',
                    children: 'Open 24 hours',
                  }),
                })
              : e.schedule.closed
              ? (0, n.jsx)(d.Fragment, {
                  children: (0, n.jsx)('div', {
                    className: 'time',
                    children: 'Closed',
                  }),
                })
              : (0, n.jsxs)(d.Fragment, {
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'time',
                      children: [
                        e.schedule.start.time.label,
                        ' ',
                        e.schedule.start.period.label,
                      ],
                    }),
                    (0, n.jsx)('div', {
                      className: 'separator',
                      children: '-',
                    }),
                    (0, n.jsxs)('div', {
                      className: 'time',
                      children: [
                        e.schedule.end.time.label,
                        ' ',
                        e.schedule.end.period.label,
                      ],
                    }),
                  ],
                });
          },
          p =
            (i.facebook_pixel_code,
            (function (e) {
              var s = ('' + e)
                .replace(/\D/g, '')
                .match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
              return s
                ? [s[1] ? '+1 ' : '', s[2], '-', s[3], '-', s[4]].join('')
                : null;
            })(i.phone_number)),
          x = i.listing_url.website_url
            .replace(/^https?:\/\//, '')
            .replace(/\/$/, ''),
          j = (0, a.Z)(d.useState(!1), 2),
          N = (j[0], j[1]),
          b = (0, a.Z)(d.useState(!1), 2),
          w = (b[0], b[1], (0, a.Z)(d.useState(!1), 2)),
          y = (w[0], w[1], (0, a.Z)(d.useState({ width: 0, height: 0 }), 2)),
          P = y[0],
          S = y[1],
          Z = (0, a.Z)(d.useState(!1), 2),
          A = Z[0],
          z = Z[1];
        return (
          d.useEffect(function () {
            return (
              !1 === o.current && (o.current = !0),
              window.addEventListener('resize', t),
              t(),
              function () {
                return window.removeEventListener('resize', t);
              }
            );
          }, []),
          d.useEffect(
            function () {
              P.width > 768 && N(!1);
            },
            [P]
          ),
          (0, n.jsxs)('div', {
            className: 'listing-wrapper platinum',
            children: [
              (0, n.jsxs)('div', {
                className: 'listing',
                children: [
                  (0, n.jsx)(M, { listing: i }),
                  (0, n.jsx)('div', {
                    className: 'featured-qualities-wrapper',
                    children: (0, n.jsxs)('div', {
                      className: 'container',
                      children: [
                        (0, n.jsxs)('div', {
                          className: 'column',
                          children: [
                            (0, n.jsx)('div', {
                              className: 'image-icon',
                              children: (0, n.jsx)('img', {
                                src: 'assets/images/listing/professional-contractors.webp',
                                alt: 'Professional Contractors',
                                loading: 'lazy',
                                width: '59',
                                height: '59',
                              }),
                            }),
                            (0, n.jsx)('div', {
                              className: 'label',
                              children: 'Professional Contractors',
                            }),
                          ],
                        }),
                        (0, n.jsxs)('div', {
                          className: 'column',
                          children: [
                            (0, n.jsx)('div', {
                              className: 'image-icon',
                              children: (0, n.jsx)('img', {
                                src: 'assets/images/listing/affordable-service.webp',
                                alt: 'Affordable Services',
                                loading: 'lazy',
                                width: '59',
                                height: '59',
                              }),
                            }),
                            (0, n.jsx)('div', {
                              className: 'label',
                              children: 'Affordable Services',
                            }),
                          ],
                        }),
                        (0, n.jsxs)('div', {
                          className: 'column',
                          children: [
                            (0, n.jsx)('div', {
                              className: 'image-icon',
                              children: (0, n.jsx)('img', {
                                src: 'assets/images/listing/excellent-service.webp',
                                alt: 'Quality Workmanship',
                                loading: 'lazy',
                                width: '59',
                                height: '59',
                              }),
                            }),
                            (0, n.jsx)('div', {
                              className: 'label',
                              children: 'Quality Workmanship',
                            }),
                          ],
                        }),
                        (0, n.jsxs)('div', {
                          className: 'column',
                          children: [
                            (0, n.jsx)('div', {
                              className: 'image-icon',
                              children: (0, n.jsx)('img', {
                                src: 'assets/images/listing/best-materials.webp',
                                alt: 'Best Materials',
                                loading: 'lazy',
                                width: '59',
                                height: '59',
                              }),
                            }),
                            (0, n.jsx)('div', {
                              className: 'label',
                              children: 'Best Materials',
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)('div', {
                    className: 'services-wrapper',
                    children: (0, n.jsxs)('div', {
                      className: 'container',
                      children: [
                        (0, n.jsxs)('div', {
                          className: 'column',
                          children: [
                            i.video_url &&
                              (0, n.jsx)('div', {
                                className: 'video-wrapper mp4 player',
                                children: (0, n.jsx)(T.J5, {
                                  playsInline: !0,
                                  src: i.video_url,
                                  children: (0, n.jsx)(T.sT, {
                                    position: 'center',
                                  }),
                                }),
                              }),
                            i.external_video_url &&
                              (0, n.jsx)('div', {
                                className: 'video-wrapper url',
                                children: (0, n.jsx)('iframe', {
                                  src: ''.concat(
                                    i.external_video_url,
                                    '?rel=0'
                                  ),
                                  loading: 'lazy',
                                  width: '100%',
                                  height: '320',
                                  frameBorder: '0',
                                  title: i.title,
                                }),
                              }),
                          ],
                        }),
                        (0, n.jsxs)('div', {
                          className: 'column details',
                          children: [
                            (0, n.jsx)('h2', { children: 'Our Services' }),
                            (0, n.jsx)('p', {
                              className: 'short-description',
                              children:
                                'We are professional home improvement contractors in the following fields:',
                            }),
                            i.listing_category.length > 0 &&
                              (0, n.jsx)('div', {
                                className: 'category-wrapper',
                                children: i.listing_category.map(function (
                                  e,
                                  s
                                ) {
                                  return (0, n.jsxs)(
                                    'div',
                                    {
                                      className: 'category',
                                      children: [
                                        (0, n.jsx)(v.nZm, {
                                          className: 'icon',
                                        }),
                                        (0, n.jsx)('div', {
                                          className: 'value',
                                          children: e,
                                        }),
                                      ],
                                    },
                                    s
                                  );
                                }),
                              }),
                            (0, n.jsxs)('div', {
                              className: 'button-row',
                              children: [
                                i.momnt_code &&
                                  (0, n.jsx)(m.Z, { html: i.momnt_code }),
                                i.upgrade_embedded_url &&
                                  null == i.momnt_code &&
                                  (0, n.jsx)('a', {
                                    href: i.upgrade_embedded_url,
                                    ref: c,
                                    className: 'button financing',
                                    target: '_blank',
                                    children: 'Get Financing',
                                  }),
                                1 == i.listing_url.financing_status &&
                                  null == i.momnt_code &&
                                  null == i.upgrade_embedded_url &&
                                  (0, n.jsx)(d.Fragment, {
                                    children: i.listing_url.financing_url
                                      ? (0, n.jsx)('a', {
                                          href: i.listing_url.financing_url,
                                          ref: c,
                                          className: 'button financing',
                                          target: '_blank',
                                          children: 'Get Financing',
                                        })
                                      : (0, n.jsx)('div', {
                                          className: 'button financing',
                                          onClick: function () {
                                            r(
                                              (0, O.f)({
                                                show: !0,
                                                listing_id: i.listing_id,
                                                loanAmount: 0,
                                                loanOption: {},
                                              })
                                            );
                                          },
                                          children: 'Get Financing',
                                        }),
                                  }),
                                (0, n.jsx)(F(), {
                                  href: '#consultation-form',
                                  className: 'button special-offer',
                                  children: 'Get Special Offer',
                                }),
                                i.instant_estimator_embedded_code &&
                                  (0, n.jsx)(q.Z, {
                                    modal: !0,
                                    trigger: (0, n.jsx)('div', {
                                      className: 'button instant-estimator',
                                      children: 'Instant Estimator',
                                    }),
                                    children: function (e) {
                                      return (0, n.jsxs)(d.Fragment, {
                                        children: [
                                          (0, n.jsx)('div', {
                                            className: 'header',
                                            children: (0, n.jsx)('div', {
                                              className: 'close-popup',
                                              onClick: e,
                                              children: (0, n.jsx)(L.j7p, {
                                                className: 'icon',
                                              }),
                                            }),
                                          }),
                                          (0, n.jsx)('div', {
                                            className: 'content',
                                            children: (0, n.jsx)(m.Z, {
                                              html: i.instant_estimator_embedded_code,
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
                  (0, n.jsx)('div', {
                    className: 'content-wrapper',
                    children: (0, n.jsxs)('div', {
                      className: 'container',
                      children: [
                        (0, n.jsx)('div', {
                          className: 'title',
                          children: 'About us',
                        }),
                        i.content &&
                          (0, n.jsx)('div', {
                            className: 'description',
                            dangerouslySetInnerHTML: {
                              __html: g().sanitize(i.content),
                            },
                          }),
                      ],
                    }),
                  }),
                  !1 === i.is_aps_active &&
                    (0, n.jsx)('div', {
                      className: 'financing-wrapper',
                      children: (0, n.jsxs)('div', {
                        className: 'container',
                        children: [
                          (0, n.jsxs)('div', {
                            className: 'financing-details',
                            children: [
                              (0, n.jsx)('div', {
                                className: 'sub-title',
                                children: 'Get Financing',
                              }),
                              (0, n.jsxs)('h2', {
                                className: 'title',
                                children: [
                                  (0, n.jsx)('span', {
                                    children: 'Affordable',
                                  }),
                                  ' Payment Options Available\u2026 ',
                                ],
                              }),
                              (0, n.jsx)('div', {
                                className: 'description',
                                children:
                                  'Try our financing calculator to easily compute your estimated loan ammount in your preferred terms.',
                              }),
                              (0, n.jsxs)('div', {
                                className: 'button',
                                children: [
                                  'Try Now!',
                                  P.width > 750
                                    ? (0, n.jsx)('img', {
                                        src: 'assets/images/listing/green-arrow-right.webp',
                                        alt: 'Try Financing calculator',
                                        className: 'floating-side',
                                        loading: 'lazy',
                                        width: '133',
                                        height: '39',
                                      })
                                    : (0, n.jsx)('img', {
                                        src: 'assets/images/listing/green-arrow-down.webp',
                                        alt: 'Try Financing calculator',
                                        className: 'floating',
                                        loading: 'lazy',
                                        width: '18',
                                        height: '70',
                                      }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsx)('div', {
                            className: 'financing-estimator',
                            children: (0, n.jsx)(W.Z, {
                              listing: i,
                              financingLinkRef: c,
                            }),
                          }),
                        ],
                      }),
                    }),
                  !0 === i.is_aps_active && (0, n.jsx)(re, { listing: i }),
                  i.custom_project_embedded_code
                    ? (0, n.jsx)('div', {
                        className: 'companycam-wrapper',
                        children: (0, n.jsx)(m.Z, {
                          html: i.custom_project_embedded_code,
                        }),
                      })
                    : (0, n.jsx)(D, { listingMedia: i.listing_media }),
                  i.virtual_presentation_url &&
                    (0, n.jsx)('div', {
                      className: 'virtual-presentation-wrapper',
                      children: (0, n.jsxs)('div', {
                        className: 'container',
                        children: [
                          (0, n.jsx)('div', {
                            className: 'sub-header',
                            children: 'Virtual Presentation',
                          }),
                          (0, n.jsx)('h2', { children: 'Watch Demo' }),
                          (0, n.jsx)('div', {
                            className: 'virtual-presentation',
                            children: (0, n.jsx)('iframe', {
                              src: i.virtual_presentation_url,
                              loading: 'lazy',
                              width: '100%',
                              height: '900',
                              frameBorder: '0',
                            }),
                          }),
                        ],
                      }),
                    }),
                  i.review_embedded_code &&
                    (0, n.jsxs)('div', {
                      className: 'review-wrapper',
                      children: [
                        (0, n.jsxs)('div', {
                          className: 'container',
                          children: [
                            (0, n.jsx)('div', {
                              className: 'column thumbnail',
                              children: (0, n.jsx)('img', {
                                src: 'assets/images/listing/review-thumbnail.webp',
                                alt: 'ProReview Customers',
                                loading: 'lazy',
                                width: '540',
                                height: '561',
                              }),
                            }),
                            (0, n.jsxs)('div', {
                              className: 'column slider',
                              children: [
                                (0, n.jsx)('div', {
                                  className: 'logo',
                                  children: (0, n.jsx)(
                                    h(),
                                    ((s = {
                                      alt: 'BluePagesPro Truereviews',
                                      src: 'assets/images/listing/pro-review-logo.webp',
                                    }),
                                    (0, C.Z)(s, 'alt', 'ProReview'),
                                    (0, C.Z)(s, 'layout', 'intrinsic'),
                                    (0, C.Z)(s, 'width', '250'),
                                    (0, C.Z)(s, 'height', '51'),
                                    s)
                                  ),
                                }),
                                (0, n.jsx)('div', {
                                  className: 'sub-header',
                                  children: 'What Our Customers Are Saying...',
                                }),
                                (0, n.jsx)('div', {
                                  className: 'review',
                                  children: (0, n.jsx)(m.Z, {
                                    html: i.review_embedded_code,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsx)('div', { className: 'divider' }),
                      ],
                    }),
                  i.contractor_commerce_code &&
                    (0, n.jsx)('div', {
                      className: 'store-wrapper',
                      children: (0, n.jsx)(m.Z, {
                        html: i.contractor_commerce_code,
                      }),
                    }),
                  i.custom_map_embedded_code
                    ? (0, n.jsxs)('div', {
                        className: 'map-wrapper project-map-it',
                        children: [
                          (0, n.jsx)('div', {
                            className: 'map-details',
                            children: (0, n.jsxs)('div', {
                              className: 'container',
                              children: [
                                (0, n.jsx)('div', {
                                  className: 'column title',
                                  children: (0, n.jsx)('h2', {
                                    children: 'Installed Projects',
                                  }),
                                }),
                                (0, n.jsxs)('div', {
                                  className: 'column powered-by',
                                  children: [
                                    (0, n.jsx)('span', {
                                      className: 'light',
                                      children: 'Powered By',
                                    }),
                                    (0, n.jsx)('img', {
                                      src: 'assets/images/listing/project-map-it-icon-small.webp',
                                      alt: 'Project Map It',
                                      loading: 'lazy',
                                      width: '21',
                                      height: '29',
                                    }),
                                    'Project Map It',
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, n.jsx)('div', {
                            className: 'map-container',
                            children: (0, n.jsx)(m.Z, {
                              html: i.custom_map_embedded_code,
                            }),
                          }),
                        ],
                      })
                    : (0, n.jsx)('div', {
                        className: 'map-wrapper',
                        children: (0, n.jsx)('div', {
                          className: 'map-container',
                          children: (0, n.jsx)(k.Z, {
                            listing: i,
                            markers: i.listing_location,
                          }),
                        }),
                      }),
                  (0, n.jsx)(ie, { listing: i }),
                  i.roofle_embedded_code &&
                    (0, n.jsx)('div', {
                      className: 'roofle-wrapper',
                      children: (0, n.jsx)(m.Z, {
                        html: i.roofle_embedded_code,
                      }),
                    }),
                  i.livechat_embedded_code &&
                    (0, n.jsx)('div', {
                      className: 'live-chat-wrapper',
                      children: (0, n.jsx)(m.Z, {
                        html: i.livechat_embedded_code,
                      }),
                    }),
                  i.livechat_embedded_code && !1,
                ],
              }),
              (0, n.jsxs)('div', {
                className: 'footer',
                children: [
                  (0, n.jsx)('div', {
                    className: 'footer-top',
                    children: (0, n.jsxs)('div', {
                      className: 'container',
                      children: [
                        (0, n.jsxs)('div', {
                          className: 'column',
                          children: [
                            (0, n.jsx)('div', {
                              className: 'logo-wrapper',
                              children: (0, n.jsx)('div', {
                                className: 'logo',
                                children: (0, n.jsx)('img', {
                                  src: i.logo_url,
                                  alt: ''.concat(i.title, ' logo'),
                                  loading: 'lazy',
                                  onLoad: function (e) {
                                    var s = e.target,
                                      i = s.offsetHeight,
                                      a = s.offsetWidth;
                                    z({ width: a, height: i });
                                  },
                                  width: A.width,
                                  height: A.height,
                                }),
                              }),
                            }),
                            (0, n.jsx)('p', { children: i.banner_description }),
                            (0, n.jsx)(ne, { listing: i }),
                          ],
                        }),
                        (0, n.jsxs)('div', {
                          className: 'column',
                          children: [
                            (0, n.jsx)('div', {
                              className: 'title',
                              children: 'Get in Touch',
                            }),
                            i.phone_number &&
                              (0, n.jsxs)('div', {
                                className: 'data phone',
                                children: [
                                  (0, n.jsx)('div', {
                                    className: 'label',
                                    children: (0, n.jsx)(_.PES, {
                                      className: 'icon',
                                    }),
                                  }),
                                  (0, n.jsx)('a', {
                                    href: 'tel:+1'.concat(i.phone_number),
                                    className: 'value',
                                    children: p,
                                  }),
                                ],
                              }),
                            (0, n.jsxs)('div', {
                              className: 'data addresses',
                              children: [
                                (0, n.jsx)('div', {
                                  className: 'label',
                                  children: (0, n.jsx)(f.i63, {
                                    className: 'icon',
                                  }),
                                }),
                                (0, n.jsx)('div', {
                                  className: 'value',
                                  children: i.listing_location.map(function (
                                    e
                                  ) {
                                    return (0, n.jsx)(
                                      'div',
                                      {
                                        className: 'address',
                                        children: (0, n.jsxs)('div', {
                                          className: 'value',
                                          children: [
                                            ''
                                              .concat(e.address_line_1, ', ')
                                              .concat(
                                                e.city ? ' ' + e.city : '',
                                                ' '
                                              )
                                              .concat(
                                                e.state ? ', ' + e.state : '',
                                                ', '
                                              )
                                              .concat(e.country, ' ')
                                              .concat(e.postal_code),
                                            e.phone_number &&
                                              (0, n.jsxs)('div', {
                                                className: 'phone-number',
                                                children: [
                                                  'Contact Number: ',
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
                            i.listing_url.website_url &&
                              (0, n.jsxs)('div', {
                                className: 'data website',
                                children: [
                                  (0, n.jsx)('div', {
                                    className: 'label',
                                    children: (0, n.jsx)(v.JuS, {
                                      className: 'icon',
                                    }),
                                  }),
                                  (0, n.jsx)('div', {
                                    className: 'value',
                                    children: (0, n.jsx)('a', {
                                      href: i.listing_url.website_url,
                                      target: '_blank',
                                      children: x,
                                    }),
                                  }),
                                ],
                              }),
                            i.license &&
                              (0, n.jsxs)('div', {
                                className: 'data license',
                                children: [
                                  (0, n.jsx)('div', {
                                    className: 'label',
                                    children: (0, n.jsx)(E.lKj, {
                                      className: 'icon',
                                    }),
                                  }),
                                  (0, n.jsxs)('div', {
                                    className: 'value',
                                    children: [
                                      'License number: ',
                                      '#' + i.license,
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, n.jsx)('div', {
                          className: 'column',
                          children:
                            i.business_hours &&
                            (0, n.jsxs)('div', {
                              className: 'business-details',
                              children: [
                                (0, n.jsx)('div', {
                                  className: 'title',
                                  children: 'Business Hours',
                                }),
                                (0, n.jsx)('div', {
                                  className: 'business-hours',
                                  children: i.business_hours.map(function (
                                    e,
                                    s
                                  ) {
                                    return (0, n.jsxs)(
                                      'div',
                                      {
                                        className: 'data day-wrapper',
                                        children: [
                                          (0, n.jsx)('div', {
                                            className: 'label',
                                            children: (0, n.jsx)('span', {
                                              className: 'day',
                                              children: e.day.slice(0, 3),
                                            }),
                                          }),
                                          (0, n.jsx)('div', {
                                            className: 'value',
                                            children: (0, n.jsx)('div', {
                                              className: 'time-wrapper',
                                              children: u(e),
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
                        (0, n.jsx)('div', {
                          className: 'column toolbox',
                          children: (0, n.jsx)('div', {
                            className: 'image-wrapper',
                            children: (0, n.jsxs)('a', {
                              href: '/toolbox/',
                              children: [
                                (0, n.jsx)('img', {
                                  src: 'assets/images/homeowners-toolbox.webp',
                                  alt: 'Homeowners Toolbox',
                                  width: '85',
                                  height: '49',
                                  loading: 'lazy',
                                }),
                                (0, n.jsx)('span', {
                                  className: 'label',
                                  children: 'BPP Toolbox',
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)('div', {
                    className: 'footer-bottom',
                    children: (0, n.jsxs)('div', {
                      className: 'container',
                      children: [
                        'Copyright \xa9 ',
                        new Date().getFullYear(),
                        ' \u2013 BluePagesPro \u2013 All Rights Reserved.',
                      ],
                    }),
                  }),
                ],
              }),
              l.financingCalculator.show && (0, n.jsx)(le.Z, { listing: i }),
            ],
          })
        );
      }
      var oe = i(1926),
        de = !0;
      function me(e) {
        var s = e.listing,
          i = function (e, i) {
            var n = (0, a.Z)(s.logo_url.split('?'), 2),
              t = n[0],
              r = n[1];
            null === r ||
              void 0 === r ||
              r
                .split('&')
                .filter(function (e) {
                  return !(e === i || e.startsWith(''.concat(i, '=')));
                })
                .join('&');
            return t;
          },
          t = (0, l.useRouter)();
        return t.isFallback
          ? ''
          : (d.useEffect(function () {
              'FOR_APPROVAL' != s || t.push('/listings/pending-for-approval');
            }, []),
            (0, n.jsxs)(d.Fragment, {
              children: [
                [6, 7, 8].includes(s.tier) &&
                  (0, n.jsxs)(d.Fragment, {
                    children: [
                      (0, n.jsxs)(r(), {
                        children: [
                          (0, n.jsx)('meta', {
                            name: 'robots',
                            content:
                              'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
                          }),
                          (0, n.jsxs)('title', {
                            children: [s.title],
                          }),
                          (0, n.jsx)('meta', {
                            name: 'description',
                            content: s.meta_description,
                          }),
                          (0, n.jsx)('meta', {
                            name: 'keywords',
                            content: ''.concat(s.title),
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:url',
                            content:
                              'https://bluepagespro.com/listings/'.concat(
                                s.slug
                              ),
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:type',
                            content: 'website',
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:title',
                            content: ''.concat(s.title, ' --- '),
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:description',
                            content: s.meta_description,
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:image',
                            content: i(),
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:image:width',
                            content: '344',
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:image:height',
                            content: '170',
                          }),
                          (0, n.jsx)('meta', {
                            name: 'twitter:card',
                            content: 'summary',
                          }),
                          (0, n.jsx)('meta', {
                            name: 'twitter:image',
                            content: i(),
                          }),
                        ],
                      }),
                      (0, n.jsx)(S, { listing: s, isLocked: 8 === s.tier }),
                    ],
                  }),
                2 == s.tier &&
                  (0, n.jsxs)(d.Fragment, {
                    children: [
                      (0, n.jsxs)(r(), {
                        children: [
                          (0, n.jsx)('meta', {
                            name: 'robots',
                            content:
                              'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
                          }),
                          (0, n.jsxs)('title', {
                            children: [s.title, ''],
                          }),
                          (0, n.jsx)('meta', {
                            name: 'description',
                            content: s.banner_description,
                          }),
                          (0, n.jsx)('meta', {
                            name: 'keywords',
                            content: ''.concat(s.title, ''),
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:url',
                            content:
                              'https://bluepagespro.com/listings/'.concat(
                                s.slug
                              ),
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:type',
                            content: 'website',
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:title',
                            content: ''.concat(s.title, ''),
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:description',
                            content: s.banner_description,
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:image',
                            content: i(),
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:image:width',
                            content: '344',
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:image:height',
                            content: '170',
                          }),
                          (0, n.jsx)('meta', {
                            name: 'twitter:card',
                            content: 'summary',
                          }),
                          (0, n.jsx)('meta', {
                            name: 'twitter:image',
                            content: i(),
                          }),
                        ],
                      }),
                      s.video_url &&
                        (0, n.jsx)(o(), {
                          id: 'video-object',
                          type: 'application/ld+json',
                          dangerouslySetInnerHTML: {
                            __html:
                              '\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t      "@context": "https://schema.org",\n\t\t\t\t\t\t\t      "@type": "VideoObject",\n\t\t\t\t\t\t\t      "contentURL": "'
                                .concat(
                                  s.video_url,
                                  '",\n\t\t\t\t\t\t\t      "embedUrl": "https://bluepagespro.com/listings/'
                                )
                                .concat(
                                  s.slug,
                                  '",\n\t\t\t\t\t\t\t      "description": "'
                                )
                                .concat(
                                  s.banner_description,
                                  '",\n\t\t\t\t\t\t\t      "regionsAllowed": "US",\n\t\t\t\t\t\t\t      "name": "'
                                )
                                .concat(
                                  s.title,
                                  '",\n\t\t\t\t\t\t\t      "thumbnailUrl": "'
                                )
                                .concat(
                                  s.banner_url,
                                  '"\n\t\t\t\t\t\t\t    }\n\t\t\t\t\t\t\t'
                                ),
                          },
                        }),
                      (0, n.jsx)(Z.Z, { listing: s }),
                    ],
                  }),
                4 == s.tier &&
                  (0, n.jsxs)(d.Fragment, {
                    children: [
                      (0, n.jsxs)(r(), {
                        children: [
                          (0, n.jsx)('meta', {
                            name: 'robots',
                            content:
                              'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
                          }),
                          (0, n.jsxs)('title', {
                            children: [s.title, ' - BluePagesPro'],
                          }),
                          (0, n.jsx)('meta', {
                            name: 'keywords',
                            content: ''.concat(s.title, ' BluePagesPro'),
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:url',
                            content:
                              'https://bluepagespro.com/listings/'.concat(
                                s.slug
                              ),
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:type',
                            content: 'website',
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:title',
                            content: ''.concat(s.title, ''),
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:image',
                            content: i(),
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:image:width',
                            content: '344',
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:image:height',
                            content: '170',
                          }),
                          (0, n.jsx)('meta', {
                            name: 'twitter:card',
                            content: 'summary',
                          }),
                          (0, n.jsx)('meta', {
                            name: 'twitter:image',
                            content: i(),
                          }),
                        ],
                      }),
                      (0, n.jsx)(A.Z, { listing: s }),
                    ],
                  }),
                5 == s.tier &&
                  (0, n.jsxs)(d.Fragment, {
                    children: [
                      (0, n.jsxs)(r(), {
                        children: [
                          (0, n.jsx)('meta', {
                            name: 'robots',
                            content:
                              'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
                          }),
                          (0, n.jsxs)('title', {
                            children: [s.title, ' - BluePagesPro'],
                          }),
                          (0, n.jsx)('meta', {
                            name: 'keywords',
                            content: ''.concat(s.title, ' BluePagesPro'),
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:url',
                            content:
                              'https://bluepagespro.com/listings/'.concat(
                                s.slug
                              ),
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:type',
                            content: 'website',
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:title',
                            content: ''.concat(s.title, ' - BluePagesPro'),
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:image',
                            content: i(),
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:image:width',
                            content: '344',
                          }),
                          (0, n.jsx)('meta', {
                            property: 'og:image:height',
                            content: '170',
                          }),
                          (0, n.jsx)('meta', {
                            name: 'twitter:card',
                            content: 'summary',
                          }),
                          (0, n.jsx)('meta', {
                            name: 'twitter:image',
                            content: i(),
                          }),
                        ],
                      }),
                      (0, n.jsx)(ce, { listing: s }),
                    ],
                  }),
              ],
            }));
      }
      me.Layout = oe.Z;
    },
  },
  function (e) {
    e.O(
      0,
      [
        9866, 5445, 5937, 4617, 260, 6556, 955, 2013, 1057, 4090, 1664, 5675,
        3424, 1141, 6893, 2345, 666, 6291, 2633, 1743, 9774, 2888, 179,
      ],
      function () {
        return (s = 12380), e((e.s = s));
        var s;
      }
    );
    var s = e.O();
    _N_E = s;
  },
]);
