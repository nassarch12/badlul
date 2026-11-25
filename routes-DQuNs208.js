import {
    n as e,
    r as t,
    t as n
} from "./index-D_H1atCe.js";
var r = (...e) => e.filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t).join(` `).trim(),
    i = e => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
    a = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()),
    o = e => {
        let t = a(e);
        return t.charAt(0).toUpperCase() + t.slice(1)
    },
    s = {
        xmlns: `http://www.w3.org/2000/svg`,
        width: 24,
        height: 24,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: 2,
        strokeLinecap: `round`,
        strokeLinejoin: `round`
    },
    c = e => {
        for (let t in e)
            if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
        return !1
    },
    l = t(e()),
    u = (0, l.forwardRef)(({
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: i,
        className: a = ``,
        children: o,
        iconNode: u,
        ...d
    }, f) => (0, l.createElement)(`svg`, {
        ref: f,
        ...s,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: i ? Number(n) * 24 / Number(t) : n,
        className: r(`lucide`, a),
        ...!o && !c(d) && {
            "aria-hidden": `true`
        },
        ...d
    }, [...u.map(([e, t]) => (0, l.createElement)(e, t)), ...Array.isArray(o) ? o : [o]])),
    d = (e, t) => {
        let n = (0, l.forwardRef)(({
            className: n,
            ...a
        }, s) => (0, l.createElement)(u, {
            ref: s,
            iconNode: t,
            className: r(`lucide-${i(o(e))}`, `lucide-${e}`, n),
            ...a
        }));
        return n.displayName = o(e), n
    },
    f = d(`arrow-right`, [
        [`path`, {
            d: `M5 12h14`,
            key: `1ays0h`
        }],
        [`path`, {
            d: `m12 5 7 7-7 7`,
            key: `xquz4c`
        }]
    ]),
    p = d(`gift`, [
        [`path`, {
            d: `M12 7v14`,
            key: `1akyts`
        }],
        [`path`, {
            d: `M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8`,
            key: `1sqzm4`
        }],
        [`path`, {
            d: `M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5`,
            key: `kc0143`
        }],
        [`rect`, {
            x: `3`,
            y: `7`,
            width: `18`,
            height: `4`,
            rx: `1`,
            key: `1hberx`
        }]
    ]),
    m = d(`shirt`, [
        [`path`, {
            d: `M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z`,
            key: `1wgbhj`
        }]
    ]),
    h = d(`shopping-bag`, [
        [`path`, {
            d: `M16 10a4 4 0 0 1-8 0`,
            key: `1ltviw`
        }],
        [`path`, {
            d: `M3.103 6.034h17.794`,
            key: `awc11p`
        }],
        [`path`, {
            d: `M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,
            key: `o988cm`
        }]
    ]),
    g = d(`star`, [
        [`path`, {
            d: `M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,
            key: `r04s7s`
        }]
    ]),
    _ = `/assets/hero-BdQX1V-z.jpg`,
    v = n(),
    y = `lululemon`,
    b = [{
        icon: h,
        title: `1. Apply Now`,
        text: `Quick and easy registration`
    }, {
        icon: m,
        title: `2. Try`,
        text: `Try lululemon products at home`
    }, {
        icon: g,
        title: `3. Earn`,
        text: `Share your honest review`
    }, {
        icon: p,
        title: `4. Get Rewarded`,
        text: `Receive a $750 gift card`
    }];

function x() {
    let [e] = (0, l.useState)(() => Date.now() + 1728e5 + 504e5 + 204e4 + 46e3), [t, n] = (0, l.useState)(e - Date.now());
    (0, l.useEffect)(() => {
        let t = setInterval(() => n(Math.max(0, e - Date.now())), 1e3);
        return () => clearInterval(t)
    }, [e]);
    let r = Math.floor(t / 1e3);
    return {
        days: Math.floor(r / 86400),
        hours: Math.floor(r % 86400 / 3600),
        minutes: Math.floor(r % 3600 / 60),
        seconds: r % 60
    }
}

