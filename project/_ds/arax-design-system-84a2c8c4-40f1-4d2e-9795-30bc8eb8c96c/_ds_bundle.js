/* @ds-bundle: {"format":4,"namespace":"AraxDesignSystem_84a2c8","components":[{"name":"AddressSticker","sourcePath":"components/brand/AddressSticker.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"TornLabel","sourcePath":"components/brand/TornLabel.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"FlavorTag","sourcePath":"components/core/FlavorTag.jsx"},{"name":"PaperCard","sourcePath":"components/core/PaperCard.jsx"},{"name":"SearchPill","sourcePath":"components/core/SearchPill.jsx"}],"sourceHashes":{"components/brand/AddressSticker.jsx":"d91de58eb151","components/brand/Logo.jsx":"ca4b6867b6d1","components/brand/TornLabel.jsx":"3c8fca42451b","components/core/Button.jsx":"baaef3490e47","components/core/FlavorTag.jsx":"45d886ed6135","components/core/PaperCard.jsx":"996f231e0c64","components/core/SearchPill.jsx":"7dde2e7667f3","ui_kits/instagram/EventPoster.jsx":"b48aca7eba5d","ui_kits/instagram/FeedGrid.jsx":"c267acdc0df4","ui_kits/instagram/PostViewer.jsx":"615c0a671597","ui_kits/instagram/data.js":"2b518c7f00f7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AraxDesignSystem_84a2c8 = window.AraxDesignSystem_84a2c8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/AddressSticker.jsx
try { (() => {
function AddressSticker({
  children,
  size = 44,
  color = '#fff',
  outline = 'var(--arax-blue-deep)',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      font: `700 ${size}px/1 var(--font-label)`,
      color,
      WebkitTextStroke: `${Math.max(1.5, size / 22)}px ${outline}`,
      paintOrder: 'stroke fill',
      textShadow: `0 ${Math.round(size / 14)}px 0 ${outline}`,
      letterSpacing: '.01em',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { AddressSticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/AddressSticker.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Logo({
  src = 'assets/logo.jpg',
  size = 96,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "Arax",
    width: size,
    height: size,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      objectFit: 'cover',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/TornLabel.jsx
try { (() => {
function TornLabel({
  children,
  variant = 'hand',
  tilt = 0,
  lined = false,
  pin = false,
  size,
  style
}) {
  const fonts = {
    hand: `700 ${size || 34}px/1.1 var(--font-hand)`,
    crayon: `400 ${size || 40}px/1 var(--font-crayon)`,
    label: `800 ${size || 30}px/1 var(--font-label)`
  };
  const lines = lined ? {
    backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 22px, var(--paper-rule) 22px 23px)',
    backgroundColor: 'var(--paper-lined)'
  } : {
    background: 'var(--paper-white)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 24px',
      clipPath: 'var(--torn-edge)',
      font: fonts[variant],
      color: 'var(--ink)',
      transform: `rotate(${tilt}deg)`,
      filter: 'drop-shadow(0 3px 4px rgba(0,0,0,.25))',
      letterSpacing: variant === 'crayon' ? '.04em' : 0,
      ...lines,
      ...style
    }
  }, pin && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 35% 35%, #ff8a80, var(--crayon-red) 55%, #8c1a14)',
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { TornLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TornLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  primary: {
    background: 'var(--arax-red)',
    color: 'var(--paper-white)',
    border: '2px solid var(--arax-red)'
  },
  secondary: {
    background: 'var(--arax-blue)',
    color: 'var(--paper-white)',
    border: '2px solid var(--arax-blue)'
  },
  paper: {
    background: 'var(--paper-white)',
    color: 'var(--ink)',
    border: '2px solid var(--ink)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ink)',
    border: '2px solid transparent'
  }
};
const S = {
  sm: {
    padding: '6px 14px',
    fontSize: 14
  },
  md: {
    padding: '10px 20px',
    fontSize: 16
  },
  lg: {
    padding: '14px 28px',
    fontSize: 19
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  children,
  icon,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      ...V[variant],
      ...S[size],
      font: `700 ${S[size].fontSize}px/1 var(--font-label)`,
      letterSpacing: '.03em',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      transform: disabled ? 'none' : `rotate(${h ? -1.5 : 0}deg) scale(${p ? .96 : h ? 1.03 : 1})`,
      transition: 'transform var(--dur-base) var(--ease-bounce), filter var(--dur-fast)',
      filter: h && !disabled ? 'brightness(1.08)' : 'none',
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/FlavorTag.jsx
try { (() => {
const C = {
  lemon: 'var(--crayon-sun)',
  orange: 'var(--crayon-orange)',
  leaf: 'var(--crayon-leaf-soft)',
  rose: 'var(--crayon-rose)',
  plum: 'var(--crayon-plum)',
  sky: 'var(--crayon-sky-soft)'
};
function FlavorTag({
  children,
  tone = 'lemon',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 12px 5px 8px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--paper-white)',
      border: '1.5px solid var(--border-soft)',
      font: '700 12px/1 var(--font-label)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--crayon-leaf)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: C[tone] || tone
    }
  }), children);
}
Object.assign(__ds_scope, { FlavorTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FlavorTag.jsx", error: String((e && e.message) || e) }); }

// components/core/PaperCard.jsx
try { (() => {
function PaperCard({
  children,
  tilt = 0,
  padding = 20,
  image,
  imageHeight = 180,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper-white)',
      borderRadius: 4,
      boxShadow: 'var(--shadow-paper)',
      padding,
      transform: `rotate(${tilt}deg)`,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: imageHeight,
      objectFit: 'cover',
      borderRadius: 2,
      display: 'block'
    }
  }), children);
}
Object.assign(__ds_scope, { PaperCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PaperCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SearchPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchPill({
  value,
  onChange,
  placeholder = 'Где купить ARAX',
  size = 'md',
  style,
  ...rest
}) {
  const fs = size === 'lg' ? 34 : size === 'sm' ? 15 : 20;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--paper-white)',
      borderRadius: 'var(--radius-lg)',
      padding: `${fs * .55}px ${fs}px`,
      boxShadow: 'var(--shadow-paper)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: 'transparent',
      font: `700 ${fs}px/1.1 var(--font-hand)`,
      color: 'var(--crayon-orange)'
    }
  }, rest)), /*#__PURE__*/React.createElement("svg", {
    width: fs,
    height: fs,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--crayon-orange)",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "14",
    cy: "10",
    r: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 14.5 4 20"
  })));
}
Object.assign(__ds_scope, { SearchPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SearchPill.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram/EventPoster.jsx
try { (() => {
function EventPoster({
  title = 'ARAX',
  subtitle = 'BIRTHDAY',
  date = '01.08',
  time = '15:00',
  place = 'ТА САМАЯ ТЕННИСНАЯ ПЛОЩАДКА',
  photo = '../../assets/illustrations/kruzhok-girl-blue.jpg',
  scale = 1
}) {
  const {
    TornLabel
  } = window.AraxDesignSystem_84a2c8;
  const letters = ['var(--crayon-red)', 'var(--crayon-leaf)', 'var(--crayon-plum)', 'var(--crayon-orange)'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 540,
      height: 720,
      background: 'var(--crayon-sky)',
      position: 'relative',
      overflow: 'hidden',
      transform: `scale(${scale})`,
      transformOrigin: 'top left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 28,
      left: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(TornLabel, {
    variant: "label",
    size: 78,
    tilt: -1.5,
    style: {
      letterSpacing: '.02em',
      padding: '10px 26px'
    }
  }, title.split('').map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: letters[i % 4]
    }
  }, c))), /*#__PURE__*/React.createElement(TornLabel, {
    variant: "crayon",
    size: 40,
    tilt: 1
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 120,
      top: 210,
      width: 300,
      height: 380,
      background: 'var(--paper-white)',
      padding: 8,
      transform: 'rotate(2deg)',
      boxShadow: 'var(--shadow-lift)',
      clipPath: 'polygon(2% 1%,98% 0,100% 30%,99% 98%,60% 100%,1% 99%,0 40%)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      bottom: 28,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(TornLabel, {
    variant: "crayon",
    size: 46,
    tilt: -2
  }, date), /*#__PURE__*/React.createElement(TornLabel, {
    variant: "crayon",
    size: 46,
    tilt: 1
  }, time), /*#__PURE__*/React.createElement(TornLabel, {
    variant: "crayon",
    size: 18,
    pin: true,
    tilt: -0.5
  }, place)));
}
window.EventPoster = EventPoster;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram/EventPoster.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram/FeedGrid.jsx
try { (() => {
function ProfileHeader() {
  const {
    Logo,
    Button
  } = window.AraxDesignSystem_84a2c8;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center',
      padding: '28px 20px 20px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    src: "../../assets/logo.jpg",
    size: 96
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 20px var(--font-label)'
    }
  }, "arax.lemonade"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary"
  }, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.4 var(--font-body)',
      color: 'var(--ink-2)'
    }
  }, "\u041B\u0438\u043C\u043E\u043D\u0430\u0434\u044B \u0438\u0437 \u0415\u0440\u0435\u0432\u0430\u043D\u0430 \xB7 \u0413\u0434\u0435 \u043A\u0443\u043F\u0438\u0442\u044C \u2014 \u0432 \u0437\u0430\u043A\u0440\u0435\u043F\u0435")));
}
function FeedGrid({
  posts,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 3
    }
  }, posts.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => onOpen(p),
    style: {
      border: 0,
      padding: 0,
      aspectRatio: '3/4',
      position: 'relative',
      cursor: 'pointer',
      background: 'var(--crayon-sky)',
      overflow: 'hidden'
    }
  }, p.kind === 'live' ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 540,
      transform: 'scale(.4)',
      transformOrigin: 'top left'
    }
  }, /*#__PURE__*/React.createElement(window.EventPoster, null))) : /*#__PURE__*/React.createElement("img", {
    src: p.slides[0],
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), p.kind === 'carousel' && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 8,
      background: 'rgba(0,0,0,.55)',
      color: '#fff',
      font: '700 11px var(--font-label)',
      padding: '3px 7px',
      borderRadius: 99
    }
  }, "1/", p.slides.length))));
}
Object.assign(window, {
  ProfileHeader,
  FeedGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram/FeedGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram/PostViewer.jsx
try { (() => {
function PostViewer({
  post,
  onClose
}) {
  const [i, setI] = React.useState(0);
  const n = post.slides.length;
  const nav = d => setI(v => Math.max(0, Math.min(n - 1, v + d)));
  const arrow = (d, side) => /*#__PURE__*/React.createElement("button", {
    onClick: () => nav(d),
    style: {
      position: 'absolute',
      top: '50%',
      [side]: 10,
      transform: 'translateY(-50%)',
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: 0,
      background: 'var(--paper-white)',
      boxShadow: 'var(--shadow-paper)',
      font: '700 16px var(--font-label)',
      cursor: 'pointer'
    }
  }, d < 0 ? '‹' : '›');
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(27,26,24,.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--paper-white)',
      width: 'min(540px,100%)',
      borderRadius: 6,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lift)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '3/4',
      background: 'var(--crayon-sky)',
      overflow: 'hidden'
    }
  }, post.kind === 'live' ? /*#__PURE__*/React.createElement(window.EventPoster, null) : /*#__PURE__*/React.createElement("img", {
    src: post.slides[i],
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), n > 1 && i > 0 && arrow(-1, 'left'), n > 1 && i < n - 1 && arrow(1, 'right'), n > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: 5
    }
  }, post.slides.map((_, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: k === i ? '#fff' : 'rgba(255,255,255,.5)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      font: '700 14px var(--font-label)'
    }
  }, "arax.lemonade"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.4 var(--font-body)',
      color: 'var(--ink-2)'
    }
  }, post.caption))));
}
window.PostViewer = PostViewer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram/PostViewer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram/data.js
try { (() => {
window.ARAX_POSTS = [{
  id: 'wtb',
  kind: 'carousel',
  caption: 'Где купить ARAX — листайте, адреса внутри',
  slides: ['where-to-buy-pink', 'bottles-yellow', 'kruzhok-girl-blue', 'gargoyle-green', 'hummus-kimchi-storefront', 'fabula-storefront'].map(f => '../../assets/illustrations/' + f + '.jpg')
}, {
  id: 'bday',
  kind: 'image',
  caption: 'ARAX birthday · 01.08 · 15:00 · та самая теннисная площадка',
  slides: ['../../assets/collage/birthday-poster.jpg']
}, {
  id: 'bye',
  kind: 'image',
  caption: 'до встречи, араксоголики',
  slides: ['../../assets/collage/farewell-post.jpg']
}, {
  id: 'event',
  kind: 'live',
  caption: 'Шаблон: анонс события',
  slides: []
}, {
  id: 'g',
  kind: 'image',
  caption: 'Gargoyle — 73 Israyelyan St',
  slides: ['../../assets/illustrations/gargoyle-green.jpg']
}, {
  id: 'f',
  kind: 'image',
  caption: 'Fabula — 40 Sayat-Nova Ave',
  slides: ['../../assets/illustrations/fabula-storefront.jpg']
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram/data.js", error: String((e && e.message) || e) }); }

__ds_ns.AddressSticker = __ds_scope.AddressSticker;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.TornLabel = __ds_scope.TornLabel;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FlavorTag = __ds_scope.FlavorTag;

__ds_ns.PaperCard = __ds_scope.PaperCard;

__ds_ns.SearchPill = __ds_scope.SearchPill;

})();
