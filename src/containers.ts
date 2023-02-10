import htmlWireFrame from "./wireframe.json";

export class Containers {

  constructor() {

    let child: HTMLElement;
    let getKey: string[];

    htmlWireFrame.html.forEach((element: any, index: number) => {/**A*/
      getKey = Object.keys(element.parent);//**B */

      const parent = document.createElement(element.parent.type);/**C*/

      getKey[1] === "id"//**D*/
        ? parent.id = element.parent.id
        : parent.className = element.parent.class;

      document.body.appendChild(parent);//**E*/

      if (htmlWireFrame.html[index].hasOwnProperty("child")) {
        element.child.forEach((inner: any, index: number) => {
          child = document.createElement(inner.type);
          getKey[1] === "id"
            ? child.id = inner.id
            : child.id = inner.class;
          parent.appendChild(child);
        });
      }

      if (htmlWireFrame.html[index].hasOwnProperty("innerChild")) {
        this.createInnerChild(element.innerChild, child);
      }

    }) //END forEach



  } //END constructor

  createInnerChild(e: string[], p: HTMLElement) {
    e.forEach((inner: any, index: number) => {

      let getKeyInner = Object.keys(inner);

      const div = document.createElement(inner.type);

      getKeyInner[1] == "id"
        ? div.id = inner.id
        : div.className = inner.class;

      p.appendChild(div);

    })
  }

} //END Class 