function S({
    light: e = !1
}) {
    return (0, v.jsx)(`span`, {
        className: `block text-5xl font-extrabold lowercase leading-none tracking-[-0.03em] md:text-6xl ${e?`text-ivory`:`text-ink`}`,
        children: y
    })
}

function C({
    children: e
}) {
    return (0, v.jsxs)(`div`, {
        className: `flex items-center justify-center gap-4`,
        children: [(0, v.jsx)(`span`, {
            className: `h-px w-16 bg-current opacity-30`
        }), (0, v.jsx)(`span`, {
            className: `text-xs font-semibold tracking-[0.35em]`,
            children: e
        }), (0, v.jsx)(`span`, {
            className: `h-px w-16 bg-current opacity-30`
        })]
    })
}

function w() {
    return (0, v.jsx)(`div`, {
        className: `grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4`,
        children: b.map(e => (0, v.jsxs)(`div`, {
            className: `flex flex-col items-center text-center`,
            children: [(0, v.jsx)(`span`, {
                className: `mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:border-brand hover:text-brand`,
                children: (0, v.jsx)(e.icon, {
                    className: `h-8 w-8`,
                    strokeWidth: 1.25
                })
            }), (0, v.jsx)(`h3`, {
                className: `text-sm font-bold tracking-[0.15em] text-ink`,
                children: e.title
            }), (0, v.jsx)(`p`, {
                className: `mt-1.5 max-w-40 font-serif text-[15px] italic leading-snug text-ink/70`,
                children: e.text
            })]
        }, e.title))
    })
}

