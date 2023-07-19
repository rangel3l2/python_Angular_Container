import { Component, EventEmitter, OnInit,  ViewEncapsulation } from '@angular/core';
import { School } from 'src/app/core/models/school';
import { ModalInicializatorComponent } from './modal-inicializator/modal-inicializator.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from
'@angular/material/dialog';
import { SchoolService } from '../../services/school-service/school-service.service';
import { Router } from '@angular/router';
import { ShareDataService } from '../../services/share-data/share-data.service';

@Component({
  selector: 'app-inicializator',
  templateUrl: './inicializator.component.html',
  styleUrls: ['./inicializator.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class InicializatorComponent implements OnInit {
  // name?: string;
  // address?: string;
  // phone?: string;
  type?: string;
  quantity?: number;
  school?: School;
  start_btn_clicked?: boolean;
  wait_file: string = ''
  constructor(public dialog: MatDialog,
              private service_school : SchoolService,
              public share_data : ShareDataService,
              private _router: Router,) {}
	
    openDialog(): void {
      const dialogRef = this.dialog.open(ModalInicializatorComponent, {
        data: {name: this.quantity, type: this.type, },
      });
      dialogRef.afterClosed().subscribe(result => {
        this.school= result

       })
  	}
	ngOnInit(): void {
	this.set_school_search()
	
	}

	set_school_search():void{
   
		if(this.school){
      this.wait_file = 'true'
      this.share_data.setSharedData(this.wait_file);				
			this.start_btn_clicked = true
			this.service_school.save(this.school).subscribe({
			next: (school) =>{
        this.wait_file = 'true'
        this.share_data.setSharedData(this.wait_file);	
				console.log(school)
				this.start_btn_clicked = false				
				this.school = undefined
					
				error: (err:any) => console.log(err)
			    
			}
			})		
		}
  }
	


}
