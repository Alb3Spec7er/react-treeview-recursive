export default {
    mock1: [{
        "id": 0,
        "name": "root",
        "parentId": null,
        "children": [{
            "id": 1,
            "name": "A",
            "parentId": 1
        }, {
            "id": 2,
            "name": "B",
            "parentId": 1,
            "children": [{
                "id": 3,
                "name": "C",
                "parentId": 2
            }, {
                "id": 4,
                "name": "D",
                "parentId": 2,
                "children": [{
                    "id": 5,
                    "name": "E",
                    "parentId": 4
                }]
            }, {
                "id": 6,
                "name": "F",
                "parentId": 2,
                "children": [{
                    "id": 7,
                    "name": "G",
                    "parentId": 4
                }]
            }]
        }]
    }],

    mock2:
    [
    {
      "id": 2,
      "name": "Fruits",
      "children": [
        {
          "id": 3,
          "name": "Apple",
          "property": "Juicy"
        },
        {
          "id": 4,
          "name": "Cherry",
          "property": "Small"
        },
        {
          "id": 5,
          "name": "Water melon",
          "property": "Oval"
        }
      ]
    },
    {
      "id": 6,
      "name": "Cars",
      "children": [
        {
          "id": 7,
          "name": "Ford",
          "property": "Economic"
        },
        {
          "id": 8,
          "name": "Audi",
          "property": "Expensive"
        },
        {
          "id": 10016,
          "name": "Tesla",
          "property": "Futuristic"

        }
      ]
    },
    {
      "id": 9,
      "name": "Names",
      "children": [
        {
          "id": 10,
          "name": "Boys",
          "children": [
                {
                  "id": 163,
                  "name": "Bob",
                  "property": "Young"
                },
                {
                  "id": 164,
                  "name": "Tom",
                  "property": "Old"
                }
              ]
        },
        {
          "id": 11,
          "name": "Girls",
          "children": [
                {
                  "id": 165,
                  "name": "Alice",
                  "property": "High"
                },
                {
                  "id": 164,
                  "name": "Tina",
                  "property": "Tall"
                }
              ]
        }
      ]

    }]

};
