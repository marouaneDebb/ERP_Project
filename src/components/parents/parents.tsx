import React, { useEffect, useRef, useState } from "react";
import {
  IonApp,
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  add,
  addCircle,
  arrowDown,
  arrowDownCircle,
  arrowDownCircleOutline,
  arrowDownOutline,
  ellipsisHorizontal,
  ellipsisVertical,
  star,
} from "ionicons/icons";
import SideMenu from "../sidemenu/sidemenu";
import Parent from "./parent/parent";
import "./parents.css";

const Parents: React.FC = () => {
  let items = [
    {
      firstname: "marouane",
      lastname: "debbagh",
      img: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&uid=R23226604&ga=GA1.1.1704353364.1699547396&semt=sph",
    },
    {
      firstname: "marouane",
      lastname: "debbagh",
      img: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&uid=R23226604&ga=GA1.1.1704353364.1699547396&semt=sph",
    },
    {
      firstname: "marouane",
      lastname: "debbagh",
      img: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&uid=R23226604&ga=GA1.1.1704353364.1699547396&semt=sph",
    },
    {
      firstname: "marouane",
      lastname: "debbagh",
      img: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&uid=R23226604&ga=GA1.1.1704353364.1699547396&semt=sph",
    },
    {
      firstname: "marouane",
      lastname: "debbagh",
      img: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&uid=R23226604&ga=GA1.1.1704353364.1699547396&semt=sph",
    },
  ];

  return (
    <div className="parents_page">
      <div className="row">
        <div className="sidemenu col-2">
          <SideMenu />
        </div>

        <div className="medSection col-10">
          <div className="parent_title row"></div>
          <div className="parent_search row">
            <div className="seach col-6">
              <IonSearchbar className="search_bar"></IonSearchbar>
            </div>
            <div className="options col-6">
              <IonButton shape="round" className="text_2">
                newest
                <svg
                  width="21"
                  height="14"
                  viewBox="0 0 21 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg_icon"
                >
                  <path
                    d="M20.676 2.48803L11.236 12.952C10.852 13.4 10.148 13.4 9.76403 12.952L0.324027 2.48803C-0.283973 1.81603 0.164026 0.728027 1.06003 0.728027L19.94 0.728027C20.836 0.728027 21.284 1.81603 20.676 2.48803Z"
                    fill="#4D44B5"
                  />
                </svg>
              </IonButton>
              <IonButton shape="round" className="text_1">
                <IonIcon slot="start" icon={add}></IonIcon>
                add parent
              </IonButton>
            </div>
          </div>
          <Parent items={items} />
        </div>
      </div>
    </div>
  );
};

export default Parents;
