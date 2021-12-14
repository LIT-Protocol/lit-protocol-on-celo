// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"40ZqG":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "5896eddd25442745";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hsApU":[function(require,module,exports) {
const { PointG2  } = require('@noble/bls12-381');
const ethers = window.ethers;
const LitJsSdk = window.LitJsSdk;
const ERC721ABI = [
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'ownerOf',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'tokenURI',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }, 
];
const MirrorNFTABI = [
    {
        inputs: [
            {
                internalType: 'string',
                name: 'headerJson',
                type: 'string'
            },
            {
                internalType: 'string',
                name: 'payloadJson',
                type: 'string'
            },
            {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes'
            }, 
        ],
        name: 'claim',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }, 
];
const mNFT = new ethers.Contract('0xcc9C556FbF52e7F1ca8e0E3eB7311ea21d893512', MirrorNFTABI);
function log(str) {
    document.getElementById('log').innerHTML += `<p>${str}</p>`;
}
async function main() {
    if (!window.ethereum) {
        const btn = document.querySelector('button');
        btn.disabled = true;
        btn.innerHTML = 'Wallet not Detected';
        return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
    const litNodeClient = new LitJsSdk.LitNodeClient();
    await litNodeClient.connect();
    console.log(litNodeClient);
    window.lit = litNodeClient;
    async function useCelo() {
        const { chainId  } = await provider.getNetwork();
        if (chainId === 44787) return true;
        log('Not on Celo Alfajores, switching');
        const err = new Error('Not on Celo');
        err.code = 1;
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [
                    {
                        chainId: '0xaef3'
                    }
                ]
            });
            return true;
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: '0xaef3',
                            chainName: 'Celo Alfajores Testnet',
                            nativeCurrency: {
                                name: 'CELO',
                                symbol: 'CELO',
                                decimals: 18
                            },
                            blockExplorerUrls: [
                                'https://alfajores-blockscout.celo-testnet.org/', 
                            ],
                            rpcUrls: [
                                'https://alfajores-forno.celo-testnet.org'
                            ]
                        }, 
                    ]
                });
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [
                        {
                            chainId: '0xaef3'
                        }
                    ]
                });
                return true;
            } catch (addError) {
                throw err;
            }
            throw err;
        }
    }
    async function obtainJWT(address, tokenId) {
        if (address.length !== 42 || !address.startsWith('0x')) throw new Error('Invalid address');
        if (typeof tokenId !== 'number' && !isFinite(tokenId = parseInt(tokenId)) && tokenId.match(/0x[0-9a-fA-F]+/)[0] !== tokenId) throw new Error('Invalid tokenId');
        tokenId = typeof tokenId === 'number' ? '0x' + tokenId.toString(16) : tokenId;
        const callRequests = [
            {
                to: address,
                data: LitJsSdk.encodeCallData({
                    abi: ERC721ABI,
                    functionName: 'tokenURI',
                    functionParams: [
                        tokenId
                    ]
                })
            },
            {
                to: address,
                data: LitJsSdk.encodeCallData({
                    abi: ERC721ABI,
                    functionName: 'ownerOf',
                    functionParams: [
                        tokenId
                    ]
                })
            }, 
        ];
        const jwt = await litNodeClient.getSignedChainDataToken({
            callRequests,
            chain: 'ethereum'
        });
        const { verified , header , payload , signature  } = LitJsSdk.verifyJwt({
            jwt
        });
        if (!verified) throw Error('JWT invalid');
        return {
            header,
            payload,
            signature
        };
    }
    async function claimOnCelo(header, payload, signature) {
        await useCelo();
        const signatureB = Array.from(signature).map((e)=>('0' + e.toString(16)).slice(-2)
        ).join('');
        const signatureG2 = PointG2.fromSignature(signatureB);
        const signatureSlices = signatureG2.toHex().match(/.{1,96}/g);
        const pad = '00000000000000000000000000000000';
        const signatureParameter = '0x' + pad + signatureSlices[1] + pad + signatureSlices[0] + pad + signatureSlices[3] + pad + signatureSlices[2];
        log('Start claiming...');
        let acc;
        try {
            await provider.send('eth_requestAccounts', []);
            acc = provider.getSigner();
        } catch (err) {
            log('Wallet connection was rejected');
            throw new Error('Wallet connection was rejected');
        }
        try {
            const tx = await mNFT.connect(acc).claim(JSON.stringify(header), JSON.stringify(payload), signatureParameter);
            log(`Claim tx submit, tx hash: <a href="https://alfajores-blockscout.celo-testnet.org/tx/${tx.hash}" target="_blank" rel="noopener noreferrer">${tx.hash}</a>`);
            log('Claim successed');
        } catch (err1) {
            console.log(err1);
            log('Claim failed, not sure why');
            throw new Error('Claim failed, not sure why');
        }
    }
    document.addEventListener('lit-ready', function(e) {
        window.execute = async function() {
            const address = document.getElementById('address').value;
            const tokenId = document.getElementById('token').value;
            log(`Start mirroring NFT from Ethereum to Celo Alfajores, target token: ${address} - ${tokenId}`);
            let decoded;
            try {
                decoded = await obtainJWT(address, tokenId);
            } catch (err) {
                log('Cannot derive data from Lit Protocol, please check the token is a ERC721 and on Ethereum or try again later');
                return;
            }
            log('Successfully derive data from Lit Protocol');
            try {
                await claimOnCelo(decoded.header, decoded.payload, decoded.signature);
            } catch (err2) {
                if (err2.code === 1) log('Switch to Celo Alfajores failed');
            }
        };
    }, false);
}
window.addEventListener('load', main);

},{"@noble/bls12-381":"gcc2Z"}],"gcc2Z":[function(require,module,exports) {
"use strict";
/*! noble-bls12-381 - MIT License (c) Paul Miller (paulmillr.com) */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyBatch = exports.aggregateSignatures = exports.aggregatePublicKeys = exports.verify = exports.sign = exports.getPublicKey = exports.pairing = exports.PointG2 = exports.PointG1 = exports.utils = exports.CURVE = exports.Fp12 = exports.Fp2 = exports.Fr = exports.Fp = void 0;
const math_1 = require("./math");
Object.defineProperty(exports, "Fp", {
    enumerable: true,
    get: function() {
        return math_1.Fp;
    }
});
Object.defineProperty(exports, "Fr", {
    enumerable: true,
    get: function() {
        return math_1.Fr;
    }
});
Object.defineProperty(exports, "Fp2", {
    enumerable: true,
    get: function() {
        return math_1.Fp2;
    }
});
Object.defineProperty(exports, "Fp12", {
    enumerable: true,
    get: function() {
        return math_1.Fp12;
    }
});
Object.defineProperty(exports, "CURVE", {
    enumerable: true,
    get: function() {
        return math_1.CURVE;
    }
});
const POW_2_381 = 2n ** 381n;
const POW_2_382 = POW_2_381 * 2n;
const POW_2_383 = POW_2_382 * 2n;
const PUBLIC_KEY_LENGTH = 48;
const SHA256_DIGEST_SIZE = 32;
const htfDefaults = {
    DST: 'BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_',
    p: math_1.CURVE.P,
    m: 2,
    k: 128,
    expand: true
};
function isWithinCurveOrder(num) {
    return 0 < num && num < math_1.CURVE.r;
}
const crypto = (()=>{
    const webCrypto = typeof self === 'object' && 'crypto' in self ? self.crypto : undefined;
    const nodeRequire = typeof module !== 'undefined' && typeof require === 'function';
    return {
        node: nodeRequire && !webCrypto ? require('crypto') : undefined,
        web: webCrypto
    };
})();
exports.utils = {
    hashToField: hash_to_field,
    randomBytes: (bytesLength = 32)=>{
        if (crypto.web) return crypto.web.getRandomValues(new Uint8Array(bytesLength));
        else if (crypto.node) {
            const { randomBytes  } = crypto.node;
            return new Uint8Array(randomBytes(bytesLength).buffer);
        } else throw new Error("The environment doesn't have randomBytes function");
    },
    randomPrivateKey: ()=>{
        let i = 8;
        while(i--){
            const b32 = exports.utils.randomBytes(32);
            const num = bytesToNumberBE(b32);
            if (isWithinCurveOrder(num) && num !== 1n) return b32;
        }
        throw new Error('Valid private key was not found in 8 iterations. PRNG is broken');
    },
    sha256: async (message)=>{
        if (crypto.web) {
            const buffer = await crypto.web.subtle.digest('SHA-256', message.buffer);
            return new Uint8Array(buffer);
        } else if (crypto.node) return Uint8Array.from(crypto.node.createHash('sha256').update(message).digest());
        else throw new Error("The environment doesn't have sha256 function");
    },
    mod: math_1.mod,
    getDSTLabel () {
        return htfDefaults.DST;
    },
    setDSTLabel (newLabel) {
        if (typeof newLabel !== 'string' || newLabel.length > 2048 || newLabel.length === 0) throw new TypeError('Invalid DST');
        htfDefaults.DST = newLabel;
    }
};
function bytesToNumberBE(bytes) {
    let value = 0n;
    for(let i = bytes.length - 1, j = 0; i >= 0; i--, j++)value += (BigInt(bytes[i]) & 255n) << 8n * BigInt(j);
    return value;
}
function bytesToHex(uint8a) {
    let hex = '';
    for(let i = 0; i < uint8a.length; i++)hex += uint8a[i].toString(16).padStart(2, '0');
    return hex;
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new TypeError('hexToBytes: expected string, got ' + typeof hex);
    if (hex.length % 2) throw new Error('hexToBytes: received invalid unpadded hex');
    const array = new Uint8Array(hex.length / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        array[i] = Number.parseInt(hex.slice(j, j + 2), 16);
    }
    return array;
}
function toPaddedHex(num, padding) {
    if (num < 0n) throw new Error('Expected valid number');
    if (typeof padding !== 'number') throw new TypeError('Expected valid padding');
    return num.toString(16).padStart(padding * 2, '0');
}
function ensureBytes(hex) {
    if (hex instanceof Uint8Array) return hex;
    if (typeof hex === 'string') return hexToBytes(hex);
    throw new TypeError('Expected hex string or Uint8Array');
}
function concatBytes(...arrays) {
    if (arrays.length === 1) return arrays[0];
    const length = arrays.reduce((a, arr)=>a + arr.length
    , 0);
    const result = new Uint8Array(length);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
    }
    return result;
}
function stringToBytes(str) {
    const bytes = new Uint8Array(str.length);
    for(let i = 0; i < str.length; i++)bytes[i] = str.charCodeAt(i);
    return bytes;
}
function os2ip(bytes) {
    let result = 0n;
    for(let i = 0; i < bytes.length; i++){
        result <<= 8n;
        result += BigInt(bytes[i]);
    }
    return result;
}
function i2osp(value, length) {
    if (value < 0 || value >= 1 << 8 * length) throw new Error(`bad I2OSP call: value=${value} length=${length}`);
    const res = Array.from({
        length
    }).fill(0);
    for(let i = length - 1; i >= 0; i--){
        res[i] = value & 255;
        value >>>= 8;
    }
    return new Uint8Array(res);
}
function strxor(a, b) {
    const arr = new Uint8Array(a.length);
    for(let i = 0; i < a.length; i++)arr[i] = a[i] ^ b[i];
    return arr;
}
async function expand_message_xmd(msg, DST, lenInBytes) {
    const H = exports.utils.sha256;
    const b_in_bytes = SHA256_DIGEST_SIZE;
    const r_in_bytes = b_in_bytes * 2;
    const ell = Math.ceil(lenInBytes / b_in_bytes);
    if (ell > 255) throw new Error('Invalid xmd length');
    const DST_prime = concatBytes(DST, i2osp(DST.length, 1));
    const Z_pad = i2osp(0, r_in_bytes);
    const l_i_b_str = i2osp(lenInBytes, 2);
    const b = new Array(ell);
    const b_0 = await H(concatBytes(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
    b[0] = await H(concatBytes(b_0, i2osp(1, 1), DST_prime));
    for(let i = 1; i <= ell; i++){
        const args = [
            strxor(b_0, b[i - 1]),
            i2osp(i + 1, 1),
            DST_prime
        ];
        b[i] = await H(concatBytes(...args));
    }
    const pseudo_random_bytes = concatBytes(...b);
    return pseudo_random_bytes.slice(0, lenInBytes);
}
async function hash_to_field(msg, count, options = {
}) {
    const htfOptions = {
        ...htfDefaults,
        ...options
    };
    const log2p = htfOptions.p.toString(2).length;
    const L = Math.ceil((log2p + htfOptions.k) / 8);
    const len_in_bytes = count * htfOptions.m * L;
    const DST = stringToBytes(htfOptions.DST);
    let pseudo_random_bytes = msg;
    if (htfOptions.expand) pseudo_random_bytes = await expand_message_xmd(msg, DST, len_in_bytes);
    const u = new Array(count);
    for(let i = 0; i < count; i++){
        const e = new Array(htfOptions.m);
        for(let j = 0; j < htfOptions.m; j++){
            const elm_offset = L * (j + i * htfOptions.m);
            const tv = pseudo_random_bytes.slice(elm_offset, elm_offset + L);
            e[j] = (0, math_1.mod)(os2ip(tv), htfOptions.p);
        }
        u[i] = e;
    }
    return u;
}
function normalizePrivKey(key) {
    let int;
    if (key instanceof Uint8Array && key.length === 32) int = bytesToNumberBE(key);
    else if (typeof key === 'string' && key.length === 64) int = BigInt(`0x${key}`);
    else if (typeof key === 'number' && key > 0 && Number.isSafeInteger(key)) int = BigInt(key);
    else if (typeof key === 'bigint' && key > 0n) int = key;
    else throw new TypeError('Expected valid private key');
    int = (0, math_1.mod)(int, math_1.CURVE.r);
    if (!isWithinCurveOrder(int)) throw new Error('Private key must be 0 < key < CURVE.r');
    return int;
}
function assertType(item, type) {
    if (!(item instanceof type)) throw new Error('Expected Fp* argument, not number/bigint');
}
class PointG1 extends math_1.ProjectivePoint {
    constructor(x, y, z = math_1.Fp.ONE){
        super(x, y, z, math_1.Fp);
        assertType(x, math_1.Fp);
        assertType(y, math_1.Fp);
        assertType(z, math_1.Fp);
    }
    static fromHex(bytes2) {
        bytes2 = ensureBytes(bytes2);
        const { P  } = math_1.CURVE;
        let point;
        if (bytes2.length === 48) {
            const compressedValue = bytesToNumberBE(bytes2);
            const bflag = (0, math_1.mod)(compressedValue, POW_2_383) / POW_2_382;
            if (bflag === 1n) return this.ZERO;
            const x = new math_1.Fp((0, math_1.mod)(compressedValue, POW_2_381));
            const right = x.pow(3n).add(new math_1.Fp(math_1.CURVE.b));
            let y = right.sqrt();
            if (!y) throw new Error('Invalid compressed G1 point');
            const aflag = (0, math_1.mod)(compressedValue, POW_2_382) / POW_2_381;
            if (y.value * 2n / P !== aflag) y = y.negate();
            point = new PointG1(x, y);
        } else if (bytes2.length === 96) {
            if ((bytes2[0] & 64) !== 0) return PointG1.ZERO;
            const x = bytesToNumberBE(bytes2.slice(0, PUBLIC_KEY_LENGTH));
            const y = bytesToNumberBE(bytes2.slice(PUBLIC_KEY_LENGTH));
            point = new PointG1(new math_1.Fp(x), new math_1.Fp(y));
        } else throw new Error('Invalid point G1, expected 48/96 bytes');
        point.assertValidity();
        return point;
    }
    static fromPrivateKey(privateKey2) {
        return this.BASE.multiplyPrecomputed(normalizePrivKey(privateKey2));
    }
    toRawBytes(isCompressed = false) {
        return hexToBytes(this.toHex(isCompressed));
    }
    toHex(isCompressed1 = false) {
        this.assertValidity();
        const { P  } = math_1.CURVE;
        if (isCompressed1) {
            let hex;
            if (this.isZero()) hex = POW_2_383 + POW_2_382;
            else {
                const [x, y] = this.toAffine();
                const flag = y.value * 2n / P;
                hex = x.value + flag * POW_2_381 + POW_2_383;
            }
            return toPaddedHex(hex, PUBLIC_KEY_LENGTH);
        } else {
            if (this.isZero()) return '4'.padEnd(4 * PUBLIC_KEY_LENGTH, '0');
            else {
                const [x, y] = this.toAffine();
                return toPaddedHex(x.value, PUBLIC_KEY_LENGTH) + toPaddedHex(y.value, PUBLIC_KEY_LENGTH);
            }
        }
    }
    assertValidity() {
        if (this.isZero()) return this;
        if (!this.isOnCurve()) throw new Error('Invalid G1 point: not on curve Fp');
        if (!this.isTorsionFree()) throw new Error('Invalid G1 point: must be of prime-order subgroup');
        return this;
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.toString();
    }
    millerLoop(P1) {
        return (0, math_1.millerLoop)(P1.pairingPrecomputes(), this.toAffine());
    }
    clearCofactor() {
        return this.multiplyUnsafe(math_1.CURVE.h);
    }
    isOnCurve() {
        const b = new math_1.Fp(math_1.CURVE.b);
        const { x , y , z  } = this;
        const left = y.pow(2n).multiply(z).subtract(x.pow(3n));
        const right = b.multiply(z.pow(3n));
        return left.subtract(right).isZero();
    }
    sigma() {
        const BETA = 4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n;
        const [x, y] = this.toAffine();
        return new PointG1(x.multiply(BETA), y);
    }
    isTorsionFree() {
        const c1 = 76329603384216526021617858986798044501n;
        const P = this;
        const S = P.sigma();
        const Q = S.double();
        const S2 = S.sigma();
        const left = Q.subtract(P).subtract(S2).multiplyUnsafe(c1);
        const C = left.subtract(S2);
        return C.isZero();
    }
}
exports.PointG1 = PointG1;
PointG1.BASE = new PointG1(new math_1.Fp(math_1.CURVE.Gx), new math_1.Fp(math_1.CURVE.Gy), math_1.Fp.ONE);
PointG1.ZERO = new PointG1(math_1.Fp.ONE, math_1.Fp.ONE, math_1.Fp.ZERO);
class PointG2 extends math_1.ProjectivePoint {
    constructor(x1, y1, z1 = math_1.Fp2.ONE){
        super(x1, y1, z1, math_1.Fp2);
        assertType(x1, math_1.Fp2);
        assertType(y1, math_1.Fp2);
        assertType(z1, math_1.Fp2);
    }
    static async hashToCurve(msg) {
        msg = ensureBytes(msg);
        const u = await hash_to_field(msg, 2);
        const Q0 = new PointG2(...(0, math_1.isogenyMapG2)((0, math_1.map_to_curve_simple_swu_9mod16)(u[0])));
        const Q1 = new PointG2(...(0, math_1.isogenyMapG2)((0, math_1.map_to_curve_simple_swu_9mod16)(u[1])));
        const R = Q0.add(Q1);
        const P = R.clearCofactor();
        return P;
    }
    static fromSignature(hex1) {
        hex1 = ensureBytes(hex1);
        const { P  } = math_1.CURVE;
        const half = hex1.length / 2;
        if (half !== 48 && half !== 96) throw new Error('Invalid compressed signature length, must be 96 or 192');
        const z1 = bytesToNumberBE(hex1.slice(0, half));
        const z2 = bytesToNumberBE(hex1.slice(half));
        const bflag1 = (0, math_1.mod)(z1, POW_2_383) / POW_2_382;
        if (bflag1 === 1n) return this.ZERO;
        const x1 = z1 % POW_2_381;
        const x2 = z2;
        const x = new math_1.Fp2([
            x2,
            x1
        ]);
        const y2 = x.pow(3n).add(new math_1.Fp2(math_1.CURVE.b2));
        let y = y2.sqrt();
        if (!y) throw new Error('Failed to find a square root');
        const [y0, y1] = y.values;
        const aflag1 = z1 % POW_2_382 / POW_2_381;
        const isGreater = y1 > 0n && y1 * 2n / P !== aflag1;
        const isZero = y1 === 0n && y0 * 2n / P !== aflag1;
        if (isGreater || isZero) y = y.multiply(-1n);
        const point = new PointG2(x, y, math_1.Fp2.ONE);
        point.assertValidity();
        return point;
    }
    static fromHex(bytes1) {
        bytes1 = ensureBytes(bytes1);
        let point;
        if (bytes1.length === 96) throw new Error('Compressed format not supported yet.');
        else if (bytes1.length === 192) {
            if ((bytes1[0] & 64) !== 0) return PointG2.ZERO;
            const x1 = bytesToNumberBE(bytes1.slice(0, PUBLIC_KEY_LENGTH));
            const x0 = bytesToNumberBE(bytes1.slice(PUBLIC_KEY_LENGTH, 2 * PUBLIC_KEY_LENGTH));
            const y1 = bytesToNumberBE(bytes1.slice(2 * PUBLIC_KEY_LENGTH, 3 * PUBLIC_KEY_LENGTH));
            const y0 = bytesToNumberBE(bytes1.slice(3 * PUBLIC_KEY_LENGTH));
            point = new PointG2(new math_1.Fp2([
                x0,
                x1
            ]), new math_1.Fp2([
                y0,
                y1
            ]));
        } else throw new Error('Invalid uncompressed point G2, expected 192 bytes');
        point.assertValidity();
        return point;
    }
    static fromPrivateKey(privateKey1) {
        return this.BASE.multiplyPrecomputed(normalizePrivKey(privateKey1));
    }
    toSignature() {
        if (this.equals(PointG2.ZERO)) {
            const sum = POW_2_383 + POW_2_382;
            return toPaddedHex(sum, PUBLIC_KEY_LENGTH) + toPaddedHex(0n, PUBLIC_KEY_LENGTH);
        }
        const [[x0, x1], [y0, y1]] = this.toAffine().map((a)=>a.values
        );
        const tmp = y1 > 0n ? y1 * 2n : y0 * 2n;
        const aflag1 = tmp / math_1.CURVE.P;
        const z1 = x1 + aflag1 * POW_2_381 + POW_2_383;
        const z2 = x0;
        return toPaddedHex(z1, PUBLIC_KEY_LENGTH) + toPaddedHex(z2, PUBLIC_KEY_LENGTH);
    }
    toRawBytes(isCompressed2 = false) {
        return hexToBytes(this.toHex(isCompressed2));
    }
    toHex(isCompressed3 = false) {
        this.assertValidity();
        if (isCompressed3) throw new Error('Point compression has not yet been implemented');
        else {
            if (this.equals(PointG2.ZERO)) return '4'.padEnd(8 * PUBLIC_KEY_LENGTH, '0');
            const [[x0, x1], [y0, y1]] = this.toAffine().map((a)=>a.values
            );
            return toPaddedHex(x1, PUBLIC_KEY_LENGTH) + toPaddedHex(x0, PUBLIC_KEY_LENGTH) + toPaddedHex(y1, PUBLIC_KEY_LENGTH) + toPaddedHex(y0, PUBLIC_KEY_LENGTH);
        }
    }
    assertValidity() {
        if (this.isZero()) return this;
        if (!this.isOnCurve()) throw new Error('Invalid G2 point: not on curve Fp2');
        if (!this.isTorsionFree()) throw new Error('Invalid G2 point: must be of prime-order subgroup');
        return this;
    }
    psi() {
        return this.fromAffineTuple((0, math_1.psi)(...this.toAffine()));
    }
    psi2() {
        return this.fromAffineTuple((0, math_1.psi2)(...this.toAffine()));
    }
    mulNegX() {
        return this.multiplyUnsafe(math_1.CURVE.x).negate();
    }
    clearCofactor() {
        const P = this;
        let t1 = P.mulNegX();
        let t2 = P.psi();
        let t3 = P.double();
        t3 = t3.psi2();
        t3 = t3.subtract(t2);
        t2 = t1.add(t2);
        t2 = t2.mulNegX();
        t3 = t3.add(t2);
        t3 = t3.subtract(t1);
        const Q = t3.subtract(P);
        return Q;
    }
    isOnCurve() {
        const b = new math_1.Fp2(math_1.CURVE.b2);
        const { x , y , z  } = this;
        const left = y.pow(2n).multiply(z).subtract(x.pow(3n));
        const right = b.multiply(z.pow(3n));
        return left.subtract(right).isZero();
    }
    isTorsionFree() {
        const P = this;
        const psi2 = P.psi2();
        const psi3 = psi2.psi();
        const zPsi3 = psi3.mulNegX();
        return zPsi3.subtract(psi2).add(P).isZero();
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.toString();
    }
    clearPairingPrecomputes() {
        this._PPRECOMPUTES = undefined;
    }
    pairingPrecomputes() {
        if (this._PPRECOMPUTES) return this._PPRECOMPUTES;
        this._PPRECOMPUTES = (0, math_1.calcPairingPrecomputes)(...this.toAffine());
        return this._PPRECOMPUTES;
    }
}
exports.PointG2 = PointG2;
PointG2.BASE = new PointG2(new math_1.Fp2(math_1.CURVE.G2x), new math_1.Fp2(math_1.CURVE.G2y), math_1.Fp2.ONE);
PointG2.ZERO = new PointG2(math_1.Fp2.ONE, math_1.Fp2.ONE, math_1.Fp2.ZERO);
function pairing(P, Q, withFinalExponent = true) {
    if (P.isZero() || Q.isZero()) throw new Error('No pairings at point of Infinity');
    P.assertValidity();
    Q.assertValidity();
    const looped = P.millerLoop(Q);
    return withFinalExponent ? looped.finalExponentiate() : looped;
}
exports.pairing = pairing;
function normP1(point) {
    return point instanceof PointG1 ? point : PointG1.fromHex(point);
}
function normP2(point) {
    return point instanceof PointG2 ? point : PointG2.fromSignature(point);
}
async function normP2Hash(point) {
    return point instanceof PointG2 ? point : PointG2.hashToCurve(point);
}
function getPublicKey(privateKey) {
    const bytes = PointG1.fromPrivateKey(privateKey).toRawBytes(true);
    return typeof privateKey === 'string' ? bytesToHex(bytes) : bytes;
}
exports.getPublicKey = getPublicKey;
async function sign(message, privateKey) {
    const msgPoint = await normP2Hash(message);
    msgPoint.assertValidity();
    const sigPoint = msgPoint.multiply(normalizePrivKey(privateKey));
    if (message instanceof PointG2) return sigPoint;
    const hex = sigPoint.toSignature();
    return typeof message === 'string' ? hex : hexToBytes(hex);
}
exports.sign = sign;
async function verify(signature, message, publicKey) {
    const P = normP1(publicKey);
    const Hm = await normP2Hash(message);
    const G = PointG1.BASE;
    const S = normP2(signature);
    const ePHm = pairing(P.negate(), Hm, false);
    const eGS = pairing(G, S, false);
    const exp = eGS.multiply(ePHm).finalExponentiate();
    return exp.equals(math_1.Fp12.ONE);
}
exports.verify = verify;
function aggregatePublicKeys(publicKeys) {
    if (!publicKeys.length) throw new Error('Expected non-empty array');
    const agg = publicKeys.map(normP1).reduce((sum, p)=>sum.add(p)
    , PointG1.ZERO);
    if (publicKeys[0] instanceof PointG1) return agg.assertValidity();
    const bytes = agg.toRawBytes(true);
    if (publicKeys[0] instanceof Uint8Array) return bytes;
    return bytesToHex(bytes);
}
exports.aggregatePublicKeys = aggregatePublicKeys;
function aggregateSignatures(signatures) {
    if (!signatures.length) throw new Error('Expected non-empty array');
    const agg = signatures.map(normP2).reduce((sum, s)=>sum.add(s)
    , PointG2.ZERO);
    if (signatures[0] instanceof PointG2) return agg.assertValidity();
    const bytes = agg.toSignature();
    if (signatures[0] instanceof Uint8Array) return hexToBytes(bytes);
    return bytes;
}
exports.aggregateSignatures = aggregateSignatures;
async function verifyBatch(signature, messages, publicKeys) {
    if (!messages.length) throw new Error('Expected non-empty messages array');
    if (publicKeys.length !== messages.length) throw new Error('Pubkey count should equal msg count');
    const sig = normP2(signature);
    const nMessages = await Promise.all(messages.map(normP2Hash));
    const nPublicKeys = publicKeys.map(normP1);
    try {
        const paired = [];
        for (const message of new Set(nMessages)){
            const groupPublicKey1 = nMessages.reduce((groupPublicKey, subMessage, i)=>subMessage === message ? groupPublicKey.add(nPublicKeys[i]) : groupPublicKey
            , PointG1.ZERO);
            paired.push(pairing(groupPublicKey1, message, false));
        }
        paired.push(pairing(PointG1.BASE.negate(), sig, false));
        const product = paired.reduce((a, b)=>a.multiply(b)
        , math_1.Fp12.ONE);
        const exp = product.finalExponentiate();
        return exp.equals(math_1.Fp12.ONE);
    } catch  {
        return false;
    }
}
exports.verifyBatch = verifyBatch;
PointG1.BASE.calcMultiplyPrecomputes(4);

},{"./math":"4d6ku","crypto":"joWnX"}],"4d6ku":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.psi2 = exports.psi = exports.millerLoop = exports.calcPairingPrecomputes = exports.isogenyMapG2 = exports.map_to_curve_simple_swu_9mod16 = exports.ProjectivePoint = exports.Fp12 = exports.Fp6 = exports.Fp2 = exports.Fr = exports.Fp = exports.powMod = exports.mod = exports.CURVE = void 0;
exports.CURVE = {
    P: 4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559787n,
    r: 52435875175126190479447740508185965837690552500527637822603658699938581184513n,
    h: 76329603384216526031706109802092473003n,
    Gx: 3685416753713387016781088315183077757961620795782546409894578378688607592378376318836054947676345821548104185464507n,
    Gy: 1339506544944476473020471379941921221584933875938349620426543736416511423956333506472724655353366534992391756441569n,
    b: 4n,
    P2: 4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559787n ** 2n - 1n,
    h2: 305502333931268344200999753193121504214466019254188142667664032982267604182971884026507427359259977847832272839041616661285803823378372096355777062779109n,
    G2x: [
        352701069587466618187139116011060144890029952792775240219908644239793785735715026873347600343865175952761926303160n,
        3059144344244213709971259814753781636986470325476647558659373206291635324768958432433509563104347017837885763365758n, 
    ],
    G2y: [
        1985150602287291935568054521177171638300868978215655730859378665066344726373823718423869104263333984641494340347905n,
        927553665492332455747201965776037880757740193453592970025027978793976877002675564980949289727957565575433344219582n, 
    ],
    b2: [
        4n,
        4n
    ],
    x: 15132376222941642752n,
    h2Eff: 209869847837335686905080341498658477663839067235703451875306851526599783796572738804459333109033834234622528588876978987822447936461846631641690358257586228683615991308971558879306463436166481n
};
const BLS_X_LEN = bitLen(exports.CURVE.x);
function mod(a, b) {
    const res = a % b;
    return res >= 0n ? res : b + res;
}
exports.mod = mod;
function powMod(a, power, modulo) {
    let res = 1n;
    while(power > 0n){
        if (power & 1n) res = res * a % modulo;
        a = a * a % modulo;
        power >>= 1n;
    }
    return res;
}
exports.powMod = powMod;
function genInvertBatch(cls, nums) {
    const len = nums.length;
    const scratch = new Array(len);
    let acc = cls.ONE;
    for(let i = 0; i < len; i++){
        if (nums[i].isZero()) continue;
        scratch[i] = acc;
        acc = acc.multiply(nums[i]);
    }
    acc = acc.invert();
    for(let i1 = len - 1; i1 >= 0; i1--){
        if (nums[i1].isZero()) continue;
        let tmp = acc.multiply(nums[i1]);
        nums[i1] = acc.multiply(scratch[i1]);
        acc = tmp;
    }
    return nums;
}
function bitLen(n) {
    let len;
    for(len = 0; n > 0n; n >>= 1n, len += 1);
    return len;
}
function bitGet(n, pos) {
    return n >> BigInt(pos) & 1n;
}
function invert(number, modulo = exports.CURVE.P) {
    if (number === 0n || modulo <= 0n) throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
    let a = mod(number, modulo);
    let b = modulo;
    let [x, y, u, v] = [
        0n,
        1n,
        1n,
        0n
    ];
    while(a !== 0n){
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        [b, a] = [
            a,
            r
        ];
        [x, y] = [
            u,
            v
        ];
        [u, v] = [
            m,
            n
        ];
    }
    const gcd = b;
    if (gcd !== 1n) throw new Error('invert: does not exist');
    return mod(x, modulo);
}
class Fp {
    constructor(value){
        this.value = mod(value, Fp.ORDER);
    }
    isZero() {
        return this.value === 0n;
    }
    equals(rhs) {
        return this.value === rhs.value;
    }
    negate() {
        return new Fp(-this.value);
    }
    invert() {
        return new Fp(invert(this.value, Fp.ORDER));
    }
    add(rhs1) {
        return new Fp(this.value + rhs1.value);
    }
    square() {
        return new Fp(this.value * this.value);
    }
    pow(n) {
        return new Fp(powMod(this.value, n, Fp.ORDER));
    }
    sqrt() {
        const root = this.pow((Fp.ORDER + 1n) / 4n);
        if (!root.square().equals(this)) return;
        return root;
    }
    subtract(rhs2) {
        return new Fp(this.value - rhs2.value);
    }
    multiply(rhs3) {
        if (rhs3 instanceof Fp) rhs3 = rhs3.value;
        return new Fp(this.value * rhs3);
    }
    div(rhs4) {
        if (typeof rhs4 === 'bigint') rhs4 = new Fp(rhs4);
        return this.multiply(rhs4.invert());
    }
    toString() {
        const str = this.value.toString(16).padStart(96, '0');
        return str.slice(0, 2) + '.' + str.slice(-2);
    }
}
exports.Fp = Fp;
Fp.ORDER = exports.CURVE.P;
Fp.MAX_BITS = bitLen(exports.CURVE.P);
Fp.ZERO = new Fp(0n);
Fp.ONE = new Fp(1n);
class Fr {
    constructor(value1){
        this.value = mod(value1, Fr.ORDER);
    }
    static isValid(b) {
        return b <= Fr.ORDER;
    }
    isZero() {
        return this.value === 0n;
    }
    equals(rhs5) {
        return this.value === rhs5.value;
    }
    negate() {
        return new Fr(-this.value);
    }
    invert() {
        return new Fr(invert(this.value, Fr.ORDER));
    }
    add(rhs6) {
        return new Fr(this.value + rhs6.value);
    }
    square() {
        return new Fr(this.value * this.value);
    }
    pow(n1) {
        return new Fr(powMod(this.value, n1, Fr.ORDER));
    }
    subtract(rhs7) {
        return new Fr(this.value - rhs7.value);
    }
    multiply(rhs8) {
        if (rhs8 instanceof Fr) rhs8 = rhs8.value;
        return new Fr(this.value * rhs8);
    }
    div(rhs9) {
        if (typeof rhs9 === 'bigint') rhs9 = new Fr(rhs9);
        return this.multiply(rhs9.invert());
    }
    legendre() {
        return this.pow((Fr.ORDER - 1n) / 2n);
    }
    sqrt() {
        if (!this.legendre().equals(Fr.ONE)) return;
        const P = Fr.ORDER;
        let q, s, z;
        for(q = P - 1n, s = 0; q % 2n === 0n; q /= 2n, s++);
        if (s === 1) return this.pow((P + 1n) / 4n);
        for(z = 2n; z < P && new Fr(z).legendre().value !== P - 1n; z++);
        let c = powMod(z, q, P);
        let r = powMod(this.value, (q + 1n) / 2n, P);
        let t = powMod(this.value, q, P);
        let t2 = 0n;
        while(mod(t - 1n, P) !== 0n){
            t2 = mod(t * t, P);
            let i;
            for(i = 1; i < s; i++){
                if (mod(t2 - 1n, P) === 0n) break;
                t2 = mod(t2 * t2, P);
            }
            let b = powMod(c, BigInt(1 << s - i - 1), P);
            r = mod(r * b, P);
            c = mod(b * b, P);
            t = mod(t * c, P);
            s = i;
        }
        return new Fr(r);
    }
    toString() {
        return '0x' + this.value.toString(16).padStart(64, '0');
    }
}
exports.Fr = Fr;
Fr.ORDER = exports.CURVE.r;
Fr.ZERO = new Fr(0n);
Fr.ONE = new Fr(1n);
class FQP {
    zip(rhs10, mapper) {
        const c0 = this.c;
        const c1 = rhs10.c;
        const res = [];
        for(let i = 0; i < c0.length; i++)res.push(mapper(c0[i], c1[i]));
        return res;
    }
    map(callbackfn) {
        return this.c.map(callbackfn);
    }
    isZero() {
        return this.c.every((c)=>c.isZero()
        );
    }
    equals(rhs11) {
        return this.zip(rhs11, (left, right)=>left.equals(right)
        ).every((r)=>r
        );
    }
    negate() {
        return this.init(this.map((c)=>c.negate()
        ));
    }
    add(rhs12) {
        return this.init(this.zip(rhs12, (left, right)=>left.add(right)
        ));
    }
    subtract(rhs13) {
        return this.init(this.zip(rhs13, (left, right)=>left.subtract(right)
        ));
    }
    conjugate() {
        return this.init([
            this.c[0],
            this.c[1].negate()
        ]);
    }
    one() {
        const el = this;
        let one;
        if (el instanceof Fp2) one = Fp2.ONE;
        if (el instanceof Fp6) one = Fp6.ONE;
        if (el instanceof Fp12) one = Fp12.ONE;
        return one;
    }
    pow(n2) {
        const elm = this;
        const one = this.one();
        if (n2 === 0n) return one;
        if (n2 === 1n) return elm;
        let p = one;
        let d = elm;
        while(n2 > 0n){
            if (n2 & 1n) p = p.multiply(d);
            n2 >>= 1n;
            d = d.square();
        }
        return p;
    }
    div(rhs14) {
        const inv = typeof rhs14 === 'bigint' ? new Fp(rhs14).invert().value : rhs14.invert();
        return this.multiply(inv);
    }
}
class Fp2 extends FQP {
    constructor(coeffs){
        super();
        if (coeffs.length !== 2) throw new Error(`Expected array with 2 elements`);
        coeffs.forEach((c, i)=>{
            if (typeof c === 'bigint') coeffs[i] = new Fp(c);
        });
        this.c = coeffs;
    }
    init(tuple) {
        return new Fp2(tuple);
    }
    toString() {
        return `Fp2(${this.c[0]} + ${this.c[1]}×i)`;
    }
    get values() {
        return this.c.map((c)=>c.value
        );
    }
    multiply(rhs15) {
        if (typeof rhs15 === 'bigint') return new Fp2(this.map((c)=>c.multiply(rhs15)
        ));
        const [c0, c1] = this.c;
        const [r0, r1] = rhs15.c;
        let t1 = c0.multiply(r0);
        let t2 = c1.multiply(r1);
        return new Fp2([
            t1.subtract(t2),
            c0.add(c1).multiply(r0.add(r1)).subtract(t1.add(t2))
        ]);
    }
    mulByNonresidue() {
        const c0 = this.c[0];
        const c1 = this.c[1];
        return new Fp2([
            c0.subtract(c1),
            c0.add(c1)
        ]);
    }
    square() {
        const c0 = this.c[0];
        const c1 = this.c[1];
        const a = c0.add(c1);
        const b = c0.subtract(c1);
        const c = c0.add(c0);
        return new Fp2([
            a.multiply(b),
            c.multiply(c1)
        ]);
    }
    sqrt() {
        const candidateSqrt = this.pow((Fp2.ORDER + 8n) / 16n);
        const check = candidateSqrt.square().div(this);
        const R = FP2_ROOTS_OF_UNITY;
        const divisor = [
            R[0],
            R[2],
            R[4],
            R[6]
        ].find((r)=>r.equals(check)
        );
        if (!divisor) return;
        const index = R.indexOf(divisor);
        const root = R[index / 2];
        if (!root) throw new Error('Invalid root');
        const x1 = candidateSqrt.div(root);
        const x2 = x1.negate();
        const [re1, im1] = x1.values;
        const [re2, im2] = x2.values;
        if (im1 > im2 || im1 === im2 && re1 > re2) return x1;
        return x2;
    }
    invert() {
        const [a, b] = this.values;
        const factor = new Fp(a * a + b * b).invert();
        return new Fp2([
            factor.multiply(new Fp(a)),
            factor.multiply(new Fp(-b))
        ]);
    }
    frobeniusMap(power) {
        return new Fp2([
            this.c[0],
            this.c[1].multiply(FP2_FROBENIUS_COEFFICIENTS[power % 2])
        ]);
    }
    multiplyByB() {
        let [c0, c1] = this.c;
        let t0 = c0.multiply(4n);
        let t1 = c1.multiply(4n);
        return new Fp2([
            t0.subtract(t1),
            t0.add(t1)
        ]);
    }
}
exports.Fp2 = Fp2;
Fp2.ORDER = exports.CURVE.P2;
Fp2.MAX_BITS = bitLen(exports.CURVE.P2);
Fp2.ZERO = new Fp2([
    0n,
    0n
]);
Fp2.ONE = new Fp2([
    1n,
    0n
]);
class Fp6 extends FQP {
    constructor(c1){
        super();
        this.c = c1;
        if (c1.length !== 3) throw new Error(`Expected array with 3 elements`);
    }
    static fromTuple(t2) {
        if (!Array.isArray(t2) || t2.length !== 6) throw new Error('Invalid Fp6 usage');
        return new Fp6([
            new Fp2(t2.slice(0, 2)),
            new Fp2(t2.slice(2, 4)),
            new Fp2(t2.slice(4, 6))
        ]);
    }
    init(triple) {
        return new Fp6(triple);
    }
    toString() {
        return `Fp6(${this.c[0]} + ${this.c[1]} * v, ${this.c[2]} * v^2)`;
    }
    conjugate() {
        throw new TypeError('No conjugate on Fp6');
    }
    multiply(rhs16) {
        if (typeof rhs16 === 'bigint') return new Fp6([
            this.c[0].multiply(rhs16),
            this.c[1].multiply(rhs16),
            this.c[2].multiply(rhs16)
        ]);
        let [c0, c1, c2] = this.c;
        const [r0, r1, r2] = rhs16.c;
        let t0 = c0.multiply(r0);
        let t1 = c1.multiply(r1);
        let t2 = c2.multiply(r2);
        return new Fp6([
            t0.add(c1.add(c2).multiply(r1.add(r2)).subtract(t1.add(t2)).mulByNonresidue()),
            c0.add(c1).multiply(r0.add(r1)).subtract(t0.add(t1)).add(t2.mulByNonresidue()),
            t1.add(c0.add(c2).multiply(r0.add(r2)).subtract(t0.add(t2))), 
        ]);
    }
    mulByNonresidue() {
        return new Fp6([
            this.c[2].mulByNonresidue(),
            this.c[0],
            this.c[1]
        ]);
    }
    multiplyBy1(b1) {
        return new Fp6([
            this.c[2].multiply(b1).mulByNonresidue(),
            this.c[0].multiply(b1),
            this.c[1].multiply(b1), 
        ]);
    }
    multiplyBy01(b0, b11) {
        let [c0, c1, c2] = this.c;
        let t0 = c0.multiply(b0);
        let t1 = c1.multiply(b11);
        return new Fp6([
            c1.add(c2).multiply(b11).subtract(t1).mulByNonresidue().add(t0),
            b0.add(b11).multiply(c0.add(c1)).subtract(t0).subtract(t1),
            c0.add(c2).multiply(b0).subtract(t0).add(t1), 
        ]);
    }
    multiplyByFp2(rhs17) {
        return new Fp6(this.map((c)=>c.multiply(rhs17)
        ));
    }
    square() {
        let [c0, c1, c2] = this.c;
        let t0 = c0.square();
        let t1 = c0.multiply(c1).multiply(2n);
        let t3 = c1.multiply(c2).multiply(2n);
        let t4 = c2.square();
        return new Fp6([
            t3.mulByNonresidue().add(t0),
            t4.mulByNonresidue().add(t1),
            t1.add(c0.subtract(c1).add(c2).square()).add(t3).subtract(t0).subtract(t4), 
        ]);
    }
    invert() {
        let [c0, c1, c2] = this.c;
        let t0 = c0.square().subtract(c2.multiply(c1).mulByNonresidue());
        let t1 = c2.square().mulByNonresidue().subtract(c0.multiply(c1));
        let t2 = c1.square().subtract(c0.multiply(c2));
        let t4 = c2.multiply(t1).add(c1.multiply(t2)).mulByNonresidue().add(c0.multiply(t0)).invert();
        return new Fp6([
            t4.multiply(t0),
            t4.multiply(t1),
            t4.multiply(t2)
        ]);
    }
    frobeniusMap(power1) {
        return new Fp6([
            this.c[0].frobeniusMap(power1),
            this.c[1].frobeniusMap(power1).multiply(FP6_FROBENIUS_COEFFICIENTS_1[power1 % 6]),
            this.c[2].frobeniusMap(power1).multiply(FP6_FROBENIUS_COEFFICIENTS_2[power1 % 6]), 
        ]);
    }
}
exports.Fp6 = Fp6;
Fp6.ZERO = new Fp6([
    Fp2.ZERO,
    Fp2.ZERO,
    Fp2.ZERO
]);
Fp6.ONE = new Fp6([
    Fp2.ONE,
    Fp2.ZERO,
    Fp2.ZERO
]);
class Fp12 extends FQP {
    constructor(c3){
        super();
        this.c = c3;
        if (c3.length !== 2) throw new Error(`Expected array with 2 elements`);
    }
    static fromTuple(t1) {
        return new Fp12([
            Fp6.fromTuple(t1.slice(0, 6)),
            Fp6.fromTuple(t1.slice(6, 12)), 
        ]);
    }
    init(c2) {
        return new Fp12(c2);
    }
    toString() {
        return `Fp12(${this.c[0]} + ${this.c[1]} * w)`;
    }
    multiply(rhs18) {
        if (typeof rhs18 === 'bigint') return new Fp12([
            this.c[0].multiply(rhs18),
            this.c[1].multiply(rhs18)
        ]);
        let [c0, c1] = this.c;
        const [r0, r1] = rhs18.c;
        let t1 = c0.multiply(r0);
        let t2 = c1.multiply(r1);
        return new Fp12([
            t1.add(t2.mulByNonresidue()),
            c0.add(c1).multiply(r0.add(r1)).subtract(t1.add(t2)), 
        ]);
    }
    multiplyBy014(o0, o1, o4) {
        let [c0, c1] = this.c;
        let [t0, t1] = [
            c0.multiplyBy01(o0, o1),
            c1.multiplyBy1(o4)
        ];
        return new Fp12([
            t1.mulByNonresidue().add(t0),
            c1.add(c0).multiplyBy01(o0, o1.add(o4)).subtract(t0).subtract(t1), 
        ]);
    }
    multiplyByFp2(rhs19) {
        return this.init(this.map((c)=>c.multiplyByFp2(rhs19)
        ));
    }
    square() {
        let [c0, c1] = this.c;
        let ab = c0.multiply(c1);
        return new Fp12([
            c1.mulByNonresidue().add(c0).multiply(c0.add(c1)).subtract(ab).subtract(ab.mulByNonresidue()),
            ab.add(ab), 
        ]);
    }
    invert() {
        let [c0, c1] = this.c;
        let t = c0.square().subtract(c1.square().mulByNonresidue()).invert();
        return new Fp12([
            c0.multiply(t),
            c1.multiply(t).negate()
        ]);
    }
    frobeniusMap(power2) {
        const [c0, c1] = this.c;
        let r0 = c0.frobeniusMap(power2);
        let [c1_0, c1_1, c1_2] = c1.frobeniusMap(power2).c;
        const coeff = FP12_FROBENIUS_COEFFICIENTS[power2 % 12];
        return new Fp12([
            r0,
            new Fp6([
                c1_0.multiply(coeff),
                c1_1.multiply(coeff),
                c1_2.multiply(coeff)
            ]), 
        ]);
    }
    Fp4Square(a, b2) {
        const a2 = a.square(), b21 = b2.square();
        return [
            b21.mulByNonresidue().add(a2),
            a.add(b2).square().subtract(a2).subtract(b21), 
        ];
    }
    cyclotomicSquare() {
        const [c0, c1] = this.c;
        const [c0c0, c0c1, c0c2] = c0.c;
        const [c1c0, c1c1, c1c2] = c1.c;
        let [t3, t4] = this.Fp4Square(c0c0, c1c1);
        let [t5, t6] = this.Fp4Square(c1c0, c0c2);
        let [t7, t8] = this.Fp4Square(c0c1, c1c2);
        let t9 = t8.mulByNonresidue();
        return new Fp12([
            new Fp6([
                t3.subtract(c0c0).multiply(2n).add(t3),
                t5.subtract(c0c1).multiply(2n).add(t5),
                t7.subtract(c0c2).multiply(2n).add(t7), 
            ]),
            new Fp6([
                t9.add(c1c0).multiply(2n).add(t9),
                t4.add(c1c1).multiply(2n).add(t4),
                t6.add(c1c2).multiply(2n).add(t6), 
            ]), 
        ]);
    }
    cyclotomicExp(n3) {
        let z = Fp12.ONE;
        for(let i = BLS_X_LEN - 1; i >= 0; i--){
            z = z.cyclotomicSquare();
            if (bitGet(n3, i)) z = z.multiply(this);
        }
        return z;
    }
    finalExponentiate() {
        const { x  } = exports.CURVE;
        const t0 = this.frobeniusMap(6).div(this);
        const t1 = t0.frobeniusMap(2).multiply(t0);
        const t2 = t1.cyclotomicExp(x).conjugate();
        const t3 = t1.cyclotomicSquare().conjugate().multiply(t2);
        const t4 = t3.cyclotomicExp(x).conjugate();
        const t5 = t4.cyclotomicExp(x).conjugate();
        const t6 = t5.cyclotomicExp(x).conjugate().multiply(t2.cyclotomicSquare());
        const t7 = t6.cyclotomicExp(x).conjugate();
        const t2_t5_pow_q2 = t2.multiply(t5).frobeniusMap(2);
        const t4_t1_pow_q3 = t4.multiply(t1).frobeniusMap(3);
        const t6_t1c_pow_q1 = t6.multiply(t1.conjugate()).frobeniusMap(1);
        const t7_t3c_t1 = t7.multiply(t3.conjugate()).multiply(t1);
        return t2_t5_pow_q2.multiply(t4_t1_pow_q3).multiply(t6_t1c_pow_q1).multiply(t7_t3c_t1);
    }
}
exports.Fp12 = Fp12;
Fp12.ZERO = new Fp12([
    Fp6.ZERO,
    Fp6.ZERO
]);
Fp12.ONE = new Fp12([
    Fp6.ONE,
    Fp6.ZERO
]);
class ProjectivePoint {
    constructor(x2, y2, z3, C){
        this.x = x2;
        this.y = y2;
        this.z = z3;
        this.C = C;
    }
    isZero() {
        return this.z.isZero();
    }
    createPoint(x1, y1, z1) {
        return new this.constructor(x1, y1, z1);
    }
    getZero() {
        return this.createPoint(this.C.ONE, this.C.ONE, this.C.ZERO);
    }
    equals(rhs20) {
        if (this.constructor !== rhs20.constructor) throw new Error(`ProjectivePoint#equals: this is ${this.constructor}, but rhs is ${rhs20.constructor}`);
        const a = this;
        const b = rhs20;
        const xe = a.x.multiply(b.z).equals(b.x.multiply(a.z));
        const ye = a.y.multiply(b.z).equals(b.y.multiply(a.z));
        return xe && ye;
    }
    negate() {
        return this.createPoint(this.x, this.y.negate(), this.z);
    }
    toString(isAffine = true) {
        if (!isAffine) return `Point<x=${this.x}, y=${this.y}, z=${this.z}>`;
        const [x, y] = this.toAffine();
        return `Point<x=${x}, y=${y}>`;
    }
    fromAffineTuple(xy) {
        return this.createPoint(xy[0], xy[1], this.C.ONE);
    }
    toAffine(invZ = this.z.invert()) {
        return [
            this.x.multiply(invZ),
            this.y.multiply(invZ)
        ];
    }
    toAffineBatch(points) {
        const toInv = genInvertBatch(this.C, points.map((p)=>p.z
        ));
        return points.map((p, i)=>p.toAffine(toInv[i])
        );
    }
    normalizeZ(points1) {
        return this.toAffineBatch(points1).map((t)=>this.fromAffineTuple(t)
        );
    }
    double() {
        const { x , y , z  } = this;
        const W = x.multiply(x).multiply(3n);
        const S = y.multiply(z);
        const SS = S.multiply(S);
        const SSS = SS.multiply(S);
        const B = x.multiply(y).multiply(S);
        const H = W.multiply(W).subtract(B.multiply(8n));
        const X3 = H.multiply(S).multiply(2n);
        const Y3 = W.multiply(B.multiply(4n).subtract(H)).subtract(y.multiply(y).multiply(8n).multiply(SS));
        const Z3 = SSS.multiply(8n);
        return this.createPoint(X3, Y3, Z3);
    }
    add(rhs21) {
        if (this.constructor !== rhs21.constructor) throw new Error(`ProjectivePoint#add: this is ${this.constructor}, but rhs is ${rhs21.constructor}`);
        const p1 = this;
        const p2 = rhs21;
        if (p1.isZero()) return p2;
        if (p2.isZero()) return p1;
        const X1 = p1.x;
        const Y1 = p1.y;
        const Z1 = p1.z;
        const X2 = p2.x;
        const Y2 = p2.y;
        const Z2 = p2.z;
        const U1 = Y2.multiply(Z1);
        const U2 = Y1.multiply(Z2);
        const V1 = X2.multiply(Z1);
        const V2 = X1.multiply(Z2);
        if (V1.equals(V2) && U1.equals(U2)) return this.double();
        if (V1.equals(V2)) return this.getZero();
        const U = U1.subtract(U2);
        const V = V1.subtract(V2);
        const VV = V.multiply(V);
        const VVV = VV.multiply(V);
        const V2VV = V2.multiply(VV);
        const W = Z1.multiply(Z2);
        const A = U.multiply(U).multiply(W).subtract(VVV).subtract(V2VV.multiply(2n));
        const X3 = V.multiply(A);
        const Y3 = U.multiply(V2VV.subtract(A)).subtract(VVV.multiply(U2));
        const Z3 = VVV.multiply(W);
        return this.createPoint(X3, Y3, Z3);
    }
    subtract(rhs22) {
        if (this.constructor !== rhs22.constructor) throw new Error(`ProjectivePoint#subtract: this is ${this.constructor}, but rhs is ${rhs22.constructor}`);
        return this.add(rhs22.negate());
    }
    validateScalar(n4) {
        if (typeof n4 === 'number') n4 = BigInt(n4);
        if (typeof n4 !== 'bigint' || n4 <= 0 || n4 > exports.CURVE.r) throw new Error(`Point#multiply: invalid scalar, expected positive integer < CURVE.r. Got: ${n4}`);
        return n4;
    }
    multiplyUnsafe(scalar) {
        let n = this.validateScalar(scalar);
        let point = this.getZero();
        let d = this;
        while(n > 0n){
            if (n & 1n) point = point.add(d);
            d = d.double();
            n >>= 1n;
        }
        return point;
    }
    multiply(scalar1) {
        let n = this.validateScalar(scalar1);
        let point = this.getZero();
        let fake = this.getZero();
        let d = this;
        let bits = Fp.ORDER;
        while(bits > 0n){
            if (n & 1n) point = point.add(d);
            else fake = fake.add(d);
            d = d.double();
            n >>= 1n;
            bits >>= 1n;
        }
        return point;
    }
    maxBits() {
        return this.C.MAX_BITS;
    }
    precomputeWindow(W) {
        const windows = Math.ceil(this.maxBits() / W);
        const windowSize = 2 ** (W - 1);
        let points = [];
        let p = this;
        let base = p;
        for(let window = 0; window < windows; window++){
            base = p;
            points.push(base);
            for(let i = 1; i < windowSize; i++){
                base = base.add(p);
                points.push(base);
            }
            p = base.double();
        }
        return points;
    }
    calcMultiplyPrecomputes(W1) {
        if (this._MPRECOMPUTES) throw new Error('This point already has precomputes');
        this._MPRECOMPUTES = [
            W1,
            this.normalizeZ(this.precomputeWindow(W1))
        ];
    }
    clearMultiplyPrecomputes() {
        this._MPRECOMPUTES = undefined;
    }
    wNAF(n5) {
        let W, precomputes;
        if (this._MPRECOMPUTES) [W, precomputes] = this._MPRECOMPUTES;
        else {
            W = 1;
            precomputes = this.precomputeWindow(W);
        }
        let [p, f] = [
            this.getZero(),
            this.getZero()
        ];
        const windows = Math.ceil(this.maxBits() / W);
        const windowSize = 2 ** (W - 1);
        const mask = BigInt(2 ** W - 1);
        const maxNumber = 2 ** W;
        const shiftBy = BigInt(W);
        for(let window = 0; window < windows; window++){
            const offset = window * windowSize;
            let wbits = Number(n5 & mask);
            n5 >>= shiftBy;
            if (wbits > windowSize) {
                wbits -= maxNumber;
                n5 += 1n;
            }
            if (wbits === 0) f = f.add(window % 2 ? precomputes[offset].negate() : precomputes[offset]);
            else {
                const cached = precomputes[offset + Math.abs(wbits) - 1];
                p = p.add(wbits < 0 ? cached.negate() : cached);
            }
        }
        return [
            p,
            f
        ];
    }
    multiplyPrecomputed(scalar2) {
        return this.wNAF(this.validateScalar(scalar2))[0];
    }
}
exports.ProjectivePoint = ProjectivePoint;
function sgn0(x) {
    const [x0, x1] = x.values;
    const sign_0 = x0 % 2n;
    const zero_0 = x0 === 0n;
    const sign_1 = x1 % 2n;
    return BigInt(sign_0 || zero_0 && sign_1);
}
const P_MINUS_9_DIV_16 = (exports.CURVE.P ** 2n - 9n) / 16n;
function sqrt_div_fp2(u, v) {
    const v7 = v.pow(7n);
    const uv7 = u.multiply(v7);
    const uv15 = uv7.multiply(v7.multiply(v));
    const gamma = uv15.pow(P_MINUS_9_DIV_16).multiply(uv7);
    let success = false;
    let result = gamma;
    const positiveRootsOfUnity = FP2_ROOTS_OF_UNITY.slice(0, 4);
    for (const root of positiveRootsOfUnity){
        const candidate = root.multiply(gamma);
        if (candidate.pow(2n).multiply(v).subtract(u).isZero() && !success) {
            success = true;
            result = candidate;
        }
    }
    return [
        success,
        result
    ];
}
function map_to_curve_simple_swu_9mod16(t) {
    const iso_3_a = new Fp2([
        0n,
        240n
    ]);
    const iso_3_b = new Fp2([
        1012n,
        1012n
    ]);
    const iso_3_z = new Fp2([
        -2n,
        -1n
    ]);
    if (Array.isArray(t)) t = new Fp2(t);
    const t2 = t.pow(2n);
    const iso_3_z_t2 = iso_3_z.multiply(t2);
    const ztzt = iso_3_z_t2.add(iso_3_z_t2.pow(2n));
    let denominator = iso_3_a.multiply(ztzt).negate();
    let numerator = iso_3_b.multiply(ztzt.add(Fp2.ONE));
    if (denominator.isZero()) denominator = iso_3_z.multiply(iso_3_a);
    let v = denominator.pow(3n);
    let u = numerator.pow(3n).add(iso_3_a.multiply(numerator).multiply(denominator.pow(2n))).add(iso_3_b.multiply(v));
    const [success, sqrtCandidateOrGamma] = sqrt_div_fp2(u, v);
    let y;
    if (success) y = sqrtCandidateOrGamma;
    const sqrtCandidateX1 = sqrtCandidateOrGamma.multiply(t.pow(3n));
    u = iso_3_z_t2.pow(3n).multiply(u);
    let success2 = false;
    for (const eta of FP2_ETAs){
        const etaSqrtCandidate = eta.multiply(sqrtCandidateX1);
        const temp = etaSqrtCandidate.pow(2n).multiply(v).subtract(u);
        if (temp.isZero() && !success && !success2) {
            y = etaSqrtCandidate;
            success2 = true;
        }
    }
    if (!success && !success2) throw new Error('Hash to Curve - Optimized SWU failure');
    if (success2) numerator = numerator.multiply(iso_3_z_t2);
    if (sgn0(t) !== sgn0(y)) y = y.negate();
    y = y.multiply(denominator);
    return [
        numerator,
        y,
        denominator
    ];
}
exports.map_to_curve_simple_swu_9mod16 = map_to_curve_simple_swu_9mod16;
function isogenyMapG2(xyz) {
    const [x, y, z] = xyz;
    const zz = z.multiply(z);
    const zzz = zz.multiply(z);
    const zPowers = [
        z,
        zz,
        zzz
    ];
    const mapped = [
        Fp2.ZERO,
        Fp2.ZERO,
        Fp2.ZERO,
        Fp2.ZERO
    ];
    for(let i = 0; i < ISOGENY_COEFFICIENTS.length; i++){
        const k_i = ISOGENY_COEFFICIENTS[i];
        mapped[i] = k_i.slice(-1)[0];
        const arr = k_i.slice(0, -1).reverse();
        for(let j = 0; j < arr.length; j++){
            const k_i_j = arr[j];
            mapped[i] = mapped[i].multiply(x).add(zPowers[j].multiply(k_i_j));
        }
    }
    mapped[2] = mapped[2].multiply(y);
    mapped[3] = mapped[3].multiply(z);
    const z2 = mapped[1].multiply(mapped[3]);
    const x2 = mapped[0].multiply(mapped[3]);
    const y2 = mapped[1].multiply(mapped[2]);
    return [
        x2,
        y2,
        z2
    ];
}
exports.isogenyMapG2 = isogenyMapG2;
function calcPairingPrecomputes(x, y) {
    const [Qx, Qy, Qz] = [
        x,
        y,
        Fp2.ONE
    ];
    let [Rx, Ry, Rz] = [
        Qx,
        Qy,
        Qz
    ];
    let ell_coeff = [];
    for(let i = BLS_X_LEN - 2; i >= 0; i--){
        let t0 = Ry.square();
        let t1 = Rz.square();
        let t2 = t1.multiply(3n).multiplyByB();
        let t3 = t2.multiply(3n);
        let t4 = Ry.add(Rz).square().subtract(t1).subtract(t0);
        ell_coeff.push([
            t2.subtract(t0),
            Rx.square().multiply(3n),
            t4.negate(), 
        ]);
        Rx = t0.subtract(t3).multiply(Rx).multiply(Ry).div(2n);
        Ry = t0.add(t3).div(2n).square().subtract(t2.square().multiply(3n));
        Rz = t0.multiply(t4);
        if (bitGet(exports.CURVE.x, i)) {
            let t0 = Ry.subtract(Qy.multiply(Rz));
            let t1 = Rx.subtract(Qx.multiply(Rz));
            ell_coeff.push([
                t0.multiply(Qx).subtract(t1.multiply(Qy)),
                t0.negate(),
                t1, 
            ]);
            let t2 = t1.square();
            let t3 = t2.multiply(t1);
            let t4 = t2.multiply(Rx);
            let t5 = t3.subtract(t4.multiply(2n)).add(t0.square().multiply(Rz));
            Rx = t1.multiply(t5);
            Ry = t4.subtract(t5).multiply(t0).subtract(t3.multiply(Ry));
            Rz = Rz.multiply(t3);
        }
    }
    return ell_coeff;
}
exports.calcPairingPrecomputes = calcPairingPrecomputes;
function millerLoop(ell, g1) {
    let f12 = Fp12.ONE;
    const [x, y] = g1;
    const [Px, Py] = [
        x,
        y
    ];
    for(let j = 0, i = BLS_X_LEN - 2; i >= 0; i--, j++){
        f12 = f12.multiplyBy014(ell[j][0], ell[j][1].multiply(Px.value), ell[j][2].multiply(Py.value));
        if (bitGet(exports.CURVE.x, i)) {
            j += 1;
            f12 = f12.multiplyBy014(ell[j][0], ell[j][1].multiply(Px.value), ell[j][2].multiply(Py.value));
        }
        if (i !== 0) f12 = f12.square();
    }
    return f12.conjugate();
}
exports.millerLoop = millerLoop;
const ut_root = new Fp6([
    Fp2.ZERO,
    Fp2.ONE,
    Fp2.ZERO
]);
const wsq = new Fp12([
    ut_root,
    Fp6.ZERO
]);
const wsq_inv = wsq.invert();
const wcu = new Fp12([
    Fp6.ZERO,
    ut_root
]);
const wcu_inv = wcu.invert();
function psi(x, y) {
    const x2 = wsq_inv.multiplyByFp2(x).frobeniusMap(1).multiply(wsq).c[0].c[0];
    const y2 = wcu_inv.multiplyByFp2(y).frobeniusMap(1).multiply(wcu).c[0].c[0];
    return [
        x2,
        y2
    ];
}
exports.psi = psi;
function psi2(x, y) {
    return [
        x.multiply(PSI2_C1),
        y.negate()
    ];
}
exports.psi2 = psi2;
const PSI2_C1 = 4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n;
const rv1 = 1028732146235106349975324479215795277384839936929757896155643118032610843298655225875571310552543014690878354869257n;
const ev1 = 1015919005498129635886032702454337503112659152043614931979881174103627376789972962005013361970813319613593700736144n;
const ev2 = 1244231661155348484223428017511856347821538750986231559855759541903146219579071812422210818684355842447591283616181n;
const ev3 = 1646015993121829755895883253076789309308090876275172350194834453434199515639474951814226234213676147507404483718679n;
const ev4 = 1637752706019426886789797193293828301565549384974986623510918743054325021588194075665960171838131772227885159387073n;
const FP2_FROBENIUS_COEFFICIENTS = [
    1n,
    4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559786n, 
].map((item)=>new Fp(item)
);
const FP2_ROOTS_OF_UNITY = [
    [
        1n,
        0n
    ],
    [
        rv1,
        -rv1
    ],
    [
        0n,
        1n
    ],
    [
        rv1,
        rv1
    ],
    [
        -1n,
        0n
    ],
    [
        -rv1,
        rv1
    ],
    [
        0n,
        -1n
    ],
    [
        -rv1,
        -rv1
    ], 
].map((pair)=>new Fp2(pair)
);
const FP2_ETAs = [
    [
        ev1,
        ev2
    ],
    [
        -ev2,
        ev1
    ],
    [
        ev3,
        ev4
    ],
    [
        -ev4,
        ev3
    ], 
].map((pair)=>new Fp2(pair)
);
const FP6_FROBENIUS_COEFFICIENTS_1 = [
    [
        1n,
        0n
    ],
    [
        0n,
        4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n, 
    ],
    [
        793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620350n,
        0n, 
    ],
    [
        0n,
        1n
    ],
    [
        4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n,
        0n, 
    ],
    [
        0n,
        793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620350n, 
    ], 
].map((pair)=>new Fp2(pair)
);
const FP6_FROBENIUS_COEFFICIENTS_2 = [
    [
        1n,
        0n
    ],
    [
        4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939437n,
        0n, 
    ],
    [
        4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n,
        0n, 
    ],
    [
        4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559786n,
        0n, 
    ],
    [
        793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620350n,
        0n, 
    ],
    [
        793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620351n,
        0n, 
    ], 
].map((pair)=>new Fp2(pair)
);
const FP12_FROBENIUS_COEFFICIENTS = [
    [
        1n,
        0n
    ],
    [
        3850754370037169011952147076051364057158807420970682438676050522613628423219637725072182697113062777891589506424760n,
        151655185184498381465642749684540099398075398968325446656007613510403227271200139370504932015952886146304766135027n, 
    ],
    [
        793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620351n,
        0n, 
    ],
    [
        2973677408986561043442465346520108879172042883009249989176415018091420807192182638567116318576472649347015917690530n,
        1028732146235106349975324479215795277384839936929757896155643118032610843298655225875571310552543014690878354869257n, 
    ],
    [
        793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620350n,
        0n, 
    ],
    [
        3125332594171059424908108096204648978570118281977575435832422631601824034463382777937621250592425535493320683825557n,
        877076961050607968509681729531255177986764537961432449499635504522207616027455086505066378536590128544573588734230n, 
    ],
    [
        4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559786n,
        0n, 
    ],
    [
        151655185184498381465642749684540099398075398968325446656007613510403227271200139370504932015952886146304766135027n,
        3850754370037169011952147076051364057158807420970682438676050522613628423219637725072182697113062777891589506424760n, 
    ],
    [
        4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n,
        0n, 
    ],
    [
        1028732146235106349975324479215795277384839936929757896155643118032610843298655225875571310552543014690878354869257n,
        2973677408986561043442465346520108879172042883009249989176415018091420807192182638567116318576472649347015917690530n, 
    ],
    [
        4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939437n,
        0n, 
    ],
    [
        877076961050607968509681729531255177986764537961432449499635504522207616027455086505066378536590128544573588734230n,
        3125332594171059424908108096204648978570118281977575435832422631601824034463382777937621250592425535493320683825557n, 
    ], 
].map((pair)=>new Fp2(pair)
);
const xnum = [
    [
        889424345604814976315064405719089812568196182208668418962679585805340366775741747653930584250892369786198727235542n,
        889424345604814976315064405719089812568196182208668418962679585805340366775741747653930584250892369786198727235542n, 
    ],
    [
        0n,
        2668273036814444928945193217157269437704588546626005256888038757416021100327225242961791752752677109358596181706522n, 
    ],
    [
        2668273036814444928945193217157269437704588546626005256888038757416021100327225242961791752752677109358596181706526n,
        1334136518407222464472596608578634718852294273313002628444019378708010550163612621480895876376338554679298090853261n, 
    ],
    [
        3557697382419259905260257622876359250272784728834673675850718343221361467102966990615722337003569479144794908942033n,
        0n, 
    ], 
].map((pair)=>new Fp2(pair)
);
const xden = [
    [
        0n,
        4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559715n, 
    ],
    [
        12n,
        4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559775n, 
    ],
    [
        1n,
        0n
    ],
    [
        0n,
        0n
    ], 
].map((pair)=>new Fp2(pair)
);
const ynum = [
    [
        3261222600550988246488569487636662646083386001431784202863158481286248011511053074731078808919938689216061999863558n,
        3261222600550988246488569487636662646083386001431784202863158481286248011511053074731078808919938689216061999863558n, 
    ],
    [
        0n,
        889424345604814976315064405719089812568196182208668418962679585805340366775741747653930584250892369786198727235518n, 
    ],
    [
        2668273036814444928945193217157269437704588546626005256888038757416021100327225242961791752752677109358596181706524n,
        1334136518407222464472596608578634718852294273313002628444019378708010550163612621480895876376338554679298090853263n, 
    ],
    [
        2816510427748580758331037284777117739799287910327449993381818688383577828123182200904113516794492504322962636245776n,
        0n, 
    ], 
].map((pair)=>new Fp2(pair)
);
const yden = [
    [
        4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559355n,
        4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559355n, 
    ],
    [
        0n,
        4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559571n, 
    ],
    [
        18n,
        4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559769n, 
    ],
    [
        1n,
        0n
    ], 
].map((pair)=>new Fp2(pair)
);
const ISOGENY_COEFFICIENTS = [
    xnum,
    xden,
    ynum,
    yden
];

},{}],"joWnX":[function(require,module,exports) {
"use strict";

},{}]},["40ZqG","hsApU"], "hsApU", "parcelRequire611b")

//# sourceMappingURL=index.25442745.js.map
