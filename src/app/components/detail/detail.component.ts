import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataService } from "../../service/data.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})


export class DetailComponent implements OnInit {
  indexList = 0;
  room: string;
  detailParty: any;

  public detailAll: any[];

  constructor(private router: Router,
              public dataService: dataService) {
  }

  ngOnInit() {
    this.showData();
  }

  showData() {
    const i = ELEMENT_DATA[this.indexList];
    this.room = i.room;
    this.detailParty = i.detailParty;
  }

  nextClass() {
    this.indexList += 1;
    if (this.indexList <= ELEMENT_DATA.length - 1) {
      this.showData();
    } else {
      this.dataService.sendDataToBE({
        class: this.dataService.class + '.' + this.dataService.room,
        data: this.dataService.selectedList
      }).subscribe(() => {
        this.dataService.reset()
      }, (err) => {
        console.info('err', err);
      });
      this.router.navigate(['/success']);
    }
  }

  previousClass() {
    if (this.indexList > 0) {
      this.indexList -= 1;
      this.showData()
    }
  }

  select(partyName, index) {
    this.dataService.selectedList[index] = partyName;
    console.info('this.selectedList', this.dataService.selectedList);
  }
}


export interface ElectionElement {
  room: string;
  detailParty: any;
}

const ELEMENT_DATA: ElectionElement[] = [
  {
    room: 'ป.4/1',
    detailParty: [{
      name: 'ด.ญ.เมฐิต์รินทร์ วรวิศุทธิกูล',
      img: '../../../assets/img/1/15.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ช.เจตนิพิฐ กิตติขจรอัศวโชติ',
        img: '../../../assets/img/2/15.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ญ.ปาณัทดา แสงน้ำเพชร',
        img: '../../../assets/img/3/15.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.4/2',
    detailParty: [{
      name: 'ด.ญ.กุลสินี โพธิเสน',
      img: '../../../assets/img/1/16.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ญ.สวรส โกสลานนท์',
        img: '../../../assets/img/2/16.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ช.เจตนิพิฐ เลาหเรืองรองกุล',
        img: '../../../assets/img/3/16.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.4/3',
    detailParty: [{
      name: 'ด.ช.กวินท์วิชญ์ ลีลาศรีสง่า',
      img: '../../../assets/img/1/17.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ญ.ณภัทรารัตน์ สุรเชษฐพาณิช',
        img: '../../../assets/img/2/17.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ญ.พรรณวลัย เพ็งพานิชภักดี',
        img: '../../../assets/img/3/17.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.4/4',
    detailParty: [{
      name: 'ด.ญ.โสพิชา งามสวย',
      img: '../../../assets/img/1/18.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ช.ปฤน อนันทวงศ์',
        img: '../../../assets/img/2/18.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ญ.อาคิรา ลิขิตเรืองศิลป์',
        img: '../../../assets/img/3/18.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.4/5',
    detailParty: [{
      name: 'ด.ช.ชยพล นนทสูติ',
      img: '../../../assets/img/1/19.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ช.รัฐวิชญ์ ลือชูวงศ์',
        img: '../../../assets/img/2/19.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ช.ธีรพัฒน์ เพิ่มพูลโชคคณา',
        img: '../../../assets/img/3/19.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.4/6',
    detailParty: [{
      name: 'ด.ญ.อิศราภรณ์ บุญญวรรณรัศมิ์',
      img: '../../../assets/img/1/20.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ช.ณรัฐ ชัยพรหมประสิทธิ์',
        img: '../../../assets/img/2/20.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ญ.ชัญญา ธาราหิรัญโชติ',
        img: '../../../assets/img/3/20.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.4/7',
    detailParty: [{
      name: 'ด.ญ.ณสิกาณฐ์ ตัณฑวิเชฐ',
      img: '../../../assets/img/1/21.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ช.รณภัทร ศรีวรวิไล',
        img: '../../../assets/img/2/21.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ญ.พิชามญชุ์ สว่างคุณ',
        img: '../../../assets/img/3/21.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.5/1',
    detailParty: [{
      name: 'ด.ญ.ธามาศร์ สมิตะลัมพะ',
      img: '../../../assets/img/1/8.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ญ.ศิศกร สุนทรวิภาต',
        img: '../../../assets/img/2/8.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ญ.อิสราภา มังกรพานิชย์',
        img: '../../../assets/img/3/8.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.5/2',
    detailParty: [{
      name: 'ด.ช.พรภวิษย์ สวิตพิชยวงศ์',
      img: '../../../assets/img/1/9.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ช.ปณิธ อุทัยสุข',
        img: '../../../assets/img/2/9.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ญ.ณภัชกมล ธำรงโชติคุณ',
        img: '../../../assets/img/3/9.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.5/3',
    detailParty: [{
      name: 'ด.ช.แทนธรรม จิตธรรม',
      img: '../../../assets/img/1/10.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ญ.ภคิณี วัฒนายากร',
        img: '../../../assets/img/2/10.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ช.ณฐกร คุ้มมั่น',
        img: '../../../assets/img/3/10.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.5/4',
    detailParty: [{
      name: 'ด.ช.ชวัลวิทย์ ตั้งวงศ์ศิริ',
      img: '../../../assets/img/1/11.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ช.เดชจรัส สุวรรณกร',
        img: '../../../assets/img/2/11.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ญ.ดากานดา โกเมนเอก',
        img: '../../../assets/img/3/11.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.5/5',
    detailParty: [{
      name: 'ด.ช.วรธน วิวัฒน์วรพันธ์',
      img: '../../../assets/img/1/12.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ช.ธนพงษ์ เพชรสุก',
        img: '../../../assets/img/2/12.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ญ.วริณศยา เสรีภาพงศ์',
        img: '../../../assets/img/3/12.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.5/6',
    detailParty: [{
      name: 'ด.ช.ศรุต วรรณสุทธิ์',
      img: '../../../assets/img/1/13.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ช.อิงค์มินด์ แกนบาเธอร์',
        img: '../../../assets/img/2/13.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ช.ธมมเดช วัฒนสาธิตอาภา',
        img: '../../../assets/img/3/13.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.5/7',
    detailParty: [{
      name: 'ด.ช.วิญญ์ ราชากรกิจ',
      img: '../../../assets/img/1/14.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ญ.ปพิชญา คุ้มเมธา',
        img: '../../../assets/img/2/14.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ญ.กานต์สินี จักรเสมาสถิตกุล',
        img: '../../../assets/img/3/14.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.6/1',
    detailParty: [{
      name: 'ด.ญ.รุ่งอรุณ อัศวลาภ',
      img: '../../../assets/img/1/1.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ช.พรรฐรวิญ ศิลป์พิทักษ์สกุล',
        img: '../../../assets/img/2/1.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ญ.ไอริณรยาโสตางกูร',
        img: '../../../assets/img/3/1.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.6/2',
    detailParty: [{
      name: 'ด.ช.ฐิติวัสส์ รัตนภิรมย์',
      img: '../../../assets/img/1/2.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ญ.ธันยนันท์ พูนบันดาลสิน',
        img: '../../../assets/img/2/2.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ญ.ภาริศา ฤกษ์นิมิตร',
        img: '../../../assets/img/3/2.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.6/3',
    detailParty: [{
      name: 'ด.ญ.พัทธ์ธดา เลิศชัยประเสริฐ',
      img: '../../../assets/img/1/3.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ญ.อบอุ่น มนัสนยกรณ์',
        img: '../../../assets/img/2/3.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ญ.ณัฏฐณิชา เลิศศรีสกุลรัตน์',
        img: '../../../assets/img/3/3.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.6/4',
    detailParty: [{
      name: 'ด.ญ.ธนัชญา โอภานุรักษ์',
      img: '../../../assets/img/1/4.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ญ.ขวัญหทัย อเนกสุข',
        img: '../../../assets/img/2/4.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ช.กฤตยชญ์ เชื้อศิริ',
        img: '../../../assets/img/3/4.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.6/5',
    detailParty: [{
      name: 'ด.ช.วริช สีบัว',
      img: '../../../assets/img/1/5.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ช.วินทร์ อดิศยเทพกุล',
        img: '../../../assets/img/2/5.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ช.ธนิก ศิริสุนทรไพบูลย์',
        img: '../../../assets/img/3/5.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.6/6',
    detailParty: [{
      name: 'ด.ช.กลย์ทัต เจริญชัย',
      img: '../../../assets/img/1/6.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ช.กันดิศ กรมาทิตย์สุข',
        img: '../../../assets/img/2/6.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ช.สุวพิชญ์ ทิมสถิตย์',
        img: '../../../assets/img/3/6.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  },
  {
    room: 'ป.6/7',
    detailParty: [{
      name: 'ด.ญ.ไปรยา โกมลารชุน',
      img: '../../../assets/img/1/7.JPG',
      partyName: 'พรรคหมายเลข 1'
    },
      {
        name: 'ด.ญ.ปวัน ศรีวนิชย์',
        img: '../../../assets/img/2/7.JPG',
        partyName: 'พรรคหมายเลข 2'
      },
      {
        name: 'ด.ญ.ชกร วิศวพลานนท์',
        img: '../../../assets/img/3/7.JPG',
        partyName: 'พรรคหมายเลข 3'
      }
    ]
  }
];