function T() {
    let {
        days: e,
        hours: t,
        minutes: n,
        seconds: r
    } = x(), i = e => String(e).padStart(2, `0`);
    return (0, v.jsxs)(`div`, {
        className: `min-h-screen bg-ivory font-body text-ink`,
        children: [(0, v.jsxs)(`section`, {
            className: `relative flex min-h-[92vh] flex-col overflow-hidden`,
            children: [(0, v.jsx)(`img`, {
                src: _,
                alt: `Athlete meditating on a mountain summit at sunset`,
                className: `absolute inset-0 h-full w-full object-cover`
            }), (0, v.jsx)(`div`, {
                className: `absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10`
            }), (0, v.jsxs)(`div`, {
                className: `relative z-10 flex flex-1 flex-col items-start justify-center px-6 pb-24 md:px-16`,
                children: [(0, v.jsx)(`div`, {
                    className: `text-ivory`,
                    children: (0, v.jsx)(C, {
                        children: `Limited Time Offer`
                    })
                }), (0, v.jsx)(`h1`, {
                    className: `mt-6 text-6xl font-extrabold lowercase leading-none tracking-[-0.03em] text-ivory md:text-8xl`,
                    children: y
                }), (0, v.jsxs)(`p`, {
                    className: `mt-6 max-w-xl text-lg leading-relaxed text-ivory/90 md:text-xl`,
                    children: [`Try exclusive `, y, ` gear from home and get a $750 gift card`]
                }), (0, v.jsxs)(`a`, {
                    href: `https://linkthem.net/aff_c?offer_id=1139&aff_id=149987`,
                    className: `group mt-10 inline-flex items-center gap-3 rounded-full bg-ivory px-12 py-4 text-sm font-bold tracking-[0.25em] text-ink shadow-xl transition-all hover:scale-[1.03] hover:shadow-2xl`,
                    children: [`Apply Now`, (0, v.jsx)(f, {
                        className: `h-4 w-4 transition-transform group-hover:translate-x-1`
                    })]
                }), (0, v.jsx)(`p`, {
                    className: `mt-5 text-xs italic text-ivory/70`,
                    children: `* Available for all ages and countries.`
                })]
            })]
        }), (0, v.jsx)(`section`, {
            className: `px-6 py-16 md:px-16`,
            children: (0, v.jsx)(`div`, {
                className: `mx-auto max-w-5xl`,
                children: (0, v.jsx)(w, {})
            })
        }), (0, v.jsxs)(`section`, {
            id: `offer`,
            className: `px-6 pb-16 md:px-16`,
            children: [(0, v.jsxs)(`div`, {
                className: `mx-auto max-w-3xl rounded-3xl bg-ink px-6 py-12 text-center text-ivory shadow-2xl md:px-16`,
                children: [(0, v.jsx)(`div`, {
                    className: `text-ivory/80`,
                    children: (0, v.jsx)(C, {
                        children: `Limited Time Offer`
                    })
                }), (0, v.jsx)(`div`, {
                    className: `mt-6 flex justify-center`,
                    children: (0, v.jsx)(S, {
                        light: !0
                    })
                }), (0, v.jsx)(`h2`, {
                    className: `mt-6 font-serif text-4xl font-bold italic md:text-5xl`,
                    children: `Get a $750 Gift Card`
                }), (0, v.jsx)(`div`, {
                    className: `mt-10 grid grid-cols-4 divide-x divide-ivory/20`,
                    children: [{
                        v: i(e),
                        l: `Days`
                    }, {
                        v: i(t),
                        l: `Hours`
                    }, {
                        v: i(n),
                        l: `Minutes`
                    }, {
                        v: i(r),
                        l: `Seconds`
                    }].map(e => (0, v.jsxs)(`div`, {
                        className: `px-2`,
                        children: [(0, v.jsx)(`div`, {
                            className: `text-4xl font-extrabold tabular-nums md:text-5xl`,
                            children: e.v
                        }), (0, v.jsx)(`div`, {
                            className: `mt-2 text-[11px] font-semibold tracking-[0.3em] text-ivory/60`,
                            children: e.l
                        })]
                    }, e.l))
                })]
            }), (0, v.jsxs)(`div`, {
                className: `mt-12 text-center`,
                children: [(0, v.jsxs)(`a`, {
                    href: `https://linkthem.net/aff_c?offer_id=1139&aff_id=149987`,
                    className: `group inline-flex items-center gap-3 rounded-full bg-brand px-16 py-4 text-sm font-bold tracking-[0.25em] text-brand-foreground shadow-lg shadow-brand/30 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-brand/40`,
                    children: [`Apply Now`, (0, v.jsx)(f, {
                        className: `h-4 w-4 transition-transform group-hover:translate-x-1`
                    })]
                }), (0, v.jsx)(`p`, {
                    className: `mt-4 text-xs italic text-ink/60`,
                    children: `* Available for all ages and countries.`
                })]
            })]
        }), (0, v.jsx)(`section`, {
            className: `px-6 pb-20 md:px-16`,
            children: (0, v.jsxs)(`div`, {
                className: `mx-auto max-w-5xl`,
                children: [(0, v.jsx)(`div`, {
                    className: `mb-14 text-ink`,
                    children: (0, v.jsx)(C, {
                        children: `How It Works`
                    })
                }), (0, v.jsx)(w, {})]
            })
        }), (0, v.jsxs)(`footer`, {
            className: `bg-ink px-6 py-14 text-center text-ivory`,
            children: [(0, v.jsx)(`div`, {
                className: `flex justify-center`,
                children: (0, v.jsx)(S, {
                    light: !0
                })
            }), (0, v.jsx)(`div`, {
                className: `mt-8 text-ivory/60`,
                children: (0, v.jsx)(C, {
                    children: `More than activewear — a lifestyle`
                })
            }), (0, v.jsxs)(`p`, {
                className: `mt-8 text-xs text-ivory/40`,
                children: [`© 2026 `, y, `. All rights reserved.`]
            })]
        })]
    })
}
export {
    T as component
};