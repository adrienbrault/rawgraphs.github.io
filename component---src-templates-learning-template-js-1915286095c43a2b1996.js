(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+QRC":function(u,e,t){"use strict";var n=t("E9nw"),r={"text/plain":"Text","text/html":"Url",default:"Text"};u.exports=function(u,e){var t,D,a,o,F,i,c=!1;e||(e={}),t=e.debug||!1;try{if(a=n(),o=document.createRange(),F=document.getSelection(),(i=document.createElement("span")).textContent=u,i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",i.addEventListener("copy",(function(n){if(n.stopPropagation(),e.format)if(n.preventDefault(),void 0===n.clipboardData){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var D=r[e.format]||r.default;window.clipboardData.setData(D,u)}else n.clipboardData.clearData(),n.clipboardData.setData(e.format,u);e.onCopy&&(n.preventDefault(),e.onCopy(n.clipboardData))})),document.body.appendChild(i),o.selectNodeContents(i),F.addRange(o),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");c=!0}catch(l){t&&console.error("unable to copy using execCommand: ",l),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",u),e.onCopy&&e.onCopy(window.clipboardData),c=!0}catch(l){t&&console.error("unable to copy using clipboardData: ",l),t&&console.error("falling back to prompt"),D=function(u){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return u.replace(/#{\s*key\s*}/g,e)}("message"in e?e.message:"Copy to clipboard: #{key}, Enter"),window.prompt(D,u)}}finally{F&&("function"==typeof F.removeRange?F.removeRange(o):F.removeAllRanges()),i&&document.body.removeChild(i),a()}return c}},E9nw:function(u,e){u.exports=function(){var u=document.getSelection();if(!u.rangeCount)return function(){};for(var e=document.activeElement,t=[],n=0;n<u.rangeCount;n++)t.push(u.getRangeAt(n));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return u.removeAllRanges(),function(){"Caret"===u.type&&u.removeAllRanges(),u.rangeCount||t.forEach((function(e){u.addRange(e)})),e&&e.focus()}}},ELAM:function(u,e,t){"use strict";var n=t("q1tI"),r=t.n(n),D=t("q6Nr"),a=t.n(D);e.a=function(u){var e=u.question,t=u.button,n=u.link,D=u.bgLight,o=u.btGreen;return r.a.createElement("div",{className:"container-fluid text-center text-md-left py-3 py-md-0 "+a.a.askInfo+" "+(D?"bg-light":"")},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("h3",{className:"my-3 my-md-0"},e)),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"btn btn-default btn-larger "+(o?"btn-green":"")},t))))))}},MY2e:function(u,e,t){u.exports={learningNav:"learningTemplate-module--learning-nav--2OWws",navElement:"learningTemplate-module--nav-element--2HCF5",learningHeader:"learningTemplate-module--learning-header--1gCm9",videoThumbnail:"learningTemplate-module--video-thumbnail--3u_1H",learningContent:"learningTemplate-module--learning-content--CAzrY"}},P5Jw:function(u,e,t){"use strict";var n=t("rHrb").CopyToClipboard;n.CopyToClipboard=n,u.exports=n},Rcko:function(u,e,t){u.exports={copyPaste:"guideCitation-module--copy-paste--EnIMH",copied:"guideCitation-module--copied--3OqGO"}},UrAt:function(u,e){u.exports=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08BE-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D04\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1ABF-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31BB-\u31EF\u3200-\u33FF\u4DB6-\u4DFF\u9FF0-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7C7-\uA7F6\uA828-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB68-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD47-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD-\uDDCF\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC60-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD00-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD823-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D-\uD83F\uD87B-\uD87D\uD87F-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE4-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD822[\uDEF3-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g},ZVJz:function(u,e,t){var n=t("UrAt");u.exports=D;var r=Object.hasOwnProperty;function D(){if(!(this instanceof D))return new D;this.reset()}function a(u,e){return"string"!=typeof u?"":(e||(u=u.toLowerCase()),u.replace(n,"").replace(/ /g,"-"))}D.prototype.slug=function(u,e){for(var t=a(u,!0===e),n=t;r.call(this.occurrences,t);)this.occurrences[n]++,t=n+"-"+this.occurrences[n];return this.occurrences[t]=0,t},D.prototype.reset=function(){this.occurrences=Object.create(null)},D.slug=a},bz1N:function(u,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return de}));var n=t("q1tI"),r=t.n(n),D=t("Wbzz"),a=t("ZVJz"),o=t.n(a),F=t("ma3e"),i=t("aWbt"),c=t("EHkr"),l=t("QeUd"),s=t("WF3u"),C=function(u){var e=u.url;return r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{title:e,className:"embed-responsive-item",src:e,allowFullScreen:!0}))},E=t("dI71"),f=t("P5Jw"),A=new Date,m=new Date;function g(u,e,t,n){function r(e){return u(e=0===arguments.length?new Date:new Date(+e)),e}return r.floor=function(e){return u(e=new Date(+e)),e},r.ceil=function(t){return u(t=new Date(t-1)),e(t,1),u(t),t},r.round=function(u){var e=r(u),t=r.ceil(u);return u-e<t-u?e:t},r.offset=function(u,t){return e(u=new Date(+u),null==t?1:Math.floor(t)),u},r.range=function(t,n,D){var a,o=[];if(t=r.ceil(t),D=null==D?1:Math.floor(D),!(t<n&&D>0))return o;do{o.push(a=new Date(+t)),e(t,D),u(t)}while(a<t&&t<n);return o},r.filter=function(t){return g((function(e){if(e>=e)for(;u(e),!t(e);)e.setTime(e-1)}),(function(u,n){if(u>=u)if(n<0)for(;++n<=0;)for(;e(u,-1),!t(u););else for(;--n>=0;)for(;e(u,1),!t(u););}))},t&&(r.count=function(e,n){return A.setTime(+e),m.setTime(+n),u(A),u(m),Math.floor(t(A,m))},r.every=function(u){return u=Math.floor(u),isFinite(u)&&u>0?u>1?r.filter(n?function(e){return n(e)%u==0}:function(e){return r.count(0,e)%u==0}):r:null}),r}function p(u){return g((function(e){e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+7-u)%7),e.setUTCHours(0,0,0,0)}),(function(u,e){u.setUTCDate(u.getUTCDate()+7*e)}),(function(u,e){return(e-u)/6048e5}))}var d=p(0),B=p(1),h=p(2),y=p(3),v=p(4),b=p(5),w=p(6),T=(d.range,B.range,h.range,y.range,v.range,b.range,w.range,g((function(u){u.setUTCHours(0,0,0,0)}),(function(u,e){u.setUTCDate(u.getUTCDate()+e)}),(function(u,e){return(e-u)/864e5}),(function(u){return u.getUTCDate()-1}))),x=T;T.range;function U(u){return g((function(e){e.setDate(e.getDate()-(e.getDay()+7-u)%7),e.setHours(0,0,0,0)}),(function(u,e){u.setDate(u.getDate()+7*e)}),(function(u,e){return(e-u-6e4*(e.getTimezoneOffset()-u.getTimezoneOffset()))/6048e5}))}var M=U(0),N=U(1),O=U(2),k=U(3),S=U(4),Y=U(5),H=U(6),j=(M.range,N.range,O.range,k.range,S.range,Y.range,H.range,g((function(u){u.setHours(0,0,0,0)}),(function(u,e){u.setDate(u.getDate()+e)}),(function(u,e){return(e-u-6e4*(e.getTimezoneOffset()-u.getTimezoneOffset()))/864e5}),(function(u){return u.getDate()-1}))),L=j,P=(j.range,g((function(u){u.setMonth(0,1),u.setHours(0,0,0,0)}),(function(u,e){u.setFullYear(u.getFullYear()+e)}),(function(u,e){return e.getFullYear()-u.getFullYear()}),(function(u){return u.getFullYear()})));P.every=function(u){return isFinite(u=Math.floor(u))&&u>0?g((function(e){e.setFullYear(Math.floor(e.getFullYear()/u)*u),e.setMonth(0,1),e.setHours(0,0,0,0)}),(function(e,t){e.setFullYear(e.getFullYear()+t*u)})):null};var _=P,R=(P.range,g((function(u){u.setUTCMonth(0,1),u.setUTCHours(0,0,0,0)}),(function(u,e){u.setUTCFullYear(u.getUTCFullYear()+e)}),(function(u,e){return e.getUTCFullYear()-u.getUTCFullYear()}),(function(u){return u.getUTCFullYear()})));R.every=function(u){return isFinite(u=Math.floor(u))&&u>0?g((function(e){e.setUTCFullYear(Math.floor(e.getUTCFullYear()/u)*u),e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)}),(function(e,t){e.setUTCFullYear(e.getUTCFullYear()+t*u)})):null};var I=R;R.range;function W(u){if(0<=u.y&&u.y<100){var e=new Date(-1,u.m,u.d,u.H,u.M,u.S,u.L);return e.setFullYear(u.y),e}return new Date(u.y,u.m,u.d,u.H,u.M,u.S,u.L)}function q(u){if(0<=u.y&&u.y<100){var e=new Date(Date.UTC(-1,u.m,u.d,u.H,u.M,u.S,u.L));return e.setUTCFullYear(u.y),e}return new Date(Date.UTC(u.y,u.m,u.d,u.H,u.M,u.S,u.L))}function z(u,e,t){return{y:u,m:e,d:t,H:0,M:0,S:0,L:0}}var Z,J,V={"-":"",_:" ",0:"0"},Q=/^\s*\d+/,G=/^%/,X=/[\\^$*+?|[\]().{}]/g;function $(u,e,t){var n=u<0?"-":"",r=(n?-u:u)+"",D=r.length;return n+(D<t?new Array(t-D+1).join(e)+r:r)}function K(u){return u.replace(X,"\\$&")}function uu(u){return new RegExp("^(?:"+u.map(K).join("|")+")","i")}function eu(u){for(var e={},t=-1,n=u.length;++t<n;)e[u[t].toLowerCase()]=t;return e}function tu(u,e,t){var n=Q.exec(e.slice(t,t+1));return n?(u.w=+n[0],t+n[0].length):-1}function nu(u,e,t){var n=Q.exec(e.slice(t,t+1));return n?(u.u=+n[0],t+n[0].length):-1}function ru(u,e,t){var n=Q.exec(e.slice(t,t+2));return n?(u.U=+n[0],t+n[0].length):-1}function Du(u,e,t){var n=Q.exec(e.slice(t,t+2));return n?(u.V=+n[0],t+n[0].length):-1}function au(u,e,t){var n=Q.exec(e.slice(t,t+2));return n?(u.W=+n[0],t+n[0].length):-1}function ou(u,e,t){var n=Q.exec(e.slice(t,t+4));return n?(u.y=+n[0],t+n[0].length):-1}function Fu(u,e,t){var n=Q.exec(e.slice(t,t+2));return n?(u.y=+n[0]+(+n[0]>68?1900:2e3),t+n[0].length):-1}function iu(u,e,t){var n=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(t,t+6));return n?(u.Z=n[1]?0:-(n[2]+(n[3]||"00")),t+n[0].length):-1}function cu(u,e,t){var n=Q.exec(e.slice(t,t+1));return n?(u.q=3*n[0]-3,t+n[0].length):-1}function lu(u,e,t){var n=Q.exec(e.slice(t,t+2));return n?(u.m=n[0]-1,t+n[0].length):-1}function su(u,e,t){var n=Q.exec(e.slice(t,t+2));return n?(u.d=+n[0],t+n[0].length):-1}function Cu(u,e,t){var n=Q.exec(e.slice(t,t+3));return n?(u.m=0,u.d=+n[0],t+n[0].length):-1}function Eu(u,e,t){var n=Q.exec(e.slice(t,t+2));return n?(u.H=+n[0],t+n[0].length):-1}function fu(u,e,t){var n=Q.exec(e.slice(t,t+2));return n?(u.M=+n[0],t+n[0].length):-1}function Au(u,e,t){var n=Q.exec(e.slice(t,t+2));return n?(u.S=+n[0],t+n[0].length):-1}function mu(u,e,t){var n=Q.exec(e.slice(t,t+3));return n?(u.L=+n[0],t+n[0].length):-1}function gu(u,e,t){var n=Q.exec(e.slice(t,t+6));return n?(u.L=Math.floor(n[0]/1e3),t+n[0].length):-1}function pu(u,e,t){var n=G.exec(e.slice(t,t+1));return n?t+n[0].length:-1}function du(u,e,t){var n=Q.exec(e.slice(t));return n?(u.Q=+n[0],t+n[0].length):-1}function Bu(u,e,t){var n=Q.exec(e.slice(t));return n?(u.s=+n[0],t+n[0].length):-1}function hu(u,e){return $(u.getDate(),e,2)}function yu(u,e){return $(u.getHours(),e,2)}function vu(u,e){return $(u.getHours()%12||12,e,2)}function bu(u,e){return $(1+L.count(_(u),u),e,3)}function wu(u,e){return $(u.getMilliseconds(),e,3)}function Tu(u,e){return wu(u,e)+"000"}function xu(u,e){return $(u.getMonth()+1,e,2)}function Uu(u,e){return $(u.getMinutes(),e,2)}function Mu(u,e){return $(u.getSeconds(),e,2)}function Nu(u){var e=u.getDay();return 0===e?7:e}function Ou(u,e){return $(M.count(_(u)-1,u),e,2)}function ku(u){var e=u.getDay();return e>=4||0===e?S(u):S.ceil(u)}function Su(u,e){return u=ku(u),$(S.count(_(u),u)+(4===_(u).getDay()),e,2)}function Yu(u){return u.getDay()}function Hu(u,e){return $(N.count(_(u)-1,u),e,2)}function ju(u,e){return $(u.getFullYear()%100,e,2)}function Lu(u,e){return $((u=ku(u)).getFullYear()%100,e,2)}function Pu(u,e){return $(u.getFullYear()%1e4,e,4)}function _u(u,e){var t=u.getDay();return $((u=t>=4||0===t?S(u):S.ceil(u)).getFullYear()%1e4,e,4)}function Ru(u){var e=u.getTimezoneOffset();return(e>0?"-":(e*=-1,"+"))+$(e/60|0,"0",2)+$(e%60,"0",2)}function Iu(u,e){return $(u.getUTCDate(),e,2)}function Wu(u,e){return $(u.getUTCHours(),e,2)}function qu(u,e){return $(u.getUTCHours()%12||12,e,2)}function zu(u,e){return $(1+x.count(I(u),u),e,3)}function Zu(u,e){return $(u.getUTCMilliseconds(),e,3)}function Ju(u,e){return Zu(u,e)+"000"}function Vu(u,e){return $(u.getUTCMonth()+1,e,2)}function Qu(u,e){return $(u.getUTCMinutes(),e,2)}function Gu(u,e){return $(u.getUTCSeconds(),e,2)}function Xu(u){var e=u.getUTCDay();return 0===e?7:e}function $u(u,e){return $(d.count(I(u)-1,u),e,2)}function Ku(u){var e=u.getUTCDay();return e>=4||0===e?v(u):v.ceil(u)}function ue(u,e){return u=Ku(u),$(v.count(I(u),u)+(4===I(u).getUTCDay()),e,2)}function ee(u){return u.getUTCDay()}function te(u,e){return $(B.count(I(u)-1,u),e,2)}function ne(u,e){return $(u.getUTCFullYear()%100,e,2)}function re(u,e){return $((u=Ku(u)).getUTCFullYear()%100,e,2)}function De(u,e){return $(u.getUTCFullYear()%1e4,e,4)}function ae(u,e){var t=u.getUTCDay();return $((u=t>=4||0===t?v(u):v.ceil(u)).getUTCFullYear()%1e4,e,4)}function oe(){return"+0000"}function Fe(){return"%"}function ie(u){return+u}function ce(u){return Math.floor(+u/1e3)}Z=function(u){var e=u.dateTime,t=u.date,n=u.time,r=u.periods,D=u.days,a=u.shortDays,o=u.months,F=u.shortMonths,i=uu(r),c=eu(r),l=uu(D),s=eu(D),C=uu(a),E=eu(a),f=uu(o),A=eu(o),m=uu(F),g=eu(F),p={a:function(u){return a[u.getDay()]},A:function(u){return D[u.getDay()]},b:function(u){return F[u.getMonth()]},B:function(u){return o[u.getMonth()]},c:null,d:hu,e:hu,f:Tu,g:Lu,G:_u,H:yu,I:vu,j:bu,L:wu,m:xu,M:Uu,p:function(u){return r[+(u.getHours()>=12)]},q:function(u){return 1+~~(u.getMonth()/3)},Q:ie,s:ce,S:Mu,u:Nu,U:Ou,V:Su,w:Yu,W:Hu,x:null,X:null,y:ju,Y:Pu,Z:Ru,"%":Fe},d={a:function(u){return a[u.getUTCDay()]},A:function(u){return D[u.getUTCDay()]},b:function(u){return F[u.getUTCMonth()]},B:function(u){return o[u.getUTCMonth()]},c:null,d:Iu,e:Iu,f:Ju,g:re,G:ae,H:Wu,I:qu,j:zu,L:Zu,m:Vu,M:Qu,p:function(u){return r[+(u.getUTCHours()>=12)]},q:function(u){return 1+~~(u.getUTCMonth()/3)},Q:ie,s:ce,S:Gu,u:Xu,U:$u,V:ue,w:ee,W:te,x:null,X:null,y:ne,Y:De,Z:oe,"%":Fe},h={a:function(u,e,t){var n=C.exec(e.slice(t));return n?(u.w=E[n[0].toLowerCase()],t+n[0].length):-1},A:function(u,e,t){var n=l.exec(e.slice(t));return n?(u.w=s[n[0].toLowerCase()],t+n[0].length):-1},b:function(u,e,t){var n=m.exec(e.slice(t));return n?(u.m=g[n[0].toLowerCase()],t+n[0].length):-1},B:function(u,e,t){var n=f.exec(e.slice(t));return n?(u.m=A[n[0].toLowerCase()],t+n[0].length):-1},c:function(u,t,n){return b(u,e,t,n)},d:su,e:su,f:gu,g:Fu,G:ou,H:Eu,I:Eu,j:Cu,L:mu,m:lu,M:fu,p:function(u,e,t){var n=i.exec(e.slice(t));return n?(u.p=c[n[0].toLowerCase()],t+n[0].length):-1},q:cu,Q:du,s:Bu,S:Au,u:nu,U:ru,V:Du,w:tu,W:au,x:function(u,e,n){return b(u,t,e,n)},X:function(u,e,t){return b(u,n,e,t)},y:Fu,Y:ou,Z:iu,"%":pu};function y(u,e){return function(t){var n,r,D,a=[],o=-1,F=0,i=u.length;for(t instanceof Date||(t=new Date(+t));++o<i;)37===u.charCodeAt(o)&&(a.push(u.slice(F,o)),null!=(r=V[n=u.charAt(++o)])?n=u.charAt(++o):r="e"===n?" ":"0",(D=e[n])&&(n=D(t,r)),a.push(n),F=o+1);return a.push(u.slice(F,o)),a.join("")}}function v(u,e){return function(t){var n,r,D=z(1900,void 0,1);if(b(D,u,t+="",0)!=t.length)return null;if("Q"in D)return new Date(D.Q);if("s"in D)return new Date(1e3*D.s+("L"in D?D.L:0));if(e&&!("Z"in D)&&(D.Z=0),"p"in D&&(D.H=D.H%12+12*D.p),void 0===D.m&&(D.m="q"in D?D.q:0),"V"in D){if(D.V<1||D.V>53)return null;"w"in D||(D.w=1),"Z"in D?(r=(n=q(z(D.y,0,1))).getUTCDay(),n=r>4||0===r?B.ceil(n):B(n),n=x.offset(n,7*(D.V-1)),D.y=n.getUTCFullYear(),D.m=n.getUTCMonth(),D.d=n.getUTCDate()+(D.w+6)%7):(r=(n=W(z(D.y,0,1))).getDay(),n=r>4||0===r?N.ceil(n):N(n),n=L.offset(n,7*(D.V-1)),D.y=n.getFullYear(),D.m=n.getMonth(),D.d=n.getDate()+(D.w+6)%7)}else("W"in D||"U"in D)&&("w"in D||(D.w="u"in D?D.u%7:"W"in D?1:0),r="Z"in D?q(z(D.y,0,1)).getUTCDay():W(z(D.y,0,1)).getDay(),D.m=0,D.d="W"in D?(D.w+6)%7+7*D.W-(r+5)%7:D.w+7*D.U-(r+6)%7);return"Z"in D?(D.H+=D.Z/100|0,D.M+=D.Z%100,q(D)):W(D)}}function b(u,e,t,n){for(var r,D,a=0,o=e.length,F=t.length;a<o;){if(n>=F)return-1;if(37===(r=e.charCodeAt(a++))){if(r=e.charAt(a++),!(D=h[r in V?e.charAt(a++):r])||(n=D(u,t,n))<0)return-1}else if(r!=t.charCodeAt(n++))return-1}return n}return p.x=y(t,p),p.X=y(n,p),p.c=y(e,p),d.x=y(t,d),d.X=y(n,d),d.c=y(e,d),{format:function(u){var e=y(u+="",p);return e.toString=function(){return u},e},parse:function(u){var e=v(u+="",!1);return e.toString=function(){return u},e},utcFormat:function(u){var e=y(u+="",d);return e.toString=function(){return u},e},utcParse:function(u){var e=v(u+="",!0);return e.toString=function(){return u},e}}}({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),J=Z.format,Z.parse,Z.utcFormat,Z.utcParse;var le=t("Rcko"),se=t.n(le),Ce=function(u){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=u.call.apply(u,[this].concat(n))||this).state={copied:null},e}return Object(E.a)(e,u),e.prototype.render=function(){var u=this,e=this.props,t=e.title,n=e.url,D=this.state.copied,a='"'+t+'", by RAWGraphs Team. Licensed under CC BY-NC-SA 4.0.  Accessed: '+J("%B %d, %Y")(Date.now())+", from "+n;return r.a.createElement("div",null,r.a.createElement("p",{className:""+(D?se.a.copied:"")},a),r.a.createElement(f.CopyToClipboard,{text:a,onCopy:function(){return u.setState({copied:!0})}},r.a.createElement("p",{className:se.a.copyPaste},r.a.createElement(F.i,null),r.a.createElement("span",{className:"ml-2"},"Copy to clipboard"))))},e}(r.a.PureComponent),Ee=t("Bl7J"),fe=t("vrFN"),Ae=t("ELAM"),me=t("vXOk"),ge=t("MY2e"),pe=t.n(ge);function de(u){var e=u.data,t=u.location,n=e.markdownRemark,a=n.frontmatter,E=n.html,f=a.files,A=new o.a,m=n.headings.filter((function(u){return 3===u.depth})).map((function(u){return{title:u.value,href:"#"+A.slug(u.value)}})),g=[{href:"#article-start",title:"Intro"}].concat(m).concat([{href:"#how-to-cite-this-guide",title:"How to cite this guide"}]),p=a.categories.map((function(u){return{link:"learning"===u.toLowerCase()?"/learning":"/learning#"+u.toLowerCase(),label:u}})),d=a.widgets?a.widgets:[{title:"RAWgraphs is open",subtitle:"do you want to hack RAWGraphs or install it locally?",link:"https://github.com/densitydesign/raw/"},{title:"About RAWGraphs",subtitle:"Everything you need to know about the project.",link:"/about"}];return r.a.createElement(Ee.a,null,r.a.createElement(fe.a,{title:a.title}),r.a.createElement("div",{className:"container py-5"},r.a.createElement("div",{className:"row"},(g||f)&&r.a.createElement("div",{className:"col-md-3 d-none d-md-block"},r.a.createElement("div",{className:pe.a.learningNav},g&&r.a.createElement("div",null,r.a.createElement("h4",{className:"text-uppercase mt-0"},"steps"),g.map((function(u,e){return r.a.createElement("div",{className:pe.a.navElement,key:e},r.a.createElement("a",{href:""+u.href},u.title))}))),f&&r.a.createElement("div",null,r.a.createElement("h4",{className:"text-uppercase"},"resources"),r.a.createElement("div",null,f.map((function(u,e){return r.a.createElement("div",{className:pe.a.navElement,key:e},r.a.createElement("a",{href:""+u.href.publicURL,className:"d-flex align-items-center"},r.a.createElement(F.e,null),r.a.createElement("span",{className:"ml-1"},"Download the resources")))})))),r.a.createElement("div",null,r.a.createElement("h4",{className:"text-uppercase"},"share"),r.a.createElement("div",{className:"d-flex"},r.a.createElement(i.a,{url:t.href,className:"mr-2"},r.a.createElement(c.a,{size:32,round:!1})),r.a.createElement(l.a,{url:t.href,title:a.title,hashtags:["rawgraphs"]},r.a.createElement(s.a,{size:32,round:!1})))))),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:pe.a.learningHeader},r.a.createElement("h4",{className:"text-uppercase"},p.map((function(u,e){return r.a.createElement(r.a.Fragment,{key:e},r.a.createElement(D.Link,{to:u.link},u.label),p.length-1!==e&&r.a.createElement("span",{className:"mx-1"},">"))}))),r.a.createElement("h1",{id:"article-start"},a.title),(a.tags||a.time)&&r.a.createElement("p",{className:"d-flex align-items-center"},r.a.createElement(F.k,null),r.a.createElement("span",{className:"ml-2 mr-3"},a.reading_time," min."),r.a.createElement(F.n,null),a.tags&&a.tags.map((function(u,e){return r.a.createElement("span",{className:"mx-2",key:e},u)}))),a.discover_more_description&&r.a.createElement("h2",{className:"light"},a.discover_more_description),a.featured_video&&r.a.createElement("div",{className:pe.a.videoThumbnail},r.a.createElement(C,{url:a.featured_video})),!a.featured_video&&a.image&&r.a.createElement("img",{className:"img-fluid img-thumbnail",src:a.image.publicURL,alt:a.title})),r.a.createElement("div",{className:pe.a.learningContent},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:E}}),r.a.createElement("h3",{id:"how-to-cite-this-guide"},"How to cite this guide"),r.a.createElement(Ce,{title:a.title,url:t.href}))))),r.a.createElement(Ae.a,{question:"Have you bumped into any issue while using the app?",button:"ask on google group",link:"https://groups.google.com/forum/?hl=en#!forum/densitydesign-raw"}),r.a.createElement("div",{className:"container-fluid grey-bg"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},d.map((function(u,e){return r.a.createElement(me.a,Object.assign({key:e},u))}))))))}},q6Nr:function(u,e,t){u.exports={askInfo:"askInfo-module--ask-info--3UwTp"}},rHrb:function(u,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CopyToClipboard=void 0;var n=D(t("q1tI")),r=D(t("+QRC"));function D(u){return u&&u.__esModule?u:{default:u}}function a(u){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(u){return typeof u}:function(u){return u&&"function"==typeof Symbol&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u})(u)}function o(u,e){var t=Object.keys(u);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(u);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(u,e).enumerable}))),t.push.apply(t,n)}return t}function F(u,e){if(null==u)return{};var t,n,r=function(u,e){if(null==u)return{};var t,n,r={},D=Object.keys(u);for(n=0;n<D.length;n++)t=D[n],e.indexOf(t)>=0||(r[t]=u[t]);return r}(u,e);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(u);for(n=0;n<D.length;n++)t=D[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(u,t)&&(r[t]=u[t])}return r}function i(u,e){if(!(u instanceof e))throw new TypeError("Cannot call a class as a function")}function c(u,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(u,n.key,n)}}function l(u,e){return!e||"object"!==a(e)&&"function"!=typeof e?C(u):e}function s(u){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(u){return u.__proto__||Object.getPrototypeOf(u)})(u)}function C(u){if(void 0===u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}function E(u,e){return(E=Object.setPrototypeOf||function(u,e){return u.__proto__=e,u})(u,e)}function f(u,e,t){return e in u?Object.defineProperty(u,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):u[e]=t,u}var A=function(u){function e(){var u,t;i(this,e);for(var D=arguments.length,a=new Array(D),o=0;o<D;o++)a[o]=arguments[o];return f(C(t=l(this,(u=s(e)).call.apply(u,[this].concat(a)))),"onClick",(function(u){var e=t.props,D=e.text,a=e.onCopy,o=e.children,F=e.options,i=n.default.Children.only(o),c=(0,r.default)(D,F);a&&a(D,c),i&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(u)})),t}var t,D,a;return function(u,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");u.prototype=Object.create(e&&e.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),e&&E(u,e)}(e,u),t=e,(D=[{key:"render",value:function(){var u=this.props,e=(u.text,u.onCopy,u.options,u.children),t=F(u,["text","onCopy","options","children"]),r=n.default.Children.only(e);return n.default.cloneElement(r,function(u){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(t,!0).forEach((function(e){f(u,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(t)):o(t).forEach((function(e){Object.defineProperty(u,e,Object.getOwnPropertyDescriptor(t,e))}))}return u}({},t,{onClick:this.onClick}))}}])&&c(t.prototype,D),a&&c(t,a),e}(n.default.PureComponent);e.CopyToClipboard=A,f(A,"defaultProps",{onCopy:void 0,options:void 0})}}]);
//# sourceMappingURL=component---src-templates-learning-template-js-1915286095c43a2b1996.js.map