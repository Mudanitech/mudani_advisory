import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as ApexCharts from 'apexcharts';
import { Location } from '@angular/common';
import { Api } from '../../api/api.service';
import { CommonService } from '../../api/comman.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Router } from '@angular/router';
import { ChartComponent } from "ng-apexcharts";

declare var $:any;


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
};

import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-create-thematic',
  templateUrl: './create-thematic.component.html',
  styleUrls: ['./create-thematic.component.scss']
})
export class CreateThematicComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;

  url = environment.url
  modelList: any = [];
  thematicForm: FormGroup;
  selectedFile: File = null;
  uploadTimer = 0;
  uploadedImageUrl: any = "";
  orbisModelDetail: any = [];
  isShowSpinner: boolean = true;
  constructor(
    private location: Location,
    private fb: FormBuilder,
    private api: Api,
    private commonService: CommonService,
    private http: HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {

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
              show:false,
              position: "bottom"
            },
      
          }
        }
      ]
    };

    this.thematicForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      models: ['', Validators.required],
    })
    // console.log(this.thematicForm.invalid);


    
  }


  ngOnInit() {
    this.spinner.show();

    this.getorbisModel()
  }
  backClicked() {
    // localStorage.setItem("fromInvesting","true")
    this.location.back()
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
        this.modelList = filterResult
      }
      this.isShowSpinner = false;
    }, error => {
      console.log({ error })
    })
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
        this.uploadTimer = Math.round(event.loaded / event.total * 100);
        console.log("Upload Progress:" + this.uploadTimer + "%");
      } else if (event.type === HttpEventType.Response) {
        this.uploadedImageUrl = event.body['data'];
      } else {
        console.log("Uploading Completed")
      }
    }, error => {
      console.log({ error })
    })
  }

  addThematic() {
    //console.log("helo", this.thematicForm.value)
    if (this.thematicForm.invalid) {
      return
    }
    // console.log('this.thematicFormthis.thematicForm', this.thematicForm)
    let data = {
      modelId: this.thematicForm.value.models,
      thematicImage: this.uploadedImageUrl,
      thematicName: this.thematicForm.value.name,
      thematicDescription: this.thematicForm.value.description,
    }
    console.log('datadatadatadata', data)
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
        this.commonService.succ(result.message)
        this.router.navigate(['investing'])
      } else {
        this.commonService.succ('Something went wrong')
      }
    }, error => {
      console.log({ error })
    })

  }
}
