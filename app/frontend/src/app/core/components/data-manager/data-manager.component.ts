import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { SchoolService } from '../../services/school-service/school-service.service';
import { ShareDataService } from '../../services/share-data/share-data.service';
@Component({
  selector: 'app-data-manager',
  templateUrl: './data-manager.component.html',
  styleUrls: ['./data-manager.component.scss']
})
export class DataManagerComponent implements OnInit {
 receivedData : string = ''
  constructor(
              private service_school : SchoolService,
              public service_data: ShareDataService,) {
              
              }
    ngOnInit(): void {
      this.receivedData = this.service_data.getSharedData()
    
                 console.log(this.receivedData)
    }
  downloadFile(): void {
		
		this.service_school.getSchoolFile().subscribe((data: any) => {
		const fileName = 'file.csv'
		FileSaver.saveAs(data, fileName)
		});
	}
}
