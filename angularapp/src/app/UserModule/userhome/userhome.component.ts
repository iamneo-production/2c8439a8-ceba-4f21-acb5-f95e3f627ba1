import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { PropertydataService } from 'src/app/service/propertydata.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
 
  searchResults: Property[] = [];
  propertylist: Property[] = [];

  property: Property= {
    id: '',
    title: '',
    description: '',
    address: '',
    price: '',
    type: '',
    location: '',
    status: '',
    imageUrls: '',
    videoUrls: '',
    features: '',
    maplocation:'',
    floor:'',
    amenities:'',
    agents: '',
    agentid:''
  };


  noDataFound: boolean = false;
  searchQuery: string = '';

  ngOnInit(): void{
   this.getAllProperties();
   
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['searchQuery'] || '';
      this.filterProperties();
    });

  }
  constructor(
    private propertydataService: PropertydataService, 
    private router: Router,
    private route:ActivatedRoute) {}
  
  getAllProperties(){
    this.propertydataService.getProperties().subscribe(data=>{
      this.propertylist= data;
    })
  }

  getAllProperty(id:any){
    this.propertydataService.getProperty(id).subscribe(data=>{
      this.property=data;
    })
  }

  propertyDetails(id:any){
   this.router.navigate(['details',id]);
  }
  
  filterProperties(): void {
    if (this.searchQuery) {
      this.propertylist = this.propertylist.filter(property =>
        (property.location.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          property.type.toLowerCase().includes(this.searchQuery.toLowerCase()))
      );
    } else {
      this.property = this.property;
    }

    this.noDataFound = this.propertylist.length === 0;
  }
}
