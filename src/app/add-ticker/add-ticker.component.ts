import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from "@angular/forms";
import { CommonService } from '../../api/comman.service';
import { Api } from '../../api/api.service';
import { Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from "src/environments/environment";

import { NgxSpinnerService } from "ngx-spinner";

declare var $;
@Component({
  selector: 'app-add-ticker',
  templateUrl: './add-ticker.component.html',
  styleUrls: ['./add-ticker.component.scss']
})
export class AddTickerComponent implements OnInit {
  url = environment.url
  form: FormGroup;
  addTickerform: FormGroup;
  ticketData: any = {};
  selectedFile: File = null;
  uploadedImageUrl: any = "";
  getTickerListData: any = [];
  constructor(private fb: FormBuilder,
    private commonService: CommonService,
    private api: Api,
    private router: Router,
    private http: HttpClient,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.form = this.fb.group({
      "title": ['', Validators.required]
    });

    this.addTickerform = this.fb.group({
      "tickerType": ['', Validators.required],
      "tickerImage": ['', Validators.required],
      "symbol": ['', Validators.required],
      "companyName": ['', Validators.required],
      "isin": [''],
      "cusip": [''],
      "country": ['', Validators.required],
      "mic": ['', Validators.required],
      "currency": ['', Validators.required],
      "source": [''],
      "identType": ['', Validators.required],
      "exchange": ['', Validators.required],
    });

    this.getTickerList()
  }

  searchTicker() {
    console.log('hiiii', this.form.value)
    if (this.form.invalid) {
      // this.commonService.err("All fields are required.")
      return;
    }
    this.spinner.show();
    console.log(this.form.value);
    let data = {
      ticker: this.form.value.title
    }

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
        } else {
          $('#referError').modal('show');
        }
        this.spinner.hide();
      } else {
        this.commonService.err(result.message)
      }
    }, error => {
      console.log({ error })
    })

  }

  patchTickerValue(data: any, result) {
    if (data) {
      console.log('datataaaaaa', result)
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
      }
      this.addTickerform.patchValue(newForm);
      console.log('newFormnewFormnewForm', this.addTickerform.value);

    }
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile)
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post(this.url + "uploadImage", fd, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {

      if (event.type === HttpEventType.UploadProgress) {
        // this.uploadTimer = Math.round(event.loaded / event.total * 100);
        // console.log("Upload Progress:" + this.uploadTimer + "%");
      } else if (event.type === HttpEventType.Response) {
        // this.uploadedImageUrl = event.body['data'];
        this.addTickerform.value.tickerImage = event.body['data'];
      } else {
        console.log("Uploading Completed")
      }
    }, error => {
      console.log({ error })
    })
  }

  saveData() {
    this.spinner.show();
    // console.log(this.addTickerform.value)
    if (this.addTickerform.invalid) {
      this.commonService.err("All fields are required.")
      return;
    }

    this.api.post("addTicker", this.addTickerform.value).subscribe(result => {
      if (result.status == 200) {
        this.commonService.succ(result.message)
        // this.router.navigate(['matching-portfolio/' + result.data._id])
      } else {
        
        this.commonService.err(result.message)
      }
      this.spinner.hide();
    }, error => {
      console.log({ error })
    })
this.spinner.hide();

  }

  getTickerList() {

    this.api.get('getTickerList').subscribe(result => {
      console.log('resultresultresult', result)
      if (result.status == 200) {
        this.getTickerListData = result.data
        console.log('getTickerListDatagetTickerListDatagetTickerListDatagetTickerListData', this.getTickerListData)
        this.spinner.hide();
      } else {
      }
    }, error => {
      console.log({ error })
    })


  }

  closePops(id) {
    console.log(id)
    $("#" + id).modal('hide');
  }

}
