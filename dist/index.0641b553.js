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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
})({"6IXwR":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
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
            it = it.call(o);
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
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
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

},{}],"bNKaB":[function(require,module,exports) {
var _ipfsHttpClient = require("ipfs-http-client");
/* global location */ 'use strict';
const all = require('it-all');
const { concat: uint8ArrayConcat  } = require('uint8arrays/concat');
const { fromString: uint8ArrayFromString  } = require('uint8arrays/from-string');
// Node
const $nodeId = document.querySelector('.node-id');
const $nodeAddresses = document.querySelector('.node-addresses');
const $logs = document.querySelector('#logs');
// Peers
const $peers = document.querySelector('#peers');
const $peersList = $peers.querySelector('#connected-peers');
const $workspacePeersList = $peers.querySelector('#workspace-peers');
const $multiaddrInput = document.querySelector('#multiaddr-input');
const $connectButton = document.querySelector('#peer-btn');
// Files
const $cidInput = document.querySelector('#cid-input');
const $fetchButton = document.querySelector('#fetch-btn');
const $dragContainer = document.querySelector('#drag-container');
const $progressBar = document.querySelector('#progress-bar');
const $fileHistory = document.querySelector('#file-history tbody');
const $emptyRow = document.querySelector('.empty-row');
// Misc
const $allDisabledButtons = document.querySelectorAll('button:disabled');
const $allDisabledInputs = document.querySelectorAll('input:disabled');
const $allDisabledElements = document.querySelectorAll('.disabled');
let FILES = [];
let workspace = 'isep-drive';
let fileSize = 0;
/** @type {import('ipfs-core-types').IPFS} */ let node;
let info;
/* ===========================================================================
   Connexion au noeud IPFS
   =========================================================================== */ async function start() {
    if (!node) {
        // Url du noeud local 
        const url = "/ip4/127.0.0.1/tcp/5001"; // A modifier 
        // Connexion au noeud et récupération des informations 
        node = _ipfsHttpClient.create(url);
        try {
            info = await node.id();
            const addressesHtml = info.addresses.map((address)=>{
                return `<li><pre>${address}</pre></li>`;
            }).join('');
            $nodeId.innerText = info.id;
            $nodeAddresses.innerHTML = addressesHtml;
            $allDisabledButtons.forEach((b)=>{
                b.disabled = false;
            });
            $allDisabledInputs.forEach((b)=>{
                b.disabled = false;
            });
            $allDisabledElements.forEach((el)=>{
                el.classList.remove('disabled');
            });
        } catch (err2) {
            return onError(err2);
        }
        onSuccess('Connexion réussie !');
        // Création d'un dossier 
        try {
            node.files.mkdir("/isep-drive");
        } catch (err1) {
            console.log("Le dossier '/isep-drive' existe déjà ! ");
        }
        for await (const file of node.files.ls('/isep-drive'))FILES.push(file.cid.toString());
        // Boucle pour récupérer la liste des peers connectés au réseau
        setInterval(async ()=>{
            try {
                await refreshPeerList();
            } catch (err) {
                err.message = `Failed to refresh the peer list: ${err.message}`;
                onError(err);
            }
        }, 1000);
        // Boucle pour récupérer la liste des peers qui suivent le dossier "isep-drive"
        setInterval(async ()=>{
            try {
                await refreshWorkspacePeerList();
            } catch (err) {
                err.message = `Failed to refresh the workspace peer list: ${err.message}`;
                onError(err);
            }
        }, 1000);
        // Boucle pour actualiser le dossier "isep-drive" (envoie des nouveaux fichiers) 
        setInterval(async ()=>{
            try {
                await sendFileList();
            } catch (err) {
                err.message = `Failed to publish the file list: ${err.message}`;
                onError(err);
            }
        }, 10000);
        // Boucle pour actualiser le dossier "isep-drive" (réception des nouveaux fichiers)          
        try {
            await subscribeToWorkspace();
        } catch (err) {
            err.message = `Failed to subscribe to the workspace: ${err.message}`;
            return onError(err);
        }
    }
}
/* ===========================================================================
   Pubsub (Gestion du dossier partagé "isep-drive")
   =========================================================================== */ // Réception des nouveaux fichiers lorsque qu'un peer les upload sur le dossier partagé
const messageHandler = (message)=>{
    const myNode = info.id.toString();
    const hash = message.data.toString();
    const messageSender = message.from;
    if (myNode !== messageSender && !FILES.includes(hash)) {
        $cidInput.value = hash;
        getFile();
    }
};
// Connexion au dossier partagé
const subscribeToWorkspace = async ()=>{
    await node.pubsub.subscribe(workspace, messageHandler);
    const msg = `Suivi du dossier '${workspace}' activé`;
    $logs.innerHTML = msg;
};
// Envoie des nouveaux fichiers aux peers connectés au dossier partagé
const publishHash = (hash)=>{
    const data = uint8ArrayFromString(hash);
    return node.pubsub.publish(workspace, data);
};
/* ===========================================================================
   Traitement local des fichiers
   =========================================================================== */ // Envoie de la liste des hashs stockés dans la session du navigateur
const sendFileList = ()=>Promise.all(FILES.map(publishHash))
;
// Actualisation de la barre de progression lors de l'ajout d'un ficher 
const updateProgress = (bytesLoaded)=>{
    let percent = 100 - bytesLoaded / fileSize * 100;
    $progressBar.style.transform = `translateX(${-percent}%)`;
};
// Réinitialisation de la barre de progression
const resetProgress = ()=>{
    $progressBar.style.transform = 'translateX(-100%)';
};
// Upload un fichier dans le navigateur
function appendFile(name, hash, size, data) {
    const file = new window.Blob([
        data
    ], {
        type: 'application/octet-binary'
    });
    const url = window.URL.createObjectURL(file);
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.innerHTML = name;
    const hashCell = document.createElement('td');
    hashCell.innerHTML = hash;
    const sizeCell = document.createElement('td');
    sizeCell.innerText = size;
    const downloadCell = document.createElement('td');
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', name);
    link.innerHTML = '<img width=20 class="table-action" src="download.svg" alt="Download" />';
    downloadCell.appendChild(link);
    row.appendChild(nameCell);
    row.appendChild(hashCell);
    row.appendChild(sizeCell);
    row.appendChild(downloadCell);
    $fileHistory.insertBefore(row, $fileHistory.firstChild);
    return publishHash(hash);
}
// Réception et ajout des fichiers du dossier 'isep-drive'
async function getFile() {
    const hash = $cidInput.value;
    $cidInput.value = '';
    if (!hash) return onError('No CID was inserted.');
    else if (FILES.includes(hash)) return onSuccess('The file is already in the current workspace.');
    FILES.push(hash);
    for await (const file of node.ls(hash))if (file.type === 'file') {
        const content = uint8ArrayConcat(await all(node.cat(file.cid)));
        await appendFile(file.name, hash, file.size, content);
        onSuccess(`The ${file.name} file was added.`);
        $emptyRow.style.display = 'none';
        node.files.cp("/ipfs/" + file.cid, "/isep-drive/" + file.name);
    }
}
/* Drag & Drop 
   =========================================================================== */ const onDragEnter = ()=>$dragContainer.classList.add('dragging')
;
const onDragLeave = ()=>$dragContainer.classList.remove('dragging')
;
// Ajout du fichier uploadé sur IPFS 
async function onDrop(event) {
    onDragLeave();
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    for (const file of files){
        fileSize = file.size // Note: fileSize is used by updateProgress
        ;
        const fileAdded = await node.add({
            path: file.name,
            content: file
        }, {
            wrapWithDirectory: true,
            progress: updateProgress
        });
        // As we are wrapping the content we use that hash to keep
        // the original file name when adding it to the table
        $cidInput.value = fileAdded.cid.toString();
        resetProgress();
        await getFile();
    }
}
/* ===========================================================================
   Gestion des Peers
   =========================================================================== */ // Connexion à un noeud
async function connectToPeer(event) {
    const multiaddr = $multiaddrInput.value;
    if (!multiaddr) throw new Error('No multiaddr was inserted.');
    await node.swarm.connect(multiaddr);
    onSuccess(`Successfully connected to peer.`);
    $multiaddrInput.value = '';
}
// Obtenir la liste des peers connectés au réseau
async function refreshPeerList() {
    const peers = await node.swarm.peers();
    const peersAsHtml = peers.reverse().map((peer)=>{
        if (peer.addr) {
            const addr = peer.addr.toString();
            if (addr.indexOf('/p2p/') >= 0) return addr;
            else return addr + '/p2p/' + peer.peer;
        }
    }).map((addr)=>{
        return `<tr><td>${addr}</td></tr>`;
    }).join('');
    $peersList.innerHTML = peersAsHtml;
}
// Obtenir la liste des peers connectés au dossier partagé "isep-drive"
async function refreshWorkspacePeerList() {
    const peers = await node.pubsub.peers(workspace);
    const peersAsHtml = peers.reverse().map((addr)=>{
        return `<tr><td>${addr}</td></tr>`;
    }).join('');
    $workspacePeersList.innerHTML = peersAsHtml;
}
/* ===========================================================================
   Gestion des erreurs
   =========================================================================== */ function onSuccess(msg) {
    $logs.classList.add('success');
    $logs.innerHTML = msg;
}
function onError(err) {
    console.log(err);
    let msg = 'An error occured, check the dev console';
    if (err.stack !== undefined) msg = err.stack;
    else if (typeof err === 'string') msg = err;
    $logs.classList.remove('success');
    $logs.innerHTML = msg;
}
window.onerror = onError;
/* ===========================================================================
   Boot the app
   =========================================================================== */ const startApplication = ()=>{
    // Setup event listeners
    $dragContainer.addEventListener('dragenter', onDragEnter);
    $dragContainer.addEventListener('dragover', onDragEnter);
    $dragContainer.addEventListener('drop', async (e)=>{
        try {
            await onDrop(e);
        } catch (err) {
            err.message = `Failed to add files: ${err.message}`;
            onError(err);
        }
    });
    $dragContainer.addEventListener('dragleave', onDragLeave);
    $fetchButton.addEventListener('click', async ()=>{
        try {
            await getFile();
        } catch (err) {
            err.message = `Failed to fetch CID: ${err.message}`;
            onError(err);
        }
    });
    $connectButton.addEventListener('click', async ()=>{
        try {
            await connectToPeer();
        } catch (err) {
            err.message = `Failed to connect to peer: ${err.message}`;
            onError(err);
        }
    });
    start();
};
startApplication();

},{"ipfs-http-client":"43paR","it-all":"3roGN","uint8arrays/concat":"gqJ9u","uint8arrays/from-string":"7qjkp"}],"43paR":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var multibases = require('ipfs-core-utils/multibases');
var multicodecs = require('ipfs-core-utils/multicodecs');
var multihashes = require('ipfs-core-utils/multihashes');
var dagPB = require('@ipld/dag-pb');
var dagCBOR = require('@ipld/dag-cbor');
var dagJSON = require('@ipld/dag-json');
var dagJOSE = require('dag-jose');
var identity = require('multiformats/hashes/identity');
var basics = require('multiformats/basics');
var index = require('./bitswap/index.js');
var index$1 = require('./block/index.js');
var index$2 = require('./bootstrap/index.js');
var index$3 = require('./config/index.js');
var index$4 = require('./dag/index.js');
var index$5 = require('./dht/index.js');
var index$6 = require('./diag/index.js');
var index$7 = require('./files/index.js');
var index$8 = require('./key/index.js');
var index$9 = require('./log/index.js');
var index$a = require('./name/index.js');
var index$b = require('./object/index.js');
var index$c = require('./pin/index.js');
var index$d = require('./pubsub/index.js');
var index$e = require('./refs/index.js');
var index$f = require('./repo/index.js');
var index$g = require('./stats/index.js');
var index$h = require('./swarm/index.js');
var add = require('./add.js');
var addAll = require('./add-all.js');
var cat = require('./cat.js');
var commands = require('./commands.js');
var dns = require('./dns.js');
var getEndpointConfig = require('./get-endpoint-config.js');
var get = require('./get.js');
var id = require('./id.js');
var isOnline = require('./is-online.js');
var ls = require('./ls.js');
var mount = require('./mount.js');
var ping = require('./ping.js');
var resolve = require('./resolve.js');
var start = require('./start.js');
var stop = require('./stop.js');
var version = require('./version.js');
var globSourceImport = require('ipfs-utils/src/files/glob-source.js');
var cid = require('multiformats/cid');
var multiaddr = require('multiaddr');
var urlSource_js = require('ipfs-utils/src/files/url-source.js');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) Object.keys(e).forEach(function(k) {
        if (k !== 'default') {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
                enumerable: true,
                get: function() {
                    return e[k];
                }
            });
        }
    });
    n["default"] = e;
    return Object.freeze(n);
}
var dagPB__namespace = /*#__PURE__*/ _interopNamespace(dagPB);
var dagCBOR__namespace = /*#__PURE__*/ _interopNamespace(dagCBOR);
var dagJSON__namespace = /*#__PURE__*/ _interopNamespace(dagJSON);
var dagJOSE__namespace = /*#__PURE__*/ _interopNamespace(dagJOSE);
var globSourceImport__default = /*#__PURE__*/ _interopDefaultLegacy(globSourceImport);
var urlSource_js__default = /*#__PURE__*/ _interopDefaultLegacy(urlSource_js);
function create(options = {
}) {
    const id$1 = {
        name: identity.identity.name,
        code: identity.identity.code,
        encode: (id1)=>id1
        ,
        decode: (id2)=>id2
    };
    const multibaseCodecs = Object.values(basics.bases);
    (options.ipld && options.ipld.bases ? options.ipld.bases : []).forEach((base)=>multibaseCodecs.push(base)
    );
    const multibases$1 = new multibases.Multibases({
        bases: multibaseCodecs,
        loadBase: options.ipld && options.ipld.loadBase
    });
    const blockCodecs = Object.values(basics.codecs);
    [
        dagPB__namespace,
        dagCBOR__namespace,
        dagJSON__namespace,
        dagJOSE__namespace,
        id$1
    ].concat(options.ipld && options.ipld.codecs || []).forEach((codec)=>blockCodecs.push(codec)
    );
    const multicodecs$1 = new multicodecs.Multicodecs({
        codecs: blockCodecs,
        loadCodec: options.ipld && options.ipld.loadCodec
    });
    const multihashHashers = Object.values(basics.hashes);
    (options.ipld && options.ipld.hashers ? options.ipld.hashers : []).forEach((hasher)=>multihashHashers.push(hasher)
    );
    const multihashes$1 = new multihashes.Multihashes({
        hashers: multihashHashers,
        loadHasher: options.ipld && options.ipld.loadHasher
    });
    const client = {
        add: add.createAdd(options),
        addAll: addAll.createAddAll(options),
        bitswap: index.createBitswap(options),
        block: index$1.createBlock(options),
        bootstrap: index$2.createBootstrap(options),
        cat: cat.createCat(options),
        commands: commands.createCommands(options),
        config: index$3.createConfig(options),
        dag: index$4.createDag(multicodecs$1, options),
        dht: index$5.createDht(options),
        diag: index$6.createDiag(options),
        dns: dns.createDns(options),
        files: index$7.createFiles(options),
        get: get.createGet(options),
        getEndpointConfig: getEndpointConfig.createGetEndpointConfig(options),
        id: id.createId(options),
        isOnline: isOnline.createIsOnline(options),
        key: index$8.createKey(options),
        log: index$9.createLog(options),
        ls: ls.createLs(options),
        mount: mount.createMount(options),
        name: index$a.createName(options),
        object: index$b.createObject(multicodecs$1, options),
        pin: index$c.createPin(options),
        ping: ping.createPing(options),
        pubsub: index$d.createPubsub(options),
        refs: index$e.createRefs(options),
        repo: index$f.createRepo(options),
        resolve: resolve.createResolve(options),
        start: start.createStart(options),
        stats: index$g.createStats(options),
        stop: stop.createStop(options),
        swarm: index$h.createSwarm(options),
        version: version.createVersion(options),
        bases: multibases$1,
        codecs: multicodecs$1,
        hashers: multihashes$1
    };
    return client;
}
const globSource = globSourceImport__default["default"];
Object.defineProperty(exports, 'CID', {
    enumerable: true,
    get: function() {
        return cid.CID;
    }
});
Object.defineProperty(exports, 'multiaddr', {
    enumerable: true,
    get: function() {
        return multiaddr.Multiaddr;
    }
});
Object.defineProperty(exports, 'urlSource', {
    enumerable: true,
    get: function() {
        return urlSource_js__default["default"];
    }
});
exports.create = create;
exports.globSource = globSource;

},{"ipfs-core-utils/multibases":"721Lg","ipfs-core-utils/multicodecs":"b09yw","ipfs-core-utils/multihashes":"3bZM7","@ipld/dag-pb":"c9ugn","@ipld/dag-cbor":"aY7XS","@ipld/dag-json":"lBbUS","dag-jose":"2OjDT","multiformats/hashes/identity":"bj4ky","multiformats/basics":"a826o","./bitswap/index.js":"dO657","./block/index.js":"ibHWu","./bootstrap/index.js":"8mWMC","./config/index.js":"9BjQG","./dag/index.js":"jtisc","./dht/index.js":"2Pp6g","./diag/index.js":"hqnYU","./files/index.js":"lPTZB","./key/index.js":"94Yfc","./log/index.js":"1yg4l","./name/index.js":"7aWnC","./object/index.js":"hfKAb","./pin/index.js":"ieDN2","./pubsub/index.js":"fVBoe","./refs/index.js":"oA3c4","./repo/index.js":"Kg1Be","./stats/index.js":"lyUQb","./swarm/index.js":"1CwyP","./add.js":"gLHNh","./add-all.js":"hY6iY","./cat.js":"pRDjG","./commands.js":"aoJow","./dns.js":"5IDYp","./get-endpoint-config.js":"9qe4L","./get.js":"hPxtl","./id.js":"6wMrZ","./is-online.js":"5XhyE","./ls.js":"63qvU","./mount.js":"2X8Ks","./ping.js":"jLId8","./resolve.js":"3mOAw","./start.js":"4a43F","./stop.js":"creD8","./version.js":"aDEXf","ipfs-utils/src/files/glob-source.js":"jhUEF","multiformats/cid":"4uoBU","multiaddr":"dOMJu","ipfs-utils/src/files/url-source.js":"92xmM"}],"721Lg":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
const LOAD_BASE = (name)=>Promise.reject(new Error(`No base found for "${name}"`))
;
class Multibases {
    constructor(options){
        this._basesByName = {
        };
        this._basesByPrefix = {
        };
        this._loadBase = options.loadBase || LOAD_BASE;
        for (const base of options.bases)this.addBase(base);
    }
    addBase(base) {
        if (this._basesByName[base.name] || this._basesByPrefix[base.prefix]) throw new Error(`Codec already exists for codec "${base.name}"`);
        this._basesByName[base.name] = base;
        this._basesByPrefix[base.prefix] = base;
    }
    removeBase(base) {
        delete this._basesByName[base.name];
        delete this._basesByPrefix[base.prefix];
    }
    async getBase(nameOrPrefix) {
        if (this._basesByName[nameOrPrefix]) return this._basesByName[nameOrPrefix];
        if (this._basesByPrefix[nameOrPrefix]) return this._basesByPrefix[nameOrPrefix];
        const base = await this._loadBase(nameOrPrefix);
        if (this._basesByName[base.name] == null && this._basesByPrefix[base.prefix] == null) this.addBase(base);
        return base;
    }
    listBases() {
        return Object.values(this._basesByName);
    }
}
exports.Multibases = Multibases;

},{}],"b09yw":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
const LOAD_CODEC = (codeOrName)=>Promise.reject(new Error(`No codec found for "${codeOrName}"`))
;
class Multicodecs {
    constructor(options){
        this._codecsByName = {
        };
        this._codecsByCode = {
        };
        this._loadCodec = options.loadCodec || LOAD_CODEC;
        for (const codec of options.codecs)this.addCodec(codec);
    }
    addCodec(codec) {
        if (this._codecsByName[codec.name] || this._codecsByCode[codec.code]) throw new Error(`Resolver already exists for codec "${codec.name}"`);
        this._codecsByName[codec.name] = codec;
        this._codecsByCode[codec.code] = codec;
    }
    removeCodec(codec) {
        delete this._codecsByName[codec.name];
        delete this._codecsByCode[codec.code];
    }
    async getCodec(code) {
        const table = typeof code === 'string' ? this._codecsByName : this._codecsByCode;
        if (table[code]) return table[code];
        const codec = await this._loadCodec(code);
        if (table[code] == null) this.addCodec(codec);
        return codec;
    }
    listCodecs() {
        return Object.values(this._codecsByName);
    }
}
exports.Multicodecs = Multicodecs;

},{}],"3bZM7":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
const LOAD_HASHER = (codeOrName)=>Promise.reject(new Error(`No hasher found for "${codeOrName}"`))
;
class Multihashes {
    constructor(options){
        this._hashersByName = {
        };
        this._hashersByCode = {
        };
        this._loadHasher = options.loadHasher || LOAD_HASHER;
        for (const hasher of options.hashers)this.addHasher(hasher);
    }
    addHasher(hasher) {
        if (this._hashersByName[hasher.name] || this._hashersByCode[hasher.code]) throw new Error(`Resolver already exists for codec "${hasher.name}"`);
        this._hashersByName[hasher.name] = hasher;
        this._hashersByCode[hasher.code] = hasher;
    }
    removeHasher(hasher) {
        delete this._hashersByName[hasher.name];
        delete this._hashersByCode[hasher.code];
    }
    async getHasher(code) {
        const table = typeof code === 'string' ? this._hashersByName : this._hashersByCode;
        if (table[code]) return table[code];
        const hasher = await this._loadHasher(code);
        if (table[code] == null) this.addHasher(hasher);
        return hasher;
    }
    listHashers() {
        return Object.values(this._hashersByName);
    }
}
exports.Multihashes = Multihashes;

},{}],"c9ugn":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var pbDecode = require('./pb-decode.js');
var pbEncode = require('./pb-encode.js');
var util = require('./util.js');
const name = 'dag-pb';
const code = 112;
function encode(node) {
    util.validate(node);
    const pbn = {
    };
    if (node.Links) pbn.Links = node.Links.map((l)=>{
        const link = {
        };
        if (l.Hash) link.Hash = l.Hash.bytes;
        if (l.Name !== undefined) link.Name = l.Name;
        if (l.Tsize !== undefined) link.Tsize = l.Tsize;
        return link;
    });
    if (node.Data) pbn.Data = node.Data;
    return pbEncode.encodeNode(pbn);
}
function decode(bytes) {
    const pbn = pbDecode.decodeNode(bytes);
    const node = {
    };
    if (pbn.Data) node.Data = pbn.Data;
    if (pbn.Links) node.Links = pbn.Links.map((l)=>{
        const link = {
        };
        try {
            link.Hash = cid.CID.decode(l.Hash);
        } catch (e) {
        }
        if (!link.Hash) throw new Error('Invalid Hash field found in link, expected CID');
        if (l.Name !== undefined) link.Name = l.Name;
        if (l.Tsize !== undefined) link.Tsize = l.Tsize;
        return link;
    });
    return node;
}
exports.createLink = util.createLink;
exports.createNode = util.createNode;
exports.prepare = util.prepare;
exports.validate = util.validate;
exports.code = code;
exports.decode = decode;
exports.encode = encode;
exports.name = name;

},{"multiformats/cid":"4uoBU","./pb-decode.js":"9UzX5","./pb-encode.js":"x0sg5","./util.js":"2HxTA"}],"4uoBU":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var varint = require('./varint.js');
var digest = require('./hashes/digest.js');
var base58 = require('./bases/base58.js');
var base32 = require('./bases/base32.js');
var bytes = require('./bytes.js');
class CID {
    constructor(version1, code, multihash, bytes1){
        this.code = code;
        this.version = version1;
        this.multihash = multihash;
        this.bytes = bytes1;
        this.byteOffset = bytes1.byteOffset;
        this.byteLength = bytes1.byteLength;
        this.asCID = this;
        this._baseCache = new Map();
        Object.defineProperties(this, {
            byteOffset: hidden,
            byteLength: hidden,
            code: readonly,
            version: readonly,
            multihash: readonly,
            bytes: readonly,
            _baseCache: hidden,
            asCID: hidden
        });
    }
    toV0() {
        switch(this.version){
            case 0:
                return this;
            default:
                {
                    const { code , multihash  } = this;
                    if (code !== DAG_PB_CODE) throw new Error('Cannot convert a non dag-pb CID to CIDv0');
                    if (multihash.code !== SHA_256_CODE) throw new Error('Cannot convert non sha2-256 multihash CID to CIDv0');
                    return CID.createV0(multihash);
                }
        }
    }
    toV1() {
        switch(this.version){
            case 0:
                {
                    const { code , digest: digest$1  } = this.multihash;
                    const multihash = digest.create(code, digest$1);
                    return CID.createV1(this.code, multihash);
                }
            case 1:
                return this;
            default:
                throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
        }
    }
    equals(other) {
        return other && this.code === other.code && this.version === other.version && digest.equals(this.multihash, other.multihash);
    }
    toString(base) {
        const { bytes: bytes2 , version: version2 , _baseCache  } = this;
        switch(version2){
            case 0:
                return toStringV0(bytes2, _baseCache, base || base58.base58btc.encoder);
            default:
                return toStringV1(bytes2, _baseCache, base || base32.base32.encoder);
        }
    }
    toJSON() {
        return {
            code: this.code,
            version: this.version,
            hash: this.multihash.bytes
        };
    }
    get [Symbol.toStringTag]() {
        return 'CID';
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return 'CID(' + this.toString() + ')';
    }
    static isCID(value) {
        deprecate(/^0\.0/, IS_CID_DEPRECATION);
        return !!(value && (value[cidSymbol] || value.asCID === value));
    }
    get toBaseEncodedString() {
        throw new Error('Deprecated, use .toString()');
    }
    get codec() {
        throw new Error('"codec" property is deprecated, use integer "code" property instead');
    }
    get buffer() {
        throw new Error('Deprecated .buffer property, use .bytes to get Uint8Array instead');
    }
    get multibaseName() {
        throw new Error('"multibaseName" property is deprecated');
    }
    get prefix() {
        throw new Error('"prefix" property is deprecated');
    }
    static asCID(value) {
        if (value instanceof CID) return value;
        else if (value != null && value.asCID === value) {
            const { version: version3 , code , multihash , bytes: bytes3  } = value;
            return new CID(version3, code, multihash, bytes3 || encodeCID(version3, code, multihash.bytes));
        } else if (value != null && value[cidSymbol] === true) {
            const { version: version4 , multihash , code  } = value;
            const digest$1 = digest.decode(multihash);
            return CID.create(version4, code, digest$1);
        } else return null;
    }
    static create(version5, code, digest1) {
        if (typeof code !== 'number') throw new Error('String codecs are no longer supported');
        switch(version5){
            case 0:
                if (code !== DAG_PB_CODE) throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
                else return new CID(version5, code, digest1, digest1.bytes);
            case 1:
                {
                    const bytes4 = encodeCID(version5, code, digest1.bytes);
                    return new CID(version5, code, digest1, bytes4);
                }
            default:
                throw new Error('Invalid version');
        }
    }
    static createV0(digest2) {
        return CID.create(0, DAG_PB_CODE, digest2);
    }
    static createV1(code, digest3) {
        return CID.create(1, code, digest3);
    }
    static decode(bytes5) {
        const [cid, remainder] = CID.decodeFirst(bytes5);
        if (remainder.length) throw new Error('Incorrect length');
        return cid;
    }
    static decodeFirst(bytes$1) {
        const specs = CID.inspectBytes(bytes$1);
        const prefixSize = specs.size - specs.multihashSize;
        const multihashBytes = bytes.coerce(bytes$1.subarray(prefixSize, prefixSize + specs.multihashSize));
        if (multihashBytes.byteLength !== specs.multihashSize) throw new Error('Incorrect length');
        const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
        const digest$1 = new digest.Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
        const cid = specs.version === 0 ? CID.createV0(digest$1) : CID.createV1(specs.codec, digest$1);
        return [
            cid,
            bytes$1.subarray(specs.size)
        ];
    }
    static inspectBytes(initialBytes) {
        let offset = 0;
        const next = ()=>{
            const [i, length] = varint.decode(initialBytes.subarray(offset));
            offset += length;
            return i;
        };
        let version6 = next();
        let codec = DAG_PB_CODE;
        if (version6 === 18) {
            version6 = 0;
            offset = 0;
        } else if (version6 === 1) codec = next();
        if (version6 !== 0 && version6 !== 1) throw new RangeError(`Invalid CID version ${version6}`);
        const prefixSize = offset;
        const multihashCode = next();
        const digestSize = next();
        const size = offset + digestSize;
        const multihashSize = size - prefixSize;
        return {
            version: version6,
            codec,
            multihashCode,
            digestSize,
            multihashSize,
            size
        };
    }
    static parse(source, base) {
        const [prefix, bytes6] = parseCIDtoBytes(source, base);
        const cid = CID.decode(bytes6);
        cid._baseCache.set(prefix, source);
        return cid;
    }
}
const parseCIDtoBytes = (source, base)=>{
    switch(source[0]){
        case 'Q':
            {
                const decoder = base || base58.base58btc;
                return [
                    base58.base58btc.prefix,
                    decoder.decode(`${base58.base58btc.prefix}${source}`)
                ];
            }
        case base58.base58btc.prefix:
            {
                const decoder = base || base58.base58btc;
                return [
                    base58.base58btc.prefix,
                    decoder.decode(source)
                ];
            }
        case base32.base32.prefix:
            {
                const decoder = base || base32.base32;
                return [
                    base32.base32.prefix,
                    decoder.decode(source)
                ];
            }
        default:
            if (base == null) throw Error('To parse non base32 or base58btc encoded CID multibase decoder must be provided');
            return [
                source[0],
                base.decode(source)
            ];
    }
};
const toStringV0 = (bytes7, cache, base)=>{
    const { prefix  } = base;
    if (prefix !== base58.base58btc.prefix) throw Error(`Cannot string encode V0 in ${base.name} encoding`);
    const cid = cache.get(prefix);
    if (cid == null) {
        const cid = base.encode(bytes7).slice(1);
        cache.set(prefix, cid);
        return cid;
    } else return cid;
};
const toStringV1 = (bytes8, cache, base)=>{
    const { prefix  } = base;
    const cid = cache.get(prefix);
    if (cid == null) {
        const cid = base.encode(bytes8);
        cache.set(prefix, cid);
        return cid;
    } else return cid;
};
const DAG_PB_CODE = 112;
const SHA_256_CODE = 18;
const encodeCID = (version7, code, multihash)=>{
    const codeOffset = varint.encodingLength(version7);
    const hashOffset = codeOffset + varint.encodingLength(code);
    const bytes9 = new Uint8Array(hashOffset + multihash.byteLength);
    varint.encodeTo(version7, bytes9, 0);
    varint.encodeTo(code, bytes9, codeOffset);
    bytes9.set(multihash, hashOffset);
    return bytes9;
};
const cidSymbol = Symbol.for('@ipld/js-cid/CID');
const readonly = {
    writable: false,
    configurable: false,
    enumerable: true
};
const hidden = {
    writable: false,
    enumerable: false,
    configurable: false
};
const version = '0.0.0-dev';
const deprecate = (range, message)=>{
    if (range.test(version)) console.warn(message);
    else throw new Error(message);
};
const IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;
exports.CID = CID;

},{"./varint.js":"8P1F2","./hashes/digest.js":"9JdI8","./bases/base58.js":"9KkrI","./bases/base32.js":"apmz1","./bytes.js":"ent0w"}],"8P1F2":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var varint$1 = require('../vendor/varint.js');
const decode = (data)=>{
    const code = varint$1.decode(data);
    return [
        code,
        varint$1.decode.bytes
    ];
};
const encodeTo = (int, target, offset = 0)=>{
    varint$1.encode(int, target, offset);
    return target;
};
const encodingLength = (int)=>{
    return varint$1.encodingLength(int);
};
exports.decode = decode;
exports.encodeTo = encodeTo;
exports.encodingLength = encodingLength;

},{"../vendor/varint.js":"lYpdI"}],"lYpdI":[function(require,module,exports) {
'use strict';
var encode_1 = encode;
var MSB = 128, REST = 127, MSBALL = ~REST, INT = Math.pow(2, 31);
function encode(num, out, offset) {
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while(num >= INT){
        out[offset++] = num & 255 | MSB;
        num /= 128;
    }
    while(num & MSBALL){
        out[offset++] = num & 255 | MSB;
        num >>>= 7;
    }
    out[offset] = num | 0;
    encode.bytes = offset - oldOffset + 1;
    return out;
}
var decode = read;
var MSB$1 = 128, REST$1 = 127;
function read(buf, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
    do {
        if (counter >= l) {
            read.bytes = 0;
            throw new RangeError('Could not decode varint');
        }
        b = buf[counter++];
        res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
        shift += 7;
    }while (b >= MSB$1)
    read.bytes = counter - offset;
    return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function(value) {
    return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
    encode: encode_1,
    decode: decode,
    encodingLength: length
};
var _brrp_varint = varint;
var varint$1 = _brrp_varint;
module.exports = varint$1;

},{}],"9JdI8":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var bytes = require('../bytes.js');
var varint = require('../varint.js');
const create = (code, digest)=>{
    const size = digest.byteLength;
    const sizeOffset = varint.encodingLength(code);
    const digestOffset = sizeOffset + varint.encodingLength(size);
    const bytes1 = new Uint8Array(digestOffset + size);
    varint.encodeTo(code, bytes1, 0);
    varint.encodeTo(size, bytes1, sizeOffset);
    bytes1.set(digest, digestOffset);
    return new Digest(code, size, digest, bytes1);
};
const decode = (multihash)=>{
    const bytes$1 = bytes.coerce(multihash);
    const [code, sizeOffset] = varint.decode(bytes$1);
    const [size, digestOffset] = varint.decode(bytes$1.subarray(sizeOffset));
    const digest = bytes$1.subarray(sizeOffset + digestOffset);
    if (digest.byteLength !== size) throw new Error('Incorrect length');
    return new Digest(code, size, digest, bytes$1);
};
const equals = (a, b)=>{
    if (a === b) return true;
    else return a.code === b.code && a.size === b.size && bytes.equals(a.bytes, b.bytes);
};
class Digest {
    constructor(code, size, digest, bytes2){
        this.code = code;
        this.size = size;
        this.digest = digest;
        this.bytes = bytes2;
    }
}
exports.Digest = Digest;
exports.create = create;
exports.decode = decode;
exports.equals = equals;

},{"../bytes.js":"ent0w","../varint.js":"8P1F2"}],"ent0w":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
const empty = new Uint8Array(0);
const toHex = (d)=>d.reduce((hex, byte)=>hex + byte.toString(16).padStart(2, '0')
    , '')
;
const fromHex = (hex)=>{
    const hexes = hex.match(/../g);
    return hexes ? new Uint8Array(hexes.map((b)=>parseInt(b, 16)
    )) : empty;
};
const equals = (aa, bb)=>{
    if (aa === bb) return true;
    if (aa.byteLength !== bb.byteLength) return false;
    for(let ii = 0; ii < aa.byteLength; ii++){
        if (aa[ii] !== bb[ii]) return false;
    }
    return true;
};
const coerce = (o)=>{
    if (o instanceof Uint8Array && o.constructor.name === 'Uint8Array') return o;
    if (o instanceof ArrayBuffer) return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    throw new Error('Unknown type, must be binary type');
};
const isBinary = (o)=>o instanceof ArrayBuffer || ArrayBuffer.isView(o)
;
const fromString = (str)=>new TextEncoder().encode(str)
;
const toString = (b)=>new TextDecoder().decode(b)
;
exports.coerce = coerce;
exports.empty = empty;
exports.equals = equals;
exports.fromHex = fromHex;
exports.fromString = fromString;
exports.isBinary = isBinary;
exports.toHex = toHex;
exports.toString = toString;

},{}],"9KkrI":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var base = require('./base.js');
const base58btc = base.baseX({
    name: 'base58btc',
    prefix: 'z',
    alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
});
const base58flickr = base.baseX({
    name: 'base58flickr',
    prefix: 'Z',
    alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
});
exports.base58btc = base58btc;
exports.base58flickr = base58flickr;

},{"./base.js":"j888T"}],"j888T":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var baseX$1 = require('../../vendor/base-x.js');
var bytes = require('../bytes.js');
class Encoder {
    constructor(name, prefix, baseEncode){
        this.name = name;
        this.prefix = prefix;
        this.baseEncode = baseEncode;
    }
    encode(bytes1) {
        if (bytes1 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(bytes1)}`;
        else throw Error('Unknown type, must be binary type');
    }
}
class Decoder {
    constructor(name, prefix, baseDecode){
        this.name = name;
        this.prefix = prefix;
        this.baseDecode = baseDecode;
    }
    decode(text) {
        if (typeof text === 'string') switch(text[0]){
            case this.prefix:
                return this.baseDecode(text.slice(1));
            default:
                throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
        else throw Error('Can only multibase decode strings');
    }
    or(decoder) {
        return or(this, decoder);
    }
}
class ComposedDecoder {
    constructor(decoders){
        this.decoders = decoders;
    }
    or(decoder) {
        return or(this, decoder);
    }
    decode(input) {
        const prefix = input[0];
        const decoder = this.decoders[prefix];
        if (decoder) return decoder.decode(input);
        else throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
}
const or = (left, right)=>new ComposedDecoder({
        ...left.decoders || {
            [left.prefix]: left
        },
        ...right.decoders || {
            [right.prefix]: right
        }
    })
;
class Codec {
    constructor(name, prefix, baseEncode, baseDecode){
        this.name = name;
        this.prefix = prefix;
        this.baseEncode = baseEncode;
        this.baseDecode = baseDecode;
        this.encoder = new Encoder(name, prefix, baseEncode);
        this.decoder = new Decoder(name, prefix, baseDecode);
    }
    encode(input) {
        return this.encoder.encode(input);
    }
    decode(input) {
        return this.decoder.decode(input);
    }
}
const from = ({ name , prefix , encode: encode1 , decode: decode1  })=>new Codec(name, prefix, encode1, decode1)
;
const baseX = ({ prefix , name , alphabet  })=>{
    const { encode: encode2 , decode: decode2  } = baseX$1(alphabet, name);
    return from({
        prefix,
        name,
        encode: encode2,
        decode: (text)=>bytes.coerce(decode2(text))
    });
};
const decode = (string, alphabet, bitsPerChar, name)=>{
    const codes = {
    };
    for(let i = 0; i < alphabet.length; ++i)codes[alphabet[i]] = i;
    let end = string.length;
    while(string[end - 1] === '=')--end;
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer = 0;
    let written = 0;
    for(let i1 = 0; i1 < end; ++i1){
        const value = codes[string[i1]];
        if (value === undefined) throw new SyntaxError(`Non-${name} character`);
        buffer = buffer << bitsPerChar | value;
        bits += bitsPerChar;
        if (bits >= 8) {
            bits -= 8;
            out[written++] = 255 & buffer >> bits;
        }
    }
    if (bits >= bitsPerChar || 255 & buffer << 8 - bits) throw new SyntaxError('Unexpected end of data');
    return out;
};
const encode = (data, alphabet, bitsPerChar)=>{
    const pad = alphabet[alphabet.length - 1] === '=';
    const mask = (1 << bitsPerChar) - 1;
    let out = '';
    let bits = 0;
    let buffer = 0;
    for(let i = 0; i < data.length; ++i){
        buffer = buffer << 8 | data[i];
        bits += 8;
        while(bits > bitsPerChar){
            bits -= bitsPerChar;
            out += alphabet[mask & buffer >> bits];
        }
    }
    if (bits) out += alphabet[mask & buffer << bitsPerChar - bits];
    if (pad) while(out.length * bitsPerChar & 7)out += '=';
    return out;
};
const rfc4648 = ({ name , prefix , bitsPerChar , alphabet  })=>{
    return from({
        prefix,
        name,
        encode (input) {
            return encode(input, alphabet, bitsPerChar);
        },
        decode (input) {
            return decode(input, alphabet, bitsPerChar, name);
        }
    });
};
exports.Codec = Codec;
exports.baseX = baseX;
exports.from = from;
exports.or = or;
exports.rfc4648 = rfc4648;

},{"../../vendor/base-x.js":"bPHFa","../bytes.js":"ent0w"}],"bPHFa":[function(require,module,exports) {
'use strict';
function base(ALPHABET, name) {
    if (ALPHABET.length >= 255) throw new TypeError('Alphabet too long');
    var BASE_MAP = new Uint8Array(256);
    for(var j = 0; j < BASE_MAP.length; j++)BASE_MAP[j] = 255;
    for(var i1 = 0; i1 < ALPHABET.length; i1++){
        var x = ALPHABET.charAt(i1);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) throw new TypeError(x + ' is ambiguous');
        BASE_MAP[xc] = i1;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode(source) {
        if (source instanceof Uint8Array) ;
        else if (ArrayBuffer.isView(source)) source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        else if (Array.isArray(source)) source = Uint8Array.from(source);
        if (!(source instanceof Uint8Array)) throw new TypeError('Expected Uint8Array');
        if (source.length === 0) return '';
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        while(pbegin !== pend){
            var carry = source[pbegin];
            var i = 0;
            for(var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) throw new Error('Non-zero carry');
            length = i;
            pbegin++;
        }
        var it2 = size - length;
        while(it2 !== size && b58[it2] === 0)it2++;
        var str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2)str += ALPHABET.charAt(b58[it2]);
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== 'string') throw new TypeError('Expected String');
        if (source.length === 0) return new Uint8Array();
        var psz = 0;
        if (source[psz] === ' ') return;
        var zeroes = 0;
        var length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        var size = (source.length - psz) * FACTOR + 1 >>> 0;
        var b256 = new Uint8Array(size);
        while(source[psz]){
            var carry = BASE_MAP[source.charCodeAt(psz)];
            if (carry === 255) return;
            var i = 0;
            for(var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) throw new Error('Non-zero carry');
            length = i;
            psz++;
        }
        if (source[psz] === ' ') return;
        var it4 = size - length;
        while(it4 !== size && b256[it4] === 0)it4++;
        var vch = new Uint8Array(zeroes + (size - it4));
        var j = zeroes;
        while(it4 !== size)vch[j++] = b256[it4++];
        return vch;
    }
    function decode(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) return buffer;
        throw new Error(`Non-${name} character`);
    }
    return {
        encode: encode,
        decodeUnsafe: decodeUnsafe,
        decode: decode
    };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
module.exports = _brrp__multiformats_scope_baseX;

},{}],"apmz1":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var base = require('./base.js');
const base32 = base.rfc4648({
    prefix: 'b',
    name: 'base32',
    alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
    bitsPerChar: 5
});
const base32upper = base.rfc4648({
    prefix: 'B',
    name: 'base32upper',
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
    bitsPerChar: 5
});
const base32pad = base.rfc4648({
    prefix: 'c',
    name: 'base32pad',
    alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
    bitsPerChar: 5
});
const base32padupper = base.rfc4648({
    prefix: 'C',
    name: 'base32padupper',
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
    bitsPerChar: 5
});
const base32hex = base.rfc4648({
    prefix: 'v',
    name: 'base32hex',
    alphabet: '0123456789abcdefghijklmnopqrstuv',
    bitsPerChar: 5
});
const base32hexupper = base.rfc4648({
    prefix: 'V',
    name: 'base32hexupper',
    alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
    bitsPerChar: 5
});
const base32hexpad = base.rfc4648({
    prefix: 't',
    name: 'base32hexpad',
    alphabet: '0123456789abcdefghijklmnopqrstuv=',
    bitsPerChar: 5
});
const base32hexpadupper = base.rfc4648({
    prefix: 'T',
    name: 'base32hexpadupper',
    alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
    bitsPerChar: 5
});
const base32z = base.rfc4648({
    prefix: 'h',
    name: 'base32z',
    alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
    bitsPerChar: 5
});
exports.base32 = base32;
exports.base32hex = base32hex;
exports.base32hexpad = base32hexpad;
exports.base32hexpadupper = base32hexpadupper;
exports.base32hexupper = base32hexupper;
exports.base32pad = base32pad;
exports.base32padupper = base32padupper;
exports.base32upper = base32upper;
exports.base32z = base32z;

},{"./base.js":"j888T"}],"9UzX5":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
const textDecoder = new TextDecoder();
function decodeVarint(bytes, offset) {
    let v = 0;
    for(let shift = 0;; shift += 7){
        if (shift >= 64) throw new Error('protobuf: varint overflow');
        if (offset >= bytes.length) throw new Error('protobuf: unexpected end of data');
        const b = bytes[offset++];
        v += shift < 28 ? (b & 127) << shift : (b & 127) * 2 ** shift;
        if (b < 128) break;
    }
    return [
        v,
        offset
    ];
}
function decodeBytes(bytes, offset) {
    let byteLen;
    [byteLen, offset] = decodeVarint(bytes, offset);
    const postOffset = offset + byteLen;
    if (byteLen < 0 || postOffset < 0) throw new Error('protobuf: invalid length');
    if (postOffset > bytes.length) throw new Error('protobuf: unexpected end of data');
    return [
        bytes.subarray(offset, postOffset),
        postOffset
    ];
}
function decodeKey(bytes, index) {
    let wire;
    [wire, index] = decodeVarint(bytes, index);
    return [
        wire & 7,
        wire >> 3,
        index
    ];
}
function decodeLink(bytes) {
    const link = {
    };
    const l = bytes.length;
    let index = 0;
    while(index < l){
        let wireType, fieldNum;
        [wireType, fieldNum, index] = decodeKey(bytes, index);
        if (fieldNum === 1) {
            if (link.Hash) throw new Error('protobuf: (PBLink) duplicate Hash section');
            if (wireType !== 2) throw new Error(`protobuf: (PBLink) wrong wireType (${wireType}) for Hash`);
            if (link.Name !== undefined) throw new Error('protobuf: (PBLink) invalid order, found Name before Hash');
            if (link.Tsize !== undefined) throw new Error('protobuf: (PBLink) invalid order, found Tsize before Hash');
            [link.Hash, index] = decodeBytes(bytes, index);
        } else if (fieldNum === 2) {
            if (link.Name !== undefined) throw new Error('protobuf: (PBLink) duplicate Name section');
            if (wireType !== 2) throw new Error(`protobuf: (PBLink) wrong wireType (${wireType}) for Name`);
            if (link.Tsize !== undefined) throw new Error('protobuf: (PBLink) invalid order, found Tsize before Name');
            let byts;
            [byts, index] = decodeBytes(bytes, index);
            link.Name = textDecoder.decode(byts);
        } else if (fieldNum === 3) {
            if (link.Tsize !== undefined) throw new Error('protobuf: (PBLink) duplicate Tsize section');
            if (wireType !== 0) throw new Error(`protobuf: (PBLink) wrong wireType (${wireType}) for Tsize`);
            [link.Tsize, index] = decodeVarint(bytes, index);
        } else throw new Error(`protobuf: (PBLink) invalid fieldNumber, expected 1, 2 or 3, got ${fieldNum}`);
    }
    if (index > l) throw new Error('protobuf: (PBLink) unexpected end of data');
    return link;
}
function decodeNode(bytes) {
    const l = bytes.length;
    let index = 0;
    let links;
    let linksBeforeData = false;
    let data;
    while(index < l){
        let wireType, fieldNum;
        [wireType, fieldNum, index] = decodeKey(bytes, index);
        if (wireType !== 2) throw new Error(`protobuf: (PBNode) invalid wireType, expected 2, got ${wireType}`);
        if (fieldNum === 1) {
            if (data) throw new Error('protobuf: (PBNode) duplicate Data section');
            [data, index] = decodeBytes(bytes, index);
            if (links) linksBeforeData = true;
        } else if (fieldNum === 2) {
            if (linksBeforeData) throw new Error('protobuf: (PBNode) duplicate Links section');
            else if (!links) links = [];
            let byts;
            [byts, index] = decodeBytes(bytes, index);
            links.push(decodeLink(byts));
        } else throw new Error(`protobuf: (PBNode) invalid fieldNumber, expected 1 or 2, got ${fieldNum}`);
    }
    if (index > l) throw new Error('protobuf: (PBNode) unexpected end of data');
    const node = {
    };
    if (data) node.Data = data;
    node.Links = links || [];
    return node;
}
exports.decodeNode = decodeNode;

},{}],"x0sg5":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
const textEncoder = new TextEncoder();
const maxInt32 = 2 ** 32;
const maxUInt32 = 2 ** 31;
function encodeLink(link, bytes) {
    let i = bytes.length;
    if (typeof link.Tsize === 'number') {
        if (link.Tsize < 0) throw new Error('Tsize cannot be negative');
        if (!Number.isSafeInteger(link.Tsize)) throw new Error('Tsize too large for encoding');
        i = encodeVarint(bytes, i, link.Tsize) - 1;
        bytes[i] = 24;
    }
    if (typeof link.Name === 'string') {
        const nameBytes = textEncoder.encode(link.Name);
        i -= nameBytes.length;
        bytes.set(nameBytes, i);
        i = encodeVarint(bytes, i, nameBytes.length) - 1;
        bytes[i] = 18;
    }
    if (link.Hash) {
        i -= link.Hash.length;
        bytes.set(link.Hash, i);
        i = encodeVarint(bytes, i, link.Hash.length) - 1;
        bytes[i] = 10;
    }
    return bytes.length - i;
}
function encodeNode(node) {
    const size = sizeNode(node);
    const bytes = new Uint8Array(size);
    let i = size;
    if (node.Data) {
        i -= node.Data.length;
        bytes.set(node.Data, i);
        i = encodeVarint(bytes, i, node.Data.length) - 1;
        bytes[i] = 10;
    }
    if (node.Links) for(let index = node.Links.length - 1; index >= 0; index--){
        const size = encodeLink(node.Links[index], bytes.subarray(0, i));
        i -= size;
        i = encodeVarint(bytes, i, size) - 1;
        bytes[i] = 18;
    }
    return bytes;
}
function sizeLink(link) {
    let n = 0;
    if (link.Hash) {
        const l = link.Hash.length;
        n += 1 + l + sov(l);
    }
    if (typeof link.Name === 'string') {
        const l = textEncoder.encode(link.Name).length;
        n += 1 + l + sov(l);
    }
    if (typeof link.Tsize === 'number') n += 1 + sov(link.Tsize);
    return n;
}
function sizeNode(node) {
    let n = 0;
    if (node.Data) {
        const l = node.Data.length;
        n += 1 + l + sov(l);
    }
    if (node.Links) for (const link of node.Links){
        const l = sizeLink(link);
        n += 1 + l + sov(l);
    }
    return n;
}
function encodeVarint(bytes, offset, v) {
    offset -= sov(v);
    const base = offset;
    while(v >= maxUInt32){
        bytes[offset++] = v & 127 | 128;
        v /= 128;
    }
    while(v >= 128){
        bytes[offset++] = v & 127 | 128;
        v >>>= 7;
    }
    bytes[offset] = v;
    return base;
}
function sov(x) {
    if (x % 2 === 0) x++;
    return Math.floor((len64(x) + 6) / 7);
}
function len64(x) {
    let n = 0;
    if (x >= maxInt32) {
        x = Math.floor(x / maxInt32);
        n = 32;
    }
    if (x >= 65536) {
        x >>>= 16;
        n += 16;
    }
    if (x >= 256) {
        x >>>= 8;
        n += 8;
    }
    return n + len8tab[x];
}
const len8tab = [
    0,
    1,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8
];
exports.encodeNode = encodeNode;

},{}],"2HxTA":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
const pbNodeProperties = [
    'Data',
    'Links'
];
const pbLinkProperties = [
    'Hash',
    'Name',
    'Tsize'
];
const textEncoder = new TextEncoder();
function linkComparator(a, b) {
    if (a === b) return 0;
    const abuf = a.Name ? textEncoder.encode(a.Name) : [];
    const bbuf = b.Name ? textEncoder.encode(b.Name) : [];
    let x = abuf.length;
    let y = bbuf.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (abuf[i] !== bbuf[i]) {
        x = abuf[i];
        y = bbuf[i];
        break;
    }
    return x < y ? -1 : y < x ? 1 : 0;
}
function hasOnlyProperties(node, properties) {
    return !Object.keys(node).some((p)=>!properties.includes(p)
    );
}
function asLink(link) {
    if (typeof link.asCID === 'object') {
        const Hash = cid.CID.asCID(link);
        if (!Hash) throw new TypeError('Invalid DAG-PB form');
        return {
            Hash
        };
    }
    if (typeof link !== 'object' || Array.isArray(link)) throw new TypeError('Invalid DAG-PB form');
    const pbl = {
    };
    if (link.Hash) {
        let cid$1 = cid.CID.asCID(link.Hash);
        try {
            if (!cid$1) {
                if (typeof link.Hash === 'string') cid$1 = cid.CID.parse(link.Hash);
                else if (link.Hash instanceof Uint8Array) cid$1 = cid.CID.decode(link.Hash);
            }
        } catch (e) {
            throw new TypeError(`Invalid DAG-PB form: ${e.message}`);
        }
        if (cid$1) pbl.Hash = cid$1;
    }
    if (!pbl.Hash) throw new TypeError('Invalid DAG-PB form');
    if (typeof link.Name === 'string') pbl.Name = link.Name;
    if (typeof link.Tsize === 'number') pbl.Tsize = link.Tsize;
    return pbl;
}
function prepare(node) {
    if (node instanceof Uint8Array || typeof node === 'string') node = {
        Data: node
    };
    if (typeof node !== 'object' || Array.isArray(node)) throw new TypeError('Invalid DAG-PB form');
    const pbn = {
    };
    if (node.Data !== undefined) {
        if (typeof node.Data === 'string') pbn.Data = textEncoder.encode(node.Data);
        else if (node.Data instanceof Uint8Array) pbn.Data = node.Data;
        else throw new TypeError('Invalid DAG-PB form');
    }
    if (node.Links !== undefined) {
        if (Array.isArray(node.Links)) {
            pbn.Links = node.Links.map(asLink);
            pbn.Links.sort(linkComparator);
        } else throw new TypeError('Invalid DAG-PB form');
    } else pbn.Links = [];
    return pbn;
}
function validate(node) {
    if (!node || typeof node !== 'object' || Array.isArray(node)) throw new TypeError('Invalid DAG-PB form');
    if (!hasOnlyProperties(node, pbNodeProperties)) throw new TypeError('Invalid DAG-PB form (extraneous properties)');
    if (node.Data !== undefined && !(node.Data instanceof Uint8Array)) throw new TypeError('Invalid DAG-PB form (Data must be a Uint8Array)');
    if (!Array.isArray(node.Links)) throw new TypeError('Invalid DAG-PB form (Links must be an array)');
    for(let i = 0; i < node.Links.length; i++){
        const link = node.Links[i];
        if (!link || typeof link !== 'object' || Array.isArray(link)) throw new TypeError('Invalid DAG-PB form (bad link object)');
        if (!hasOnlyProperties(link, pbLinkProperties)) throw new TypeError('Invalid DAG-PB form (extraneous properties on link object)');
        if (!link.Hash) throw new TypeError('Invalid DAG-PB form (link must have a Hash)');
        if (link.Hash.asCID !== link.Hash) throw new TypeError('Invalid DAG-PB form (link Hash must be a CID)');
        if (link.Name !== undefined && typeof link.Name !== 'string') throw new TypeError('Invalid DAG-PB form (link Name must be a string)');
        if (link.Tsize !== undefined && (typeof link.Tsize !== 'number' || link.Tsize % 1 !== 0)) throw new TypeError('Invalid DAG-PB form (link Tsize must be an integer)');
        if (i > 0 && linkComparator(link, node.Links[i - 1]) === -1) throw new TypeError('Invalid DAG-PB form (links must be sorted by Name bytes)');
    }
}
function createNode(data, links = []) {
    return prepare({
        Data: data,
        Links: links
    });
}
function createLink(name, size, cid1) {
    return asLink({
        Hash: cid1,
        Name: name,
        Tsize: size
    });
}
exports.createLink = createLink;
exports.createNode = createNode;
exports.prepare = prepare;
exports.validate = validate;

},{"multiformats/cid":"4uoBU"}],"aY7XS":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cborg = require('cborg');
var cid = require('multiformats/cid');
function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) Object.keys(e).forEach(function(k) {
        if (k !== 'default') {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
                enumerable: true,
                get: function() {
                    return e[k];
                }
            });
        }
    });
    n["default"] = e;
    return Object.freeze(n);
}
var cborg__namespace = /*#__PURE__*/ _interopNamespace(cborg);
const CID_CBOR_TAG = 42;
function cidEncoder(obj) {
    if (obj.asCID !== obj) return null;
    const cid$1 = cid.CID.asCID(obj);
    if (!cid$1) return null;
    const bytes = new Uint8Array(cid$1.bytes.byteLength + 1);
    bytes.set(cid$1.bytes, 1);
    return [
        new cborg__namespace.Token(cborg__namespace.Type.tag, CID_CBOR_TAG),
        new cborg__namespace.Token(cborg__namespace.Type.bytes, bytes)
    ];
}
function undefinedEncoder() {
    throw new Error('`undefined` is not supported by the IPLD Data Model and cannot be encoded');
}
function numberEncoder(num) {
    if (Number.isNaN(num)) throw new Error('`NaN` is not supported by the IPLD Data Model and cannot be encoded');
    if (num === Infinity || num === -Infinity) throw new Error('`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded');
    return null;
}
const encodeOptions = {
    float64: true,
    typeEncoders: {
        Object: cidEncoder,
        undefined: undefinedEncoder,
        number: numberEncoder
    }
};
function cidDecoder(bytes) {
    if (bytes[0] !== 0) throw new Error('Invalid CID for CBOR tag 42; expected leading 0x00');
    return cid.CID.decode(bytes.subarray(1));
}
const decodeOptions = {
    allowIndefinite: false,
    coerceUndefinedToNull: true,
    allowNaN: false,
    allowInfinity: false,
    allowBigInt: true,
    strict: true,
    useMaps: false,
    tags: []
};
decodeOptions.tags[CID_CBOR_TAG] = cidDecoder;
const name = 'dag-cbor';
const code = 113;
const encode = (node)=>cborg__namespace.encode(node, encodeOptions)
;
const decode = (data)=>cborg__namespace.decode(data, decodeOptions)
;
exports.code = code;
exports.decode = decode;
exports.encode = encode;
exports.name = name;

},{"cborg":"4nFLw","multiformats/cid":"4uoBU"}],"4nFLw":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var encode = require('./lib/encode.js');
var decode = require('./lib/decode.js');
var token = require('./lib/token.js');
exports.encode = encode.encode;
exports.decode = decode.decode;
exports.Token = token.Token;
exports.Type = token.Type;

},{"./lib/encode.js":"cDKWO","./lib/decode.js":"iQNJQ","./lib/token.js":"hzdrM"}],"cDKWO":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var is = require('./is.js');
var token = require('./token.js');
var bl = require('./bl.js');
var common = require('./common.js');
var jump = require('./jump.js');
var byteUtils = require('./byte-utils.js');
var _0uint = require('./0uint.js');
var _1negint = require('./1negint.js');
var _2bytes = require('./2bytes.js');
var _3string = require('./3string.js');
var _4array = require('./4array.js');
var _5map = require('./5map.js');
var _6tag = require('./6tag.js');
var _7float = require('./7float.js');
const defaultEncodeOptions = {
    float64: false,
    mapSorter,
    quickEncodeToken: jump.quickEncodeToken
};
const cborEncoders = [];
cborEncoders[token.Type.uint.major] = _0uint.encodeUint;
cborEncoders[token.Type.negint.major] = _1negint.encodeNegint;
cborEncoders[token.Type.bytes.major] = _2bytes.encodeBytes;
cborEncoders[token.Type.string.major] = _3string.encodeString;
cborEncoders[token.Type.array.major] = _4array.encodeArray;
cborEncoders[token.Type.map.major] = _5map.encodeMap;
cborEncoders[token.Type.tag.major] = _6tag.encodeTag;
cborEncoders[token.Type.float.major] = _7float.encodeFloat;
const buf = new bl.Bl();
class Ref {
    constructor(obj, parent){
        this.obj = obj;
        this.parent = parent;
    }
    includes(obj) {
        let p = this;
        do {
            if (p.obj === obj) return true;
        }while (p = p.parent)
        return false;
    }
    static createCheck(stack, obj) {
        if (stack && stack.includes(obj)) throw new Error(`${common.encodeErrPrefix} object contains circular references`);
        return new Ref(obj, stack);
    }
}
const simpleTokens = {
    null: new token.Token(token.Type.null, null),
    undefined: new token.Token(token.Type.undefined, undefined),
    true: new token.Token(token.Type.true, true),
    false: new token.Token(token.Type.false, false),
    emptyArray: new token.Token(token.Type.array, 0),
    emptyMap: new token.Token(token.Type.map, 0)
};
const typeEncoders = {
    number (obj, _typ, _options, _refStack) {
        if (!Number.isInteger(obj) || !Number.isSafeInteger(obj)) return new token.Token(token.Type.float, obj);
        else if (obj >= 0) return new token.Token(token.Type.uint, obj);
        else return new token.Token(token.Type.negint, obj);
    },
    bigint (obj, _typ, _options, _refStack) {
        if (obj >= BigInt(0)) return new token.Token(token.Type.uint, obj);
        else return new token.Token(token.Type.negint, obj);
    },
    Uint8Array (obj, _typ, _options, _refStack) {
        return new token.Token(token.Type.bytes, obj);
    },
    string (obj, _typ, _options, _refStack) {
        return new token.Token(token.Type.string, obj);
    },
    boolean (obj, _typ, _options, _refStack) {
        return obj ? simpleTokens.true : simpleTokens.false;
    },
    null (_obj, _typ, _options, _refStack) {
        return simpleTokens.null;
    },
    undefined (_obj, _typ, _options, _refStack) {
        return simpleTokens.undefined;
    },
    ArrayBuffer (obj, _typ, _options, _refStack) {
        return new token.Token(token.Type.bytes, new Uint8Array(obj));
    },
    DataView (obj, _typ, _options, _refStack) {
        return new token.Token(token.Type.bytes, new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength));
    },
    Array (obj, _typ, options, refStack) {
        if (!obj.length) {
            if (options.addBreakTokens === true) return [
                simpleTokens.emptyArray,
                new token.Token(token.Type.break)
            ];
            return simpleTokens.emptyArray;
        }
        refStack = Ref.createCheck(refStack, obj);
        const entries = [];
        let i = 0;
        for (const e of obj)entries[i++] = objectToTokens(e, options, refStack);
        if (options.addBreakTokens) return [
            new token.Token(token.Type.array, obj.length),
            entries,
            new token.Token(token.Type.break)
        ];
        return [
            new token.Token(token.Type.array, obj.length),
            entries
        ];
    },
    Object (obj, typ1, options, refStack) {
        const isMap = typ1 !== 'Object';
        const keys = isMap ? obj.keys() : Object.keys(obj);
        const length = isMap ? obj.size : keys.length;
        if (!length) {
            if (options.addBreakTokens === true) return [
                simpleTokens.emptyMap,
                new token.Token(token.Type.break)
            ];
            return simpleTokens.emptyMap;
        }
        refStack = Ref.createCheck(refStack, obj);
        const entries = [];
        let i = 0;
        for (const key of keys)entries[i++] = [
            objectToTokens(key, options, refStack),
            objectToTokens(isMap ? obj.get(key) : obj[key], options, refStack)
        ];
        sortMapEntries(entries, options);
        if (options.addBreakTokens) return [
            new token.Token(token.Type.map, length),
            entries,
            new token.Token(token.Type.break)
        ];
        return [
            new token.Token(token.Type.map, length),
            entries
        ];
    }
};
typeEncoders.Map = typeEncoders.Object;
typeEncoders.Buffer = typeEncoders.Uint8Array;
for (const typ of 'Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64'.split(' '))typeEncoders[`${typ}Array`] = typeEncoders.DataView;
function objectToTokens(obj, options = {
}, refStack) {
    const typ2 = is.is(obj);
    const customTypeEncoder = options && options.typeEncoders && options.typeEncoders[typ2] || typeEncoders[typ2];
    if (typeof customTypeEncoder === 'function') {
        const tokens = customTypeEncoder(obj, typ2, options, refStack);
        if (tokens != null) return tokens;
    }
    const typeEncoder = typeEncoders[typ2];
    if (!typeEncoder) throw new Error(`${common.encodeErrPrefix} unsupported type: ${typ2}`);
    return typeEncoder(obj, typ2, options, refStack);
}
function sortMapEntries(entries, options) {
    if (options.mapSorter) entries.sort(options.mapSorter);
}
function mapSorter(e1, e2) {
    const keyToken1 = Array.isArray(e1[0]) ? e1[0][0] : e1[0];
    const keyToken2 = Array.isArray(e2[0]) ? e2[0][0] : e2[0];
    if (keyToken1.type !== keyToken2.type) return keyToken1.type.compare(keyToken2.type);
    const major = keyToken1.type.major;
    const tcmp = cborEncoders[major].compareTokens(keyToken1, keyToken2);
    if (tcmp === 0) console.warn('WARNING: complex key types used, CBOR key sorting guarantees are gone');
    return tcmp;
}
function tokensToEncoded(buf1, tokens, encoders, options) {
    if (Array.isArray(tokens)) for (const token1 of tokens)tokensToEncoded(buf1, token1, encoders, options);
    else encoders[tokens.type.major](buf1, tokens, options);
}
function encodeCustom(data, encoders, options) {
    const tokens = objectToTokens(data, options);
    if (!Array.isArray(tokens) && options.quickEncodeToken) {
        const quickBytes = options.quickEncodeToken(tokens);
        if (quickBytes) return quickBytes;
        const encoder = encoders[tokens.type.major];
        if (encoder.encodedSize) {
            const size = encoder.encodedSize(tokens, options);
            const buf2 = new bl.Bl(size);
            encoder(buf2, tokens, options);
            if (buf2.chunks.length !== 1) throw new Error(`Unexpected error: pre-calculated length for ${tokens} was wrong`);
            return byteUtils.asU8A(buf2.chunks[0]);
        }
    }
    tokensToEncoded(buf, tokens, encoders, options);
    return buf.toBytes(true);
}
function encode(data, options) {
    options = Object.assign({
    }, defaultEncodeOptions, options);
    return encodeCustom(data, cborEncoders, options);
}
exports.Ref = Ref;
exports.encode = encode;
exports.encodeCustom = encodeCustom;
exports.objectToTokens = objectToTokens;

},{"./is.js":"8Ht5V","./token.js":"hzdrM","./bl.js":"cdIGN","./common.js":"f327c","./jump.js":"buBgp","./byte-utils.js":"109Ms","./0uint.js":"iCSRX","./1negint.js":"1ywF4","./2bytes.js":"9n2FT","./3string.js":"g24Ir","./4array.js":"6iaEl","./5map.js":"ltm09","./6tag.js":"94X8w","./7float.js":"7EK5E"}],"8Ht5V":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
const typeofs = [
    'string',
    'number',
    'bigint',
    'symbol'
];
const objectTypeNames = [
    'Function',
    'Generator',
    'AsyncGenerator',
    'GeneratorFunction',
    'AsyncGeneratorFunction',
    'AsyncFunction',
    'Observable',
    'Array',
    'Buffer',
    'Object',
    'RegExp',
    'Date',
    'Error',
    'Map',
    'Set',
    'WeakMap',
    'WeakSet',
    'ArrayBuffer',
    'SharedArrayBuffer',
    'DataView',
    'Promise',
    'URL',
    'HTMLElement',
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array',
    'BigInt64Array',
    'BigUint64Array'
];
function is(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (value === true || value === false) return 'boolean';
    const typeOf = typeof value;
    if (typeofs.includes(typeOf)) return typeOf;
    if (typeOf === 'function') return 'Function';
    if (Array.isArray(value)) return 'Array';
    if (isBuffer(value)) return 'Buffer';
    const objectType = getObjectType(value);
    if (objectType) return objectType;
    return 'Object';
}
function isBuffer(value) {
    return value && value.constructor && value.constructor.isBuffer && value.constructor.isBuffer.call(null, value);
}
function getObjectType(value) {
    const objectTypeName = Object.prototype.toString.call(value).slice(8, -1);
    if (objectTypeNames.includes(objectTypeName)) return objectTypeName;
    return undefined;
}
exports.is = is;

},{}],"hzdrM":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
class Type {
    constructor(major, name, terminal){
        this.major = major;
        this.majorEncoded = major << 5;
        this.name = name;
        this.terminal = terminal;
    }
    toString() {
        return `Type[${this.major}].${this.name}`;
    }
    compare(typ) {
        return this.major < typ.major ? -1 : this.major > typ.major ? 1 : 0;
    }
}
Type.uint = new Type(0, 'uint', true);
Type.negint = new Type(1, 'negint', true);
Type.bytes = new Type(2, 'bytes', true);
Type.string = new Type(3, 'string', true);
Type.array = new Type(4, 'array', false);
Type.map = new Type(5, 'map', false);
Type.tag = new Type(6, 'tag', false);
Type.float = new Type(7, 'float', true);
Type.false = new Type(7, 'false', true);
Type.true = new Type(7, 'true', true);
Type.null = new Type(7, 'null', true);
Type.undefined = new Type(7, 'undefined', true);
Type.break = new Type(7, 'break', true);
class Token {
    constructor(type, value, encodedLength){
        this.type = type;
        this.value = value;
        this.encodedLength = encodedLength;
        this.encodedBytes = undefined;
        this.byteValue = undefined;
    }
    toString() {
        return `Token[${this.type}].${this.value}`;
    }
}
exports.Token = Token;
exports.Type = Type;

},{}],"cdIGN":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var byteUtils = require('./byte-utils.js');
const defaultChunkSize = 256;
class Bl {
    constructor(chunkSize = defaultChunkSize){
        this.chunkSize = chunkSize;
        this.cursor = 0;
        this.maxCursor = -1;
        this.chunks = [];
        this._initReuseChunk = null;
    }
    reset() {
        this.chunks = [];
        this.cursor = 0;
        this.maxCursor = -1;
        if (this._initReuseChunk !== null) {
            this.chunks.push(this._initReuseChunk);
            this.maxCursor = this._initReuseChunk.length - 1;
        }
    }
    push(bytes) {
        let topChunk = this.chunks[this.chunks.length - 1];
        const newMax = this.cursor + bytes.length;
        if (newMax <= this.maxCursor + 1) {
            const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
            topChunk.set(bytes, chunkPos);
        } else {
            if (topChunk) {
                const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
                if (chunkPos < topChunk.length) {
                    this.chunks[this.chunks.length - 1] = topChunk.subarray(0, chunkPos);
                    this.maxCursor = this.cursor - 1;
                }
            }
            if (bytes.length < 64 && bytes.length < this.chunkSize) {
                topChunk = byteUtils.alloc(this.chunkSize);
                this.chunks.push(topChunk);
                this.maxCursor += topChunk.length;
                if (this._initReuseChunk === null) this._initReuseChunk = topChunk;
                topChunk.set(bytes, 0);
            } else {
                this.chunks.push(bytes);
                this.maxCursor += bytes.length;
            }
        }
        this.cursor += bytes.length;
    }
    toBytes(reset = false) {
        let byts;
        if (this.chunks.length === 1) {
            const chunk = this.chunks[0];
            if (reset && this.cursor > chunk.length / 2) {
                byts = this.cursor === chunk.length ? chunk : chunk.subarray(0, this.cursor);
                this._initReuseChunk = null;
                this.chunks = [];
            } else byts = byteUtils.slice(chunk, 0, this.cursor);
        } else byts = byteUtils.concat(this.chunks, this.cursor);
        if (reset) this.reset();
        return byts;
    }
}
exports.Bl = Bl;

},{"./byte-utils.js":"109Ms"}],"109Ms":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
const useBuffer = globalThis.process && !globalThis.process.browser && globalThis.Buffer && typeof globalThis.Buffer.isBuffer === 'function';
const textDecoder = new TextDecoder();
const textEncoder = new TextEncoder();
function isBuffer(buf) {
    return useBuffer && globalThis.Buffer.isBuffer(buf);
}
function asU8A(buf) {
    if (!(buf instanceof Uint8Array)) return Uint8Array.from(buf);
    return isBuffer(buf) ? new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength) : buf;
}
const toString = useBuffer ? (bytes, start, end)=>{
    return end - start > 64 ? globalThis.Buffer.from(bytes.subarray(start, end)).toString('utf8') : utf8Slice(bytes, start, end);
} : (bytes, start, end)=>{
    return end - start > 64 ? textDecoder.decode(bytes.subarray(start, end)) : utf8Slice(bytes, start, end);
};
const fromString = useBuffer ? (string)=>{
    return string.length > 64 ? globalThis.Buffer.from(string) : utf8ToBytes(string);
} : (string)=>{
    return string.length > 64 ? textEncoder.encode(string) : utf8ToBytes(string);
};
const fromArray = (arr)=>{
    return Uint8Array.from(arr);
};
const slice = useBuffer ? (bytes, start, end)=>{
    if (isBuffer(bytes)) return new Uint8Array(bytes.subarray(start, end));
    return bytes.slice(start, end);
} : (bytes, start, end)=>{
    return bytes.slice(start, end);
};
const concat = useBuffer ? (chunks, length)=>{
    chunks = chunks.map((c)=>c instanceof Uint8Array ? c : globalThis.Buffer.from(c)
    );
    return asU8A(globalThis.Buffer.concat(chunks, length));
} : (chunks, length)=>{
    const out = new Uint8Array(length);
    let off = 0;
    for (let b of chunks){
        if (off + b.length > out.length) b = b.subarray(0, out.length - off);
        out.set(b, off);
        off += b.length;
    }
    return out;
};
const alloc = useBuffer ? (size)=>{
    return globalThis.Buffer.allocUnsafe(size);
} : (size)=>{
    return new Uint8Array(size);
};
const toHex = useBuffer ? (d)=>{
    if (typeof d === 'string') return d;
    return globalThis.Buffer.from(toBytes(d)).toString('hex');
} : (d)=>{
    if (typeof d === 'string') return d;
    return Array.prototype.reduce.call(toBytes(d), (p, c)=>`${p}${c.toString(16).padStart(2, '0')}`
    , '');
};
const fromHex = useBuffer ? (hex)=>{
    if (hex instanceof Uint8Array) return hex;
    return globalThis.Buffer.from(hex, 'hex');
} : (hex)=>{
    if (hex instanceof Uint8Array) return hex;
    if (!hex.length) return new Uint8Array(0);
    return new Uint8Array(hex.split('').map((c, i, d)=>i % 2 === 0 ? `0x${c}${d[i + 1]}` : ''
    ).filter(Boolean).map((e)=>parseInt(e, 16)
    ));
};
function toBytes(obj) {
    if (obj instanceof Uint8Array && obj.constructor.name === 'Uint8Array') return obj;
    if (obj instanceof ArrayBuffer) return new Uint8Array(obj);
    if (ArrayBuffer.isView(obj)) return new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength);
    throw new Error('Unknown type, must be binary type');
}
function compare(b1, b2) {
    if (isBuffer(b1) && isBuffer(b2)) return b1.compare(b2);
    for(let i = 0; i < b1.length; i++){
        if (b1[i] === b2[i]) continue;
        return b1[i] < b2[i] ? -1 : 1;
    }
    return 0;
}
function utf8ToBytes(string, units = Infinity) {
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
                if (codePoint > 56319) {
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                leadSurrogate = codePoint;
                continue;
            }
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function utf8Slice(buf, offset, end) {
    const res = [];
    while(offset < end){
        const firstByte = buf[offset];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (offset + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[offset + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[offset + 1];
                    thirdByte = buf[offset + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[offset + 1];
                    thirdByte = buf[offset + 2];
                    fourthByte = buf[offset + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        offset += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
const MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
    let res = '';
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
exports.alloc = alloc;
exports.asU8A = asU8A;
exports.compare = compare;
exports.concat = concat;
exports.decodeCodePointsArray = decodeCodePointsArray;
exports.fromArray = fromArray;
exports.fromHex = fromHex;
exports.fromString = fromString;
exports.slice = slice;
exports.toHex = toHex;
exports.toString = toString;
exports.useBuffer = useBuffer;

},{}],"f327c":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
const decodeErrPrefix = 'CBOR decode error:';
const encodeErrPrefix = 'CBOR encode error:';
const uintMinorPrefixBytes = [];
uintMinorPrefixBytes[23] = 1;
uintMinorPrefixBytes[24] = 2;
uintMinorPrefixBytes[25] = 3;
uintMinorPrefixBytes[26] = 5;
uintMinorPrefixBytes[27] = 9;
function assertEnoughData(data, pos, need) {
    if (data.length - pos < need) throw new Error(`${decodeErrPrefix} not enough data for type`);
}
exports.assertEnoughData = assertEnoughData;
exports.decodeErrPrefix = decodeErrPrefix;
exports.encodeErrPrefix = encodeErrPrefix;
exports.uintMinorPrefixBytes = uintMinorPrefixBytes;

},{}],"buBgp":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var token = require('./token.js');
var _0uint = require('./0uint.js');
var _1negint = require('./1negint.js');
var _2bytes = require('./2bytes.js');
var _3string = require('./3string.js');
var _4array = require('./4array.js');
var _5map = require('./5map.js');
var _6tag = require('./6tag.js');
var _7float = require('./7float.js');
var common = require('./common.js');
var byteUtils = require('./byte-utils.js');
function invalidMinor(data, pos, minor) {
    throw new Error(`${common.decodeErrPrefix} encountered invalid minor (${minor}) for major ${data[pos] >>> 5}`);
}
function errorer(msg) {
    return ()=>{
        throw new Error(`${common.decodeErrPrefix} ${msg}`);
    };
}
const jump = [];
for(let i = 0; i <= 23; i++)jump[i] = invalidMinor;
jump[24] = _0uint.decodeUint8;
jump[25] = _0uint.decodeUint16;
jump[26] = _0uint.decodeUint32;
jump[27] = _0uint.decodeUint64;
jump[28] = invalidMinor;
jump[29] = invalidMinor;
jump[30] = invalidMinor;
jump[31] = invalidMinor;
for(let i1 = 32; i1 <= 55; i1++)jump[i1] = invalidMinor;
jump[56] = _1negint.decodeNegint8;
jump[57] = _1negint.decodeNegint16;
jump[58] = _1negint.decodeNegint32;
jump[59] = _1negint.decodeNegint64;
jump[60] = invalidMinor;
jump[61] = invalidMinor;
jump[62] = invalidMinor;
jump[63] = invalidMinor;
for(let i2 = 64; i2 <= 87; i2++)jump[i2] = _2bytes.decodeBytesCompact;
jump[88] = _2bytes.decodeBytes8;
jump[89] = _2bytes.decodeBytes16;
jump[90] = _2bytes.decodeBytes32;
jump[91] = _2bytes.decodeBytes64;
jump[92] = invalidMinor;
jump[93] = invalidMinor;
jump[94] = invalidMinor;
jump[95] = errorer('indefinite length bytes/strings are not supported');
for(let i3 = 96; i3 <= 119; i3++)jump[i3] = _3string.decodeStringCompact;
jump[120] = _3string.decodeString8;
jump[121] = _3string.decodeString16;
jump[122] = _3string.decodeString32;
jump[123] = _3string.decodeString64;
jump[124] = invalidMinor;
jump[125] = invalidMinor;
jump[126] = invalidMinor;
jump[127] = errorer('indefinite length bytes/strings are not supported');
for(let i4 = 128; i4 <= 151; i4++)jump[i4] = _4array.decodeArrayCompact;
jump[152] = _4array.decodeArray8;
jump[153] = _4array.decodeArray16;
jump[154] = _4array.decodeArray32;
jump[155] = _4array.decodeArray64;
jump[156] = invalidMinor;
jump[157] = invalidMinor;
jump[158] = invalidMinor;
jump[159] = _4array.decodeArrayIndefinite;
for(let i5 = 160; i5 <= 183; i5++)jump[i5] = _5map.decodeMapCompact;
jump[184] = _5map.decodeMap8;
jump[185] = _5map.decodeMap16;
jump[186] = _5map.decodeMap32;
jump[187] = _5map.decodeMap64;
jump[188] = invalidMinor;
jump[189] = invalidMinor;
jump[190] = invalidMinor;
jump[191] = _5map.decodeMapIndefinite;
for(let i6 = 192; i6 <= 215; i6++)jump[i6] = _6tag.decodeTagCompact;
jump[216] = _6tag.decodeTag8;
jump[217] = _6tag.decodeTag16;
jump[218] = _6tag.decodeTag32;
jump[219] = _6tag.decodeTag64;
jump[220] = invalidMinor;
jump[221] = invalidMinor;
jump[222] = invalidMinor;
jump[223] = invalidMinor;
for(let i7 = 224; i7 <= 243; i7++)jump[i7] = errorer('simple values are not supported');
jump[244] = invalidMinor;
jump[245] = invalidMinor;
jump[246] = invalidMinor;
jump[247] = _7float.decodeUndefined;
jump[248] = errorer('simple values are not supported');
jump[249] = _7float.decodeFloat16;
jump[250] = _7float.decodeFloat32;
jump[251] = _7float.decodeFloat64;
jump[252] = invalidMinor;
jump[253] = invalidMinor;
jump[254] = invalidMinor;
jump[255] = _7float.decodeBreak;
const quick = [];
for(let i8 = 0; i8 < 24; i8++)quick[i8] = new token.Token(token.Type.uint, i8, 1);
for(let i9 = -1; i9 >= -24; i9--)quick[31 - i9] = new token.Token(token.Type.negint, i9, 1);
quick[64] = new token.Token(token.Type.bytes, new Uint8Array(0), 1);
quick[96] = new token.Token(token.Type.string, '', 1);
quick[128] = new token.Token(token.Type.array, 0, 1);
quick[160] = new token.Token(token.Type.map, 0, 1);
quick[244] = new token.Token(token.Type.false, false, 1);
quick[245] = new token.Token(token.Type.true, true, 1);
quick[246] = new token.Token(token.Type.null, null, 1);
function quickEncodeToken(token$1) {
    switch(token$1.type){
        case token.Type.false:
            return byteUtils.fromArray([
                244
            ]);
        case token.Type.true:
            return byteUtils.fromArray([
                245
            ]);
        case token.Type.null:
            return byteUtils.fromArray([
                246
            ]);
        case token.Type.bytes:
            if (!token$1.value.length) return byteUtils.fromArray([
                64
            ]);
            return;
        case token.Type.string:
            if (token$1.value === '') return byteUtils.fromArray([
                96
            ]);
            return;
        case token.Type.array:
            if (token$1.value === 0) return byteUtils.fromArray([
                128
            ]);
            return;
        case token.Type.map:
            if (token$1.value === 0) return byteUtils.fromArray([
                160
            ]);
            return;
        case token.Type.uint:
            if (token$1.value < 24) return byteUtils.fromArray([
                Number(token$1.value)
            ]);
            return;
        case token.Type.negint:
            if (token$1.value >= -24) return byteUtils.fromArray([
                31 - Number(token$1.value)
            ]);
    }
}
exports.jump = jump;
exports.quick = quick;
exports.quickEncodeToken = quickEncodeToken;

},{"./token.js":"hzdrM","./0uint.js":"iCSRX","./1negint.js":"1ywF4","./2bytes.js":"9n2FT","./3string.js":"g24Ir","./4array.js":"6iaEl","./5map.js":"ltm09","./6tag.js":"94X8w","./7float.js":"7EK5E","./common.js":"f327c","./byte-utils.js":"109Ms"}],"iCSRX":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var token = require('./token.js');
var common = require('./common.js');
const uintBoundaries = [
    24,
    256,
    65536,
    4294967296,
    BigInt('18446744073709551616')
];
function readUint8(data, offset, options) {
    common.assertEnoughData(data, offset, 1);
    const value = data[offset];
    if (options.strict === true && value < uintBoundaries[0]) throw new Error(`${common.decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
    return value;
}
function readUint16(data, offset, options) {
    common.assertEnoughData(data, offset, 2);
    const value = data[offset] << 8 | data[offset + 1];
    if (options.strict === true && value < uintBoundaries[1]) throw new Error(`${common.decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
    return value;
}
function readUint32(data, offset, options) {
    common.assertEnoughData(data, offset, 4);
    const value = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
    if (options.strict === true && value < uintBoundaries[2]) throw new Error(`${common.decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
    return value;
}
function readUint64(data, offset, options) {
    common.assertEnoughData(data, offset, 8);
    const hi = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
    const lo = data[offset + 4] * 16777216 + (data[offset + 5] << 16) + (data[offset + 6] << 8) + data[offset + 7];
    const value = (BigInt(hi) << BigInt(32)) + BigInt(lo);
    if (options.strict === true && value < uintBoundaries[3]) throw new Error(`${common.decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
    if (value <= Number.MAX_SAFE_INTEGER) return Number(value);
    if (options.allowBigInt === true) return value;
    throw new Error(`${common.decodeErrPrefix} integers outside of the safe integer range are not supported`);
}
function decodeUint8(data, pos, _minor, options) {
    return new token.Token(token.Type.uint, readUint8(data, pos + 1, options), 2);
}
function decodeUint16(data, pos, _minor, options) {
    return new token.Token(token.Type.uint, readUint16(data, pos + 1, options), 3);
}
function decodeUint32(data, pos, _minor, options) {
    return new token.Token(token.Type.uint, readUint32(data, pos + 1, options), 5);
}
function decodeUint64(data, pos, _minor, options) {
    return new token.Token(token.Type.uint, readUint64(data, pos + 1, options), 9);
}
function encodeUint(buf, token1) {
    return encodeUintValue(buf, 0, token1.value);
}
function encodeUintValue(buf, major, uint) {
    if (uint < uintBoundaries[0]) {
        const nuint = Number(uint);
        buf.push([
            major | nuint
        ]);
    } else if (uint < uintBoundaries[1]) {
        const nuint = Number(uint);
        buf.push([
            major | 24,
            nuint
        ]);
    } else if (uint < uintBoundaries[2]) {
        const nuint = Number(uint);
        buf.push([
            major | 25,
            nuint >>> 8,
            nuint & 255
        ]);
    } else if (uint < uintBoundaries[3]) {
        const nuint = Number(uint);
        buf.push([
            major | 26,
            nuint >>> 24 & 255,
            nuint >>> 16 & 255,
            nuint >>> 8 & 255,
            nuint & 255
        ]);
    } else {
        const buint = BigInt(uint);
        if (buint < uintBoundaries[4]) {
            const set = [
                major | 27,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ];
            let lo = Number(buint & BigInt(4294967295));
            let hi = Number(buint >> BigInt(32) & BigInt(4294967295));
            set[8] = lo & 255;
            lo = lo >> 8;
            set[7] = lo & 255;
            lo = lo >> 8;
            set[6] = lo & 255;
            lo = lo >> 8;
            set[5] = lo & 255;
            set[4] = hi & 255;
            hi = hi >> 8;
            set[3] = hi & 255;
            hi = hi >> 8;
            set[2] = hi & 255;
            hi = hi >> 8;
            set[1] = hi & 255;
            buf.push(set);
        } else throw new Error(`${common.decodeErrPrefix} encountered BigInt larger than allowable range`);
    }
}
encodeUint.encodedSize = function encodedSize(token2) {
    return encodeUintValue.encodedSize(token2.value);
};
encodeUintValue.encodedSize = function encodedSize(uint) {
    if (uint < uintBoundaries[0]) return 1;
    if (uint < uintBoundaries[1]) return 2;
    if (uint < uintBoundaries[2]) return 3;
    if (uint < uintBoundaries[3]) return 5;
    return 9;
};
encodeUint.compareTokens = function compareTokens(tok1, tok2) {
    return tok1.value < tok2.value ? -1 : tok1.value > tok2.value ? 1 : 0;
};
exports.decodeUint16 = decodeUint16;
exports.decodeUint32 = decodeUint32;
exports.decodeUint64 = decodeUint64;
exports.decodeUint8 = decodeUint8;
exports.encodeUint = encodeUint;
exports.encodeUintValue = encodeUintValue;
exports.readUint16 = readUint16;
exports.readUint32 = readUint32;
exports.readUint64 = readUint64;
exports.readUint8 = readUint8;
exports.uintBoundaries = uintBoundaries;

},{"./token.js":"hzdrM","./common.js":"f327c"}],"1ywF4":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var token = require('./token.js');
var _0uint = require('./0uint.js');
var common = require('./common.js');
function decodeNegint8(data, pos, _minor, options) {
    return new token.Token(token.Type.negint, -1 - _0uint.readUint8(data, pos + 1, options), 2);
}
function decodeNegint16(data, pos, _minor, options) {
    return new token.Token(token.Type.negint, -1 - _0uint.readUint16(data, pos + 1, options), 3);
}
function decodeNegint32(data, pos, _minor, options) {
    return new token.Token(token.Type.negint, -1 - _0uint.readUint32(data, pos + 1, options), 5);
}
const neg1b = BigInt(-1);
const pos1b = BigInt(1);
function decodeNegint64(data, pos, _minor, options) {
    const int = _0uint.readUint64(data, pos + 1, options);
    if (typeof int !== 'bigint') {
        const value = -1 - int;
        if (value >= Number.MIN_SAFE_INTEGER) return new token.Token(token.Type.negint, value, 9);
    }
    if (options.allowBigInt !== true) throw new Error(`${common.decodeErrPrefix} integers outside of the safe integer range are not supported`);
    return new token.Token(token.Type.negint, neg1b - BigInt(int), 9);
}
function encodeNegint(buf, token1) {
    const negint = token1.value;
    const unsigned = typeof negint === 'bigint' ? negint * neg1b - pos1b : negint * -1 - 1;
    _0uint.encodeUintValue(buf, token1.type.majorEncoded, unsigned);
}
encodeNegint.encodedSize = function encodedSize(token2) {
    const negint = token2.value;
    const unsigned = typeof negint === 'bigint' ? negint * neg1b - pos1b : negint * -1 - 1;
    if (unsigned < _0uint.uintBoundaries[0]) return 1;
    if (unsigned < _0uint.uintBoundaries[1]) return 2;
    if (unsigned < _0uint.uintBoundaries[2]) return 3;
    if (unsigned < _0uint.uintBoundaries[3]) return 5;
    return 9;
};
encodeNegint.compareTokens = function compareTokens(tok1, tok2) {
    return tok1.value < tok2.value ? 1 : tok1.value > tok2.value ? -1 : 0;
};
exports.decodeNegint16 = decodeNegint16;
exports.decodeNegint32 = decodeNegint32;
exports.decodeNegint64 = decodeNegint64;
exports.decodeNegint8 = decodeNegint8;
exports.encodeNegint = encodeNegint;

},{"./token.js":"hzdrM","./0uint.js":"iCSRX","./common.js":"f327c"}],"9n2FT":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var token = require('./token.js');
var common = require('./common.js');
var _0uint = require('./0uint.js');
var byteUtils = require('./byte-utils.js');
function toToken(data, pos, prefix, length) {
    common.assertEnoughData(data, pos, prefix + length);
    const buf = byteUtils.slice(data, pos + prefix, pos + prefix + length);
    return new token.Token(token.Type.bytes, buf, prefix + length);
}
function decodeBytesCompact(data, pos, minor, _options) {
    return toToken(data, pos, 1, minor);
}
function decodeBytes8(data, pos, _minor, options) {
    return toToken(data, pos, 2, _0uint.readUint8(data, pos + 1, options));
}
function decodeBytes16(data, pos, _minor, options) {
    return toToken(data, pos, 3, _0uint.readUint16(data, pos + 1, options));
}
function decodeBytes32(data, pos, _minor, options) {
    return toToken(data, pos, 5, _0uint.readUint32(data, pos + 1, options));
}
function decodeBytes64(data, pos, _minor, options) {
    const l = _0uint.readUint64(data, pos + 1, options);
    if (typeof l === 'bigint') throw new Error(`${common.decodeErrPrefix} 64-bit integer bytes lengths not supported`);
    return toToken(data, pos, 9, l);
}
function tokenBytes(token$1) {
    if (token$1.encodedBytes === undefined) token$1.encodedBytes = token$1.type === token.Type.string ? byteUtils.fromString(token$1.value) : token$1.value;
    return token$1.encodedBytes;
}
function encodeBytes(buf, token1) {
    const bytes = tokenBytes(token1);
    _0uint.encodeUintValue(buf, token1.type.majorEncoded, bytes.length);
    buf.push(bytes);
}
encodeBytes.encodedSize = function encodedSize(token2) {
    const bytes = tokenBytes(token2);
    return _0uint.encodeUintValue.encodedSize(bytes.length) + bytes.length;
};
encodeBytes.compareTokens = function compareTokens(tok1, tok2) {
    return compareBytes(tokenBytes(tok1), tokenBytes(tok2));
};
function compareBytes(b1, b2) {
    return b1.length < b2.length ? -1 : b1.length > b2.length ? 1 : byteUtils.compare(b1, b2);
}
exports.compareBytes = compareBytes;
exports.decodeBytes16 = decodeBytes16;
exports.decodeBytes32 = decodeBytes32;
exports.decodeBytes64 = decodeBytes64;
exports.decodeBytes8 = decodeBytes8;
exports.decodeBytesCompact = decodeBytesCompact;
exports.encodeBytes = encodeBytes;

},{"./token.js":"hzdrM","./common.js":"f327c","./0uint.js":"iCSRX","./byte-utils.js":"109Ms"}],"g24Ir":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var token = require('./token.js');
var common = require('./common.js');
var _0uint = require('./0uint.js');
var _2bytes = require('./2bytes.js');
var byteUtils = require('./byte-utils.js');
function toToken(data, pos, prefix, length, options) {
    const totLength = prefix + length;
    common.assertEnoughData(data, pos, totLength);
    const tok = new token.Token(token.Type.string, byteUtils.toString(data, pos + prefix, pos + totLength), totLength);
    if (options.retainStringBytes === true) tok.byteValue = byteUtils.slice(data, pos + prefix, pos + totLength);
    return tok;
}
function decodeStringCompact(data, pos, minor, options) {
    return toToken(data, pos, 1, minor, options);
}
function decodeString8(data, pos, _minor, options) {
    return toToken(data, pos, 2, _0uint.readUint8(data, pos + 1, options), options);
}
function decodeString16(data, pos, _minor, options) {
    return toToken(data, pos, 3, _0uint.readUint16(data, pos + 1, options), options);
}
function decodeString32(data, pos, _minor, options) {
    return toToken(data, pos, 5, _0uint.readUint32(data, pos + 1, options), options);
}
function decodeString64(data, pos, _minor, options) {
    const l = _0uint.readUint64(data, pos + 1, options);
    if (typeof l === 'bigint') throw new Error(`${common.decodeErrPrefix} 64-bit integer string lengths not supported`);
    return toToken(data, pos, 9, l, options);
}
const encodeString = _2bytes.encodeBytes;
exports.decodeString16 = decodeString16;
exports.decodeString32 = decodeString32;
exports.decodeString64 = decodeString64;
exports.decodeString8 = decodeString8;
exports.decodeStringCompact = decodeStringCompact;
exports.encodeString = encodeString;

},{"./token.js":"hzdrM","./common.js":"f327c","./0uint.js":"iCSRX","./2bytes.js":"9n2FT","./byte-utils.js":"109Ms"}],"6iaEl":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var token = require('./token.js');
var _0uint = require('./0uint.js');
var common = require('./common.js');
function toToken(_data, _pos, prefix, length) {
    return new token.Token(token.Type.array, length, prefix);
}
function decodeArrayCompact(data, pos, minor, _options) {
    return toToken(data, pos, 1, minor);
}
function decodeArray8(data, pos, _minor, options) {
    return toToken(data, pos, 2, _0uint.readUint8(data, pos + 1, options));
}
function decodeArray16(data, pos, _minor, options) {
    return toToken(data, pos, 3, _0uint.readUint16(data, pos + 1, options));
}
function decodeArray32(data, pos, _minor, options) {
    return toToken(data, pos, 5, _0uint.readUint32(data, pos + 1, options));
}
function decodeArray64(data, pos, _minor, options) {
    const l = _0uint.readUint64(data, pos + 1, options);
    if (typeof l === 'bigint') throw new Error(`${common.decodeErrPrefix} 64-bit integer array lengths not supported`);
    return toToken(data, pos, 9, l);
}
function decodeArrayIndefinite(data, pos, _minor, options) {
    if (options.allowIndefinite === false) throw new Error(`${common.decodeErrPrefix} indefinite length items not allowed`);
    return toToken(data, pos, 1, Infinity);
}
function encodeArray(buf, token$1) {
    _0uint.encodeUintValue(buf, token.Type.array.majorEncoded, token$1.value);
}
encodeArray.compareTokens = _0uint.encodeUint.compareTokens;
exports.decodeArray16 = decodeArray16;
exports.decodeArray32 = decodeArray32;
exports.decodeArray64 = decodeArray64;
exports.decodeArray8 = decodeArray8;
exports.decodeArrayCompact = decodeArrayCompact;
exports.decodeArrayIndefinite = decodeArrayIndefinite;
exports.encodeArray = encodeArray;

},{"./token.js":"hzdrM","./0uint.js":"iCSRX","./common.js":"f327c"}],"ltm09":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var token = require('./token.js');
var _0uint = require('./0uint.js');
var common = require('./common.js');
function toToken(_data, _pos, prefix, length) {
    return new token.Token(token.Type.map, length, prefix);
}
function decodeMapCompact(data, pos, minor, _options) {
    return toToken(data, pos, 1, minor);
}
function decodeMap8(data, pos, _minor, options) {
    return toToken(data, pos, 2, _0uint.readUint8(data, pos + 1, options));
}
function decodeMap16(data, pos, _minor, options) {
    return toToken(data, pos, 3, _0uint.readUint16(data, pos + 1, options));
}
function decodeMap32(data, pos, _minor, options) {
    return toToken(data, pos, 5, _0uint.readUint32(data, pos + 1, options));
}
function decodeMap64(data, pos, _minor, options) {
    const l = _0uint.readUint64(data, pos + 1, options);
    if (typeof l === 'bigint') throw new Error(`${common.decodeErrPrefix} 64-bit integer map lengths not supported`);
    return toToken(data, pos, 9, l);
}
function decodeMapIndefinite(data, pos, _minor, options) {
    if (options.allowIndefinite === false) throw new Error(`${common.decodeErrPrefix} indefinite length items not allowed`);
    return toToken(data, pos, 1, Infinity);
}
function encodeMap(buf, token$1) {
    _0uint.encodeUintValue(buf, token.Type.map.majorEncoded, token$1.value);
}
encodeMap.compareTokens = _0uint.encodeUint.compareTokens;
exports.decodeMap16 = decodeMap16;
exports.decodeMap32 = decodeMap32;
exports.decodeMap64 = decodeMap64;
exports.decodeMap8 = decodeMap8;
exports.decodeMapCompact = decodeMapCompact;
exports.decodeMapIndefinite = decodeMapIndefinite;
exports.encodeMap = encodeMap;

},{"./token.js":"hzdrM","./0uint.js":"iCSRX","./common.js":"f327c"}],"94X8w":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var token = require('./token.js');
var _0uint = require('./0uint.js');
function decodeTagCompact(_data, _pos, minor, _options) {
    return new token.Token(token.Type.tag, minor, 1);
}
function decodeTag8(data, pos, _minor, options) {
    return new token.Token(token.Type.tag, _0uint.readUint8(data, pos + 1, options), 2);
}
function decodeTag16(data, pos, _minor, options) {
    return new token.Token(token.Type.tag, _0uint.readUint16(data, pos + 1, options), 3);
}
function decodeTag32(data, pos, _minor, options) {
    return new token.Token(token.Type.tag, _0uint.readUint32(data, pos + 1, options), 5);
}
function decodeTag64(data, pos, _minor, options) {
    return new token.Token(token.Type.tag, _0uint.readUint64(data, pos + 1, options), 9);
}
function encodeTag(buf, token$1) {
    _0uint.encodeUintValue(buf, token.Type.tag.majorEncoded, token$1.value);
}
encodeTag.compareTokens = _0uint.encodeUint.compareTokens;
exports.decodeTag16 = decodeTag16;
exports.decodeTag32 = decodeTag32;
exports.decodeTag64 = decodeTag64;
exports.decodeTag8 = decodeTag8;
exports.decodeTagCompact = decodeTagCompact;
exports.encodeTag = encodeTag;

},{"./token.js":"hzdrM","./0uint.js":"iCSRX"}],"7EK5E":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var token = require('./token.js');
var common = require('./common.js');
var _0uint = require('./0uint.js');
const MINOR_FALSE = 20;
const MINOR_TRUE = 21;
const MINOR_NULL = 22;
const MINOR_UNDEFINED = 23;
function decodeUndefined(_data, _pos, _minor, options) {
    if (options.allowUndefined === false) throw new Error(`${common.decodeErrPrefix} undefined values are not supported`);
    else if (options.coerceUndefinedToNull === true) return new token.Token(token.Type.null, null, 1);
    return new token.Token(token.Type.undefined, undefined, 1);
}
function decodeBreak(_data, _pos, _minor, options) {
    if (options.allowIndefinite === false) throw new Error(`${common.decodeErrPrefix} indefinite length items not allowed`);
    return new token.Token(token.Type.break, undefined, 1);
}
function createToken(value, bytes, options) {
    if (options) {
        if (options.allowNaN === false && Number.isNaN(value)) throw new Error(`${common.decodeErrPrefix} NaN values are not supported`);
        if (options.allowInfinity === false && (value === Infinity || value === -Infinity)) throw new Error(`${common.decodeErrPrefix} Infinity values are not supported`);
    }
    return new token.Token(token.Type.float, value, bytes);
}
function decodeFloat16(data, pos, _minor, options) {
    return createToken(readFloat16(data, pos + 1), 3, options);
}
function decodeFloat32(data, pos, _minor, options) {
    return createToken(readFloat32(data, pos + 1), 5, options);
}
function decodeFloat64(data, pos, _minor, options) {
    return createToken(readFloat64(data, pos + 1), 9, options);
}
function encodeFloat(buf, token$1, options) {
    const float = token$1.value;
    if (float === false) buf.push([
        token.Type.float.majorEncoded | MINOR_FALSE
    ]);
    else if (float === true) buf.push([
        token.Type.float.majorEncoded | MINOR_TRUE
    ]);
    else if (float === null) buf.push([
        token.Type.float.majorEncoded | MINOR_NULL
    ]);
    else if (float === undefined) buf.push([
        token.Type.float.majorEncoded | MINOR_UNDEFINED
    ]);
    else {
        let decoded;
        let success = false;
        if (!options || options.float64 !== true) {
            encodeFloat16(float);
            decoded = readFloat16(ui8a, 1);
            if (float === decoded || Number.isNaN(float)) {
                ui8a[0] = 249;
                buf.push(ui8a.slice(0, 3));
                success = true;
            } else {
                encodeFloat32(float);
                decoded = readFloat32(ui8a, 1);
                if (float === decoded) {
                    ui8a[0] = 250;
                    buf.push(ui8a.slice(0, 5));
                    success = true;
                }
            }
        }
        if (!success) {
            encodeFloat64(float);
            decoded = readFloat64(ui8a, 1);
            ui8a[0] = 251;
            buf.push(ui8a.slice(0, 9));
        }
    }
}
encodeFloat.encodedSize = function encodedSize(token1, options) {
    const float = token1.value;
    if (float === false || float === true || float === null || float === undefined) return 1;
    let decoded;
    if (!options || options.float64 !== true) {
        encodeFloat16(float);
        decoded = readFloat16(ui8a, 1);
        if (float === decoded || Number.isNaN(float)) return 3;
        encodeFloat32(float);
        decoded = readFloat32(ui8a, 1);
        if (float === decoded) return 5;
    }
    return 9;
};
const buffer = new ArrayBuffer(9);
const dataView = new DataView(buffer, 1);
const ui8a = new Uint8Array(buffer, 0);
function encodeFloat16(inp) {
    if (inp === Infinity) dataView.setUint16(0, 31744, false);
    else if (inp === -Infinity) dataView.setUint16(0, 64512, false);
    else if (Number.isNaN(inp)) dataView.setUint16(0, 32256, false);
    else {
        dataView.setFloat32(0, inp);
        const valu32 = dataView.getUint32(0);
        const exponent = (valu32 & 2139095040) >> 23;
        const mantissa = valu32 & 8388607;
        if (exponent === 255) dataView.setUint16(0, 31744, false);
        else if (exponent === 0) dataView.setUint16(0, (inp & 2147483648) >> 16 | mantissa >> 13, false);
        else {
            const logicalExponent = exponent - 127;
            if (logicalExponent < -24) dataView.setUint16(0, 0);
            else if (logicalExponent < -14) dataView.setUint16(0, (valu32 & 2147483648) >> 16 | 1 << 24 + logicalExponent, false);
            else dataView.setUint16(0, (valu32 & 2147483648) >> 16 | logicalExponent + 15 << 10 | mantissa >> 13, false);
        }
    }
}
function readFloat16(ui8a1, pos) {
    if (ui8a1.length - pos < 2) throw new Error(`${common.decodeErrPrefix} not enough data for float16`);
    const half = (ui8a1[pos] << 8) + ui8a1[pos + 1];
    if (half === 31744) return Infinity;
    if (half === 64512) return -Infinity;
    if (half === 32256) return NaN;
    const exp = half >> 10 & 31;
    const mant = half & 1023;
    let val;
    if (exp === 0) val = mant * 2 ** -24;
    else if (exp !== 31) val = (mant + 1024) * 2 ** (exp - 25);
    else val = mant === 0 ? Infinity : NaN;
    return half & 32768 ? -val : val;
}
function encodeFloat32(inp) {
    dataView.setFloat32(0, inp, false);
}
function readFloat32(ui8a2, pos) {
    if (ui8a2.length - pos < 4) throw new Error(`${common.decodeErrPrefix} not enough data for float32`);
    const offset = (ui8a2.byteOffset || 0) + pos;
    return new DataView(ui8a2.buffer, offset, 4).getFloat32(0, false);
}
function encodeFloat64(inp) {
    dataView.setFloat64(0, inp, false);
}
function readFloat64(ui8a3, pos) {
    if (ui8a3.length - pos < 8) throw new Error(`${common.decodeErrPrefix} not enough data for float64`);
    const offset = (ui8a3.byteOffset || 0) + pos;
    return new DataView(ui8a3.buffer, offset, 8).getFloat64(0, false);
}
encodeFloat.compareTokens = _0uint.encodeUint.compareTokens;
exports.decodeBreak = decodeBreak;
exports.decodeFloat16 = decodeFloat16;
exports.decodeFloat32 = decodeFloat32;
exports.decodeFloat64 = decodeFloat64;
exports.decodeUndefined = decodeUndefined;
exports.encodeFloat = encodeFloat;

},{"./token.js":"hzdrM","./common.js":"f327c","./0uint.js":"iCSRX"}],"iQNJQ":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var common = require('./common.js');
var token = require('./token.js');
var jump = require('./jump.js');
const defaultDecodeOptions = {
    strict: false,
    allowIndefinite: true,
    allowUndefined: true,
    allowBigInt: true
};
class Tokeniser {
    constructor(data, options = {
    }){
        this.pos = 0;
        this.data = data;
        this.options = options;
    }
    done() {
        return this.pos >= this.data.length;
    }
    next() {
        const byt = this.data[this.pos];
        let token1 = jump.quick[byt];
        if (token1 === undefined) {
            const decoder = jump.jump[byt];
            if (!decoder) throw new Error(`${common.decodeErrPrefix} no decoder for major type ${byt >>> 5} (byte 0x${byt.toString(16).padStart(2, '0')})`);
            const minor = byt & 31;
            token1 = decoder(this.data, this.pos, minor, this.options);
        }
        this.pos += token1.encodedLength;
        return token1;
    }
}
const DONE = Symbol.for('DONE');
const BREAK = Symbol.for('BREAK');
function tokenToArray(token2, tokeniser, options) {
    const arr = [];
    for(let i = 0; i < token2.value; i++){
        const value = tokensToObject(tokeniser, options);
        if (value === BREAK) {
            if (token2.value === Infinity) break;
            throw new Error(`${common.decodeErrPrefix} got unexpected break to lengthed array`);
        }
        if (value === DONE) throw new Error(`${common.decodeErrPrefix} found array but not enough entries (got ${i}, expected ${token2.value})`);
        arr[i] = value;
    }
    return arr;
}
function tokenToMap(token3, tokeniser, options) {
    const useMaps = options.useMaps === true;
    const obj = useMaps ? undefined : {
    };
    const m = useMaps ? new Map() : undefined;
    for(let i = 0; i < token3.value; i++){
        const key = tokensToObject(tokeniser, options);
        if (key === BREAK) {
            if (token3.value === Infinity) break;
            throw new Error(`${common.decodeErrPrefix} got unexpected break to lengthed map`);
        }
        if (key === DONE) throw new Error(`${common.decodeErrPrefix} found map but not enough entries (got ${i} [no key], expected ${token3.value})`);
        if (useMaps !== true && typeof key !== 'string') throw new Error(`${common.decodeErrPrefix} non-string keys not supported (got ${typeof key})`);
        const value = tokensToObject(tokeniser, options);
        if (value === DONE) throw new Error(`${common.decodeErrPrefix} found map but not enough entries (got ${i} [no value], expected ${token3.value})`);
        if (useMaps) m.set(key, value);
        else obj[key] = value;
    }
    return useMaps ? m : obj;
}
function tokensToObject(tokeniser, options) {
    if (tokeniser.done()) return DONE;
    const token$1 = tokeniser.next();
    if (token$1.type === token.Type.break) return BREAK;
    if (token$1.type.terminal) return token$1.value;
    if (token$1.type === token.Type.array) return tokenToArray(token$1, tokeniser, options);
    if (token$1.type === token.Type.map) return tokenToMap(token$1, tokeniser, options);
    if (token$1.type === token.Type.tag) {
        if (options.tags && typeof options.tags[token$1.value] === 'function') {
            const tagged = tokensToObject(tokeniser, options);
            return options.tags[token$1.value](tagged);
        }
        throw new Error(`${common.decodeErrPrefix} tag not supported (${token$1.value})`);
    }
    throw new Error('unsupported');
}
function decode(data, options) {
    if (!(data instanceof Uint8Array)) throw new Error(`${common.decodeErrPrefix} data to decode must be a Uint8Array`);
    options = Object.assign({
    }, defaultDecodeOptions, options);
    const tokeniser = options.tokenizer || new Tokeniser(data, options);
    const decoded = tokensToObject(tokeniser, options);
    if (decoded === DONE) throw new Error(`${common.decodeErrPrefix} did not find any content to decode`);
    if (decoded === BREAK) throw new Error(`${common.decodeErrPrefix} got unexpected break`);
    if (!tokeniser.done()) throw new Error(`${common.decodeErrPrefix} too many terminals, data makes no sense`);
    return decoded;
}
exports.Tokeniser = Tokeniser;
exports.decode = decode;
exports.tokensToObject = tokensToObject;

},{"./common.js":"f327c","./token.js":"hzdrM","./jump.js":"buBgp"}],"lBbUS":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var multiformats = require('multiformats');
var base64 = require('multiformats/bases/base64');
var cborg = require('cborg');
var cborgJson = require('cborg/json');
function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) Object.keys(e).forEach(function(k) {
        if (k !== 'default') {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
                enumerable: true,
                get: function() {
                    return e[k];
                }
            });
        }
    });
    n["default"] = e;
    return Object.freeze(n);
}
var cborgJson__namespace = /*#__PURE__*/ _interopNamespace(cborgJson);
function cidEncoder(obj) {
    if (obj.asCID !== obj) return null;
    const cid = multiformats.CID.asCID(obj);
    if (!cid) return null;
    const cidString = cid.toString();
    return [
        new cborg.Token(cborg.Type.map, Infinity, 1),
        new cborg.Token(cborg.Type.string, '/', 1),
        new cborg.Token(cborg.Type.string, cidString, cidString.length),
        new cborg.Token(cborg.Type.break, undefined, 1)
    ];
}
function bytesEncoder(bytes) {
    const bytesString = base64.base64.encode(bytes).slice(1);
    return [
        new cborg.Token(cborg.Type.map, Infinity, 1),
        new cborg.Token(cborg.Type.string, '/', 1),
        new cborg.Token(cborg.Type.map, Infinity, 1),
        new cborg.Token(cborg.Type.string, 'bytes', 5),
        new cborg.Token(cborg.Type.string, bytesString, bytesString.length),
        new cborg.Token(cborg.Type.break, undefined, 1),
        new cborg.Token(cborg.Type.break, undefined, 1)
    ];
}
function undefinedEncoder() {
    throw new Error('`undefined` is not supported by the IPLD Data Model and cannot be encoded');
}
function numberEncoder(num) {
    if (Number.isNaN(num)) throw new Error('`NaN` is not supported by the IPLD Data Model and cannot be encoded');
    if (num === Infinity || num === -Infinity) throw new Error('`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded');
    return null;
}
const encodeOptions = {
    typeEncoders: {
        Object: cidEncoder,
        Uint8Array: bytesEncoder,
        Buffer: bytesEncoder,
        undefined: undefinedEncoder,
        number: numberEncoder
    }
};
class DagJsonTokenizer extends cborgJson__namespace.Tokenizer {
    constructor(data, options){
        super(data, options);
        this.tokenBuffer = [];
    }
    done() {
        return this.tokenBuffer.length === 0 && super.done();
    }
    _next() {
        if (this.tokenBuffer.length > 0) return this.tokenBuffer.pop();
        return super.next();
    }
    next() {
        const token = this._next();
        if (token.type === cborg.Type.map) {
            const keyToken = this._next();
            if (keyToken.type === cborg.Type.string && keyToken.value === '/') {
                const valueToken = this._next();
                if (valueToken.type === cborg.Type.string) {
                    const breakToken = this._next();
                    if (breakToken.type !== cborg.Type.break) throw new Error('Invalid encoded CID form');
                    this.tokenBuffer.push(valueToken);
                    return new cborg.Token(cborg.Type.tag, 42, 0);
                }
                if (valueToken.type === cborg.Type.map) {
                    const innerKeyToken = this._next();
                    if (innerKeyToken.type === cborg.Type.string && innerKeyToken.value === 'bytes') {
                        const innerValueToken = this._next();
                        if (innerValueToken.type === cborg.Type.string) {
                            for(let i = 0; i < 2; i++){
                                const breakToken = this._next();
                                if (breakToken.type !== cborg.Type.break) throw new Error('Invalid encoded Bytes form');
                            }
                            const bytes = base64.base64.decode(`m${innerValueToken.value}`);
                            return new cborg.Token(cborg.Type.bytes, bytes, innerValueToken.value.length);
                        }
                        this.tokenBuffer.push(innerValueToken);
                    }
                    this.tokenBuffer.push(innerKeyToken);
                }
                this.tokenBuffer.push(valueToken);
            }
            this.tokenBuffer.push(keyToken);
        }
        return token;
    }
}
const decodeOptions = {
    allowIndefinite: false,
    allowUndefined: false,
    allowNaN: false,
    allowInfinity: false,
    allowBigInt: true,
    strict: true,
    useMaps: false,
    tags: []
};
decodeOptions.tags[42] = multiformats.CID.parse;
const name = 'dag-json';
const code = 297;
const encode = (node)=>cborgJson__namespace.encode(node, encodeOptions)
;
const decode = (data)=>{
    const options = Object.assign(decodeOptions, {
        tokenizer: new DagJsonTokenizer(data, decodeOptions)
    });
    return cborgJson__namespace.decode(data, options);
};
exports.code = code;
exports.decode = decode;
exports.encode = encode;
exports.name = name;

},{"multiformats":"3QFUn","multiformats/bases/base64":"3gCnk","cborg":"4nFLw","cborg/json":"274tw"}],"3QFUn":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('./cid.js');
var varint = require('./varint.js');
var bytes = require('./bytes.js');
var hasher = require('./hashes/hasher.js');
var digest = require('./hashes/digest.js');
exports.CID = cid.CID;
exports.varint = varint;
exports.bytes = bytes;
exports.hasher = hasher;
exports.digest = digest;

},{"./cid.js":"4uoBU","./varint.js":"8P1F2","./bytes.js":"ent0w","./hashes/hasher.js":"lU6YS","./hashes/digest.js":"9JdI8"}],"lU6YS":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var digest = require('./digest.js');
const from = ({ name , code , encode  })=>new Hasher(name, code, encode)
;
class Hasher {
    constructor(name, code, encode){
        this.name = name;
        this.code = code;
        this.encode = encode;
    }
    digest(input) {
        if (input instanceof Uint8Array) {
            const result = this.encode(input);
            return result instanceof Uint8Array ? digest.create(this.code, result) : result.then((digest$1)=>digest.create(this.code, digest$1)
            );
        } else throw Error('Unknown type, must be binary type');
    }
}
exports.Hasher = Hasher;
exports.from = from;

},{"./digest.js":"9JdI8"}],"3gCnk":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var base = require('./base.js');
const base64 = base.rfc4648({
    prefix: 'm',
    name: 'base64',
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    bitsPerChar: 6
});
const base64pad = base.rfc4648({
    prefix: 'M',
    name: 'base64pad',
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    bitsPerChar: 6
});
const base64url = base.rfc4648({
    prefix: 'u',
    name: 'base64url',
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
    bitsPerChar: 6
});
const base64urlpad = base.rfc4648({
    prefix: 'U',
    name: 'base64urlpad',
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
    bitsPerChar: 6
});
exports.base64 = base64;
exports.base64pad = base64pad;
exports.base64url = base64url;
exports.base64urlpad = base64urlpad;

},{"./base.js":"j888T"}],"274tw":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var encode = require('./encode.js');
var decode = require('./decode.js');
exports.encode = encode.encode;
exports.Tokenizer = decode.Tokenizer;
exports.decode = decode.decode;

},{"./encode.js":"dcHCn","./decode.js":"8sYRY"}],"dcHCn":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var token = require('../token.js');
var encode$1 = require('../encode.js');
var common = require('../common.js');
var byteUtils = require('../byte-utils.js');
class JSONEncoder extends Array {
    constructor(){
        super();
        this.inRecursive = [];
    }
    prefix(buf) {
        const recurs = this.inRecursive[this.inRecursive.length - 1];
        if (recurs) {
            if (recurs.type === token.Type.array) {
                recurs.elements++;
                if (recurs.elements !== 1) buf.push([
                    44
                ]);
            }
            if (recurs.type === token.Type.map) {
                recurs.elements++;
                if (recurs.elements !== 1) {
                    if (recurs.elements % 2 === 1) buf.push([
                        44
                    ]);
                    else buf.push([
                        58
                    ]);
                }
            }
        }
    }
    [token.Type.uint.major](buf, token1) {
        this.prefix(buf);
        const is = String(token1.value);
        const isa = [];
        for(let i = 0; i < is.length; i++)isa[i] = is.charCodeAt(i);
        buf.push(isa);
    }
    [token.Type.negint.major](buf, token$1) {
        this[token.Type.uint.major](buf, token$1);
    }
    [token.Type.bytes.major](_buf, _token) {
        throw new Error(`${common.encodeErrPrefix} unsupported type: Uint8Array`);
    }
    [token.Type.string.major](buf, token2) {
        this.prefix(buf);
        const byts = byteUtils.fromString(JSON.stringify(token2.value));
        buf.push(byts.length > 32 ? byteUtils.asU8A(byts) : byts);
    }
    [token.Type.array.major](buf, _token) {
        this.prefix(buf);
        this.inRecursive.push({
            type: token.Type.array,
            elements: 0
        });
        buf.push([
            91
        ]);
    }
    [token.Type.map.major](buf, _token) {
        this.prefix(buf);
        this.inRecursive.push({
            type: token.Type.map,
            elements: 0
        });
        buf.push([
            123
        ]);
    }
    [token.Type.tag.major](_buf, _token) {
    }
    [token.Type.float.major](buf, token$1) {
        if (token$1.type.name === 'break') {
            const recurs = this.inRecursive.pop();
            if (recurs) {
                if (recurs.type === token.Type.array) buf.push([
                    93
                ]);
                else if (recurs.type === token.Type.map) buf.push([
                    125
                ]);
                else throw new Error('Unexpected recursive type; this should not happen!');
                return;
            }
            throw new Error('Unexpected break; this should not happen!');
        }
        if (token$1.value === undefined) throw new Error(`${common.encodeErrPrefix} unsupported type: undefined`);
        this.prefix(buf);
        if (token$1.type.name === 'true') {
            buf.push([
                116,
                114,
                117,
                101
            ]);
            return;
        } else if (token$1.type.name === 'false') {
            buf.push([
                102,
                97,
                108,
                115,
                101
            ]);
            return;
        } else if (token$1.type.name === 'null') {
            buf.push([
                110,
                117,
                108,
                108
            ]);
            return;
        }
        const is = String(token$1.value);
        const isa = [];
        let dp = false;
        for(let i = 0; i < is.length; i++){
            isa[i] = is.charCodeAt(i);
            if (!dp && (isa[i] === 46 || isa[i] === 101 || isa[i] === 69)) dp = true;
        }
        if (!dp) {
            isa.push(46);
            isa.push(48);
        }
        buf.push(isa);
    }
}
function mapSorter(e1, e2) {
    if (Array.isArray(e1[0]) || Array.isArray(e2[0])) throw new Error(`${common.encodeErrPrefix} complex map keys are not supported`);
    const keyToken1 = e1[0];
    const keyToken2 = e2[0];
    if (keyToken1.type !== token.Type.string || keyToken2.type !== token.Type.string) throw new Error(`${common.encodeErrPrefix} non-string map keys are not supported`);
    if (keyToken1 < keyToken2) return -1;
    if (keyToken1 > keyToken2) return 1;
    throw new Error(`${common.encodeErrPrefix} unexpected duplicate map keys, this is not supported`);
}
const defaultEncodeOptions = {
    addBreakTokens: true,
    mapSorter
};
function encode(data, options) {
    options = Object.assign({
    }, defaultEncodeOptions, options);
    return encode$1.encodeCustom(data, new JSONEncoder(), options);
}
exports.encode = encode;

},{"../token.js":"hzdrM","../encode.js":"cDKWO","../common.js":"f327c","../byte-utils.js":"109Ms"}],"8sYRY":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var decode$1 = require('../decode.js');
var token = require('../token.js');
var byteUtils = require('../byte-utils.js');
var common = require('../common.js');
class Tokenizer {
    constructor(data, options = {
    }){
        this.pos = 0;
        this.data = data;
        this.options = options;
        this.modeStack = [
            'value'
        ];
        this.lastToken = '';
    }
    done() {
        return this.pos >= this.data.length;
    }
    ch() {
        return this.data[this.pos];
    }
    currentMode() {
        return this.modeStack[this.modeStack.length - 1];
    }
    skipWhitespace() {
        let c = this.ch();
        while(c === 32 || c === 9 || c === 13 || c === 10)c = this.data[++this.pos];
    }
    expect(str) {
        if (this.data.length - this.pos < str.length) throw new Error(`${common.decodeErrPrefix} unexpected end of input at position ${this.pos}`);
        for(let i = 0; i < str.length; i++){
            if (this.data[this.pos++] !== str[i]) throw new Error(`${common.decodeErrPrefix} unexpected token at position ${this.pos}, expected to find '${String.fromCharCode(...str)}'`);
        }
    }
    parseNumber() {
        const startPos = this.pos;
        let negative = false;
        let float = false;
        const swallow = (chars)=>{
            while(!this.done()){
                const ch = this.ch();
                if (chars.includes(ch)) this.pos++;
                else break;
            }
        };
        if (this.ch() === 45) {
            negative = true;
            this.pos++;
        }
        if (this.ch() === 48) {
            this.pos++;
            if (this.ch() === 46) {
                this.pos++;
                float = true;
            } else return new token.Token(token.Type.uint, 0, this.pos - startPos);
        }
        swallow([
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57
        ]);
        if (negative && this.pos === startPos + 1) throw new Error(`${common.decodeErrPrefix} unexpected token at position ${this.pos}`);
        if (!this.done() && this.ch() === 46) {
            if (float) throw new Error(`${common.decodeErrPrefix} unexpected token at position ${this.pos}`);
            float = true;
            this.pos++;
            swallow([
                48,
                49,
                50,
                51,
                52,
                53,
                54,
                55,
                56,
                57
            ]);
        }
        if (!this.done() && (this.ch() === 101 || this.ch() === 69)) {
            float = true;
            this.pos++;
            if (!this.done() && (this.ch() === 43 || this.ch() === 45)) this.pos++;
            swallow([
                48,
                49,
                50,
                51,
                52,
                53,
                54,
                55,
                56,
                57
            ]);
        }
        const numStr = String.fromCharCode.apply(null, this.data.subarray(startPos, this.pos));
        const num = parseFloat(numStr);
        if (float) return new token.Token(token.Type.float, num, this.pos - startPos);
        if (this.options.allowBigInt !== true || Number.isSafeInteger(num)) return new token.Token(num >= 0 ? token.Type.uint : token.Type.negint, num, this.pos - startPos);
        return new token.Token(num >= 0 ? token.Type.uint : token.Type.negint, BigInt(numStr), this.pos - startPos);
    }
    parseString() {
        if (this.ch() !== 34) throw new Error(`${common.decodeErrPrefix} unexpected character at position ${this.pos}; this shouldn't happen`);
        this.pos++;
        for(let i1 = this.pos, l = 0; i1 < this.data.length && l < 65536; i1++, l++){
            const ch = this.data[i1];
            if (ch === 92 || ch < 32 || ch >= 128) break;
            if (ch === 34) {
                const str = String.fromCharCode.apply(null, this.data.subarray(this.pos, i1));
                this.pos = i1 + 1;
                return new token.Token(token.Type.string, str, l);
            }
        }
        const startPos = this.pos;
        const chars = [];
        const readu4 = ()=>{
            if (this.pos + 4 >= this.data.length) throw new Error(`${common.decodeErrPrefix} unexpected end of unicode escape sequence at position ${this.pos}`);
            let u4 = 0;
            for(let i = 0; i < 4; i++){
                let ch = this.ch();
                if (ch >= 48 && ch <= 57) ch -= 48;
                else if (ch >= 97 && ch <= 102) ch = ch - 97 + 10;
                else if (ch >= 65 && ch <= 70) ch = ch - 65 + 10;
                else throw new Error(`${common.decodeErrPrefix} unexpected unicode escape character at position ${this.pos}`);
                u4 = u4 * 16 + ch;
                this.pos++;
            }
            return u4;
        };
        const readUtf8Char = ()=>{
            const firstByte = this.ch();
            let codePoint = null;
            let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
            if (this.pos + bytesPerSequence > this.data.length) throw new Error(`${common.decodeErrPrefix} unexpected unicode sequence at position ${this.pos}`);
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = this.data[this.pos + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = this.data[this.pos + 1];
                    thirdByte = this.data[this.pos + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = this.data[this.pos + 1];
                    thirdByte = this.data[this.pos + 2];
                    fourthByte = this.data[this.pos + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
            if (codePoint === null) {
                codePoint = 65533;
                bytesPerSequence = 1;
            } else if (codePoint > 65535) {
                codePoint -= 65536;
                chars.push(codePoint >>> 10 & 1023 | 55296);
                codePoint = 56320 | codePoint & 1023;
            }
            chars.push(codePoint);
            this.pos += bytesPerSequence;
        };
        while(!this.done()){
            const ch = this.ch();
            let ch1;
            switch(ch){
                case 92:
                    this.pos++;
                    if (this.done()) throw new Error(`${common.decodeErrPrefix} unexpected string termination at position ${this.pos}`);
                    ch1 = this.ch();
                    this.pos++;
                    switch(ch1){
                        case 34:
                        case 39:
                        case 92:
                        case 47:
                            chars.push(ch1);
                            break;
                        case 98:
                            chars.push(8);
                            break;
                        case 116:
                            chars.push(9);
                            break;
                        case 110:
                            chars.push(10);
                            break;
                        case 102:
                            chars.push(12);
                            break;
                        case 114:
                            chars.push(13);
                            break;
                        case 117:
                            chars.push(readu4());
                            break;
                        default:
                            throw new Error(`${common.decodeErrPrefix} unexpected string escape character at position ${this.pos}`);
                    }
                    break;
                case 34:
                    this.pos++;
                    return new token.Token(token.Type.string, byteUtils.decodeCodePointsArray(chars), this.pos - startPos);
                default:
                    if (ch < 32) throw new Error(`${common.decodeErrPrefix} invalid control character at position ${this.pos}`);
                    else if (ch < 128) {
                        chars.push(ch);
                        this.pos++;
                    } else readUtf8Char();
            }
        }
        throw new Error(`${common.decodeErrPrefix} unexpected end of string at position ${this.pos}`);
    }
    parseValue() {
        switch(this.ch()){
            case 123:
                this.modeStack.push('obj-start');
                this.pos++;
                return new token.Token(token.Type.map, Infinity, 1);
            case 91:
                this.modeStack.push('array-start');
                this.pos++;
                return new token.Token(token.Type.array, Infinity, 1);
            case 34:
                return this.parseString();
            case 110:
                this.expect([
                    110,
                    117,
                    108,
                    108
                ]);
                return new token.Token(token.Type.null, null, 4);
            case 102:
                this.expect([
                    102,
                    97,
                    108,
                    115,
                    101
                ]);
                return new token.Token(token.Type.false, false, 5);
            case 116:
                this.expect([
                    116,
                    114,
                    117,
                    101
                ]);
                return new token.Token(token.Type.true, true, 4);
            case 45:
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                return this.parseNumber();
            default:
                throw new Error(`${common.decodeErrPrefix} unexpected character at position ${this.pos}`);
        }
    }
    next() {
        this.skipWhitespace();
        switch(this.currentMode()){
            case 'value':
                this.modeStack.pop();
                return this.parseValue();
            case 'array-value':
                this.modeStack.pop();
                if (this.ch() === 93) {
                    this.pos++;
                    this.skipWhitespace();
                    return new token.Token(token.Type.break, undefined, 1);
                }
                if (this.ch() !== 44) throw new Error(`${common.decodeErrPrefix} unexpected character at position ${this.pos}, was expecting array delimiter but found '${String.fromCharCode(this.ch())}'`);
                this.pos++;
                this.modeStack.push('array-value');
                this.skipWhitespace();
                return this.parseValue();
            case 'array-start':
                this.modeStack.pop();
                if (this.ch() === 93) {
                    this.pos++;
                    this.skipWhitespace();
                    return new token.Token(token.Type.break, undefined, 1);
                }
                this.modeStack.push('array-value');
                this.skipWhitespace();
                return this.parseValue();
            case 'obj-key':
                if (this.ch() === 125) {
                    this.modeStack.pop();
                    this.pos++;
                    this.skipWhitespace();
                    return new token.Token(token.Type.break, undefined, 1);
                }
                if (this.ch() !== 44) throw new Error(`${common.decodeErrPrefix} unexpected character at position ${this.pos}, was expecting object delimiter but found '${String.fromCharCode(this.ch())}'`);
                this.pos++;
                this.skipWhitespace();
            case 'obj-start':
                {
                    this.modeStack.pop();
                    if (this.ch() === 125) {
                        this.pos++;
                        this.skipWhitespace();
                        return new token.Token(token.Type.break, undefined, 1);
                    }
                    const token$1 = this.parseString();
                    this.skipWhitespace();
                    if (this.ch() !== 58) throw new Error(`${common.decodeErrPrefix} unexpected character at position ${this.pos}, was expecting key/value delimiter ':' but found '${String.fromCharCode(this.ch())}'`);
                    this.pos++;
                    this.modeStack.push('obj-value');
                    return token$1;
                }
            case 'obj-value':
                this.modeStack.pop();
                this.modeStack.push('obj-key');
                this.skipWhitespace();
                return this.parseValue();
            default:
                throw new Error(`${common.decodeErrPrefix} unexpected parse state at position ${this.pos}; this shouldn't happen`);
        }
    }
}
function decode(data, options) {
    options = Object.assign({
        tokenizer: new Tokenizer(data, options)
    }, options);
    return decode$1.decode(data, options);
}
exports.Tokenizer = Tokenizer;
exports.decode = decode;

},{"../decode.js":"iQNJQ","../token.js":"hzdrM","../byte-utils.js":"109Ms","../common.js":"f327c"}],"2OjDT":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decode = exports.encode = exports.toGeneral = exports.code = exports.name = void 0;
const signing_1 = __importDefault(require("./signing"));
const encryption_1 = __importDefault(require("./encryption"));
const cbor = __importStar(require("@ipld/dag-cbor"));
exports.name = 'dag-jose';
exports.code = 133;
function isDagJWS(jose) {
    return 'payload' in jose && typeof jose.payload === 'string' && 'signatures' in jose && Array.isArray(jose.signatures);
}
function isEncodedJWS(jose) {
    return 'payload' in jose && jose.payload instanceof Uint8Array && 'signatures' in jose && Array.isArray(jose.signatures);
}
function isEncodedJWE(jose) {
    return 'ciphertext' in jose && jose.ciphertext instanceof Uint8Array && 'iv' in jose && jose.iv instanceof Uint8Array && 'protected' in jose && jose.protected instanceof Uint8Array && 'tag' in jose && jose.tag instanceof Uint8Array;
}
function isDagJWE(jose) {
    return 'ciphertext' in jose && typeof jose.ciphertext === 'string' && 'iv' in jose && typeof jose.iv === 'string' && 'protected' in jose && typeof jose.protected === 'string' && 'tag' in jose && typeof jose.tag === 'string';
}
function toGeneral(jose) {
    if (typeof jose === 'string') {
        const split = jose.split('.');
        if (split.length === 3) return signing_1.default.fromSplit(split);
        else if (split.length === 5) return encryption_1.default.fromSplit(split);
        throw new Error('Not a valid JOSE string');
    }
    if (isDagJWS(jose) || isDagJWE(jose)) return jose;
    throw new Error('Not a valid unencoded JOSE object');
}
exports.toGeneral = toGeneral;
function encode(obj) {
    if (typeof obj === 'string') obj = toGeneral(obj);
    let encodedJose;
    if (isDagJWS(obj)) encodedJose = signing_1.default.encode(obj);
    else if (isDagJWE(obj)) encodedJose = encryption_1.default.encode(obj);
    else throw new Error('Not a valid JOSE object');
    return new Uint8Array(cbor.encode(encodedJose));
}
exports.encode = encode;
function decode(data) {
    let encoded;
    try {
        encoded = cbor.decode(data);
    } catch (e) {
        throw new Error('Not a valid DAG-JOSE object');
    }
    if (isEncodedJWS(encoded)) return signing_1.default.decode(encoded);
    else if (isEncodedJWE(encoded)) return encryption_1.default.decode(encoded);
    else throw new Error('Not a valid DAG-JOSE object');
}
exports.decode = decode;

},{"./signing":"kcQKO","./encryption":"h2qll","@ipld/dag-cbor":"7MdtT"}],"kcQKO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const utils_1 = require("./utils");
const cid_1 = require("multiformats/cid");
function fromSplit(split) {
    const [protectedHeader, payload, signature] = split;
    return {
        payload,
        signatures: [
            {
                protected: protectedHeader,
                signature
            }
        ],
        link: cid_1.CID.decode(utils_1.fromBase64url(payload))
    };
}
function encodeSignature(signature) {
    const encoded = {
        signature: utils_1.fromBase64url(signature.signature)
    };
    if (signature.header) encoded.header = signature.header;
    if (signature.protected) encoded.protected = utils_1.fromBase64url(signature.protected);
    return encoded;
}
function encode(jws) {
    const payload = utils_1.fromBase64url(jws.payload);
    try {
        cid_1.CID.decode(payload);
    } catch (e) {
        throw new Error('Not a valid DagJWS');
    }
    const encodedJws = {
        payload,
        signatures: jws.signatures.map(encodeSignature)
    };
    return encodedJws;
}
function decodeSignature(encoded) {
    const sign = {
        signature: utils_1.toBase64url(encoded.signature)
    };
    if (encoded.header) sign.header = encoded.header;
    if (encoded.protected) sign.protected = utils_1.toBase64url(encoded.protected);
    return sign;
}
function decode(encoded) {
    const decoded = {
        payload: utils_1.toBase64url(encoded.payload),
        signatures: encoded.signatures.map(decodeSignature)
    };
    decoded.link = cid_1.CID.decode(new Uint8Array(encoded.payload));
    return decoded;
}
exports.default = {
    fromSplit,
    encode,
    decode
};

},{"./utils":"fDOHm","multiformats/cid":"4uoBU"}],"fDOHm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromBase64url = exports.toBase64url = void 0;
const base64_1 = require("multiformats/bases/base64");
function toBase64url(b) {
    return base64_1.base64url.encode(b).slice(1);
}
exports.toBase64url = toBase64url;
function fromBase64url(s) {
    return base64_1.base64url.decode(`u${s}`);
}
exports.fromBase64url = fromBase64url;

},{"multiformats/bases/base64":"3gCnk"}],"h2qll":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const utils_1 = require("./utils");
function fromSplit(split) {
    const [protectedHeader, encrypted_key, iv, ciphertext, tag] = split;
    const jwe = {
        ciphertext,
        iv,
        protected: protectedHeader,
        tag
    };
    if (encrypted_key) jwe.recipients = [
        {
            encrypted_key
        }
    ];
    return jwe;
}
function encodeRecipient(recipient) {
    const encRec = {
    };
    if (recipient.encrypted_key) encRec.encrypted_key = utils_1.fromBase64url(recipient.encrypted_key);
    if (recipient.header) encRec.header = recipient.header;
    return encRec;
}
function encode(jwe) {
    const encJwe = {
        ciphertext: utils_1.fromBase64url(jwe.ciphertext),
        protected: utils_1.fromBase64url(jwe.protected),
        iv: utils_1.fromBase64url(jwe.iv),
        tag: utils_1.fromBase64url(jwe.tag)
    };
    if (jwe.aad) encJwe.aad = utils_1.fromBase64url(jwe.aad);
    if (jwe.recipients) encJwe.recipients = jwe.recipients.map(encodeRecipient);
    if (jwe.unprotected) encJwe.unprotected = jwe.unprotected;
    return encJwe;
}
function decodeRecipient(encoded) {
    const recipient = {
    };
    if (encoded.encrypted_key) recipient.encrypted_key = utils_1.toBase64url(encoded.encrypted_key);
    if (encoded.header) recipient.header = encoded.header;
    return recipient;
}
function decode(encoded) {
    const jwe = {
        ciphertext: utils_1.toBase64url(encoded.ciphertext),
        protected: utils_1.toBase64url(encoded.protected),
        iv: utils_1.toBase64url(encoded.iv),
        tag: utils_1.toBase64url(encoded.tag)
    };
    if (encoded.aad) jwe.aad = utils_1.toBase64url(encoded.aad);
    if (encoded.recipients) jwe.recipients = encoded.recipients.map(decodeRecipient);
    if (encoded.unprotected) jwe.unprotected = encoded.unprotected;
    return jwe;
}
exports.default = {
    fromSplit,
    decode,
    encode
};

},{"./utils":"fDOHm"}],"7MdtT":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cborg = require('cborg');
var cid = require('multiformats/cid');
function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) Object.keys(e).forEach(function(k) {
        if (k !== 'default') {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
                enumerable: true,
                get: function() {
                    return e[k];
                }
            });
        }
    });
    n["default"] = e;
    return Object.freeze(n);
}
var cborg__namespace = /*#__PURE__*/ _interopNamespace(cborg);
const CID_CBOR_TAG = 42;
function cidEncoder(obj) {
    if (obj.asCID !== obj) return null;
    const cid$1 = cid.CID.asCID(obj);
    if (!cid$1) return null;
    const bytes = new Uint8Array(cid$1.bytes.byteLength + 1);
    bytes.set(cid$1.bytes, 1);
    return [
        new cborg__namespace.Token(cborg__namespace.Type.tag, CID_CBOR_TAG),
        new cborg__namespace.Token(cborg__namespace.Type.bytes, bytes)
    ];
}
function undefinedEncoder() {
    throw new Error('`undefined` is not supported by the IPLD Data Model and cannot be encoded');
}
function numberEncoder(num) {
    if (Number.isNaN(num)) throw new Error('`NaN` is not supported by the IPLD Data Model and cannot be encoded');
    if (num === Infinity || num === -Infinity) throw new Error('`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded');
    return null;
}
const encodeOptions = {
    float64: true,
    typeEncoders: {
        Object: cidEncoder,
        undefined: undefinedEncoder,
        number: numberEncoder
    }
};
function cidDecoder(bytes) {
    if (bytes[0] !== 0) throw new Error('Invalid CID for CBOR tag 42; expected leading 0x00');
    return cid.CID.decode(bytes.subarray(1));
}
const decodeOptions = {
    allowIndefinite: false,
    allowUndefined: false,
    allowNaN: false,
    allowInfinity: false,
    allowBigInt: true,
    strict: true,
    useMaps: false,
    tags: []
};
decodeOptions.tags[CID_CBOR_TAG] = cidDecoder;
const name = 'dag-cbor';
const code = 113;
const encode = (node)=>cborg__namespace.encode(node, encodeOptions)
;
const decode = (data)=>cborg__namespace.decode(data, decodeOptions)
;
exports.code = code;
exports.decode = decode;
exports.encode = encode;
exports.name = name;

},{"cborg":"4nFLw","multiformats/cid":"4uoBU"}],"bj4ky":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var bytes = require('../bytes.js');
var digest$1 = require('./digest.js');
const code = 0;
const name = 'identity';
const encode = bytes.coerce;
const digest = (input)=>digest$1.create(code, encode(input))
;
const identity = {
    code,
    name,
    encode,
    digest
};
exports.identity = identity;

},{"../bytes.js":"ent0w","./digest.js":"9JdI8"}],"a826o":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var identity = require('./bases/identity.js');
var base2 = require('./bases/base2.js');
var base8 = require('./bases/base8.js');
var base10 = require('./bases/base10.js');
var base16 = require('./bases/base16.js');
var base32 = require('./bases/base32.js');
var base36 = require('./bases/base36.js');
var base58 = require('./bases/base58.js');
var base64 = require('./bases/base64.js');
var sha2 = require('./hashes/sha2.js');
var identity$1 = require('./hashes/identity.js');
var raw = require('./codecs/raw.js');
var json = require('./codecs/json.js');
require('./index.js');
var cid = require('./cid.js');
var hasher = require('./hashes/hasher.js');
var digest = require('./hashes/digest.js');
var varint = require('./varint.js');
var bytes = require('./bytes.js');
const bases = {
    ...identity,
    ...base2,
    ...base8,
    ...base10,
    ...base16,
    ...base32,
    ...base36,
    ...base58,
    ...base64
};
const hashes = {
    ...sha2,
    ...identity$1
};
const codecs = {
    raw,
    json
};
exports.CID = cid.CID;
exports.hasher = hasher;
exports.digest = digest;
exports.varint = varint;
exports.bytes = bytes;
exports.bases = bases;
exports.codecs = codecs;
exports.hashes = hashes;

},{"./bases/identity.js":"jy16e","./bases/base2.js":"jAOxB","./bases/base8.js":"3WMjP","./bases/base10.js":"aFB7O","./bases/base16.js":"e5DKK","./bases/base32.js":"apmz1","./bases/base36.js":"22c8Y","./bases/base58.js":"9KkrI","./bases/base64.js":"3gCnk","./hashes/sha2.js":"7U0mx","./hashes/identity.js":"bj4ky","./codecs/raw.js":"cxcPD","./codecs/json.js":"7lUAp","./index.js":"3QFUn","./cid.js":"4uoBU","./hashes/hasher.js":"lU6YS","./hashes/digest.js":"9JdI8","./varint.js":"8P1F2","./bytes.js":"ent0w"}],"jy16e":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var base = require('./base.js');
var bytes = require('../bytes.js');
const identity = base.from({
    prefix: '\0',
    name: 'identity',
    encode: (buf)=>bytes.toString(buf)
    ,
    decode: (str)=>bytes.fromString(str)
});
exports.identity = identity;

},{"./base.js":"j888T","../bytes.js":"ent0w"}],"jAOxB":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var base = require('./base.js');
const base2 = base.rfc4648({
    prefix: '0',
    name: 'base2',
    alphabet: '01',
    bitsPerChar: 1
});
exports.base2 = base2;

},{"./base.js":"j888T"}],"3WMjP":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var base = require('./base.js');
const base8 = base.rfc4648({
    prefix: '7',
    name: 'base8',
    alphabet: '01234567',
    bitsPerChar: 3
});
exports.base8 = base8;

},{"./base.js":"j888T"}],"aFB7O":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var base = require('./base.js');
const base10 = base.baseX({
    prefix: '9',
    name: 'base10',
    alphabet: '0123456789'
});
exports.base10 = base10;

},{"./base.js":"j888T"}],"e5DKK":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var base = require('./base.js');
const base16 = base.rfc4648({
    prefix: 'f',
    name: 'base16',
    alphabet: '0123456789abcdef',
    bitsPerChar: 4
});
const base16upper = base.rfc4648({
    prefix: 'F',
    name: 'base16upper',
    alphabet: '0123456789ABCDEF',
    bitsPerChar: 4
});
exports.base16 = base16;
exports.base16upper = base16upper;

},{"./base.js":"j888T"}],"22c8Y":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var base = require('./base.js');
const base36 = base.baseX({
    prefix: 'k',
    name: 'base36',
    alphabet: '0123456789abcdefghijklmnopqrstuvwxyz'
});
const base36upper = base.baseX({
    prefix: 'K',
    name: 'base36upper',
    alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
});
exports.base36 = base36;
exports.base36upper = base36upper;

},{"./base.js":"j888T"}],"7U0mx":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var hasher = require('./hasher.js');
const sha = (name)=>async (data)=>new Uint8Array(await crypto.subtle.digest(name, data))
;
const sha256 = hasher.from({
    name: 'sha2-256',
    code: 18,
    encode: sha('SHA-256')
});
const sha512 = hasher.from({
    name: 'sha2-512',
    code: 19,
    encode: sha('SHA-512')
});
exports.sha256 = sha256;
exports.sha512 = sha512;

},{"./hasher.js":"lU6YS"}],"cxcPD":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var bytes = require('../bytes.js');
const name = 'raw';
const code = 85;
const encode = (node)=>bytes.coerce(node)
;
const decode = (data)=>bytes.coerce(data)
;
exports.code = code;
exports.decode = decode;
exports.encode = encode;
exports.name = name;

},{"../bytes.js":"ent0w"}],"7lUAp":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
const name = 'json';
const code = 512;
const encode = (node)=>textEncoder.encode(JSON.stringify(node))
;
const decode = (data)=>JSON.parse(textDecoder.decode(data))
;
exports.code = code;
exports.decode = decode;
exports.encode = encode;
exports.name = name;

},{}],"dO657":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var wantlist = require('./wantlist.js');
var wantlistForPeer = require('./wantlist-for-peer.js');
var stat = require('./stat.js');
var unwant = require('./unwant.js');
function createBitswap(config) {
    return {
        wantlist: wantlist.createWantlist(config),
        wantlistForPeer: wantlistForPeer.createWantlistForPeer(config),
        unwant: unwant.createUnwant(config),
        stat: stat.createStat(config)
    };
}
exports.createBitswap = createBitswap;

},{"./wantlist.js":"cRlod","./wantlist-for-peer.js":"ipp6v","./stat.js":"7SuGW","./unwant.js":"5CJsB"}],"cRlod":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createWantlist = configure.configure((api)=>{
    async function wantlist(options = {
    }) {
        const res = await (await api.post('bitswap/wantlist', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        })).json();
        return (res.Keys || []).map((k)=>cid.CID.parse(k['/'])
        );
    }
    return wantlist;
});
exports.createWantlist = createWantlist;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"7w4Kn":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var core = require('./core.js');
const configure = (fn)=>{
    return (options)=>{
        return fn(new core.Client(options), options);
    };
};
exports.configure = configure;

},{"./core.js":"j0PUE"}],"j0PUE":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var multiaddr = require('multiaddr');
var env_js = require('ipfs-utils/src/env.js');
var parseDuration = require('parse-duration');
var debug = require('debug');
var HTTP = require('ipfs-utils/src/http.js');
var mergeOpts = require('merge-options');
var toUrlString = require('ipfs-core-utils/to-url-string');
var getAgent = require('ipfs-core-utils/agent');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var parseDuration__default = /*#__PURE__*/ _interopDefaultLegacy(parseDuration);
var debug__default = /*#__PURE__*/ _interopDefaultLegacy(debug);
var HTTP__default = /*#__PURE__*/ _interopDefaultLegacy(HTTP);
var mergeOpts__default = /*#__PURE__*/ _interopDefaultLegacy(mergeOpts);
var getAgent__default = /*#__PURE__*/ _interopDefaultLegacy(getAgent);
const log = debug__default["default"]('ipfs-http-client:lib:error-handler');
const merge = mergeOpts__default["default"].bind({
    ignoreUndefined: true
});
const DEFAULT_PROTOCOL = env_js.isBrowser || env_js.isWebWorker ? location.protocol : 'http';
const DEFAULT_HOST = env_js.isBrowser || env_js.isWebWorker ? location.hostname : 'localhost';
const DEFAULT_PORT = env_js.isBrowser || env_js.isWebWorker ? location.port : '5001';
const normalizeOptions = (options = {
})=>{
    let url;
    let opts = {
    };
    let agent;
    if (typeof options === 'string' || multiaddr.Multiaddr.isMultiaddr(options)) url = new URL(toUrlString.toUrlString(options));
    else if (options instanceof URL) url = options;
    else if (typeof options.url === 'string' || multiaddr.Multiaddr.isMultiaddr(options.url)) {
        url = new URL(toUrlString.toUrlString(options.url));
        opts = options;
    } else if (options.url instanceof URL) {
        url = options.url;
        opts = options;
    } else {
        opts = options || {
        };
        const protocol = (opts.protocol || DEFAULT_PROTOCOL).replace(':', '');
        const host = (opts.host || DEFAULT_HOST).split(':')[0];
        const port = opts.port || DEFAULT_PORT;
        url = new URL(`${protocol}://${host}:${port}`);
    }
    if (opts.apiPath) url.pathname = opts.apiPath;
    else if (url.pathname === '/' || url.pathname === undefined) url.pathname = 'api/v0';
    if (env_js.isNode) {
        const Agent = getAgent__default["default"](url);
        agent = opts.agent || new Agent({
            keepAlive: true,
            maxSockets: 6
        });
    }
    return {
        ...opts,
        host: url.host,
        protocol: url.protocol.replace(':', ''),
        port: Number(url.port),
        apiPath: url.pathname,
        url,
        agent
    };
};
const errorHandler = async (response)=>{
    let msg;
    try {
        if ((response.headers.get('Content-Type') || '').startsWith('application/json')) {
            const data = await response.json();
            log(data);
            msg = data.Message || data.message;
        } else msg = await response.text();
    } catch (err) {
        log('Failed to parse error response', err);
        msg = err.message;
    }
    let error = new HTTP__default["default"].HTTPError(response);
    if (msg) {
        if (msg.includes('deadline has elapsed')) error = new HTTP__default["default"].TimeoutError();
        if (msg && msg.includes('context deadline exceeded')) error = new HTTP__default["default"].TimeoutError();
    }
    if (msg && msg.includes('request timed out')) error = new HTTP__default["default"].TimeoutError();
    if (msg) error.message = msg;
    throw error;
};
const KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;
const kebabCase = (str)=>{
    return str.replace(KEBAB_REGEX, function(match) {
        return '-' + match.toLowerCase();
    });
};
const parseTimeout = (value)=>{
    return typeof value === 'string' ? parseDuration__default["default"](value) : value;
};
class Client extends HTTP__default["default"] {
    constructor(options1 = {
    }){
        const opts = normalizeOptions(options1);
        super({
            timeout: parseTimeout(opts.timeout || 0) || undefined,
            headers: opts.headers,
            base: `${opts.url}`,
            handleError: errorHandler,
            transformSearchParams: (search)=>{
                const out = new URLSearchParams();
                for (const [key, value] of search){
                    if (value !== 'undefined' && value !== 'null' && key !== 'signal') out.append(kebabCase(key), value);
                    if (key === 'timeout' && !isNaN(value)) out.append(kebabCase(key), value);
                }
                return out;
            },
            agent: opts.agent
        });
        delete this.get;
        delete this.put;
        delete this.delete;
        delete this.options;
        const fetch = this.fetch;
        this.fetch = (resource, options = {
        })=>{
            if (typeof resource === 'string' && !resource.startsWith('/')) resource = `${opts.url}/${resource}`;
            return fetch.call(this, resource, merge(options, {
                method: 'POST'
            }));
        };
    }
}
const HTTPError = HTTP__default["default"].HTTPError;
exports.Client = Client;
exports.HTTPError = HTTPError;
exports.errorHandler = errorHandler;

},{"multiaddr":"dOMJu","ipfs-utils/src/env.js":"5o7RW","parse-duration":"2yIG1","debug":"l0oUb","ipfs-utils/src/http.js":"j20vN","merge-options":"4XlQf","ipfs-core-utils/to-url-string":"4gG9j","ipfs-core-utils/agent":"iNj99"}],"dOMJu":[function(require,module,exports) {
'use strict';
const codec = require('./codec');
const protocols = require('./protocols-table');
const varint = require('varint');
const { CID  } = require('multiformats/cid');
const { base58btc  } = require('multiformats/bases/base58');
const errCode = require('err-code');
const inspect = Symbol.for('nodejs.util.inspect.custom');
const { toString: uint8ArrayToString  } = require('uint8arrays/to-string');
const { equals: uint8ArrayEquals  } = require('uint8arrays/equals');
/**
 * @typedef {(addr: Multiaddr) => Promise<string[]>} Resolver
 * @typedef {string | Multiaddr | Uint8Array | null} MultiaddrInput
 * @typedef {import('./types').MultiaddrObject} MultiaddrObject
 * @typedef {import('./types').Protocol} Protocol
 */ /** @type {Map<string, Resolver>} */ const resolvers = new Map();
const symbol = Symbol.for('@multiformats/js-multiaddr/multiaddr');
/**
 * Creates a [multiaddr](https://github.com/multiformats/multiaddr) from
 * a Uint8Array, String or another Multiaddr instance
 * public key.
 *
 */ class Multiaddr {
    /**
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   * ```
   *
   * @param {MultiaddrInput} [addr] - If String or Uint8Array, needs to adhere to the address format of a [multiaddr](https://github.com/multiformats/multiaddr#string-format)
   */ constructor(addr){
        // default
        if (addr == null) addr = '';
        // Define symbol
        Object.defineProperty(this, symbol, {
            value: true
        });
        if (addr instanceof Uint8Array) /** @type {Uint8Array} - The raw bytes representing this multiaddress */ this.bytes = codec.fromBytes(addr);
        else if (typeof addr === 'string') {
            if (addr.length > 0 && addr.charAt(0) !== '/') throw new Error(`multiaddr "${addr}" must start with a "/"`);
            this.bytes = codec.fromString(addr);
        } else if (Multiaddr.isMultiaddr(addr)) this.bytes = codec.fromBytes(addr.bytes) // validate + copy buffer
        ;
        else throw new Error('addr must be a string, Buffer, or another Multiaddr');
    }
    /**
   * Returns Multiaddr as a String
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').toString()
   * // '/ip4/127.0.0.1/tcp/4001'
   * ```
   */ toString() {
        return codec.bytesToString(this.bytes);
    }
    /**
   * Returns Multiaddr as a JSON encoded object
   *
   * @example
   * ```js
   * JSON.stringify(new Multiaddr('/ip4/127.0.0.1/tcp/4001'))
   * // '/ip4/127.0.0.1/tcp/4001'
   * ```
   */ toJSON() {
        return this.toString();
    }
    /**
   * Returns Multiaddr as a convinient options object to be used with net.createConnection
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').toOptions()
   * // { family: 4, host: '127.0.0.1', transport: 'tcp', port: 4001 }
   * ```
   */ toOptions() {
        /** @type {MultiaddrObject} */ const opts = {
        };
        const parsed = this.toString().split('/');
        opts.family = parsed[1] === 'ip4' ? 4 : 6;
        opts.host = parsed[2];
        opts.transport = parsed[3];
        opts.port = parseInt(parsed[4]);
        return opts;
    }
    /**
   * Returns the protocols the Multiaddr is defined with, as an array of objects, in
   * left-to-right order. Each object contains the protocol code, protocol name,
   * and the size of its address space in bits.
   * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').protos()
   * // [ { code: 4, size: 32, name: 'ip4' },
   * //   { code: 6, size: 16, name: 'tcp' } ]
   * ```
   *
   * @returns {Protocol[]} protocols - All the protocols the address is composed of
   */ protos() {
        return this.protoCodes().map((code)=>Object.assign({
            }, protocols(code))
        );
    }
    /**
   * Returns the codes of the protocols in left-to-right order.
   * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
   *
   * @example
   * ```js
   * Multiaddr('/ip4/127.0.0.1/tcp/4001').protoCodes()
   * // [ 4, 6 ]
   * ```
   *
   * @returns {number[]} protocol codes
   */ protoCodes() {
        const codes = [];
        const buf = this.bytes;
        let i = 0;
        while(i < buf.length){
            const code = varint.decode(buf, i);
            const n = varint.decode.bytes;
            const p = protocols(code);
            const size = codec.sizeForAddr(p, buf.slice(i + n));
            i += size + n;
            codes.push(code);
        }
        return codes;
    }
    /**
   * Returns the names of the protocols in left-to-right order.
   * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').protoNames()
   * // [ 'ip4', 'tcp' ]
   * ```
   *
   * @returns {string[]} protocol names
   */ protoNames() {
        return this.protos().map((proto)=>proto.name
        );
    }
    /**
   * Returns a tuple of parts
   *
   * @example
   * ```js
   * new Multiaddr("/ip4/127.0.0.1/tcp/4001").tuples()
   * // [ [ 4, <Buffer 7f 00 00 01> ], [ 6, <Buffer 0f a1> ] ]
   * ```
   */ tuples() {
        return codec.bytesToTuples(this.bytes);
    }
    /**
   * Returns a tuple of string/number parts
   * - tuples[][0] = code of protocol
   * - tuples[][1] = contents of address
   *
   * @example
   * ```js
   * new Multiaddr("/ip4/127.0.0.1/tcp/4001").stringTuples()
   * // [ [ 4, '127.0.0.1' ], [ 6, '4001' ] ]
   * ```
   */ stringTuples() {
        const t = codec.bytesToTuples(this.bytes);
        return codec.tuplesToStringTuples(t);
    }
    /**
   * Encapsulates a Multiaddr in another Multiaddr
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
   *
   * const mh2 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   *
   * const mh3 = mh1.encapsulate(mh2)
   * // <Multiaddr 0408080808060438047f000001060fa1 - /ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001>
   *
   * mh3.toString()
   * // '/ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001'
   * ```
   *
   * @param {MultiaddrInput} addr - Multiaddr to add into this Multiaddr
   */ encapsulate(addr) {
        addr = new Multiaddr(addr);
        return new Multiaddr(this.toString() + addr.toString());
    }
    /**
   * Decapsulates a Multiaddr from another Multiaddr
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
   *
   * const mh2 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   *
   * const mh3 = mh1.encapsulate(mh2)
   * // <Multiaddr 0408080808060438047f000001060fa1 - /ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001>
   *
   * mh3.decapsulate(mh2).toString()
   * // '/ip4/8.8.8.8/tcp/1080'
   * ```
   *
   * @param {Multiaddr | string} addr - Multiaddr to remove from this Multiaddr
   * @returns {Multiaddr}
   */ decapsulate(addr) {
        const addrString = addr.toString();
        const s = this.toString();
        const i = s.lastIndexOf(addrString);
        if (i < 0) throw new Error('Address ' + this + ' does not contain subaddress: ' + addr);
        return new Multiaddr(s.slice(0, i));
    }
    /**
   * A more reliable version of `decapsulate` if you are targeting a
   * specific code, such as 421 (the `p2p` protocol code). The last index of the code
   * will be removed from the `Multiaddr`, and a new instance will be returned.
   * If the code is not present, the original `Multiaddr` is returned.
   *
   * @example
   * ```js
   * const addr = new Multiaddr('/ip4/0.0.0.0/tcp/8080/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSupNKC')
   * // <Multiaddr 0400... - /ip4/0.0.0.0/tcp/8080/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSupNKC>
   *
   * addr.decapsulateCode(421).toString()
   * // '/ip4/0.0.0.0/tcp/8080'
   *
   * new Multiaddr('/ip4/127.0.0.1/tcp/8080').decapsulateCode(421).toString()
   * // '/ip4/127.0.0.1/tcp/8080'
   * ```
   *
   * @param {number} code - The code of the protocol to decapsulate from this Multiaddr
   * @returns {Multiaddr}
   */ decapsulateCode(code) {
        const tuples = this.tuples();
        for(let i = tuples.length - 1; i >= 0; i--){
            if (tuples[i][0] === code) return new Multiaddr(codec.tuplesToBytes(tuples.slice(0, i)));
        }
        return this;
    }
    /**
   * Extract the peerId if the multiaddr contains one
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080/ipfs/QmValidBase58string')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080/ipfs/QmValidBase58string>
   *
   * // should return QmValidBase58string or null if the id is missing or invalid
   * const peerId = mh1.getPeerId()
   * ```
   *
   * @returns {string | null} peerId - The id of the peer or null if invalid or missing from the ma
   */ getPeerId() {
        try {
            const tuples = this.stringTuples().filter((tuple)=>{
                if (tuple[0] === protocols.names.ipfs.code) return true;
                return false;
            });
            // Get the last ipfs tuple ['ipfs', 'peerid string']
            const tuple1 = tuples.pop();
            if (tuple1 && tuple1[1]) {
                const peerIdStr = tuple1[1];
                // peer id is base58btc encoded string but not multibase encoded so add the `z`
                // prefix so we can validate that it is correctly encoded
                if (peerIdStr[0] === 'Q' || peerIdStr[0] === '1') return uint8ArrayToString(base58btc.decode(`z${peerIdStr}`), 'base58btc');
                // try to parse peer id as CID
                return uint8ArrayToString(CID.parse(peerIdStr).multihash.bytes, 'base58btc');
            }
            return null;
        } catch (e) {
            return null;
        }
    }
    /**
   * Extract the path if the multiaddr contains one
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080/unix/tmp/p2p.sock')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080/unix/tmp/p2p.sock>
   *
   * // should return utf8 string or null if the id is missing or invalid
   * const path = mh1.getPath()
   * ```js
   *
   * @returns {string | null} path - The path of the multiaddr, or null if no path protocol is present
   */ getPath() {
        let path = null;
        try {
            path = this.stringTuples().filter((tuple)=>{
                const proto = protocols(tuple[0]);
                if (proto.path) return true;
                return false;
            })[0][1];
            if (!path) path = null;
        } catch (e) {
            path = null;
        }
        return path;
    }
    /**
   * Checks if two Multiaddrs are the same
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
   *
   * const mh2 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   *
   * mh1.equals(mh1)
   * // true
   *
   * mh1.equals(mh2)
   * // false
   * ```
   *
   * @param {Multiaddr} addr
   * @returns {boolean}
   */ equals(addr) {
        return uint8ArrayEquals(this.bytes, addr.bytes);
    }
    /**
   * Resolve multiaddr if containing resolvable hostname.
   *
   * @example
   * ```js
   * Multiaddr.resolvers.set('dnsaddr', resolverFunction)
   * const mh1 = new Multiaddr('/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb')
   * const resolvedMultiaddrs = await mh1.resolve()
   * // [
   * //   <Multiaddr 04934b5353060fa1a503221220c10f9319dac35c270a6b74cd644cb3acfc1f6efc8c821f8eb282599fd1814f64 - /ip4/147.75.83.83/tcp/4001/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb>,
   * //   <Multiaddr 04934b53530601bbde03a503221220c10f9319dac35c270a6b74cd644cb3acfc1f6efc8c821f8eb282599fd1814f64 - /ip4/147.75.83.83/tcp/443/wss/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb>,
   * //   <Multiaddr 04934b535391020fa1cc03a503221220c10f9319dac35c270a6b74cd644cb3acfc1f6efc8c821f8eb282599fd1814f64 - /ip4/147.75.83.83/udp/4001/quic/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb>
   * // ]
   * ```
   *
   * @returns {Promise<Array<Multiaddr>>}
   */ async resolve() {
        const resolvableProto = this.protos().find((p)=>p.resolvable
        );
        // Multiaddr is not resolvable?
        if (!resolvableProto) return [
            this
        ];
        const resolver = resolvers.get(resolvableProto.name);
        if (!resolver) throw errCode(new Error(`no available resolver for ${resolvableProto.name}`), 'ERR_NO_AVAILABLE_RESOLVER');
        const addresses = await resolver(this);
        return addresses.map((a)=>new Multiaddr(a)
        );
    }
    /**
   * Gets a Multiaddrs node-friendly address object. Note that protocol information
   * is left out: in Node (and most network systems) the protocol is unknowable
   * given only the address.
   *
   * Has to be a ThinWaist Address, otherwise throws error
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').nodeAddress()
   * // {family: 4, address: '127.0.0.1', port: 4001}
   * ```
   *
   * @returns {{family: 4 | 6, address: string, port: number}}
   * @throws {Error} Throws error if Multiaddr is not a Thin Waist address
   */ nodeAddress() {
        const codes = this.protoCodes();
        const names = this.protoNames();
        const parts = this.toString().split('/').slice(1);
        if (parts.length < 4) throw new Error('multiaddr must have a valid format: "/{ip4, ip6, dns4, dns6}/{address}/{tcp, udp}/{port}".');
        else if (codes[0] !== 4 && codes[0] !== 41 && codes[0] !== 54 && codes[0] !== 55) throw new Error(`no protocol with name: "'${names[0]}'". Must have a valid family name: "{ip4, ip6, dns4, dns6}".`);
        else if (parts[2] !== 'tcp' && parts[2] !== 'udp') throw new Error(`no protocol with name: "'${names[1]}'". Must have a valid transport protocol: "{tcp, udp}".`);
        return {
            family: codes[0] === 41 || codes[0] === 55 ? 6 : 4,
            address: parts[1],
            port: parseInt(parts[3]) // tcp or udp port
        };
    }
    /**
   * Returns if a Multiaddr is a Thin Waist address or not.
   *
   * Thin Waist is if a Multiaddr adheres to the standard combination of:
   *
   * `{IPv4, IPv6}/{TCP, UDP}`
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   * const mh2 = new Multiaddr('/ip4/192.168.2.1/tcp/5001')
   * // <Multiaddr 04c0a80201061389 - /ip4/192.168.2.1/tcp/5001>
   * const mh3 = mh1.encapsulate(mh2)
   * // <Multiaddr 047f000001060fa104c0a80201061389 - /ip4/127.0.0.1/tcp/4001/ip4/192.168.2.1/tcp/5001>
   * const mh4 = new Multiaddr('/ip4/127.0.0.1/tcp/2000/wss/p2p-webrtc-star/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSooo2a')
   * // <Multiaddr 047f0000010607d0de039302a503221220d52ebb89d85b02a284948203a62ff28389c57c9f42beec4ec20db76a64835843 - /ip4/127.0.0.1/tcp/2000/wss/p2p-webrtc-star/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSooo2a>
   * mh1.isThinWaistAddress()
   * // true
   * mh2.isThinWaistAddress()
   * // true
   * mh3.isThinWaistAddress()
   * // false
   * mh4.isThinWaistAddress()
   * // false
   * ```
   *
   * @param {Multiaddr} [addr] - Defaults to using `this` instance
   */ isThinWaistAddress(addr) {
        const protos = (addr || this).protos();
        if (protos.length !== 2) return false;
        if (protos[0].code !== 4 && protos[0].code !== 41) return false;
        if (protos[1].code !== 6 && protos[1].code !== 273) return false;
        return true;
    }
    /**
   * Creates a Multiaddr from a node-friendly address object
   *
   * @example
   * ```js
   * Multiaddr.fromNodeAddress({address: '127.0.0.1', port: '4001'}, 'tcp')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   * ```
   *
   * @param {{family: 4 | 6, address: string, port: number}} addr
   * @param {string} transport
   */ static fromNodeAddress(addr, transport) {
        if (!addr) throw new Error('requires node address object');
        if (!transport) throw new Error('requires transport protocol');
        let ip;
        switch(addr.family){
            case 4:
                ip = 'ip4';
                break;
            case 6:
                ip = 'ip6';
                break;
            default:
                throw Error(`Invalid addr family. Got '${addr.family}' instead of 4 or 6`);
        }
        return new Multiaddr('/' + [
            ip,
            addr.address,
            transport,
            addr.port
        ].join('/'));
    }
    /**
   * Returns if something is a Multiaddr that is a name
   *
   * @param {Multiaddr} addr
   * @returns {boolean} isName
   */ static isName(addr) {
        if (!Multiaddr.isMultiaddr(addr)) return false;
        // if a part of the multiaddr is resolvable, then return true
        return addr.protos().some((proto)=>proto.resolvable
        );
    }
    /**
   * Check if object is a CID instance
   *
   * @param {any} value
   * @returns {value is Multiaddr}
   */ static isMultiaddr(value) {
        return value instanceof Multiaddr || Boolean(value && value[symbol]);
    }
    /**
   * Returns Multiaddr as a human-readable string.
   * For post Node.js v10.0.0.
   * https://nodejs.org/api/deprecations.html#deprecations_dep0079_custom_inspection_function_on_objects_via_inspect
   *
   * @example
   * ```js
   * console.log(new Multiaddr('/ip4/127.0.0.1/tcp/4001'))
   * // '<Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>'
   * ```
   *
   * @returns {string}
   */ [inspect]() {
        return '<Multiaddr ' + uint8ArrayToString(this.bytes, 'base16') + ' - ' + codec.bytesToString(this.bytes) + '>';
    }
    /**
   * Returns Multiaddr as a human-readable string.
   * Fallback for pre Node.js v10.0.0.
   * https://nodejs.org/api/deprecations.html#deprecations_dep0079_custom_inspection_function_on_objects_via_inspect
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').inspect()
   * // '<Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>'
   * ```
   *
   * @returns {string}
   */ inspect() {
        return '<Multiaddr ' + uint8ArrayToString(this.bytes, 'base16') + ' - ' + codec.bytesToString(this.bytes) + '>';
    }
}
/**
 * Object containing table, names and codes of all supported protocols.
 * To get the protocol values from a Multiaddr, you can use
 * [`.protos()`](#multiaddrprotos),
 * [`.protoCodes()`](#multiaddrprotocodes) or
 * [`.protoNames()`](#multiaddrprotonames)
 *
 * @returns {{table: Array, names: Object, codes: Object}}
 */ Multiaddr.protocols = protocols;
Multiaddr.resolvers = resolvers;
/**
 * Static factory
 *
 * @param {MultiaddrInput} addr
 */ function multiaddr(addr) {
    return new Multiaddr(addr);
}
module.exports = {
    Multiaddr,
    multiaddr,
    protocols,
    resolvers
};

},{"./codec":"5HyU8","./protocols-table":"j1p40","varint":"9fMsR","multiformats/cid":"4uoBU","multiformats/bases/base58":"9KkrI","err-code":"dUrrM","uint8arrays/to-string":"w8mvE","uint8arrays/equals":"iZMnE"}],"5HyU8":[function(require,module,exports) {
'use strict';
const convert = require('./convert');
const protocols = require('./protocols-table');
const varint = require('varint');
const { concat: uint8ArrayConcat  } = require('uint8arrays/concat');
const { toString: uint8ArrayToString  } = require('uint8arrays/to-string');
// export codec
module.exports = {
    stringToStringTuples,
    stringTuplesToString,
    tuplesToStringTuples,
    stringTuplesToTuples,
    bytesToTuples,
    tuplesToBytes,
    bytesToString,
    stringToBytes,
    fromString,
    fromBytes,
    validateBytes,
    isValidBytes,
    cleanPath,
    ParseError,
    protoFromTuple,
    sizeForAddr
};
// string -> [[str name, str addr]... ]
/**
 * @param {string} str
 */ function stringToStringTuples(str) {
    const tuples = [];
    const parts = str.split('/').slice(1) // skip first empty elem
    ;
    if (parts.length === 1 && parts[0] === '') return [];
    for(let p = 0; p < parts.length; p++){
        const part = parts[p];
        const proto = protocols(part);
        if (proto.size === 0) {
            tuples.push([
                part
            ]);
            continue;
        }
        p++ // advance addr part
        ;
        if (p >= parts.length) throw ParseError('invalid address: ' + str);
        // if it's a path proto, take the rest
        if (proto.path) {
            tuples.push([
                part,
                // TODO: should we need to check each path part to see if it's a proto?
                // This would allow for other protocols to be added after a unix path,
                // however it would have issues if the path had a protocol name in the path
                cleanPath(parts.slice(p).join('/'))
            ]);
            break;
        }
        tuples.push([
            part,
            parts[p]
        ]);
    }
    return tuples;
}
// [[str name, str addr]... ] -> string
/**
 * @param {[number, string?][]} tuples
 */ function stringTuplesToString(tuples) {
    /** @type {Array<string | undefined>} */ const parts = [];
    tuples.map((tup)=>{
        const proto = protoFromTuple(tup);
        parts.push(proto.name);
        if (tup.length > 1) parts.push(tup[1]);
        return null;
    });
    return cleanPath(parts.join('/'));
}
// [[str name, str addr]... ] -> [[int code, Uint8Array]... ]
/**
 * @param {Array<string[] | string >} tuples
 * @returns {[number , Uint8Array?][]}
 */ function stringTuplesToTuples(tuples) {
    return tuples.map((tup)=>{
        if (!Array.isArray(tup)) tup = [
            tup
        ];
        const proto = protoFromTuple(tup);
        if (tup.length > 1) return [
            proto.code,
            convert.toBytes(proto.code, tup[1])
        ];
        return [
            proto.code
        ];
    });
}
/**
 * Convert tuples to string tuples
 *
 * [[int code, Uint8Array]... ] -> [[int code, str addr]... ]
 *
 * @param {Array<[number, Uint8Array?]>} tuples
 * @returns {Array<[number, string?]>}
 */ function tuplesToStringTuples(tuples) {
    return tuples.map((tup)=>{
        const proto = protoFromTuple(tup);
        if (tup[1]) return [
            proto.code,
            convert.toString(proto.code, tup[1])
        ];
        return [
            proto.code
        ];
    });
}
// [[int code, Uint8Array ]... ] -> Uint8Array
/**
 * @param {[number, Uint8Array?][]} tuples
 */ function tuplesToBytes(tuples) {
    return fromBytes(uint8ArrayConcat(tuples.map((/** @type {any[]} */ tup)=>{
        const proto = protoFromTuple(tup);
        let buf = Uint8Array.from(varint.encode(proto.code));
        if (tup.length > 1) buf = uint8ArrayConcat([
            buf,
            tup[1]
        ]) // add address buffer
        ;
        return buf;
    })));
}
/**
 * @param {import("./types").Protocol} p
 * @param {Uint8Array | number[]} addr
 */ function sizeForAddr(p, addr) {
    if (p.size > 0) return p.size / 8;
    else if (p.size === 0) return 0;
    else {
        const size = varint.decode(addr);
        return size + varint.decode.bytes;
    }
}
/**
 *
 * @param {Uint8Array} buf
 * @returns {Array<[number, Uint8Array?]>}
 */ function bytesToTuples(buf) {
    /** @type {Array<[number, Uint8Array?]>} */ const tuples = [];
    let i = 0;
    while(i < buf.length){
        const code = varint.decode(buf, i);
        const n = varint.decode.bytes;
        const p = protocols(code);
        const size = sizeForAddr(p, buf.slice(i + n));
        if (size === 0) {
            tuples.push([
                code
            ]);
            i += n;
            continue;
        }
        const addr = buf.slice(i + n, i + n + size);
        i += size + n;
        if (i > buf.length) throw ParseError('Invalid address Uint8Array: ' + uint8ArrayToString(buf, 'base16'));
        // ok, tuple seems good.
        tuples.push([
            code,
            addr
        ]);
    }
    return tuples;
}
// Uint8Array -> String
/**
 * @param {Uint8Array} buf
 */ function bytesToString(buf) {
    const a = bytesToTuples(buf);
    const b = tuplesToStringTuples(a);
    return stringTuplesToString(b);
}
// String -> Uint8Array
/**
 * @param {string} str
 */ function stringToBytes(str) {
    str = cleanPath(str);
    const a = stringToStringTuples(str);
    const b = stringTuplesToTuples(a);
    return tuplesToBytes(b);
}
// String -> Uint8Array
/**
 * @param {string} str
 */ function fromString(str) {
    return stringToBytes(str);
}
// Uint8Array -> Uint8Array
/**
 * @param {Uint8Array} buf
 */ function fromBytes(buf) {
    const err = validateBytes(buf);
    if (err) throw err;
    return Uint8Array.from(buf) // copy
    ;
}
/**
 * @param {Uint8Array} buf
 */ function validateBytes(buf) {
    try {
        bytesToTuples(buf) // try to parse. will throw if breaks
        ;
    } catch (err) {
        return err;
    }
}
/**
 * @param {Uint8Array} buf
 */ function isValidBytes(buf) {
    return validateBytes(buf) === undefined;
}
/**
 * @param {string} str
 */ function cleanPath(str) {
    return '/' + str.trim().split('/').filter((/** @type {any} */ a)=>a
    ).join('/');
}
/**
 * @param {string} str
 */ function ParseError(str) {
    return new Error('Error parsing address: ' + str);
}
/**
 * @param {any[]} tup
 */ function protoFromTuple(tup) {
    const proto = protocols(tup[0]);
    return proto;
}

},{"./convert":"3VFEe","./protocols-table":"j1p40","varint":"9fMsR","uint8arrays/concat":"gqJ9u","uint8arrays/to-string":"w8mvE"}],"3VFEe":[function(require,module,exports) {
'use strict';
const ip = require('./ip');
const protocols = require('./protocols-table');
const { CID  } = require('multiformats/cid');
const { base32  } = require('multiformats/bases/base32');
const { base58btc  } = require('multiformats/bases/base58');
const Digest = require('multiformats/hashes/digest');
const varint = require('varint');
const { toString: uint8ArrayToString  } = require('uint8arrays/to-string');
const { fromString: uint8ArrayFromString  } = require('uint8arrays/from-string');
const { concat: uint8ArrayConcat  } = require('uint8arrays/concat');
module.exports = Convert;
// converts (serializes) addresses
/**
 * @param {string} proto
 * @param {string | Uint8Array} a
 */ function Convert(proto, a) {
    if (a instanceof Uint8Array) return Convert.toString(proto, a);
    else return Convert.toBytes(proto, a);
}
/**
 * Convert [code,Uint8Array] to string
 *
 * @param {number|string} proto
 * @param {Uint8Array} buf
 * @returns {string}
 */ Convert.toString = function convertToString(proto, buf) {
    const protocol = protocols(proto);
    switch(protocol.code){
        case 4:
        case 41:
            return bytes2ip(buf);
        case 6:
        case 273:
        case 33:
        case 132:
            return bytes2port(buf).toString();
        case 53:
        case 54:
        case 55:
        case 56:
        case 400:
        case 777:
            return bytes2str(buf);
        case 421:
            return bytes2mh(buf);
        case 444:
            return bytes2onion(buf);
        case 445:
            return bytes2onion(buf);
        default:
            return uint8ArrayToString(buf, 'base16') // no clue. convert to hex
            ;
    }
};
Convert.toBytes = function convertToBytes(/** @type {string | number } */ proto, /** @type {string} */ str) {
    const protocol = protocols(proto);
    switch(protocol.code){
        case 4:
            return ip2bytes(str);
        case 41:
            return ip2bytes(str);
        case 6:
        case 273:
        case 33:
        case 132:
            return port2bytes(parseInt(str, 10));
        case 53:
        case 54:
        case 55:
        case 56:
        case 400:
        case 777:
            return str2bytes(str);
        case 421:
            return mh2bytes(str);
        case 444:
            return onion2bytes(str);
        case 445:
            return onion32bytes(str);
        default:
            return uint8ArrayFromString(str, 'base16') // no clue. convert from hex
            ;
    }
};
/**
 * @param {string} ipString
 */ function ip2bytes(ipString) {
    if (!ip.isIP(ipString)) throw new Error('invalid ip address');
    return ip.toBytes(ipString);
}
/**
 * @param {Uint8Array} ipBuff
 */ function bytes2ip(ipBuff) {
    const ipString = ip.toString(ipBuff);
    if (!ipString || !ip.isIP(ipString)) throw new Error('invalid ip address');
    return ipString;
}
/**
 * @param {number} port
 */ function port2bytes(port) {
    const buf = new ArrayBuffer(2);
    const view = new DataView(buf);
    view.setUint16(0, port);
    return new Uint8Array(buf);
}
/**
 * @param {Uint8Array} buf
 */ function bytes2port(buf) {
    const view = new DataView(buf.buffer);
    return view.getUint16(buf.byteOffset);
}
/**
 * @param {string} str
 */ function str2bytes(str) {
    const buf = uint8ArrayFromString(str);
    const size = Uint8Array.from(varint.encode(buf.length));
    return uint8ArrayConcat([
        size,
        buf
    ], size.length + buf.length);
}
/**
 * @param {Uint8Array} buf
 */ function bytes2str(buf) {
    const size = varint.decode(buf);
    buf = buf.slice(varint.decode.bytes);
    if (buf.length !== size) throw new Error('inconsistent lengths');
    return uint8ArrayToString(buf);
}
/**
 * @param {string} hash - base58btc string
 */ function mh2bytes(hash) {
    let mh;
    if (hash[0] === 'Q' || hash[0] === '1') mh = Digest.decode(base58btc.decode(`z${hash}`)).bytes;
    else mh = CID.parse(hash).multihash.bytes;
    // the address is a varint prefixed multihash string representation
    const size = Uint8Array.from(varint.encode(mh.length));
    return uint8ArrayConcat([
        size,
        mh
    ], size.length + mh.length);
}
/**
 * Converts bytes to bas58btc string
 *
 * @param {Uint8Array} buf
 * @returns {string} base58btc string
 */ function bytes2mh(buf) {
    const size = varint.decode(buf);
    const address = buf.slice(varint.decode.bytes);
    if (address.length !== size) throw new Error('inconsistent lengths');
    return uint8ArrayToString(address, 'base58btc');
}
/**
 * @param {string} str
 */ function onion2bytes(str) {
    const addr = str.split(':');
    if (addr.length !== 2) throw new Error('failed to parse onion addr: ' + addr + ' does not contain a port number');
    if (addr[0].length !== 16) throw new Error('failed to parse onion addr: ' + addr[0] + ' not a Tor onion address.');
    // onion addresses do not include the multibase prefix, add it before decoding
    const buf = base32.decode('b' + addr[0]);
    // onion port number
    const port = parseInt(addr[1], 10);
    if (port < 1 || port > 65536) throw new Error('Port number is not in range(1, 65536)');
    const portBuf = port2bytes(port);
    return uint8ArrayConcat([
        buf,
        portBuf
    ], buf.length + portBuf.length);
}
/**
 * @param {string} str
 */ function onion32bytes(str) {
    const addr = str.split(':');
    if (addr.length !== 2) throw new Error('failed to parse onion addr: ' + addr + ' does not contain a port number');
    if (addr[0].length !== 56) throw new Error('failed to parse onion addr: ' + addr[0] + ' not a Tor onion3 address.');
    // onion addresses do not include the multibase prefix, add it before decoding
    const buf = base32.decode('b' + addr[0]);
    // onion port number
    const port = parseInt(addr[1], 10);
    if (port < 1 || port > 65536) throw new Error('Port number is not in range(1, 65536)');
    const portBuf = port2bytes(port);
    return uint8ArrayConcat([
        buf,
        portBuf
    ], buf.length + portBuf.length);
}
/**
 * @param {Uint8Array} buf
 */ function bytes2onion(buf) {
    const addrBytes = buf.slice(0, buf.length - 2);
    const portBytes = buf.slice(buf.length - 2);
    const addr = uint8ArrayToString(addrBytes, 'base32');
    const port = bytes2port(portBytes);
    return addr + ':' + port;
}

},{"./ip":"ktWPM","./protocols-table":"j1p40","multiformats/cid":"4uoBU","multiformats/bases/base32":"apmz1","multiformats/bases/base58":"9KkrI","multiformats/hashes/digest":"9JdI8","varint":"9fMsR","uint8arrays/to-string":"w8mvE","uint8arrays/from-string":"7qjkp","uint8arrays/concat":"gqJ9u"}],"ktWPM":[function(require,module,exports) {
'use strict';
const isIp = require('is-ip');
const { toString: uint8ArrayToString  } = require('uint8arrays/to-string');
const isIP = isIp;
const isV4 = isIp.v4;
const isV6 = isIp.v6;
// Copied from https://github.com/indutny/node-ip/blob/master/lib/ip.js#L7
// @ts-ignore - this is copied from the link above better to keep it the same
const toBytes = function(ip, buff, offset) {
    offset = ~~offset;
    let result;
    if (isV4(ip)) {
        result = buff || new Uint8Array(offset + 4);
        // @ts-ignore
        // eslint-disable-next-line array-callback-return
        ip.split(/\./g).map(function(byte) {
            result[offset++] = parseInt(byte, 10) & 255;
        });
    } else if (isV6(ip)) {
        const sections = ip.split(':', 8);
        let i;
        for(i = 0; i < sections.length; i++){
            const isv4 = isV4(sections[i]);
            let v4Buffer;
            if (isv4) {
                v4Buffer = toBytes(sections[i]);
                sections[i] = uint8ArrayToString(v4Buffer.slice(0, 2), 'base16');
            }
            if (v4Buffer && ++i < 8) sections.splice(i, 0, uint8ArrayToString(v4Buffer.slice(2, 4), 'base16'));
        }
        if (sections[0] === '') while(sections.length < 8)sections.unshift('0');
        else if (sections[sections.length - 1] === '') while(sections.length < 8)sections.push('0');
        else if (sections.length < 8) {
            for(i = 0; i < sections.length && sections[i] !== ''; i++);
            const argv = [
                i,
                '1'
            ];
            for(i = 9 - sections.length; i > 0; i--)argv.push('0');
            sections.splice.apply(sections, argv);
        }
        result = buff || new Uint8Array(offset + 16);
        for(i = 0; i < sections.length; i++){
            const word = parseInt(sections[i], 16);
            result[offset++] = word >> 8 & 255;
            result[offset++] = word & 255;
        }
    }
    if (!result) throw Error('Invalid ip address: ' + ip);
    return result;
};
// Copied from https://github.com/indutny/node-ip/blob/master/lib/ip.js#L63
// @ts-ignore - this is copied from the link above better to keep it the same
const toString = function(buff, offset, length) {
    offset = ~~offset;
    length = length || buff.length - offset;
    const result = [];
    let string;
    const view = new DataView(buff.buffer);
    if (length === 4) {
        // IPv4
        for(let i = 0; i < length; i++)result.push(buff[offset + i]);
        string = result.join('.');
    } else if (length === 16) {
        // IPv6
        for(let i = 0; i < length; i += 2)result.push(view.getUint16(offset + i).toString(16));
        string = result.join(':');
        string = string.replace(/(^|:)0(:0)*:0(:|$)/, '$1::$3');
        string = string.replace(/:{3,4}/, '::');
    }
    return string;
};
module.exports = {
    isIP,
    isV4,
    isV6,
    toBytes,
    toString
};

},{"is-ip":"026DS","uint8arrays/to-string":"w8mvE"}],"026DS":[function(require,module,exports) {
'use strict';
const ipRegex = require('ip-regex');
const isIp = (string)=>ipRegex({
        exact: true
    }).test(string)
;
isIp.v4 = (string)=>ipRegex.v4({
        exact: true
    }).test(string)
;
isIp.v6 = (string)=>ipRegex.v6({
        exact: true
    }).test(string)
;
isIp.version = (string)=>isIp(string) ? isIp.v4(string) ? 4 : 6 : undefined
;
module.exports = isIp;

},{"ip-regex":"atjxC"}],"atjxC":[function(require,module,exports) {
'use strict';
const word = '[a-fA-F\\d:]';
const b = (options)=>options && options.includeBoundaries ? `(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))` : ''
;
const v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
const v6seg = '[a-fA-F\\d]{1,4}';
const v6 = `
(?:
(?:${v6seg}:){7}(?:${v6seg}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${v6seg}:){6}(?:${v4}|:${v6seg}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${v6seg}:){5}(?::${v4}|(?::${v6seg}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${v6seg}:){4}(?:(?::${v6seg}){0,1}:${v4}|(?::${v6seg}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${v6seg}:){3}(?:(?::${v6seg}){0,2}:${v4}|(?::${v6seg}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${v6seg}:){2}(?:(?::${v6seg}){0,3}:${v4}|(?::${v6seg}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${v6seg}:){1}(?:(?::${v6seg}){0,4}:${v4}|(?::${v6seg}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${v6seg}){0,5}:${v4}|(?::${v6seg}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim();
// Pre-compile only the exact regexes because adding a global flag make regexes stateful
const v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
const v4exact = new RegExp(`^${v4}$`);
const v6exact = new RegExp(`^${v6}$`);
const ip = (options)=>options && options.exact ? v46Exact : new RegExp(`(?:${b(options)}${v4}${b(options)})|(?:${b(options)}${v6}${b(options)})`, 'g')
;
ip.v4 = (options)=>options && options.exact ? v4exact : new RegExp(`${b(options)}${v4}${b(options)}`, 'g')
;
ip.v6 = (options)=>options && options.exact ? v6exact : new RegExp(`${b(options)}${v6}${b(options)}`, 'g')
;
module.exports = ip;

},{}],"w8mvE":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var bases = require('./util/bases.js');
function toString(array, encoding = 'utf8') {
    const base = bases[encoding];
    if (!base) throw new Error(`Unsupported encoding "${encoding}"`);
    return base.encoder.encode(array).substring(1);
}
exports.toString = toString;

},{"./util/bases.js":"ekopG"}],"ekopG":[function(require,module,exports) {
'use strict';
var basics = require('multiformats/basics');
function createCodec(name, prefix, encode, decode) {
    return {
        name,
        prefix,
        encoder: {
            name,
            prefix,
            encode
        },
        decoder: {
            decode
        }
    };
}
const string = createCodec('utf8', 'u', (buf)=>{
    const decoder = new TextDecoder('utf8');
    return 'u' + decoder.decode(buf);
}, (str)=>{
    const encoder = new TextEncoder();
    return encoder.encode(str.substring(1));
});
const ascii = createCodec('ascii', 'a', (buf)=>{
    let string1 = 'a';
    for(let i = 0; i < buf.length; i++)string1 += String.fromCharCode(buf[i]);
    return string1;
}, (str)=>{
    str = str.substring(1);
    const buf = new Uint8Array(str.length);
    for(let i = 0; i < str.length; i++)buf[i] = str.charCodeAt(i);
    return buf;
});
const BASES = {
    utf8: string,
    'utf-8': string,
    hex: basics.bases.base16,
    latin1: ascii,
    ascii: ascii,
    binary: ascii,
    ...basics.bases
};
module.exports = BASES;

},{"multiformats/basics":"a826o"}],"j1p40":[function(require,module,exports) {
'use strict';
/** @typedef {import("./types").Protocol} Protocol */ /**
 * Protocols
 *
 * @param {number | string} proto
 * @returns {Protocol}
 */ function Protocols(proto) {
    if (typeof proto === 'number') {
        if (Protocols.codes[proto]) return Protocols.codes[proto];
        throw new Error('no protocol with code: ' + proto);
    } else if (typeof proto === 'string') {
        if (Protocols.names[proto]) return Protocols.names[proto];
        throw new Error('no protocol with name: ' + proto);
    }
    throw new Error('invalid protocol id type: ' + proto);
}
const V = -1;
Protocols.lengthPrefixedVarSize = V;
Protocols.V = V;
/** @type {Array<[number, number, string, (string|boolean)?, string?]>} */ Protocols.table = [
    [
        4,
        32,
        'ip4'
    ],
    [
        6,
        16,
        'tcp'
    ],
    [
        33,
        16,
        'dccp'
    ],
    [
        41,
        128,
        'ip6'
    ],
    [
        42,
        V,
        'ip6zone'
    ],
    [
        53,
        V,
        'dns',
        'resolvable'
    ],
    [
        54,
        V,
        'dns4',
        'resolvable'
    ],
    [
        55,
        V,
        'dns6',
        'resolvable'
    ],
    [
        56,
        V,
        'dnsaddr',
        'resolvable'
    ],
    [
        132,
        16,
        'sctp'
    ],
    [
        273,
        16,
        'udp'
    ],
    [
        275,
        0,
        'p2p-webrtc-star'
    ],
    [
        276,
        0,
        'p2p-webrtc-direct'
    ],
    [
        277,
        0,
        'p2p-stardust'
    ],
    [
        290,
        0,
        'p2p-circuit'
    ],
    [
        301,
        0,
        'udt'
    ],
    [
        302,
        0,
        'utp'
    ],
    [
        400,
        V,
        'unix',
        false,
        'path'
    ],
    // `ipfs` is added before `p2p` for legacy support.
    // All text representations will default to `p2p`, but `ipfs` will
    // still be supported
    [
        421,
        V,
        'ipfs'
    ],
    // `p2p` is the preferred name for 421, and is now the default
    [
        421,
        V,
        'p2p'
    ],
    [
        443,
        0,
        'https'
    ],
    [
        444,
        96,
        'onion'
    ],
    [
        445,
        296,
        'onion3'
    ],
    [
        446,
        V,
        'garlic64'
    ],
    [
        460,
        0,
        'quic'
    ],
    [
        477,
        0,
        'ws'
    ],
    [
        478,
        0,
        'wss'
    ],
    [
        479,
        0,
        'p2p-websocket-star'
    ],
    [
        480,
        0,
        'http'
    ],
    [
        777,
        V,
        'memory'
    ]
];
/** @type {Record<string,Protocol>} */ Protocols.names = {
};
/** @type {Record<number,Protocol>} */ Protocols.codes = {
};
// populate tables
Protocols.table.map((row)=>{
    const proto = p.apply(null, row);
    Protocols.codes[proto.code] = proto;
    Protocols.names[proto.name] = proto;
    return null;
});
Protocols.object = p;
/**
 *
 * Create a protocol
 *
 * @param {number} code
 * @param {number} size
 * @param {string} name
 * @param {any} [resolvable]
 * @param {any} [path]
 * @returns {Protocol}
 */ function p(code, size, name, resolvable, path) {
    return {
        code,
        size,
        name,
        resolvable: Boolean(resolvable),
        path: Boolean(path)
    };
}
module.exports = Protocols;

},{}],"9fMsR":[function(require,module,exports) {
module.exports = {
    encode: require('./encode.js'),
    decode: require('./decode.js'),
    encodingLength: require('./length.js')
};

},{"./encode.js":"1xAzz","./decode.js":"10NGY","./length.js":"8TRjB"}],"1xAzz":[function(require,module,exports) {
module.exports = encode;
var MSB = 128, REST = 127, MSBALL = ~REST, INT = Math.pow(2, 31);
function encode(num, out, offset) {
    if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {
        encode.bytes = 0;
        throw new RangeError('Could not encode varint');
    }
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while(num >= INT){
        out[offset++] = num & 255 | MSB;
        num /= 128;
    }
    while(num & MSBALL){
        out[offset++] = num & 255 | MSB;
        num >>>= 7;
    }
    out[offset] = num | 0;
    encode.bytes = offset - oldOffset + 1;
    return out;
}

},{}],"10NGY":[function(require,module,exports) {
module.exports = read;
var MSB = 128, REST = 127;
function read(buf, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
    do {
        if (counter >= l || shift > 49) {
            read.bytes = 0;
            throw new RangeError('Could not decode varint');
        }
        b = buf[counter++];
        res += shift < 28 ? (b & REST) << shift : (b & REST) * Math.pow(2, shift);
        shift += 7;
    }while (b >= MSB)
    read.bytes = counter - offset;
    return res;
}

},{}],"8TRjB":[function(require,module,exports) {
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
module.exports = function(value) {
    return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};

},{}],"7qjkp":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var bases = require('./util/bases.js');
function fromString(string, encoding = 'utf8') {
    const base = bases[encoding];
    if (!base) throw new Error(`Unsupported encoding "${encoding}"`);
    return base.decoder.decode(`${base.prefix}${string}`);
}
exports.fromString = fromString;

},{"./util/bases.js":"ekopG"}],"gqJ9u":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
function concat(arrays, length) {
    if (!length) length = arrays.reduce((acc, curr)=>acc + curr.length
    , 0);
    const output = new Uint8Array(length);
    let offset = 0;
    for (const arr of arrays){
        output.set(arr, offset);
        offset += arr.length;
    }
    return output;
}
exports.concat = concat;

},{}],"dUrrM":[function(require,module,exports) {
'use strict';
/**
 * @typedef {{ [key: string]: any }} Extensions
 * @typedef {Error} Err
 * @property {string} message
 */ /**
 *
 * @param {Error} obj
 * @param {Extensions} props
 * @returns {Error & Extensions}
 */ function assign(obj, props) {
    for(const key in props)Object.defineProperty(obj, key, {
        value: props[key],
        enumerable: true,
        configurable: true
    });
    return obj;
}
/**
 *
 * @param {any} err - An Error
 * @param {string|Extensions} code - A string code or props to set on the error
 * @param {Extensions} [props] - Props to set on the error
 * @returns {Error & Extensions}
 */ function createError(err, code, props) {
    if (!err || typeof err === 'string') throw new TypeError('Please pass an Error to err-code');
    if (!props) props = {
    };
    if (typeof code === 'object') {
        props = code;
        code = '';
    }
    if (code) props.code = code;
    try {
        return assign(err, props);
    } catch (_) {
        props.message = err.message;
        props.stack = err.stack;
        const ErrClass = function() {
        };
        ErrClass.prototype = Object.create(Object.getPrototypeOf(err));
        // @ts-ignore
        const output = assign(new ErrClass(), props);
        return output;
    }
}
module.exports = createError;

},{}],"iZMnE":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
function equals(a, b) {
    if (a === b) return true;
    if (a.byteLength !== b.byteLength) return false;
    for(let i = 0; i < a.byteLength; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
exports.equals = equals;

},{}],"5o7RW":[function(require,module,exports) {
'use strict';
const isElectron = require('is-electron');
const IS_ENV_WITH_DOM = typeof window === 'object' && typeof document === 'object' && document.nodeType === 9;
// @ts-ignore
const IS_ELECTRON = isElectron();
const IS_BROWSER = IS_ENV_WITH_DOM && !IS_ELECTRON;
const IS_ELECTRON_MAIN = IS_ELECTRON && !IS_ENV_WITH_DOM;
const IS_ELECTRON_RENDERER = IS_ELECTRON && IS_ENV_WITH_DOM;
const IS_NODE = typeof require === 'function' && typeof globalThis.process !== 'undefined' && typeof globalThis.process.release !== 'undefined' && globalThis.process.release.name === 'node' && !IS_ELECTRON;
// @ts-ignore - we either ignore worker scope or dom scope
const IS_WEBWORKER = typeof importScripts === 'function' && typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
const IS_TEST = typeof globalThis.process !== 'undefined' && typeof globalThis.process.env !== 'undefined' && globalThis.process.env.NODE_ENV === 'test';
const IS_REACT_NATIVE = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
module.exports = {
    isTest: IS_TEST,
    isElectron: IS_ELECTRON,
    isElectronMain: IS_ELECTRON_MAIN,
    isElectronRenderer: IS_ELECTRON_RENDERER,
    isNode: IS_NODE,
    /**
   * Detects browser main thread  **NOT** web worker or service worker
   */ isBrowser: IS_BROWSER,
    isWebWorker: IS_WEBWORKER,
    isEnvWithDom: IS_ENV_WITH_DOM,
    isReactNative: IS_REACT_NATIVE
};

},{"is-electron":"bGmBa"}],"bGmBa":[function(require,module,exports) {
var process = require("process");
// https://github.com/electron/electron/issues/2288
function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') return true;
    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) return true;
    // Detect the user agent when the `nodeIntegration` option is set to false
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) return true;
    return false;
}
module.exports = isElectron;

},{"process":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"2yIG1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let durationRE = /(-?(?:\d+\.?\d*|\d*\.?\d+)(?:e[-+]?\d+)?)\s*([\p{L}]*)/uig;
/**
 * conversion ratios
 */ parse.nanosecond = parse.ns = 1 / 1000000;
parse['µs'] = parse['μs'] = parse.us = parse.microsecond = 0.001;
parse.millisecond = parse.ms = parse[''] = 1;
parse.second = parse.sec = parse.s = parse.ms * 1000;
parse.minute = parse.min = parse.m = parse.s * 60;
parse.hour = parse.hr = parse.h = parse.m * 60;
parse.day = parse.d = parse.h * 24;
parse.week = parse.wk = parse.w = parse.d * 7;
parse.month = parse.b = parse.d * 30.4375;
parse.year = parse.yr = parse.y = parse.d * 365.25;
/**
 * convert `str` to ms
 *
 * @param {String} str
 * @param {String} format
 * @return {Number}
 */ function parse(str = '', format = 'ms') {
    var result = null;
    // ignore commas/placeholders
    str = (str + '').replace(/(\d)[,_](\d)/g, '$1$2');
    str.replace(durationRE, function(_, n, units) {
        units = unitRatio(units);
        if (units) result = (result || 0) + parseFloat(n, 10) * units;
    });
    return result && result / (unitRatio(format) || 1);
}
function unitRatio(str) {
    return parse[str] || parse[str.toLowerCase().replace(/s$/, '')];
}
exports.default = parse;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"l0oUb":[function(require,module,exports) {
var process = require("process");
/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) return true;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) return;
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') return;
        index++;
        if (match === '%c') // We only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{
});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) exports.storage.setItem('debug', namespaces);
        else exports.storage.removeItem('debug');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) r = undefined;
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = require('./common')(exports);
const { formatters  } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};

},{"process":"d5jf4","./common":"6Yq2n"}],"6Yq2n":[function(require,module,exports) {
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = require('ms');
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {
    };
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) return;
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') // Anything else let's inspect with %O
            args.unshift('%O');
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') return '%';
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) return enableOverride;
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') createDebug.init(debug);
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
        const len = split.length;
        for(i = 0; i < len; i++){
            if (!split[i]) continue;
            namespaces = split[i].replace(/\*/g, '.*?');
            if (namespaces[0] === '-') createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
            else createDebug.names.push(new RegExp('^' + namespaces + '$'));
        }
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names.map(toNamespace),
            ...createDebug.skips.map(toNamespace).map((namespace)=>'-' + namespace
            )
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        if (name[name.length - 1] === '*') return true;
        let i;
        let len;
        for(i = 0, len = createDebug.skips.length; i < len; i++){
            if (createDebug.skips[i].test(name)) return false;
        }
        for(i = 0, len = createDebug.names.length; i < len; i++){
            if (createDebug.names[i].test(name)) return true;
        }
        return false;
    }
    /**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/ function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) return val.stack || val.message;
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;

},{"ms":"2FEgr"}],"2FEgr":[function(require,module,exports) {
/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {
    };
    var type = typeof val;
    if (type === 'string' && val.length > 0) return parse(val);
    else if (type === 'number' && isFinite(val)) return options.long ? fmtLong(val) : fmtShort(val);
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) return;
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) return;
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return Math.round(ms / d) + 'd';
    if (msAbs >= h) return Math.round(ms / h) + 'h';
    if (msAbs >= m) return Math.round(ms / m) + 'm';
    if (msAbs >= s) return Math.round(ms / s) + 's';
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) return plural(ms, msAbs, d, 'day');
    if (msAbs >= h) return plural(ms, msAbs, h, 'hour');
    if (msAbs >= m) return plural(ms, msAbs, m, 'minute');
    if (msAbs >= s) return plural(ms, msAbs, s, 'second');
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

},{}],"j20vN":[function(require,module,exports) {
/* eslint-disable no-undef */ 'use strict';
const { fetch , Request , Headers  } = require('./http/fetch');
const { TimeoutError , HTTPError  } = require('./http/error');
const merge = require('merge-options').bind({
    ignoreUndefined: true
});
const { URL , URLSearchParams  } = require('iso-url');
const anySignal = require('any-signal');
/**
 * @typedef {import('stream').Readable} NodeReadableStream
 * @typedef {import('./types').HTTPOptions} HTTPOptions
 * @typedef {import('./types').ExtendedResponse} ExtendedResponse
 */ /**
 * @template TResponse
 * @param {Promise<TResponse>} promise
 * @param {number | undefined} ms
 * @param {AbortController} abortController
 * @returns {Promise<TResponse>}
 */ const timeout = (promise, ms, abortController)=>{
    if (ms === undefined) return promise;
    const start = Date.now();
    const timedOut = ()=>{
        const time = Date.now() - start;
        return time >= ms;
    };
    return new Promise((resolve, reject)=>{
        const timeoutID = setTimeout(()=>{
            if (timedOut()) {
                reject(new TimeoutError());
                abortController.abort();
            }
        }, ms);
        /**
     * @param {(value: any) => void } next
     */ const after = (next)=>{
            /**
       * @param {any} res
       */ const fn = (res)=>{
                clearTimeout(timeoutID);
                if (timedOut()) {
                    reject(new TimeoutError());
                    return;
                }
                next(res);
            };
            return fn;
        };
        promise.then(after(resolve), after(reject));
    });
};
const defaults = {
    throwHttpErrors: true,
    credentials: 'same-origin'
};
class HTTP {
    /**
   *
   * @param {HTTPOptions} options
   */ constructor(options = {
    }){
        /** @type {HTTPOptions} */ this.opts = merge(defaults, options);
    }
    /**
   * Fetch
   *
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   * @returns {Promise<ExtendedResponse>}
   */ async fetch(resource, options = {
    }) {
        /** @type {HTTPOptions} */ const opts = merge(this.opts, options);
        const headers = new Headers(opts.headers);
        // validate resource type
        if (typeof resource !== 'string' && !(resource instanceof URL || resource instanceof Request)) throw new TypeError('`resource` must be a string, URL, or Request');
        const url = new URL(resource.toString(), opts.base);
        const { searchParams , transformSearchParams , json  } = opts;
        if (searchParams) {
            if (typeof transformSearchParams === 'function') // @ts-ignore
            url.search = transformSearchParams(new URLSearchParams(opts.searchParams));
            else // @ts-ignore
            url.search = new URLSearchParams(opts.searchParams);
        }
        if (json) {
            opts.body = JSON.stringify(opts.json);
            headers.set('content-type', 'application/json');
        }
        const abortController = new AbortController();
        // @ts-ignore
        const signal = anySignal([
            abortController.signal,
            opts.signal
        ]);
        const response = await timeout(fetch(url.toString(), {
            ...opts,
            signal,
            timeout: undefined,
            headers
        }), opts.timeout, abortController);
        if (!response.ok && opts.throwHttpErrors) {
            if (opts.handleError) await opts.handleError(response);
            throw new HTTPError(response);
        }
        response.iterator = function() {
            return fromStream(response.body);
        };
        response.ndjson = async function*() {
            for await (const chunk of ndjson(response.iterator()))if (options.transform) yield options.transform(chunk);
            else yield chunk;
        };
        return response;
    }
    /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */ post(resource, options = {
    }) {
        return this.fetch(resource, {
            ...options,
            method: 'POST'
        });
    }
    /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */ get(resource, options = {
    }) {
        return this.fetch(resource, {
            ...options,
            method: 'GET'
        });
    }
    /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */ put(resource, options = {
    }) {
        return this.fetch(resource, {
            ...options,
            method: 'PUT'
        });
    }
    /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */ delete(resource, options = {
    }) {
        return this.fetch(resource, {
            ...options,
            method: 'DELETE'
        });
    }
    /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */ options(resource, options = {
    }) {
        return this.fetch(resource, {
            ...options,
            method: 'OPTIONS'
        });
    }
}
/**
 * Parses NDJSON chunks from an iterator
 *
 * @param {AsyncIterable<Uint8Array>} source
 * @returns {AsyncIterable<any>}
 */ const ndjson = async function*(source) {
    const decoder = new TextDecoder();
    let buf = '';
    for await (const chunk of source){
        buf += decoder.decode(chunk, {
            stream: true
        });
        const lines = buf.split(/\r?\n/);
        for(let i = 0; i < lines.length - 1; i++){
            const l = lines[i].trim();
            if (l.length > 0) yield JSON.parse(l);
        }
        buf = lines[lines.length - 1];
    }
    buf += decoder.decode();
    buf = buf.trim();
    if (buf.length !== 0) yield JSON.parse(buf);
};
/**
 * Stream to AsyncIterable
 *
 * @template TChunk
 * @param {ReadableStream<TChunk> | NodeReadableStream | null} source
 * @returns {AsyncIterable<TChunk>}
 */ const fromStream = (source)=>{
    // Workaround for https://github.com/node-fetch/node-fetch/issues/766
    if (isNodeReadableStream(source)) {
        const iter = source[Symbol.asyncIterator]();
        return {
            [Symbol.asyncIterator] () {
                return {
                    next: iter.next.bind(iter),
                    return (value) {
                        source.destroy();
                        if (typeof iter.return === 'function') return iter.return();
                        return Promise.resolve({
                            done: true,
                            value
                        });
                    }
                };
            }
        };
    }
    if (isWebReadableStream(source)) {
        const reader = source.getReader();
        return (async function*() {
            try {
                while(true){
                    // Read from the stream
                    const { done , value  } = await reader.read();
                    // Exit if we're done
                    if (done) return;
                    // Else yield the chunk
                    if (value) yield value;
                }
            } finally{
                reader.releaseLock();
            }
        })();
    }
    if (isAsyncIterable(source)) return source;
    throw new TypeError('Body can\'t be converted to AsyncIterable');
};
/**
 * Check if it's an AsyncIterable
 *
 * @template {unknown} TChunk
 * @template {any} Other
 * @param {Other|AsyncIterable<TChunk>} value
 * @returns {value is AsyncIterable<TChunk>}
 */ const isAsyncIterable = (value)=>{
    return typeof value === 'object' && value !== null && typeof /** @type {any} */ value[Symbol.asyncIterator] === 'function';
};
/**
 * Check for web readable stream
 *
 * @template {unknown} TChunk
 * @template {any} Other
 * @param {Other|ReadableStream<TChunk>} value
 * @returns {value is ReadableStream<TChunk>}
 */ const isWebReadableStream = (value)=>{
    return value && typeof /** @type {any} */ value.getReader === 'function';
};
/**
 * @param {any} value
 * @returns {value is NodeReadableStream}
 */ const isNodeReadableStream = (value)=>Object.prototype.hasOwnProperty.call(value, 'readable') && Object.prototype.hasOwnProperty.call(value, 'writable')
;
HTTP.HTTPError = HTTPError;
HTTP.TimeoutError = TimeoutError;
HTTP.streamToAsyncIterator = fromStream;
/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */ HTTP.post = (resource, options)=>new HTTP(options).post(resource, options)
;
/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */ HTTP.get = (resource, options)=>new HTTP(options).get(resource, options)
;
/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */ HTTP.put = (resource, options)=>new HTTP(options).put(resource, options)
;
/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */ HTTP.delete = (resource, options)=>new HTTP(options).delete(resource, options)
;
/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */ HTTP.options = (resource, options)=>new HTTP(options).options(resource, options)
;
module.exports = HTTP;

},{"./http/fetch":"7YNwe","./http/error":"cQouZ","merge-options":"4XlQf","iso-url":"e9Sz0","any-signal":"fXfV7"}],"7YNwe":[function(require,module,exports) {
'use strict';
const { TimeoutError , AbortError  } = require('./error');
const { Response , Request , Headers , default: fetch  } = require('../fetch');
/**
 * @typedef {import('../types').FetchOptions} FetchOptions
 * @typedef {import('../types').ProgressFn} ProgressFn
 */ /**
 * Fetch with progress
 *
 * @param {string | Request} url
 * @param {FetchOptions} [options]
 * @returns {Promise<ResponseWithURL>}
 */ const fetchWithProgress = (url, options = {
})=>{
    const request = new XMLHttpRequest();
    request.open(options.method || 'GET', url.toString(), true);
    const { timeout , headers  } = options;
    if (timeout && timeout > 0 && timeout < Infinity) request.timeout = timeout;
    if (options.overrideMimeType != null) request.overrideMimeType(options.overrideMimeType);
    if (headers) for (const [name, value] of new Headers(headers))request.setRequestHeader(name, value);
    if (options.signal) options.signal.onabort = ()=>request.abort()
    ;
    if (options.onUploadProgress) request.upload.onprogress = options.onUploadProgress;
    // Note: Need to use `arraybuffer` here instead of `blob` because `Blob`
    // instances coming from JSDOM are not compatible with `Response` from
    // node-fetch (which is the setup we get when testing with jest because
    // it uses JSDOM which does not provide a global fetch
    // https://github.com/jsdom/jsdom/issues/1724)
    request.responseType = 'arraybuffer';
    return new Promise((resolve, reject)=>{
        /**
     * @param {Event} event
     */ const handleEvent = (event)=>{
            switch(event.type){
                case 'error':
                    resolve(Response.error());
                    break;
                case 'load':
                    resolve(new ResponseWithURL(request.responseURL, request.response, {
                        status: request.status,
                        statusText: request.statusText,
                        headers: parseHeaders(request.getAllResponseHeaders())
                    }));
                    break;
                case 'timeout':
                    reject(new TimeoutError());
                    break;
                case 'abort':
                    reject(new AbortError());
                    break;
                default:
                    break;
            }
        };
        request.onerror = handleEvent;
        request.onload = handleEvent;
        request.ontimeout = handleEvent;
        request.onabort = handleEvent;
        // @ts-expect-error options.body can be a node readable stream, which isn't compatible with XHR, but this
        // file is a browser override so you won't get a node readable stream so ignore the error
        request.send(options.body);
    });
};
const fetchWithStreaming = fetch;
/**
 * @param {string | Request} url
 * @param {FetchOptions} options
 */ const fetchWith = (url, options = {
})=>options.onUploadProgress != null ? fetchWithProgress(url, options) : fetchWithStreaming(url, options)
;
/**
 * Parse Headers from a XMLHttpRequest
 *
 * @param {string} input
 * @returns {Headers}
 */ const parseHeaders = (input)=>{
    const headers = new Headers();
    for (const line of input.trim().split(/[\r\n]+/)){
        const index = line.indexOf(': ');
        if (index > 0) headers.set(line.slice(0, index), line.slice(index + 1));
    }
    return headers;
};
class ResponseWithURL extends Response {
    /**
   * @param {string} url
   * @param {BodyInit} body
   * @param {ResponseInit} options
   */ constructor(url, body, options){
        super(body, options);
        Object.defineProperty(this, 'url', {
            value: url
        });
    }
}
module.exports = {
    fetch: fetchWith,
    Request,
    Headers
};

},{"./error":"cQouZ","../fetch":"9fFew"}],"cQouZ":[function(require,module,exports) {
'use strict';
class TimeoutError extends Error {
    constructor(message = 'Request timed out'){
        super(message);
        this.name = 'TimeoutError';
    }
}
exports.TimeoutError = TimeoutError;
class AbortError extends Error {
    constructor(message = 'The operation was aborted.'){
        super(message);
        this.name = 'AbortError';
    }
}
exports.AbortError = AbortError;
class HTTPError extends Error {
    /**
   * @param {Response} response
   */ constructor(response){
        super(response.statusText);
        this.name = 'HTTPError';
        this.response = response;
    }
}
exports.HTTPError = HTTPError;

},{}],"9fFew":[function(require,module,exports) {
'use strict';
const { isElectronMain  } = require('./env');
if (isElectronMain) module.exports = require('electron-fetch');
else // use window.fetch if it is available, fall back to node-fetch if not
module.exports = require('native-fetch');

},{"./env":"5o7RW","electron-fetch":"jhUEF","native-fetch":"eHRxJ"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"eHRxJ":[function(require,module,exports) {
'use strict';
if (globalThis.fetch && globalThis.Headers && globalThis.Request && globalThis.Response) module.exports = {
    default: globalThis.fetch,
    Headers: globalThis.Headers,
    Request: globalThis.Request,
    Response: globalThis.Response
};
else module.exports = {
    default: require('node-fetch').default,
    Headers: require('node-fetch').Headers,
    Request: require('node-fetch').Request,
    Response: require('node-fetch').Response
};

},{"node-fetch":"biJx9"}],"biJx9":[function(require,module,exports) {
"use strict";
// ref: https://github.com/tc39/proposal-global
var getGlobal = function() {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw new Error('unable to locate global object');
};
var global = getGlobal();
module.exports = exports = global.fetch;
// Needed for TypeScript and Webpack.
if (global.fetch) exports.default = global.fetch.bind(global);
exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

},{}],"4XlQf":[function(require,module,exports) {
'use strict';
const isOptionObject = require('is-plain-obj');
const { hasOwnProperty  } = Object.prototype;
const { propertyIsEnumerable  } = Object;
const defineProperty = (object, name, value)=>Object.defineProperty(object, name, {
        value,
        writable: true,
        enumerable: true,
        configurable: true
    })
;
const globalThis = this;
const defaultMergeOptions = {
    concatArrays: false,
    ignoreUndefined: false
};
const getEnumerableOwnPropertyKeys = (value)=>{
    const keys = [];
    for(const key in value)if (hasOwnProperty.call(value, key)) keys.push(key);
    /* istanbul ignore else  */ if (Object.getOwnPropertySymbols) {
        const symbols = Object.getOwnPropertySymbols(value);
        for (const symbol of symbols)if (propertyIsEnumerable.call(value, symbol)) keys.push(symbol);
    }
    return keys;
};
function clone(value) {
    if (Array.isArray(value)) return cloneArray(value);
    if (isOptionObject(value)) return cloneOptionObject(value);
    return value;
}
function cloneArray(array) {
    const result = array.slice(0, 0);
    getEnumerableOwnPropertyKeys(array).forEach((key)=>{
        defineProperty(result, key, clone(array[key]));
    });
    return result;
}
function cloneOptionObject(object) {
    const result = Object.getPrototypeOf(object) === null ? Object.create(null) : {
    };
    getEnumerableOwnPropertyKeys(object).forEach((key)=>{
        defineProperty(result, key, clone(object[key]));
    });
    return result;
}
/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {string[]} keys keys to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 */ const mergeKeys = (merged, source, keys, config)=>{
    keys.forEach((key)=>{
        if (typeof source[key] === 'undefined' && config.ignoreUndefined) return;
        // Do not recurse into prototype chain of merged
        if (key in merged && merged[key] !== Object.getPrototypeOf(merged)) defineProperty(merged, key, merge(merged[key], source[key], config));
        else defineProperty(merged, key, clone(source[key]));
    });
    return merged;
};
/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 *
 * see [Array.prototype.concat ( ...arguments )](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.concat)
 */ const concatArrays = (merged, source, config)=>{
    let result = merged.slice(0, 0);
    let resultIndex = 0;
    [
        merged,
        source
    ].forEach((array)=>{
        const indices = [];
        // `result.concat(array)` with cloning
        for(let k = 0; k < array.length; k++){
            if (!hasOwnProperty.call(array, k)) continue;
            indices.push(String(k));
            if (array === merged) // Already cloned
            defineProperty(result, resultIndex++, array[k]);
            else defineProperty(result, resultIndex++, clone(array[k]));
        }
        // Merge non-index keys
        result = mergeKeys(result, array, getEnumerableOwnPropertyKeys(array).filter((key)=>!indices.includes(key)
        ), config);
    });
    return result;
};
/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 */ function merge(merged, source, config) {
    if (config.concatArrays && Array.isArray(merged) && Array.isArray(source)) return concatArrays(merged, source, config);
    if (!isOptionObject(source) || !isOptionObject(merged)) return clone(source);
    return mergeKeys(merged, source, getEnumerableOwnPropertyKeys(source), config);
}
module.exports = function(...options) {
    const config = merge(clone(defaultMergeOptions), this !== globalThis && this || {
    }, defaultMergeOptions);
    let merged = {
        _: {
        }
    };
    for (const option of options){
        if (option === undefined) continue;
        if (!isOptionObject(option)) throw new TypeError('`' + option + '` is not an Option Object');
        merged = merge(merged, {
            _: option
        }, config);
    }
    return merged._;
};

},{"is-plain-obj":"9Wkhz"}],"9Wkhz":[function(require,module,exports) {
'use strict';
module.exports = (value)=>{
    if (Object.prototype.toString.call(value) !== '[object Object]') return false;
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
};

},{}],"e9Sz0":[function(require,module,exports) {
'use strict';
const { URLWithLegacySupport , format , URLSearchParams , defaultBase  } = require('./src/url');
const relative = require('./src/relative');
module.exports = {
    URL: URLWithLegacySupport,
    URLSearchParams,
    format,
    relative,
    defaultBase
};

},{"./src/url":"jTIXj","./src/relative":"5yCit"}],"jTIXj":[function(require,module,exports) {
'use strict';
const isReactNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
function getDefaultBase() {
    if (isReactNative) return 'http://localhost';
    // in some environments i.e. cloudflare workers location is not available
    if (!self.location) return '';
    return self.location.protocol + '//' + self.location.host;
}
const URL = self.URL;
const defaultBase = getDefaultBase();
class URLWithLegacySupport {
    constructor(url = '', base = defaultBase){
        this.super = new URL(url, base);
        this.path = this.pathname + this.search;
        this.auth = this.username && this.password ? this.username + ':' + this.password : null;
        this.query = this.search && this.search.startsWith('?') ? this.search.slice(1) : null;
    }
    get hash() {
        return this.super.hash;
    }
    get host() {
        return this.super.host;
    }
    get hostname() {
        return this.super.hostname;
    }
    get href() {
        return this.super.href;
    }
    get origin() {
        return this.super.origin;
    }
    get password() {
        return this.super.password;
    }
    get pathname() {
        return this.super.pathname;
    }
    get port() {
        return this.super.port;
    }
    get protocol() {
        return this.super.protocol;
    }
    get search() {
        return this.super.search;
    }
    get searchParams() {
        return this.super.searchParams;
    }
    get username() {
        return this.super.username;
    }
    set hash(hash) {
        this.super.hash = hash;
    }
    set host(host) {
        this.super.host = host;
    }
    set hostname(hostname) {
        this.super.hostname = hostname;
    }
    set href(href) {
        this.super.href = href;
    }
    set password(password) {
        this.super.password = password;
    }
    set pathname(pathname) {
        this.super.pathname = pathname;
    }
    set port(port) {
        this.super.port = port;
    }
    set protocol(protocol) {
        this.super.protocol = protocol;
    }
    set search(search) {
        this.super.search = search;
    }
    set username(username) {
        this.super.username = username;
    }
    /**
   * @param {any} o
   */ static createObjectURL(o) {
        return URL.createObjectURL(o);
    }
    /**
   * @param {string} o
   */ static revokeObjectURL(o) {
        URL.revokeObjectURL(o);
    }
    toJSON() {
        return this.super.toJSON();
    }
    toString() {
        return this.super.toString();
    }
    format() {
        return this.toString();
    }
}
/**
 * @param {string | import('url').UrlObject} obj
 */ function format(obj) {
    if (typeof obj === 'string') {
        const url = new URL(obj);
        return url.toString();
    }
    if (!(obj instanceof URL)) {
        const userPass = // @ts-ignore its not supported in node but we normalise
        obj.username && obj.password ? `${obj.username}:${obj.password}@` : '';
        const auth = obj.auth ? obj.auth + '@' : '';
        const port = obj.port ? ':' + obj.port : '';
        const protocol = obj.protocol ? obj.protocol + '//' : '';
        const host = obj.host || '';
        const hostname = obj.hostname || '';
        const search = obj.search || (obj.query ? '?' + obj.query : '');
        const hash = obj.hash || '';
        const pathname = obj.pathname || '';
        // @ts-ignore - path is not supported in node but we normalise
        const path = obj.path || pathname + search;
        return `${protocol}${userPass || auth}${host || hostname + port}${path}${hash}`;
    }
}
module.exports = {
    URLWithLegacySupport,
    URLSearchParams: self.URLSearchParams,
    defaultBase,
    format
};

},{}],"5yCit":[function(require,module,exports) {
'use strict';
const { URLWithLegacySupport , format  } = require('./url');
/**
 * @param {string | undefined} url
 * @param {any} [location]
 * @param {any} [protocolMap]
 * @param {any} [defaultProtocol]
 */ module.exports = (url, location = {
}, protocolMap = {
}, defaultProtocol)=>{
    let protocol = location.protocol ? location.protocol.replace(':', '') : 'http';
    // Check protocol map
    protocol = (protocolMap[protocol] || defaultProtocol || protocol) + ':';
    let urlParsed;
    try {
        urlParsed = new URLWithLegacySupport(url);
    } catch (err) {
        urlParsed = {
        };
    }
    const base = Object.assign({
    }, location, {
        protocol: protocol || urlParsed.protocol,
        host: location.host || urlParsed.host
    });
    return new URLWithLegacySupport(url, format(base)).toString();
};

},{"./url":"jTIXj"}],"fXfV7":[function(require,module,exports) {
const { AbortController  } = globalThis;
/**
 * Takes an array of AbortSignals and returns a single signal.
 * If any signals are aborted, the returned signal will be aborted.
 * @param {Array<AbortSignal>} signals
 * @returns {AbortSignal}
 */ function anySignal(signals) {
    const controller = new AbortController();
    function onAbort() {
        controller.abort();
        for (const signal of signals){
            if (!signal || !signal.removeEventListener) continue;
            signal.removeEventListener('abort', onAbort);
        }
    }
    for (const signal1 of signals){
        if (!signal1 || !signal1.addEventListener) continue;
        if (signal1.aborted) {
            onAbort();
            break;
        }
        signal1.addEventListener('abort', onAbort);
    }
    return controller.signal;
}
module.exports = anySignal;
module.exports.anySignal = anySignal;

},{}],"4gG9j":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var multiaddr = require('multiaddr');
var multiAddrToUri = require('multiaddr-to-uri');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var multiAddrToUri__default = /*#__PURE__*/ _interopDefaultLegacy(multiAddrToUri);
function toUrlString(url) {
    try {
        url = multiAddrToUri__default["default"](new multiaddr.Multiaddr(url));
    } catch (err) {
    }
    url = url.toString();
    return url;
}
exports.toUrlString = toUrlString;

},{"multiaddr":"dOMJu","multiaddr-to-uri":"kzrTO"}],"kzrTO":[function(require,module,exports) {
const { Multiaddr  } = require('multiaddr');
const reduceValue = (_, v)=>v
;
const tcpUri = (str, port, parts, opts)=>{
    // return tcp when explicitly requested
    if (opts && opts.assumeHttp === false) return `tcp://${str}:${port}`;
    // check if tcp is the last protocol in multiaddr
    let protocol = 'tcp';
    let explicitPort = `:${port}`;
    const last = parts[parts.length - 1];
    if (last.protocol === 'tcp') {
        // assume http and produce clean urls
        protocol = port === '443' ? 'https' : 'http';
        explicitPort = port === '443' || port === '80' ? '' : explicitPort;
    }
    return `${protocol}://${str}${explicitPort}`;
};
const Reducers = {
    ip4: reduceValue,
    ip6: (str, content, i, parts)=>parts.length === 1 && parts[0].protocol === 'ip6' ? content : `[${content}]`
    ,
    tcp: (str, content, i, parts, opts)=>parts.some((p)=>[
                'http',
                'https',
                'ws',
                'wss'
            ].includes(p.protocol)
        ) ? `${str}:${content}` : tcpUri(str, content, parts, opts)
    ,
    udp: (str, content)=>`udp://${str}:${content}`
    ,
    dnsaddr: reduceValue,
    dns4: reduceValue,
    dns6: reduceValue,
    ipfs: (str, content)=>`${str}/ipfs/${content}`
    ,
    p2p: (str, content)=>`${str}/p2p/${content}`
    ,
    http: (str)=>`http://${str}`
    ,
    https: (str)=>`https://${str}`
    ,
    ws: (str)=>`ws://${str}`
    ,
    wss: (str)=>`wss://${str}`
    ,
    'p2p-websocket-star': (str)=>`${str}/p2p-websocket-star`
    ,
    'p2p-webrtc-star': (str)=>`${str}/p2p-webrtc-star`
    ,
    'p2p-webrtc-direct': (str)=>`${str}/p2p-webrtc-direct`
};
module.exports = (multiaddr, opts)=>{
    const ma = new Multiaddr(multiaddr);
    const parts1 = multiaddr.toString().split('/').slice(1);
    return ma.tuples().map((tuple)=>({
            protocol: parts1.shift(),
            content: tuple[1] ? parts1.shift() : null
        })
    ).reduce((str, part, i, parts)=>{
        const reduce = Reducers[part.protocol];
        if (!reduce) throw new Error(`Unsupported protocol ${part.protocol}`);
        return reduce(str, part.content, i, parts, opts);
    }, '');
};

},{"multiaddr":"dOMJu"}],"iNj99":[function(require,module,exports) {
'use strict';
var agent_browser = ()=>{
};
module.exports = agent_browser;

},{}],"akREo":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var modeToString = require('./mode-to-string.js');
var parseMtime = require('./parse-mtime.js');
function toUrlSearchParams({ arg: arg1 , searchParams , hashAlg , mtime , mode , ...options } = {
}) {
    if (searchParams) options = {
        ...options,
        ...searchParams
    };
    if (hashAlg) options.hash = hashAlg;
    if (mtime != null) {
        mtime = parseMtime.parseMtime(mtime);
        options.mtime = mtime.secs;
        options.mtimeNsecs = mtime.nsecs;
    }
    if (mode != null) options.mode = modeToString.modeToString(mode);
    if (options.timeout && !isNaN(options.timeout)) options.timeout = `${options.timeout}ms`;
    if (arg1 === undefined || arg1 === null) arg1 = [];
    else if (!Array.isArray(arg1)) arg1 = [
        arg1
    ];
    const urlSearchParams = new URLSearchParams(options);
    arg1.forEach((arg)=>urlSearchParams.append('arg', arg)
    );
    return urlSearchParams;
}
exports.toUrlSearchParams = toUrlSearchParams;

},{"./mode-to-string.js":"eKohr","./parse-mtime.js":"iSQ3z"}],"eKohr":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
function modeToString(mode) {
    if (mode == null) return undefined;
    if (typeof mode === 'string') return mode;
    return mode.toString(8).padStart(4, '0');
}
exports.modeToString = modeToString;

},{}],"iSQ3z":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var errCode = require('err-code');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var errCode__default = /*#__PURE__*/ _interopDefaultLegacy(errCode);
function parseMtime(input) {
    if (input == null) return undefined;
    let mtime;
    if (input.secs != null) mtime = {
        secs: input.secs,
        nsecs: input.nsecs
    };
    if (input.Seconds != null) mtime = {
        secs: input.Seconds,
        nsecs: input.FractionalNanoseconds
    };
    if (Array.isArray(input)) mtime = {
        secs: input[0],
        nsecs: input[1]
    };
    if (input instanceof Date) {
        const ms = input.getTime();
        const secs = Math.floor(ms / 1000);
        mtime = {
            secs: secs,
            nsecs: (ms - secs * 1000) * 1000
        };
    }
    if (!Object.prototype.hasOwnProperty.call(mtime, 'secs')) return undefined;
    if (mtime != null && mtime.nsecs != null && (mtime.nsecs < 0 || mtime.nsecs > 999999999)) throw errCode__default["default"](new Error('mtime-nsecs must be within the range [0,999999999]'), 'ERR_INVALID_MTIME_NSECS');
    return mtime;
}
exports.parseMtime = parseMtime;

},{"err-code":"dUrrM"}],"ipp6v":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createWantlistForPeer = configure.configure((api)=>{
    async function wantlistForPeer(peerId, options = {
    }) {
        const res = await (await api.post('bitswap/wantlist', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                ...options,
                peer: peerId.toString()
            }),
            headers: options.headers
        })).json();
        return (res.Keys || []).map((k)=>cid.CID.parse(k['/'])
        );
    }
    return wantlistForPeer;
});
exports.createWantlistForPeer = createWantlistForPeer;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"7SuGW":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createStat = configure.configure((api)=>{
    async function stat(options = {
    }) {
        const res = await api.post('bitswap/stat', {
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            signal: options.signal,
            headers: options.headers
        });
        return toCoreInterface(await res.json());
    }
    return stat;
});
function toCoreInterface(res) {
    return {
        provideBufLen: res.ProvideBufLen,
        wantlist: (res.Wantlist || []).map((k)=>cid.CID.parse(k['/'])
        ),
        peers: res.Peers || [],
        blocksReceived: BigInt(res.BlocksReceived),
        dataReceived: BigInt(res.DataReceived),
        blocksSent: BigInt(res.BlocksSent),
        dataSent: BigInt(res.DataSent),
        dupBlksReceived: BigInt(res.DupBlksReceived),
        dupDataReceived: BigInt(res.DupDataReceived)
    };
}
exports.createStat = createStat;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"5CJsB":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createUnwant = configure.configure((api)=>{
    async function unwant(cid, options = {
    }) {
        const res = await api.post('bitswap/unwant', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: cid.toString(),
                ...options
            }),
            headers: options.headers
        });
        return res.json();
    }
    return unwant;
});
exports.createUnwant = createUnwant;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"ibHWu":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var get = require('./get.js');
var put = require('./put.js');
var rm = require('./rm.js');
var stat = require('./stat.js');
function createBlock(config) {
    return {
        get: get.createGet(config),
        put: put.createPut(config),
        rm: rm.createRm(config),
        stat: stat.createStat(config)
    };
}
exports.createBlock = createBlock;

},{"./get.js":"bkTl6","./put.js":"7uAyZ","./rm.js":"a083I","./stat.js":"fyJE5"}],"bkTl6":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createGet = configure.configure((api)=>{
    async function get(cid, options = {
    }) {
        const res = await api.post('block/get', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: cid.toString(),
                ...options
            }),
            headers: options.headers
        });
        return new Uint8Array(await res.arrayBuffer());
    }
    return get;
});
exports.createGet = createGet;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"7uAyZ":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var multipartRequest = require('ipfs-core-utils/multipart-request');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var abortSignal = require('../lib/abort-signal.js');
const createPut = configure.configure((api)=>{
    async function put(data, options = {
    }) {
        const controller = new AbortController();
        const signal = abortSignal.abortSignal(controller.signal, options.signal);
        let res;
        try {
            const response = await api.post('block/put', {
                signal: signal,
                searchParams: toUrlSearchParams.toUrlSearchParams(options),
                ...await multipartRequest.multipartRequest([
                    data
                ], controller, options.headers)
            });
            res = await response.json();
        } catch (err) {
            if (options.format === 'dag-pb') return put(data, {
                ...options,
                format: 'protobuf'
            });
            else if (options.format === 'dag-cbor') return put(data, {
                ...options,
                format: 'cbor'
            });
            throw err;
        }
        return cid.CID.parse(res.Key);
    }
    return put;
});
exports.createPut = createPut;

},{"multiformats/cid":"4uoBU","ipfs-core-utils/multipart-request":"g6OOu","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","../lib/abort-signal.js":"1Gv25"}],"g6OOu":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var normaliseInputMultiple_browser = require('./files/normalise-input-multiple.browser.js');
var modeToString = require('./mode-to-string.js');
async function multipartRequest(source, abortController, headers = {
}) {
    const parts = [];
    const formData = new FormData();
    let index = 0;
    let total = 0;
    for await (const { content , path , mode , mtime  } of normaliseInputMultiple_browser.normaliseInput(source)){
        let fileSuffix = '';
        const type = content ? 'file' : 'dir';
        if (index > 0) fileSuffix = `-${index}`;
        let fieldName = type + fileSuffix;
        const qs = [];
        if (mode !== null && mode !== undefined) qs.push(`mode=${modeToString.modeToString(mode)}`);
        if (mtime != null) {
            const { secs , nsecs  } = mtime;
            qs.push(`mtime=${secs}`);
            if (nsecs != null) qs.push(`mtime-nsecs=${nsecs}`);
        }
        if (qs.length) fieldName = `${fieldName}?${qs.join('&')}`;
        if (content) {
            formData.set(fieldName, content, path != null ? encodeURIComponent(path) : undefined);
            const end = total + content.size;
            parts.push({
                name: path,
                start: total,
                end
            });
            total = end;
        } else if (path != null) formData.set(fieldName, new File([
            ''
        ], encodeURIComponent(path), {
            type: 'application/x-directory'
        }));
        else throw new Error('path or content or both must be set');
        index++;
    }
    return {
        total,
        parts,
        headers,
        body: formData
    };
}
exports.multipartRequest = multipartRequest;

},{"./files/normalise-input-multiple.browser.js":"krlLg","./mode-to-string.js":"hSmgP"}],"krlLg":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var normaliseContent_browser = require('./normalise-content.browser.js');
var normaliseCandidateMultiple = require('./normalise-candidate-multiple.js');
function normaliseInput(input) {
    return normaliseCandidateMultiple.normaliseCandidateMultiple(input, normaliseContent_browser.normaliseContent, true);
}
exports.normaliseInput = normaliseInput;

},{"./normalise-content.browser.js":"8NIVm","./normalise-candidate-multiple.js":"fzCd9"}],"8NIVm":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var errCode = require('err-code');
var itPeekable = require('it-peekable');
var browserStreamToIt = require('browser-readablestream-to-it');
var all = require('it-all');
var utils = require('./utils.js');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var errCode__default = /*#__PURE__*/ _interopDefaultLegacy(errCode);
var itPeekable__default = /*#__PURE__*/ _interopDefaultLegacy(itPeekable);
var browserStreamToIt__default = /*#__PURE__*/ _interopDefaultLegacy(browserStreamToIt);
var all__default = /*#__PURE__*/ _interopDefaultLegacy(all);
async function normaliseContent(input) {
    if (utils.isBytes(input)) return new Blob([
        input
    ]);
    if (typeof input === 'string' || input instanceof String) return new Blob([
        input.toString()
    ]);
    if (utils.isBlob(input)) return input;
    if (utils.isReadableStream(input)) input = browserStreamToIt__default["default"](input);
    if (Symbol.iterator in input || Symbol.asyncIterator in input) {
        const peekable = itPeekable__default["default"](input);
        const { value , done  } = await peekable.peek();
        if (done) return itToBlob(peekable);
        peekable.push(value);
        if (Number.isInteger(value)) return new Blob([
            Uint8Array.from(await all__default["default"](peekable))
        ]);
        if (utils.isBytes(value) || typeof value === 'string' || value instanceof String) return itToBlob(peekable);
    }
    throw errCode__default["default"](new Error(`Unexpected input: ${input}`), 'ERR_UNEXPECTED_INPUT');
}
async function itToBlob(stream) {
    const parts = [];
    for await (const chunk of stream)parts.push(chunk);
    return new Blob(parts);
}
exports.normaliseContent = normaliseContent;

},{"err-code":"dUrrM","it-peekable":"20t4V","browser-readablestream-to-it":"jArgg","it-all":"3roGN","./utils.js":"iVxwf"}],"20t4V":[function(require,module,exports) {
'use strict';
/**
 * @template T
 * @typedef {Object} Peek
 * @property {() => IteratorResult<T, void>} peek
 */ /**
 * @template T
 * @typedef {Object} AsyncPeek
 * @property {() => Promise<IteratorResult<T, void>>} peek
 */ /**
 * @template T
 * @typedef {Object} Push
 * @property {(value:T) => void} push
 */ /**
 * @template T
 * @typedef {Iterable<T> & Peek<T> & Push<T> & Iterator<T>} Peekable<T>
 */ /**
 * @template T
 * @typedef {AsyncIterable<T> & AsyncPeek<T> & Push<T> & AsyncIterator<T>} AsyncPeekable<T>
 */ /**
 * @template {Iterable<any> | AsyncIterable<any>} I
 * @param {I} iterable
 * @returns {I extends Iterable<infer T>
 *  ? Peekable<T>
 *  : I extends AsyncIterable<infer T>
 *  ? AsyncPeekable<T>
 *  : never
 * }
 */ function peekableIterator(iterable) {
    // @ts-ignore
    const [iterator, symbol] = iterable[Symbol.asyncIterator] ? [
        iterable[Symbol.asyncIterator](),
        Symbol.asyncIterator
    ] : [
        iterable[Symbol.iterator](),
        Symbol.iterator
    ];
    /** @type {any[]} */ const queue = [];
    // @ts-ignore
    return {
        peek: ()=>{
            return iterator.next();
        },
        push: (value)=>{
            queue.push(value);
        },
        next: ()=>{
            if (queue.length) return {
                done: false,
                value: queue.shift()
            };
            return iterator.next();
        },
        [symbol] () {
            return this;
        }
    };
}
module.exports = peekableIterator;

},{}],"jArgg":[function(require,module,exports) {
'use strict';
/**
 * Turns a browser readable stream into an async iterable. Async iteration over
 * returned iterable will lock give stream, preventing any other consumer from
 * acquiring a reader. The lock will be released if iteration loop is broken. To
 * prevent stream cancelling optional `{ preventCancel: true }` could be passed
 * as a second argument.
 * @template T
 * @param {ReadableStream<T>} stream
 * @param {Object} [options]
 * @param {boolean} [options.preventCancel=boolean]
 * @returns {AsyncIterable<T>}
 */ async function* browserReadableStreamToIt(stream, options = {
}) {
    const reader = stream.getReader();
    try {
        while(true){
            const result = await reader.read();
            if (result.done) return;
            yield result.value;
        }
    } finally{
        if (options.preventCancel !== true) reader.cancel();
        reader.releaseLock();
    }
}
module.exports = browserReadableStreamToIt;

},{}],"3roGN":[function(require,module,exports) {
'use strict';
/**
 * Collects all values from an (async) iterable into an array and returns it.
 *
 * @template T
 * @param {AsyncIterable<T>|Iterable<T>} source
 */ const all = async (source)=>{
    const arr = [];
    for await (const entry of source)arr.push(entry);
    return arr;
};
module.exports = all;

},{}],"iVxwf":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
function isBytes(obj) {
    return ArrayBuffer.isView(obj) || obj instanceof ArrayBuffer;
}
function isBlob(obj) {
    return obj.constructor && (obj.constructor.name === 'Blob' || obj.constructor.name === 'File') && typeof obj.stream === 'function';
}
function isFileObject(obj) {
    return typeof obj === 'object' && (obj.path || obj.content);
}
const isReadableStream = (value)=>value && typeof value.getReader === 'function'
;
exports.isBlob = isBlob;
exports.isBytes = isBytes;
exports.isFileObject = isFileObject;
exports.isReadableStream = isReadableStream;

},{}],"fzCd9":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var errCode = require('err-code');
var browserStreamToIt = require('browser-readablestream-to-it');
var itPeekable = require('it-peekable');
var map = require('it-map');
var utils = require('./utils.js');
var ipfsUnixfs = require('ipfs-unixfs');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var errCode__default = /*#__PURE__*/ _interopDefaultLegacy(errCode);
var browserStreamToIt__default = /*#__PURE__*/ _interopDefaultLegacy(browserStreamToIt);
var itPeekable__default = /*#__PURE__*/ _interopDefaultLegacy(itPeekable);
var map__default = /*#__PURE__*/ _interopDefaultLegacy(map);
async function* normaliseCandidateMultiple(input, normaliseContent) {
    if (typeof input === 'string' || input instanceof String || utils.isBytes(input) || utils.isBlob(input) || input._readableState) throw errCode__default["default"](new Error('Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead'), 'ERR_UNEXPECTED_INPUT');
    if (utils.isReadableStream(input)) input = browserStreamToIt__default["default"](input);
    if (Symbol.iterator in input || Symbol.asyncIterator in input) {
        const peekable = itPeekable__default["default"](input);
        const { value: value1 , done  } = await peekable.peek();
        if (done) {
            yield* [];
            return;
        }
        peekable.push(value1);
        if (Number.isInteger(value1)) throw errCode__default["default"](new Error('Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead'), 'ERR_UNEXPECTED_INPUT');
        if (value1._readableState) {
            yield* map__default["default"](peekable, (value)=>toFileObject({
                    content: value
                }, normaliseContent)
            );
            return;
        }
        if (utils.isBytes(value1)) {
            yield toFileObject({
                content: peekable
            }, normaliseContent);
            return;
        }
        if (utils.isFileObject(value1) || value1[Symbol.iterator] || value1[Symbol.asyncIterator] || utils.isReadableStream(value1) || utils.isBlob(value1)) {
            yield* map__default["default"](peekable, (value)=>toFileObject(value, normaliseContent)
            );
            return;
        }
    }
    if (utils.isFileObject(input)) throw errCode__default["default"](new Error('Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead'), 'ERR_UNEXPECTED_INPUT');
    throw errCode__default["default"](new Error('Unexpected input: ' + typeof input), 'ERR_UNEXPECTED_INPUT');
}
async function toFileObject(input, normaliseContent) {
    const { path , mode , mtime , content  } = input;
    const file = {
        path: path || '',
        mode: ipfsUnixfs.parseMode(mode),
        mtime: ipfsUnixfs.parseMtime(mtime)
    };
    if (content) file.content = await normaliseContent(content);
    else if (!path) file.content = await normaliseContent(input);
    return file;
}
exports.normaliseCandidateMultiple = normaliseCandidateMultiple;

},{"err-code":"dUrrM","browser-readablestream-to-it":"jArgg","it-peekable":"20t4V","it-map":"a4GLO","./utils.js":"iVxwf","ipfs-unixfs":"cCUai"}],"a4GLO":[function(require,module,exports) {
'use strict';
/**
 * Takes an (async) iterable and returns one with each item mapped by the passed
 * function.
 *
 * @template I,O
 * @param {AsyncIterable<I>|Iterable<I>} source
 * @param {function(I):O|Promise<O>} func
 * @returns {AsyncIterable<O>}
 */ const map = async function*(source, func) {
    for await (const val of source)yield func(val);
};
module.exports = map;

},{}],"cCUai":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var errcode = require('err-code');
var unixfs = require('./unixfs.js');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var errcode__default = /*#__PURE__*/ _interopDefaultLegacy(errcode);
const PBData = unixfs.Data;
const types = [
    'raw',
    'directory',
    'file',
    'metadata',
    'symlink',
    'hamt-sharded-directory'
];
const dirTypes = [
    'directory',
    'hamt-sharded-directory'
];
const DEFAULT_FILE_MODE = parseInt('0644', 8);
const DEFAULT_DIRECTORY_MODE = parseInt('0755', 8);
function parseMode(mode) {
    if (mode == null) return undefined;
    if (typeof mode === 'number') return mode & 4095;
    mode = mode.toString();
    if (mode.substring(0, 1) === '0') return parseInt(mode, 8) & 4095;
    return parseInt(mode, 10) & 4095;
}
function parseMtime(input) {
    if (input == null) return undefined;
    let mtime;
    if (input.secs != null) mtime = {
        secs: input.secs,
        nsecs: input.nsecs
    };
    if (input.Seconds != null) mtime = {
        secs: input.Seconds,
        nsecs: input.FractionalNanoseconds
    };
    if (Array.isArray(input)) mtime = {
        secs: input[0],
        nsecs: input[1]
    };
    if (input instanceof Date) {
        const ms = input.getTime();
        const secs = Math.floor(ms / 1000);
        mtime = {
            secs: secs,
            nsecs: (ms - secs * 1000) * 1000
        };
    }
    if (!Object.prototype.hasOwnProperty.call(mtime, 'secs')) return undefined;
    if (mtime != null && mtime.nsecs != null && (mtime.nsecs < 0 || mtime.nsecs > 999999999)) throw errcode__default['default'](new Error('mtime-nsecs must be within the range [0,999999999]'), 'ERR_INVALID_MTIME_NSECS');
    return mtime;
}
class UnixFS {
    static unmarshal(marshaled) {
        const message = PBData.decode(marshaled);
        const decoded = PBData.toObject(message, {
            defaults: false,
            arrays: true,
            longs: Number,
            objects: false
        });
        const data = new UnixFS({
            type: types[decoded.Type],
            data: decoded.Data,
            blockSizes: decoded.blocksizes,
            mode: decoded.mode,
            mtime: decoded.mtime ? {
                secs: decoded.mtime.Seconds,
                nsecs: decoded.mtime.FractionalNanoseconds
            } : undefined
        });
        data._originalMode = decoded.mode || 0;
        return data;
    }
    constructor(options = {
        type: 'file'
    }){
        const { type , data , blockSizes , hashType , fanout , mtime , mode  } = options;
        if (type && !types.includes(type)) throw errcode__default['default'](new Error('Type: ' + type + ' is not valid'), 'ERR_INVALID_TYPE');
        this.type = type || 'file';
        this.data = data;
        this.hashType = hashType;
        this.fanout = fanout;
        this.blockSizes = blockSizes || [];
        this._originalMode = 0;
        this.mode = parseMode(mode);
        if (mtime) {
            this.mtime = parseMtime(mtime);
            if (this.mtime && !this.mtime.nsecs) this.mtime.nsecs = 0;
        }
    }
    set mode(mode) {
        this._mode = this.isDirectory() ? DEFAULT_DIRECTORY_MODE : DEFAULT_FILE_MODE;
        const parsedMode = parseMode(mode);
        if (parsedMode !== undefined) this._mode = parsedMode;
    }
    get mode() {
        return this._mode;
    }
    isDirectory() {
        return Boolean(this.type && dirTypes.includes(this.type));
    }
    addBlockSize(size) {
        this.blockSizes.push(size);
    }
    removeBlockSize(index) {
        this.blockSizes.splice(index, 1);
    }
    fileSize() {
        if (this.isDirectory()) return 0;
        let sum = 0;
        this.blockSizes.forEach((size)=>{
            sum += size;
        });
        if (this.data) sum += this.data.length;
        return sum;
    }
    marshal() {
        let type;
        switch(this.type){
            case 'raw':
                type = PBData.DataType.Raw;
                break;
            case 'directory':
                type = PBData.DataType.Directory;
                break;
            case 'file':
                type = PBData.DataType.File;
                break;
            case 'metadata':
                type = PBData.DataType.Metadata;
                break;
            case 'symlink':
                type = PBData.DataType.Symlink;
                break;
            case 'hamt-sharded-directory':
                type = PBData.DataType.HAMTShard;
                break;
            default:
                throw errcode__default['default'](new Error('Type: ' + type + ' is not valid'), 'ERR_INVALID_TYPE');
        }
        let data = this.data;
        if (!this.data || !this.data.length) data = undefined;
        let mode;
        if (this.mode != null) {
            mode = this._originalMode & 4294963200 | (parseMode(this.mode) || 0);
            if (mode === DEFAULT_FILE_MODE && !this.isDirectory()) mode = undefined;
            if (mode === DEFAULT_DIRECTORY_MODE && this.isDirectory()) mode = undefined;
        }
        let mtime;
        if (this.mtime != null) {
            const parsed = parseMtime(this.mtime);
            if (parsed) {
                mtime = {
                    Seconds: parsed.secs,
                    FractionalNanoseconds: parsed.nsecs
                };
                if (mtime.FractionalNanoseconds === 0) delete mtime.FractionalNanoseconds;
            }
        }
        const pbData = {
            Type: type,
            Data: data,
            filesize: this.isDirectory() ? undefined : this.fileSize(),
            blocksizes: this.blockSizes,
            hashType: this.hashType,
            fanout: this.fanout,
            mode,
            mtime
        };
        return PBData.encode(pbData).finish();
    }
}
exports.UnixFS = UnixFS;
exports.parseMode = parseMode;
exports.parseMtime = parseMtime;

},{"err-code":"dUrrM","./unixfs.js":"hY2HP"}],"hY2HP":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var $protobuf = require('protobufjs/minimal.js');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var $protobuf__default = /*#__PURE__*/ _interopDefaultLegacy($protobuf);
const $Reader = $protobuf__default['default'].Reader, $Writer = $protobuf__default['default'].Writer, $util = $protobuf__default['default'].util;
const $root = $protobuf__default['default'].roots['ipfs-unixfs'] || ($protobuf__default['default'].roots['ipfs-unixfs'] = {
});
const Data = $root.Data = (()=>{
    function Data1(p) {
        this.blocksizes = [];
        if (p) {
            for(var ks = Object.keys(p), i = 0; i < ks.length; ++i)if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
    }
    Data1.prototype.Type = 0;
    Data1.prototype.Data = $util.newBuffer([]);
    Data1.prototype.filesize = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
    Data1.prototype.blocksizes = $util.emptyArray;
    Data1.prototype.hashType = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
    Data1.prototype.fanout = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
    Data1.prototype.mode = 0;
    Data1.prototype.mtime = null;
    Data1.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        w.uint32(8).int32(m.Type);
        if (m.Data != null && Object.hasOwnProperty.call(m, 'Data')) w.uint32(18).bytes(m.Data);
        if (m.filesize != null && Object.hasOwnProperty.call(m, 'filesize')) w.uint32(24).uint64(m.filesize);
        if (m.blocksizes != null && m.blocksizes.length) for(var i = 0; i < m.blocksizes.length; ++i)w.uint32(32).uint64(m.blocksizes[i]);
        if (m.hashType != null && Object.hasOwnProperty.call(m, 'hashType')) w.uint32(40).uint64(m.hashType);
        if (m.fanout != null && Object.hasOwnProperty.call(m, 'fanout')) w.uint32(48).uint64(m.fanout);
        if (m.mode != null && Object.hasOwnProperty.call(m, 'mode')) w.uint32(56).uint32(m.mode);
        if (m.mtime != null && Object.hasOwnProperty.call(m, 'mtime')) $root.UnixTime.encode(m.mtime, w.uint32(66).fork()).ldelim();
        return w;
    };
    Data1.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Data();
        while(r.pos < c){
            var t = r.uint32();
            switch(t >>> 3){
                case 1:
                    m.Type = r.int32();
                    break;
                case 2:
                    m.Data = r.bytes();
                    break;
                case 3:
                    m.filesize = r.uint64();
                    break;
                case 4:
                    if (!(m.blocksizes && m.blocksizes.length)) m.blocksizes = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while(r.pos < c2)m.blocksizes.push(r.uint64());
                    } else m.blocksizes.push(r.uint64());
                    break;
                case 5:
                    m.hashType = r.uint64();
                    break;
                case 6:
                    m.fanout = r.uint64();
                    break;
                case 7:
                    m.mode = r.uint32();
                    break;
                case 8:
                    m.mtime = $root.UnixTime.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
            }
        }
        if (!m.hasOwnProperty('Type')) throw $util.ProtocolError('missing required \'Type\'', {
            instance: m
        });
        return m;
    };
    Data1.fromObject = function fromObject(d) {
        if (d instanceof $root.Data) return d;
        var m = new $root.Data();
        switch(d.Type){
            case 'Raw':
            case 0:
                m.Type = 0;
                break;
            case 'Directory':
            case 1:
                m.Type = 1;
                break;
            case 'File':
            case 2:
                m.Type = 2;
                break;
            case 'Metadata':
            case 3:
                m.Type = 3;
                break;
            case 'Symlink':
            case 4:
                m.Type = 4;
                break;
            case 'HAMTShard':
            case 5:
                m.Type = 5;
                break;
        }
        if (d.Data != null) {
            if (typeof d.Data === 'string') $util.base64.decode(d.Data, m.Data = $util.newBuffer($util.base64.length(d.Data)), 0);
            else if (d.Data.length) m.Data = d.Data;
        }
        if (d.filesize != null) {
            if ($util.Long) (m.filesize = $util.Long.fromValue(d.filesize)).unsigned = true;
            else if (typeof d.filesize === 'string') m.filesize = parseInt(d.filesize, 10);
            else if (typeof d.filesize === 'number') m.filesize = d.filesize;
            else if (typeof d.filesize === 'object') m.filesize = new $util.LongBits(d.filesize.low >>> 0, d.filesize.high >>> 0).toNumber(true);
        }
        if (d.blocksizes) {
            if (!Array.isArray(d.blocksizes)) throw TypeError('.Data.blocksizes: array expected');
            m.blocksizes = [];
            for(var i = 0; i < d.blocksizes.length; ++i){
                if ($util.Long) (m.blocksizes[i] = $util.Long.fromValue(d.blocksizes[i])).unsigned = true;
                else if (typeof d.blocksizes[i] === 'string') m.blocksizes[i] = parseInt(d.blocksizes[i], 10);
                else if (typeof d.blocksizes[i] === 'number') m.blocksizes[i] = d.blocksizes[i];
                else if (typeof d.blocksizes[i] === 'object') m.blocksizes[i] = new $util.LongBits(d.blocksizes[i].low >>> 0, d.blocksizes[i].high >>> 0).toNumber(true);
            }
        }
        if (d.hashType != null) {
            if ($util.Long) (m.hashType = $util.Long.fromValue(d.hashType)).unsigned = true;
            else if (typeof d.hashType === 'string') m.hashType = parseInt(d.hashType, 10);
            else if (typeof d.hashType === 'number') m.hashType = d.hashType;
            else if (typeof d.hashType === 'object') m.hashType = new $util.LongBits(d.hashType.low >>> 0, d.hashType.high >>> 0).toNumber(true);
        }
        if (d.fanout != null) {
            if ($util.Long) (m.fanout = $util.Long.fromValue(d.fanout)).unsigned = true;
            else if (typeof d.fanout === 'string') m.fanout = parseInt(d.fanout, 10);
            else if (typeof d.fanout === 'number') m.fanout = d.fanout;
            else if (typeof d.fanout === 'object') m.fanout = new $util.LongBits(d.fanout.low >>> 0, d.fanout.high >>> 0).toNumber(true);
        }
        if (d.mode != null) m.mode = d.mode >>> 0;
        if (d.mtime != null) {
            if (typeof d.mtime !== 'object') throw TypeError('.Data.mtime: object expected');
            m.mtime = $root.UnixTime.fromObject(d.mtime);
        }
        return m;
    };
    Data1.toObject = function toObject(m, o) {
        if (!o) o = {
        };
        var d = {
        };
        if (o.arrays || o.defaults) d.blocksizes = [];
        if (o.defaults) {
            d.Type = o.enums === String ? 'Raw' : 0;
            if (o.bytes === String) d.Data = '';
            else {
                d.Data = [];
                if (o.bytes !== Array) d.Data = $util.newBuffer(d.Data);
            }
            if ($util.Long) {
                var n = new $util.Long(0, 0, true);
                d.filesize = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
            } else d.filesize = o.longs === String ? '0' : 0;
            if ($util.Long) {
                var n = new $util.Long(0, 0, true);
                d.hashType = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
            } else d.hashType = o.longs === String ? '0' : 0;
            if ($util.Long) {
                var n = new $util.Long(0, 0, true);
                d.fanout = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
            } else d.fanout = o.longs === String ? '0' : 0;
            d.mode = 0;
            d.mtime = null;
        }
        if (m.Type != null && m.hasOwnProperty('Type')) d.Type = o.enums === String ? $root.Data.DataType[m.Type] : m.Type;
        if (m.Data != null && m.hasOwnProperty('Data')) d.Data = o.bytes === String ? $util.base64.encode(m.Data, 0, m.Data.length) : o.bytes === Array ? Array.prototype.slice.call(m.Data) : m.Data;
        if (m.filesize != null && m.hasOwnProperty('filesize')) {
            if (typeof m.filesize === 'number') d.filesize = o.longs === String ? String(m.filesize) : m.filesize;
            else d.filesize = o.longs === String ? $util.Long.prototype.toString.call(m.filesize) : o.longs === Number ? new $util.LongBits(m.filesize.low >>> 0, m.filesize.high >>> 0).toNumber(true) : m.filesize;
        }
        if (m.blocksizes && m.blocksizes.length) {
            d.blocksizes = [];
            for(var j = 0; j < m.blocksizes.length; ++j)if (typeof m.blocksizes[j] === 'number') d.blocksizes[j] = o.longs === String ? String(m.blocksizes[j]) : m.blocksizes[j];
            else d.blocksizes[j] = o.longs === String ? $util.Long.prototype.toString.call(m.blocksizes[j]) : o.longs === Number ? new $util.LongBits(m.blocksizes[j].low >>> 0, m.blocksizes[j].high >>> 0).toNumber(true) : m.blocksizes[j];
        }
        if (m.hashType != null && m.hasOwnProperty('hashType')) {
            if (typeof m.hashType === 'number') d.hashType = o.longs === String ? String(m.hashType) : m.hashType;
            else d.hashType = o.longs === String ? $util.Long.prototype.toString.call(m.hashType) : o.longs === Number ? new $util.LongBits(m.hashType.low >>> 0, m.hashType.high >>> 0).toNumber(true) : m.hashType;
        }
        if (m.fanout != null && m.hasOwnProperty('fanout')) {
            if (typeof m.fanout === 'number') d.fanout = o.longs === String ? String(m.fanout) : m.fanout;
            else d.fanout = o.longs === String ? $util.Long.prototype.toString.call(m.fanout) : o.longs === Number ? new $util.LongBits(m.fanout.low >>> 0, m.fanout.high >>> 0).toNumber(true) : m.fanout;
        }
        if (m.mode != null && m.hasOwnProperty('mode')) d.mode = m.mode;
        if (m.mtime != null && m.hasOwnProperty('mtime')) d.mtime = $root.UnixTime.toObject(m.mtime, o);
        return d;
    };
    Data1.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf__default['default'].util.toJSONOptions);
    };
    Data1.DataType = (function() {
        const valuesById = {
        }, values = Object.create(valuesById);
        values[valuesById[0] = 'Raw'] = 0;
        values[valuesById[1] = 'Directory'] = 1;
        values[valuesById[2] = 'File'] = 2;
        values[valuesById[3] = 'Metadata'] = 3;
        values[valuesById[4] = 'Symlink'] = 4;
        values[valuesById[5] = 'HAMTShard'] = 5;
        return values;
    })();
    return Data1;
})();
const UnixTime = $root.UnixTime = (()=>{
    function UnixTime1(p) {
        if (p) {
            for(var ks = Object.keys(p), i = 0; i < ks.length; ++i)if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
    }
    UnixTime1.prototype.Seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
    UnixTime1.prototype.FractionalNanoseconds = 0;
    UnixTime1.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        w.uint32(8).int64(m.Seconds);
        if (m.FractionalNanoseconds != null && Object.hasOwnProperty.call(m, 'FractionalNanoseconds')) w.uint32(21).fixed32(m.FractionalNanoseconds);
        return w;
    };
    UnixTime1.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.UnixTime();
        while(r.pos < c){
            var t = r.uint32();
            switch(t >>> 3){
                case 1:
                    m.Seconds = r.int64();
                    break;
                case 2:
                    m.FractionalNanoseconds = r.fixed32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
            }
        }
        if (!m.hasOwnProperty('Seconds')) throw $util.ProtocolError('missing required \'Seconds\'', {
            instance: m
        });
        return m;
    };
    UnixTime1.fromObject = function fromObject(d) {
        if (d instanceof $root.UnixTime) return d;
        var m = new $root.UnixTime();
        if (d.Seconds != null) {
            if ($util.Long) (m.Seconds = $util.Long.fromValue(d.Seconds)).unsigned = false;
            else if (typeof d.Seconds === 'string') m.Seconds = parseInt(d.Seconds, 10);
            else if (typeof d.Seconds === 'number') m.Seconds = d.Seconds;
            else if (typeof d.Seconds === 'object') m.Seconds = new $util.LongBits(d.Seconds.low >>> 0, d.Seconds.high >>> 0).toNumber();
        }
        if (d.FractionalNanoseconds != null) m.FractionalNanoseconds = d.FractionalNanoseconds >>> 0;
        return m;
    };
    UnixTime1.toObject = function toObject(m, o) {
        if (!o) o = {
        };
        var d = {
        };
        if (o.defaults) {
            if ($util.Long) {
                var n = new $util.Long(0, 0, false);
                d.Seconds = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
            } else d.Seconds = o.longs === String ? '0' : 0;
            d.FractionalNanoseconds = 0;
        }
        if (m.Seconds != null && m.hasOwnProperty('Seconds')) {
            if (typeof m.Seconds === 'number') d.Seconds = o.longs === String ? String(m.Seconds) : m.Seconds;
            else d.Seconds = o.longs === String ? $util.Long.prototype.toString.call(m.Seconds) : o.longs === Number ? new $util.LongBits(m.Seconds.low >>> 0, m.Seconds.high >>> 0).toNumber() : m.Seconds;
        }
        if (m.FractionalNanoseconds != null && m.hasOwnProperty('FractionalNanoseconds')) d.FractionalNanoseconds = m.FractionalNanoseconds;
        return d;
    };
    UnixTime1.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf__default['default'].util.toJSONOptions);
    };
    return UnixTime1;
})();
const Metadata = $root.Metadata = (()=>{
    function Metadata1(p) {
        if (p) {
            for(var ks = Object.keys(p), i = 0; i < ks.length; ++i)if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
        }
    }
    Metadata1.prototype.MimeType = '';
    Metadata1.encode = function encode(m, w) {
        if (!w) w = $Writer.create();
        if (m.MimeType != null && Object.hasOwnProperty.call(m, 'MimeType')) w.uint32(10).string(m.MimeType);
        return w;
    };
    Metadata1.decode = function decode(r, l) {
        if (!(r instanceof $Reader)) r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.Metadata();
        while(r.pos < c){
            var t = r.uint32();
            switch(t >>> 3){
                case 1:
                    m.MimeType = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
            }
        }
        return m;
    };
    Metadata1.fromObject = function fromObject(d) {
        if (d instanceof $root.Metadata) return d;
        var m = new $root.Metadata();
        if (d.MimeType != null) m.MimeType = String(d.MimeType);
        return m;
    };
    Metadata1.toObject = function toObject(m, o) {
        if (!o) o = {
        };
        var d = {
        };
        if (o.defaults) d.MimeType = '';
        if (m.MimeType != null && m.hasOwnProperty('MimeType')) d.MimeType = m.MimeType;
        return d;
    };
    Metadata1.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf__default['default'].util.toJSONOptions);
    };
    return Metadata1;
})();
exports.Data = Data;
exports.Metadata = Metadata;
exports.UnixTime = UnixTime;
exports['default'] = $root;

},{"protobufjs/minimal.js":"kgguT"}],"kgguT":[function(require,module,exports) {
// minimal library entry point.
"use strict";
module.exports = require("./src/index-minimal");

},{"./src/index-minimal":"kFkOY"}],"kFkOY":[function(require,module,exports) {
"use strict";
var protobuf = exports;
/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */ protobuf.build = "minimal";
// Serialization
protobuf.Writer = require("./writer");
protobuf.BufferWriter = require("./writer_buffer");
protobuf.Reader = require("./reader");
protobuf.BufferReader = require("./reader_buffer");
// Utility
protobuf.util = require("./util/minimal");
protobuf.rpc = require("./rpc");
protobuf.roots = require("./roots");
protobuf.configure = configure;
/* istanbul ignore next */ /**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */ function configure() {
    protobuf.util._configure();
    protobuf.Writer._configure(protobuf.BufferWriter);
    protobuf.Reader._configure(protobuf.BufferReader);
}
// Set up buffer utility according to the environment
configure();

},{"./writer":"boWmp","./writer_buffer":"gIB4S","./reader":"bN2lE","./reader_buffer":"1b0Ms","./util/minimal":"4HDe1","./rpc":"eRwa1","./roots":"bJQDp"}],"boWmp":[function(require,module,exports) {
"use strict";
module.exports = Writer;
var util = require("./util/minimal");
var BufferWriter; // cyclic
var LongBits = util.LongBits, base64 = util.base64, utf8 = util.utf8;
/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */ function Op(fn, len, val) {
    /**
     * Function to call.
     * @type {function(Uint8Array, number, *)}
     */ this.fn = fn;
    /**
     * Value byte length.
     * @type {number}
     */ this.len = len;
    /**
     * Next operation.
     * @type {Writer.Op|undefined}
     */ this.next = undefined;
    /**
     * Value to write.
     * @type {*}
     */ this.val = val; // type varies
}
/* istanbul ignore next */ function noop() {
} // eslint-disable-line no-empty-function
/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */ function State(writer) {
    /**
     * Current head.
     * @type {Writer.Op}
     */ this.head = writer.head;
    /**
     * Current tail.
     * @type {Writer.Op}
     */ this.tail = writer.tail;
    /**
     * Current buffer length.
     * @type {number}
     */ this.len = writer.len;
    /**
     * Next state.
     * @type {State|null}
     */ this.next = writer.states;
}
/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */ function Writer() {
    /**
     * Current length.
     * @type {number}
     */ this.len = 0;
    /**
     * Operations head.
     * @type {Object}
     */ this.head = new Op(noop, 0, 0);
    /**
     * Operations tail
     * @type {Object}
     */ this.tail = this.head;
    /**
     * Linked forked states.
     * @type {Object|null}
     */ this.states = null;
// When a value is written, the writer calculates its byte length and puts it into a linked
// list of operations to perform when finish() is called. This both allows us to allocate
// buffers of the exact required size and reduces the amount of work we have to do compared
// to first calculating over objects and then encoding over objects. In our case, the encoding
// part is just a linked list walk calling operations with already prepared values.
}
var create = function create() {
    return util.Buffer ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
            return new BufferWriter();
        })();
    } : function create_array() {
        return new Writer();
    };
};
/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */ Writer.create = create();
/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */ Writer.alloc = function alloc(size) {
    return new util.Array(size);
};
// Use Uint8Array buffer pool in the browser, just like node does with buffers
/* istanbul ignore else */ if (util.Array !== Array) Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);
/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */ Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
};
function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
}
function writeVarint32(val, buf, pos) {
    while(val > 127){
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
    }
    buf[pos] = val;
}
/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */ function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
}
VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;
/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */ Writer.prototype.uint32 = function write_uint32(value) {
    // here, the call to this.push has been inlined and a varint specific Op subclass is used.
    // uint32 is by far the most frequently used operation and benefits significantly from this.
    this.len += (this.tail = this.tail.next = new VarintOp((value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5, value)).len;
    return this;
};
/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */ Writer.prototype.int32 = function write_int32(value) {
    return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
     : this.uint32(value);
};
/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */ Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
};
function writeVarint64(val, buf, pos) {
    while(val.hi){
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
    }
    while(val.lo > 127){
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
}
/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */ Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
};
/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */ Writer.prototype.int64 = Writer.prototype.uint64;
/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */ Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
};
/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */ Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
};
function writeFixed32(val, buf, pos) {
    buf[pos] = val & 255;
    buf[pos + 1] = val >>> 8 & 255;
    buf[pos + 2] = val >>> 16 & 255;
    buf[pos + 3] = val >>> 24;
}
/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */ Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
};
/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */ Writer.prototype.sfixed32 = Writer.prototype.fixed32;
/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */ Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};
/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */ Writer.prototype.sfixed64 = Writer.prototype.fixed64;
/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */ Writer.prototype.float = function write_float(value) {
    return this._push(util.float.writeFloatLE, 4, value);
};
/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */ Writer.prototype.double = function write_double(value) {
    return this._push(util.float.writeDoubleLE, 8, value);
};
var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
    buf.set(val, pos); // also works for plain array values
} : function writeBytes_for(val, buf, pos) {
    for(var i = 0; i < val.length; ++i)buf[pos + i] = val[i];
};
/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */ Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len) return this._push(writeByte, 1, 0);
    if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
};
/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */ Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
};
/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */ Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
};
/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */ Writer.prototype.reset = function reset() {
    if (this.states) {
        this.head = this.states.head;
        this.tail = this.states.tail;
        this.len = this.states.len;
        this.states = this.states.next;
    } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len = 0;
    }
    return this;
};
/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */ Writer.prototype.ldelim = function ldelim() {
    var head = this.head, tail = this.tail, len = this.len;
    this.reset().uint32(len);
    if (len) {
        this.tail.next = head.next; // skip noop
        this.tail = tail;
        this.len += len;
    }
    return this;
};
/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */ Writer.prototype.finish = function finish() {
    var head = this.head.next, buf = this.constructor.alloc(this.len), pos = 0;
    while(head){
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
    }
    // this.head = this.tail = null;
    return buf;
};
Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
    Writer.create = create();
    BufferWriter._configure();
};

},{"./util/minimal":"4HDe1"}],"4HDe1":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var util = exports;
// used to return a Promise where callback is omitted
util.asPromise = require("@protobufjs/aspromise");
// converts to / from base64 encoded strings
util.base64 = require("@protobufjs/base64");
// base class of rpc.Service
util.EventEmitter = require("@protobufjs/eventemitter");
// float handling accross browsers
util.float = require("@protobufjs/float");
// requires modules optionally and hides the call from bundlers
util.inquire = require("@protobufjs/inquire");
// converts to / from utf8 encoded strings
util.utf8 = require("@protobufjs/utf8");
// provides a node-like buffer pool in the browser
util.pool = require("@protobufjs/pool");
// utility to work with the low and high bits of a 64 bit value
util.LongBits = require("./longbits");
/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 */ util.isNode = Boolean(typeof global !== "undefined" && global && global.process && global.process.versions && global.process.versions.node);
/**
 * Global object reference.
 * @memberof util
 * @type {Object}
 */ util.global = util.isNode && global || typeof window !== "undefined" && window || typeof self !== "undefined" && self || this; // eslint-disable-line no-invalid-this
/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */ util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */ []; // used on prototypes
/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */ util.emptyObject = Object.freeze ? Object.freeze({
}) : /* istanbul ignore next */ {
}; // used on prototypes
/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */ util.isInteger = Number.isInteger || /* istanbul ignore next */ function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};
/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */ util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
};
/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */ util.isObject = function isObject(value) {
    return value && typeof value === "object";
};
/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */ util.isset = /**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */ util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop)) return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
};
/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */ /**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */ util.Buffer = (function() {
    try {
        var Buffer = util.inquire("buffer").Buffer;
        // refuse to use non-node buffers if not explicitly assigned (perf reasons):
        return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */ null;
    } catch (e) {
        /* istanbul ignore next */ return null;
    }
})();
// Internal alias of or polyfull for Buffer.from.
util._Buffer_from = null;
// Internal alias of or polyfill for Buffer.allocUnsafe.
util._Buffer_allocUnsafe = null;
/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */ util.newBuffer = function newBuffer(sizeOrArray) {
    /* istanbul ignore next */ return typeof sizeOrArray === "number" ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
};
/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */ util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */  : Array;
/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */ /**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */ util.Long = /* istanbul ignore next */ util.global.dcodeIO && /* istanbul ignore next */ util.global.dcodeIO.Long || /* istanbul ignore next */ util.global.Long || util.inquire("long");
/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */ util.key2Re = /^true|false|0|1$/;
/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */ util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */ util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */ util.longToHash = function longToHash(value) {
    return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
};
/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */ util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long) return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
};
/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */ function merge(dst, src, ifNotSet) {
    for(var keys = Object.keys(src), i = 0; i < keys.length; ++i)if (dst[keys[i]] === undefined || !ifNotSet) dst[keys[i]] = src[keys[i]];
    return dst;
}
util.merge = merge;
/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */ util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
};
/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */ function newError(name) {
    function CustomError(message, properties) {
        if (!(this instanceof CustomError)) return new CustomError(message, properties);
        // Error.call(this, message);
        // ^ just returns a new error instance because the ctor can be called as a function
        Object.defineProperty(this, "message", {
            get: function() {
                return message;
            }
        });
        /* istanbul ignore next */ if (Error.captureStackTrace) Error.captureStackTrace(this, CustomError);
        else Object.defineProperty(this, "stack", {
            value: new Error().stack || ""
        });
        if (properties) merge(this, properties);
    }
    (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;
    Object.defineProperty(CustomError.prototype, "name", {
        get: function() {
            return name;
        }
    });
    CustomError.prototype.toString = function toString() {
        return this.name + ": " + this.message;
    };
    return CustomError;
}
util.newError = newError;
/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */ util.ProtocolError = newError("ProtocolError");
/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */ /**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */ /**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */ util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {
    };
    for(var i1 = 0; i1 < fieldNames.length; ++i1)fieldMap[fieldNames[i1]] = 1;
    /**
     * @returns {string|undefined} Set field name, if any
     * @this Object
     * @ignore
     */ return function() {
        for(var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null) return keys[i];
    };
};
/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */ /**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */ util.oneOfSetter = function setOneOf(fieldNames) {
    /**
     * @param {string} name Field name
     * @returns {undefined}
     * @this Object
     * @ignore
     */ return function(name) {
        for(var i = 0; i < fieldNames.length; ++i)if (fieldNames[i] !== name) delete this[fieldNames[i]];
    };
};
/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */ util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
};
// Sets up buffer utility according to the environment (called in index-minimal)
util._configure = function() {
    var Buffer = util.Buffer;
    /* istanbul ignore if */ if (!Buffer) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
    }
    // because node 4.x buffers are incompatible & immutable
    // see: https://github.com/dcodeIO/protobuf.js/pull/665
    util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from || /* istanbul ignore next */ function Buffer_from(value, encoding) {
        return new Buffer(value, encoding);
    };
    util._Buffer_allocUnsafe = Buffer.allocUnsafe || /* istanbul ignore next */ function Buffer_allocUnsafe(size) {
        return new Buffer(size);
    };
};

},{"@protobufjs/aspromise":"gv7US","@protobufjs/base64":"aOjmr","@protobufjs/eventemitter":"lWFnX","@protobufjs/float":"gifXM","@protobufjs/inquire":"fon4w","@protobufjs/utf8":"8DJTf","@protobufjs/pool":"fadtm","./longbits":"c4DvK"}],"gv7US":[function(require,module,exports) {
"use strict";
module.exports = asPromise;
/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */ /**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */ function asPromise(fn, ctx /*, varargs */ ) {
    var params1 = new Array(arguments.length - 1), offset1 = 0, index = 2, pending = true;
    while(index < arguments.length)params1[offset1++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params1[offset1] = function callback(err /*, varargs */ ) {
            if (pending) {
                pending = false;
                if (err) reject(err);
                else {
                    var params = new Array(arguments.length - 1), offset = 0;
                    while(offset < params.length)params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params1);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}

},{}],"aOjmr":[function(require,module,exports) {
"use strict";
/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */ var base64 = exports;
/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */ base64.length = function length(string) {
    var p = string.length;
    if (!p) return 0;
    var n = 0;
    while(--p % 4 > 1 && string.charAt(p) === "=")++n;
    return Math.ceil(string.length * 3) / 4 - n;
};
// Base64 encoding table
var b64 = new Array(64);
// Base64 decoding table
var s64 = new Array(123);
// 65..90, 97..122, 48..57, 43, 47
for(var i = 0; i < 64;)s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */ base64.encode = function encode(buffer, start, end) {
    var parts = null, chunk = [];
    var i1 = 0, j = 0, t; // temporary
    while(start < end){
        var b = buffer[start++];
        switch(j){
            case 0:
                chunk[i1++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i1++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i1++] = b64[t | b >> 6];
                chunk[i1++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i1 > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i1 = 0;
        }
    }
    if (j) {
        chunk[i1++] = b64[t];
        chunk[i1++] = 61;
        if (j === 1) chunk[i1++] = 61;
    }
    if (parts) {
        if (i1) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i1)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i1));
};
var invalidEncoding = "invalid encoding";
/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */ base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, t; // temporary
    for(var i2 = 0; i2 < string.length;){
        var c = string.charCodeAt(i2++);
        if (c === 61 && j > 1) break;
        if ((c = s64[c]) === undefined) throw Error(invalidEncoding);
        switch(j){
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1) throw Error(invalidEncoding);
    return offset - start;
};
/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */ base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};

},{}],"lWFnX":[function(require,module,exports) {
"use strict";
module.exports = EventEmitter;
/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */ function EventEmitter() {
    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */ this._listeners = {
    };
}
/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */ EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn: fn,
        ctx: ctx || this
    });
    return this;
};
/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */ EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined) this._listeners = {
    };
    else if (fn === undefined) this._listeners[evt] = [];
    else {
        var listeners = this._listeners[evt];
        for(var i = 0; i < listeners.length;)if (listeners[i].fn === fn) listeners.splice(i, 1);
        else ++i;
    }
    return this;
};
/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */ EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [], i = 1;
        for(; i < arguments.length;)args.push(arguments[i++]);
        for(i = 0; i < listeners.length;)listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};

},{}],"gifXM":[function(require,module,exports) {
"use strict";
module.exports = factory(factory);
/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */ /**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */ /**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */ /**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */ /**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */ /**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */ /**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */ /**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */ /**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */ // Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {
    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {
        var f32 = new Float32Array([
            -0
        ]), f8b = new Uint8Array(f32.buffer), le = f8b[3] === 128;
        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }
        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }
        /* istanbul ignore next */ exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */ exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }
        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }
        /* istanbul ignore next */ exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */ exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;
    // float: ieee754
    })();
    else (function() {
        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign) val = -val;
            if (val === 0) writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val)) writeUint(2143289344, buf, pos);
            else if (val > 340282346638528860000000000000000000000) writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 0.000000000000000000000000000000000000011754943508222875) writeUint((sign << 31 | Math.round(val / 0.000000000000000000000000000000000000000000001401298464324817)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2), mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }
        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos), sign = (uint >> 31) * 2 + 1, exponent = uint >>> 23 & 255, mantissa = uint & 8388607;
            return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 // denormal
             ? sign * 0.000000000000000000000000000000000000000000001401298464324817 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }
        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
    })();
    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {
        var f64 = new Float64Array([
            -0
        ]), f8b = new Uint8Array(f64.buffer), le = f8b[7] === 128;
        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }
        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }
        /* istanbul ignore next */ exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */ exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }
        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }
        /* istanbul ignore next */ exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */ exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;
    // double: ieee754
    })();
    else (function() {
        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign) val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022250738585072014) {
                    mantissa = val / 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024) exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }
        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0), hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1, exponent = hi >>> 20 & 2047, mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 // denormal
             ? sign * 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }
        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
    })();
    return exports;
}
// uint helpers
function writeUintLE(val, buf, pos) {
    buf[pos] = val & 255;
    buf[pos + 1] = val >>> 8 & 255;
    buf[pos + 2] = val >>> 16 & 255;
    buf[pos + 3] = val >>> 24;
}
function writeUintBE(val, buf, pos) {
    buf[pos] = val >>> 24;
    buf[pos + 1] = val >>> 16 & 255;
    buf[pos + 2] = val >>> 8 & 255;
    buf[pos + 3] = val & 255;
}
function readUintLE(buf, pos) {
    return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
}
function readUintBE(buf, pos) {
    return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
}

},{}],"fon4w":[function(require,module,exports) {
"use strict";
module.exports = inquire;
/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */ function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/, "re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length)) return mod;
    } catch (e) {
    } // eslint-disable-line no-empty
    return null;
}

},{}],"8DJTf":[function(require,module,exports) {
"use strict";
/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */ var utf8 = exports;
/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */ utf8.length = function utf8_length(string) {
    var len = 0, c = 0;
    for(var i = 0; i < string.length; ++i){
        c = string.charCodeAt(i);
        if (c < 128) len += 1;
        else if (c < 2048) len += 2;
        else if ((c & 64512) === 55296 && (string.charCodeAt(i + 1) & 64512) === 56320) {
            ++i;
            len += 4;
        } else len += 3;
    }
    return len;
};
/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */ utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1) return "";
    var parts = null, chunk = [], i = 0, t; // temporary
    while(start < end){
        t = buffer[start++];
        if (t < 128) chunk[i++] = t;
        else if (t > 191 && t < 224) chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 65536;
            chunk[i++] = 55296 + (t >> 10);
            chunk[i++] = 56320 + (t & 1023);
        } else chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};
/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */ utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset, c1, c2; // character 2
    for(var i = 0; i < string.length; ++i){
        c1 = string.charCodeAt(i);
        if (c1 < 128) buffer[offset++] = c1;
        else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6 | 192;
            buffer[offset++] = c1 & 63 | 128;
        } else if ((c1 & 64512) === 55296 && ((c2 = string.charCodeAt(i + 1)) & 64512) === 56320) {
            c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
            ++i;
            buffer[offset++] = c1 >> 18 | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12 | 224;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
        }
    }
    return offset - start;
};

},{}],"fadtm":[function(require,module,exports) {
"use strict";
module.exports = pool;
/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */ /**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */ /**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */ function pool(alloc, slice, size1) {
    var SIZE = size1 || 8192;
    var MAX = SIZE >>> 1;
    var slab = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX) return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) offset = (offset | 7) + 1;
        return buf;
    };
}

},{}],"c4DvK":[function(require,module,exports) {
"use strict";
module.exports = LongBits;
var util = require("../util/minimal");
/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */ function LongBits(lo, hi) {
    // note that the casts below are theoretically unnecessary as of today, but older statically
    // generated converter code might still call the ctor with signed 32bits. kept for compat.
    /**
     * Low bits.
     * @type {number}
     */ this.lo = lo >>> 0;
    /**
     * High bits.
     * @type {number}
     */ this.hi = hi >>> 0;
}
/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */ var zero = LongBits.zero = new LongBits(0, 0);
zero.toNumber = function() {
    return 0;
};
zero.zzEncode = zero.zzDecode = function() {
    return this;
};
zero.length = function() {
    return 1;
};
/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */ var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */ LongBits.fromNumber = function fromNumber(value) {
    if (value === 0) return zero;
    var sign = value < 0;
    if (sign) value = -value;
    var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295) hi = 0;
        }
    }
    return new LongBits(lo, hi);
};
/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */ LongBits.from = function from(value) {
    if (typeof value === "number") return LongBits.fromNumber(value);
    if (util.isString(value)) {
        /* istanbul ignore else */ if (util.Long) value = util.Long.fromString(value);
        else return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};
/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */ LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0, hi = ~this.hi >>> 0;
        if (!lo) hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
};
/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */ LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned)) : {
        low: this.lo | 0,
        high: this.hi | 0,
        unsigned: Boolean(unsigned)
    };
};
var charCodeAt = String.prototype.charCodeAt;
/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */ LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash) return zero;
    return new LongBits((charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0, (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0);
};
/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */ LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
};
/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */ LongBits.prototype.zzEncode = function zzEncode() {
    var mask = this.hi >> 31;
    this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo = (this.lo << 1 ^ mask) >>> 0;
    return this;
};
/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */ LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi = (this.hi >>> 1 ^ mask) >>> 0;
    return this;
};
/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */ LongBits.prototype.length = function length() {
    var part0 = this.lo, part1 = (this.lo >>> 28 | this.hi << 4) >>> 0, part2 = this.hi >>> 24;
    return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
};

},{"../util/minimal":"4HDe1"}],"gIB4S":[function(require,module,exports) {
"use strict";
module.exports = BufferWriter;
// extends Writer
var Writer = require("./writer");
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
var util = require("./util/minimal");
/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */ function BufferWriter() {
    Writer.call(this);
}
BufferWriter._configure = function() {
    /**
     * Allocates a buffer of the specified size.
     * @function
     * @param {number} size Buffer size
     * @returns {Buffer} Buffer
     */ BufferWriter.alloc = util._Buffer_allocUnsafe;
    BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
    // also works for plain array values
    } : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy) val.copy(buf, pos, 0, val.length);
        else for(var i = 0; i < val.length;)buf[pos++] = val[i++];
    };
};
/**
 * @override
 */ BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value)) value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len) this._push(BufferWriter.writeBytesBuffer, len, value);
    return this;
};
function writeStringBuffer(val, buf, pos) {
    if (val.length < 40) util.utf8.write(val, buf, pos);
    else if (buf.utf8Write) buf.utf8Write(val, pos);
    else buf.write(val, pos);
}
/**
 * @override
 */ BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = util.Buffer.byteLength(value);
    this.uint32(len);
    if (len) this._push(writeStringBuffer, len, value);
    return this;
};
/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */ BufferWriter._configure();

},{"./writer":"boWmp","./util/minimal":"4HDe1"}],"bN2lE":[function(require,module,exports) {
"use strict";
module.exports = Reader;
var util = require("./util/minimal");
var BufferReader; // cyclic
var LongBits = util.LongBits, utf8 = util.utf8;
/* istanbul ignore next */ function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}
/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */ function Reader(buffer) {
    /**
     * Read buffer.
     * @type {Uint8Array}
     */ this.buf = buffer;
    /**
     * Read buffer position.
     * @type {number}
     */ this.pos = 0;
    /**
     * Read buffer length.
     * @type {number}
     */ this.len = buffer.length;
}
var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
    if (buffer instanceof Uint8Array || Array.isArray(buffer)) return new Reader(buffer);
    throw Error("illegal buffer");
} : function create_array(buffer) {
    if (Array.isArray(buffer)) return new Reader(buffer);
    throw Error("illegal buffer");
};
var create = function create() {
    return util.Buffer ? function create_buffer_setup(buffer1) {
        return (Reader.create = function create_buffer(buffer) {
            return util.Buffer.isBuffer(buffer) ? new BufferReader(buffer) : create_array(buffer);
        })(buffer1);
    } : create_array;
};
/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */ Reader.create = create();
Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */ util.Array.prototype.slice;
/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */ Reader.prototype.uint32 = (function read_uint32_setup() {
    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
    return function read_uint32() {
        value = (this.buf[this.pos] & 127) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        /* istanbul ignore if */ if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
        }
        return value;
    };
})();
/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */ Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
};
/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */ Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
};
/* eslint-disable no-invalid-this */ function readLongVarint() {
    // tends to deopt with local vars for octet etc.
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) {
        for(; i < 4; ++i){
            // 1st..4th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128) return bits;
        }
        // 5th
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
        if (this.buf[this.pos++] < 128) return bits;
        i = 0;
    } else {
        for(; i < 3; ++i){
            /* istanbul ignore if */ if (this.pos >= this.len) throw indexOutOfRange(this);
            // 1st..3th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128) return bits;
        }
        // 4th
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
    }
    if (this.len - this.pos > 4) for(; i < 5; ++i){
        // 6th..10th
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
        if (this.buf[this.pos++] < 128) return bits;
    }
    else for(; i < 5; ++i){
        /* istanbul ignore if */ if (this.pos >= this.len) throw indexOutOfRange(this);
        // 6th..10th
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
        if (this.buf[this.pos++] < 128) return bits;
    }
    /* istanbul ignore next */ throw Error("invalid varint encoding");
}
/* eslint-enable no-invalid-this */ /**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */ /**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */ /**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */ /**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */ Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
};
function readFixed32_end(buf, end) {
    return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
}
/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */ Reader.prototype.fixed32 = function read_fixed32() {
    /* istanbul ignore if */ if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
    return readFixed32_end(this.buf, this.pos += 4);
};
/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */ Reader.prototype.sfixed32 = function read_sfixed32() {
    /* istanbul ignore if */ if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
    return readFixed32_end(this.buf, this.pos += 4) | 0;
};
/* eslint-disable no-invalid-this */ function readFixed64() {
    /* istanbul ignore if */ if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);
    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}
/* eslint-enable no-invalid-this */ /**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */ /**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */ /**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */ Reader.prototype.float = function read_float() {
    /* istanbul ignore if */ if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
};
/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */ Reader.prototype.double = function read_double() {
    /* istanbul ignore if */ if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);
    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
};
/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */ Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(), start = this.pos, end = this.pos + length;
    /* istanbul ignore if */ if (end > this.len) throw indexOutOfRange(this, length);
    this.pos += length;
    if (Array.isArray(this.buf)) return this.buf.slice(start, end);
    return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
     ? new this.buf.constructor(0) : this._slice.call(this.buf, start, end);
};
/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */ Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
};
/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */ Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
        /* istanbul ignore if */ if (this.pos + length > this.len) throw indexOutOfRange(this, length);
        this.pos += length;
    } else do {
        /* istanbul ignore if */ if (this.pos >= this.len) throw indexOutOfRange(this);
    }while (this.buf[this.pos++] & 128)
    return this;
};
/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */ Reader.prototype.skipType = function(wireType) {
    switch(wireType){
        case 0:
            this.skip();
            break;
        case 1:
            this.skip(8);
            break;
        case 2:
            this.skip(this.uint32());
            break;
        case 3:
            while((wireType = this.uint32() & 7) !== 4)this.skipType(wireType);
            break;
        case 5:
            this.skip(4);
            break;
        /* istanbul ignore next */ default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
};
Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;
    Reader.create = create();
    BufferReader._configure();
    var fn = util.Long ? "toLong" : /* istanbul ignore next */ "toNumber";
    util.merge(Reader.prototype, {
        int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
        },
        uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
        },
        sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
        },
        fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
        },
        sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
        }
    });
};

},{"./util/minimal":"4HDe1"}],"1b0Ms":[function(require,module,exports) {
"use strict";
module.exports = BufferReader;
// extends Reader
var Reader = require("./reader");
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
var util = require("./util/minimal");
/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */ function BufferReader(buffer) {
    Reader.call(this, buffer);
/**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */ }
BufferReader._configure = function() {
    /* istanbul ignore else */ if (util.Buffer) BufferReader.prototype._slice = util.Buffer.prototype.slice;
};
/**
 * @override
 */ BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32(); // modifies pos
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
};
/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */ BufferReader._configure();

},{"./reader":"bN2lE","./util/minimal":"4HDe1"}],"eRwa1":[function(require,module,exports) {
"use strict";
/**
 * Streaming RPC helpers.
 * @namespace
 */ var rpc = exports;
/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */ /**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */ rpc.Service = require("./rpc/service");

},{"./rpc/service":"lVKlz"}],"lVKlz":[function(require,module,exports) {
"use strict";
module.exports = Service;
var util = require("../util/minimal");
// Extends EventEmitter
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */ /**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */ /**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */ function Service(rpcImpl, requestDelimited, responseDelimited) {
    if (typeof rpcImpl !== "function") throw TypeError("rpcImpl must be a function");
    util.EventEmitter.call(this);
    /**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {RPCImpl|null}
     */ this.rpcImpl = rpcImpl;
    /**
     * Whether requests are length-delimited.
     * @type {boolean}
     */ this.requestDelimited = Boolean(requestDelimited);
    /**
     * Whether responses are length-delimited.
     * @type {boolean}
     */ this.responseDelimited = Boolean(responseDelimited);
}
/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */ Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
    if (!request) throw TypeError("request must be specified");
    var self = this;
    if (!callback) return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);
    if (!self.rpcImpl) {
        setTimeout(function() {
            callback(Error("already ended"));
        }, 0);
        return undefined;
    }
    try {
        return self.rpcImpl(method, requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(), function rpcCallback(err, response) {
            if (err) {
                self.emit("error", err, method);
                return callback(err);
            }
            if (response === null) {
                self.end(/* endedByRPC */ true);
                return undefined;
            }
            if (!(response instanceof responseCtor)) try {
                response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
            } catch (err1) {
                self.emit("error", err1, method);
                return callback(err1);
            }
            self.emit("data", response, method);
            return callback(null, response);
        });
    } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() {
            callback(err);
        }, 0);
        return undefined;
    }
};
/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */ Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
        if (!endedByRPC) this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
    }
    return this;
};

},{"../util/minimal":"4HDe1"}],"bJQDp":[function(require,module,exports) {
"use strict";
module.exports = {
}; /**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available accross modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */ 

},{}],"hSmgP":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
function modeToString(mode) {
    if (mode == null) return undefined;
    if (typeof mode === 'string') return mode;
    return mode.toString(8).padStart(4, '0');
}
exports.modeToString = modeToString;

},{}],"1Gv25":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var anySignal = require('any-signal');
function filter(signals) {
    return signals.filter(Boolean);
}
function abortSignal(...signals) {
    return anySignal.anySignal(filter(signals));
}
exports.abortSignal = abortSignal;

},{"any-signal":"fXfV7"}],"a083I":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createRm = configure.configure((api)=>{
    async function* rm(cid1, options = {
    }) {
        if (!Array.isArray(cid1)) cid1 = [
            cid1
        ];
        const res = await api.post('block/rm', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: cid1.map((cid2)=>cid2.toString()
                ),
                'stream-channels': true,
                ...options
            }),
            headers: options.headers
        });
        for await (const removed of res.ndjson())yield toCoreInterface(removed);
    }
    return rm;
});
function toCoreInterface(removed) {
    const out = {
        cid: cid.CID.parse(removed.Hash)
    };
    if (removed.Error) out.error = new Error(removed.Error);
    return out;
}
exports.createRm = createRm;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"fyJE5":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createStat = configure.configure((api)=>{
    async function stat(cid$1, options = {
    }) {
        const res = await api.post('block/stat', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: cid$1.toString(),
                ...options
            }),
            headers: options.headers
        });
        const data = await res.json();
        return {
            cid: cid.CID.parse(data.Key),
            size: data.Size
        };
    }
    return stat;
});
exports.createStat = createStat;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"8mWMC":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var add = require('./add.js');
var clear = require('./clear.js');
var list = require('./list.js');
var reset = require('./reset.js');
var rm = require('./rm.js');
function createBootstrap(config) {
    return {
        add: add.createAdd(config),
        clear: clear.createClear(config),
        list: list.createList(config),
        reset: reset.createReset(config),
        rm: rm.createRm(config)
    };
}
exports.createBootstrap = createBootstrap;

},{"./add.js":"hv2vL","./clear.js":"enJHN","./list.js":"2FhO9","./reset.js":"fRibT","./rm.js":"9HKdm"}],"hv2vL":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var multiaddr = require('multiaddr');
const createAdd = configure.configure((api)=>{
    async function add(addr, options = {
    }) {
        const res = await api.post('bootstrap/add', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: addr,
                ...options
            }),
            headers: options.headers
        });
        const { Peers  } = await res.json();
        return {
            Peers: Peers.map((ma)=>new multiaddr.Multiaddr(ma)
            )
        };
    }
    return add;
});
exports.createAdd = createAdd;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","multiaddr":"dOMJu"}],"enJHN":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var multiaddr = require('multiaddr');
const createClear = configure.configure((api)=>{
    async function clear(options = {
    }) {
        const res = await api.post('bootstrap/rm', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                ...options,
                all: true
            }),
            headers: options.headers
        });
        const { Peers  } = await res.json();
        return {
            Peers: Peers.map((ma)=>new multiaddr.Multiaddr(ma)
            )
        };
    }
    return clear;
});
exports.createClear = createClear;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","multiaddr":"dOMJu"}],"2FhO9":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var multiaddr = require('multiaddr');
const createList = configure.configure((api)=>{
    async function list(options = {
    }) {
        const res = await api.post('bootstrap/list', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        const { Peers  } = await res.json();
        return {
            Peers: Peers.map((ma)=>new multiaddr.Multiaddr(ma)
            )
        };
    }
    return list;
});
exports.createList = createList;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","multiaddr":"dOMJu"}],"fRibT":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var multiaddr = require('multiaddr');
const createReset = configure.configure((api)=>{
    async function reset(options = {
    }) {
        const res = await api.post('bootstrap/add', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                ...options,
                default: true
            }),
            headers: options.headers
        });
        const { Peers  } = await res.json();
        return {
            Peers: Peers.map((ma)=>new multiaddr.Multiaddr(ma)
            )
        };
    }
    return reset;
});
exports.createReset = createReset;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","multiaddr":"dOMJu"}],"9HKdm":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var multiaddr = require('multiaddr');
const createRm = configure.configure((api)=>{
    async function rm(addr, options = {
    }) {
        const res = await api.post('bootstrap/rm', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: addr,
                ...options
            }),
            headers: options.headers
        });
        const { Peers  } = await res.json();
        return {
            Peers: Peers.map((ma)=>new multiaddr.Multiaddr(ma)
            )
        };
    }
    return rm;
});
exports.createRm = createRm;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","multiaddr":"dOMJu"}],"9BjQG":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var index = require('./profiles/index.js');
var get = require('./get.js');
var getAll = require('./get-all.js');
var replace = require('./replace.js');
var set = require('./set.js');
function createConfig(config) {
    return {
        getAll: getAll.createGetAll(config),
        get: get.createGet(config),
        set: set.createSet(config),
        replace: replace.createReplace(config),
        profiles: index.createProfiles(config)
    };
}
exports.createConfig = createConfig;

},{"./profiles/index.js":"fSSKm","./get.js":"lwdEO","./get-all.js":"gF0Vv","./replace.js":"aXaK6","./set.js":"eOUWN"}],"fSSKm":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var apply = require('./apply.js');
var list = require('./list.js');
function createProfiles(config) {
    return {
        apply: apply.createApply(config),
        list: list.createList(config)
    };
}
exports.createProfiles = createProfiles;

},{"./apply.js":"glTWh","./list.js":"kxEC3"}],"glTWh":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../../lib/configure.js');
var toUrlSearchParams = require('../../lib/to-url-search-params.js');
const createApply = configure.configure((api)=>{
    async function apply(profile, options = {
    }) {
        const res = await api.post('config/profile/apply', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: profile,
                ...options
            }),
            headers: options.headers
        });
        const data = await res.json();
        return {
            original: data.OldCfg,
            updated: data.NewCfg
        };
    }
    return apply;
});
exports.createApply = createApply;

},{"../../lib/configure.js":"7w4Kn","../../lib/to-url-search-params.js":"akREo"}],"kxEC3":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var objectToCamel = require('../../lib/object-to-camel.js');
var configure = require('../../lib/configure.js');
var toUrlSearchParams = require('../../lib/to-url-search-params.js');
const createList = configure.configure((api)=>{
    async function list(options = {
    }) {
        const res = await api.post('config/profile/list', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        const data = await res.json();
        return data.map((profile)=>objectToCamel.objectToCamel(profile)
        );
    }
    return list;
});
exports.createList = createList;

},{"../../lib/object-to-camel.js":"9fkwr","../../lib/configure.js":"7w4Kn","../../lib/to-url-search-params.js":"akREo"}],"9fkwr":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
function objectToCamel(obj) {
    if (obj == null) return obj;
    const caps = /^[A-Z]+$/;
    const output = {
    };
    return Object.keys(obj).reduce((camelObj, k)=>{
        if (caps.test(k)) camelObj[k.toLowerCase()] = obj[k];
        else if (caps.test(k[0])) camelObj[k[0].toLowerCase() + k.slice(1)] = obj[k];
        else camelObj[k] = obj[k];
        return camelObj;
    }, output);
}
exports.objectToCamel = objectToCamel;

},{}],"lwdEO":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createGet = configure.configure((api)=>{
    const get = async (key, options = {
    })=>{
        if (!key) throw new Error('key argument is required');
        const res = await api.post('config', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: key,
                ...options
            }),
            headers: options.headers
        });
        const data = await res.json();
        return data.Value;
    };
    return get;
});
exports.createGet = createGet;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"gF0Vv":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createGetAll = configure.configure((api)=>{
    const getAll = async (options = {
    })=>{
        const res = await api.post('config/show', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                ...options
            }),
            headers: options.headers
        });
        const data = await res.json();
        return data;
    };
    return getAll;
});
exports.createGetAll = createGetAll;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"aXaK6":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var fromString = require('uint8arrays/from-string');
var multipartRequest = require('ipfs-core-utils/multipart-request');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var abortSignal = require('../lib/abort-signal.js');
const createReplace = configure.configure((api)=>{
    const replace = async (config, options = {
    })=>{
        const controller = new AbortController();
        const signal = abortSignal.abortSignal(controller.signal, options.signal);
        const res = await api.post('config/replace', {
            signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            ...await multipartRequest.multipartRequest([
                fromString.fromString(JSON.stringify(config))
            ], controller, options.headers)
        });
        await res.text();
    };
    return replace;
});
exports.createReplace = createReplace;

},{"uint8arrays/from-string":"7qjkp","ipfs-core-utils/multipart-request":"g6OOu","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","../lib/abort-signal.js":"1Gv25"}],"eOUWN":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createSet = configure.configure((api)=>{
    const set = async (key, value, options = {
    })=>{
        if (typeof key !== 'string') throw new Error('Invalid key type');
        const params = {
            ...options,
            ...encodeParam(key, value)
        };
        const res = await api.post('config', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(params),
            headers: options.headers
        });
        await res.text();
    };
    return set;
});
const encodeParam = (key, value)=>{
    switch(typeof value){
        case 'boolean':
            return {
                arg: [
                    key,
                    value.toString()
                ],
                bool: true
            };
        case 'string':
            return {
                arg: [
                    key,
                    value
                ]
            };
        default:
            return {
                arg: [
                    key,
                    JSON.stringify(value)
                ],
                json: true
            };
    }
};
exports.createSet = createSet;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"jtisc":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var _export = require('./export.js');
var get = require('./get.js');
var _import = require('./import.js');
var put = require('./put.js');
var resolve = require('./resolve.js');
function createDag(codecs, config) {
    return {
        export: _export.createExport(config),
        get: get.createGet(codecs, config),
        import: _import.createImport(config),
        put: put.createPut(codecs, config),
        resolve: resolve.createResolve(config)
    };
}
exports.createDag = createDag;

},{"./export.js":"7m2D5","./get.js":"9xnao","./import.js":"jKMnU","./put.js":"if8Xx","./resolve.js":"b3myk"}],"7m2D5":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createExport = configure.configure((api)=>{
    async function* dagExport(root, options = {
    }) {
        const res = await api.post('dag/export', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: root.toString()
            }),
            headers: options.headers
        });
        yield* res.iterator();
    }
    return dagExport;
});
exports.createExport = createExport;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"9xnao":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var resolve = require('../lib/resolve.js');
var first = require('it-first');
var last = require('it-last');
var errCode = require('err-code');
var get = require('../block/get.js');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var first__default = /*#__PURE__*/ _interopDefaultLegacy(first);
var last__default = /*#__PURE__*/ _interopDefaultLegacy(last);
var errCode__default = /*#__PURE__*/ _interopDefaultLegacy(errCode);
const createGet = (codecs, options1)=>{
    const fn = configure.configure((api, opts)=>{
        const getBlock = get.createGet(opts);
        const get$1 = async (cid, options = {
        })=>{
            if (options.path) {
                const entry = options.localResolve ? await first__default["default"](resolve.resolve(cid, options.path, codecs, getBlock, options)) : await last__default["default"](resolve.resolve(cid, options.path, codecs, getBlock, options));
                const result = entry;
                if (!result) throw errCode__default["default"](new Error('Not found'), 'ERR_NOT_FOUND');
                return result;
            }
            const codec = await codecs.getCodec(cid.code);
            const block = await getBlock(cid, options);
            const node = codec.decode(block);
            return {
                value: node,
                remainderPath: ''
            };
        };
        return get$1;
    });
    return fn(options1);
};
exports.createGet = createGet;

},{"../lib/configure.js":"7w4Kn","../lib/resolve.js":"aIyqb","it-first":"kZCg9","it-last":"iWUUH","err-code":"dUrrM","../block/get.js":"bkTl6"}],"aIyqb":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var errCode = require('err-code');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var errCode__default = /*#__PURE__*/ _interopDefaultLegacy(errCode);
async function* resolve(cid$1, path, codecs, getBlock, options) {
    const load = async (cid1)=>{
        const codec = await codecs.getCodec(cid1.code);
        const block = await getBlock(cid1, options);
        return codec.decode(block);
    };
    const parts = path.split('/').filter(Boolean);
    let value = await load(cid$1);
    let lastCid = cid$1;
    while(parts.length){
        const key = parts.shift();
        if (!key) throw errCode__default["default"](new Error(`Could not resolve path "${path}"`), 'ERR_INVALID_PATH');
        if (Object.prototype.hasOwnProperty.call(value, key)) {
            value = value[key];
            yield {
                value,
                remainderPath: parts.join('/')
            };
        } else throw errCode__default["default"](new Error(`no link named "${key}" under ${lastCid}`), 'ERR_NO_LINK');
        const cid$1 = cid.CID.asCID(value);
        if (cid$1) {
            lastCid = cid$1;
            value = await load(value);
        }
    }
    yield {
        value,
        remainderPath: ''
    };
}
exports.resolve = resolve;

},{"multiformats/cid":"4uoBU","err-code":"dUrrM"}],"kZCg9":[function(require,module,exports) {
'use strict';
/**
 * Returns the first result from an (async) iterable, unless empty, in which
 * case returns `undefined`.
 *
 * @template T
 * @param {AsyncIterable<T>|Iterable<T>} source
 */ const first = async (source)=>{
    for await (const entry of source)return entry;
    return undefined;
};
module.exports = first;

},{}],"iWUUH":[function(require,module,exports) {
'use strict';
/**
 * Returns the last item of an (async) iterable, unless empty, in which case
 * return `undefined`.
 *
 * @template T
 * @param {AsyncIterable<T>|Iterable<T>} source
 */ const last = async (source)=>{
    let res;
    for await (const entry of source)res = entry;
    return res;
};
module.exports = last;

},{}],"jKMnU":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var abortSignal = require('../lib/abort-signal.js');
var multipartRequest = require('ipfs-core-utils/multipart-request');
var cid = require('multiformats/cid');
const createImport = configure.configure((api)=>{
    async function* dagImport(source, options = {
    }) {
        const controller = new AbortController();
        const signal = abortSignal.abortSignal(controller.signal, options.signal);
        const { headers , body  } = await multipartRequest.multipartRequest(source, controller, options.headers);
        const res = await api.post('dag/import', {
            signal,
            headers,
            body,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                'pin-roots': options.pinRoots
            })
        });
        for await (const { Root  } of res.ndjson())if (Root !== undefined) {
            const { Cid: { '/': Cid  } , PinErrorMsg  } = Root;
            yield {
                root: {
                    cid: cid.CID.parse(Cid),
                    pinErrorMsg: PinErrorMsg
                }
            };
        }
    }
    return dagImport;
});
exports.createImport = createImport;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","../lib/abort-signal.js":"1Gv25","ipfs-core-utils/multipart-request":"g6OOu","multiformats/cid":"4uoBU"}],"if8Xx":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var multipartRequest = require('ipfs-core-utils/multipart-request');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var abortSignal = require('../lib/abort-signal.js');
const createPut = (codecs, options1)=>{
    const fn = configure.configure((api)=>{
        const put = async (dagNode, options = {
        })=>{
            const settings = {
                storeCodec: 'dag-cbor',
                hashAlg: 'sha2-256',
                ...options
            };
            let serialized;
            if (settings.inputCodec) {
                if (!(dagNode instanceof Uint8Array)) throw new Error('Can only inputCodec on raw bytes that can be decoded');
                serialized = dagNode;
            } else {
                const storeCodec = await codecs.getCodec(settings.storeCodec);
                serialized = storeCodec.encode(dagNode);
                settings.inputCodec = settings.storeCodec;
            }
            const controller = new AbortController();
            const signal = abortSignal.abortSignal(controller.signal, settings.signal);
            const res = await api.post('dag/put', {
                timeout: settings.timeout,
                signal,
                searchParams: toUrlSearchParams.toUrlSearchParams(settings),
                ...await multipartRequest.multipartRequest([
                    serialized
                ], controller, settings.headers)
            });
            const data = await res.json();
            return cid.CID.parse(data.Cid['/']);
        };
        return put;
    });
    return fn(options1);
};
exports.createPut = createPut;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","ipfs-core-utils/multipart-request":"g6OOu","../lib/to-url-search-params.js":"akREo","../lib/abort-signal.js":"1Gv25"}],"b3myk":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createResolve = configure.configure((api)=>{
    const resolve = async (ipfsPath, options = {
    })=>{
        const res = await api.post('dag/resolve', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: `${ipfsPath}${options.path ? `/${options.path}`.replace(/\/[/]+/g, '/') : ''}`,
                ...options
            }),
            headers: options.headers
        });
        const data = await res.json();
        return {
            cid: cid.CID.parse(data.Cid['/']),
            remainderPath: data.RemPath
        };
    };
    return resolve;
});
exports.createResolve = createResolve;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"2Pp6g":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var findPeer = require('./find-peer.js');
var findProvs = require('./find-provs.js');
var get = require('./get.js');
var provide = require('./provide.js');
var put = require('./put.js');
var query = require('./query.js');
function createDht(config) {
    return {
        findPeer: findPeer.createFindPeer(config),
        findProvs: findProvs.createFindProvs(config),
        get: get.createGet(config),
        provide: provide.createProvide(config),
        put: put.createPut(config),
        query: query.createQuery(config)
    };
}
exports.createDht = createDht;

},{"./find-peer.js":"U6OjR","./find-provs.js":"1Njgq","./get.js":"erl4A","./provide.js":"foQXC","./put.js":"lQHtb","./query.js":"1KtDa"}],"U6OjR":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var mapEvent = require('./map-event.js');
const createFindPeer = configure.configure((api)=>{
    async function* findPeer(peerId, options = {
    }) {
        const res = await api.post('dht/findpeer', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: peerId,
                ...options
            }),
            headers: options.headers
        });
        for await (const event of res.ndjson())yield mapEvent.mapEvent(event);
    }
    return findPeer;
});
exports.createFindPeer = createFindPeer;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","./map-event.js":"iBC1s"}],"iBC1s":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var fromString = require('uint8arrays/from-string');
var responseTypes = require('./response-types.js');
var multiaddr = require('multiaddr');
const mapEvent = (event)=>{
    if (event.Type === responseTypes.SendingQuery) return {
        to: event.ID,
        name: 'SENDING_QUERY',
        type: event.Type
    };
    if (event.Type === responseTypes.PeerResponse) return {
        from: event.ID,
        name: 'PEER_RESPONSE',
        type: event.Type,
        messageType: 0,
        messageName: 'PUT_VALUE',
        closer: (event.Responses || []).map(({ ID , Addrs  })=>({
                id: ID,
                multiaddrs: Addrs.map((addr)=>new multiaddr.Multiaddr(addr)
                )
            })
        ),
        providers: (event.Responses || []).map(({ ID , Addrs  })=>({
                id: ID,
                multiaddrs: Addrs.map((addr)=>new multiaddr.Multiaddr(addr)
                )
            })
        )
    };
    if (event.Type === responseTypes.FinalPeer) {
        let peer = {
            id: event.ID,
            multiaddrs: []
        };
        if (event.Responses && event.Responses.length) peer = {
            id: event.Responses[0].ID,
            multiaddrs: event.Responses[0].Addrs.map((addr)=>new multiaddr.Multiaddr(addr)
            )
        };
        return {
            from: event.ID,
            name: 'FINAL_PEER',
            type: event.Type,
            peer
        };
    }
    if (event.Type === responseTypes.QueryError) return {
        from: event.ID,
        name: 'QUERY_ERROR',
        type: event.Type,
        error: new Error(event.Extra)
    };
    if (event.Type === responseTypes.Provider) return {
        from: event.ID,
        name: 'PROVIDER',
        type: event.Type,
        providers: event.Responses.map(({ ID , Addrs  })=>({
                id: ID,
                multiaddrs: Addrs.map((addr)=>new multiaddr.Multiaddr(addr)
                )
            })
        )
    };
    if (event.Type === responseTypes.Value) return {
        from: event.ID,
        name: 'VALUE',
        type: event.Type,
        value: fromString.fromString(event.Extra, 'base64pad')
    };
    if (event.Type === responseTypes.AddingPeer) {
        const peers = event.Responses.map(({ ID  })=>ID
        );
        if (!peers.length) throw new Error('No peer found');
        return {
            name: 'ADDING_PEER',
            type: event.Type,
            peer: peers[0]
        };
    }
    if (event.Type === responseTypes.DialingPeer) return {
        name: 'DIALING_PEER',
        type: event.Type,
        peer: event.ID
    };
    throw new Error('Unknown DHT event type');
};
exports.mapEvent = mapEvent;

},{"uint8arrays/from-string":"7qjkp","./response-types.js":"bfiZ1","multiaddr":"dOMJu"}],"bfiZ1":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
const SendingQuery = 0;
const PeerResponse = 1;
const FinalPeer = 2;
const QueryError = 3;
const Provider = 4;
const Value = 5;
const AddingPeer = 6;
const DialingPeer = 7;
exports.AddingPeer = AddingPeer;
exports.DialingPeer = DialingPeer;
exports.FinalPeer = FinalPeer;
exports.PeerResponse = PeerResponse;
exports.Provider = Provider;
exports.QueryError = QueryError;
exports.SendingQuery = SendingQuery;
exports.Value = Value;

},{}],"1Njgq":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var mapEvent = require('./map-event.js');
const createFindProvs = configure.configure((api)=>{
    async function* findProvs(cid, options = {
    }) {
        const res = await api.post('dht/findprovs', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: cid.toString(),
                ...options
            }),
            headers: options.headers
        });
        for await (const event of res.ndjson())yield mapEvent.mapEvent(event);
    }
    return findProvs;
});
exports.createFindProvs = createFindProvs;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","./map-event.js":"iBC1s"}],"erl4A":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var mapEvent = require('./map-event.js');
var toString = require('uint8arrays/to-string');
const createGet = configure.configure((api)=>{
    async function* get(key, options = {
    }) {
        const res = await api.post('dht/get', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: key instanceof Uint8Array ? toString.toString(key) : key.toString(),
                ...options
            }),
            headers: options.headers
        });
        for await (const event of res.ndjson())yield mapEvent.mapEvent(event);
    }
    return get;
});
exports.createGet = createGet;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","./map-event.js":"iBC1s","uint8arrays/to-string":"w8mvE"}],"foQXC":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var mapEvent = require('./map-event.js');
const createProvide = configure.configure((api)=>{
    async function* provide(cids, options = {
        recursive: false
    }) {
        const cidArr = Array.isArray(cids) ? cids : [
            cids
        ];
        const res = await api.post('dht/provide', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: cidArr.map((cid)=>cid.toString()
                ),
                ...options
            }),
            headers: options.headers
        });
        for await (const event of res.ndjson())yield mapEvent.mapEvent(event);
    }
    return provide;
});
exports.createProvide = createProvide;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","./map-event.js":"iBC1s"}],"lQHtb":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var multipartRequest = require('ipfs-core-utils/multipart-request');
var abortSignal = require('../lib/abort-signal.js');
var toString = require('uint8arrays/to-string');
var mapEvent = require('./map-event.js');
const createPut = configure.configure((api)=>{
    async function* put(key, value, options = {
    }) {
        const controller = new AbortController();
        const signal = abortSignal.abortSignal(controller.signal, options.signal);
        const res = await api.post('dht/put', {
            signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: key instanceof Uint8Array ? toString.toString(key) : key.toString(),
                ...options
            }),
            ...await multipartRequest.multipartRequest([
                value
            ], controller, options.headers)
        });
        for await (const event of res.ndjson())yield mapEvent.mapEvent(event);
    }
    return put;
});
exports.createPut = createPut;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","ipfs-core-utils/multipart-request":"g6OOu","../lib/abort-signal.js":"1Gv25","uint8arrays/to-string":"w8mvE","./map-event.js":"iBC1s"}],"1KtDa":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var mapEvent = require('./map-event.js');
const createQuery = configure.configure((api)=>{
    async function* query(peerId, options = {
    }) {
        const res = await api.post('dht/query', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: peerId.toString(),
                ...options
            }),
            headers: options.headers
        });
        for await (const event of res.ndjson())yield mapEvent.mapEvent(event);
    }
    return query;
});
exports.createQuery = createQuery;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","./map-event.js":"iBC1s"}],"hqnYU":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cmds = require('./cmds.js');
var net = require('./net.js');
var sys = require('./sys.js');
function createDiag(config) {
    return {
        cmds: cmds.createCmds(config),
        net: net.createNet(config),
        sys: sys.createSys(config)
    };
}
exports.createDiag = createDiag;

},{"./cmds.js":"jMsoB","./net.js":"eZOv0","./sys.js":"czVa8"}],"jMsoB":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createCmds = configure.configure((api)=>{
    async function cmds(options = {
    }) {
        const res = await api.post('diag/cmds', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        return res.json();
    }
    return cmds;
});
exports.createCmds = createCmds;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"eZOv0":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createNet = configure.configure((api)=>{
    async function net(options = {
    }) {
        const res = await api.post('diag/net', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        return res.json();
    }
    return net;
});
exports.createNet = createNet;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"czVa8":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createSys = configure.configure((api)=>{
    async function sys(options = {
    }) {
        const res = await api.post('diag/sys', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        return res.json();
    }
    return sys;
});
exports.createSys = createSys;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"lPTZB":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var chmod = require('./chmod.js');
var cp = require('./cp.js');
var flush = require('./flush.js');
var ls = require('./ls.js');
var mkdir = require('./mkdir.js');
var mv = require('./mv.js');
var read = require('./read.js');
var rm = require('./rm.js');
var stat = require('./stat.js');
var touch = require('./touch.js');
var write = require('./write.js');
function createFiles(config) {
    return {
        chmod: chmod.createChmod(config),
        cp: cp.createCp(config),
        flush: flush.createFlush(config),
        ls: ls.createLs(config),
        mkdir: mkdir.createMkdir(config),
        mv: mv.createMv(config),
        read: read.createRead(config),
        rm: rm.createRm(config),
        stat: stat.createStat(config),
        touch: touch.createTouch(config),
        write: write.createWrite(config)
    };
}
exports.createFiles = createFiles;

},{"./chmod.js":"7X7TL","./cp.js":"2iouQ","./flush.js":"fy6Ju","./ls.js":"6BObs","./mkdir.js":"5LZrc","./mv.js":"fXOp2","./read.js":"13kh1","./rm.js":"9Yis9","./stat.js":"hWYUs","./touch.js":"iQDC9","./write.js":"2PN2c"}],"7X7TL":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createChmod = configure.configure((api)=>{
    async function chmod(path, mode, options = {
    }) {
        const res = await api.post('files/chmod', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: path,
                mode,
                ...options
            }),
            headers: options.headers
        });
        await res.text();
    }
    return chmod;
});
exports.createChmod = createChmod;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"2iouQ":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createCp = configure.configure((api)=>{
    async function cp(sources, destination, options = {
    }) {
        const sourceArr = Array.isArray(sources) ? sources : [
            sources
        ];
        const res = await api.post('files/cp', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: sourceArr.concat(destination).map((src)=>cid.CID.asCID(src) ? `/ipfs/${src}` : src
                ),
                ...options
            }),
            headers: options.headers
        });
        await res.text();
    }
    return cp;
});
exports.createCp = createCp;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"fy6Ju":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createFlush = configure.configure((api)=>{
    async function flush(path, options = {
    }) {
        if (!path || typeof path !== 'string') throw new Error('ipfs.files.flush requires a path');
        const res = await api.post('files/flush', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: path,
                ...options
            }),
            headers: options.headers
        });
        const data = await res.json();
        return cid.CID.parse(data.Cid);
    }
    return flush;
});
exports.createFlush = createFlush;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"6BObs":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var objectToCamelWithMetadata = require('../lib/object-to-camel-with-metadata.js');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createLs = configure.configure((api)=>{
    async function* ls(path, options = {
    }) {
        if (!path) throw new Error('ipfs.files.ls requires a path');
        const res = await api.post('files/ls', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: cid.CID.asCID(path) ? `/ipfs/${path}` : path,
                long: true,
                ...options,
                stream: true
            }),
            headers: options.headers
        });
        for await (const result of res.ndjson()){
            if ('Entries' in result) for (const entry of result.Entries || [])yield toCoreInterface(objectToCamelWithMetadata.objectToCamelWithMetadata(entry));
            else yield toCoreInterface(objectToCamelWithMetadata.objectToCamelWithMetadata(result));
        }
    }
    return ls;
});
function toCoreInterface(entry) {
    if (entry.hash) entry.cid = cid.CID.parse(entry.hash);
    delete entry.hash;
    entry.type = entry.type === 1 ? 'directory' : 'file';
    return entry;
}
exports.createLs = createLs;

},{"multiformats/cid":"4uoBU","../lib/object-to-camel-with-metadata.js":"8Eokn","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"8Eokn":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var objectToCamel = require('./object-to-camel.js');
function objectToCamelWithMetadata(entry) {
    const file = objectToCamel.objectToCamel(entry);
    if (Object.prototype.hasOwnProperty.call(file, 'mode')) file.mode = parseInt(file.mode, 8);
    if (Object.prototype.hasOwnProperty.call(file, 'mtime')) {
        file.mtime = {
            secs: file.mtime,
            nsecs: file.mtimeNsecs || 0
        };
        delete file.mtimeNsecs;
    }
    return file;
}
exports.objectToCamelWithMetadata = objectToCamelWithMetadata;

},{"./object-to-camel.js":"9fkwr"}],"5LZrc":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createMkdir = configure.configure((api)=>{
    async function mkdir(path, options = {
    }) {
        const res = await api.post('files/mkdir', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: path,
                ...options
            }),
            headers: options.headers
        });
        await res.text();
    }
    return mkdir;
});
exports.createMkdir = createMkdir;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"fXOp2":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createMv = configure.configure((api)=>{
    async function mv(sources, destination, options = {
    }) {
        if (!Array.isArray(sources)) sources = [
            sources
        ];
        const res = await api.post('files/mv', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: sources.concat(destination),
                ...options
            }),
            headers: options.headers
        });
        await res.text();
    }
    return mv;
});
exports.createMv = createMv;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"13kh1":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var toIterable = require('stream-to-it/source.js');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var toIterable__default = /*#__PURE__*/ _interopDefaultLegacy(toIterable);
const createRead = configure.configure((api)=>{
    async function* read(path, options = {
    }) {
        const res = await api.post('files/read', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: path,
                count: options.length,
                ...options
            }),
            headers: options.headers
        });
        yield* toIterable__default["default"](res.body);
    }
    return read;
});
exports.createRead = createRead;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","stream-to-it/source.js":"h0rMn"}],"h0rMn":[function(require,module,exports) {
module.exports = (readable)=>{
    // Node.js stream
    if (readable[Symbol.asyncIterator]) return readable;
    // Browser ReadableStream
    if (readable.getReader) return (async function*() {
        const reader = readable.getReader();
        try {
            while(true){
                const { done , value  } = await reader.read();
                if (done) return;
                yield value;
            }
        } finally{
            reader.releaseLock();
        }
    })();
    throw new Error('unknown stream');
};

},{}],"9Yis9":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var HTTP = require('ipfs-utils/src/http.js');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var HTTP__default = /*#__PURE__*/ _interopDefaultLegacy(HTTP);
const createRm = configure.configure((api)=>{
    async function rm(path, options = {
    }) {
        const res = await api.post('files/rm', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: path,
                ...options
            }),
            headers: options.headers
        });
        const body = await res.text();
        if (body !== '') {
            const error = new HTTP__default["default"].HTTPError(res);
            error.message = body;
            throw error;
        }
    }
    return rm;
});
exports.createRm = createRm;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","ipfs-utils/src/http.js":"j20vN"}],"hWYUs":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var objectToCamelWithMetadata = require('../lib/object-to-camel-with-metadata.js');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createStat = configure.configure((api)=>{
    async function stat(path, options = {
    }) {
        const res = await api.post('files/stat', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: path,
                ...options
            }),
            headers: options.headers
        });
        const data = await res.json();
        data.WithLocality = data.WithLocality || false;
        return toCoreInterface(objectToCamelWithMetadata.objectToCamelWithMetadata(data));
    }
    return stat;
});
function toCoreInterface(entry) {
    entry.cid = cid.CID.parse(entry.hash);
    delete entry.hash;
    return entry;
}
exports.createStat = createStat;

},{"multiformats/cid":"4uoBU","../lib/object-to-camel-with-metadata.js":"8Eokn","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"iQDC9":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createTouch = configure.configure((api)=>{
    async function touch(path, options = {
    }) {
        const res = await api.post('files/touch', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: path,
                ...options
            }),
            headers: options.headers
        });
        await res.text();
    }
    return touch;
});
exports.createTouch = createTouch;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"2PN2c":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var modeToString = require('../lib/mode-to-string.js');
var parseMtime = require('../lib/parse-mtime.js');
var configure = require('../lib/configure.js');
var multipartRequest = require('ipfs-core-utils/multipart-request');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var abortSignal = require('../lib/abort-signal.js');
const createWrite = configure.configure((api)=>{
    async function write(path, input, options = {
    }) {
        const controller = new AbortController();
        const signal = abortSignal.abortSignal(controller.signal, options.signal);
        const res = await api.post('files/write', {
            signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: path,
                streamChannels: true,
                count: options.length,
                ...options
            }),
            ...await multipartRequest.multipartRequest([
                {
                    content: input,
                    path: 'arg',
                    mode: modeToString.modeToString(options.mode),
                    mtime: parseMtime.parseMtime(options.mtime)
                }
            ], controller, options.headers)
        });
        await res.text();
    }
    return write;
});
exports.createWrite = createWrite;

},{"../lib/mode-to-string.js":"eKohr","../lib/parse-mtime.js":"iSQ3z","../lib/configure.js":"7w4Kn","ipfs-core-utils/multipart-request":"g6OOu","../lib/to-url-search-params.js":"akREo","../lib/abort-signal.js":"1Gv25"}],"94Yfc":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var _export = require('./export.js');
var gen = require('./gen.js');
var _import = require('./import.js');
var info = require('./info.js');
var list = require('./list.js');
var rename = require('./rename.js');
var rm = require('./rm.js');
function createKey(config) {
    return {
        export: _export.createExport(config),
        gen: gen.createGen(config),
        import: _import.createImport(config),
        info: info.createInfo(config),
        list: list.createList(config),
        rename: rename.createRename(config),
        rm: rm.createRm(config)
    };
}
exports.createKey = createKey;

},{"./export.js":"lXA9p","./gen.js":"5XrMm","./import.js":"ebmld","./info.js":"4bi5h","./list.js":"cd56U","./rename.js":"eEp3O","./rm.js":"6WSLm"}],"lXA9p":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var errCode = require('err-code');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var errCode__default = /*#__PURE__*/ _interopDefaultLegacy(errCode);
const createExport = configure.configure((api)=>{
    const exportKey = async (name, password, options = {
    })=>{
        throw errCode__default["default"](new Error('Not implemented'), 'ERR_NOT_IMPLEMENTED');
    };
    return exportKey;
});
exports.createExport = createExport;

},{"../lib/configure.js":"7w4Kn","err-code":"dUrrM"}],"5XrMm":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var objectToCamel = require('../lib/object-to-camel.js');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createGen = configure.configure((api)=>{
    async function gen(name, options = {
        type: 'rsa',
        size: 2048
    }) {
        const res = await api.post('key/gen', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: name,
                ...options
            }),
            headers: options.headers
        });
        const data = await res.json();
        return objectToCamel.objectToCamel(data);
    }
    return gen;
});
exports.createGen = createGen;

},{"../lib/object-to-camel.js":"9fkwr","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"ebmld":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var objectToCamel = require('../lib/object-to-camel.js');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createImport = configure.configure((api)=>{
    async function importKey(name, pem, password, options = {
    }) {
        const res = await api.post('key/import', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: name,
                pem,
                password,
                ...options
            }),
            headers: options.headers
        });
        const data = await res.json();
        return objectToCamel.objectToCamel(data);
    }
    return importKey;
});
exports.createImport = createImport;

},{"../lib/object-to-camel.js":"9fkwr","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"4bi5h":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var errCode = require('err-code');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var errCode__default = /*#__PURE__*/ _interopDefaultLegacy(errCode);
const createInfo = configure.configure((api)=>{
    const info = async (name, options = {
    })=>{
        throw errCode__default["default"](new Error('Not implemented'), 'ERR_NOT_IMPLEMENTED');
    };
    return info;
});
exports.createInfo = createInfo;

},{"../lib/configure.js":"7w4Kn","err-code":"dUrrM"}],"cd56U":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var objectToCamel = require('../lib/object-to-camel.js');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createList = configure.configure((api)=>{
    async function list(options = {
    }) {
        const res = await api.post('key/list', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        const data = await res.json();
        return (data.Keys || []).map((k)=>objectToCamel.objectToCamel(k)
        );
    }
    return list;
});
exports.createList = createList;

},{"../lib/object-to-camel.js":"9fkwr","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"eEp3O":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var objectToCamel = require('../lib/object-to-camel.js');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createRename = configure.configure((api)=>{
    async function rename(oldName, newName, options = {
    }) {
        const res = await api.post('key/rename', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: [
                    oldName,
                    newName
                ],
                ...options
            }),
            headers: options.headers
        });
        return objectToCamel.objectToCamel(await res.json());
    }
    return rename;
});
exports.createRename = createRename;

},{"../lib/object-to-camel.js":"9fkwr","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"6WSLm":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var objectToCamel = require('../lib/object-to-camel.js');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createRm = configure.configure((api)=>{
    async function rm(name, options = {
    }) {
        const res = await api.post('key/rm', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: name,
                ...options
            }),
            headers: options.headers
        });
        const data = await res.json();
        return objectToCamel.objectToCamel(data.Keys[0]);
    }
    return rm;
});
exports.createRm = createRm;

},{"../lib/object-to-camel.js":"9fkwr","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"1yg4l":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var level = require('./level.js');
var ls = require('./ls.js');
var tail = require('./tail.js');
function createLog(config) {
    return {
        level: level.createLevel(config),
        ls: ls.createLs(config),
        tail: tail.createTail(config)
    };
}
exports.createLog = createLog;

},{"./level.js":"2601y","./ls.js":"hNRAr","./tail.js":"bym9y"}],"2601y":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var objectToCamel = require('../lib/object-to-camel.js');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createLevel = configure.configure((api)=>{
    async function level1(subsystem, level, options = {
    }) {
        const res = await api.post('log/level', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: [
                    subsystem,
                    level
                ],
                ...options
            }),
            headers: options.headers
        });
        return objectToCamel.objectToCamel(await res.json());
    }
    return level1;
});
exports.createLevel = createLevel;

},{"../lib/object-to-camel.js":"9fkwr","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"hNRAr":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createLs = configure.configure((api)=>{
    async function ls(options = {
    }) {
        const res = await api.post('log/ls', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        const data = await res.json();
        return data.Strings;
    }
    return ls;
});
exports.createLs = createLs;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"bym9y":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createTail = configure.configure((api)=>{
    async function* tail(options = {
    }) {
        const res = await api.post('log/tail', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        yield* res.ndjson();
    }
    return tail;
});
exports.createTail = createTail;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"7aWnC":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var publish = require('./publish.js');
var resolve = require('./resolve.js');
var index = require('./pubsub/index.js');
function createName(config) {
    return {
        publish: publish.createPublish(config),
        resolve: resolve.createResolve(config),
        pubsub: index.createPubsub(config)
    };
}
exports.createName = createName;

},{"./publish.js":"2FAro","./resolve.js":"c2cEX","./pubsub/index.js":"a83r8"}],"2FAro":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var objectToCamel = require('../lib/object-to-camel.js');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createPublish = configure.configure((api)=>{
    async function publish(path, options = {
    }) {
        const res = await api.post('name/publish', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: `${path}`,
                ...options
            }),
            headers: options.headers
        });
        return objectToCamel.objectToCamel(await res.json());
    }
    return publish;
});
exports.createPublish = createPublish;

},{"../lib/object-to-camel.js":"9fkwr","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"c2cEX":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createResolve = configure.configure((api)=>{
    async function* resolve(path, options = {
    }) {
        const res = await api.post('name/resolve', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: path,
                stream: true,
                ...options
            }),
            headers: options.headers
        });
        for await (const result of res.ndjson())yield result.Path;
    }
    return resolve;
});
exports.createResolve = createResolve;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"a83r8":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cancel = require('./cancel.js');
var state = require('./state.js');
var subs = require('./subs.js');
function createPubsub(config) {
    return {
        cancel: cancel.createCancel(config),
        state: state.createState(config),
        subs: subs.createSubs(config)
    };
}
exports.createPubsub = createPubsub;

},{"./cancel.js":"e0ubs","./state.js":"eLtJ5","./subs.js":"e6jW5"}],"e0ubs":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var objectToCamel = require('../../lib/object-to-camel.js');
var configure = require('../../lib/configure.js');
var toUrlSearchParams = require('../../lib/to-url-search-params.js');
const createCancel = configure.configure((api)=>{
    async function cancel(name, options = {
    }) {
        const res = await api.post('name/pubsub/cancel', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: name,
                ...options
            }),
            headers: options.headers
        });
        return objectToCamel.objectToCamel(await res.json());
    }
    return cancel;
});
exports.createCancel = createCancel;

},{"../../lib/object-to-camel.js":"9fkwr","../../lib/configure.js":"7w4Kn","../../lib/to-url-search-params.js":"akREo"}],"eLtJ5":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var objectToCamel = require('../../lib/object-to-camel.js');
var configure = require('../../lib/configure.js');
var toUrlSearchParams = require('../../lib/to-url-search-params.js');
const createState = configure.configure((api)=>{
    async function state(options = {
    }) {
        const res = await api.post('name/pubsub/state', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        return objectToCamel.objectToCamel(await res.json());
    }
    return state;
});
exports.createState = createState;

},{"../../lib/object-to-camel.js":"9fkwr","../../lib/configure.js":"7w4Kn","../../lib/to-url-search-params.js":"akREo"}],"e6jW5":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../../lib/configure.js');
var toUrlSearchParams = require('../../lib/to-url-search-params.js');
const createSubs = configure.configure((api)=>{
    async function subs(options = {
    }) {
        const res = await api.post('name/pubsub/subs', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        const data = await res.json();
        return data.Strings || [];
    }
    return subs;
});
exports.createSubs = createSubs;

},{"../../lib/configure.js":"7w4Kn","../../lib/to-url-search-params.js":"akREo"}],"hfKAb":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var data = require('./data.js');
var get = require('./get.js');
var links = require('./links.js');
var _new = require('./new.js');
var put = require('./put.js');
var stat = require('./stat.js');
var index = require('./patch/index.js');
function createObject(codecs, config) {
    return {
        data: data.createData(config),
        get: get.createGet(config),
        links: links.createLinks(config),
        new: _new.createNew(config),
        put: put.createPut(codecs, config),
        stat: stat.createStat(config),
        patch: index.createPatch(config)
    };
}
exports.createObject = createObject;

},{"./data.js":"c6uLg","./get.js":"8kyaK","./links.js":"5qtYk","./new.js":"l3nru","./put.js":"aWqbK","./stat.js":"4JGlp","./patch/index.js":"lK2JI"}],"c6uLg":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createData = configure.configure((api)=>{
    async function data1(cid$1, options = {
    }) {
        const res = await api.post('object/data', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: `${cid$1 instanceof Uint8Array ? cid.CID.decode(cid$1) : cid$1}`,
                ...options
            }),
            headers: options.headers
        });
        const data = await res.arrayBuffer();
        return new Uint8Array(data, 0, data.byteLength);
    }
    return data1;
});
exports.createData = createData;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"8kyaK":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var fromString = require('uint8arrays/from-string');
const createGet = configure.configure((api)=>{
    async function get(cid$1, options = {
    }) {
        const res = await api.post('object/get', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: `${cid$1 instanceof Uint8Array ? cid.CID.decode(cid$1) : cid$1}`,
                dataEncoding: 'base64',
                ...options
            }),
            headers: options.headers
        });
        const data = await res.json();
        return {
            Data: fromString.fromString(data.Data, 'base64pad'),
            Links: (data.Links || []).map((link)=>({
                    Name: link.Name,
                    Hash: cid.CID.parse(link.Hash),
                    Tsize: link.Size
                })
            )
        };
    }
    return get;
});
exports.createGet = createGet;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","uint8arrays/from-string":"7qjkp"}],"5qtYk":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createLinks = configure.configure((api)=>{
    async function links(cid$1, options = {
    }) {
        const res = await api.post('object/links', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: `${cid$1 instanceof Uint8Array ? cid.CID.decode(cid$1) : cid$1}`,
                ...options
            }),
            headers: options.headers
        });
        const data = await res.json();
        return (data.Links || []).map((l)=>({
                Name: l.Name,
                Tsize: l.Size,
                Hash: cid.CID.parse(l.Hash)
            })
        );
    }
    return links;
});
exports.createLinks = createLinks;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"l3nru":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createNew = configure.configure((api)=>{
    async function newObject(options = {
    }) {
        const res = await api.post('object/new', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: options.template,
                ...options
            }),
            headers: options.headers
        });
        const { Hash  } = await res.json();
        return cid.CID.parse(Hash);
    }
    return newObject;
});
exports.createNew = createNew;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"aWqbK":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var put = require('../dag/put.js');
const createPut = (codecs, options1)=>{
    const fn = configure.configure((api)=>{
        const dagPut = put.createPut(codecs, options1);
        async function put$1(obj, options = {
        }) {
            return dagPut(obj, {
                ...options,
                storeCodec: 'dag-pb',
                hashAlg: 'sha2-256',
                version: 1
            });
        }
        return put$1;
    });
    return fn(options1);
};
exports.createPut = createPut;

},{"../lib/configure.js":"7w4Kn","../dag/put.js":"if8Xx"}],"4JGlp":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createStat = configure.configure((api)=>{
    async function stat(cid$1, options = {
    }) {
        const res = await api.post('object/stat', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: `${cid$1}`,
                ...options
            }),
            headers: options.headers
        });
        const output = await res.json();
        return {
            ...output,
            Hash: cid.CID.parse(output.Hash)
        };
    }
    return stat;
});
exports.createStat = createStat;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"lK2JI":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var addLink = require('./add-link.js');
var appendData = require('./append-data.js');
var rmLink = require('./rm-link.js');
var setData = require('./set-data.js');
function createPatch(config) {
    return {
        addLink: addLink.createAddLink(config),
        appendData: appendData.createAppendData(config),
        rmLink: rmLink.createRmLink(config),
        setData: setData.createSetData(config)
    };
}
exports.createPatch = createPatch;

},{"./add-link.js":"kqgWP","./append-data.js":"iTkpq","./rm-link.js":"fBp8r","./set-data.js":"cczzi"}],"kqgWP":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../../lib/configure.js');
var toUrlSearchParams = require('../../lib/to-url-search-params.js');
const createAddLink = configure.configure((api)=>{
    async function addLink(cid$1, dLink, options = {
    }) {
        const res = await api.post('object/patch/add-link', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: [
                    `${cid$1}`,
                    dLink.Name || dLink.name || '',
                    (dLink.Hash || dLink.cid || '').toString() || null
                ],
                ...options
            }),
            headers: options.headers
        });
        const { Hash  } = await res.json();
        return cid.CID.parse(Hash);
    }
    return addLink;
});
exports.createAddLink = createAddLink;

},{"multiformats/cid":"4uoBU","../../lib/configure.js":"7w4Kn","../../lib/to-url-search-params.js":"akREo"}],"iTkpq":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var multipartRequest = require('ipfs-core-utils/multipart-request');
var configure = require('../../lib/configure.js');
var toUrlSearchParams = require('../../lib/to-url-search-params.js');
var abortSignal = require('../../lib/abort-signal.js');
const createAppendData = configure.configure((api)=>{
    async function appendData(cid$1, data, options = {
    }) {
        const controller = new AbortController();
        const signal = abortSignal.abortSignal(controller.signal, options.signal);
        const res = await api.post('object/patch/append-data', {
            signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: `${cid$1}`,
                ...options
            }),
            ...await multipartRequest.multipartRequest([
                data
            ], controller, options.headers)
        });
        const { Hash  } = await res.json();
        return cid.CID.parse(Hash);
    }
    return appendData;
});
exports.createAppendData = createAppendData;

},{"multiformats/cid":"4uoBU","ipfs-core-utils/multipart-request":"g6OOu","../../lib/configure.js":"7w4Kn","../../lib/to-url-search-params.js":"akREo","../../lib/abort-signal.js":"1Gv25"}],"fBp8r":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../../lib/configure.js');
var toUrlSearchParams = require('../../lib/to-url-search-params.js');
const createRmLink = configure.configure((api)=>{
    async function rmLink(cid$1, dLink, options = {
    }) {
        const res = await api.post('object/patch/rm-link', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: [
                    `${cid$1}`,
                    dLink.Name || dLink.name || null
                ],
                ...options
            }),
            headers: options.headers
        });
        const { Hash  } = await res.json();
        return cid.CID.parse(Hash);
    }
    return rmLink;
});
exports.createRmLink = createRmLink;

},{"multiformats/cid":"4uoBU","../../lib/configure.js":"7w4Kn","../../lib/to-url-search-params.js":"akREo"}],"cczzi":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var multipartRequest = require('ipfs-core-utils/multipart-request');
var configure = require('../../lib/configure.js');
var toUrlSearchParams = require('../../lib/to-url-search-params.js');
var abortSignal = require('../../lib/abort-signal.js');
const createSetData = configure.configure((api)=>{
    async function setData(cid$1, data, options = {
    }) {
        const controller = new AbortController();
        const signal = abortSignal.abortSignal(controller.signal, options.signal);
        const res = await api.post('object/patch/set-data', {
            signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: [
                    `${cid$1}`
                ],
                ...options
            }),
            ...await multipartRequest.multipartRequest([
                data
            ], controller, options.headers)
        });
        const { Hash  } = await res.json();
        return cid.CID.parse(Hash);
    }
    return setData;
});
exports.createSetData = createSetData;

},{"multiformats/cid":"4uoBU","ipfs-core-utils/multipart-request":"g6OOu","../../lib/configure.js":"7w4Kn","../../lib/to-url-search-params.js":"akREo","../../lib/abort-signal.js":"1Gv25"}],"ieDN2":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var addAll = require('./add-all.js');
var add = require('./add.js');
var ls = require('./ls.js');
var rmAll = require('./rm-all.js');
var rm = require('./rm.js');
var index = require('./remote/index.js');
function createPin(config) {
    return {
        addAll: addAll.createAddAll(config),
        add: add.createAdd(config),
        ls: ls.createLs(config),
        rmAll: rmAll.createRmAll(config),
        rm: rm.createRm(config),
        remote: index.createRemote(config)
    };
}
exports.createPin = createPin;

},{"./add-all.js":"4Ktd1","./add.js":"1K1M4","./ls.js":"g7Qgz","./rm-all.js":"grtM0","./rm.js":"clvbj","./remote/index.js":"bpSi2"}],"4Ktd1":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var normaliseInput = require('ipfs-core-utils/pins/normalise-input');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createAddAll = configure.configure((api)=>{
    async function* addAll(source, options = {
    }) {
        for await (const { path , recursive , metadata  } of normaliseInput.normaliseInput(source)){
            const res = await api.post('pin/add', {
                signal: options.signal,
                searchParams: toUrlSearchParams.toUrlSearchParams({
                    ...options,
                    arg: path,
                    recursive,
                    metadata: metadata ? JSON.stringify(metadata) : undefined,
                    stream: true
                }),
                headers: options.headers
            });
            for await (const pin of res.ndjson()){
                if (pin.Pins) {
                    for (const cid$1 of pin.Pins)yield cid.CID.parse(cid$1);
                    continue;
                }
                yield cid.CID.parse(pin);
            }
        }
    }
    return addAll;
});
exports.createAddAll = createAddAll;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","ipfs-core-utils/pins/normalise-input":"ccoZS","../lib/to-url-search-params.js":"akREo"}],"ccoZS":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var errCode = require('err-code');
var cid = require('multiformats/cid');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var errCode__default = /*#__PURE__*/ _interopDefaultLegacy(errCode);
async function* normaliseInput(input) {
    if (input === null || input === undefined) throw errCode__default["default"](new Error(`Unexpected input: ${input}`), 'ERR_UNEXPECTED_INPUT');
    const cid$1 = cid.CID.asCID(input);
    if (cid$1) {
        yield toPin({
            cid: cid$1
        });
        return;
    }
    if (input instanceof String || typeof input === 'string') {
        yield toPin({
            path: input
        });
        return;
    }
    if (input.cid != null || input.path != null) return yield toPin(input);
    if (Symbol.iterator in input) {
        const iterator = input[Symbol.iterator]();
        const first = iterator.next();
        if (first.done) return iterator;
        if (cid.CID.asCID(first.value) || first.value instanceof String || typeof first.value === 'string') {
            yield toPin({
                cid: first.value
            });
            for (const cid1 of iterator)yield toPin({
                cid: cid1
            });
            return;
        }
        if (first.value.cid != null || first.value.path != null) {
            yield toPin(first.value);
            for (const obj of iterator)yield toPin(obj);
            return;
        }
        throw errCode__default["default"](new Error('Unexpected input: ' + typeof input), 'ERR_UNEXPECTED_INPUT');
    }
    if (Symbol.asyncIterator in input) {
        const iterator = input[Symbol.asyncIterator]();
        const first = await iterator.next();
        if (first.done) return iterator;
        if (cid.CID.asCID(first.value) || first.value instanceof String || typeof first.value === 'string') {
            yield toPin({
                cid: first.value
            });
            for await (const cid2 of iterator)yield toPin({
                cid: cid2
            });
            return;
        }
        if (first.value.cid != null || first.value.path != null) {
            yield toPin(first.value);
            for await (const obj of iterator)yield toPin(obj);
            return;
        }
        throw errCode__default["default"](new Error('Unexpected input: ' + typeof input), 'ERR_UNEXPECTED_INPUT');
    }
    throw errCode__default["default"](new Error('Unexpected input: ' + typeof input), 'ERR_UNEXPECTED_INPUT');
}
function toPin(input) {
    const path = input.cid || `${input.path}`;
    if (!path) throw errCode__default["default"](new Error('Unexpected input: Please path either a CID or an IPFS path'), 'ERR_UNEXPECTED_INPUT');
    const pin = {
        path,
        recursive: input.recursive !== false
    };
    if (input.metadata != null) pin.metadata = input.metadata;
    return pin;
}
exports.normaliseInput = normaliseInput;

},{"err-code":"dUrrM","multiformats/cid":"4uoBU"}],"1K1M4":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var addAll = require('./add-all.js');
var last = require('it-last');
var configure = require('../lib/configure.js');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var last__default = /*#__PURE__*/ _interopDefaultLegacy(last);
function createAdd(config) {
    const all = addAll.createAddAll(config);
    return configure.configure(()=>{
        async function add(path, options = {
        }) {
            return last__default["default"](all([
                {
                    path,
                    ...options
                }
            ], options));
        }
        return add;
    })(config);
}
exports.createAdd = createAdd;

},{"./add-all.js":"4Ktd1","it-last":"iWUUH","../lib/configure.js":"7w4Kn"}],"g7Qgz":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
function toPin(type, cid$1, metadata) {
    const pin = {
        type,
        cid: cid.CID.parse(cid$1)
    };
    if (metadata) pin.metadata = metadata;
    return pin;
}
const createLs = configure.configure((api)=>{
    async function* ls(options = {
    }) {
        let paths = [];
        if (options.paths) paths = Array.isArray(options.paths) ? options.paths : [
            options.paths
        ];
        const res = await api.post('pin/ls', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                ...options,
                arg: paths.map((path)=>`${path}`
                ),
                stream: true
            }),
            headers: options.headers
        });
        for await (const pin of res.ndjson()){
            if (pin.Keys) {
                for (const cid1 of Object.keys(pin.Keys))yield toPin(pin.Keys[cid1].Type, cid1, pin.Keys[cid1].Metadata);
                return;
            }
            yield toPin(pin.Type, pin.Cid, pin.Metadata);
        }
    }
    return ls;
});
exports.createLs = createLs;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"grtM0":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var normaliseInput = require('ipfs-core-utils/pins/normalise-input');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createRmAll = configure.configure((api)=>{
    async function* rmAll(source, options = {
    }) {
        for await (const { path , recursive  } of normaliseInput.normaliseInput(source)){
            const searchParams = new URLSearchParams(options.searchParams);
            searchParams.append('arg', `${path}`);
            if (recursive != null) searchParams.set('recursive', String(recursive));
            const res = await api.post('pin/rm', {
                signal: options.signal,
                headers: options.headers,
                searchParams: toUrlSearchParams.toUrlSearchParams({
                    ...options,
                    arg: `${path}`,
                    recursive
                })
            });
            for await (const pin of res.ndjson()){
                if (pin.Pins) {
                    yield* pin.Pins.map((cid$1)=>cid.CID.parse(cid$1)
                    );
                    continue;
                }
                yield cid.CID.parse(pin);
            }
        }
    }
    return rmAll;
});
exports.createRmAll = createRmAll;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","ipfs-core-utils/pins/normalise-input":"ccoZS","../lib/to-url-search-params.js":"akREo"}],"clvbj":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var rmAll = require('./rm-all.js');
var last = require('it-last');
var configure = require('../lib/configure.js');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var last__default = /*#__PURE__*/ _interopDefaultLegacy(last);
const createRm = (config)=>{
    const all = rmAll.createRmAll(config);
    return configure.configure(()=>{
        async function rm(path, options = {
        }) {
            return last__default["default"](all([
                {
                    path,
                    ...options
                }
            ], options));
        }
        return rm;
    })(config);
};
exports.createRm = createRm;

},{"./rm-all.js":"grtM0","it-last":"iWUUH","../lib/configure.js":"7w4Kn"}],"bpSi2":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var core = require('../../lib/core.js');
var add = require('./add.js');
var ls = require('./ls.js');
var rm = require('./rm.js');
var rmAll = require('./rm-all.js');
var index = require('./service/index.js');
function createRemote(config) {
    const client = new core.Client(config);
    return {
        add: add.createAdd(client),
        ls: ls.createLs(client),
        rm: rm.createRm(client),
        rmAll: rmAll.createRmAll(client),
        service: index.createService(config)
    };
}
exports.createRemote = createRemote;

},{"../../lib/core.js":"j0PUE","./add.js":"llVjp","./ls.js":"AWKXW","./rm.js":"7kiSt","./rm-all.js":"9rN4B","./service/index.js":"iEthz"}],"llVjp":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var utils = require('./utils.js');
function createAdd(client) {
    async function add(cid, { timeout , signal , headers , ...query }) {
        const response = await client.post('pin/remote/add', {
            timeout,
            signal,
            headers,
            searchParams: utils.encodeAddParams({
                cid,
                ...query
            })
        });
        return utils.decodePin(await response.json());
    }
    return add;
}
exports.createAdd = createAdd;

},{"./utils.js":"jrdYz"}],"jrdYz":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var toUrlSearchParams = require('../../lib/to-url-search-params.js');
const decodePin = ({ Name: name , Status: status , Cid: cid$1  })=>{
    return {
        cid: cid.CID.parse(cid$1),
        name,
        status
    };
};
const encodeService = (service)=>{
    if (typeof service === 'string' && service !== '') return service;
    else throw new TypeError('service name must be passed');
};
const encodeCID = (cid$1)=>{
    if (cid.CID.asCID(cid$1)) return cid$1.toString();
    else throw new TypeError(`CID instance expected instead of ${typeof cid$1}`);
};
const encodeQuery = ({ service , cid: cid1 , name , status , all  })=>{
    const query = toUrlSearchParams.toUrlSearchParams({
        service: encodeService(service),
        name,
        force: all ? true : undefined
    });
    if (cid1) for (const value of cid1)query.append('cid', encodeCID(value));
    if (status) for (const value1 of status)query.append('status', value1);
    return query;
};
const encodeAddParams = ({ cid: cid2 , service , background , name , origins  })=>{
    const params = toUrlSearchParams.toUrlSearchParams({
        arg: encodeCID(cid2),
        service: encodeService(service),
        name,
        background: background ? true : undefined
    });
    if (origins) for (const origin of origins)params.append('origin', origin.toString());
    return params;
};
exports.decodePin = decodePin;
exports.encodeAddParams = encodeAddParams;
exports.encodeCID = encodeCID;
exports.encodeQuery = encodeQuery;
exports.encodeService = encodeService;

},{"multiformats/cid":"4uoBU","../../lib/to-url-search-params.js":"akREo"}],"AWKXW":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var utils = require('./utils.js');
function createLs(client) {
    async function* ls({ timeout , signal , headers , ...query }) {
        const response = await client.post('pin/remote/ls', {
            timeout,
            signal,
            headers,
            searchParams: utils.encodeQuery(query)
        });
        for await (const pin of response.ndjson())yield utils.decodePin(pin);
    }
    return ls;
}
exports.createLs = createLs;

},{"./utils.js":"jrdYz"}],"7kiSt":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var utils = require('./utils.js');
function createRm(client) {
    async function rm({ timeout , signal , headers , ...query }) {
        await client.post('pin/remote/rm', {
            timeout,
            signal,
            headers,
            searchParams: utils.encodeQuery({
                ...query,
                all: false
            })
        });
    }
    return rm;
}
exports.createRm = createRm;

},{"./utils.js":"jrdYz"}],"9rN4B":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var utils = require('./utils.js');
function createRmAll(client) {
    async function rmAll({ timeout , signal , headers , ...query }) {
        await client.post('pin/remote/rm', {
            timeout,
            signal,
            headers,
            searchParams: utils.encodeQuery({
                ...query,
                all: true
            })
        });
    }
    return rmAll;
}
exports.createRmAll = createRmAll;

},{"./utils.js":"jrdYz"}],"iEthz":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var core = require('../../../lib/core.js');
var add = require('./add.js');
var ls = require('./ls.js');
var rm = require('./rm.js');
function createService(config) {
    const client = new core.Client(config);
    return {
        add: add.createAdd(client),
        ls: ls.createLs(client),
        rm: rm.createRm(client)
    };
}
exports.createService = createService;

},{"../../../lib/core.js":"j0PUE","./add.js":"f4E80","./ls.js":"iQlnf","./rm.js":"1TAEF"}],"f4E80":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var toUrlSearchParams = require('../../../lib/to-url-search-params.js');
var utils = require('./utils.js');
function createAdd(client) {
    async function add(name, options) {
        const { endpoint , key , headers , timeout , signal  } = options;
        await client.post('pin/remote/service/add', {
            timeout,
            signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: [
                    name,
                    utils.encodeEndpoint(endpoint),
                    key
                ]
            }),
            headers
        });
    }
    return add;
}
exports.createAdd = createAdd;

},{"../../../lib/to-url-search-params.js":"akREo","./utils.js":"eDnjs"}],"eDnjs":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
function encodeEndpoint(url) {
    const href = String(url);
    if (href === 'undefined') throw Error('endpoint is required');
    return href[href.length - 1] === '/' ? href.slice(0, -1) : href;
}
function decodeRemoteService(json) {
    return {
        service: json.Service,
        endpoint: new URL(json.ApiEndpoint),
        ...json.Stat && {
            stat: decodeStat(json.Stat)
        }
    };
}
function decodeStat(json) {
    switch(json.Status){
        case 'valid':
            {
                const { Pinning , Pinned , Queued , Failed  } = json.PinCount;
                return {
                    status: 'valid',
                    pinCount: {
                        queued: Queued,
                        pinning: Pinning,
                        pinned: Pinned,
                        failed: Failed
                    }
                };
            }
        case 'invalid':
            return {
                status: 'invalid'
            };
        default:
            return {
                status: json.Status
            };
    }
}
exports.decodeRemoteService = decodeRemoteService;
exports.decodeStat = decodeStat;
exports.encodeEndpoint = encodeEndpoint;

},{}],"iQlnf":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var toUrlSearchParams = require('../../../lib/to-url-search-params.js');
var utils = require('./utils.js');
function createLs(client) {
    async function ls(options = {
    }) {
        const { stat , headers , timeout , signal  } = options;
        const response = await client.post('pin/remote/service/ls', {
            timeout,
            signal,
            headers,
            searchParams: stat === true ? toUrlSearchParams.toUrlSearchParams({
                stat
            }) : undefined
        });
        const { RemoteServices  } = await response.json();
        return RemoteServices.map(utils.decodeRemoteService);
    }
    return ls;
}
exports.createLs = createLs;

},{"../../../lib/to-url-search-params.js":"akREo","./utils.js":"eDnjs"}],"1TAEF":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var toUrlSearchParams = require('../../../lib/to-url-search-params.js');
function createRm(client) {
    async function rm(name, options = {
    }) {
        await client.post('pin/remote/service/rm', {
            signal: options.signal,
            headers: options.headers,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: name
            })
        });
    }
    return rm;
}
exports.createRm = createRm;

},{"../../../lib/to-url-search-params.js":"akREo"}],"fVBoe":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var ls = require('./ls.js');
var peers = require('./peers.js');
var publish = require('./publish.js');
var subscribe = require('./subscribe.js');
var unsubscribe = require('./unsubscribe.js');
var subscriptionTracker = require('./subscription-tracker.js');
function createPubsub(config) {
    const subscriptionTracker$1 = new subscriptionTracker.SubscriptionTracker();
    return {
        ls: ls.createLs(config),
        peers: peers.createPeers(config),
        publish: publish.createPublish(config),
        subscribe: subscribe.createSubscribe(config, subscriptionTracker$1),
        unsubscribe: unsubscribe.createUnsubscribe(config, subscriptionTracker$1)
    };
}
exports.createPubsub = createPubsub;

},{"./ls.js":"gMYT2","./peers.js":"fNPr3","./publish.js":"7frwC","./subscribe.js":"hg15K","./unsubscribe.js":"iGtHl","./subscription-tracker.js":"f4huF"}],"gMYT2":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var httpRpcWireFormat = require('../lib/http-rpc-wire-format.js');
const createLs = configure.configure((api)=>{
    async function ls(options = {
    }) {
        const { Strings  } = await (await api.post('pubsub/ls', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        })).json();
        return httpRpcWireFormat.rpcArrayToTextArray(Strings) || [];
    }
    return ls;
});
exports.createLs = createLs;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","../lib/http-rpc-wire-format.js":"98gb3"}],"98gb3":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var fromString = require('uint8arrays/from-string');
var toString = require('uint8arrays/to-string');
var base64 = require('multiformats/bases/base64');
const rpcArrayToTextArray = (strings)=>{
    if (Array.isArray(strings)) return strings.map(rpcToText);
    return strings;
};
const rpcToText = (mb)=>toString.toString(rpcToBytes(mb))
;
const rpcToBytes = (mb)=>base64.base64url.decode(mb)
;
const textToUrlSafeRpc = (text)=>base64.base64url.encode(fromString.fromString(text))
;
exports.rpcArrayToTextArray = rpcArrayToTextArray;
exports.rpcToBytes = rpcToBytes;
exports.rpcToText = rpcToText;
exports.textToUrlSafeRpc = textToUrlSafeRpc;

},{"uint8arrays/from-string":"7qjkp","uint8arrays/to-string":"w8mvE","multiformats/bases/base64":"3gCnk"}],"fNPr3":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var httpRpcWireFormat = require('../lib/http-rpc-wire-format.js');
const createPeers = configure.configure((api)=>{
    async function peers(topic, options = {
    }) {
        const res = await api.post('pubsub/peers', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: httpRpcWireFormat.textToUrlSafeRpc(topic),
                ...options
            }),
            headers: options.headers
        });
        const { Strings  } = await res.json();
        return Strings || [];
    }
    return peers;
});
exports.createPeers = createPeers;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","../lib/http-rpc-wire-format.js":"98gb3"}],"7frwC":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var multipartRequest = require('ipfs-core-utils/multipart-request');
var abortSignal = require('../lib/abort-signal.js');
var httpRpcWireFormat = require('../lib/http-rpc-wire-format.js');
const createPublish = configure.configure((api)=>{
    async function publish(topic, data, options = {
    }) {
        const searchParams = toUrlSearchParams.toUrlSearchParams({
            arg: httpRpcWireFormat.textToUrlSafeRpc(topic),
            ...options
        });
        const controller = new AbortController();
        const signal = abortSignal.abortSignal(controller.signal, options.signal);
        const res = await api.post('pubsub/pub', {
            signal,
            searchParams,
            ...await multipartRequest.multipartRequest([
                data
            ], controller, options.headers)
        });
        await res.text();
    }
    return publish;
});
exports.createPublish = createPublish;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","ipfs-core-utils/multipart-request":"g6OOu","../lib/abort-signal.js":"1Gv25","../lib/http-rpc-wire-format.js":"98gb3"}],"hg15K":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var debug = require('debug');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var httpRpcWireFormat = require('../lib/http-rpc-wire-format.js');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var debug__default = /*#__PURE__*/ _interopDefaultLegacy(debug);
const log = debug__default["default"]('ipfs-http-client:pubsub:subscribe');
const createSubscribe = (options1, subsTracker)=>{
    return configure.configure((api)=>{
        async function subscribe(topic, handler, options = {
        }) {
            options.signal = subsTracker.subscribe(topic, handler, options.signal);
            let done;
            let fail;
            const result = new Promise((resolve, reject)=>{
                done = resolve;
                fail = reject;
            });
            const ffWorkaround = setTimeout(()=>done()
            , 1000);
            api.post('pubsub/sub', {
                signal: options.signal,
                searchParams: toUrlSearchParams.toUrlSearchParams({
                    arg: httpRpcWireFormat.textToUrlSafeRpc(topic),
                    ...options
                }),
                headers: options.headers
            }).catch((err)=>{
                subsTracker.unsubscribe(topic, handler);
                fail(err);
            }).then((response)=>{
                clearTimeout(ffWorkaround);
                if (!response) return;
                readMessages(response, {
                    onMessage: handler,
                    onEnd: ()=>subsTracker.unsubscribe(topic, handler)
                    ,
                    onError: options.onError
                });
                done();
            });
            return result;
        }
        return subscribe;
    })(options1);
};
async function readMessages(response, { onMessage , onEnd , onError  }) {
    onError = onError || log;
    try {
        for await (const msg of response.ndjson())try {
            if (!msg.from) continue;
            onMessage({
                from: msg.from,
                data: httpRpcWireFormat.rpcToBytes(msg.data),
                seqno: httpRpcWireFormat.rpcToBytes(msg.seqno),
                topicIDs: httpRpcWireFormat.rpcArrayToTextArray(msg.topicIDs)
            });
        } catch (err) {
            err.message = `Failed to parse pubsub message: ${err.message}`;
            onError(err, false, msg);
        }
    } catch (err) {
        if (!isAbortError(err)) onError(err, true);
    } finally{
        onEnd();
    }
}
const isAbortError = (error)=>{
    switch(error.type){
        case 'aborted':
            return true;
        case 'abort':
            return true;
        default:
            return error.name === 'AbortError';
    }
};
exports.createSubscribe = createSubscribe;

},{"debug":"l0oUb","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","../lib/http-rpc-wire-format.js":"98gb3"}],"iGtHl":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
const createUnsubscribe = (options, subsTracker)=>{
    async function unsubscribe(topic, handler) {
        subsTracker.unsubscribe(topic, handler);
    }
    return unsubscribe;
};
exports.createUnsubscribe = createUnsubscribe;

},{}],"f4huF":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
class SubscriptionTracker {
    constructor(){
        this._subs = new Map();
    }
    subscribe(topic, handler, signal) {
        const topicSubs = this._subs.get(topic) || [];
        if (topicSubs.find((s)=>s.handler === handler
        )) throw new Error(`Already subscribed to ${topic} with this handler`);
        const controller = new AbortController();
        this._subs.set(topic, [
            {
                handler,
                controller
            }
        ].concat(topicSubs));
        if (signal) signal.addEventListener('abort', ()=>this.unsubscribe(topic, handler)
        );
        return controller.signal;
    }
    unsubscribe(topic, handler) {
        const subs = this._subs.get(topic) || [];
        let unsubs;
        if (handler) {
            this._subs.set(topic, subs.filter((s)=>s.handler !== handler
            ));
            unsubs = subs.filter((s)=>s.handler === handler
            );
        } else {
            this._subs.set(topic, []);
            unsubs = subs;
        }
        if (!(this._subs.get(topic) || []).length) this._subs.delete(topic);
        unsubs.forEach((s)=>s.controller.abort()
        );
    }
}
exports.SubscriptionTracker = SubscriptionTracker;

},{}],"oA3c4":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var objectToCamel = require('../lib/object-to-camel.js');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
var local = require('./local.js');
const createRefs = configure.configure((api, opts)=>{
    const refs = async function*(args, options = {
    }) {
        const argsArr = Array.isArray(args) ? args : [
            args
        ];
        const res = await api.post('refs', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: argsArr.map((arg)=>`${arg instanceof Uint8Array ? cid.CID.decode(arg) : arg}`
                ),
                ...options
            }),
            headers: options.headers,
            transform: objectToCamel.objectToCamel
        });
        yield* res.ndjson();
    };
    return Object.assign(refs, {
        local: local.createLocal(opts)
    });
});
exports.createRefs = createRefs;

},{"multiformats/cid":"4uoBU","../lib/object-to-camel.js":"9fkwr","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo","./local.js":"4CCRL"}],"4CCRL":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var objectToCamel = require('../lib/object-to-camel.js');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createLocal = configure.configure((api)=>{
    async function* refsLocal(options = {
    }) {
        const res = await api.post('refs/local', {
            signal: options.signal,
            transform: objectToCamel.objectToCamel,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        yield* res.ndjson();
    }
    return refsLocal;
});
exports.createLocal = createLocal;

},{"../lib/object-to-camel.js":"9fkwr","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"Kg1Be":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var gc = require('./gc.js');
var stat = require('./stat.js');
var version = require('./version.js');
function createRepo(config) {
    return {
        gc: gc.createGc(config),
        stat: stat.createStat(config),
        version: version.createVersion(config)
    };
}
exports.createRepo = createRepo;

},{"./gc.js":"jqT2t","./stat.js":"aj18P","./version.js":"jy3Wr"}],"jqT2t":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createGc = configure.configure((api)=>{
    async function* gc(options = {
    }) {
        const res1 = await api.post('repo/gc', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers,
            transform: (res)=>{
                return {
                    err: res.Error ? new Error(res.Error) : null,
                    cid: (res.Key || {
                    })['/'] ? cid.CID.parse(res.Key['/']) : null
                };
            }
        });
        yield* res1.ndjson();
    }
    return gc;
});
exports.createGc = createGc;

},{"multiformats/cid":"4uoBU","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"aj18P":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createStat = configure.configure((api)=>{
    async function stat(options = {
    }) {
        const res = await api.post('repo/stat', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        const data = await res.json();
        return {
            numObjects: BigInt(data.NumObjects),
            repoSize: BigInt(data.RepoSize),
            repoPath: data.RepoPath,
            version: data.Version,
            storageMax: BigInt(data.StorageMax)
        };
    }
    return stat;
});
exports.createStat = createStat;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"jy3Wr":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createVersion = configure.configure((api)=>{
    async function version(options = {
    }) {
        const res = await (await api.post('repo/version', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        })).json();
        return res.Version;
    }
    return version;
});
exports.createVersion = createVersion;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"lyUQb":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var stat = require('../bitswap/stat.js');
var stat$1 = require('../repo/stat.js');
var bw = require('./bw.js');
function createStats(config) {
    return {
        bitswap: stat.createStat(config),
        repo: stat$1.createStat(config),
        bw: bw.createBw(config)
    };
}
exports.createStats = createStats;

},{"../bitswap/stat.js":"7SuGW","../repo/stat.js":"aj18P","./bw.js":"15UlS"}],"15UlS":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createBw = configure.configure((api)=>{
    async function* bw(options = {
    }) {
        const res = await api.post('stats/bw', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers,
            transform: (stats)=>({
                    totalIn: BigInt(stats.TotalIn),
                    totalOut: BigInt(stats.TotalOut),
                    rateIn: parseFloat(stats.RateIn),
                    rateOut: parseFloat(stats.RateOut)
                })
        });
        yield* res.ndjson();
    }
    return bw;
});
exports.createBw = createBw;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"1CwyP":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var addrs = require('./addrs.js');
var connect = require('./connect.js');
var disconnect = require('./disconnect.js');
var localAddrs = require('./local-addrs.js');
var peers = require('./peers.js');
function createSwarm(config) {
    return {
        addrs: addrs.createAddrs(config),
        connect: connect.createConnect(config),
        disconnect: disconnect.createDisconnect(config),
        localAddrs: localAddrs.createLocalAddrs(config),
        peers: peers.createPeers(config)
    };
}
exports.createSwarm = createSwarm;

},{"./addrs.js":"8DhH2","./connect.js":"77VeP","./disconnect.js":"hEF4Z","./local-addrs.js":"fXOOs","./peers.js":"9J1Lg"}],"8DhH2":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var multiaddr = require('multiaddr');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createAddrs = configure.configure((api)=>{
    async function addrs(options = {
    }) {
        const res = await api.post('swarm/addrs', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        const { Addrs  } = await res.json();
        return Object.keys(Addrs).map((id)=>({
                id,
                addrs: (Addrs[id] || []).map((a)=>new multiaddr.Multiaddr(a)
                )
            })
        );
    }
    return addrs;
});
exports.createAddrs = createAddrs;

},{"multiaddr":"dOMJu","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"77VeP":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createConnect = configure.configure((api)=>{
    async function connect(addr, options = {
    }) {
        const res = await api.post('swarm/connect', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: addr,
                ...options
            }),
            headers: options.headers
        });
        const { Strings  } = await res.json();
        return Strings || [];
    }
    return connect;
});
exports.createConnect = createConnect;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"hEF4Z":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createDisconnect = configure.configure((api)=>{
    async function disconnect(addr, options = {
    }) {
        const res = await api.post('swarm/disconnect', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: addr,
                ...options
            }),
            headers: options.headers
        });
        const { Strings  } = await res.json();
        return Strings || [];
    }
    return disconnect;
});
exports.createDisconnect = createDisconnect;

},{"../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"fXOOs":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var multiaddr = require('multiaddr');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createLocalAddrs = configure.configure((api)=>{
    async function localAddrs(options = {
    }) {
        const res = await api.post('swarm/addrs/local', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        const { Strings  } = await res.json();
        return (Strings || []).map((a)=>new multiaddr.Multiaddr(a)
        );
    }
    return localAddrs;
});
exports.createLocalAddrs = createLocalAddrs;

},{"multiaddr":"dOMJu","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"9J1Lg":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var multiaddr = require('multiaddr');
var configure = require('../lib/configure.js');
var toUrlSearchParams = require('../lib/to-url-search-params.js');
const createPeers = configure.configure((api)=>{
    async function peers(options = {
    }) {
        const res = await api.post('swarm/peers', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        const { Peers  } = await res.json();
        return (Peers || []).map((peer)=>{
            return {
                addr: new multiaddr.Multiaddr(peer.Addr),
                peer: peer.Peer,
                muxer: peer.Muxer,
                latency: peer.Latency,
                streams: peer.Streams,
                direction: peer.Direction == null ? undefined : peer.Direction === 0 ? 'inbound' : 'outbound'
            };
        });
    }
    return peers;
});
exports.createPeers = createPeers;

},{"multiaddr":"dOMJu","../lib/configure.js":"7w4Kn","../lib/to-url-search-params.js":"akREo"}],"gLHNh":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var addAll = require('./add-all.js');
var last = require('it-last');
var configure = require('./lib/configure.js');
var normaliseInputSingle = require('ipfs-core-utils/files/normalise-input-single');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var last__default = /*#__PURE__*/ _interopDefaultLegacy(last);
function createAdd(options1) {
    const all = addAll.createAddAll(options1);
    return configure.configure(()=>{
        async function add(input, options = {
        }) {
            return await last__default["default"](all(normaliseInputSingle.normaliseInput(input), options));
        }
        return add;
    })(options1);
}
exports.createAdd = createAdd;

},{"./add-all.js":"hY6iY","it-last":"iWUUH","./lib/configure.js":"7w4Kn","ipfs-core-utils/files/normalise-input-single":"2Qrcv"}],"hY6iY":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var objectToCamel = require('./lib/object-to-camel.js');
var configure = require('./lib/configure.js');
var multipartRequest = require('ipfs-core-utils/multipart-request');
var toUrlSearchParams = require('./lib/to-url-search-params.js');
var abortSignal = require('./lib/abort-signal.js');
const createAddAll = configure.configure((api)=>{
    async function* addAll(source, options = {
    }) {
        const controller = new AbortController();
        const signal = abortSignal.abortSignal(controller.signal, options.signal);
        const { headers , body , total , parts  } = await multipartRequest.multipartRequest(source, controller, options.headers);
        const [progressFn, onUploadProgress] = typeof options.progress === 'function' ? createProgressHandler(total, parts, options.progress) : [
            undefined,
            undefined
        ];
        const res = await api.post('add', {
            searchParams: toUrlSearchParams.toUrlSearchParams({
                'stream-channels': true,
                ...options,
                progress: Boolean(progressFn)
            }),
            onUploadProgress,
            signal,
            headers,
            body
        });
        for await (let file of res.ndjson()){
            file = objectToCamel.objectToCamel(file);
            if (file.hash !== undefined) yield toCoreInterface(file);
            else if (progressFn) progressFn(file.bytes || 0, file.name);
        }
    }
    return addAll;
});
const createProgressHandler = (total, parts, progress)=>parts ? [
        undefined,
        createOnUploadProgress(total, parts, progress)
    ] : [
        progress,
        undefined
    ]
;
const createOnUploadProgress = (size, parts, progress)=>{
    let index = 0;
    const count = parts.length;
    return ({ loaded , total  })=>{
        const position = Math.floor(loaded / total * size);
        while(index < count){
            const { start , end , name  } = parts[index];
            if (position < end) {
                progress(position - start, name);
                break;
            } else {
                progress(end - start, name);
                index += 1;
            }
        }
    };
};
function toCoreInterface({ name , hash , size , mode , mtime , mtimeNsecs  }) {
    const output = {
        path: name,
        cid: cid.CID.parse(hash),
        size: parseInt(size)
    };
    if (mode != null) output.mode = parseInt(mode, 8);
    if (mtime != null) output.mtime = {
        secs: mtime,
        nsecs: mtimeNsecs || 0
    };
    return output;
}
exports.createAddAll = createAddAll;

},{"multiformats/cid":"4uoBU","./lib/object-to-camel.js":"9fkwr","./lib/configure.js":"7w4Kn","ipfs-core-utils/multipart-request":"g6OOu","./lib/to-url-search-params.js":"akREo","./lib/abort-signal.js":"1Gv25"}],"2Qrcv":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var normaliseContent = require('./normalise-content.js');
var normaliseCandidateSingle = require('./normalise-candidate-single.js');
function normaliseInput(input) {
    return normaliseCandidateSingle.normaliseCandidateSingle(input, normaliseContent.normaliseContent);
}
exports.normaliseInput = normaliseInput;

},{"./normalise-content.js":"2N087","./normalise-candidate-single.js":"980pl"}],"2N087":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var errCode = require('err-code');
var fromString = require('uint8arrays/from-string');
var browserStreamToIt = require('browser-readablestream-to-it');
var blobToIt = require('blob-to-it');
var itPeekable = require('it-peekable');
var all = require('it-all');
var map = require('it-map');
var utils = require('./utils.js');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var errCode__default = /*#__PURE__*/ _interopDefaultLegacy(errCode);
var browserStreamToIt__default = /*#__PURE__*/ _interopDefaultLegacy(browserStreamToIt);
var blobToIt__default = /*#__PURE__*/ _interopDefaultLegacy(blobToIt);
var itPeekable__default = /*#__PURE__*/ _interopDefaultLegacy(itPeekable);
var all__default = /*#__PURE__*/ _interopDefaultLegacy(all);
var map__default = /*#__PURE__*/ _interopDefaultLegacy(map);
async function* toAsyncIterable(thing) {
    yield thing;
}
async function normaliseContent(input) {
    if (utils.isBytes(input)) return toAsyncIterable(toBytes(input));
    if (typeof input === 'string' || input instanceof String) return toAsyncIterable(toBytes(input.toString()));
    if (utils.isBlob(input)) return blobToIt__default["default"](input);
    if (utils.isReadableStream(input)) input = browserStreamToIt__default["default"](input);
    if (Symbol.iterator in input || Symbol.asyncIterator in input) {
        const peekable = itPeekable__default["default"](input);
        const { value , done  } = await peekable.peek();
        if (done) return toAsyncIterable(new Uint8Array(0));
        peekable.push(value);
        if (Number.isInteger(value)) return toAsyncIterable(Uint8Array.from(await all__default["default"](peekable)));
        if (utils.isBytes(value) || typeof value === 'string' || value instanceof String) return map__default["default"](peekable, toBytes);
    }
    throw errCode__default["default"](new Error(`Unexpected input: ${input}`), 'ERR_UNEXPECTED_INPUT');
}
function toBytes(chunk) {
    if (chunk instanceof Uint8Array) return chunk;
    if (ArrayBuffer.isView(chunk)) return new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
    if (chunk instanceof ArrayBuffer) return new Uint8Array(chunk);
    if (Array.isArray(chunk)) return Uint8Array.from(chunk);
    return fromString.fromString(chunk.toString());
}
exports.normaliseContent = normaliseContent;

},{"err-code":"dUrrM","uint8arrays/from-string":"7qjkp","browser-readablestream-to-it":"jArgg","blob-to-it":"5FW5e","it-peekable":"20t4V","it-all":"3roGN","it-map":"a4GLO","./utils.js":"iVxwf"}],"5FW5e":[function(require,module,exports) {
/* eslint-env browser */ 'use strict';
const browserReadableStreamToIt = require('browser-readablestream-to-it');
/**
 * @param {Blob} blob
 * @returns {AsyncIterable<Uint8Array>}
 */ function blobToIt(blob) {
    if (typeof blob.stream === 'function') // @ts-ignore missing some properties
    return browserReadableStreamToIt(blob.stream());
    // firefox < 69 does not support blob.stream()
    // @ts-ignore - response.body is optional, but in practice it's a stream.
    return browserReadableStreamToIt(new Response(blob).body);
}
module.exports = blobToIt;

},{"browser-readablestream-to-it":"jArgg"}],"980pl":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var errCode = require('err-code');
var browserStreamToIt = require('browser-readablestream-to-it');
var itPeekable = require('it-peekable');
var utils = require('./utils.js');
var ipfsUnixfs = require('ipfs-unixfs');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var errCode__default = /*#__PURE__*/ _interopDefaultLegacy(errCode);
var browserStreamToIt__default = /*#__PURE__*/ _interopDefaultLegacy(browserStreamToIt);
var itPeekable__default = /*#__PURE__*/ _interopDefaultLegacy(itPeekable);
async function* normaliseCandidateSingle(input, normaliseContent) {
    if (input === null || input === undefined) throw errCode__default["default"](new Error(`Unexpected input: ${input}`), 'ERR_UNEXPECTED_INPUT');
    if (typeof input === 'string' || input instanceof String) {
        yield toFileObject(input.toString(), normaliseContent);
        return;
    }
    if (utils.isBytes(input) || utils.isBlob(input)) {
        yield toFileObject(input, normaliseContent);
        return;
    }
    if (utils.isReadableStream(input)) input = browserStreamToIt__default["default"](input);
    if (Symbol.iterator in input || Symbol.asyncIterator in input) {
        const peekable = itPeekable__default["default"](input);
        const { value , done  } = await peekable.peek();
        if (done) {
            yield {
                content: []
            };
            return;
        }
        peekable.push(value);
        if (Number.isInteger(value) || utils.isBytes(value) || typeof value === 'string' || value instanceof String) {
            yield toFileObject(peekable, normaliseContent);
            return;
        }
        throw errCode__default["default"](new Error('Unexpected input: multiple items passed - if you are using ipfs.add, please use ipfs.addAll instead'), 'ERR_UNEXPECTED_INPUT');
    }
    if (utils.isFileObject(input)) {
        yield toFileObject(input, normaliseContent);
        return;
    }
    throw errCode__default["default"](new Error('Unexpected input: cannot convert "' + typeof input + '" into ImportCandidate'), 'ERR_UNEXPECTED_INPUT');
}
async function toFileObject(input, normaliseContent) {
    const { path , mode , mtime , content  } = input;
    const file = {
        path: path || '',
        mode: ipfsUnixfs.parseMode(mode),
        mtime: ipfsUnixfs.parseMtime(mtime)
    };
    if (content) file.content = await normaliseContent(content);
    else if (!path) file.content = await normaliseContent(input);
    return file;
}
exports.normaliseCandidateSingle = normaliseCandidateSingle;

},{"err-code":"dUrrM","browser-readablestream-to-it":"jArgg","it-peekable":"20t4V","./utils.js":"iVxwf","ipfs-unixfs":"cCUai"}],"pRDjG":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('./lib/configure.js');
var toUrlSearchParams = require('./lib/to-url-search-params.js');
const createCat = configure.configure((api)=>{
    async function* cat(path, options = {
    }) {
        const res = await api.post('cat', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: path.toString(),
                ...options
            }),
            headers: options.headers
        });
        yield* res.iterator();
    }
    return cat;
});
exports.createCat = createCat;

},{"./lib/configure.js":"7w4Kn","./lib/to-url-search-params.js":"akREo"}],"aoJow":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('./lib/configure.js');
var toUrlSearchParams = require('./lib/to-url-search-params.js');
const createCommands = configure.configure((api)=>{
    const commands = async (options = {
    })=>{
        const res = await api.post('commands', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        return res.json();
    };
    return commands;
});
exports.createCommands = createCommands;

},{"./lib/configure.js":"7w4Kn","./lib/to-url-search-params.js":"akREo"}],"5IDYp":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('./lib/configure.js');
var toUrlSearchParams = require('./lib/to-url-search-params.js');
const createDns = configure.configure((api)=>{
    const dns = async (domain, options = {
    })=>{
        const res = await api.post('dns', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: domain,
                ...options
            }),
            headers: options.headers
        });
        const data = await res.json();
        return data.Path;
    };
    return dns;
});
exports.createDns = createDns;

},{"./lib/configure.js":"7w4Kn","./lib/to-url-search-params.js":"akREo"}],"9qe4L":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('./lib/configure.js');
const createGetEndpointConfig = configure.configure((api)=>{
    return ()=>{
        const url = new URL(api.opts.base || '');
        return {
            host: url.hostname,
            port: url.port,
            protocol: url.protocol,
            pathname: url.pathname,
            'api-path': url.pathname
        };
    };
});
exports.createGetEndpointConfig = createGetEndpointConfig;

},{"./lib/configure.js":"7w4Kn"}],"hPxtl":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('./lib/configure.js');
var toUrlSearchParams = require('./lib/to-url-search-params.js');
const createGet = configure.configure((api)=>{
    async function* get(path, options = {
    }) {
        const opts = {
            arg: `${path instanceof Uint8Array ? cid.CID.decode(path) : path}`,
            ...options
        };
        if (opts.compressionLevel) {
            opts['compression-level'] = opts.compressionLevel;
            delete opts.compressionLevel;
        }
        const res = await api.post('get', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(opts),
            headers: options.headers
        });
        yield* res.iterator();
    }
    return get;
});
exports.createGet = createGet;

},{"multiformats/cid":"4uoBU","./lib/configure.js":"7w4Kn","./lib/to-url-search-params.js":"akREo"}],"6wMrZ":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var objectToCamel = require('./lib/object-to-camel.js');
var multiaddr = require('multiaddr');
var configure = require('./lib/configure.js');
var toUrlSearchParams = require('./lib/to-url-search-params.js');
const createId = configure.configure((api)=>{
    async function id(options = {
    }) {
        const res = await api.post('id', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: options.peerId ? options.peerId.toString() : undefined,
                ...options
            }),
            headers: options.headers
        });
        const data = await res.json();
        const output = {
            ...objectToCamel.objectToCamel(data)
        };
        if (output.addresses) output.addresses = output.addresses.map((ma)=>new multiaddr.Multiaddr(ma)
        );
        return output;
    }
    return id;
});
exports.createId = createId;

},{"./lib/object-to-camel.js":"9fkwr","multiaddr":"dOMJu","./lib/configure.js":"7w4Kn","./lib/to-url-search-params.js":"akREo"}],"5XhyE":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var id = require('./id.js');
const createIsOnline = (options1)=>{
    const id$1 = id.createId(options1);
    async function isOnline(options = {
    }) {
        const res = await id$1(options);
        return Boolean(res && res.addresses && res.addresses.length);
    }
    return isOnline;
};
exports.createIsOnline = createIsOnline;

},{"./id.js":"6wMrZ"}],"63qvU":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var cid = require('multiformats/cid');
var configure = require('./lib/configure.js');
var toUrlSearchParams = require('./lib/to-url-search-params.js');
var stat = require('./files/stat.js');
const createLs = configure.configure((api, opts)=>{
    async function* ls(path, options = {
    }) {
        const pathStr = `${path instanceof Uint8Array ? cid.CID.decode(path) : path}`;
        async function mapLink(link) {
            let hash = link.Hash;
            if (hash.includes('/')) {
                const ipfsPath = hash.startsWith('/ipfs/') ? hash : `/ipfs/${hash}`;
                const stats = await stat.createStat(opts)(ipfsPath);
                hash = stats.cid;
            } else hash = cid.CID.parse(hash);
            const entry = {
                name: link.Name,
                path: pathStr + (link.Name ? `/${link.Name}` : ''),
                size: link.Size,
                cid: hash,
                type: typeOf(link)
            };
            if (link.Mode) entry.mode = parseInt(link.Mode, 8);
            if (link.Mtime !== undefined && link.Mtime !== null) {
                entry.mtime = {
                    secs: link.Mtime
                };
                if (link.MtimeNsecs !== undefined && link.MtimeNsecs !== null) entry.mtime.nsecs = link.MtimeNsecs;
            }
            return entry;
        }
        const res = await api.post('ls', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: pathStr,
                ...options
            }),
            headers: options.headers
        });
        for await (let result of res.ndjson()){
            result = result.Objects;
            if (!result) throw new Error('expected .Objects in results');
            result = result[0];
            if (!result) throw new Error('expected one array in results.Objects');
            const links = result.Links;
            if (!Array.isArray(links)) throw new Error('expected one array in results.Objects[0].Links');
            if (!links.length) {
                yield mapLink(result);
                return;
            }
            yield* links.map(mapLink);
        }
    }
    return ls;
});
function typeOf(link) {
    switch(link.Type){
        case 1:
        case 5:
            return 'dir';
        case 2:
            return 'file';
        default:
            return 'file';
    }
}
exports.createLs = createLs;

},{"multiformats/cid":"4uoBU","./lib/configure.js":"7w4Kn","./lib/to-url-search-params.js":"akREo","./files/stat.js":"hWYUs"}],"2X8Ks":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var objectToCamel = require('./lib/object-to-camel.js');
var configure = require('./lib/configure.js');
var toUrlSearchParams = require('./lib/to-url-search-params.js');
const createMount = configure.configure((api)=>{
    async function mount(options = {
    }) {
        const res = await api.post('dns', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        return objectToCamel.objectToCamel(await res.json());
    }
    return mount;
});
exports.createMount = createMount;

},{"./lib/object-to-camel.js":"9fkwr","./lib/configure.js":"7w4Kn","./lib/to-url-search-params.js":"akREo"}],"jLId8":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var objectToCamel = require('./lib/object-to-camel.js');
var configure = require('./lib/configure.js');
var toUrlSearchParams = require('./lib/to-url-search-params.js');
const createPing = configure.configure((api)=>{
    async function* ping(peerId, options = {
    }) {
        const res = await api.post('ping', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: `${peerId}`,
                ...options
            }),
            headers: options.headers,
            transform: objectToCamel.objectToCamel
        });
        yield* res.ndjson();
    }
    return ping;
});
exports.createPing = createPing;

},{"./lib/object-to-camel.js":"9fkwr","./lib/configure.js":"7w4Kn","./lib/to-url-search-params.js":"akREo"}],"3mOAw":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('./lib/configure.js');
var toUrlSearchParams = require('./lib/to-url-search-params.js');
const createResolve = configure.configure((api)=>{
    async function resolve(path, options = {
    }) {
        const res = await api.post('resolve', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams({
                arg: path,
                ...options
            }),
            headers: options.headers
        });
        const { Path  } = await res.json();
        return Path;
    }
    return resolve;
});
exports.createResolve = createResolve;

},{"./lib/configure.js":"7w4Kn","./lib/to-url-search-params.js":"akREo"}],"4a43F":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('./lib/configure.js');
var errCode = require('err-code');
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var errCode__default = /*#__PURE__*/ _interopDefaultLegacy(errCode);
const createStart = configure.configure((api)=>{
    const start = async (options = {
    })=>{
        throw errCode__default["default"](new Error('Not implemented'), 'ERR_NOT_IMPLEMENTED');
    };
    return start;
});
exports.createStart = createStart;

},{"./lib/configure.js":"7w4Kn","err-code":"dUrrM"}],"creD8":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var configure = require('./lib/configure.js');
var toUrlSearchParams = require('./lib/to-url-search-params.js');
const createStop = configure.configure((api)=>{
    async function stop(options = {
    }) {
        const res = await api.post('shutdown', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        await res.text();
    }
    return stop;
});
exports.createStop = createStop;

},{"./lib/configure.js":"7w4Kn","./lib/to-url-search-params.js":"akREo"}],"aDEXf":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var objectToCamel = require('./lib/object-to-camel.js');
var configure = require('./lib/configure.js');
var toUrlSearchParams = require('./lib/to-url-search-params.js');
const createVersion = configure.configure((api)=>{
    async function version(options = {
    }) {
        const res = await api.post('version', {
            signal: options.signal,
            searchParams: toUrlSearchParams.toUrlSearchParams(options),
            headers: options.headers
        });
        return {
            ...objectToCamel.objectToCamel(await res.json()),
            'ipfs-http-client': '1.0.0'
        };
    }
    return version;
});
exports.createVersion = createVersion;

},{"./lib/object-to-camel.js":"9fkwr","./lib/configure.js":"7w4Kn","./lib/to-url-search-params.js":"akREo"}],"92xmM":[function(require,module,exports) {
'use strict';
const HTTP = require('../http');
/**
 *
 * @param {string} url
 * @param {import("../types").HTTPOptions} [options]
 * @returns {{ path: string; content?: AsyncIterable<Uint8Array> }}
 */ const urlSource = (url, options)=>{
    return {
        path: decodeURIComponent(new URL(url).pathname.split('/').pop() || ''),
        content: readURLContent(url, options)
    };
};
/**
 *
 * @param {string} url
 * @param {import("../types").HTTPOptions} [options]
 * @returns {AsyncIterable<Uint8Array>}
 */ async function* readURLContent(url, options) {
    const http = new HTTP();
    const response = await http.get(url, options);
    yield* response.iterator();
}
module.exports = urlSource;

},{"../http":"j20vN"}]},["6IXwR","bNKaB"], "bNKaB", "parcelRequirec0d2")

//# sourceMappingURL=index.0641b553.js.map
