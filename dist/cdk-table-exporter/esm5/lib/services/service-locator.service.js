import { CsvExporterService } from './exporters/csv-exporter.service';
import { TxtExporterService } from './exporters/txt-exporter.service';
import { Injectable, Injector } from '@angular/core';
import { ExportType } from './../export-type';
import { XlsExporterService } from './exporters/xls-exporter.service';
import { JsonExporterService } from './exporters/json-exporter.service';
import { XlsxExporterService } from './exporters/xlsx-exporter.service';
import * as i0 from "@angular/core";
var ServiceLocatorService = /** @class */ (function () {
    function ServiceLocatorService(injector) {
        this.injector = injector;
    }
    ServiceLocatorService.prototype.getService = function (exportType) {
        switch (exportType) {
            case ExportType.XLS.valueOf():
                return this.injector.get(XlsExporterService);
            case ExportType.XLSX.valueOf():
                return this.injector.get(XlsxExporterService);
            case ExportType.JSON.valueOf():
                return this.injector.get(JsonExporterService);
            case ExportType.TXT.valueOf():
                return this.injector.get(TxtExporterService);
            case ExportType.CSV.valueOf():
                return this.injector.get(CsvExporterService);
            case ExportType.OTHER.valueOf():
                return null;
            default:
                return this.injector.get(XlsxExporterService);
        }
    };
    ServiceLocatorService.ɵfac = function ServiceLocatorService_Factory(t) { return new (t || ServiceLocatorService)(i0.ɵɵinject(i0.Injector)); };
    ServiceLocatorService.ɵprov = i0.ɵɵdefineInjectable({ token: ServiceLocatorService, factory: ServiceLocatorService.ɵfac, providedIn: 'root' });
    return ServiceLocatorService;
}());
export { ServiceLocatorService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ServiceLocatorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1sb2NhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jZGstdGFibGUtZXhwb3J0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2VydmljZS1sb2NhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUN4RTtJQUtFLCtCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUksQ0FBQztJQUVwQywwQ0FBVSxHQUFqQixVQUFrQixVQUEwRTtRQUMxRixRQUFRLFVBQVUsRUFBRTtZQUNsQixLQUFLLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUMzQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFxQixrQkFBa0IsQ0FBQyxDQUFDO1lBQ25FLEtBQUssVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXNCLG1CQUFtQixDQUFDLENBQUM7WUFDdkUsS0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBc0IsbUJBQW1CLENBQUMsQ0FBQztZQUNyRSxLQUFLLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUMzQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFxQixrQkFBa0IsQ0FBQyxDQUFDO1lBQ25FLEtBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXFCLGtCQUFrQixDQUFDLENBQUM7WUFDbkUsS0FBSyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDN0IsT0FBTyxJQUFJLENBQUM7WUFDZDtnQkFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFzQixtQkFBbUIsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzs4RkFyQlUscUJBQXFCO2lFQUFyQixxQkFBcUIsV0FBckIscUJBQXFCLG1CQUZwQixNQUFNO2dDQVZwQjtDQWtDQyxBQXpCRCxJQXlCQztTQXRCWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUhqQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDc3ZFeHBvcnRlclNlcnZpY2UgfSBmcm9tICcuL2V4cG9ydGVycy9jc3YtZXhwb3J0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBUeHRFeHBvcnRlclNlcnZpY2UgfSBmcm9tICcuL2V4cG9ydGVycy90eHQtZXhwb3J0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4uL29wdGlvbnMnO1xuaW1wb3J0IHsgRXhwb3J0VHlwZSB9IGZyb20gJy4vLi4vZXhwb3J0LXR5cGUnO1xuaW1wb3J0IHsgRXhwb3J0ZXIgfSBmcm9tICcuL2V4cG9ydGVycy9leHBvcnRlcic7XG5pbXBvcnQgeyBYbHNFeHBvcnRlclNlcnZpY2UgfSBmcm9tICcuL2V4cG9ydGVycy94bHMtZXhwb3J0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBKc29uRXhwb3J0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9leHBvcnRlcnMvanNvbi1leHBvcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFhsc3hFeHBvcnRlclNlcnZpY2UgfSBmcm9tICcuL2V4cG9ydGVycy94bHN4LWV4cG9ydGVyLnNlcnZpY2UnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VydmljZUxvY2F0b3JTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcikgeyB9XG5cbiAgcHVibGljIGdldFNlcnZpY2UoZXhwb3J0VHlwZTogRXhwb3J0VHlwZSB8ICd4bHMnIHwgJ3hsc3gnIHwgJ2NzdicgfCAndHh0JyB8ICdqc29uJyB8ICdvdGhlcicpOiBFeHBvcnRlcjxPcHRpb25zPiB7XG4gICAgc3dpdGNoIChleHBvcnRUeXBlKSB7XG4gICAgICBjYXNlIEV4cG9ydFR5cGUuWExTLnZhbHVlT2YoKTpcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFhsc0V4cG9ydGVyU2VydmljZT4oWGxzRXhwb3J0ZXJTZXJ2aWNlKTtcbiAgICAgIGNhc2UgRXhwb3J0VHlwZS5YTFNYLnZhbHVlT2YoKTpcbiAgICAgICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8WGxzeEV4cG9ydGVyU2VydmljZT4oWGxzeEV4cG9ydGVyU2VydmljZSk7XG4gICAgICBjYXNlIEV4cG9ydFR5cGUuSlNPTi52YWx1ZU9mKCk6XG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxKc29uRXhwb3J0ZXJTZXJ2aWNlPihKc29uRXhwb3J0ZXJTZXJ2aWNlKTtcbiAgICAgIGNhc2UgRXhwb3J0VHlwZS5UWFQudmFsdWVPZigpOlxuICAgICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8VHh0RXhwb3J0ZXJTZXJ2aWNlPihUeHRFeHBvcnRlclNlcnZpY2UpO1xuICAgICAgY2FzZSBFeHBvcnRUeXBlLkNTVi52YWx1ZU9mKCk6XG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxDc3ZFeHBvcnRlclNlcnZpY2U+KENzdkV4cG9ydGVyU2VydmljZSk7XG4gICAgICBjYXNlIEV4cG9ydFR5cGUuT1RIRVIudmFsdWVPZigpOlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxYbHN4RXhwb3J0ZXJTZXJ2aWNlPihYbHN4RXhwb3J0ZXJTZXJ2aWNlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==