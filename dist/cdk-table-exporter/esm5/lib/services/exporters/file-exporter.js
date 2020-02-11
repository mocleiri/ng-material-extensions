import { FileUtil } from '../../file-util';
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
export { FileExporter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1leHBvcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nkay10YWJsZS1leHBvcnRlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBvcnRlcnMvZmlsZS1leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJM0M7SUFDRTtJQUFlLENBQUM7SUFFVCw2QkFBTSxHQUFiLFVBQWMsSUFBZ0IsRUFBRSxPQUFXO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLDREQUE0RCxDQUFDLENBQUM7U0FDL0U7UUFDRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFJSCxtQkFBQztBQUFELENBQUMsQUFkRCxJQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsZVV0aWwgfSBmcm9tICcuLi8uLi9maWxlLXV0aWwnO1xuaW1wb3J0IHsgTWltZSB9IGZyb20gJy4uLy4uL21pbWUnO1xuaW1wb3J0IHsgRXhwb3J0ZXIgfSBmcm9tICcuL2V4cG9ydGVyJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpbGVFeHBvcnRlcjxUPiBpbXBsZW1lbnRzIEV4cG9ydGVyPFQ+IHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBleHBvcnQocm93czogQXJyYXk8YW55Piwgb3B0aW9ucz86IFQpIHtcbiAgICBpZiAoIXJvd3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRW1wdHkganNvbiBhcnJheSBpcyBwcm92aWRlZCwgcm93cyBwYXJhbWV0ZXIgaXMgbWFuZGF0b3J5IScpO1xuICAgIH1cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jcmVhdGVDb250ZW50KHJvd3MsIG9wdGlvbnMpO1xuICAgIGNvbnN0IG1pbWVUeXBlID0gdGhpcy5nZXRNaW1lVHlwZSgpO1xuICAgIEZpbGVVdGlsLnNhdmUoY29udGVudCwgbWltZVR5cGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IGNyZWF0ZUNvbnRlbnQocm93czogQXJyYXk8YW55Piwgb3B0aW9ucz86IFQpOiBhbnk7XG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRNaW1lVHlwZSgpOiBNaW1lO1xufVxuIl19