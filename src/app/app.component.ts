import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: any[];
  constructor(db:AngularFireDatabase){
    db.list('/').valueChanges()
      .subscribe(courses =>{
        console.log(courses);
      })

  }
}
