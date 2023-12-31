import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private Id: string | null = "0";
  @Input()
  photoCover: string = "";
  @Input()
  contentTitle: string = "";
  @Input()
  contentDescription: string = "";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (value) => {
      this.Id = value.get("id");
    })

    this.setValuesToComponent(this.Id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id === this.Id)[0];

    this.photoCover = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }

}
