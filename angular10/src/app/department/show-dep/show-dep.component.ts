import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import {AddEditDepComponent} from '../add-edit-dep/add-edit-dep.component'
@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service : SharedService) { }
  DepartmentList:any = [];
  ModalTitle:string;
  ActivateAddEditDepComp:boolean=false;
  dep:any;
  ngOnInit(): void {
    this.refreshDepList();
  }
  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp=true;
  }
  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }
  
  editClick(item: any){
    this.dep=item;
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditDepComp=true;

  }

  deleteClick(item:any){
    alert(item.DepartmentId.toString());
    if(confirm("are you sure ??")){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      });
    }

  }

  refreshDepList(){
    this.service.getDeptList().subscribe(data=>{
      this.DepartmentList=data;
    });
  }

}
