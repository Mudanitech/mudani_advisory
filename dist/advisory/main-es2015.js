(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-questionaire/add-questionaire.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-questionaire/add-questionaire.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!-- <pre>{{questionForm.value | json}}</pre> -->\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"fixed left-0 right-0 z-100\" style=\"top: 64px;\">\n            <div class=\"breadNav_nav__3bu0T site-main DisFlex bg-white\">\n                <div class=\"ant-breadcrumb\"><span><span class=\"ant-breadcrumb-link\">Questionnaire</span><span\n                            class=\"ant-breadcrumb-separator\">&gt;</span></span><span><span\n                            class=\"ant-breadcrumb-link\">Add</span><span\n                            class=\"ant-breadcrumb-separator\">&gt;</span></span><span><span\n                            class=\"ant-breadcrumb-link\">Custom\n                            Questions</span><span class=\"ant-breadcrumb-separator\">&gt;</span></span></div>\n                <div><button type=\"button\" class=\"ant-btn\" [routerLink]=\"['/questionnaire']\"><span>Back</span></button>\n                    <button type=\"button\" class=\"ant-btn ml-8 ant-btn-primary\" [disabled]=\"form.invalid\"\n                        (click)=\"saveQuestionaire()\"><span>Next</span></button></div>\n            </div>\n        </div>\n        <div class=\"Small-Wrapper\" style=\"background-color: #F6F8FC;\">\n            <div class=\"HelpArea b-questionnaire\">\n                <form [formGroup]=\"form\">\n                    <div class=\"questionnaire-content goal-questionnaire-root mt-16\" style=\"padding-top: 40px;\">\n                        <div class=\"site-main\">\n                            <div class=\"ant-card tool-choice\">\n                                <div class=\"tool-title\">Form</div><span (click)=\"addQuestion()\" class=\"choices\"><i\n                                        class=\"anticon fa fa-plus-circle\"></i>Multiple\n                                    Choice</span><span class=\"choices\"><i\n                                        class=\"anticon fa fa-plus-circle\"></i>Dropdown</span>\n                            </div>\n                            <div class=\"edit-questions-content\">\n                                <div class=\"goal-question-section\">\n                                    <div class=\"ant-row ant-form-item is-valid is-pristine is-untouched is-unfocused\">\n                                        <div class=\"ant-form-item-label\"><label class=\"ant-form-item-required\"\n                                                title=\"\"><span class=\"itemProps-label\">Title</span></label></div>\n                                        <div class=\"ant-form-item-control-wrapper\">\n                                            <div class=\"ant-form-item-control\"><span class=\"ant-form-item-children\">\n                                                    <input placeholder=\"Title\" type=\"text\" formControlName=\"title\"\n                                                        class=\"ant-input\" value=\"Goal Invest questionnaire\"></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"ant-row ant-form-item is-valid is-pristine is-untouched is-unfocused\">\n                                        <div class=\"ant-form-item-label\"><label class=\"ant-form-item-required\"\n                                                title=\"\"><span class=\"itemProps-label\">Description</span></label></div>\n                                        <div class=\"ant-form-item-control-wrapper\">\n                                            <div class=\"ant-form-item-control\"><span class=\"ant-form-item-children\">\n                                                    <textarea formControlName=\"description\" placeholder=\"description\"\n                                                        class=\"ant-input\"\n                                                        style=\"height: 73px; min-height: 73px; max-height: 325px; overflow-y: hidden;\">Help your clients find a suitable investment strategy. Your investing strategy should reflect the kind of investor you are your personal investor profile. This quiz will help you determine your profile and then match it to an investment strategy that's designed for investors like you.</textarea></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n\n\n\n\n                                <div formArrayName=\"questions\">\n                                    <div\n                                        *ngFor=\"let question of form['controls'].questions['controls']; let ix=index; let lc = count;\">\n                                        <div formGroupName=\"{{ix}}\" class=\"questions\">\n                                            <!-- hello {{form.controls.questions.controls[ix].controls.answers.controls.length}} -->\n\n                                            <div class=\"goal-question-section\">\n                                                <div class=\"goal-question-item\">\n                                                    <div class=\"goal-question-title\">\n                                                        <div\n                                                            class=\"ant-row ant-form-item ant-form-item-no-colon is-valid is-pristine is-untouched is-unfocused\">\n                                                            <div class=\"ant-form-item-label\"><label\n                                                                    class=\"ant-form-item-required\"\n                                                                    title=\"Q2\">Q{{ix+1}}</label>\n                                                            </div>\n                                                            <div class=\"ant-form-item-control-wrapper\">\n                                                                <div class=\"ant-form-item-control\"><span\n                                                                        class=\"ant-form-item-children\">\n                                                                        <textarea formControlName=\"question\"\n                                                                            class=\"ant-input\"\n                                                                            style=\"height: 31px; min-height: 31px; max-height: 136px; overflow-y: hidden;\">Once I begin withdrawing funds from my investments, I plan to spend all of the funds in:</textarea></span>\n                                                                    <!-- <ng-container\n                                                                        *ngIf=\"question.get('question').hasError('required') && question.get('question').touched\">\n                                                                        <span class=\"errorMsg\">Input Percentage</span>\n                                                                    </ng-container> -->\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"ant-col-6 choice-record\"><span>Multiple choice:\n                                                                1~10</span></div>\n                                                    </div>\n                                                    <div class=\"goal-question-content\">\n\n\n                                                        <div formArrayName=\"answers\">\n                                                            <div\n                                                                *ngFor=\"let Y of question['controls'].answers['controls']; let iy=index\">\n                                                                <div formGroupName=\"{{iy}}\" class=\"Ys\">\n                                                                    <div class=\"question-option-wrap\">\n                                                                        <div\n                                                                            class=\"ant-row ant-form-item ant-form-item-no-colon is-valid is-pristine is-untouched is-unfocused\">\n                                                                            <div class=\"ant-form-item-label\"><label\n                                                                                    class=\"ant-form-item-required\"\n                                                                                    title=\"1.\">{{iy+1}}.</label>\n                                                                            </div>\n                                                                            <div class=\"ant-form-item-control-wrapper\">\n                                                                                <div class=\"ant-form-item-control\"><span\n                                                                                        class=\"ant-form-item-children\">\n                                                                                        <textarea\n                                                                                            formControlName=\"answer\"\n                                                                                            class=\"ant-input\"\n                                                                                            style=\"height: 31px; min-height: 31px; max-height: 136px; overflow-y: hidden;\"></textarea></span>\n                                                                                </div>\n                                                                            </div>\n                                                                        </div>\n\n                                                                        <div class=\"ant-col-6 flex-colume record\">\n                                                                            <div\n                                                                                class=\"ant-row ant-form-item is-valid is-pristine is-untouched is-unfocused\">\n                                                                                <div class=\"ant-form-item-label\"><label\n                                                                                        class=\"ant-form-item-required\"\n                                                                                        title=\"value\">value</label>\n                                                                                </div>\n                                                                                <div\n                                                                                    class=\"ant-form-item-control-wrapper\">\n                                                                                    <div class=\"ant-form-item-control\">\n                                                                                        <span\n                                                                                            class=\"ant-form-item-children\"><input\n                                                                                                type=\"text\"\n                                                                                                class=\"ant-input\"\n                                                                                                (keypress)=\"numberOnly($event)\"\n                                                                                                formControlName=\"value\"></span>\n                                                                                    </div>\n                                                                                </div>\n                                                                            </div>\n                                                                        </div>\n\n                                                                        <div *ngIf=\"iy!=0\" (click)=\"removeAnswer(ix,iy)\"\n                                                                            class=\"remove-icon\"><a\n                                                                                href=\"javaScript:void(0)\"><i\n                                                                                    class=\"anticon  fa fa-times\"></i></a>\n                                                                        </div>\n\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n\n\n\n\n                                                        <div *ngIf=\"form.controls.questions.controls[ix].controls.answers.controls.length<5\"\n                                                            class=\"add-option\" (click)=\"addAnswer(ix)\"><a\n                                                                class=\"link-button-root link-button-default\"\n                                                                href=\"javaScript:void(0)\"><i\n                                                                    class=\"anticon fa fa-plus-circle\"></i>\n                                                                Add\n                                                                option</a>\n                                                        </div>\n\n                                                    </div>\n                                                </div>\n                                                <div class=\"goal-question-footer\">\n                                                    <div class=\"ant-row-flex ant-row-flex-space-between\">\n                                                        <div class=\"\">\n                                                            <div><span><i class=\"choice-icon\"></i> Multiple\n                                                                    Choice</span></div>\n                                                        </div>\n                                                        <div class=\"\"><a *ngIf=\"ix!=0\" (click)=\"move(-1, ix)\"\n                                                                class=\"footer-btn link-button-root link-button-default\"\n                                                                href=\"javaScript:void(0)\"><i\n                                                                    class=\"anticon fa fa-caret-square-o-up\"\n                                                                    style=\"font-size: 16px;\"></i></a>\n                                                            <a *ngIf=\"ix != (lc-1)\" (click)=\"move(1, ix)\"\n                                                                class=\"footer-btn disabled-btn link-button-root link-button-default link-button-disabled\"\n                                                                href=\"javaScript:void(0)\"><i\n                                                                    class=\"anticon fa fa-caret-square-o-down\"\n                                                                    style=\"font-size: 16px;\"></i></a>\n                                                            <a *ngIf=\"ix!=0\" (click)=\"removeQuestion(ix)\"\n                                                                class=\"footer-btn link-button-root link-button-default\"\n                                                                href=\"javaScript:void(0)\"><i\n                                                                    class=\"anticon fa fa-trash-o\"\n                                                                    style=\"font-size: 16px;\"></i></a>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- <button type=\"button\" (click)=\"saveQuestionaire()\">Save Data</button> -->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-ticker/add-ticker.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-ticker/add-ticker.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ngx-spinner></ngx-spinner>\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"HelpArea\">\n                    <div class=\"tab-content\" id=\"myTabContent\">\n                        <div class=\"tab-pane fade  show active\" id=\"Models\" role=\"tabpanel\"\n                            aria-labelledby=\"Models-tab\">\n                            <div class=\"enterKey\">\n                                <div class=\"SearchBox\">\n                                    <div class=\"SearchBox searchIcon\">\n                                        <form [formGroup]=\"form\">\n                                            <input type=\"text\" formControlName=\"title\" (keyup.enter)=\"searchTicker()\"\n                                                style=\"width: 250px;\" placeholder=\"Search\">\n                                            <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                                    src=\"assets/images/search.svg\" alt=\"\"></a>\n                                        </form>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"TableList\" style=\"padding-top: 40px;\">\n                                <div class=\"mainTable \">\n                                    <table class=\"table table-bordered \">\n                                        <thead>\n                                            <tr>\n                                                <th>Ticker Type</th>\n                                                <th>Ticker Image</th>\n                                                <th>Symbol</th>\n                                                <th>Company Name</th>\n                                                <th>ISIN</th>\n                                                <th>CUSIP</th>\n                                                <th>Country</th>\n                                                <th>MIC</th>\n                                                <th>Currency</th>\n                                                <th>Source</th>\n                                                <!-- <th>IdentType</th> -->\n                                                <th>Exchange</th>\n                                            </tr>\n                                        </thead>\n\n                                        <tbody>\n                                            <tr *ngFor=\"let list of getTickerListData; let i = index\">\n                                                <td>\n                                                    <ng-container *ngIf=\"list.tickerType==1\">Popular Stocks\n                                                    </ng-container>\n                                                    <ng-container *ngIf=\"list.tickerType==2\">Popular Funds\n                                                    </ng-container>\n                                                    <ng-container *ngIf=\"list.tickerType==3\">Popular Themes\n                                                    </ng-container>\n                                                </td>\n                                                <td><img [src]=\"list?.tickerImage\" style=\"width: 30px;height: 30px;\" />\n                                                </td>\n                                                <td>{{list?.symbol}}</td>\n                                                <td>{{list?.companyName}}</td>\n                                                <td>{{list?.isin}}</td>\n                                                <td>{{list?.cusip}}</td>\n                                                <td>{{list?.country}}</td>\n                                                <td>{{list?.mic}}</td>\n                                                <td>{{list?.currency}}</td>\n                                                <td>{{list?.source}}</td>\n                                                <!-- <td>{{list?.identType}}</td> -->\n                                                <td>{{list?.exchange}}</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"ModalBox\">\n    <div id=\"refer\" class=\"modal \" role=\"dialog\">\n        <div tabindex=\"-1\" class=\"ant-modal-wrap \" role=\"dialog\">\n            <form [formGroup]=\"form\">\n                <div role=\"document\" class=\"ant-modal matching-modal\">\n                    <div tabindex=\"0\" style=\"width: 0px; height: 0px; overflow: hidden;\">sentinelStart</div>\n                    <div class=\"ant-modal-content\">\n                        <div class=\"ant-modal-body\">\n                            <div class=\"text-center font-16 font-bold mb-16\" style=\"margin-bottom: 30px;\">Ticker Detail\n                            </div>\n                            <hr>\n                            <label>Symbol : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.symbol}}</span></label><br>\n\n                            <label>Company Name : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.companyName}}</span></label><br>\n\n                            <label>ISIN : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.isin}}</span></label><br>\n\n                            <label>CUSIP : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.cusip}}</span></label><br>\n\n                            <label>Country : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.country}}</span></label><br>\n\n                            <label>MIC : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.mic}}</span></label><br>\n\n                            <label>Currency : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.currency}}</span></label><br>\n\n                            <label>Source : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.source}}</span></label><br>\n\n                            <label>Ident Type : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.identType}}</span></label><br>\n\n                            <label>Exchange : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.exchange}}</span></label><br>\n\n                            <hr>\n                            <form [formGroup]=\"addTickerform\">\n                                <label>Select Type</label>\n                                <div class=\"ant-row ant-form-item is-invalid is-pristine is-untouched is-unfocused\">\n                                    <div class=\"ant-form-item-control-wrapper\">\n                                        <div class=\"ant-form-item-control\"><span class=\"ant-form-item-children\"><span\n                                                    class=\"w-full ant-cascader-picker w-full\" tabindex=\"0\"><span\n                                                        class=\"ant-cascader-picker-label\"></span>\n                                                    <select name=\"\" formControlName=\"tickerType\" id=\"\"\n                                                        class=\"ant-input\">\n                                                        <option [ngValue]=\"1\"> Popular Stocks </option>\n                                                        <option [ngValue]=\"2\"> Popular Funds </option>\n                                                        <option [ngValue]=\"3\"> Popular Themes </option>\n                                                    </select>\n                                                </span></span>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <!-- <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Image</label>\n                                        <input type=\"file\" formControlName=\"tickerImage\"\n                                            (change)=\"onFileSelected($event)\" class=\"form-control\" placeholder=\"Name\">\n                                    </div>\n                                </div> -->\n                                <br>\n                            </form>\n                            <div class=\"text-center mt-24\"><button (click)=\"closePops('refer')\" type=\"button\"\n                                    class=\"ant-btn my-0 mx-4\"><span>Cancel</span></button>\n                                <button type=\"button\" [disabled]=\"addTickerform.invalid\" (click)=\"saveData()\"\n                                    class=\"ant-btn my-0 mx-4 ant-btn-primary\"><span>Save</span></button></div>\n                        </div>\n                    </div>\n                    <div tabindex=\"0\" style=\"width: 0px; height: 0px; overflow: hidden;\">sentinelEnd</div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n<div class=\"ModalBox\">\n    <div id=\"referError\" class=\"modal \" role=\"dialog\">\n        <div tabindex=\"-1\" class=\"ant-modal-wrap \" role=\"dialog\">\n            <form [formGroup]=\"form\">\n                <div role=\"document\" class=\"ant-modal matching-modal\">\n                    <div tabindex=\"0\" style=\"width: 0px; height: 0px; overflow: hidden;\">sentinelStart</div>\n                    <div class=\"ant-modal-content\">\n                        <div class=\"ant-modal-body\">\n                            <div class=\"text-center font-16 font-bold mb-16\" style=\"margin-bottom: 30px;\">Ticker Detail\n                            </div>\n                            <hr>\n                            <label style=\"margin-left: 78px;font-size: 19px;\">Ticker is not available.</label><br>\n\n\n\n                            <div class=\"text-center mt-24\">\n                                <button type=\"button\" (click)=\"closePops('referError')\"\n                                    class=\"ant-btn my-0 mx-4 ant-btn-primary\"><span>Okay</span></button></div>\n                        </div>\n                    </div>\n                    <div tabindex=\"0\" style=\"width: 0px; height: 0px; overflow: hidden;\">sentinelEnd</div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <router-outlet></router-outlet> -->\n<router-outlet (activate)=\"onActivate($event)\" ></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/category-detail/category-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/category-detail/category-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"enterKey\">\n                    <div class=\"SearchBox\">\n                        <a href=\"javaScript:void(0)\" (click)=backClicked()><< Back</a>\n                    </div>\n                    <!-- <div class=\"SearchBox SearchBoxModel\">\n                        <a href=\"javaScript:void(0)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>Edit</a>\n                    </div> -->\n                </div>\n                <div class=\"bread mt-3\">\n                    <nav aria-label=\"breadcrumb\">\n                        <ol class=\"breadcrumb\">\n                          <li class=\"breadcrumb-item\">Self Directed</li>\n                          <li class=\"breadcrumb-item active\" aria-current=\"page\">Category Detail</li>\n                          <p>Edited on: 30, sept,20</p>\n                        </ol>\n                      </nav>\n                </div>\n\n                <div class=\"adjust\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3 colAdjust\">\n                            <h3>Name <span>FLAGSHIPS</span></h3>\n                            <h3>Assigned Model <span>FLAGSHIPS</span></h3>\n                        </div>\n                        <div class=\"col-md-3 colAdjust\">\n                            <h3>Description <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate </span></h3>\n                        </div>\n                        <div class=\"col-md-6 chartMain colAdjust\">\n                            <!-- <div class=\"enterKey\">\n                                <div class=\"SearchBox\">\n                                    <form action=\"\">\n                                        <input type=\"text\" placeholder=\"Search Top Holdings\">\n                                        <button type=\"button\">Apply</button>\n                                    </form>\n                                </div>\n                            </div> -->\n                            <div class=\"chartCatgry\">\n                                <h3 class=\"text-left\"><span><strong> Self Directed Category-1</strong></span>  </h3>\n                            </div>\n                            <div class=\"amznMain\">\n                                <h5 class=\"sky Blue viewArea pb-2\">AMZN</h5>\n                                <div class=\"amznMainInner categoryAmznMainInner\">\n                                    <div class=\"amznLeft\">\n                                        <div class=\"amznLeftInner\">\n                                            <img src=\"assets/images/logo.png\" alt=\"\">\n                                        </div>\n                                    </div>\n                                    <div class=\"amznMid\">\n                                        <div class=\"amznMidInner\">\n                                            <div id=\"chart-7\">\n                                                <apx-chart\n                                                  [series]=\"chartLineSparkline7Options.series\"\n                                                  [chart]=\"commonLineSparklineOptions.chart\"\n                                                  [tooltip]=\"commonLineSparklineOptions.tooltip\"\n                                                ></apx-chart>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"amznRight\">\n                                        <h4>$234</h4>\n                                    </div>\n                                </div>\n                                <h5 class=\"sky Blue viewArea pb-2\">AMZN</h5>\n                                <div class=\"amznMainInner categoryAmznMainInner\">\n                                    <div class=\"amznLeft\">\n                                        <div class=\"amznLeftInner\">\n                                            <img src=\"assets/images/logo.png\" alt=\"\">\n                                        </div>\n                                    </div>\n                                    <div class=\"amznMid\">\n                                        <div class=\"amznMidInner\">\n                                            <div id=\"chart-8\">\n                                                <apx-chart\n                                                  [series]=\"chartLineSparkline8Options.series\"\n                                                  [chart]=\"commonLineSparklineOptions.chart\"\n                                                  [tooltip]=\"commonLineSparklineOptions.tooltip\"\n                                                ></apx-chart>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"amznRight\">\n                                        <h4>$234</h4>\n                                    </div>\n                                </div>\n                                <h5 class=\"sky Blue viewArea pb-2\">AMZN</h5>\n                                <div class=\"amznMainInner categoryAmznMainInner\">\n                                    <div class=\"amznLeft\">\n                                        <div class=\"amznLeftInner\">\n                                            <img src=\"assets/images/logo.png\" alt=\"\">\n                                        </div>\n                                    </div>\n                                    <div class=\"amznMid\">\n                                        <div class=\"amznMidInner\">\n                                            <div id=\"chart-9\">\n                                                <apx-chart\n                                                  [series]=\"chartLineSparkline9Options.series\"\n                                                  [chart]=\"commonLineSparklineOptions.chart\"\n                                                  [tooltip]=\"commonLineSparklineOptions.tooltip\"\n                                                ></apx-chart>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"amznRight\">\n                                        <h4>$234</h4>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/client-detail1/client-detail1.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/client-detail1/client-detail1.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <!-- <ul class=\"nav nav-tabs MainTabAll\">\n                    <li class=\"nav-item \">\n                        <a class=\"nav-link \" [routerLink]=\"['/summary']\">Summary | Overview</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link active\" [routerLink]=\"['/client']\">Clients</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link \" [routerLink]=\"['/investing']\">Investing</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/transactions']\">Transactions</a>\n                    </li>\n                </ul> -->\n\n                <div class=\"tab-content\" id=\"myTabContent\">\n\n\n                    <div class=\"tab-pane fade  show active\" id=\"Clients\" role=\"tabpanel\" aria-labelledby=\"Clients-tab\">\n                        <!-- Client Inner tab START -->\n                        <div class=\"HelpArea\">\n                            <ul class=\"nav nav-tabs boxs justify-content-end\" id=\"myTab\" role=\"tablist\" style=\"margin-bottom: 40px;\">\n                                <li class=\"nav-item \">\n                                    <a class=\"nav-link \" id=\"Performance-tab\" data-toggle=\"tab\" href=\"#Performance\"\n                                        role=\"tab\" aria-controls=\"Performance\" aria-selected=\"true\">Performance</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link active\" id=\"Holdings-tab\" data-toggle=\"tab\" href=\"#Holdings\"\n                                        role=\"tab\" aria-controls=\"Holdings\" aria-selected=\"false\">Holdings</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" id=\"Held-tab\" data-toggle=\"tab\" href=\"#Held\" role=\"tab\"\n                                        aria-controls=\"Held\" aria-selected=\"false\">Held Away Accounts</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" id=\"Activity-tab\" data-toggle=\"tab\" href=\"#Activity\" role=\"tab\"\n                                        aria-controls=\"Activity\" aria-selected=\"false\">Activity</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" id=\"Fees-tab\" data-toggle=\"tab\" href=\"#Fees\" role=\"tab\"\n                                        aria-controls=\"Fees\" aria-selected=\"false\">Fees</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" id=\"Contact-tab\" data-toggle=\"tab\" href=\"#Contact\" role=\"tab\"\n                                        aria-controls=\"Contact\" aria-selected=\"false\">Contact Card</a>\n                                </li>\n                            </ul>\n\n                            <div class=\"tab-content\" id=\"myTabContent\">\n                                <div class=\"tab-pane fade \" id=\"Performance\" role=\"tabpanel\"\n                                    aria-labelledby=\"Performance-tab\">\n\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <div class=\"HelpContent\">\n                                                <div class=\"clientName pb-3\">\n                                                    <h4>Client Name : Alison Maxwell</h4>\n                                                    <h4>Total AUM : $234,232</h4>\n                                                </div>\n                                                <div class=\"clientDrop\">\n                                                    <select name=\"cars\" id=\"cars\">\n                                                        <option value=\"first\">Account</option>\n                                                        <option value=\"second\">Account-1</option>\n                                                        <option value=\"third\">Account-2</option>\n                                                    </select>\n                                                </div>\n                                                <!-- <div class=\"ClientAccount pb-3\">\n                                                    <h4><strong> Account 1</strong></h4>\n                                                    <h5>Account Number : 23456543</h5>\n                                                    <h5>Account Type : Joint Account</h5>\n                                                    <h5>Managed Account </h5>\n                                                    <h5>Portfolio : Portfolio-1</h5>\n                                                    <h5>Total Account Value : $23456543</h5>\n                                                </div> -->\n                                                <div class=\"ClientAccount clietsDett pb-3\">\n                                                    <h2>Total Balance <span>$ 3,549,303</span></h2>\n                                                    <ul>\n                                                        <li><span class=\"netName\">Net Deposits\n                                                            </span><span class=\"netValue\">$ 200</span></li>\n                                                        <li><span class=\"netName\">Net Withdrawals\n                                                            </span><span class=\"netValue\">$ 200</span></li>\n                                                        <li><span class=\"netName\">Net Earnings\n                                                            </span><span class=\"netValue\">$ 200</span></li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <!-- <h2 class=\"sky text-center pt-4\">Client Fees Graph</h2> -->\n                                            <a href=\"javaScript:void(0)\" class=\"circleLink\"><i\n                                                    class=\"fa fa-plus-circle  mr-1\" aria-hidden=\"true\"></i>Trade</a>\n                                            <div class=\"aumData\">\n                                                <div class=\"aumText\">\n                                                    <h6 class=\"\">AUM <span> (as of 12/04/2020)</span></h6>\n                                                </div>\n                                                <div class=\"aumRight\">\n                                                    <div class=\"aumMonth\">\n                                                        <ul class=\"ulAumFive\">\n                                                            <li class=\"active\">YTD</li>\n                                                            <li>3M</li>\n                                                            <li>6M</li>\n                                                            <li>1Y</li>\n                                                            <li>5Y</li>\n                                                            <li>ALL</li>\n                                                        </ul>\n                                                    </div>\n                                                    <div class=\"aumMore\">\n                                                        <a href=\"javaScript:void(0)\">[ More ]</a>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"filterDay\">\n                                                <div class=\"filterDay1\">\n                                                    <h6>Day <span class=\"Red\">-4.16%</span></h6>\n                                                </div>\n                                                <div class=\"filterDay1\">\n                                                    <h6>Last 7 Day <span class=\"Red\">-4.16%</span></h6>\n                                                </div>\n                                                <div class=\"filterDay1\">\n                                                    <h6>Last 30 Day <span class=\"Red\">-4.16%</span></h6>\n                                                </div>\n                                                <div class=\"filterDay1\">\n                                                    <h6>Total Assets <span><strong></strong> $1.76M</span></h6>\n                                                </div>\n                                            </div>\n                                            <div id=\"graphdiv\" style=\"height: 400px\"></div>\n                                        </div>\n                                    </div>\n                                    <div class=\"newGraphTable\" style=\"padding-top: 30px;\">\n                                        <h2 style=\"padding-bottom: 20px;\">Performance</h2>\n                                        <div class=\"TableList\">\n                                            <div class=\"mainTable \">\n                                                <table class=\"table table-bordered \" style=\"width: 100%;\">\n                                                    <thead>\n                                                        <tr>\n                                                            <th>Name\n                                                            </th>\n                                                            <th>Type\n                                                            </th>\n                                                            <th>Account type </th>\n                                                            <th>YTD return </th>\n                                                            <th>Balance  </th>\n                                                        </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                        <tr>\n                                                            <td> Alison Maxwell</td>\n                                                            <td>IRA</td>\n                                                            <td>TD</td>\n                                                            <td>9.20%</td>\n                                                            <td>$ 2000</td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td> Alison Maxwell</td>\n                                                            <td>IRA</td>\n                                                            <td>TD</td>\n                                                            <td>9.20%</td>\n                                                            <td>$ 2000</td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td> Alison Maxwell</td>\n                                                            <td>IRA</td>\n                                                            <td>TD</td>\n                                                            <td>9.20%</td>\n                                                            <td>$ 2000</td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td> Alison Maxwell</td>\n                                                            <td>IRA</td>\n                                                            <td>TD</td>\n                                                            <td>9.20%</td>\n                                                            <td>$ 2000</td>\n                                                        </tr>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n\n                                <div class=\"tab-pane fade show active\" id=\"Holdings\" role=\"tabpanel\"\n                                    aria-labelledby=\"Holdings-tab\">\n                                    <div class=\"row chartMain pb-4\">\n                                        <div class=\"col-md-6\">\n                                            <div class=\"ClientAccount pb-3\">\n                                                <div class=\"clientDrop\" style=\"margin-bottom: 20px;\">\n                                                    <select name=\"cars\" id=\"cars\">\n                                                        <option value=\"first\">Account</option>\n                                                        <option value=\"second\">Account-1</option>\n                                                        <option value=\"third\">Account-2</option>\n                                                    </select>\n                                                </div>\n                                                <!-- <h4><strong>Self Directed</strong></h4> -->\n                                                <h6><a [routerLink]=\"['/self-directed-detail']\">Portfolio Name : Self\n                                                        Directed</a></h6>\n                                            </div>\n                                            <!-- <div class=\"chart chart22\" id=\"chart\"></div> -->\n\n                                            <div class=\"newCharts\">\n                                                <div id=\"chart\">\n                                                    <apx-chart\n                                                      [series]=\"chartOptions.series\"\n                                                      [chart]=\"chartOptions.chart\"\n                                                      [labels]=\"chartOptions.labels\"\n                                                      [title]=\"chartOptions.title\"\n                                                      [theme]=\"chartOptions.theme\"\n                                                      [responsive]=\"chartOptions.responsive\"\n                                                    ></apx-chart>\n                                                  </div>\n                                            </div>\n                                        </div>\n                                        <!-- <div class=\"col-md-6\">\n                                            <div class=\"chartCatgry\">\n                                                <a [routerLink]=\"['/category-detail']\">\n                                                    <h3 style=\"color:#008ffb;\">Category-1 <span>38%</span></h3>\n                                                </a>\n                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum\n                                                    dolore, nesciunt at impedit cupiditate reiciendis, neque voluptatum\n                                                    suscipit sed</p>\n                                            </div>\n                                            <div class=\"chartCatgry\">\n                                                <a [routerLink]=\"['/category-detail']\">\n                                                    <h3 style=\"color:#00e396;\">Category-2 <span>48%</span></h3>\n                                                </a>\n                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum\n                                                    dolore, nesciunt at impedit cupiditate reiciendis, neque voluptatum\n                                                    suscipit sed</p>\n                                            </div>\n                                            <div class=\"chartCatgry\">\n                                                <a [routerLink]=\"['/category-detail']\">\n                                                    <h3 style=\"color:#feb019;\">Category-3 <span>28%</span></h3>\n                                                </a>\n                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum\n                                                    dolore, nesciunt at impedit cupiditate reiciendis, neque voluptatum\n                                                    suscipit sed</p>\n                                            </div>\n                                        </div> -->\n                                    </div>\n                                    <div class=\"newGraphTable\">\n                                        <h2 style=\"padding-bottom: 20px;\">Holdings</h2>\n                                        <div class=\"TableList\">\n                                            <div class=\"mainTable \">\n                                                <table class=\"table table-bordered \" style=\"width: 100%;\">\n                                                    <thead>\n                                                        <tr>\n                                                            <th>Ticker\n                                                            </th>\n                                                            <th>Name of company\n                                                            </th>\n                                                            <th>Price</th>\n                                                            <th>Weighting </th>\n                                                            <th>Quantity  </th>\n                                                            <th>Total value\n                                                            </th>\n                                                        </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                        <tr>\n                                                            <td> <a href=\"javascript:void(0)\" class=\"sky Blue viewArea pb-2\">AMZN</a></td>\n                                                            <td>Mobulous</td>\n                                                            <td>$ 45</td>\n                                                            <td> Welcome back, <br>\n                      Dan</td>\n                                                            <td>6</td>\n                                                            <td>$ 2000</td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td> <a href=\"javascript:void(0)\"  class=\"sky Blue viewArea pb-2\">AMZN</a></td>\n                                                            <td>Mobulous</td>\n                                                            <td>$ 45</td>\n                                                            <td> Welcome back, <br>\n                      Dan</td>\n                                                            <td>6</td>\n                                                            <td>$ 2000</td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td> <a href=\"javascript:void(0)\"  class=\"sky Blue viewArea pb-2\">AMZN</a></td>\n                                                            <td>Mobulous</td>\n                                                            <td>$ 45</td>\n                                                            <td> Welcome back, <br>\n                      Dan</td>\n                                                            <td>6</td>\n                                                            <td>$ 2000</td>\n                                                        </tr>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n                                        </div>\n\n                                    </div>\n\n                                    <!-- <div class=\"row chartMain pb-4\">\n                                        <div class=\"col-md-6\">\n                                            <div class=\"ClientAccount pb-3\">\n                                                <h4><strong> Account-2 : Managed Account</strong></h4>\n                                                <h6><a [routerLink]=\"['/managed-account-detail']\">Portfolio Name :\n                                                        Managed Account</a></h6>\n                                            </div>\n                                            <div class=\"chart\" id=\"chart2\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <h3 class=\"pb-4\">Risk Level : Conservation</h3>\n                                            <div class=\"chartCatgry\">\n                                                <a [routerLink]=\"['/category-detail']\">\n                                                    <h3 style=\"color:#008ffb;\">Category-1 <span>38%</span></h3>\n                                                </a>\n                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum\n                                                    dolore, nesciunt at impedit cupiditate reiciendis, neque voluptatum\n                                                    suscipit sed</p>\n                                            </div>\n                                            <div class=\"chartCatgry\">\n                                                <a [routerLink]=\"['/category-detail']\">\n                                                    <h3 style=\"color:#00e396;\">Category-2 <span>48%</span></h3>\n                                                </a>\n                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum\n                                                    dolore, nesciunt at impedit cupiditate reiciendis, neque voluptatum\n                                                    suscipit sed</p>\n                                            </div>\n                                            <div class=\"chartCatgry\">\n                                                <a [routerLink]=\"['/category-detail']\">\n                                                    <h3 style=\"color:#feb019;\">Category-3 <span>28%</span></h3>\n                                                </a>\n                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum\n                                                    dolore, nesciunt at impedit cupiditate reiciendis, neque voluptatum\n                                                    suscipit sed</p>\n                                            </div>\n                                        </div> \n                                    </div> -->\n\n                                    <!-- <div class=\"row chartMain pb-4\">\n                                        <div class=\"col-md-6\">\n                                            <div class=\"ClientAccount pb-3\">\n                                                <h4><strong> Account-3 : Thematic</strong></h4>\n                                                <h6><a [routerLink]=\"['/thematic-detail']\">Portfolio Name : Thematic</a>\n                                                </h6>\n                                            </div>\n                                            <div class=\"chart\" id=\"chart3\">\n                                            </div>\n                                        </div>\n                                         <div class=\"col-md-6\">\n                                            <div class=\"chartCatgry\">\n                                                <a [routerLink]=\"['/category-detail']\">\n                                                    <h3 style=\"color:#008ffb;\">Category-1 <span>38%</span></h3>\n                                                </a>\n                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum\n                                                    dolore, nesciunt at impedit cupiditate reiciendis, neque voluptatum\n                                                    suscipit sed</p>\n                                            </div>\n                                            <div class=\"chartCatgry\">\n                                                <a [routerLink]=\"['/category-detail']\">\n                                                    <h3 style=\"color:#00e396;\">Category-2 <span>48%</span></h3>\n                                                </a>\n                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum\n                                                    dolore, nesciunt at impedit cupiditate reiciendis, neque voluptatum\n                                                    suscipit sed</p>\n                                            </div>\n                                        </div> \n                                    </div> -->\n                                </div>\n\n                                <div class=\"tab-pane fade\" id=\"Held\" role=\"tabpanel\" aria-labelledby=\"Held-tab\">\n                                    <div class=\"totalClient totalClient-detail1 totalClient-detail11 pb-5\">\n                                        <div class=\"retailClient\">\n                                            <h5><span class=\"sky d-block\">$234543234</span>Total Held-Away Balance</h5>\n                                        </div>\n                                        <div class=\"retailClient\">\n                                            <h5><span class=\"sky d-block\">8</span>Total Linked Account</h5>\n                                        </div>\n                                    </div>\n                                    <!-- <div class=\"HelpContent\">\n                                        <div class=\"clientName pb-3\">\n                                            <h4 class=\"pb-2\">Client Name : Alison Maxwell</h4>\n                                        </div>\n                                        <div class=\"row client_detail1\">\n                                            <div class=\"col-md-6\">\n                                                <div class=\"ClientAccount pb-3\">\n                                                    <h4><strong>Linked Account : 1</strong></h4>\n                                                    <h5>Name of Bank : Bank of America</h5>\n                                                    <h5>Balance : $242,122</h5>\n                                                    <h5>Account Type : Joint Account </h5>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"col-md-6\">\n                                                <div class=\"ClientAccount pb-3\">\n                                                    <h4><strong> Account 2</strong></h4>\n                                                    <h5>Name of Bank : Bank of America</h5>\n                                                    <h5>Balance : $242,122</h5>\n                                                    <h5>Account Type : Credit Card </h5>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"col-md-6\">\n                                                <div class=\"ClientAccount pb-3\">\n                                                    <h4><strong> Account 3</strong></h4>\n                                                    <h5>Name of Bank : CHASE</h5>\n                                                    <h5>Balance : $242,122</h5>\n                                                    <h5>Account Type : Checking </h5>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                    </div> -->\n                                    <div class=\"newGraphTable\">\n                                        <h2 style=\"padding-bottom: 20px;\">Held Away Accounts</h2>\n                                        <div class=\"TableList\">\n                                            <div class=\"mainTable \">\n                                                <table class=\"table table-bordered \" style=\"width: 100%;\">\n                                                    <thead>\n                                                        <tr>\n                                                     <th>Name of bank \n                                                    </th>\n                                                    <th>Account type\n                                                    </th>\n                                                    <th>Balance</tr>\n                                                    </thead>\n                                                    <tbody>\n                                                        <tr>\n                                                     <td>Bank of America</td>\n                                                     <td>Current Account</td>\n                                                     <td>$ 4000</td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td>Bank of America</td>\n                                                            <td>Current Account</td>\n                                                            <td>$ 4000</td>\n                                                               </tr>\n                                                               <tr>\n                                                                <td>Bank of America</td>\n                                                                <td>Current Account</td>\n                                                                <td>$ 4000</td>\n                                                                   </tr>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n\n                                <div class=\"tab-pane fade\" id=\"Activity\" role=\"tabpanel\" aria-labelledby=\"Activity-tab\">\n                                    <h2 style=\"padding-bottom: 20px;\">Activity</h2>\n                                    <div class=\"recentAct\">\n                                        <div class=\"searchBar\">\n                                            <div class=\"searchLeft\">\n                                                <div class=\"filterFlex filterFlexnew\">\n                                                    <div class=\"SearchBox searchIcon\">\n                                                        <form action=\"\">\n                                                            <input type=\"text\" style=\"width: 250px;\" placeholder=\"Search\">\n                                                            <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                                                    src=\"assets/images/search.svg\" alt=\"\"></a>\n                                                        </form>\n                                                        <a href=\"javaScript:void(0)\">\n                                                            <img class=\"csv img-fluid\" src=\"assets/images/csv.svg\">Download</a>\n                                                    </div>\n                                                    <div class=\"allAct\">\n                                                        <select name=\"activity\" id=\"activity\">\n                                                            <option value=\"activity0\">Activity</option>\n                                                            <option value=\"activity1\">DEP</option>\n                                                            <option value=\"activity2\">WITH</option>\n                                                            <option value=\"activity3\">FEES</option>\n                                                            <option value=\"activity4\">AO</option>\n                                                            <option value=\"activity5\">CNCL</option>\n                                                            <option value=\"activity6\">REFR</option>\n                                                            \n                                                        </select>\n                                                        <select name=\"activity\" id=\"activity\" style=\"margin-left: 25px;\">\n                                                            <option value=\"times0\">All Times</option>\n                                                            <option value=\"times2\">1 Month</option>\n                                                            <option value=\"times3\">3 Months</option>\n                                                            <option value=\"times4\">6 months</option>\n                                                            <option value=\"times5\">1 Year</option>\n                                                        </select>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"TableList\">\n                                            <div class=\"mainTable \">\n                                                <table class=\"table table-bordered \" style=\"width: 100%;\">\n                                                    <tbody>\n                                                        <tr>\n                                                            <td><a href=\"javascript:void(0)\" class=\"colorTer\">FEES</a></td>\n                                                            <td>01|12|2020</td>\n                                                            <td>July Fee billings run ready to excute.</td>\n                                                            <td><a href=\"javascript:void(0)\" class=\"view\">view</a></td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td><a href=\"javascript:void(0)\" class=\"colorTer\">FEES</a></td>\n                                                            <td>01|12|2020</td>\n                                                            <td>July Fee billings run ready to excute.</td>\n                                                            <td><a href=\"javascript:void(0)\" class=\"view\">view</a></td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td><a href=\"javascript:void(0)\" class=\"colorTer\">FEES</a></td>\n                                                            <td>01|12|2020</td>\n                                                            <td>July Fee billings run ready to excute.</td>\n                                                            <td><a href=\"javascript:void(0)\" class=\"view\">view</a></td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td><a href=\"javascript:void(0)\" class=\"colorTer\">FEES</a></td>\n                                                            <td>01|12|2020</td>\n                                                            <td>July Fee billings run ready to excute.</td>\n                                                            <td><a href=\"javascript:void(0)\" class=\"view\">view</a></td>\n                                                        </tr>\n                    \n                                                    </tbody>\n                                                </table>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"tab-pane fade\" id=\"Fees\" role=\"tabpanel\" aria-labelledby=\"Fees-tab\">\n                                    <!-- <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <div class=\"Small-Wrapper\">\n                                                <div class=\"Filter\">\n                                                    <div class=\"form-group\">\n                                                        <label>From Date</label>\n                                                        <input type=\"date\" class=\"form-control\">\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <label>To Date</label>\n                                                        <input type=\"date\" class=\"form-control\">\n                                                    </div>\n                                                    <div class=\"form-group\">\n                                                        <label>&nbsp;</label>\n                                                        <button class=\"Button\">Apply</button>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"HelpContent\">\n                                                    <div class=\"clientName pb-3\">\n                                                        <h4>Total Paid Fees : $10,000</h4>\n                                                        <h4>Total Months : 12Months</h4>\n                                                        <h4>Charges Every Month : $100</h4>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <div class=\"aumData\">\n                                                <div class=\"aumText\">\n                                                    <h6 class=\"\">AUM <span> (as of 12/04/2020)</span></h6>\n                                                </div>\n                                                <div class=\"aumRight\">\n                                                    <div class=\"aumMonth\">\n                                                        <ul class=\"ulAumSix\">\n                                                            <li class=\"active\">YTD</li>\n                                                            <li>3M</li>\n                                                            <li>6M</li>\n                                                            <li>1Y</li>\n                                                            <li>5Y</li>\n                                                            <li>ALL</li>\n                                                        </ul>\n                                                    </div>\n                                                    <div class=\"aumMore\">\n                                                        <a href=\"javaScript:void(0)\">[ More ]</a>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"filterDay\">\n                                                <div class=\"filterDay1\">\n                                                    <h6>Day <span class=\"Red\">-4.16%</span></h6>\n                                                </div>\n                                                <div class=\"filterDay1\">\n                                                    <h6>Last 7 Day <span class=\"Red\">-4.16%</span></h6>\n                                                </div>\n                                                <div class=\"filterDay1\">\n                                                    <h6>Last 30 Day <span class=\"Red\">-4.16%</span></h6>\n                                                </div>\n                                                <div class=\"filterDay1\">\n                                                    <h6>Total Assets <span><strong></strong> $1.76M</span></h6>\n                                                </div>\n                                            </div>\n                                            <div id=\"graphdivTwo\" style=\"height: 400px\"></div>\n                                        </div>\n                                    </div> -->\n                                    <div class=\"newGraphTable\">\n                                        <h2 style=\"padding-bottom: 20px;\">Fee Billings</h2>\n                                        <div class=\"TableList\">\n                                            <div class=\"mainTable \">\n                                                <table class=\"table table-bordered \" style=\"width: 100%;\">\n                                                    <thead>\n                                                        <tr>\n                                                            <th>Name\n                                                            </th>\n                                                            <th>Description\n                                                            </th>\n                                                            <th>Type</th>\n                                                            <th>Frequency </th>\n                                                            <th>Flat Fee  </th>\n                                                            <th>Bill Type\n                                                            </th>\n                                                            <th># of Accounts</th>\n                                                        </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                        <tr>\n                                                         <td>Mudani invest</td>\n                                                            <td>Good</td>\n                                                            <td>Flat</td>\n                                                            <td>$ 5</td>\n                                                            <td>$ 5</td>\n                                                            <td>In Arereas</td>\n                                                            <td>$ 2000</td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td>Mudani invest</td>\n                                                               <td>Good</td>\n                                                               <td>Flat</td>\n                                                               <td>$ 5</td>\n                                                               <td>$ 5</td>\n                                                               <td>In Arereas</td>\n                                                               <td>$ 2000</td>\n                                                           </tr>\n                                                           <tr>\n                                                            <td>Mudani invest</td>\n                                                               <td>Good</td>\n                                                               <td>Flat</td>\n                                                               <td>$ 5</td>\n                                                               <td>$ 5</td>\n                                                               <td>In Arereas</td>\n                                                               <td>$ 2000</td>\n                                                           </tr>\n                                                           <tr>\n                                                            <td>Mudani invest</td>\n                                                               <td>Good</td>\n                                                               <td>Flat</td>\n                                                               <td>$ 5</td>\n                                                               <td>$ 5</td>\n                                                               <td>In Arereas</td>\n                                                               <td>$ 2000</td>\n                                                           </tr>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n                                        </div>\n<div class=\"createNewww\">\n    <h2 style=\"padding: 40px 0px;\">Create Schedule</h2>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"Filter FilterSearch\">\n                <div class=\"form-group\">\n                    <label>Type of Schedule</label>\n                    <select id=\"\" formControlName=\"adjustedFrequency\" class=\"ant-input form-control forma\">\n                        <option value=\"fee\"> Flat Fee\n                        </option>\n                        <option value=\"AUM\"> AUM %\n                        </option>\n                        <option value=\"AUM\"> AUM % + Flat\n                        </option>\n                    </select>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"Filter FilterSearch\">\n                <div class=\"form-group\">\n                    <label>Schedule Name</label>\n                    <input type=\"text\" class=\"form-control forma\" placeholder=\"Please name this schedule\">                    \n                </div>\n            </div>\n    </div>\n\n    <div class=\"col-md-4\">\n        <div class=\"Filter FilterSearch\">\n            <div class=\"form-group\">\n                <label>Flat Fee</label>\n                <input type=\"text\" class=\"form-control forma\" placeholder=\"$0\">                    \n            </div>\n        </div>\n</div>\n<div class=\"col-md-4\">\n    <div class=\"Filter FilterSearch\">\n        <div class=\"form-group\">\n            <label>description</label>\n            <textarea type=\"text\" class=\"form-control forma\" placeholder=\"description\" style=\"height: 100px !important;min-height: auto !important;\"></textarea>                  \n        </div>\n    </div>\n</div>\n<div class=\"col-md-4\">\n    <div class=\"Filter FilterSearch\">\n        <div class=\"form-group\">\n            <label>Subplan Name</label>\n            <input type=\"text\" class=\"form-control forma\" placeholder=\"Name\">                    \n        </div>\n    </div>\n</div>\n<div class=\"col-md-4\">\n    <div class=\"Filter FilterSearch\">\n        <div class=\"form-group\">\n            <label>Subplan description</label>\n            <textarea type=\"text\" class=\"form-control forma\" placeholder=\"description\" style=\"min-height: auto !important;    height: 100px !important;\"></textarea>                  \n        </div>\n    </div>\n</div>\n\n<div class=\"col-md-4\">\n    <div class=\"Filter FilterSearch\">\n        <div class=\"form-group Allul Allul1\">\n            <label>Bill Timing</label>\n            <ul style=\"margin-top: 10px;\">\n             <li><a href=\"javascript:void(0)\" class=\"active\">In Advance</a></li>\n             <li><a href=\"javascript:void(0)\">In Arereas</a></li>\n         </ul>                  \n        </div>\n    </div>\n</div>\n<div class=\"col-md-4\">\n    <div class=\"Filter FilterSearch\">\n        <div class=\"form-group Allul Allul2\">\n            <label>Bill Timing</label>\n         <ul style=\"margin-top: 10px;\">\n             <li><a href=\"javascript:void(0)\">Monthly</a></li>\n             <li><a href=\"javascript:void(0)\" class=\"active\">Quarterly</a></li>\n             <li><a href=\"javascript:void(0)\">Annual</a></li>\n         </ul>                  \n        </div>\n    </div>\n</div>\n<div class=\"col-sm-4\" style=\"display: flex;\nalign-items: flex-end; padding-bottom: 15px;\">\n    <div class=\"Filter \">\n        <a href=\"javascript:void(0)\" class=\"save\">Save</a>\n    </div>\n</div>\n\n</div>\n                                    </div>\n                                </div>\n</div>\n                                <div class=\"tab-pane fade\" id=\"Contact\" role=\"tabpanel\" aria-labelledby=\"Contact-tab\">\n                                    <div class=\"HelpContent\">\n                                        <div class=\"clientName clientName_address pb-3\">\n                                            <h5>Name : Alison Maxwell</h5>\n                                            <h5>Phone Number : 123456789</h5>\n                                            <h5>Email Address : alison@gmail.com</h5>\n                                            <h5>Risk Tolerance : In Tolerance</h5>\n                                            <h5>Address :\n                                                <ul>\n                                                    <li>abc</li>\n                                                    <li>Location</li>\n                                                    <li>States</li>\n                                                    <li>Country</li>\n                                                    <li>Pin</li>\n                                                </ul>\n                                            </h5>\n                                            <h5>Liquid Net Worth : $5000</h5>\n                                            <h5>Annual Income : $10000</h5>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- Client Inner tab end -->\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/client/client.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/client/client.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <h2 class=\"sky\">Retail Clients</h2>\n                <!-- <ul class=\"nav nav-tabs MainTabAll\">\n                    <li class=\"nav-item \">\n                        <a class=\"nav-link \" [routerLink]=\"['/summary']\">Summary | Overview</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link active\" [routerLink]=\"['/client']\">Clients</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link \" [routerLink]=\"['/investing']\">Investing</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/transactions']\">Transactions</a>\n                    </li>\n                </ul> -->\n            \n\n<div class=\"HelpContent\">\n    <div class=\"totalClient rightSide\">\n        <div class=\"retailClient\">\n            <h5><span class=\"sky d-block\">309</span>Total Clients</h5>\n        </div>\n        <div class=\"retailClient\">\n            <h5><span class=\"sky d-block\">$23456769</span>Total AUM </h5>\n        </div>\n    </div>\n\n    <div class=\"HelpArea\">\n        <!-- <ul class=\"nav nav-tabs boxs justify-content-around pt-4\" id=\"myTab\" role=\"tablist\">\n            <li class=\"nav-item \">\n                <a class=\"nav-link active\" id=\"Retail-tab\" data-toggle=\"tab\" href=\"#Retail\" role=\"tab\" aria-controls=\"Retail\" aria-selected=\"true\">Retail Clients</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link \" id=\"Institutional-tab\" data-toggle=\"tab\" href=\"#Institutional\" role=\"tab\" aria-controls=\"Institutional\" aria-selected=\"false\">Institutional Clients</a>\n            </li>\n        </ul> -->\n        <div class=\"TableList\">\n            <div class=\"filterFlex\">\n                <div class=\"SearchBox searchIcon\">\n                    <form action=\"\">\n                        <input type=\"text\" style=\"width: 250px;\" placeholder=\"Search\">\n                        <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img src=\"assets/images/search.svg\" alt=\"\"></a>\n                    </form>\n                    <a href=\"javaScript:void(0)\"><img class=\"csv img-fluid\" src=\"assets/images/csv.svg\" alt=\"\">Download</a>\n                </div>  \n            </div>\n            \n            <div class=\"mainTable \">\n                <table class=\"table table-bordered \">\n                    <thead>\n                        <tr>\n                            \n                            <th>Client Name</th> \n                            <th>Account Number</th>  \n                            <th>Account Type</th>\n                            <th class=\"managedDropdown\">Account <i aria-hidden=\"true\" class=\"fa fa-filter\"></i>\n                                <ul class=\"managedDropdownShow summaryDropdownShow summaryDropdownShow4\">\n                                    <li><a href=\"javaScript:void(0)\">Managed Account</a> </li>\n                                    <li><a href=\"javaScript:void(0)\"> Self-Directed Account</a></li>\n                                </ul>\n                            </th>  \n                            <th>Portfolio</th>  \n                            <th>Balance </th>  \n                            <th>YTD Change</th>  \n                            <th>Action </th>  \n                            \n                        </tr>\n                    </thead>\n    \n                    <tbody>\n                        <tr>\n                            \n                            <td>Simmi Sharma</td> \n                            <td>2323232</td>  \n                            <td>Joint Account</td>  \n                            <td>Managed</td>  \n                            <td>Conservative</td>  \n                            <td>$5,676,545,672\t</td>  \n                            <td>$5672</td> \n                            <td> \n                                <a class=\"Blue viewArea \" [routerLink]=\"['/client-detail-1']\">View</a>\n                            </td> \n                        </tr>    \n                        <tr>\n                            <td>Vishal Yadav</td> \n                            <td>2323232</td>  \n                            <td>Joint Account</td>  \n                            <td>Managed</td>  \n                            <td>Conservative</td>  \n                            <td>$5,676,545,672\t</td>  \n                            <td>$23453</td> \n                            <td> \n                                <a class=\"Blue viewArea\" [routerLink]=\"['/client-detail-1']\">View</a>\n                            </td> \n                        </tr>  \n                        <tr>\n                            <td>Simmi Sharma</td> \n                            <td>2323232</td>  \n                            <td>Joint Account</td>  \n                            <td>Managed</td>  \n                            <td>Conservative</td>  \n                            <td>$5,676,545,672\t</td>  \n                            <td>$5672</td> \n                            <td> \n                                <a class=\"Blue viewArea\" [routerLink]=\"['/client-detail-1']\">View</a>\n                            </td> \n                        </tr>  \n                        <tr>\n                            <td>Simmi Sharma</td> \n                            <td>2323232</td>  \n                            <td>Joint Account</td>  \n                            <td>Managed</td>  \n                            <td>Conservative</td>  \n                            <td>$5,676,545,672\t</td>  \n                            <td>$5672</td> \n                            <td> \n                                <a class=\"Blue viewArea\" [routerLink]=\"['/client-detail-1']\">View</a>\n                            </td> \n                        </tr>  \n                        <tr>\n                            <td>Simmi Sharma</td> \n                            <td>2323232</td>  \n                            <td>Joint Account</td>  \n                            <td>Managed</td>  \n                            <td>Conservative</td>  \n                            <td>$5,676,545,672\t</td>  \n                            <td>$5672</td> \n                            <td> \n                                <a class=\"Blue viewArea\" [routerLink]=\"['/client-detail-1']\">View</a>\n                            </td> \n                        </tr>  \n                    </tbody>\n                </table>\n            </div>\n            <div class=\"Pagination\">\n                <ul>\n                    <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/left-arrow.svg\" alt=\"\"></a></li>\n                    <li class=\"active\"><a href=\"javaScript:void(0)\">1</a></li>\n                    <li><a href=\"javaScript:void(0)\">2</a></li>\n                    <li><a href=\"javaScript:void(0)\">3</a></li>\n                    <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/right-arrow.svg\" alt=\"\"></a></li>\n                </ul>\n            </div>\n        </div>\n\n        \n    </div>\n\n\n\n</div>\n</div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/compliance-detail/compliance-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/compliance-detail/compliance-detail.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"enterKey\">\n                    <div class=\"SearchBox\">\n                        <a [routerLink]=\"['/compliance']\">\n                            << Back</a>\n                    </div>\n                </div>\n                <div class=\"bread mt-3\">\n                    <nav aria-label=\"breadcrumb\">\n                        <ol class=\"breadcrumb\">\n                            <li class=\"breadcrumb-item\">Compliance</li>\n                            <li class=\"breadcrumb-item active\" aria-current=\"page\">Detail</li>\n                        </ol>\n                    </nav>\n                </div>\n\n                <div class=\"row compliance\">\n                    <!-- <div class=\"col-md-4\">\n                        <div class=\"ComplianceDetail\">\n                            \n                        </div>\n                    </div> -->\n                    <!-- <div class=\"ant-row-flex mt-16\" style=\"margin-left: -8px; margin-right: -8px;\"> -->\n                        <div class=\"col-md-4\" style=\"padding-left: 8px; padding-right: 8px;\">\n                            <div class=\"complianceDetail_brief-info__1274b\">\n                                <h2 class=\"complianceDetail_brief-title__2Abvd\">Vishu Compliance</h2>\n                                <div class=\"complianceDetail_brief-item__1CpUt\"><span\n                                        class=\"complianceDetail_brief-item-label__2ihM0\">Email:</span><span\n                                        class=\"complianceDetail_brief-item-value__7K7t9\">email@demo.com</span>\n                                </div>\n                                <div class=\"complianceDetail_brief-item__1CpUt\"><span\n                                        class=\"complianceDetail_brief-item-label__2ihM0\">Registered Date:</span><span\n                                        class=\"complianceDetail_brief-item-value__7K7t9\">03/25/2020</span></div>\n                                <div class=\"complianceDetail_brief-item__1CpUt\"><span\n                                        class=\"complianceDetail_brief-item-label__2ihM0\">Client Type:</span><span\n                                        class=\"complianceDetail_brief-item-value__7K7t9\">Mudani</span></div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-8\" style=\"padding-left: 8px; padding-right: 8px;\">\n                            <div class=\"planInfo_plan-info__2MTKx\">\n                                <header class=\"planInfo_header__1c_V_\">\n                                    <h3 class=\"planInfo_title__2jmjD\">Client's Investment Plan</h3><span\n                                        class=\"planInfo_header-time__19RME\">Date: --</span>\n                                </header>\n                                <div class=\"ant-spin-nested-loading with-blank-chart \">\n                                    <!-- <div class=\"ant-spin-container\"><img class=\"img\"\n                                            src=\"https://static.tradingfront.com/ria-portal/static/images/data.53e61a49.png\"\n                                            alt=\"blank-skeleton\">\n                                        <p class=\"desc\">Your client does not have any recommended investment plan</p>\n                                    </div> -->\n                                    <h5 class=\"sky Blue viewArea pb-2\">AMZN</h5>\n                                <div class=\"amznMainInner categoryAmznMainInner\">\n                                    <div class=\"amznLeft\">\n                                        <div class=\"amznLeftInner\">\n                                            <img src=\"assets/images/logo.png\" alt=\"\">\n                                        </div>\n                                    </div>\n                                    <div class=\"amznMid\">\n                                        <div class=\"amznMidInner\">\n                                            <div id=\"chart-10\">\n                                                <apx-chart\n                                                  [series]=\"chartLineSparkline10Options.series\"\n                                                  [chart]=\"commonLineSparklineOptions.chart\"\n                                                  [tooltip]=\"commonLineSparklineOptions.tooltip\"\n                                                ></apx-chart>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"amznRight\">\n                                        <h4>$234</h4>\n                                    </div>\n                                </div>\n                                </div>\n                            </div>\n                        </div>\n                    <!-- </div> -->\n                </div>\n                <div class=\"adjust mt-5\">\n                    <div class=\"colAdjust\">\n                        <h3 style=\"text-align: left;\">Account List <i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i> </h3>\n                    </div>\n                </div>\n                <div class=\"TableList\">\n                    <div class=\"mainTable \">\n                        <table class=\"table table-bordered \">\n                            <thead>\n                                <tr>\n                                    <th>Account name</th>\n                                    <th> Account No.</th> \n                                    <th>Account Type</th>  \n                                    <th>Account Capability</th>  \n                                    <th>Fee</th>\n                                    <th>Submit Time</th> \n                                    <th>Action</th> \n                                </tr>\n                            </thead>\n            \n                            <tbody>\n                                <tr>\n                                    <td>USD Cash</td>\n                                    <td>USD Cash</td> \n                                    <td> Cash</td>  \n                                    <td>28.00%</td>  \n                                    <td>17.00%</td>  \n                                    <td>25.00%</td>\n                                    <td> \n                                        <a class=\"Blue  \" href=\"javaScript:void(0)\">View</a>\n                                    </td>  \n                                </tr>    \n                                <tr>\n                                    <td class=\"sky\">AMZN</td>\n                                    <td>USD Cash</td> \n                                    <td>3,311.00</td>\n                                    <td>28.00%</td>  \n                                    <td>17.00%</td>  \n                                    <td>25.00%</td> \n                                    <td> \n                                        <a class=\"Blue  \"  href=\"javaScript:void(0)\">View</a>\n                                    </td>\n                                </tr> \n                                <tr>\n                                    <td class=\"sky\">MSFT</td>\n                                    <td>USD Cash</td> \n                                    <td>223.31</td>\n                                    <td>28.00%</td>  \n                                    <td>17.00%</td>  \n                                    <td>25.00%</td>\n                                    <td> \n                                        <a class=\"Blue  \"  href=\"javaScript:void(0)\">View</a>\n                                    </td>\n                                </tr> \n                                <tr>\n                                    <td class=\"sky\">AAPL</td>\n                                    <td>USD Cash</td> \n                                    <td>121.42</td>\n                                    <td>28.00%</td>  \n                                    <td>17.00%</td>  \n                                    <td>25.00%</td>\n                                    <td> \n                                        <a class=\"Blue  \"  href=\"javaScript:void(0)\">View</a>\n                                    </td>\n                                </tr> \n                                <tr>\n                                    <td class=\"sky\">AAPL</td>\n                                    <td>USD Cash</td> \n                                    <td>983.00</td>\n                                    <td>28.00%</td>  \n                                    <td>17.00%</td>  \n                                    <td>25.00%</td>\n                                    <td> \n                                        <a class=\"Blue  \"  href=\"javaScript:void(0)\">View</a>\n                                    </td>\n                                </tr> \n                                <tr>\n                                    <td>USD Cash</td>\n                                    <td>USD Cash</td> \n                                    <td> Cash</td>  \n                                    <td>28.00%</td>  \n                                    <td>17.00%</td>  \n                                    <td>25.00%</td>\n                                    <td> \n                                        <a class=\"Blue  \"  href=\"javaScript:void(0)\">View</a>\n                                    </td>\n                                </tr>   \n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/compliance/compliance.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/compliance/compliance.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"newGraphTable\">\n\n                <div class=\"createNewww\">\n                    <h2 style=\"padding: 40px 0px;\">Create Schedule</h2>\n                    <form [formGroup]=\"form\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Type of Schedule</label>\n                                        <!-- <select id=\"\" formControlName=\"type\" class=\"ant-input form-control forma\">\n                                            <option value=\"1\"> Flat Fee\n                                            </option>\n                                            <option value=\"2\"> AUM %\n                                            </option>\n                                            <option value=\"3\"> AUM % + Flat\n                                            </option>\n                                        </select> -->\n                                        <select id=\"\" formControlName=\"type\" class=\"ant-input form-control forma\">\n                                            <option value=\"1\"> Self Direct Account\n                                            </option>\n                                            <option value=\"2\">Managed Account\n                                            </option>\n                                        </select>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Schedule Name</label>\n                                        <input type=\"text\" formControlName=\"name\" class=\"form-control forma\"\n                                            placeholder=\"Please name this schedule\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-md-4\">\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Flat Fee</label>\n                                        <input type=\"text\" formControlName=\"price\" class=\"form-control forma\"\n                                            placeholder=\"$0\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>description</label>\n                                        <textarea type=\"text\" formControlName=\"description\" class=\"form-control forma\"\n                                            placeholder=\"description\"\n                                            style=\"height: 100px !important;min-height: auto !important;\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- <div class=\"col-md-4\">\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Subplan Name</label>\n                                        <input type=\"text\" class=\"form-control forma\" placeholder=\"Name\">\n                                    </div>\n                                </div>\n                            </div> -->\n                            <!-- <div class=\"col-md-4\">\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Subplan description</label>\n                                        <textarea type=\"text\" class=\"form-control forma\" placeholder=\"description\"\n                                            style=\"min-height: auto !important;    height: 100px !important;\"></textarea>\n                                    </div>\n                                </div>\n                            </div> -->\n\n                            <div class=\"col-md-4\">\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group Allul Allul1\">\n                                        <label>Bill Timing</label>\n                                        <ul style=\"margin-top: 10px;\">\n                                            <li><a (click)=\"changeBillTime('1')\"\n                                                    [className]=\"billTime=='1' ? 'active' : 'inactive'\"\n                                                    href=\"javascript:void(0)\">In Advance</a></li>\n                                            <li><a (click)=\"changeBillTime('2')\"\n                                                    [className]=\"billTime=='2' ? 'active' : 'inactive'\"\n                                                    href=\"javascript:void(0)\">In Arereas</a></li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group Allul Allul2\">\n                                        <label>Duration</label>\n                                        <ul style=\"margin-top: 10px;\">\n                                            <li><a (click)=\"changeDuration('monthly')\"\n                                                    [className]=\"duration=='monthly' ? 'active' : 'inactive'\"\n                                                    href=\"javascript:void(0)\">Monthly</a></li>\n                                            <li><a (click)=\"changeDuration('quarterly')\" href=\"javascript:void(0)\"\n                                                    [className]=\"duration=='quarterly' ? 'active' : 'inactive'\">Quarterly</a>\n                                            </li>\n                                            <li><a (click)=\"changeDuration('annualy')\"\n                                                    [className]=\"duration=='annualy' ? 'active' : 'inactive'\"\n                                                    href=\"javascript:void(0)\">Annual</a></li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\" style=\"display: flex;align-items: flex-end; padding-bottom: 15px;\">\n                                <div class=\"Filter \">\n                                    <button type=\"button\" (click)=\"saveFees()\" [disabled]=\"form.invalid\"\n                                        class=\"save\">Save</button>\n                                </div>\n                            </div>\n\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-model/create-model.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-model/create-model.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!-- <ngx-spinner *ngIf=\"isShowSpinner\"></ngx-spinner> -->\n<ngx-spinner></ngx-spinner>\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <form [formGroup]=\"modelForm\" (ngSubmit)=\"addModel()\">\n                    <div class=\"enterKey\">\n                        <div class=\"SearchBox\">\n                            <a href=\"javaScript:void(0)\" (click)=backClicked() class=\"ml-0\">\n                                << Back</a>\n                        </div>\n                        <div class=\"SearchBox SearchBoxModel\">\n                            <button class=\"thematic-buttons\" [disabled]=\"modelForm.invalid\" (click)=\"addModel()\"\n                                type=\"button\"><i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>Create</button>\n                        </div>\n                    </div>\n                    <div class=\"bread mt-3\">\n                        <nav aria-label=\"breadcrumb\">\n                            <ol class=\"breadcrumb\">\n                                <li class=\"breadcrumb-item active\" aria-current=\"page\">New Model</li>\n                            </ol>\n                        </nav>\n                    </div>\n\n                    <div class=\"NewModel adjust\">\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <!-- <div class=\"Filter FilterSearch\">\n                                <div class=\"form-group\">\n                                    <label>Copy from existing Model</label>\n                                    <select class=\"form-control\"> \n                                        <option>Select Model</option>\n                                        <option>Model </option>\n                                        <option>Model </option> \n                                        <option>Model </option>\n                                        <option>Model </option> \n                                    </select>\n                                </div>\n                            </div> -->\n\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Select Models</label>\n                                        <select id=\"\" (change)=\"onSelect($event)\" formControlName=\"modelId\"\n                                            class=\"ant-input\">\n                                            <option *ngFor=\"let item of orbisModelDetail\" [ngValue]=\"item.id\">\n                                                {{item.title}}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Type</label>\n                                        <select id=\"\" formControlName=\"type\" class=\"ant-input\">\n                                            <option value=\"1\"> Portfolio </option>\n                                            <option value=\"2\"> Thematic Basket </option>\n                                        </select>\n                                    </div>\n                                </div>\n\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Adjusted Frequency</label>\n                                        <select id=\"\" formControlName=\"adjustedFrequency\" class=\"ant-input\">\n                                            <option value=\"monthly\"> Monthly </option>\n                                            <option value=\"weekly\"> Weekly </option>\n                                        </select>\n                                    </div>\n                                </div>\n\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Name</label>\n                                        <input formControlName=\"modelName\" type=\"text\" name=\"\" class=\"form-control\"\n                                            placeholder=\"Name\">\n                                    </div>\n                                </div>\n                                <!-- <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Holdings Type</label>\n                                        <div class=\"newHold\">\n                                            <a href=\"javascript:void(0)\" class=\"active\">ETF/Equity</a>\n                                            <a href=\"javascript:void(0)\">Mutual Funds</a>\n                                        </div>\n                                    </div>\n                                </div> -->\n\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Maximum Deviation Allowance(%)</label>\n                                        <input (keypress)=\"numberOnly($event)\"\n                                            formControlName=\"maximumDeviationAllowance\" type=\"text\" class=\"form-control\"\n                                            placeholder=\"Allowance\">\n                                    </div>\n                                </div>\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Description</label>\n                                        <textarea formControlName=\"description\" id=\"\" cols=\"80\" rows=\"10\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-5 chartMain colAdjust\">\n                                <h3 style=\"font-size: 22px;padding-bottom:20px;\">Assets Allocation</h3>\n                                <div class=\"ClientAccount pb-3\">\n                                    <h4 style=\"text-transform: uppercase; text-align: center;\"><strong>Balance Sheets\n                                            Components</strong></h4>\n                                </div>\n                                <div class=\"newCharts\">\n                                    <div id=\"chart\" style=\"padding-left: 85px;\">\n                                        <apx-chart [series]=\"chartOptions.series\" [chart]=\"chartOptions.chart\"\n                                            [labels]=\"chartOptions.labels\" [title]=\"chartOptions.title\"\n                                            [theme]=\"chartOptions.theme\" [responsive]=\"chartOptions.responsive\">\n                                        </apx-chart>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n\n                <div style=\"display: flex;justify-content: space-between;padding: 35px 0px;\">\n                    <div class=\"totalCount totalCountModel\">\n                        <div class=\"SearchBox SearchBoxModel\">\n                            <a href=\"javaScript:void(0)\" class=\"ml-0\"><i class=\"fa fa-plus-circle\"\n                                    aria-hidden=\"true\"></i>Add New</a>\n                        </div>\n                        <div class=\"SearchBox\">\n                            <div class=\"SearchBox searchIcon\">\n                                <form action=\"\">\n                                    <input type=\"text\" style=\"width: 250px;\" placeholder=\"Search\">\n                                    <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                            src=\"assets/images/search.svg\" alt=\"\"></a>\n                                </form>\n\n                            </div>\n                        </div>\n\n\n                    </div>\n                    <div class=\"SearchBox SearchBoxModel\">\n                        <a href=\"javaScript:void(0)\" class=\"mr-4\"><i class=\"fa fa-download\"\n                                aria-hidden=\"true\"></i>Download</a>\n                    </div>\n                </div>\n\n                <div class=\"TableList\">\n                    <div class=\"mainTable \">\n                        <table class=\"table table-bordered \">\n                            <thead>\n                                <tr>\n                                    <th>Ticker</th>\n                                    <th> Name</th>\n                                    <th>Latest Price</th>\n                                    <th>holdings type</th>\n                                    <th>allocation %</th>\n\n                                </tr>\n                            </thead>\n\n                            <tbody>\n                                <tr>\n                                    <td>USD Cash</td>\n                                    <td>USD Cash</td>\n                                    <td></td>\n                                    <td> Cash</td>\n                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"26%\"\n                                                readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                        </span></td>\n\n                                </tr>\n                                <tr>\n                                    <td class=\"sky\">AMZN</td>\n                                    <td>USD Cash</td>\n                                    <td>3,311.00</td>\n                                    <td class=\"sky\"> Stock</td>\n                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"24%\"\n                                                readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                        </span></td>\n\n                                </tr>\n                                <tr>\n                                    <td class=\"sky\">MSFT</td>\n                                    <td>USD Cash</td>\n                                    <td>223.31</td>\n                                    <td class=\"sky\"> Stock</td>\n                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"40%\"\n                                                readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                        </span></td>\n\n                                </tr>\n                                <tr>\n                                    <td class=\"sky\">AAPL</td>\n                                    <td>USD Cash</td>\n                                    <td>121.42</td>\n                                    <td class=\"sky\"> Stock</td>\n                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"20.8%\"\n                                                readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                        </span></td>\n\n                                </tr>\n                                <tr>\n                                    <td class=\"sky\">AAPL</td>\n                                    <td>USD Cash</td>\n                                    <td>983.00</td>\n                                    <td class=\"sky\"> Stock</td>\n                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"20.6%\"\n                                                readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                        </span></td>\n\n                                </tr>\n                                <tr>\n                                    <td>USD Cash</td>\n                                    <td>USD Cash</td>\n                                    <td></td>\n                                    <td> Cash</td>\n                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"29%\"\n                                                readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                        </span></td>\n\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-portfolio/create-portfolio.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-portfolio/create-portfolio.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"enterKey\">\n                    <div class=\"SearchBox\">\n                        <a [routerLink]=\"['/investing']\">\n                            << Back</a>\n                    </div>\n                    <div class=\"SearchBox SearchBoxModel\">\n                        <button class=\"thematic-buttons\" [disabled]=\"portfolioFrom.invalid\" (click)=\"addPortfolio()\"\n                            type=\"button\"><i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>Create</button>\n                    </div>\n                </div>\n                <div class=\"bread mt-3\">\n                    <nav aria-label=\"breadcrumb\">\n                        <ol class=\"breadcrumb\">\n                            <li class=\"breadcrumb-item\">Portfolio</li>\n                            <li class=\"breadcrumb-item active\" aria-current=\"page\">Create Portfolio</li>\n\n                        </ol>\n                    </nav>\n                </div>\n                <form [formGroup]=\"portfolioFrom\">\n                    <div class=\"adjust\">\n                        <div class=\"row\">\n                            <div class=\"col-md-3 colAdjust\">\n\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Select Model</label>\n                                        <select id=\"\" formControlName=\"modelId\" class=\"ant-input\">\n                                            <option *ngFor=\"let item of modelList\" [ngValue]=\"item._id\">\n                                                {{item.modelName}}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Risk Level</label>\n                                        <input type=\"text\" formControlName=\"riskLevel\" class=\"form-control\"\n                                            placeholder=\"Risk Level\">\n                                    </div>\n                                </div>\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Holdings Type</label>\n                                        <div class=\"newHold\">\n                                            <a href=\"javascript:void(0)\" class=\"active\">ETF/Equity</a>\n                                            <a href=\"javascript:void(0)\">Mutual Funds</a>\n                                        </div>\n                                    </div>\n                                </div>\n\n\n\n                             \n                            </div>\n                            <div class=\"col-md-3 colAdjust\">\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Portfolio Name</label>\n                                        <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                                            placeholder=\"Name\">\n                                    </div>\n                                </div>\n                        \n                           \n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Drift</label>\n                                        <select id=\"\" formControlName=\"drift\" class=\"ant-input\">\n                                            <option value=\"Active\"> Active </option>\n                                            <option value=\"Passive\"> Passive </option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Description</label>\n                                        <textarea formControlName=\"description\" cols=\"80\" rows=\"6\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-5 chartMain colAdjust\">\n                                <h3>Target Allocation</h3>\n                                <div class=\"ClientAccount pb-3\">\n                                    <h4 style=\"text-transform: uppercase; text-align: center;\"><strong>Balance Sheets\n                                            Components</strong></h4>\n                                </div>\n                                <div class=\"chart\" style=\"    margin: 0 auto;\" id=\"chart\">\n\n                                    <div class=\"newCharts\">\n                                        <div id=\"chart\" style=\"padding-left: 85px;\">\n                                            <apx-chart\n                                              [series]=\"chartOptions.series\"\n                                              [chart]=\"chartOptions.chart\"\n                                              [labels]=\"chartOptions.labels\"\n                                              [title]=\"chartOptions.title\"\n                                              [theme]=\"chartOptions.theme\"\n                                              [responsive]=\"chartOptions.responsive\"\n                                            ></apx-chart>\n                                          </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n\n                <div style=\"display: flex;justify-content: space-between;padding: 35px 0px;\">\n                    <div class=\"totalCount totalCountModel\">\n                        <div class=\"SearchBox SearchBoxModel\">\n                            <a href=\"javaScript:void(0)\" class=\"ml-0\"><i class=\"fa fa-plus-circle\"\n                                    aria-hidden=\"true\"></i>Add New</a>\n                        </div>\n                        <div class=\"SearchBox\">\n                            <div class=\"SearchBox searchIcon\">\n                                <form action=\"\">\n                                    <input type=\"text\" style=\"width: 250px;\" placeholder=\"Search\">\n                                    <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                            src=\"assets/images/search.svg\" alt=\"\"></a>\n                                </form>\n                         \n                            </div>\n                        </div>\n               \n                \n                    </div>\n                    <div class=\"SearchBox SearchBoxModel\">\n                        <a href=\"javaScript:void(0)\" class=\"mr-4\"><i class=\"fa fa-download\"\n                                aria-hidden=\"true\"></i>Download</a>\n                    </div>\n                </div>\n    \n                    <div class=\"TableList\">\n                        <div class=\"mainTable \">\n                            <table class=\"table table-bordered \">\n                                <thead>\n                                    <tr>\n                                        <th>Ticker</th>\n                                        <th> Name</th>\n                                        <th>Latest Price</th>\n                                        <th>holdings type</th>\n                                        <th>allocation %</th>\n                                   \n                                    </tr>\n                                </thead>\n    \n                                <tbody>\n                                    <tr>\n                                        <td>USD Cash</td>\n                                        <td>USD Cash</td>\n                                        <td></td>\n                                        <td> Cash</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"26%\" readonly>\n                                        <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                        </span></td>\n                                   \n                                    </tr>\n                                    <tr>\n                                        <td class=\"sky\">AMZN</td>\n                                        <td>USD Cash</td>\n                                        <td>3,311.00</td>\n                                        <td class=\"sky\"> Stock</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"24%\" readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                            </span></td>\n                                    \n                                    </tr>\n                                    <tr>\n                                        <td class=\"sky\">MSFT</td>\n                                        <td>USD Cash</td>\n                                        <td>223.31</td>\n                                        <td class=\"sky\"> Stock</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"40%\" readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                            </span></td>\n                                   \n                                    </tr>\n                                    <tr>\n                                        <td class=\"sky\">AAPL</td>\n                                        <td>USD Cash</td>\n                                        <td>121.42</td>\n                                        <td class=\"sky\"> Stock</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"20.8%\" readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                            </span></td>\n                                   \n                                    </tr>\n                                    <tr>\n                                        <td class=\"sky\">AAPL</td>\n                                        <td>USD Cash</td>\n                                        <td>983.00</td>\n                                        <td class=\"sky\"> Stock</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"20.6%\" readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                            </span></td>\n                                    \n                                    </tr>\n                                    <tr>\n                                        <td>USD Cash</td>\n                                        <td>USD Cash</td>\n                                        <td></td>\n                                        <td> Cash</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"29%\" readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                            </span></td>\n                                    \n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div> \n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-thematic/create-thematic.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-thematic/create-thematic.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ngx-spinner *ngIf=\"isShowSpinner\"></ngx-spinner>\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <form [formGroup]=\"thematicForm\" (ngSubmit)=\"addThematic()\">\n                    <div class=\"enterKey\">\n                        <div class=\"SearchBox\">\n                            <a href=\"javaScript:void(0)\" (click)=backClicked() class=\"ml-0\">\n                                << Back</a>\n                        </div>\n                        <div class=\"SearchBox SearchBoxModel\">\n                            <button class=\"thematic-buttons\"\n                                [style.background-color]=\"thematicForm.invalid ? 'gray' : ''\"\n                                [style.cursor]=\"thematicForm.invalid ? 'not-allowed' : ''\"\n                                [disabled]=\" !thematicForm.valid\" type=\"submit\"><i class=\"fa fa-file-text\"\n                                    aria-hidden=\"true\"></i>Create</button>\n                        </div>\n                    </div>\n\n                    <div class=\"bread mt-3\">\n                        <nav aria-label=\"breadcrumb\">\n                            <ol class=\"breadcrumb\">\n                                <li class=\"breadcrumb-item active\" aria-current=\"page\">New Thematic</li>\n                            </ol>\n                        </nav>\n                    </div>\n\n                    <div class=\"NewModel adjust\">\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Select Model</label>\n                                        <select name=\"\" formControlName=\"models\" id=\"\" class=\"ant-input\">\n                                            <option *ngFor=\"let item of modelList\" [ngValue]=\"item._id\">\n                                                {{item.modelName}}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Thematic Name</label>\n                                        <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                                            placeholder=\"Name\">\n                                    </div>\n                                </div>\n                                <div class=\"Filter\">\n                                    <div class=\"form-group\">\n                                        <label>Description</label>\n                                        <textarea formControlName=\"description\" id=\"\" cols=\"104\" rows=\"5\"></textarea>\n                                    </div>\n                                </div>\n\n                                <!-- <div class=\" adjust\">\n                                    <div class=\"colAdjust\">\n                                        <h3 style=\"text-align: left;\">Model Assigned </h3>\n                                    </div>\n                                    <div class=\"SearchBox SearchBoxModel\">\n                                        <a href=\"javaScript:void(0)\" class=\"ml-0\"><i class=\"fa fa-plus-circle\"\n                                                aria-hidden=\"true\"></i>Add Model</a>\n                                    </div>\n                                </div> -->\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Image</label>\n                                        <input type=\"file\" formControlName=\"image\" (change)=\"onFileSelected($event)\"\n                                            class=\"form-control\" placeholder=\"Name\">\n\n                                        <!-- <input type=\"text\" [value]=\"uploadedImageUrl\" formControlName=\"imageUrl\"\n                                            class=\"form-control\" placeholder=\"Image\"> -->\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-md-5 chartMain colAdjust\">\n                                <h3>Target Allocation</h3>\n                                <div class=\"ClientAccount pb-3\">\n                                    <h4 style=\"text-transform: uppercase; text-align: center;\"><strong>Balance\n                                            Sheets\n                                            Components</strong></h4>\n                                </div>\n                                <div class=\"chart\" style=\"    margin: 0 auto;\" id=\"chart\">\n                                    <div class=\"newCharts\">\n                                        <div id=\"chart\" style=\"padding-left: 85px;\">\n                                            <apx-chart\n                                              [series]=\"chartOptions.series\"\n                                              [chart]=\"chartOptions.chart\"\n                                              [labels]=\"chartOptions.labels\"\n                                              [title]=\"chartOptions.title\"\n                                              [theme]=\"chartOptions.theme\"\n                                              [responsive]=\"chartOptions.responsive\"\n                                            ></apx-chart>\n                                          </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n                <div style=\"display: flex;justify-content: space-between;padding: 35px 0px;\">\n                    <div class=\"totalCount totalCountModel\">\n                        <div class=\"SearchBox SearchBoxModel\">\n                            <a href=\"javaScript:void(0)\" class=\"ml-0\"><i class=\"fa fa-plus-circle\"\n                                    aria-hidden=\"true\"></i>Add New</a>\n                        </div>\n                        <div class=\"SearchBox\">\n                            <div class=\"SearchBox searchIcon\">\n                                <form action=\"\">\n                                    <input type=\"text\" style=\"width: 250px;\" placeholder=\"Search\">\n                                    <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                            src=\"assets/images/search.svg\" alt=\"\"></a>\n                                </form>\n                         \n                            </div>\n                        </div>\n               \n                \n                    </div>\n                    <div class=\"SearchBox SearchBoxModel\">\n                        <a href=\"javaScript:void(0)\" class=\"mr-4\"><i class=\"fa fa-download\"\n                                aria-hidden=\"true\"></i>Download</a>\n                    </div>\n                </div>\n    \n                    <div class=\"TableList\">\n                        <div class=\"mainTable \">\n                            <table class=\"table table-bordered \">\n                                <thead>\n                                    <tr>\n                                        <th>Ticker</th>\n                                        <th> Name</th>\n                                        <th>Latest Price</th>\n                                        <th>holdings type</th>\n                                        <th>allocation %</th>\n                                   \n                                    </tr>\n                                </thead>\n    \n                                <tbody>\n                                    <tr>\n                                        <td>USD Cash</td>\n                                        <td>USD Cash</td>\n                                        <td></td>\n                                        <td> Cash</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"26%\" readonly>\n                                        <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                        </span></td>\n                                   \n                                    </tr>\n                                    <tr>\n                                        <td class=\"sky\">AMZN</td>\n                                        <td>USD Cash</td>\n                                        <td>3,311.00</td>\n                                        <td class=\"sky\"> Stock</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"24%\" readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                            </span></td>\n                                    \n                                    </tr>\n                                    <tr>\n                                        <td class=\"sky\">MSFT</td>\n                                        <td>USD Cash</td>\n                                        <td>223.31</td>\n                                        <td class=\"sky\"> Stock</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"40%\" readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                            </span></td>\n                                   \n                                    </tr>\n                                    <tr>\n                                        <td class=\"sky\">AAPL</td>\n                                        <td>USD Cash</td>\n                                        <td>121.42</td>\n                                        <td class=\"sky\"> Stock</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"20.8%\" readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                            </span></td>\n                                   \n                                    </tr>\n                                    <tr>\n                                        <td class=\"sky\">AAPL</td>\n                                        <td>USD Cash</td>\n                                        <td>983.00</td>\n                                        <td class=\"sky\"> Stock</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"20.6%\" readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                            </span></td>\n                                    \n                                    </tr>\n                                    <tr>\n                                        <td>USD Cash</td>\n                                        <td>USD Cash</td>\n                                        <td></td>\n                                        <td> Cash</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"29%\" readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                            </span></td>\n                                    \n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div> \n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <ul class=\"nav nav-tabs MainTabAll\" id=\"myTab\" role=\"tablist\">\n                    <li class=\"nav-item \">\n                        <a class=\"nav-link active\" id=\"Summary-tab\" data-toggle=\"tab\" href=\"#Summary\" role=\"tab\" aria-controls=\"Summary\" (click)=\"summaryClick()\" aria-selected=\"true\">Summary | Overview</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link \" id=\"Clients-tab\" data-toggle=\"tab\" href=\"#Clients\" role=\"tab\" aria-controls=\"Clients\" (click)=clientClick() aria-selected=\"false\">Clients</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link \" id=\"Investing-tab\" data-toggle=\"tab\" href=\"#Investing\" role=\"tab\" aria-controls=\"Investing\" (click)=investingClick() aria-selected=\"false\">Investing</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" id=\"Transactions-tab\" data-toggle=\"tab\" href=\"#Transactions\" role=\"tab\" aria-controls=\"Transactions\" (click)=transactionClick() aria-selected=\"false\">Transactions</a>\n                    </li>\n                </ul>\n\n                <div class=\"tab-content\" id=\"myTabContent\">\n                    <div class=\"tab-pane fade show active\" id=\"Summary\" role=\"tabpanel\" aria-labelledby=\"Summary-tab\">\n                        <app-summary></app-summary>\n                    </div>\n\n                    <div class=\"tab-pane fade\" id=\"Clients\" role=\"tabpanel\" aria-labelledby=\"Clients-tab\">\n                        <app-client></app-client>\n                    </div>\n\n                    <div class=\"tab-pane fade\" id=\"Investing\" role=\"tabpanel\" aria-labelledby=\"Investing-tab\">\n                        <app-investing></app-investing>\n                    </div>\n\n                    <div class=\"tab-pane fade\" id=\"Transactions\" role=\"tabpanel\" aria-labelledby=\"Transactions-tab\">\n                        <app-transactions></app-transactions>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-questionaire/edit-questionaire.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-questionaire/edit-questionaire.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ngx-spinner></ngx-spinner>\n<!-- <pre>{{questionForm.value | json}}</pre> -->\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"fixed left-0 right-0 z-100\" style=\"top: 64px;\">\n            <div class=\"breadNav_nav__3bu0T site-main DisFlex bg-white\">\n                <div class=\"ant-breadcrumb\"><span><span class=\"ant-breadcrumb-link\">Questionnaire</span><span\n                            class=\"ant-breadcrumb-separator\">&gt;</span></span><span><span\n                            class=\"ant-breadcrumb-link\">Add</span><span\n                            class=\"ant-breadcrumb-separator\">&gt;</span></span><span><span\n                            class=\"ant-breadcrumb-link\">Custom\n                            Questions</span><span class=\"ant-breadcrumb-separator\">&gt;</span></span></div>\n                <div><button type=\"button\" class=\"ant-btn\" [routerLink]=\"['/questionnaire']\"><span>Back</span></button>\n                    <button type=\"button\" class=\"ant-btn ml-8 ant-btn-primary\" [disabled]=\"form.invalid\"\n                        (click)=\"saveQuestionaire()\"><span>Next</span></button></div>\n            </div>\n        </div>\n        <div class=\"Small-Wrapper\" style=\"    background-color: #F6F8FC;\">\n            <div class=\"HelpArea b-questionnaire\">\n                <form [formGroup]=\"form\">\n                    <div class=\"questionnaire-content goal-questionnaire-root mt-16\" style=\"padding-top: 40px;\">\n                        <div class=\"site-main\">\n                            <div class=\"ant-card tool-choice\">\n                                <div class=\"tool-title\">Form</div><span (click)=\"addQuestion()\" class=\"choices\"><i\n                                        class=\"anticon fa fa-plus-circle\"></i>Multiple\n                                    Choice</span><span class=\"choices\"><i\n                                        class=\"anticon fa fa-plus-circle\"></i>Dropdown</span>\n                            </div>\n                            <div class=\"edit-questions-content\">\n                                <div class=\"goal-question-section\">\n                                    <div class=\"ant-row ant-form-item is-valid is-pristine is-untouched is-unfocused\">\n                                        <div class=\"ant-form-item-label\"><label class=\"ant-form-item-required\"\n                                                title=\"\"><span class=\"itemProps-label\">Title</span></label></div>\n                                        <div class=\"ant-form-item-control-wrapper\">\n                                            <div class=\"ant-form-item-control\"><span class=\"ant-form-item-children\">\n                                                    <input placeholder=\"Title\" type=\"text\" formControlName=\"title\"\n                                                        class=\"ant-input\" value=\"Goal Invest questionnaire\"></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"ant-row ant-form-item is-valid is-pristine is-untouched is-unfocused\">\n                                        <div class=\"ant-form-item-label\"><label class=\"ant-form-item-required\"\n                                                title=\"\"><span class=\"itemProps-label\">Description</span></label></div>\n                                        <div class=\"ant-form-item-control-wrapper\">\n                                            <div class=\"ant-form-item-control\"><span class=\"ant-form-item-children\">\n                                                    <textarea formControlName=\"description\" placeholder=\"description\"\n                                                        class=\"ant-input\"\n                                                        style=\"height: 73px; min-height: 73px; max-height: 325px; overflow-y: hidden;\">Help your clients find a suitable investment strategy. Your investing strategy should reflect the kind of investor you are your personal investor profile. This quiz will help you determine your profile and then match it to an investment strategy that's designed for investors like you.</textarea></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n\n\n\n\n                                <div formArrayName=\"questions\">\n                                    <div\n                                        *ngFor=\"let question of form['controls'].questions['controls']; let ix=index; let lc = count;\">\n                                        <div formGroupName=\"{{ix}}\" class=\"questions\">\n\n\n                                            <div class=\"goal-question-section\">\n                                                <div class=\"goal-question-item\">\n                                                    <div class=\"goal-question-title\">\n                                                        <div\n                                                            class=\"ant-row ant-form-item ant-form-item-no-colon is-valid is-pristine is-untouched is-unfocused\">\n                                                            <div class=\"ant-form-item-label\"><label\n                                                                    class=\"ant-form-item-required\"\n                                                                    title=\"Q2\">Q{{ix+1}}</label>\n                                                            </div>\n                                                            <div class=\"ant-form-item-control-wrapper\">\n                                                                <div class=\"ant-form-item-control\"><span\n                                                                        class=\"ant-form-item-children\">\n                                                                        <textarea formControlName=\"question\"\n                                                                            class=\"ant-input\"\n                                                                            style=\"height: 31px; min-height: 31px; max-height: 136px; overflow-y: hidden;\">Once I begin withdrawing funds from my investments, I plan to spend all of the funds in:</textarea></span>\n                                                                    <!-- <ng-container\n                                                                        *ngIf=\"question.get('question').hasError('required') && question.get('question').touched\">\n                                                                        <span class=\"errorMsg\">Input Percentage</span>\n                                                                    </ng-container> -->\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"ant-col-6 choice-record\"><span>Multiple choice:\n                                                                1~10</span></div>\n                                                    </div>\n                                                    <div class=\"goal-question-content\">\n\n\n                                                        <div formArrayName=\"answers\">\n                                                            <div\n                                                                *ngFor=\"let Y of question['controls'].answers['controls']; let iy=index\">\n                                                                <div formGroupName=\"{{iy}}\" class=\"Ys\">\n                                                                    <div class=\"question-option-wrap\">\n                                                                        <div\n                                                                            class=\"ant-row ant-form-item ant-form-item-no-colon is-valid is-pristine is-untouched is-unfocused\">\n                                                                            <div class=\"ant-form-item-label\"><label\n                                                                                    class=\"ant-form-item-required\"\n                                                                                    title=\"1.\">{{iy+1}}.</label>\n                                                                            </div>\n                                                                            <div class=\"ant-form-item-control-wrapper\">\n                                                                                <div class=\"ant-form-item-control\"><span\n                                                                                        class=\"ant-form-item-children\">\n                                                                                        <textarea\n                                                                                            formControlName=\"answer\"\n                                                                                            class=\"ant-input\"\n                                                                                            style=\"height: 31px; min-height: 31px; max-height: 136px; overflow-y: hidden;\"></textarea></span>\n                                                                                </div>\n                                                                            </div>\n                                                                        </div>\n\n                                                                        <div class=\"ant-col-6 flex-colume record\">\n                                                                            <div\n                                                                                class=\"ant-row ant-form-item is-valid is-pristine is-untouched is-unfocused\">\n                                                                                <div class=\"ant-form-item-label\"><label\n                                                                                        class=\"ant-form-item-required\"\n                                                                                        title=\"value\">value</label>\n                                                                                </div>\n                                                                                <div\n                                                                                    class=\"ant-form-item-control-wrapper\">\n                                                                                    <div class=\"ant-form-item-control\">\n                                                                                        <span\n                                                                                            class=\"ant-form-item-children\"><input\n                                                                                                type=\"text\"\n                                                                                                class=\"ant-input\"\n                                                                                                (keypress)=\"numberOnly($event)\"\n                                                                                                (blur)=\"checkMaxData($event)\"\n                                                                                                formControlName=\"value\"></span>\n                                                                                    </div>\n                                                                                </div>\n                                                                            </div>\n                                                                        </div>\n\n                                                                        <div *ngIf=\"iy!=0\" (click)=\"removeAnswer(ix,iy)\"\n                                                                            class=\"remove-icon\"><a\n                                                                                href=\"javaScript:void(0)\"><i\n                                                                                    class=\"anticon  fa fa-times\"></i></a>\n                                                                        </div>\n\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n\n\n\n\n                                                        <div *ngIf=\"form.controls.questions.controls[ix].controls.answers.controls.length<5\"\n                                                            class=\"add-option\" (click)=\"addAnswer(ix)\"><a\n                                                                class=\"link-button-root link-button-default\"\n                                                                href=\"javaScript:void(0)\"><i\n                                                                    class=\"anticon fa fa-plus-circle\"></i>\n                                                                Add\n                                                                option</a>\n                                                        </div>\n\n                                                    </div>\n                                                </div>\n                                                <div class=\"goal-question-footer\">\n                                                    <div class=\"ant-row-flex ant-row-flex-space-between\">\n                                                        <div class=\"\">\n                                                            <div><span><i class=\"choice-icon\"></i> Multiple\n                                                                    Choice</span></div>\n                                                        </div>\n                                                        <div class=\"\"><a *ngIf=\"ix!=0\" (click)=\"move(-1, ix)\"\n                                                                class=\"footer-btn link-button-root link-button-default\"\n                                                                href=\"javaScript:void(0)\"><i\n                                                                    class=\"anticon fa fa-caret-square-o-up\"\n                                                                    style=\"font-size: 16px;\"></i></a>\n                                                            <a *ngIf=\"ix != (lc-1)\" (click)=\"move(1, ix)\"\n                                                                class=\"footer-btn disabled-btn link-button-root link-button-default link-button-disabled\"\n                                                                href=\"javaScript:void(0)\"><i\n                                                                    class=\"anticon fa fa-caret-square-o-down\"\n                                                                    style=\"font-size: 16px;\"></i></a>\n                                                            <a *ngIf=\"ix!=0\" (click)=\"removeQuestion(ix)\"\n                                                                class=\"footer-btn link-button-root link-button-default\"\n                                                                href=\"javaScript:void(0)\"><i\n                                                                    class=\"anticon fa fa-trash-o\"\n                                                                    style=\"font-size: 16px;\"></i></a>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- <button type=\"button\" (click)=\"saveQuestionaire()\">Save Data</button> -->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-thematic/edit-thematic.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-thematic/edit-thematic.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ngx-spinner *ngIf=\"isShowSpinner\"></ngx-spinner>\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <form [formGroup]=\"thematicForm\" (ngSubmit)=\"addThematic()\">\n                    <div class=\"enterKey\">\n                        <div class=\"SearchBox\">\n                            <a href=\"javaScript:void(0)\" (click)=backClicked() class=\"ml-0\">\n                                << Back</a>\n                        </div>\n                        <div class=\"SearchBox SearchBoxModel\">\n                            <button class=\"thematic-buttons\"\n                                [style.background-color]=\"thematicForm.invalid ? 'gray' : ''\"\n                                [style.cursor]=\"thematicForm.invalid ? 'not-allowed' : ''\"\n                                [disabled]=\" !thematicForm.valid\" type=\"submit\"><i class=\"fa fa-file-text\"\n                                    aria-hidden=\"true\"></i>Update</button>\n                        </div>\n                    </div>\n\n                    <div class=\"bread mt-3\">\n                        <nav aria-label=\"breadcrumb\">\n                            <ol class=\"breadcrumb\">\n                                <li class=\"breadcrumb-item active\" aria-current=\"page\">Edit Thematic</li>\n                            </ol>\n                        </nav>\n                    </div>\n\n                    <div class=\"NewModel adjust\">\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Select Model</label>\n                                        <select name=\"\" formControlName=\"models\" id=\"\" class=\"ant-input\">\n                                            <option *ngFor=\"let item of modelList\" [ngValue]=\"item._id\">\n                                                {{item.modelName}}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </div>\n\n                                <div class=\"Filter\">\n                                    <div class=\"form-group\">\n                                        <label>Description</label>\n                                        <textarea formControlName=\"description\" id=\"\" cols=\"104\" rows=\"5\"></textarea>\n                                    </div>\n                                </div>\n\n                                <!-- <div class=\" adjust\">\n                                    <div class=\"colAdjust\">\n                                        <h3 style=\"text-align: left;\">Model Assigned </h3>\n                                    </div>\n                                    <div class=\"SearchBox SearchBoxModel\">\n                                        <a href=\"javaScript:void(0)\" class=\"ml-0\"><i class=\"fa fa-plus-circle\"\n                                                aria-hidden=\"true\"></i>Add Model</a>\n                                    </div>\n                                </div> -->\n                            </div>\n                            <div class=\"col-md-4\">\n                                <!-- <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Image</label>\n                                        <input type=\"file\" formControlName=\"image\" (change)=\"onFileSelected($event)\"\n                                            class=\"form-control\" placeholder=\"Name\">\n                                    </div>\n                                </div> -->\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Thematic Name</label>\n                                        <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                                            placeholder=\"Name\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-md-5 chartMain colAdjust\">\n                                <h3>Target Allocation</h3>\n                                <div class=\"ClientAccount pb-3\">\n                                    <h4 style=\"text-transform: uppercase; text-align: center;\"><strong>Balance\n                                            Sheets\n                                            Components</strong></h4>\n                                </div>\n                                <div class=\"chart\" style=\"    margin: 0 auto;\" id=\"chart\">\n                                    <div class=\"newCharts\">\n                                        <div id=\"chart\" style=\"padding-left: 85px;\">\n                                            <apx-chart [series]=\"chartOptions.series\" [chart]=\"chartOptions.chart\"\n                                                [labels]=\"chartOptions.labels\" [title]=\"chartOptions.title\"\n                                                [theme]=\"chartOptions.theme\" [responsive]=\"chartOptions.responsive\">\n                                            </apx-chart>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n                <div style=\"display: flex;justify-content: space-between;padding: 35px 0px;\">\n                    <div class=\"totalCount totalCountModel\">\n                        <div class=\"SearchBox SearchBoxModel\">\n                            <a href=\"javaScript:void(0)\" class=\"ml-0\"><i class=\"fa fa-plus-circle\"\n                                    aria-hidden=\"true\"></i>Add New</a>\n                        </div>\n                        <div class=\"SearchBox\">\n                            <div class=\"SearchBox searchIcon\">\n                                <form action=\"\">\n                                    <input type=\"text\" style=\"width: 250px;\" placeholder=\"Search\">\n                                    <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                            src=\"assets/images/search.svg\" alt=\"\"></a>\n                                </form>\n\n                            </div>\n                        </div>\n\n\n                    </div>\n                    <div class=\"SearchBox SearchBoxModel\">\n                        <a href=\"javaScript:void(0)\" class=\"mr-4\"><i class=\"fa fa-download\"\n                                aria-hidden=\"true\"></i>Download</a>\n                    </div>\n                </div>\n\n                <div class=\"TableList\">\n                    <div class=\"mainTable \">\n                        <table class=\"table table-bordered \">\n                            <thead>\n                                <tr>\n                                    <th>Ticker</th>\n                                    <th> Name</th>\n                                    <th>Latest Price</th>\n                                    <th>holdings type</th>\n                                    <th>allocation %</th>\n\n                                </tr>\n                            </thead>\n\n                            <tbody>\n                                <tr>\n                                    <td>USD Cash</td>\n                                    <td>USD Cash</td>\n                                    <td></td>\n                                    <td> Cash</td>\n                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"26%\"\n                                                readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                        </span></td>\n\n                                </tr>\n                                <tr>\n                                    <td class=\"sky\">AMZN</td>\n                                    <td>USD Cash</td>\n                                    <td>3,311.00</td>\n                                    <td class=\"sky\"> Stock</td>\n                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"24%\"\n                                                readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                        </span></td>\n\n                                </tr>\n                                <tr>\n                                    <td class=\"sky\">MSFT</td>\n                                    <td>USD Cash</td>\n                                    <td>223.31</td>\n                                    <td class=\"sky\"> Stock</td>\n                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"40%\"\n                                                readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                        </span></td>\n\n                                </tr>\n                                <tr>\n                                    <td class=\"sky\">AAPL</td>\n                                    <td>USD Cash</td>\n                                    <td>121.42</td>\n                                    <td class=\"sky\"> Stock</td>\n                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"20.8%\"\n                                                readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                        </span></td>\n\n                                </tr>\n                                <tr>\n                                    <td class=\"sky\">AAPL</td>\n                                    <td>USD Cash</td>\n                                    <td>983.00</td>\n                                    <td class=\"sky\"> Stock</td>\n                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"20.6%\"\n                                                readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                        </span></td>\n\n                                </tr>\n                                <tr>\n                                    <td>USD Cash</td>\n                                    <td>USD Cash</td>\n                                    <td></td>\n                                    <td> Cash</td>\n                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"29%\"\n                                                readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                        </span></td>\n\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"LoginArea\">\n    <div class=\"logoMainImg\">\n        <img src=\"assets/images/logo.png\">\n    </div>\n    <div class=\"LoginBox\">\n        <h5>Forgot Password</h5>\n        <form>\n            <div class=\"form-group\">\n                <input type=\"email\" placeholder=\"Enter Your Email ID\" class=\"form-control\">\n                <span class=\"Icon\"><i class=\"fa fa-envelope\"></i></span>\n            </div>\n\n\n            <a class=\"Login\" [routerLink]=\"['/']\">Submit</a>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/free-stock/free-stock.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/free-stock/free-stock.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<!-- <div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"wait-list\">\n                    <h2 class=\"sky text-center\">Wait List</h2>\n                    <div class=\"wait-list-area\">\n                        <h4><span class=\"sky\">Serial No. </span> 1</h4>\n                        <h4><span class=\"sky\">Email Id :</span>vishu@gmail.com</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"enterKey\">\n                    <div class=\"SearchBox\">\n                        <h3>Free Stock Distribution</h3>\n                    </div>\n                    <!-- <div class=\"SearchBox\">\n                        <form action=\"\">\n                            <input type=\"text\" placeholder=\"Search Name, Email\">\n                            <button type=\"button\">Apply</button>\n                        </form>\n                    </div> -->\n\n                </div>\n                <div class=\"TableList\" style=\"padding-top: 40px;\">\n                    <div class=\"mainTable \">\n                        <table class=\"table table-bordered \">\n                            <thead>\n                                <tr>\n                                    <th>S.No</th>\n                                    <th>Date</th>\n                                    <th>Time</th>\n                                    <th>User Name </th>\n                                    <th>User Email </th>\n                                    <th>Friends Name</th>\n                                    <th>Friends Email</th>\n                                    <th>Friends Phone No.</th>\n                                    <th>Stock Name</th>\n                                    <th>Stock Image</th>\n                                    <th>Friend Registered (Yes/No)</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let user of referList; let i = index\">\n                                    <td>{{i+1}}</td>\n                                    <td>20|11|21</td>\n                                    <td>2 a.m</td>\n                                    <td>{{user?.yourName}}</td>\n                                    <td>{{user?.yourEmail}}</td>\n                                    <td>{{user?.friendName}}</td>\n                                    <td>{{user?.friendEmail}}</td>\n                                    <td>{{user?.friendPhone}}</td>\n                                    <td>{{user?.stockName}}</td>\n                                    <td class=\"tdImg\"><img src=\"assets/images/logo.png\" alt=\"stock\" class=\"img-fluid\">\n                                    </td>\n                                    <td>Yes</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Header\">\n    <div class=\"Logo\">\n        <a [routerLink]=\"['/summary']\" class=\"mudaniLogo\"><img src=\"assets/images/logo.png\"></a>\n        <div class=\"logoMid\">\n            <ul class=\"nav \">\n                <li class=\"nav-item \" [routerLinkActive]=\"['active']\">\n                    <a class=\"nav-link\" [routerLink]=\"['/summary']\">Summary | Overview</a>\n                </li>\n                <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n                    <a class=\"nav-link \" [routerLink]=\"['/client']\">Clients</a>\n                </li>\n                <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n                    <a class=\"nav-link \" [routerLink]=\"['/investing']\">Investing</a>\n                </li>\n                <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n                    <a class=\"nav-link\" [routerLink]=\"['/transactions']\">Transactions</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"Navigation\">\n        <div class=\"header-notifications\">\n            <a [routerLink]=\"['/notification']\">\n                <i class=\"fa fa-bell fa-2x\" aria-hidden=\"true\"></i>\n                <span class=\"badge\">5</span>\n            </a>\n\n        </div>\n\n        <div class=\"Avater\">\n            <a href=\"javascript:void(0);\">\n                <figure><img src=\"assets/images/profile.jpg\"></figure> Vishu\n            </a>\n            <ul>\n                <li>\n                    <figure><img src=\"assets/images/profile.jpg\"></figure>\n                    <h4> Bob Hyden <span>Administrator</span></h4>\n                </li>\n                <li><a [routerLink]=\"['/report-management']\"><span><i class=\"fa fa-flag-o\"\n                                aria-hidden=\"true\"></i></span> Compliance</a></li>\n                <li><a [routerLink]=\"['/questionnaire']\"><span><i class=\"fa fa-question-circle-o\"\n                                aria-hidden=\"true\"></i></span> Questionnaire</a></li>\n\n                <!-- <li><a [routerLink]=\"['/popularetfs']\"><span><i class=\"fa fa-question-circle-o\"\n                                aria-hidden=\"true\"></i></span> Add Popular Stocks</a></li> -->\n                <li><a [routerLink]=\"['/add-ticker']\"><span><i class=\"fa fa-question-circle-o\"\n                                aria-hidden=\"true\"></i></span> Add Popular Stocks</a></li>\n\n                <li><a [routerLink]=\"['/compliance']\"><span><i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i></span>\n                        Fee Schedule\n                    </a></li>\n                <li><a [routerLink]=\"['/wait-list']\"><span><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i></span> Wait\n                        List</a></li>\n                <!-- <li><a [routerLink]=\"['/popularetfs']\"><span><i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i></span>\n                            Stocks/Etfs</a></li> -->\n                <li><a [routerLink]=\"['/free-stock-distribution']\"><span><i class=\"fa fa-line-chart\"\n                                aria-hidden=\"true\"></i></span> Free Stock Referral\n                    </a></li>\n                <li><a [routerLink]=\"['/support']\"><span><i class=\"fa fa-life-ring\" aria-hidden=\"true\"></i></span>\n                        Support</a></li>\n                <li><a [routerLink]=\"['/settings']\"><span><i class=\"fa fa-cog\"></i></span> Setting</a></li>\n                <!-- <li><a [routerLink]=\"['/static-content-managment']\"><span><i class=\"fa fa-font\"></i></span> Content\n                        Management</a></li> -->\n                <li><a [routerLink]=\"['/notification']\"><span><i class=\"fa fa-bell-o\" aria-hidden=\"true\"></i></span>\n                        Send Notifications</a></li>\n                <li><a [routerLink]=\"['/']\"><span><i class=\"fa fa-sign-out\"></i></span> Logout</a></li>\n            </ul>\n        </div>\n        <div class=\"clear\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/invest-cash/invest-cash.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/invest-cash/invest-cash.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"enterKey\">\n                    <div class=\"SearchBox\">\n                        <a href=\"javaScript:void(0)\" (click)=backClicked()><< Back</a>\n                    </div>\n                </div>\n                <div class=\"bread mt-3\">\n                    <nav aria-label=\"breadcrumb\">\n                        <ol class=\"breadcrumb\">\n                          <li class=\"breadcrumb-item\">Trading & Rebalancing</li>\n                          <li class=\"breadcrumb-item active\" aria-current=\"page\">Invest Cash</li>\n                        </ol>\n                      </nav>\n                </div>\n\n                <div class=\"HelpArea\">\n                    <ul class=\"nav nav-tabs boxs justify-content-around pt-4 newBlock\" id=\"myTab\" role=\"tablist\">\n                        <li class=\"nav-item \">\n                            <a class=\"nav-link active\" id=\"Raise-tab\" data-toggle=\"tab\" href=\"#Raise\" role=\"tab\" aria-controls=\"Raise\" aria-selected=\"true\">Raise Cash</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link \" id=\"Invest-tab\" data-toggle=\"tab\" href=\"#Invest\" role=\"tab\" aria-controls=\"Invest\" aria-selected=\"false\">Invest Cash</a>\n                        </li>\n                    </ul>\n\n                    <div class=\"tab-content\" id=\"myTabContent\">\n                        <div class=\"tab-pane fade show active\" id=\"Raise\" role=\"tabpanel\" aria-labelledby=\"Raise-tab\">\n                            <div class=\"TableList\">\n                                <div class=\"mainTable \">\n                                    <table class=\"table table-bordered \">\n                                        <thead>\n                                            <tr>\n                                                <th>S.No</th>\n                                                <th>Client Name</th> \n                                                <th>Account Number</th>  \n                                                <th>Portfolio Name</th>  \n                                                <th>Date of Raising </th>  \n                                                <th>Amount Raised</th>  \n                                            </tr>\n                                        </thead>\n                        \n                                        <tbody>\n                                            <tr>\n                                                <td>1</td>\n                                                <td>Simmi Sharma</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>    \n                                            <tr>\n                                                <td>2</td>\n                                                <td>Vishal Yadav</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>  \n                                            <tr>\n                                                <td>3</td>\n                                                <td>Simmi Sharma</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>  \n                                            <tr>\n                                                <td>4</td>\n                                                <td>Simmi Sharma</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>  \n                                            <tr>\n                                                <td>5</td>\n                                                <td>Simmi Sharma</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>  \n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"Pagination\">\n                                    <ul>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/left-arrow.svg\" alt=\"\"></a></li>\n                                        <li class=\"active\"><a href=\"javaScript:void(0)\">1</a></li>\n                                        <li><a href=\"javaScript:void(0)\">2</a></li>\n                                        <li><a href=\"javaScript:void(0)\">3</a></li>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/right-arrow.svg\" alt=\"\"></a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade\" id=\"Invest\" role=\"tabpanel\" aria-labelledby=\"Invest-tab\">\n                            <div class=\"TableList\">\n                                <div class=\"mainTable \">\n                                    <table class=\"table table-bordered \">\n                                        <thead>\n                                            <tr>\n                                                <th>S.No</th>\n                                                <th>Client Name</th> \n                                                <th>Account Number</th>  \n                                                <th>Portfolio Name</th>  \n                                                <th>Date of Investing </th>  \n                                                <th>Amount Invested</th>  \n                                            </tr>\n                                        </thead>\n                        \n                                        <tbody>\n                                            <tr>\n                                                <td>1</td>\n                                                <td>Simmi Sharma</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>    \n                                            <tr>\n                                                <td>2</td>\n                                                <td>Vishal Yadav</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>  \n                                            <tr>\n                                                <td>3</td>\n                                                <td>Simmi Sharma</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>  \n                                            <tr>\n                                                <td>4</td>\n                                                <td>Simmi Sharma</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>  \n                                            <tr>\n                                                <td>5</td>\n                                                <td>Simmi Sharma</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>  \n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"Pagination\">\n                                    <ul>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/left-arrow.svg\" alt=\"\"></a></li>\n                                        <li class=\"active\"><a href=\"javaScript:void(0)\">1</a></li>\n                                        <li><a href=\"javaScript:void(0)\">2</a></li>\n                                        <li><a href=\"javaScript:void(0)\">3</a></li>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/right-arrow.svg\" alt=\"\"></a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/investing/investing.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/investing/investing.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ngx-spinner></ngx-spinner>\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea HelpArea55\">\n                <!-- <ul class=\"nav nav-tabs MainTabAll\">\n                    <li class=\"nav-item \">\n                        <a class=\"nav-link \" [routerLink]=\"['/summary']\">Summary | Overview</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link \" [routerLink]=\"['/client']\">Clients</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link active\" [routerLink]=\"['/investing']\">Investing</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/transactions']\">Transactions</a>\n                    </li>\n                </ul> -->\n\n                <!-- <div class=\"WrapperArea\"> -->\n                <!-- <div class=\"WrapperBox\"> -->\n                <!-- <div class=\"Small-Wrapper\"> -->\n                <div class=\"HelpArea\">\n                    <ul class=\"nav nav-tabs MainTabAll\" id=\"myTab\" role=\"tablist\">\n                        <li class=\"nav-item \">\n                            <a class=\"nav-link active\" id=\"Models-tab\" data-toggle=\"tab\"\n                                (click)=\"canActiveTabs('Models-tab','Models')\" role=\"tab\" aria-controls=\"Models\"\n                                aria-selected=\"true\">Models</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link \" id=\"Portfolio-tab\" data-toggle=\"tab\"\n                                (click)=\"canActiveTabs('Portfolio-tab','Portfolio')\" role=\"tab\"\n                                aria-controls=\"Portfolio\" aria-selected=\"false\">Portfolio</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link \" id=\"Rebalancing-tab\" data-toggle=\"tab\"\n                                (click)=\"canActiveTabs('Rebalancing-tab','Rebalancing')\" role=\"tab\"\n                                aria-controls=\"Rebalancing\" aria-selected=\"false\">Trading & Rebalancing</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" id=\"Thematic-tab\" data-toggle=\"tab\"\n                                (click)=\"canActiveTabs('Thematic-tab','Thematic')\" role=\"tab\" aria-controls=\"Thematic\"\n                                aria-selected=\"false\">Thematic</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" id=\"Orders-tab\" data-toggle=\"tab\"\n                                (click)=\"canActiveTabs('Orders-tab','Orders')\" role=\"tab\" aria-controls=\"Orders\"\n                                aria-selected=\"false\">Orders</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" id=\"Rewards-tab\" data-toggle=\"tab\"\n                                (click)=\"canActiveTabs('Rewards-tab','Rewards')\" role=\"tab\" aria-controls=\"Rewards\"\n                                aria-selected=\"false\">Rewards</a>\n                        </li>\n                    </ul>\n\n                    <div class=\"tab-content\" id=\"myTabContent\">\n                        <div class=\"tab-pane fade  show active\" id=\"Models\" role=\"tabpanel\"\n                            aria-labelledby=\"Models-tab\">\n                            <div class=\"enterKey\">\n                                <div class=\"SearchBox searchIcon\">\n                                    <form action=\"\">\n                                        <input type=\"text\" style=\"width: 250px;\" placeholder=\"Search\">\n                                        <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                                src=\"assets/images/search.svg\" alt=\"\"></a>\n                                    </form>\n                                    <!-- <a href=\"javaScript:void(0)\">\n                                        <img class=\"csv img-fluid\" src=\"assets/images/csv.svg\">Download</a> -->\n                                </div>\n                                <div class=\"SearchBox\">\n                                    <a [routerLink]=\"['/create-model']\">Create Model</a>\n                                </div>\n                            </div>\n                            <div class=\"TableList\">\n                                <div class=\"mainTable \">\n                                    <table class=\"table table-bordered \">\n                                        <thead>\n                                            <tr>\n                                                <th>S.No</th>\n                                                <th>Model Name</th>\n                                                <!-- <th>Holdings type</th> -->\n                                                <th>No. of Holdings</th>\n                                                <th>No. of Accounts</th>\n                                                <th>Linked Portfolio</th>\n\n                                            </tr>\n                                        </thead>\n\n\n                                        <tbody>\n\n                                            <tr *ngFor=\"let model of modelList; let i = index\">\n                                                <td>{{i+1}}</td>\n                                                <td><a class=\"Blue viewArea\"\n                                                        [routerLink]=\"['/model-detail/',model._id]\">{{model?.modelName}}</a>\n                                                </td>\n                                                <td>{{model?.models.length}}</td>\n                                                <!-- <td>{{model?.adjustedFrequency}}</td> -->\n                                                <td>0</td>\n                                                <td>0</td>\n                                                <!-- <td> In-Tolerance</td> -->\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <!-- <div class=\"Pagination\">\n                                    <ul>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/left-arrow.svg\"\n                                                    alt=\"\"></a></li>\n                                        <li class=\"active\"><a href=\"javaScript:void(0)\">1</a></li>\n                                        <li><a href=\"javaScript:void(0)\">2</a></li>\n                                        <li><a href=\"javaScript:void(0)\">3</a></li>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/right-arrow.svg\"\n                                                    alt=\"\"></a></li>\n                                    </ul>\n                                </div> -->\n                            </div>\n\n                        </div>\n                        <div class=\"tab-pane fade\" id=\"Portfolio\" role=\"tabpanel\" aria-labelledby=\"Portfolio-tab\">\n                            <div class=\"enterKey\">\n                                <div class=\"SearchBox searchIcon\">\n                                    <form action=\"\">\n                                        <input type=\"text\" style=\"width: 250px;\" placeholder=\"Search\">\n                                        <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                                src=\"assets/images/search.svg\" alt=\"\"></a>\n                                    </form>\n                                    <!-- <a href=\"javaScript:void(0)\">\n                                        <img class=\"csv img-fluid\" src=\"assets/images/csv.svg\">Download</a> -->\n                                </div>\n                                <div class=\"SearchBox\">\n                                    <a [routerLink]=\"['/create-portfolio']\">Add Portfolio</a>\n                                </div>\n                            </div>\n                            <div class=\"TableList\" style=\"padding-top: 40px;\">\n                                <div class=\"mainTable \">\n                                    <table class=\"table table-bordered \">\n                                        <thead>\n                                            <tr>\n                                                <th>S.No</th>\n                                                <th>Portfolio Name</th>\n                                                <th>Model Assigned</th>\n                                                <th>No. of Accounts</th>\n                                                <th>Risk Level</th>\n                                                <th>Total Return</th>\n                                                <th>Tolerance </th>\n                                                <th>Drift (Active | Passive) </th>\n                                                <th>Rebalance </th>\n                                            </tr>\n                                        </thead>\n\n                                        <tbody>\n                                            <tr *ngFor=\"let item of portfolioList; let incr=index;\">\n                                                <td>{{incr+1}}</td>\n                                                <td><a class=\"Blue viewArea\"\n                                                        [routerLink]=\"['/portfolio-detail/',item._id]\">{{item.name}}</a>\n                                                </td>\n                                                <td>{{item.models[0].modelName}}</td>\n                                                <td>0</td>\n                                                <td>{{item.riskLevel}}</td>\n                                                <td>$29,009</td>\n                                                <td>In-Tolerance</td>\n                                                <td>{{item.drift}}</td>\n                                                <td><a class=\"Blue viewArea\" href=\"javaScript:void(0)\">Rebalance</a>\n                                                </td>\n                                            </tr>\n\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <!-- <div class=\"Pagination\">\n                                    <ul>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/left-arrow.svg\"\n                                                    alt=\"\"></a></li>\n                                        <li class=\"active\"><a href=\"javaScript:void(0)\">1</a></li>\n                                        <li><a href=\"javaScript:void(0)\">2</a></li>\n                                        <li><a href=\"javaScript:void(0)\">3</a></li>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/right-arrow.svg\"\n                                                    alt=\"\"></a></li>\n                                    </ul>\n                                </div> -->\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade\" id=\"Rebalancing\" role=\"tabpanel\" aria-labelledby=\"Rebalancing-tab\">\n                            <h4 class=\"sky\">Portfolio</h4>\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <div class=\"InvestingTrading \">\n                                        <div class=\"InvestingTolerance\">\n                                            <div class=\"retailClient\">\n                                                <h5><span class=\"roundBox red\"></span> 0<span class=\"d-block Red\">Out of\n                                                        Tolerance</span></h5>\n                                            </div>\n                                            <div class=\"SearchBox d-block\">\n                                                <a [routerLink]=\"['/raise-cash']\">Raise Cash</a>\n                                            </div>\n                                        </div>\n                                        <div class=\"InvestingTolerance float-right\">\n                                            <div class=\"retailClient\">\n                                                <h5><span class=\"roundBox green\"></span> 0<span\n                                                        class=\"d-block Green\">With in Tolerance</span></h5>\n                                            </div>\n                                            <div class=\"SearchBox d-block\">\n                                                <a [routerLink]=\"['/invest-cash']\">Invest Cash</a>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"accountProcessed\">\n                                        <h5>Account to be Processed</h5>\n                                        <div class=\"newDeposits\">\n                                            <p>New Deposits <i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i>\n                                                <span class=\"d-block ml-2\">0</span></p>\n                                        </div>\n                                        <div class=\"newDeposits\">\n                                            <p>New Withdrawals <i class=\"fa fa-question-circle-o\"\n                                                    aria-hidden=\"true\"></i> <span class=\"d-block ml-2\">0</span></p>\n                                        </div>\n                                        <div class=\"newDeposits\">\n                                            <p>Liquidations <i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i>\n                                                <span class=\"d-block ml-2\">0</span></p>\n                                        </div>\n                                        <div class=\"newDeposits\">\n                                            <p>No Portfolio Assigned <i class=\"fa fa-question-circle-o\"\n                                                    aria-hidden=\"true\"></i> <span class=\"d-block ml-2\">0</span></p>\n                                        </div>\n                                        <div class=\"newDeposits\">\n                                            <p>No Action <i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i>\n                                                <span class=\"d-block ml-2\">0</span></p>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"accountProcessed\">\n                                        <h5>Task Summary</h5>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">\n                                                <div class=\"newDeposits\">\n                                                    <p>Pending Submit <i class=\"fa fa-question-circle-o\"\n                                                            aria-hidden=\"true\"></i> <span class=\"d-block ml-2\">1</span>\n                                                    </p>\n                                                </div>\n                                                <div class=\"newDeposits\">\n                                                    <p>Cancelling <i class=\"fa fa-question-circle-o\"\n                                                            aria-hidden=\"true\"></i> <span class=\"d-block ml-2\">0</span>\n                                                    </p>\n                                                </div>\n                                                <div class=\"newDeposits\">\n                                                    <p>Rejected (Last Day) <i class=\"fa fa-question-circle-o\"\n                                                            aria-hidden=\"true\"></i> <span class=\"d-block ml-2\">0</span>\n                                                    </p>\n                                                </div>\n                                                <div class=\"newDeposits\">\n                                                    <p>Finished (Last Day) <i class=\"fa fa-question-circle-o\"\n                                                            aria-hidden=\"true\"></i> <span class=\"d-block ml-2\">0</span>\n                                                    </p>\n                                                </div>\n\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <div class=\"newDeposits\">\n                                                    <p>Submmited <i class=\"fa fa-question-circle-o\"\n                                                            aria-hidden=\"true\"></i> <span class=\"d-block ml-2\">0</span>\n                                                    </p>\n                                                </div>\n                                                <div class=\"newDeposits\">\n                                                    <p>Failed (Last Day) <i class=\"fa fa-question-circle-o\"\n                                                            aria-hidden=\"true\"></i> <span class=\"d-block ml-2\">0</span>\n                                                    </p>\n                                                </div>\n                                                <div class=\"newDeposits\">\n                                                    <p>Cancelled (Last Day) <i class=\"fa fa-question-circle-o\"\n                                                            aria-hidden=\"true\"></i> <span class=\"d-block ml-2\">0</span>\n                                                    </p>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <hr class=\"hrLine\">\n                            <div class=\"TableList\">\n                                <div class=\"mainTable \">\n                                    <table class=\"table table-bordered \">\n                                        <thead>\n                                            <tr>\n                                                <th>S.No</th>\n                                                <th>Name</th>\n                                                <th>Owner</th>\n                                                <th>Market Value</th>\n                                                <th>Available</th>\n                                                <th>Projected Target </th>\n                                                <th>Cash Target </th>\n                                                <th>Model </th>\n                                                <th>Trade Model </th>\n                                                <th>Trade Cal </th>\n                                                <th>ST Gain </th>\n                                                <th>Buys </th>\n                                                <th>Sells </th>\n                                            </tr>\n                                        </thead>\n\n                                        <tbody>\n                                            <tr>\n                                                <td>1</td>\n                                                <td class=\"sky \">FLAGSSHIPS</td>\n                                                <td>Stocks | EFT</td>\n                                                <td>4</td>\n                                                <td>$29,009</td>\n                                                <td>In</td>\n                                                <td>Active</td>\n                                                <td>Active</td>\n                                                <td>Rebalance</td>\n                                                <td>Rebalance</td>\n                                                <td>Rebalance</td>\n                                                <td class=\"Green\">Rebalance</td>\n                                                <td class=\"Red\">Rebalance</td>\n                                            </tr>\n                                            <tr>\n                                                <td>2</td>\n                                                <td class=\"sky \">FLAGSSHIPS</td>\n                                                <td>Stocks | EFT</td>\n                                                <td>4</td>\n                                                <td>$29,009</td>\n                                                <td>In</td>\n                                                <td>Active</td>\n                                                <td>Active</td>\n                                                <td>Rebalance</td>\n                                                <td>Rebalance</td>\n                                                <td>Rebalance</td>\n                                                <td class=\"Green\">Rebalance</td>\n                                                <td class=\"Red\">Rebalance</td>\n                                            </tr>\n                                            <tr>\n                                                <td>3</td>\n                                                <td class=\"sky \">FLAGSSHIPS</td>\n                                                <td>Stocks | EFT</td>\n                                                <td>4</td>\n                                                <td>$29,009</td>\n                                                <td>In</td>\n                                                <td>Active</td>\n                                                <td>Active</td>\n                                                <td>Rebalance</td>\n                                                <td>Rebalance</td>\n                                                <td>Rebalance</td>\n                                                <td class=\"Green\">Rebalance</td>\n                                                <td class=\"Red\">Rebalance</td>\n                                            </tr>\n                                            <tr>\n                                                <td>4</td>\n                                                <td class=\"sky \">FLAGSSHIPS</td>\n                                                <td>Stocks | EFT</td>\n                                                <td>4</td>\n                                                <td>$29,009</td>\n                                                <td>In</td>\n                                                <td>Active</td>\n                                                <td>Active</td>\n                                                <td>Rebalance</td>\n                                                <td>Rebalance</td>\n                                                <td>Rebalance</td>\n                                                <td class=\"Green\">Rebalance</td>\n                                                <td class=\"Red\">Rebalance</td>\n                                            </tr>\n                                            <tr>\n                                                <td>5</td>\n                                                <td class=\"sky \">FLAGSSHIPS</td>\n                                                <td>Stocks | EFT</td>\n                                                <td>4</td>\n                                                <td>$29,009</td>\n                                                <td>In</td>\n                                                <td>Active</td>\n                                                <td>Active</td>\n                                                <td>Rebalance</td>\n                                                <td>Rebalance</td>\n                                                <td>Rebalance</td>\n                                                <td class=\"Green\">Rebalance</td>\n                                                <td class=\"Red\">Rebalance</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"Pagination\">\n                                    <ul>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/left-arrow.svg\"\n                                                    alt=\"\"></a></li>\n                                        <li class=\"active\"><a href=\"javaScript:void(0)\">1</a></li>\n                                        <li><a href=\"javaScript:void(0)\">2</a></li>\n                                        <li><a href=\"javaScript:void(0)\">3</a></li>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/right-arrow.svg\"\n                                                    alt=\"\"></a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade\" id=\"Thematic\" role=\"tabpanel\" aria-labelledby=\"Thematic-tab\">\n                            <div class=\"enterKey\">\n                                <div class=\"SearchBox\">\n                                    <div class=\"SearchBox searchIcon\">\n                                        <form action=\"\">\n                                            <input type=\"text\" style=\"width: 250px;\" placeholder=\"Search\">\n                                            <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                                    src=\"assets/images/search.svg\" alt=\"\"></a>\n                                        </form>\n\n                                    </div>\n                                </div>\n                                <div class=\"SearchBox\">\n                                    <a [routerLink]=\"['/create-thematic']\">Add Thematic</a>\n                                </div>\n                            </div>\n                            <div class=\"TableList\">\n                                <div class=\"mainTable \">\n                                    <table class=\"table table-bordered \">\n                                        <thead>\n                                            <tr>\n                                                <th>S.No</th>\n                                                <th>Thematic Name</th>\n                                                <th>Model Assigned</th>\n                                                <th>No. of Accounts</th>\n                                                <th>Total Return</th>\n                                                <th>In-Tolerance | Out-Tolerance </th>\n                                                <th>Drift (Active | Passive) </th>\n                                                <th>Rebalance </th>\n                                            </tr>\n                                        </thead>\n\n                                        <tbody>\n                                            <tr *ngFor=\"let item of thematicList; let incr=index; \">\n                                                <td>{{incr+1}}</td>\n                                                <td><a class=\"Blue viewArea\"\n                                                        [routerLink]=\"['/thematic-detail/',item._id]\">{{item.thematicName}}</a>\n                                                </td>\n                                                <td>{{item.models[0].modelName}}</td>\n                                                <td>0</td>\n                                                <td>$0</td>\n                                                <td>In-Tolerance</td>\n                                                <td>Active</td>\n                                                <td><a class=\"Blue viewArea\" href=\"javaScript:void(0)\">Rebalance</a>\n                                                </td>\n                                            </tr>\n                                            <!-- <tr>\n                                                <td>2</td>\n                                                <td><a class=\"Blue viewArea\"\n                                                        [routerLink]=\"['/thematic-detail']\">FLAGSSHIPS</a></td>\n                                                <td>Stocks | EFT</td>\n                                                <td>4</td>\n                                                <td>$29,009</td>\n                                                <td>In-Tolerance</td>\n                                                <td>Active</td>\n                                                <td><a class=\"Blue viewArea\" href=\"javaScript:void(0)\">Rebalance</a>\n                                                </td>\n                                            </tr> -->\n\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"Pagination\">\n                                    <ul>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/left-arrow.svg\"\n                                                    alt=\"\"></a></li>\n                                        <li class=\"active\"><a href=\"javaScript:void(0)\">1</a></li>\n                                        <li><a href=\"javaScript:void(0)\">2</a></li>\n                                        <li><a href=\"javaScript:void(0)\">3</a></li>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/right-arrow.svg\"\n                                                    alt=\"\"></a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade\" id=\"Orders\" role=\"tabpanel\" aria-labelledby=\"Orders-tab\">\n                            <div class=\"enterKey\">\n                                <div class=\"SearchBox\">\n                                    <div class=\"SearchBox searchIcon\">\n                                        <form action=\"\">\n                                            <input type=\"text\" style=\"width: 250px;\" placeholder=\"Search\">\n                                            <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                                    src=\"assets/images/search.svg\" alt=\"\"></a>\n                                        </form>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"TableList\">\n                                <div class=\"mainTable \">\n                                    <table class=\"table table-bordered \">\n                                        <thead>\n                                            <tr>\n\n                                                <th>Client Name</th>\n                                                <th>Account No.</th>\n                                                <th>Stock Ticker</th>\n                                                <th>Stock Name</th>\n                                                <th>Quantity </th>\n                                                <th>Price </th>\n                                                <th>Market Value </th>\n                                                <th>trade type</th>\n                                            </tr>\n                                        </thead>\n\n                                        <tbody>\n                                            <tr>\n\n                                                <td class=\"sky\">John</td>\n                                                <td>2345676543</td>\n                                                <td class=\"Blue sky viewArea\">APL</td>\n                                                <td>Apple</td>\n                                                <td>2</td>\n                                                <td>$2343</td>\n                                                <td class=\"Green\">$23454</td>\n                                                <td>buy</td>\n                                            </tr>\n                                            <tr>\n\n                                                <td class=\"sky\">John</td>\n                                                <td>2345676543</td>\n                                                <td class=\"Blue sky viewArea\">APL</td>\n                                                <td>Apple</td>\n                                                <td>2</td>\n                                                <td>$2343</td>\n                                                <td class=\"Green\">$23454</td>\n                                                <td>sell</td>\n                                            </tr>\n                                            <tr>\n\n                                                <td class=\"sky\">John</td>\n                                                <td>2345676543</td>\n                                                <td class=\"Blue sky viewArea\">APL</td>\n                                                <td>Apple</td>\n                                                <td>2</td>\n                                                <td>$2343</td>\n                                                <td class=\"Green\">$23454</td>\n                                                <td>buy</td>\n                                            </tr>\n                                            <tr>\n\n                                                <td class=\"sky\">John</td>\n                                                <td>2345676543</td>\n                                                <td class=\"Blue sky viewArea\">APL</td>\n                                                <td>Apple</td>\n                                                <td>2</td>\n                                                <td>$2343</td>\n                                                <td class=\"Green\">$23454</td>\n                                                <td>sell</td>\n                                            </tr>\n                                            <tr>\n\n                                                <td class=\"sky\">John</td>\n                                                <td>2345676543</td>\n                                                <td class=\"Blue sky viewArea\">APL</td>\n                                                <td>Apple</td>\n                                                <td>2</td>\n                                                <td>$2343</td>\n                                                <td class=\"Green\">$23454</td>\n                                                <td>buy</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"Pagination\">\n                                    <ul>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/left-arrow.svg\"\n                                                    alt=\"\"></a></li>\n                                        <li class=\"active\"><a href=\"javaScript:void(0)\">1</a></li>\n                                        <li><a href=\"javaScript:void(0)\">2</a></li>\n                                        <li><a href=\"javaScript:void(0)\">3</a></li>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/right-arrow.svg\"\n                                                    alt=\"\"></a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade\" id=\"Rewards\" role=\"tabpanel\" aria-labelledby=\"Rewards-tab\">\n                            <div class=\"enterKey\">\n                                <div class=\"SearchBox\">\n                                    <div class=\"SearchBox searchIcon\">\n                                        <form action=\"\">\n                                            <input type=\"text\" style=\"width: 250px;\" placeholder=\"Search\">\n                                            <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                                    src=\"assets/images/search.svg\" alt=\"\"></a>\n                                        </form>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"TableList\">\n                                <div class=\"mainTable \">\n                                    <table class=\"table table-bordered \">\n                                        <thead>\n                                            <tr>\n                                                <th>S.No</th>\n                                                <th>Client Name</th>\n                                                <th>Level</th>\n                                                <th>Reward Earned</th>\n                                                <th>Earned Date</th>\n                                                <th>Client's Email </th>\n                                                <th>Referral Email </th>\n                                            </tr>\n                                        </thead>\n\n                                        <tbody>\n                                            <tr>\n                                                <td>1</td>\n                                                <td>Alisson Maxwell</td>\n                                                <td>Level-1</td>\n                                                <td class=\"Blue sky viewArea\">APL</td>\n                                                <td>20-oct-20</td>\n                                                <td>In@gmail.com</td>\n                                                <td>rea@gmail.com</td>\n                                            </tr>\n                                            <tr>\n                                                <td>2</td>\n                                                <td>Alisson Maxwell</td>\n                                                <td>Level-1</td>\n                                                <td class=\"Blue sky viewArea\">APL</td>\n                                                <td>20-oct-20</td>\n                                                <td>In@gmail.com</td>\n                                                <td>rea@gmail.com</td>\n                                            </tr>\n                                            <tr>\n                                                <td>3</td>\n                                                <td>Alisson Maxwell</td>\n                                                <td>Level-1</td>\n                                                <td class=\"Blue sky viewArea\">APL</td>\n                                                <td>20-oct-20</td>\n                                                <td>In@gmail.com</td>\n                                                <td>rea@gmail.com</td>\n                                            </tr>\n                                            <tr>\n                                                <td>4</td>\n                                                <td>Alisson Maxwell</td>\n                                                <td>Level-1</td>\n                                                <td class=\"Blue sky viewArea\">APL</td>\n                                                <td>20-oct-20</td>\n                                                <td>In@gmail.com</td>\n                                                <td>rea@gmail.com</td>\n                                            </tr>\n                                            <tr>\n                                                <td>5</td>\n                                                <td>Alisson Maxwell</td>\n                                                <td>Level-1</td>\n                                                <td class=\"Blue sky viewArea\">APL</td>\n                                                <td>20-oct-20</td>\n                                                <td>In@gmail.com</td>\n                                                <td>rea@gmail.com</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"Pagination\">\n                                    <ul>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/left-arrow.svg\"\n                                                    alt=\"\"></a></li>\n                                        <li class=\"active\"><a href=\"javaScript:void(0)\">1</a></li>\n                                        <li><a href=\"javaScript:void(0)\">2</a></li>\n                                        <li><a href=\"javaScript:void(0)\">3</a></li>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/right-arrow.svg\"\n                                                    alt=\"\"></a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- </div> -->\n                <!-- </div> -->\n                <!-- </div> -->\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"LoginArea\">\n  <div class=\"loginContent\">\n    <div class=\"logoMainImg\">\n        <img src=\"assets/images/logo.png\">\n    </div>\n    <h2>Lorem ipsum</h2>\n  </div>\n    <div class=\"LoginBox\">\n        <h5>Advisory Dashboard</h5>\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n            <div class=\"form-group\">\n                <input type=\"text\" placeholder=\" Email \" class=\"form-control\" formControlName=\"email\">\n                <span class=\"Icon\"><i class=\"fa fa-envelope\"></i></span>\n                <p style=\"color: #FF0000\" *ngIf=\"loginSubmitCheck && loginForm.controls.email.hasError('required')\">\n                    Email is required</p>\n                <p style=\"color: #FF0000\" *ngIf=\"loginSubmitCheck && loginForm.controls.email.hasError('email')\">Email\n                    is not valid</p>\n            </div>\n            <div class=\"form-group\">\n                <input [type]=\"type\" placeholder=\" Password\" class=\"form-control\" formControlName=\"password\">\n                <span class=\"Icon\"><i class=\"fa fa-unlock-alt\"></i></span>\n                <a class=\"IconEye\" (click)=\"showPassword()\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></a>\n                <p style=\"color: #FF0000\" *ngIf=\"loginSubmitCheck && loginForm.controls.password.hasError('required')\">\n                    Password is required\n                </p>\n            </div>\n            <div class=\"Checkboxs\">\n                <a [routerLink]=\"['/forgot-passowrd']\">Forgot password?</a>\n                <label class=\"CheckBox\">Remember Me\n                    <input type=\"checkbox\">\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n            <button class=\"Login\" style=\"width: 100%;\" type=\"submit\">Log In <i class=\"fa fa-sign-in\"></i></button>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/managed-account-detail/managed-account-detail.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/managed-account-detail/managed-account-detail.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"enterKey\">\n                    <div class=\"SearchBox\">\n                        <a [routerLink]=\"['/client-detail-1']\"><< Back</a>\n                    </div>\n                    <div class=\"SearchBox SearchBoxModel\">\n                        <a href=\"javaScript:void(0)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>Edit</a>\n                    </div>\n                </div>\n                <div class=\"bread mt-3\">\n                    <nav aria-label=\"breadcrumb\">\n                        <ol class=\"breadcrumb\">\n                          <li class=\"breadcrumb-item\">Managed Account</li>\n                          <li class=\"breadcrumb-item active\" aria-current=\"page\">Managed Account Detail</li>\n                          <p>Edited on: 30, sept,20</p>\n                        </ol>\n                      </nav>\n                </div>\n\n                <div class=\"adjust\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3 colAdjust\">\n                            <h3>Name <span>FLAGSHIPS</span></h3>\n                            <h3>Assigned Model <span>FLAGSHIPS</span></h3>\n                        </div>\n                        <div class=\"col-md-3 colAdjust\">\n                            <h3>Description <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate </span></h3>\n                        </div>\n                        <div class=\"col-md-6 chartMain colAdjust\">\n                            <h3>Target Allocation</h3>\n                            <div class=\"ClientAccount pb-3\">\n                                <h4 style=\"text-transform: uppercase; text-align: center;\"><strong>Balance Sheets Components</strong></h4>\n                            </div>\n                            <div class=\"chart\" style=\"    margin: 0 auto;\" id=\"chart\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"totalCount\">\n                    <ul>\n                        <li>Total: <span>100.00%</span></li>\n                        <li>Total Cash: <span>20.00%</span></li>\n                        <li>Total Security: <span>90.00%</span></li>\n                        <li>No. of Holdings: <span>10</span></li>\n                    </ul>\n                </div>\n                <div class=\"TableList\">\n                    <div class=\"mainTable \">\n                        <table class=\"table table-bordered \">\n                            <thead>\n                                <tr>\n                                    <th>Ticker</th>\n                                    <th> Name</th> \n                                    <th>Latest Price</th>  \n                                    <th>Asset Class</th>  \n                                    <th>Target Value(%)</th>\n                                    <th>Upper(%)</th>  \n                                    <th>Lower(%)</th>  \n                                </tr>\n                            </thead>\n            \n                            <tbody>\n                                <tr>\n                                    <td>USD Cash</td>\n                                    <td>USD Cash</td> \n                                    <td></td>\n                                    <td> Cash</td>  \n                                    <td>28.00%</td>  \n                                    <td>17.00%</td>  \n                                    <td>25.00%</td>  \n                                </tr>    \n                                <tr>\n                                    <td class=\"sky\">AMZN</td>\n                                    <td>USD Cash</td> \n                                    <td>3,311.00</td>\n                                    <td class=\"sky\"> Stock</td>  \n                                    <td>28.00%</td>  \n                                    <td>17.00%</td>  \n                                    <td>25.00%</td> \n                                </tr> \n                                <tr>\n                                    <td class=\"sky\">MSFT</td>\n                                    <td>USD Cash</td> \n                                    <td>223.31</td>\n                                    <td class=\"sky\"> Stock</td>  \n                                    <td>28.00%</td>  \n                                    <td>17.00%</td>  \n                                    <td>25.00%</td>\n                                </tr> \n                                <tr>\n                                    <td class=\"sky\">AAPL</td>\n                                    <td>USD Cash</td> \n                                    <td>121.42</td>\n                                    <td class=\"sky\"> Stock</td>  \n                                    <td>28.00%</td>  \n                                    <td>17.00%</td>  \n                                    <td>25.00%</td>\n                                </tr> \n                                <tr>\n                                    <td class=\"sky\">AAPL</td>\n                                    <td>USD Cash</td> \n                                    <td>983.00</td>\n                                    <td class=\"sky\"> Stock</td>  \n                                    <td>28.00%</td>  \n                                    <td>17.00%</td>  \n                                    <td>25.00%</td>\n                                </tr> \n                                <tr>\n                                    <td>USD Cash</td>\n                                    <td>USD Cash</td> \n                                    <td></td>\n                                    <td> Cash</td>  \n                                    <td>28.00%</td>  \n                                    <td>17.00%</td>  \n                                    <td>25.00%</td>\n                                </tr>   \n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/matching-portfolio/matching-portfolio.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/matching-portfolio/matching-portfolio.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ngx-spinner></ngx-spinner>\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"fixed left-0 right-0 z-100\" style=\"top: 64px;\">\n            <div class=\"breadNav_nav__3bu0T site-main DisFlex bg-white\">\n                <div class=\"ant-breadcrumb\"><span><span class=\"ant-breadcrumb-link\">Questionnaire</span><span\n                            class=\"ant-breadcrumb-separator\">&gt;</span></span><span><span\n                            class=\"ant-breadcrumb-link\">Edit</span><span\n                            class=\"ant-breadcrumb-separator\">&gt;</span></span><span><span\n                            class=\"ant-breadcrumb-link\">Matching Portfolio</span><span\n                            class=\"ant-breadcrumb-separator\">&gt;</span></span></div>\n                <div><button type=\"button\" class=\"ant-btn\"\n                        [routerLink]=\"['/add-questionnaire']\"><span>Back</span></button>\n                    <button type=\"button\" [routerLink]=\"['/questionnaire']\"\n                        class=\"ant-btn ml-8 ant-btn-primary\"><span>Finish</span></button>\n                </div>\n            </div>\n        </div>\n        <div class=\"Small-Wrapper\" style=\"    background-color: #F6F8FC;\">\n            <div class=\"HelpArea b-questionnaire\">\n                <div class=\"questionnaire-content mt-16\" style=\"padding-top: 40px;\">\n                    <div class=\"site-main\">\n                        <div class=\"ant-card ant-card-wider-padding\">\n                            <div class=\"ant-card-body\">\n                                <h4 class=\"title\">\n                                    <div>Matching portfolio&nbsp;<span class=\"strategy-tip\">(You must click the \"Finish\"\n                                            button to pass\n                                            the completeness judgment before the revision will be saved)</span></div>\n                                    <span>Expected\n                                        total score: 1～26</span>\n                                </h4>\n                                <div class=\"ant-table-wrapper my-20\">\n                                    <div class=\"ant-spin-nested-loading\">\n                                        <div class=\"ant-spin-container\">\n                                            <div class=\"ant-table ant-table-default ant-table-scroll-position-left\">\n                                                <div class=\"ant-table-content\">\n                                                    <div class=\"ant-table-body\">\n                                                        <table class=\"\">\n                                                            <colgroup>\n                                                                <col>\n                                                                <col>\n                                                                <col>\n                                                                <col>\n                                                            </colgroup>\n                                                            <thead class=\"ant-table-thead\">\n                                                                <tr>\n                                                                    <th class=\"\"><span>Score Range</span></th>\n                                                                    <th class=\"\"><span>Portfolio</span></th>\n                                                                    <th class=\"\"><span>Risk Level</span></th>\n                                                                    <th class=\"td-button\"><span>Action</span></th>\n                                                                </tr>\n                                                            </thead>\n                                                            <tbody class=\"ant-table-tbody\">\n                                                                <tr *ngFor=\"let item of modelDetail\"\n                                                                    class=\"ant-table-row  ant-table-row-level-0\"\n                                                                    data-row-key=\"586\">\n                                                                    <td class=\"\"><span\n                                                                            class=\"ant-table-row-indent indent-level-0\"\n                                                                            style=\"padding-left: 0px;\"></span>{{item.minScore}}\n                                                                        ~ {{item.maxScore}}\n                                                                    </td>\n                                                                    <td class=\"\">{{item.portfolioDetail[0].name }}</td>\n                                                                    <td class=\"\">{{item.portfolioDetail[0].riskLevel }}\n                                                                    </td>\n                                                                    <td class=\"td-button\">\n                                                                        <!-- <a\n                                                                            class=\"link-button-root link-button-default link-button-divider\"\n                                                                            href=\"#1\">Edit</a> -->\n                                                                        <a style=\"cursor:pointer;\"\n                                                                            class=\"link-button-root link-button-danger\"\n                                                                            (click)=\"deletePortfolio(item)\">Delete</a>\n                                                                    </td>\n                                                                </tr>\n                                                                <!-- <tr class=\"ant-table-row  ant-table-row-level-0\"\n                                                                    data-row-key=\"587\">\n                                                                    <td class=\"\"><span\n                                                                            class=\"ant-table-row-indent indent-level-0\"\n                                                                            style=\"padding-left: 0px;\"></span>8～17</td>\n                                                                    <td class=\"\">60/40 Domestic with Tech Tilt</td>\n                                                                    <td class=\"\">Moderately Aggressive</td>\n                                                                    <td class=\"td-button\"><a\n                                                                            class=\"link-button-root link-button-default link-button-divider\"\n                                                                            href=\"#1\">Edit</a><a\n                                                                            class=\"link-button-root link-button-danger\"\n                                                                            href=\"#1\">Delete</a></td>\n                                                                </tr>\n                                                                <tr class=\"ant-table-row  ant-table-row-level-0\"\n                                                                    data-row-key=\"588\">\n                                                                    <td class=\"\"><span\n                                                                            class=\"ant-table-row-indent indent-level-0\"\n                                                                            style=\"padding-left: 0px;\"></span>18～26</td>\n                                                                    <td class=\"\">80/20 Domestic</td>\n                                                                    <td class=\"\">Aggressive</td>\n                                                                    <td class=\"td-button\"><a\n                                                                            class=\"link-button-root link-button-default link-button-divider\"\n                                                                            href=\"#1\">Edit</a><a\n                                                                            class=\"link-button-root link-button-danger\"\n                                                                            href=\"#1\">Delete</a></td>\n                                                                </tr> -->\n                                                            </tbody>\n                                                        </table>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div><a class=\"link-button-root link-button-default\" data-toggle=\"modal\"\n                                    data-target=\"#refer\" style=\"text-transform: inherit;\"><i\n                                        class=\"anticon fa fa-plus-circle\"></i> Add New</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"ModalBox\">\n    <div id=\"refer\" class=\"modal \" role=\"dialog\">\n        <div tabindex=\"-1\" class=\"ant-modal-wrap \" role=\"dialog\">\n            <form [formGroup]=\"form\">\n                <div role=\"document\" class=\"ant-modal matching-modal\">\n                    <div tabindex=\"0\" style=\"width: 0px; height: 0px; overflow: hidden;\">sentinelStart</div>\n                    <div class=\"ant-modal-content\">\n                        <div class=\"ant-modal-body\">\n                            <div class=\"text-center font-16 font-bold mb-16\" style=\"margin-bottom: 30px;\">New Portfolio\n                            </div>\n                            <label>Score Range <span class=\"text-gray font-12\">(Full Score Range: 5~62)</span></label>\n                            <div class=\"input-box-wrap flex\">\n                                <div class=\"ant-row ant-form-item is-invalid is-pristine is-untouched is-unfocused\">\n                                    <div class=\"ant-form-item-control-wrapper\">\n                                        <div class=\"ant-form-item-control\"><span class=\"ant-form-item-children\"><input\n                                                    type=\"text\" formControlName=\"startrange\"\n                                                    class=\"ant-input text-width\" (keypress)=\"numberOnly($event)\"\n                                                    value=\"\"> <span class=\"m-10\">～</span>\n                                                <input type=\"text\" formControlName=\"endrange\"\n                                                    class=\"ant-input text-width\" (keypress)=\"numberOnly($event)\"\n                                                    value=\"\"></span></div>\n                                    </div>\n                                </div>\n\n                            </div><label>Portfolio</label>\n                            <div class=\"ant-row ant-form-item is-invalid is-pristine is-untouched is-unfocused\">\n                                <div class=\"ant-form-item-control-wrapper\">\n                                    <div class=\"ant-form-item-control\"><span class=\"ant-form-item-children\"><span\n                                                class=\"w-full ant-cascader-picker w-full\" tabindex=\"0\"><span\n                                                    class=\"ant-cascader-picker-label\"></span>\n                                                <select name=\"\" formControlName=\"models\" id=\"\" class=\"ant-input\">\n                                                    <option *ngFor=\"let item of portfolioList\" [ngValue]=\"item._id\">\n                                                        {{item.name}}\n                                                    </option>\n                                                </select>\n                                            </span></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"text-center mt-24\"><button (click)=\"closePops()\" type=\"button\"\n                                    class=\"ant-btn my-0 mx-4\"><span>Cancel</span></button>\n                                <button type=\"button\" [disabled]=\"form.invalid\" (click)=\"saveData()\"\n                                    class=\"ant-btn my-0 mx-4 ant-btn-primary\"><span>Confirm</span></button></div>\n                        </div>\n                    </div>\n                    <div tabindex=\"0\" style=\"width: 0px; height: 0px; overflow: hidden;\">sentinelEnd</div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n<div class=\"ModalBox\">\n    <div id=\"confirmDylog\" class=\"modal \" role=\"dialog\">\n        <div tabindex=\"-1\" class=\"ant-modal-wrap \" role=\"dialog\">\n            <form [formGroup]=\"form\">\n                <div role=\"document\" class=\"ant-modal matching-modal\">\n                    <div tabindex=\"0\" style=\"width: 0px; height: 0px; overflow: hidden;\">sentinelStart</div>\n                    <div class=\"ant-modal-content\">\n                        <div class=\"ant-modal-body\">\n                            <div class=\"text-center font-16 font-bold mb-16\" style=\"margin-bottom: 30px;\">Are you sure\n                                to delete ?\n                            </div>\n\n\n                            <div class=\"text-center mt-24\"><button (click)=\"closePops()\" type=\"button\"\n                                    class=\"ant-btn my-0 mx-4\"><span>Cancel</span></button>\n                                <button type=\"button\" [disabled]=\"form.invalid\" (click)=\"saveData()\"\n                                    class=\"ant-btn my-0 mx-4 ant-btn-primary\"><span>Confirm</span></button></div>\n                        </div>\n                    </div>\n                    <div tabindex=\"0\" style=\"width: 0px; height: 0px; overflow: hidden;\">sentinelEnd</div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/model-detail/model-detail.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/model-detail/model-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ngx-spinner *ngIf=\"isShowSpinner\"></ngx-spinner>\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"enterKey\">\n                    <div class=\"SearchBox\">\n                        <a href=\"javaScript:void(0)\" (click)=backClicked()>\n                            << Back</a>\n                    </div>\n                    <div class=\"SearchBox SearchBoxModel\">\n                        <a (click)=\"deleteModels(modelDetail)\" href=\"javaScript:void(0)\" class=\"Red\"><i\n                                style=\"cursor:pointer;\" class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>Delete</a>\n                        <a href=\"javaScript:void(0)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>Edit</a>\n                    </div>\n                </div>\n                <div class=\"bread mt-3\">\n                    <nav aria-label=\"breadcrumb\">\n                        <ol class=\"breadcrumb\">\n                            <li class=\"breadcrumb-item\">Models</li>\n                            <li class=\"breadcrumb-item active\" aria-current=\"page\">Model Details</li>\n                            <p>Addes on: {{modelDetail.createdAt | date}}</p>\n                        </ol>\n                    </nav>\n                </div>\n\n                <div class=\"adjust\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3 colAdjust\">\n                            <h3>Adjust Frequency <span>{{modelDetail.adjustedFrequency}}</span></h3>\n                            <h3>Name <span>{{modelDetail.modelName}}</span></h3><br>\n                            <h3>Type <br> <span *ngIf=\"modelDetail.type==1 ; then ifBlock else elseBlock\">\n\n\n\n                                </span>\n                                <ng-template #ifBlock><span>Portfolio</span></ng-template>\n                                <ng-template #elseBlock><span>Thematic</span></ng-template>\n                            </h3>\n                        </div>\n                        <div class=\"col-md-3 colAdjust\">\n                            <h3>Maximum Deviation Allowance (%) <span>{{modelDetail.maximumDeviationAllowance}}</span>\n                            </h3>\n                            <h3>Description <span>{{modelDetail.description}} </span></h3>\n                        </div>\n                        <div class=\"col-md-6 chartMain colAdjust\">\n                            <h3>Target Allocation</h3>\n                            <div class=\"ClientAccount pb-3\">\n                                <h4 style=\"text-transform: uppercase; text-align: center;\"><strong>Balance Sheets\n                                        Components</strong></h4>\n                            </div>\n                            <div class=\"chart\" style=\"    margin: 0 auto;\" id=\"chart\">\n                                <div class=\"newCharts\">\n                                    <div id=\"chart\" style=\"padding-left: 85px;\">\n                                        <apx-chart [series]=\"chartOptions.series\" [chart]=\"chartOptions.chart\"\n                                            [labels]=\"chartOptions.labels\" [title]=\"chartOptions.title\"\n                                            [theme]=\"chartOptions.theme\" [responsive]=\"chartOptions.responsive\">\n                                        </apx-chart>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div style=\"display: flex;justify-content: space-between;padding: 35px 0px;\">\n                    <div class=\"totalCount totalCountModel\">\n                        <div class=\"SearchBox SearchBoxModel\">\n                            <a href=\"javaScript:void(0)\" class=\"ml-0\"><i class=\"fa fa-plus-circle\"\n                                    aria-hidden=\"true\"></i>Add New</a>\n                        </div>\n                        <div class=\"SearchBox\">\n                            <div class=\"SearchBox searchIcon\">\n                                <form [formGroup]=\"tickertForm\">\n                                    <input type=\"text\" formControlName=\"title\" (keyup.enter)=\"searchTicker()\"\n                                        style=\"width: 250px;\" placeholder=\"Search\">\n                                    <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                            src=\"assets/images/search.svg\" alt=\"\"></a>\n                                </form>\n\n                            </div>\n                        </div>\n\n\n                    </div>\n                    <div class=\"SearchBox SearchBoxModel\">\n                        <a href=\"javaScript:void(0)\" class=\"mr-4\"><i class=\"fa fa-download\"\n                                aria-hidden=\"true\"></i>Download</a>\n                    </div>\n                </div>\n                <div class=\"TableList\" *ngIf=\"ticketData.symbol\">\n                    <div class=\"mainTable \">\n                        <table class=\"table table-bordered \">\n                            <thead>\n                                <tr>\n                                    <th>Ticker</th>\n                                    <th> Name</th>\n                                    <th>Latest Price</th>\n                                    <th>Holding Type</th>\n                                    <th>Target Value(%)</th>\n                                    <th>Action</th>\n                                    <!-- <th>Upper(%)</th>\n                                    <th>Lower(%)</th> -->\n                                </tr>\n                            </thead>\n\n                            <tbody>\n\n\n                                <tr>\n                                    <td>{{ticketData.symbol}}</td>\n                                    <td>{{ticketData.companyName}}</td>\n                                    <td>{{ticketData.latestPrice}}</td>\n                                    <td><select id=\"\" #holdingType class=\"ant-input\">\n                                            <option value=\"ETF\"> ETF </option>\n                                            <option value=\"Mutual Funds\"> Mutual Funds </option>\n                                            <option value=\"Stock\"> Stock </option>\n                                            <option value=\"Crypto\"> Crypto </option>\n                                            <option value=\"Bonds\"> Bonds </option>\n                                            <option value=\"Alternative\"> Alternative </option>\n                                            <option value=\"Cash\"> Cash </option>\n                                        </select></td>\n                                    <td><input #targetValue placeholder=\"Target Value\" />%</td>\n                                    <td><button class=\"thematic-buttons\" type=\"button\"\n                                            (click)=\"saveData(holdingType,targetValue)\" style=\"background: #2c8fcd;\n                                            color: #fff;\">Create</button></td>\n                                    <!-- <td><input #phone placeholder=\"phone number\" />%</td>\n                                    <td><input #phone placeholder=\"phone number\" />%</td> -->\n                                </tr>\n\n                            </tbody>\n                        </table>\n                    </div>\n                    <hr>\n                </div>\n\n                <!-- <div class=\"totalCount\">\n                    <ul>\n                        <li>Total: <span>100.00%</span></li>\n                        <li>Total Cash: <span>20.00%</span></li>\n                        <li>Total Security: <span>90.00%</span></li>\n                        <li>No. of Holdings: <span>10</span></li>\n                    </ul>\n                </div> -->\n                <div class=\"TableList\">\n                    <div class=\"mainTable \">\n                        <table class=\"table table-bordered \">\n                            <thead>\n                                <tr>\n                                    <th>Ticker</th>\n                                    <th> Name</th>\n                                    <th>Latest Price</th>\n                                    <th>Asset Class</th>\n                                    <th>Target Value(%)</th>\n                                    <th>Upper(%)</th>\n                                    <th>Lower(%)</th>\n                                    <th>Action</th>\n                                </tr>\n                            </thead>\n\n                            <tbody>\n                                <!-- <tr>\n                                    <td>USD Cash</td>\n                                    <td>USD Cash</td>\n                                    <td></td>\n                                    <td> Cash</td>\n                                    <td>28.00%</td>\n                                    <td>17.00%</td>\n                                    <td>25.00%</td>\n                                </tr> -->\n                                <tr *ngFor=\"let item of modelDetail.models\">\n                                    <td class=\"sky\">{{item.symbol}}</td>\n                                    <td>{{item.companyName}}</td>\n                                    <td>{{item.latestPrice}}</td>\n                                    <td class=\"sky\"> {{item.holdingType}}</td>\n                                    <td>{{item.targetValue}}%</td>\n                                    <td>0%</td>\n                                    <td>0%</td>\n                                    <td>\n                                        <div class=\"icon-group\"><i style=\"cursor:pointer;\" (click)=\"deleteHolding(item)\"\n                                                class=\"fa fa-trash-o anticon btn-disabled icon-normal\"\n                                                aria-hidden=\"true\"></i></div>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<!-- <div class=\"ModalBox\">\n    <div id=\"refer\" class=\"modal \" role=\"dialog\">\n        <div tabindex=\"-1\" class=\"ant-modal-wrap \" role=\"dialog\">\n            <form [formGroup]=\"form\">\n                <div role=\"document\" class=\"ant-modal matching-modal\">\n                    <div tabindex=\"0\" style=\"width: 0px; height: 0px; overflow: hidden;\">sentinelStart</div>\n                    <div class=\"ant-modal-content\">\n                        <div class=\"ant-modal-body\">\n                            <div class=\"text-center font-16 font-bold mb-16\" style=\"margin-bottom: 30px;\">Ticker Detail\n                            </div>\n                            <hr>\n                            <label>Symbol : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.symbol}}</span></label><br>\n\n                            <label>Company Name : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.companyName}}</span></label><br>\n\n                            <label>ISIN : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.isin}}</span></label><br>\n\n                            <label>CUSIP : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.cusip}}</span></label><br>\n\n                            <label>Country : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.country}}</span></label><br>\n\n                            <label>MIC : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.mic}}</span></label><br>\n\n                            <label>Currency : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.currency}}</span></label><br>\n\n                            <label>Source : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.source}}</span></label><br>\n\n                            <label>Ident Type : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.identType}}</span></label><br>\n\n                            <label>Exchange : <span\n                                    class=\"text-gray font-12 ticket-detail\">{{ticketData.exchange}}</span></label><br>\n\n                            <hr>\n                            <form [formGroup]=\"addTickerform\">\n                                <label>Select Type</label>\n                                <div class=\"ant-row ant-form-item is-invalid is-pristine is-untouched is-unfocused\">\n                                    <div class=\"ant-form-item-control-wrapper\">\n                                        <div class=\"ant-form-item-control\"><span class=\"ant-form-item-children\"><span\n                                                    class=\"w-full ant-cascader-picker w-full\" tabindex=\"0\"><span\n                                                        class=\"ant-cascader-picker-label\"></span>\n                                                    <select name=\"\" formControlName=\"tickerType\" id=\"\"\n                                                        class=\"ant-input\">\n                                                        <option [ngValue]=\"1\"> Popular Stocks </option>\n                                                        <option [ngValue]=\"2\"> Popular Funds </option>\n                                                        <option [ngValue]=\"3\"> Popular Themes </option>\n                                                    </select>\n                                                </span></span>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Image</label>\n                                        <input type=\"file\" formControlName=\"tickerImage\"\n                                            (change)=\"onFileSelected($event)\" class=\"form-control\" placeholder=\"Name\">\n                                    </div>\n                                </div><br>\n                            </form>\n                            <div class=\"text-center mt-24\"><button (click)=\"closePops('refer')\" type=\"button\"\n                                    class=\"ant-btn my-0 mx-4\"><span>Cancel</span></button>\n                                <button type=\"button\" [disabled]=\"addTickerform.invalid\" (click)=\"saveData()\"\n                                    class=\"ant-btn my-0 mx-4 ant-btn-primary\"><span>Save</span></button></div>\n                        </div>\n                    </div>\n                    <div tabindex=\"0\" style=\"width: 0px; height: 0px; overflow: hidden;\">sentinelEnd</div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div> -->\n\n\n<div class=\"ModalBox\">\n    <div id=\"referError\" class=\"modal \" role=\"dialog\">\n        <div tabindex=\"-1\" class=\"ant-modal-wrap \" role=\"dialog\">\n\n            <div role=\"document\" class=\"ant-modal matching-modal\">\n                <div tabindex=\"0\" style=\"width: 0px; height: 0px; overflow: hidden;\">sentinelStart</div>\n                <div class=\"ant-modal-content\">\n                    <div class=\"ant-modal-body\">\n                        <div class=\"text-center font-16 font-bold mb-16\" style=\"margin-bottom: 30px;\">Ticker Detail\n                        </div>\n                        <hr>\n                        <label style=\"margin-left: 78px;font-size: 19px;\">Ticker is not available.</label><br>\n\n\n\n                        <div class=\"text-center mt-24\">\n                            <button type=\"button\" (click)=\"closePops('referError')\"\n                                class=\"ant-btn my-0 mx-4 ant-btn-primary\"><span>Okay</span></button></div>\n                    </div>\n                </div>\n                <div tabindex=\"0\" style=\"width: 0px; height: 0px; overflow: hidden;\">sentinelEnd</div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/notification/notification.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notification/notification.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"NewModel adjust\">\n                    <div class=\"row rowNotification\">\n                        <div class=\"col-md-6\">\n                            <div class=\"Filter FilterSearch\">\n                                <div class=\"form-group\">\n                                    <label>Select Bear of the Day</label>\n                                    <select class=\"form-control\"> \n                                        <option>AMZN</option>\n                                        <option>Model </option>\n                                        <option>FLPKT </option> \n                                        <option>TCS </option>\n                                        <option>CEAT </option> \n                                    </select>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>&nbsp;</label>\n                                    <button class=\"Button\">SEND</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"Filter FilterSearch\">\n                                <div class=\"form-group\">\n                                    <label>Select Bull of the Day</label>\n                                    <select class=\"form-control\"> \n                                        <option>AMZN</option>\n                                        <option>Model </option>\n                                        <option>FLPKT </option> \n                                        <option>TCS </option>\n                                        <option>CEAT </option> \n                                    </select>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>&nbsp;</label>\n                                    <button class=\"Button\">SEND</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <div class=\"Filter FilterSearch pt-5\">\n                                <div class=\"form-group\">\n                                    <label>Enter Title of the Notification</label>\n                                    <input type=\"text\" class=\"form-control\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <div class=\"Filter FilterSearch pt-5\">\n                                <div class=\"form-group\">\n                                    <label>Enter Notification Content</label>\n                                    <textarea class=\"p-2\" cols=\"300\" rows=\"10\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <div class=\"Filter FilterSearch\">\n                                <div class=\"form-group\">\n                                    <button class=\"Button\" style=\"width: 100%;\">SEND NOTIFICATION</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portfolio-detail-edit/portfolio-detail-edit.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portfolio-detail-edit/portfolio-detail-edit.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"enterKey\">\n                    <div class=\"SearchBox\">\n                        <a [routerLink]=\"['/portfolio-detail/',portfolioDetail._id]\">\n                            << Back</a>\n                    </div>\n                    <div class=\"SearchBox SearchBoxModel\">\n                        <button class=\"thematic-buttons\" [disabled]=\"portfolioFrom.invalid\" (click)=\"addPortfolio()\"\n                            type=\"button\"><i class=\"fa fa-file-text\" aria-hidden=\"true\"></i>Create</button>\n                    </div>\n                </div>\n                <div class=\"bread mt-3\">\n                    <nav aria-label=\"breadcrumb\">\n                        <ol class=\"breadcrumb\">\n                            <li class=\"breadcrumb-item\">Portfolio</li>\n                            <li class=\"breadcrumb-item active\" aria-current=\"page\">Portfolio Detail</li>\n                            <p>Edited on: {{portfolioDetail.updatedAt | date }}</p>\n                        </ol>\n                    </nav>\n                </div>\n                <form [formGroup]=\"portfolioFrom\">\n                    <div class=\"adjust\">\n                        <div class=\"row\">\n                            <div class=\"col-md-3 colAdjust\">\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Select Model</label>\n                                        <select id=\"\" formControlName=\"modelId\" class=\"ant-input\">\n                                            <option *ngFor=\"let item of modelList\" [ngValue]=\"item._id\">\n                                                {{item.modelName}}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"Filter FilterSearch\">\n                                    <!-- <div class=\"form-group\">\n                                        <label>Portfolio Name</label>\n                                        <input type=\"text\" value=\"ABC\" name=\"\" class=\"form-control\" placeholder=\"Name\">\n                                    </div> -->\n                                    <div class=\"form-group\">\n                                        <label>Risk Level</label>\n                                        <input type=\"text\" formControlName=\"riskLevel\" class=\"form-control\"\n                                            placeholder=\"Risk Level\">\n                                    </div>\n                                </div>\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Holdings Type</label>\n                                        <div class=\"newHold\">\n                                            <a href=\"javascript:void(0)\" class=\"active\">ETF/Equity</a>\n                                            <a href=\"javascript:void(0)\">Mutual Funds</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3 colAdjust\">\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Portfolio Name</label>\n                                        <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                                            placeholder=\"Name\">\n                                    </div>\n                                </div>\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Drift</label>\n                                        <select id=\"\" formControlName=\"drift\" class=\"ant-input\">\n                                            <option value=\"Active\"> Active </option>\n                                            <option value=\"Passive\"> Passive </option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"Filter FilterSearch\">\n                                    <div class=\"form-group\">\n                                        <label>Description</label>\n                                        <textarea formControlName=\"description\" cols=\"80\" rows=\"6\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-5 chartMain colAdjust\">\n                                <h3>Target Allocation</h3>\n                                <div class=\"ClientAccount pb-3\">\n                                    <h4 style=\"text-transform: uppercase; text-align: center;\"><strong>Balance Sheets\n                                            Components</strong></h4>\n                                </div>\n                                <div class=\"chart\" style=\"    margin: 0 auto;\" id=\"chart\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n                <div class=\"adjust\">\n                    <div class=\"colAdjust\">\n                        <h3 style=\"text-align: left;\">Model Assigned </h3>\n                    </div>\n                    <div class=\"SearchBox SearchBoxModel\">\n                        <a href=\"javaScript:void(0)\" class=\"ml-0\"><i class=\"fa fa-plus-circle\"\n                                aria-hidden=\"true\"></i>Add Model</a>\n                    </div>\n                </div>\n                <div class=\"TableList\">\n                    <div class=\"mainTable \">\n                        <table class=\"table table-bordered \">\n                            <thead>\n                                <tr>\n                                    <th>Modal Name</th>\n                                    <th>Assest Allocation</th>\n                                    <th>No. of Holdings</th>\n                                    <th>% of Allocation</th>\n                                    <th>Created Date</th>\n                                    <th>Action</th>\n                                </tr>\n                            </thead>\n\n                            <tbody>\n                                <tr>\n                                    <td><a class=\"Blue viewArea\" [routerLink]=\"['/portfolio-detail']\">FLAGSSHIPS</a>\n                                    </td>\n                                    <td>Stocks | EFT</td>\n                                    <td>4</td>\n                                    <td> 20%</td>\n                                    <td>28-10-20</td>\n                                    <td><a class=\"Red\" href=\"javaScript:void(0)\"><i class=\"fa fa-trash-o\"\n                                                aria-hidden=\"true\"></i></a></td>\n                                </tr>\n                                <tr>\n                                    <td><a class=\"Blue viewArea\" [routerLink]=\"['/portfolio-detail']\">FLAGSSHIPS</a>\n                                    </td>\n                                    <td>Stocks | EFT</td>\n                                    <td>4</td>\n                                    <td> 20%</td>\n                                    <td>28-10-20</td>\n                                    <td><a class=\"Red\" href=\"javaScript:void(0)\"><i class=\"fa fa-trash-o\"\n                                                aria-hidden=\"true\"></i></a></td>\n                                </tr>\n                                <tr>\n                                    <td><a class=\"Blue viewArea\" [routerLink]=\"['/portfolio-detail']\">FLAGSSHIPS</a>\n                                    </td>\n                                    <td>Stocks | EFT</td>\n                                    <td>4</td>\n                                    <td> 20%</td>\n                                    <td>28-10-20</td>\n                                    <td><a class=\"Red\" href=\"javaScript:void(0)\"><i class=\"fa fa-trash-o\"\n                                                aria-hidden=\"true\"></i></a></td>\n                                </tr>\n                                <tr>\n                                    <td><a class=\"Blue viewArea\" [routerLink]=\"['/portfolio-detail']\">FLAGSSHIPS</a>\n                                    </td>\n                                    <td>Stocks | EFT</td>\n                                    <td>4</td>\n                                    <td> 20%</td>\n                                    <td>28-10-20</td>\n                                    <td><a class=\"Red\" href=\"javaScript:void(0)\"><i class=\"fa fa-trash-o\"\n                                                aria-hidden=\"true\"></i></a></td>\n                                </tr>\n                                <tr>\n                                    <td><a class=\"Blue viewArea\" [routerLink]=\"['/portfolio-detail']\">FLAGSSHIPS</a>\n                                    </td>\n                                    <td>Stocks | EFT</td>\n                                    <td>4</td>\n                                    <td> 20%</td>\n                                    <td>28-10-20</td>\n                                    <td><a class=\"Red\" href=\"javaScript:void(0)\"><i class=\"fa fa-trash-o\"\n                                                aria-hidden=\"true\"></i></a></td>\n                                </tr>\n                                <tr>\n                                    <td><a class=\"Blue viewArea\" [routerLink]=\"['/portfolio-detail']\">FLAGSSHIPS</a>\n                                    </td>\n                                    <td>Stocks | EFT</td>\n                                    <td>4</td>\n                                    <td> 20%</td>\n                                    <td>28-10-20</td>\n                                    <td><a class=\"Red\" href=\"javaScript:void(0)\"><i class=\"fa fa-trash-o\"\n                                                aria-hidden=\"true\"></i></a></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portfolio-detail/portfolio-detail.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portfolio-detail/portfolio-detail.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"enterKey\">\n                    <div class=\"SearchBox\">\n                        <a href=\"javaScript:void(0)\" (click)=backClicked()>\n                            << Back</a>\n                    </div>\n                    <div class=\"SearchBox SearchBoxModel\">\n                        <a [routerLink]=\"['/portfolio-detail-edit/',portfolioDetail._id]\"><i\n                                class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>Edit</a>\n                    </div>\n                </div>\n                <div class=\"bread mt-3\">\n                    <nav aria-label=\"breadcrumb\">\n                        <ol class=\"breadcrumb\">\n                            <li class=\"breadcrumb-item\">Portfolio</li>\n                            <li class=\"breadcrumb-item active\" aria-current=\"page\">Portfolio Details</li>\n                            <p>Added on: {{portfolioDetail.createdAt | date }}</p>\n                        </ol>\n                    </nav>\n                </div>\n\n                <div class=\"adjust\">\n                    <div class=\"row\">\n                        <div class=\"col-md-2 colAdjust\">\n                            <h3>Portfolio Name<span>{{portfolioDetail.name}}</span></h3>\n                            <h3>Number of Model Assigned <span>{{assignedModelDetail.modelName}}</span></h3>\n                        </div>\n                        <div class=\"col-md-3 colAdjust\">\n                            <h3>Risk Level <span>{{portfolioDetail.riskLevel}}</span></h3>\n                            <h3>Description <span>{{portfolioDetail.description}} </span></h3>\n                        </div>\n                        <div class=\"col-md-2 colAdjust\">\n                            <h3>Drift <span>{{portfolioDetail.drift}}</span></h3>\n\n                        </div>\n                        <div class=\"col-md-5 chartMain colAdjust\">\n                            <h3>Target Allocation</h3>\n                            <div class=\"ClientAccount pb-3\">\n                                <h4 style=\"text-transform: uppercase; text-align: center;\"><strong>Balance Sheets\n                                        Components</strong></h4>\n                            </div>\n                            <div class=\"chart\" style=\"    margin: 0 auto;\" id=\"chart\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"adjust\">\n                    <div class=\"colAdjust\">\n                        <h3 style=\"text-align: left;\">Number of Model Assigned</h3>\n                    </div>\n                </div>\n                <div class=\"TableList\">\n                    <div class=\"mainTable \">\n                        <table class=\"table table-bordered \">\n                            <thead>\n                                <tr>\n                                    <th>Ticker</th>\n                                    <th> Name</th>\n                                    <th>Latest Price</th>\n                                    <th>Asset Class</th>\n                                    <th>Target Value(%)</th>\n                                    <th>Upper(%)</th>\n                                    <th>Lower(%)</th>\n                                </tr>\n                            </thead>\n\n                            <tbody>\n                                <tr *ngFor=\"let item of assignedModelDetail.models\">\n                                    <td class=\"sky\">{{item.symbol}}</td>\n                                    <td>{{item.companyName}}</td>\n                                    <td>{{item.latestPrice}}</td>\n                                    <td class=\"sky\"> {{item.holdingType}}</td>\n                                    <td>{{item.targetValue}}%</td>\n                                    <td>0%</td>\n                                    <td>0%</td>\n\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/questionnaire/questionnaire.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/questionnaire/questionnaire.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ngx-spinner></ngx-spinner>\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"questionnaire-list\">\n                    <div class=\"row rowQust\">\n                        <div *ngFor=\"let list of questionnaireList\" class=\"col-md-3\"\n                            style=\"padding-left: 7px; padding-right: 7px;\">\n                            <div class=\"ques-card card-bordered\">\n                                <div class=\"ques-card-content\">\n                                    <h3 class=\"content-title break-point\"\n                                        title=\"Investor profile questionnaire - 3 Question, 3 portfolios\">\n                                        {{list.title}}</h3>\n                                    <!-- <span class=\"ques-type\">Score Based</span> -->\n                                    <span>Created At : {{list.createdAt | date}}</span><br>\n                                    <p class=\"content-text\">{{list.description}}</p>\n                                </div>\n                                <div class=\"ques-card-btm\">\n\n                                    <span style=\"cursor: not-allowed;\" *ngIf=\"list.status==1 else elseBlock\"\n                                        class=\"card-tag tag-blue\">Active</span>\n\n                                    <ng-template #elseBlock>\n                                        <span style=\"cursor: pointer;\" (click)=\"enableQuestionare(list)\"\n                                            class=\"card-tag tag-blue\">In-Active</span>\n                                    </ng-template>\n                                    <div class=\"icon-group\">\n                                        <span class=\"copy-link-label\">Copy Link</span>\n                                        <i [routerLink]=\"['/edit-questionnaire/',list._id]\"\n                                            class=\"fa fa-pencil anticon-edit anticon icon-normal\"\n                                            aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-eye anticon icon-normal\" aria-hidden=\"true\"></i>\n                                        <i (click)=\"deleteQuestionnaire(list)\"\n                                            class=\"fa fa-trash-o anticon btn-disabled icon-normal\"\n                                            aria-hidden=\"true\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- <div class=\"col-md-2\"></div> -->\n\n                        <!-- <div class=\"col-md-3\" style=\"padding-left: 7px; padding-right: 7px;\">\n                            <div class=\"ques-card card-bordered\">\n                                <div class=\"ques-card-content\">\n                                    <h3 class=\"content-title break-point\"\n                                        title=\"Investor profile questionnaire - 3 Question, 3 portfolios\">\n                                        Investor profile questionnaire - 3 Question, 3 portfolios</h3><span\n                                        class=\"ques-type\">Score\n                                        Based</span><span>04/30/2020</span><br>\n                                    <p class=\"content-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                                        Eligendi a delectus, possimus accusamus\n                                        quisquam molestias! Exercitationem qui ducimus, eligendi doloremque illo error\n                                        omnis explicabo necessitatibus autem,\n                                        tempore totam quasi aut.</p>\n                                </div>\n                                <div class=\"ques-card-btm\"><span class=\"card-tag tag-blue\">Default</span>\n                                    <div class=\"icon-group\">\n                                        <span class=\"copy-link-label\">Copy Link</span>\n                                        <i [routerLink]=\"['/edit-questionnaire']\"\n                                            class=\"fa fa-pencil anticon-edit anticon icon-normal\"\n                                            aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-eye anticon icon-normal\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-trash-o anticon btn-disabled icon-normal\"\n                                            aria-hidden=\"true\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                        </div> -->\n\n                        <div class=\"col-md-3\" style=\"padding-left: 7px; padding-right: 7px;\">\n                            <div class=\"panel-add\" [routerLink]=\"['/add-questionnaire']\"><i class=\" anticon fa\n                                fa-plus-circle\" style=\"font-size: 30px;\"></i><br>Add New</div>\n                        </div>\n\n\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/raise-cash/raise-cash.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/raise-cash/raise-cash.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"enterKey\">\n                    <div class=\"SearchBox\">\n                        <a href=\"javaScript:void(0)\" (click)=backClicked()><< Back</a>\n                    </div>\n                </div>\n                <div class=\"bread mt-3\">\n                    <nav aria-label=\"breadcrumb\">\n                        <ol class=\"breadcrumb\">\n                          <li class=\"breadcrumb-item\">Trading & Rebalancing</li>\n                          <li class=\"breadcrumb-item active\" aria-current=\"page\">Raise Cash</li>\n                        </ol>\n                      </nav>\n                </div>\n\n                <div class=\"HelpArea\">\n                    <ul class=\"nav nav-tabs boxs justify-content-around pt-4 newBlock\" id=\"myTab\" role=\"tablist\">\n                        <li class=\"nav-item \">\n                            <a class=\"nav-link active\" id=\"Raise-tab\" data-toggle=\"tab\" href=\"#Raise\" role=\"tab\" aria-controls=\"Raise\" aria-selected=\"true\">Raise Cash</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link \" id=\"Invest-tab\" data-toggle=\"tab\" href=\"#Invest\" role=\"tab\" aria-controls=\"Invest\" aria-selected=\"false\">Invest Cash</a>\n                        </li>\n                    </ul>\n\n                    <div class=\"tab-content\" id=\"myTabContent\">\n                        <div class=\"tab-pane fade show active\" id=\"Raise\" role=\"tabpanel\" aria-labelledby=\"Raise-tab\">\n                            <div class=\"TableList\">\n                                <div class=\"mainTable \">\n                                    <table class=\"table table-bordered \">\n                                        <thead>\n                                            <tr>\n                                                <th>S.No</th>\n                                                <th>Client Name</th> \n                                                <th>Account Number</th>  \n                                                <th>Portfolio Name</th>  \n                                                <th>Date of Raising </th>  \n                                                <th>Amount Raised</th>  \n                                            </tr>\n                                        </thead>\n                        \n                                        <tbody>\n                                            <tr>\n                                                <td>1</td>\n                                                <td>Simmi Sharma</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>    \n                                            <tr>\n                                                <td>2</td>\n                                                <td>Vishal Yadav</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>  \n                                            <tr>\n                                                <td>3</td>\n                                                <td>Simmi Sharma</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>  \n                                            <tr>\n                                                <td>4</td>\n                                                <td>Simmi Sharma</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>  \n                                            <tr>\n                                                <td>5</td>\n                                                <td>Simmi Sharma</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>  \n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"Pagination\">\n                                    <ul>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/left-arrow.svg\" alt=\"\"></a></li>\n                                        <li class=\"active\"><a href=\"javaScript:void(0)\">1</a></li>\n                                        <li><a href=\"javaScript:void(0)\">2</a></li>\n                                        <li><a href=\"javaScript:void(0)\">3</a></li>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/right-arrow.svg\" alt=\"\"></a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade\" id=\"Invest\" role=\"tabpanel\" aria-labelledby=\"Invest-tab\">\n                            <div class=\"TableList\">\n                                <div class=\"mainTable \">\n                                    <table class=\"table table-bordered \">\n                                        <thead>\n                                            <tr>\n                                                <th>S.No</th>\n                                                <th>Client Name</th> \n                                                <th>Account Number</th>  \n                                                <th>Portfolio Name</th>  \n                                                <th>Date of Investing </th>  \n                                                <th>Amount Invested</th>  \n                                            </tr>\n                                        </thead>\n                        \n                                        <tbody>\n                                            <tr>\n                                                <td>1</td>\n                                                <td>Simmi Sharma</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>    \n                                            <tr>\n                                                <td>2</td>\n                                                <td>Vishal Yadav</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>  \n                                            <tr>\n                                                <td>3</td>\n                                                <td>Simmi Sharma</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>  \n                                            <tr>\n                                                <td>4</td>\n                                                <td>Simmi Sharma</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>  \n                                            <tr>\n                                                <td>5</td>\n                                                <td>Simmi Sharma</td> \n                                                <td>2323232</td>  \n                                                <td>Managed</td>  \n                                                <td>20-2-20</td>  \n                                                <td>$5672</td> \n                                            </tr>  \n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"Pagination\">\n                                    <ul>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/left-arrow.svg\" alt=\"\"></a></li>\n                                        <li class=\"active\"><a href=\"javaScript:void(0)\">1</a></li>\n                                        <li><a href=\"javaScript:void(0)\">2</a></li>\n                                        <li><a href=\"javaScript:void(0)\">3</a></li>\n                                        <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/right-arrow.svg\" alt=\"\"></a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/report-management/report-management.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/report-management/report-management.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <ul class=\"nav nav-tabs MainTabAll\" id=\"myTab\" role=\"tablist\">\n                    <li class=\"nav-item \">\n                        <a class=\"nav-link active\" id=\"Statements-tab\" data-toggle=\"tab\" href=\"#Statements\" role=\"tab\" aria-controls=\"Statements\" aria-selected=\"true\">Statements</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link \" id=\"Confirmations-tab\" data-toggle=\"tab\" href=\"#Confirmations\" role=\"tab\" aria-controls=\"Confirmations\" aria-selected=\"false\">Trade Confirmation</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link \" id=\"Tax-tab\" data-toggle=\"tab\" href=\"#Tax\" role=\"tab\" aria-controls=\"Tax\" aria-selected=\"false\">Tax Forms</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" id=\"Ageements-tab\" data-toggle=\"tab\" href=\"#Ageements\" role=\"tab\" aria-controls=\"Ageements\" aria-selected=\"false\">Agreements</a>\n                    </li>\n                </ul>\n\n                <div class=\"tab-content\" id=\"myTabContent\">\n                    <div class=\"tab-pane fade show active\" id=\"Statements\" role=\"tabpanel\" aria-labelledby=\"Statements-tab\">\n                        <div class=\"TradeConfirmation mb-5\">\n                            <div class=\"mainTrade\">\n                                <h4 class=\"pb-2\">Statements <span>25, September</span></h4>\n                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic architecto pariatur dignissimos repellat.</p>\n                            </div>\n                        </div>\n\n                        <div class=\"TradeConfirmation mb-5\">\n                            <div class=\"mainTrade\">\n                                <h4 class=\"pb-2\">Statements<span>25, September</span></h4>\n                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic architecto pariatur dignissimos repellat.</p>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"tab-pane fade\" id=\"Confirmations\" role=\"tabpanel\" aria-labelledby=\"Confirmations-tab\">\n                        <div class=\"HelpArea\">\n                            <ul class=\"nav nav-tabs MainTabAll\" id=\"myTab\" role=\"tablist\">\n                                <li class=\"nav-item \">\n                                    <a class=\"nav-link active\" id=\"ManagedTrade-tab\" data-toggle=\"tab\" href=\"#ManagedTrade\" role=\"tab\" aria-controls=\"ManagedTrade\" aria-selected=\"true\">Managed Trade Confirmation</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link \" id=\"Self-Directed-tab\" data-toggle=\"tab\" href=\"#Self-Directed\" role=\"tab\" aria-controls=\"Self-Directed\" aria-selected=\"false\">Self-Directed Trade Confirmation</a>\n                                </li>\n                            </ul>\n\n                            <div class=\"tab-content\" id=\"myTabContent\">\n                                <div class=\"tab-pane fade show active\" id=\"ManagedTrade\" role=\"tabpanel\" aria-labelledby=\"ManagedTrade-tab\">\n                                    <div class=\"TradeConfirmation mb-5\">\n                                        <div class=\"mainTrade\">\n                                            <h4 class=\"pb-2\">Trade Confirmation <span>25, September</span></h4>\n                                            <h5>Description:</h5>\n                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic architecto pariatur dignissimos repellat.</p>\n                                            <h5>Status : Pending <span class=\"Green\">$5</span></h5>\n                                        </div>\n                                    </div>\n                                    <div class=\"TradeConfirmation mb-5\">\n                                        <div class=\"mainTrade\">\n                                            <h4 class=\"pb-2\">Trade Confirmation <span>25, September</span></h4>\n                                            <h5>Description:</h5>\n                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic architecto pariatur dignissimos repellat.</p>\n                                            <h5>Status : Pending <span class=\"Green\">$5</span></h5>\n                                        </div>\n                                    </div>\n                                    <div class=\"TradeConfirmation mb-5\">\n                                        <div class=\"mainTrade\">\n                                            <h4 class=\"pb-2\">Trade Confirmation <span>25, September</span></h4>\n                                            <h5>Description:</h5>\n                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic architecto pariatur dignissimos repellat.</p>\n                                            <h5>Status : Pending <span class=\"Green\">$5</span></h5>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"tab-pane fade\" id=\"Self-Directed\" role=\"tabpanel\" aria-labelledby=\"Self-Directed-tab\">\n                                    <div class=\"TradeConfirmation mb-5\">\n                                        <div class=\"mainTrade\">\n                                            <h4 class=\"pb-2\">Trade Confirmation <span>25, September</span></h4>\n                                            <h5>Description:</h5>\n                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic architecto pariatur dignissimos repellat.</p>\n                                            <h5>Status : Pending <span class=\"Green\">$5</span></h5>\n                                        </div>\n                                    </div>\n                                    <div class=\"TradeConfirmation mb-5\">\n                                        <div class=\"mainTrade\">\n                                            <h4 class=\"pb-2\">Trade Confirmation <span>25, September</span></h4>\n                                            <h5>Description:</h5>\n                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic architecto pariatur dignissimos repellat.</p>\n                                            <h5>Status : Pending <span class=\"Green\">$5</span></h5>\n                                        </div>\n                                    </div> \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"tab-pane fade \" id=\"Tax\" role=\"tabpanel\" aria-labelledby=\"Tax-tab\">\n                        <div class=\"TradeConfirmation mb-5\">\n                            <div class=\"mainTrade\">\n                                <h4 class=\"pb-2\">Tax Form year 2020 <span>25, September</span></h4>\n                                <h5>Description:</h5>\n                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic architecto pariatur dignissimos repellat.</p>\n                                <div class=\"downloadTrade\">\n                                    <a href=\"javaScript:void(0)\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i></a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"TradeConfirmation mb-5\">\n                            <div class=\"mainTrade\">\n                                <h4 class=\"pb-2\">Tax Form year 2019 <span>25, September</span></h4>\n                                <h5>Description:</h5>\n                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic architecto pariatur dignissimos repellat.</p>\n                                <div class=\"downloadTrade\">\n                                    <a href=\"javaScript:void(0)\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"tab-pane fade\" id=\"Ageements\" role=\"tabpanel\" aria-labelledby=\"Ageements-tab\">\n                        <div class=\"TradeConfirmation mb-5\">\n                            <div class=\"mainTrade\">\n                                <h4 class=\"pb-2\">Legal Agreement-1 <span>Last Updated on 25, September</span></h4>\n                                <h5>Description:</h5>\n                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic architecto pariatur dignissimos repellat.</p>\n                                <div class=\"downloadTrade\">\n                                    <a href=\"javaScript:void(0)\" class=\"mr-4\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></a>\n                                    <a href=\"javaScript:void(0)\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i></a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"TradeConfirmation mb-5\">\n                            <div class=\"mainTrade\">\n                                <h4 class=\"pb-2\">Legal Agreement-2 <span>Last Updated on 25, September</span></h4>\n                                <h5>Description:</h5>\n                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic architecto pariatur dignissimos repellat.</p>\n                                <div class=\"downloadTrade\">\n                                    <a href=\"javaScript:void(0)\" class=\"mr-4\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></a>\n                                    <a href=\"javaScript:void(0)\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/self-directed-detail/self-directed-detail.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/self-directed-detail/self-directed-detail.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"enterKey\">\n                    <div class=\"SearchBox\">\n                        <a href=\"javaScript:void(0)\" (click)=backClicked()><< Back</a>\n                    </div>\n                    <div class=\"SearchBox SearchBoxModel\">\n                        <a href=\"javaScript:void(0)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>Edit</a>\n                    </div>\n                </div>\n                <div class=\"bread mt-3\">\n                    <nav aria-label=\"breadcrumb\">\n                        <ol class=\"breadcrumb\">\n                          <li class=\"breadcrumb-item\">Self Directed</li>\n                          <li class=\"breadcrumb-item active\" aria-current=\"page\">Self Directed Detail</li>\n                          <p>Edited on: 30, sept,20</p>\n                        </ol>\n                      </nav>\n                </div>\n\n                <div class=\"adjust\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3 colAdjust\">\n                            <h3>Name <span>FLAGSHIPS</span></h3>\n                            <h3>Assigned Model <span>FLAGSHIPS</span></h3>\n                        </div>\n                        <div class=\"col-md-3 colAdjust\">\n                            <h3>Description <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate </span></h3>\n                        </div>\n                        <div class=\"col-md-6 chartMain colAdjust\">\n                            <h3>Target Allocation</h3>\n                            <div class=\"ClientAccount pb-3\">\n                                <h4 style=\"text-transform: uppercase; text-align: center;\"><strong>Balance Sheets Components</strong></h4>\n                            </div>\n                             <div class=\"chart\" style=\"    margin: 0 auto;\" id=\"chart1\"> \n\n                                <div class=\"newCharts\">\n                                    <div id=\"chart\" style=\"padding-left: 85px;\">\n                                        <apx-chart\n                                          [series]=\"chartOptions.series\"\n                                          [chart]=\"chartOptions.chart\"\n                                          [labels]=\"chartOptions.labels\"\n                                          [title]=\"chartOptions.title\"\n                                          [theme]=\"chartOptions.theme\"\n                                          [responsive]=\"chartOptions.responsive\"\n                                        ></apx-chart>\n                                      </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div style=\"display: flex;justify-content: space-between;padding: 35px 0px;\">\n                    <div class=\"totalCount totalCountModel\">\n                        <div class=\"SearchBox SearchBoxModel\">\n                            <a href=\"javaScript:void(0)\" class=\"ml-0\"><i class=\"fa fa-plus-circle\"\n                                    aria-hidden=\"true\"></i>Add New</a>\n                        </div>\n                        <div class=\"SearchBox\">\n                            <div class=\"SearchBox searchIcon\">\n                                <form action=\"\">\n                                    <input type=\"text\" style=\"width: 250px;\" placeholder=\"Search\">\n                                    <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                            src=\"assets/images/search.svg\" alt=\"\"></a>\n                                </form>\n                         \n                            </div>\n                        </div>\n               \n                \n                    </div>\n                    <div class=\"SearchBox SearchBoxModel\">\n                        <a href=\"javaScript:void(0)\" class=\"mr-4\"><i class=\"fa fa-download\"\n                                aria-hidden=\"true\"></i>Download</a>\n                    </div>\n                </div>\n    \n                    <div class=\"TableList\">\n                        <div class=\"mainTable \">\n                            <table class=\"table table-bordered \">\n                                <thead>\n                                    <tr>\n                                        <th>Ticker</th>\n                                        <th> Name</th>\n                                        <th>Latest Price</th>\n                                        <th>holdings type</th>\n                                        <th>allocation %</th>\n                                   \n                                    </tr>\n                                </thead>\n    \n                                <tbody>\n                                    <tr>\n                                        <td>USD Cash</td>\n                                        <td>USD Cash</td>\n                                        <td></td>\n                                        <td> Cash</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"26%\" readonly>\n                                        <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                        </span></td>\n                                   \n                                    </tr>\n                                    <tr>\n                                        <td class=\"sky\">AMZN</td>\n                                        <td>USD Cash</td>\n                                        <td>3,311.00</td>\n                                        <td class=\"sky\"> Stock</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"24%\" readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                            </span></td>\n                                    \n                                    </tr>\n                                    <tr>\n                                        <td class=\"sky\">MSFT</td>\n                                        <td>USD Cash</td>\n                                        <td>223.31</td>\n                                        <td class=\"sky\"> Stock</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"40%\" readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                            </span></td>\n                                   \n                                    </tr>\n                                    <tr>\n                                        <td class=\"sky\">AAPL</td>\n                                        <td>USD Cash</td>\n                                        <td>121.42</td>\n                                        <td class=\"sky\"> Stock</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"20.8%\" readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                            </span></td>\n                                   \n                                    </tr>\n                                    <tr>\n                                        <td class=\"sky\">AAPL</td>\n                                        <td>USD Cash</td>\n                                        <td>983.00</td>\n                                        <td class=\"sky\"> Stock</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"20.6%\" readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                            </span></td>\n                                    \n                                    </tr>\n                                    <tr>\n                                        <td>USD Cash</td>\n                                        <td>USD Cash</td>\n                                        <td></td>\n                                        <td> Cash</td>\n                                        <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"29%\" readonly>\n                                            <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                            </span></td>\n                                    \n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div> \n            </div>\n        </div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/setting/setting.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/setting/setting.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"editProfileMain boxs\">\n                    <div class=\"loginMain boxs\">\n                        <form action=\"\">\n                            <div class=\"loginForm loginForm2 editLogin boxs\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"contentToggle\">\n                                            <span class=\"Icon\"><i class=\"fa fa-bell mr-2\" aria-hidden=\"true\"></i>Notification</span>\n                                            <label class=\"switch\">\n                                                <input type=\"checkbox\">\n                                                <span class=\"slider round\"></span>\n                                            </label>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <a href=\"javaScript:void(0)\"  data-toggle=\"modal\" data-target=\"#resetPasswordModal\" class=\"d-block\" ><span class=\"IconsM\">Change Password <i class=\"fa fa-unlock-alt float-right\" aria-hidden=\"true\"></i></span></a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"loginMODAL otpMODAL modal\" id=\"resetPasswordModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n        <div class=\"modal-body\">\n            <div class=\"loginMain boxs\">\n                <div class=\"modalLogo\">\n                    <img src=\"assets/images/logo.png\" alt=\"logo\" class=\"img-fluid\">\n                </div>\n                <form action=\"/action_page.php\" method=\"get\">\n                    <div class=\"loginForm loginForm3 boxs\">\n                        <h2>Create New\n                            Password</h2>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>                            \n                        </button>\n                        <div class=\"row otpRow\">\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <input type=\"password\" class=\"form-control form_pass\" placeholder=\"Enter old password\">\n                                    <span class=\"Icon\"><img src=\"assets/images/key1.png\" alt=\"key1\" class=\"img-fluids\"></span>\n                                    <span class=\"eye\"><a href=\"javaScript:void(0)\"><img src=\"assets/images/eye.png\" alt=\"eye\" class=\"img-fluid\"></a></span>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <input type=\"password\" class=\"form-control form_pass\" placeholder=\"Create new password\">\n                                    <span class=\"Icon\"><img src=\"assets/images/key1.png\" alt=\"key1\" class=\"img-fluids\"></span>\n                                    <span class=\"eye\"><a href=\"javaScript:void(0)\"><img src=\"assets/images/eye.png\" alt=\"eye\" class=\"img-fluid\"></a></span>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <input type=\"password\" class=\"form-control form_pass\" placeholder=\"Create new password\">\n                                    <span class=\"Icon\"><img src=\"assets/images/key1.png\" alt=\"key1\" class=\"img-fluids\"></span>\n                                    <span class=\"eye\"><a href=\"javaScript:void(0)\"><img src=\"assets/images/eye.png\" alt=\"eye\" class=\"img-fluid\"></a></span>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <div class=\"loginBtn form_log addhover boxs\">\n                                    <button type=\"submit\"  data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#updatePasswordModal\" >Update Password</button>\n                                </div>\n                            </div>\n                        </div>\n                        \n                    </div>\n                </form>\n            </div>\n        </div>\n        \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/static-content-managment/static-content-managment.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/static-content-managment/static-content-managment.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <ul class=\"nav nav-tabs MainTabAll\" id=\"myTab\" role=\"tablist\">\n                    <li class=\"nav-item \">\n                        <a class=\"nav-link active\" id=\"About-tab\" data-toggle=\"tab\" href=\"#About\" role=\"tab\" aria-controls=\"About\" aria-selected=\"true\">About Us</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link \" id=\"Privacy-tab\" data-toggle=\"tab\" href=\"#Privacy\" role=\"tab\" aria-controls=\"Privacy\" aria-selected=\"false\">Privacy Policy</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link \" id=\"Terms-tab\" data-toggle=\"tab\" href=\"#Terms\" role=\"tab\" aria-controls=\"Terms\" aria-selected=\"false\">Terms & Conditions</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" id=\"Contact-tab\" data-toggle=\"tab\" href=\"#Contact\" role=\"tab\" aria-controls=\"Contact\" aria-selected=\"false\">Contact Us</a>\n                    </li>\n                </ul>\n\n                <div class=\"tab-content\" id=\"myTabContent\">\n                    <div class=\"tab-pane fade show active\" id=\"About\" role=\"tabpanel\" aria-labelledby=\"About-tab\">\n                        <div class=\"AboutUs\">\n                            <h3>About Us</h3>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class=\"tab-pane fade\" id=\"Privacy\" role=\"tabpanel\" aria-labelledby=\"Privacy-tab\">\n                        <div class=\"AboutUs\">\n                            <h3>Privacy Policy</h3>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class=\"tab-pane fade\" id=\"Terms\" role=\"tabpanel\" aria-labelledby=\"Terms-tab\">\n                        <div class=\"AboutUs\">\n                            <h3>Terms & Conditions</h3>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                        </div>\n                    </div>\n\n                    <div class=\"tab-pane fade\" id=\"Contact\" role=\"tabpanel\" aria-labelledby=\"Contact-tab\">\n                       <div class=\"AboutUs\">\n                            <h3>Contact</h3>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium optio repudiandae labore eligendi\n                                odit saepe quo, modi sit asperiores debitis necessitatibus ut rem ullam. Et autem fuga facilis blanditiis.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stocks/etfs/etfs.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stocks/etfs/etfs.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n            \n\n                <div class=\"HelpArea\">\n                    <ul class=\"nav nav-tabs boxs justify-content-around pt-4 newBlock\" id=\"myTab\" role=\"tablist\">\n                        <li class=\"nav-item \">\n                            <a class=\"nav-link active\" id=\"Raise-tab\" data-toggle=\"tab\" href=\"#Raise\" role=\"tab\" aria-controls=\"Raise\" aria-selected=\"true\">Popular Stocks</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link \" id=\"Invest-tab\" data-toggle=\"tab\" href=\"#Invest\" role=\"tab\" aria-controls=\"Invest\" aria-selected=\"false\">Popular Etfs</a>\n                        </li>\n                    </ul>\n\n                    <div class=\"tab-content\" id=\"myTabContent\">\n                        <div class=\"tab-pane fade show active\" id=\"Raise\" role=\"tabpanel\" aria-labelledby=\"Raise-tab\">\n                            <div class=\"newGraphTable\">\n                                <h2 style=\"padding-bottom: 20px;\">Popular stocks\n                                </h2>\n                                <div class=\"TableList\">\n                                    <div class=\"mainTable \">\n                                        <table class=\"table table-bordered \">\n                                            <thead>\n                                                <tr>\n                                                    <th>Ticker</th>\n                                                    <th> Name</th>\n                                                    <th>Latest Price</th>\n                                                    <th>holdings type</th>\n                                                    <th>allocation %</th>\n                                               \n                                                </tr>\n                                            </thead>\n                \n                                            <tbody>\n                                                <tr>\n                                                    <td>USD Cash</td>\n                                                    <td>USD Cash</td>\n                                                    <td></td>\n                                                    <td> Cash</td>\n                                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"26%\" readonly>\n                                                    <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                                    </span></td>\n                                               \n                                                </tr>\n                                                <tr>\n                                                    <td class=\"sky\">AMZN</td>\n                                                    <td>USD Cash</td>\n                                                    <td>3,311.00</td>\n                                                    <td class=\"sky\"> Stock</td>\n                                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"24%\" readonly>\n                                                        <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                                        </span></td>\n                                                \n                                                </tr>\n                                                <tr>\n                                                    <td class=\"sky\">MSFT</td>\n                                                    <td>USD Cash</td>\n                                                    <td>223.31</td>\n                                                    <td class=\"sky\"> Stock</td>\n                                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"40%\" readonly>\n                                                        <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                                        </span></td>\n                                               \n                                                </tr>\n                                                <tr>\n                                                    <td class=\"sky\">AAPL</td>\n                                                    <td>USD Cash</td>\n                                                    <td>121.42</td>\n                                                    <td class=\"sky\"> Stock</td>\n                                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"20.8%\" readonly>\n                                                        <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                                        </span></td>\n                                               \n                                                </tr>\n                                                <tr>\n                                                    <td class=\"sky\">AAPL</td>\n                                                    <td>USD Cash</td>\n                                                    <td>983.00</td>\n                                                    <td class=\"sky\"> Stock</td>\n                                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"20.6%\" readonly>\n                                                        <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                                        </span></td>\n                                                \n                                                </tr>\n                                                <tr>\n                                                    <td>USD Cash</td>\n                                                    <td>USD Cash</td>\n                                                    <td></td>\n                                                    <td> Cash</td>\n                                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"29%\" readonly>\n                                                        <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                                        </span></td>\n                                                \n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div> \n\n                            </div>\n                        </div>\n                        <div class=\"tab-pane fade\" id=\"Invest\" role=\"tabpanel\" aria-labelledby=\"Invest-tab\">\n                            <div class=\"newGraphTable\">\n                                <h2 style=\"padding-bottom: 20px;\">Popular Etfs\n                                </h2>\n                                <div class=\"TableList\">\n                                    <div class=\"mainTable \">\n                                        <table class=\"table table-bordered \">\n                                            <thead>\n                                                <tr>\n                                                    <th>Ticker</th>\n                                                    <th> Name</th>\n                                                    <th>Latest Price</th>\n                                                    <th>holdings type</th>\n                                                    <th>allocation %</th>\n                                               \n                                                </tr>\n                                            </thead>\n                \n                                            <tbody>\n                                                <tr>\n                                                    <td>USD Cash</td>\n                                                    <td>USD Cash</td>\n                                                    <td></td>\n                                                    <td> Cash</td>\n                                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"26%\" readonly>\n                                                    <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                                    </span></td>\n                                               \n                                                </tr>\n                                                <tr>\n                                                    <td class=\"sky\">AMZN</td>\n                                                    <td>USD Cash</td>\n                                                    <td>3,311.00</td>\n                                                    <td class=\"sky\"> Stock</td>\n                                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"24%\" readonly>\n                                                        <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                                        </span></td>\n                                                \n                                                </tr>\n                                                <tr>\n                                                    <td class=\"sky\">MSFT</td>\n                                                    <td>USD Cash</td>\n                                                    <td>223.31</td>\n                                                    <td class=\"sky\"> Stock</td>\n                                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"40%\" readonly>\n                                                        <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                                        </span></td>\n                                               \n                                                </tr>\n                                                <tr>\n                                                    <td class=\"sky\">AAPL</td>\n                                                    <td>USD Cash</td>\n                                                    <td>121.42</td>\n                                                    <td class=\"sky\"> Stock</td>\n                                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"20.8%\" readonly>\n                                                        <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                                        </span></td>\n                                               \n                                                </tr>\n                                                <tr>\n                                                    <td class=\"sky\">AAPL</td>\n                                                    <td>USD Cash</td>\n                                                    <td>983.00</td>\n                                                    <td class=\"sky\"> Stock</td>\n                                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"20.6%\" readonly>\n                                                        <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                                        </span></td>\n                                                \n                                                </tr>\n                                                <tr>\n                                                    <td>USD Cash</td>\n                                                    <td>USD Cash</td>\n                                                    <td></td>\n                                                    <td> Cash</td>\n                                                    <td><span class=\"inputBox\"><input type=\"text\" class=\"formControl\" value=\"29%\" readonly>\n                                                        <button class=\"minus\"><i class=\"fa fa-minus\"></i></button>\n                                                        </span></td>\n                                                \n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div> \n\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"totalCount totalCountModel\" style=\"padding: 40px 0px;\">\n                        <div class=\"SearchBox SearchBoxModel\">\n                            <a href=\"javaScript:void(0)\" class=\"ml-0\"><i class=\"fa fa-plus-circle\"\n                                    aria-hidden=\"true\"></i>Add New</a>\n                        </div>\n                        <div class=\"SearchBox\">\n                            <div class=\"SearchBox searchIcon\">\n                                <form action=\"\">\n                                    <input type=\"text\" style=\"width: 450px;\" placeholder=\"Search\">\n                                    <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                            src=\"assets/images/search.svg\" alt=\"\"></a>\n                                </form>\n                         \n                            </div>\n                        </div>\n               \n                \n                    </div>\n                </div>\n            </div>\n        </div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/summary/summary.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/summary/summary.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"DisFlex\">\n                    <h1></h1>\n                    <ul class=\"nav nav-tabs MainTabAll\" id=\"myTab\" role=\"tablist\">\n                        <li class=\"nav-item \">\n                            <a class=\"nav-link active\" id=\"Client-summary-tab\" data-toggle=\"tab\" href=\"#Client-summary\"\n                                role=\"tab\" aria-controls=\"Client-summary\" aria-selected=\"true\">Client</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link \" id=\"AUM-summary-tab\" data-toggle=\"tab\" href=\"#AUM-summary\" role=\"tab\"\n                                aria-controls=\"AUM-summary\" aria-selected=\"false\">AUM</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link \" id=\"Held-away-tab\" data-toggle=\"tab\" href=\"#Held-away\" role=\"tab\"\n                                aria-controls=\"Held-away\" aria-selected=\"false\">Held-away Acoount</a>\n                        </li>\n                    </ul>\n                </div>\n\n                <div class=\"tab-content\" id=\"myTabContent\">\n                    <div class=\"tab-pane fade show active\" id=\"Client-summary\" role=\"tabpanel\"\n                        aria-labelledby=\"Client-summary-tab\">\n                        <div class=\"HelpContent\">\n                            <div class=\"totalClient DisFlex\">\n                                <div class=\"retailClient\">\n                                    <h2 class=\"sky gm\"> Welcome back, <br>\n                      Dan</h2>\n                                </div>\n                                <div class=\"retailClient DisFlex\">\n                                    <li>\n                                        <h5><span class=\"sky d-block\">309</span> Clients</h5>\n                                    </li>\n                                    <li>\n                                        <h5><span class=\"sky d-block\">$7,856,100</span> AUM</h5>\n                                    </li>\n                                    <li>\n                                        <h5><span class=\"sky d-block\">7.33%</span>Change</h5>\n                                    </li>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"chartStarted row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"aumData\">\n                                    <div class=\"aumText\">\n                                        <h6 class=\"\">AUM <span> (as of 12/04/2020)</span></h6>\n                                    </div>\n                                </div>\n                                <div class=\"filterDay\">\n                                    <div class=\"filterDay1\">\n                                        <h6>Day <span class=\"Red\">-4.16%</span></h6>\n                                    </div>\n                                    <div class=\"filterDay1\">\n                                        <h6>Last 7 Day <span class=\"Red\">-4.16%</span></h6>\n                                    </div>\n                                    <div class=\"filterDay1\">\n                                        <h6>Last 30 Day <span class=\"Red\">-4.16%</span></h6>\n                                    </div>\n                                    <div class=\"filterDay1\">\n                                        <h6>Total Assets <span><strong></strong> $1.76M</span></h6>\n                                    </div>\n                                </div>\n                                <div id=\"chartdiv\" style=\"height: 400px;\"></div>\n                                <div class=\"aumMonth\">\n                                    <ul class=\"ulAumOne\">\n                                        <li>5D</li>\n                                        <li>1M</li>\n                                        <li>6M</li>\n                                        <li class=\"active\">YTD</li>\n                                        <li>1Y</li>\n                                        <li>5Y</li>\n                                        <li>MAX </li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <!-- <div class=\"col-md-6\">\n                                <h2 class=\"sky text-center pt-4\">Total AUM</h2>\n                                <div class=\"aumData\">\n                                    <div class=\"aumText\">\n                                        <h6 class=\"\">AUM <span> (as of 12/04/2020)</span></h6>\n                                    </div>\n                                    <div class=\"aumRight\">\n                                        <div class=\"aumMonth\">\n                                            <ul class=\"ulAumTwo\">\n                                                <li class=\"active\">YTD</li>\n                                                <li>3M</li>\n                                                <li>6M</li>\n                                                <li>1Y</li>\n                                                <li>5Y</li>\n                                                <li>ALL</li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"aumMore\">\n                                            <a href=\"javaScript:void(0)\">[ More ]</a>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"filterDay\">\n                                    <div class=\"filterDay1\">\n                                        <h6>Day <span class=\"Red\">-4.16%</span></h6>\n                                    </div>\n                                    <div class=\"filterDay1\">\n                                        <h6>Last 7 Day <span class=\"Red\">-4.16%</span></h6>\n                                    </div>\n                                    <div class=\"filterDay1\">\n                                        <h6>Last 30 Day <span class=\"Red\">-4.16%</span></h6>\n                                    </div>\n                                    <div class=\"filterDay1\">\n                                        <h6>Total Assets <span><strong></strong> $1.76M</span></h6>\n                                    </div>\n                                </div>\n                                <div id=\"chartdivTwo\" style=\"height: 400px\"></div>\n                            </div>\n                            <div class=\"col-md-6 pt-5\">\n                                <h2 class=\"sky text-center pt-4\">Total $ Held Away Account </h2>\n                                <div class=\"aumData \">\n                                    <div class=\"aumText\">\n                                        <h6 class=\"\">AUM <span> (as of 12/04/2020)</span></h6>\n                                    </div>\n                                    <div class=\"aumRight\">\n                                        <div class=\"aumMonth\">\n                                            <ul class=\"ulAumThree\">\n                                                <li class=\"active\">YTD</li>\n                                                <li>3M</li>\n                                                <li>6M</li>\n                                                <li>1Y</li>\n                                                <li>5Y</li>\n                                                <li>ALL</li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"aumMore\">\n                                            <a href=\"javaScript:void(0)\">[ More ]</a>\n                                        </div>\n                                    </div>\n                                </div>\n                        \n                                <div class=\"filterDay\">\n                                    <div class=\"filterDay1\">\n                                        <h6>Day <span class=\"Red\">-4.16%</span></h6>\n                                    </div>\n                                    <div class=\"filterDay1\">\n                                        <h6>Last 7 Day <span class=\"Red\">-4.16%</span></h6>\n                                    </div>\n                                    <div class=\"filterDay1\">\n                                        <h6>Last 30 Day <span class=\"Red\">-4.16%</span></h6>\n                                    </div>\n                                    <div class=\"filterDay1\">\n                                        <h6>Total Assets <span><strong></strong> $1.76M</span></h6>\n                                    </div>\n                                </div>\n                                <div id=\"chartdivThree\" style=\"height: 400px\"></div>\n                            </div> -->\n                        </div>\n                    </div>\n                    <div class=\"tab-pane fade\" id=\"AUM-summary\" role=\"tabpanel\" aria-labelledby=\"AUM-summary-tab\">\n                        <div class=\"HelpContent\">\n                            <div class=\"totalClient DisFlex\">\n                                <div class=\"retailClient\">\n                                    <h2 class=\"sky gm\"> Welcome back, <br>\n                      Dan</h2>\n                                </div>\n                                <div class=\"retailClient DisFlex\">\n                                    <li>\n                                        <h5><span class=\"sky d-block\">30</span> Clients</h5>\n                                    </li>\n                                    <li>\n                                        <h5><span class=\"sky d-block\">$6,856,100</span> AUM</h5>\n                                    </li>\n                                    <li>\n                                        <h5><span class=\"sky d-block\">3.33%</span>Change</h5>\n                                    </li>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"chartStarted row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"aumData\">\n                                    <div class=\"aumText\">\n                                        <h6 class=\"\">AUM <span> (as of 12/04/2020)</span></h6>\n                                    </div>\n                                </div>\n                                <div class=\"filterDay\">\n                                    <div class=\"filterDay1\">\n                                        <h6>Day <span class=\"Red\">-4.16%</span></h6>\n                                    </div>\n                                    <div class=\"filterDay1\">\n                                        <h6>Last 7 Day <span class=\"Red\">-4.16%</span></h6>\n                                    </div>\n                                    <div class=\"filterDay1\">\n                                        <h6>Last 30 Day <span class=\"Red\">-4.16%</span></h6>\n                                    </div>\n                                    <div class=\"filterDay1\">\n                                        <h6>Total Assets <span><strong></strong> $1.76M</span></h6>\n                                    </div>\n                                </div>\n                                <div id=\"chartdivTwo\" style=\"height: 400px;\"></div>\n                                <div class=\"aumMonth\">\n                                    <ul class=\"ulAumTwo\">\n                                        <li>5D</li>\n                                        <li>1M</li>\n                                        <li>6M</li>\n                                        <li class=\"active\">YTD</li>\n                                        <li>1Y</li>\n                                        <li>5Y</li>\n                                        <li>MAX </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"tab-pane fade\" id=\"Held-away\" role=\"tabpanel\" aria-labelledby=\"Held-away-tab\">\n                        <div class=\"HelpContent\">\n                            <div class=\"totalClient DisFlex\">\n                                <div class=\"retailClient\">\n                                    <h2 class=\"sky gm\"> Welcome back, <br>\n                      Dan</h2>\n                                </div>\n                                <div class=\"retailClient DisFlex\">\n                                    <li>\n                                        <h5><span class=\"sky d-block\">30</span> Clients</h5>\n                                    </li>\n                                    <li>\n                                        <h5><span class=\"sky d-block\">$8,856,100</span> AUM</h5>\n                                    </li>\n                                    <li>\n                                        <h5><span class=\"sky d-block\">3.33%</span>Change</h5>\n                                    </li>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"chartStarted row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"aumData\">\n                                    <div class=\"aumText\">\n                                        <h6 class=\"\">AUM <span> (as of 12/04/2020)</span></h6>\n                                    </div>\n                                </div>\n                                <div class=\"filterDay\">\n                                    <div class=\"filterDay1\">\n                                        <h6>Day <span class=\"Red\">-4.16%</span></h6>\n                                    </div>\n                                    <div class=\"filterDay1\">\n                                        <h6>Last 7 Day <span class=\"Red\">-4.16%</span></h6>\n                                    </div>\n                                    <div class=\"filterDay1\">\n                                        <h6>Last 30 Day <span class=\"Red\">-4.16%</span></h6>\n                                    </div>\n                                    <div class=\"filterDay1\">\n                                        <h6>Total Assets <span><strong></strong> $1.76M</span></h6>\n                                    </div>\n                                </div>\n                                <div id=\"chartdivThree\" style=\"height: 400px;\"></div>\n                                <div class=\"aumMonth\">\n                                    <ul class=\"ulAumThree\">\n                                        <li>5D</li>\n                                        <li>1M</li>\n                                        <li>6M</li>\n                                        <li class=\"active\">YTD</li>\n                                        <li>1Y</li>\n                                        <li>5Y</li>\n                                        <li>MAX </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n\n\n\n                <h2 class=\"sky\">Recent Activity:</h2>\n\n                <!-- <div class=\"HelpArea\">\n    <ul class=\"nav nav-tabs MainTabAll\" id=\"myTab\" role=\"tablist\">\n        <li class=\"nav-item \">\n            <a class=\"nav-link active\" id=\"Trade-summary-tab\" data-toggle=\"tab\" href=\"#Trade-summary\" role=\"tab\" aria-controls=\"Trade-summary\" aria-selected=\"true\">Orders</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link \" id=\"Deposits-summary-tab\" data-toggle=\"tab\" href=\"#Deposits-summary\" role=\"tab\" aria-controls=\"Deposits-summary\" aria-selected=\"false\">Deposits</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link \" id=\"Withdrawals-summary-tab\" data-toggle=\"tab\" href=\"#Withdrawals-summary\" role=\"tab\" aria-controls=\"Withdrawals-summary\" aria-selected=\"false\">Withdrawals</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"Stock-summary-tab\" data-toggle=\"tab\" href=\"#Stock-summary\" role=\"tab\" aria-controls=\"Stock-summary\" aria-selected=\"false\">Stock Rewards</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"Dividents-summary-tab\" data-toggle=\"tab\" href=\"#Dividents-summary\" role=\"tab\" aria-controls=\"Dividents-summary\" aria-selected=\"false\">Dividends</a>\n        </li>\n    </ul>\n\n    <div class=\"tab-content\" id=\"myTabContent\">\n        <div class=\"tab-pane fade show active\" id=\"Trade-summary\" role=\"tabpanel\" aria-labelledby=\"Trade-summary-tab\">\n            <div class=\"TradeConfirmation mb-5\">\n                <div class=\"mainTrade\">\n                    <h4 class=\"pb-2\">Orders <span>25, September</span></h4>\n                    <h5>Description:</h5>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia\n                        eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic\n                        architecto pariatur dignissimos repellat.</p>\n                    <h5>Status : Pending <span class=\"Green\">$5</span></h5>\n                </div>\n            </div>\n            <div class=\"TradeConfirmation mb-5\">\n                <div class=\"mainTrade\">\n                    <h4 class=\"pb-2\">Orders <span>25, September</span></h4>\n                    <h5>Description:</h5>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia\n                        eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic\n                        architecto pariatur dignissimos repellat.</p>\n                    <h5>Status : Pending <span class=\"Green\">$5</span></h5>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"tab-pane fade\" id=\"Deposits-summary\" role=\"tabpanel\" aria-labelledby=\"Deposits-summary-tab\">\n            <div class=\"TradeConfirmation mb-5\">\n                <div class=\"mainTrade\">\n                    <h4 class=\"pb-2\">Deposits <span>25, September</span></h4>\n                    <h5>Description:</h5>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia\n                        eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic\n                        architecto pariatur dignissimos repellat.</p>\n                    <h5>Status : Pending <span class=\"Green\">$5</span></h5>\n                </div>\n            </div>\n            <div class=\"TradeConfirmation mb-5\">\n                <div class=\"mainTrade\">\n                    <h4 class=\"pb-2\">Deposits <span>25, September</span></h4>\n                    <h5>Description:</h5>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia\n                        eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic\n                        architecto pariatur dignissimos repellat.</p>\n                    <h5>Status : Pending <span class=\"Green\">$5</span></h5>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"tab-pane fade\" id=\"Withdrawals-summary\" role=\"tabpanel\" aria-labelledby=\"Withdrawals-summary-tab\">\n           <div class=\"TradeConfirmation mb-5\">\n                <div class=\"mainTrade\">\n                    <h4 class=\"pb-2\">Withdrawals <span>25, September</span></h4>\n                    <h5>Description:</h5>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia\n                        eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic\n                        architecto pariatur dignissimos repellat.</p>\n                    <h5>Status : Pending <span class=\"Green\">$5</span></h5>\n                </div>\n            </div>\n            <div class=\"TradeConfirmation mb-5\">\n                <div class=\"mainTrade\">\n                    <h4 class=\"pb-2\">Withdrawals <span>25, September</span></h4>\n                    <h5>Description:</h5>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia\n                        eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic\n                        architecto pariatur dignissimos repellat.</p>\n                    <h5>Status : Pending <span class=\"Green\">$5</span></h5>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"tab-pane fade\" id=\"Stock-summary\" role=\"tabpanel\" aria-labelledby=\"Stock-summary-tab\">\n           <div class=\"TradeConfirmation mb-5\">\n                <div class=\"mainTrade\">\n                    <h4 class=\"pb-2\">Stock <span>25, September</span></h4>\n                    <h5>Description:</h5>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia\n                        eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic\n                        architecto pariatur dignissimos repellat.</p>\n                    <h5>Status : Pending <span class=\"Green\">$5</span></h5>\n                </div>\n            </div>\n            <div class=\"TradeConfirmation mb-5\">\n                <div class=\"mainTrade\">\n                    <h4 class=\"pb-2\">Stock <span>25, September</span></h4>\n                    <h5>Description:</h5>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia\n                        eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic\n                        architecto pariatur dignissimos repellat.</p>\n                    <h5>Status : Pending <span class=\"Green\">$5</span></h5>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"tab-pane fade\" id=\"Dividents-summary\" role=\"tabpanel\" aria-labelledby=\"Dividents-summary-tab\">\n           <div class=\"TradeConfirmation mb-5\">\n                <div class=\"mainTrade\">\n                    <h4 class=\"pb-2\">Dividents <span>25, September</span></h4>\n                    <h5>Description:</h5>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia\n                        eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic\n                        architecto pariatur dignissimos repellat.</p>\n                    <h5>Status : Pending <span class=\"Green\">$5</span></h5>\n                </div>\n            </div>\n            <div class=\"TradeConfirmation mb-5\">\n                <div class=\"mainTrade\">\n                    <h4 class=\"pb-2\">Dividents <span>25, September</span></h4>\n                    <h5>Description:</h5>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia\n                        eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic\n                        architecto pariatur dignissimos repellat.</p>\n                    <h5>Status : Pending <span class=\"Green\">$5</span></h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->\n                <div class=\"recentAct\">\n                    <div class=\"searchBar\">\n                        <div class=\"searchLeft\">\n                            <div class=\"filterFlex filterFlexnew\">\n                                <div class=\"SearchBox searchIcon\">\n                                    <form action=\"\">\n                                        <input type=\"text\" style=\"width: 250px;\" placeholder=\"Search\">\n                                        <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                                src=\"assets/images/search.svg\" alt=\"\"></a>\n                                    </form>\n\n                                </div>\n                                <div class=\"allAct\">\n                                    <select name=\"activity\" id=\"activity\">\n                                        <option value=\"activity0\">All Activity Types</option>\n                                        <option value=\"activity1\">Orders</option>\n                                        <option value=\"activity2\">Deposits</option>\n                                        <option value=\"activity3\">Withdrawals</option>\n                                        <option value=\"activity4\">Stock Rewards</option>\n                                        <option value=\"activity4\">Dividends</option>\n                                    </select>\n                                    <select name=\"activity\" id=\"activity\" style=\"margin-left: 25px;\">\n                                        <option value=\"times0\">All Times</option>\n                                        <option value=\"times2\">1 Month</option>\n                                        <option value=\"times3\">3 Months</option>\n                                        <option value=\"times4\">6 months</option>\n                                        <option value=\"times5\">1 Year</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"TableList\">\n                        <div class=\"mainTable \">\n                            <table class=\"table table-bordered \" style=\"width: 100%;\">\n                                <tbody>\n                                    <tr>\n                                        <td><a href=\"javascript:void(0)\" class=\"colorTer\">FEES</a></td>\n                                        <td>01|12|2020</td>\n                                        <td>July Fee billings run ready to excute.</td>\n                                        <td><a href=\"javascript:void(0)\" class=\"view\">view</a></td>\n                                    </tr>\n                                    <tr>\n                                        <td><a href=\"javascript:void(0)\" class=\"colorTer\">FEES</a></td>\n                                        <td>01|12|2020</td>\n                                        <td>July Fee billings run ready to excute.</td>\n                                        <td><a href=\"javascript:void(0)\" class=\"view\">view</a></td>\n                                    </tr>\n                                    <tr>\n                                        <td><a href=\"javascript:void(0)\" class=\"colorTer\">FEES</a></td>\n                                        <td>01|12|2020</td>\n                                        <td>July Fee billings run ready to excute.</td>\n                                        <td><a href=\"javascript:void(0)\" class=\"view\">view</a></td>\n                                    </tr>\n                                    <tr>\n                                        <td><a href=\"javascript:void(0)\" class=\"colorTer\">FEES</a></td>\n                                        <td>01|12|2020</td>\n                                        <td>July Fee billings run ready to excute.</td>\n                                        <td><a href=\"javascript:void(0)\" class=\"view\">view</a></td>\n                                    </tr>\n\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"AllnewRows\">\n                    <div class=\"newRowsLeft\">\n                        <h2 class=\"sky\" style=\"padding-bottom: 40px;\">Client Fees Summary:</h2>\n                        <div class=\"chartStarted row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"filterTable\">\n                                    <div class=\"TableList\">\n                                        <div class=\"mainTable \">\n                                            <table class=\"table table-bordered \" style=\"width: 100%;\">\n                                                <thead>\n                                                    <tr>\n                                                        <th style=\"width: 40%;\">Account Type</th>\n                                                        <th class=\"FilterDropdown\" style=\"width: 40%;\"><a\n                                                                style=\"color:#fff;\" href=\"javaScript:void(0)\">Amount <i\n                                                                    class=\"fa fa-filter\" aria-hidden=\"true\"></i> </a>\n                                                            <ul class=\"managedDropdownShow summaryDropdownShow\">\n                                                                <!-- <h5>Filter Option</h5> -->\n                                                                <li><a href=\"javaScript:Void(0)\">1 Month</a> </li>\n                                                                <li><a href=\"javaScript:Void(0)\">3 Month</a> </li>\n                                                                <li><a href=\"javaScript:Void(0)\">6 Month</a> </li>\n                                                                <li><a href=\"javaScript:Void(0)\">1 Year</a> </li>\n                                                                <li><a href=\"javaScript:Void(0)\">All</a> </li>\n                                                                <!-- <button class=\"Button apply_btn\" style=\"width: 100%;\">Apply</button> -->\n                                                            </ul>\n\n                                                        </th>\n                                                    </tr>\n                                                </thead>\n\n                                                <tbody>\n                                                    <tr>\n                                                        <td>Mudani Invest Starter</td>\n                                                        <td>$567876</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Mudani Invest Gold\n                                                        </td>\n                                                        <td>$567876</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Mudani Robo Core\n                                                        </td>\n                                                        <td>$567876</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Mudani Robo Baskets\n                                                        </td>\n                                                        <td>$567876</td>\n                                                    </tr>\n\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- <div class=\"col-md-6\">\n            <h2 class=\"sky text-center pt-4\">Client Fees Graph</h2>\n            <div class=\"aumData\">\n                <div class=\"aumText\">\n                    <h6 class=\"\">AUM <span> (as of 12/04/2020)</span></h6>\n                </div>\n                <div class=\"aumRight\">\n                    <div class=\"aumMonth\">\n                        <ul class=\"ulAumFour\">\n                            <li class=\"active\">YTD</li>\n                            <li>3M</li>\n                            <li>6M</li>\n                            <li>1Y</li>\n                            <li>5Y</li>\n                            <li>ALL</li>\n                        </ul>\n                    </div>\n                    <div class=\"aumMore\">\n                        <a href=\"javaScript:void(0)\">[ More ]</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"filterDay\">\n                <div class=\"filterDay1\">\n                    <h6>Day <span class=\"Red\">-4.16%</span></h6>\n                </div>\n                <div class=\"filterDay1\">\n                    <h6>Last 7 Day <span class=\"Red\">-4.16%</span></h6>\n                </div>\n                <div class=\"filterDay1\">\n                    <h6>Last 30 Day <span class=\"Red\">-4.16%</span></h6>\n                </div>\n                <div class=\"filterDay1\">\n                    <h6>Total Assets <span><strong></strong> $1.76M</span></h6>\n                </div>\n            </div>\n            <div id=\"chartdivFour\" style=\"height: 400px\"></div>\n        </div> -->\n                        </div>\n                    </div>\n\n\n                    <div class=\"topClients\">\n                        <h2 class=\"sky \" style=\"padding-bottom: 40px;\">Top Clients</h2>\n                        <div class=\"TableList\">\n                            <div class=\"mainTable \">\n                                <table class=\"table table-bordered \" style=\"width: 100%;\">\n                                    <thead>\n                                        <tr>\n                                            <th>Name</th>\n                                            <th>YTD Change</th>\n                                            <th>AUM <span style=\"margin-left:4px;position: relative;\n                                                bottom: 1px;\"><i class=\"fa fa-sort-down\"></i></span></th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                <tr>\n                                    <td>Calvin</td>\n                                    <td><span class=\"arrow\"><img src=\"assets/images/up-arrow.svg\" alt=\"\"></span> 17.60%</td>\n                                    <td>$5,601,923</td> \n                                </tr>\n                                <tr>\n                                    <td>Den</td>\n                                    <td><span class=\"arrow\"><img src=\"assets/images/up-arrow.svg\" alt=\"\"></span> 17.60%</td>\n                                    <td>$5,601,923</td> \n                                </tr>\n                                <tr>\n                                    <td>Calvin</td>\n                                    <td><span class=\"arrow\"><img src=\"assets/images/up-arrow.svg\" alt=\"\"></span> 17.60%</td>\n                                    <td>$5,601,923</td> \n                                </tr>\n                                <tr>\n                                    <td>Den</td>\n                                    <td><span class=\"arrow\"><img src=\"assets/images/up-arrow.svg\" alt=\"\"></span> 17.60%</td>\n                                    <td>$5,601,923</td> \n                                </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n\n                \n                </div>\n                <div class=\"newRowsRight\">\n                    <h2 class=\"sky \" style=\"padding-top:25px\">Top Holdings</h2>\n\n\n                    <div class=\"HelpArea pt-3\">\n                        <div class=\"enireAll\">\n                            <ul class=\"nav nav-tabs MainTabAll\" id=\"myTab\" role=\"tablist\">\n                                <li class=\"nav-item \">\n                                    <a class=\"nav-link active\" id=\"Self-summary-tab\" data-toggle=\"tab\"\n                                        href=\"#Self-summary\" role=\"tab\" aria-controls=\"Self-summary\"\n                                        aria-selected=\"true\">Self-Directed</a>\n                                </li>\n                                <li class=\"nav-item \">\n                                    <a class=\"nav-link \" id=\"Managed-summary-tab\" data-toggle=\"tab\"\n                                        href=\"#Managed-summary\" role=\"tab\" aria-controls=\"Managed-summary\"\n                                        aria-selected=\"true\">Managed</a>\n                                </li>\n                            </ul>\n                            <div class=\"enterKey enterKeynew\">\n                                <div class=\"SearchBox searchIcon\">\n                                    <form action=\"\">\n                                        <input type=\"text\" style=\"width: 250px;\" placeholder=\"Search\">\n                                        <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                                src=\"assets/images/search.svg\" alt=\"\"></a>\n                                    </form>\n\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"tab-content\" id=\"myTabContent\">\n                            <div class=\"tab-pane fade show active\" id=\"Self-summary\" role=\"tabpanel\"\n                                aria-labelledby=\"Self-summary-tab\">\n                                <div class=\"TableList\" style=\"padding-top: 40px;\">\n                                    <div class=\"mainTable \">\n                                        <table class=\"table table-bordered \" style=\"width: 100%;\">\n                            \n                                            <tbody>\n                                        <tr>\n                                        <td>\n                                            <img src=\"assets/images/apple.svg\" class=\"apple\" alt=\"\" style=\"margin: 0 auto;width: 25px;display: block;\">\n                                          <p style=\"padding: 5px 0px;\"> Apple Inc.</p>\n                                            <a href=\"javascript:void(0)\" class=\"tick\" style=\"font-size:12px;padding: 2px 5px;\">AAPL</a>\n                                            <h4 class=\"dollar\">$2,340,545</h4>\n                                        </td>\n                                        <td>\n                                            <img src=\"assets/images/apple.svg\" class=\"apple\" alt=\"\" style=\"margin: 0 auto;width: 25px;display: block;\">\n                                          <p style=\"padding: 5px 0px;\"> Apple Inc.</p>\n                                            <a href=\"javascript:void(0)\" class=\"tick\" style=\"font-size:12px;padding: 2px 5px;\">AAPL</a>\n                                            <h4 class=\"dollar\">$2,340,545</h4>\n                                        </td>\n                                        <td>\n                                            <img src=\"assets/images/apple.svg\" class=\"apple\" alt=\"\" style=\"margin: 0 auto;width: 25px;display: block;\">\n                                          <p style=\"padding: 5px 0px;\"> Apple Inc.</p>\n                                            <a href=\"javascript:void(0)\" class=\"tick\" style=\"font-size:12px;padding: 2px 5px;\">AAPL</a>\n                                            <h4 class=\"dollar\">$2,340,545</h4>\n                                        </td>\n                                        <td>\n                                            <img src=\"assets/images/apple.svg\" class=\"apple\" alt=\"\" style=\"margin: 0 auto;width: 25px;display: block;\">\n                                          <p style=\"padding: 5px 0px;\"> Apple Inc.</p>\n                                            <a href=\"javascript:void(0)\" class=\"tick\" style=\"font-size:12px;padding: 2px 5px;\">AAPL</a>\n                                            <h4 class=\"dollar\">$2,340,545</h4>\n                                        </td>\n                                        <td>\n                                            <img src=\"assets/images/apple.svg\" class=\"apple\" alt=\"\" style=\"margin: 0 auto;width: 25px;display: block;\">\n                                          <p style=\"padding: 5px 0px;\"> Apple Inc.</p>\n                                            <a href=\"javascript:void(0)\" class=\"tick\" style=\"font-size:12px;padding: 2px 5px;\">AAPL</a>\n                                            <h4 class=\"dollar\">$2,340,545</h4>\n                                        </td>\n                                        </tr>\n                                        <tr>\n                                            <td>\n                                                <img src=\"assets/images/apple.svg\" class=\"apple\" alt=\"\" style=\"margin: 0 auto;width: 25px;display: block;\">\n                                              <p style=\"padding: 5px 0px;\"> Apple Inc.</p>\n                                                <a href=\"javascript:void(0)\" class=\"tick\" style=\"font-size:12px;padding: 2px 5px;\">AAPL</a>\n                                                <h4 class=\"dollar\">$2,340,545</h4>\n                                            </td>\n                                            <td>\n                                                <img src=\"assets/images/apple.svg\" class=\"apple\" alt=\"\" style=\"margin: 0 auto;width: 25px;display: block;\">\n                                              <p style=\"padding: 5px 0px;\"> Apple Inc.</p>\n                                                <a href=\"javascript:void(0)\" class=\"tick\" style=\"font-size:12px;padding: 2px 5px;\">AAPL</a>\n                                                <h4 class=\"dollar\">$2,340,545</h4>\n                                            </td>\n                                            <td>\n                                                <img src=\"assets/images/apple.svg\" class=\"apple\" alt=\"\" style=\"margin: 0 auto;width: 25px;display: block;\">\n                                              <p style=\"padding: 5px 0px;\"> Apple Inc.</p>\n                                                <a href=\"javascript:void(0)\" class=\"tick\" style=\"font-size:12px;padding: 2px 5px;\">AAPL</a>\n                                                <h4 class=\"dollar\">$2,340,545</h4>\n                                            </td>\n                                            <td>\n                                                <img src=\"assets/images/apple.svg\" class=\"apple\" alt=\"\" style=\"margin: 0 auto;width: 25px;display: block;\">\n                                              <p style=\"padding: 5px 0px;\"> Apple Inc.</p>\n                                                <a href=\"javascript:void(0)\" class=\"tick\" style=\"font-size:12px;padding: 2px 5px;\">AAPL</a>\n                                                <h4 class=\"dollar\">$2,340,545</h4>\n                                            </td>\n                                            <td>\n                                                <img src=\"assets/images/apple.svg\" class=\"apple\" alt=\"\" style=\"margin: 0 auto;width: 25px;display: block;\">\n                                              <p style=\"padding: 5px 0px;\"> Apple Inc.</p>\n                                                <a href=\"javascript:void(0)\" class=\"tick\" style=\"font-size:12px;padding: 2px 5px;\">AAPL</a>\n                                                <h4 class=\"dollar\">$2,340,545</h4>\n                                            </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <img src=\"assets/images/apple.svg\" class=\"apple\" alt=\"\" style=\"margin: 0 auto;width: 25px;display: block;\">\n                                                  <p style=\"padding: 5px 0px;\"> Apple Inc.</p>\n                                                    <a href=\"javascript:void(0)\" class=\"tick\" style=\"font-size:12px;padding: 2px 5px;\">AAPL</a>\n                                                    <h4 class=\"dollar\">$2,340,545</h4>\n                                                </td>\n                                                <td>\n                                                    <img src=\"assets/images/apple.svg\" class=\"apple\" alt=\"\" style=\"margin: 0 auto;width: 25px;display: block;\">\n                                                  <p style=\"padding: 5px 0px;\"> Apple Inc.</p>\n                                                    <a href=\"javascript:void(0)\" class=\"tick\" style=\"font-size:12px;padding: 2px 5px;\">AAPL</a>\n                                                    <h4 class=\"dollar\">$2,340,545</h4>\n                                                </td>\n                                                <td>\n                                                    <img src=\"assets/images/apple.svg\" class=\"apple\" alt=\"\" style=\"margin: 0 auto;width: 25px;display: block;\">\n                                                  <p style=\"padding: 5px 0px;\"> Apple Inc.</p>\n                                                    <a href=\"javascript:void(0)\" class=\"tick\" style=\"font-size:12px;padding: 2px 5px;\">AAPL</a>\n                                                    <h4 class=\"dollar\">$2,340,545</h4>\n                                                </td>\n                                                <td>\n                                                    <img src=\"assets/images/apple.svg\" class=\"apple\" alt=\"\" style=\"margin: 0 auto;width: 25px;display: block;\">\n                                                  <p style=\"padding: 5px 0px;\"> Apple Inc.</p>\n                                                    <a href=\"javascript:void(0)\" class=\"tick\" style=\"font-size:12px;padding: 2px 5px;\">AAPL</a>\n                                                    <h4 class=\"dollar\">$2,340,545</h4>\n                                                </td>\n                                                <td>\n                                                    <img src=\"assets/images/apple.svg\" class=\"apple\" alt=\"\" style=\"margin: 0 auto;width: 25px;display: block;\">\n                                                  <p style=\"padding: 5px 0px;\"> Apple Inc.</p>\n                                                    <a href=\"javascript:void(0)\" class=\"tick\" style=\"font-size:12px;padding: 2px 5px;\">AAPL</a>\n                                                    <h4 class=\"dollar\">$2,340,545</h4>\n                                                </td>\n                                                </tr>\n\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                              \n                            </div>\n                            <div class=\"tab-pane fade\" id=\"Managed-summary\" role=\"tabpanel\"\n                                aria-labelledby=\"Managed-summary-tab\">\n                                <div class=\"TableList\" style=\"padding-top: 40px;\">\n                                    <div class=\"mainTable \">\n                                        <table class=\"table table-bordered \" style=\"width: 100%;\">\n                            \n                                            <tbody>\n                                        <tr>\n                                        <td>\n                                            <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                            <h4 class=\"dollar\">$2,340,545</h4>\n                                        </td>\n                                        <td>\n                                            <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                            <h4 class=\"dollar\">$2,340,545</h4>\n                                        </td>\n                                        <td>\n                                            <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                            <h4 class=\"dollar\">$2,340,545</h4>\n                                        </td>\n                                        <td>\n                                            <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                            <h4 class=\"dollar\">$2,340,545</h4>\n                                        </td>\n                                        <td>\n                                            <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                            <h4 class=\"dollar\">$2,340,545</h4>\n                                        </td>\n                                        <td>\n                                            <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                            <h4 class=\"dollar\">$2,340,545</h4>\n                                        </td>\n                                        </tr>\n\n                                        <tr>\n                                            <td>\n                                                <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                <h4 class=\"dollar\">$2,340,545</h4>\n                                            </td>\n                                            <td>\n                                                <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                <h4 class=\"dollar\">$2,340,545</h4>\n                                            </td>\n                                            <td>\n                                                <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                <h4 class=\"dollar\">$2,340,545</h4>\n                                            </td>\n                                            <td>\n                                                <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                <h4 class=\"dollar\">$2,340,545</h4>\n                                            </td>\n                                            <td>\n                                                <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                <h4 class=\"dollar\">$2,340,545</h4>\n                                            </td>\n                                            <td>\n                                                <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                <h4 class=\"dollar\">$2,340,545</h4>\n                                            </td>\n                                            </tr>\n\n                                            <tr>\n                                                <td>\n                                                    <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                    <h4 class=\"dollar\">$2,340,545</h4>\n                                                </td>\n                                                <td>\n                                                    <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                    <h4 class=\"dollar\">$2,340,545</h4>\n                                                </td>\n                                                <td>\n                                                    <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                    <h4 class=\"dollar\">$2,340,545</h4>\n                                                </td>\n                                                <td>\n                                                    <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                    <h4 class=\"dollar\">$2,340,545</h4>\n                                                </td>\n                                                <td>\n                                                    <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                    <h4 class=\"dollar\">$2,340,545</h4>\n                                                </td>\n                                                <td>\n                                                    <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                    <h4 class=\"dollar\">$2,340,545</h4>\n                                                </td>\n                                                </tr>\n\n                                                <tr>\n                                                    <td>\n                                                        <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                        <h4 class=\"dollar\">$2,340,545</h4>\n                                                    </td>\n                                                    <td>\n                                                        <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                        <h4 class=\"dollar\">$2,340,545</h4>\n                                                    </td>\n                                                    <td>\n                                                        <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                        <h4 class=\"dollar\">$2,340,545</h4>\n                                                    </td>\n                                                    <td>\n                                                        <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                        <h4 class=\"dollar\">$2,340,545</h4>\n                                                    </td>\n                                                    <td>\n                                                        <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                        <h4 class=\"dollar\">$2,340,545</h4>\n                                                    </td>\n                                                    <td>\n                                                        <a href=\"javascript:void(0)\" class=\"tick\">Amez</a>\n                                                        <h4 class=\"dollar\">$2,340,545</h4>\n                                                    </td>\n                                                    </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/support-message/support-message.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/support-message/support-message.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"enterKey\">\n                    <div class=\"SearchBox\">\n                        <a [routerLink]=\"['/support']\">\n                            << Back</a>\n                    </div>\n                </div>\n                <div class=\"bread mt-3\">\n                    <nav aria-label=\"breadcrumb\">\n                        <ol class=\"breadcrumb\">\n                            <li class=\"breadcrumb-item\">Support</li>\n                            <li class=\"breadcrumb-item active\" aria-current=\"page\">Message</li>\n                            <p>Edited on: 30, sept,20</p>\n                        </ol>\n                    </nav>\n                </div>\n\n                <div class=\"TradeConfirmation mb-5 mt-5\">\n                    <div class=\"mainTrade\">\n                        <h4 class=\"pb-2\">Simmi Sharma </h4>\n                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non illum, mollitia eos ipsa harum, cupiditate ex optio doloremque animi voluptatem debitis adipisci sapiente saepe hic architecto pariatur dignissimos repellat.</p>\n                    </div>\n                </div>\n\n                    <div class=\"mainTrade\">\n                        <div class=\"Filter FilterSearch\">\n                            <div class=\"form-group planeRply\">\n                                <textarea placeholder=\"Reply...\" id=\"\" cols=\"250\" rows=\"5\" style=\"padding: 10px;\"></textarea>\n                                <a href=\"javascript:void(0)\"><i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i></a>\n                            </div>\n                        </div>\n                </div>\n\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/support/support.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/support/support.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"enterKey\">\n                    <div class=\"SearchBox\">\n                        <h3>Support</h3>\n                    </div>\n                    \n                </div>\n                <div class=\"TableList\" style=\"padding-top: 40px;\">\n                    <div class=\"mainTable \">\n                        <table class=\"table table-bordered \">\n                            <thead>\n                                <tr>\n                                    <th>S.No</th>\n                                    <th>Client Name</th> \n                                    <th>Account Number</th>  \n                                    <th>Email Address</th>  \n                                    <th>Action </th>  \n                                </tr>\n                            </thead>\n            \n                            <tbody>\n                                <tr>\n                                    <td>1</td>\n                                    <td>Simmi Sharma</td> \n                                    <td>453678967</td>  \n                                    <td>Email.gmail.com</td>  \n                                    <td> \n                                        <a class=\"Blue  \" [routerLink]=\"['/support-message']\">View</a>\n                                    </td> \n                                </tr>    \n                                <tr>\n                                    <td>2</td>\n                                    <td>Vishal Yadav</td> \n                                    <td>453678967</td>  \n                                    <td>Email.gmail.com</td>  \n                                    <td> \n                                        <a class=\"Blue  \" [routerLink]=\"['/support-message']\">View</a>\n                                    </td> \n                                </tr>  \n                                <tr>\n                                    <td>3</td>\n                                    <td>Simmi Sharma</td> \n                                    <td>453678967</td>  \n                                    <td>Email.gmail.com</td>  \n                                    <td> \n                                        <a class=\"Blue  \" [routerLink]=\"['/support-message']\">View</a>\n                                    </td> \n                                </tr>  \n                                <tr>\n                                    <td>4</td>\n                                    <td>Simmi Sharma</td> \n                                    <td>453678967</td>  \n                                    <td>Email.gmail.com</td>  \n                                    <td> \n                                        <a class=\"Blue  \" [routerLink]=\"['/support-message']\">View</a>\n                                    </td> \n                                </tr>  \n                                <tr>\n                                    <td>5</td>\n                                    <td>Simmi Sharma</td> \n                                    <td>453678967</td>  \n                                    <td>Email.gmail.com</td>  \n                                    <td> \n                                        <a class=\"Blue  \" [routerLink]=\"['/support-message']\">View</a>\n                                    </td>  \n                                </tr>  \n                            </tbody>\n                        </table>\n                    </div>\n                    <div class=\"Pagination\">\n                        <ul>\n                            <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/left-arrow.svg\" alt=\"\"></a></li>\n                            <li class=\"active\"><a href=\"javaScript:void(0)\">1</a></li>\n                            <li><a href=\"javaScript:void(0)\">2</a></li>\n                            <li><a href=\"javaScript:void(0)\">3</a></li>\n                            <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/right-arrow.svg\" alt=\"\"></a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/thematic-detail/thematic-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/thematic-detail/thematic-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ngx-spinner *ngIf=\"isShowSpinner\"></ngx-spinner>\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"enterKey\">\n                    <div class=\"SearchBox\">\n                        <a href=\"javaScript:void(0)\" (click)=backClicked()>\n                            << Back</a>\n                    </div>\n                    <div class=\"SearchBox SearchBoxModel\">\n                        <a [routerLink]=\"['/edit-thematic/',thematicDetail._id]\"><i class=\"fa fa-pencil-square-o\"\n                                aria-hidden=\"true\"></i>Edit</a>\n                    </div>\n                </div>\n                <div class=\"bread mt-3\">\n                    <nav aria-label=\"breadcrumb\">\n                        <ol class=\"breadcrumb\">\n                            <li class=\"breadcrumb-item\">Thematic</li>\n                            <li class=\"breadcrumb-item active\" aria-current=\"page\">Thematic Detail</li>\n                            <p>Added on: {{thematicDetail.createdAt | date}}</p>\n                        </ol>\n                    </nav>\n                </div>\n\n                <div class=\"adjust\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3 colAdjust\">\n                            <h3>Name <span>{{thematicDetail.thematicName}}</span></h3>\n                            <!-- <h3>Assigned Model <span>{{thematicDetail.models.title}}</span></h3> -->\n                            <h3>Assigned Model <span>{{assignedModelDetail.modelName}}</span></h3>\n                        </div>\n                        <div class=\"col-md-3 colAdjust\">\n                            <h3>Description <span>{{thematicDetail.thematicDescription}} </span></h3>\n                            <h3>Image <span><img [src]=\"thematicDetail.thematicImage\">\n                                </span></h3>\n                        </div>\n                        <div class=\"col-md-6 chartMain colAdjust\">\n                            <h3>Target Allocation</h3>\n                            <div class=\"ClientAccount pb-3\">\n                                <h4 style=\"text-transform: uppercase; text-align: center;\"><strong>Balance Sheets\n                                        Components</strong></h4>\n                            </div>\n                            <div class=\"chart\" style=\"    margin: 0 auto;\" id=\"chart\">\n                                <div class=\"newCharts\">\n                                    <div id=\"chart\" style=\"padding-left: 85px;\">\n                                        <apx-chart [series]=\"chartOptions.series\" [chart]=\"chartOptions.chart\"\n                                            [labels]=\"chartOptions.labels\" [title]=\"chartOptions.title\"\n                                            [theme]=\"chartOptions.theme\" [responsive]=\"chartOptions.responsive\">\n                                        </apx-chart>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- <div class=\"totalCount\">\n                    <ul>\n                        <li>Total: <span>100.00%</span></li>\n                        <li>Total Cash: <span>20.00%</span></li>\n                        <li>Total Security: <span>90.00%</span></li>\n                        <li>No. of Holdings: <span>10</span></li>\n                    </ul>\n                </div> -->\n                <div class=\"adjust\">\n                    <div class=\"colAdjust\">\n                        <h3 style=\"text-align: left; padding-bottom: 40px;\">Number of Model Assigned</h3>\n                    </div>\n                </div>\n                <div class=\"TableList\">\n                    <div class=\"mainTable \">\n                        <table class=\"table table-bordered \">\n                            <thead>\n                                <tr>\n                                    <th>Ticker</th>\n                                    <th> Name</th>\n                                    <th>Latest Price</th>\n                                    <th>Asset Class</th>\n                                    <th>Target Value(%)</th>\n                                    <th>Upper(%)</th>\n                                    <th>Lower(%)</th>\n                                </tr>\n                            </thead>\n\n                            <tbody>\n                                <tr *ngFor=\"let item of assignedModelDetail.models\">\n                                    <td class=\"sky\">{{item.symbol}}</td>\n                                    <td>{{item.companyName}}</td>\n                                    <td>{{item.latestPrice}}</td>\n                                    <td class=\"sky\"> {{item.holdingType}}</td>\n                                    <td>{{item.targetValue}}%</td>\n                                    <td>0%</td>\n                                    <td>0%</td>\n\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/transactions/transactions.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/transactions/transactions.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <!-- <ul class=\"nav nav-tabs MainTabAll\">\n                    <li class=\"nav-item \">\n                        <a class=\"nav-link \" [routerLink]=\"['/summary']\">Summary | Overview</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link \" [routerLink]=\"['/client']\">Clients</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link \" [routerLink]=\"['/investing']\">Investing</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link active\" [routerLink]=\"['/transactions']\">Transactions</a>\n                    </li>\n                </ul> -->\n            \n<div class=\"enterKey\">\n\n    <div class=\"SearchBox\">\n        <div class=\"Filter FilterSearch\">\n            <div class=\"form-group\">\n                <label>Account</label>\n                <select class=\"form-control\"> \n                    <option>Self Directed</option>\n                    <option>Managed</option>\n                </select>\n            </div>\n        </div>\n    </div>\n    \n</div>\n<div class=\"recentAct\">\n    <div class=\"searchBar\">\n        <div class=\"searchLeft\">\n            <div class=\"filterFlex filterFlexnew\">\n                <div class=\"SearchBox searchIcon\">\n                    <form action=\"\">\n                        <input type=\"text\" style=\"width: 250px;\" placeholder=\"Search\">\n                        <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                src=\"assets/images/search.svg\" alt=\"\"></a>\n                    </form>\n                    <a href=\"javaScript:void(0)\">\n                        <img class=\"csv img-fluid\" src=\"assets/images/csv.svg\">Download</a>\n                </div>\n                <div class=\"allAct\">\n                    <select name=\"activity\" id=\"activity\">\n                        <option value=\"activity0\">Activity</option>\n                        <option value=\"activity1\">DEP</option>\n                        <option value=\"activity2\">WITH</option>\n                        <option value=\"activity3\">FEES</option>\n                        <option value=\"activity4\">AO</option>\n                        <option value=\"activity5\">CNCL</option>\n                        <option value=\"activity6\">REFR</option>\n                        \n                    </select>\n                    <select name=\"activity\" id=\"activity\" style=\"margin-left: 25px;\">\n                        <option value=\"times0\">All Times</option>\n                        <option value=\"times2\">1 Month</option>\n                        <option value=\"times3\">3 Months</option>\n                        <option value=\"times4\">6 months</option>\n                        <option value=\"times5\">1 Year</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"TableList\">\n        <div class=\"mainTable \">\n            <table class=\"table table-bordered \" style=\"width: 100%;\">\n                <tbody>\n                    <tr>\n                        <td><a href=\"javascript:void(0)\" class=\"colorTer\">FEES</a></td>\n                        <td>01|12|2020</td>\n                        <td>July Fee billings run ready to excute.</td>\n                        <td><a href=\"javascript:void(0)\" class=\"view\">view</a></td>\n                    </tr>\n                    <tr>\n                        <td><a href=\"javascript:void(0)\" class=\"colorTer\">FEES</a></td>\n                        <td>01|12|2020</td>\n                        <td>July Fee billings run ready to excute.</td>\n                        <td><a href=\"javascript:void(0)\" class=\"view\">view</a></td>\n                    </tr>\n                    <tr>\n                        <td><a href=\"javascript:void(0)\" class=\"colorTer\">FEES</a></td>\n                        <td>01|12|2020</td>\n                        <td>July Fee billings run ready to excute.</td>\n                        <td><a href=\"javascript:void(0)\" class=\"view\">view</a></td>\n                    </tr>\n                    <tr>\n                        <td><a href=\"javascript:void(0)\" class=\"colorTer\">FEES</a></td>\n                        <td>01|12|2020</td>\n                        <td>July Fee billings run ready to excute.</td>\n                        <td><a href=\"javascript:void(0)\" class=\"view\">view</a></td>\n                    </tr>\n\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wait-list/wait-list.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wait-list/wait-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<!-- <div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"wait-list\">\n                    <h2 class=\"sky text-center\">Wait List</h2>\n                    <div class=\"wait-list-area\">\n                        <h4><span class=\"sky\">Serial No. </span> 1</h4>\n                        <h4><span class=\"sky\">Email Id :</span>vishu@gmail.com</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->\n\n<div class=\"WrapperArea\">\n    <div class=\"WrapperBox\">\n        <div class=\"Small-Wrapper\">\n            <div class=\"HelpArea\">\n                <div class=\"enterKey\">\n                    <div class=\"SearchBox\">\n                        <h3>Wait List</h3>\n                    </div>\n                    <div class=\"SearchBox\">\n                        <div class=\"SearchBox searchIcon\">\n                            <form action=\"\">\n                                <input type=\"text\" style=\"width: 250px;\" placeholder=\"Search\">\n                                <a class=\"searchIconBtn\" href=\"javaScipt:void(0)\"><img\n                                        src=\"assets/images/search.svg\" alt=\"\"></a>\n                            </form>\n                            <a href=\"javaScript:void(0)\"><img class=\"csv img-fluid\" src=\"assets/images/csv.svg\" alt=\"\">Download</a>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"TableList\" style=\"padding-top: 40px;\">\n                    <div class=\"mainTable \">\n                        <table class=\"table table-bordered \">\n                            <thead>\n                                <tr>\n                                    <th>S.No</th>\n                                    <th>Email Address</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let item of waitUsers; let i = index\">\n                                    <td>{{i+1}}</td>\n                                    <td>{{item.email}}</td>\n                                </tr>\n\n                            </tbody>\n                        </table>\n                    </div>\n                    <!-- <div class=\"Pagination\">\n                        <ul>\n                            <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/left-arrow.svg\" alt=\"\"></a></li>\n                            <li class=\"active\"><a href=\"javaScript:void(0)\">1</a></li>\n                            <li><a href=\"javaScript:void(0)\">2</a></li>\n                            <li><a href=\"javaScript:void(0)\">3</a></li>\n                            <li><a href=\"javaScript:void(0)\"><img src=\"assets/images/right-arrow.svg\" alt=\"\"></a></li>\n                        </ul>\n                    </div> -->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/api/api.service.ts":
/*!********************************!*\
  !*** ./src/api/api.service.ts ***!
  \********************************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let Api = class Api {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
    }
    post(url, data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('mudanitoken') || ''
            })
        };
        return this.http.post(this.url + url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    formData(url, data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content': 'multipart/form-data',
                'authorization': localStorage.getItem('mudanitoken') || ''
            })
        };
        return this.http.post(this.url + url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    get(url) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('mudanitoken') || ''
            })
        };
        return this.http.get(this.url + url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    delete(url) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('mudanitoken') || ''
            })
        };
        return this.http.delete(this.url + url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.log({ error });
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    }
    ;
};
Api.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
Api = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], Api);



/***/ }),

/***/ "./src/api/comman.service.ts":
/*!***********************************!*\
  !*** ./src/api/comman.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");




let CommonService = class CommonService {
    constructor(toastr, spinner) {
        this.toastr = toastr;
        this.spinner = spinner;
    }
    succ(msg) {
        this.toastr.success(msg);
    }
    err(msg) {
        this.toastr.error(msg);
        this.spinner.hide();
    }
};
CommonService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], CommonService);



/***/ }),

/***/ "./src/app/add-questionaire/add-questionaire.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/add-questionaire/add-questionaire.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.site-root .site-main {\n  min-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.b-questionnaire .questionnaire-content .tool-choice {\n  position: fixed;\n  width: 280px;\n}\n.ant-card {\n  font-size: 14px;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: #fff;\n  border-radius: 2px;\n  position: relative;\n  transition: all 0.3s;\n}\n.b-questionnaire .questionnaire-content .tool-choice .tool-title {\n  padding: 8px 24px;\n  font-weight: 700;\n  font-size: 16px;\n}\n.b-questionnaire .questionnaire-content .tool-choice .choices {\n  display: block;\n  padding: 14px 24px;\n  border-top: 1px solid #f0f2f5;\n  cursor: pointer;\n  color: #2196f3;\n}\n.b-questionnaire .questionnaire-content .tool-choice .anticon {\n  margin-right: 12px;\n}\n.anticon {\n  display: inline-block;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  line-height: 1;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.anticon:before {\n  display: block;\n}\n.b-questionnaire .questionnaire-content .edit-questions-content {\n  padding-left: 294px;\n  width: 100%;\n}\n.goal-question-section {\n  border-radius: 4px;\n  background-color: #fff;\n  padding: 16px 24px;\n  margin-bottom: 16px;\n}\n.ant-row {\n  position: relative;\n  margin-left: 0;\n  margin-right: 0;\n  height: auto;\n  zoom: 1;\n  display: block;\n  box-sizing: border-box;\n}\n.ant-form-item {\n  font-size: 14px;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  padding: 0;\n  list-style: none;\n  margin: 0 0 24px;\n  vertical-align: top;\n}\n.ant-form-item-label {\n  white-space: normal;\n  line-height: 29px;\n}\n.ant-form-item-label {\n  text-align: right;\n  vertical-align: middle;\n  line-height: 39.9999px;\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.ant-form-item-label label {\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-form-item label {\n  position: relative;\n}\n.goal-questionnaire-root .itemProps-label {\n  color: #1e1e1e;\n  font-weight: 700;\n  display: inline-block;\n  margin-bottom: 4px;\n}\n.ant-form-item-label label:after {\n  content: \":\";\n  margin: 0 8px 0 2px;\n  position: relative;\n  top: -0.5px;\n}\n.ant-form-item-required:before {\n  display: inline-block;\n  margin-right: 4px;\n  content: \"*\";\n  font-family: SimSun;\n  line-height: 1;\n  font-size: 14px;\n  color: #f5222d;\n}\n.goal-questionnaire-root .ant-form-item-control {\n  line-height: 34px;\n}\n.ant-form-item-control {\n  line-height: 39.9999px;\n  position: relative;\n  zoom: 1;\n}\n.ant-input {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  box-sizing: border-box;\n  margin: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  width: 100%;\n  height: 32px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d8dce6;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n.goal-question-section .ant-form-item {\n  padding-bottom: 18px;\n}\n.goal-questionnaire-root .ant-row {\n  width: 80%;\n}\ntextarea.ant-input {\n  max-width: 100%;\n  height: auto;\n  vertical-align: bottom;\n  transition: all 0.3s, height 0s;\n  min-height: 32px;\n}\n.goal-question-item .goal-question-title {\n  padding: 10px 0 12px;\n  border-bottom: 1px solid #f0f2f5;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.goal-question-item .ant-row {\n  display: flex;\n}\n.goal-question-item .goal-question-title .ant-form-item-label {\n  font-size: 16px;\n  color: #1e1e1e;\n  font-weight: 700;\n}\n.goal-question-item .ant-form-item-label {\n  min-width: 40px;\n}\n.goal-question-item .ant-row .ant-form-item-control-wrapper {\n  flex: 1 1;\n}\n.goal-question-item .goal-question-content .question-option-wrap {\n  display: flex;\n  justify-content: space-between;\n  padding: 4px 0;\n}\n.goal-question-item .remove-icon {\n  font-size: 16px;\n  font-weight: 700;\n  padding: 5px;\n  color: #888e98;\n}\n.anticon-close:before, .anticon-cross:before {\n  content: \"\";\n}\n.b-questionnaire .ant-form-inline .ant-form-item-with-help, .b-questionnaire .ant-form-item {\n  margin-bottom: 0;\n}\n.goal-question-item .goal-question-content .add-option {\n  padding: 10px 20px;\n}\n.goal-question-footer {\n  overflow: hidden;\n  border-top: 1px solid #f0f2f5;\n}\n.goal-question-footer .ant-row-flex {\n  margin: 16px 0;\n}\n.ant-row-flex {\n  display: flex;\n  flex-flow: row wrap;\n}\n.ant-row-flex-space-between {\n  justify-content: space-between;\n}\n.goal-question-footer .choice-icon {\n  display: inline-block;\n  vertical-align: middle;\n  width: 12px;\n  height: 12px;\n  background: #999;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 1px #999;\n  margin-left: 1px;\n}\n.goal-question-footer .footer-btn {\n  color: #888e98;\n  margin-left: 30px;\n}\n.ant-col-6.flex-colume.record {\n  margin-left: 20px;\n}\n.b-questionnaire .choice-record {\n  text-align: right;\n}\n.choice-record span {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  font-weight: 700;\n}\n.site-root .site-main {\n  min-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.ant-breadcrumb {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n.breadNav_nav__3bu0T .ant-breadcrumb-link {\n  color: rgba(30, 30, 30, 0.7);\n}\n.ant-breadcrumb-separator {\n  margin: 0 8px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-breadcrumb > span:last-child .ant-breadcrumb-separator {\n  display: none;\n}\n.ant-btn {\n  line-height: 1.5;\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  white-space: nowrap;\n  padding: 0 15px;\n  font-size: 14px;\n  border-radius: 4px;\n  height: 32px;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n       user-select: none;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  border: 1px solid #d8dce6;\n  margin-left: 20px;\n}\n.ant-btn-primary {\n  color: #fff;\n  background-color: #2196f3;\n  border-color: #2196f3;\n}\n.breadNav_nav__3bu0T {\n  border-bottom: 1px solid #f0f2f5;\n  line-height: 54px;\n  height: 54px;\n  padding: 0 27px;\n}\n.fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 9;\n}\ninput.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\ntextarea.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\nbutton[type=button]:disabled {\n  background: #9c9c9c;\n  border-color: #9c9c9c;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXF1ZXN0aW9uYWlyZS9hZGQtcXVlc3Rpb25haXJlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbW9idWxvdXMvRGVza3RvcC9wcm9qZWN0cy84XzUvYWR2aXNvcnkvc3JjL2FwcC9hZGQtcXVlc3Rpb25haXJlL2FkZC1xdWVzdGlvbmFpcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBREVKO0FDQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBREdKO0FDREE7RUFDSSxlQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FESUo7QUNGQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FES0o7QUNIQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURNSjtBQ0pBO0VBQ0ksa0JBQUE7QURPSjtBQ0xBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURRSjtBQ05BO0VBQ0ksY0FBQTtBRFNKO0FDUEE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QURVSjtBQ1JBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURXSjtBQ1RBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FEWUo7QUNWQTtFQUNJLGVBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FEYUo7QUNYQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QURjSjtBQ1pBO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FEZUo7QUNiQTtFQUNJLDBCQUFBO0FEZ0JKO0FDZEE7RUFDSSxrQkFBQTtBRGlCSjtBQ2ZBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBRGtCSjtBQ2hCQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBRG1CSjtBQ2pCQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURvQko7QUNsQkE7RUFDSSxpQkFBQTtBRHFCSjtBQ25CQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FEc0JKO0FDcEJBO0VBQ0ksOE1BQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FEdUJKO0FDckJBO0VBQ0ksb0JBQUE7QUR3Qko7QUN0QkE7RUFDSSxVQUFBO0FEeUJKO0FDdkJBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUQwQko7QUN4QkE7RUFDSSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBRDJCSjtBQ3pCQTtFQUNJLGFBQUE7QUQ0Qko7QUMxQkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FENkJKO0FDM0JBO0VBQ0ksZUFBQTtBRDhCSjtBQzVCQTtFQUNJLFNBQUE7QUQrQko7QUM3QkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FEZ0NKO0FDOUJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QURpQ0o7QUMvQkE7RUFDSSxZQUFBO0FEa0NKO0FDaENBO0VBQ0ksZ0JBQUE7QURtQ0o7QUNqQ0E7RUFDSSxrQkFBQTtBRG9DSjtBQ2xDQTtFQUNJLGdCQUFBO0VBQ0EsNkJBQUE7QURxQ0o7QUNuQ0E7RUFDSSxjQUFBO0FEc0NKO0FDcENBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FEdUNKO0FDckNBO0VBQ0ksOEJBQUE7QUR3Q0o7QUN0Q0E7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FEeUNKO0FDdkNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FEMENKO0FDeENBO0VBQ0ksaUJBQUE7QUQyQ0o7QUN6Q0E7RUFDSSxpQkFBQTtBRDRDSjtBQ3pDQTtFQUNJLDhNQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUQ0Q0o7QUN6Q0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FENENKO0FDMUNBO0VBQ0ksOE1BQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FENkNKO0FDM0NBO0VBQ0ksNEJBQUE7QUQ4Q0o7QUM1Q0E7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7QUQrQ0o7QUM3Q0E7RUFDSSxhQUFBO0FEZ0RKO0FDOUNBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7T0FBQSxpQkFBQTtFQUNBLHlEQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBRGlESjtBQy9DQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FEa0RKO0FDaERBO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FEbURKO0FDakRBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FEb0RKO0FDN0NBO0VBQ0ksMEJBQUE7QURnREo7QUM3Q0E7RUFDSSwwQkFBQTtBRGdESjtBQzlDQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRGlESiIsImZpbGUiOiJzcmMvYXBwL2FkZC1xdWVzdGlvbmFpcmUvYWRkLXF1ZXN0aW9uYWlyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5zaXRlLXJvb3QgLnNpdGUtbWFpbiB7XG4gIG1pbi13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAyNHB4O1xufVxuXG4uYi1xdWVzdGlvbm5haXJlIC5xdWVzdGlvbm5haXJlLWNvbnRlbnQgLnRvb2wtY2hvaWNlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMjgwcHg7XG59XG5cbi5hbnQtY2FyZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcInRudW1cIjtcbiAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmItcXVlc3Rpb25uYWlyZSAucXVlc3Rpb25uYWlyZS1jb250ZW50IC50b29sLWNob2ljZSAudG9vbC10aXRsZSB7XG4gIHBhZGRpbmc6IDhweCAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5iLXF1ZXN0aW9ubmFpcmUgLnF1ZXN0aW9ubmFpcmUtY29udGVudCAudG9vbC1jaG9pY2UgLmNob2ljZXMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTRweCAyNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjJmNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzIxOTZmMztcbn1cblxuLmItcXVlc3Rpb25uYWlyZSAucXVlc3Rpb25uYWlyZS1jb250ZW50IC50b29sLWNob2ljZSAuYW50aWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmFudGljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5hbnRpY29uOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYi1xdWVzdGlvbm5haXJlIC5xdWVzdGlvbm5haXJlLWNvbnRlbnQgLmVkaXQtcXVlc3Rpb25zLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDI5NHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmdvYWwtcXVlc3Rpb24tc2VjdGlvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uYW50LXJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB6b29tOiAxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmFudC1mb3JtLWl0ZW0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwIDAgMjRweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjlweDtcbn1cblxuLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6IDM5Ljk5OTlweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYW50LWZvcm0taXRlbS1sYWJlbCBsYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xufVxuXG4uYW50LWZvcm0taXRlbSBsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmdvYWwtcXVlc3Rpb25uYWlyZS1yb290IC5pdGVtUHJvcHMtbGFiZWwge1xuICBjb2xvcjogIzFlMWUxZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5hbnQtZm9ybS1pdGVtLWxhYmVsIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCI6XCI7XG4gIG1hcmdpbjogMCA4cHggMCAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMC41cHg7XG59XG5cbi5hbnQtZm9ybS1pdGVtLXJlcXVpcmVkOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBmb250LWZhbWlseTogU2ltU3VuO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2Y1MjIyZDtcbn1cblxuLmdvYWwtcXVlc3Rpb25uYWlyZS1yb290IC5hbnQtZm9ybS1pdGVtLWNvbnRyb2wge1xuICBsaW5lLWhlaWdodDogMzRweDtcbn1cblxuLmFudC1mb3JtLWl0ZW0tY29udHJvbCB7XG4gIGxpbmUtaGVpZ2h0OiAzOS45OTk5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgem9vbTogMTtcbn1cblxuLmFudC1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZWQgTnVtYmVyXCIsIFwiQ2hpbmVzZSBRdW90ZVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmdvYWwtcXVlc3Rpb24tc2VjdGlvbiAuYW50LWZvcm0taXRlbSB7XG4gIHBhZGRpbmctYm90dG9tOiAxOHB4O1xufVxuXG4uZ29hbC1xdWVzdGlvbm5haXJlLXJvb3QgLmFudC1yb3cge1xuICB3aWR0aDogODAlO1xufVxuXG50ZXh0YXJlYS5hbnQtaW5wdXQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MsIGhlaWdodCAwcztcbiAgbWluLWhlaWdodDogMzJweDtcbn1cblxuLmdvYWwtcXVlc3Rpb24taXRlbSAuZ29hbC1xdWVzdGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHggMCAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjJmNTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZ29hbC1xdWVzdGlvbi1pdGVtIC5hbnQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmdvYWwtcXVlc3Rpb24taXRlbSAuZ29hbC1xdWVzdGlvbi10aXRsZSAuYW50LWZvcm0taXRlbS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMxZTFlMWU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xuICBtaW4td2lkdGg6IDQwcHg7XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmFudC1yb3cgLmFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyIHtcbiAgZmxleDogMSAxO1xufVxuXG4uZ29hbC1xdWVzdGlvbi1pdGVtIC5nb2FsLXF1ZXN0aW9uLWNvbnRlbnQgLnF1ZXN0aW9uLW9wdGlvbi13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA0cHggMDtcbn1cblxuLmdvYWwtcXVlc3Rpb24taXRlbSAucmVtb3ZlLWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICM4ODhlOTg7XG59XG5cbi5hbnRpY29uLWNsb3NlOmJlZm9yZSwgLmFudGljb24tY3Jvc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCLumLNcIjtcbn1cblxuLmItcXVlc3Rpb25uYWlyZSAuYW50LWZvcm0taW5saW5lIC5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscCwgLmItcXVlc3Rpb25uYWlyZSAuYW50LWZvcm0taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmdvYWwtcXVlc3Rpb24tY29udGVudCAuYWRkLW9wdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLmdvYWwtcXVlc3Rpb24tZm9vdGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYyZjU7XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWZvb3RlciAuYW50LXJvdy1mbGV4IHtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbi5hbnQtcm93LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuXG4uYW50LXJvdy1mbGV4LXNwYWNlLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWZvb3RlciAuY2hvaWNlLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQ6ICM5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICM5OTk7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWZvb3RlciAuZm9vdGVyLWJ0biB7XG4gIGNvbG9yOiAjODg4ZTk4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmFudC1jb2wtNi5mbGV4LWNvbHVtZS5yZWNvcmQge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmItcXVlc3Rpb25uYWlyZSAuY2hvaWNlLXJlY29yZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2hvaWNlLXJlY29yZCBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlZCBOdW1iZXJcIiwgXCJDaGluZXNlIFF1b3RlXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiUGluZ0ZhbmcgU0NcIiwgXCJIaXJhZ2lubyBTYW5zIEdCXCIsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc2l0ZS1yb290IC5zaXRlLW1haW4ge1xuICBtaW4td2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMjRweDtcbn1cblxuLmFudC1icmVhZGNydW1iIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlZCBOdW1iZXJcIiwgXCJDaGluZXNlIFF1b3RlXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiUGluZ0ZhbmcgU0NcIiwgXCJIaXJhZ2lubyBTYW5zIEdCXCIsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcInRudW1cIjtcbiAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5icmVhZE5hdl9uYXZfXzNidTBUIC5hbnQtYnJlYWRjcnVtYi1saW5rIHtcbiAgY29sb3I6IHJnYmEoMzAsIDMwLCAzMCwgMC43KTtcbn1cblxuLmFudC1icmVhZGNydW1iLXNlcGFyYXRvciB7XG4gIG1hcmdpbjogMCA4cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xufVxuXG4uYW50LWJyZWFkY3J1bWIgPiBzcGFuOmxhc3QtY2hpbGQgLmFudC1icmVhZGNydW1iLXNlcGFyYXRvciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hbnQtYnRuIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMzJweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkY2U2O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmFudC1idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICBib3JkZXItY29sb3I6ICMyMTk2ZjM7XG59XG5cbi5icmVhZE5hdl9uYXZfXzNidTBUIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYyZjU7XG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xuICBoZWlnaHQ6IDU0cHg7XG4gIHBhZGRpbmc6IDAgMjdweDtcbn1cblxuLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTtcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG59XG5cbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuXG5idXR0b25bdHlwZT1idXR0b25dOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzljOWM5YztcbiAgYm9yZGVyLWNvbG9yOiAjOWM5YzljO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufSIsIi5zaXRlLXJvb3QgLnNpdGUtbWFpbiB7XG4gICAgbWluLXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMCAyNHB4O1xufVxuLmItcXVlc3Rpb25uYWlyZSAucXVlc3Rpb25uYWlyZS1jb250ZW50IC50b29sLWNob2ljZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAyODBweDtcbn1cbi5hbnQtY2FyZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gICAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNjUpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbn1cbi5iLXF1ZXN0aW9ubmFpcmUgLnF1ZXN0aW9ubmFpcmUtY29udGVudCAudG9vbC1jaG9pY2UgLnRvb2wtdGl0bGUge1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmItcXVlc3Rpb25uYWlyZSAucXVlc3Rpb25uYWlyZS1jb250ZW50IC50b29sLWNob2ljZSAuY2hvaWNlcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTRweCAyNHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMmY1O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzIxOTZmMztcbn1cbi5iLXF1ZXN0aW9ubmFpcmUgLnF1ZXN0aW9ubmFpcmUtY29udGVudCAudG9vbC1jaG9pY2UgLmFudGljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5hbnRpY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuLmFudGljb246YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5iLXF1ZXN0aW9ubmFpcmUgLnF1ZXN0aW9ubmFpcmUtY29udGVudCAuZWRpdC1xdWVzdGlvbnMtY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyOTRweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5nb2FsLXF1ZXN0aW9uLXNlY3Rpb24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmFudC1yb3cge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHpvb206IDE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5hbnQtZm9ybS1pdGVtIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcInRudW1cIjtcbiAgICBmb250LXZhcmlhbnQ6IHRhYnVsYXItbnVtcztcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42NSk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwIDAgMjRweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG4uYW50LWZvcm0taXRlbS1sYWJlbCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogMzkuOTk5OXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uYW50LWZvcm0taXRlbS1sYWJlbCBsYWJlbCB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjg1KTtcbn1cbi5hbnQtZm9ybS1pdGVtIGxhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ29hbC1xdWVzdGlvbm5haXJlLXJvb3QgLml0ZW1Qcm9wcy1sYWJlbCB7XG4gICAgY29sb3I6ICMxZTFlMWU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLmFudC1mb3JtLWl0ZW0tbGFiZWwgbGFiZWw6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiOlwiO1xuICAgIG1hcmdpbjogMCA4cHggMCAycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLS41cHg7XG59XG4uYW50LWZvcm0taXRlbS1yZXF1aXJlZDpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBjb250ZW50OiBcIipcIjtcbiAgICBmb250LWZhbWlseTogU2ltU3VuO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI2Y1MjIyZDtcbn1cbi5nb2FsLXF1ZXN0aW9ubmFpcmUtcm9vdCAuYW50LWZvcm0taXRlbS1jb250cm9sIHtcbiAgICBsaW5lLWhlaWdodDogMzRweDtcbn1cbi5hbnQtZm9ybS1pdGVtLWNvbnRyb2wge1xuICAgIGxpbmUtaGVpZ2h0OiAzOS45OTk5cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHpvb206IDE7XG59XG4uYW50LWlucHV0IHtcbiAgICBmb250LWZhbWlseTogXCJNb25vc3BhY2VkIE51bWJlclwiLFwiQ2hpbmVzZSBRdW90ZVwiLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJQaW5nRmFuZyBTQ1wiLFwiSGlyYWdpbm8gU2FucyBHQlwiLFwiTWljcm9zb2Z0IFlhSGVpXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gICAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDRweCAxMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNjUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkY2U2O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xufVxuLmdvYWwtcXVlc3Rpb24tc2VjdGlvbiAuYW50LWZvcm0taXRlbSB7XG4gICAgcGFkZGluZy1ib3R0b206IDE4cHg7XG59XG4uZ29hbC1xdWVzdGlvbm5haXJlLXJvb3QgLmFudC1yb3cge1xuICAgIHdpZHRoOiA4MCU7XG59XG50ZXh0YXJlYS5hbnQtaW5wdXQge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzLGhlaWdodCAwcztcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xufVxuLmdvYWwtcXVlc3Rpb24taXRlbSAuZ29hbC1xdWVzdGlvbi10aXRsZSB7XG4gICAgcGFkZGluZzogMTBweCAwIDEycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYyZjU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmdvYWwtcXVlc3Rpb24taXRlbSAuYW50LXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmdvYWwtcXVlc3Rpb24tdGl0bGUgLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzFlMWUxZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuLmdvYWwtcXVlc3Rpb24taXRlbSAuYW50LWZvcm0taXRlbS1sYWJlbCB7XG4gICAgbWluLXdpZHRoOiA0MHB4O1xufVxuLmdvYWwtcXVlc3Rpb24taXRlbSAuYW50LXJvdyAuYW50LWZvcm0taXRlbS1jb250cm9sLXdyYXBwZXIge1xuICAgIGZsZXg6IDEgMTtcbn1cbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmdvYWwtcXVlc3Rpb24tY29udGVudCAucXVlc3Rpb24tb3B0aW9uLXdyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDRweCAwO1xufVxuLmdvYWwtcXVlc3Rpb24taXRlbSAucmVtb3ZlLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogIzg4OGU5ODtcbn1cbi5hbnRpY29uLWNsb3NlOmJlZm9yZSwgLmFudGljb24tY3Jvc3M6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTYzM1wiO1xufVxuLmItcXVlc3Rpb25uYWlyZSAuYW50LWZvcm0taW5saW5lIC5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscCwgLmItcXVlc3Rpb25uYWlyZSAuYW50LWZvcm0taXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmdvYWwtcXVlc3Rpb24tY29udGVudCAuYWRkLW9wdGlvbiB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLmdvYWwtcXVlc3Rpb24tZm9vdGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMmY1O1xufVxuLmdvYWwtcXVlc3Rpb24tZm9vdGVyIC5hbnQtcm93LWZsZXgge1xuICAgIG1hcmdpbjogMTZweCAwO1xufVxuLmFudC1yb3ctZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuLmFudC1yb3ctZmxleC1zcGFjZS1iZXR3ZWVuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZ29hbC1xdWVzdGlvbi1mb290ZXIgLmNob2ljZS1pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYmFja2dyb3VuZDogIzk5OTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzk5OTtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xufVxuLmdvYWwtcXVlc3Rpb24tZm9vdGVyIC5mb290ZXItYnRuIHtcbiAgICBjb2xvcjogIzg4OGU5ODtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cbi5hbnQtY29sLTYuZmxleC1jb2x1bWUucmVjb3Jke1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmItcXVlc3Rpb25uYWlyZSAuY2hvaWNlLXJlY29yZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jaG9pY2UtcmVjb3JkIHNwYW4ge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZWQgTnVtYmVyXCIsXCJDaGluZXNlIFF1b3RlXCIsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIlBpbmdGYW5nIFNDXCIsXCJIaXJhZ2lubyBTYW5zIEdCXCIsXCJNaWNyb3NvZnQgWWFIZWlcIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNpdGUtcm9vdCAuc2l0ZS1tYWluIHtcbiAgICBtaW4td2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAwIDI0cHg7XG59XG4uYW50LWJyZWFkY3J1bWIge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZWQgTnVtYmVyXCIsXCJDaGluZXNlIFF1b3RlXCIsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIlBpbmdGYW5nIFNDXCIsXCJIaXJhZ2lubyBTYW5zIEdCXCIsXCJNaWNyb3NvZnQgWWFIZWlcIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcInRudW1cIjtcbiAgICBmb250LXZhcmlhbnQ6IHRhYnVsYXItbnVtcztcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42NSk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC40NSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmJyZWFkTmF2X25hdl9fM2J1MFQgLmFudC1icmVhZGNydW1iLWxpbmsge1xuICAgIGNvbG9yOiByZ2JhKDMwLDMwLDMwLC43KTtcbn1cbi5hbnQtYnJlYWRjcnVtYi1zZXBhcmF0b3Ige1xuICAgIG1hcmdpbjogMCA4cHg7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjQ1KTtcbn1cbi5hbnQtYnJlYWRjcnVtYj5zcGFuOmxhc3QtY2hpbGQgLmFudC1icmVhZGNydW1iLXNlcGFyYXRvciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5hbnQtYnRuIHtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGN1YmljLWJlemllciguNjQ1LC4wNDUsLjM1NSwxKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjY1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGRjZTY7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uYW50LWJ0bi1wcmltYXJ5IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICAgIGJvcmRlci1jb2xvcjogIzIxOTZmMztcbn1cbi5icmVhZE5hdl9uYXZfXzNidTBUIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjJmNTtcbiAgICBsaW5lLWhlaWdodDogNTRweDtcbiAgICBoZWlnaHQ6IDU0cHg7XG4gICAgcGFkZGluZzogMCAyN3B4O1xufVxuLmZpeGVkIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogOTtcbn1cblxuLmFudC1mb3JtLWl0ZW0tY2hpbGRyZW4gLm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgIC8vIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG59XG5cbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbn1cbmJ1dHRvblt0eXBlPVwiYnV0dG9uXCJdOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjOWM5YzljO1xuICAgIGJvcmRlci1jb2xvcjogIzljOWM5YztcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/add-questionaire/add-questionaire.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/add-questionaire/add-questionaire.component.ts ***!
  \****************************************************************/
/*! exports provided: AddQuestionaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionaireComponent", function() { return AddQuestionaireComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");
/* harmony import */ var _api_comman_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/comman.service */ "./src/api/comman.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AddQuestionaireComponent = class AddQuestionaireComponent {
    constructor(fb, api, commonService, router) {
        this.fb = fb;
        this.api = api;
        this.commonService = commonService;
        this.router = router;
    }
    ngOnInit() {
        this.form = this.fb.group({
            "title": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'questions': this.fb.array([
                this.initQuestion()
            ])
        });
        console.log(this.form.value);
    }
    initQuestion() {
        return this.fb.group({
            'question': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'answers': this.fb.array([
                this.initAnswer()
            ])
        });
    }
    initAnswer() {
        return this.fb.group({
            'answer': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'value': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]]
        });
    }
    addQuestion() {
        const control = this.form.controls['questions'];
        control.push(this.initQuestion());
    }
    removeQuestion(ix) {
        const control = this.form.controls['questions'];
        control.removeAt(ix);
    }
    addAnswer(ix) {
        const control = this.form.controls['questions'].at(ix).get('answers');
        control.push(this.initAnswer());
    }
    removeAnswer(ix, iy) {
        console.log(ix + ' / ' + iy);
        console.log(this.form.controls['questions'].at(ix).get('answers'));
        const control = this.form.controls['questions'].at(ix).get('answers');
        control.removeAt(iy);
    }
    // Move form control item up or down in the array
    move(shift, currentIndex) {
        const rules = this.form.controls['questions'];
        let newIndex = currentIndex + shift;
        if (newIndex === -1) {
            newIndex = this.form.controls['questions'].length - 1;
        }
        else if (newIndex == rules.length) {
            newIndex = 0;
        }
        const currentGroup = this.form.controls['questions'].at(currentIndex);
        rules.removeAt(currentIndex);
        ;
        rules.insert(newIndex, currentGroup);
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    saveQuestionaire() {
        if (this.form.invalid) {
            this.commonService.err("All fields are required.");
            return;
        }
        console.log(this.form.value);
        let data = {
            title: this.form.value.title,
            description: this.form.value.description,
            questions: this.form.value.questions,
        };
        this.api.post("addQuestionnaire", data).subscribe(result => {
            if (result.status == 200) {
                this.commonService.succ(result.message);
                this.router.navigate(['matching-portfolio/' + result.data._id]);
            }
            else {
                this.commonService.err(result.message);
            }
        }, error => {
            console.log({ error });
        });
    }
};
AddQuestionaireComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["Api"] },
    { type: _api_comman_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AddQuestionaireComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-questionaire',
        template: __webpack_require__(/*! raw-loader!./add-questionaire.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-questionaire/add-questionaire.component.html"),
        styles: [__webpack_require__(/*! ./add-questionaire.component.scss */ "./src/app/add-questionaire/add-questionaire.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _api_api_service__WEBPACK_IMPORTED_MODULE_3__["Api"],
        _api_comman_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], AddQuestionaireComponent);



/***/ }),

/***/ "./src/app/add-ticker/add-ticker.component.scss":
/*!******************************************************!*\
  !*** ./src/app/add-ticker/add-ticker.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ant-input {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  box-sizing: border-box;\n  margin: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  width: 100%;\n  height: 32px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d8dce6;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n\n.ant-btn {\n  line-height: 1.5;\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  white-space: nowrap;\n  padding: 0 15px;\n  font-size: 14px;\n  border-radius: 4px;\n  height: 32px;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n       user-select: none;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  border: 1px solid #d8dce6;\n  margin-left: 20px;\n}\n\n.ant-btn-primary {\n  color: #fff;\n  background-color: #2196f3;\n  border-color: #2196f3;\n}\n\n.unblockModal-content {\n  width: 400px;\n  height: 400px;\n  margin: 150px auto;\n}\n\n.unblockModal-body {\n  position: relative;\n  padding: 115px 40px;\n  background: #00496d33;\n}\n\n.matching-modal {\n  width: 380px;\n  margin-left: 530px;\n  margin-top: 67px;\n  background: white;\n  padding: 15px;\n  border-radius: 7px;\n}\n\n.text-width {\n  width: 48%;\n}\n\ninput.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n\ntextarea.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n\nbutton[type=button]:disabled {\n  background: #9c9c9c;\n  border-color: #9c9c9c;\n  cursor: not-allowed;\n}\n\n.ticket-detail {\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vYnVsb3VzL0Rlc2t0b3AvcHJvamVjdHMvOF81L2Fkdmlzb3J5L3NyYy9hcHAvYWRkLXRpY2tlci9hZGQtdGlja2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZGQtdGlja2VyL2FkZC10aWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4TUFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO09BQUEsaUJBQUE7RUFDQSx5REFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNJSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNJLFVBQUE7QUNLSjs7QURIQTtFQUNJLDBCQUFBO0FDTUo7O0FESEE7RUFDSSwwQkFBQTtBQ01KOztBREpBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDT0o7O0FESkU7RUFDRSxnQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvYWRkLXRpY2tlci9hZGQtdGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFudC1pbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlZCBOdW1iZXJcIixcIkNoaW5lc2UgUXVvdGVcIiwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiUGluZ0ZhbmcgU0NcIixcIkhpcmFnaW5vIFNhbnMgR0JcIixcIk1pY3Jvc29mdCBZYUhlaVwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xuICAgIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA0cHggMTFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjY1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbn1cblxuLmFudC1idG4ge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgY3ViaWMtYmV6aWVyKC42NDUsLjA0NSwuMzU1LDEpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNjUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5hbnQtYnRuLXByaW1hcnkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzO1xufVxuLnVuYmxvY2tNb2RhbC1jb250ZW50e1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1hcmdpbjogMTUwcHggYXV0bztcbn1cbi51bmJsb2NrTW9kYWwtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDExNXB4IDQwcHg7XG4gICAgYmFja2dyb3VuZDogIzAwNDk2ZDMzO1xufVxuXG4ubWF0Y2hpbmctbW9kYWx7XG4gICAgd2lkdGg6IDM4MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1MzBweDtcbiAgICBtYXJnaW4tdG9wOiA2N3B4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLnRleHQtd2lkdGh7XG4gICAgd2lkdGg6IDQ4JTtcbn1cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbn1cblxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVke1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuYnV0dG9uW3R5cGU9XCJidXR0b25cIl06ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICM5YzljOWM7XG4gICAgYm9yZGVyLWNvbG9yOiAjOWM5YzljO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAudGlja2V0LWRldGFpbHtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9IiwiLmFudC1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZWQgTnVtYmVyXCIsIFwiQ2hpbmVzZSBRdW90ZVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmFudC1idG4ge1xuICBsaW5lLWhlaWdodDogMS41O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGRjZTY7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uYW50LWJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gIGJvcmRlci1jb2xvcjogIzIxOTZmMztcbn1cblxuLnVuYmxvY2tNb2RhbC1jb250ZW50IHtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW46IDE1MHB4IGF1dG87XG59XG5cbi51bmJsb2NrTW9kYWwtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTE1cHggNDBweDtcbiAgYmFja2dyb3VuZDogIzAwNDk2ZDMzO1xufVxuXG4ubWF0Y2hpbmctbW9kYWwge1xuICB3aWR0aDogMzgwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MzBweDtcbiAgbWFyZ2luLXRvcDogNjdweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLnRleHQtd2lkdGgge1xuICB3aWR0aDogNDglO1xufVxuXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbn1cblxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG59XG5cbmJ1dHRvblt0eXBlPWJ1dHRvbl06ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjOWM5YzljO1xuICBib3JkZXItY29sb3I6ICM5YzljOWM7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi50aWNrZXQtZGV0YWlsIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-ticker/add-ticker.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-ticker/add-ticker.component.ts ***!
  \****************************************************/
/*! exports provided: AddTickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTickerComponent", function() { return AddTickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _api_comman_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/comman.service */ "./src/api/comman.service.ts");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");









let AddTickerComponent = class AddTickerComponent {
    constructor(fb, commonService, api, router, http, spinner) {
        this.fb = fb;
        this.commonService = commonService;
        this.api = api;
        this.router = router;
        this.http = http;
        this.spinner = spinner;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url;
        this.ticketData = {};
        this.selectedFile = null;
        this.uploadedImageUrl = "";
        this.getTickerListData = [];
    }
    ngOnInit() {
        this.spinner.show();
        this.form = this.fb.group({
            "title": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.addTickerform = this.fb.group({
            "tickerType": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "tickerImage": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "symbol": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "companyName": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "isin": [''],
            "cusip": [''],
            "country": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "mic": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "currency": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "source": [''],
            "identType": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "exchange": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.getTickerList();
    }
    searchTicker() {
        console.log('hiiii', this.form.value);
        if (this.form.invalid) {
            // this.commonService.err("All fields are required.")
            return;
        }
        this.spinner.show();
        console.log(this.form.value);
        let data = {
            ticker: this.form.value.title
        };
        // this.ticketData = { "symbol": "IBM", "companyName": "INTERNATIONAL BUS MACH CORP", "isin": "US4592001014", "cusip": "459200101", "country": "USA", "mic": "XNYS", "currency": "USD", "source": "DELAYED", "identType": "ExchangeSymbol", "exchange": "NYSE", "bidRegion": {}, "askRegion": {}, "tradeRegion": {}, "updateTime": "04/16/2021 20:00:00 EDT", "tradeTime": "04/16/2021 16:00:02 EDT", "dividendPaymentDate": "03/10/2021 00:00:00 EST", "dividendExDate": "02/09/2021 00:00:00 EST", "vwap": 0, "vwap1": 0, "yesterdayClose": 133.59, "openingPrice": 0, "strikePrice": 0, "dayHigh": 0, "dayLow": 0, "ask": 0, "bid": 0, "askYield": 0, "bidYield": 0, "lastPrice": 133.59, "change": 0, "openInterest": 0, "high52week": 137.07, "low52week": 105.92, "priceEarningRatio": 21.6165, "changePercent": 0, "marketCap": 119375.2345, "calendarYearHigh": 137.07, "calendarYearLow": 117.36, "dividendYield": 4.8806, "dividendAmount": 1.63, "dividendRate": 6.52, "beta": 1.2365, "totalCashAmount": 0, "estimatedCashAmount": 0, "intradayValue": 0, "nav": 0, "tradePrice": 0, "navPrice": 0, "navChange": 0, "navYesterdayPrice": 0, "yesterdayVolume": 5291756, "askSize": 0, "bidSize": 0, "askSizeDouble": 0, "bidSizeDouble": 0, "minAskSize": 0, "minBidSize": 0, "volume": 0, "contractSize": 0, "averageVolume30": 5078009, "imbalanceVolume": 0, "sharesOutstanding": 893594000, "increment": 0, "tradeSize": 0, "putOrCall": "\u0000", "indicator": 0, "subMarket": 0, "bidTick": -1, "precision": 2, "delayed": true, "notFound": false, "option": false, "notPermissioned": false, "halted": false, "paused": false, "mini": false, "corpAct": false, "jumbo": false, "mutualFund": false, "bond": false, "nbbo": false, "crypto": false, "fx": false, "marketCapClassification": "Large", "dividentSoon": false, "symbolChange": false, "marketDescription": "NYSE", "symbolMarket": "N", "atTheMoney": false, "inTheMoney": false, "call": false, "put": false, "trailing12MonthsEps": 6.180001387828742 };
        // $('#refer').modal('show');
        // // this.ticketData = JSON.stringify(this.ticketData)
        // console.log(this.ticketData.symbol)
        // this.patchTickerValue(this.ticketData);
        this.api.post("getOrbisTicker", data).subscribe(result => {
            //console.log(result)
            if (result.status == 200) {
                // if (result.data[0].isin) {
                if (result.data[0]) {
                    this.ticketData = result.data[0];
                    $('#refer').modal('show');
                    this.patchTickerValue(this.ticketData, result.result);
                }
                else {
                    $('#referError').modal('show');
                }
                this.spinner.hide();
            }
            else {
                this.commonService.err(result.message);
            }
        }, error => {
            console.log({ error });
        });
    }
    patchTickerValue(data, result) {
        if (data) {
            console.log('datataaaaaa', result);
            let newForm = {
                "tickerType": this.addTickerform.value.tickerType,
                "tickerImage": result.logo_square,
                "symbol": data.symbol,
                "companyName": data.companyName,
                "isin": data.isin,
                "cusip": data.cusip,
                "country": data.country,
                "mic": data.mic,
                "currency": data.currency,
                "source": data.source,
                "identType": data.identType,
                "exchange": data.exchange,
            };
            this.addTickerform.patchValue(newForm);
            console.log('newFormnewFormnewForm', this.addTickerform.value);
        }
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post(this.url + "uploadImage", fd, {
            reportProgress: true,
            observe: 'events'
        }).subscribe(event => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].UploadProgress) {
                // this.uploadTimer = Math.round(event.loaded / event.total * 100);
                // console.log("Upload Progress:" + this.uploadTimer + "%");
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].Response) {
                // this.uploadedImageUrl = event.body['data'];
                this.addTickerform.value.tickerImage = event.body['data'];
            }
            else {
                console.log("Uploading Completed");
            }
        }, error => {
            console.log({ error });
        });
    }
    saveData() {
        this.spinner.show();
        // console.log(this.addTickerform.value)
        if (this.addTickerform.invalid) {
            this.commonService.err("All fields are required.");
            return;
        }
        this.api.post("addTicker", this.addTickerform.value).subscribe(result => {
            if (result.status == 200) {
                this.commonService.succ(result.message);
                // this.router.navigate(['matching-portfolio/' + result.data._id])
            }
            else {
                this.commonService.err(result.message);
            }
            this.spinner.hide();
        }, error => {
            console.log({ error });
        });
        this.spinner.hide();
    }
    getTickerList() {
        this.api.get('getTickerList').subscribe(result => {
            console.log('resultresultresult', result);
            if (result.status == 200) {
                this.getTickerListData = result.data;
                console.log('getTickerListDatagetTickerListDatagetTickerListDatagetTickerListData', this.getTickerListData);
                this.spinner.hide();
            }
            else {
            }
        }, error => {
            console.log({ error });
        });
    }
    closePops(id) {
        console.log(id);
        $("#" + id).modal('hide');
    }
};
AddTickerComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _api_comman_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_4__["Api"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] }
];
AddTickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-ticker',
        template: __webpack_require__(/*! raw-loader!./add-ticker.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-ticker/add-ticker.component.html"),
        styles: [__webpack_require__(/*! ./add-ticker.component.scss */ "./src/app/add-ticker/add-ticker.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _api_comman_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
        _api_api_service__WEBPACK_IMPORTED_MODULE_4__["Api"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
], AddTickerComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-detail/category-detail.component */ "./src/app/category-detail/category-detail.component.ts");
/* harmony import */ var _add_questionaire_add_questionaire_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-questionaire/add-questionaire.component */ "./src/app/add-questionaire/add-questionaire.component.ts");
/* harmony import */ var _client_detail1_client_detail1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-detail1/client-detail1.component */ "./src/app/client-detail1/client-detail1.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _compliance_detail_compliance_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compliance-detail/compliance-detail.component */ "./src/app/compliance-detail/compliance-detail.component.ts");
/* harmony import */ var _compliance_compliance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compliance/compliance.component */ "./src/app/compliance/compliance.component.ts");
/* harmony import */ var _create_model_create_model_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-model/create-model.component */ "./src/app/create-model/create-model.component.ts");
/* harmony import */ var _create_thematic_create_thematic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-thematic/create-thematic.component */ "./src/app/create-thematic/create-thematic.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _edit_questionaire_edit_questionaire_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-questionaire/edit-questionaire.component */ "./src/app/edit-questionaire/edit-questionaire.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _free_stock_free_stock_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./free-stock/free-stock.component */ "./src/app/free-stock/free-stock.component.ts");
/* harmony import */ var _invest_cash_invest_cash_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./invest-cash/invest-cash.component */ "./src/app/invest-cash/invest-cash.component.ts");
/* harmony import */ var _investing_investing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./investing/investing.component */ "./src/app/investing/investing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _managed_account_detail_managed_account_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./managed-account-detail/managed-account-detail.component */ "./src/app/managed-account-detail/managed-account-detail.component.ts");
/* harmony import */ var _matching_portfolio_matching_portfolio_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./matching-portfolio/matching-portfolio.component */ "./src/app/matching-portfolio/matching-portfolio.component.ts");
/* harmony import */ var _model_detail_model_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./model-detail/model-detail.component */ "./src/app/model-detail/model-detail.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/notification/notification.component.ts");
/* harmony import */ var _portfolio_detail_edit_portfolio_detail_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./portfolio-detail-edit/portfolio-detail-edit.component */ "./src/app/portfolio-detail-edit/portfolio-detail-edit.component.ts");
/* harmony import */ var _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./portfolio-detail/portfolio-detail.component */ "./src/app/portfolio-detail/portfolio-detail.component.ts");
/* harmony import */ var _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./questionnaire/questionnaire.component */ "./src/app/questionnaire/questionnaire.component.ts");
/* harmony import */ var _raise_cash_raise_cash_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./raise-cash/raise-cash.component */ "./src/app/raise-cash/raise-cash.component.ts");
/* harmony import */ var _report_management_report_management_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./report-management/report-management.component */ "./src/app/report-management/report-management.component.ts");
/* harmony import */ var _self_directed_detail_self_directed_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./self-directed-detail/self-directed-detail.component */ "./src/app/self-directed-detail/self-directed-detail.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/setting/setting.component.ts");
/* harmony import */ var _static_content_managment_static_content_managment_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./static-content-managment/static-content-managment.component */ "./src/app/static-content-managment/static-content-managment.component.ts");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");
/* harmony import */ var _support_message_support_message_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./support-message/support-message.component */ "./src/app/support-message/support-message.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _thematic_detail_thematic_detail_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./thematic-detail/thematic-detail.component */ "./src/app/thematic-detail/thematic-detail.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");
/* harmony import */ var _wait_list_wait_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./wait-list/wait-list.component */ "./src/app/wait-list/wait-list.component.ts");
/* harmony import */ var _add_ticker_add_ticker_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./add-ticker/add-ticker.component */ "./src/app/add-ticker/add-ticker.component.ts");
/* harmony import */ var _create_portfolio_create_portfolio_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./create-portfolio/create-portfolio.component */ "./src/app/create-portfolio/create-portfolio.component.ts");
/* harmony import */ var _stocks_etfs_etfs_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./stocks/etfs/etfs.component */ "./src/app/stocks/etfs/etfs.component.ts");
/* harmony import */ var _edit_thematic_edit_thematic_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./edit-thematic/edit-thematic.component */ "./src/app/edit-thematic/edit-thematic.component.ts");








































const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"] },
    { path: 'popularetfs', component: _stocks_etfs_etfs_component__WEBPACK_IMPORTED_MODULE_38__["EtfsComponent"] },
    { path: 'forgot-passowrd', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"] },
    { path: 'client-detail-1', component: _client_detail1_client_detail1_component__WEBPACK_IMPORTED_MODULE_5__["ClientDetail1Component"] },
    { path: 'model-detail/:id', component: _model_detail_model_detail_component__WEBPACK_IMPORTED_MODULE_20__["ModelDetailComponent"] },
    { path: 'create-model', component: _create_model_create_model_component__WEBPACK_IMPORTED_MODULE_9__["CreateModelComponent"] },
    { path: 'portfolio-detail/:id', component: _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_23__["PortfolioDetailComponent"] },
    { path: 'portfolio-detail-edit/:id', component: _portfolio_detail_edit_portfolio_detail_edit_component__WEBPACK_IMPORTED_MODULE_22__["PortfolioDetailEditComponent"] },
    { path: 'thematic-detail/:id', component: _thematic_detail_thematic_detail_component__WEBPACK_IMPORTED_MODULE_33__["ThematicDetailComponent"] },
    { path: 'edit-thematic/:id', component: _edit_thematic_edit_thematic_component__WEBPACK_IMPORTED_MODULE_39__["EditThematicComponent"] },
    { path: 'create-thematic', component: _create_thematic_create_thematic_component__WEBPACK_IMPORTED_MODULE_10__["CreateThematicComponent"] },
    { path: 'invest-cash', component: _invest_cash_invest_cash_component__WEBPACK_IMPORTED_MODULE_15__["InvestCashComponent"] },
    { path: 'investing', component: _investing_investing_component__WEBPACK_IMPORTED_MODULE_16__["InvestingComponent"] },
    { path: 'report-management', component: _report_management_report_management_component__WEBPACK_IMPORTED_MODULE_26__["ReportManagementComponent"] },
    { path: 'questionnaire', component: _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_24__["QuestionnaireComponent"] },
    { path: 'compliance', component: _compliance_compliance_component__WEBPACK_IMPORTED_MODULE_8__["ComplianceComponent"] },
    { path: 'compliance-detail', component: _compliance_detail_compliance_detail_component__WEBPACK_IMPORTED_MODULE_7__["ComplianceDetailComponent"] },
    { path: 'support', component: _support_support_component__WEBPACK_IMPORTED_MODULE_32__["SupportComponent"] },
    { path: 'support-message', component: _support_message_support_message_component__WEBPACK_IMPORTED_MODULE_31__["SupportMessageComponent"] },
    { path: 'settings', component: _setting_setting_component__WEBPACK_IMPORTED_MODULE_28__["SettingComponent"] },
    { path: 'static-content-managment', component: _static_content_managment_static_content_managment_component__WEBPACK_IMPORTED_MODULE_29__["StaticContentManagmentComponent"] },
    { path: 'notification', component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_21__["NotificationComponent"] },
    { path: 'raise-cash', component: _raise_cash_raise_cash_component__WEBPACK_IMPORTED_MODULE_25__["RaiseCashComponent"] },
    { path: 'self-directed-detail', component: _self_directed_detail_self_directed_detail_component__WEBPACK_IMPORTED_MODULE_27__["SelfDirectedDetailComponent"] },
    { path: 'managed-account-detail', component: _managed_account_detail_managed_account_detail_component__WEBPACK_IMPORTED_MODULE_18__["ManagedAccountDetailComponent"] },
    { path: 'category-detail', component: _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_3__["CategoryDetailComponent"] },
    { path: 'client', component: _client_client_component__WEBPACK_IMPORTED_MODULE_6__["ClientComponent"] },
    { path: 'summary', component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_30__["SummaryComponent"] },
    { path: 'transactions', component: _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_34__["TransactionsComponent"] },
    { path: 'wait-list', component: _wait_list_wait_list_component__WEBPACK_IMPORTED_MODULE_35__["WaitListComponent"] },
    { path: 'free-stock-distribution', component: _free_stock_free_stock_component__WEBPACK_IMPORTED_MODULE_14__["FreeStockComponent"] },
    { path: 'edit-questionnaire/:id', component: _edit_questionaire_edit_questionaire_component__WEBPACK_IMPORTED_MODULE_12__["EditQuestionaireComponent"] },
    { path: 'matching-portfolio/:id', component: _matching_portfolio_matching_portfolio_component__WEBPACK_IMPORTED_MODULE_19__["MatchingPortfolioComponent"] },
    { path: 'add-questionnaire', component: _add_questionaire_add_questionaire_component__WEBPACK_IMPORTED_MODULE_4__["AddQuestionaireComponent"] },
    { path: 'add-ticker', component: _add_ticker_add_ticker_component__WEBPACK_IMPORTED_MODULE_36__["AddTickerComponent"] },
    { path: 'create-portfolio', component: _create_portfolio_create_portfolio_component__WEBPACK_IMPORTED_MODULE_37__["CreatePortfolioComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'advisory';
    }
    onActivate(event) {
        window.scroll(0, 0);
        //or document.body.scrollTop = 0;
        //or document.querySelector('body').scrollTo(0,0)
        // ...
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _investing_investing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./investing/investing.component */ "./src/app/investing/investing.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");
/* harmony import */ var _client_detail1_client_detail1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./client-detail1/client-detail1.component */ "./src/app/client-detail1/client-detail1.component.ts");
/* harmony import */ var _model_detail_model_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./model-detail/model-detail.component */ "./src/app/model-detail/model-detail.component.ts");
/* harmony import */ var _create_model_create_model_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./create-model/create-model.component */ "./src/app/create-model/create-model.component.ts");
/* harmony import */ var _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./portfolio-detail/portfolio-detail.component */ "./src/app/portfolio-detail/portfolio-detail.component.ts");
/* harmony import */ var _portfolio_detail_edit_portfolio_detail_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./portfolio-detail-edit/portfolio-detail-edit.component */ "./src/app/portfolio-detail-edit/portfolio-detail-edit.component.ts");
/* harmony import */ var _thematic_detail_thematic_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./thematic-detail/thematic-detail.component */ "./src/app/thematic-detail/thematic-detail.component.ts");
/* harmony import */ var _create_thematic_create_thematic_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./create-thematic/create-thematic.component */ "./src/app/create-thematic/create-thematic.component.ts");
/* harmony import */ var _invest_cash_invest_cash_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./invest-cash/invest-cash.component */ "./src/app/invest-cash/invest-cash.component.ts");
/* harmony import */ var _report_management_report_management_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./report-management/report-management.component */ "./src/app/report-management/report-management.component.ts");
/* harmony import */ var _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./questionnaire/questionnaire.component */ "./src/app/questionnaire/questionnaire.component.ts");
/* harmony import */ var _compliance_compliance_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./compliance/compliance.component */ "./src/app/compliance/compliance.component.ts");
/* harmony import */ var _compliance_detail_compliance_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./compliance-detail/compliance-detail.component */ "./src/app/compliance-detail/compliance-detail.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _support_message_support_message_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./support-message/support-message.component */ "./src/app/support-message/support-message.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/setting/setting.component.ts");
/* harmony import */ var _static_content_managment_static_content_managment_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./static-content-managment/static-content-managment.component */ "./src/app/static-content-managment/static-content-managment.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/notification/notification.component.ts");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm2015/ng-apexcharts.js");
/* harmony import */ var _raise_cash_raise_cash_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./raise-cash/raise-cash.component */ "./src/app/raise-cash/raise-cash.component.ts");
/* harmony import */ var _self_directed_detail_self_directed_detail_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./self-directed-detail/self-directed-detail.component */ "./src/app/self-directed-detail/self-directed-detail.component.ts");
/* harmony import */ var _managed_account_detail_managed_account_detail_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./managed-account-detail/managed-account-detail.component */ "./src/app/managed-account-detail/managed-account-detail.component.ts");
/* harmony import */ var _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./category-detail/category-detail.component */ "./src/app/category-detail/category-detail.component.ts");
/* harmony import */ var _wait_list_wait_list_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./wait-list/wait-list.component */ "./src/app/wait-list/wait-list.component.ts");
/* harmony import */ var _free_stock_free_stock_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./free-stock/free-stock.component */ "./src/app/free-stock/free-stock.component.ts");
/* harmony import */ var _edit_questionaire_edit_questionaire_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./edit-questionaire/edit-questionaire.component */ "./src/app/edit-questionaire/edit-questionaire.component.ts");
/* harmony import */ var _matching_portfolio_matching_portfolio_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./matching-portfolio/matching-portfolio.component */ "./src/app/matching-portfolio/matching-portfolio.component.ts");
/* harmony import */ var _add_questionaire_add_questionaire_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./add-questionaire/add-questionaire.component */ "./src/app/add-questionaire/add-questionaire.component.ts");
/* harmony import */ var _pipe_custom_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pipe/custom.pipe */ "./src/app/pipe/custom.pipe.ts");
/* harmony import */ var _add_ticker_add_ticker_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./add-ticker/add-ticker.component */ "./src/app/add-ticker/add-ticker.component.ts");
/* harmony import */ var _create_portfolio_create_portfolio_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./create-portfolio/create-portfolio.component */ "./src/app/create-portfolio/create-portfolio.component.ts");
/* harmony import */ var _stocks_etfs_etfs_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./stocks/etfs/etfs.component */ "./src/app/stocks/etfs/etfs.component.ts");
/* harmony import */ var _edit_thematic_edit_thematic_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./edit-thematic/edit-thematic.component */ "./src/app/edit-thematic/edit-thematic.component.ts");



































// import { NgApexchartsModule } from 'ng-apexcharts/lib/ng-apexcharts.module';















// import { FusionChartsModule } from 'angular-fusioncharts';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
            _summary_summary_component__WEBPACK_IMPORTED_MODULE_14__["SummaryComponent"],
            _client_client_component__WEBPACK_IMPORTED_MODULE_15__["ClientComponent"],
            _investing_investing_component__WEBPACK_IMPORTED_MODULE_16__["InvestingComponent"],
            _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_17__["TransactionsComponent"],
            _client_detail1_client_detail1_component__WEBPACK_IMPORTED_MODULE_18__["ClientDetail1Component"],
            _model_detail_model_detail_component__WEBPACK_IMPORTED_MODULE_19__["ModelDetailComponent"],
            _create_model_create_model_component__WEBPACK_IMPORTED_MODULE_20__["CreateModelComponent"],
            _portfolio_detail_portfolio_detail_component__WEBPACK_IMPORTED_MODULE_21__["PortfolioDetailComponent"],
            _portfolio_detail_edit_portfolio_detail_edit_component__WEBPACK_IMPORTED_MODULE_22__["PortfolioDetailEditComponent"],
            _thematic_detail_thematic_detail_component__WEBPACK_IMPORTED_MODULE_23__["ThematicDetailComponent"],
            _create_thematic_create_thematic_component__WEBPACK_IMPORTED_MODULE_24__["CreateThematicComponent"],
            _invest_cash_invest_cash_component__WEBPACK_IMPORTED_MODULE_25__["InvestCashComponent"],
            _report_management_report_management_component__WEBPACK_IMPORTED_MODULE_26__["ReportManagementComponent"],
            _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_27__["QuestionnaireComponent"],
            _compliance_compliance_component__WEBPACK_IMPORTED_MODULE_28__["ComplianceComponent"],
            _compliance_detail_compliance_detail_component__WEBPACK_IMPORTED_MODULE_29__["ComplianceDetailComponent"],
            _support_support_component__WEBPACK_IMPORTED_MODULE_30__["SupportComponent"],
            _support_message_support_message_component__WEBPACK_IMPORTED_MODULE_31__["SupportMessageComponent"],
            _setting_setting_component__WEBPACK_IMPORTED_MODULE_32__["SettingComponent"],
            _static_content_managment_static_content_managment_component__WEBPACK_IMPORTED_MODULE_33__["StaticContentManagmentComponent"],
            _notification_notification_component__WEBPACK_IMPORTED_MODULE_34__["NotificationComponent"],
            _raise_cash_raise_cash_component__WEBPACK_IMPORTED_MODULE_36__["RaiseCashComponent"],
            _self_directed_detail_self_directed_detail_component__WEBPACK_IMPORTED_MODULE_37__["SelfDirectedDetailComponent"],
            _managed_account_detail_managed_account_detail_component__WEBPACK_IMPORTED_MODULE_38__["ManagedAccountDetailComponent"],
            _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_39__["CategoryDetailComponent"],
            _wait_list_wait_list_component__WEBPACK_IMPORTED_MODULE_40__["WaitListComponent"],
            _free_stock_free_stock_component__WEBPACK_IMPORTED_MODULE_41__["FreeStockComponent"],
            _edit_questionaire_edit_questionaire_component__WEBPACK_IMPORTED_MODULE_42__["EditQuestionaireComponent"],
            _matching_portfolio_matching_portfolio_component__WEBPACK_IMPORTED_MODULE_43__["MatchingPortfolioComponent"],
            _add_questionaire_add_questionaire_component__WEBPACK_IMPORTED_MODULE_44__["AddQuestionaireComponent"],
            _pipe_custom_pipe__WEBPACK_IMPORTED_MODULE_45__["CustomPipe"],
            _add_ticker_add_ticker_component__WEBPACK_IMPORTED_MODULE_46__["AddTickerComponent"],
            _create_portfolio_create_portfolio_component__WEBPACK_IMPORTED_MODULE_47__["CreatePortfolioComponent"],
            _stocks_etfs_etfs_component__WEBPACK_IMPORTED_MODULE_48__["EtfsComponent"],
            _edit_thematic_edit_thematic_component__WEBPACK_IMPORTED_MODULE_49__["EditThematicComponent"],
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
                progressBar: true,
                autoDismiss: false
            }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_35__["NgApexchartsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/category-detail/category-detail.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/category-detail/category-detail.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5LWRldGFpbC9jYXRlZ29yeS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/category-detail/category-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/category-detail/category-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: CategoryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailComponent", function() { return CategoryDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



const sparkLineData = [
    47,
    45,
    54,
    38,
    56,
    24,
    65,
    31,
    37,
    39,
    62,
    51,
    35,
    41,
    35,
    27,
    93,
    53,
    61,
    27,
    54,
    43,
    19,
    46
];
let CategoryDetailComponent = class CategoryDetailComponent {
    constructor(location) {
        this.location = location;
        this.commonLineSparklineOptions = {
            chart: {
                type: "line",
                width: 100,
                height: 35,
                sparkline: {
                    enabled: true
                }
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return "";
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
        this.chartLineSparkline7Options = {
            series: [
                {
                    name: "chart-line-sparkline",
                    data: this.randomizeArray(sparkLineData.slice(0, 10))
                }
            ]
        };
        this.chartLineSparkline8Options = {
            series: [
                {
                    name: "chart-line-sparkline",
                    data: this.randomizeArray(sparkLineData.slice(0, 10))
                }
            ]
        };
        this.chartLineSparkline9Options = {
            series: [
                {
                    name: "chart-line-sparkline",
                    data: this.randomizeArray(sparkLineData.slice(0, 10))
                }
            ]
        };
    }
    randomizeArray(arg) {
        var array = arg.slice();
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    ngOnInit() {
    }
    backClicked() {
        // localStorage.setItem("fromInvesting","true")
        this.location.back();
    }
};
CategoryDetailComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
CategoryDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-detail',
        template: __webpack_require__(/*! raw-loader!./category-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/category-detail/category-detail.component.html"),
        styles: [__webpack_require__(/*! ./category-detail.component.scss */ "./src/app/category-detail/category-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], CategoryDetailComponent);



/***/ }),

/***/ "./src/app/client-detail1/client-detail1.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/client-detail1/client-detail1.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC1kZXRhaWwxL2NsaWVudC1kZXRhaWwxLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/client-detail1/client-detail1.component.ts":
/*!************************************************************!*\
  !*** ./src/app/client-detail1/client-detail1.component.ts ***!
  \************************************************************/
/*! exports provided: ClientDetail1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetail1Component", function() { return ClientDetail1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apexcharts */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");






let ClientDetail1Component = class ClientDetail1Component {
    constructor() {
        this.chartOptions = {
            series: [25, 15, 44, 55, 41, 17],
            chart: {
                width: "500px",
                type: "pie"
            },
            labels: [
                " ",
                "",
                "",
                "",
                "",
                ""
            ],
            theme: {
                monochrome: {
                    enabled: true
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        fill: {
                            colors: ['#000', '#66DA26', '#546E7A', '#E91E63', '#FF9800']
                        },
                        legend: {
                            show: false,
                            position: "bottom"
                        },
                    }
                }
            ]
        };
    }
    ngOnInit() {
        var options = {
            chart: {
                type: 'donut',
            },
            responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
        };
        var chart = new apexcharts__WEBPACK_IMPORTED_MODULE_2__(document.querySelector("#chart2"), options);
        chart.render();
        var chart = new apexcharts__WEBPACK_IMPORTED_MODULE_2__(document.querySelector("#chart3"), options);
        chart.render();
        this.graph1();
        this.graph2();
        $(document).on('click', '.ulAumFive li', function () {
            $('.ulAumFive li').removeClass('active');
            $(this).addClass('active');
        });
        $(document).on('click', '.ulAumSix li', function () {
            $('.ulAumSix li').removeClass('active');
            $(this).addClass('active');
        });
        $(document).on('click', '.Allul1 ul li a', function () {
            $('.Allul1 ul li a').removeClass('active');
            $(this).addClass('active');
        });
        $(document).on('click', '.Allul2 ul li a', function () {
            $('.Allul2 ul li a').removeClass('active');
            $(this).addClass('active');
        });
    }
    graph1() {
        /* Chart code */
        // Themes begin
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);
        // Themes end
        // Create chart
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("graphdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);
        chart.paddingRight = 20;
        chart.data = generateChartData();
        let dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["DateAxis"]());
        dateAxis.baseInterval = {
            "timeUnit": "minute",
            "count": 1
        };
        dateAxis.tooltipDateFormat = "HH:mm, d MMMM";
        let valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
        valueAxis.tooltip.disabled = true;
        // valueAxis.title.text = "Unique visitors";
        let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["LineSeries"]());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "visits";
        series.tooltipText = "Visits: [bold]{valueY}[/]";
        series.fillOpacity = 0.3;
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYCursor"]();
        chart.cursor.lineY.opacity = 0;
        // chart.scrollbarX = new am4charts.XYChartScrollbar();
        // chart.scrollbarX.series.push(series);
        dateAxis.start = 0.8;
        dateAxis.keepSelection = true;
        $(document).ready(function () {
            $("g[aria-labelledby]").hide();
        });
        function generateChartData() {
            let chartData = [];
            // current date
            let firstDate = new Date();
            // now set 500 minutes back
            firstDate.setMinutes(firstDate.getDate() - 500);
            // and generate 500 data items
            let visits = 500;
            for (var i = 0; i < 500; i++) {
                let newDate = new Date(firstDate);
                // each time we add one minute
                newDate.setMinutes(newDate.getMinutes() + i);
                // some random number
                visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
                // add data item to the array
                chartData.push({
                    date: newDate,
                    visits: visits
                });
            }
            return chartData;
        }
    }
    graph2() {
        /* Chart code */
        // Themes begin
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);
        // Themes end
        // Create chart
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("graphdivTwo", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);
        chart.paddingRight = 20;
        chart.data = generateChartData();
        let dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["DateAxis"]());
        dateAxis.baseInterval = {
            "timeUnit": "minute",
            "count": 1
        };
        dateAxis.tooltipDateFormat = "HH:mm, d MMMM";
        let valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
        valueAxis.tooltip.disabled = true;
        // valueAxis.title.text = "Unique visitors";
        let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["LineSeries"]());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "visits";
        series.tooltipText = "Visits: [bold]{valueY}[/]";
        series.fillOpacity = 0.3;
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYCursor"]();
        chart.cursor.lineY.opacity = 0;
        // chart.scrollbarX = new am4charts.XYChartScrollbar();
        // chart.scrollbarX.series.push(series);
        dateAxis.start = 0.8;
        dateAxis.keepSelection = true;
        $(document).ready(function () {
            $("g[aria-labelledby]").hide();
        });
        function generateChartData() {
            let chartData = [];
            // current date
            let firstDate = new Date();
            // now set 500 minutes back
            firstDate.setMinutes(firstDate.getDate() - 500);
            // and generate 500 data items
            let visits = 500;
            for (var i = 0; i < 500; i++) {
                let newDate = new Date(firstDate);
                // each time we add one minute
                newDate.setMinutes(newDate.getMinutes() + i);
                // some random number
                visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
                // add data item to the array
                chartData.push({
                    date: newDate,
                    visits: visits
                });
            }
            return chartData;
        }
    }
};
ClientDetail1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-detail1',
        template: __webpack_require__(/*! raw-loader!./client-detail1.component.html */ "./node_modules/raw-loader/index.js!./src/app/client-detail1/client-detail1.component.html"),
        styles: [__webpack_require__(/*! ./client-detail1.component.scss */ "./src/app/client-detail1/client-detail1.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ClientDetail1Component);



/***/ }),

/***/ "./src/app/client/client.component.scss":
/*!**********************************************!*\
  !*** ./src/app/client/client.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/client/client.component.ts":
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClientComponent = class ClientComponent {
    constructor() { }
    ngOnInit() {
        $(document).on('click', '.managedDropdown', function () {
            $(this).addClass('active');
            $('.managedDropdownShow').slideDown();
        });
        $(document).on('click', '.managedDropdown.active', function () {
            $(this).removeClass('active');
            $('.managedDropdownShow').slideUp();
        });
    }
};
ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client',
        template: __webpack_require__(/*! raw-loader!./client.component.html */ "./node_modules/raw-loader/index.js!./src/app/client/client.component.html"),
        styles: [__webpack_require__(/*! ./client.component.scss */ "./src/app/client/client.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ClientComponent);



/***/ }),

/***/ "./src/app/compliance-detail/compliance-detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/compliance-detail/compliance-detail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBsaWFuY2UtZGV0YWlsL2NvbXBsaWFuY2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/compliance-detail/compliance-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/compliance-detail/compliance-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: ComplianceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplianceDetailComponent", function() { return ComplianceDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const sparkLineData = [
    47,
    45,
    54,
    38,
    56,
    24,
    65,
    31,
    37,
    39,
    62,
    51,
    35,
    41,
    35,
    27,
    93,
    53,
    61,
    27,
    54,
    43,
    19,
    46
];
let ComplianceDetailComponent = class ComplianceDetailComponent {
    constructor() {
        this.commonLineSparklineOptions = {
            chart: {
                type: "line",
                width: 100,
                height: 35,
                sparkline: {
                    enabled: true
                }
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return "";
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
        this.chartLineSparkline10Options = {
            series: [
                {
                    name: "chart-line-sparkline",
                    data: this.randomizeArray(sparkLineData.slice(0, 10))
                }
            ]
        };
    }
    randomizeArray(arg) {
        var array = arg.slice();
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    ngOnInit() {
    }
};
ComplianceDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compliance-detail',
        template: __webpack_require__(/*! raw-loader!./compliance-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/compliance-detail/compliance-detail.component.html"),
        styles: [__webpack_require__(/*! ./compliance-detail.component.scss */ "./src/app/compliance-detail/compliance-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ComplianceDetailComponent);



/***/ }),

/***/ "./src/app/compliance/compliance.component.scss":
/*!******************************************************!*\
  !*** ./src/app/compliance/compliance.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button[type=button]:disabled {\n  background: #9c9c9c;\n  border-color: #9c9c9c;\n  cursor: not-allowed;\n}\n\ninput.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n\ntextarea.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n\nselect.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vYnVsb3VzL0Rlc2t0b3AvcHJvamVjdHMvOF81L2Fkdmlzb3J5L3NyYy9hcHAvY29tcGxpYW5jZS9jb21wbGlhbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wbGlhbmNlL2NvbXBsaWFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLDBCQUFBO0FDRUo7O0FEQ0E7RUFDSSwwQkFBQTtBQ0VKOztBREFBO0VBQ0ksMEJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBsaWFuY2UvY29tcGxpYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvblt0eXBlPVwiYnV0dG9uXCJdOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjOWM5YzljO1xuICAgIGJvcmRlci1jb2xvcjogIzljOWM5YztcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG59XG5cbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbn1cbnNlbGVjdC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG59IiwiYnV0dG9uW3R5cGU9YnV0dG9uXTpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICM5YzljOWM7XG4gIGJvcmRlci1jb2xvcjogIzljOWM5YztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG59XG5cbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuXG5zZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/compliance/compliance.component.ts":
/*!****************************************************!*\
  !*** ./src/app/compliance/compliance.component.ts ***!
  \****************************************************/
/*! exports provided: ComplianceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplianceComponent", function() { return ComplianceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");
/* harmony import */ var _api_comman_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/comman.service */ "./src/api/comman.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ComplianceComponent = class ComplianceComponent {
    constructor(fb, api, commonService, router) {
        this.fb = fb;
        this.api = api;
        this.commonService = commonService;
        this.router = router;
        this.billTime = 1;
        this.duration = "monthly";
    }
    ngOnInit() {
        this.form = this.fb.group({
            "type": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'price': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'duration': ['monthly', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'bill_time': ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    saveFees() {
        if (this.form.invalid) {
            this.commonService.err("All fields are required.");
            return;
        }
        //console.log(this.form.value);
        let data = {
            type: this.form.value.type,
            name: this.form.value.name,
            price: this.form.value.price,
            duration: this.form.value.duration,
            bill_time: this.form.value.bill_time,
            description: this.form.value.description
        };
        console.log(data);
        this.api.post("addPlan", data).subscribe(result => {
            if (result.status == 200) {
                this.commonService.succ(result.message);
                this.router.navigate(['compliance']);
                this.form.reset();
            }
            else {
                this.commonService.err(result.message);
            }
        }, error => {
            console.log({ error });
        });
    }
    changeDuration(duration) {
        this.duration = duration;
        this.form.patchValue({
            duration: duration
        });
        console.log(this.form.value);
    }
    changeBillTime(billTime) {
        this.billTime = billTime;
        this.form.patchValue({
            bill_time: billTime
        });
        console.log(this.form.value);
    }
};
ComplianceComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["Api"] },
    { type: _api_comman_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ComplianceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compliance',
        template: __webpack_require__(/*! raw-loader!./compliance.component.html */ "./node_modules/raw-loader/index.js!./src/app/compliance/compliance.component.html"),
        styles: [__webpack_require__(/*! ./compliance.component.scss */ "./src/app/compliance/compliance.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _api_api_service__WEBPACK_IMPORTED_MODULE_3__["Api"],
        _api_comman_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ComplianceComponent);



/***/ }),

/***/ "./src/app/create-model/create-model.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/create-model/create-model.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ant-input {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  box-sizing: border-box;\n  margin: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  width: 100%;\n  height: 32px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d8dce6;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n\n.thematic-buttons {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  box-sizing: border-box;\n  margin: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  width: 100%;\n  height: 32px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d8dce6;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n\ninput.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n\ntextarea.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n\nselect.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n\nbutton[type=button]:disabled {\n  background: #9c9c9c;\n  border-color: #9c9c9c;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vYnVsb3VzL0Rlc2t0b3AvcHJvamVjdHMvOF81L2Fkdmlzb3J5L3NyYy9hcHAvY3JlYXRlLW1vZGVsL2NyZWF0ZS1tb2RlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY3JlYXRlLW1vZGVsL2NyZWF0ZS1tb2RlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkU7RUFDRSw4TUFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNsQko7O0FEcUJBO0VBQ0ksOE1BQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDbEJKOztBRHFCQTtFQUNJLDBCQUFBO0FDbEJKOztBRHFCQTtFQUNJLDBCQUFBO0FDbEJKOztBRG9CQTtFQUNJLDBCQUFBO0FDakJKOztBRG1CQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ2hCSiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1tb2RlbC9jcmVhdGUtbW9kZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAudGhlbWF0aWMtYnV0dG9uc3tcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM4ZmNkO1xuLy8gICAgIGNvbG9yOiAjZmZmZmZmO1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYzhmY2Q7XG4vLyAgICAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZS1pbi1vdXQ7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuLy8gICAgIG1hcmdpbjogMCAwIDAgMjBweDtcbi8vIH1cbi8vIC5mb3JtLWdyb3VwIC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XG4vLyAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZWQ7XG4vLyB9XG5cbi8vIC5teS1jbGFzc3tcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xuLy8gICAgIGNvbG9yOiNmZmY7XG4vLyAgIH1cblxuICAuYW50LWlucHV0IHtcbiAgICBmb250LWZhbWlseTogXCJNb25vc3BhY2VkIE51bWJlclwiLFwiQ2hpbmVzZSBRdW90ZVwiLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJQaW5nRmFuZyBTQ1wiLFwiSGlyYWdpbm8gU2FucyBHQlwiLFwiTWljcm9zb2Z0IFlhSGVpXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gICAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDRweCAxMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNjUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkY2U2O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xufVxuXG4udGhlbWF0aWMtYnV0dG9ucyB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlZCBOdW1iZXJcIixcIkNoaW5lc2UgUXVvdGVcIiwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiUGluZ0ZhbmcgU0NcIixcIkhpcmFnaW5vIFNhbnMgR0JcIixcIk1pY3Jvc29mdCBZYUhlaVwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xuICAgIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA0cHggMTFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjY1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVke1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuXG50ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG59XG5zZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVke1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuYnV0dG9uW3R5cGU9XCJidXR0b25cIl06ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICM5YzljOWM7XG4gICAgYm9yZGVyLWNvbG9yOiAjOWM5YzljO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH0iLCIuYW50LWlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlZCBOdW1iZXJcIiwgXCJDaGluZXNlIFF1b3RlXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiUGluZ0ZhbmcgU0NcIiwgXCJIaXJhZ2lubyBTYW5zIEdCXCIsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcInRudW1cIjtcbiAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCAxMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkY2U2O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4udGhlbWF0aWMtYnV0dG9ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZWQgTnVtYmVyXCIsIFwiQ2hpbmVzZSBRdW90ZVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG59XG5cbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuXG5zZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG59XG5cbmJ1dHRvblt0eXBlPWJ1dHRvbl06ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjOWM5YzljO1xuICBib3JkZXItY29sb3I6ICM5YzljOWM7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/create-model/create-model.component.ts":
/*!********************************************************!*\
  !*** ./src/app/create-model/create-model.component.ts ***!
  \********************************************************/
/*! exports provided: CreateModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateModelComponent", function() { return CreateModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");
/* harmony import */ var _api_comman_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/comman.service */ "./src/api/comman.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");










let CreateModelComponent = class CreateModelComponent {
    constructor(location, fb, api, commonService, http, router, spinner) {
        this.location = location;
        this.fb = fb;
        this.api = api;
        this.commonService = commonService;
        this.http = http;
        this.router = router;
        this.spinner = spinner;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url;
        this.orbisModelDetail = [];
        this.isShowSpinner = true;
        this.modelForm = this.fb.group({
            modelId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            adjustedFrequency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            modelName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            maximumDeviationAllowance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.chartOptions = {
            series: [25, 15, 44, 55, 41, 17],
            chart: {
                width: "400px",
                type: "pie"
            },
            labels: [
                " ",
                "",
                "",
                "",
                "",
                ""
            ],
            theme: {
                monochrome: {
                    enabled: true
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        fill: {
                            colors: ['#000', '#66DA26', '#546E7A', '#E91E63', '#FF9800']
                        },
                        legend: {
                            show: false,
                            position: "bottom"
                        },
                    }
                }
            ]
        };
    }
    ngOnInit() {
        this.spinner.show();
        $(document).on('click', 'button.minus', function () {
            $(this).parents('.inputBox').find('.formControl').attr('value', 0);
        });
        this.getorbisModel();
    }
    backClicked() {
        // localStorage.setItem("fromInvesting","true")
        this.location.back();
    }
    onSelect(event) {
        console.log(event.target.options[event.target.options.selectedIndex].label);
        let newForm = {
            orbisModelId: this.modelForm.value.modelId,
            adjustedFrequency: this.modelForm.value.adjustedFrequency,
            modelName: event.target.options[event.target.options.selectedIndex].label,
            maximumDeviationAllowance: this.modelForm.value.maximumDeviationAllowance,
            description: this.modelForm.value.description,
        };
        this.modelForm.patchValue(newForm);
    }
    numberOnly(event) {
        console.log("sssssssss");
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    addModel() {
        console.log("helo", this.modelForm.value);
        if (this.modelForm.invalid) {
            return;
        }
        this.spinner.show();
        let data = {
            orbisModelId: this.modelForm.value.modelId,
            modelName: this.modelForm.value.modelName,
            maximumDeviationAllowance: this.modelForm.value.maximumDeviationAllowance,
            adjustedFrequency: this.modelForm.value.adjustedFrequency,
            type: this.modelForm.value.type,
            description: this.modelForm.value.description,
        };
        this.api.post("createModel", data).subscribe(result => {
            if (result.status == 200) {
                this.commonService.succ(result.message);
                this.router.navigate(['investing']);
            }
            else {
                this.commonService.succ('Something went wrong');
            }
            this.spinner.hide();
        }, error => {
            console.log({ error });
        });
    }
    getorbisModel() {
        this.api.get('getOrbisModels').subscribe(result => {
            console.log('resultresultresultresult', result);
            if (result.status == 200) {
                let filterResult = [];
                if (result.data[0]) {
                    result.data.forEach(function (value, key) {
                        // if (value.title == "Thematic - Crypto & Blockchain") {
                        //   filterResult.push(value);
                        // }
                        filterResult.push(value);
                    });
                }
                this.orbisModelDetail = filterResult;
            }
            this.isShowSpinner = false;
            this.spinner.hide();
            console.log('this.getorbisModelhhhhh', this.orbisModelDetail);
        }, error => {
            console.log({ error });
        });
    }
};
CreateModelComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_4__["Api"] },
    { type: _api_comman_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }
];
CreateModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-model',
        template: __webpack_require__(/*! raw-loader!./create-model.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-model/create-model.component.html"),
        styles: [__webpack_require__(/*! ./create-model.component.scss */ "./src/app/create-model/create-model.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _api_api_service__WEBPACK_IMPORTED_MODULE_4__["Api"],
        _api_comman_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
], CreateModelComponent);



/***/ }),

/***/ "./src/app/create-portfolio/create-portfolio.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/create-portfolio/create-portfolio.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ant-input {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  box-sizing: border-box;\n  margin: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  width: 100%;\n  height: 32px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d8dce6;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n\n.thematic-buttons {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  box-sizing: border-box;\n  margin: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  width: 100%;\n  height: 32px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d8dce6;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n\ninput.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n\ntextarea.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n\nselect.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n\nbutton[type=button]:disabled {\n  background: #9c9c9c;\n  border-color: #9c9c9c;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vYnVsb3VzL0Rlc2t0b3AvcHJvamVjdHMvOF81L2Fkdmlzb3J5L3NyYy9hcHAvY3JlYXRlLXBvcnRmb2xpby9jcmVhdGUtcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jcmVhdGUtcG9ydGZvbGlvL2NyZWF0ZS1wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSw4TUFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURHQTtFQUNJLDhNQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREdBO0VBQ0ksMEJBQUE7QUNBSjs7QURHQTtFQUNJLDBCQUFBO0FDQUo7O0FERUE7RUFDSSwwQkFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtcG9ydGZvbGlvL2NyZWF0ZS1wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmFudC1pbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlZCBOdW1iZXJcIixcIkNoaW5lc2UgUXVvdGVcIiwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiUGluZ0ZhbmcgU0NcIixcIkhpcmFnaW5vIFNhbnMgR0JcIixcIk1pY3Jvc29mdCBZYUhlaVwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xuICAgIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA0cHggMTFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjY1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbn1cblxuLnRoZW1hdGljLWJ1dHRvbnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZWQgTnVtYmVyXCIsXCJDaGluZXNlIFF1b3RlXCIsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIlBpbmdGYW5nIFNDXCIsXCJIaXJhZ2lubyBTYW5zIEdCXCIsXCJNaWNyb3NvZnQgWWFIZWlcIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcInRudW1cIjtcbiAgICBmb250LXZhcmlhbnQ6IHRhYnVsYXItbnVtcztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNHB4IDExcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42NSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGRjZTY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG59XG5cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbn1cblxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVke1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbn1cbmJ1dHRvblt0eXBlPVwiYnV0dG9uXCJdOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjOWM5YzljO1xuICAgIGJvcmRlci1jb2xvcjogIzljOWM5YztcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9IiwiLmFudC1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZWQgTnVtYmVyXCIsIFwiQ2hpbmVzZSBRdW90ZVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLnRoZW1hdGljLWJ1dHRvbnMge1xuICBmb250LWZhbWlseTogXCJNb25vc3BhY2VkIE51bWJlclwiLCBcIkNoaW5lc2UgUXVvdGVcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJQaW5nRmFuZyBTQ1wiLCBcIkhpcmFnaW5vIFNhbnMgR0JcIiwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xuICBmb250LXZhcmlhbnQ6IHRhYnVsYXItbnVtcztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNHB4IDExcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGRjZTY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuXG50ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbn1cblxuc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuXG5idXR0b25bdHlwZT1idXR0b25dOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzljOWM5YztcbiAgYm9yZGVyLWNvbG9yOiAjOWM5YzljO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/create-portfolio/create-portfolio.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/create-portfolio/create-portfolio.component.ts ***!
  \****************************************************************/
/*! exports provided: CreatePortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePortfolioComponent", function() { return CreatePortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");
/* harmony import */ var _api_comman_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/comman.service */ "./src/api/comman.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let CreatePortfolioComponent = class CreatePortfolioComponent {
    constructor(fb, api, commonService, router) {
        this.fb = fb;
        this.api = api;
        this.commonService = commonService;
        this.router = router;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
        this.modelList = [];
        this.chartOptions = {
            series: [25, 15, 44, 55, 41, 17],
            chart: {
                width: "400px",
                type: "pie"
            },
            labels: [
                " ",
                "",
                "",
                "",
                "",
                ""
            ],
            theme: {
                monochrome: {
                    enabled: true
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        fill: {
                            colors: ['#000', '#66DA26', '#546E7A', '#E91E63', '#FF9800']
                        },
                        legend: {
                            show: false,
                            position: "bottom"
                        },
                    }
                }
            ]
        };
    }
    ngOnInit() {
        $(document).on('click', 'button.minus', function () {
            $(this).parents('.inputBox').find('.formControl').attr('value', 0);
        });
        this.getModelList();
        this.portfolioFrom = this.fb.group({
            "modelId": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            "name": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            "riskLevel": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            "drift": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            "description": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    getModelList() {
        this.api.get('modelList').subscribe(result => {
            //console.log('resultresultresult', result)
            if (result.status == 200) {
                let filterResult = [];
                result.data.forEach(function (value, key) {
                    if (value.type == 1) {
                        filterResult.push(value);
                    }
                });
                this.modelList = filterResult;
            }
        }, error => {
            console.log({ error });
        });
    }
    addPortfolio() {
        if (this.portfolioFrom.invalid) {
            this.commonService.err("All fields are required.");
            return;
        }
        let data = {
            modelId: this.portfolioFrom.value.modelId,
            name: this.portfolioFrom.value.name,
            riskLevel: this.portfolioFrom.value.riskLevel,
            drift: this.portfolioFrom.value.drift,
            description: this.portfolioFrom.value.description,
        };
        this.api.post("createPortfolio", data).subscribe(result => {
            if (result.status == 200) {
                this.commonService.succ(result.message);
                this.router.navigate(['investing']);
            }
            else {
                this.commonService.succ('Something went wrong');
            }
        }, error => {
            console.log({ error });
        });
    }
};
CreatePortfolioComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_4__["Api"] },
    { type: _api_comman_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
CreatePortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-portfolio',
        template: __webpack_require__(/*! raw-loader!./create-portfolio.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-portfolio/create-portfolio.component.html"),
        styles: [__webpack_require__(/*! ./create-portfolio.component.scss */ "./src/app/create-portfolio/create-portfolio.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _api_api_service__WEBPACK_IMPORTED_MODULE_4__["Api"], _api_comman_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], CreatePortfolioComponent);



/***/ }),

/***/ "./src/app/create-thematic/create-thematic.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/create-thematic/create-thematic.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thematic-buttons {\n  background-color: #2c8fcd;\n  color: #ffffff;\n  border: 1px solid #2c8fcd;\n  transition: 0.5s all ease-in-out;\n  font-size: 14px;\n  font-weight: 400;\n  padding: 10px 15px;\n  margin: 0 0 0 20px;\n}\n\n.form-group .ng-invalid.ng-touched {\n  border-left: 3px solid red;\n}\n\n.my-class {\n  background-color: green;\n  color: #fff;\n}\n\n.ant-input {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  box-sizing: border-box;\n  margin: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  width: 100%;\n  height: 32px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d8dce6;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vYnVsb3VzL0Rlc2t0b3AvcHJvamVjdHMvOF81L2Fkdmlzb3J5L3NyYy9hcHAvY3JlYXRlLXRoZW1hdGljL2NyZWF0ZS10aGVtYXRpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY3JlYXRlLXRoZW1hdGljL2NyZWF0ZS10aGVtYXRpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwwQkFBQTtBQ0VKOztBRENBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQ0U7RUFDRSw4TUFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS10aGVtYXRpYy9jcmVhdGUtdGhlbWF0aWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhlbWF0aWMtYnV0dG9uc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM4ZmNkO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYzhmY2Q7XG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cbi5mb3JtLWdyb3VwIC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZWQ7XG59XG5cbi5teS1jbGFzc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xuICAgIGNvbG9yOiNmZmY7XG4gIH1cblxuICAuYW50LWlucHV0IHtcbiAgICBmb250LWZhbWlseTogXCJNb25vc3BhY2VkIE51bWJlclwiLFwiQ2hpbmVzZSBRdW90ZVwiLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJQaW5nRmFuZyBTQ1wiLFwiSGlyYWdpbm8gU2FucyBHQlwiLFwiTWljcm9zb2Z0IFlhSGVpXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gICAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDRweCAxMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNjUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkY2U2O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xufSIsIi50aGVtYXRpYy1idXR0b25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjOGZjZDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyYzhmY2Q7XG4gIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuXG4uZm9ybS1ncm91cCAubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZWQ7XG59XG5cbi5teS1jbGFzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmFudC1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZWQgTnVtYmVyXCIsIFwiQ2hpbmVzZSBRdW90ZVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/create-thematic/create-thematic.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/create-thematic/create-thematic.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateThematicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateThematicComponent", function() { return CreateThematicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");
/* harmony import */ var _api_comman_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/comman.service */ "./src/api/comman.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");










let CreateThematicComponent = class CreateThematicComponent {
    constructor(location, fb, api, commonService, http, router, spinner) {
        this.location = location;
        this.fb = fb;
        this.api = api;
        this.commonService = commonService;
        this.http = http;
        this.router = router;
        this.spinner = spinner;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url;
        this.modelList = [];
        this.selectedFile = null;
        this.uploadTimer = 0;
        this.uploadedImageUrl = "";
        this.orbisModelDetail = [];
        this.isShowSpinner = true;
        this.chartOptions = {
            series: [25, 15, 44, 55, 41, 17],
            chart: {
                width: "400px",
                type: "pie"
            },
            labels: [
                " ",
                "",
                "",
                "",
                "",
                ""
            ],
            theme: {
                monochrome: {
                    enabled: true
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        fill: {
                            colors: ['#000', '#66DA26', '#546E7A', '#E91E63', '#FF9800']
                        },
                        legend: {
                            show: false,
                            position: "bottom"
                        },
                    }
                }
            ]
        };
        this.thematicForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            models: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        // console.log(this.thematicForm.invalid);
    }
    ngOnInit() {
        this.spinner.show();
        this.getorbisModel();
    }
    backClicked() {
        // localStorage.setItem("fromInvesting","true")
        this.location.back();
    }
    getorbisModel() {
        this.api.get('modelList').subscribe(result => {
            //console.log('resultresultresult', result)
            if (result.status == 200) {
                let filterResult = [];
                result.data.forEach(function (value, key) {
                    if (value.type == 2) {
                        filterResult.push(value);
                    }
                });
                this.modelList = filterResult;
            }
            this.isShowSpinner = false;
        }, error => {
            console.log({ error });
        });
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post(this.url + "uploadImage", fd, {
            reportProgress: true,
            observe: 'events'
        }).subscribe(event => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].UploadProgress) {
                this.uploadTimer = Math.round(event.loaded / event.total * 100);
                console.log("Upload Progress:" + this.uploadTimer + "%");
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].Response) {
                this.uploadedImageUrl = event.body['data'];
            }
            else {
                console.log("Uploading Completed");
            }
        }, error => {
            console.log({ error });
        });
    }
    addThematic() {
        //console.log("helo", this.thematicForm.value)
        if (this.thematicForm.invalid) {
            return;
        }
        // console.log('this.thematicFormthis.thematicForm', this.thematicForm)
        let data = {
            modelId: this.thematicForm.value.models,
            thematicImage: this.uploadedImageUrl,
            thematicName: this.thematicForm.value.name,
            thematicDescription: this.thematicForm.value.description,
        };
        console.log('datadatadatadata', data);
        // var result = this.orbisModelDetail.find(obj => {
        //   return obj.id == this.thematicForm.value.models
        // })
        // const modelData = {
        //   title: result.title,
        //   description: result.description,
        //   reserveType: result.reserveType,
        //   fractionalSharePolicy: result.fractionalSharePolicy,
        //   minimum: result.minimum,
        //   reserve: result.reserve,
        //   inventoryId: result.inventoryId,
        //   id: result.id,
        //   robo: result.robo,
        //   roboActive: result.roboActive,
        //   identifierType: result.identifierType,
        //   identifierBreakdown: result.identifierBreakdown,
        //   components: result.components
        // }
        // let data = {
        //   thematicImage: this.uploadedImageUrl,
        //   thematicName: this.thematicForm.value.name,
        //   thematicDescription: this.thematicForm.value.description,
        //   models: modelData
        // }
        // console.log('datadata', data)
        this.api.post("createThematic", data).subscribe(result => {
            if (result.status == 200) {
                this.commonService.succ(result.message);
                this.router.navigate(['investing']);
            }
            else {
                this.commonService.succ('Something went wrong');
            }
        }, error => {
            console.log({ error });
        });
    }
};
CreateThematicComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_4__["Api"] },
    { type: _api_comman_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }
];
CreateThematicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-thematic',
        template: __webpack_require__(/*! raw-loader!./create-thematic.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-thematic/create-thematic.component.html"),
        styles: [__webpack_require__(/*! ./create-thematic.component.scss */ "./src/app/create-thematic/create-thematic.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _api_api_service__WEBPACK_IMPORTED_MODULE_4__["Api"],
        _api_comman_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
], CreateThematicComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let DashboardComponent = class DashboardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    summaryClick() {
        this.summaryOverViewTab = true;
        this.clientTab = false;
        this.investingTab = false;
        this.transactionTab = false;
        localStorage.setItem("summaryOverViewTab", this.summaryOverViewTab);
        localStorage.setItem("clientTab", this.clientTab);
        localStorage.setItem("investingTab", this.investingTab);
        localStorage.setItem("transactionTab", this.transactionTab);
    }
    clientClick() {
        this.summaryOverViewTab = false;
        this.clientTab = true;
        this.investingTab = false;
        this.transactionTab = false;
        localStorage.setItem("summaryOverViewTab", this.summaryOverViewTab);
        localStorage.setItem("clientTab", this.clientTab);
        localStorage.setItem("investingTab", this.investingTab);
        localStorage.setItem("transactionTab", this.transactionTab);
    }
    investingClick() {
        this.summaryOverViewTab = false;
        this.clientTab = false;
        this.investingTab = true;
        this.transactionTab = false;
        localStorage.setItem("summaryOverViewTab", this.summaryOverViewTab);
        localStorage.setItem("clientTab", this.clientTab);
        localStorage.setItem("investingTab", this.investingTab);
        localStorage.setItem("transactionTab", this.transactionTab);
    }
    transactionClick() {
        this.summaryOverViewTab = false;
        this.clientTab = false;
        this.investingTab = false;
        this.transactionTab = true;
        localStorage.setItem("summaryOverViewTab", this.summaryOverViewTab);
        localStorage.setItem("clientTab", this.clientTab);
        localStorage.setItem("investingTab", this.investingTab);
        localStorage.setItem("transactionTab", this.transactionTab);
    }
    checkFun() {
        let x = localStorage.getItem("summaryOverViewTab");
        if (x == "false") {
            document.getElementById('Summary-tab').innerHTML;
        }
        $(document).ready(function () {
            if (localStorage.which_tab) {
                $('#tab-' + localStorage.which_tab).slideToggle("slow").siblings('div').hide('slow');
                $('#tab-' + localStorage.which_tab).slideToggle('slow');
            }
            $('a.tab-menu').click(function () {
                if ($(window).width() < 768)
                    $('#tab-' + ($('.tab-menu').index($(this)) + 1)).slideToggle("slow").siblings('div').hide('slow');
                var t = $(this).attr('data-type');
                localStorage.which_tab = t;
            });
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/edit-questionaire/edit-questionaire.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/edit-questionaire/edit-questionaire.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.site-root .site-main {\n  min-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.b-questionnaire .questionnaire-content .tool-choice {\n  position: fixed;\n  width: 280px;\n}\n.ant-card {\n  font-size: 14px;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: #fff;\n  border-radius: 2px;\n  position: relative;\n  transition: all 0.3s;\n}\n.b-questionnaire .questionnaire-content .tool-choice .tool-title {\n  padding: 8px 24px;\n  font-weight: 700;\n  font-size: 16px;\n}\n.b-questionnaire .questionnaire-content .tool-choice .choices {\n  display: block;\n  padding: 14px 24px;\n  border-top: 1px solid #f0f2f5;\n  cursor: pointer;\n  color: #2196f3;\n}\n.b-questionnaire .questionnaire-content .tool-choice .anticon {\n  margin-right: 12px;\n}\n.anticon {\n  display: inline-block;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  line-height: 1;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.anticon:before {\n  display: block;\n}\n.b-questionnaire .questionnaire-content .edit-questions-content {\n  padding-left: 294px;\n  width: 100%;\n}\n.goal-question-section {\n  border-radius: 4px;\n  background-color: #fff;\n  padding: 16px 24px;\n  margin-bottom: 16px;\n}\n.ant-row {\n  position: relative;\n  margin-left: 0;\n  margin-right: 0;\n  height: auto;\n  zoom: 1;\n  display: block;\n  box-sizing: border-box;\n}\n.ant-form-item {\n  font-size: 14px;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  padding: 0;\n  list-style: none;\n  margin: 0 0 24px;\n  vertical-align: top;\n}\n.ant-form-item-label {\n  white-space: normal;\n  line-height: 29px;\n}\n.ant-form-item-label {\n  text-align: right;\n  vertical-align: middle;\n  line-height: 39.9999px;\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.ant-form-item-label label {\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-form-item label {\n  position: relative;\n}\n.goal-questionnaire-root .itemProps-label {\n  color: #1e1e1e;\n  font-weight: 700;\n  display: inline-block;\n  margin-bottom: 4px;\n}\n.ant-form-item-label label:after {\n  content: \":\";\n  margin: 0 8px 0 2px;\n  position: relative;\n  top: -0.5px;\n}\n.ant-form-item-required:before {\n  display: inline-block;\n  margin-right: 4px;\n  content: \"*\";\n  font-family: SimSun;\n  line-height: 1;\n  font-size: 14px;\n  color: #f5222d;\n}\n.goal-questionnaire-root .ant-form-item-control {\n  line-height: 34px;\n}\n.ant-form-item-control {\n  line-height: 39.9999px;\n  position: relative;\n  zoom: 1;\n}\n.ant-input {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  box-sizing: border-box;\n  margin: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  width: 100%;\n  height: 32px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d8dce6;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n.goal-question-section .ant-form-item {\n  padding-bottom: 18px;\n}\n.goal-questionnaire-root .ant-row {\n  width: 80%;\n}\ntextarea.ant-input {\n  max-width: 100%;\n  height: auto;\n  vertical-align: bottom;\n  transition: all 0.3s, height 0s;\n  min-height: 32px;\n}\n.goal-question-item .goal-question-title {\n  padding: 10px 0 12px;\n  border-bottom: 1px solid #f0f2f5;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.goal-question-item .ant-row {\n  display: flex;\n}\n.goal-question-item .goal-question-title .ant-form-item-label {\n  font-size: 16px;\n  color: #1e1e1e;\n  font-weight: 700;\n}\n.goal-question-item .ant-form-item-label {\n  min-width: 40px;\n}\n.goal-question-item .ant-row .ant-form-item-control-wrapper {\n  flex: 1 1;\n}\n.goal-question-item .goal-question-content .question-option-wrap {\n  display: flex;\n  justify-content: space-between;\n  padding: 4px 0;\n}\n.goal-question-item .remove-icon {\n  font-size: 16px;\n  font-weight: 700;\n  padding: 5px;\n  color: #888e98;\n}\n.anticon-close:before, .anticon-cross:before {\n  content: \"\";\n}\n.b-questionnaire .ant-form-inline .ant-form-item-with-help, .b-questionnaire .ant-form-item {\n  margin-bottom: 0;\n}\n.goal-question-item .goal-question-content .add-option {\n  padding: 10px 20px;\n}\n.goal-question-footer {\n  overflow: hidden;\n  border-top: 1px solid #f0f2f5;\n}\n.goal-question-footer .ant-row-flex {\n  margin: 16px 0;\n}\n.ant-row-flex {\n  display: flex;\n  flex-flow: row wrap;\n}\n.ant-row-flex-space-between {\n  justify-content: space-between;\n}\n.goal-question-footer .choice-icon {\n  display: inline-block;\n  vertical-align: middle;\n  width: 12px;\n  height: 12px;\n  background: #999;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 1px #999;\n  margin-left: 1px;\n}\n.goal-question-footer .footer-btn {\n  color: #888e98;\n  margin-left: 30px;\n}\n.ant-col-6.flex-colume.record {\n  margin-left: 20px;\n}\n.b-questionnaire .choice-record {\n  text-align: right;\n}\n.choice-record span {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  font-weight: 700;\n}\n.site-root .site-main {\n  min-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.ant-breadcrumb {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n.breadNav_nav__3bu0T .ant-breadcrumb-link {\n  color: rgba(30, 30, 30, 0.7);\n}\n.ant-breadcrumb-separator {\n  margin: 0 8px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-breadcrumb > span:last-child .ant-breadcrumb-separator {\n  display: none;\n}\n.ant-btn {\n  line-height: 1.5;\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  white-space: nowrap;\n  padding: 0 15px;\n  font-size: 14px;\n  border-radius: 4px;\n  height: 32px;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n       user-select: none;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  border: 1px solid #d8dce6;\n  margin-left: 20px;\n}\n.ant-btn-primary {\n  color: #fff;\n  background-color: #2196f3;\n  border-color: #2196f3;\n}\n.breadNav_nav__3bu0T {\n  border-bottom: 1px solid #f0f2f5;\n  line-height: 54px;\n  height: 54px;\n  padding: 0 27px;\n}\n.fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 9;\n}\ninput.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\ntextarea.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\nbutton[type=button]:disabled {\n  background: #9c9c9c;\n  border-color: #9c9c9c;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1xdWVzdGlvbmFpcmUvZWRpdC1xdWVzdGlvbmFpcmUuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9tb2J1bG91cy9EZXNrdG9wL3Byb2plY3RzLzhfNS9hZHZpc29yeS9zcmMvYXBwL2VkaXQtcXVlc3Rpb25haXJlL2VkaXQtcXVlc3Rpb25haXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURFSjtBQ0FBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QURHSjtBQ0RBO0VBQ0ksZUFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBRElKO0FDRkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBREtKO0FDSEE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FETUo7QUNKQTtFQUNJLGtCQUFBO0FET0o7QUNMQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FEUUo7QUNOQTtFQUNJLGNBQUE7QURTSjtBQ1BBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FEVUo7QUNSQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEV0o7QUNUQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBRFlKO0FDVkE7RUFDSSxlQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRGFKO0FDWEE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FEY0o7QUNaQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRGVKO0FDYkE7RUFDSSwwQkFBQTtBRGdCSjtBQ2RBO0VBQ0ksa0JBQUE7QURpQko7QUNmQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QURrQko7QUNoQkE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURtQko7QUNqQkE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEb0JKO0FDbEJBO0VBQ0ksaUJBQUE7QURxQko7QUNuQkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBRHNCSjtBQ3BCQTtFQUNJLDhNQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBRHVCSjtBQ3JCQTtFQUNJLG9CQUFBO0FEd0JKO0FDdEJBO0VBQ0ksVUFBQTtBRHlCSjtBQ3ZCQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FEMEJKO0FDeEJBO0VBQ0ksb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUQyQko7QUN6QkE7RUFDSSxhQUFBO0FENEJKO0FDMUJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRDZCSjtBQzNCQTtFQUNJLGVBQUE7QUQ4Qko7QUM1QkE7RUFDSSxTQUFBO0FEK0JKO0FDN0JBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBRGdDSjtBQzlCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FEaUNKO0FDL0JBO0VBQ0ksWUFBQTtBRGtDSjtBQ2hDQTtFQUNJLGdCQUFBO0FEbUNKO0FDakNBO0VBQ0ksa0JBQUE7QURvQ0o7QUNsQ0E7RUFDSSxnQkFBQTtFQUNBLDZCQUFBO0FEcUNKO0FDbkNBO0VBQ0ksY0FBQTtBRHNDSjtBQ3BDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBRHVDSjtBQ3JDQTtFQUNJLDhCQUFBO0FEd0NKO0FDdENBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBRHlDSjtBQ3ZDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBRDBDSjtBQ3hDQTtFQUNJLGlCQUFBO0FEMkNKO0FDekNBO0VBQ0ksaUJBQUE7QUQ0Q0o7QUN6Q0E7RUFDSSw4TUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FENENKO0FDekNBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRDRDSjtBQzFDQTtFQUNJLDhNQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBRDZDSjtBQzNDQTtFQUNJLDRCQUFBO0FEOENKO0FDNUNBO0VBQ0ksYUFBQTtFQUNBLDBCQUFBO0FEK0NKO0FDN0NBO0VBQ0ksYUFBQTtBRGdESjtBQzlDQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO09BQUEsaUJBQUE7RUFDQSx5REFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QURpREo7QUMvQ0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBRGtESjtBQ2hEQTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRG1ESjtBQ2pEQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBRG9ESjtBQzVDQztFQUNJLDBCQUFBO0FEK0NMO0FDNUNDO0VBQ0ksMEJBQUE7QUQrQ0w7QUM3Q0M7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QURnREwiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXF1ZXN0aW9uYWlyZS9lZGl0LXF1ZXN0aW9uYWlyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5zaXRlLXJvb3QgLnNpdGUtbWFpbiB7XG4gIG1pbi13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAyNHB4O1xufVxuXG4uYi1xdWVzdGlvbm5haXJlIC5xdWVzdGlvbm5haXJlLWNvbnRlbnQgLnRvb2wtY2hvaWNlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMjgwcHg7XG59XG5cbi5hbnQtY2FyZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcInRudW1cIjtcbiAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmItcXVlc3Rpb25uYWlyZSAucXVlc3Rpb25uYWlyZS1jb250ZW50IC50b29sLWNob2ljZSAudG9vbC10aXRsZSB7XG4gIHBhZGRpbmc6IDhweCAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5iLXF1ZXN0aW9ubmFpcmUgLnF1ZXN0aW9ubmFpcmUtY29udGVudCAudG9vbC1jaG9pY2UgLmNob2ljZXMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTRweCAyNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjJmNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzIxOTZmMztcbn1cblxuLmItcXVlc3Rpb25uYWlyZSAucXVlc3Rpb25uYWlyZS1jb250ZW50IC50b29sLWNob2ljZSAuYW50aWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmFudGljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5hbnRpY29uOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYi1xdWVzdGlvbm5haXJlIC5xdWVzdGlvbm5haXJlLWNvbnRlbnQgLmVkaXQtcXVlc3Rpb25zLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDI5NHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmdvYWwtcXVlc3Rpb24tc2VjdGlvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uYW50LXJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB6b29tOiAxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmFudC1mb3JtLWl0ZW0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwIDAgMjRweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjlweDtcbn1cblxuLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6IDM5Ljk5OTlweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYW50LWZvcm0taXRlbS1sYWJlbCBsYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xufVxuXG4uYW50LWZvcm0taXRlbSBsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmdvYWwtcXVlc3Rpb25uYWlyZS1yb290IC5pdGVtUHJvcHMtbGFiZWwge1xuICBjb2xvcjogIzFlMWUxZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5hbnQtZm9ybS1pdGVtLWxhYmVsIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCI6XCI7XG4gIG1hcmdpbjogMCA4cHggMCAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMC41cHg7XG59XG5cbi5hbnQtZm9ybS1pdGVtLXJlcXVpcmVkOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBmb250LWZhbWlseTogU2ltU3VuO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2Y1MjIyZDtcbn1cblxuLmdvYWwtcXVlc3Rpb25uYWlyZS1yb290IC5hbnQtZm9ybS1pdGVtLWNvbnRyb2wge1xuICBsaW5lLWhlaWdodDogMzRweDtcbn1cblxuLmFudC1mb3JtLWl0ZW0tY29udHJvbCB7XG4gIGxpbmUtaGVpZ2h0OiAzOS45OTk5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgem9vbTogMTtcbn1cblxuLmFudC1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZWQgTnVtYmVyXCIsIFwiQ2hpbmVzZSBRdW90ZVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmdvYWwtcXVlc3Rpb24tc2VjdGlvbiAuYW50LWZvcm0taXRlbSB7XG4gIHBhZGRpbmctYm90dG9tOiAxOHB4O1xufVxuXG4uZ29hbC1xdWVzdGlvbm5haXJlLXJvb3QgLmFudC1yb3cge1xuICB3aWR0aDogODAlO1xufVxuXG50ZXh0YXJlYS5hbnQtaW5wdXQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MsIGhlaWdodCAwcztcbiAgbWluLWhlaWdodDogMzJweDtcbn1cblxuLmdvYWwtcXVlc3Rpb24taXRlbSAuZ29hbC1xdWVzdGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHggMCAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjJmNTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZ29hbC1xdWVzdGlvbi1pdGVtIC5hbnQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmdvYWwtcXVlc3Rpb24taXRlbSAuZ29hbC1xdWVzdGlvbi10aXRsZSAuYW50LWZvcm0taXRlbS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMxZTFlMWU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xuICBtaW4td2lkdGg6IDQwcHg7XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmFudC1yb3cgLmFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyIHtcbiAgZmxleDogMSAxO1xufVxuXG4uZ29hbC1xdWVzdGlvbi1pdGVtIC5nb2FsLXF1ZXN0aW9uLWNvbnRlbnQgLnF1ZXN0aW9uLW9wdGlvbi13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA0cHggMDtcbn1cblxuLmdvYWwtcXVlc3Rpb24taXRlbSAucmVtb3ZlLWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICM4ODhlOTg7XG59XG5cbi5hbnRpY29uLWNsb3NlOmJlZm9yZSwgLmFudGljb24tY3Jvc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCLumLNcIjtcbn1cblxuLmItcXVlc3Rpb25uYWlyZSAuYW50LWZvcm0taW5saW5lIC5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscCwgLmItcXVlc3Rpb25uYWlyZSAuYW50LWZvcm0taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmdvYWwtcXVlc3Rpb24tY29udGVudCAuYWRkLW9wdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLmdvYWwtcXVlc3Rpb24tZm9vdGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYyZjU7XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWZvb3RlciAuYW50LXJvdy1mbGV4IHtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbi5hbnQtcm93LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuXG4uYW50LXJvdy1mbGV4LXNwYWNlLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWZvb3RlciAuY2hvaWNlLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQ6ICM5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICM5OTk7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWZvb3RlciAuZm9vdGVyLWJ0biB7XG4gIGNvbG9yOiAjODg4ZTk4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmFudC1jb2wtNi5mbGV4LWNvbHVtZS5yZWNvcmQge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmItcXVlc3Rpb25uYWlyZSAuY2hvaWNlLXJlY29yZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2hvaWNlLXJlY29yZCBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlZCBOdW1iZXJcIiwgXCJDaGluZXNlIFF1b3RlXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiUGluZ0ZhbmcgU0NcIiwgXCJIaXJhZ2lubyBTYW5zIEdCXCIsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc2l0ZS1yb290IC5zaXRlLW1haW4ge1xuICBtaW4td2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMjRweDtcbn1cblxuLmFudC1icmVhZGNydW1iIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlZCBOdW1iZXJcIiwgXCJDaGluZXNlIFF1b3RlXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiUGluZ0ZhbmcgU0NcIiwgXCJIaXJhZ2lubyBTYW5zIEdCXCIsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcInRudW1cIjtcbiAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5icmVhZE5hdl9uYXZfXzNidTBUIC5hbnQtYnJlYWRjcnVtYi1saW5rIHtcbiAgY29sb3I6IHJnYmEoMzAsIDMwLCAzMCwgMC43KTtcbn1cblxuLmFudC1icmVhZGNydW1iLXNlcGFyYXRvciB7XG4gIG1hcmdpbjogMCA4cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xufVxuXG4uYW50LWJyZWFkY3J1bWIgPiBzcGFuOmxhc3QtY2hpbGQgLmFudC1icmVhZGNydW1iLXNlcGFyYXRvciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hbnQtYnRuIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMzJweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkY2U2O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmFudC1idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICBib3JkZXItY29sb3I6ICMyMTk2ZjM7XG59XG5cbi5icmVhZE5hdl9uYXZfXzNidTBUIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYyZjU7XG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xuICBoZWlnaHQ6IDU0cHg7XG4gIHBhZGRpbmc6IDAgMjdweDtcbn1cblxuLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTtcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG59XG5cbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuXG5idXR0b25bdHlwZT1idXR0b25dOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzljOWM5YztcbiAgYm9yZGVyLWNvbG9yOiAjOWM5YzljO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufSIsIi5zaXRlLXJvb3QgLnNpdGUtbWFpbiB7XHJcbiAgICBtaW4td2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAyNHB4O1xyXG59XHJcbi5iLXF1ZXN0aW9ubmFpcmUgLnF1ZXN0aW9ubmFpcmUtY29udGVudCAudG9vbC1jaG9pY2Uge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG59XHJcbi5hbnQtY2FyZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xyXG4gICAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjY1KTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG59XHJcbi5iLXF1ZXN0aW9ubmFpcmUgLnF1ZXN0aW9ubmFpcmUtY29udGVudCAudG9vbC1jaG9pY2UgLnRvb2wtdGl0bGUge1xyXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5iLXF1ZXN0aW9ubmFpcmUgLnF1ZXN0aW9ubmFpcmUtY29udGVudCAudG9vbC1jaG9pY2UgLmNob2ljZXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDI0cHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjJmNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjMjE5NmYzO1xyXG59XHJcbi5iLXF1ZXN0aW9ubmFpcmUgLnF1ZXN0aW9ubmFpcmUtY29udGVudCAudG9vbC1jaG9pY2UgLmFudGljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcbi5hbnRpY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcbi5hbnRpY29uOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYi1xdWVzdGlvbm5haXJlIC5xdWVzdGlvbm5haXJlLWNvbnRlbnQgLmVkaXQtcXVlc3Rpb25zLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyOTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5nb2FsLXF1ZXN0aW9uLXNlY3Rpb24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuLmFudC1yb3cge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB6b29tOiAxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5hbnQtZm9ybS1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XHJcbiAgICBmb250LXZhcmlhbnQ6IHRhYnVsYXItbnVtcztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNjUpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwIDAgMjRweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG59XHJcbi5hbnQtZm9ybS1pdGVtLWxhYmVsIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOS45OTk5cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uYW50LWZvcm0taXRlbS1sYWJlbCBsYWJlbCB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuODUpO1xyXG59XHJcbi5hbnQtZm9ybS1pdGVtIGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZ29hbC1xdWVzdGlvbm5haXJlLXJvb3QgLml0ZW1Qcm9wcy1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzFlMWUxZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuLmFudC1mb3JtLWl0ZW0tbGFiZWwgbGFiZWw6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCI6XCI7XHJcbiAgICBtYXJnaW46IDAgOHB4IDAgMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtLjVweDtcclxufVxyXG4uYW50LWZvcm0taXRlbS1yZXF1aXJlZDpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGZvbnQtZmFtaWx5OiBTaW1TdW47XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZjUyMjJkO1xyXG59XHJcbi5nb2FsLXF1ZXN0aW9ubmFpcmUtcm9vdCAuYW50LWZvcm0taXRlbS1jb250cm9sIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG59XHJcbi5hbnQtZm9ybS1pdGVtLWNvbnRyb2wge1xyXG4gICAgbGluZS1oZWlnaHQ6IDM5Ljk5OTlweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHpvb206IDE7XHJcbn1cclxuLmFudC1pbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogXCJNb25vc3BhY2VkIE51bWJlclwiLFwiQ2hpbmVzZSBRdW90ZVwiLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJQaW5nRmFuZyBTQ1wiLFwiSGlyYWdpbm8gU2FucyBHQlwiLFwiTWljcm9zb2Z0IFlhSGVpXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcInRudW1cIjtcclxuICAgIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA0cHggMTFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGRjZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG59XHJcbi5nb2FsLXF1ZXN0aW9uLXNlY3Rpb24gLmFudC1mb3JtLWl0ZW0ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE4cHg7XHJcbn1cclxuLmdvYWwtcXVlc3Rpb25uYWlyZS1yb290IC5hbnQtcm93IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxudGV4dGFyZWEuYW50LWlucHV0IHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzLGhlaWdodCAwcztcclxuICAgIG1pbi1oZWlnaHQ6IDMycHg7XHJcbn1cclxuLmdvYWwtcXVlc3Rpb24taXRlbSAuZ29hbC1xdWVzdGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTJweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMmY1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmFudC1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZ29hbC1xdWVzdGlvbi1pdGVtIC5nb2FsLXF1ZXN0aW9uLXRpdGxlIC5hbnQtZm9ybS1pdGVtLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMWUxZTFlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uZ29hbC1xdWVzdGlvbi1pdGVtIC5hbnQtZm9ybS1pdGVtLWxhYmVsIHtcclxuICAgIG1pbi13aWR0aDogNDBweDtcclxufVxyXG4uZ29hbC1xdWVzdGlvbi1pdGVtIC5hbnQtcm93IC5hbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlciB7XHJcbiAgICBmbGV4OiAxIDE7XHJcbn1cclxuLmdvYWwtcXVlc3Rpb24taXRlbSAuZ29hbC1xdWVzdGlvbi1jb250ZW50IC5xdWVzdGlvbi1vcHRpb24td3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogNHB4IDA7XHJcbn1cclxuLmdvYWwtcXVlc3Rpb24taXRlbSAucmVtb3ZlLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiAjODg4ZTk4O1xyXG59XHJcbi5hbnRpY29uLWNsb3NlOmJlZm9yZSwgLmFudGljb24tY3Jvc3M6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxlNjMzXCI7XHJcbn1cclxuLmItcXVlc3Rpb25uYWlyZSAuYW50LWZvcm0taW5saW5lIC5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscCwgLmItcXVlc3Rpb25uYWlyZSAuYW50LWZvcm0taXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmdvYWwtcXVlc3Rpb24tY29udGVudCAuYWRkLW9wdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuLmdvYWwtcXVlc3Rpb24tZm9vdGVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjJmNTtcclxufVxyXG4uZ29hbC1xdWVzdGlvbi1mb290ZXIgLmFudC1yb3ctZmxleCB7XHJcbiAgICBtYXJnaW46IDE2cHggMDtcclxufVxyXG4uYW50LXJvdy1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG59XHJcbi5hbnQtcm93LWZsZXgtc3BhY2UtYmV0d2VlbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmdvYWwtcXVlc3Rpb24tZm9vdGVyIC5jaG9pY2UtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjOTk5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcclxufVxyXG4uZ29hbC1xdWVzdGlvbi1mb290ZXIgLmZvb3Rlci1idG4ge1xyXG4gICAgY29sb3I6ICM4ODhlOTg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uYW50LWNvbC02LmZsZXgtY29sdW1lLnJlY29yZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5iLXF1ZXN0aW9ubmFpcmUgLmNob2ljZS1yZWNvcmQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jaG9pY2UtcmVjb3JkIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlZCBOdW1iZXJcIixcIkNoaW5lc2UgUXVvdGVcIiwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiUGluZ0ZhbmcgU0NcIixcIkhpcmFnaW5vIFNhbnMgR0JcIixcIk1pY3Jvc29mdCBZYUhlaVwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc2l0ZS1yb290IC5zaXRlLW1haW4ge1xyXG4gICAgbWluLXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxufVxyXG4uYW50LWJyZWFkY3J1bWIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlZCBOdW1iZXJcIixcIkNoaW5lc2UgUXVvdGVcIiwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiUGluZ0ZhbmcgU0NcIixcIkhpcmFnaW5vIFNhbnMgR0JcIixcIk1pY3Jvc29mdCBZYUhlaVwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XHJcbiAgICBmb250LXZhcmlhbnQ6IHRhYnVsYXItbnVtcztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNjUpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjQ1KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYnJlYWROYXZfbmF2X18zYnUwVCAuYW50LWJyZWFkY3J1bWItbGluayB7XHJcbiAgICBjb2xvcjogcmdiYSgzMCwzMCwzMCwuNyk7XHJcbn1cclxuLmFudC1icmVhZGNydW1iLXNlcGFyYXRvciB7XHJcbiAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjQ1KTtcclxufVxyXG4uYW50LWJyZWFkY3J1bWI+c3BhbjpsYXN0LWNoaWxkIC5hbnQtYnJlYWRjcnVtYi1zZXBhcmF0b3Ige1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uYW50LWJ0biB7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGN1YmljLWJlemllciguNjQ1LC4wNDUsLjM1NSwxKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5hbnQtYnRuLXByaW1hcnkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzO1xyXG59XHJcbi5icmVhZE5hdl9uYXZfXzNidTBUIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMmY1O1xyXG4gICAgbGluZS1oZWlnaHQ6IDU0cHg7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDI3cHg7XHJcbn1cclxuLmZpeGVkIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogOTtcclxufVxyXG5cclxuXHJcbi5hbnQtZm9ybS1pdGVtLWNoaWxkcmVuIC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICAvLyBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcclxuIH1cclxuIFxyXG4gaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG4gfVxyXG4gXHJcbiB0ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XHJcbiB9XHJcbiBidXR0b25bdHlwZT1cImJ1dHRvblwiXTpkaXNhYmxlZCB7XHJcbiAgICAgYmFja2dyb3VuZDogIzljOWM5YztcclxuICAgICBib3JkZXItY29sb3I6ICM5YzljOWM7XHJcbiAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/edit-questionaire/edit-questionaire.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/edit-questionaire/edit-questionaire.component.ts ***!
  \******************************************************************/
/*! exports provided: EditQuestionaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditQuestionaireComponent", function() { return EditQuestionaireComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");
/* harmony import */ var _api_comman_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/comman.service */ "./src/api/comman.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");







let EditQuestionaireComponent = class EditQuestionaireComponent {
    constructor(api, activatedRoute, fb, commonService, router, spinner) {
        this.api = api;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.commonService = commonService;
        this.router = router;
        this.spinner = spinner;
        this.questionDetail = [];
    }
    ngOnInit() {
        this.spinner.show();
        this.getQuestionaireDetail();
        this.form = this.fb.group({
            "questionnaire_id": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            "title": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'questions': this.fb.array([
                this.initQuestion()
            ])
        });
    }
    getQuestionaireDetail() {
        this.activatedRoute.params.subscribe(params => {
            console.log(params['id']);
            this.api.get('getQuestionaireDetail/' + params['id']).subscribe(result => {
                console.log('resultresultresult', result.data[0]);
                if (result.status == 200) {
                    this.questionDetail = result.data[0];
                    this.patchQuestionValue(this.questionDetail);
                }
                this.spinner.hide();
            }, error => {
                console.log({ error });
            });
        });
    }
    initQuestion() {
        return this.fb.group({
            'question_id': [''],
            'question': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'answers': this.fb.array([
                this.initAnswer()
            ])
        });
    }
    initAnswer() {
        return this.fb.group({
            'answer_id': [''],
            'answer': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'value': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]]
        });
    }
    patchQuestionValue(data) {
        if (data) {
            if (data.questions) {
                let questionResult = [];
                data.questions.forEach((question, index) => {
                    if (index != 0) {
                        this.addQuestion();
                    }
                    let answerResult = [];
                    if (question.answers) {
                        question.answers.forEach((answer, answerIndex) => {
                            if (answerIndex != 0) {
                                this.addAnswer(index);
                            }
                            let answerObj = {
                                'answer_id': answer._id,
                                'answer': answer.answer,
                                'value': answer.value
                            };
                            answerResult.push(answerObj);
                        });
                    }
                    let questionObj = {
                        'question_id': question._id,
                        'question': question.question,
                        'answers': answerResult
                    };
                    questionResult.push(questionObj);
                });
                let newForm = {
                    "questionnaire_id": data._id,
                    "title": data.title,
                    "description": data.description,
                };
                console.log('rrrrrrrrrrrrrrrrrr', newForm);
                console.log('datadatadatadata', data);
                this.form.patchValue(newForm);
                this.form.controls['questions'].patchValue(questionResult);
                console.log('newFormnewFormnewForm', this.form.value);
            }
        }
    }
    addQuestion() {
        const control = this.form.controls['questions'];
        control.push(this.initQuestion());
    }
    removeQuestion(ix) {
        const control = this.form.controls['questions'];
        control.removeAt(ix);
    }
    addAnswer(ix) {
        const control = this.form.controls['questions'].at(ix).get('answers');
        control.push(this.initAnswer());
    }
    removeAnswer(ix, iy) {
        console.log(ix + ' / ' + iy);
        console.log(this.form.controls['questions'].at(ix).get('answers'));
        const control = this.form.controls['questions'].at(ix).get('answers');
        control.removeAt(iy);
    }
    // Move form control item up or down in the array
    move(shift, currentIndex) {
        const rules = this.form.controls['questions'];
        let newIndex = currentIndex + shift;
        if (newIndex === -1) {
            newIndex = this.form.controls['questions'].length - 1;
        }
        else if (newIndex == rules.length) {
            newIndex = 0;
        }
        const currentGroup = this.form.controls['questions'].at(currentIndex);
        rules.removeAt(currentIndex);
        ;
        rules.insert(newIndex, currentGroup);
    }
    checkMaxData(event) {
        let MaxData = Math.max.apply(Math, this.form.value.questions[0].answers.map(function (o) { return o.value; }));
        let minData = Math.min.apply(Math, this.form.value.questions[0].answers.map(function (o) { return o.value; }));
        console.log(MaxData, minData);
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    saveQuestionaire() {
        // if (this.form.invalid) {
        //   return;
        // }
        // console.log(this.form.value);
        let data = {
            questionnaire_id: this.form.value.questionnaire_id,
            title: this.form.value.title,
            description: this.form.value.description,
            questions: this.form.value.questions,
        };
        console.log('datadatadatadatadata', data);
        this.api.post("editQuestionnaire", data).subscribe(result => {
            if (result.status == 200) {
                this.commonService.succ(result.message);
                this.router.navigate(['matching-portfolio/' + this.form.value.questionnaire_id]);
            }
            else {
                this.commonService.err(result.message);
            }
        }, error => {
            console.log({ error });
        });
    }
};
EditQuestionaireComponent.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["Api"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _api_comman_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
EditQuestionaireComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-questionaire',
        template: __webpack_require__(/*! raw-loader!./edit-questionaire.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-questionaire/edit-questionaire.component.html"),
        styles: [__webpack_require__(/*! ./edit-questionaire.component.scss */ "./src/app/edit-questionaire/edit-questionaire.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_3__["Api"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _api_comman_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
], EditQuestionaireComponent);



/***/ }),

/***/ "./src/app/edit-thematic/edit-thematic.component.scss":
/*!************************************************************!*\
  !*** ./src/app/edit-thematic/edit-thematic.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thematic-buttons {\n  background-color: #2c8fcd;\n  color: #ffffff;\n  border: 1px solid #2c8fcd;\n  transition: 0.5s all ease-in-out;\n  font-size: 14px;\n  font-weight: 400;\n  padding: 10px 15px;\n  margin: 0 0 0 20px;\n}\n\n.form-group .ng-invalid.ng-touched {\n  border-left: 3px solid red;\n}\n\n.my-class {\n  background-color: green;\n  color: #fff;\n}\n\n.ant-input {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  box-sizing: border-box;\n  margin: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  width: 100%;\n  height: 32px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d8dce6;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vYnVsb3VzL0Rlc2t0b3AvcHJvamVjdHMvOF81L2Fkdmlzb3J5L3NyYy9hcHAvZWRpdC10aGVtYXRpYy9lZGl0LXRoZW1hdGljLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0LXRoZW1hdGljL2VkaXQtdGhlbWF0aWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksMEJBQUE7QUNFSjs7QURDQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtBQ0VKOztBRENFO0VBQ0UsOE1BQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXRoZW1hdGljL2VkaXQtdGhlbWF0aWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhlbWF0aWMtYnV0dG9uc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM4ZmNkO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYzhmY2Q7XG4gICAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cbi5mb3JtLWdyb3VwIC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZWQ7XG59XG5cbi5teS1jbGFzc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xuICAgIGNvbG9yOiNmZmY7XG4gIH1cblxuICAuYW50LWlucHV0IHtcbiAgICBmb250LWZhbWlseTogXCJNb25vc3BhY2VkIE51bWJlclwiLFwiQ2hpbmVzZSBRdW90ZVwiLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJQaW5nRmFuZyBTQ1wiLFwiSGlyYWdpbm8gU2FucyBHQlwiLFwiTWljcm9zb2Z0IFlhSGVpXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gICAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDRweCAxMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNjUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkY2U2O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xufSIsIi50aGVtYXRpYy1idXR0b25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjOGZjZDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyYzhmY2Q7XG4gIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuXG4uZm9ybS1ncm91cCAubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZWQ7XG59XG5cbi5teS1jbGFzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmFudC1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZWQgTnVtYmVyXCIsIFwiQ2hpbmVzZSBRdW90ZVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/edit-thematic/edit-thematic.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/edit-thematic/edit-thematic.component.ts ***!
  \**********************************************************/
/*! exports provided: EditThematicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditThematicComponent", function() { return EditThematicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");
/* harmony import */ var _api_comman_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/comman.service */ "./src/api/comman.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");










let EditThematicComponent = class EditThematicComponent {
    constructor(location, fb, api, commonService, http, router, spinner, activatedRoute) {
        this.location = location;
        this.fb = fb;
        this.api = api;
        this.commonService = commonService;
        this.http = http;
        this.router = router;
        this.spinner = spinner;
        this.activatedRoute = activatedRoute;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url;
        this.modelList = [];
        this.selectedFile = null;
        this.uploadTimer = 0;
        this.uploadedImageUrl = "";
        this.orbisModelDetail = [];
        this.thematicDetail = [];
        this.assignedModelDetail = [];
        this.isShowSpinner = true;
        this.chartOptions = {
            series: [25, 15, 44, 55, 41, 17],
            chart: {
                width: "400px",
                type: "pie"
            },
            labels: [
                " ",
                "",
                "",
                "",
                "",
                ""
            ],
            theme: {
                monochrome: {
                    enabled: true
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        fill: {
                            colors: ['#000', '#66DA26', '#546E7A', '#E91E63', '#FF9800']
                        },
                        legend: {
                            show: false,
                            position: "bottom"
                        },
                    }
                }
            ]
        };
        this.thematicForm = this.fb.group({
            thematicId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            // image: ['', [Validators.required]],
            models: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        // console.log(this.thematicForm.invalid);
    }
    ngOnInit() {
        this.spinner.show();
        this.getorbisModel();
        this.getThematicDetail();
    }
    backClicked() {
        // localStorage.setItem("fromInvesting","true")
        this.location.back();
    }
    getThematicDetail() {
        this.activatedRoute.params.subscribe(params => {
            console.log(params['id']);
            this.api.get('thematicDetail/' + params['id']).subscribe(result => {
                console.log('resultresultresult', result);
                if (result.status == 200) {
                    if (result.data) {
                        this.thematicDetail = result.data[0];
                        if (this.thematicDetail.models[0]) {
                            this.assignedModelDetail = this.thematicDetail.models[0];
                        }
                        console.log('this.thematicDetailthis.thematicDetail', this.thematicDetail);
                        let newForm = {
                            "thematicId": this.thematicDetail._id,
                            "models": this.thematicDetail.modelId,
                            "name": this.thematicDetail.thematicName,
                            "description": this.thematicDetail.thematicDescription,
                        };
                        this.thematicForm.patchValue(newForm);
                    }
                }
                else {
                    this.commonService.err("Thematic not found");
                    this.router.navigate(['investing']);
                }
                this.isShowSpinner = false;
            }, error => {
                console.log({ error });
            });
        });
    }
    getorbisModel() {
        this.api.get('modelList').subscribe(result => {
            //console.log('resultresultresult', result)
            if (result.status == 200) {
                let filterResult = [];
                result.data.forEach(function (value, key) {
                    if (value.type == 2) {
                        filterResult.push(value);
                    }
                });
                this.modelList = filterResult;
            }
            this.isShowSpinner = false;
        }, error => {
            console.log({ error });
        });
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post(this.url + "uploadImage", fd, {
            reportProgress: true,
            observe: 'events'
        }).subscribe(event => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].UploadProgress) {
                this.uploadTimer = Math.round(event.loaded / event.total * 100);
                console.log("Upload Progress:" + this.uploadTimer + "%");
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].Response) {
                this.uploadedImageUrl = event.body['data'];
            }
            else {
                console.log("Uploading Completed");
            }
        }, error => {
            console.log({ error });
        });
    }
    addThematic() {
        //console.log("helo", this.thematicForm.value)
        if (this.thematicForm.invalid) {
            return;
        }
        // console.log('this.thematicFormthis.thematicForm', this.thematicForm)
        let data = {
            thematicId: this.thematicForm.value.thematicId,
            modelId: this.thematicForm.value.models,
            // thematicImage: this.uploadedImageUrl,
            thematicName: this.thematicForm.value.name,
            thematicDescription: this.thematicForm.value.description,
        };
        console.log('datadatadatadata', data);
        this.api.post("editThematic", data).subscribe(result => {
            if (result.status == 200) {
                this.commonService.succ(result.message);
                this.router.navigate(['investing']);
            }
            else {
                this.commonService.succ('Something went wrong');
            }
        }, error => {
            console.log({ error });
        });
    }
};
EditThematicComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_4__["Api"] },
    { type: _api_comman_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
EditThematicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-thematic',
        template: __webpack_require__(/*! raw-loader!./edit-thematic.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-thematic/edit-thematic.component.html"),
        styles: [__webpack_require__(/*! ./edit-thematic.component.scss */ "./src/app/edit-thematic/edit-thematic.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _api_api_service__WEBPACK_IMPORTED_MODULE_4__["Api"],
        _api_comman_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
], EditThematicComponent);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html"),
        styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/forgot-password/forgot-password.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/free-stock/free-stock.component.scss":
/*!******************************************************!*\
  !*** ./src/app/free-stock/free-stock.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyZWUtc3RvY2svZnJlZS1zdG9jay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/free-stock/free-stock.component.ts":
/*!****************************************************!*\
  !*** ./src/app/free-stock/free-stock.component.ts ***!
  \****************************************************/
/*! exports provided: FreeStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeStockComponent", function() { return FreeStockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");



let FreeStockComponent = class FreeStockComponent {
    constructor(api) {
        this.api = api;
        this.referList = [];
    }
    ngOnInit() {
        this.stockList();
    }
    stockList() {
        this.api.get('referList').subscribe(result => {
            if (result.status == 200) {
                this.referList = result.data;
            }
            else {
            }
        }, error => {
            console.log({ error });
        });
    }
};
FreeStockComponent.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["Api"] }
];
FreeStockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-free-stock',
        template: __webpack_require__(/*! raw-loader!./free-stock.component.html */ "./node_modules/raw-loader/index.js!./src/app/free-stock/free-stock.component.html"),
        styles: [__webpack_require__(/*! ./free-stock.component.scss */ "./src/app/free-stock/free-stock.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["Api"]])
], FreeStockComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/invest-cash/invest-cash.component.scss":
/*!********************************************************!*\
  !*** ./src/app/invest-cash/invest-cash.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVzdC1jYXNoL2ludmVzdC1jYXNoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/invest-cash/invest-cash.component.ts":
/*!******************************************************!*\
  !*** ./src/app/invest-cash/invest-cash.component.ts ***!
  \******************************************************/
/*! exports provided: InvestCashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestCashComponent", function() { return InvestCashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let InvestCashComponent = class InvestCashComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    backClicked() {
        // localStorage.setItem("fromInvesting","true")
        this.location.back();
    }
};
InvestCashComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
InvestCashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invest-cash',
        template: __webpack_require__(/*! raw-loader!./invest-cash.component.html */ "./node_modules/raw-loader/index.js!./src/app/invest-cash/invest-cash.component.html"),
        styles: [__webpack_require__(/*! ./invest-cash.component.scss */ "./src/app/invest-cash/invest-cash.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], InvestCashComponent);



/***/ }),

/***/ "./src/app/investing/investing.component.scss":
/*!****************************************************!*\
  !*** ./src/app/investing/investing.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVzdGluZy9pbnZlc3RpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/investing/investing.component.ts":
/*!**************************************************!*\
  !*** ./src/app/investing/investing.component.ts ***!
  \**************************************************/
/*! exports provided: InvestingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestingComponent", function() { return InvestingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");




let InvestingComponent = class InvestingComponent {
    constructor(api, spinner) {
        this.api = api;
        this.spinner = spinner;
        this.modelList = [];
        this.portfolioList = [];
        this.thematicList = [];
    }
    ngOnInit() {
        this.spinner.show();
        this.getModelList();
        this.getPortfolioList();
        this.getThematicList();
    }
    getModelList() {
        this.api.get('modelList').subscribe(result => {
            //console.log('resultresultresult', result)
            if (result.status == 200) {
                this.modelList = result.data;
            }
            this.spinner.hide();
        }, error => {
            console.log({ error });
        });
    }
    getPortfolioList() {
        this.api.get('portfolioList').subscribe(result => {
            //console.log('resultresultresult', result)
            if (result.status == 200) {
                this.portfolioList = result.data;
            }
            else {
            }
        }, error => {
            console.log({ error });
        });
    }
    getThematicList() {
        this.api.get('thematicList').subscribe(result => {
            if (result.status == 200) {
                this.thematicList = result.data;
                // console.log('thematicListthematicListthematicListthematicList', this.thematicList)
            }
        });
    }
    canActiveTabs(a, b) {
        console.log(a);
        console.log(b);
        $('.nav-link').removeClass('active');
        $('.tab-pane').removeClass('active');
        $('#' + a).addClass('active');
        $('#' + b).addClass('active');
        $('#' + b).removeClass('fade');
    }
};
InvestingComponent.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["Api"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
InvestingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-investing',
        template: __webpack_require__(/*! raw-loader!./investing.component.html */ "./node_modules/raw-loader/index.js!./src/app/investing/investing.component.html"),
        styles: [__webpack_require__(/*! ./investing.component.scss */ "./src/app/investing/investing.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["Api"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], InvestingComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");
/* harmony import */ var _api_comman_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/comman.service */ "./src/api/comman.service.ts");






let LoginComponent = class LoginComponent {
    constructor(fb, router, api, commonService) {
        this.fb = fb;
        this.router = router;
        this.api = api;
        this.commonService = commonService;
        this.loginSubmitCheck = false;
        this.type = 'password';
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ngOnInit() {
    }
    showPassword() {
        this.type = this.type == 'password' ? 'text' : 'password';
    }
    login() {
        this.loginSubmitCheck = true;
        if (this.loginForm.invalid) {
            return;
        }
        let data = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password,
        };
        this.api.post("adminLogin", data).subscribe(result => {
            if (result.status == 200) {
                this.commonService.succ(result.message);
                localStorage.setItem("mudanitoken", result.data.jwtToken);
                this.router.navigate(['summary']);
            }
            else {
                this.commonService.succ('Something went wrong');
            }
        }, error => {
            console.log({ error });
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_4__["Api"] },
    { type: _api_comman_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _api_api_service__WEBPACK_IMPORTED_MODULE_4__["Api"],
        _api_comman_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/managed-account-detail/managed-account-detail.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/managed-account-detail/managed-account-detail.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZWQtYWNjb3VudC1kZXRhaWwvbWFuYWdlZC1hY2NvdW50LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/managed-account-detail/managed-account-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/managed-account-detail/managed-account-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: ManagedAccountDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagedAccountDetailComponent", function() { return ManagedAccountDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apexcharts */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_2__);



let ManagedAccountDetailComponent = class ManagedAccountDetailComponent {
    constructor() { }
    ngOnInit() {
        var options = {
            series: [44, 55, 41, 17, 15],
            chart: {
                type: 'donut',
            },
            responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
        };
        var chart = new apexcharts__WEBPACK_IMPORTED_MODULE_2__(document.querySelector("#chart"), options);
        chart.render();
    }
};
ManagedAccountDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-managed-account-detail',
        template: __webpack_require__(/*! raw-loader!./managed-account-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/managed-account-detail/managed-account-detail.component.html"),
        styles: [__webpack_require__(/*! ./managed-account-detail.component.scss */ "./src/app/managed-account-detail/managed-account-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ManagedAccountDetailComponent);



/***/ }),

/***/ "./src/app/matching-portfolio/matching-portfolio.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/matching-portfolio/matching-portfolio.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.site-root .site-main {\n  min-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.b-questionnaire .questionnaire-content .tool-choice {\n  position: fixed;\n  width: 280px;\n}\n.ant-card {\n  font-size: 14px;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: #fff;\n  border-radius: 2px;\n  position: relative;\n  transition: all 0.3s;\n}\n.b-questionnaire .questionnaire-content .tool-choice .tool-title {\n  padding: 8px 24px;\n  font-weight: 700;\n  font-size: 16px;\n}\n.b-questionnaire .questionnaire-content .tool-choice .choices {\n  display: block;\n  padding: 14px 24px;\n  border-top: 1px solid #f0f2f5;\n  cursor: pointer;\n  color: #2196f3;\n}\n.b-questionnaire .questionnaire-content .tool-choice .anticon {\n  margin-right: 12px;\n}\n.anticon {\n  display: inline-block;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  line-height: 1;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.anticon:before {\n  display: block;\n}\n.b-questionnaire .questionnaire-content .edit-questions-content {\n  padding-left: 294px;\n  width: 100%;\n}\n.goal-question-section {\n  border-radius: 4px;\n  background-color: #fff;\n  padding: 16px 24px;\n  margin-bottom: 16px;\n}\n.ant-row {\n  position: relative;\n  margin-left: 0;\n  margin-right: 0;\n  height: auto;\n  zoom: 1;\n  display: block;\n  box-sizing: border-box;\n}\n.ant-form-item {\n  font-size: 14px;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  padding: 0;\n  list-style: none;\n  margin: 0 0 24px;\n  vertical-align: top;\n}\n.ant-form-item-label {\n  white-space: normal;\n  line-height: 29px;\n}\n.ant-form-item-label {\n  text-align: right;\n  vertical-align: middle;\n  line-height: 39.9999px;\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.ant-form-item-label label {\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-form-item label {\n  position: relative;\n}\n.goal-questionnaire-root .itemProps-label {\n  color: #1e1e1e;\n  font-weight: 700;\n  display: inline-block;\n  margin-bottom: 4px;\n}\n.ant-form-item-label label:after {\n  content: \":\";\n  margin: 0 8px 0 2px;\n  position: relative;\n  top: -0.5px;\n}\n.ant-form-item-required:before {\n  display: inline-block;\n  margin-right: 4px;\n  content: \"*\";\n  font-family: SimSun;\n  line-height: 1;\n  font-size: 14px;\n  color: #f5222d;\n}\n.goal-questionnaire-root .ant-form-item-control {\n  line-height: 34px;\n}\n.ant-form-item-control {\n  line-height: 39.9999px;\n  position: relative;\n  zoom: 1;\n}\n.ant-input {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  box-sizing: border-box;\n  margin: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  width: 100%;\n  height: 32px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d8dce6;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n.goal-question-section .ant-form-item {\n  padding-bottom: 18px;\n}\n.goal-questionnaire-root .ant-row {\n  width: 80%;\n}\ntextarea.ant-input {\n  max-width: 100%;\n  height: auto;\n  vertical-align: bottom;\n  transition: all 0.3s, height 0s;\n  min-height: 32px;\n}\n.goal-question-item .goal-question-title {\n  padding: 10px 0 12px;\n  border-bottom: 1px solid #f0f2f5;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.goal-question-item .ant-row {\n  display: flex;\n}\n.goal-question-item .goal-question-title .ant-form-item-label {\n  font-size: 16px;\n  color: #1e1e1e;\n  font-weight: 700;\n}\n.goal-question-item .ant-form-item-label {\n  min-width: 40px;\n}\n.goal-question-item .ant-row .ant-form-item-control-wrapper {\n  flex: 1 1;\n}\n.goal-question-item .goal-question-content .question-option-wrap {\n  display: flex;\n  justify-content: space-between;\n  padding: 4px 0;\n}\n.goal-question-item .remove-icon {\n  font-size: 16px;\n  font-weight: 700;\n  padding: 5px;\n  color: #888e98;\n}\n.anticon-close:before, .anticon-cross:before {\n  content: \"\";\n}\n.b-questionnaire .ant-form-inline .ant-form-item-with-help, .b-questionnaire .ant-form-item {\n  margin-bottom: 0;\n}\n.goal-question-item .goal-question-content .add-option {\n  padding: 10px 20px;\n}\n.goal-question-footer {\n  overflow: hidden;\n  border-top: 1px solid #f0f2f5;\n}\n.goal-question-footer .ant-row-flex {\n  margin: 16px 0;\n}\n.ant-row-flex {\n  display: flex;\n  flex-flow: row wrap;\n}\n.ant-row-flex-space-between {\n  justify-content: space-between;\n}\n.goal-question-footer .choice-icon {\n  display: inline-block;\n  vertical-align: middle;\n  width: 12px;\n  height: 12px;\n  background: #999;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 1px #999;\n  margin-left: 1px;\n}\n.goal-question-footer .footer-btn {\n  color: #888e98;\n  margin-left: 30px;\n}\n.ant-col-6.flex-colume.record {\n  margin-left: 20px;\n}\n.b-questionnaire .choice-record {\n  text-align: right;\n}\n.choice-record span {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  font-weight: 700;\n}\n.site-root .site-main {\n  min-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.ant-breadcrumb {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n.breadNav_nav__3bu0T .ant-breadcrumb-link {\n  color: rgba(30, 30, 30, 0.7);\n}\n.ant-breadcrumb-separator {\n  margin: 0 8px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-breadcrumb > span:last-child .ant-breadcrumb-separator {\n  display: none;\n}\n.ant-btn {\n  line-height: 1.5;\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  white-space: nowrap;\n  padding: 0 15px;\n  font-size: 14px;\n  border-radius: 4px;\n  height: 32px;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n       user-select: none;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  border: 1px solid #d8dce6;\n  margin-left: 20px;\n}\n.ant-btn-primary {\n  color: #fff;\n  background-color: #2196f3;\n  border-color: #2196f3;\n}\n.breadNav_nav__3bu0T {\n  border-bottom: 1px solid #f0f2f5;\n  line-height: 54px;\n  height: 54px;\n  padding: 0 27px;\n}\n.fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 9;\n}\n.b-questionnaire .questionnaire-content .title {\n  font-size: 16px;\n  display: flex;\n  justify-content: space-between;\n}\n.b-questionnaire .questionnaire-content .strategy-tip {\n  font-size: 14px;\n  color: #888e98;\n  font-weight: 400;\n}\n.my-20 {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.ant-spin-nested-loading {\n  position: relative;\n}\n.ant-spin-container {\n  position: relative;\n  transition: opacity 0.3s;\n  zoom: 1;\n}\n.ant-table {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  clear: both;\n}\n.ant-table-body {\n  transition: opacity 0.3s;\n}\n.ant-table table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: left;\n  border-radius: 4px 4px 0 0;\n}\n.ant-table .ant-table-thead {\n  white-space: nowrap;\n}\n.ant-table-thead > tr > th {\n  background: #fafafa;\n  transition: background 0.3s ease;\n  text-align: left;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-table .ant-table-thead > tr > th {\n  border-bottom: 0;\n  padding: 13px 8px;\n}\n.ant-table-thead > tr:first-child > th:first-child {\n  border-top-left-radius: 4px;\n}\n.ant-table-thead > tr:first-child > th:last-child {\n  border-top-right-radius: 4px;\n}\n.ant-table .ant-table-tbody > tr > td {\n  border-bottom: 0;\n  padding: 15px 8px;\n}\n.ant-table-tbody > tr, .ant-table-thead > tr {\n  transition: all 0.3s;\n}\n.ant-table .ant-table-tbody > tr:nth-child(2n) {\n  background: #f7f9fa;\n}\n.ant-table .ant-table-tbody .td-button {\n  padding: 6px 8px;\n}\n.link-button-root.link-button-default, .link-button-root.link-button-default:active, .link-button-root.link-button-default:hover {\n  color: #1890ff;\n}\n.link-button-root.link-button-danger, .link-button-root.link-button-danger:active, .link-button-root.link-button-danger:hover {\n  color: #f56c6c;\n}\n.link-button-root.link-button-divider:after {\n  content: \"\";\n  display: inline-block;\n  height: 10px;\n  width: 1px;\n  background: #d8dce6;\n  margin: 0 8px;\n}\n.unblockModal-content {\n  width: 400px;\n  height: 400px;\n  margin: 150px auto;\n}\n.unblockModal-body {\n  position: relative;\n  padding: 115px 40px;\n  background: #00496d33;\n}\n.matching-modal {\n  width: 380px;\n  margin-left: 530px;\n  margin-top: 67px;\n  background: white;\n  padding: 15px;\n  border-radius: 7px;\n}\n.text-width {\n  width: 48%;\n}\nbutton[type=button]:disabled {\n  background: #9c9c9c;\n  border-color: #9c9c9c;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2hpbmctcG9ydGZvbGlvL21hdGNoaW5nLXBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsIi9ob21lL21vYnVsb3VzL0Rlc2t0b3AvcHJvamVjdHMvOF81L2Fkdmlzb3J5L3NyYy9hcHAvbWF0Y2hpbmctcG9ydGZvbGlvL21hdGNoaW5nLXBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FERUo7QUNBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FER0o7QUNEQTtFQUNJLGVBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QURJSjtBQ0ZBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURLSjtBQ0hBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRE1KO0FDSkE7RUFDSSxrQkFBQTtBRE9KO0FDTEE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBRFFKO0FDTkE7RUFDSSxjQUFBO0FEU0o7QUNQQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBRFVKO0FDUkE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRFdKO0FDVEE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QURZSjtBQ1ZBO0VBQ0ksZUFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURhSjtBQ1hBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBRGNKO0FDWkE7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURlSjtBQ2JBO0VBQ0ksMEJBQUE7QURnQko7QUNkQTtFQUNJLGtCQUFBO0FEaUJKO0FDZkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FEa0JKO0FDaEJBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FEbUJKO0FDakJBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRG9CSjtBQ2xCQTtFQUNJLGlCQUFBO0FEcUJKO0FDbkJBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QURzQko7QUNwQkE7RUFDSSw4TUFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUR1Qko7QUNyQkE7RUFDSSxvQkFBQTtBRHdCSjtBQ3RCQTtFQUNJLFVBQUE7QUR5Qko7QUN2QkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBRDBCSjtBQ3hCQTtFQUNJLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FEMkJKO0FDekJBO0VBQ0ksYUFBQTtBRDRCSjtBQzFCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUQ2Qko7QUMzQkE7RUFDSSxlQUFBO0FEOEJKO0FDNUJBO0VBQ0ksU0FBQTtBRCtCSjtBQzdCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QURnQ0o7QUM5QkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBRGlDSjtBQy9CQTtFQUNJLFlBQUE7QURrQ0o7QUNoQ0E7RUFDSSxnQkFBQTtBRG1DSjtBQ2pDQTtFQUNJLGtCQUFBO0FEb0NKO0FDbENBO0VBQ0ksZ0JBQUE7RUFDQSw2QkFBQTtBRHFDSjtBQ25DQTtFQUNJLGNBQUE7QURzQ0o7QUNwQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUR1Q0o7QUNyQ0E7RUFDSSw4QkFBQTtBRHdDSjtBQ3RDQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUR5Q0o7QUN2Q0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUQwQ0o7QUN4Q0E7RUFDSSxpQkFBQTtBRDJDSjtBQ3pDQTtFQUNJLGlCQUFBO0FENENKO0FDekNBO0VBQ0ksOE1BQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRDRDSjtBQ3pDQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUQ0Q0o7QUMxQ0E7RUFDSSw4TUFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUQ2Q0o7QUMzQ0E7RUFDSSw0QkFBQTtBRDhDSjtBQzVDQTtFQUNJLGFBQUE7RUFDQSwwQkFBQTtBRCtDSjtBQzdDQTtFQUNJLGFBQUE7QURnREo7QUM5Q0E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtPQUFBLGlCQUFBO0VBQ0EseURBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FEaURKO0FDL0NBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QURrREo7QUNoREE7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QURtREo7QUNqREE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QURvREo7QUNqREE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FEb0RKO0FDbERBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRHFESjtBQ25EQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QURzREo7QUNwREE7RUFDSSxrQkFBQTtBRHVESjtBQ3JEQTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxPQUFBO0FEd0RKO0FDdERBO0VBQ0ksOE1BQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBRHlESjtBQ3ZEQTtFQUNJLHdCQUFBO0FEMERKO0FDeERBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FEMkRKO0FDekRBO0VBQ0ksbUJBQUE7QUQ0REo7QUMxREE7RUFDSSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUQ2REo7QUMzREE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FEOERKO0FDNURBO0VBQ0ksMkJBQUE7QUQrREo7QUM3REE7RUFDSSw0QkFBQTtBRGdFSjtBQzlEQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QURpRUo7QUMvREE7RUFDSSxvQkFBQTtBRGtFSjtBQ2hFQTtFQUNJLG1CQUFBO0FEbUVKO0FDakVBO0VBQ0ksZ0JBQUE7QURvRUo7QUNsRUE7RUFDSSxjQUFBO0FEcUVKO0FDbkVBO0VBQ0ksY0FBQTtBRHNFSjtBQ3BFQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FEdUVKO0FDcEVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBRHVFSjtBQ3JFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBRHdFSjtBQ3JFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUR3RUo7QUN0RUE7RUFDSSxVQUFBO0FEeUVKO0FDdEVBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FEeUVKIiwiZmlsZSI6InNyYy9hcHAvbWF0Y2hpbmctcG9ydGZvbGlvL21hdGNoaW5nLXBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5zaXRlLXJvb3QgLnNpdGUtbWFpbiB7XG4gIG1pbi13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAyNHB4O1xufVxuXG4uYi1xdWVzdGlvbm5haXJlIC5xdWVzdGlvbm5haXJlLWNvbnRlbnQgLnRvb2wtY2hvaWNlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMjgwcHg7XG59XG5cbi5hbnQtY2FyZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcInRudW1cIjtcbiAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmItcXVlc3Rpb25uYWlyZSAucXVlc3Rpb25uYWlyZS1jb250ZW50IC50b29sLWNob2ljZSAudG9vbC10aXRsZSB7XG4gIHBhZGRpbmc6IDhweCAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5iLXF1ZXN0aW9ubmFpcmUgLnF1ZXN0aW9ubmFpcmUtY29udGVudCAudG9vbC1jaG9pY2UgLmNob2ljZXMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTRweCAyNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjJmNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzIxOTZmMztcbn1cblxuLmItcXVlc3Rpb25uYWlyZSAucXVlc3Rpb25uYWlyZS1jb250ZW50IC50b29sLWNob2ljZSAuYW50aWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmFudGljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5hbnRpY29uOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYi1xdWVzdGlvbm5haXJlIC5xdWVzdGlvbm5haXJlLWNvbnRlbnQgLmVkaXQtcXVlc3Rpb25zLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDI5NHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmdvYWwtcXVlc3Rpb24tc2VjdGlvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uYW50LXJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB6b29tOiAxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmFudC1mb3JtLWl0ZW0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwIDAgMjRweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjlweDtcbn1cblxuLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6IDM5Ljk5OTlweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYW50LWZvcm0taXRlbS1sYWJlbCBsYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xufVxuXG4uYW50LWZvcm0taXRlbSBsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmdvYWwtcXVlc3Rpb25uYWlyZS1yb290IC5pdGVtUHJvcHMtbGFiZWwge1xuICBjb2xvcjogIzFlMWUxZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5hbnQtZm9ybS1pdGVtLWxhYmVsIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCI6XCI7XG4gIG1hcmdpbjogMCA4cHggMCAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMC41cHg7XG59XG5cbi5hbnQtZm9ybS1pdGVtLXJlcXVpcmVkOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBmb250LWZhbWlseTogU2ltU3VuO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2Y1MjIyZDtcbn1cblxuLmdvYWwtcXVlc3Rpb25uYWlyZS1yb290IC5hbnQtZm9ybS1pdGVtLWNvbnRyb2wge1xuICBsaW5lLWhlaWdodDogMzRweDtcbn1cblxuLmFudC1mb3JtLWl0ZW0tY29udHJvbCB7XG4gIGxpbmUtaGVpZ2h0OiAzOS45OTk5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgem9vbTogMTtcbn1cblxuLmFudC1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZWQgTnVtYmVyXCIsIFwiQ2hpbmVzZSBRdW90ZVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmdvYWwtcXVlc3Rpb24tc2VjdGlvbiAuYW50LWZvcm0taXRlbSB7XG4gIHBhZGRpbmctYm90dG9tOiAxOHB4O1xufVxuXG4uZ29hbC1xdWVzdGlvbm5haXJlLXJvb3QgLmFudC1yb3cge1xuICB3aWR0aDogODAlO1xufVxuXG50ZXh0YXJlYS5hbnQtaW5wdXQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MsIGhlaWdodCAwcztcbiAgbWluLWhlaWdodDogMzJweDtcbn1cblxuLmdvYWwtcXVlc3Rpb24taXRlbSAuZ29hbC1xdWVzdGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHggMCAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjJmNTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZ29hbC1xdWVzdGlvbi1pdGVtIC5hbnQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmdvYWwtcXVlc3Rpb24taXRlbSAuZ29hbC1xdWVzdGlvbi10aXRsZSAuYW50LWZvcm0taXRlbS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMxZTFlMWU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xuICBtaW4td2lkdGg6IDQwcHg7XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmFudC1yb3cgLmFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyIHtcbiAgZmxleDogMSAxO1xufVxuXG4uZ29hbC1xdWVzdGlvbi1pdGVtIC5nb2FsLXF1ZXN0aW9uLWNvbnRlbnQgLnF1ZXN0aW9uLW9wdGlvbi13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA0cHggMDtcbn1cblxuLmdvYWwtcXVlc3Rpb24taXRlbSAucmVtb3ZlLWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICM4ODhlOTg7XG59XG5cbi5hbnRpY29uLWNsb3NlOmJlZm9yZSwgLmFudGljb24tY3Jvc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCLumLNcIjtcbn1cblxuLmItcXVlc3Rpb25uYWlyZSAuYW50LWZvcm0taW5saW5lIC5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscCwgLmItcXVlc3Rpb25uYWlyZSAuYW50LWZvcm0taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmdvYWwtcXVlc3Rpb24tY29udGVudCAuYWRkLW9wdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLmdvYWwtcXVlc3Rpb24tZm9vdGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYyZjU7XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWZvb3RlciAuYW50LXJvdy1mbGV4IHtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbi5hbnQtcm93LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuXG4uYW50LXJvdy1mbGV4LXNwYWNlLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWZvb3RlciAuY2hvaWNlLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQ6ICM5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICM5OTk7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG59XG5cbi5nb2FsLXF1ZXN0aW9uLWZvb3RlciAuZm9vdGVyLWJ0biB7XG4gIGNvbG9yOiAjODg4ZTk4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmFudC1jb2wtNi5mbGV4LWNvbHVtZS5yZWNvcmQge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmItcXVlc3Rpb25uYWlyZSAuY2hvaWNlLXJlY29yZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2hvaWNlLXJlY29yZCBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlZCBOdW1iZXJcIiwgXCJDaGluZXNlIFF1b3RlXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiUGluZ0ZhbmcgU0NcIiwgXCJIaXJhZ2lubyBTYW5zIEdCXCIsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc2l0ZS1yb290IC5zaXRlLW1haW4ge1xuICBtaW4td2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMjRweDtcbn1cblxuLmFudC1icmVhZGNydW1iIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlZCBOdW1iZXJcIiwgXCJDaGluZXNlIFF1b3RlXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiUGluZ0ZhbmcgU0NcIiwgXCJIaXJhZ2lubyBTYW5zIEdCXCIsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcInRudW1cIjtcbiAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5icmVhZE5hdl9uYXZfXzNidTBUIC5hbnQtYnJlYWRjcnVtYi1saW5rIHtcbiAgY29sb3I6IHJnYmEoMzAsIDMwLCAzMCwgMC43KTtcbn1cblxuLmFudC1icmVhZGNydW1iLXNlcGFyYXRvciB7XG4gIG1hcmdpbjogMCA4cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xufVxuXG4uYW50LWJyZWFkY3J1bWIgPiBzcGFuOmxhc3QtY2hpbGQgLmFudC1icmVhZGNydW1iLXNlcGFyYXRvciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hbnQtYnRuIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMzJweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkY2U2O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmFudC1idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICBib3JkZXItY29sb3I6ICMyMTk2ZjM7XG59XG5cbi5icmVhZE5hdl9uYXZfXzNidTBUIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYyZjU7XG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xuICBoZWlnaHQ6IDU0cHg7XG4gIHBhZGRpbmc6IDAgMjdweDtcbn1cblxuLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTtcbn1cblxuLmItcXVlc3Rpb25uYWlyZSAucXVlc3Rpb25uYWlyZS1jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYi1xdWVzdGlvbm5haXJlIC5xdWVzdGlvbm5haXJlLWNvbnRlbnQgLnN0cmF0ZWd5LXRpcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4ODhlOTg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5teS0yMCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5hbnQtc3Bpbi1uZXN0ZWQtbG9hZGluZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFudC1zcGluLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICB6b29tOiAxO1xufVxuXG4uYW50LXRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlZCBOdW1iZXJcIiwgXCJDaGluZXNlIFF1b3RlXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiUGluZ0ZhbmcgU0NcIiwgXCJIaXJhZ2lubyBTYW5zIEdCXCIsIFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xuICBmb250LXZhcmlhbnQ6IHRhYnVsYXItbnVtcztcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmFudC10YWJsZS1ib2R5IHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xufVxuXG4uYW50LXRhYmxlIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbn1cblxuLmFudC10YWJsZSAuYW50LXRhYmxlLXRoZWFkIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4O1xufVxuXG4uYW50LXRhYmxlIC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgcGFkZGluZzogMTNweCA4cHg7XG59XG5cbi5hbnQtdGFibGUtdGhlYWQgPiB0cjpmaXJzdC1jaGlsZCA+IHRoOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xufVxuXG4uYW50LXRhYmxlLXRoZWFkID4gdHI6Zmlyc3QtY2hpbGQgPiB0aDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbn1cblxuLmFudC10YWJsZSAuYW50LXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDE1cHggOHB4O1xufVxuXG4uYW50LXRhYmxlLXRib2R5ID4gdHIsIC5hbnQtdGFibGUtdGhlYWQgPiB0ciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4uYW50LXRhYmxlIC5hbnQtdGFibGUtdGJvZHkgPiB0cjpudGgtY2hpbGQoMm4pIHtcbiAgYmFja2dyb3VuZDogI2Y3ZjlmYTtcbn1cblxuLmFudC10YWJsZSAuYW50LXRhYmxlLXRib2R5IC50ZC1idXR0b24ge1xuICBwYWRkaW5nOiA2cHggOHB4O1xufVxuXG4ubGluay1idXR0b24tcm9vdC5saW5rLWJ1dHRvbi1kZWZhdWx0LCAubGluay1idXR0b24tcm9vdC5saW5rLWJ1dHRvbi1kZWZhdWx0OmFjdGl2ZSwgLmxpbmstYnV0dG9uLXJvb3QubGluay1idXR0b24tZGVmYXVsdDpob3ZlciB7XG4gIGNvbG9yOiAjMTg5MGZmO1xufVxuXG4ubGluay1idXR0b24tcm9vdC5saW5rLWJ1dHRvbi1kYW5nZXIsIC5saW5rLWJ1dHRvbi1yb290LmxpbmstYnV0dG9uLWRhbmdlcjphY3RpdmUsIC5saW5rLWJ1dHRvbi1yb290LmxpbmstYnV0dG9uLWRhbmdlcjpob3ZlciB7XG4gIGNvbG9yOiAjZjU2YzZjO1xufVxuXG4ubGluay1idXR0b24tcm9vdC5saW5rLWJ1dHRvbi1kaXZpZGVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQ6ICNkOGRjZTY7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi51bmJsb2NrTW9kYWwtY29udGVudCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiAxNTBweCBhdXRvO1xufVxuXG4udW5ibG9ja01vZGFsLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDExNXB4IDQwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDQ5NmQzMztcbn1cblxuLm1hdGNoaW5nLW1vZGFsIHtcbiAgd2lkdGg6IDM4MHB4O1xuICBtYXJnaW4tbGVmdDogNTMwcHg7XG4gIG1hcmdpbi10b3A6IDY3cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi50ZXh0LXdpZHRoIHtcbiAgd2lkdGg6IDQ4JTtcbn1cblxuYnV0dG9uW3R5cGU9YnV0dG9uXTpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICM5YzljOWM7XG4gIGJvcmRlci1jb2xvcjogIzljOWM5YztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn0iLCIuc2l0ZS1yb290IC5zaXRlLW1haW4ge1xuICAgIG1pbi13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbn1cbi5iLXF1ZXN0aW9ubmFpcmUgLnF1ZXN0aW9ubmFpcmUtY29udGVudCAudG9vbC1jaG9pY2Uge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMjgwcHg7XG59XG4uYW50LWNhcmQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xuICAgIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjY1KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG59XG4uYi1xdWVzdGlvbm5haXJlIC5xdWVzdGlvbm5haXJlLWNvbnRlbnQgLnRvb2wtY2hvaWNlIC50b29sLXRpdGxlIHtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5iLXF1ZXN0aW9ubmFpcmUgLnF1ZXN0aW9ubmFpcmUtY29udGVudCAudG9vbC1jaG9pY2UgLmNob2ljZXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDE0cHggMjRweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjJmNTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICMyMTk2ZjM7XG59XG4uYi1xdWVzdGlvbm5haXJlIC5xdWVzdGlvbm5haXJlLWNvbnRlbnQgLnRvb2wtY2hvaWNlIC5hbnRpY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4uYW50aWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cbi5hbnRpY29uOmJlZm9yZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uYi1xdWVzdGlvbm5haXJlIC5xdWVzdGlvbm5haXJlLWNvbnRlbnQgLmVkaXQtcXVlc3Rpb25zLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMjk0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZ29hbC1xdWVzdGlvbi1zZWN0aW9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5hbnQtcm93IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB6b29tOiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uYW50LWZvcm0taXRlbSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gICAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNjUpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMCAwIDI0cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5hbnQtZm9ybS1pdGVtLWxhYmVsIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbGluZS1oZWlnaHQ6IDM5Ljk5OTlweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmFudC1mb3JtLWl0ZW0tbGFiZWwgbGFiZWwge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44NSk7XG59XG4uYW50LWZvcm0taXRlbSBsYWJlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmdvYWwtcXVlc3Rpb25uYWlyZS1yb290IC5pdGVtUHJvcHMtbGFiZWwge1xuICAgIGNvbG9yOiAjMWUxZTFlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5hbnQtZm9ybS1pdGVtLWxhYmVsIGxhYmVsOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIjpcIjtcbiAgICBtYXJnaW46IDAgOHB4IDAgMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0uNXB4O1xufVxuLmFudC1mb3JtLWl0ZW0tcmVxdWlyZWQ6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgY29udGVudDogXCIqXCI7XG4gICAgZm9udC1mYW1pbHk6IFNpbVN1bjtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNmNTIyMmQ7XG59XG4uZ29hbC1xdWVzdGlvbm5haXJlLXJvb3QgLmFudC1mb3JtLWl0ZW0tY29udHJvbCB7XG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XG59XG4uYW50LWZvcm0taXRlbS1jb250cm9sIHtcbiAgICBsaW5lLWhlaWdodDogMzkuOTk5OXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6b29tOiAxO1xufVxuLmFudC1pbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlZCBOdW1iZXJcIixcIkNoaW5lc2UgUXVvdGVcIiwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiUGluZ0ZhbmcgU0NcIixcIkhpcmFnaW5vIFNhbnMgR0JcIixcIk1pY3Jvc29mdCBZYUhlaVwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xuICAgIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA0cHggMTFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjY1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbn1cbi5nb2FsLXF1ZXN0aW9uLXNlY3Rpb24gLmFudC1mb3JtLWl0ZW0ge1xuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xufVxuLmdvYWwtcXVlc3Rpb25uYWlyZS1yb290IC5hbnQtcm93IHtcbiAgICB3aWR0aDogODAlO1xufVxudGV4dGFyZWEuYW50LWlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyxoZWlnaHQgMHM7XG4gICAgbWluLWhlaWdodDogMzJweDtcbn1cbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmdvYWwtcXVlc3Rpb24tdGl0bGUge1xuICAgIHBhZGRpbmc6IDEwcHggMCAxMnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMmY1O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmFudC1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uZ29hbC1xdWVzdGlvbi1pdGVtIC5nb2FsLXF1ZXN0aW9uLXRpdGxlIC5hbnQtZm9ybS1pdGVtLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMxZTFlMWU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xuICAgIG1pbi13aWR0aDogNDBweDtcbn1cbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLmFudC1yb3cgLmFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyIHtcbiAgICBmbGV4OiAxIDE7XG59XG4uZ29hbC1xdWVzdGlvbi1pdGVtIC5nb2FsLXF1ZXN0aW9uLWNvbnRlbnQgLnF1ZXN0aW9uLW9wdGlvbi13cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiA0cHggMDtcbn1cbi5nb2FsLXF1ZXN0aW9uLWl0ZW0gLnJlbW92ZS1pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6ICM4ODhlOTg7XG59XG4uYW50aWNvbi1jbG9zZTpiZWZvcmUsIC5hbnRpY29uLWNyb3NzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU2MzNcIjtcbn1cbi5iLXF1ZXN0aW9ubmFpcmUgLmFudC1mb3JtLWlubGluZSAuYW50LWZvcm0taXRlbS13aXRoLWhlbHAsIC5iLXF1ZXN0aW9ubmFpcmUgLmFudC1mb3JtLWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZ29hbC1xdWVzdGlvbi1pdGVtIC5nb2FsLXF1ZXN0aW9uLWNvbnRlbnQgLmFkZC1vcHRpb24ge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5nb2FsLXF1ZXN0aW9uLWZvb3RlciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjJmNTtcbn1cbi5nb2FsLXF1ZXN0aW9uLWZvb3RlciAuYW50LXJvdy1mbGV4IHtcbiAgICBtYXJnaW46IDE2cHggMDtcbn1cbi5hbnQtcm93LWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbn1cbi5hbnQtcm93LWZsZXgtc3BhY2UtYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmdvYWwtcXVlc3Rpb24tZm9vdGVyIC5jaG9pY2UtaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICM5OTk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICM5OTk7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbn1cbi5nb2FsLXF1ZXN0aW9uLWZvb3RlciAuZm9vdGVyLWJ0biB7XG4gICAgY29sb3I6ICM4ODhlOTg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG4uYW50LWNvbC02LmZsZXgtY29sdW1lLnJlY29yZHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5iLXF1ZXN0aW9ubmFpcmUgLmNob2ljZS1yZWNvcmQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2hvaWNlLXJlY29yZCBzcGFuIHtcbiAgICBmb250LWZhbWlseTogXCJNb25vc3BhY2VkIE51bWJlclwiLFwiQ2hpbmVzZSBRdW90ZVwiLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJQaW5nRmFuZyBTQ1wiLFwiSGlyYWdpbm8gU2FucyBHQlwiLFwiTWljcm9zb2Z0IFlhSGVpXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zaXRlLXJvb3QgLnNpdGUtbWFpbiB7XG4gICAgbWluLXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMCAyNHB4O1xufVxuLmFudC1icmVhZGNydW1iIHtcbiAgICBmb250LWZhbWlseTogXCJNb25vc3BhY2VkIE51bWJlclwiLFwiQ2hpbmVzZSBRdW90ZVwiLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJQaW5nRmFuZyBTQ1wiLFwiSGlyYWdpbm8gU2FucyBHQlwiLFwiTWljcm9zb2Z0IFlhSGVpXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gICAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNjUpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNDUpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5icmVhZE5hdl9uYXZfXzNidTBUIC5hbnQtYnJlYWRjcnVtYi1saW5rIHtcbiAgICBjb2xvcjogcmdiYSgzMCwzMCwzMCwuNyk7XG59XG4uYW50LWJyZWFkY3J1bWItc2VwYXJhdG9yIHtcbiAgICBtYXJnaW46IDAgOHB4O1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC40NSk7XG59XG4uYW50LWJyZWFkY3J1bWI+c3BhbjpsYXN0LWNoaWxkIC5hbnQtYnJlYWRjcnVtYi1zZXBhcmF0b3Ige1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uYW50LWJ0biB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBjdWJpYy1iZXppZXIoLjY0NSwuMDQ1LC4zNTUsMSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42NSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkY2U2O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmFudC1idG4tcHJpbWFyeSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgICBib3JkZXItY29sb3I6ICMyMTk2ZjM7XG59XG4uYnJlYWROYXZfbmF2X18zYnUwVCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYyZjU7XG4gICAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gICAgaGVpZ2h0OiA1NHB4O1xuICAgIHBhZGRpbmc6IDAgMjdweDtcbn1cbi5maXhlZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk7XG59XG5cbi5iLXF1ZXN0aW9ubmFpcmUgLnF1ZXN0aW9ubmFpcmUtY29udGVudCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5iLXF1ZXN0aW9ubmFpcmUgLnF1ZXN0aW9ubmFpcmUtY29udGVudCAuc3RyYXRlZ3ktdGlwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM4ODhlOTg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5teS0yMCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmFudC1zcGluLW5lc3RlZC1sb2FkaW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYW50LXNwaW4tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XG4gICAgem9vbTogMTtcbn1cbi5hbnQtdGFibGUge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZWQgTnVtYmVyXCIsXCJDaGluZXNlIFF1b3RlXCIsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIlBpbmdGYW5nIFNDXCIsXCJIaXJhZ2lubyBTYW5zIEdCXCIsXCJNaWNyb3NvZnQgWWFIZWlcIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gICAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNjUpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY2xlYXI6IGJvdGg7XG59XG4uYW50LXRhYmxlLWJvZHkge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xufVxuLmFudC10YWJsZSB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xufVxuLmFudC10YWJsZSAuYW50LXRhYmxlLXRoZWFkIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmFudC10YWJsZS10aGVhZD50cj50aCB7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcyBlYXNlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjg1KTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4O1xufVxuLmFudC10YWJsZSAuYW50LXRhYmxlLXRoZWFkPnRyPnRoIHtcbiAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDEzcHggOHB4O1xufVxuLmFudC10YWJsZS10aGVhZD50cjpmaXJzdC1jaGlsZD50aDpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xufVxuLmFudC10YWJsZS10aGVhZD50cjpmaXJzdC1jaGlsZD50aDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xufVxuLmFudC10YWJsZSAuYW50LXRhYmxlLXRib2R5PnRyPnRkIHtcbiAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDE1cHggOHB4O1xufVxuLmFudC10YWJsZS10Ym9keT50ciwgLmFudC10YWJsZS10aGVhZD50ciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbn1cbi5hbnQtdGFibGUgLmFudC10YWJsZS10Ym9keT50cjpudGgtY2hpbGQoMm4pIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOWZhO1xufVxuLmFudC10YWJsZSAuYW50LXRhYmxlLXRib2R5IC50ZC1idXR0b24ge1xuICAgIHBhZGRpbmc6IDZweCA4cHg7XG59XG4ubGluay1idXR0b24tcm9vdC5saW5rLWJ1dHRvbi1kZWZhdWx0LCAubGluay1idXR0b24tcm9vdC5saW5rLWJ1dHRvbi1kZWZhdWx0OmFjdGl2ZSwgLmxpbmstYnV0dG9uLXJvb3QubGluay1idXR0b24tZGVmYXVsdDpob3ZlciB7XG4gICAgY29sb3I6ICMxODkwZmY7XG59XG4ubGluay1idXR0b24tcm9vdC5saW5rLWJ1dHRvbi1kYW5nZXIsIC5saW5rLWJ1dHRvbi1yb290LmxpbmstYnV0dG9uLWRhbmdlcjphY3RpdmUsIC5saW5rLWJ1dHRvbi1yb290LmxpbmstYnV0dG9uLWRhbmdlcjpob3ZlciB7XG4gICAgY29sb3I6ICNmNTZjNmM7XG59XG4ubGluay1idXR0b24tcm9vdC5saW5rLWJ1dHRvbi1kaXZpZGVyOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjZDhkY2U2O1xuICAgIG1hcmdpbjogMCA4cHg7XG59XG5cbi51bmJsb2NrTW9kYWwtY29udGVudHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBtYXJnaW46IDE1MHB4IGF1dG87XG59XG4udW5ibG9ja01vZGFsLWJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMTVweCA0MHB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDQ5NmQzMztcbn1cblxuLm1hdGNoaW5nLW1vZGFse1xuICAgIHdpZHRoOiAzODBweDtcbiAgICBtYXJnaW4tbGVmdDogNTMwcHg7XG4gICAgbWFyZ2luLXRvcDogNjdweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbi50ZXh0LXdpZHRoe1xuICAgIHdpZHRoOiA0OCU7XG59XG5cbmJ1dHRvblt0eXBlPVwiYnV0dG9uXCJdOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjOWM5YzljO1xuICAgIGJvcmRlci1jb2xvcjogIzljOWM5YztcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/matching-portfolio/matching-portfolio.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/matching-portfolio/matching-portfolio.component.ts ***!
  \********************************************************************/
/*! exports provided: MatchingPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchingPortfolioComponent", function() { return MatchingPortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");
/* harmony import */ var _api_comman_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/comman.service */ "./src/api/comman.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");








let MatchingPortfolioComponent = class MatchingPortfolioComponent {
    constructor(fb, location, api, activatedRoute, commonService, router, spinner) {
        this.fb = fb;
        this.location = location;
        this.api = api;
        this.activatedRoute = activatedRoute;
        this.commonService = commonService;
        this.router = router;
        this.spinner = spinner;
        this.questionDetail = [];
        this.modelDetail = [];
        this.orbisModelDetail = [];
        this.portfolioList = [];
    }
    ngOnInit() {
        // $(document).ready(function () {
        //   alert("sssssssss");
        // })
        this.spinner.show();
        this.getMatchedPortfolio();
        this.getorbisModel();
        this.getPortfolioList();
        this.form = this.fb.group({
            "startrange": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'endrange': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'models': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    getMatchedPortfolio() {
        this.activatedRoute.params.subscribe(params => {
            console.log(params['id']);
            this.api.get('getQuestionairePortfolio/' + params['id']).subscribe(result => {
                console.log('xxx', result);
                if (result.status == 200) {
                    if (result.data) {
                        this.questionDetail = result.data;
                        this.modelDetail = this.questionDetail;
                        console.log('this.modelDetail', this.modelDetail);
                    }
                    else {
                        this.commonService.err("Questionaire not found.");
                        this.router.navigate(['questionnaire']);
                    }
                }
            }, error => {
                console.log({ error });
            });
        });
    }
    getPortfolioList() {
        this.api.get('portfolioList').subscribe(result => {
            //console.log('resultresultresult', result)
            if (result.status == 200) {
                this.portfolioList = result.data;
            }
            this.spinner.hide();
        }, error => {
            console.log({ error });
        });
    }
    getorbisModel() {
        this.activatedRoute.params.subscribe(params => {
            this.api.get('getOrbisModels').subscribe(result => {
                console.log('uuuuuuuuuuuuuuuuuuuuu', result);
                if (result.status == 200) {
                    console.log('resmodels', result.data);
                    let filterResult = [];
                    // var filterResult = result.data.find(obj => {
                    //   return obj.title != " Thematic - Crypto & Blockchain "
                    // })
                    result.data.forEach(function (value, key) {
                        if (value.title != "Thematic - Crypto & Blockchain") {
                            filterResult.push(value);
                        }
                    });
                    this.orbisModelDetail = filterResult;
                }
            }, error => {
                console.log({ error });
            });
        });
    }
    numberOnly(event) {
        console.log("sssssssss");
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    closePops() {
        $('#refer').modal('hide');
    }
    saveData() {
        console.log('this.form.value', this.form.value);
        // return true;
        const questionnaire_id = this.activatedRoute.params.subscribe(params => {
            var result = this.orbisModelDetail.find(obj => {
                return obj.id == this.form.value.models;
            });
            const reqData = {
                questionnaire_id: params['id'],
                portfolioId: this.form.value.models,
                minScore: this.form.value.startrange,
                maxScore: this.form.value.endrange
            };
            console.log('newDatanewDatanewDatanewData', reqData);
            this.api.post("assignedPortfolio", reqData).subscribe(result => {
                if (result.status == 200) {
                    this.commonService.succ(result.message);
                    this.router.navigate(['matching-portfolio/' + params['id']]);
                    this.getMatchedPortfolio();
                    $('#refer').modal('hide');
                }
                else {
                    this.commonService.err(result.message);
                }
            }, error => {
                console.log({ error });
            });
        });
    }
    deletePortfolio(data) {
        // $('#confirmDylog').modal('show');
        this.activatedRoute.params.subscribe(params => {
            const newData = {
                questionnaire_id: params['id'],
                quesPortfolioId: data._id
            };
            this.api.post("deletePortfolio", newData).subscribe(result => {
                if (result.status == 200) {
                    this.commonService.succ(result.message);
                    this.router.navigate(['matching-portfolio/' + params['id']]);
                    this.getMatchedPortfolio();
                    console.log('newData', this.questionDetail);
                }
                else {
                    this.commonService.err(result.message);
                }
            }, error => {
                console.log({ error });
            });
        });
    }
};
MatchingPortfolioComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["Api"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _api_comman_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
];
MatchingPortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-matching-portfolio',
        template: __webpack_require__(/*! raw-loader!./matching-portfolio.component.html */ "./node_modules/raw-loader/index.js!./src/app/matching-portfolio/matching-portfolio.component.html"),
        styles: [__webpack_require__(/*! ./matching-portfolio.component.scss */ "./src/app/matching-portfolio/matching-portfolio.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _api_api_service__WEBPACK_IMPORTED_MODULE_3__["Api"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _api_comman_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
], MatchingPortfolioComponent);



/***/ }),

/***/ "./src/app/model-detail/model-detail.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/model-detail/model-detail.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ant-input {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  box-sizing: border-box;\n  margin: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  width: 100%;\n  height: 32px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d8dce6;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n\n.thematic-buttons {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  box-sizing: border-box;\n  margin: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  width: 100%;\n  height: 32px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d8dce6;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n\ninput.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n\ntextarea.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n\nselect.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n\nbutton[type=button]:disabled {\n  background: #9c9c9c;\n  border-color: #9c9c9c;\n  cursor: not-allowed;\n}\n\n.unblockModal-content {\n  width: 400px;\n  height: 400px;\n  margin: 150px auto;\n}\n\n.unblockModal-body {\n  position: relative;\n  padding: 115px 40px;\n  background: #00496d33;\n}\n\n.matching-modal {\n  width: 380px;\n  margin-left: 530px;\n  margin-top: 67px;\n  background: white;\n  padding: 15px;\n  border-radius: 7px;\n}\n\n.text-width {\n  width: 48%;\n}\n\n.ant-btn {\n  line-height: 1.5;\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  white-space: nowrap;\n  padding: 0 15px;\n  font-size: 14px;\n  border-radius: 4px;\n  height: 32px;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n       user-select: none;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  border: 1px solid #d8dce6;\n  margin-left: 20px;\n}\n\n.ant-btn-primary {\n  color: #fff;\n  background-color: #2196f3;\n  border-color: #2196f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vYnVsb3VzL0Rlc2t0b3AvcHJvamVjdHMvOF81L2Fkdmlzb3J5L3NyYy9hcHAvbW9kZWwtZGV0YWlsL21vZGVsLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kZWwtZGV0YWlsL21vZGVsLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhNQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksOE1BQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjs7QURDQTtFQUNJLDBCQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0lKOztBRERBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksVUFBQTtBQ0tKOztBREZBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7T0FBQSxpQkFBQTtFQUNBLHlEQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL21vZGVsLWRldGFpbC9tb2RlbC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW50LWlucHV0IHtcbiAgICBmb250LWZhbWlseTogXCJNb25vc3BhY2VkIE51bWJlclwiLFwiQ2hpbmVzZSBRdW90ZVwiLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJQaW5nRmFuZyBTQ1wiLFwiSGlyYWdpbm8gU2FucyBHQlwiLFwiTWljcm9zb2Z0IFlhSGVpXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gICAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDRweCAxMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNjUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkY2U2O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xufVxuXG4udGhlbWF0aWMtYnV0dG9ucyB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlZCBOdW1iZXJcIixcIkNoaW5lc2UgUXVvdGVcIiwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiUGluZ0ZhbmcgU0NcIixcIkhpcmFnaW5vIFNhbnMgR0JcIixcIk1pY3Jvc29mdCBZYUhlaVwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xuICAgIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA0cHggMTFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjY1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVke1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuXG50ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG59XG5zZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVke1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuYnV0dG9uW3R5cGU9XCJidXR0b25cIl06ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICM5YzljOWM7XG4gICAgYm9yZGVyLWNvbG9yOiAjOWM5YzljO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAudW5ibG9ja01vZGFsLWNvbnRlbnR7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgbWFyZ2luOiAxNTBweCBhdXRvO1xufVxuLnVuYmxvY2tNb2RhbC1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTE1cHggNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDA0OTZkMzM7XG59XG5cbi5tYXRjaGluZy1tb2RhbHtcbiAgICB3aWR0aDogMzgwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUzMHB4O1xuICAgIG1hcmdpbi10b3A6IDY3cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4udGV4dC13aWR0aHtcbiAgICB3aWR0aDogNDglO1xufVxuXG4uYW50LWJ0biB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBjdWJpYy1iZXppZXIoLjY0NSwuMDQ1LC4zNTUsMSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42NSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkY2U2O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmFudC1idG4tcHJpbWFyeSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgICBib3JkZXItY29sb3I6ICMyMTk2ZjM7XG59IiwiLmFudC1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZWQgTnVtYmVyXCIsIFwiQ2hpbmVzZSBRdW90ZVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLnRoZW1hdGljLWJ1dHRvbnMge1xuICBmb250LWZhbWlseTogXCJNb25vc3BhY2VkIE51bWJlclwiLCBcIkNoaW5lc2UgUXVvdGVcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJQaW5nRmFuZyBTQ1wiLCBcIkhpcmFnaW5vIFNhbnMgR0JcIiwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xuICBmb250LXZhcmlhbnQ6IHRhYnVsYXItbnVtcztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNHB4IDExcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGRjZTY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuXG50ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbn1cblxuc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuXG5idXR0b25bdHlwZT1idXR0b25dOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzljOWM5YztcbiAgYm9yZGVyLWNvbG9yOiAjOWM5YzljO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4udW5ibG9ja01vZGFsLWNvbnRlbnQge1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbjogMTUwcHggYXV0bztcbn1cblxuLnVuYmxvY2tNb2RhbC1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMTVweCA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjMDA0OTZkMzM7XG59XG5cbi5tYXRjaGluZy1tb2RhbCB7XG4gIHdpZHRoOiAzODBweDtcbiAgbWFyZ2luLWxlZnQ6IDUzMHB4O1xuICBtYXJnaW4tdG9wOiA2N3B4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4udGV4dC13aWR0aCB7XG4gIHdpZHRoOiA0OCU7XG59XG5cbi5hbnQtYnRuIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMzJweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkY2U2O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmFudC1idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICBib3JkZXItY29sb3I6ICMyMTk2ZjM7XG59Il19 */"

/***/ }),

/***/ "./src/app/model-detail/model-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/model-detail/model-detail.component.ts ***!
  \********************************************************/
/*! exports provided: ModelDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelDetailComponent", function() { return ModelDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_comman_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/comman.service */ "./src/api/comman.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");


// import { Location } from '@angular/common';






let ModelDetailComponent = class ModelDetailComponent {
    constructor(location, api, activatedRoute, spinner, commonService, router, fb) {
        this.location = location;
        this.api = api;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.commonService = commonService;
        this.router = router;
        this.fb = fb;
        this.modelDetail = [];
        this.ticketData = {};
        this.isShowSpinner = true;
        this.summaryOverViewTab = false;
        this.clientTab = false;
        this.investingTab = false;
        this.transactionTab = false;
        this.modalTab = false;
        this.portfolioTab = false;
        this.tradingTab = false;
        this.thematicTab = false;
        this.orderTab = false;
        this.rewardsTab = false;
        this.chartOptions = {
            series: [25, 15, 44, 55, 41, 17],
            chart: {
                width: "400px",
                type: "pie"
            },
            labels: [
                "ffff ",
                "eeee",
                "rrrr",
                "hhhh",
                "aaa",
                "sdddd"
            ],
            theme: {
                monochrome: {
                    enabled: true
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        fill: {
                            colors: ['#000', '#66DA26', '#546E7A', '#E91E63', '#FF9800']
                        },
                        legend: {
                            show: false,
                            position: "bottom"
                        },
                    }
                }
            ]
        };
    }
    ngOnInit() {
        this.spinner.show();
        this.tickertForm = this.fb.group({
            "title": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.getModelDetail();
    }
    // backClicked() {
    // this._location.back();
    // window.history.back();
    // this.location.back()
    // }
    backClicked() {
        localStorage.setItem("fromInvesting", "true");
        this.location.back();
    }
    getModelDetail() {
        this.activatedRoute.params.subscribe(params => {
            console.log(params['id']);
            this.api.get('modelDetail/' + params['id']).subscribe(result => {
                console.log('resultresultresult', result);
                if (result.status == 200) {
                    if (result.data) {
                        this.modelDetail = result.data;
                        console.log('this.thematicDetailthis.thematicDetail', this.modelDetail);
                    }
                }
                else {
                    this.commonService.err(result.message);
                    this.router.navigate(['investing']);
                }
                this.isShowSpinner = false;
            }, error => {
                console.log({ error });
            });
        });
    }
    searchTicker() {
        console.log('hiiii');
        if (this.tickertForm.invalid) {
            this.commonService.err("All fields are required.");
            return;
        }
        this.isShowSpinner = true;
        console.log(this.tickertForm.value);
        let data = {
            ticker: this.tickertForm.value.title
        };
        this.isShowSpinner = true;
        this.api.post("getOrbisTicker", data).subscribe(result => {
            console.log(result);
            if (result.status == 200) {
                // if (result.data[0].isin) {
                if (result.data[0]) {
                    // this.addTickerform = this.fb.group({
                    //   "symbol": [result.data[0].symbol, Validators.required],
                    //   "companyName": [result.data[0].companyName, Validators.required],
                    //   "latestPrice": [200, Validators.required],
                    //   "holdingType": ['', Validators.required],
                    //   "targetValue": ['0', Validators.required],
                    //   "upperValue": ['0', Validators.required],
                    //   "lowerupperValue": ['0', Validators.required],
                    // });
                    this.ticketData = {
                        symbol: result.data[0].symbol,
                        companyName: result.data[0].companyName,
                        tickerImage: result.result.logo_square,
                        latestPrice: 200,
                        holdingType: '',
                        targetValue: 0,
                        upperValue: 0,
                        lowerupperValue: 0
                    };
                }
                console.log(this.ticketData);
                // } else {
                //   $('#referError').modal('show');
                // }
                this.isShowSpinner = false;
            }
            else {
                this.commonService.err(result.message);
            }
        }, error => {
            console.log({ error });
        });
    }
    saveData(a, b) {
        if (!a.value) {
            // alert("Holding Type Is Required")
            this.commonService.err("Holding Type Is Required");
            return false;
        }
        if (!b.value) {
            this.commonService.err("Target Value Is Required");
            // alert("Target Value Is Required")
            return false;
        }
        console.log(a.value, b.value);
        this.activatedRoute.params.subscribe(params => {
            let data = {
                holdingType: a.value,
                targetValue: b.value,
                symbol: this.ticketData.symbol,
                tickerImage: this.ticketData.tickerImage,
                companyName: this.ticketData.companyName,
                latestPrice: this.ticketData.latestPrice,
                upperValue: this.ticketData.upperValue,
                lowerupperValue: this.ticketData.lowerupperValue
            };
            let postData = {
                model_id: params['id'],
                models: data,
                symbol: this.ticketData.symbol,
            };
            this.spinner.show();
            this.api.post("addModelHolding", postData).subscribe(result => {
                if (result.status == 200) {
                    this.commonService.succ(result.message);
                    // this.router.navigate(['model-detail/' + params['id']])
                    this.getModelDetail();
                    this.ticketData = {};
                }
                else {
                    this.commonService.err(result.message);
                }
                this.spinner.hide();
            }, error => {
                console.log({ error });
            });
        });
    }
    deleteHolding(data) {
        if (confirm("Are you sure to delete ")) {
            this.activatedRoute.params.subscribe(params => {
                const newData = {
                    model_id: params['id'],
                    symbol: data.symbol
                };
                this.api.post("deleteModelHolding", newData).subscribe(result => {
                    if (result.status == 200) {
                        this.commonService.succ(result.message);
                        this.getModelDetail();
                    }
                    else {
                        this.commonService.err(result.message);
                    }
                }, error => {
                    console.log({ error });
                });
            });
        }
    }
    deleteModels(data) {
        if (confirm("Are you sure to delete ")) {
            this.activatedRoute.params.subscribe(params => {
                const newData = {
                    model_id: params['id'],
                };
                this.api.post("deleteModel", newData).subscribe(result => {
                    if (result.status == 200) {
                        this.commonService.succ(result.message);
                        this.router.navigate(['investing']);
                    }
                    else {
                        this.commonService.err(result.message);
                    }
                }, error => {
                    console.log({ error });
                });
            });
        }
    }
};
ModelDetailComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["Api"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
    { type: _api_comman_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
ModelDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-model-detail',
        template: __webpack_require__(/*! raw-loader!./model-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/model-detail/model-detail.component.html"),
        styles: [__webpack_require__(/*! ./model-detail.component.scss */ "./src/app/model-detail/model-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _api_api_service__WEBPACK_IMPORTED_MODULE_3__["Api"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"], _api_comman_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], ModelDetailComponent);



/***/ }),

/***/ "./src/app/notification/notification.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/notification/notification.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/notification/notification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationComponent = class NotificationComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: __webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/index.js!./src/app/notification/notification.component.html"),
        styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/notification/notification.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotificationComponent);



/***/ }),

/***/ "./src/app/pipe/custom.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipe/custom.pipe.ts ***!
  \*************************************/
/*! exports provided: CustomPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPipe", function() { return CustomPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomPipe = class CustomPipe {
    transform(value, index) {
        return value.split("-")[index];
    }
};
CustomPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'custom'
    })
], CustomPipe);



/***/ }),

/***/ "./src/app/portfolio-detail-edit/portfolio-detail-edit.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/portfolio-detail-edit/portfolio-detail-edit.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ant-input {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  box-sizing: border-box;\n  margin: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  width: 100%;\n  height: 32px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d8dce6;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n\n.thematic-buttons {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-feature-settings: \"tnum\";\n          font-feature-settings: \"tnum\";\n  font-variant: tabular-nums;\n  box-sizing: border-box;\n  margin: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  width: 100%;\n  height: 32px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d8dce6;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n\ninput.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n\ntextarea.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n\nselect.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n\nbutton[type=button]:disabled {\n  background: #9c9c9c;\n  border-color: #9c9c9c;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vYnVsb3VzL0Rlc2t0b3AvcHJvamVjdHMvOF81L2Fkdmlzb3J5L3NyYy9hcHAvcG9ydGZvbGlvLWRldGFpbC1lZGl0L3BvcnRmb2xpby1kZXRhaWwtZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvLWRldGFpbC1lZGl0L3BvcnRmb2xpby1kZXRhaWwtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDhNQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREdBO0VBQ0ksOE1BQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDQUo7O0FER0E7RUFDSSwwQkFBQTtBQ0FKOztBREdBO0VBQ0ksMEJBQUE7QUNBSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby1kZXRhaWwtZWRpdC9wb3J0Zm9saW8tZGV0YWlsLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmFudC1pbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9ub3NwYWNlZCBOdW1iZXJcIixcIkNoaW5lc2UgUXVvdGVcIiwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiUGluZ0ZhbmcgU0NcIixcIkhpcmFnaW5vIFNhbnMgR0JcIixcIk1pY3Jvc29mdCBZYUhlaVwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xuICAgIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA0cHggMTFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjY1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbn1cblxuLnRoZW1hdGljLWJ1dHRvbnMge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZWQgTnVtYmVyXCIsXCJDaGluZXNlIFF1b3RlXCIsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIlBpbmdGYW5nIFNDXCIsXCJIaXJhZ2lubyBTYW5zIEdCXCIsXCJNaWNyb3NvZnQgWWFIZWlcIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcInRudW1cIjtcbiAgICBmb250LXZhcmlhbnQ6IHRhYnVsYXItbnVtcztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNHB4IDExcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42NSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGRjZTY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG59XG5cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbn1cblxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVke1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbn1cbmJ1dHRvblt0eXBlPVwiYnV0dG9uXCJdOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjOWM5YzljO1xuICAgIGJvcmRlci1jb2xvcjogIzljOWM5YztcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9IiwiLmFudC1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9zcGFjZWQgTnVtYmVyXCIsIFwiQ2hpbmVzZSBRdW90ZVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XG4gIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGNlNjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLnRoZW1hdGljLWJ1dHRvbnMge1xuICBmb250LWZhbWlseTogXCJNb25vc3BhY2VkIE51bWJlclwiLCBcIkNoaW5lc2UgUXVvdGVcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJQaW5nRmFuZyBTQ1wiLCBcIkhpcmFnaW5vIFNhbnMgR0JcIiwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xuICBmb250LXZhcmlhbnQ6IHRhYnVsYXItbnVtcztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNHB4IDExcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGRjZTY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuXG50ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbn1cblxuc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xufVxuXG5idXR0b25bdHlwZT1idXR0b25dOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzljOWM5YztcbiAgYm9yZGVyLWNvbG9yOiAjOWM5YzljO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/portfolio-detail-edit/portfolio-detail-edit.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/portfolio-detail-edit/portfolio-detail-edit.component.ts ***!
  \**************************************************************************/
/*! exports provided: PortfolioDetailEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioDetailEditComponent", function() { return PortfolioDetailEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apexcharts */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");
/* harmony import */ var _api_comman_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/comman.service */ "./src/api/comman.service.ts");









let PortfolioDetailEditComponent = class PortfolioDetailEditComponent {
    constructor(location, activatedRoute, router, api, commonService, fb) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.api = api;
        this.commonService = commonService;
        this.fb = fb;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
        this.portfolioDetail = [];
        this.assignedModelDetail = [];
        this.modelList = [];
    }
    ngOnInit() {
        var options = {
            series: [44, 55, 41, 17, 15],
            chart: {
                type: 'donut',
            },
            responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
        };
        var chart = new apexcharts__WEBPACK_IMPORTED_MODULE_2__(document.querySelector("#chart"), options);
        chart.render();
        this.getPortfolioDetail();
        this.getModelList();
        this.portfolioFrom = this.fb.group({
            "modelId": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            "portfolioId": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            "name": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            "riskLevel": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            "drift": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            "description": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    getModelList() {
        this.api.get('modelList').subscribe(result => {
            //console.log('resultresultresult', result)
            if (result.status == 200) {
                let filterResult = [];
                result.data.forEach(function (value, key) {
                    if (value.type == 1) {
                        filterResult.push(value);
                    }
                });
                this.modelList = filterResult;
            }
        }, error => {
            console.log({ error });
        });
    }
    getPortfolioDetail() {
        this.activatedRoute.params.subscribe(params => {
            console.log(params['id']);
            this.api.get('portfolioDetail/' + params['id']).subscribe(result => {
                console.log('resultresultresult', result);
                if (result.status == 200) {
                    if (result.data) {
                        this.portfolioDetail = result.data[0];
                        if (this.portfolioDetail.models[0]) {
                            this.assignedModelDetail = this.portfolioDetail.models[0];
                        }
                        let newForm = {
                            "portfolioId": this.portfolioDetail._id,
                            "modelId": this.portfolioDetail.modelId,
                            "name": this.portfolioDetail.name,
                            "riskLevel": this.portfolioDetail.riskLevel,
                            "drift": this.portfolioDetail.drift,
                            "description": this.portfolioDetail.description
                        };
                        this.portfolioFrom.patchValue(newForm);
                        console.log('this.portfolioFromthis.portfolioFromthis.portfolioFromthis.portfolioFrom', this.portfolioFrom.value);
                    }
                }
                else {
                    this.commonService.err(result.message);
                    this.router.navigate(['investing']);
                }
                // this.isShowSpinner = false
            }, error => {
                console.log({ error });
            });
        });
    }
    addPortfolio() {
        if (this.portfolioFrom.invalid) {
            this.commonService.err("All fields are required.");
            return;
        }
        let data = {
            portfolioId: this.portfolioFrom.value.portfolioId,
            modelId: this.portfolioFrom.value.modelId,
            name: this.portfolioFrom.value.name,
            riskLevel: this.portfolioFrom.value.riskLevel,
            drift: this.portfolioFrom.value.drift,
            description: this.portfolioFrom.value.description,
        };
        console.log("fata", data);
        this.api.post("editPortfolio", data).subscribe(result => {
            if (result.status == 200) {
                this.commonService.succ(result.message);
                this.router.navigate(['portfolio-detail/', this.portfolioFrom.value.portfolioId]);
            }
            else {
                this.commonService.succ('Something went wrong');
            }
        }, error => {
            console.log({ error });
        });
    }
};
PortfolioDetailEditComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_7__["Api"] },
    { type: _api_comman_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
PortfolioDetailEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portfolio-detail-edit',
        template: __webpack_require__(/*! raw-loader!./portfolio-detail-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/portfolio-detail-edit/portfolio-detail-edit.component.html"),
        styles: [__webpack_require__(/*! ./portfolio-detail-edit.component.scss */ "./src/app/portfolio-detail-edit/portfolio-detail-edit.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _api_api_service__WEBPACK_IMPORTED_MODULE_7__["Api"],
        _api_comman_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], PortfolioDetailEditComponent);



/***/ }),

/***/ "./src/app/portfolio-detail/portfolio-detail.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/portfolio-detail/portfolio-detail.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby1kZXRhaWwvcG9ydGZvbGlvLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/portfolio-detail/portfolio-detail.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/portfolio-detail/portfolio-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: PortfolioDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioDetailComponent", function() { return PortfolioDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apexcharts */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");
/* harmony import */ var _api_comman_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/comman.service */ "./src/api/comman.service.ts");







let PortfolioDetailComponent = class PortfolioDetailComponent {
    constructor(location, activatedRoute, router, api, commonService) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.api = api;
        this.commonService = commonService;
        this.portfolioDetail = [];
        this.assignedModelDetail = [];
    }
    ngOnInit() {
        var options = {
            series: [44, 55, 41, 17, 15],
            chart: {
                type: 'donut',
            },
            responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
        };
        var chart = new apexcharts__WEBPACK_IMPORTED_MODULE_2__(document.querySelector("#chart"), options);
        chart.render();
        this.getPortfolioDetail();
    }
    backClicked() {
        // localStorage.setItem("fromInvesting","true")
        this.location.back();
    }
    getPortfolioDetail() {
        this.activatedRoute.params.subscribe(params => {
            console.log(params['id']);
            this.api.get('portfolioDetail/' + params['id']).subscribe(result => {
                console.log('resultresultresult', result);
                if (result.status == 200) {
                    if (result.data) {
                        this.portfolioDetail = result.data[0];
                        if (this.portfolioDetail.models[0]) {
                            this.assignedModelDetail = this.portfolioDetail.models[0];
                        }
                        console.log('this.thematicDetailthis.thematicDetail', this.assignedModelDetail);
                    }
                }
                else {
                    this.commonService.err(result.message);
                    this.router.navigate(['investing']);
                }
                // this.isShowSpinner = false
            }, error => {
                console.log({ error });
            });
        });
    }
};
PortfolioDetailComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_5__["Api"] },
    { type: _api_comman_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
PortfolioDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portfolio-detail',
        template: __webpack_require__(/*! raw-loader!./portfolio-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/portfolio-detail/portfolio-detail.component.html"),
        styles: [__webpack_require__(/*! ./portfolio-detail.component.scss */ "./src/app/portfolio-detail/portfolio-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _api_api_service__WEBPACK_IMPORTED_MODULE_5__["Api"],
        _api_comman_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
], PortfolioDetailComponent);



/***/ }),

/***/ "./src/app/questionnaire/questionnaire.component.scss":
/*!************************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ubmFpcmUvcXVlc3Rpb25uYWlyZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/questionnaire/questionnaire.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestionnaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireComponent", function() { return QuestionnaireComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _api_comman_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/comman.service */ "./src/api/comman.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let QuestionnaireComponent = class QuestionnaireComponent {
    constructor(api, spinner, commonService, router) {
        this.api = api;
        this.spinner = spinner;
        this.commonService = commonService;
        this.router = router;
        this.questionnaireList = [];
    }
    ngOnInit() {
        this.spinner.show();
        this.getQuestionnaireList();
    }
    getQuestionnaireList() {
        this.api.get('questionnaireList').subscribe(result => {
            //console.log('resultresultresult', result)
            if (result.status == 200) {
                this.questionnaireList = result.data;
            }
            this.spinner.hide();
        }, error => {
            console.log({ error });
        });
    }
    deleteQuestionnaire(questionnaire) {
        console.log('paramsparamsparamsparams', questionnaire._id);
        this.api.delete('deleteQuestionnaire/' + questionnaire._id).subscribe(result => {
            //console.log('resultresultresult', result)
            if (result.status == 200) {
                this.getQuestionnaireList();
            }
            else {
            }
        }, error => {
            console.log({ error });
        });
    }
    enableQuestionare(detail) {
        let data = {
            questionnaireId: detail._id
        };
        this.api.post("enableQuestionare", data).subscribe(result => {
            if (result.status == 200) {
                this.commonService.succ(result.message);
                this.getQuestionnaireList();
            }
            else {
                this.commonService.err(result.message);
            }
        }, error => {
            console.log({ error });
        });
    }
};
QuestionnaireComponent.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["Api"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
    { type: _api_comman_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
QuestionnaireComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-questionnaire',
        template: __webpack_require__(/*! raw-loader!./questionnaire.component.html */ "./node_modules/raw-loader/index.js!./src/app/questionnaire/questionnaire.component.html"),
        styles: [__webpack_require__(/*! ./questionnaire.component.scss */ "./src/app/questionnaire/questionnaire.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["Api"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _api_comman_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], QuestionnaireComponent);



/***/ }),

/***/ "./src/app/raise-cash/raise-cash.component.scss":
/*!******************************************************!*\
  !*** ./src/app/raise-cash/raise-cash.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhaXNlLWNhc2gvcmFpc2UtY2FzaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/raise-cash/raise-cash.component.ts":
/*!****************************************************!*\
  !*** ./src/app/raise-cash/raise-cash.component.ts ***!
  \****************************************************/
/*! exports provided: RaiseCashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaiseCashComponent", function() { return RaiseCashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let RaiseCashComponent = class RaiseCashComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    backClicked() {
        // localStorage.setItem("fromInvesting","true")
        this.location.back();
    }
};
RaiseCashComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
RaiseCashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-raise-cash',
        template: __webpack_require__(/*! raw-loader!./raise-cash.component.html */ "./node_modules/raw-loader/index.js!./src/app/raise-cash/raise-cash.component.html"),
        styles: [__webpack_require__(/*! ./raise-cash.component.scss */ "./src/app/raise-cash/raise-cash.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], RaiseCashComponent);



/***/ }),

/***/ "./src/app/report-management/report-management.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/report-management/report-management.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC1tYW5hZ2VtZW50L3JlcG9ydC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/report-management/report-management.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/report-management/report-management.component.ts ***!
  \******************************************************************/
/*! exports provided: ReportManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportManagementComponent", function() { return ReportManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReportManagementComponent = class ReportManagementComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReportManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report-management',
        template: __webpack_require__(/*! raw-loader!./report-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/report-management/report-management.component.html"),
        styles: [__webpack_require__(/*! ./report-management.component.scss */ "./src/app/report-management/report-management.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ReportManagementComponent);



/***/ }),

/***/ "./src/app/self-directed-detail/self-directed-detail.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/self-directed-detail/self-directed-detail.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGYtZGlyZWN0ZWQtZGV0YWlsL3NlbGYtZGlyZWN0ZWQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/self-directed-detail/self-directed-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/self-directed-detail/self-directed-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: SelfDirectedDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfDirectedDetailComponent", function() { return SelfDirectedDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let SelfDirectedDetailComponent = class SelfDirectedDetailComponent {
    constructor(_location) {
        this._location = _location;
        this.chartOptions = {
            series: [25, 15, 44, 55, 41, 17],
            chart: {
                width: "400px",
                type: "pie"
            },
            labels: [
                " ",
                "",
                "",
                "",
                "",
                ""
            ],
            theme: {
                monochrome: {
                    enabled: true
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        fill: {
                            colors: ['#000', '#66DA26', '#546E7A', '#E91E63', '#FF9800']
                        },
                        legend: {
                            show: false,
                            position: "bottom"
                        },
                    }
                }
            ]
        };
    }
    ngOnInit() {
    }
    backClicked() {
        this._location.back();
    }
};
SelfDirectedDetailComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
SelfDirectedDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-self-directed-detail',
        template: __webpack_require__(/*! raw-loader!./self-directed-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/self-directed-detail/self-directed-detail.component.html"),
        styles: [__webpack_require__(/*! ./self-directed-detail.component.scss */ "./src/app/self-directed-detail/self-directed-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], SelfDirectedDetailComponent);



/***/ }),

/***/ "./src/app/setting/setting.component.scss":
/*!************************************************!*\
  !*** ./src/app/setting/setting.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/setting/setting.component.ts":
/*!**********************************************!*\
  !*** ./src/app/setting/setting.component.ts ***!
  \**********************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingComponent = class SettingComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting',
        template: __webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/index.js!./src/app/setting/setting.component.html"),
        styles: [__webpack_require__(/*! ./setting.component.scss */ "./src/app/setting/setting.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingComponent);



/***/ }),

/***/ "./src/app/static-content-managment/static-content-managment.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/static-content-managment/static-content-managment.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpYy1jb250ZW50LW1hbmFnbWVudC9zdGF0aWMtY29udGVudC1tYW5hZ21lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/static-content-managment/static-content-managment.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/static-content-managment/static-content-managment.component.ts ***!
  \********************************************************************************/
/*! exports provided: StaticContentManagmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticContentManagmentComponent", function() { return StaticContentManagmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StaticContentManagmentComponent = class StaticContentManagmentComponent {
    constructor() { }
    ngOnInit() {
    }
};
StaticContentManagmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-static-content-managment',
        template: __webpack_require__(/*! raw-loader!./static-content-managment.component.html */ "./node_modules/raw-loader/index.js!./src/app/static-content-managment/static-content-managment.component.html"),
        styles: [__webpack_require__(/*! ./static-content-managment.component.scss */ "./src/app/static-content-managment/static-content-managment.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StaticContentManagmentComponent);



/***/ }),

/***/ "./src/app/stocks/etfs/etfs.component.scss":
/*!*************************************************!*\
  !*** ./src/app/stocks/etfs/etfs.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2Nrcy9ldGZzL2V0ZnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/stocks/etfs/etfs.component.ts":
/*!***********************************************!*\
  !*** ./src/app/stocks/etfs/etfs.component.ts ***!
  \***********************************************/
/*! exports provided: EtfsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtfsComponent", function() { return EtfsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EtfsComponent = class EtfsComponent {
    constructor() { }
    ngOnInit() {
        $(document).on('click', 'button.minus', function () {
            $(this).parents('.inputBox').find('.formControl').attr('value', 0);
        });
    }
};
EtfsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-etfs',
        template: __webpack_require__(/*! raw-loader!./etfs.component.html */ "./node_modules/raw-loader/index.js!./src/app/stocks/etfs/etfs.component.html"),
        styles: [__webpack_require__(/*! ./etfs.component.scss */ "./src/app/stocks/etfs/etfs.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EtfsComponent);



/***/ }),

/***/ "./src/app/summary/summary.component.scss":
/*!************************************************!*\
  !*** ./src/app/summary/summary.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/summary/summary.component.ts":
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");





const sparkLineData = [
    47,
    45,
    54,
    38,
    56,
    24,
    65,
    31,
    37,
    39,
    62,
    51,
    35,
    41,
    35,
    27,
    93,
    53,
    61,
    27,
    54,
    43,
    19,
    46
];
let SummaryComponent = class SummaryComponent {
    constructor() {
        this.commonLineSparklineOptions = {
            chart: {
                type: "line",
                width: 100,
                height: 35,
                sparkline: {
                    enabled: true
                }
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return "";
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        };
        this.chartLineSparkline1Options = {
            series: [
                {
                    name: "chart-line-sparkline",
                    data: this.randomizeArray(sparkLineData.slice(0, 10))
                }
            ]
        };
        this.chartLineSparkline2Options = {
            series: [
                {
                    name: "chart-line-sparkline",
                    data: this.randomizeArray(sparkLineData.slice(0, 10))
                }
            ]
        };
        this.chartLineSparkline3Options = {
            series: [
                {
                    name: "chart-line-sparkline",
                    data: this.randomizeArray(sparkLineData.slice(0, 10))
                }
            ]
        };
        this.chartLineSparkline4Options = {
            series: [
                {
                    name: "chart-line-sparkline",
                    data: this.randomizeArray(sparkLineData.slice(0, 10))
                }
            ]
        };
        this.chartLineSparkline5Options = {
            series: [
                {
                    name: "chart-line-sparkline",
                    data: this.randomizeArray(sparkLineData.slice(0, 10))
                }
            ]
        };
        this.chartLineSparkline6Options = {
            series: [
                {
                    name: "chart-line-sparkline",
                    data: this.randomizeArray(sparkLineData.slice(0, 10))
                }
            ]
        };
    }
    randomizeArray(arg) {
        var array = arg.slice();
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    ngOnInit() {
        this.chart1();
        this.chart2();
        this.chart3();
        $(document).on('click', '.ulAumOne li', function () {
            $('.ulAumOne li').removeClass('active');
            $(this).addClass('active');
        });
        $(document).on('click', '.ulAumTwo li', function () {
            $('.ulAumTwo li').removeClass('active');
            $(this).addClass('active');
        });
        $(document).on('click', '.ulAumThree li', function () {
            $('.ulAumThree li').removeClass('active');
            $(this).addClass('active');
        });
        $(document).on('click', '.ulAumFour li', function () {
            $('.ulAumFour li').removeClass('active');
            $(this).addClass('active');
        });
        $(document).on('click', '.FilterDropdown', function () {
            $(this).addClass('active');
            $('.managedDropdownShow').slideDown();
        });
        $(document).on('click', '.FilterDropdown.active', function () {
            $(this).removeClass('active');
            $('.managedDropdownShow').slideUp();
        });
    }
    chart1() {
        /* Chart code */
        // Themes begin
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);
        // Themes end
        // Create chart
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("chartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        chart.paddingRight = 20;
        chart.data = generateChartData();
        let dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["DateAxis"]());
        dateAxis.baseInterval = {
            "timeUnit": "minute",
            "count": 1
        };
        dateAxis.tooltipDateFormat = "HH:mm, d MMMM";
        let valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.tooltip.disabled = true;
        // valueAxis.renderer.grid.template.stroke = am4core.color("#eeeeee");
        // valueAxis.title.text = "Unique visitors";
        let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "visits";
        series.tooltipText = "Visits: [bold]{valueY}[/]";
        series.fillOpacity = 0.3;
        dateAxis.renderer.grid.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#ffffff");
        valueAxis.renderer.grid.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#908f8f");
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYCursor"]();
        chart.cursor.lineY.opacity = 0;
        // chart.scrollbarX = new am4charts.XYChartScrollbar();
        // chart.scrollbarX.series.push(series);
        dateAxis.start = 0.8;
        dateAxis.keepSelection = true;
        function generateChartData() {
            let chartData = [];
            // current date
            let firstDate = new Date();
            // now set 500 minutes back
            firstDate.setMinutes(firstDate.getDate() - 500);
            // and generate 500 data items
            let visits = 500;
            for (var i = 0; i < 500; i++) {
                let newDate = new Date(firstDate);
                // each time we add one minute
                newDate.setMinutes(newDate.getMinutes() + i);
                // some random number
                visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
                // add data item to the array
                chartData.push({
                    date: newDate,
                    visits: visits
                });
            }
            return chartData;
        }
        $(document).ready(function () {
            $("g[aria-labelledby]").hide();
        });
    }
    chart2() {
        /* Chart code */
        // Themes begin
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);
        // Themes end
        // Create chart
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("chartdivTwo", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        chart.paddingRight = 20;
        chart.data = generateChartData();
        let dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["DateAxis"]());
        dateAxis.baseInterval = {
            "timeUnit": "minute",
            "count": 1
        };
        dateAxis.tooltipDateFormat = "HH:mm, d MMMM";
        let valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.tooltip.disabled = true;
        // valueAxis.title.text = "Unique visitors";
        let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "visits";
        series.tooltipText = "Visits: [bold]{valueY}[/]";
        series.fillOpacity = 0.3;
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYCursor"]();
        chart.cursor.lineY.opacity = 0;
        // chart.scrollbarX = new am4charts.XYChartScrollbar();
        // chart.scrollbarX.series.push(series);
        dateAxis.start = 0.8;
        dateAxis.keepSelection = true;
        function generateChartData() {
            let chartData = [];
            // current date
            let firstDate = new Date();
            // now set 500 minutes back
            firstDate.setMinutes(firstDate.getDate() - 500);
            // and generate 500 data items
            let visits = 500;
            for (var i = 0; i < 500; i++) {
                let newDate = new Date(firstDate);
                // each time we add one minute
                newDate.setMinutes(newDate.getMinutes() + i);
                // some random number
                visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
                // add data item to the array
                chartData.push({
                    date: newDate,
                    visits: visits
                });
            }
            return chartData;
        }
        $(document).ready(function () {
            $("g[aria-labelledby]").hide();
        });
    }
    chart3() {
        /* Chart code */
        // Themes begin
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);
        // Themes end
        // Create chart
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("chartdivThree", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        chart.paddingRight = 20;
        chart.data = generateChartData();
        let dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["DateAxis"]());
        dateAxis.baseInterval = {
            "timeUnit": "minute",
            "count": 1
        };
        dateAxis.tooltipDateFormat = "HH:mm, d MMMM";
        let valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.tooltip.disabled = true;
        // valueAxis.title.text = "Unique visitors";
        let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "visits";
        series.tooltipText = "Visits: [bold]{valueY}[/]";
        series.fillOpacity = 0.3;
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYCursor"]();
        chart.cursor.lineY.opacity = 0;
        // chart.scrollbarX = new am4charts.XYChartScrollbar();
        // chart.scrollbarX.series.push(series);
        dateAxis.start = 0.8;
        dateAxis.keepSelection = true;
        function generateChartData() {
            let chartData = [];
            // current date
            let firstDate = new Date();
            // now set 500 minutes back
            firstDate.setMinutes(firstDate.getDate() - 500);
            // and generate 500 data items
            let visits = 500;
            for (var i = 0; i < 500; i++) {
                let newDate = new Date(firstDate);
                // each time we add one minute
                newDate.setMinutes(newDate.getMinutes() + i);
                // some random number
                visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
                // add data item to the array
                chartData.push({
                    date: newDate,
                    visits: visits
                });
            }
            return chartData;
        }
        $(document).ready(function () {
            $("g[aria-labelledby]").hide();
        });
    }
};
SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-summary',
        template: __webpack_require__(/*! raw-loader!./summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/summary/summary.component.html"),
        styles: [__webpack_require__(/*! ./summary.component.scss */ "./src/app/summary/summary.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SummaryComponent);



/***/ }),

/***/ "./src/app/support-message/support-message.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/support-message/support-message.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBvcnQtbWVzc2FnZS9zdXBwb3J0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/support-message/support-message.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/support-message/support-message.component.ts ***!
  \**************************************************************/
/*! exports provided: SupportMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportMessageComponent", function() { return SupportMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SupportMessageComponent = class SupportMessageComponent {
    constructor() { }
    ngOnInit() {
    }
};
SupportMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-support-message',
        template: __webpack_require__(/*! raw-loader!./support-message.component.html */ "./node_modules/raw-loader/index.js!./src/app/support-message/support-message.component.html"),
        styles: [__webpack_require__(/*! ./support-message.component.scss */ "./src/app/support-message/support-message.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SupportMessageComponent);



/***/ }),

/***/ "./src/app/support/support.component.scss":
/*!************************************************!*\
  !*** ./src/app/support/support.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SupportComponent = class SupportComponent {
    constructor() { }
    ngOnInit() {
    }
};
SupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-support',
        template: __webpack_require__(/*! raw-loader!./support.component.html */ "./node_modules/raw-loader/index.js!./src/app/support/support.component.html"),
        styles: [__webpack_require__(/*! ./support.component.scss */ "./src/app/support/support.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SupportComponent);



/***/ }),

/***/ "./src/app/thematic-detail/thematic-detail.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/thematic-detail/thematic-detail.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1hdGljLWRldGFpbC90aGVtYXRpYy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/thematic-detail/thematic-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/thematic-detail/thematic-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: ThematicDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThematicDetailComponent", function() { return ThematicDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");
/* harmony import */ var _api_comman_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/comman.service */ "./src/api/comman.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");







let ThematicDetailComponent = class ThematicDetailComponent {
    constructor(location, api, activatedRoute, commonService, router, spinner) {
        this.location = location;
        this.api = api;
        this.activatedRoute = activatedRoute;
        this.commonService = commonService;
        this.router = router;
        this.spinner = spinner;
        this.thematicDetail = [];
        this.assignedModelDetail = [];
        this.isShowSpinner = true;
        this.chartOptions = {
            series: [25, 15, 44, 55, 41, 17],
            chart: {
                width: "400px",
                type: "pie"
            },
            labels: [
                " ",
                "",
                "",
                "",
                "",
                ""
            ],
            theme: {
                monochrome: {
                    enabled: true
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        fill: {
                            colors: ['#000', '#66DA26', '#546E7A', '#E91E63', '#FF9800']
                        },
                        legend: {
                            show: false,
                            position: "bottom"
                        },
                    }
                }
            ]
        };
    }
    ngOnInit() {
        this.getThematicDetail();
    }
    backClicked() {
        // localStorage.setItem("fromInvesting","true")
        this.location.back();
    }
    getThematicDetail() {
        this.activatedRoute.params.subscribe(params => {
            console.log(params['id']);
            this.api.get('thematicDetail/' + params['id']).subscribe(result => {
                console.log('resultresultresult', result);
                if (result.status == 200) {
                    if (result.data) {
                        this.thematicDetail = result.data[0];
                        if (this.thematicDetail.models[0]) {
                            this.assignedModelDetail = this.thematicDetail.models[0];
                        }
                        console.log('this.thematicDetailthis.thematicDetail', this.thematicDetail);
                    }
                }
                else {
                    this.commonService.err("Thematic not found");
                    this.router.navigate(['investing']);
                }
                this.isShowSpinner = false;
            }, error => {
                console.log({ error });
            });
        });
    }
};
ThematicDetailComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["Api"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _api_comman_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
ThematicDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thematic-detail',
        template: __webpack_require__(/*! raw-loader!./thematic-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/thematic-detail/thematic-detail.component.html"),
        styles: [__webpack_require__(/*! ./thematic-detail.component.scss */ "./src/app/thematic-detail/thematic-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _api_api_service__WEBPACK_IMPORTED_MODULE_3__["Api"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _api_comman_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
], ThematicDetailComponent);



/***/ }),

/***/ "./src/app/transactions/transactions.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/transactions/transactions.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/transactions/transactions.component.ts":
/*!********************************************************!*\
  !*** ./src/app/transactions/transactions.component.ts ***!
  \********************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TransactionsComponent = class TransactionsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transactions',
        template: __webpack_require__(/*! raw-loader!./transactions.component.html */ "./node_modules/raw-loader/index.js!./src/app/transactions/transactions.component.html"),
        styles: [__webpack_require__(/*! ./transactions.component.scss */ "./src/app/transactions/transactions.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TransactionsComponent);



/***/ }),

/***/ "./src/app/wait-list/wait-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/wait-list/wait-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhaXQtbGlzdC93YWl0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/wait-list/wait-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/wait-list/wait-list.component.ts ***!
  \**************************************************/
/*! exports provided: WaitListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitListComponent", function() { return WaitListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api.service */ "./src/api/api.service.ts");



let WaitListComponent = class WaitListComponent {
    constructor(api) {
        this.api = api;
        this.waitUsers = [];
    }
    ngOnInit() {
        this.waitList();
    }
    waitList() {
        this.api.get("waitList").subscribe(result => {
            if (result.status == 200) {
                this.waitUsers = result.data;
            }
            else {
            }
        }, error => {
            console.log({ error });
        });
    }
};
WaitListComponent.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["Api"] }
];
WaitListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wait-list',
        template: __webpack_require__(/*! raw-loader!./wait-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/wait-list/wait-list.component.html"),
        styles: [__webpack_require__(/*! ./wait-list.component.scss */ "./src/app/wait-list/wait-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["Api"]])
], WaitListComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: 'https://www.mudani.com:3007/api/v1/admin/'
    // url: 'http://mudani.com:3006/api/v1/admin/'
    //url: 'http://localhost:3005/api/v1/admin/'
    // url: 'http://54.193.196.152:3005/api/v1/admin/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mobulous/Desktop/projects/8_5/advisory/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map