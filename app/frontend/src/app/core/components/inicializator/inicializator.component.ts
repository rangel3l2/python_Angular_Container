import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/core/models/school';
import { ModalInicializatorComponent } from './modal-inicializator/modal-inicializator.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from
'@angular/material/dialog';
import { SchoolService } from '../../services/SchoolService/school-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicializator',
  templateUrl: './inicializator.component.html',
  styleUrls: ['./inicializator.component.scss']
})
export class InicializatorComponent implements OnInit {
  name?: string;
  address?: string;
  phone?: string;
  type?: string;
  quantity?: number;
  school!: School;

  constructor(public dialog: MatDialog,
              private service_school : SchoolService,
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

  set_school_search(){
    if(this.school){
      this.service_school.save(this.school).subscribe({
        next: (school) =>{
          this._router.navigate(['']);
        },
        error: (err:any) => console.log(err)

      })

    }
  }


}
