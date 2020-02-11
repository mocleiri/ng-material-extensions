(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/table'), require('@angular/core'), require('file-saver'), require('xlsx')) :
    typeof define === 'function' && define.amd ? define('cdk-table-exporter', ['exports', '@angular/cdk/table', '@angular/core', 'file-saver', 'xlsx'], factory) :
    (global = global || self, factory(global['cdk-table-exporter'] = {}, global.ng.cdk.table, global.ng.core, global.fileSaver, global.xlsx));
}(this, (function (exports, table, core, fileSaver, xlsx) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var CdkTableExporterModule = /** @class */ (function () {
        function CdkTableExporterModule() {
        }
        CdkTableExporterModule.ɵmod = core["ɵɵdefineNgModule"]({ type: CdkTableExporterModule });
        CdkTableExporterModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function CdkTableExporterModule_Factory(t) { return new (t || CdkTableExporterModule)(); }, imports: [[
                    table.CdkTableModule
                ]] });
        return CdkTableExporterModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](CdkTableExporterModule, { imports: [table.CdkTableModule] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CdkTableExporterModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        table.CdkTableModule
                    ],
                    exports: []
                }]
        }], null, null); })();


    (function (ExportType) {
        ExportType["XLS"] = "xls";
        ExportType["XLSX"] = "xlsx";
        ExportType["CSV"] = "csv";
        ExportType["TXT"] = "txt";
        ExportType["JSON"] = "json";
        ExportType["OTHER"] = "other";
    })(exports.ExportType || (exports.ExportType = {}));

    var Mime = /** @class */ (function () {
        function Mime(extension, contentTypeHeader) {
            this.extension = extension;
            this.contentTypeHeader = contentTypeHeader;
        }
        return Mime;
    }());

    var MAT_TABLE_EXPORTER = 'mat-table-exporter';
    var TYPE_ARRAY = 'array';
    var CHAR_SET_UTF = ';charset=utf-';
    var CHAR_SET_UTF_8 = CHAR_SET_UTF + '8';
    var CONTENT_TYPE_TEXT = exports.ExportType.TXT + '/';
    var CONTENT_TYPE_APPLICATION = 'application/';
    var CONTENT_TYPE_EXCEL = CONTENT_TYPE_APPLICATION + 'octet-stream';
    var DOT = '.';
    var EXTENSION_XLS = DOT + exports.ExportType.XLS;
    var EXTENSION_XLSX = DOT + exports.ExportType.XLSX;
    var EXTENSION_CSV = DOT + exports.ExportType.CSV;
    var EXTENSION_JSON = DOT + exports.ExportType.JSON;
    var EXTENSION_TEXT = DOT + exports.ExportType.TXT;
    var MIME_EXCEL_XLS = new Mime(EXTENSION_XLS, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
    var MIME_EXCEL_XLSX = new Mime(EXTENSION_XLSX, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
    var MIME_JSON = new Mime(EXTENSION_JSON, CONTENT_TYPE_TEXT + JSON + CHAR_SET_UTF_8);
    var MIME_TXT = new Mime(EXTENSION_TEXT, CONTENT_TYPE_TEXT + exports.ExportType.TXT + CHAR_SET_UTF_8);
    var MIME_CSV = new Mime(EXTENSION_CSV, CONTENT_TYPE_TEXT + exports.ExportType.CSV + CHAR_SET_UTF_8);
    var REF = '!ref';
    var XLS_REGEX = DOT + '*\.' + exports.ExportType.XLS + '$';
    var RETURN = '\n';
    var TAB = '\t';
    var XLSX_COLS = '!cols';

    var FileUtil = /** @class */ (function () {
        function FileUtil() {
        }
        FileUtil.save = function (content, mime, options) {
            var blob = new Blob([content], { type: mime.contentTypeHeader });
            var fileName = MAT_TABLE_EXPORTER;
            if (options && options.fileName) {
                fileName = options.fileName;
            }
            fileSaver.saveAs(blob, fileName + mime.extension);
        };
        FileUtil.isXls = function (fileName) {
            return fileName.toLowerCase().match(XLS_REGEX) != null;
        };
        FileUtil.identifyExportType = function (fileName) {
            if (fileName && FileUtil.isXls(fileName)) {
                return exports.ExportType.XLS;
            }
            else {
                return exports.ExportType.XLSX;
            }
        };
        FileUtil.removeExtension = function (options) {
            options.fileName = options.fileName.split(DOT)[0];
        };
        return FileUtil;
    }());

    var DataExtractorService = /** @class */ (function () {
        function DataExtractorService() {
        }
        DataExtractorService.prototype.extractRows = function (cdkTable, hiddenColumns) {
            return this.getRowsAsJsonArray(cdkTable, hiddenColumns, cdkTable._rowOutlet);
        };
        DataExtractorService.prototype.extractRow = function (cdkTable, hiddenColumns, outlet) {
            return this.getRowsAsJsonArray(cdkTable, hiddenColumns, outlet)[0];
        };
        DataExtractorService.prototype.getRowsAsJsonArray = function (cdkTable, hiddenColumns, outlet) {
            var renderedRows = this.getRenderedRows(cdkTable, outlet);
            return this.convertToJsonArray(hiddenColumns, renderedRows);
        };
        DataExtractorService.prototype.getRenderedRows = function (cdkTable, outlet) {
            return cdkTable._getRenderedRows(outlet);
        };
        DataExtractorService.prototype.convertToJsonArray = function (hiddenColumns, rows) {
            var result = new Array();
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < rows.length; i++) {
                var row = this.convertRow(hiddenColumns, rows[i]);
                result.push(this.createExcelItem(row));
            }
            return result;
        };
        DataExtractorService.prototype.convertRow = function (hiddenColumns, row) {
            var result = new Array();
            var cells = row.children;
            for (var i = 0; i < cells.length; i++) {
                if (!this.shouldHide(hiddenColumns, i)) {
                    var element = cells.item(i).innerText;
                    result.push(element);
                }
            }
            return result;
        };
        DataExtractorService.prototype.shouldHide = function (hiddenColumns, columnIndex) {
            if (hiddenColumns && hiddenColumns.includes(columnIndex)) {
                return true;
            }
            else {
                return false;
            }
        };
        DataExtractorService.prototype.createExcelItem = function (row) {
            return Object.assign({}, row);
        };
        DataExtractorService.ɵfac = function DataExtractorService_Factory(t) { return new (t || DataExtractorService)(); };
        DataExtractorService.ɵprov = core["ɵɵdefineInjectable"]({ token: DataExtractorService, factory: DataExtractorService.ɵfac, providedIn: 'root' });
        return DataExtractorService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DataExtractorService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var FileExporter = /** @class */ (function () {
        function FileExporter() {
        }
        FileExporter.prototype.export = function (rows, options) {
            if (!rows) {
                throw new Error('Empty json array is provided, rows parameter is mandatory!');
            }
            var content = this.createContent(rows, options);
            var mimeType = this.getMimeType();
            FileUtil.save(content, mimeType, options);
        };
        return FileExporter;
    }());

    /**
     * An angular service class that is used to create files out of json object arrays.
     */
    var WorksheetExporter = /** @class */ (function (_super) {
        __extends(WorksheetExporter, _super);
        function WorksheetExporter() {
            return _super.call(this) || this;
        }
        WorksheetExporter.prototype.createContent = function (rows, options) {
            var workSheet = xlsx.utils.json_to_sheet(rows, {
                skipHeader: true // we don't want to see object properties as our headers
            });
            return this.workSheetToContent(workSheet, options);
        };
        return WorksheetExporter;
    }(FileExporter));

    var CsvExporterService = /** @class */ (function (_super) {
        __extends(CsvExporterService, _super);
        function CsvExporterService() {
            return _super.call(this) || this;
        }
        CsvExporterService.prototype.workSheetToContent = function (worksheet, options) {
            return xlsx.utils.sheet_to_csv(worksheet);
        };
        CsvExporterService.prototype.getMimeType = function () {
            return MIME_CSV;
        };
        CsvExporterService.ɵfac = function CsvExporterService_Factory(t) { return new (t || CsvExporterService)(); };
        CsvExporterService.ɵprov = core["ɵɵdefineInjectable"]({ token: CsvExporterService, factory: CsvExporterService.ɵfac, providedIn: 'root' });
        return CsvExporterService;
    }(WorksheetExporter));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CsvExporterService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var TxtExporterService = /** @class */ (function (_super) {
        __extends(TxtExporterService, _super);
        function TxtExporterService() {
            return _super.call(this) || this;
        }
        TxtExporterService.prototype.createContent = function (rows, options) {
            var _this = this;
            var content = '';
            rows.forEach(function (element) {
                content += Object.values(element).join(_this.getDelimiter(options)) + RETURN;
            });
            return content;
        };
        TxtExporterService.prototype.getMimeType = function () {
            return MIME_TXT;
        };
        TxtExporterService.prototype.getDelimiter = function (options) {
            if (options && options.delimiter) {
                return options.delimiter;
            }
            else {
                return TAB;
            }
        };
        TxtExporterService.ɵfac = function TxtExporterService_Factory(t) { return new (t || TxtExporterService)(); };
        TxtExporterService.ɵprov = core["ɵɵdefineInjectable"]({ token: TxtExporterService, factory: TxtExporterService.ɵfac, providedIn: 'root' });
        return TxtExporterService;
    }(FileExporter));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TxtExporterService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var XlsExporterService = /** @class */ (function (_super) {
        __extends(XlsExporterService, _super);
        function XlsExporterService() {
            return _super.call(this) || this;
        }
        XlsExporterService.prototype.workSheetToContent = function (worksheet, options) {
            if (options === void 0) { options = {}; }
            var workBook = xlsx.utils.book_new();
            if (options.columnWidths) {
                worksheet[XLSX_COLS] = this.convertToWch(options.columnWidths);
            }
            this.correctTypes(options);
            xlsx.utils.book_append_sheet(workBook, worksheet, options.sheet);
            return xlsx.write(workBook, options);
        };
        XlsExporterService.prototype.getMimeType = function () {
            return MIME_EXCEL_XLS;
        };
        XlsExporterService.prototype.correctTypes = function (options) {
            if (!options.type) {
                options.type = TYPE_ARRAY;
            }
            options.bookType = this.getMimeType().extension.replace('.', ''); // sheetjs requires bookingType for excel format
        };
        XlsExporterService.prototype.convertToWch = function (columnWidths) {
            return columnWidths.map(function (width) { return ({ wch: width }); });
        };
        XlsExporterService.ɵfac = function XlsExporterService_Factory(t) { return new (t || XlsExporterService)(); };
        XlsExporterService.ɵprov = core["ɵɵdefineInjectable"]({ token: XlsExporterService, factory: XlsExporterService.ɵfac, providedIn: 'root' });
        return XlsExporterService;
    }(WorksheetExporter));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](XlsExporterService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var JsonExporterService = /** @class */ (function (_super) {
        __extends(JsonExporterService, _super);
        function JsonExporterService() {
            return _super.call(this) || this;
        }
        JsonExporterService.prototype.createContent = function (rows, options) {
            return JSON.stringify(rows);
        };
        JsonExporterService.prototype.getMimeType = function () {
            return MIME_JSON;
        };
        JsonExporterService.ɵfac = function JsonExporterService_Factory(t) { return new (t || JsonExporterService)(); };
        JsonExporterService.ɵprov = core["ɵɵdefineInjectable"]({ token: JsonExporterService, factory: JsonExporterService.ɵfac, providedIn: 'root' });
        return JsonExporterService;
    }(FileExporter));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](JsonExporterService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var XlsxExporterService = /** @class */ (function (_super) {
        __extends(XlsxExporterService, _super);
        function XlsxExporterService() {
            return _super.call(this) || this;
        }
        // override
        XlsxExporterService.prototype.getMimeType = function () {
            return MIME_EXCEL_XLSX;
        };
        XlsxExporterService.ɵfac = function XlsxExporterService_Factory(t) { return new (t || XlsxExporterService)(); };
        XlsxExporterService.ɵprov = core["ɵɵdefineInjectable"]({ token: XlsxExporterService, factory: XlsxExporterService.ɵfac, providedIn: 'root' });
        return XlsxExporterService;
    }(XlsExporterService));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](XlsxExporterService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var ServiceLocatorService = /** @class */ (function () {
        function ServiceLocatorService(injector) {
            this.injector = injector;
        }
        ServiceLocatorService.prototype.getService = function (exportType) {
            switch (exportType) {
                case exports.ExportType.XLS.valueOf():
                    return this.injector.get(XlsExporterService);
                case exports.ExportType.XLSX.valueOf():
                    return this.injector.get(XlsxExporterService);
                case exports.ExportType.JSON.valueOf():
                    return this.injector.get(JsonExporterService);
                case exports.ExportType.TXT.valueOf():
                    return this.injector.get(TxtExporterService);
                case exports.ExportType.CSV.valueOf():
                    return this.injector.get(CsvExporterService);
                case exports.ExportType.OTHER.valueOf():
                    return null;
                default:
                    return this.injector.get(XlsxExporterService);
            }
        };
        ServiceLocatorService.ɵfac = function ServiceLocatorService_Factory(t) { return new (t || ServiceLocatorService)(core["ɵɵinject"](core.Injector)); };
        ServiceLocatorService.ɵprov = core["ɵɵdefineInjectable"]({ token: ServiceLocatorService, factory: ServiceLocatorService.ɵfac, providedIn: 'root' });
        return ServiceLocatorService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ServiceLocatorService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: core.Injector }]; }, null); })();

    /**
     * Exporter class for CdkTable. Abstracts the varying behaviors among different CdkTable implementations.
     */
    var CdkTableExporter = /** @class */ (function () {
        function CdkTableExporter(renderer, serviceLocator, dataExtractor, table, viewContainerRef) {
            this.renderer = renderer;
            this.serviceLocator = serviceLocator;
            this.dataExtractor = dataExtractor;
            this.table = table;
            this.viewContainerRef = viewContainerRef;
            this.exportCompleted = new core.EventEmitter();
            this.exportStarted = new core.EventEmitter();
            this.initCdkTable();
        }
        Object.defineProperty(CdkTableExporter.prototype, "cdkTable", {
            get: function () {
                return this._cdkTable;
            },
            /**
             * @deprecated
             */
            set: function (value) {
                console.warn('cdkTable input is deprecated!');
                this._cdkTable = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkTableExporter.prototype, "exporterButton", {
            get: function () {
                return this._exporterButton;
            },
            /**
             * @deprecated
             */
            set: function (value) {
                console.warn('exporterButton input is deprecated!');
                this._exporterButton = value;
                this.setButtonListener();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkTableExporter.prototype, "fileName", {
            get: function () {
                return this._fileName;
            },
            /**
             * @deprecated
             */
            set: function (value) {
                console.warn('fileName input is deprecated!');
                this._fileName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CdkTableExporter.prototype, "sheetName", {
            get: function () {
                return this._sheetName;
            },
            /**
             * @deprecated
             */
            set: function (value) {
                console.warn('sheetName input is deprecated!');
                this._sheetName = value;
            },
            enumerable: true,
            configurable: true
        });
        CdkTableExporter.prototype.initCdkTable = function () {
            var _a, _b;
            // tslint:disable-next-line:no-string-literal
            var table = (_b = (_a = this.viewContainerRef['_data']) === null || _a === void 0 ? void 0 : _a.componentView) === null || _b === void 0 ? void 0 : _b.component;
            if (table) {
                this._cdkTable = table;
            }
            else if (this.table) {
                this._cdkTable = this.table;
            }
            else {
                throw new Error('Unsupported Angular version');
            }
        };
        CdkTableExporter.prototype.setButtonListener = function () {
            var _this = this;
            if (this._exporterButton) {
                this.renderer.listen(this._exporterButton._elementRef.nativeElement, 'click', function (evt) {
                    var options = { fileName: _this._fileName, sheet: _this._sheetName };
                    _this.exportTable(FileUtil.identifyExportType(_this._fileName), options); // this is to support deprecated way of exporting
                });
            }
        };
        /**
         * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
         */
        CdkTableExporter.prototype.exportTable = function (exportType, options) {
            this.loadExporter(exportType);
            this._options = options;
            this.exportStarted.emit();
            this._isIterating = true;
            this._isExporting = true;
            this._data = new Array();
            this.enableExportButton(false);
            this.extractTableHeader();
            try {
                this.exportWithPagination();
            }
            catch (notPaginated) {
                this.exportSinglePage();
            }
        };
        CdkTableExporter.prototype.loadExporter = function (exportType) {
            if (exportType === exports.ExportType.OTHER.valueOf()) {
                this._exporterService = this.exporter;
            }
            else {
                this._exporterService = this.serviceLocator.getService(exportType);
            }
        };
        CdkTableExporter.prototype.exportWithPagination = function () {
            this._initialPageIndex = this.getCurrentPageIndex();
            this.initPageHandler();
            this.goToPage(0);
        };
        CdkTableExporter.prototype.exportSinglePage = function () {
            this.extractDataOnCurrentPage();
            this.extractTableFooter();
            this.exportExtractedData();
        };
        CdkTableExporter.prototype.extractDataOnCurrentPage = function () {
            this._data = this._data.concat(this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns));
        };
        CdkTableExporter.prototype.initPageHandler = function () {
            var _this = this;
            if (!this._subscription) {
                this._subscription = this.getPageChangeObservable().subscribe(function () {
                    setTimeout(function () {
                        if (_this._isIterating) {
                            _this.extractDataOnCurrentPage();
                            if (_this.hasNextPage()) {
                                _this.nextPage();
                            }
                            else {
                                _this._isIterating = false;
                                _this.goToPage(_this._initialPageIndex);
                            }
                        }
                        else if (_this._isExporting) {
                            _this._isExporting = false;
                            _this.extractTableFooter();
                            _this.exportExtractedData();
                        }
                    });
                });
            }
        };
        CdkTableExporter.prototype.exportExtractedData = function () {
            this._exporterService.export(this._data, this._options);
            this._data = new Array();
            this.enableExportButton(true);
            this.exportCompleted.emit();
        };
        CdkTableExporter.prototype.extractSpecialRow = function (outlet) {
            var row = this.dataExtractor.extractRow(this._cdkTable, this.hiddenColumns, outlet);
            if (row) {
                this._data.push(row);
            }
        };
        CdkTableExporter.prototype.extractTableHeader = function () {
            this.extractSpecialRow(this._cdkTable._headerRowOutlet);
        };
        CdkTableExporter.prototype.extractTableFooter = function () {
            this.extractSpecialRow(this._cdkTable._footerRowOutlet);
        };
        CdkTableExporter.prototype.hasNextPage = function () {
            if (this.getCurrentPageIndex() < this.getPageCount() - 1) {
                return true;
            }
            else {
                return false;
            }
        };
        CdkTableExporter.prototype.nextPage = function () {
            this.goToPage(this.getCurrentPageIndex() + 1);
        };
        CdkTableExporter.prototype.enableExportButton = function (value) {
            if (this._exporterButton) {
                this.renderer.setProperty(this._exporterButton._elementRef.nativeElement, 'disabled', value ? null : 'true');
            }
        };
        CdkTableExporter.ɵfac = function CdkTableExporter_Factory(t) { core["ɵɵinvalidFactory"](); };
        CdkTableExporter.ɵdir = core["ɵɵdefineDirective"]({ type: CdkTableExporter, inputs: { hiddenColumns: "hiddenColumns", exporter: "exporter", cdkTable: "cdkTable", exporterButton: "exporterButton", fileName: "fileName", sheetName: "sheetName" }, outputs: { exportCompleted: "exportCompleted", exportStarted: "exportStarted" } });
        return CdkTableExporter;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CdkTableExporter, [{
            type: core.Directive
        }], function () { return [{ type: core.Renderer2 }, { type: ServiceLocatorService }, { type: DataExtractorService }, { type: undefined }, { type: core.ViewContainerRef }]; }, { hiddenColumns: [{
                type: core.Input
            }], exporter: [{
                type: core.Input
            }], exportCompleted: [{
                type: core.Output
            }], exportStarted: [{
                type: core.Output
            }], cdkTable: [{
                type: core.Input
            }], exporterButton: [{
                type: core.Input
            }], fileName: [{
                type: core.Input
            }], sheetName: [{
                type: core.Input
            }] }); })();

    exports.CHAR_SET_UTF = CHAR_SET_UTF;
    exports.CHAR_SET_UTF_8 = CHAR_SET_UTF_8;
    exports.CONTENT_TYPE_APPLICATION = CONTENT_TYPE_APPLICATION;
    exports.CONTENT_TYPE_EXCEL = CONTENT_TYPE_EXCEL;
    exports.CONTENT_TYPE_TEXT = CONTENT_TYPE_TEXT;
    exports.CdkTableExporter = CdkTableExporter;
    exports.CdkTableExporterModule = CdkTableExporterModule;
    exports.CsvExporterService = CsvExporterService;
    exports.DOT = DOT;
    exports.DataExtractorService = DataExtractorService;
    exports.EXTENSION_CSV = EXTENSION_CSV;
    exports.EXTENSION_JSON = EXTENSION_JSON;
    exports.EXTENSION_TEXT = EXTENSION_TEXT;
    exports.EXTENSION_XLS = EXTENSION_XLS;
    exports.EXTENSION_XLSX = EXTENSION_XLSX;
    exports.FileExporter = FileExporter;
    exports.FileUtil = FileUtil;
    exports.JsonExporterService = JsonExporterService;
    exports.MAT_TABLE_EXPORTER = MAT_TABLE_EXPORTER;
    exports.MIME_CSV = MIME_CSV;
    exports.MIME_EXCEL_XLS = MIME_EXCEL_XLS;
    exports.MIME_EXCEL_XLSX = MIME_EXCEL_XLSX;
    exports.MIME_JSON = MIME_JSON;
    exports.MIME_TXT = MIME_TXT;
    exports.Mime = Mime;
    exports.REF = REF;
    exports.RETURN = RETURN;
    exports.ServiceLocatorService = ServiceLocatorService;
    exports.TAB = TAB;
    exports.TYPE_ARRAY = TYPE_ARRAY;
    exports.TxtExporterService = TxtExporterService;
    exports.WorksheetExporter = WorksheetExporter;
    exports.XLSX_COLS = XLSX_COLS;
    exports.XLS_REGEX = XLS_REGEX;
    exports.XlsExporterService = XlsExporterService;
    exports.XlsxExporterService = XlsxExporterService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-table-exporter.umd.js.map
