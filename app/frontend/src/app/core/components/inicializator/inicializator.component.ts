import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/core/models/school';
import { ModalInicializatorComponent } from '../modal-inicializator/modal-inicializator.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { SchoolServiceService } from '../../services/SchoolService/school-service.service';

@Component({
  selector: 'app-inicializator',
  templateUrl: './inicializator.component.html',
  styleUrls: ['./inicializator.component.scss']
})

export class InicializatorComponent implements OnInit {
  school?: School
  ngOnInit(): void {

  }
  constructor(public dialog: MatDialog, public school_service: SchoolServiceService) { }

  openDialog(): void {
    // dialogRef = 
    this.dialog.open(ModalInicializatorComponent
      , {
      width: '250px',
      data: {number_schools: this.school?.number_schools, type_school: this.school?.type_school },
    }
    );

    // dialogRef.afterClosed().subscribe(result => {
    //   this.school = result;
    // })

  }

  startSearch(): void {
    this.school_service.start()
  }


}

