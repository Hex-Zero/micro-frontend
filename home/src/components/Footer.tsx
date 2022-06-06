import * as React from "react";

export interface IFooterProps {}

export default class Footer extends React.PureComponent<IFooterProps> {
  public render() {
    return (
      <div className="p-5 bg-blue-500 text-white text-3xl text-bold">
        Only the best spinner in the world
      </div>
    );
  }
}
