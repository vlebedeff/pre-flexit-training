import * as React from "react";

import { Book } from "../../models/books/book";

import { SpreadComponent } from "../spread/spread";
import { ToolboxComponent } from "./toolbox/toolbox";

interface IEditorProps {

}

export class EditorComponent extends React.Component<IEditorProps, {}> {
  render()  {
    var book = new Book();

    return (
      <div className="c-editor">
        <div className="c-editor--side">
          <ToolboxComponent />
        </div>
        <div className="c-editor--main">
          <div className="c-editor--main--title-bar">
            title-bar
          </div>
          <div className="c-editor--main--work-area">
            <div className="c-editor--main--work-area--target">
              <SpreadComponent spread={book.coverSpread} />
            </div>
          </div>
          <div className="c-editor--main--nav-bar">
            nav-bar
          </div>
        </div>
      </div>
    );
  }
};