import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent {
  title = 'Sortable Demo';

  groups = [];
  ungroupedContacts = [];

  constructor() {
    this.groups = this.getContacts()
      .filter(c => c.group != "Ungrouped");

    this.groups.push({
      group: "Add new group",
      people: []
    })

    this.ungroupedContacts = this.getContacts()
      .filter(c => c.group == "Ungrouped")[0].people;
  }

  public onAdd(args, item) {
    console.log("Added")

    if (item.group == "Add new group") {

      item.group = item.people + args.dataItem.name + "'s Group"

      this.groups.push({
        group: "Add new group",
        people: []
      })
    }
  }


  private getContacts() {
    return [
      {
        group: "Friends",
        people: [
          {
            id: 6,
            name: "Todd Motto",
            location: "London"
          },
          {
            id: 9,
            name: "Ed Charbeneau",
            location: "Louisville"
          }
        ]
      },
      {
        group: "Teams",
        people: [
          {
            id: 3,
            name: "Mary Jane",
            location: "Sofia"
          },
          {
            id: 4,
            name: "Linda Belcher",
            location: "Orlando"
          }
        ]
      },
      {
        group: "Ungrouped",
        people: [
          {
            id: 1,
            name: "Sarah Smith",
            location: "New York"
          },
          {
            id: 2,
            name: "Ron Burgundy",
            location: "Boston"
          },
          {
            id: 5,
            name: "Morty Smith",
            location: "Boston"
          },
          {
            id: 7,
            name: "Rick Sanchez",
            location: "Boston"
          }
        ]
      }
    ];
  }
}